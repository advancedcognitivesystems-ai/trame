// trame payload: the compiled graph in the intermediate format (for trame dev and the export), on today's date,
// and with --all on each date where it may change. The code is read and run only once.
// Each document is also rendered for the files, for the terminal and for the page, by the engine's renderer in each
// audience's syntax: the page redoes none of them.

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
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const { c, comp } = await prepare(o)
  const first = makePayload(c, comp, views(o, comp))
  if (!o.all) {
    deps.terminal.writeRaw(JSON.stringify(first))
    return { status: deps.exitStatus.success, body: undefined }
  }
  const dates: { date: string; payload?: Payload; error?: string }[] = [{ date: o.today, payload: first }]
  for (const date of first.candidates.filter((d) => d !== o.today)) {
    try {
      const x = await at(o, date)
      dates.push({ date, payload: makePayload(x.c, x.comp, views(o, x.comp)) })
    } catch (e) {
      dates.push({ date, error: (e as Error).message })
    }
  }
  deps.terminal.writeRaw(JSON.stringify(dates.sort((a, b) => a.date.localeCompare(b.date))))
  return { status: deps.exitStatus.success, body: undefined }
}

export default body
