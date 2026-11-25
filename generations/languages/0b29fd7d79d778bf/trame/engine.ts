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
