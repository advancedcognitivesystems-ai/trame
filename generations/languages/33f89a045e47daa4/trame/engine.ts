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

import type { Compilation } from "./kernel"

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
export interface LanguageReader {
  load(language: LanguageDescription): Promise<void>
  example(language: LanguageDescription, code: string): ExampleReading
  /** The predicates each query uses that tree-sitter keeps aside, as tree-sitter parsed the query: [query, operator]. */
  aside(language: LanguageDescription): [string, string][]
}


/** A project compiled at a date. */
export interface CompiledProject {
  /** Its root, as the engine found it. */
  readonly root: string
  /** The day it is compiled at. */
  readonly today: string
  /** What a view receives: the graph, its statuses and issues, the pipelines of its shipments, g.lib. */
  readonly graph: Compilation
  /** The graph as a build writes it into graph.json. */
  written(): string
  /** The graph as a build writes it into snapshot.json. */
  snapshot(): string
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
  readonly reader: LanguageReader
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
