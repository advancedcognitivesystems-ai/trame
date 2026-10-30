/** Support requests */

import { min } from "../../../trame/kernel"
import { amend } from "../../../kinds/amendment"
import { FreeCancellationPeriod } from "./cancellation"

/**
 * Ultra period requested by support
 * Support receives complaints: without a free period, drivers on ultra chargers pay a fee when they cancel at the last minute.
 */
export const SupportUltraPeriod = amend(FreeCancellationPeriod, { value: { ultra: min(12) } }, {
  owner: "karim",
  why: "complaints received by support",
  from: "2026-10-10",
})
