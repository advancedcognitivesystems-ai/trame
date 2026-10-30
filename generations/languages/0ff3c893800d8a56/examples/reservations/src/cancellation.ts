/** Reservations · Cancellation */

import { TODO, s, min, h, chf, pct, type Duration, type CHF, type Percent } from "../../../trame/kernel"
import { goal } from "../../../kinds/goal"
import { decision } from "../../../kinds/decision"
import { assume } from "../../../kinds/assumption"
import { requirement } from "../../../kinds/requirement"
import { acceptance } from "../../../kinds/acceptance"
import { slo } from "../../../kinds/slo"
import { FeeCap } from "./legal"

/**
 * Cancel without stress
 * A driver can change their mind without fearing an unfair penalty.
 */
export const CancelWithoutStress = goal()

export enum ChargerType { fast = "fast", normal = "normal", ultra = "ultra" }
export type Reservation = { charger: ChargerType; price: CHF }

/**
 * Free cancellation period
 * Up to this long before the slot starts, cancelling costs nothing.
 */
export const FreeCancellationPeriod = decision<Record<ChargerType, Duration>>({
  owner: "lea",
  review: "2027-03",
  range: [min(5), min(20)],
  rejected: { "30 min": "blocks the chargers at peak hours" },
  value: { fast: min(5), normal: min(10), ultra: TODO },
})

/**
 * Late cancellation fee
 * The share of the price that is kept when the driver cancels after the free period.
 */
export const LateFee = decision<Percent>({
  owner: "lea",
  bounded: [FeeCap],
  rejected: { "100%": "perceived as punitive" },
  value: pct(50),
})

/**
 * Idempotent payment provider
 * The payment provider moves money only once per idempotency key.
 */
export const IdempotentProvider = assume({ owner: "karim", expires: "2026-12-01" })

/**
 * Refund on cancellation
 * The amount returned to the driver when they cancel their reservation.
 */
export const Refund = requirement({
  refines: [CancelWithoutStress],
  assumes: [IdempotentProvider],
  rule: (r: Reservation, leadTime: Duration): CHF =>
    leadTime >= FreeCancellationPeriod.value[r.charger] ? r.price : r.price * (1 - LateFee.value),
})

/**
 * Immediate refund
 * The refund is initiated within two seconds of the cancellation.
 */
export const ImmediateRefund = slo({
  owner: "karim",
  signal: "refunds.initiated.latency",
  percentile: 99,
  threshold: s(2),
  window: h(1),
  constrains: [Refund],
})

/** Refund criteria */
export const RefundCriteria = acceptance({
  accepts: Refund,
  owner: "lea",
  criteria: (criterion) => {
    const normal: Reservation = { charger: ChargerType.normal, price: chf(20) }
    const fast: Reservation = { charger: ChargerType.fast, price: chf(20) }
    const ultra: Reservation = { charger: ChargerType.ultra, price: chf(20) }

    criterion("Cancelling two hours ahead costs nothing",
      () => Refund(normal, h(2)) === chf(20))
    criterion("Exactly at the end of the free period, the driver is refunded",
      () => Refund(normal, FreeCancellationPeriod.value.normal) === chf(20))
    criterion("Four minutes ahead, the driver pays the late fee",
      () => Refund(normal, min(4)) === chf(10))
    criterion("On a fast charger, six minutes ahead is enough",
      () => Refund(fast, min(6)) === chf(20))
    criterion("On an ultra charger, fifteen minutes ahead is enough",
      () => Refund(ultra, min(15)) === chf(20))
    criterion("The refund is never more than the price paid",
      () => Array.from({ length: 181 }, (_, i) => min(i)).every((a) => Refund(normal, a) <= normal.price))
  },
})
