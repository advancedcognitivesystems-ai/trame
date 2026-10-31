# Snapshot

*The exact state expected on 30 October 2026, without history: the values in force, without the amendments that produced them.*

## Reservations · API

### End of free cancellation

Function · `FreeCancellationEnd` · **held**

- Owner: lea
- Parameters: { freePeriod: cancellation.FreeCancellationPeriod }
- Must stay synchronous: true
- Serves: Refund on cancellation
- Depends on: Free cancellation period

### Lead time of a cancellation

Function · `LeadTime` · **held**

- Owner: karim
- Parameters: { clock: architecture.Clock }
- Depends on: Clock

### Cancel a reservation

Entry point · `CancelReservation` · **held**

- Owner: karim
- Trigger: { type: http, method: POST, path: /reservations/:id/cancellation }
- Parameters: { reservations: architecture.ReservationReading, cancellations: architecture.Cancellations, payment: architecture.Payment, leadTime: api.LeadTime, refund: (rule), key: architecture.CancellationKey, http: std/web.Http, messages: messages.ApiMessages }
- Serves: Refund on cancellation
- Part of: Reservations API
- Depends on: Reservation reading, Cancellation records, Payment provider, Lead time of a cancellation, Refund on cancellation, Key of a cancellation's refund, Messages of the API

### Read a reservation

Entry point · `ReadReservation` · **held**

- Owner: karim
- Trigger: { type: http, method: GET, path: /reservations/:id }
- Parameters: { reservations: architecture.ReservationReading, freeCancellationEnd: api.FreeCancellationEnd, http: std/web.Http, messages: messages.ApiMessages }
- Serves: Cancel without stress
- Part of: Reservations API
- Depends on: Reservation reading, End of free cancellation, Messages of the API

## Reservations · Architecture

### Key of a cancellation's refund

Decision · `CancellationKey`

- Decided by: karim
- Value: cancellation-

### HTTP port of the API

Decision · `HttpPort`

- Decided by: karim
- Value: 4180

### Effects follow the request

Architecture decision · `EffectsFollowTheRequest` · **held**

- Decided by: karim
- Context: A driver who reads a reservation must never pay for it, and a refund must never be sent untested.
- Consequences: Three rules judge the effects of every entry point and function at each build.
- Serves: Cancel without stress
- Applied by: A read writes nothing, Utilities do not touch the world, Every call to a third party is verified

### Reservations API

Component · `ReservationsApi`

- Owner: karim
- Language: typescript
- Startup: { exposure: architecture.HttpExposure }
- Depends on: HTTP exposure

### Cancellation records

Port · `Cancellations`

- Owner: karim
- Declared effects: read, write, asynchronous

### Clock

Port · `Clock`

- Owner: karim
- Declared effects: time

### Database

Port · `Database`

- Owner: karim
- Declared effects: read, write, asynchronous

### SQL dialect

Port · `Dialect`

- Owner: karim
- Declared effects: 

### HTTP exposure

Port · `HttpExposure`

- Owner: karim
- Declared effects: network, asynchronous

### Payment provider

Port · `Payment`

- Owner: karim
- Declared effects: network, third-party, asynchronous

### Payment log

Port · `PaymentLog`

- Owner: karim
- Declared effects: 

### Read-only database

Port · `ReadOnlyDatabase`

- Owner: karim
- Declared effects: read, asynchronous

### Reservation reading

Port · `ReservationReading`

- Owner: karim
- Declared effects: read, asynchronous

### A read writes nothing

Architecture rule · `ReadWithoutWrite` · **held**

- Owner: karim

### Every call to a third party is verified

Architecture rule · `ThirdPartiesVerified` · **held**

- Owner: karim

### Utilities do not touch the world

Architecture rule · `UtilitiesWithoutWorld` · **held**

- Owner: karim

## Reservations · Cancellation

### Cancel without stress

Goal · `CancelWithoutStress`

### Refund on cancellation

Requirement · `Refund` · **held**

- Parameters: { period: cancellation.FreeCancellationPeriod, fee: cancellation.LateFee }
- Refines: Cancel without stress
- Assumes: Idempotent payment provider
- Depends on: Free cancellation period, Late cancellation fee

### Immediate refund

Service level objective · `ImmediateRefund` · **unknown**

- Owner: karim
- Measured signal: refunds.initiated.latency
- Percentile: 99
- Threshold: 2 s
- Window: 1 h
- Constrains: Refund on cancellation

### Free cancellation period

Decision · `FreeCancellationPeriod`

- Decided by: lea
- Value: { fast: 5 min, normal: 10 min, ultra: 15 min }
- Review planned: March 2027
- Allowed range: from 5 min to 20 min
- Rejected: 30 min, blocks the chargers at peak hours

### Late cancellation fee

Decision · `LateFee`

- Decided by: lea
- Value: 50%
- Rejected: 100%, perceived as punitive
- Capped by: Legal cap on cancellation fees

### Idempotent payment provider

Assumption · `IdempotentProvider` · **unknown**

- Owner: karim
- Check before: 1 December 2026

### Refund criteria

Acceptance criteria · `RefundCriteria` · **held**

- Owner: lea
- Accepts: Refund on cancellation
- Depends on: Free cancellation period

### How an amount is written

Message catalog · `AmountWords`

- Owner: karim
- Written in: Language

### Swiss francs

Quantity · `SwissFrancs`

- Owner: karim
- Source: ISO 4217, Codes for the representation of currencies: CHF
- Address: https://www.iso.org/iso-4217-currency-codes.html
- Units: { chf: 1 }
- Written with: How an amount is written

## Reservations · Infrastructure

### Backup retention

Decision · `BackupRetention`

- Decided by: karim
- Value: 7
- Allowed range: from 7 to 35

### Status of a cancelled reservation

Decision · `CancelledStatus`

- Decided by: karim
- Value: cancelled

### Production database address

Decision · `DatabaseAddress`

- Decided by: karim
- Value: postgres://%s.internal:5432/%s

### Production database name

Decision · `DatabaseName`

- Decided by: karim
- Value: reservations

### Production database size

Decision · `DatabaseSize`

- Decided by: karim
- Value: { cpu: 2, memory_gb: 4 }

### Initial reservations

Decision · `InitialReservations`

- Decided by: karim
- Value: { id: R1, charger: normal, price: 20, start: 2026-10-20T12:00:00.000Z, status: active }, { id: R2, charger: fast, price: 30, start: 2026-10-20T10:04:00.000Z, status: active }, { id: R3, charger: ultra, price: 40, start: 2026-10-20T11:00:00.000Z, status: active }

### Local database file

Decision · `LocalDatabasePath`

- Decided by: karim
- Value: .data/reservations.db

### Payment provider address

Decision · `ProviderUrl`

- Decided by: karim
- Value: https://payments.example.com/v1

### Tables of the service

Decision · `ReservationTables`

- Decided by: karim
- Value: { reservations: { name: reservations, key: id, columns: { id: text, charger: text, price: number, start: text, status: text } }, refunds: { name: refunds, key: reservation, columns: { reservation: text, amount: number, reference: text }, references: { reservation: { table: reservations, column: id } } }, status: status, count: n }

### End of a response

Decision · `ResponseEnding`

- Decided by: karim
- Value: 

### References of the simulated provider

Decision · `SimulatedReference`

- Decided by: karim
- Value: simulated-

### Test database

Decision · `TestDatabasePath`

- Decided by: karim
- Value: :memory:

### Test instant

Decision · `TestInstant`

- Decided by: karim
- Value: 2026-10-20T10:00:00.000Z

### Cancellations in SQL

Function · `CancellationsSql` · **held**

- Owner: karim
- Parameters: { database: architecture.Database, dialect: architecture.Dialect, tables: infra.ReservationTables, cancelled: infra.CancelledStatus }
- Implements: Cancellation records
- Depends on: Database, SQL dialect, Tables of the service, Status of a cancelled reservation

### PostgreSQL's dialect

Function · `PostgresDialect` · **unknown**

- Owner: karim
- Parameters: { types: sql.PostgresSql, parameter: sql.PostgresParameter, definition: sql.ColumnDefinition, createTable: sql.CreateTable, countRows: sql.CountRows, insertRow: sql.InsertRow, selectRows: sql.SelectRows, updateRows: sql.UpdateRows, columnEquals: sql.ColumnEquals }
- Implements: SQL dialect
- Depends on: PostgreSQL's dialect, PostgreSQL parameter, Column definition, Table creation, Count, Insertion, Selection, Update, Condition on a column

### Reservations in SQL

Function · `ReservationsSql` · **held**

- Owner: karim
- Parameters: { database: architecture.ReadOnlyDatabase, dialect: architecture.Dialect, tables: infra.ReservationTables }
- Implements: Reservation reading
- Depends on: Read-only database, SQL dialect, Tables of the service

### Simulated payment provider

Function · `SimulatedPayment` · **held**

- Owner: karim
- Parameters: { prefix: infra.SimulatedReference }
- Implements: Payment provider, Payment log
- Depends on: References of the simulated provider

### SQLite's dialect

Function · `SqliteDialect` · **held**

- Owner: karim
- Parameters: { types: sql.SqliteSql, parameter: sql.SqliteParameter, definition: sql.ColumnDefinition, createTable: sql.CreateTable, countRows: sql.CountRows, insertRow: sql.InsertRow, selectRows: sql.SelectRows, updateRows: sql.UpdateRows, columnEquals: sql.ColumnEquals }
- Implements: SQL dialect
- Depends on: SQLite's dialect, SQLite parameter, Column definition, Table creation, Count, Insertion, Selection, Update, Condition on a column

### Stopped clock

Function · `StoppedClock` · **held**

- Owner: karim
- Parameters: { instant: infra.TestInstant }
- Implements: Clock
- Depends on: Test instant

### Local SQLite database

Implementation · `FileDatabase` · **unknown**

- Owner: karim
- Parameters: { path: infra.LocalDatabasePath, tables: infra.ReservationTables, dialect: architecture.Dialect, reservations: infra.InitialReservations, sqlite: standards.Sqlite }
- Implements: Database, Read-only database
- Depends on: Local database file, Tables of the service, SQL dialect, Initial reservations, SQLite

### Real payment provider

Implementation · `HttpPayment` · **unknown**

- Owner: karim
- Parameters: { url: infra.ProviderUrl, api: standards.PaymentProviderApi, http: std/web.Http, mediaTypes: std/web.MediaTypes, uri: std/web.Uri, messages: messages.ApiMessages }
- Implements: Payment provider
- Depends on: Payment provider address, API of the payment provider, Messages of the API

### In-memory SQLite database

Implementation · `InMemoryDatabase` · **held**

- Owner: karim
- Parameters: { path: infra.TestDatabasePath, tables: infra.ReservationTables, dialect: architecture.Dialect, reservations: infra.InitialReservations, sqlite: standards.Sqlite }
- Implements: Database, Read-only database
- Depends on: Test database, Tables of the service, SQL dialect, Initial reservations, SQLite

### Node HTTP server

Implementation · `NodeServer` · **unknown**

- Owner: karim
- Parameters: { port: architecture.HttpPort, http: std/web.Http, mediaTypes: std/web.MediaTypes, uri: std/web.Uri, routes: standards.RouteSyntax, ending: infra.ResponseEnding, messages: messages.ApiMessages }
- Implements: HTTP exposure
- Depends on: HTTP port of the API, Paths of entry points, End of a response, Messages of the API

### Production Postgres database

Implementation · `PostgresDatabase` · **unknown**

- Owner: karim
- Parameters: { messages: messages.ApiMessages }
- Variables: { name: infra.DatabaseName, size: infra.DatabaseSize, backup_retention_days: infra.BackupRetention, address: infra.DatabaseAddress }
- Implements: Database, Read-only database
- Depends on: Messages of the API, Production database name, Production database size, Backup retention, Production database address

### System clock

Implementation · `SystemClock` · **unknown**

- Owner: karim
- Implements: Clock

### Node's HTTP server

Technical choice · `HttpServerChoice` · **unknown**

- Decided by: karim
- Context: The API is a handful of routes: Node's server is enough, and the scenarios call it as clients would.
- Rejected: A web framework, a dependency for routing that the route syntax already declares
- Chooses: Node HTTP server
- In: Test, Local, Production

### A SQLite file on the developer's machine

Technical choice · `LocalDatabase` · **unknown**

- Decided by: karim
- Context: A developer runs the service without installing a database server; the reservations survive a restart.
- Rejected: Postgres in a container, one more thing to install and start for a prototype
- Chooses: Local SQLite database, SQLite's dialect
- In: Local

### Postgres in production

Technical choice · `ProductionDatabase` · **unknown**

- Decided by: karim
- Context: Several instances of the service write at once, and the provider keeps the backups.
- Consequences: Provisioned by Terraform with the graph's values; its statements come from PostgreSQL's dialect, which cannot be mixed with SQLite's. The prototype ships no Postgres driver yet.
- Rejected: SQLite in production, one writer at a time, and the backups would be ours
- Chooses: Production Postgres database, PostgreSQL's dialect
- In: Production

### The provider's API in production

Technical choice · `ProviderApi` · **unknown**

- Decided by: karim
- Context: Refunds go through the payment provider, over HTTPS, with an idempotency key.
- Chooses: Real payment provider
- In: Production

### The system clock elsewhere

Technical choice · `RealClock` · **unknown**

- Decided by: karim
- Context: Outside the scenarios, the fee is computed at the real instant.
- Chooses: System clock
- In: Local, Production

### A stopped clock in the scenarios

Technical choice · `ScenarioClock` · **held**

- Decided by: karim
- Context: The cancellation fee depends on the time left before the start: a scenario needs the same instant every time.
- Chooses: Stopped clock
- In: Test

### An in-memory SQLite database for the scenarios

Technical choice · `ScenarioDatabase` · **held**

- Decided by: karim
- Context: Every scenario starts from the initial reservations and leaves nothing behind.
- Rejected: A shared file, a scenario would see what the previous one wrote
- Chooses: In-memory SQLite database, SQLite's dialect
- In: Test

### A simulated payment provider outside production

Technical choice · `SimulatedProvider` · **held**

- Decided by: karim
- Context: Refunds must be tried without money moving, and a scenario reads the calls that were made.
- Rejected: The provider's sandbox, a network call in every scenario, and an account to keep
- Chooses: Simulated payment provider
- In: Test, Local

### Reservations and cancellations as repositories over SQL

Technical choice · `SqlRepositories` · **held**

- Decided by: karim
- Context: Reading a reservation and cancelling one ask for the domain's records, never for SQL: the repositories turn them into statements over a database port, whichever database answers it.
- Consequences: The repositories hold no driver and write no SQL: they ask the dialect port for their statements, and the database port runs them. Changing the database changes its choice (the driver and the dialect together), not them.
- Rejected: Statements in the entry points, the cancellation would know the tables and the dialect
- Chooses: Reservations in SQL, Cancellations in SQL
- In: Test, Local, Production

### Local

Environment · `Local`

- Owner: karim

### Production

Environment · `Production`

- Owner: karim

### Test

Environment · `Test`

- Owner: karim

## Legal

### Legal cap on cancellation fees

Decision · `FeeCap`

- Decided by: karim
- Value: **to be decided**

## Reservations · Messages

### Language

Decision · `Language`

- Decided by: karim
- Value: { tag: en-GB }

### Messages of the API

Message catalog · `ApiMessages`

- Owner: karim
- Written in: Language

### Checks of the scenarios

Message catalog · `ScenarioChecks`

- Owner: lea
- Written in: Language

## Reservations · Principles

### A cancellation refunds once

Architecture decision · `RefundOnce` · **held**

- Decided by: karim
- Context: A driver's phone repeats a request when the network drops; the provider must not refund twice.
- Consequences: The refund is recorded with the cancellation, in one transaction; a repeated request finds it and returns it without calling the provider.
- Rejected: Locking the reservation while refunding, the lock is lost with the connection, and the provider is outside the transaction
- Serves: Cancel without stress
- Applied by: Cancel a reservation, Key of a cancellation's refund, Cancelling twice refunds only once

### Secrets stay out of the graph

Architecture decision · `SecretsOutOfTheGraph` · **unknown**

- Decided by: karim
- Context: The graph is read by many people, and every value of it shows in the documents and the page.
- Consequences: Without a key in the environment, the real provider makes no call and says why.
- Rejected: The key as a decision, every document and the page would show it
- Serves: Cancel without stress
- Applied by: Real payment provider

## Reservations · Scenarios

### Unknown reservation

Decision · `UnknownReservation`

- Decided by: karim
- Value: R404

### Every reservation is refunded according to the rule

Scenario · `ComplianceScenario` · **held**

- Owner: lea
- Parameters: { cancel: api.CancelReservation, refund: (rule), initial: infra.InitialReservations, instant: infra.TestInstant, says: messages.ScenarioChecks }
- Verifies: Cancel a reservation, Refund on cancellation
- In: Test
- Depends on: Cancel a reservation, Refund on cancellation, Initial reservations, Test instant, Checks of the scenarios

### Read a reservation

Scenario · `ReadScenario` · **held**

- Owner: karim
- Parameters: { read: api.ReadReservation, initial: infra.InitialReservations, freePeriod: cancellation.FreeCancellationPeriod, unknown: scenarios.UnknownReservation, http: std/web.Http, says: messages.ScenarioChecks }
- Verifies: Read a reservation, End of free cancellation, Reservations in SQL, In-memory SQLite database, SQLite's dialect
- In: Test
- Depends on: Read a reservation, Initial reservations, Free cancellation period, Unknown reservation, Checks of the scenarios

### Cancelling twice refunds only once

Scenario · `RepeatedCancellationScenario` · **held**

- Owner: karim
- Parameters: { cancel: api.CancelReservation, log: architecture.PaymentLog, refund: (rule), initial: infra.InitialReservations, instant: infra.TestInstant, http: std/web.Http, says: messages.ScenarioChecks }
- Verifies: Cancel a reservation, Lead time of a cancellation, Cancellations in SQL, Simulated payment provider, Stopped clock
- In: Test
- Depends on: Cancel a reservation, Payment log, Refund on cancellation, Initial reservations, Test instant, Checks of the scenarios

## Reservations · SDLC

### The operators

Role · `Operators`

- Owner: karim
- People: karim

### The program for a laptop

Artefact · `LocalProgram` · **unknown**

- Owner: karim
- Path: out/local/reservations-api.ts
- Produced by: Reservations API

### The program for production

Artefact · `ProductionProgram` · **unknown**

- Owner: karim
- Path: out/production/reservations-api.ts
- Produced by: Reservations API

### On a laptop

Check · `OnALaptop` · **unknown**

- Owner: karim
- Steps: Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there
- Checks: The program for a laptop
- Signed by: The operators
- Verifies: Local SQLite database

### On staging

Check · `OnStaging` · **unknown**

- Owner: karim
- Steps: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox, Read a reservation, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's
- Checks: The program for production
- Signed by: The operators
- Verifies: Node HTTP server, Production Postgres database, PostgreSQL's dialect, Real payment provider, System clock

### A release

Shipment · `Release` · **unknown**

- Owner: karim
- Target: production
- Ships: The program for production, The program for a laptop
- Programs assembled for: Production
- Follows the policy: The way of a release

### The code is verified

Obligation · `CodeVerified`

- Owner: karim
- A gap weighs: warning
- Serves: Cancel without stress

### The decisions hold

Obligation · `DecisionsApplied`

- Owner: karim
- Serves: Cancel without stress

### Every check is signed

Obligation · `EveryCheck`

- Owner: karim
- Serves: Cancel without stress

### The requirements of the goal hold

Obligation · `GoalServed`

- Owner: karim
- Serves: Cancel without stress

### The packages are safe

Obligation · `PackagesSafe`

- Owner: karim
- Serves: Cancel without stress

### The rules hold

Obligation · `RulesHeld`

- Owner: karim
- Serves: Cancel without stress

### The way of a release

Policy · `ReleaseMode`

- Owner: karim
- Its obligations: The code is verified, The requirements of the goal hold, The decisions hold, Every check is signed, The rules hold, The packages are safe

## Reservations · SQL

### PostgreSQL's dialect

Standard · `PostgresSql`

- Maintained by: karim
- Source: PostgreSQL: Value Expressions, Positional Parameters ($n); Numeric Types (double precision); Character Types (text)
- Address: https://www.postgresql.org/docs/current/sql-expressions.html#SQL-EXPRESSIONS-PARAMETERS-POSITIONAL
- Constants: { parameter: { value: $, meaning: Opens a positional parameter: then its position }, first: { value: 1, meaning: The position of the first parameter }, text: { value: TEXT, meaning: The type of a column of text }, number: { value: DOUBLE PRECISION, meaning: The type of a column of numbers (an 8-byte floating point number, as SQLite's REAL) } }

### SQL

Standard · `Sql`

- Maintained by: karim
- Source: ISO/IEC 9075 (SQL): SELECT, INSERT, UPDATE, CREATE TABLE; CREATE TABLE IF NOT EXISTS, as SQLite and PostgreSQL both accept it
- Address: https://www.postgresql.org/docs/current/sql-commands.html
- Constants: { space: { value:  , meaning: Separates the words of a statement }, comma: { value: ,, meaning: Separates the items of a list (columns, values, definitions) }, open: { value: (, meaning: Opens a list of columns, of values or of definitions }, close: { value: ), meaning: Closes it }, equals: { value: =, meaning: Compares a column with a value, or gives it one }, select: { value: SELECT, meaning: Reads columns }, from: { value: FROM, meaning: Names the table read }, where: { value: WHERE, meaning: Introduces the condition the rows must meet }, insertInto: { value: INSERT INTO, meaning: Adds a row to a table }, values: { value: VALUES, meaning: Introduces the values of the row }, update: { value: UPDATE, meaning: Changes rows of a table }, set: { value: SET, meaning: Introduces the columns changed }, createTable: { value: CREATE TABLE IF NOT EXISTS, meaning: Creates a table, unless it exists }, primaryKey: { value: PRIMARY KEY, meaning: The column that identifies a row }, notNull: { value: NOT NULL, meaning: A column that always has a value }, references: { value: REFERENCES, meaning: A column whose value is the key of a row of another table }, countAll: { value: count(*), meaning: The number of rows }, as: { value: AS, meaning: Names a result column } }

### SQLite's dialect

Standard · `SqliteSql`

- Maintained by: karim
- Source: SQLite: SQL As Understood By SQLite, Parameters (?); Datatypes In SQLite (TEXT, REAL)
- Address: https://www.sqlite.org/lang_expr.html#varparam
- Constants: { parameter: { value: ?, meaning: A parameter: the next value given with the statement }, text: { value: TEXT, meaning: The type of a column of text }, number: { value: REAL, meaning: The type of a column of numbers (an 8-byte floating point number) } }

### Column definition

Syntax element · `ColumnDefinition` · **held**

- Owner: karim
- Section: CREATE TABLE: column definitions and constraints
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: id, TEXT, true, output: id TEXT PRIMARY KEY }, { input: price, REAL, false, output: price REAL NOT NULL }, { input: reservation, TEXT, true, { table: reservations, column: id }, output: reservation TEXT PRIMARY KEY REFERENCES reservations(id) }
- Defined by: SQL
- Depends on: SQL

### Condition on a column

Syntax element · `ColumnEquals` · **held**

- Owner: karim
- Section: Comparison predicates
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: id, ?, output: id = ? }, { input: id, $2, output: id = $2 }
- Defined by: SQL
- Depends on: SQL

### Count

Syntax element · `CountRows` · **held**

- Owner: karim
- Section: SELECT with an aggregate function
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: reservations, n, output: SELECT count(*) AS n FROM reservations }
- Defined by: SQL
- Depends on: SQL

### Table creation

Syntax element · `CreateTable` · **held**

- Owner: karim
- Section: CREATE TABLE
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: refunds, reservation TEXT PRIMARY KEY, amount REAL NOT NULL, output: CREATE TABLE IF NOT EXISTS refunds (reservation TEXT PRIMARY KEY, amount REAL NOT NULL) }
- Defined by: SQL
- Depends on: SQL, List

### Insertion

Syntax element · `InsertRow` · **held**

- Owner: karim
- Section: INSERT
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: refunds, reservation, amount, ?, ?, output: INSERT INTO refunds (reservation, amount) VALUES (?, ?) }
- Defined by: SQL
- Depends on: SQL, List

### PostgreSQL parameter

Syntax element · `PostgresParameter` · **held**

- Owner: karim
- Section: Positional parameters ($n)
- Marks: {  }
- Parameters: { standard: sql.PostgresSql }
- Examples: { input: 0, output: $1 }, { input: 2, output: $3 }
- Defined by: PostgreSQL's dialect
- Depends on: PostgreSQL's dialect

### Selection

Syntax element · `SelectRows` · **held**

- Owner: karim
- Section: SELECT
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: id, status, reservations, id = ?, output: SELECT id, status FROM reservations WHERE id = ? }
- Defined by: SQL
- Depends on: SQL, List

### SQLite parameter

Syntax element · `SqliteParameter` · **held**

- Owner: karim
- Section: Parameters (?)
- Marks: {  }
- Parameters: { standard: sql.SqliteSql }
- Examples: { input: 0, output: ? }, { input: 2, output: ? }
- Defined by: SQLite's dialect
- Depends on: SQLite's dialect

### List

Syntax element · `SqlList` · **held**

- Owner: karim
- Section: Lists of columns and values
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: id, charger, output: id, charger }
- Defined by: SQL
- Depends on: SQL

### Update

Syntax element · `UpdateRows` · **held**

- Owner: karim
- Section: UPDATE
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: reservations, status = ?, id = ?, output: UPDATE reservations SET status = ? WHERE id = ? }
- Defined by: SQL
- Depends on: SQL, List

## Reservations · Standards

### API of the payment provider

Standard · `PaymentProviderApi`

- Maintained by: karim
- Source: The payment provider's API, version 1: refunds
- Constants: { refunds: { value: refunds, meaning: The path of a refund }, idempotencyKey: { value: idempotency-key, meaning: The header of the key: the provider makes one refund per key } }

### Paths of entry points

Standard · `RouteSyntax`

- Maintained by: karim
- Source: Trame, the trigger of an HTTP entry point (kinds/entry-point.ts, http)
- Constants: { separator: { value: /, meaning: Separates the segments of a path }, parameter: { value: :, meaning: Begins a segment that is a parameter: what follows is its name } }

### SQLite

Standard · `Sqlite`

- Maintained by: karim
- Source: SQLite: In-Memory Databases; SQL As Understood By SQLite (BEGIN, COMMIT, ROLLBACK)
- Address: https://www.sqlite.org/inmemorydb.html
- Constants: { memory: { value: :memory:, meaning: The name that opens a database in memory, new each time }, begin: { value: BEGIN, meaning: Starts a transaction }, commit: { value: COMMIT, meaning: Makes its writes last }, rollback: { value: ROLLBACK, meaning: Undoes them } }

## Still open

- Decide "Legal cap on cancellation fees" · karim
- Test: No implementation of "HTTP exposure" for the environment "Test" · karim
- Test: No implementation of "Reservation reading" for the environment "Test" · karim
- Test: No implementation of "Cancellation records" for the environment "Test" · karim
- Test: No implementation of "Payment provider" for the environment "Test" · karim
- Test: No implementation of "Clock" for the environment "Test" · karim
