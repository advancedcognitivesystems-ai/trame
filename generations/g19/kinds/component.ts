import {
  defineKind, field, edge, optionalEdge, hole, doc, plural,
  type AnyNode, type Node, type HasDeps, type Provides, type View, KindName } from "../trame/kernel"
import type { Trigger, Handler } from "./entry-point"
import words from "./words"

const say = words()

/** What an exposure (an HTTP server, a command line…) does with a component's entry points. */
export interface Route { trigger: Trigger; name: string; handler: Handler }
export interface Started {
  /** Where the component answers, if it answers somewhere. */
  address?: string
  /** The exit code, for a component that stops by itself (a command). */
  code?: number
  stop?(): Promise<void>
}
export interface Exposure { serve(routes: Route[]): Promise<Started> }

/**
 * A component: what gets deployed. It exposes its entry points through an exposure.
 * Assembled for an environment, it becomes a program: the implementation choices are written into it.
 */
const kind = defineKind({
  name: KindName.component,
  label: { one: say.componentComponent(), many: say.componentComponents() },
  order: 100,
  fields: {
    owner: field.owner(),
    language: field.value<string>(say.componentLanguage()),
    deps: field.deps(say.componentStartup()),
  },
  edges: {
    environments: optionalEdge(edge.many(["environment"], { label: say.componentDeployedIn(), inverse: say.componentDeploys() })),
  },

  language: (self) => String(self.field("language") ?? ""),

  /** Assembled in each environment where it is deployed: what cannot be wired blocks. */
  holes: (self, g) => {
    const envs = self.environments.length ? self.environments : g.all("environment").nodes()
    const needed = [...self.dependencies.map((d) => d.node), ...g.from(self).in("in").where((v) => v.kind === "entry").nodes()]
    // The same error in several environments is said once.
    const byError = new Map<string, Set<string>>()
    for (const env of envs) for (const e of g.plan(needed, env).errors) byError.set(e, (byError.get(e) ?? new Set()).add(env.title))
    return [...byError].map(([e, where]) => hole.blocking(`${[...where].join(", ")}: ${e}`, self.owner))
  },

  async start(self, entries, ctx) {
    const { exposure } = (await ctx.wireDeps(self)) as { exposure: Exposure }
    const routes = entries.map((e): Route => ({ trigger: e.node.field("trigger") as Trigger, name: e.node.title, handler: e.value as Handler }))
    return exposure.serve(routes)
  },

  render: (self, g) => {
    const entries = g.from(self).in("in").where((v) => v.kind === "entry").nodes()
    return entries.length ? [doc.para(`${plural(entries.length, say.componentEntryPoint())}: `, ...entries.flatMap((v: View, i) => [...(i ? [", "] : []), doc.ref(v)]))] : []
  },
})

interface ComponentInput<D extends { exposure: AnyNode & Provides<Exposure> }> {
  owner: string
  environments?: readonly Node<"environment">[]
  language: string
  deps: D
}

export function component<D extends { exposure: AnyNode & Provides<Exposure> }>(input: ComponentInput<D>): Node<"component"> & HasDeps<D> {
  return kind(input as never) as never
}

export const componentKind = kind
