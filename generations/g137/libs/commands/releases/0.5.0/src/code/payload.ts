// trame payload: the project at hand in the intermediate format (for trame dev and the export), at the day its line says,
// and with --all at each date a page offers. Each document is rendered for the files, for the terminal and for the page,
// by libs/documents in each audience's syntax: the page redoes none of them. Another date's documents as today's are
// left to today's; a day of history carries only its documents and figures.

import { DocumentName, ViewGroup } from "#trame/kernel"
import type { BodyOf, CompiledProject, Document, Payload as Compiled, Places } from "#trame/kernel"
import type { CommandRequest } from "#trame/kinds/entry-point"
import type { Payload } from "../commands"

const body: BodyOf<typeof Payload> = ({ project, written, printed, page, same, exit }) => async (req) => {
  const { all, history } = (req as CommandRequest).body?.options ?? {}
  const renders = (docs: readonly Document[], places: Places): Compiled["renders"] =>
    Object.fromEntries(docs.map((d) => [d.id, { markdown: written.render(d, places), text: printed.render(d), html: page.render(d) }]))
  const compiled = await project.compiled()
  const { documents, places } = await compiled.documents()
  const first: Compiled = { ...(await compiled.payload(documents)), renders: renders(documents, places) }
  if (all === undefined) return { status: exit.success, body: [JSON.stringify(first)] }
  /**
   * Another date's payload: its documents as today's left to today's, only the others rendered. A day of history only
   * carries its documents and figures, not the views of each node, the snapshot nor the outputs for tools.
   */
  const atAnotherDate = async (x: CompiledProject, historyOnly: boolean): Promise<Compiled> => {
    const theirs = await x.documents({ perNode: !historyOnly })
    const made = await x.payload(theirs.documents)
    const daily = (doc: Document) => doc.id !== DocumentName.snapshot && doc.group !== ViewGroup.node
    const p = historyOnly ? { ...made, machine: {}, documents: made.documents.filter(daily) } : made
    const kept = same.asToday(p, first)
    const own = p.documents.filter((doc) => !kept.has(doc.id))
    return { ...p, documents: own, renders: renders(own, theirs.places), same: { date: first.date, order: p.documents.map((doc) => doc.id) } }
  }
  const dates: { date: string; payload?: Compiled; error?: string }[] = [{ date: compiled.today, payload: first }]
  // The dates where the graph changes, and with --history the last days something was given.
  const changes = new Set(first.candidates)
  for (const date of compiled.candidates(history !== undefined).filter((d) => d !== compiled.today)) {
    try {
      dates.push({ date, payload: await atAnotherDate(await compiled.at(date), !changes.has(date)) })
    } catch (e) {
      dates.push({ date, error: (e as Error).message })
    }
  }
  return { status: exit.success, body: [JSON.stringify(dates.sort((a, b) => a.date.localeCompare(b.date)))] }
}

export default body
