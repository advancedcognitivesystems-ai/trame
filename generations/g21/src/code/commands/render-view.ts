// A view, rendered for the terminal (in Markdown with --format md, in JSON with --format json).

import { ViewScope, type Document, type ProvidedBy, type View } from "../../../trame/kernel"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as ViewsApi } from "../engine/views"
import type { Api as MarkdownApi } from "../rendering/markdown"
import type { Api as TextApi } from "../rendering/text"

export interface Deps {
  json: { indentation: number }
  preparation: PreparationApi
  views: ViewsApi
  markdown: MarkdownApi
  text: TextApi
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps) => {
  const { prepare, refuse, views, markdownContext } = deps.preparation
  const { sortedViews } = deps.views
  const { toMarkdown } = deps.markdown
  const { toText } = deps.text
  const { terminal, messages } = deps

  async function view(o: Options, name: string | undefined, arg: string | undefined) {
    const { comp } = await prepare(o)
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
    if (o.format === "json") terminal.write(JSON.stringify(d, null, deps.json.indentation))
    else if (o.format === "md") terminal.write(toMarkdown(d, markdownContext(views(o, comp))))
    else terminal.writeRaw(toText(d))
  }

  return { view }
}

export type Api = ReturnType<typeof body>
export default body
