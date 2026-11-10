/** Reservations · Infrastructure */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { environment } from "#trame/kinds/environment"
import { implementation } from "#trame/kinds/implementation"
import { fn } from "#trame/kinds/function"
import { binding } from "#trame/kinds/binding"
import { ChargerType, chf } from "./cancellation"
import { ReservationReading, Cancellations, Payment, PaymentLog, Clock, HttpExposure, HttpPort, type StoredReservation, type RefundRecord } from "./architecture"
import { KeptReservation, KeptRefund } from "./data"
import { Http, MediaTypes, Uri } from "#std/web"
import { RouteSyntax, PaymentProviderApi } from "./standards"
import { ApiMessages } from "./messages"
import { Adapter, Strategy, Repository, AbstractFactory } from "#std/patterns"
import { Records, RecordsInSql, SqlDatabase, SqliteTables, PostgresTables, SqliteInMemory, InitialRecords, StartEmpty, type Initial } from "#data/records"
import { Sqlite } from "#data/sql"

/**
 * Test
 * Where the scenarios run: a database in memory, a fixed time, a simulated payment provider.
 */
export const Test = environment({ owner: "karim" })

/**
 * Local
 * A developer's machine: a database in a file, a simulated payment provider.
 */
export const Local = environment({ owner: "karim" })

/**
 * Production
 */
export const Production = environment({ owner: "karim" })

// Values --------------------------------------------------------------------

/**
 * Initial reservations
 * What the table of reservations holds when it is created, in test and locally.
 */
export const InitialReservations = decision<StoredReservation[]>({
  owner: "karim",
  value: [
    { id: "R1", charger: ChargerType.normal, price: chf(20), start: "2026-10-20T12:00:00.000Z", status: "active" },
    { id: "R2", charger: ChargerType.fast, price: chf(30), start: "2026-10-20T10:04:00.000Z", status: "active" },
    { id: "R3", charger: ChargerType.ultra, price: chf(40), start: "2026-10-20T11:00:00.000Z", status: "active" },
  ],
})

/**
 * Test instant
 * The time the scenarios see.
 */
export const TestInstant = decision<string>({ owner: "karim", value: "2026-10-20T10:00:00.000Z" })

/**
 * Local database file
 */
export const LocalDatabasePath = decision<string>({ owner: "karim", value: ".data/reservations.db" })

/**
 * Production database name
 */
export const DatabaseName = decision<string>({ owner: "karim", value: "reservations" })

/**
 * Production database size
 */
export const DatabaseSize = decision<{ cpu: number; memory_gb: number }>({ owner: "karim", value: { cpu: 2, memory_gb: 4 } })

/**
 * Production database address
 * Where the service finds the database: the name of the database stands for each %s (as Terraform's format writes it),
 * on the provider's internal network, on Postgres's port.
 */
export const DatabaseAddress = decision<string>({ owner: "karim", value: "postgres://%s.internal:5432/%s" })

/**
 * Backup retention
 * In days.
 */
export const BackupRetention = decision<number>({ owner: "karim", value: 7, range: [7, 35] })

/**
 * Payment provider address
 */
export const ProviderUrl = decision<string>({ owner: "karim", value: "https://payments.example.com/v1" })

/**
 * Status of a cancelled reservation
 * As the reservations table stores it.
 */
export const CancelledStatus = decision<StoredReservation["status"]>({ owner: "karim", value: "cancelled" })

/**
 * References of the simulated provider
 * What the simulated provider answers for a refund: this prefix, then the number of the call.
 */
export const SimulatedReference = decision<string>({ owner: "karim", value: "simulated-" })

/**
 * End of a response
 * A JSON response ends with a line feed: a terminal shows what follows on its own line.
 */
export const ResponseEnding = decision<string>({ owner: "karim", value: "\n" })

// Code ----------------------------------------------------------------------

/**
 * Local SQLite database
 * In a file on the developer's machine, created on the first start.
 */
export const FileDatabase = implementation({
  owner: "karim",
  implements: [SqlDatabase],
  deps: { path: LocalDatabasePath, sqlite: Sqlite },
  body: code.file("./code/sqlite-file.ts"),
})

/**
 * Production Postgres database
 * Provisioned by Terraform.
 */
export const PostgresDatabase = implementation({
  owner: "karim",
  implements: [SqlDatabase],
  deps: { messages: ApiMessages },
  body: code.file("./code/postgres-database.ts"),
  variables: { name: DatabaseName, size: DatabaseSize, backup_retention_days: BackupRetention, address: DatabaseAddress },
  provision: code.file("./infra/postgres-database", "hcl"),
})

/**
 * The first reservations
 * A table of reservations starts with the initial ones; any other table starts empty.
 */
export const FirstReservations = fn({
  owner: "karim",
  implements: [InitialRecords],
  deps: { reservations: InitialReservations, kept: KeptReservation },
  body: ({ reservations, kept }): Initial => ({ of: (model) => (model.name === kept.name ? reservations : []) }),
})

/**
 * Reservations as records
 * A reservation is found by its identifier among the records of its entity.
 */
export const ReservationRecords = fn({
  owner: "karim",
  implements: [ReservationReading],
  deps: { records: Records, reservations: KeptReservation },
  body: ({ records, reservations }) => ({ find: (id: string): Promise<StoredReservation | undefined> => records.find(reservations, id) }),
})

/**
 * Cancellations as records
 * The refund of a reservation is a record of its own; recording it cancels the reservation in the same transaction.
 */
export const CancellationRecords = fn({
  owner: "karim",
  implements: [Cancellations],
  deps: { records: Records, reservations: KeptReservation, refunds: KeptRefund, cancelled: CancelledStatus },
  body: ({ records, reservations, refunds, cancelled }) => ({
    refundFor: (reservation: string): Promise<RefundRecord | undefined> => records.find(refunds, reservation),
    async record(r: RefundRecord) {
      await records.transaction(async () => {
        await records.insert(refunds, r)
        await records.update(reservations, r.reservation, { status: cancelled })
      })
    },
  }),
})

/**
 * System clock
 */
export const SystemClock = implementation({
  owner: "karim",
  implements: [Clock],
  body: () => ({ now: () => new Date() }),
})

/**
 * Stopped clock
 * Always the test instant.
 */
export const StoppedClock = fn({
  owner: "karim",
  implements: [Clock],
  deps: { instant: TestInstant },
  body: ({ instant }) => ({ now: () => new Date(instant) }),
})

/**
 * Simulated payment provider
 * Keeps every call in memory. A key seen before returns the same reference, without a new call.
 */
export const SimulatedPayment = fn({
  owner: "karim",
  implements: [Payment, PaymentLog],
  deps: { prefix: SimulatedReference },
  body: ({ prefix }) => {
    const calls: { key: string; amount: number }[] = []
    const references = new Map<string, string>()
    return {
      async refund(key: string, amount: number) {
        if (!references.has(key)) {
          calls.push({ key, amount })
          references.set(key, prefix + String(calls.length))
        }
        return { reference: references.get(key)! }
      },
      calls: () => [...calls],
    }
  },
})

/**
 * Real payment provider
 * Over HTTPS, with the idempotency key in a header.
 */
export const HttpPayment = implementation({
  owner: "karim",
  implements: [Payment],
  deps: { url: ProviderUrl, api: PaymentProviderApi, http: Http, mediaTypes: MediaTypes, uri: Uri, messages: ApiMessages },
  body: code.file("./code/http-payment.ts"),
})

/**
 * Node HTTP server
 */
export const NodeServer = implementation({
  owner: "karim",
  implements: [HttpExposure],
  deps: { port: HttpPort, http: Http, mediaTypes: MediaTypes, uri: Uri, routes: RouteSyntax, ending: ResponseEnding, messages: ApiMessages },
  body: code.file("./code/node-server.ts"),
})

// Technical choices ---------------------------------------------------------------------

/**
 * A SQLite database in memory for the scenarios
 * The database and its dialect, chosen together.
 */
export const ScenarioDatabase = binding({
  owner: "karim",
  chooses: [SqliteInMemory, SqliteTables],
  environments: [Test],
  follows: [AbstractFactory],
  context: "Every scenario starts from the initial reservations and leaves nothing behind.",
  rejected: { "A shared file": "a scenario would see what the previous one wrote" },
})

/**
 * A SQLite file on the developer's machine
 * The database and its dialect, chosen together.
 */
export const LocalDatabase = binding({
  owner: "karim",
  chooses: [FileDatabase, SqliteTables],
  environments: [Local],
  follows: [AbstractFactory],
  context: "A developer runs the service without installing a database server; the reservations survive a restart.",
  rejected: { "Postgres in a container": "one more thing to install and start for a prototype" },
})

/**
 * Postgres in production
 * The database and its dialect, chosen together.
 */
export const ProductionDatabase = binding({
  owner: "karim",
  chooses: [PostgresDatabase, PostgresTables],
  environments: [Production],
  follows: [AbstractFactory],
  context: "Several instances of the service write at once, and the provider keeps the backups.",
  consequences: "Provisioned by Terraform with the graph's values; its statements come from PostgreSQL's dialect, which cannot be mixed with SQLite's. The prototype ships no Postgres driver yet.",
  rejected: { "SQLite in production": "one writer at a time, and the backups would be ours" },
})

/**
 * What the service keeps, as tables
 * Each entity the service keeps is a table, made ready by a deployment, migrated from the version the previous one
 * kept and read back checked, by the library of data, whichever database answers.
 */
export const KeptAsTables = binding({
  owner: "karim",
  chooses: [RecordsInSql],
  environments: [Test, Local, Production],
  follows: [Strategy],
  context: "A reservation is a row, and refunds are many: a database of SQL keeps them, and finds one by its key.",
  consequences: "No statement is written by hand: the dialect writes them from the entities, and a change of an entity is a migration its owner decides in the graph.",
  rejected: { "A document per reservation": "a reservation is found by its key among many, and two writes are kept together" },
})

/**
 * The first reservations outside production
 */
export const FirstReservationsOutsideProduction = binding({
  owner: "karim",
  chooses: [FirstReservations],
  environments: [Test, Local],
  follows: [Strategy],
  context: "A scenario and a developer need reservations to read and cancel, and the service makes none.",
})

/**
 * Nothing to start with in production
 */
export const EmptyInProduction = binding({
  owner: "karim",
  chooses: [StartEmpty],
  environments: [Production],
  follows: [Strategy],
  context: "In production, the reservations are the drivers': a table starts empty.",
})

/**
 * Reservations and cancellations as repositories over the records
 */
export const RecordRepositories = binding({
  owner: "karim",
  chooses: [ReservationRecords, CancellationRecords],
  environments: [Test, Local, Production],
  follows: [Repository],
  context: "Reading a reservation and cancelling one ask for the domain's records, never for SQL: the repositories ask the records of the entities, whichever database keeps them.",
  consequences: "The repositories hold no driver and write no SQL: they name the entities, and the records find, insert and update them. Changing the database changes its choice (the driver and the dialect together), not them.",
  rejected: { "Statements in the entry points": "the cancellation would know the tables and the dialect" },
})

/**
 * A simulated payment provider outside production
 */
export const SimulatedProvider = binding({
  owner: "karim",
  chooses: [SimulatedPayment],
  environments: [Test, Local],
  follows: [Strategy],
  context: "Refunds must be tried without money moving, and a scenario reads the calls that were made.",
  rejected: { "The provider's sandbox": "a network call in every scenario, and an account to keep" },
})

/**
 * The provider's API in production
 */
export const ProviderApi = binding({
  owner: "karim",
  chooses: [HttpPayment],
  environments: [Production],
  follows: [Adapter],
  context: "Refunds go through the payment provider, over HTTPS, with an idempotency key.",
})

/**
 * Node's HTTP server
 */
export const HttpServerChoice = binding({
  owner: "karim",
  chooses: [NodeServer],
  environments: [Test, Local, Production],
  follows: [Adapter],
  context: "The API is a handful of routes: Node's server is enough, and the scenarios call it as clients would.",
  rejected: { "A web framework": "a dependency for routing that the route syntax already declares" },
})

/**
 * A stopped clock in the scenarios
 */
export const ScenarioClock = binding({
  owner: "karim",
  chooses: [StoppedClock],
  environments: [Test],
  follows: [Strategy],
  context: "The cancellation fee depends on the time left before the start: a scenario needs the same instant every time.",
})

/**
 * The system clock elsewhere
 */
export const RealClock = binding({
  owner: "karim",
  chooses: [SystemClock],
  environments: [Local, Production],
  follows: [Adapter],
  context: "Outside the scenarios, the fee is computed at the real instant.",
})
