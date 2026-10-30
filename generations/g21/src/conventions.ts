/** Trame · Conventions */

import { decision } from "../kinds/decision"
import { standard } from "../kinds/standard"
import { ViewGroup, refines } from "../trame/kernel"
import type { Layout as LayoutType } from "./architecture"
import { Texts } from "./algebra"

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
 * The prelude's public API
 * How a body names the prelude's public API (trame/kernel), the only module it may import as a value: a module whose
 * path ends this way, written from wherever the body is. Everything else a body needs, it receives as a parameter.
 */
export const PreludeApi = decision<readonly string[]>({
  owner: "trame",
  value: ["/trame/kernel", "/trame/kernel.ts", "/trame/kernel.js"],
})

/**
 * The frozen API
 * What an assembled program calls in the prelude (trame/internal.ts, frozen): the value of a node read from its
 * declaration, the body of an inline node, the data a rule reads, the start of the component with its entry points;
 * and what the start gives back.
 */
export const FrozenApi = standard({
  owner: "trame",
  source: "Trame, the prelude (trame/internal.ts: frozen)",
  constants: {
    name: { value: "frozen", meaning: "What the prelude exports for frozen programs" },
    value: { value: "value", meaning: "The value of a node, read from its declaration (a rule)" },
    body: { value: "body", meaning: "The body of a node written inline in its declaration" },
    data: { value: "data", meaning: "Sets the data of a node as in force at the date of the assembly, for the rules that read it" },
    start: { value: "start", meaning: "Starts the component with its dependencies and its entry points" },
    title: { value: "title", meaning: "The title of an entry point, given to start" },
    fields: { value: "fields", meaning: "The simple fields of an entry point, which the kind of the component reads" },
    entry: { value: "value", meaning: "What an entry point is, once built" },
    address: { value: "address", meaning: "What start gives back when the component answers somewhere" },
    code: { value: "code", meaning: "What start gives back when the component ends with an exit code" },
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
    wholeNode: refines(Texts, "empty", "The empty path: the whole node, not one of its fields"),
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

/**
 * Order of the view groups
 * Where the views of each group come in the list of documents: the documents of the modules first, then the other
 * documents, the figures, the summary, and last the views of a node.
 */
export const ViewGroupOrder = decision<ViewGroup[]>({
  owner: "trame",
  value: [ViewGroup.module, ViewGroup.document, ViewGroup.figure, ViewGroup.summary, ViewGroup.node],
})
