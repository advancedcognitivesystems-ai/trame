import type { BodyOf } from "../../../../trame/kernel"
import type { AnnulationsSql } from "../infra"
import type { Remboursement } from "../architecture"

const corps: BodyOf<typeof AnnulationsSql> = ({ base }) => ({
  async pour(reservation) {
    const [r] = await base.lire<Remboursement>("SELECT reservation, montant, reference FROM remboursements WHERE reservation = ?", reservation)
    return r && { ...r }
  },
  async enregistrer(r) {
    await base.transaction(async () => {
      await base.ecrire("INSERT INTO remboursements (reservation, montant, reference) VALUES (?, ?, ?)", r.reservation, r.montant, r.reference)
      await base.ecrire("UPDATE reservations SET statut = 'annulée' WHERE id = ?", r.reservation)
    })
  },
})

export default corps
