// The add-ons of a command the engine keeps (since g120): the realizations of one of its extension points (std's) that a
// choice of the project makes, wired in the project's own graph, in the engine's process, in the order chosen. The
// environment is the one named with --env, or the only one whose add-ons differ from none; several that differ ask
// for --env. Each runs whatever the others did: what failed is said at the end, and the command ends in failure.

import { KindName, WireMode, isPoint } from "../../../trame/kernel"
import type { AnyNode, ProvidedBy, View } from "../../../trame/kernel"
import type { Compiled } from "../engine/compiler"
import type { Api as WiringApi, WireHost } from "../engine/wiring"
import type { CommandMessages } from "../../messages"
import type { Counts } from "#std/algebra"

export interface Deps {
  wiring: Pick<WiringApi, "plan" | "wireDeps">
  counts: ProvidedBy<typeof Counts>
  messages: ProvidedBy<typeof CommandMessages>
}

/** An extension point of a command the engine keeps, by its reference (std's, from a project or from std itself). */
export interface Point {
  readonly programs: string
  readonly inItsLibrary: string
}

/** An add-on wired: the title of the realization, and what it gives. */
export interface AddOn<T> {
  title: string
  value: T
}

/** What failed among the add-ons: which, and why. */
export interface Failed {
  title: string
  why: string
}

const body = (deps: Deps) => {
  const { messages } = deps

  /** The realizations the project's choices make of the point in an environment, in the order chosen. */
  const chosenIn = (host: WireHost, point: View, env: View): View[] => {
    const plan = deps.wiring.plan(host, [point.node], env.node)
    const gathered = plan.steps.find((s) => s.node === point.node && s.how === WireMode.gathered)
    const byName = new Map(plan.steps.map((s): [string, AnyNode] => [s.name, s.node]))
    return (gathered?.deps ?? []).map((d) => host.graph.view(byName.get(d.name)!))
  }

  /**
   * The add-ons of a point in the project: wired in the environment named, or the only one where they differ from none;
   * nothing when the project extends nothing; a refusal when several environments make different ones and none is named.
   */
  async function wired<T>(c: Compiled, root: string, point: Point, envName?: string): Promise<{ addOns: AddOn<T>[]; refused?: string }> {
    const g = c.graph
    const port = g.all(KindName.port).nodes().find((v) => isPoint(point, v))
    if (!port) return { addOns: [] }
    const host: WireHost = { graph: g, root, today: c.today }
    const environments = g.all(KindName.environment).nodes().filter((e) => e.library === undefined)
    const named = envName === undefined ? undefined : environments.find((e) => e.id === envName || e.ref === envName)
    if (envName !== undefined && !named) return { addOns: [], refused: messages.addOnsEnvironment(port.title, environments.map((e) => e.id)) }
    const made = (named ? [named] : environments).map((env) => ({ env, chosen: chosenIn(host, port, env) })).filter((m) => deps.counts.any(m.chosen))
    const [first, ...others] = made
    if (!first) return { addOns: [] }
    const same = (m: { chosen: View[] }) => JSON.stringify(m.chosen.map((v) => v.ref)) === JSON.stringify(first.chosen.map((v) => v.ref))
    if (!others.every(same)) return { addOns: [], refused: messages.addOnsEnvironment(port.title, made.map((m) => m.env.id)) }
    const { [port.ref]: values } = await deps.wiring.wireDeps(host, [{ name: port.ref, node: port.node }], first.env.node)
    return { addOns: (values as T[]).map((value, i) => ({ title: first.chosen[i]?.title ?? port.title, value })) }
  }

  /** Runs each add-on, whatever the others did: what failed, and why. */
  async function each<T>(addOns: readonly AddOn<T>[], run: (value: T) => Promise<boolean>): Promise<Failed[]> {
    const failed: Failed[] = []
    for (const { title, value } of addOns) {
      try {
        if (!(await run(value))) failed.push({ title, why: messages.addOnDidNotHold() })
      } catch (e) {
        failed.push({ title, why: (e as Error).message })
      }
    }
    return failed
  }

  return { wired, each }
}

export type Api = ReturnType<typeof body>
export default body
