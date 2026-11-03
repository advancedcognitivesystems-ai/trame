/** Reservations · API */

import { code } from "#trame/kernel"
import { Time, type Duration } from "#std/measures"
import { fn } from "#trame/kinds/function"
import { entryPoint, http } from "#trame/kinds/entry-point"
import { FreeCancellationPeriod, Refund, CancelWithoutStress } from "./cancellation"
import { ReservationsApi, ReservationReading, Cancellations, Payment, Clock, CancellationKey, type StoredReservation } from "./architecture"
import { Http } from "#std/web"
import { ApiMessages } from "./messages"

/**
 * End of free cancellation
 * The moment until which a reservation can be cancelled at no cost.
 */
export const FreeCancellationEnd = fn({
  owner: "lea",
  serves: [Refund],
  synchronous: true,
  deps: { freePeriod: FreeCancellationPeriod, time: Time },
  body: ({ freePeriod, time }) => (r: StoredReservation): string =>
    new Date(Date.parse(r.start) - time.in.millisecond(freePeriod[r.charger])).toISOString(),
})

/**
 * Lead time of a cancellation
 * How long before the start of the slot the reservation is cancelled, in seconds.
 */
export const LeadTime = fn({
  owner: "karim",
  deps: { clock: Clock, time: Time },
  body: ({ clock, time }) => (r: StoredReservation): Duration => Math.floor(time.millisecond(Date.parse(r.start) - clock.now().getTime())),
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
