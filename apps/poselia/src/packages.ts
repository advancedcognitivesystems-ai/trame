/** Poselia · Packages */

// The people of the repository, who own this project's nodes: loaded so that the graph declares them (C4).
import "#team/people"
import { pkg } from "#trame/kinds/package"
import { PractiseGuided } from "./product"

/**
 * Trame
 * The language Poselia is written in, at the generation it pins: reached by its path in Trame's repository.
 */
export const Language = pkg({
  owner: "ghalaax", packageName: "trame", version: "134", joins: "language", from: "path", at: "../../generations/g134",
  serves: [PractiseGuided],
})

/**
 * The standard library
 * The structures, standards, ports of the device and of the SDLC Poselia builds on.
 */
export const StandardLibrary = pkg({
  owner: "ghalaax", packageName: "std", version: "0.30.0", joins: "library", from: "path", at: "../../std/releases/0.30.0",
  serves: [PractiseGuided],
})

/**
 * Continuous integration
 * The writers of the workflow and the script that ship Poselia's preview elsewhere.
 */
export const ContinuousIntegration = pkg({
  owner: "ghalaax", packageName: "ci", version: "0.8.0", joins: "library", from: "path", at: "../../ci/releases/0.8.0",
  serves: [PractiseGuided],
})

/**
 * Geometry
 * The vectors and the angles the body computes with.
 */
export const Geometry = pkg({
  owner: "ghalaax", packageName: "geometry", version: "0.2.0", joins: "library", from: "path", at: "../../libs/geometry/releases/0.2.0",
  serves: [PractiseGuided],
})

/**
 * Data
 * What the app keeps on the device, described once: the person's breath.
 */
export const Data = pkg({
  owner: "ghalaax", packageName: "data", version: "0.5.1", joins: "library", from: "path", at: "../../libs/data/releases/0.5.1",
  serves: [PractiseGuided],
})

/**
 * The people of the repository
 * Who works on Trame's repository, declared once as actors (C4): every owner of this project names one of them.
 */
export const People = pkg({
  owner: "ghalaax", packageName: "team", version: "0.1.0", joins: "library", from: "path", at: "../../libs/team/releases/0.1.0",
  serves: [PractiseGuided],
})
