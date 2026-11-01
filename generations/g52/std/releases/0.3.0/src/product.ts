/** Standard library · Product */

import { goal } from "../../../../kinds/goal"

// What the standard library is for. It holds what every product needs and none should write again: the operations
// bodies share instead of writing 0, 1 or "", the values that published texts fix, and the designs that technical choices
// follow. Trame imports it, and so does each product described with Trame (ADR "A library is a Trame project, imported by
// path", in Trame's principles).

/**
 * Shared operations instead of literals
 * What a body would otherwise write itself (the first element, a count, the empty text) is an operation of an algebraic
 * structure, named once, with the laws it keeps.
 */
export const SharedOperations = goal()

/**
 * A published value is cited, not copied
 * A value that a standard, a registry or an algorithm publishes (an HTTP status, the pattern of a date, a constant of a
 * generator) is written once, with its source; a body receives it instead of writing it.
 */
export const CitedNotCopied = goal()

/**
 * Known designs, named
 * The technical choices of a product follow designs described elsewhere; each one is named once, with where it is
 * described and the shape it asks of a choice that follows it.
 */
export const KnownDesigns = goal()

/**
 * Ports of the platform, realized once
 * What a product needs of a platform (a page that loads, a voice, a place to keep a choice) is a port, and its
 * realizations on each platform are written once; a product binds, in each environment, the one that answers there.
 */
export const RealizedOnce = goal()
