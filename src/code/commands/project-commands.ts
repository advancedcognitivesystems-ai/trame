// The commands of a project (E3, since g116): the entry points a command triggers, in the components of its own graph
// that std's ProgramCommands exposes. `trame <name>` runs one, its component assembled for its environment; a name the
// engine or a view already answers would hide it, which is an error of the graph.

import { CommandsPort, EdgeName, EntryField, HoleCode, KindName, Origin, Severity, TriggerType } from "../../../trame/kernel"
import type { ProvidedBy, View } from "../../../trame/kernel"
import type { Trigger } from "../../../kinds/entry-point"
import type { Compiled, Diag } from "../engine/compiler"
import type { Api as WiringApi } from "../engine/wiring"
import type { CommandMessages } from "../../messages"
import type { Counts } from "#std/algebra"

export interface Deps {
  wiring: Pick<WiringApi, "depsOf">
  counts: ProvidedBy<typeof Counts>
  messages: ProvidedBy<typeof CommandMessages>
}

/** A command of the project, as a person types it. */
export interface ProjectCommand {
  /** The word that names it. */
  name: string
  /** The entry point it runs. */
  entry: View
  /** The component whose program runs it. */
  component: View
  /** The environments the component is assembled for. */
  environments: View[]
}

const body = (deps: Deps) => {
  const { messages } = deps

  /** The commands of the project's own graph: a library's are run only when the project chooses them (P2). */
  function of(c: Compiled): ProjectCommand[] {
    const g = c.graph
    const exposed = (component: View) => deps.wiring.depsOf(component.node).some(([, n]) => g.view(n).ref === CommandsPort.programs)
    return g.all(KindName.entry).nodes().flatMap((entry) => {
      if (entry.library !== undefined) return []
      const trigger = entry.field(EntryField.trigger) as Trigger | undefined
      if (trigger?.type !== TriggerType.command) return []
      const components = g.from(entry).out(EdgeName.partOf).nodes().filter(exposed)
      return components.map((component) => ({ name: trigger.name, entry, component, environments: g.from(component).out(EdgeName.environments).nodes() }))
    })
  }

  /**
   * Each command of the project that never runs: a command of the engine or a view answers its name first, or another
   * command of the project has it.
   */
  function hidden(c: Compiled, engine: readonly string[], views: readonly string[]): Diag[] {
    const commands = of(c)
    return commands.flatMap(({ name, entry }): Diag[] => {
      const same = commands.filter((x) => x.name === name)
      const what = engine.includes(name)
        ? messages.commandHiddenByEngine(name)
        : views.includes(name)
          ? messages.commandHiddenByView(name)
          : same.length > deps.counts.one
            ? messages.commandTwice(name, same.map((x) => x.entry.ref))
            : undefined
      return what === undefined ? [] : [{ severity: Severity.error, code: HoleCode.commandHidden, origin: Origin.graph, node: entry.node, what, owner: entry.owner }]
    })
  }

  return { of, hidden }
}

export type Api = ReturnType<typeof body>
export default body
