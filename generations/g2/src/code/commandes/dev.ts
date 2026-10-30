// trame dev : la page, recompilée à chaque enregistrement.

import type { Traitement } from "../../../kinds/point-entree"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ServeurDevApi } from "../moteur/serveur-dev"

export interface Deps {
  preparation: PreparationApi
  serveurDev: ServeurDevApi
}

const corps = (deps: Deps): Traitement => async (req) => {
  const o = deps.preparation.options(req.params.commande, (req.corps as { args: string[] }).args)
  await deps.serveurDev.startDev(o.root, o.today, o.port)
  // Le serveur reste ouvert : pas de code de sortie.
  return { corps: undefined }
}

export default corps
