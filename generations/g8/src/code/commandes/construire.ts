// trame build : vérifie, écrit docs/ en Markdown, graph.json et snapshot.json, affiche le bilan.

import type { Traitement } from "../../../kinds/point-entree"
import type { Chemins, Disposition, EcritureFichiers, Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../moteur/machine"
import type { Api as MarkdownApi } from "../rendu/markdown"
import type { Api as TexteApi } from "../rendu/texte"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  disposition: Disposition
  preparation: PreparationApi
  machine: MachineApi
  markdown: MarkdownApi
  texte: TexteApi
  ecriture: EcritureFichiers
  chemins: Chemins
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => {
  const { options, prepare, views, markdownContext } = deps.preparation
  const { graphJson, snapshotJson } = deps.machine
  const { writeFileSync, mkdirSync } = deps.ecriture
  const { join } = deps.chemins
  return async (req) => {
    const o = options(req.params.commande, (req.corps as { args: string[] }).args)
    const { c, comp } = await prepare(o)
    const docs = views(o, comp)
    const ctx = markdownContext(docs)
    const d = deps.disposition
    mkdirSync(join(o.root, d.documents), { recursive: true })
    const written: string[] = []
    for (const d of docs.filter((x) => x.file)) {
      writeFileSync(join(o.root, d.file!), deps.markdown.toMarkdown(d, ctx))
      written.push(d.file!)
    }
    writeFileSync(join(o.root, d.graphe), graphJson(c))
    writeFileSync(join(o.root, d.instantane), snapshotJson(c))
    written.push(d.graphe, d.instantane)
    for (const d of docs.filter((x) => x.group === "bilan")) deps.terminal.ecrire(deps.texte.toText(d))
    deps.terminal.ecrire(`écrit : ${written.join(", ")}`)
    return { statut: deps.sortie.succes, corps: written }
  }
}

export default corps
