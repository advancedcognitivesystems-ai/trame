/** Reservations · Architecture */

import { KindName, EdgeName, TriggerType } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { port } from "../../../kinds/port"
import { component, type Exposure } from "../../../kinds/component"
import { rule } from "../../../kinds/rule"
import { adr } from "../../../kinds/adr"
import { scenarioKind } from "../../../kinds/scenario"
import { entryKind } from "../../../kinds/entry-point"
import { edgesOf, fieldsOf } from "../../../trame/kernel"
import { WithoutEffects, Linked } from "#std/rules"
import { CancelWithoutStress } from "./cancellation"
import type { Reservation, CHF } from "./cancellation"

// The contracts: what the code asks of the world. Types, not implementations.

export type Param = string | number | null
export interface ReadConnection {
  read<T = Record<string, unknown>>(sql: string, ...params: Param[]): Promise<T[]>
}
export interface Connection extends ReadConnection {
  write(sql: string, ...params: Param[]): Promise<number>
  transaction<T>(work: () => Promise<T>): Promise<T>
}
/** The type of a column, whatever the database: each dialect names it. */
export type ColumnType = "text" | "number"
/** A table, whatever the database: its name, its key, its columns in their order, and the columns that hold the key of another table's row. */
export interface Table {
  name: string
  key: string
  columns: Record<string, ColumnType>
  references?: Record<string, { table: string; column: string }>
}
/** The tables of the service: the reservations, the refund of each cancelled one; the column of a reservation's status; the name a count is read under. */
export interface Tables {
  reservations: Table
  refunds: Table
  status: string
  count: string
}
/** What depends on the database's dialect: each statement the repositories need, written for it. */
export interface SqlDialect {
  /** Creates a table unless it exists. */
  create(table: Table): string
  /** Counts the rows of a table, as a column of this name. */
  count(name: string, as: string): string
  /** Inserts a row: one parameter per column, in their order. */
  insert(name: string, columns: readonly string[]): string
  /** Reads these columns of the row whose key is the parameter. */
  find(name: string, columns: readonly string[], key: string): string
  /** Gives these columns new values (one parameter each, in their order), in the row whose key is the last parameter. */
  update(name: string, columns: readonly string[], key: string): string
}
export interface StoredReservation extends Reservation {
  id: string
  /** Start of the slot, ISO 8601. */
  start: string
  status: "active" | "cancelled"
}
export interface RefundRecord {
  reservation: string
  amount: CHF
  reference: string
}
export interface ReservationReader {
  find(id: string): Promise<StoredReservation | undefined>
}
export interface CancellationRegister {
  refundFor(reservation: string): Promise<RefundRecord | undefined>
  record(r: RefundRecord): Promise<void>
}
export interface PaymentProvider {
  refund(idempotencyKey: string, amount: CHF): Promise<{ reference: string }>
}
export interface CallLog {
  calls(): { key: string; amount: CHF }[]
}
export interface TimeSource {
  now(): Date
}

/**
 * SQL dialect
 * The statements the repositories need, written in the dialect of the database that answers them: its parameters, the
 * types of its columns. It touches nothing.
 */
export const Dialect = port<SqlDialect>({ owner: "karim", declaredEffects: [] })

/**
 * Database
 * A full SQL connection: reads, writes and transactions.
 */
export const Database = port<Connection>({
  owner: "karim",
  declaredEffects: { read: ["read", "asynchronous"], write: ["write", "asynchronous"], transaction: ["read", "write", "asynchronous"] },
})

/**
 * Read-only database
 * The same database, seen as read-only.
 */
export const ReadOnlyDatabase = port<ReadConnection>({ owner: "karim", declaredEffects: ["read", "asynchronous"] })

/**
 * Reservation reading
 * Finds a reservation by its identifier.
 */
export const ReservationReading = port<ReservationReader>({ owner: "karim", declaredEffects: ["read", "asynchronous"] })

/**
 * Cancellation records
 * Tells whether a reservation is already cancelled, and records a cancellation with its refund.
 */
export const Cancellations = port<CancellationRegister>({ owner: "karim", declaredEffects: { refundFor: ["read", "asynchronous"], record: ["write", "asynchronous"] } })

/**
 * Payment provider
 * Refunds a driver. One call per idempotency key.
 */
export const Payment = port<PaymentProvider>({ owner: "karim", declaredEffects: ["network", "third-party", "asynchronous", "read"] })

/**
 * Payment log
 * The calls made to the provider. It exists only where the provider is simulated.
 */
export const PaymentLog = port<CallLog>({ owner: "karim", declaredEffects: [] })

/**
 * Clock
 * The current time.
 */
export const Clock = port<TimeSource>({ owner: "karim", declaredEffects: ["time"] })

/**
 * HTTP exposure
 * Serves entry points on a port.
 */
export const HttpExposure = port<Exposure>({ owner: "karim", declaredEffects: ["network", "asynchronous"] })

/**
 * HTTP port of the API
 */
export const HttpPort = decision<number>({ owner: "karim", value: 4180 })

/**
 * Key of a cancellation's refund
 * The idempotency key the provider receives: this prefix, then the reservation. A request repeated for the same
 * reservation refunds only once.
 */
export const CancellationKey = decision<string>({ owner: "karim", value: "cancellation-" })

/**
 * Reservations API
 * The service that reads and cancels reservations.
 */
export const ReservationsApi = component({
  owner: "karim",
  language: "typescript",
  deps: { exposure: HttpExposure },
})

/**
 * A read writes nothing
 * A GET writes neither to the database nor to a third party, not even through a distant dependency.
 */
export const ReadWithoutWrite = rule({
  owner: "karim",
  applies: WithoutEffects,
  params: {
    nodes: { kinds: [KindName.entry], where: [{ path: `${fieldsOf(entryKind).trigger}.type`, equals: TriggerType.http }, { path: `${fieldsOf(entryKind).trigger}.method`, equals: "GET" }] },
    effects: ["write", "third-party"],
  },
})

/**
 * Utilities do not touch the world
 * A utility function neither reads nor writes the database, and does not call the network. Reading the time is allowed.
 * A function that answers a port (a repository over the database port) is not a utility: it is a realization, chosen
 * by a technical choice.
 */
export const UtilitiesWithoutWorld = rule({
  owner: "karim",
  applies: WithoutEffects,
  params: { nodes: { kinds: [KindName.function], without: { edge: EdgeName.implements } }, effects: ["read", "write", "network", "third-party"] },
})

/**
 * Every call to a third party is verified
 * An entry point that calls a third party has at least one scenario that verifies it.
 */
export const ThirdPartiesVerified = rule({
  owner: "karim",
  applies: Linked,
  params: { nodes: { kinds: [KindName.entry], effects: ["third-party"] }, edge: edgesOf(scenarioKind).verifies, way: "in", atLeast: 1 },
})

/**
 * Effects follow the request
 * What an entry point may do follows what it is asked: a read changes nothing, a utility touches nothing, and a call
 * to the payment provider is verified by a scenario before it reaches a driver.
 */
export const EffectsFollowTheRequest = adr({
  owner: "karim",
  context: "A driver who reads a reservation must never pay for it, and a refund must never be sent untested.",
  consequences: "Three rules judge the effects of every entry point and function at each build.",
  serves: [CancelWithoutStress],
  appliedBy: [ReadWithoutWrite, UtilitiesWithoutWorld, ThirdPartiesVerified],
})
