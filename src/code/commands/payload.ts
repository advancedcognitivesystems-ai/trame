// trame payload: the compiled graph in the intermediate format (for trame dev and the export), on today's date,
// and with --all on each date where it may change. The code is read and run only once.
// Each document is also rendered for the files, for the terminal and for the page, by the engine's renderer in each
// audience's syntax: the page redoes none of them.

import { DocumentName, ViewGroup, movedTo } from "../../../trame/kernel"
import type { Document, Payload } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi, Ctx } from "./preparation"
import type { Api as PayloadApi } from "../engine/payload"
import type { Api as RenderingApi } from "../rendering/document"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  payload: PayloadApi
  /** The renderer of the documents written as files. */
  files: RenderingApi
  /** The renderer of what the terminal shows. */
  screen: RenderingApi
  /** The renderer of the page. */
  pageRendering: RenderingApi
  terminal: Terminal
}

/**
 * A date's documents that are as today's but for the date of the graph: written once, on today's, with the order of them
 * all, so that a page of several dates carries what differs only. The page moves them back to their date.
 */
const sameAs = (p: Payload, today: Payload): Set<string> => {
  const theirs = new Map(today.documents.map((doc) => [doc.id, movedTo(JSON.stringify(doc), today.date, p.date, p.language)]))
  return new Set(p.documents.filter((doc) => theirs.get(doc.id) === JSON.stringify(doc)).map((doc) => doc.id))
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, at, views, renderingContext } = deps.preparation
  const renders = (docs: Document[], compiled: Ctx): Payload["renders"] => {
    const ctx = renderingContext(docs, compiled)
    return Object.fromEntries(docs.map((d) => [d.id, { markdown: deps.files.render(d, ctx), text: deps.screen.render(d), html: deps.pageRendering.render(d) }]))
  }
  const makePayload: typeof deps.payload.makePayload = (...a) => {
    const p = deps.payload.makePayload(...a)
    const [c, comp] = a
    return { ...p, renders: renders(p.documents, { c, comp }) }
  }
  /**
   * Another date's payload: its documents as today's left to today's, only the others rendered. A day of history only
   * carries its documents and figures, not the views of each node, the snapshot nor the outputs for tools (at the dates
   * the graph changes, they are all there).
   */
  const atAnotherDate = (x: Ctx, today: Payload, historyOnly: boolean): Payload => {
    const made = deps.payload.makePayload(x.c, x.comp, views(o, x.comp, { perNode: !historyOnly }))
    const daily = (doc: Document) => doc.id !== DocumentName.snapshot && doc.group !== ViewGroup.node
    const p = historyOnly ? { ...made, machine: {}, documents: made.documents.filter(daily) } : made
    const same = sameAs(p, today)
    const own = p.documents.filter((doc) => !same.has(doc.id))
    const ctx = renderingContext(p.documents, x)
    return {
      ...p,
      documents: own,
      renders: Object.fromEntries(own.map((d) => [d.id, { markdown: deps.files.render(d, ctx), text: deps.screen.render(d), html: deps.pageRendering.render(d) }])),
      same: { date: today.date, order: p.documents.map((doc) => doc.id) },
    }
  }
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const { c, comp } = await prepare(o)
  const first = makePayload(c, comp, views(o, comp))
  if (!o.all) {
    deps.terminal.writeRaw(JSON.stringify(first))
    return { status: deps.exitStatus.success, body: undefined }
  }
  const dates: { date: string; payload?: Payload; error?: string }[] = [{ date: o.today, payload: first }]
  // The dates where the graph changes, and with --history the last days something was given.
  const changes = new Set(first.candidates)
  for (const date of deps.payload.candidateDates(comp, o.history).filter((d) => d !== o.today)) {
    try {
      dates.push({ date, payload: atAnotherDate(await at(o, date), first, !changes.has(date)) })
    } catch (e) {
      dates.push({ date, error: (e as Error).message })
    }
  }
  deps.terminal.writeRaw(JSON.stringify(dates.sort((a, b) => a.date.localeCompare(b.date))))
  return { status: deps.exitStatus.success, body: undefined }
}

export default body
