/** Réservations · API */

import { code, type Duration } from "../../../trame/kernel"
import { fonction } from "../../../kinds/fonction"
import { pointEntree, http } from "../../../kinds/point-entree"
import { DelaiGratuit, Rembourser, AnnulerSansStress } from "./annulation"
import { ApiReservations, LectureReservations, Annulations, Paiement, Horloge, type ReservationStockee } from "./architecture"

/**
 * Fin de l'annulation gratuite
 * Jusqu'à quel instant une réservation s'annule sans frais.
 */
export const FinGratuite = fonction({
  owner: "lea",
  serves: [Rembourser],
  synchrone: true,
  deps: { delai: DelaiGratuit },
  body: ({ delai }) => (r: ReservationStockee): string => new Date(Date.parse(r.debut) - delai[r.borne] * 1000).toISOString(),
})

/**
 * Avance d'une annulation
 * Combien de temps avant le début du créneau on annule, en secondes.
 */
export const AvanceAvant = fonction({
  owner: "karim",
  deps: { horloge: Horloge },
  body: ({ horloge }) => (r: ReservationStockee): Duration => Math.floor((Date.parse(r.debut) - horloge.maintenant().getTime()) / 1000),
})

/**
 * Lire une réservation
 * La réservation, et jusqu'à quand elle s'annule gratuitement.
 */
export const LireReservation = pointEntree({
  owner: "karim",
  in: ApiReservations,
  serves: [AnnulerSansStress],
  declencheur: http("GET", "/reservations/:id"),
  deps: { reservations: LectureReservations, finGratuite: FinGratuite },
  body: code.file("./code/lire-reservation.ts"),
})

/**
 * Annuler une réservation
 * Rembourse selon la règle, une seule fois, même si la demande arrive deux fois.
 */
export const AnnulerReservation = pointEntree({
  owner: "karim",
  in: ApiReservations,
  serves: [Rembourser],
  declencheur: http("POST", "/reservations/:id/annulation"),
  deps: { reservations: LectureReservations, annulations: Annulations, paiement: Paiement, avance: AvanceAvant, rembourser: Rembourser },
  body: code.file("./code/annuler-reservation.ts"),
})
