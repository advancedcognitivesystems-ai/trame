/** Product committee · 15 October 2026 */

import { min } from "../../../trame/kernel"
import { amend } from "../../../kinds/amendment"
import { approval } from "../../../kinds/approval"
import { FreeCancellationPeriod, Refund, ChargerType } from "./cancellation"

/**
 * Period for ultra chargers
 * Ultra chargers finally get their free cancellation period.
 */
export const UltraPeriod = amend(FreeCancellationPeriod, { value: { ultra: min(15) } }, {
  owner: "lea",
  why: "decided at the product committee of 15 October",
  from: "2026-10-15",
})

/** Approval of the ultra period */
export const UltraPeriodApproval = approval({
  approves: UltraPeriod,
  owner: "lea",
  why: "product committee of 15 October, after the request from support",
})

/**
 * Launch of the ultra chargers
 * During the launch, cancelling a reservation on an ultra charger is always free.
 */
export const UltraLaunch = amend(Refund, {
  body: (previous) => (deps) => {
    const before = previous(deps)
    return (r, leadTime) => (r.charger === ChargerType.ultra ? r.price : before(r, leadTime))
  },
}, {
  owner: "lea",
  why: "launch promotion for the ultra chargers",
  from: "2026-11-01",
  until: "2026-12-31",
})
