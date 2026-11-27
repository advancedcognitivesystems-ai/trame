/** Reservations · Principles */

import { adr } from "#trame/kinds/adr"
import { CancelWithoutStress } from "./cancellation"
import { CancellationKey } from "./architecture"
import { CancelReservation } from "./api"
import {
  HttpPayment, KeptAsTables, RecordRepositories, ScenarioDatabase, LocalDatabase, ProductionDatabase, FirstReservationsOutsideProduction,
  EmptyInProduction, ProviderApi, SimulatedProvider, ScenarioClock, RealClock, HttpServerChoice,
} from "./infra"
import { JudgedOurWay } from "./judgment"
import { CommandsOnThisMachine, PullRequestsOpened } from "./sdlc"
import { DescribedOnce } from "#data/principles"
import { HarderNeverSofter } from "#std/judgment"
import { ToolingAsPorts } from "#std/tooling"
import { CommandsOfALibrary } from "#std/commands"
import { RepeatedCancellationScenario } from "./scenarios"

/**
 * A cancellation refunds once
 * The payment provider receives an idempotency key for each reservation: a request that arrives twice returns the
 * refund already made.
 */
export const RefundOnce = adr({
  owner: "karim",
  context: "A driver's phone repeats a request when the network drops; the provider must not refund twice.",
  consequences: "The refund is recorded with the cancellation, in one transaction; a repeated request finds it and returns it without calling the provider.",
  rejected: { "Locking the reservation while refunding": "the lock is lost with the connection, and the provider is outside the transaction" },
  serves: [CancelWithoutStress],
  appliedBy: [CancelReservation, CancellationKey, RepeatedCancellationScenario],
})

/**
 * Secrets stay out of the graph
 * The payment provider's API key comes from the environment of the process, never from a decision.
 */
export const SecretsOutOfTheGraph = adr({
  owner: "karim",
  context: "The graph is read by many people, and every value of it shows in the documents and the page.",
  consequences: "Without a key in the environment, the real provider makes no call and says why.",
  rejected: { "The key as a decision": "every document and the page would show it" },
  serves: [CancelWithoutStress],
  appliedBy: [HttpPayment],
})

// The decisions behind the service's choices (the law of choices, E3): each choice of a technology is code; the
// decision behind it is one of these, stated and published, its own reasons or a library's it adopts.

/**
 * What the service keeps is kept in SQL
 * Reservations and refunds are records of the entities the service describes, kept by SQL: in memory for the
 * scenarios, in a file on a developer's machine, in Postgres in production; the code asks the domain's repositories,
 * never SQL. The service adopts the library of data's decision: an entity is described once.
 */
export const KeptInSql = adr({
  owner: "karim",
  context: "A reservation is a row, refunds are many, and several instances of the service write at once in production: a database of SQL keeps them, and finds one by its key.",
  consequences: "Changing the database of an environment is changing its choice; the entities, their migrations and the code that asks for records stay as they are.",
  rejected: { "Files of JSON": "two instances writing at once would lose a refund", "An ORM's models": "a second description of what the entities already describe" },
  serves: [CancelWithoutStress],
  adopts: [DescribedOnce],
  appliedBy: [KeptAsTables, RecordRepositories, ScenarioDatabase, LocalDatabase, ProductionDatabase],
})

/**
 * A table starts with reservations only outside production
 * A scenario and a developer need reservations to read and cancel: there, a table starts with those its entity
 * declares; in production, the reservations are the drivers', and a table starts empty.
 */
export const SeededOutsideProduction = adr({
  owner: "karim",
  context: "The service makes no reservation: it cancels them. A scenario or a developer with an empty table could cancel nothing.",
  consequences: "A seed changed after a deployment is said to its owner: a table made before keeps the reservations it started with.",
  rejected: { "A script that fills the database by hand": "it would drift from the entity's description, and nobody would know which reservations a scenario reads" },
  serves: [CancelWithoutStress],
  appliedBy: [FirstReservationsOutsideProduction, EmptyInProduction],
})

/**
 * Refunds go through the provider, simulated outside production
 * In production a refund goes to the payment provider over HTTPS, with an idempotency key; elsewhere a simulated
 * provider answers, and a scenario reads the calls that were made.
 */
export const RefundsThroughTheProvider = adr({
  owner: "karim",
  context: "Refunds must be tried, in the scenarios and on a developer's machine, without money moving.",
  consequences: "The simulated provider keeps the calls it received: a scenario checks that a cancellation refunds once (RefundOnce).",
  rejected: { "The provider's sandbox everywhere": "the scenarios would need the network and the provider's keys" },
  serves: [CancelWithoutStress],
  appliedBy: [ProviderApi, SimulatedProvider],
})

/**
 * The time is a port
 * The fee of a cancellation depends on the time left before the start: the scenarios stop the clock at an instant of
 * their own; elsewhere the system's clock answers.
 */
export const TimeAsAPort = adr({
  owner: "karim",
  context: "A scenario that read the system's clock would compute another fee each day it is played.",
  rejected: { "Passing the instant to each function": "every caller would read the clock itself, each in its own way" },
  serves: [CancelWithoutStress],
  appliedBy: [ScenarioClock, RealClock],
})

/**
 * The API is served by Node
 * A handful of routes: Node's HTTP server answers them everywhere, and the scenarios call it as clients would.
 */
export const ServedByNode = adr({
  owner: "karim",
  context: "The API is four routes and a health check: what a framework would bring, the service does not need.",
  rejected: { "A web framework": "a dependency to keep up to date for routing four paths" },
  serves: [CancelWithoutStress],
  appliedBy: [HttpServerChoice],
})

/**
 * The service judges itself harder than the language
 * Its build raises the codes it decided to raise; it adopts std's decision: a project judges harder than the language,
 * never softer.
 */
export const JudgedHarder = adr({
  owner: "karim",
  context: "Some warnings of the language are, for this service, what a reviewer would refuse: a decision nobody can check against its cap, an audience nobody identifies.",
  rejected: { "Every warning an error": "the service keeps points to watch that are not faults (an assumption to check by a date)" },
  serves: [CancelWithoutStress],
  adopts: [HarderNeverSofter],
  appliedBy: [JudgedOurWay],
})

/**
 * The service's SDLC runs with std's tooling and commands
 * The programs that deploy and check run in the engine's process; pull requests are opened by std's command, with the
 * service's own way of merging. The service adopts std's decisions on its tooling and on the commands a library offers.
 */
export const SdlcWithStd = adr({
  owner: "karim",
  context: "Opening a pull request and running the programs of a shipment are the same for every project of a repository on GitHub.",
  rejected: { "Scripts of the service's own": "written again in each project, differently" },
  serves: [CancelWithoutStress],
  adopts: [ToolingAsPorts, CommandsOfALibrary],
  appliedBy: [CommandsOnThisMachine, PullRequestsOpened],
})
