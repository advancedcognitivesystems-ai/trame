// Toute autre commande : le nom d'une vue, ou un alias (`trame impact DelaiGratuit`, `trame why …`).

import type { Traitement } from "../../../kinds/point-entree"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RendreVueApi } from "./rendre-vue"
import type { Api as CompilateurApi } from "../moteur/compilateur"
import type { Api as VuesApi } from "../moteur/vues"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  preparation: PreparationApi
  rendreVue: RendreVueApi
  compilateur: CompilateurApi
  vues: VuesApi
  terminal: Terminal
}

const aliases: Record<string, string> = { why: "pourquoi", history: "historique" }

const corps = (deps: Deps): Traitement => async (req) => {
  const o = deps.preparation.options(req.params.commande, (req.corps as { args: string[] }).args)
  await deps.compilateur.loadKinds(o.root)
  await deps.vues.loadViews(o.root)
  const name = aliases[o.command] ?? o.command
  if (deps.vues.sortedViews().some((v) => v.name === name)) {
    await deps.rendreVue.view(o, name, o.args[0])
    return { statut: deps.sortie.succes, corps: undefined }
  }
  deps.terminal.erreur(`Commande inconnue : ${o.command}. Commandes : ${(req.params.commandes ?? "").split(" ").filter(Boolean).join(", ")}, ou une vue : ${deps.vues.sortedViews().map((v) => v.name).join(", ")}`)
  return { statut: deps.sortie.echec, corps: undefined }
}

export default corps
