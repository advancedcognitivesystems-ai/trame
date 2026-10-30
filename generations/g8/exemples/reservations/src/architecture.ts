/** Réservations · Architecture */

import type { Graph, CHF } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { acces } from "../../../kinds/acces"
import { composant, type Exposition } from "../../../kinds/composant"
import { regle } from "../../../kinds/regle"
import type { Declencheur } from "../../../kinds/point-entree"
import type { Reservation } from "./annulation"

// Les contrats : ce que le code demande au monde. Des types, pas des implémentations.

export type Param = string | number | null
export interface ConnexionLecture {
  lire<T = Record<string, unknown>>(sql: string, ...params: Param[]): Promise<T[]>
}
export interface Connexion extends ConnexionLecture {
  ecrire(sql: string, ...params: Param[]): Promise<number>
  transaction<T>(travail: () => Promise<T>): Promise<T>
}
export interface ReservationStockee extends Reservation {
  id: string
  /** Début du créneau, ISO 8601. */
  debut: string
  statut: "active" | "annulée"
}
export interface Remboursement {
  reservation: string
  montant: CHF
  reference: string
}
export interface LecteurReservations {
  trouver(id: string): Promise<ReservationStockee | undefined>
}
export interface RegistreAnnulations {
  pour(reservation: string): Promise<Remboursement | undefined>
  enregistrer(r: Remboursement): Promise<void>
}
export interface Prestataire {
  rembourser(cleIdempotence: string, montant: CHF): Promise<{ reference: string }>
}
export interface JournalAppels {
  appels(): { cle: string; montant: CHF }[]
}
export interface Montre {
  maintenant(): Date
}

/**
 * Base de données
 * Une connexion SQL complète : lecture, écriture, transactions.
 */
export const Base = acces<Connexion>({ owner: "karim", effets: ["lecture", "écriture", "asynchrone"] })

/**
 * Base en lecture
 * La même base, vue en lecture seule.
 */
export const BaseEnLecture = acces<ConnexionLecture>({ owner: "karim", effets: ["lecture", "asynchrone"] })

/**
 * Lecture des réservations
 * Retrouver une réservation par son identifiant.
 */
export const LectureReservations = acces<LecteurReservations>({ owner: "karim", effets: ["lecture", "asynchrone"] })

/**
 * Enregistrement des annulations
 * Savoir si une réservation est déjà annulée, enregistrer une annulation et son remboursement.
 */
export const Annulations = acces<RegistreAnnulations>({ owner: "karim", effets: ["lecture", "écriture", "asynchrone"] })

/**
 * Prestataire de paiement
 * Rembourser un conducteur. Un appel par clé d'idempotence.
 */
export const Paiement = acces<Prestataire>({ owner: "karim", effets: ["réseau", "tiers", "asynchrone"] })

/**
 * Journal des paiements
 * Les appels faits au prestataire. N'existe que là où le prestataire est simulé.
 */
export const JournalPaiements = acces<JournalAppels>({ owner: "karim", effets: [] })

/**
 * Horloge
 * L'heure qu'il est.
 */
export const Horloge = acces<Montre>({ owner: "karim", effets: ["temps"] })

/**
 * Exposition HTTP
 * Servir des points d'entrée sur un port.
 */
export const ExpositionHttp = acces<Exposition>({ owner: "karim", effets: ["réseau", "asynchrone"] })

/**
 * Port HTTP de l'API
 */
export const PortHttp = decision<number>({ owner: "karim", value: 4180 })

/**
 * API réservations
 * Le service qui lit et annule les réservations.
 */
export const ApiReservations = composant({
  owner: "karim",
  langage: "typescript",
  deps: { exposition: ExpositionHttp },
})

const estLecture = (d: Declencheur) => d.type === "http" && d.methode === "GET"

/**
 * Une lecture n'écrit rien
 * Un GET n'écrit ni en base ni chez un tiers, même par une dépendance lointaine.
 */
export const LectureSansEcriture = regle({
  owner: "karim",
  check: (g: Graph) =>
    g.all("entry").nodes()
      .filter((v) => estLecture(v.field("declencheur") as Declencheur))
      .flatMap((v) => v.effects.filter((e) => e === "écriture" || e === "tiers").map((e) => ({ on: v, what: `Une lecture a l'effet « ${e} »` }))),
})

/**
 * Les utilitaires ne touchent pas le monde
 * Une fonction utilitaire ne lit ni n'écrit en base, et n'appelle pas le réseau. L'heure est permise.
 */
export const UtilitairesSansMonde = regle({
  owner: "karim",
  check: (g: Graph) =>
    g.all("function").nodes().flatMap((v) =>
      v.effects.filter((e) => ["lecture", "écriture", "réseau", "tiers"].includes(e)).map((e) => ({ on: v, what: `Un utilitaire a l'effet « ${e} »` }))),
})

/**
 * Tout appel à un tiers est vérifié
 * Un point d'entrée qui appelle un tiers a au moins un scénario qui le vérifie.
 */
export const TiersVerifies = regle({
  owner: "karim",
  check: (g: Graph) =>
    g.all("entry").nodes()
      .filter((v) => v.effects.includes("tiers") && !g.from(v).in("verifies").exists())
      .map((v) => ({ on: v, what: "Appelle un tiers sans scénario qui le vérifie" })),
})
