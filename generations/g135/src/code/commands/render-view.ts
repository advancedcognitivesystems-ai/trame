// A view, written in the format the line names (std's --format, since g135): the first format Trame chose (the
// terminal's text) when it names none, Markdown with where each card is, JSON. Why a view gives no document is said in
// the words of libs/commands, whose view says it alike.

import { ViewRefusal, type ProvidedBy } from "../../../trame/kernel"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as ViewsApi } from "../engine/views"
import type { AnswerFormat, LineWords } from "#std/tooling"
import type { ViewRefused } from "#commands/commands"

export interface Deps {
  preparation: PreparationApi
  views: ViewsApi
  /** The formats Trame chose for the documents a command answers, its default first. */
  formats: readonly AnswerFormat[]
  refused: ProvidedBy<typeof ViewRefused>
  terminal: Terminal
  lineWords: ProvidedBy<typeof LineWords>
}

const body = (deps: Deps) => {
  const { prepare, refuse, api } = deps.preparation
  const { sortedViews } = deps.views
  const { terminal, formats, refused, lineWords } = deps

  async function view(o: Options, name: string | undefined, arg: string | undefined) {
    const ctx = await prepare(o)
    if (name === undefined) return refuse(o, [refused({ refused: ViewRefusal.unknownView, known: sortedViews().map((v) => v.name) })])
    const project = api({ o, ctx }).prepared()!
    const answer = await project.view(name, arg)
    if (answer.refused !== undefined) return refuse(o, [refused(answer)])
    const [first] = formats
    const format = o.format === undefined ? first : formats.find((f) => f.word === o.format)
    if (!format) return refuse(o, [o.format === undefined ? lineWords.formatNone() : lineWords.formatUnknown(o.format, formats.map((f) => f.word))])
    const written = await format.write({ documents: [answer.document], places: async () => (await project.documents()).places })
    for (const text of written) terminal.write(text)
  }

  return { view }
}

export type Api = ReturnType<typeof body>
export default body
