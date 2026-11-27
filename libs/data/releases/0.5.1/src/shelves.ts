/** Data · Shelves */

import { vocabulary } from "#trame/kinds/vocabulary"
import { entity, stored } from "./kinds/entity"
import { DataDescribedOnce } from "./product"

// The entity of the library's scenarios: a book on a shelf. Its module is read after theirs, so a scenario wires it
// before the graph evaluates it, as a product's scenarios may.

/**
 * Shelves
 * Where a book stands, in the library's scenarios.
 */
export const Shelves = vocabulary({ owner: "trame", words: { reading: "Being read", read: "Read" }, serves: [DataDescribedOnce] })

/**
 * A book
 * An entity of the library's scenarios: a title (which finds it among others), its pages, where it stands, whether it
 * was lent.
 */
export const Book = entity({
  owner: "trame",
  keptAs: "books",
  key: "title",
  fields: { title: stored.text(), pages: stored.number(), shelf: stored.word(Shelves), lent: stored.optional(stored.flag()) },
  seed: [{ title: "Bleak House", pages: 1017, shelf: "reading" }],
  serves: [DataDescribedOnce],
})

