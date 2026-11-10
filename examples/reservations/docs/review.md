# Branch review

*What the declarations that are not published yet add to the published graph (`trame.lock`), as of 30 October 2026.*

> **99 new declarations · 0 published declarations affected · 1 overlap · 0 blocking holes added**

## What the branch redefines

| Target | Path | Declared | Requested | By | Outcome |
|---|---|---|---|---|---|
| [Refund on cancellation](cancellation.md#Refund) | `body` | original rule | redefined rule | [Launch of the ultra chargers](committee.md#UltraLaunch) | not in force on 30 October 2026 |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 15 min | [Period for ultra chargers](committee.md#UltraPeriod) | applied (approved by lea, owner of "Free cancellation period") |
| [Legal cap on cancellation fees](legal.md#FeeCap) | `value` | **to be decided** | 50% | [The cap, decided](legal.md#FeeCapDecided) | not in force on 30 October 2026 |
| [Free cancellation period](cancellation.md#FreeCancellationPeriod) | `value.ultra` | **to be decided** | 12 min | [Ultra period requested by support](support.md#SupportUltraPeriod) | discarded in favour of [Period for ultra chargers](committee.md#UltraPeriod) (approved by lea, owner of "Free cancellation period") |

- [Refund on cancellation](cancellation.md#Refund), in force on 30 October 2026 with the branch: `body` = original rule
- [Free cancellation period](cancellation.md#FreeCancellationPeriod), in force on 30 October 2026 with the branch: `value` = { fast: 5 min, normal: 10 min, ultra: 15 min }
- [Legal cap on cancellation fees](legal.md#FeeCap), in force on 30 October 2026 with the branch: `value` = **to be decided**

## Overlaps

> Overlap on `value.ultra` of [Free cancellation period](cancellation.md#FreeCancellationPeriod), between [Period for ultra chargers](committee.md#UltraPeriod) and [Ultra period requested by support](support.md#SupportUltraPeriod): [Period for ultra chargers](committee.md#UltraPeriod) prevails (approved by lea, owner of "Free cancellation period"; see [Approval of the ultra period](committee.md#UltraPeriodApproval)).

## To check before merging

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | Not built yet: trame ship builds it | [The program for a laptop](sdlc.md#LocalProgram) | karim |  |
| warning | To check by hand and sign: Run the program for a laptop, cancel a reservation, stop it and run it again: the cancellation is still there | [On a laptop](sdlc.md#OnALaptop) | The operators |  |
| warning | To check by hand and sign: Deploy the program on the staging machine, with its PostgreSQL database and the payment provider's sandbox: its tables are created empty, Insert a reservation, read it, then cancel it twice: one refund at the provider, and the second cancellation answers the same, Restart the program: the cancellation is still there, and the time it shows is the machine's | [On staging](sdlc.md#OnStaging) | The operators |  |
| warning | To ship: The program for a laptop is unknown | [On this machine](sdlc.md#OnThisMachine) | karim |  |
| warning | Not built yet: trame ship builds it | [The program for production](sdlc.md#ProductionProgram) | karim |  |
| warning | To ship: The program for a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: The program for production is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: Secrets stay out of the graph is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On a laptop is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | To ship: On staging is unknown | [A release](sdlc.md#Release) | karim |  |
| warning | Awaits the approval of lea, who answers for “Free cancellation period” | [Ultra period requested by support](support.md#SupportUltraPeriod) | lea |  |

## New declarations

| Declaration | Kind | Owner | Source |
|---|---|---|---|
| [Cancel a reservation](api.md#CancelReservation) | Entry point | karim | `src/api.ts:53` |
| [End of free cancellation](api.md#FreeCancellationEnd) | Function | lea | `src/api.ts:16` |
| [Lead time of a cancellation](api.md#LeadTime) | Function | karim | `src/api.ts:29` |
| [Read a reservation](api.md#ReadReservation) | Entry point | karim | `src/api.ts:39` |
| [Key of a cancellation's refund](architecture.md#CancellationKey) | Decision | karim | `src/architecture.ts:88` |
| [Cancellation records](architecture.md#Cancellations) | Port | karim | `src/architecture.ts:52` |
| [Clock](architecture.md#Clock) | Port | karim | `src/architecture.ts:70` |
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | Architecture decision | karim | `src/architecture.ts:140` |
| [HTTP exposure](architecture.md#HttpExposure) | Port | karim | `src/architecture.ts:76` |
| [HTTP port of the API](architecture.md#HttpPort) | Decision | karim | `src/architecture.ts:81` |
| [Payment provider](architecture.md#Payment) | Port | karim | `src/architecture.ts:58` |
| [Payment log](architecture.md#PaymentLog) | Port | karim | `src/architecture.ts:64` |
| [A read writes nothing](architecture.md#ReadWithoutWrite) | Architecture rule | karim | `src/architecture.ts:104` |
| [Reservation reading](architecture.md#ReservationReading) | Port | karim | `src/architecture.ts:46` |
| [Reservations API](architecture.md#ReservationsApi) | Component | karim | `src/architecture.ts:94` |
| [Every call to a third party is verified](architecture.md#ThirdPartiesVerified) | Architecture rule | karim | `src/architecture.ts:129` |
| [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) | Architecture rule | karim | `src/architecture.ts:119` |
| [How an amount is written](cancellation.md#AmountWords) | Message catalog | karim | `src/cancellation.ts:26` |
| [Swiss francs](cancellation.md#SwissFrancs) | Quantity | karim | `src/cancellation.ts:36` |
| [Launch of the ultra chargers](committee.md#UltraLaunch) | Amendment | lea | `src/committee.ts:29` |
| [Period for ultra chargers](committee.md#UltraPeriod) | Amendment | lea | `src/committee.ts:12` |
| [Approval of the ultra period](committee.md#UltraPeriodApproval) | Approval | lea | `src/committee.ts:19` |
| [A day ahead, a full refund](consumer.md#FullRefundAhead) | Requirement | karim | `src/consumer.ts:25` |
| [Criteria of a full refund a day ahead](consumer.md#FullRefundAheadCriteria) | Acceptance criteria | karim | `src/consumer.ts:39` |
| [Notice for a full refund](consumer.md#FullRefundNotice) | Decision | karim | `src/consumer.ts:14` |
| [Chargers](data.md#Chargers) | Vocabulary | karim | `src/data.ts:15` |
| [The refund of a cancelled reservation](data.md#KeptRefund) | Entity | karim | `src/data.ts:49` |
| [A reservation](data.md#KeptReservation) | Entity | karim | `src/data.ts:34` |
| [Statuses of a reservation](data.md#ReservationStatuses) | Vocabulary | karim | `src/data.ts:24` |
| [Backup retention](infra.md#BackupRetention) | Decision | karim | `src/infra.ts:83` |
| [Cancellations as records](infra.md#CancellationRecords) | Function | karim | `src/infra.ts:160` |
| [Status of a cancelled reservation](infra.md#CancelledStatus) | Decision | karim | `src/infra.ts:94` |
| [Production database address](infra.md#DatabaseAddress) | Decision | karim | `src/infra.ts:77` |
| [Production database name](infra.md#DatabaseName) | Decision | karim | `src/infra.ts:65` |
| [Production database size](infra.md#DatabaseSize) | Decision | karim | `src/infra.ts:70` |
| [Nothing to start with in production](infra.md#EmptyInProduction) | Technical choice | karim | `src/infra.ts:311` |
| [Local SQLite database](infra.md#FileDatabase) | Implementation | karim | `src/infra.ts:114` |
| [The first reservations](infra.md#FirstReservations) | Function | karim | `src/infra.ts:138` |
| [The first reservations outside production](infra.md#FirstReservationsOutsideProduction) | Technical choice | karim | `src/infra.ts:300` |
| [Real payment provider](infra.md#HttpPayment) | Implementation | karim | `src/infra.ts:223` |
| [Node's HTTP server](infra.md#HttpServerChoice) | Technical choice | karim | `src/infra.ts:358` |
| [Initial reservations](infra.md#InitialReservations) | Decision | karim | `src/infra.ts:42` |
| [What the service keeps, as tables](infra.md#KeptAsTables) | Technical choice | karim | `src/infra.ts:287` |
| [Local](infra.md#Local) | Environment | karim | `src/infra.ts:29` |
| [A SQLite file on the developer's machine](infra.md#LocalDatabase) | Technical choice | karim | `src/infra.ts:259` |
| [Local database file](infra.md#LocalDatabasePath) | Decision | karim | `src/infra.ts:60` |
| [Node HTTP server](infra.md#NodeServer) | Implementation | karim | `src/infra.ts:233` |
| [Production Postgres database](infra.md#PostgresDatabase) | Implementation | karim | `src/infra.ts:125` |
| [Production](infra.md#Production) | Environment | karim | `src/infra.ts:34` |
| [Postgres in production](infra.md#ProductionDatabase) | Technical choice | karim | `src/infra.ts:272` |
| [The provider's API in production](infra.md#ProviderApi) | Technical choice | karim | `src/infra.ts:347` |
| [Payment provider address](infra.md#ProviderUrl) | Decision | karim | `src/infra.ts:88` |
| [The system clock elsewhere](infra.md#RealClock) | Technical choice | karim | `src/infra.ts:381` |
| [Reservations and cancellations as repositories over the records](infra.md#RecordRepositories) | Technical choice | karim | `src/infra.ts:322` |
| [Reservations as records](infra.md#ReservationRecords) | Function | karim | `src/infra.ts:149` |
| [End of a response](infra.md#ResponseEnding) | Decision | karim | `src/infra.ts:106` |
| [A stopped clock in the scenarios](infra.md#ScenarioClock) | Technical choice | karim | `src/infra.ts:370` |
| [A SQLite database in memory for the scenarios](infra.md#ScenarioDatabase) | Technical choice | karim | `src/infra.ts:246` |
| [Simulated payment provider](infra.md#SimulatedPayment) | Function | karim | `src/infra.ts:199` |
| [A simulated payment provider outside production](infra.md#SimulatedProvider) | Technical choice | karim | `src/infra.ts:335` |
| [References of the simulated provider](infra.md#SimulatedReference) | Decision | karim | `src/infra.ts:100` |
| [Stopped clock](infra.md#StoppedClock) | Function | karim | `src/infra.ts:188` |
| [System clock](infra.md#SystemClock) | Implementation | karim | `src/infra.ts:178` |
| [Test](infra.md#Test) | Environment | karim | `src/infra.ts:23` |
| [Test instant](infra.md#TestInstant) | Decision | karim | `src/infra.ts:55` |
| [The cap, decided](legal.md#FeeCapDecided) | Amendment | karim | `src/legal.ts:21` |
| [Messages of the API](messages.md#ApiMessages) | Message catalog | karim | `src/messages.ts:18` |
| [Language](messages.md#Language) | Decision | karim | `src/messages.ts:12` |
| [Checks of the scenarios](messages.md#ScenarioChecks) | Message catalog | lea | `src/messages.ts:36` |
| [A cancellation refunds once](principles.md#RefundOnce) | Architecture decision | karim | `src/principles.ts:15` |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | Architecture decision | karim | `src/principles.ts:28` |
| [Every reservation is refunded according to the rule](scenarios.md#ComplianceScenario) | Scenario | lea | `src/scenarios.ts:73` |
| [Read a reservation](scenarios.md#ReadScenario) | Scenario | karim | `src/scenarios.ts:31` |
| [A read never writes](scenarios.md#ReadsNeverWrite) | Scenario | karim | `src/scenarios.ts:93` |
| [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) | Scenario | karim | `src/scenarios.ts:51` |
| [The storage is prepared](scenarios.md#StoragePrepared) | Scenario | karim | `src/scenarios.ts:116` |
| [Unknown reservation](scenarios.md#UnknownReservation) | Decision | karim | `src/scenarios.ts:24` |
| [The code is verified](sdlc.md#CodeVerified) | Obligation | karim | `src/sdlc.ts:125` |
| [Commands on this machine](sdlc.md#CommandsOnThisMachine) | Technical choice | karim | `src/sdlc.ts:66` |
| [The decisions hold](sdlc.md#DecisionsApplied) | Obligation | karim | `src/sdlc.ts:137` |
| [Every check is signed](sdlc.md#EveryCheck) | Obligation | karim | `src/sdlc.ts:142` |
| [The requirements of the goal hold](sdlc.md#GoalServed) | Obligation | karim | `src/sdlc.ts:132` |
| [What the service keeps, migrated](sdlc.md#KeptMigrates) | Obligation | karim | `src/sdlc.ts:159` |
| [The program for a laptop](sdlc.md#LocalProgram) | Artefact | karim | `src/sdlc.ts:49` |
| [The way of this machine](sdlc.md#MachineMode) | Policy | karim | `src/sdlc.ts:170` |
| [On a laptop](sdlc.md#OnALaptop) | Check | karim | `src/sdlc.ts:113` |
| [On staging](sdlc.md#OnStaging) | Check | karim | `src/sdlc.ts:97` |
| [On this machine](sdlc.md#OnThisMachine) | Shipment | karim | `src/sdlc.ts:183` |
| [The operators](sdlc.md#Operators) | Role | karim | `src/sdlc.ts:37` |
| [The packages are safe](sdlc.md#PackagesSafe) | Obligation | karim | `src/sdlc.ts:152` |
| [Prepare the storage](sdlc.md#PrepareStorage) | Entry point | karim | `src/sdlc.ts:79` |
| [The program for production](sdlc.md#ProductionProgram) | Artefact | karim | `src/sdlc.ts:43` |
| [A release](sdlc.md#Release) | Shipment | karim | `src/sdlc.ts:176` |
| [The way of a release](sdlc.md#ReleaseMode) | Policy | karim | `src/sdlc.ts:164` |
| [The service's SDLC](sdlc.md#ReservationsSdlc) | Component | karim | `src/sdlc.ts:55` |
| [The rules hold](sdlc.md#RulesHeld) | Obligation | karim | `src/sdlc.ts:147` |
| [API of the payment provider](standards.md#PaymentProviderApi) | Standard | karim | `src/standards.ts:22` |
| [Paths of entry points](standards.md#RouteSyntax) | Standard | karim | `src/standards.ts:9` |
| [Ultra period requested by support](support.md#SupportUltraPeriod) | Amendment | karim | `src/support.ts:11` |
