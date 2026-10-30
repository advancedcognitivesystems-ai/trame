// La base de production. Le prototype n'embarque pas de pilote Postgres : ce corps refuse de démarrer.

import type { BodyOf } from "../../../../trame/kernel"
import type { BasePostgres } from "../infra"

const corps: BodyOf<typeof BasePostgres> = () => {
  throw new Error("Prototype : aucun pilote Postgres n'est installé. La base est décrite (Terraform) mais pas branchée.")
}

export default corps
