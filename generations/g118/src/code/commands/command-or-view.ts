// Any other word: a view (`trame impact FreeCancellationPeriod`, `trame why …`), or a command of the project (E3, since
// g116: `trame open-graph-page`), whose component is assembled for its environment, then run with the rest of the line.

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
  await deps.compiler.loadKinds(o.root)
  await deps.views.loadViews(o.root)
  const views = deps.views.sortedViews().map((v) => v.name)
  if (views.includes(o.command)) {
    const [target] = o.args
    await deps.renderView.view(o, o.command, target)
    return { status: exitStatus.success, body: undefined }
  }

  // A command of the project: its graph says which entry point it is, in which component, assembled for where.
  const ctx = await preparation.prepare(o)
  const own = deps.projectCommands.of(ctx.c)
  const found = own.find((x) => x.name === o.command)
  if (!found) {
    deps.terminal.error(messages.unknownCommandOrView(o.command, [...o.commands].sort(), [...new Set(own.map((x) => x.name))].sort(), views))
    return { status: exitStatus.failure, body: undefined }
  }
  const { name, component, environments, chosen } = found
  const [only, ...others] = environments
  if (!only) return preparation.refuse(o, [messages.commandWithoutEnvironment(name, component.title)])
  const named = o.envName === undefined ? undefined : environments.find((e) => e.id === o.envName || e.ref === o.envName)
  if ((o.envName === undefined && deps.counts.any(others)) || (o.envName !== undefined && !named)) {
    return preparation.refuse(o, [messages.commandEnvironment(name, component.title, environments.map((e) => e.id))])
  }
  const env = named ?? only
  // A library's command: assembled with the commands of its component the project chose there, and only those.
  const { files } = await deps.assembler.assembled(o, ctx, component.ref, env.ref, chosen?.get(env.id))
  for (const f of files) {
    deps.writing.mkdirSync(deps.paths.dirname(f.path), { recursive: true })
    deps.writing.writeFileSync(f.path, f.content)
  }
  // What Node.js runs: the program's launcher, which leads the names of packages first (since g99).
  const [first] = files
  const program = (files.find((f) => f.launches) ?? first).path
  // The rest of the line, as typed, but the environment the dispatch read: the program receives it after its name.
  const forwarded = [...raw]
  const at = deps.sequences.position(forwarded, line.env)
  if (at !== undefined) {
    deps.sequences.removeAt(forwarded, at)
    deps.sequences.removeAt(forwarded, at)
  }
  const child = deps.currentProcess.runTs(program, [name, ...forwarded])
  for (const signal of [deps.posix.interrupt, deps.posix.terminate]) deps.currentProcess.onSignal(signal, () => child.kill(signal))
  const code = await new Promise<number>((end) => child.on(deps.events.exit, (c: number | null) => end(c ?? exitStatus.failure)))
  return { status: code, body: undefined }
}

export default body
