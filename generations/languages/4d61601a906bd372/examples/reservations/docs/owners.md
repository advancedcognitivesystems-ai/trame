# Owners

*What each person must decide, settle or watch on 17 October 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| karim | 1 | 0 | 3 | 89 |
| lea | 0 | 0 | 0 | 9 |

<a id="karim"></a>

## karim

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| blocking | Decide "Legal cap on cancellation fees" | [Legal cap on cancellation fees](legal.md#FeeCap) | karim | concerns "Late cancellation fee" |
| warning | Check the assumption before 1 December 2026 (in 45 days) | [Idempotent payment provider](cancellation.md#IdempotentProvider) | karim | no evidence yet |
| warning | No production measurement wired | [Immediate refund](cancellation.md#ImmediateRefund) | karim |  |
| warning | Cap cannot be checked: "Legal cap on cancellation fees" is not decided | [Late cancellation fee](cancellation.md#LateFee) | karim |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | **held** |
| [Lead time of a cancellation](api.md#LeadTime) | Function | **unknown** |
| [Read a reservation](api.md#ReadReservation) | Entry point | **held** |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision |  |
| [Cancellation records](architecture.md#Cancellations) | Port |  |
| [Clock](architecture.md#Clock) | Port |  |
| [Database](architecture.md#Database) | Port |  |
| [SQL dialect](architecture.md#Dialect) | Port |  |
| [HTTP exposure](architecture.md#HttpExposure) | Port |  |
| [HTTP port of the API](architecture.md#HttpPort) | Decision |  |
| [Payment provider](architecture.md#Payment) | Port |  |
| [Payment log](architecture.md#PaymentLog) | Port |  |
| [Read-only database](architecture.md#ReadOnlyDatabase) | Port |  |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | **held** |
| [Reservation reading](architecture.md#ReservationReading) | Port |  |
| [Reservations API](architecture.md#ReservationsApi) | Component |  |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | **held** |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | **held** |
| [Idempotent payment provider](cancellation.md#IdempotentProvider) | Assumption | **unknown** |
| [Immediate refund](cancellation.md#ImmediateRefund) | Service level objective | **unknown** |
| [Backup retention](infra.md#BackupRetention) | Decision |  |
| [Cancellations in SQL](infra.md#CancellationsSql) | Function | **unknown** |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision |  |
| [Production database address](infra.md#DatabaseAddress) | Decision |  |
| [Production database name](infra.md#DatabaseName) | Decision |  |
| [Production database size](infra.md#DatabaseSize) | Decision |  |
| [Local SQLite database](infra.md#FileDatabase) | Implementation |  |
| [Real payment provider](infra.md#HttpPayment) | Implementation |  |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | **unknown** |
| [Initial reservations](infra.md#InitialReservations) | Decision |  |
| [In-memory SQLite database](infra.md#InMemoryDatabase) | Implementation |  |
| [Local](infra.md#Local) | Environment |  |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | **unknown** |
| [Local database file](infra.md#LocalDatabasePath) | Decision |  |
| [Node HTTP server](infra.md#NodeServer) | Implementation |  |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation |  |
| [PostgreSQL's dialect](infra.md#PostgresDialect) | Function | **unknown** |
| [Production](infra.md#Production) | Environment |  |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | **unknown** |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | **unknown** |
| [Payment provider address](infra.md#ProviderUrl) | Decision |  |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | **unknown** |
| [Reservations in SQL](infra.md#ReservationsSql) | Function | **unknown** |
| [Tables of the service](infra.md#ReservationTables) | Decision |  |
| [End of a response](infra.md#ResponseEnding) | Decision |  |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | **unknown** |
| [An in-memory SQLite database for the scenarios](infra.md#ScenarioDatabase) | Technical choice | **unknown** |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | **unknown** |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | **unknown** |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision |  |
| [SQLite's dialect](infra.md#SqliteDialect) | Function | **unknown** |
| [Reservations and cancellations as repositories over SQL](infra.md#SqlRepositories) | Technical choice | **unknown** |
| [Stopped clock](infra.md#StoppedClock) | Function | **unknown** |
| [System clock](infra.md#SystemClock) | Implementation |  |
| [Test](infra.md#Test) | Environment |  |
| [Test database](infra.md#TestDatabasePath) | Decision |  |
| [Test instant](infra.md#TestInstant) | Decision |  |
| [Legal cap on cancellation fees](legal.md#FeeCap) | Decision | to decide |
| [Messages of the API](messages.md#ApiMessages) | Message catalog |  |
| [Language](messages.md#Language) | Decision |  |
| [Abstract Factory](patterns.md#AbstractFactory) | Design pattern | **held** |
| [Adapter](patterns.md#Adapter) | Design pattern | **held** |
| [Repository](patterns.md#Repository) | Design pattern | **held** |
| [Strategy](patterns.md#Strategy) | Design pattern | **held** |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | **held** |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | **unknown** |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | **held** |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | **held** |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision |  |
| [Column definition](sql.md#ColumnDefinition) | Syntax element | **held** |
| [Condition on a column](sql.md#ColumnEquals) | Syntax element | **held** |
| [Count](sql.md#CountRows) | Syntax element | **held** |
| [Table creation](sql.md#CreateTable) | Syntax element | **held** |
| [Insertion](sql.md#InsertRow) | Syntax element | **held** |
| [PostgreSQL parameter](sql.md#PostgresParameter) | Syntax element | **held** |
| [PostgreSQL's dialect](sql.md#PostgresSql) | Standard |  |
| [Selection](sql.md#SelectRows) | Syntax element | **held** |
| [SQL](sql.md#Sql) | Standard |  |
| [SQLite parameter](sql.md#SqliteParameter) | Syntax element | **held** |
| [SQLite's dialect](sql.md#SqliteSql) | Standard |  |
| [List](sql.md#SqlList) | Syntax element | **held** |
| [Update](sql.md#UpdateRows) | Syntax element | **held** |
| [HTTP](standards.md#Http) | Standard |  |
| [Media types](standards.md#MediaTypes) | Standard |  |
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard |  |
| [Paths of entry points](standards.md#RouteSyntax) | Standard |  |
| [SQLite](standards.md#Sqlite) | Standard |  |
| [URI](standards.md#Uri) | Standard |  |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | in force |

<a id="lea"></a>

## lea

Nothing to decide or watch.

### Owns

| Node | Kind | State |
|---|---|---|
| [End of free cancellation](api.md#FreeCancellationEnd) | Function | **unknown** |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | Decision |  |
| [Late cancellation fee](cancellation.md#LateFee) | Decision |  |
| [Refund criteria](cancellation.md#RefundCriteria) | Acceptance criteria | **held** |
| [Launch of the ultra chargers](committee.md#UltraLaunch) | Amendment | not in force |
| [Period for ultra chargers](committee.md#UltraPeriod) | Amendment | in force |
| [Approval of the ultra period](committee.md#UltraPeriodApproval) | Approval |  |
| [Checks of the scenarios](messages.md#ScenarioChecks) | Message catalog |  |
| [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | Scenario | **held** |
