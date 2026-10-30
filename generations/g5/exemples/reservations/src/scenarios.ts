/** Réservations · Scénarios */

import { scenario } from "../../../kinds/scenario"
import { DelaiGratuit, Rembourser } from "./annulation"
import { JournalPaiements } from "./architecture"
import { Test, ReservationsInitiales, InstantDeTest } from "./infra"
import { LireReservation, AnnulerReservation } from "./api"

/**
 * Lire une réservation
 */
export const ScenarioLecture = scenario({
  owner: "karim",
  verifies: [LireReservation],
  env: Test,
  deps: { lire: LireReservation, initiales: ReservationsInitiales, delai: DelaiGratuit },
  body: ({ lire, initiales, delai }) => async (verifie) => {
    const r1 = initiales.find((r) => r.id === "R1")!
    const lu = await lire({ params: { id: "R1" } })
    const corps = lu.corps as { id: string; gratuiteJusqua: string }
    verifie("Une réservation existante est rendue", lu.statut === 200 && corps.id === "R1")
    verifie("Avec la fin de l'annulation gratuite", corps.gratuiteJusqua === new Date(Date.parse(r1.debut) - delai[r1.borne] * 1000).toISOString())
    verifie("Une réservation inconnue rend 404", (await lire({ params: { id: "R404" } })).statut === 404)
  },
})

/**
 * Annuler deux fois ne rembourse qu'une fois
 */
export const ScenarioAnnulationRepetee = scenario({
  owner: "karim",
  verifies: [AnnulerReservation],
  env: Test,
  deps: { annuler: AnnulerReservation, journal: JournalPaiements, rembourser: Rembourser, initiales: ReservationsInitiales, instant: InstantDeTest },
  body: ({ annuler, journal, rembourser, initiales, instant }) => async (verifie) => {
    const r1 = initiales.find((r) => r.id === "R1")!
    const avance = (Date.parse(r1.debut) - Date.parse(instant)) / 1000
    const premiere = await annuler({ params: { id: "R1" } })
    const seconde = await annuler({ params: { id: "R1" } })
    const a = premiere.corps as { montant: number; reference: string }
    const b = seconde.corps as { montant: number; reference: string }
    verifie("La première annulation rembourse selon la règle", premiere.statut === 200 && a.montant === rembourser(r1, avance))
    verifie("La seconde rend le même remboursement", seconde.statut === 200 && b.reference === a.reference)
    verifie("Le prestataire n'est appelé qu'une fois", journal.appels().length === 1)
  },
})

/**
 * Chaque réservation est remboursée selon la règle
 */
export const ScenarioConformite = scenario({
  owner: "lea",
  verifies: [AnnulerReservation, Rembourser],
  env: Test,
  deps: { annuler: AnnulerReservation, rembourser: Rembourser, initiales: ReservationsInitiales, instant: InstantDeTest },
  body: ({ annuler, rembourser, initiales, instant }) => async (verifie) => {
    for (const r of initiales) {
      const avance = (Date.parse(r.debut) - Date.parse(instant)) / 1000
      const rendu = (await annuler({ params: { id: r.id } })).corps as { montant: number }
      verifie(`${r.id} (${r.borne}, ${Math.round(avance / 60)} min avant) : ${rendu.montant} CHF`, rendu.montant === rembourser(r, avance))
    }
  },
})
