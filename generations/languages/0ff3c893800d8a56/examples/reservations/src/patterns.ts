/** Reservations · Design patterns */

import { pattern } from "../../../kinds/pattern"

// The patterns the technical choices of the service follow; each choice is checked against those it names.

/**
 * Adapter
 * A technology made to answer an interface the service defines: the service depends on its port, the adapter on the
 * technology (SQLite, Postgres, Node's HTTP server, the provider's API).
 */
export const Adapter = pattern({
  owner: "karim",
  source: "A. Cockburn, Hexagonal architecture (ports and adapters), 2005",
  url: "https://alistair.cockburn.us/hexagonal-architecture/",
  requires: { platform: true },
})

/**
 * Strategy
 * Interchangeable behaviours behind one interface, chosen without changing the code that uses it: a simulated provider
 * and a stopped clock in place of the real ones.
 */
export const Strategy = pattern({
  owner: "karim",
  source: "E. Gamma, R. Helm, R. Johnson, J. Vlissides, Design Patterns (1994), Strategy",
  requires: { pure: true },
})

/**
 * Repository
 * The reservations and the cancellations as collections: what answers them writes statements over a database port, and
 * holds no driver.
 */
export const Repository = pattern({
  owner: "karim",
  source: "M. Fowler, Patterns of Enterprise Application Architecture (2002), Repository",
  url: "https://martinfowler.com/eaaCatalog/repository.html",
  requires: { pure: true, layered: true },
})

/**
 * Abstract Factory
 * A family of realizations chosen together, so that two families never mix: a database and the dialect its statements
 * are written in.
 */
export const AbstractFactory = pattern({
  owner: "karim",
  source: "E. Gamma, R. Helm, R. Johnson, J. Vlissides, Design Patterns (1994), Abstract Factory",
  requires: { family: true },
})
