/** Comité produit · 15 octobre 2026 */

import { min } from "../../../trame/kernel"
import { amend } from "../../../kinds/amendment"
import { approval } from "../../../kinds/approval"
import { DelaiGratuit, Rembourser, TypeBorne } from "./annulation"

/**
 * Délai des bornes ultra
 * Les bornes ultra reçoivent enfin leur délai d'annulation gratuite.
 */
export const DelaiUltra = amend(DelaiGratuit, { value: { ultra: min(15) } }, {
  owner: "lea",
  why: "décidé au comité produit du 15 octobre",
  from: "2026-10-15",
})

/** Validation du délai ultra */
export const ValidationDelaiUltra = approval({
  approves: DelaiUltra,
  owner: "lea",
  why: "comité produit du 15 octobre, après la demande du support",
})

/**
 * Lancement des bornes ultra
 * Pendant le lancement, annuler une réservation sur une borne ultra est toujours gratuit.
 */
export const LancementUltra = amend(Rembourser, {
  rule: (avant) => (r, avance) => (r.borne === TypeBorne.ultra ? r.prix : avant(r, avance)),
}, {
  owner: "lea",
  why: "promotion de lancement des bornes ultra",
  from: "2026-11-01",
  until: "2026-12-31",
})
