# Branch review

*What the declarations that are not published yet add to the published graph (`trame.lock`), as of 30 October 2026.*

> **104 new declarations · 0 published declarations affected · 1 overlap · 5 blocking holes added**

## What the branch redefines

| Target | Path | Declared | Requested | By | Outcome |
|---|---|---|---|---|---|
| [Refund on cancellation](cancellation.md#Refund) | `body` | original rule | redefined rule | [Launch of the ultra chargers](committee.md#UltraLaunch) | not in force on 30 October 2026 |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 15 min | [Period for ultra chargers](committee.md#UltraPeriod) | applied (approved by lea, owner of "Free cancellation period") |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 12 min | [Ultra period requested by support](support.md#SupportUltraPeriod) | discarded in favour of [Period for ultra chargers](committee.md#UltraPeriod) (approved by lea, owner of "Free cancellation period") |

- [Refund on cancellation](cancellation.md#Refund), in force on 30 October 2026 with the branch: `body` = original rule
- [Free cancellation period](cancellation.md#FreeCancellationPeriod), in force on 30 October 2026 with the branch: `value` = { fast: 5 min, normal: 10 min, ultra: 15 min }

## Overlaps

> Overlap on `value.ultra` of [Free cancellation period](cancellation.md#FreeCancellationPeriod), between [Period for ultra chargers](committee.md#UltraPeriod) and [Ultra period requested by support](support.md#SupportUltraPeriod): [Period for ultra chargers](committee.md#UltraPeriod) prevails (approved by lea, owner of "Free cancellation period"; see [Approval of the ultra period](committee.md#UltraPeriodApproval)).

## To check before merging

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| blocking | Test: No implementation of "HTTP exposure" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Reservation reading" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Cancellation records" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Payment provider" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Clock" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for a laptop](sdlc.md#LocalProgram) | karim |  |
| warning | To check by hand and sign: Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there | [On a laptop](sdlc.md#OnALaptop) | The operators |  |
| warning | To check by hand and sign: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox, Read a reservation, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's | [On staging](sdlc.md#OnStaging) | The operators |  |
| warning | Not built yet: trame ship builds it | [The program for production](sdlc.md#ProductionProgram) | karim |  |
| warning | To ship: The program for a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: The program for production is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Secrets stay out of the graph is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On staging is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | PostgreSQL's dialect ships, and nothing proves it (The code is verified) | [PostgreSQL's dialect](infra.md#PostgresDialect) | karim |  |

## New declarations

| Declaration | Kind | Owner | Source |
|---|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | karim | `src/api.ts:51` |
| [End of free cancellation](api.md#FreeCancellationEnd) | Function | lea | `src/api.ts:16` |
| [Lead time of a cancellation](api.md#LeadTime) | Function | karim | `src/api.ts:28` |
| [Read a reservation](api.md#ReadReservation) | Entry point | karim | `src/api.ts:38` |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision | karim | `src/architecture.ts:151` |
| [Cancellation records](architecture.md#Cancellations) | Port | karim | `src/architecture.ts:115` |
| [Clock](architecture.md#Clock) | Port | karim | `src/architecture.ts:133` |
| [Database](architecture.md#Database) | Port | karim | `src/architecture.ts:94` |
| [SQL dialect](architecture.md#Dialect) | Port | karim | `src/architecture.ts:88` |
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | Architecture decision | karim | `src/architecture.ts:203` |
| [HTTP exposure](architecture.md#HttpExposure) | Port | karim | `src/architecture.ts:139` |
| [HTTP port of the API](architecture.md#HttpPort) | Decision | karim | `src/architecture.ts:144` |
| [Payment provider](architecture.md#Payment) | Port | karim | `src/architecture.ts:121` |
| [Payment log](architecture.md#PaymentLog) | Port | karim | `src/architecture.ts:127` |
| [Read-only database](architecture.md#ReadOnlyDatabase) | Port | karim | `src/architecture.ts:103` |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | karim | `src/architecture.ts:167` |
| [Reservation reading](architecture.md#ReservationReading) | Port | karim | `src/architecture.ts:109` |
| [Reservations API](architecture.md#ReservationsApi) | Component | karim | `src/architecture.ts:157` |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | karim | `src/architecture.ts:192` |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | karim | `src/architecture.ts:182` |
| [How an amount is written](cancellation.md#AmountWords) | Message catalog | karim | `src/cancellation.ts:26` |
| [Swiss francs](cancellation.md#SwissFrancs) | Quantity | karim | `src/cancellation.ts:36` |
| [Launch of the ultra chargers](committee.md#UltraLaunch) | Amendment | lea | `src/committee.ts:29` |
| [Period for ultra chargers](committee.md#UltraPeriod) | Amendment | lea | `src/committee.ts:12` |
| [Approval of the ultra period](committee.md#UltraPeriodApproval) | Approval | lea | `src/committee.ts:19` |
| [A day ahead, a full refund](consumer.md#FullRefundAhead) | Requirement | karim | `src/consumer.ts:25` |
| [Criteria of a full refund a day ahead](consumer.md#FullRefundAheadCriteria) | Acceptance criteria | karim | `src/consumer.ts:39` |
| [Notice for a full refund](consumer.md#FullRefundNotice) | Decision | karim | `src/consumer.ts:14` |
| [Backup retention](infra.md#BackupRetention) | Decision | karim | `src/infra.ts:89` |
| [Cancellations in SQL](infra.md#CancellationsSql) | Function | karim | `src/infra.ts:211` |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision | karim | `src/infra.ts:118` |
| [Production database address](infra.md#DatabaseAddress) | Decision | karim | `src/infra.ts:83` |
| [Production database name](infra.md#DatabaseName) | Decision | karim | `src/infra.ts:71` |
| [Production database size](infra.md#DatabaseSize) | Decision | karim | `src/infra.ts:76` |
| [Local SQLite database](infra.md#FileDatabase) | Implementation | karim | `src/infra.ts:149` |
| [Real payment provider](infra.md#HttpPayment) | Implementation | karim | `src/infra.ts:266` |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | karim | `src/infra.ts:364` |
| [Initial reservations](infra.md#InitialReservations) | Decision | karim | `src/infra.ts:43` |
| [In-memory SQLite database](infra.md#InMemoryDatabase) | Implementation | karim | `src/infra.ts:138` |
| [Local](infra.md#Local) | Environment | karim | `src/infra.ts:30` |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | karim | `src/infra.ts:302` |
| [Local database file](infra.md#LocalDatabasePath) | Decision | karim | `src/infra.ts:66` |
| [Node HTTP server](infra.md#NodeServer) | Implementation | karim | `src/infra.ts:276` |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation | karim | `src/infra.ts:160` |
| [PostgreSQL's dialect](infra.md#PostgresDialect) | Function | karim | `src/infra.ts:187` |
| [Production](infra.md#Production) | Environment | karim | `src/infra.ts:35` |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | karim | `src/infra.ts:315` |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | karim | `src/infra.ts:353` |
| [Payment provider address](infra.md#ProviderUrl) | Decision | karim | `src/infra.ts:94` |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | karim | `src/infra.ts:387` |
| [Reservations in SQL](infra.md#ReservationsSql) | Function | karim | `src/infra.ts:200` |
| [Tables of the service](infra.md#ReservationTables) | Decision | karim | `src/infra.ts:101` |
| [End of a response](infra.md#ResponseEnding) | Decision | karim | `src/infra.ts:130` |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | karim | `src/infra.ts:376` |
| [An in-memory SQLite database for the scenarios](infra.md#ScenarioDatabase) | Technical choice | karim | `src/infra.ts:289` |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | karim | `src/infra.ts:242` |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | karim | `src/infra.ts:341` |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision | karim | `src/infra.ts:124` |
| [SQLite's dialect](infra.md#SqliteDialect) | Function | karim | `src/infra.ts:173` |
| [Reservations and cancellations as repositories over SQL](infra.md#SqlRepositories) | Technical choice | karim | `src/infra.ts:328` |
| [Stopped clock](infra.md#StoppedClock) | Function | karim | `src/infra.ts:231` |
| [System clock](infra.md#SystemClock) | Implementation | karim | `src/infra.ts:221` |
| [Test](infra.md#Test) | Environment | karim | `src/infra.ts:24` |
| [Test database](infra.md#TestDatabasePath) | Decision | karim | `src/infra.ts:61` |
| [Test instant](infra.md#TestInstant) | Decision | karim | `src/infra.ts:56` |
| [Messages of the API](messages.md#ApiMessages) | Message catalog | karim | `src/messages.ts:18` |
| [Language](messages.md#Language) | Decision | karim | `src/messages.ts:12` |
| [Checks of the scenarios](messages.md#ScenarioChecks) | Message catalog | lea | `src/messages.ts:35` |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | karim | `src/principles.ts:15` |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | karim | `src/principles.ts:28` |
| [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | Scenario | lea | `src/scenarios.ts:66` |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | karim | `src/scenarios.ts:24` |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | karim | `src/scenarios.ts:44` |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision | karim | `src/scenarios.ts:17` |
| [The code is verified](sdlc.md#CodeVerified) | Obligation | karim | `src/sdlc.ts:72` |
| [The decisions hold](sdlc.md#DecisionsApplied) | Obligation | karim | `src/sdlc.ts:84` |
| [Every check is signed](sdlc.md#EveryCheck) | Obligation | karim | `src/sdlc.ts:89` |
| [The requirements of the goal hold](sdlc.md#GoalServed) | Obligation | karim | `src/sdlc.ts:79` |
| [The program for a laptop](sdlc.md#LocalProgram) | Artefact | karim | `src/sdlc.ts:37` |
| [On a laptop](sdlc.md#OnALaptop) | Check | karim | `src/sdlc.ts:60` |
| [On staging](sdlc.md#OnStaging) | Check | karim | `src/sdlc.ts:44` |
| [The operators](sdlc.md#Operators) | Role | karim | `src/sdlc.ts:25` |
| [The packages are safe](sdlc.md#PackagesSafe) | Obligation | karim | `src/sdlc.ts:99` |
| [The program for production](sdlc.md#ProductionProgram) | Artefact | karim | `src/sdlc.ts:31` |
| [A release](sdlc.md#Release) | Shipment | karim | `src/sdlc.ts:110` |
| [The way of a release](sdlc.md#ReleaseMode) | Policy | karim | `src/sdlc.ts:104` |
| [The rules hold](sdlc.md#RulesHeld) | Obligation | karim | `src/sdlc.ts:94` |
| [Column definition](sql.md#ColumnDefinition) | Syntax element | karim | `src/sql.ts:104` |
| [Condition on a column](sql.md#ColumnEquals) | Syntax element | karim | `src/sql.ts:90` |
| [Count](sql.md#CountRows) | Syntax element | karim | `src/sql.ts:138` |
| [Table creation](sql.md#CreateTable) | Syntax element | karim | `src/sql.ts:123` |
| [Insertion](sql.md#InsertRow) | Syntax element | karim | `src/sql.ts:151` |
| [PostgreSQL parameter](sql.md#PostgresParameter) | Syntax element | karim | `src/sql.ts:211` |
| [PostgreSQL's dialect](sql.md#PostgresSql) | Standard | karim | `src/sql.ts:59` |
| [Selection](sql.md#SelectRows) | Syntax element | karim | `src/sql.ts:166` |
| [SQL](sql.md#Sql) | Standard | karim | `src/sql.ts:14` |
| [SQLite parameter](sql.md#SqliteParameter) | Syntax element | karim | `src/sql.ts:198` |
| [SQLite's dialect](sql.md#SqliteSql) | Standard | karim | `src/sql.ts:44` |
| [List](sql.md#SqlList) | Syntax element | karim | `src/sql.ts:77` |
| [Update](sql.md#UpdateRows) | Syntax element | karim | `src/sql.ts:181` |
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard | karim | `src/standards.ts:38` |
| [Paths of entry points](standards.md#RouteSyntax) | Standard | karim | `src/standards.ts:9` |
| [SQLite](standards.md#Sqlite) | Standard | karim | `src/standards.ts:22` |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | karim | `src/support.ts:11` |
