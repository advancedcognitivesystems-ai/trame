/** Reservations · Standards */

import { standard } from "#trame/kinds/standard"

/**
 * Paths of entry points
 * How an HTTP entry point names its path: segments separated by slashes, a parameter as a colon followed by its name.
 */
export const RouteSyntax = standard({
  owner: "karim",
  source: "Trame, the trigger of an HTTP entry point (kinds/entry-point.ts, http)",
  constants: {
    separator: { value: "/", meaning: "Separates the segments of a path" },
    parameter: { value: ":", meaning: "Begins a segment that is a parameter: what follows is its name" },
  },
})

/**
 * API of the payment provider
 * The address of a refund, under the provider's address, and the header of the idempotency key.
 */
export const PaymentProviderApi = standard({
  owner: "karim",
  source: "The payment provider's API, version 1: refunds",
  constants: {
    refunds: { value: "refunds", meaning: "The path of a refund" },
    idempotencyKey: { value: "idempotency-key", meaning: "The header of the key: the provider makes one refund per key" },
  },
})
