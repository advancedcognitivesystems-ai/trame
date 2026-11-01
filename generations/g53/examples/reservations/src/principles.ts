/** Reservations · Principles */

import { adr } from "../../../kinds/adr"
import { CancelWithoutStress } from "./cancellation"
import { CancellationKey } from "./architecture"
import { CancelReservation } from "./api"
import { HttpPayment } from "./infra"
import { RepeatedCancellationScenario } from "./scenarios"

/**
 * A cancellation refunds once
 * The payment provider receives an idempotency key for each reservation: a request that arrives twice returns the
 * refund already made.
 */
export const RefundOnce = adr({
  owner: "karim",
  context: "A driver's phone repeats a request when the network drops; the provider must not refund twice.",
  consequences: "The refund is recorded with the cancellation, in one transaction; a repeated request finds it and returns it without calling the provider.",
  rejected: { "Locking the reservation while refunding": "the lock is lost with the connection, and the provider is outside the transaction" },
  serves: [CancelWithoutStress],
  appliedBy: [CancelReservation, CancellationKey, RepeatedCancellationScenario],
})

/**
 * Secrets stay out of the graph
 * The payment provider's API key comes from the environment of the process, never from a decision.
 */
export const SecretsOutOfTheGraph = adr({
  owner: "karim",
  context: "The graph is read by many people, and every value of it shows in the documents and the page.",
  consequences: "Without a key in the environment, the real provider makes no call and says why.",
  rejected: { "The key as a decision": "every document and the page would show it" },
  serves: [CancelWithoutStress],
  appliedBy: [HttpPayment],
})
