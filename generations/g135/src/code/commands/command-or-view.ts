// Any other word: a view (`trame impact FreeCancellationPeriod`, `trame why …`), or a command of the project (E3, since
// g116: `trame open-graph-page`), whose component is assembled for its environment, then run with the rest of the line.
// A command of the engine it does not keep comes here first (since g119): the project's of that name runs instead, and
// when the project has none, this answers no status and the engine's runs. A program whose exposure is std's
// CommandsInTheEngine runs in the engine's process, with the engine's modules; another is started as its own program.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Paths, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RenderViewApi } from "./render-view"
import type { Api as AssemblerApi } from "./assembler"
import type { Api as ProjectCommandsApi } from "./project-commands"
import type { Api as CompilerApi } from "../engine/compiler"
import type { Api as ViewsApi } from "../engine/views"
import type { Counts, Sequences } from "#std/algebra"
import type { NodeEvents, Posix } from "#std/system"
import type { TrameCommands } from "../../conventions"

export interface Deps {
  line: ProvidedBy<typeof TrameCommands>
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  renderView: RenderViewApi
  compiler: CompilerApi
  views: ViewsApi
  assembler: AssemblerApi
  projectCommands: ProjectCommandsApi
  writing: FileWriting
  paths: Paths
  currentProcess: Process
  posix: ProvidedBy<typeof Posix>
  events: ProvidedBy<typeof NodeEvents>
  terminal: Terminal
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { line, exitStatus, messages, preparation } = deps
  const raw = (req.body as { args: string[] }).args
  const o = preparation.options(req.params.command, raw, req.params.commands)
  // A command of the engine (since g119): the project is asked first; with no command of that name, nothing is said.
  const builtIn = req.params.builtIn !== undefined
  const declined = { status: undefined, body: undefined }
  await deps.compiler.loadKinds(o.root)
  await deps.views.loadViews(o.root)
  const views = deps.views.sortedViews().map((v) => v.name)
  if (!builtIn && views.includes(o.command)) {
    const [target] = o.args
    await deps.renderView.view(o, o.command, target)
    return { status: exitStatus.success, body: undefined }
  }

  // A command of the project: its graph says which entry point it is, in which component, assembled for where. Before
  // a command of the engine, a project that cannot be read has none: the engine's says what is wrong.
  const ctx = builtIn ? await preparation.attempt(o) : await preparation.prepare(o)
  if (!ctx) return declined
  const own = deps.projectCommands.of(ctx.c)
  const found = own.find((x) => x.name === o.command)
  if (!found && builtIn) {
    preparation.handOver(o, ctx)
    return declined
  }
  if (!found) {
    deps.terminal.error(messages.unknownCommandOrView(o.command, [...o.commands].sort(), [...new Set(own.map((x) => x.name))].sort(), views))
    return { status: exitStatus.failure, body: undefined }
  }
  const { name, component, environments, chosen } = found
  const [only, ...others] = environments
  if (!only) return preparation.refuse(o, [messages.commandWithoutEnvironment(name, component.title)])
  const named = o.envName === undefined ? undefined : environments.find((e) => e.id === o.envName || e.ref === o.envName)
  if (o.envName !== undefined && !named) {
    return preparation.refuse(o, [messages.commandNotAssembledFor(name, component.title, o.envName, environments.map((e) => e.id))])
  }
  if (o.envName === undefined && deps.counts.any(others)) {
    return preparation.refuse(o, [messages.commandEnvironment(name, component.title, environments.map((e) => e.id))])
  }
  const env = named ?? only
  // A library's command: assembled with the commands of its component the project chose there, and only those.
  const { files, assembly } = await deps.assembler.assembled(o, ctx, component.ref, env.ref, chosen?.get(env.id))
  for (const f of files) {
    deps.writing.mkdirSync(deps.paths.dirname(f.path), { recursive: true })
    deps.writing.writeFileSync(f.path, f.content)
  }
  // The rest of the line, as typed, but the environment the dispatch read: the program receives it after its name.
  // The engine's options leave the line it forwards: the environment, and the day the project was prepared at (since
  // g135: a command that declares its line would find --at an option nobody declares; the project it reads is
  // already compiled at that day).
  const forwarded = [...raw]
  for (const flag of [line.env, line.at]) {
    const at = deps.sequences.position(forwarded, flag)
    if (at === undefined) continue
    deps.sequences.removeAt(forwarded, at)
    deps.sequences.removeAt(forwarded, at)
  }
  const [first] = files
  // In the engine's process (since g119): the program itself, imported with the engine's API and the project as the
  // dispatch prepared it (since g124).
  if (deps.projectCommands.inTheEngine(ctx.c, assembly)) {
    const program = (files.find((f) => !f.launches) ?? first).path
    return { status: await deps.currentProcess.runHere(program, [name, ...forwarded], preparation.api({ o, ctx })), body: undefined }
  }
  // As its own program: its launcher, which leads the names of packages first (since g99).
  const program = (files.find((f) => f.launches) ?? first).path
  const child = deps.currentProcess.runTs(program, [name, ...forwarded])
  for (const signal of [deps.posix.interrupt, deps.posix.terminate]) deps.currentProcess.onSignal(signal, () => child.kill(signal))
  const code = await new Promise<number>((end) => child.on(deps.events.exit, (c: number | null) => end(c ?? exitStatus.failure)))
  return { status: code, body: undefined }
}

export default body
