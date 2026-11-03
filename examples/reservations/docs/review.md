# Branch review

*What the declarations that are not published yet add to the published graph (`trame.lock`), as of 3 November 2026.*

> **105 new declarations · 0 published declarations affected · 1 overlap · 5 blocking holes added**

## What the branch redefines

| Target | Path | Declared | Requested | By | Outcome |
|---|---|---|---|---|---|
| [Refund on cancellation](cancellation.md#Refund) | `body` | original rule | redefined rule | [Launch of the ultra chargers](committee.md#UltraLaunch) | applied |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 15 min | [Period for ultra chargers](committee.md#UltraPeriod) | applied (approved by lea, owner of "Free cancellation period") |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 12 min | [Ultra period requested by support](support.md#SupportUltraPeriod) | discarded in favour of [Period for ultra chargers](committee.md#UltraPeriod) (approved by lea, owner of "Free cancellation period") |

- [Refund on cancellation](cancellation.md#Refund), in force on 3 November 2026 with the branch: `body` = redefined rule
- [Free cancellation period](cancellation.md#FreeCancellationPeriod), in force on 3 November 2026 with the branch: `value` = { fast: 5 min, normal: 10 min, ultra: 15 min }

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
| error | Refuses what “Refund on cancellation” answers on example 1, 2, 3: lea, who answers for that rule, and the owner of this one settle it, by an amendment of one or the other | [A day ahead, a full refund](consumer.md#FullRefundAhead) | karim |  |
| error | Scenario failed (run): previous is not a function | [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | lea |  |
| error | Scenario failed (run): previous is not a function | [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for a laptop](sdlc.md#LocalProgram) | karim |  |
| warning | To check by hand and sign: Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there | [On a laptop](sdlc.md#OnALaptop) | The operators |  |
| warning | To check by hand and sign: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox, Read a reservation, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's | [On staging](sdlc.md#OnStaging) | The operators |  |
| warning | Not built yet: trame ship builds it | [The program for production](sdlc.md#ProductionProgram) | karim |  |
| warning | To ship: The program for a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: The program for production is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Cancelling twice refunds only once is violated | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Every reservation is refunded according to the rule is violated | [A release](sdlc.md#Release) | lea |  |
| warning | To ship: Secrets stay out of the graph is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: A cancellation refunds once is violated | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On staging is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Refund on cancellation is violated | [A release](sdlc.md#Release) | lea |  |
| warning | To ship: A day ahead, a full refund is violated | [A release](sdlc.md#Release) | karim |  |
| warning | PostgreSQL's dialect ships, and nothing proves it (The code is verified) | [PostgreSQL's dialect](infra.md#PostgresDialect) | karim |  |
| warning | Awaits the approval of lea, who answers for “Free cancellation period” | [Ultra period requested by support](support.md#SupportUltraPeriod) | lea |  |

## New declarations

| Declaration | Kind | Owner | Source |
|---|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | karim | `src/api.ts:51` |
| [End of free cancellation](api.md#FreeCancellationEnd) | Function | lea | `src/api.ts:16` |
| [Lead time of a cancellation](api.md#LeadTime) | Function | karim | `src/api.ts:28` |
| [Read a reservation](api.md#ReadReservation) | Entry point | karim | `src/api.ts:38` |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision | karim | `src/architecture.ts:156` |
| [Cancellation records](architecture.md#Cancellations) | Port | karim | `src/architecture.ts:120` |
| [Clock](architecture.md#Clock) | Port | karim | `src/architecture.ts:138` |
| [Database](architecture.md#Database) | Port | karim | `src/architecture.ts:99` |
| [SQL dialect](architecture.md#Dialect) | Port | karim | `src/architecture.ts:93` |
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | Architecture decision | karim | `src/architecture.ts:208` |
| [HTTP exposure](architecture.md#HttpExposure) | Port | karim | `src/architecture.ts:144` |
| [HTTP port of the API](architecture.md#HttpPort) | Decision | karim | `src/architecture.ts:149` |
| [Payment provider](architecture.md#Payment) | Port | karim | `src/architecture.ts:126` |
| [Payment log](architecture.md#PaymentLog) | Port | karim | `src/architecture.ts:132` |
| [Read-only database](architecture.md#ReadOnlyDatabase) | Port | karim | `src/architecture.ts:108` |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | karim | `src/architecture.ts:172` |
| [Reservation reading](architecture.md#ReservationReading) | Port | karim | `src/architecture.ts:114` |
| [Reservations API](architecture.md#ReservationsApi) | Component | karim | `src/architecture.ts:162` |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | karim | `src/architecture.ts:197` |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | karim | `src/architecture.ts:187` |
| [How an amount is written](cancellation.md#AmountWords) | Message catalog | karim | `src/cancellation.ts:26` |
| [Swiss francs](cancellation.md#SwissFrancs) | Quantity | karim | `src/cancellation.ts:36` |
| [Launch of the ultra chargers](committee.md#UltraLaunch) | Amendment | lea | `src/committee.ts:29` |
| [Period for ultra chargers](committee.md#UltraPeriod) | Amendment | lea | `src/committee.ts:12` |
| [Approval of the ultra period](committee.md#UltraPeriodApproval) | Approval | lea | `src/committee.ts:19` |
| [A day ahead, a full refund](consumer.md#FullRefundAhead) | Requirement | karim | `src/consumer.ts:25` |
| [Criteria of a full refund a day ahead](consumer.md#FullRefundAheadCriteria) | Acceptance criteria | karim | `src/consumer.ts:39` |
| [Notice for a full refund](consumer.md#FullRefundNotice) | Decision | karim | `src/consumer.ts:14` |
| [Backup retention](infra.md#BackupRetention) | Decision | karim | `src/infra.ts:90` |
| [Cancellations in SQL](infra.md#CancellationsSql) | Function | karim | `src/infra.ts:212` |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision | karim | `src/infra.ts:119` |
| [Production database address](infra.md#DatabaseAddress) | Decision | karim | `src/infra.ts:84` |
| [Production database name](infra.md#DatabaseName) | Decision | karim | `src/infra.ts:72` |
| [Production database size](infra.md#DatabaseSize) | Decision | karim | `src/infra.ts:77` |
| [Local SQLite database](infra.md#FileDatabase) | Implementation | karim | `src/infra.ts:150` |
| [Real payment provider](infra.md#HttpPayment) | Implementation | karim | `src/infra.ts:267` |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | karim | `src/infra.ts:365` |
| [Initial reservations](infra.md#InitialReservations) | Decision | karim | `src/infra.ts:44` |
| [In-memory SQLite database](infra.md#InMemoryDatabase) | Implementation | karim | `src/infra.ts:139` |
| [Local](infra.md#Local) | Environment | karim | `src/infra.ts:31` |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | karim | `src/infra.ts:303` |
| [Local database file](infra.md#LocalDatabasePath) | Decision | karim | `src/infra.ts:67` |
| [Node HTTP server](infra.md#NodeServer) | Implementation | karim | `src/infra.ts:277` |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation | karim | `src/infra.ts:161` |
| [PostgreSQL's dialect](infra.md#PostgresDialect) | Function | karim | `src/infra.ts:188` |
| [Production](infra.md#Production) | Environment | karim | `src/infra.ts:36` |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | karim | `src/infra.ts:316` |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | karim | `src/infra.ts:354` |
| [Payment provider address](infra.md#ProviderUrl) | Decision | karim | `src/infra.ts:95` |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | karim | `src/infra.ts:388` |
| [Reservations in SQL](infra.md#ReservationsSql) | Function | karim | `src/infra.ts:201` |
| [Tables of the service](infra.md#ReservationTables) | Decision | karim | `src/infra.ts:102` |
| [End of a response](infra.md#ResponseEnding) | Decision | karim | `src/infra.ts:131` |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | karim | `src/infra.ts:377` |
| [An in-memory SQLite database for the scenarios](infra.md#ScenarioDatabase) | Technical choice | karim | `src/infra.ts:290` |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | karim | `src/infra.ts:243` |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | karim | `src/infra.ts:342` |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision | karim | `src/infra.ts:125` |
| [SQLite's dialect](infra.md#SqliteDialect) | Function | karim | `src/infra.ts:174` |
| [Reservations and cancellations as repositories over SQL](infra.md#SqlRepositories) | Technical choice | karim | `src/infra.ts:329` |
| [Stopped clock](infra.md#StoppedClock) | Function | karim | `src/infra.ts:232` |
| [System clock](infra.md#SystemClock) | Implementation | karim | `src/infra.ts:222` |
| [Test](infra.md#Test) | Environment | karim | `src/infra.ts:25` |
| [Test database](infra.md#TestDatabasePath) | Decision | karim | `src/infra.ts:62` |
| [Test instant](infra.md#TestInstant) | Decision | karim | `src/infra.ts:57` |
| [Messages of the API](messages.md#ApiMessages) | Message catalog | karim | `src/messages.ts:18` |
| [Language](messages.md#Language) | Decision | karim | `src/messages.ts:12` |
| [Checks of the scenarios](messages.md#ScenarioChecks) | Message catalog | lea | `src/messages.ts:35` |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | karim | `src/principles.ts:15` |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | karim | `src/principles.ts:28` |
| [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | Scenario | lea | `src/scenarios.ts:67` |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | karim | `src/scenarios.ts:25` |
| [A read never writes](scenarios.md#ReadsNeverWrite) | Scenario | karim | `src/scenarios.ts:86` |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | karim | `src/scenarios.ts:45` |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision | karim | `src/scenarios.ts:18` |
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
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard | karim | `src/standards.ts:40` |
| [Paths of entry points](standards.md#RouteSyntax) | Standard | karim | `src/standards.ts:9` |
| [SQLite](standards.md#Sqlite) | Standard | karim | `src/standards.ts:22` |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | karim | `src/support.ts:11` |
