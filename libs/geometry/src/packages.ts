/** Geometry · Packages */

import { pkg } from "#trame/kinds/package"
import { GeometryWrittenOnce } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation it pins: from the registry of this machine.
 */
export const Language = pkg({
  owner: "ghalaax", packageName: "trame", version: "106", joins: "language", from: "registry",
  serves: [GeometryWrittenOnce],
})

/**
 * The standard library
 * The quantities and the units it builds on (Ratio, the symbols of units), at the version it was released against:
 * from the registry of this machine.
 */
export const StandardLibrary = pkg({
  owner: "ghalaax", packageName: "std", version: "0.17.0", joins: "library", from: "registry",
  serves: [GeometryWrittenOnce],
})
