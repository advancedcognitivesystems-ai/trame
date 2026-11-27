// A view, rendered for the terminal (in Markdown with --format md, in JSON with --format json).

import { ViewRefusal, type ProvidedBy, type ViewAnswer } from "../../../trame/kernel"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as ViewsApi } from "../engine/views"
import type { Api as RenderingApi } from "#documents/code/rendering/document"
import type { TrameCommands } from "../../conventions"
import type { Texts } from "#std/algebra"

export interface Deps {
  line: ProvidedBy<typeof TrameCommands>
  json: { indentation: number }
  preparation: PreparationApi
  views: ViewsApi
  /** The renderer of the documents written as files (--format md). */
  files: RenderingApi
  /** The renderer of what the terminal shows. */
  screen: RenderingApi
  terminal: Terminal
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps) => {
  const { line } = deps
  const { prepare, refuse, api } = deps.preparation
  const { empty } = deps.texts
  const { sortedViews } = deps.views
  const { terminal, messages } = deps

  /** Why a view gives no document, in the engine's words. */
  const refusal = (a: Extract<ViewAnswer, { refused: ViewRefusal }>): string => {
    switch (a.refused) {
      case ViewRefusal.unknownView: return messages.unknownView(a.asked, [...a.known])
      case ViewRefusal.unknownNode: return messages.unknownNode(a.asked)
      case ViewRefusal.notApplicable: return messages.viewDoesNotApply(a.view ?? empty, a.asked ?? empty)
      case ViewRefusal.unknownModule: return messages.unknownModule(a.asked, [...a.known])
    }
  }

  async function view(o: Options, name: string | undefined, arg: string | undefined) {
    const ctx = await prepare(o)
    if (name === undefined) return refuse(o, [messages.unknownView(name, sortedViews().map((v) => v.name))])
    const project = api({ o, ctx }).prepared()!
    const answer = await project.view(name, arg)
    if (answer.refused !== undefined) return refuse(o, [refusal(answer)])
    const d = answer.document
    if (o.format === line.json) terminal.write(JSON.stringify(d, null, deps.json.indentation))
    else if (o.format === line.markdown) terminal.write(deps.files.render(d, (await project.documents()).places))
    else terminal.writeRaw(deps.screen.render(d))
  }

  return { view }
}

export type Api = ReturnType<typeof body>
export default body
