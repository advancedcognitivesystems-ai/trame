# Technical choices

*What answers each port in each environment on 30 October 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **9 technical choices for 9 ports, in 3 environments**

| Port | Test | Local | Production |
|---|---|---|---|
| [SQL dialect](architecture.md#Dialect) | [SQLite's dialect](infra.md#SqliteDialect) | [SQLite's dialect](infra.md#SqliteDialect) | [PostgreSQL's dialect](infra.md#PostgresDialect) |
| [Database](architecture.md#Database) | [In-memory SQLite database](infra.md#InMemoryDatabase) | [Local SQLite database](infra.md#FileDatabase) | [Production Postgres database](infra.md#PostgresDatabase) |
| [Read-only database](architecture.md#ReadOnlyDatabase) | [In-memory SQLite database](infra.md#InMemoryDatabase) | [Local SQLite database](infra.md#FileDatabase) | [Production Postgres database](infra.md#PostgresDatabase) |
| [Reservation reading](architecture.md#ReservationReading) | [Reservations in SQL](infra.md#ReservationsSql) | [Reservations in SQL](infra.md#ReservationsSql) | [Reservations in SQL](infra.md#ReservationsSql) |
| [Cancellation records](architecture.md#Cancellations) | [Cancellations in SQL](infra.md#CancellationsSql) | [Cancellations in SQL](infra.md#CancellationsSql) | [Cancellations in SQL](infra.md#CancellationsSql) |
| [Payment provider](architecture.md#Payment) | [Simulated payment provider](infra.md#SimulatedPayment) | [Simulated payment provider](infra.md#SimulatedPayment) | [Real payment provider](infra.md#HttpPayment) |
| [Payment log](architecture.md#PaymentLog) | [Simulated payment provider](infra.md#SimulatedPayment) | [Simulated payment provider](infra.md#SimulatedPayment) | — |
| [Clock](architecture.md#Clock) | [Stopped clock](infra.md#StoppedClock) | [System clock](infra.md#SystemClock) | [System clock](infra.md#SystemClock) |
| [HTTP exposure](architecture.md#HttpExposure) | [Node HTTP server](infra.md#NodeServer) | [Node HTTP server](infra.md#NodeServer) | [Node HTTP server](infra.md#NodeServer) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../../../std/docs/patterns.md#Strategy) | **held** | [A simulated payment provider outside production](infra.md#SimulatedProvider), [A stopped clock in the scenarios](infra.md#ScenarioClock), [In memory](../../../std/docs/scenarios.md#InMemory) |
| [Adapter](../../../std/docs/patterns.md#Adapter) | **held** | [The provider's API in production](infra.md#ProviderApi), [Node's HTTP server](infra.md#HttpServerChoice), [The system clock elsewhere](infra.md#RealClock) |
| [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory) | **held** | [An in-memory SQLite database for the scenarios](infra.md#ScenarioDatabase), [A SQLite file on the developer's machine](infra.md#LocalDatabase), [Postgres in production](infra.md#ProductionDatabase) |
| [Repository](../../../std/docs/patterns.md#Repository) | **held** | [Reservations and cancellations as repositories over SQL](infra.md#SqlRepositories) |

## Reservations · Infrastructure

<a id="ScenarioDatabase"></a>

### An in-memory SQLite database for the scenarios

`ScenarioDatabase` · `src/infra.ts:290` · status: **held**

The database and its dialect, chosen together.

In [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Database](architecture.md#Database), [Read-only database](architecture.md#ReadOnlyDatabase) | [In-memory SQLite database](infra.md#InMemoryDatabase) | an implementation |
| [SQL dialect](architecture.md#Dialect) | [SQLite's dialect](infra.md#SqliteDialect) | a function |

Context: Every scenario starts from the initial reservations and leaves nothing behind.

| Rejected | Why |
|---|---|
| A shared file | a scenario would see what the previous one wrote |

- Decided by: karim
- Chooses: [In-memory SQLite database](infra.md#InMemoryDatabase), [SQLite's dialect](infra.md#SqliteDialect)
- In: [Test](infra.md#Test)
- Follows: [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory)

<a id="LocalDatabase"></a>

### A SQLite file on the developer's machine

`LocalDatabase` · `src/infra.ts:303` · status: **unknown**

The database and its dialect, chosen together.

In [Local](infra.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [Database](architecture.md#Database), [Read-only database](architecture.md#ReadOnlyDatabase) | [Local SQLite database](infra.md#FileDatabase) | an implementation |
| [SQL dialect](architecture.md#Dialect) | [SQLite's dialect](infra.md#SqliteDialect) | a function |

Context: A developer runs the service without installing a database server; the reservations survive a restart.

| Rejected | Why |
|---|---|
| Postgres in a container | one more thing to install and start for a prototype |

- Decided by: karim
- Chooses: [Local SQLite database](infra.md#FileDatabase), [SQLite's dialect](infra.md#SqliteDialect)
- In: [Local](infra.md#Local)
- Follows: [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory)

<a id="ProductionDatabase"></a>

### Postgres in production

`ProductionDatabase` · `src/infra.ts:316` · status: **unknown**

The database and its dialect, chosen together.

In [Production](infra.md#Production):

| Port | Answered by | Which is |
|---|---|---|
| [Database](architecture.md#Database), [Read-only database](architecture.md#ReadOnlyDatabase) | [Production Postgres database](infra.md#PostgresDatabase) | an implementation |
| [SQL dialect](architecture.md#Dialect) | [PostgreSQL's dialect](infra.md#PostgresDialect) | a function |

Context: Several instances of the service write at once, and the provider keeps the backups.

Consequences: Provisioned by Terraform with the graph's values; its statements come from PostgreSQL's dialect, which cannot be mixed with SQLite's. The prototype ships no Postgres driver yet.

| Rejected | Why |
|---|---|
| SQLite in production | one writer at a time, and the backups would be ours |

- Decided by: karim
- Chooses: [Production Postgres database](infra.md#PostgresDatabase), [PostgreSQL's dialect](infra.md#PostgresDialect)
- In: [Production](infra.md#Production)
- Follows: [Abstract Factory](../../../std/docs/patterns.md#AbstractFactory)

<a id="SqlRepositories"></a>

### Reservations and cancellations as repositories over SQL

`SqlRepositories` · `src/infra.ts:329` · status: **held**

In [Local](infra.md#Local), [Production](infra.md#Production), [Test](infra.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Cancellation records](architecture.md#Cancellations) | [Cancellations in SQL](infra.md#CancellationsSql) | a function |
| [Reservation reading](architecture.md#ReservationReading) | [Reservations in SQL](infra.md#ReservationsSql) | a function |

Context: Reading a reservation and cancelling one ask for the domain's records, never for SQL: the repositories turn them into statements over a database port, whichever database answers it.

Consequences: The repositories hold no driver and write no SQL: they ask the dialect port for their statements, and the database port runs them. Changing the database changes its choice (the driver and the dialect together), not them.

| Rejected | Why |
|---|---|
| Statements in the entry points | the cancellation would know the tables and the dialect |

- Decided by: karim
- Chooses: [Reservations in SQL](infra.md#ReservationsSql), [Cancellations in SQL](infra.md#CancellationsSql)
- In: [Test](infra.md#Test), [Local](infra.md#Local), [Production](infra.md#Production)
- Follows: [Repository](../../../std/docs/patterns.md#Repository)

<a id="SimulatedProvider"></a>

### A simulated payment provider outside production

`SimulatedProvider` · `src/infra.ts:342` · status: **held**

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

`ProviderApi` · `src/infra.ts:354` · status: **unknown**

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

`HttpServerChoice` · `src/infra.ts:365` · status: **unknown**

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

`ScenarioClock` · `src/infra.ts:377` · status: **held**

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

`RealClock` · `src/infra.ts:388` · status: **unknown**

In [Local](infra.md#Local), [Production](infra.md#Production):

| Port | Answered by | Which is |
|---|---|---|
| [Clock](architecture.md#Clock) | [System clock](infra.md#SystemClock) | an implementation |

Context: Outside the scenarios, the fee is computed at the real instant.

- Decided by: karim
- Chooses: [System clock](infra.md#SystemClock)
- In: [Local](infra.md#Local), [Production](infra.md#Production)
- Follows: [Adapter](../../../std/docs/patterns.md#Adapter)
