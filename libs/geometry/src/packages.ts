/** Geometry · Packages */

// The people of the repository, who own this library's nodes: loaded so that the graph declares them (C4).
import "#team/people"
import { pkg } from "#trame/kinds/package"
import { GeometryWrittenOnce } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation it pins: from the registry of this machine.
 */
export const Language = pkg({
  owner: "ghalaax", packageName: "trame", version: "114", joins: "language", from: "registry",
  serves: [GeometryWrittenOnce],
})

/**
 * The standard library
 * The quantities and the units it builds on (Ratio, the symbols of units), at the version it was released against:
 * from the registry of this machine.
 */
export const StandardLibrary = pkg({
  owner: "ghalaax", packageName: "std", version: "0.21.0", joins: "library", from: "registry",
  serves: [GeometryWrittenOnce],
})

/**
 * The library of continuous integration
 * What the standard library writes its own workflow with, which a library it imports must find: from the registry of
 * this machine.
 */
export const ContinuousIntegration = pkg({
  owner: "ghalaax", packageName: "ci", version: "0.7.0", joins: "library", from: "registry",
  serves: [GeometryWrittenOnce],
})

/**
 * The people of the repository
 * Who works on Trame's repository, declared once as actors (C4): every owner of this library names one of them; from
 * the registry of this machine.
 */
export const People = pkg({
  owner: "ghalaax", packageName: "team", version: "0.1.0", joins: "library", from: "registry",
  serves: [GeometryWrittenOnce],
})
