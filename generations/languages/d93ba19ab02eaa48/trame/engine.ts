// The engine that runs a program of commands in its own process (E3, since g119).
//
// A command is an entry point of a project's graph, or of a library a project chooses it from. Assembled for its
// environment, its program is imported by the engine that dispatches it, in the engine's process: the program's
// exposure (std's CommandsInTheEngine) offers its commands to the engine instead of reading Node's command line, and an
// adapter of the program reaches the engine's modules (compilation, views, laws, lock, assembly, evidence, identity)
// through the same engine. The engine sets it while the program is imported; a program run alone finds none.

/** What the engine gives the program it imports: where its commands go, and the engine's own modules. */
export interface RunningEngine<Route = unknown, Modules = unknown> {
  /** Takes the commands the program exposes: the engine runs the one the command line names. */
  offer(routes: readonly Route[]): void
  /** The engine's modules, as they run in this process. */
  modules: Modules
}

let running: RunningEngine | undefined

/** The engine importing the program, while it does; nothing when the program runs alone. */
export function runningEngine<Route = unknown, Modules = unknown>(): RunningEngine<Route, Modules> | undefined {
  return running as RunningEngine<Route, Modules> | undefined
}

/** Runs `f` (the import of a program) with this engine as the one that runs it; the one before comes back after. */
export async function withEngine<T>(engine: RunningEngine, f: () => Promise<T>): Promise<T> {
  const before = running
  running = engine
  try {
    return await f()
  } finally {
    running = before
  }
}
