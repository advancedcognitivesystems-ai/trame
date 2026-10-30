// trame publish : les déclarations actuelles entrent dans trame.lock et ne changent plus.

import type { Traitement } from "../../../kinds/point-entree"
import type { EcritureFichiers, Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as VerrouApi } from "../moteur/verrou"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  preparation: PreparationApi
  verrou: VerrouApi
  ecriture: EcritureFichiers
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => async (req) => {
  const { options, prepare, refuse, pad } = deps.preparation
  const o = options(req.params.commande, (req.corps as { args: string[] }).args)
  const { c } = await prepare(o)
  const { added, refused, file, text } = deps.verrou.publish(c, o.root)
  if (refused.length) {
    refuse(o, [...refused.map((d) => pad(d.severity, 15) + `${d.where ?? ""} ${d.what}`), "", "publication refusée : une déclaration publiée a changé"])
  }
  if (file && text !== undefined) deps.ecriture.writeFileSync(file, text)
  deps.terminal.ecrire(added.length ? `publié : ${added.length} déclarations figées dans trame.lock` : "rien de nouveau à publier")
  for (const ref of added) deps.terminal.ecrire(`  ${ref}`)
  return { statut: deps.sortie.succes, corps: added }
}

export default corps
