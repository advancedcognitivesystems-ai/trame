/** Legal */

import { TODO } from "#trame/kernel"
import { pct, type Share } from "#std/measures"
import { decision } from "#trame/kinds/decision"
import { amend } from "#trame/kinds/amendment"

/**
 * Legal cap on cancellation fees
 * The largest share of the price that may legally be kept, in Switzerland and in France.
 */
export const FeeCap = decision<Share>({
  owner: "karim",
  value: TODO,
})

/**
 * The cap, decided
 * Half the price: a reservation cancelled late never keeps more.
 */
export const FeeCapDecided = amend(FeeCap, { value: pct(50) }, {
  owner: "karim",
  why: "the late fee is bounded by it, and has kept half the price since the beginning",
  from: "2026-11-10",
})
