/** Geometry · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { Applied, Safe } from "#std/obligations"
import { GeometryWrittenOnce } from "./product"

// How a version of the library becomes available (C1): it ships through the library's own graph, as Trame ships its
// generations. A version holds all the library's code; its structure is proven by its laws, its quantity by its
// source, and the decision that makes them what they are by both. trame release ships it first and freezes nothing
// while it does not hold.

/**
 * The library of geometry
 * The library as its people write it: what a version freezes, and what projects import at that version.
 */
export const TheLibrary = artifact({ owner: "ghalaax", path: "src", version: true })

/**
 * Its decisions applied
 * Every architecture decision the library's nodes apply holds: a vector is three numbers, an angle a quantity.
 */
export const DecisionsApplied = obligation({ owner: "ghalaax", applies: Applied, serves: [GeometryWrittenOnce] })

/**
 * Its packages safe
 * Every package the library's code uses is installed at its version, without a known vulnerability.
 */
export const PackagesSafe = obligation({ owner: "ghalaax", applies: Safe, serves: [GeometryWrittenOnce] })

/**
 * How a version is made
 * The way the library releases a version: its decisions applied, its packages safe; and the foundations, as always.
 */
export const VersionMode = policy({ owner: "ghalaax", obligations: [DecisionsApplied, PackagesSafe] })

/**
 * The next version
 * A version of the library of geometry, for the projects that import it: shipped by trame release, which freezes and
 * publishes it once it holds.
 */
export const NextVersion = shipment({ owner: "ghalaax", target: "version", ships: [TheLibrary], policy: VersionMode })
