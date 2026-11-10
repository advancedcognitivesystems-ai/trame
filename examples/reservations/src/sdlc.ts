/** Reservations · SDLC */

import { KindName, Severity } from "#trame/kernel"
import { component } from "#trame/kinds/component"
import { entryPoint, command } from "#trame/kinds/entry-point"
import { binding } from "#trame/kinds/binding"
import { role } from "#trame/kinds/role"
import { artifact } from "#trame/kinds/artifact"
import { check } from "#trame/kinds/check"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { Verified, Served, Applied, Checked, Ruled, Safe } from "#std/obligations"
import { Migrated } from "#data/obligations"
import { Records, PostgresTables, StartEmpty } from "#data/records"
import { ProgramCommands, NodeProgramCommands } from "#std/tooling"
import { ExitStatus } from "#std/system"
import { Adapter } from "#std/patterns"
import { CancelWithoutStress } from "./cancellation"
import { ReservationsApi } from "./architecture"
import { KeptReservation, KeptRefund } from "./data"
import { ApiMessages } from "./messages"
import { Production, Local, PostgresDatabase, HttpPayment, SystemClock, NodeServer, FileDatabase } from "./infra"

// How a version of the reservations service reaches people. The scenarios run it in memory; what only a machine shows
// (the database of production, the provider's real API, the server, the clock, the database in a file) a person of
// the operators checks by hand, on staging and on a laptop, and signs. A release ships the program assembled for
// production, the way of a release: what it reaches verified, the requirements of the goal held, the decisions
// applied, every check signed, the rules held, the packages safe, what it keeps migrated. On this machine, a version
// is deployed for real: the program for a laptop built, and its database made ready (migrated from the version the
// previous deployment kept) by a program of the SDLC.

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
export const LocalProgram = artifact({ owner: "karim", path: "out/local/reservations-api.ts", producedBy: ReservationsApi, environment: Local })

/**
 * The service's SDLC
 * The programs that deploy the service, run by trame ship (or by a person): the first word names the command.
 */
export const ReservationsSdlc = component({
  owner: "karim",
  language: "typescript",
  environments: [Local],
  deps: { exposure: ProgramCommands },
})

/**
 * Commands on this machine
 * The programs of the SDLC read their commands from Node's command line, as the standard library realizes it.
 */
export const CommandsOnThisMachine = binding({
  owner: "karim",
  chooses: [NodeProgramCommands],
  environments: [Local],
  follows: [Adapter],
  context: "trame ship runs the programs that deploy as a person would run them, with Node.",
})

/**
 * Prepare the storage
 * Makes the table of each entity the service keeps ready, before the service starts: created with what it starts with,
 * or migrated from the version the previous deployment kept.
 */
export const PrepareStorage = entryPoint({
  owner: "karim",
  in: ReservationsSdlc,
  serves: [CancelWithoutStress],
  trigger: command("prepare-storage"),
  deps: { records: Records, reservations: KeptReservation, refunds: KeptRefund, say: ApiMessages, exit: ExitStatus },
  body: ({ records, reservations, refunds, say, exit }) => async () => {
    await records.prepare(reservations)
    await records.prepare(refunds)
    return { status: exit.success, body: [say.prepared([reservations.name, refunds.name])] }
  },
})

/**
 * On staging
 * The program for production, run on the staging machine with its database and the provider's sandbox: what no
 * scenario in memory can show.
 */
export const OnStaging = check({
  owner: "karim",
  on: [ProductionProgram],
  steps: [
    "Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox: its tables are created empty",
    "Insert a reservation, read it, then cancel it twice: one refund at the provider, and the second cancellation answers the same",
    "Restart the program: the cancellation is still there, and the time it shows is the machine's",
  ],
  by: Operators,
  verifies: [NodeServer, PostgresDatabase, PostgresTables, StartEmpty, HttpPayment, SystemClock],
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
 * What the service keeps, migrated
 * The reservations and the refunds migrate from every version a deployment kept: a step their owner has not decided
 * keeps the shipment, since what drivers reserved and were refunded would be lost.
 */
export const KeptMigrates = obligation({ owner: "karim", applies: Migrated, gaps: Severity.error, serves: [CancelWithoutStress] })

/**
 * The way of a release
 */
export const ReleaseMode = policy({ owner: "karim", obligations: [CodeVerified, GoalServed, DecisionsApplied, EveryCheck, RulesHeld, PackagesSafe, KeptMigrates] })

/**
 * The way of this machine
 * For a developer: the code verified (a gap said), the rules held, what the service keeps migrated.
 */
export const MachineMode = policy({ owner: "karim", obligations: [CodeVerified, RulesHeld, KeptMigrates] })

/**
 * A release
 * The service for its users, the way of a release: the program for production, and the one developers run.
 */
export const Release = shipment({ owner: "karim", target: "production", ships: [ProductionProgram, LocalProgram], policy: ReleaseMode, environment: Production })

/**
 * On this machine
 * The service on a developer's machine, the way of this machine: the program for a laptop built, and its database made
 * ready, migrated from what the previous deployment kept.
 */
export const OnThisMachine = shipment({
  owner: "karim",
  target: "local",
  ships: [LocalProgram],
  policy: MachineMode,
  deploys: [PrepareStorage],
  environment: Local,
})
