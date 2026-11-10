/** Reservations · Data */

import { vocabulary } from "#trame/kinds/vocabulary"
import { entity, stored } from "#data/kinds/entity"
import { ChargerType, SwissFrancs, CancelWithoutStress } from "./cancellation"

// What the service keeps from one version to the next, described once: a reservation, and the refund of each cancelled
// one. The library of data makes each a table, in SQLite or in PostgreSQL, and a deployment migrates it from the
// version the previous one kept.

/**
 * Chargers
 * The chargers a slot is reserved on, as a reservation keeps them.
 */
export const Chargers = vocabulary({
  owner: "karim",
  words: { [ChargerType.fast]: "A fast charger", [ChargerType.normal]: "A normal charger", [ChargerType.ultra]: "An ultra-fast charger" },
  serves: [CancelWithoutStress],
})

/**
 * Statuses of a reservation
 */
export const ReservationStatuses = vocabulary({
  owner: "karim",
  words: { active: "Reserved, and not cancelled", cancelled: "Cancelled, its refund recorded" },
  serves: [CancelWithoutStress],
})

/**
 * A reservation
 * A slot on a charger: its price, the instant it starts (ISO 8601), whether it was cancelled; found by its identifier.
 */
export const KeptReservation = entity({
  owner: "karim",
  keptAs: "reservations",
  key: "id",
  fields: {
    id: stored.text(), charger: stored.word(Chargers), price: stored.number(SwissFrancs), start: stored.text(), status: stored.word(ReservationStatuses),
  },
  serves: [CancelWithoutStress],
})

/**
 * The refund of a cancelled reservation
 * Found by its reservation: the amount refunded, and the provider's reference for it.
 */
export const KeptRefund = entity({
  owner: "karim",
  keptAs: "refunds",
  key: "reservation",
  fields: { reservation: stored.reference(KeptReservation), amount: stored.number(SwissFrancs), reference: stored.text() },
  serves: [CancelWithoutStress],
})
