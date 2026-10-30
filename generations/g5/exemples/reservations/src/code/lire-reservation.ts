import type { BodyOf } from "../../../../trame/kernel"
import type { LireReservation } from "../api"

const corps: BodyOf<typeof LireReservation> = ({ reservations, finGratuite }) => async ({ params }) => {
  const r = await reservations.trouver(params.id)
  if (!r) return { statut: 404, corps: { erreur: "réservation inconnue" } }
  return { statut: 200, corps: { ...r, gratuiteJusqua: finGratuite(r) } }
}

export default corps
