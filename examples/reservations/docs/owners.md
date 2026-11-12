# Owners

*What each person must decide, settle or watch on 30 October 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| The operators | 0 | 0 | 2 | 0 |
| karim | 1 | 0 | 11 | 94 |
| lea | 0 | 0 | 1 | 11 |

<a id="The operators"></a>

## The operators

- Held by: karim

### What it awaits, and how to give it

- [On a laptop](sdlc.md#OnALaptop): `trame evidence OnALaptop passed --by karim`
- [On staging](sdlc.md#OnStaging): `trame evidence OnStaging passed --by karim`

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | To check by hand and sign: Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there | [On a laptop](sdlc.md#OnALaptop) | The operators |  |
| warning | To check by hand and sign: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox: its tables are created empty, Insert a reservation, read it, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's | [On staging](sdlc.md#OnStaging) | The operators |  |

<a id="karim"></a>

## karim

- Holds the roles: [The operators](sdlc.md#Operators)

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| blocking | Decide "Legal cap on cancellation fees" | [Legal cap on cancellation fees](legal.md#FeeCap) | karim | concerns "Late cancellation fee", "The cap, decided" |
| warning | Check the assumption before 1 December 2026 (in 32 days) | [Idempotent payment provider](cancellation.md#IdempotentProvider) | karim | no evidence yet |
| warning | No production measurement wired | [Immediate refund](cancellation.md#ImmediateRefund) | karim |  |
| warning | Cap cannot be checked: "Legal cap on cancellation fees" is not decided | [Late cancellation fee](cancellation.md#LateFee) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for a laptop](sdlc.md#LocalProgram) | karim |  |
| warning | To ship: The program for a laptop is unknown | [On this machine](sdlc.md#OnThisMachine) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for production](sdlc.md#ProductionProgram) | karim |  |
| warning | To ship: The program for a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: The program for production is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Secrets stay out of the graph is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On staging is unknown | [A release](sdlc.md#Release) | karim |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | **held** |
| [Lead time of a cancellation](api.md#LeadTime) | Function | **held** |
| [Read a reservation](api.md#ReadReservation) | Entry point | **held** |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision |  |
| [Cancellation records](architecture.md#Cancellations) | Port |  |
| [Clock](architecture.md#Clock) | Port |  |
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | Architecture decision | **held** |
| [HTTP exposure](architecture.md#HttpExposure) | Port |  |
| [HTTP port of the API](architecture.md#HttpPort) | Decision |  |
| [Payment provider](architecture.md#Payment) | Port |  |
| [Payment log](architecture.md#PaymentLog) | Port |  |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | **held** |
| [Reservation reading](architecture.md#ReservationReading) | Port |  |
| [Reservations API](architecture.md#ReservationsApi) | Component |  |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | **held** |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | **held** |
| [How an amount is written](cancellation.md#AmountWords) | Message catalog |  |
| [Idempotent payment provider](cancellation.md#IdempotentProvider) | Assumption | **unknown** |
| [Immediate refund](cancellation.md#ImmediateRefund) | Service level objective | **unknown** |
| [Swiss francs](cancellation.md#SwissFrancs) | Quantity |  |
| [A day ahead, a full refund](consumer.md#FullRefundAhead) | Requirement | **held** |
| [Criteria of a full refund a day ahead](consumer.md#FullRefundAheadCriteria) | Acceptance criteria | **held** |
| [Notice for a full refund](consumer.md#FullRefundNotice) | Decision |  |
| [Chargers](data.md#Chargers) | Vocabulary |  |
| [The refund of a cancelled reservation](data.md#KeptRefund) | Entity | **held** |
| [A reservation](data.md#KeptReservation) | Entity | **held** |
| [Statuses of a reservation](data.md#ReservationStatuses) | Vocabulary |  |
| [Backup retention](infra.md#BackupRetention) | Decision |  |
| [Cancellations as records](infra.md#CancellationRecords) | Function | **held** |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision |  |
| [Production database address](infra.md#DatabaseAddress) | Decision |  |
| [Production database name](infra.md#DatabaseName) | Decision |  |
| [Production database size](infra.md#DatabaseSize) | Decision |  |
| [Nothing to start with in production](infra.md#EmptyInProduction) | Technical choice | **unknown** |
| [Local SQLite database](infra.md#FileDatabase) | Implementation | **unknown** |
| [The first reservations outside production](infra.md#FirstReservationsOutsideProduction) | Technical choice | **held** |
| [Real payment provider](infra.md#HttpPayment) | Implementation | **unknown** |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | **unknown** |
| [What the service keeps, as tables](infra.md#KeptAsTables) | Technical choice | **held** |
| [Local](infra.md#Local) | Environment |  |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | **unknown** |
| [Local database file](infra.md#LocalDatabasePath) | Decision |  |
| [Node HTTP server](infra.md#NodeServer) | Implementation | **unknown** |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation | **unknown** |
| [Production](infra.md#Production) | Environment |  |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | **unknown** |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | **unknown** |
| [Payment provider address](infra.md#ProviderUrl) | Decision |  |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | **unknown** |
| [Reservations and cancellations as repositories over the records](infra.md#RecordRepositories) | Technical choice | **held** |
| [Reservations as records](infra.md#ReservationRecords) | Function | **held** |
| [End of a response](infra.md#ResponseEnding) | Decision |  |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | **held** |
| [A SQLite database in memory for the scenarios](infra.md#ScenarioDatabase) | Technical choice | **held** |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | **held** |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | **held** |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision |  |
| [Stopped clock](infra.md#StoppedClock) | Function | **held** |
| [System clock](infra.md#SystemClock) | Implementation | **unknown** |
| [Test](infra.md#Test) | Environment |  |
| [Test instant](infra.md#TestInstant) | Decision |  |
| [Legal cap on cancellation fees](legal.md#FeeCap) | Decision | to decide |
| [The cap, decided](legal.md#FeeCapDecided) | Amendment | not in force |
| [Messages of the API](messages.md#ApiMessages) | Message catalog |  |
| [Language](messages.md#Language) | Decision |  |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | **held** |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | **unknown** |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | **held** |
| [A read never writes](scenarios.md#ReadsNeverWrite) | Scenario | **held** |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | **held** |
| [The storage is prepared](scenarios.md#StoragePrepared) | Scenario | **held** |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision |  |
| [The code is verified](sdlc.md#CodeVerified) | Obligation |  |
| [Commands on this machine](sdlc.md#CommandsOnThisMachine) | Technical choice | **unknown** |
| [The decisions hold](sdlc.md#DecisionsApplied) | Obligation |  |
| [Every check is signed](sdlc.md#EveryCheck) | Obligation |  |
| [The requirements of the goal hold](sdlc.md#GoalServed) | Obligation |  |
| [What the service keeps, migrated](sdlc.md#KeptMigrates) | Obligation |  |
| [The program for a laptop](sdlc.md#LocalProgram) | Artefact | **unknown** |
| [The way of this machine](sdlc.md#MachineMode) | Policy |  |
| [On a laptop](sdlc.md#OnALaptop) | Check | **unknown** |
| [On staging](sdlc.md#OnStaging) | Check | **unknown** |
| [On this machine](sdlc.md#OnThisMachine) | Shipment | **unknown** |
| [The operators](sdlc.md#Operators) | Role |  |
| [The packages are safe](sdlc.md#PackagesSafe) | Obligation |  |
| [Prepare the storage](sdlc.md#PrepareStorage) | Entry point | **held** |
| [The program for production](sdlc.md#ProductionProgram) | Artefact | **unknown** |
| [A release](sdlc.md#Release) | Shipment | **unknown** |
| [The way of a release](sdlc.md#ReleaseMode) | Policy |  |
| [The service's SDLC](sdlc.md#ReservationsSdlc) | Component |  |
| [The rules hold](sdlc.md#RulesHeld) | Obligation |  |
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard |  |
| [Paths of entry points](standards.md#RouteSyntax) | Standard |  |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | in force |

<a id="lea"></a>

## lea

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | Awaits the approval of lea, who answers for “Free cancellation period” | [Ultra period requested by support](support.md#SupportUltraPeriod) | lea |  |

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
