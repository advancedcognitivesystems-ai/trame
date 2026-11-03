/** Legal */

import { TODO } from "#trame/kernel"
import type { Share } from "#std/measures"
import { decision } from "#trame/kinds/decision"

/**
 * Legal cap on cancellation fees
 * The largest share of the price that may legally be kept, in Switzerland and in France.
 */
export const FeeCap = decision<Share>({
  owner: "karim",
  value: TODO,
})
