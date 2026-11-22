/** Reservations · Architecture */

import { KindName, EdgeName, TriggerType } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { port } from "#trame/kinds/port"
import { component, type Exposure } from "#trame/kinds/component"
import { rule } from "#trame/kinds/rule"
import { adr } from "#trame/kinds/adr"
import { scenarioKind } from "#trame/kinds/scenario"
import { entryKind } from "#trame/kinds/entry-point"
import { edgesOf, fieldsOf } from "#trame/kernel"
import { WithoutEffects, Linked } from "#std/rules"
import { CancelWithoutStress } from "./cancellation"
import type { CHF } from "./cancellation"
import type { EntityOf } from "#data/kinds/entity"
import type { KeptReservation, KeptRefund } from "./data"

// The contracts: what the code asks of the world. Types, not implementations. What the service keeps is described once
// (data): a reservation and a refund are the values of their entities.

/** A reservation as it is kept. */
export type StoredReservation = EntityOf<typeof KeptReservation>
/** The refund of a cancelled reservation, as it is kept. */
export type RefundRecord = EntityOf<typeof KeptRefund>
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
