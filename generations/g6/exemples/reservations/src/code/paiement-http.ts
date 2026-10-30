// Le prestataire réel. La clé d'API vient de l'environnement du processus : un secret n'est pas une valeur du graphe.

import type { BodyOf } from "../../../../trame/kernel"
import type { PaiementHttp } from "../infra"

const corps: BodyOf<typeof PaiementHttp> = ({ url }) => ({
  async rembourser(cle, montant) {
    const r = await fetch(`${url}/remboursements`, {
      method: "POST",
      headers: { "content-type": "application/json", "idempotency-key": cle, authorization: `Bearer ${process.env.PAIEMENT_CLE ?? ""}` },
      body: JSON.stringify({ montant }),
    })
    if (!r.ok) throw new Error(`Prestataire de paiement : ${r.status}`)
    return (await r.json()) as { reference: string }
  },
})

export default corps
