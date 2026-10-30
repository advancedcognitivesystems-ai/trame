/** Trame · Libraries */

import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"
import { WrittenOnce } from "./product"

// A library is a Trame project that other projects import (ADR "A library is a Trame project, imported by path", in
// the module principles): a project names its libraries in its configuration (trame.json, under "libraries"), each
// by its name and its path. The modules of a library join the graph of the project under the library's name; a node of
// the project depends on theirs, a kind reads them; what a build shows as the project's own stops there.

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
