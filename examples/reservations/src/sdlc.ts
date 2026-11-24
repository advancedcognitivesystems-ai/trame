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
import { Verified, Served, Applied, Checked, Ruled, Safe, Identified, Published } from "#std/obligations"
import { Migrated } from "#data/obligations"
import { Records, PostgresTables, StartEmpty } from "#data/records"
import { ProgramCommands, CommandsInTheEngine } from "#std/tooling"
import { OpenPullRequest, PullRequestSettings } from "#std/commands"
import { GitCliBranches, GitHubCliPullRequests, AutoMergeByGitHubCli, type MergeMethod } from "#std/repository"
import { Command } from "#std/patterns"
import { fn } from "#trame/kinds/function"
import { ExitStatus } from "#std/system"
import { TheOperators } from "#std/access"
import { Adapter } from "#std/patterns"
import { CancelWithoutStress } from "./cancellation"
import { ReservationsApi } from "./architecture"
import { KeptReservation, KeptRefund } from "./data"
import { ApiMessages } from "./messages"
import { Production, Local, PostgresDatabase, HttpPayment, SystemClock, NodeServer, FileDatabase } from "./infra"
import { GitHubWorkflow, MergeWays, type WorkflowSettings, type MergeWay } from "#ci/github"
import { decision } from "#trame/kinds/decision"

// How a version of the reservations service reaches people. The scenarios run it in memory; what only a machine shows
// (the database of production, the provider's real API, the server, the clock, the database in a file) a person of
// the operators checks by hand, on staging and on a laptop, and signs. A release ships the program assembled for
// production, the way of a release: what it reaches verified, the requirements of the goal held, the decisions
// applied, every check signed, the rules held, the packages safe, what it keeps migrated. On this machine, a version
// is deployed for real: the program for a laptop built, and its database made ready (migrated from the version the
// previous deployment kept) by a program of the SDLC.

/**
 * The operators
 * Who runs the service, and checks by hand what only a machine shows. While Karim is away in December, Léa signs his
 * checks for him (C4): the evidence is his, she is named with it.
 */
export const Operators = role({ owner: "karim", people: ["karim"], delegations: [{ agent: "lea", for: "karim", until: "2026-12-31" }] })

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
 * The programs of the SDLC offer their commands to the engine that runs them, in its own process, as the standard
 * library realizes it: trame ship runs the ones that deploy, a person types one through trame.
 */
export const CommandsOnThisMachine = binding({
  owner: "karim",
  chooses: [CommandsInTheEngine],
  environments: [Local],
  follows: [Adapter],
  context: "trame ship runs the programs that deploy, and a person their commands, through the engine that reads the graph: one compilation, the same command line.",
})

/**
 * Prepare the storage
 * Makes the table of each entity the service keeps ready, before the service starts: created with what it starts with,
 * or migrated from the version the previous deployment kept.
 */
export const PrepareStorage = entryPoint({
  owner: "karim",
  in: ReservationsSdlc,
  for: TheOperators,
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
 * Who calls, identified
 * Each audience the service's entry points are for that carries an identity (drivers) is identified where a release runs
 * it: otherwise whoever reaches the service would call as any driver. A gap is said, not yet refused: nothing can
 * identify anyone before C7.
 */
export const CallersIdentified = obligation({ owner: "karim", applies: Identified, gaps: Severity.warning, serves: [CancelWithoutStress] })

/**
 * The way of a release
 */
export const ReleaseMode = policy({
  owner: "karim",
  obligations: [CodeVerified, GoalServed, DecisionsApplied, EveryCheck, RulesHeld, PackagesSafe, KeptMigrates, CallersIdentified],
})

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

/**
 * The service
 * The service as its people write it: what a pull request brings into the main branch, all its code.
 */
export const TheService = artifact({ owner: "karim", path: "src", version: true })

/**
 * What people decided, published
 * Each part of a declaration people decide (a value, a statement) is published in trame.lock before it merges: what the
 * pull request changes of it is then its review.
 */
export const PublishedBeforeMerging = obligation({ owner: "karim", applies: Published, gaps: Severity.error, serves: [CancelWithoutStress] })

/**
 * How a change merges
 * The way the service takes a change into its main branch: what people decided is published; and the foundations, as
 * always.
 */
export const MergeMode = policy({ owner: "karim", obligations: [PublishedBeforeMerging] })

/**
 * Into the main branch
 * A pull request into main: it merges once it holds, as the repository's settings say (D1).
 */
export const IntoMain = shipment({ owner: "karim", target: "main", ships: [TheService], policy: MergeMode })

/**
 * How a pull request is checked on GitHub
 * At each pull request into main, on GitHub's Ubuntu 24.04 machine with Node.js 22: its job, named reservations, is a check the
 * repository requires; it writes in it the review of the branch (what its declarations not yet published add to those published), and keeps GitHub from merging a pull request that changes what people decided (a
 * trame.lock of the repository), which a person then merges (D1).
 */
export const PullRequestsOnGitHub = decision<WorkflowSettings>({
  owner: "karim",
  value: {
    on: { pullRequests: ["main"] }, job: "reservations", runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 },
    pullRequest: { review: true, merge: "onceItHoldsUnlessDecided" },
  },
  rejected: {
    "Only when a pull request touches the project": "GitHub keeps a pull request waiting for a check it requires and that never ran",
    "Merged by GitHub whatever it changes": "what people decided would reach main without a person",
  },
})

/**
 * The pull requests' workflow
 * The workflow that checks a pull request on GitHub, written from the pipeline of the shipment it runs: it prepares the
 * machine as the plan says, writes the review of the branch in the pull request, keeps GitHub from merging what people decided, then
 * runs trame ship.
 */
export const PullRequestWorkflow = artifact({
  owner: "karim",
  path: "../../.github/workflows/reservations-pull-request.yml",
  media: "application/yaml",
  producedBy: GitHubWorkflow,
  runs: IntoMain,
  settings: PullRequestsOnGitHub,
})

/**
 * The files that run it elsewhere
 * The workflow that checks each pull request, written by trame ship from the graph and kept in the repository where
 * GitHub finds it; shipped again when the pipeline it runs changes.
 */
export const RunnersWritten = shipment({
  owner: "karim",
  target: "repository",
  ships: [PullRequestWorkflow],
})

/** How the service's pull requests are opened and merged, as its team decides. */
export interface PullRequestDecision {
  /** Its repository on GitHub, owner/name, and the branch pull requests go into. */
  repository: string
  base: string
  /** How a pull request is merged. */
  method: MergeMethod
  /** The file the service freezes what people decide in. */
  lock: string
  /** The service, the only project of its repository, at its root. */
  project: { name: string; dir: string }
}

/**
 * How we merge
 * The service's repository, its main branch, merged by a merge commit; what people decide frozen in trame.lock, as
 * Trame publishes it.
 */
export const HowWeMerge = decision<PullRequestDecision>({
  owner: "karim",
  value: { repository: "karim/reservations", base: "main", method: "merge", lock: "trame.lock", project: { name: "reservations", dir: "." } },
  rejected: { "Squashed": "a pull request that publishes keeps its publication apart from the code it publishes" },
})

/**
 * Our pull requests
 * As decided, and merged by GitHub once they hold as the pull requests' workflow says: unless they change what people
 * decided; a person merges them when it says nothing.
 */
export const OurPullRequests = fn({
  owner: "karim", implements: [PullRequestSettings], serves: [CancelWithoutStress],
  deps: { merging: HowWeMerge, workflow: PullRequestsOnGitHub, ways: MergeWays },
  body: ({ merging: { project, ...merging }, workflow, ways }) => {
    const [byHand] = ways as readonly [MergeWay]
    return { ...merging, merge: workflow.pullRequest?.merge ?? byHand, projects: [project] }
  },
})

/**
 * Pull requests opened by the library
 * The service takes std's pull-request, on the machine, with its own settings; Git's and GitHub's command lines answer
 * it there.
 */
export const PullRequestsOpened = binding({
  owner: "karim",
  chooses: [OpenPullRequest, OurPullRequests, GitCliBranches, GitHubCliPullRequests, AutoMergeByGitHubCli],
  environments: [Local],
  follows: [Command],
  context: "Opening a pull request is the same for every project of a repository on GitHub: the library writes it once, the service says how it merges.",
})
