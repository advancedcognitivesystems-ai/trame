/** Reservations · Infrastructure */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { environment } from "#trame/kinds/environment"
import { implementation } from "#trame/kinds/implementation"
import { fn } from "#trame/kinds/function"
import { binding } from "#trame/kinds/binding"
import { ChargerType, chf } from "./cancellation"
import {
  Database, ReadOnlyDatabase, ReservationReading, Cancellations, Payment, PaymentLog, Clock, HttpExposure, HttpPort, Dialect,
  type StoredReservation, type Tables,
} from "./architecture"
import { Http, MediaTypes, Uri } from "#std/web"
import { RouteSyntax, Sqlite, PaymentProviderApi } from "./standards"
import { ApiMessages } from "./messages"
import { Adapter, Strategy, Repository, AbstractFactory } from "#std/patterns"
import { Commands } from "#std/effects"
import { SqliteSql, PostgresSql, SqliteParameter, PostgresParameter, ColumnDefinition, CreateTable, CountRows, InsertRow, SelectRows, UpdateRows, ColumnEquals } from "./sql"

/**
 * Test
 * Where the scenarios run: an in-memory database, a fixed time, a simulated payment provider.
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
 * Inserted when a database starts empty, in test and locally.
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
 * Test database
 */
export const TestDatabasePath = decision<string>({ owner: "karim", value: ":memory:" })

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
 * Tables of the service
 * The reservations, and the refund of each cancelled one (its key is the reservation's); the column of a reservation's
 * status, and the name a count is read under. Whatever the database: each dialect writes them in its own SQL.
 */
export const ReservationTables = decision<Tables>({
  owner: "karim",
  value: {
    reservations: { name: "reservations", key: "id", columns: { id: "text", charger: "text", price: "number", start: "text", status: "text" } },
    refunds: {
      name: "refunds", key: "reservation", columns: { reservation: "text", amount: "number", reference: "text" },
      references: { reservation: { table: "reservations", column: "id" } },
    },
    status: "status",
    count: "n",
  },
})

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
 * In-memory SQLite database
 * New for each session: every scenario starts from the initial reservations.
 */
export const InMemoryDatabase = implementation({
  owner: "karim",
  implements: [Database, ReadOnlyDatabase],
  deps: { path: TestDatabasePath, tables: ReservationTables, dialect: Dialect, reservations: InitialReservations, sqlite: Sqlite },
  body: code.file("./code/sqlite-database.ts"),
})

/**
 * Local SQLite database
 * In a file on the developer's machine, created on the first start.
 */
export const FileDatabase = implementation({
  owner: "karim",
  implements: [Database, ReadOnlyDatabase],
  deps: { path: LocalDatabasePath, tables: ReservationTables, dialect: Dialect, reservations: InitialReservations, sqlite: Sqlite },
  body: code.file("./code/sqlite-database.ts"),
})

/**
 * Production Postgres database
 * Provisioned by Terraform.
 */
export const PostgresDatabase = implementation({
  owner: "karim",
  implements: [Database, ReadOnlyDatabase],
  deps: { messages: ApiMessages },
  body: code.file("./code/postgres-database.ts"),
  variables: { name: DatabaseName, size: DatabaseSize, backup_retention_days: BackupRetention, address: DatabaseAddress },
  provision: code.file("./infra/postgres-database", "hcl"),
})

/**
 * SQLite's dialect
 * Parameters as question marks; text and real numbers.
 */
export const SqliteDialect = fn({
  owner: "karim",
  implements: [Dialect],
  deps: {
    types: SqliteSql, parameter: SqliteParameter, definition: ColumnDefinition, createTable: CreateTable, countRows: CountRows,
    insertRow: InsertRow, selectRows: SelectRows, updateRows: UpdateRows, columnEquals: ColumnEquals, commands: Commands,
  },
  body: code.file("./code/sql-dialect.ts"),
})

/**
 * PostgreSQL's dialect
 * Positional parameters ($1, $2…); text and double precision numbers.
 */
export const PostgresDialect = fn({
  owner: "karim",
  implements: [Dialect],
  deps: {
    types: PostgresSql, parameter: PostgresParameter, definition: ColumnDefinition, createTable: CreateTable, countRows: CountRows,
    insertRow: InsertRow, selectRows: SelectRows, updateRows: UpdateRows, columnEquals: ColumnEquals, commands: Commands,
  },
  body: code.file("./code/sql-dialect.ts"),
})

/**
 * Reservations in SQL
 */
export const ReservationsSql = fn({
  owner: "karim",
  implements: [ReservationReading],
  deps: { database: ReadOnlyDatabase, dialect: Dialect, tables: ReservationTables },
  body: code.file("./code/reservations-sql.ts"),
})

/**
 * Cancellations in SQL
 * The cancellation and its refund are written in the same transaction.
 */
export const CancellationsSql = fn({
  owner: "karim",
  implements: [Cancellations],
  deps: { database: Database, dialect: Dialect, tables: ReservationTables, cancelled: CancelledStatus },
  body: code.file("./code/cancellations-sql.ts"),
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
 * An in-memory SQLite database for the scenarios
 * The database and its dialect, chosen together.
 */
export const ScenarioDatabase = binding({
  owner: "karim",
  chooses: [InMemoryDatabase, SqliteDialect],
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
  chooses: [FileDatabase, SqliteDialect],
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
  chooses: [PostgresDatabase, PostgresDialect],
  environments: [Production],
  follows: [AbstractFactory],
  context: "Several instances of the service write at once, and the provider keeps the backups.",
  consequences: "Provisioned by Terraform with the graph's values; its statements come from PostgreSQL's dialect, which cannot be mixed with SQLite's. The prototype ships no Postgres driver yet.",
  rejected: { "SQLite in production": "one writer at a time, and the backups would be ours" },
})

/**
 * Reservations and cancellations as repositories over SQL
 */
export const SqlRepositories = binding({
  owner: "karim",
  chooses: [ReservationsSql, CancellationsSql],
  environments: [Test, Local, Production],
  follows: [Repository],
  context: "Reading a reservation and cancelling one ask for the domain's records, never for SQL: the repositories turn them into statements over a database port, whichever database answers it.",
  consequences: "The repositories hold no driver and write no SQL: they ask the dialect port for their statements, and the database port runs them. Changing the database changes its choice (the driver and the dialect together), not them.",
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
