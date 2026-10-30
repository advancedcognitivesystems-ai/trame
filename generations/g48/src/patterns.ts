/** Trame · Design patterns */

import { pattern } from "../kinds/pattern"
import { ReplaceableTechnology } from "./product"

// The design patterns the technical choices follow. The graph implements none of them here: the kinds do, once (a
// port, the realizations that answer it, the choice that binds them in some environments). A pattern names the intent
// of a choice, cites where it is described, and says what shape it requires of a choice that follows it; each choice
// is checked against the patterns it names.

/**
 * Strategy
 * Interchangeable behaviours behind one interface: the code that uses the interface does not change when another
 * behaviour is chosen. In the graph, the behaviours are functions that implement a port; they touch nothing.
 */
export const Strategy = pattern({
  owner: "trame",
  source: "E. Gamma, R. Helm, R. Johnson, J. Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software (1994), Strategy",
  requires: { pure: true },
  serves: [ReplaceableTechnology],
})

/**
 * Adapter
 * A technology made to answer an interface that the product defines, so that the product depends on its own port and
 * only the adapter on the technology: ports and adapters. In the graph, the adapters are implementations, the only
 * nodes that may touch the platform.
 */
export const Adapter = pattern({
  owner: "trame",
  source: "A. Cockburn, Hexagonal architecture (ports and adapters), 2005; Gamma et al., Design Patterns (1994), Adapter",
  url: "https://alistair.cockburn.us/hexagonal-architecture/",
  requires: { platform: true },
  serves: [ReplaceableTechnology],
})

/**
 * Bridge
 * An abstraction and its implementation vary independently: what answers a port works through another port, and either
 * side can be chosen without the other changing.
 */
export const Bridge = pattern({
  owner: "trame",
  source: "Gamma et al., Design Patterns (1994), Bridge",
  requires: { layered: true },
  serves: [ReplaceableTechnology],
})

/**
 * Abstract Factory
 * A family of related realizations chosen together, so that members of two families are never mixed (a database and
 * its dialect, an in-memory terminal and the log a scenario reads). In the graph, one choice chooses the whole family.
 */
export const AbstractFactory = pattern({
  owner: "trame",
  source: "Gamma et al., Design Patterns (1994), Abstract Factory",
  requires: { family: true },
  serves: [ReplaceableTechnology],
})

/**
 * Repository
 * The domain's objects as a collection behind an interface: what answers it reaches the storage through another port,
 * and holds neither a driver nor a connection. It touches nothing itself.
 */
export const Repository = pattern({
  owner: "trame",
  source: "M. Fowler, Patterns of Enterprise Application Architecture (2002), Repository (E. Hieatt, R. Mee)",
  url: "https://martinfowler.com/eaaCatalog/repository.html",
  requires: { pure: true, layered: true },
  serves: [ReplaceableTechnology],
})
