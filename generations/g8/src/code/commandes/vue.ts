// trame view <vue> [nœud|module]

import type { Traitement } from "../../../kinds/point-entree"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RendreVueApi } from "./rendre-vue"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  preparation: PreparationApi
  rendreVue: RendreVueApi
}

const corps = (deps: Deps): Traitement => async (req) => {
  const o = deps.preparation.options(req.params.commande, (req.corps as { args: string[] }).args)
  await deps.rendreVue.view(o, o.args[0], o.args[1])
  return { statut: deps.sortie.succes, corps: undefined }
}

export default corps
