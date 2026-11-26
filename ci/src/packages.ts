/** Continuous integration · Packages */

// The people of the repository, who own this library's nodes: loaded so that the graph declares them (C4).
import "#team/people"
import { pkg } from "#trame/kinds/package"
import { RunsElsewhere } from "./product"

/**
 * Trame
 * The language the writers are written in, at the generation the library pins: reached by its path in Trame's
 * repository.
 */
export const Language = pkg({
  owner: "trame", packageName: "trame", version: "127", joins: "language", from: "path", at: "../generations/g127",
  serves: [RunsElsewhere],
})

/**
 * The people of the repository
 * Who works on Trame's repository, declared once as actors (C4): every owner of this library names one of them. The
 * library team writes its workflow with this one, at a frozen version: each imports the other's, never the one being
 * written (since g114, a project's own name leads to its own sources).
 */
export const People = pkg({
  owner: "trame", packageName: "team", version: "0.1.0", joins: "library", from: "path", at: "../libs/team/releases/0.1.0",
  serves: [RunsElsewhere],
})
