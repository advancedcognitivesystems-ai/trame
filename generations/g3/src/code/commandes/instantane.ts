// trame snapshot : snapshot.json, et les documents de l'instantané si une vue en produit.

import type { Traitement } from "../../../kinds/point-entree"
import type { Chemins, Disposition, EcritureFichiers, Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../moteur/machine"
import type { Api as MarkdownApi } from "../rendu/markdown"

export interface Deps {
  disposition: Disposition
  preparation: PreparationApi
  machine: MachineApi
  markdown: MarkdownApi
  ecriture: EcritureFichiers
  chemins: Chemins
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => async (req) => {
  const { options, prepare, views, markdownContext } = deps.preparation
  const { join } = deps.chemins
  const o = options(req.params.commande, (req.corps as { args: string[] }).args)
  const { c, comp } = await prepare(o)
  const docs = views(o, comp)
  deps.ecriture.writeFileSync(join(o.root, deps.disposition.instantane), deps.machine.snapshotJson(c))
  const written = [deps.disposition.instantane]
  for (const d of docs.filter((x) => x.view === "instantane" && x.file)) {
    deps.ecriture.writeFileSync(join(o.root, d.file!), deps.markdown.toMarkdown(d, markdownContext(docs)))
    written.push(d.file!)
  }
  deps.terminal.ecrire(`instantané du ${o.today} · écrit : ${written.join(", ")}`)
  return { statut: 0, corps: written }
}

export default corps
