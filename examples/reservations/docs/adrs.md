# Architecture decisions

*The choices that shape the product without being values, in force on 30 October 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **10 architecture decisions, 3 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | **held** | [A read writes nothing](architecture.md#ReadWithoutWrite), [Every call to a third party is verified](architecture.md#ThirdPartiesVerified), [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) |
| [A cancellation refunds once](principles.md#RefundOnce) | **held** | [Cancel a reservation](api.md#CancelReservation), [Key of a cancellation's refund](architecture.md#CancellationKey), [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | **unknown** | [Real payment provider](infra.md#HttpPayment) |
| [What the service keeps is kept in SQL](principles.md#KeptInSql) | **unknown** | [What the service keeps, as tables](infra.md#KeptAsTables), [A SQLite file on the developer's machine](infra.md#LocalDatabase), [Postgres in production](infra.md#ProductionDatabase), [Reservations and cancellations as repositories over the records](infra.md#RecordRepositories), [A SQLite database in memory for the scenarios](infra.md#ScenarioDatabase) |
| [A table starts with reservations only outside production](principles.md#SeededOutsideProduction) | **unknown** | [Nothing to start with in production](infra.md#EmptyInProduction), [The first reservations outside production](infra.md#FirstReservationsOutsideProduction) |
| [Refunds go through the provider, simulated outside production](principles.md#RefundsThroughTheProvider) | **unknown** | [The provider's API in production](infra.md#ProviderApi), [A simulated payment provider outside production](infra.md#SimulatedProvider) |
| [The time is a port](principles.md#TimeAsAPort) | **unknown** | [The system clock elsewhere](infra.md#RealClock), [A stopped clock in the scenarios](infra.md#ScenarioClock) |
| [The API is served by Node](principles.md#ServedByNode) | **unknown** | [Node's HTTP server](infra.md#HttpServerChoice) |
| [The service judges itself harder than the language](principles.md#JudgedHarder) | **held** | [How the service is judged](judgment.md#JudgedOurWay) |
| [The service's SDLC runs with std's tooling and commands](principles.md#SdlcWithStd) | **unknown** | [Commands on this machine](sdlc.md#CommandsOnThisMachine), [Pull requests opened by the library](sdlc.md#PullRequestsOpened) |

## Reservations · Architecture

<a id="EffectsFollowTheRequest"></a>

### Effects follow the request

`EffectsFollowTheRequest` · `src/architecture.ts:140` · status: **held** · published

What an entry point may do follows what it is asked: a read changes nothing, a utility touches nothing, and a call to the payment provider is verified by a scenario before it reaches a driver.

Context: A driver who reads a reservation must never pay for it, and a refund must never be sent untested.

Consequences: Three rules judge the effects of every entry point and function at each build.

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [A read writes nothing](architecture.md#ReadWithoutWrite), [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld), [Every call to a third party is verified](architecture.md#ThirdPartiesVerified)

## Reservations · Principles

<a id="RefundOnce"></a>

### A cancellation refunds once

`RefundOnce` · `src/principles.ts:24` · status: **held** · published

The payment provider receives an idempotency key for each reservation: a request that arrives twice returns the refund already made.

Context: A driver's phone repeats a request when the network drops; the provider must not refund twice.

Consequences: The refund is recorded with the cancellation, in one transaction; a repeated request finds it and returns it without calling the provider.

| Rejected | Why |
|---|---|
| Locking the reservation while refunding | the lock is lost with the connection, and the provider is outside the transaction |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [Cancel a reservation](api.md#CancelReservation), [Key of a cancellation's refund](architecture.md#CancellationKey), [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario)

<a id="SecretsOutOfTheGraph"></a>

### Secrets stay out of the graph

`SecretsOutOfTheGraph` · `src/principles.ts:37` · status: **unknown** · published

The payment provider's API key comes from the environment of the process, never from a decision.

Context: The graph is read by many people, and every value of it shows in the documents and the page.

Consequences: Without a key in the environment, the real provider makes no call and says why.

| Rejected | Why |
|---|---|
| The key as a decision | every document and the page would show it |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [Real payment provider](infra.md#HttpPayment)

<a id="KeptInSql"></a>

### What the service keeps is kept in SQL

`KeptInSql` · `src/principles.ts:55` · status: **unknown** · published

Reservations and refunds are records of the entities the service describes, kept by SQL: in memory for the scenarios, in a file on a developer's machine, in Postgres in production; the code asks the domain's repositories, never SQL. The service adopts the library of data's decision: an entity is described once.

Context: A reservation is a row, refunds are many, and several instances of the service write at once in production: a database of SQL keeps them, and finds one by its key.

Consequences: Changing the database of an environment is changing its choice; the entities, their migrations and the code that asks for records stay as they are.

| Rejected | Why |
|---|---|
| Files of JSON | two instances writing at once would lose a refund |
| An ORM's models | a second description of what the entities already describe |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [What the service keeps, as tables](infra.md#KeptAsTables), [Reservations and cancellations as repositories over the records](infra.md#RecordRepositories), [A SQLite database in memory for the scenarios](infra.md#ScenarioDatabase), [A SQLite file on the developer's machine](infra.md#LocalDatabase), [Postgres in production](infra.md#ProductionDatabase)
- Adopts: [An entity is described once](../../../libs/data/docs/principles.md#DescribedOnce)

<a id="SeededOutsideProduction"></a>

### A table starts with reservations only outside production

`SeededOutsideProduction` · `src/principles.ts:70` · status: **unknown** · published

A scenario and a developer need reservations to read and cancel: there, a table starts with those its entity declares; in production, the reservations are the drivers', and a table starts empty.

Context: The service makes no reservation: it cancels them. A scenario or a developer with an empty table could cancel nothing.

Consequences: A seed changed after a deployment is said to its owner: a table made before keeps the reservations it started with.

| Rejected | Why |
|---|---|
| A script that fills the database by hand | it would drift from the entity's description, and nobody would know which reservations a scenario reads |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [The first reservations outside production](infra.md#FirstReservationsOutsideProduction), [Nothing to start with in production](infra.md#EmptyInProduction)

<a id="RefundsThroughTheProvider"></a>

### Refunds go through the provider, simulated outside production

`RefundsThroughTheProvider` · `src/principles.ts:84` · status: **unknown** · published

In production a refund goes to the payment provider over HTTPS, with an idempotency key; elsewhere a simulated provider answers, and a scenario reads the calls that were made.

Context: Refunds must be tried, in the scenarios and on a developer's machine, without money moving.

Consequences: The simulated provider keeps the calls it received: a scenario checks that a cancellation refunds once (RefundOnce).

| Rejected | Why |
|---|---|
| The provider's sandbox everywhere | the scenarios would need the network and the provider's keys |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [The provider's API in production](infra.md#ProviderApi), [A simulated payment provider outside production](infra.md#SimulatedProvider)

<a id="TimeAsAPort"></a>

### The time is a port

`TimeAsAPort` · `src/principles.ts:98` · status: **unknown** · published

The fee of a cancellation depends on the time left before the start: the scenarios stop the clock at an instant of their own; elsewhere the system's clock answers.

Context: A scenario that read the system's clock would compute another fee each day it is played.

| Rejected | Why |
|---|---|
| Passing the instant to each function | every caller would read the clock itself, each in its own way |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [A stopped clock in the scenarios](infra.md#ScenarioClock), [The system clock elsewhere](infra.md#RealClock)

<a id="ServedByNode"></a>

### The API is served by Node

`ServedByNode` · `src/principles.ts:110` · status: **unknown** · published

A handful of routes: Node's HTTP server answers them everywhere, and the scenarios call it as clients would.

Context: The API is four routes and a health check: what a framework would bring, the service does not need.

| Rejected | Why |
|---|---|
| A web framework | a dependency to keep up to date for routing four paths |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [Node's HTTP server](infra.md#HttpServerChoice)

<a id="JudgedHarder"></a>

### The service judges itself harder than the language

`JudgedHarder` · `src/principles.ts:123` · status: **held** · published

Its build raises the codes it decided to raise; it adopts std's decision: a project judges harder than the language, never softer.

Context: Some warnings of the language are, for this service, what a reviewer would refuse: a decision nobody can check against its cap, an audience nobody identifies.

| Rejected | Why |
|---|---|
| Every warning an error | the service keeps points to watch that are not faults (an assumption to check by a date) |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [How the service is judged](judgment.md#JudgedOurWay)
- Adopts: [A project judges harder than the language, never softer](../../../std/docs/judgment.md#HarderNeverSofter)

<a id="SdlcWithStd"></a>

### The service's SDLC runs with std's tooling and commands

`SdlcWithStd` · `src/principles.ts:137` · status: **unknown** · published

The programs that deploy and check run in the engine's process; pull requests are opened by std's command, with the service's own way of merging. The service adopts std's decisions on its tooling and on the commands a library offers.

Context: Opening a pull request and running the programs of a shipment are the same for every project of a repository on GitHub.

| Rejected | Why |
|---|---|
| Scripts of the service's own | written again in each project, differently |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [Commands on this machine](sdlc.md#CommandsOnThisMachine), [Pull requests opened by the library](sdlc.md#PullRequestsOpened)
- Adopts: [The SDLC's tooling is realized once](../../../std/docs/tooling.md#ToolingAsPorts), [A library offers commands, a project chooses them](../../../std/docs/commands.md#CommandsOfALibrary)
