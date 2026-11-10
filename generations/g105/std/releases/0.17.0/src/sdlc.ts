/** Standard library · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { KindName, Severity } from "#trame/kernel"
import { Verified, Served, Applied, Ruled, Safe } from "./obligations"
import { VersionsThatHold } from "./product"

// How a version of the standard library becomes available (C1): as Trame ships its generations, the library ships its
// versions through its own graph. A version is the library as its people write it, which trame release freezes under
// releases/ and publishes, and which projects import at that version; it holds all the library's code, so its policy
// reaches all of it. trame release ships it first and freezes nothing while it does not hold.

/**
 * The standard library
 * The library as its people write it: what a version freezes, and what projects import at that version.
 */
export const TheLibrary = artifact({ owner: "trame", path: "src", version: true })

/**
 * Its functions verified
 * Every function of the library is verified by a scenario: a function nothing proves is an error, and keeps the version.
 * A structure is verified by its laws; an adapter the library offers, by the projects that choose it.
 */
export const FunctionsVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.function] }, gaps: Severity.error, serves: [VersionsThatHold],
})

/**
 * Its requirements held
 * Every requirement of the goals the library's code serves holds, at any depth.
 */
export const RequirementsServed = obligation({ owner: "trame", applies: Served, serves: [VersionsThatHold] })

/**
 * Its decisions applied
 * Every architecture decision the library's nodes apply holds.
 */
export const DecisionsApplied = obligation({ owner: "trame", applies: Applied, serves: [VersionsThatHold] })

/**
 * Its rules held
 * Every rule of the library's graph holds.
 */
export const RulesHeld = obligation({ owner: "trame", applies: Ruled, serves: [VersionsThatHold] })

/**
 * Its packages safe
 * Every package the library's code uses is installed at its version, without a known vulnerability.
 */
export const PackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [VersionsThatHold] })

/**
 * How a version is made
 * The way the standard library releases a version: its functions verified (a gap is an error), the requirements of its
 * goals held, its decisions applied, its rules held, its packages safe; and the foundations, as always.
 */
export const VersionMode = policy({
  owner: "trame",
  obligations: [FunctionsVerified, RequirementsServed, DecisionsApplied, RulesHeld, PackagesSafe],
})

/**
 * The next version
 * A version of the standard library, for the projects that import it: shipped by trame release, which freezes and
 * publishes it once it holds.
 */
export const NextVersion = shipment({ owner: "trame", target: "version", ships: [TheLibrary], policy: VersionMode })
