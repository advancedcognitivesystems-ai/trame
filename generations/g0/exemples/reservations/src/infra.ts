/** Réservations · Infrastructure */

import { code, chf } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { fonction } from "../../../kinds/fonction"
import { environnement } from "../../../kinds/environnement"
import { implementation } from "../../../kinds/implementation"
import { TypeBorne } from "./annulation"
import {
  Base, BaseEnLecture, LectureReservations, Annulations, Paiement, JournalPaiements, Horloge, ExpositionHttp, PortHttp,
  type ReservationStockee,
} from "./architecture"

/**
 * Test
 * Les scénarios : base en mémoire, heure fixe, prestataire simulé.
 */
export const Test = environnement({ owner: "karim" })

/**
 * Local
 * Le poste d'un développeur : base dans un fichier, prestataire simulé.
 */
export const Local = environnement({ owner: "karim" })

/**
 * Production
 */
export const Production = environnement({ owner: "karim" })

// Valeurs -------------------------------------------------------------------

/**
 * Réservations initiales
 * Présentes au départ d'une base vide, en test et en local.
 */
export const ReservationsInitiales = decision<ReservationStockee[]>({
  owner: "karim",
  value: [
    { id: "R1", borne: TypeBorne.normale, prix: chf(20), debut: "2026-10-20T12:00:00.000Z", statut: "active" },
    { id: "R2", borne: TypeBorne.rapide, prix: chf(30), debut: "2026-10-20T10:04:00.000Z", statut: "active" },
    { id: "R3", borne: TypeBorne.ultra, prix: chf(40), debut: "2026-10-20T11:00:00.000Z", statut: "active" },
  ],
})

/**
 * Instant de test
 * L'heure que voient les scénarios.
 */
export const InstantDeTest = decision<string>({ owner: "karim", value: "2026-10-20T10:00:00.000Z" })

/**
 * Base de test
 */
export const CheminBaseTest = decision<string>({ owner: "karim", value: ":memory:" })

/**
 * Fichier de la base locale
 */
export const CheminBaseLocale = decision<string>({ owner: "karim", value: ".donnees/reservations.db" })

/**
 * Nom de la base de production
 */
export const NomBase = decision<string>({ owner: "karim", value: "reservations" })

/**
 * Taille de la base de production
 */
export const TailleBase = decision<{ cpu: number; memoire_go: number }>({ owner: "karim", value: { cpu: 2, memoire_go: 4 } })

/**
 * Rétention des sauvegardes
 * En jours.
 */
export const RetentionSauvegardes = decision<number>({ owner: "karim", value: 7, range: [7, 35] })

/**
 * Adresse du prestataire de paiement
 */
export const UrlPrestataire = decision<string>({ owner: "karim", value: "https://paiements.example.com/v1" })

// Code ----------------------------------------------------------------------

/**
 * Schéma des réservations
 * Les tables, créées au démarrage d'une base SQLite.
 */
export const SchemaReservations = fonction({
  owner: "karim",
  synchrone: true,
  body: () => [
    "CREATE TABLE IF NOT EXISTS reservations (id TEXT PRIMARY KEY, borne TEXT NOT NULL, prix REAL NOT NULL, debut TEXT NOT NULL, statut TEXT NOT NULL)",
    "CREATE TABLE IF NOT EXISTS remboursements (reservation TEXT PRIMARY KEY REFERENCES reservations(id), montant REAL NOT NULL, reference TEXT NOT NULL)",
  ],
})

/**
 * Base SQLite en mémoire
 * Neuve à chaque session : chaque scénario part des réservations initiales.
 */
export const BaseMemoire = implementation({
  owner: "karim",
  implements: [Base, BaseEnLecture],
  environments: [Test],
  deps: { chemin: CheminBaseTest, schema: SchemaReservations, reservations: ReservationsInitiales },
  body: code.file("./code/base-sqlite.ts"),
})

/**
 * Base SQLite locale
 * Dans un fichier du poste, créée au premier démarrage.
 */
export const BaseFichier = implementation({
  owner: "karim",
  implements: [Base, BaseEnLecture],
  environments: [Local],
  deps: { chemin: CheminBaseLocale, schema: SchemaReservations, reservations: ReservationsInitiales },
  body: code.file("./code/base-sqlite.ts"),
})

/**
 * Base Postgres de production
 * Provisionnée par Terraform.
 */
export const BasePostgres = implementation({
  owner: "karim",
  implements: [Base, BaseEnLecture],
  environments: [Production],
  body: code.file("./code/base-postgres.ts"),
  variables: { nom: NomBase, taille: TailleBase, sauvegardes_jours: RetentionSauvegardes },
  provision: code.file("./infra/base-postgres", "hcl"),
})

/**
 * Réservations en SQL
 */
export const ReservationsSql = implementation({
  owner: "karim",
  implements: [LectureReservations],
  environments: [Test, Local, Production],
  deps: { base: BaseEnLecture },
  body: code.file("./code/reservations-sql.ts"),
})

/**
 * Annulations en SQL
 * L'annulation et son remboursement sont écrits dans la même transaction.
 */
export const AnnulationsSql = implementation({
  owner: "karim",
  implements: [Annulations],
  environments: [Test, Local, Production],
  deps: { base: Base },
  body: code.file("./code/annulations-sql.ts"),
})

/**
 * Horloge du système
 */
export const HorlogeSysteme = implementation({
  owner: "karim",
  implements: [Horloge],
  environments: [Local, Production],
  body: () => ({ maintenant: () => new Date() }),
})

/**
 * Horloge arrêtée
 * Toujours l'instant de test.
 */
export const HorlogeArretee = implementation({
  owner: "karim",
  implements: [Horloge],
  environments: [Test],
  deps: { instant: InstantDeTest },
  body: ({ instant }) => ({ maintenant: () => new Date(instant) }),
})

/**
 * Prestataire simulé
 * Garde chaque appel en mémoire. Une clé déjà vue rend la même référence, sans nouvel appel.
 */
export const PaiementSimule = implementation({
  owner: "karim",
  implements: [Paiement, JournalPaiements],
  environments: [Test, Local],
  body: () => {
    const appels: { cle: string; montant: number }[] = []
    const references = new Map<string, string>()
    return {
      async rembourser(cle: string, montant: number) {
        if (!references.has(cle)) {
          appels.push({ cle, montant })
          references.set(cle, `simulé-${appels.length}`)
        }
        return { reference: references.get(cle)! }
      },
      appels: () => [...appels],
    }
  },
})

/**
 * Prestataire réel
 * Par HTTPS, avec la clé d'idempotence en en-tête.
 */
export const PaiementHttp = implementation({
  owner: "karim",
  implements: [Paiement],
  environments: [Production],
  deps: { url: UrlPrestataire },
  body: code.file("./code/paiement-http.ts"),
})

/**
 * Serveur HTTP Node
 */
export const ServeurNode = implementation({
  owner: "karim",
  implements: [ExpositionHttp],
  environments: [Test, Local, Production],
  deps: { port: PortHttp },
  body: code.file("./code/serveur-node.ts"),
})
