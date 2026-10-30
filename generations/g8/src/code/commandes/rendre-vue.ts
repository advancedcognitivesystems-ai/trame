// Une vue, rendue pour le terminal (en Markdown avec --format md, en JSON avec --format json).

import type { Document, View } from "../../../trame/kernel"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as VuesApi } from "../moteur/vues"
import type { Api as MarkdownApi } from "../rendu/markdown"
import type { Api as TexteApi } from "../rendu/texte"

export interface Deps {
  json: { indentation: number }
  preparation: PreparationApi
  vues: VuesApi
  markdown: MarkdownApi
  texte: TexteApi
  terminal: Terminal
}

const corps = (deps: Deps) => {
  const { prepare, refuse, views, markdownContext } = deps.preparation
  const { sortedViews } = deps.vues
  const { toMarkdown } = deps.markdown
  const { toText } = deps.texte
  const { terminal } = deps

  async function view(o: Options, name: string | undefined, arg: string | undefined) {
    const { comp } = await prepare(o)
    const def = sortedViews().find((v) => v.name === name)
    if (!def) return refuse(o, [`Vue inconnue : ${name ?? "(aucune)"}. Vues : ${sortedViews().map((v) => v.name).join(", ")}`])
    let runArg: { module?: string; node?: View } = {}
    if (def.per === "nœud") {
      const node = arg ? comp.node(arg).first() : undefined
      if (!node) return refuse(o, [`Nœud inconnu : ${arg ?? "(aucun)"}`])
      if (def.applies && !def.applies(node, comp)) refuse(o, [`La vue « ${def.label} » ne s'applique pas à ${node.id}.`])
      runArg = { node }
    } else if (def.per === "module") {
      if (!arg || !comp.modules().some((m) => m.id === arg)) refuse(o, [`Module inconnu : ${arg ?? "(aucun)"}. Modules : ${comp.modules().map((m) => m.id).join(", ")}`])
      runArg = { module: arg }
    }
    const out = def.run(comp, runArg)
    const d: Document = { id: def.name, view: def.name, group: def.group, title: out.title, intro: out.intro, blocks: out.blocks, arg }
    if (o.format === "json") terminal.ecrire(JSON.stringify(d, null, deps.json.indentation))
    else if (o.format === "md") terminal.ecrire(toMarkdown(d, markdownContext(views(o, comp))))
    else terminal.ecrireBrut(toText(d))
  }

  return { view }
}

export type Api = ReturnType<typeof corps>
export default corps
