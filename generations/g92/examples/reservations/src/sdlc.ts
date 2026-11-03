/** Reservations · SDLC */

import { KindName, Severity } from "#trame/kernel"
import { role } from "#trame/kinds/role"
import { artifact } from "#trame/kinds/artifact"
import { check } from "#trame/kinds/check"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { Verified, Served, Applied, Checked, Ruled, Safe } from "#std/obligations"
import { CancelWithoutStress } from "./cancellation"
import { ReservationsApi } from "./architecture"
import { Production, PostgresDatabase, PostgresDialect, HttpPayment, SystemClock, NodeServer, FileDatabase } from "./infra"

// How a version of the reservations service reaches people. The scenarios run it in memory; what only a machine shows
// (the database of production, the provider's real API, the server, the clock, the database in a file) a person of
// the operators checks by hand, on staging and on a laptop, and signs. A release ships the program assembled for
// production, the way of a release: what it reaches verified, the requirements of the goal held, the decisions
// applied, every check signed, the rules held, the packages safe.

/**
 * The operators
 * Who runs the service, and checks by hand what only a machine shows.
 */
export const Operators = role({ owner: "karim", people: ["karim"] })

/**
 * The program for production
 * The service assembled for production: what a release ships.
 */
export const ProductionProgram = artifact({ owner: "karim", path: "out/production/reservations-api.ts", producedBy: ReservationsApi })

/**
 * The program for a laptop
 * The service assembled for a developer's machine, its database in a file.
 */
export const LocalProgram = artifact({ owner: "karim", path: "out/local/reservations-api.ts", producedBy: ReservationsApi })

/**
 * On staging
 * The program for production, run on the staging machine with its database and the provider's sandbox: what no
 * scenario in memory can show.
 */
export const OnStaging = check({
  owner: "karim",
  on: [ProductionProgram],
  steps: [
    "Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox",
    "Read a reservation, then cancel it twice: one refund at the provider, and the second cancellation answers the same",
    "Restart the program: the cancellation is still there, and the time it shows is the machine's",
  ],
  by: Operators,
  verifies: [NodeServer, PostgresDatabase, PostgresDialect, HttpPayment, SystemClock],
})

/**
 * On a laptop
 * The program for a laptop, run with its database in a file.
 */
export const OnALaptop = check({
  owner: "karim",
  on: [LocalProgram],
  steps: ["Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there"],
  by: Operators,
  verifies: [FileDatabase],
})

/**
 * The code is verified
 * Every scenario that verifies code the program reaches; an entry point or a function nothing verifies is said.
 */
export const CodeVerified = obligation({
  owner: "karim", applies: Verified, params: { kinds: [KindName.entry, KindName.function] }, gaps: Severity.warning, serves: [CancelWithoutStress],
})

/**
 * The requirements of the goal hold
 */
export const GoalServed = obligation({ owner: "karim", applies: Served, serves: [CancelWithoutStress] })

/**
 * The decisions hold
 */
export const DecisionsApplied = obligation({ owner: "karim", applies: Applied, serves: [CancelWithoutStress] })

/**
 * Every check is signed
 */
export const EveryCheck = obligation({ owner: "karim", applies: Checked, params: { by: "all" }, serves: [CancelWithoutStress] })

/**
 * The rules hold
 */
export const RulesHeld = obligation({ owner: "karim", applies: Ruled, serves: [CancelWithoutStress] })

/**
 * The packages are safe
 */
export const PackagesSafe = obligation({ owner: "karim", applies: Safe, serves: [CancelWithoutStress] })

/**
 * The way of a release
 */
export const ReleaseMode = policy({ owner: "karim", obligations: [CodeVerified, GoalServed, DecisionsApplied, EveryCheck, RulesHeld, PackagesSafe] })

/**
 * A release
 * The service for its users, the way of a release: the program for production, and the one developers run.
 */
export const Release = shipment({ owner: "karim", target: "production", ships: [ProductionProgram, LocalProgram], policy: ReleaseMode, environment: Production })
