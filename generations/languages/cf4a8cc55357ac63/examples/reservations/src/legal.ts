/** Legal */

import { TODO, type Percent } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"

/**
 * Legal cap on cancellation fees
 * The largest share of the price that may legally be kept, in Switzerland and in France.
 */
export const FeeCap = decision<Percent>({
  owner: "karim",
  value: TODO,
})
