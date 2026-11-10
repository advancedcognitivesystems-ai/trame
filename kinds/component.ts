import {
  defineKind, field, edge, optionalEdge, hole, doc, keysOf, fieldsOf, KindName, EdgeName,
  type AnyNode, type Graph, type Node, type HasDeps, type Provides, type View,
} from "../trame/kernel"
import { entryKind, type Trigger, type Handler } from "./entry-point"
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

const fields = {
  owner: field.owner(),
  language: field.value<string>(say.componentLanguage()),
  deps: field.deps(say.componentStartup()),
}
const F = keysOf(fields)

/**
 * A component: what gets deployed. It exposes its entry points through an exposure.
 * Assembled for an environment, it becomes a program: the implementation choices are written into it.
 */
const kind = defineKind({
  name: KindName.component,
  label: { one: say.componentComponent(), many: say.componentComponents() },
  fields,
  edges: {
    [EdgeName.environments]: optionalEdge(edge.many([KindName.environment], { label: say.componentDeployedIn(), inverse: say.componentDeploys() })),
  },

  language: (self, g) => g.lib.texts.optional(self.field(F.language) as string | undefined),

  /**
   * Assembled in each environment where it is deployed: what cannot be wired blocks. Without environments named, each
   * environment of its own project: a library's (where its own scenarios run) is not one a product deploys to.
   */
  holes: (self, g) => {
    const { counts, texts, lists } = g.lib
    const envs = counts.any(self.environments) ? self.environments : g.all(KindName.environment).nodes().filter((v) => v.library === self.library)
    const needed = [...self.dependencies.map((d) => d.node), ...entriesOf(self, g)]
    // The same error in several environments is said once.
    const byError = new Map<string, Set<string>>()
    for (const env of envs) for (const e of g.plan(needed, env).errors) byError.set(e, (byError.get(e) ?? new Set()).add(env.title))
    return [...byError].map(([e, where]) => hole.blocking(say.componentCannotBeWiredIn(texts.concat(lists.enumeration([...where])), e), self.owner))
  },

  async start(self, entries, ctx) {
    const { exposure } = (await ctx.wireDeps(self)) as { exposure: Exposure }
    const routes = entries.map((e): Route => ({ trigger: e.node.field(fieldsOf(entryKind).trigger) as Trigger, name: e.node.title, handler: e.value as Handler }))
    return exposure.serve(routes)
  },

  render: (self, g) => {
    const entries = entriesOf(self, g)
    return g.lib.counts.any(entries) ? [doc.para(...say.componentEntryPoints(entries.length, g.lib.lists.enumeration(entries.map(doc.ref))))] : []
  },
})

/** The entry points a component exposes. */
const entriesOf = (self: View, g: Graph): View[] => g.from(self).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes()

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
