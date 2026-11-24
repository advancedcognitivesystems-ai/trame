// The commands of a project (E3, since g116): the entry points a command triggers, in the components of its own graph
// that std's ProgramCommands exposes. `trame <name>` runs one, its component assembled for its environment; a name the
// engine keeps or a view already answers would hide it, which is an error of the graph. Named like another command of
// the engine, it replaces it for this project (since g119).

import { BindingEdge, EdgeName, EntryField, HoleCode, KindName, Origin, Severity, TriggerType, isCommandsExposure, runsInTheEngine } from "../../../trame/kernel"
import type { ProvidedBy, View } from "../../../trame/kernel"
import type { Trigger } from "../../../kinds/entry-point"
import type { Compiled, Diag } from "../engine/compiler"
import type { Assembly } from "../engine/assembly"
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
  /**
   * A library's command a project chose (since g117): in each environment of its choices, by id, the commands of its
   * component chosen there, which alone are assembled with it. Nothing for the project's own.
   */
  chosen?: ReadonlyMap<string, readonly string[]>
}

const body = (deps: Deps) => {
  const { messages } = deps

  /**
   * The commands of the project: those of its own graph, and a library's that a technical choice of its own takes, in
   * the environments of the choices that take it (since g117).
   */
  function of(c: Compiled): ProjectCommand[] {
    const g = c.graph
    const exposed = (component: View) => deps.wiring.depsOf(component.node).some(([, n]) => isCommandsExposure(g.view(n)))
    const commandOf = (entry: View) => {
      const trigger = entry.field(EntryField.trigger) as Trigger | undefined
      return trigger?.type === TriggerType.command ? trigger.name : undefined
    }
    const own = g.all(KindName.entry).nodes().flatMap((entry) => {
      const name = commandOf(entry)
      if (entry.library !== undefined || name === undefined) return []
      const components = g.from(entry).out(EdgeName.partOf).nodes().filter(exposed)
      return components.map((component) => ({ name, entry, component, environments: g.from(component).out(EdgeName.environments).nodes() }))
    })
    // A library's commands, each with the environments of the project's choices that take it.
    const choices = g.all(KindName.binding).nodes().filter((b) => b.library === undefined && b.active)
    const taken = choices.flatMap((b) => g.from(b).out(BindingEdge.chooses).nodes()
      .filter((e) => e.kind === KindName.entry && e.library !== undefined)
      .map((entry) => ({ entry, environments: g.from(b).out(EdgeName.environments).nodes() })))
    const library = [...new Set(taken.map((t) => t.entry.ref))].flatMap((ref) => {
      const ofIt = taken.filter((t) => t.entry.ref === ref)
      const [first] = ofIt
      const name = first && commandOf(first.entry)
      if (!first || name === undefined) return []
      const environments = [...new Map(ofIt.flatMap((t) => t.environments).map((e) => [e.ref, e])).values()]
      return g.from(first.entry).out(EdgeName.partOf).nodes().filter(exposed).map((component) => {
        const sameComponent = (t: { entry: View }) => g.from(t.entry).out(EdgeName.partOf).nodes().some((p) => p.node === component.node)
        const chosen = new Map(environments.map((env) => [env.id, [...new Set(taken
          .filter((t) => sameComponent(t) && t.environments.some((e) => e.ref === env.ref))
          .map((t) => t.entry.ref))]]))
        return { name, entry: first.entry, component, environments, chosen }
      })
    })
    return [...own, ...library]
  }

  /**
   * Each command of the project that never runs: a command the engine keeps or a view answers its name first, or
   * another command of the project has it. One named like another command of the engine replaces it (since g119).
   */
  function hidden(c: Compiled, kept: readonly string[], views: readonly string[]): Diag[] {
    const commands = of(c)
    return commands.flatMap(({ name, entry }): Diag[] => {
      const same = commands.filter((x) => x.name === name)
      const what = kept.includes(name)
        ? messages.commandHiddenByEngine(name)
        : views.includes(name)
          ? messages.commandHiddenByView(name)
          : same.length > deps.counts.one
            ? messages.commandTwice(name, same.map((x) => x.entry.ref))
            : undefined
      return what === undefined ? [] : [{ severity: Severity.error, code: HoleCode.commandHidden, origin: Origin.graph, node: entry.node, what, owner: entry.owner }]
    })
  }

  /**
   * Does the program of this assembly run in the engine (since g119)? Its component's exposure is realized there by
   * std's CommandsInTheEngine: the engine imports it in its own process rather than starting it.
   */
  function inTheEngine(c: Compiled, a: Assembly): boolean {
    const g = c.graph
    return a.plan.steps.some((step) => step.via.some((port) => isCommandsExposure(g.view(port))) && runsInTheEngine(g.view(step.node)))
  }

  return { of, hidden, inTheEngine }
}

export type Api = ReturnType<typeof body>
export default body
