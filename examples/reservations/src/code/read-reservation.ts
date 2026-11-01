import type { BodyOf } from "#trame/kernel"
import type { ReadReservation } from "../api"

const body: BodyOf<typeof ReadReservation> = ({ reservations, freeCancellationEnd, http, messages }) => async ({ params }) => {
  const r = await reservations.find(params.id)
  if (!r) return { status: http.notFound, body: { error: messages.unknownReservation() } }
  return { status: http.ok, body: { ...r, freeUntil: freeCancellationEnd(r) } }
}

export default body
