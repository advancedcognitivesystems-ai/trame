/** Réservations · Annulation */

import { TODO, s, min, h, chf, pct, type Duration, type CHF, type Percent } from "../../../trame/kernel"
import { goal } from "../../../kinds/goal"
import { decision } from "../../../kinds/decision"
import { assume } from "../../../kinds/assumption"
import { requirement } from "../../../kinds/requirement"
import { acceptance } from "../../../kinds/acceptance"
import { slo } from "../../../kinds/slo"
import { PlafondFrais } from "./juridique"

/**
 * Annuler sans stress
 * Un conducteur peut changer d'avis sans craindre une pénalité injuste.
 */
export const AnnulerSansStress = goal()

export enum TypeBorne { rapide = "rapide", normale = "normale", ultra = "ultra" }
export type Reservation = { borne: TypeBorne; prix: CHF }

/**
 * Délai d'annulation gratuite
 * Jusqu'à ce délai avant le début du créneau, annuler ne coûte rien.
 */
export const DelaiGratuit = decision<Record<TypeBorne, Duration>>({
  owner: "lea",
  review: "2027-03",
  range: [min(5), min(20)],
  rejected: { "30 min": "bloque les bornes aux heures de pointe" },
  value: { rapide: min(5), normale: min(10), ultra: TODO },
})

/**
 * Frais d'annulation tardive
 * Part du prix retenue quand le conducteur annule après le délai gratuit.
 */
export const FraisTardifs = decision<Percent>({
  owner: "lea",
  bounded: [PlafondFrais],
  rejected: { "100 %": "perçu comme punitif" },
  value: pct(50),
})

/**
 * Prestataire idempotent
 * Le prestataire de paiement ne débite qu'une fois par clé d'idempotence.
 */
export const PrestataireIdempotent = assume({ owner: "karim", expires: "2026-12-01" })

/**
 * Remboursement à l'annulation
 * Montant rendu au conducteur quand il annule sa réservation.
 */
export const Rembourser = requirement({
  refines: [AnnulerSansStress],
  assumes: [PrestataireIdempotent],
  rule: (r: Reservation, avance: Duration): CHF =>
    avance >= DelaiGratuit.value[r.borne] ? r.prix : r.prix * (1 - FraisTardifs.value),
})

/**
 * Remboursement immédiat
 * Le remboursement part dans les deux secondes qui suivent l'annulation.
 */
export const RemboursementImmediat = slo({
  owner: "karim",
  signal: "refunds.initiated.latency",
  percentile: 99,
  threshold: s(2),
  window: h(1),
  constrains: [Rembourser],
})

/** Critères de remboursement */
export const CriteresRemboursement = acceptance({
  accepts: Rembourser,
  owner: "lea",
  criteria: (criterion) => {
    const normale: Reservation = { borne: TypeBorne.normale, prix: chf(20) }
    const rapide: Reservation = { borne: TypeBorne.rapide, prix: chf(20) }
    const ultra: Reservation = { borne: TypeBorne.ultra, prix: chf(20) }

    criterion("Annuler deux heures avant ne coûte rien",
      () => Rembourser(normale, h(2)) === chf(20))
    criterion("Pile sur le délai, le conducteur est remboursé",
      () => Rembourser(normale, DelaiGratuit.value.normale) === chf(20))
    criterion("Quatre minutes avant, il paie les frais tardifs",
      () => Rembourser(normale, min(4)) === chf(10))
    criterion("Sur une borne rapide, six minutes avant suffisent",
      () => Rembourser(rapide, min(6)) === chf(20))
    criterion("Sur une borne ultra, quinze minutes avant suffisent",
      () => Rembourser(ultra, min(15)) === chf(20))
    criterion("Jamais plus que le prix payé",
      () => Array.from({ length: 181 }, (_, i) => min(i)).every((a) => Rembourser(normale, a) <= normale.prix))
  },
})
