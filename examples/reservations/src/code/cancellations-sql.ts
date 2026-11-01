// The cancellations as a repository: the refund of a reservation is a row of its table; recording it cancels the
// reservation in the same transaction. The statements come from the dialect of the database.

import type { BodyOf } from "#trame/kernel"
import type { CancellationsSql } from "../infra"
import type { RefundRecord } from "../architecture"

const body: BodyOf<typeof CancellationsSql> = ({ database, dialect, tables, cancelled }) => {
  const { reservations, refunds, status } = tables
  const columns = Object.keys(refunds.columns)
  const refundFor = dialect.find(refunds.name, columns, refunds.key)
  const recordRefund = dialect.insert(refunds.name, columns)
  const cancel = dialect.update(reservations.name, [status], reservations.key)
  return {
    async refundFor(reservation) {
      const [r] = await database.read<RefundRecord>(refundFor, reservation)
      return r && { ...r }
    },
    async record(r) {
      await database.transaction(async () => {
        await database.write(recordRefund, ...columns.map((c) => r[c as keyof RefundRecord]))
        await database.write(cancel, cancelled, r.reservation)
      })
    },
  }
}

export default body
