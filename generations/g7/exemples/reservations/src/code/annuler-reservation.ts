import type { BodyOf } from "../../../../trame/kernel"
import type { AnnulerReservation } from "../api"

const corps: BodyOf<typeof AnnulerReservation> = ({ reservations, annulations, paiement, avance, rembourser }) => async ({ params }) => {
  const r = await reservations.trouver(params.id)
  if (!r) return { statut: 404, corps: { erreur: "réservation inconnue" } }
  // Une demande répétée rend le remboursement déjà fait.
  const deja = await annulations.pour(r.id)
  if (deja) return { statut: 200, corps: deja }
  const montant = rembourser(r, avance(r))
  const { reference } = await paiement.rembourser(`annulation-${r.id}`, montant)
  const remboursement = { reservation: r.id, montant, reference }
  await annulations.enregistrer(remboursement)
  return { statut: 200, corps: remboursement }
}

export default corps
