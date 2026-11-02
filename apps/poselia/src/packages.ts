/** Poselia · Packages */

import { pkg } from "#trame/kinds/package"
import { PractiseGuided } from "./product"

/**
 * Trame
 * The language Poselia is written in, at the generation it pins: reached by its path in Trame's repository.
 */
export const Language = pkg({
  owner: "ghalaax", packageName: "trame", version: "94", joins: "language", from: "path", at: "../../generations/g94",
  serves: [PractiseGuided],
})

/**
 * The standard library
 * The structures, standards, ports of the device and of the SDLC Poselia builds on.
 */
export const StandardLibrary = pkg({
  owner: "ghalaax", packageName: "std", version: "0.13.0", joins: "library", from: "path", at: "../../std/releases/0.13.0",
  serves: [PractiseGuided],
})

/**
 * Continuous integration
 * The writers of the workflow and the script that ship Poselia's preview elsewhere.
 */
export const ContinuousIntegration = pkg({
  owner: "ghalaax", packageName: "ci", version: "0.3.0", joins: "library", from: "path", at: "../../ci/releases/0.3.0",
  serves: [PractiseGuided],
})

/**
 * Geometry
 * The vectors and the angles the body computes with.
 */
export const Geometry = pkg({
  owner: "ghalaax", packageName: "geometry", version: "0.1.0", joins: "library", from: "path", at: "../../libs/geometry/releases/0.1.0",
  serves: [PractiseGuided],
})
