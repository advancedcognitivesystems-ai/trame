/** Standard library · Access */

import { audience } from "#trame/kinds/audience"
import { adr } from "#trame/kinds/adr"
import { Identified } from "./obligations"
import { SharedRules } from "./product"

// Who may call an entry point (C6). Every entry point names its audience: there is no default, since whatever is
// forgotten would be open to anyone. Where it is reached from (a network, a machine, a device) is not the audience's
// but its trigger's and its environment's. The audiences below carry no identity; a product declares those that do (a
// driver, an operator of a tenant), which identification gives (C7).

/**
 * Anyone
 * Whoever reaches the entry point, unidentified: on a network, anyone on it; on a machine, whoever has a terminal there;
 * on a device, whoever holds it.
 */
export const Anyone = audience({ owner: "trame", serves: [SharedRules] })

/**
 * The system
 * Nobody calls: a schedule, a message. An entry point a person triggers (a request, a command, a page) is for someone,
 * not for it.
 */
export const TheSystem = audience({ owner: "trame", system: true, serves: [SharedRules] })

/**
 * The operators
 * The people who run the product's machines and its deployments: they reach every record, whoever owns it, as the owner
 * of a database bypasses its row-level security. A deployment that prepares the tables, a check that opens a page.
 */
export const TheOperators = audience({ owner: "trame", everyOwner: true, serves: [SharedRules] })

/**
 * An entry point says who may call it
 * Each entry point names its audience, and the graph checks it against what the entry point reaches: records that
 * belong to someone (a person, a tenant) ask an audience that carries that identity.
 */
export const SaysItsAudience = adr({
  owner: "trame",
  context: "Who may call an entry point decides whose records it may touch. Left unsaid, an entry point is open to whoever reaches it, and nothing tells a reader or a review that it is.",
  consequences: "Every entry point names its audience (an error otherwise); an audience nobody calls is for no trigger a person calls; an entry point that reaches records owned by a person or a tenant has an audience that carries one, or that reaches every owner's. A shipment whose policy applies Identified proves that each audience carrying an identity is identified where it runs (C7).",
  rejected: {
    "Anyone by default": "whatever is forgotten would be open, the classic hole",
    "A role, as the SDLC's": "a role names the people who sign evidence; an audience is a kind of caller, its members known only at run time",
    "A word of a vocabulary": "a word cannot say what its callers carry, nor be read against what an entry point reaches",
  },
  serves: [SharedRules],
  appliedBy: [Identified],
})
