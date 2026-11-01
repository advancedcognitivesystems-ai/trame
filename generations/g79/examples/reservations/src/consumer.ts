/** Reservations · Consumer law */

import { h } from "#std/measures"
import { decision } from "../../../kinds/decision"
import { requirement } from "../../../kinds/requirement"
import { acceptance } from "../../../kinds/acceptance"
import { CancelWithoutStress, Refund, ChargerType, chf, type Reservation } from "./cancellation"

/**
 * Notice for a full refund
 * How long before its slot a reservation cancelled is refunded in full, as the legal team reads consumer law for a
 * service booked in advance.
 */
export const FullRefundNotice = decision({
  owner: "karim",
  rejected: { "48 h": "longer than any charging slot is booked ahead" },
  value: h(24),
})

/**
 * A day ahead, a full refund
 * Whatever the product decides about late fees, a reservation cancelled at least the notice ahead is refunded in full.
 * The legal team answers for it; it constrains the refund the product computes, played on its examples at every build.
 */
export const FullRefundAhead = requirement({
  owner: "karim",
  refines: [CancelWithoutStress],
  constrains: Refund,
  examples: [
    [{ charger: ChargerType.normal, price: chf(20) }, h(24)],
    [{ charger: ChargerType.fast, price: chf(35) }, h(30)],
    [{ charger: ChargerType.normal, price: chf(20) }, h(1)],
  ],
  deps: { notice: FullRefundNotice },
  body: ({ notice }) => (r, leadTime, refund) => leadTime < notice || refund === r.price,
})

/** Criteria of a full refund a day ahead */
export const FullRefundAheadCriteria = acceptance({
  accepts: FullRefundAhead,
  owner: "karim",
  criteria: (criterion) => {
    const normal: Reservation = { charger: ChargerType.normal, price: chf(20) }
    criterion("A day ahead, half the price is not enough", () => !FullRefundAhead(normal, h(24), chf(10)))
    criterion("A day ahead, the whole price is", () => FullRefundAhead(normal, h(24), chf(20)))
    criterion("An hour ahead, the law asks nothing", () => FullRefundAhead(normal, h(1), chf(0)))
  },
})
