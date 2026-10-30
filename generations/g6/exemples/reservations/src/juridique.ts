/** Juridique */

import { TODO, type Percent } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"

/**
 * Plafond légal des frais d'annulation
 * Part maximale du prix qu'on a le droit de retenir, en Suisse et en France.
 */
export const PlafondFrais = decision<Percent>({
  owner: "karim",
  value: TODO,
})
