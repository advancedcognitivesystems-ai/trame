// The engine that runs a program of commands in its own process (E3, since g119), and what it gives (since g124).
//
// A command is an entry point of a project's graph, or of a library a project chooses it from. Assembled for its
// environment, its program is imported by the engine that dispatches it, in the engine's process: the program's
// exposure (std's CommandsInTheEngine) offers its commands to the engine instead of reading Node's command line. What a
// command reaches of the engine is its API, which the language defines here, as it defines what a view receives, and
// which the engine gives: std's ports of the engine's primitives are realized by adapters that read it. The engine is
// the running one while it imports a program, while it runs one of its commands, and while it compiles a project (the
// scenarios it plays then reach it too); a program run alone finds none. The API grows as the engine's commands move
// into libraries, each time with a generation.

import type { Bundle, BundleMode, Compilation, Document, Payload } from "./kernel"

/** Where a project's files are, from its root, as the engine reads and writes them. */
export interface ProjectLayout {
  readonly sources: string
  readonly documents: string
  readonly documentExtension: string
  readonly output: string
  readonly evidence: string
  readonly configuration: string
  readonly lock: string
  /** The graph a build writes for tools, with its history. */
  readonly graph: string
  /** The graph a build writes for agents: what is in force. */
  readonly snapshot: string
  readonly page: string
  readonly manifest: string
  readonly lockfile: string
}

// Reading a language (since g128) -------------------------------------------------------------------------------------
//
// The engine reads the languages bodies are written in with tree-sitter: a language node declares its grammar, its
// queries and examples, the reader reads. Reading is a primitive of the engine, as compiling is: a library's language
// (std's HTML and CSS) is read by the engine that compiles it, through std's port LanguageReading.

/**
 * A tree-sitter grammar: the module that resolves to its WebAssembly file. The package and its version are those of the
 * language's packages; a language written before packages were nodes names them here.
 */
export interface Grammar {
  module: string
  package?: string
  version?: string
}

/**
 * How the escape sequences of a text decode. A sequence opens with the mark; what follows it is either named in `single`
 * (n, t, a line terminator…, the longest that fits), or numeric (a prefix, then digits of a radix: a given number of
 * them, or up to a closing mark, or as many as there are up to a most; a character of `trailing` that follows them
 * belongs to the sequence), or neither: the mark then escapes the character that follows it (\q is q), unless
 * `keepUnknown` says that it stands for itself (HTML: an ampersand that opens no known reference is an ampersand).
 * Some languages also write a text with other sequences (HCL: $${ for ${): `literal`.
 */
export interface Escapes {
  mark: string
  single: Record<string, string>
  numeric: { prefix: string; radix: number; digits?: number; close?: string; most?: number; trailing?: string[] }[]
  literal?: Record<string, string>
  keepUnknown?: boolean
}

/** What a language gives to those who receive it: its description, as data. */
export interface LanguageDescription {
  name: string
  /** The name bodies give to the language: the language of a file body (code.file), of a component's program. */
  tag: string
  grammar: Grammar
  extensions: string[]
  /** The queries, by concern (values, names, imports…). */
  queries: Record<string, string>
  escapes: Escapes
}

/** What a reader gives back for an example, so that the kind can compare. */
export interface ExampleReading {
  literals: string[]
  roles: string[]
  values: (string | number)[]
  imports: { module: string; typeOnly: boolean }[]
  globals: string[]
  entry: boolean
  parameters: string[]
  outputs: string[]
  errors: number
}

/**
 * The reader a language is read by (since g128, the engine's, which it gives through its API): it loads the language's
 * grammar, reads an example of it, and says which predicates of its queries tree-sitter keeps aside.
 */
/** Where a text does not follow the grammar of its language: its line and its column, from one. */
export interface TextPlace {
  readonly line: number
  readonly column: number
}

/**
 * A text read in its language, once, nothing kept (since g136): the names it reads that it does not declare (a CSS
 * variable used), those it declares (a variable written), and where it does not follow the grammar.
 */
export interface TextReading {
  readonly parameters: readonly string[]
  readonly outputs: readonly string[]
  readonly errors: readonly TextPlace[]
}

export interface LanguageReader {
  load(language: LanguageDescription): Promise<void>
  example(language: LanguageDescription, code: string): ExampleReading
  /** The predicates each query uses that tree-sitter keeps aside, as tree-sitter parsed the query: [query, operator]. */
  aside(language: LanguageDescription): [string, string][]
}


/** What reads back a text written in a language (since g136): a page before it is given. A reader the engine gives does both. */
export interface TextReader {
  readText(language: LanguageDescription, text: string): TextReading
}

// The documents of the views (since g132) ---------------------------------------------------------------------------
//
// The views are the language's, and the engine runs them: a command gives people the documents they give, rendered by
// libs/documents, with where each card is.

/** Where a node's card is: the document that holds it, that document's file when it is written as one, its anchor. */
export interface Place {
  readonly doc: string
  readonly file?: string
  readonly anchor: string
}

/**
 * Where references lead: the card of each node (a node of the project in its documents, a node of a library in the
 * library's, which the library writes), and the file of each document written as one.
 */
export interface Places {
  readonly locate: Map<string, Place>
  readonly files: Map<string, string | undefined>
}

/** The documents the views give, those of each node included, and where each card is. */
export interface ViewDocuments {
  readonly documents: readonly Document[]
  readonly places: Places
}

/** Why a view asked by its name gives no document: no view of that name, no such node or module, a view that does not apply to the node. */
export const ViewRefusal = { unknownView: "unknown view", unknownNode: "unknown node", unknownModule: "unknown module", notApplicable: "not applicable" } as const
export type ViewRefusal = (typeof ViewRefusal)[keyof typeof ViewRefusal]

/** One view's document, or why there is none, with the names that would have been known (the views, the modules). */
export type ViewAnswer =
  | { readonly document: Document; readonly refused?: undefined }
  | { readonly document?: undefined; readonly refused: ViewRefusal; readonly asked?: string; readonly known: readonly string[]; readonly view?: string }

/** Which documents the views give: those of each node too, unless said otherwise (a day of history carries none). */
export interface DocumentsAsked {
  readonly perNode?: boolean
}

/** A value a person amends from the page (since g86), as trame amend takes it; previewed only, with `dryRun`. */
export interface AmendmentAsked {
  readonly node: string
  readonly path: string
  /** The new value: JSON, or a text as it is. */
  readonly value: string
  readonly why: string
  readonly by: string
  readonly from?: string
  readonly until?: string
  /** The source that changed a cited value. */
  readonly source?: string
  /** Recorded even when it raises an error, for its owner to settle. */
  readonly accept?: boolean
  /** What it would change, recorded nowhere. */
  readonly dryRun?: boolean
}

/**
 * What an amendment does: why it is refused, or what it changes (a heading, then its lines), the file it was recorded
 * in, whose approval it awaits.
 */
export interface AmendmentAnswer {
  readonly refused?: string
  readonly heading?: string
  readonly lines: readonly string[]
  readonly file?: string
  readonly awaits?: string
}

/** A project compiled at a date. */
export interface CompiledProject {
  /** Its root, as the engine found it. */
  readonly root: string
  /** The day it is compiled at. */
  readonly today: string
  /** What it calls itself, as its configuration says (since g136): a page's title names it. */
  readonly title?: string
  /** What a view receives: the graph, its statuses and issues, the pipelines of its shipments, g.lib. */
  readonly graph: Compilation
  /** The graph as a build writes it into graph.json. */
  written(): string
  /** The graph as a build writes it into snapshot.json. */
  snapshot(): string
  /**
   * The documents its views give, those of each node too unless asked otherwise (since g136), and where each card is
   * (since g132); a view that breaks a law refuses.
   */
  documents(asked?: DocumentsAsked): Promise<ViewDocuments>
  /** One view's document, by the view's name and, for a view of a node or a module, its name (since g132). */
  view(name: string, arg?: string): Promise<ViewAnswer>
  /**
   * The graph as a page receives it at its date, carrying these documents, not yet rendered (since g136): its modules,
   * nodes, views, statuses and issues, its outputs for tools, the dates it changes at, its history.
   */
  payload(documents: readonly Document[]): Promise<Payload>
  /** The dates a page offers it at: those it changes at and, with its history, the last days something was given (since g136). */
  candidates(history?: boolean): readonly string[]
  /**
   * The project compiled at its date and at each date a page offers, in a fresh process (since g136): its modules read
   * afresh, a compilation that fails taking nothing down; an export's carries its history.
   */
  bundle(mode: BundleMode): Promise<Bundle>
  /** The same graph, read once, compiled at another day (since g136): what a page offers at each of its dates. */
  at(date: string): Promise<CompiledProject>
  /**
   * Calls `changed` with each file its build reads that changes, from its root (since g136): what trame dev follows.
   * Gives what it watches, from the root, a directory ending with the separator of paths (since g137).
   */
  watch(changed: (path: string) => void): readonly string[]
  /**
   * Amends one of its values, as trame amend does, then records the amendment where the project's go, unless it is
   * refused or only previewed (since g136): given on the project a command runs for.
   */
  amend?(asked: AmendmentAsked): Promise<AmendmentAnswer>
}

/** What a command reaches of the engine that runs it (since g124). */
export interface EngineApi {
  /** Where a project's files are. */
  readonly layout: ProjectLayout
  /** The project the command runs for, compiled at the day its line says, as the dispatch prepared it; none outside a command. */
  prepared(): CompiledProject | undefined
  /**
   * A project compiled at a date, checked as the dispatch checks one, nothing kept beside it; refused with what refuses
   * it (a directory without a configuration first). Its root is a directory from where the engine runs or, written as a
   * package's name and a path in it (#commands/samples/small, since g125), in the sources of the package the project
   * being compiled, or prepared, leads that name to: a library's scenario finds what its version carries.
   */
  compile(root: string, today: string): Promise<CompiledProject>
  /** The engine's reader of languages (since g128): what it reads a body with, given a language's description. */
  readonly reader: LanguageReader & TextReader
  /** The page's program, bundled for a browser as the engine assembled it (since g136): what a page runs. */
  page(): Promise<string>
  /** The name a person types to run the engine (since g137): what a page's brand writes, what a command names it by. */
  readonly program: string
}

/** The engine that runs a program: where its commands go, and its API. */
export interface RunningEngine<Route = unknown> {
  /** Takes the commands the program exposes, while it imports it: the engine runs the one the command line names. */
  offer(routes: readonly Route[]): void
  /** What the program's commands reach of the engine. */
  api: EngineApi
}

let running: RunningEngine | undefined

/** The engine running in this process, while it does; nothing when a program runs alone. */
export function runningEngine<Route = unknown>(): RunningEngine<Route> | undefined {
  return running as RunningEngine<Route> | undefined
}

/** Runs `f` with this engine as the running one (a program imported, a command run, a project compiled); the one before comes back after. */
export async function withEngine<T>(engine: RunningEngine, f: () => Promise<T>): Promise<T> {
  const before = running
  running = engine
  try {
    return await f()
  } finally {
    running = before
  }
}

// The extension points of the commands the engine keeps (since g120) -----------------------------------------------
//
// A project, or a library it imports, extends a command the engine keeps by choosing realizations of these contracts:
// std declares each as an extension point, and the engine calls every add-on the project's choice makes, in its order;
// one that fails does not stop the others, and the command ends in failure, saying which.

/** What a project asks of the machine besides what trame doctor asks: whether it holds, said in one line. */
export interface MachineNeed {
  ask(): Promise<{ holds: boolean; says: string }>
}

/** A project as trame init repairs it: where it is, its title, who runs init, the commands it already has. */
export interface RepairedProject {
  root: string
  title: string
  owner: string
  commands: readonly string[]
}

/** What trame init writes into a project that lacks it: the files it wrote, from the project's root; none if nothing lacked. */
export interface ProjectRepair {
  repair(project: RepairedProject): Promise<readonly string[]>
}
