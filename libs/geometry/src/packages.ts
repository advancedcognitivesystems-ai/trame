/** Geometry · Packages */

import { pkg } from "#trame/kinds/package"
import { GeometryWrittenOnce } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation it pins: reached by its path in Trame's repository.
 */
export const Language = pkg({
  owner: "ghalaax", packageName: "trame", version: "91", joins: "language", from: "path", at: "../../generations/g91",
  serves: [GeometryWrittenOnce],
})

/**
 * The standard library
 * The quantities and the units it builds on (Ratio, the symbols of units), at the version it was released against.
 */
export const StandardLibrary = pkg({
  owner: "ghalaax", packageName: "std", version: "0.12.0", joins: "library", from: "path", at: "../../std/releases/0.12.0",
  serves: [GeometryWrittenOnce],
})
