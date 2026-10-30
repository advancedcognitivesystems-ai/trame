// trame export : une page autonome, le graphe compilé à chaque date candidate, sans dépendance.

import type { Traitement } from "../../../kinds/point-entree"
import type { Chemins, Disposition, EcritureFichiers, Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as PaquetApi } from "../moteur/paquet"
import type { Api as PageApi } from "../moteur/page"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  disposition: Disposition
  preparation: PreparationApi
  paquet: PaquetApi
  page: PageApi
  ecriture: EcritureFichiers
  chemins: Chemins
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => async (req) => {
  const { options, refuse } = deps.preparation
  const o = options(req.params.commande, (req.corps as { args: string[] }).args)
  const file = o.args[0] ?? deps.disposition.page
  const bundle = await deps.paquet.makeBundle(o.root, o.today, "export")
  if (bundle.error) refuse(o, [bundle.error])
  deps.ecriture.writeFileSync(deps.chemins.resolve(o.root, file), await deps.page.pageHtml(o.root, { bundle, fragment: o.fragment }))
  deps.terminal.ecrire(`export · ${bundle.dates.length} dates · écrit : ${file}`)
  return { statut: deps.sortie.succes, corps: file }
}

export default corps
