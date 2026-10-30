/** Trame · Libraries */

import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"
import { decision } from "../kinds/decision"
import { WrittenOnce } from "./product"

// A library is a Trame project that other projects import (ADR "A library is a Trame project, imported by path", in
// the module principles): a project names its libraries in its configuration (trame.json, under "libraries"), each
// by its name and its path. The modules of a library join the graph of the project under the library's name; a node of
// the project depends on theirs, a kind reads them; what a build shows as the project's own stops there. Code names a
// library by its name (#std/algebra), and the project's import map says where the name leads: the library as it is, or
// one of its versions, frozen by trame release (ADR "A library is imported by its name").

/**
 * What belongs to a library
 * A module of a library joins the graph that imports it under the library's name, then the separator, then its own
 * name ("std/algebra"). Its nodes take part in that graph, but their documents, their issues and their published
 * declarations are the library's: the project's build counts them apart and links to the library's documents. The rule
 * gives the library a module belongs to, or nothing for a module of the project.
 */
export const LibraryOfAModule = requirement({
  refines: [WrittenOnce],
  rule: (module: string, separator: string): string | undefined => {
    const at = module.indexOf(separator)
    return at < 0 ? undefined : module.slice(0, at)
  },
})

/** Criteria of what belongs to a library */
export const LibraryOfAModuleCriteria = acceptance({
  accepts: LibraryOfAModule,
  owner: "trame",
  criteria: (criterion) => {
    criterion("A module of the project belongs to no library", () => LibraryOfAModule("engine", "/") === undefined)
    criterion("A module of a library belongs to it", () => LibraryOfAModule("std/algebra", "/") === "std")
    criterion("Only the first separator counts: a library's name holds none", () => LibraryOfAModule("std/web/http", "/") === "std")
  },
})

/**
 * A release is settled
 * A version freezes what a library says: nothing in it may be left to decide, nor be in error. The rule receives the
 * count of each, as the library's build found them.
 */
export const ReleaseIsSettled = requirement({
  refines: [WrittenOnce],
  rule: (found: { blocking: number; errors: number }): boolean => found.blocking === 0 && found.errors === 0,
})

/** Criteria of a settled release */
export const ReleaseIsSettledCriteria = acceptance({
  accepts: ReleaseIsSettled,
  owner: "trame",
  criteria: (criterion) => {
    criterion("A library with nothing open can be released", () => ReleaseIsSettled({ blocking: 0, errors: 0 }))
    criterion("A decision left to take refuses the release", () => !ReleaseIsSettled({ blocking: 1, errors: 0 }))
    criterion("An error refuses it", () => !ReleaseIsSettled({ blocking: 0, errors: 2 }))
  },
})

/**
 * Names of a library's releases
 * Each version a library freezes is a release in its module of releases (decision "Releases of the engine": the same
 * module and kind), named by the prefix and the version, its separators replaced by the joint: version 0.1.0 is R0_1_0.
 */
export const LibraryReleaseNames = decision<{ prefix: string; joint: string }>({
  owner: "trame",
  value: { prefix: "R", joint: "_" },
})
