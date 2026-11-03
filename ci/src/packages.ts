/** Continuous integration · Packages */

import { pkg } from "#trame/kinds/package"
import { RunsElsewhere } from "./product"

/**
 * Trame
 * The language the writers are written in, at the generation the library pins: reached by its path in Trame's
 * repository.
 */
export const Language = pkg({
  owner: "trame", packageName: "trame", version: "100", joins: "language", from: "path", at: "../generations/g100",
  serves: [RunsElsewhere],
})
