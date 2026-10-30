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
    sources: "src", documents: "docs", documentExtension: ".md", output: "out", provision: "provision", evidence: "evidence",
    evidenceExtension: ".json", wordJoint: "-",
    kinds: "kinds", views: "views", configuration: "trame.json", lock: "trame.lock",
    graph: "graph.json", snapshot: "snapshot.json", page: "trame-page.html",
    prelude: "trame", generations: "generations", generation: "g", origin: "ORIGIN.md", differences: "differences.diff",
    languages: "languages", manifest: "package.json", lockfile: "package-lock.json",
  },
})

/**
 * The prelude's public API
 * How a body names the prelude's public API (trame/kernel), the only module it may import as a value: a module whose
 * path ends this way, written from wherever the body is. Everything else a body needs, it receives as a parameter; and
 * kinds and views, which may import the prelude, import nothing else in its directory.
 */
export const PreludeApi = decision<{ directory: string; endings: readonly string[] }>({
  owner: "trame",
  value: { directory: "/trame/", endings: ["/trame/kernel", "/trame/kernel.ts", "/trame/kernel.js"] },
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

/** The names of Trame's commands: the entry points take them, and bodies receive them through TrameCommands. */
export const commandNames = {
  assemble: "assemble", build: "build", dev: "dev", payload: "payload", export: "export", publish: "publish", run: "run",
  view: "view", snapshot: "snapshot", testKinds: "test-kinds", advance: "advance", audit: "audit", fallback: "*",
} as const

/**
 * Trame's commands
 * How a person calls Trame in a terminal: the program, its commands, its options, the formats a view is written in.
 * A word that names no command goes to the fallback command (in Trame: the name of a view); with no command, or an
 * option first, Trame builds.
 */
export const TrameCommands = standard({
  owner: "trame",
  source: "Trame, its command line (the entry points of commands, in the module commands)",
  constants: {
    program: { value: "trame", meaning: "The name a person types" },
    assemble: { value: commandNames.assemble, meaning: "Assembles a component for an environment" },
    build: { value: commandNames.build, meaning: "Builds the documents of the graph" },
    dev: { value: commandNames.dev, meaning: "Follows the graph live in the page" },
    payload: { value: commandNames.payload, meaning: "Writes the graph compiled at a date, for the page" },
    export: { value: commandNames.export, meaning: "Writes the page, standalone" },
    publish: { value: commandNames.publish, meaning: "Freezes the published declarations in the lock" },
    run: { value: commandNames.run, meaning: "Assembles a component, then runs it" },
    view: { value: commandNames.view, meaning: "Shows a view" },
    snapshot: { value: commandNames.snapshot, meaning: "Takes the snapshot of the graph" },
    testKinds: { value: commandNames.testKinds, meaning: "Tests the laws of the kinds and of the views" },
    advance: { value: commandNames.advance, meaning: "The generation in place assembles the described engine and checks it" },
    audit: { value: commandNames.audit, meaning: "Asks the registry about the packages of the graph, and keeps its answers as evidence" },
    fallback: { value: commandNames.fallback, meaning: "The command that receives a word naming no other one" },
    optionPrefix: { value: "-", meaning: "Opens an option, not a command" },
    at: { value: "--at", meaning: "The date at which the graph is compiled" },
    format: { value: "--format", meaning: "The format a view is written in" },
    port: { value: "--port", meaning: "The port trame dev listens on" },
    fragment: { value: "--fragment", meaning: "Writes the page as a fragment, without its document" },
    env: { value: "--env", meaning: "The environment a component is assembled for" },
    all: { value: "--all", meaning: "Every date, not only the one asked" },
    accept: { value: "--accept", meaning: "The differences an advance shows are wanted" },
    promote: { value: "--promote", meaning: "The candidate becomes the next generation, with what changes" },
    json: { value: "json", meaning: "A view written as JSON (the intermediate format)" },
    markdown: { value: "md", meaning: "A view written as Markdown" },
    separator: { value: " ", meaning: "Separates the words of a command, and the names of a list given as one parameter" },
  },
})

/**
 * Trame's environment
 * The variables of the environment Trame reads.
 */
export const TrameEnvironment = standard({
  owner: "trame",
  source: "Trame, the variables of the environment it reads",
  constants: {
    today: { value: "TRAME_TODAY", meaning: "The date the engine takes for today (ISO 8601) instead of the clock's: documents that do not change from one day to the next" },
  },
})

/**
 * Names of steps
 * When two steps of a wiring plan would take the same name, or a step a name that is taken, the second takes its
 * module as a prefix, with this joint.
 */
export const StepNames = decision<{ joint: string }>({ owner: "trame", value: { joint: "_" } })

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
 * The lines of each are joined into one text, by a space.
 */
export const DocComment = decision<{ titleLines: number; joint: string }>({ owner: "trame", value: { titleLines: 1, joint: " " } })

/**
 * JSON formatting
 * The JSON that Trame writes to be read (the lock, a view in JSON): indented.
 */
export const JsonFormatting = decision<{ indentation: number }>({ owner: "trame", value: { indentation: 2 } })

/**
 * Names of the documents
 * How a document of a view is named: a view of the whole graph by its name; a view of a module by its name and the
 * module ("layers.engine"), except the first view per module, named by the module alone; a view of a node by its name
 * and the reference of the node ("impact:engine.Compiler"), which the page reads back to show it.
 */
export const DocumentIds = standard({
  owner: "trame",
  source: "Trame, the documents of its views (the engine names them, the page reads them)",
  constants: {
    ofModule: { value: ".", meaning: "Between the name of a view and the module it shows" },
    ofNode: { value: ":", meaning: "Between the name of a view and the reference of the node it shows" },
  },
})

/**
 * Order of the view groups
 * Where the views of each group come in the list of documents: the documents of the modules first, then the other
 * documents, the figures, the summary, and last the views of a node.
 */
export const ViewGroupOrder = decision<ViewGroup[]>({
  owner: "trame",
  value: [ViewGroup.module, ViewGroup.document, ViewGroup.figure, ViewGroup.summary, ViewGroup.node],
})
