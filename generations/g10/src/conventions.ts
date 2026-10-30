/** Trame · Conventions */

import { decision } from "../kinds/decision"
import { standard } from "../kinds/standard"
import type { Layout as LayoutType } from "./architecture"

/**
 * Project layout
 * Where a Trame project keeps its sources, its documents, its outputs; what its files are called.
 */
export const Layout = decision<LayoutType>({
  owner: "trame",
  value: {
    sources: "src", documents: "docs", documentExtension: ".md", output: "out", evidence: "evidence",
    kinds: "kinds", views: "views", configuration: "trame.json", lock: "trame.lock",
    graph: "graph.json", snapshot: "snapshot.json", page: "trame-page.html",
  },
})

/**
 * Default rank
 * The place of a kind or a view that does not declare one, in documents and lists.
 */
export const DefaultRank = decision<number>({ owner: "trame", value: 100 })

/**
 * Trame references
 * How the language names a node and a field: "module.Identifier", "value.case". An empty path designates the whole node.
 */
export const ReferenceSyntax = standard({
  owner: "trame",
  source: "Trame, the prelude (trame/kernel.ts: refOf, getPath)",
  constants: {
    separator: { value: ".", meaning: "Separates the module from the identifier, and the steps of a path in a field" },
    wholeNode: { value: "", meaning: "The empty path: the whole node, not one of its fields" },
  },
})

/**
 * Documentation comment
 * What the comment before a declaration says: its first lines are the node's title, the following ones its description.
 */
export const DocComment = decision<{ titleLines: number }>({ owner: "trame", value: { titleLines: 1 } })

/**
 * JSON formatting
 * The JSON that Trame writes to be read (the lock, a view in JSON): indented.
 */
export const JsonFormatting = decision<{ indentation: number }>({ owner: "trame", value: { indentation: 2 } })
