# Snapshot

*The exact state expected on 30 October 2026, without history: the values in force, without the amendments that produced them.*

## Reservations · API

### End of free cancellation

Function · `FreeCancellationEnd` · **held**

- Owner: lea
- Parameters: { freePeriod: cancellation.FreeCancellationPeriod, time: std/measures.Time }
- Must stay synchronous: true
- Serves: Refund on cancellation
- Depends on: Free cancellation period

### Lead time of a cancellation

Function · `LeadTime` · **held**

- Owner: karim
- Parameters: { clock: architecture.Clock, time: std/measures.Time }
- Depends on: Clock

### Cancel a reservation

Entry point · `CancelReservation` · **held**

- Owner: karim
- Trigger: { type: http, method: POST, path: /reservations/:id/cancellation }
- Parameters: { reservations: architecture.ReservationReading, cancellations: architecture.Cancellations, payment: architecture.Payment, leadTime: api.LeadTime, refund: (rule), key: architecture.CancellationKey, clock: architecture.Clock, http: std/web.Http, messages: messages.ApiMessages }
- Serves: Refund on cancellation
- Part of: Reservations API
- Depends on: Reservation reading, Cancellation records, Payment provider, Lead time of a cancellation, Refund on cancellation, Key of a cancellation's refund, Clock, Messages of the API

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
- Declared effects: { refundFor: read, asynchronous, record: write, asynchronous }

### Clock

Port · `Clock`

- Owner: karim
- Declared effects: time

### HTTP exposure

Port · `HttpExposure`

- Owner: karim
- Declared effects: network, asynchronous

### Payment provider

Port · `Payment`

- Owner: karim
- Declared effects: network, third-party, asynchronous, read

### Payment log

Port · `PaymentLog`

- Owner: karim
- Declared effects: 

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

- Owner: lea

### Refund on cancellation

Requirement · `Refund` · **held**

- Owner: lea
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

## Reservations · Consumer law

### A day ahead, a full refund

Requirement · `FullRefundAhead` · **held**

- Owner: karim
- Parameters: { notice: consumer.FullRefundNotice }
- The cases the rule it constrains is played on, each one its arguments: { charger: normal, price: 20 }, 86400, { charger: fast, price: 35 }, 108000, { charger: normal, price: 20 }, 3600
- Refines: Cancel without stress
- Constrains: Refund on cancellation
- Depends on: Notice for a full refund

### Notice for a full refund

Decision · `FullRefundNotice`

- Decided by: karim
- Value: 24 h
- Rejected: 48 h, longer than any charging slot is booked ahead

### Criteria of a full refund a day ahead

Acceptance criteria · `FullRefundAheadCriteria` · **held**

- Owner: karim
- Accepts: A day ahead, a full refund

## Reservations · Data

### Chargers

Vocabulary · `Chargers`

- Owner: karim
- Words: { fast: A fast charger, normal: A normal charger, ultra: An ultra-fast charger }
- Serves: Cancel without stress

### Statuses of a reservation

Vocabulary · `ReservationStatuses`

- Owner: karim
- Words: { active: Reserved, and not cancelled, cancelled: Cancelled, its refund recorded }
- Serves: Cancel without stress

### The refund of a cancelled reservation

Entity · `KeptRefund` · **held**

- Owner: karim
- Fields: { reservation: { type: reference, entity: data.KeptReservation }, amount: { type: number, quantity: cancellation.SwissFrancs }, reference: { type: text }, at: { type: optional, of: { type: text } } }
- Key: reservation
- Kept as: refunds
- Serves: Cancel without stress
- Depends on: A reservation, Swiss francs

### A reservation

Entity · `KeptReservation` · **held**

- Owner: karim
- Fields: { id: { type: text }, charger: { type: word, vocabulary: data.Chargers }, price: { type: number, quantity: cancellation.SwissFrancs }, start: { type: text }, status: { type: word, vocabulary: data.ReservationStatuses } }
- Key: id
- Kept as: reservations
- Starts with: { id: R1, charger: normal, price: 20, start: 2026-10-20T12:00:00.000Z, status: active }, { id: R2, charger: fast, price: 30, start: 2026-10-20T10:04:00.000Z, status: active }, { id: R3, charger: ultra, price: 40, start: 2026-10-20T11:00:00.000Z, status: active }
- Serves: Cancel without stress
- Depends on: Chargers, Swiss francs, Statuses of a reservation

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

### Local database file

Decision · `LocalDatabasePath`

- Decided by: karim
- Value: .data/reservations.db

### Payment provider address

Decision · `ProviderUrl`

- Decided by: karim
- Value: https://payments.example.com/v1

### End of a response

Decision · `ResponseEnding`

- Decided by: karim
- Value: 

### References of the simulated provider

Decision · `SimulatedReference`

- Decided by: karim
- Value: simulated-

### Test instant

Decision · `TestInstant`

- Decided by: karim
- Value: 2026-10-20T10:00:00.000Z

### Cancellations as records

Function · `CancellationRecords` · **held**

- Owner: karim
- Parameters: { records: data/records.Records, reservations: data.KeptReservation, refunds: data.KeptRefund, cancelled: infra.CancelledStatus }
- Implements: Cancellation records
- Depends on: A reservation, The refund of a cancelled reservation, Status of a cancelled reservation

### Reservations as records

Function · `ReservationRecords` · **held**

- Owner: karim
- Parameters: { records: data/records.Records, reservations: data.KeptReservation }
- Implements: Reservation reading
- Depends on: A reservation

### Simulated payment provider

Function · `SimulatedPayment` · **held**

- Owner: karim
- Parameters: { prefix: infra.SimulatedReference }
- Implements: Payment provider, Payment log
- Depends on: References of the simulated provider

### Stopped clock

Function · `StoppedClock` · **held**

- Owner: karim
- Parameters: { instant: infra.TestInstant }
- Implements: Clock
- Depends on: Test instant

### Local SQLite database

Implementation · `FileDatabase` · **unknown**

- Owner: karim
- Parameters: { path: infra.LocalDatabasePath, sqlite: data/sql.Sqlite }
- Depends on: Local database file

### Real payment provider

Implementation · `HttpPayment` · **unknown**

- Owner: karim
- Parameters: { url: infra.ProviderUrl, api: standards.PaymentProviderApi, http: std/web.Http, mediaTypes: std/web.MediaTypes, uri: std/web.Uri, messages: messages.ApiMessages }
- Implements: Payment provider
- Depends on: Payment provider address, API of the payment provider, Messages of the API

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
- Depends on: Messages of the API, Production database name, Production database size, Backup retention, Production database address

### System clock

Implementation · `SystemClock` · **unknown**

- Owner: karim
- Implements: Clock

### Nothing to start with in production

Technical choice · `EmptyInProduction` · **unknown**

- Decided by: karim
- Context: In production, the reservations are the drivers': a table starts empty.
- In: Production

### The first reservations outside production

Technical choice · `FirstReservationsOutsideProduction` · **held**

- Decided by: karim
- Context: A scenario and a developer need reservations to read and cancel, and the service makes none: a table starts with the ones its entity declares.
- In: Test, Local

### Node's HTTP server

Technical choice · `HttpServerChoice` · **unknown**

- Decided by: karim
- Context: The API is a handful of routes: Node's server is enough, and the scenarios call it as clients would.
- Rejected: A web framework, a dependency for routing that the route syntax already declares
- Chooses: Node HTTP server
- In: Test, Local, Production

### What the service keeps, as tables

Technical choice · `KeptAsTables` · **held**

- Decided by: karim
- Context: A reservation is a row, and refunds are many: a database of SQL keeps them, and finds one by its key.
- Consequences: No statement is written by hand: the dialect writes them from the entities, and a change of an entity is a migration its owner decides in the graph.
- Rejected: A document per reservation, a reservation is found by its key among many, and two writes are kept together
- In: Test, Local, Production

### A SQLite file on the developer's machine

Technical choice · `LocalDatabase` · **unknown**

- Decided by: karim
- Context: A developer runs the service without installing a database server; the reservations survive a restart.
- Rejected: Postgres in a container, one more thing to install and start for a prototype
- Chooses: Local SQLite database
- In: Local

### Postgres in production

Technical choice · `ProductionDatabase` · **unknown**

- Decided by: karim
- Context: Several instances of the service write at once, and the provider keeps the backups.
- Consequences: Provisioned by Terraform with the graph's values; its statements come from PostgreSQL's dialect, which cannot be mixed with SQLite's. The prototype ships no Postgres driver yet.
- Rejected: SQLite in production, one writer at a time, and the backups would be ours
- Chooses: Production Postgres database
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

### Reservations and cancellations as repositories over the records

Technical choice · `RecordRepositories` · **held**

- Decided by: karim
- Context: Reading a reservation and cancelling one ask for the domain's records, never for SQL: the repositories ask the records of the entities, whichever database keeps them.
- Consequences: The repositories hold no driver and write no SQL: they name the entities, and the records find, insert and update them. Changing the database changes its choice (the driver and the dialect together), not them.
- Rejected: Statements in the entry points, the cancellation would know the tables and the dialect
- Chooses: Reservations as records, Cancellations as records
- In: Test, Local, Production

### A stopped clock in the scenarios

Technical choice · `ScenarioClock` · **held**

- Decided by: karim
- Context: The cancellation fee depends on the time left before the start: a scenario needs the same instant every time.
- Chooses: Stopped clock
- In: Test

### A SQLite database in memory for the scenarios

Technical choice · `ScenarioDatabase` · **held**

- Decided by: karim
- Context: Every scenario starts from the initial reservations and leaves nothing behind.
- Rejected: A shared file, a scenario would see what the previous one wrote
- In: Test

### A simulated payment provider outside production

Technical choice · `SimulatedProvider` · **held**

- Decided by: karim
- Context: Refunds must be tried without money moving, and a scenario reads the calls that were made.
- Rejected: The provider's sandbox, a network call in every scenario, and an account to keep
- Chooses: Simulated payment provider
- In: Test, Local

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
- Parameters: { cancel: api.CancelReservation, refund: (rule), kept: data.KeptReservation, instant: infra.TestInstant, time: std/measures.Time, says: messages.ScenarioChecks }
- Verifies: Cancel a reservation, Refund on cancellation
- In: Test
- Depends on: Cancel a reservation, Refund on cancellation, A reservation, Test instant, Checks of the scenarios

### Read a reservation

Scenario · `ReadScenario` · **held**

- Owner: karim
- Parameters: { read: api.ReadReservation, kept: data.KeptReservation, freePeriod: cancellation.FreeCancellationPeriod, unknown: scenarios.UnknownReservation, http: std/web.Http, time: std/measures.Time, says: messages.ScenarioChecks }
- Verifies: Read a reservation, End of free cancellation, Reservations as records
- In: Test
- Depends on: Read a reservation, A reservation, Free cancellation period, Unknown reservation, Checks of the scenarios

### A read never writes

Scenario · `ReadsNeverWrite` · **held**

- Owner: karim
- Parameters: { database: data/records.SqlDatabase, commands: std/effects.Commands, dialect: data/records.TableDialect, records: data/records.Records, reservations: data.KeptReservation, cancelled: infra.CancelledStatus, says: messages.ScenarioChecks }
- In: Test
- Depends on: A reservation, Status of a cancelled reservation, Checks of the scenarios

### Cancelling twice refunds only once

Scenario · `RepeatedCancellationScenario` · **held**

- Owner: karim
- Parameters: { cancel: api.CancelReservation, log: architecture.PaymentLog, refund: (rule), kept: data.KeptReservation, instant: infra.TestInstant, http: std/web.Http, time: std/measures.Time, says: messages.ScenarioChecks }
- Verifies: Cancel a reservation, Lead time of a cancellation, Cancellations as records, Simulated payment provider, Stopped clock
- In: Test
- Depends on: Cancel a reservation, Payment log, Refund on cancellation, A reservation, Test instant, Checks of the scenarios

### The storage is prepared

Scenario · `StoragePrepared` · **held**

- Owner: karim
- Parameters: { prepare: sdlc.PrepareStorage, records: data/records.Records, reservations: data.KeptReservation, refunds: data.KeptRefund, exit: std/system.ExitStatus, counts: std/algebra.Counts, says: messages.ScenarioChecks }
- Verifies: Prepare the storage
- In: Test
- Depends on: Prepare the storage, A reservation, The refund of a cancelled reservation, Checks of the scenarios

## Reservations · SDLC

### The service's SDLC

Component · `ReservationsSdlc`

- Owner: karim
- Language: typescript
- Startup: { exposure: std/tooling.ProgramCommands }
- Deployed in: Local

### Prepare the storage

Entry point · `PrepareStorage` · **held**

- Owner: karim
- Trigger: { type: command, name: prepare-storage }
- Parameters: { records: data/records.Records, reservations: data.KeptReservation, refunds: data.KeptRefund, say: messages.ApiMessages, exit: std/system.ExitStatus }
- Serves: Cancel without stress
- Part of: The service's SDLC
- Depends on: A reservation, The refund of a cancelled reservation, Messages of the API

### Commands on this machine

Technical choice · `CommandsOnThisMachine` · **unknown**

- Decided by: karim
- Context: trame ship runs the programs that deploy as a person would run them, with Node.
- In: Local

### The operators

Role · `Operators`

- Owner: karim
- People: karim

### The program for a laptop

Artefact · `LocalProgram` · **unknown**

- Owner: karim
- Path: out/local/reservations-api.ts
- Produced by: Reservations API
- Assembled for: Local

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
- Steps: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox: its tables are created empty, Insert a reservation, read it, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's
- Checks: The program for production
- Signed by: The operators
- Verifies: Node HTTP server, Production Postgres database, Real payment provider, System clock

### On this machine

Shipment · `OnThisMachine` · **unknown**

- Owner: karim
- Target: local
- Ships: The program for a laptop
- Deployed by: Prepare the storage
- Programs assembled for: Local
- Follows the policy: The way of this machine

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

### What the service keeps, migrated

Obligation · `KeptMigrates`

- Owner: karim
- A gap weighs: error
- Serves: Cancel without stress

### The packages are safe

Obligation · `PackagesSafe`

- Owner: karim
- Serves: Cancel without stress

### The rules hold

Obligation · `RulesHeld`

- Owner: karim
- Serves: Cancel without stress

### The way of this machine

Policy · `MachineMode`

- Owner: karim
- Its obligations: The code is verified, The rules hold, What the service keeps, migrated

### The way of a release

Policy · `ReleaseMode`

- Owner: karim
- Its obligations: The code is verified, The requirements of the goal hold, The decisions hold, Every check is signed, The rules hold, The packages are safe, What the service keeps, migrated

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

## Still open

- Decide "Legal cap on cancellation fees" · karim
