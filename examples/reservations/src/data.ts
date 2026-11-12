/** Reservations · Data */

import { vocabulary } from "#trame/kinds/vocabulary"
import { entity, stored } from "#data/kinds/entity"
import { ChargerType, SwissFrancs, CancelWithoutStress, chf } from "./cancellation"

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
 * A slot on a charger: its price, the instant it starts (ISO 8601), whether it was cancelled; found by its identifier. A
 * table of reservations starts with three, where a binding seeds it (in test, and on a developer's machine).
 */
export const KeptReservation = entity({
  owner: "karim",
  keptAs: "reservations",
  key: "id",
  fields: {
    id: stored.text(), charger: stored.word(Chargers), price: stored.number(SwissFrancs), start: stored.text(), status: stored.word(ReservationStatuses),
  },
  seed: [
    { id: "R1", charger: ChargerType.normal, price: chf(20), start: "2026-10-20T12:00:00.000Z", status: "active" },
    { id: "R2", charger: ChargerType.fast, price: chf(30), start: "2026-10-20T10:04:00.000Z", status: "active" },
    { id: "R3", charger: ChargerType.ultra, price: chf(40), start: "2026-10-20T11:00:00.000Z", status: "active" },
  ],
  serves: [CancelWithoutStress],
})

/**
 * The refund of a cancelled reservation
 * Found by its reservation: the amount refunded, the provider's reference for it, and the instant it was recorded (ISO
 * 8601), which the refunds recorded before it was kept do not say.
 */
export const KeptRefund = entity({
  owner: "karim",
  keptAs: "refunds",
  key: "reservation",
  fields: {
    reservation: stored.reference(KeptReservation), amount: stored.number(SwissFrancs), reference: stored.text(), at: stored.optional(stored.text()),
  },
  serves: [CancelWithoutStress],
})
