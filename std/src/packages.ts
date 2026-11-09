/** Standard library · Packages */

import { pkg } from "#trame/kinds/package"
import { RealizedOnce } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation it pins: reached by its path in Trame's repository. Its
 * owner moves it when a version of the library needs a newer language.
 */
export const Language = pkg({
  owner: "trame", packageName: "trame", version: "104", joins: "language", from: "path", at: "../generations/g104",
  serves: [RealizedOnce],
})
