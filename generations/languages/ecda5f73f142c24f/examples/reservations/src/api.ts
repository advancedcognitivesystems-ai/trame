/** Reservations · API */

import { code, ms, elapsed, type Duration } from "../../../trame/kernel"
import { fn } from "../../../kinds/function"
import { entryPoint, http } from "../../../kinds/entry-point"
import { FreeCancellationPeriod, Refund, CancelWithoutStress } from "./cancellation"
import { ReservationsApi, ReservationReading, Cancellations, Payment, Clock, CancellationKey, type StoredReservation } from "./architecture"
import { Http } from "../../../std/src/web"
import { ApiMessages } from "./messages"

/**
 * End of free cancellation
 * The moment until which a reservation can be cancelled at no cost.
 */
export const FreeCancellationEnd = fn({
  owner: "lea",
  serves: [Refund],
  synchronous: true,
  deps: { freePeriod: FreeCancellationPeriod },
  body: ({ freePeriod }) => (r: StoredReservation): string => new Date(Date.parse(r.start) - ms(freePeriod[r.charger])).toISOString(),
})

/**
 * Lead time of a cancellation
 * How long before the start of the slot the reservation is cancelled, in seconds.
 */
export const LeadTime = fn({
  owner: "karim",
  deps: { clock: Clock },
  body: ({ clock }) => (r: StoredReservation): Duration => Math.floor(elapsed(clock.now().getTime(), Date.parse(r.start))),
})

/**
 * Read a reservation
 * The reservation, and the moment until which it can be cancelled for free.
 */
export const ReadReservation = entryPoint({
  owner: "karim",
  in: ReservationsApi,
  serves: [CancelWithoutStress],
  trigger: http("GET", "/reservations/:id"),
  deps: { reservations: ReservationReading, freeCancellationEnd: FreeCancellationEnd, http: Http, messages: ApiMessages },
  body: code.file("./code/read-reservation.ts"),
})

/**
 * Cancel a reservation
 * Refunds according to the rule, only once, even if the request arrives twice.
 */
export const CancelReservation = entryPoint({
  owner: "karim",
  in: ReservationsApi,
  serves: [Refund],
  trigger: http("POST", "/reservations/:id/cancellation"),
  deps: {
    reservations: ReservationReading, cancellations: Cancellations, payment: Payment, leadTime: LeadTime, refund: Refund,
    key: CancellationKey, http: Http, messages: ApiMessages,
  },
  body: code.file("./code/cancel-reservation.ts"),
})
