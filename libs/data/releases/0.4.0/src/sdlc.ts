/** Data · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { KindName, Severity } from "#trame/kernel"
import { Verified, Served, Applied, Safe } from "#std/obligations"
import { DataDescribedOnce } from "./product"

// How a version of the library of data becomes available (C1): through its own graph. A version holds all the
// library's code (its kind too, in src/kinds), and trame release ships it before it freezes it.

/**
 * The library of data
 * The library as its people write it: what a version freezes, and what projects import at that version.
 */
export const TheLibrary = artifact({ owner: "trame", path: "src", version: true })

/**
 * Its functions verified
 * Every function of the library is verified by a scenario: one nothing proves is an error, and keeps the version.
 */
export const FunctionsVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.function] }, gaps: Severity.error, serves: [DataDescribedOnce],
})

/**
 * Its requirements held
 * Every requirement of the goal the library serves holds.
 */
export const RequirementsServed = obligation({ owner: "trame", applies: Served, serves: [DataDescribedOnce] })

/**
 * Its decisions applied
 * Every architecture decision the library's nodes apply holds: an entity is described once.
 */
export const DecisionsApplied = obligation({ owner: "trame", applies: Applied, serves: [DataDescribedOnce] })

/**
 * Its packages safe
 * Every package the library's code uses is installed at its version, without a known vulnerability.
 */
export const PackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [DataDescribedOnce] })

/**
 * How a version is made
 * Its functions verified (a gap is an error), its requirements held, its decisions applied, its packages safe; and the
 * foundations, as always.
 */
export const VersionMode = policy({ owner: "trame", obligations: [FunctionsVerified, RequirementsServed, DecisionsApplied, PackagesSafe] })

/**
 * The next version
 * A version of the library of data, for the projects that import it: shipped by trame release, which freezes and
 * publishes it once it holds.
 */
export const NextVersion = shipment({ owner: "trame", target: "version", ships: [TheLibrary], policy: VersionMode })
