// trame payload : le graphe compilé en format intermédiaire (pour trame dev et l'export), à la date du jour,
// et avec --all à chaque date où il peut changer. Le code n'est lu et exécuté qu'une fois.

import type { Payload } from "../../../trame/kernel"
import type { Traitement } from "../../../kinds/point-entree"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ChargeApi } from "../moteur/charge"

export interface Deps {
  preparation: PreparationApi
  charge: ChargeApi
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => async (req) => {
  const { options, prepare, at, views } = deps.preparation
  const { makePayload } = deps.charge
  const o = options(req.params.commande, (req.corps as { args: string[] }).args)
  const { c, comp } = await prepare(o)
  const first = makePayload(c, comp, views(o, comp))
  if (!o.all) {
    deps.terminal.ecrireBrut(JSON.stringify(first))
    return { statut: 0, corps: undefined }
  }
  const dates: { date: string; payload?: Payload; error?: string }[] = [{ date: o.today, payload: first }]
  for (const date of first.candidates.filter((d) => d !== o.today)) {
    try {
      const x = await at(o, date)
      dates.push({ date, payload: makePayload(x.c, x.comp, views(o, x.comp)) })
    } catch (e) {
      dates.push({ date, error: (e as Error).message })
    }
  }
  deps.terminal.ecrireBrut(JSON.stringify(dates.sort((a, b) => a.date.localeCompare(b.date))))
  return { statut: 0, corps: undefined }
}

export default corps
