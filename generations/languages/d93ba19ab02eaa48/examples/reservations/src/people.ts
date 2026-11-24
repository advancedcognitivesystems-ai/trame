/** Reservations · People */

import { ActorSort } from "#trame/kernel"
import { actor } from "#trame/kinds/actor"
import { CancelWithoutStress } from "./cancellation"

// Who works on the reservation service (C4): each owner of its nodes, and each person its roles name, is one of them.

/**
 * Karim
 * Who owns the service: its product, its architecture, its shipments.
 */
export const Karim = actor({ owner: "karim", handle: "karim", sort: ActorSort.person, serves: [CancelWithoutStress] })

/**
 * Léa
 * Who answers for the drivers: support, what they read, the free cancellation period.
 */
export const Lea = actor({ owner: "lea", handle: "lea", sort: ActorSort.person, serves: [CancelWithoutStress] })

/**
 * The service's team
 * Karim and Léa, who ship the service together.
 */
export const ServiceTeam = actor({ owner: "karim", handle: "reservations", sort: ActorSort.team, members: [Karim, Lea], serves: [CancelWithoutStress] })
