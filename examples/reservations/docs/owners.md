# Owners

*What each person must decide, settle or watch on 30 October 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| The operators | 0 | 0 | 2 | 0 |
| karim | 6 | 0 | 11 | 101 |
| lea | 0 | 0 | 0 | 11 |

<a id="The operators"></a>

## The operators

- Held by: karim

### What it awaits, and how to give it

- [On a laptop](sdlc.md#OnALaptop): `trame evidence OnALaptop passed --by karim`
- [On staging](sdlc.md#OnStaging): `trame evidence OnStaging passed --by karim`

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | To check by hand and sign: Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there | [On a laptop](sdlc.md#OnALaptop) | The operators |  |
| warning | To check by hand and sign: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox, Read a reservation, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's | [On staging](sdlc.md#OnStaging) | The operators |  |

<a id="karim"></a>

## karim

- Holds the roles: [The operators](sdlc.md#Operators)

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| blocking | Decide "Legal cap on cancellation fees" | [Legal cap on cancellation fees](legal.md#FeeCap) | karim | concerns "Late cancellation fee" |
| blocking | Test: No implementation of "HTTP exposure" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Reservation reading" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Cancellation records" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Payment provider" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| blocking | Test: No implementation of "Clock" for the environment "Test" | [Reservations API](architecture.md#ReservationsApi) | karim |  |
| warning | Check the assumption before 1 December 2026 (in 32 days) | [Idempotent payment provider](cancellation.md#IdempotentProvider) | karim | no evidence yet |
| warning | No production measurement wired | [Immediate refund](cancellation.md#ImmediateRefund) | karim |  |
| warning | Cap cannot be checked: "Legal cap on cancellation fees" is not decided | [Late cancellation fee](cancellation.md#LateFee) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for a laptop](sdlc.md#LocalProgram) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for production](sdlc.md#ProductionProgram) | karim |  |
| warning | To ship: The program for a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: The program for production is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Secrets stay out of the graph is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On staging is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | PostgreSQL's dialect ships, and nothing proves it (The code is verified) | [PostgreSQL's dialect](infra.md#PostgresDialect) | karim |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | **held** |
| [Lead time of a cancellation](api.md#LeadTime) | Function | **held** |
| [Read a reservation](api.md#ReadReservation) | Entry point | **held** |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision |  |
| [Cancellation records](architecture.md#Cancellations) | Port |  |
| [Clock](architecture.md#Clock) | Port |  |
| [Database](architecture.md#Database) | Port |  |
| [SQL dialect](architecture.md#Dialect) | Port |  |
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | Architecture decision | **held** |
| [HTTP exposure](architecture.md#HttpExposure) | Port |  |
| [HTTP port of the API](architecture.md#HttpPort) | Decision |  |
| [Payment provider](architecture.md#Payment) | Port |  |
| [Payment log](architecture.md#PaymentLog) | Port |  |
| [Read-only database](architecture.md#ReadOnlyDatabase) | Port |  |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | **held** |
| [Reservation reading](architecture.md#ReservationReading) | Port |  |
| [Reservations API](architecture.md#ReservationsApi) | Component | to decide |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | **held** |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | **held** |
| [How an amount is written](cancellation.md#AmountWords) | Message catalog |  |
| [Idempotent payment provider](cancellation.md#IdempotentProvider) | Assumption | **unknown** |
| [Immediate refund](cancellation.md#ImmediateRefund) | Service level objective | **unknown** |
| [Swiss francs](cancellation.md#SwissFrancs) | Quantity |  |
| [A day ahead, a full refund](consumer.md#FullRefundAhead) | Requirement | **held** |
| [Criteria of a full refund a day ahead](consumer.md#FullRefundAheadCriteria) | Acceptance criteria | **held** |
| [Notice for a full refund](consumer.md#FullRefundNotice) | Decision |  |
| [Backup retention](infra.md#BackupRetention) | Decision |  |
| [Cancellations in SQL](infra.md#CancellationsSql) | Function | **held** |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision |  |
| [Production database address](infra.md#DatabaseAddress) | Decision |  |
| [Production database name](infra.md#DatabaseName) | Decision |  |
| [Production database size](infra.md#DatabaseSize) | Decision |  |
| [Local SQLite database](infra.md#FileDatabase) | Implementation | **unknown** |
| [Real payment provider](infra.md#HttpPayment) | Implementation | **unknown** |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | **unknown** |
| [Initial reservations](infra.md#InitialReservations) | Decision |  |
| [In-memory SQLite database](infra.md#InMemoryDatabase) | Implementation | **held** |
| [Local](infra.md#Local) | Environment |  |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | **unknown** |
| [Local database file](infra.md#LocalDatabasePath) | Decision |  |
| [Node HTTP server](infra.md#NodeServer) | Implementation | **unknown** |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation | **unknown** |
| [PostgreSQL's dialect](infra.md#PostgresDialect) | Function | **unknown** |
| [Production](infra.md#Production) | Environment |  |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | **unknown** |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | **unknown** |
| [Payment provider address](infra.md#ProviderUrl) | Decision |  |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | **unknown** |
| [Reservations in SQL](infra.md#ReservationsSql) | Function | **held** |
| [Tables of the service](infra.md#ReservationTables) | Decision |  |
| [End of a response](infra.md#ResponseEnding) | Decision |  |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | **held** |
| [An in-memory SQLite database for the scenarios](infra.md#ScenarioDatabase) | Technical choice | **held** |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | **held** |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | **held** |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision |  |
| [SQLite's dialect](infra.md#SqliteDialect) | Function | **held** |
| [Reservations and cancellations as repositories over SQL](infra.md#SqlRepositories) | Technical choice | **held** |
| [Stopped clock](infra.md#StoppedClock) | Function | **held** |
| [System clock](infra.md#SystemClock) | Implementation | **unknown** |
| [Test](infra.md#Test) | Environment |  |
| [Test database](infra.md#TestDatabasePath) | Decision |  |
| [Test instant](infra.md#TestInstant) | Decision |  |
| [Legal cap on cancellation fees](legal.md#FeeCap) | Decision | to decide |
| [Messages of the API](messages.md#ApiMessages) | Message catalog |  |
| [Language](messages.md#Language) | Decision |  |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | **held** |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | **unknown** |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | **held** |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | **held** |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision |  |
| [The code is verified](sdlc.md#CodeVerified) | Obligation |  |
| [The decisions hold](sdlc.md#DecisionsApplied) | Obligation |  |
| [Every check is signed](sdlc.md#EveryCheck) | Obligation |  |
| [The requirements of the goal hold](sdlc.md#GoalServed) | Obligation |  |
| [The program for a laptop](sdlc.md#LocalProgram) | Artefact | **unknown** |
| [On a laptop](sdlc.md#OnALaptop) | Check | **unknown** |
| [On staging](sdlc.md#OnStaging) | Check | **unknown** |
| [The operators](sdlc.md#Operators) | Role |  |
| [The packages are safe](sdlc.md#PackagesSafe) | Obligation |  |
| [The program for production](sdlc.md#ProductionProgram) | Artefact | **unknown** |
| [A release](sdlc.md#Release) | Shipment | **unknown** |
| [The way of a release](sdlc.md#ReleaseMode) | Policy |  |
| [The rules hold](sdlc.md#RulesHeld) | Obligation |  |
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
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard |  |
| [Paths of entry points](standards.md#RouteSyntax) | Standard |  |
| [SQLite](standards.md#Sqlite) | Standard |  |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | in force |

<a id="lea"></a>

## lea

Nothing to decide or watch.

### Owns

| Node | Kind | State |
|---|---|---|
| [End of free cancellation](api.md#FreeCancellationEnd) | Function | **held** |
| [Cancel without stress](cancellation.md#CancelWithoutStress) | Goal |  |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | Decision |  |
| [Late cancellation fee](cancellation.md#LateFee) | Decision |  |
| [Refund on cancellation](cancellation.md#Refund) | Requirement | **held** |
| [Refund criteria](cancellation.md#RefundCriteria) | Acceptance criteria | **held** |
| [Launch of the ultra chargers](committee.md#UltraLaunch) | Amendment | not in force |
| [Period for ultra chargers](committee.md#UltraPeriod) | Amendment | in force |
| [Approval of the ultra period](committee.md#UltraPeriodApproval) | Approval |  |
| [Checks of the scenarios](messages.md#ScenarioChecks) | Message catalog |  |
| [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | Scenario | **held** |
