// The reservations as a repository: a reservation is a row of its table, read through the database port with the
// statement its dialect writes.

import type { BodyOf } from "../../../../trame/kernel"
import type { ReservationsSql } from "../infra"
import type { StoredReservation } from "../architecture"

const body: BodyOf<typeof ReservationsSql> = ({ database, dialect, tables }) => {
  const { reservations } = tables
  const find = dialect.find(reservations.name, Object.keys(reservations.columns), reservations.key)
  return {
    async find(id) {
      const [row] = await database.read<StoredReservation>(find, id)
      return row && { ...row }
    },
  }
}

export default body
