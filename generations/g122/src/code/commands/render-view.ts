// A view, rendered for the terminal (in Markdown with --format md, in JSON with --format json).

import { ViewScope, type Document, type ProvidedBy, type View } from "../../../trame/kernel"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as ViewsApi } from "../engine/views"
import type { Api as RenderingApi } from "../rendering/document"
import type { TrameCommands } from "../../conventions"

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
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps) => {
  const { line } = deps
  const { prepare, refuse, views, renderingContext } = deps.preparation
  const { sortedViews } = deps.views
  const { terminal, messages } = deps

  async function view(o: Options, name: string | undefined, arg: string | undefined) {
    const { c, comp } = await prepare(o)
    const def = sortedViews().find((v) => v.name === name)
    if (!def) return refuse(o, [messages.unknownView(name, sortedViews().map((v) => v.name))])
    let runArg: { module?: string; node?: View } = {}
    if (def.per === ViewScope.node) {
      const node = arg ? comp.node(arg).first() : undefined
      if (!node) return refuse(o, [messages.unknownNode(arg)])
      if (def.applies && !def.applies(node, comp)) refuse(o, [messages.viewDoesNotApply(def.label, node.id)])
      runArg = { node }
    } else if (def.per === ViewScope.module) {
      if (!arg || !comp.modules().some((m) => m.id === arg)) refuse(o, [messages.unknownModule(arg, comp.modules().map((m) => m.id))])
      runArg = { module: arg }
    }
    const out = def.run(comp, runArg)
    const d: Document = { id: def.name, view: def.name, group: def.group, title: out.title, intro: out.intro, blocks: out.blocks, arg }
    if (o.format === line.json) terminal.write(JSON.stringify(d, null, deps.json.indentation))
    else if (o.format === line.markdown) terminal.write(deps.files.render(d, renderingContext(views(o, comp), { c, comp })))
    else terminal.writeRaw(deps.screen.render(d))
  }

  return { view }
}

export type Api = ReturnType<typeof body>
export default body
