# Technical choices

*What answers each port in each environment on 30 October 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **13 technical choices for 11 ports, in 3 environments**

| Port | Test | Local | Production |
|---|---|---|---|
| [Reservation reading](architecture.md#ReservationReading) | [Reservations as records](infra.md#ReservationRecords) | [Reservations as records](infra.md#ReservationRecords) | [Reservations as records](infra.md#ReservationRecords) |
| [Cancellation records](architecture.md#Cancellations) | [Cancellations as records](infra.md#CancellationRecords) | [Cancellations as records](infra.md#CancellationRecords) | [Cancellations as records](infra.md#CancellationRecords) |
| [Payment provider](architecture.md#Payment) | [Simulated payment provider](infra.md#SimulatedPayment) | [Simulated payment provider](infra.md#SimulatedPayment) | [Real payment provider](infra.md#HttpPayment) |
| [Payment log](architecture.md#PaymentLog) | [Simulated payment provider](infra.md#SimulatedPayment) | [Simulated payment provider](infra.md#SimulatedPayment) | — |
| [Clock](architecture.md#Clock) | [Stopped clock](infra.md#StoppedClock) | [System clock](infra.md#SystemClock) | [System clock](infra.md#SystemClock) |
| [HTTP exposure](architecture.md#HttpExposure) | [Node HTTP server](infra.md#NodeServer) | [Node HTTP server](infra.md#NodeServer) | [Node HTTP server](infra.md#NodeServer) |
| [A database of SQL](../../../libs/data/docs/records.md#SqlDatabase) | [SQLite in memory](../../../libs/data/docs/records.md#SqliteInMemory) | [Local SQLite database](infra.md#FileDatabase) | [Production Postgres database](infra.md#PostgresDatabase) |
| [A dialect of SQL, for tables](../../../libs/data/docs/records.md#TableDialect) | [SQLite's tables](../../../libs/data/docs/records.md#SqliteTables) | [SQLite's tables](../../../libs/data/docs/records.md#SqliteTables) | [PostgreSQL's tables](../../../libs/data/docs/records.md#PostgresTables) |
| [What a new table starts with](../../../libs/data/docs/records.md#InitialRecords) | [The first reservations](infra.md#FirstReservations) | [The first reservations](infra.md#FirstReservations) | [No records to start with](../../../libs/data/docs/records.md#StartEmpty) |
| [Records](../../../libs/data/docs/records.md#Records) | [Records in SQL](../../../libs/data/docs/records.md#RecordsInSql) | [Records in SQL](../../../libs/data/docs/records.md#RecordsInSql) | [Records in SQL](../../../libs/data/docs/records.md#RecordsInSql) |
| [Commands of a program](../../../std/docs/tooling.md#ProgramCommands) | — | [Node's command line](../../../std/docs/tooling.md#NodeProgramCommands) | — |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../../../std/docs/patterns.md#Strategy) | **held** | [What the service keeps, as tables](infra.md#KeptAsTables), [The first reservations outside production](infra.md#FirstReservationsOutsideProduction), [Nothing to start with in production](infra.md#EmptyInProduction), [A simulated payment provider outside production](infra.md#SimulatedProvider), [A stopped clock in the scenarios](infra.md#ScenarioClock), [Documents, in memory](../../../libs/data/docs/scenarios.md#InMemory), [PostgreSQL's dialect, read](../../../libs/data/docs/scenarios.md#PostgresForScenarios), [In memory](../../../std/docs/scenarios.md#InMemory) |
| [Adapter](../../../std/docs/patterns.md#Adapter) | **held** | [The provider's API in production](infra.md#ProviderApi), [Node's HTTP server](infra.md#HttpServerChoice), [The system clock elsewhere](infra.md#RealClock), [Commands on this machine](sdlc.md#CommandsOnThisMachine), [SQLite, in memory](../../../libs/data/docs/scenarios.md#SqliteForScenarios) |
| [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory) | **held** | [A SQLite database in memory for the scenarios](infra.md#ScenarioDatabase), [A SQLite file on the developer's machine](infra.md#LocalDatabase), [Postgres in production](infra.md#ProductionDatabase) |
| [Repository](../../../std/docs/patterns.md#Repository) | **held** | [Reservations and cancellations as repositories over the records](infra.md#RecordRepositories) |

## Reservations · Infrastructure

<a id="ScenarioDatabase"></a>

### A SQLite database in memory for the scenarios

`ScenarioDatabase` · `src/infra.ts:246` · status: **held**

The database and its dialect, chosen together.

In [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [A database of SQL](../../../libs/data/docs/records.md#SqlDatabase) | [SQLite in memory](../../../libs/data/docs/records.md#SqliteInMemory) | an implementation |
| [A dialect of SQL, for tables](../../../libs/data/docs/records.md#TableDialect) | [SQLite's tables](../../../libs/data/docs/records.md#SqliteTables) | a function |

Context: Every scenario starts from the initial reservations and leaves nothing behind.

| Rejected | Why |
|---|---|
| A shared file | a scenario would see what the previous one wrote |

- Decided by: karim
- Chooses: [SQLite in memory](../../../libs/data/docs/records.md#SqliteInMemory), [SQLite's tables](../../../libs/data/docs/records.md#SqliteTables)
- In: [Test](infra.md#Test)
- Follows: [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory)

<a id="LocalDatabase"></a>

### A SQLite file on the developer's machine

`LocalDatabase` · `src/infra.ts:259` · status: **unknown**

The database and its dialect, chosen together.

In [Local](infra.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [A dialect of SQL, for tables](../../../libs/data/docs/records.md#TableDialect) | [SQLite's tables](../../../libs/data/docs/records.md#SqliteTables) | a function |
| [A database of SQL](../../../libs/data/docs/records.md#SqlDatabase) | [Local SQLite database](infra.md#FileDatabase) | an implementation |

Context: A developer runs the service without installing a database server; the reservations survive a restart.

| Rejected | Why |
|---|---|
| Postgres in a container | one more thing to install and start for a prototype |

- Decided by: karim
- Chooses: [Local SQLite database](infra.md#FileDatabase), [SQLite's tables](../../../libs/data/docs/records.md#SqliteTables)
- In: [Local](infra.md#Local)
- Follows: [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory)

<a id="ProductionDatabase"></a>

### Postgres in production

`ProductionDatabase` · `src/infra.ts:272` · status: **unknown**

The database and its dialect, chosen together.

In [Production](infra.md#Production):

| Port | Answered by | Which is |
|---|---|---|
| [A dialect of SQL, for tables](../../../libs/data/docs/records.md#TableDialect) | [PostgreSQL's tables](../../../libs/data/docs/records.md#PostgresTables) | a function |
| [A database of SQL](../../../libs/data/docs/records.md#SqlDatabase) | [Production Postgres database](infra.md#PostgresDatabase) | an implementation |

Context: Several instances of the service write at once, and the provider keeps the backups.

Consequences: Provisioned by Terraform with the graph's values; its statements come from PostgreSQL's dialect, which cannot be mixed with SQLite's. The prototype ships no Postgres driver yet.

| Rejected | Why |
|---|---|
| SQLite in production | one writer at a time, and the backups would be ours |

- Decided by: karim
- Chooses: [Production Postgres database](infra.md#PostgresDatabase), [PostgreSQL's tables](../../../libs/data/docs/records.md#PostgresTables)
- In: [Production](infra.md#Production)
- Follows: [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory)

<a id="KeptAsTables"></a>

### What the service keeps, as tables

`KeptAsTables` · `src/infra.ts:287` · status: **held**

Each entity the service keeps is a table, made ready by a deployment, migrated from the version the previous one kept and read back checked, by the library of data, whichever database answers.

In [Local](infra.md#Local), [Production](infra.md#Production), [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Records](../../../libs/data/docs/records.md#Records) | [Records in SQL](../../../libs/data/docs/records.md#RecordsInSql) | a function |

Context: A reservation is a row, and refunds are many: a database of SQL keeps them, and finds one by its key.

Consequences: No statement is written by hand: the dialect writes them from the entities, and a change of an entity is a migration its owner decides in the graph.

| Rejected | Why |
|---|---|
| A document per reservation | a reservation is found by its key among many, and two writes are kept together |

- Decided by: karim
- Chooses: [Records in SQL](../../../libs/data/docs/records.md#RecordsInSql)
- In: [Test](infra.md#Test), [Local](infra.md#Local), [Production](infra.md#Production)
- Follows: [Strategy](../../../std/docs/patterns.md#Strategy)

<a id="FirstReservationsOutsideProduction"></a>

### The first reservations outside production

`FirstReservationsOutsideProduction` · `src/infra.ts:300` · status: **held**

In [Local](infra.md#Local), [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [What a new table starts with](../../../libs/data/docs/records.md#InitialRecords) | [The first reservations](infra.md#FirstReservations) | a function |

Context: A scenario and a developer need reservations to read and cancel, and the service makes none.

- Decided by: karim
- Chooses: [The first reservations](infra.md#FirstReservations)
- In: [Test](infra.md#Test), [Local](infra.md#Local)
- Follows: [Strategy](../../../std/docs/patterns.md#Strategy)

<a id="EmptyInProduction"></a>

### Nothing to start with in production

`EmptyInProduction` · `src/infra.ts:311` · status: **unknown**

In [Production](infra.md#Production):

| Port | Answered by | Which is |
|---|---|---|
| [What a new table starts with](../../../libs/data/docs/records.md#InitialRecords) | [No records to start with](../../../libs/data/docs/records.md#StartEmpty) | a function |

Context: In production, the reservations are the drivers': a table starts empty.

- Decided by: karim
- Chooses: [No records to start with](../../../libs/data/docs/records.md#StartEmpty)
- In: [Production](infra.md#Production)
- Follows: [Strategy](../../../std/docs/patterns.md#Strategy)

<a id="RecordRepositories"></a>

### Reservations and cancellations as repositories over the records

`RecordRepositories` · `src/infra.ts:322` · status: **held**

In [Local](infra.md#Local), [Production](infra.md#Production), [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Cancellation records](architecture.md#Cancellations) | [Cancellations as records](infra.md#CancellationRecords) | a function |
| [Reservation reading](architecture.md#ReservationReading) | [Reservations as records](infra.md#ReservationRecords) | a function |

Context: Reading a reservation and cancelling one ask for the domain's records, never for SQL: the repositories ask the records of the entities, whichever database keeps them.

Consequences: The repositories hold no driver and write no SQL: they name the entities, and the records find, insert and update them. Changing the database changes its choice (the driver and the dialect together), not them.

| Rejected | Why |
|---|---|
| Statements in the entry points | the cancellation would know the tables and the dialect |

- Decided by: karim
- Chooses: [Reservations as records](infra.md#ReservationRecords), [Cancellations as records](infra.md#CancellationRecords)
- In: [Test](infra.md#Test), [Local](infra.md#Local), [Production](infra.md#Production)
- Follows: [Repository](../../../std/docs/patterns.md#Repository)

<a id="SimulatedProvider"></a>

### A simulated payment provider outside production

`SimulatedProvider` · `src/infra.ts:335` · status: **held**

In [Local](infra.md#Local), [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Payment provider](architecture.md#Payment), [Payment log](architecture.md#PaymentLog) | [Simulated payment provider](infra.md#SimulatedPayment) | a function |

Context: Refunds must be tried without money moving, and a scenario reads the calls that were made.

| Rejected | Why |
|---|---|
| The provider's sandbox | a network call in every scenario, and an account to keep |

- Decided by: karim
- Chooses: [Simulated payment provider](infra.md#SimulatedPayment)
- In: [Test](infra.md#Test), [Local](infra.md#Local)
- Follows: [Strategy](../../../std/docs/patterns.md#Strategy)

<a id="ProviderApi"></a>

### The provider's API in production

`ProviderApi` · `src/infra.ts:347` · status: **unknown**

In [Production](infra.md#Production):

| Port | Answered by | Which is |
|---|---|---|
| [Payment provider](architecture.md#Payment) | [Real payment provider](infra.md#HttpPayment) | an implementation |

Context: Refunds go through the payment provider, over HTTPS, with an idempotency key.

- Decided by: karim
- Chooses: [Real payment provider](infra.md#HttpPayment)
- In: [Production](infra.md#Production)
- Follows: [Adapter](../../../std/docs/patterns.md#Adapter)

<a id="HttpServerChoice"></a>

### Node's HTTP server

`HttpServerChoice` · `src/infra.ts:358` · status: **unknown**

In [Local](infra.md#Local), [Production](infra.md#Production), [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [HTTP exposure](architecture.md#HttpExposure) | [Node HTTP server](infra.md#NodeServer) | an implementation |

Context: The API is a handful of routes: Node's server is enough, and the scenarios call it as clients would.

| Rejected | Why |
|---|---|
| A web framework | a dependency for routing that the route syntax already declares |

- Decided by: karim
- Chooses: [Node HTTP server](infra.md#NodeServer)
- In: [Test](infra.md#Test), [Local](infra.md#Local), [Production](infra.md#Production)
- Follows: [Adapter](../../../std/docs/patterns.md#Adapter)

<a id="ScenarioClock"></a>

### A stopped clock in the scenarios

`ScenarioClock` · `src/infra.ts:370` · status: **held**

In [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Clock](architecture.md#Clock) | [Stopped clock](infra.md#StoppedClock) | a function |

Context: The cancellation fee depends on the time left before the start: a scenario needs the same instant every time.

- Decided by: karim
- Chooses: [Stopped clock](infra.md#StoppedClock)
- In: [Test](infra.md#Test)
- Follows: [Strategy](../../../std/docs/patterns.md#Strategy)

<a id="RealClock"></a>

### The system clock elsewhere

`RealClock` · `src/infra.ts:381` · status: **unknown**

In [Local](infra.md#Local), [Production](infra.md#Production):

| Port | Answered by | Which is |
|---|---|---|
| [Clock](architecture.md#Clock) | [System clock](infra.md#SystemClock) | an implementation |

Context: Outside the scenarios, the fee is computed at the real instant.

- Decided by: karim
- Chooses: [System clock](infra.md#SystemClock)
- In: [Local](infra.md#Local), [Production](infra.md#Production)
- Follows: [Adapter](../../../std/docs/patterns.md#Adapter)

## Reservations · SDLC

<a id="CommandsOnThisMachine"></a>

### Commands on this machine

`CommandsOnThisMachine` · `src/sdlc.ts:66` · status: **unknown**

The programs of the SDLC read their commands from Node's command line, as the standard library realizes it.

In [Local](infra.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [Commands of a program](../../../std/docs/tooling.md#ProgramCommands) | [Node's command line](../../../std/docs/tooling.md#NodeProgramCommands) | an implementation |

Context: trame ship runs the programs that deploy as a person would run them, with Node.

- Decided by: karim
- Chooses: [Node's command line](../../../std/docs/tooling.md#NodeProgramCommands)
- In: [Local](infra.md#Local)
- Follows: [Adapter](../../../std/docs/patterns.md#Adapter)
