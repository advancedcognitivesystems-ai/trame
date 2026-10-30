# Branch review

*What the declarations that are not published yet add to the published graph (`trame.lock`), as of 17 October 2026.*

> **92 new declarations · 0 published declarations affected · 1 overlap · 0 blocking holes added**

## What the branch redefines

| Target | Path | Declared | Requested | By | Outcome |
|---|---|---|---|---|---|
| [Refund on cancellation](cancellation.md#Refund) | `rule` | original rule | redefined rule | [Launch of the ultra chargers](committee.md#UltraLaunch) | not in force on 17 October 2026 |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 15 min | [Period for ultra chargers](committee.md#UltraPeriod) | applied (approved by lea, owner of "Free cancellation period") |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 12 min | [Ultra period requested by support](support.md#SupportUltraPeriod) | discarded in favour of [Period for ultra chargers](committee.md#UltraPeriod) (approved by lea, owner of "Free cancellation period") |

- [Refund on cancellation](cancellation.md#Refund), in force on 17 October 2026 with the branch: `rule` = original rule
- [Free cancellation period](cancellation.md#FreeCancellationPeriod), in force on 17 October 2026 with the branch: `value` = { fast: 5 min, normal: 10 min, ultra: 15 min }

## Overlaps

> Overlap on `value.ultra` of [Free cancellation period](cancellation.md#FreeCancellationPeriod), between [Period for ultra chargers](committee.md#UltraPeriod) and [Ultra period requested by support](support.md#SupportUltraPeriod): [Period for ultra chargers](committee.md#UltraPeriod) prevails (approved by lea, owner of "Free cancellation period"; see [Approval of the ultra period](committee.md#UltraPeriodApproval)).

## To check before merging

The branch adds no hole and no error, and touches no published declaration.

## New declarations

| Declaration | Kind | Owner | Source |
|---|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | karim | `src/api.ts:50` |
| [End of free cancellation](api.md#FreeCancellationEnd) | Function | lea | `src/api.ts:15` |
| [Lead time of a cancellation](api.md#LeadTime) | Function | karim | `src/api.ts:27` |
| [Read a reservation](api.md#ReadReservation) | Entry point | karim | `src/api.ts:37` |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision | karim | `src/architecture.ts:143` |
| [Cancellation records](architecture.md#Cancellations) | Port | karim | `src/architecture.ts:107` |
| [Clock](architecture.md#Clock) | Port | karim | `src/architecture.ts:125` |
| [Database](architecture.md#Database) | Port | karim | `src/architecture.ts:89` |
| [SQL dialect](architecture.md#Dialect) | Port | karim | `src/architecture.ts:83` |
| [HTTP exposure](architecture.md#HttpExposure) | Port | karim | `src/architecture.ts:131` |
| [HTTP port of the API](architecture.md#HttpPort) | Decision | karim | `src/architecture.ts:136` |
| [Payment provider](architecture.md#Payment) | Port | karim | `src/architecture.ts:113` |
| [Payment log](architecture.md#PaymentLog) | Port | karim | `src/architecture.ts:119` |
| [Read-only database](architecture.md#ReadOnlyDatabase) | Port | karim | `src/architecture.ts:95` |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | karim | `src/architecture.ts:161` |
| [Reservation reading](architecture.md#ReservationReading) | Port | karim | `src/architecture.ts:101` |
| [Reservations API](architecture.md#ReservationsApi) | Component | karim | `src/architecture.ts:149` |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | karim | `src/architecture.ts:186` |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | karim | `src/architecture.ts:175` |
| [Launch of the ultra chargers](committee.md#UltraLaunch) | Amendment | lea | `src/committee.ts:29` |
| [Period for ultra chargers](committee.md#UltraPeriod) | Amendment | lea | `src/committee.ts:12` |
| [Approval of the ultra period](committee.md#UltraPeriodApproval) | Approval | lea | `src/committee.ts:19` |
| [Backup retention](infra.md#BackupRetention) | Decision | karim | `src/infra.ts:88` |
| [Cancellations in SQL](infra.md#CancellationsSql) | Function | karim | `src/infra.ts:210` |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision | karim | `src/infra.ts:117` |
| [Production database address](infra.md#DatabaseAddress) | Decision | karim | `src/infra.ts:82` |
| [Production database name](infra.md#DatabaseName) | Decision | karim | `src/infra.ts:70` |
| [Production database size](infra.md#DatabaseSize) | Decision | karim | `src/infra.ts:75` |
| [Local SQLite database](infra.md#FileDatabase) | Implementation | karim | `src/infra.ts:148` |
| [Real payment provider](infra.md#HttpPayment) | Implementation | karim | `src/infra.ts:265` |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | karim | `src/infra.ts:363` |
| [Initial reservations](infra.md#InitialReservations) | Decision | karim | `src/infra.ts:42` |
| [In-memory SQLite database](infra.md#InMemoryDatabase) | Implementation | karim | `src/infra.ts:137` |
| [Local](infra.md#Local) | Environment | karim | `src/infra.ts:29` |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | karim | `src/infra.ts:301` |
| [Local database file](infra.md#LocalDatabasePath) | Decision | karim | `src/infra.ts:65` |
| [Node HTTP server](infra.md#NodeServer) | Implementation | karim | `src/infra.ts:275` |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation | karim | `src/infra.ts:159` |
| [PostgreSQL's dialect](infra.md#PostgresDialect) | Function | karim | `src/infra.ts:186` |
| [Production](infra.md#Production) | Environment | karim | `src/infra.ts:34` |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | karim | `src/infra.ts:314` |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | karim | `src/infra.ts:352` |
| [Payment provider address](infra.md#ProviderUrl) | Decision | karim | `src/infra.ts:93` |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | karim | `src/infra.ts:386` |
| [Reservations in SQL](infra.md#ReservationsSql) | Function | karim | `src/infra.ts:199` |
| [Tables of the service](infra.md#ReservationTables) | Decision | karim | `src/infra.ts:100` |
| [End of a response](infra.md#ResponseEnding) | Decision | karim | `src/infra.ts:129` |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | karim | `src/infra.ts:375` |
| [An in-memory SQLite database for the scenarios](infra.md#ScenarioDatabase) | Technical choice | karim | `src/infra.ts:288` |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | karim | `src/infra.ts:241` |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | karim | `src/infra.ts:340` |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision | karim | `src/infra.ts:123` |
| [SQLite's dialect](infra.md#SqliteDialect) | Function | karim | `src/infra.ts:172` |
| [Reservations and cancellations as repositories over SQL](infra.md#SqlRepositories) | Technical choice | karim | `src/infra.ts:327` |
| [Stopped clock](infra.md#StoppedClock) | Function | karim | `src/infra.ts:230` |
| [System clock](infra.md#SystemClock) | Implementation | karim | `src/infra.ts:220` |
| [Test](infra.md#Test) | Environment | karim | `src/infra.ts:23` |
| [Test database](infra.md#TestDatabasePath) | Decision | karim | `src/infra.ts:60` |
| [Test instant](infra.md#TestInstant) | Decision | karim | `src/infra.ts:55` |
| [Messages of the API](messages.md#ApiMessages) | Message catalog | karim | `src/messages.ts:17` |
| [Language](messages.md#Language) | Decision | karim | `src/messages.ts:11` |
| [Checks of the scenarios](messages.md#ScenarioChecks) | Message catalog | lea | `src/messages.ts:34` |
| [Abstract Factory](patterns.md#AbstractFactory) | Design pattern | karim | `src/patterns.ts:47` |
| [Adapter](patterns.md#Adapter) | Design pattern | karim | `src/patterns.ts:12` |
| [Repository](patterns.md#Repository) | Design pattern | karim | `src/patterns.ts:35` |
| [Strategy](patterns.md#Strategy) | Design pattern | karim | `src/patterns.ts:24` |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | karim | `src/principles.ts:15` |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | karim | `src/principles.ts:28` |
| [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | Scenario | lea | `src/scenarios.ts:62` |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | karim | `src/scenarios.ts:22` |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | karim | `src/scenarios.ts:40` |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision | karim | `src/scenarios.ts:17` |
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
| [HTTP](standards.md#Http) | Standard | karim | `src/standards.ts:9` |
| [Media types](standards.md#MediaTypes) | Standard | karim | `src/standards.ts:29` |
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard | karim | `src/standards.ts:90` |
| [Paths of entry points](standards.md#RouteSyntax) | Standard | karim | `src/standards.ts:61` |
| [SQLite](standards.md#Sqlite) | Standard | karim | `src/standards.ts:74` |
| [URI](standards.md#Uri) | Standard | karim | `src/standards.ts:43` |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | karim | `src/support.ts:11` |
