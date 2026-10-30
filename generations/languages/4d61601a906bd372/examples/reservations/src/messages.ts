/** Reservations · Messages */

import type { CHF, Duration } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { catalog } from "../../../kinds/catalog"

/**
 * Language
 * The language of what the service and its scenarios say: British English.
 */
export const Language = decision<{ tag: string }>({ owner: "karim", value: { tag: "en-GB" } })

/**
 * Messages of the API
 * What the service answers when it cannot do what it is asked.
 */
export const ApiMessages = catalog({
  owner: "karim",
  language: Language,
  messages: () => ({
    unknownReservation: () => "unknown reservation",
    noRoute: () => "no route",
    undecidedValue: (label: string) => `Value still to be decided in the graph: ${label}`,
    providerRefused: (status: number) => `Payment provider: ${status}`,
    noApiKey: () => "Payment provider: no API key in the environment (PAYMENT_API_KEY)",
    noPostgresDriver: () => "Prototype: no Postgres driver is installed. The database is described (Terraform) but not connected.",
  }),
})

/**
 * Checks of the scenarios
 * What each scenario checks, as its report says it.
 */
export const ScenarioChecks = catalog({
  owner: "lea",
  language: Language,
  messages: () => ({
    existingReturned: () => "An existing reservation is returned",
    withFreeUntil: () => "It comes with the end of its free cancellation period",
    unknownIs404: () => "An unknown reservation returns 404",
    firstRefundsByRule: () => "The first cancellation refunds according to the rule",
    secondSameRefund: () => "The second one returns the same refund",
    providerCalledOnce: () => "The provider is called only once",
    refundedByRule: (id: string, charger: string, lead: Duration, amount: CHF) =>
      `${id} (${charger}, ${Math.round(lead / 60)} min ahead) is refunded ${amount} CHF`,
  }),
})
