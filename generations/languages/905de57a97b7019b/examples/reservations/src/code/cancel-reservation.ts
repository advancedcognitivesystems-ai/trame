import type { BodyOf } from "#trame/kernel"
import type { CancelReservation } from "../api"

const body: BodyOf<typeof CancelReservation> = ({ reservations, cancellations, payment, leadTime, refund, key, clock, http, messages }) => async ({ params }) => {
  const r = await reservations.find(params.id)
  if (!r) return { status: http.notFound, body: { error: messages.unknownReservation() } }
  // A repeated request returns the refund already made.
  const existing = await cancellations.refundFor(r.id)
  if (existing) return { status: http.ok, body: existing }
  const amount = refund(r, leadTime(r))
  const { reference } = await payment.refund(key + r.id, amount)
  const record = { reservation: r.id, amount, reference, at: clock.now().toISOString() }
  await cancellations.record(record)
  return { status: http.ok, body: record }
}

export default body
