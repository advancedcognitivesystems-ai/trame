import type { BodyOf } from "../../../../trame/kernel"
import type { ReservationsSql } from "../infra"
import type { ReservationStockee } from "../architecture"

const corps: BodyOf<typeof ReservationsSql> = ({ base }) => ({
  async trouver(id) {
    const [ligne] = await base.lire<ReservationStockee>("SELECT id, borne, prix, debut, statut FROM reservations WHERE id = ?", id)
    return ligne && { ...ligne }
  },
})

export default corps
