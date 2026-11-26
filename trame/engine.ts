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
   * A project compiled at a date (its root, from where the engine runs), checked as the dispatch checks one; refused
   * with what refuses it.
   */
  compile(root: string, today: string): Promise<CompiledProject>
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
