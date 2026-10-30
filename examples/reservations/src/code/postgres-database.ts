// The production database. The prototype ships no Postgres driver: this body refuses to start.

import type { BodyOf } from "../../../../trame/kernel"
import type { PostgresDatabase } from "../infra"

const body: BodyOf<typeof PostgresDatabase> = ({ messages }) => {
  throw new Error(messages.noPostgresDriver())
}

export default body
