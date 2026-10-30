import { defineKind, field, optionalEdge, edge, hole, doc, keysOf, Status, KindName, EdgeName, type Block, type Graph, type Inline, type Node, type View } from "../trame/kernel"
import { chosenBy, portsOf, requiresOf, requiresSaid, shapeOf, unmet } from "./pattern"
import { reasonFields, reasonsOf, reasonsShown } from "./adr"
import words from "./words"

const say = words()

const edges = {
  chooses: edge.many([KindName.implementation, KindName.function], { label: say.bindingChooses(), inverse: say.bindingChosenBy() }),
  [EdgeName.environments]: edge.many([KindName.environment], { label: say.bindingIn(), inverse: say.bindingTechnicalChoices() }),
  follows: optionalEdge(edge.many([KindName.pattern], { label: say.bindingFollows(), inverse: say.bindingFollowedBy() })),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
}
const E = keysOf(edges)
/** The names of a technical choice's edges: the kinds and views that follow one name them by these. */
export const bindingEdges = E

/** The choices in force that choose this realization. */
export const choicesOf = (g: Graph, realization: View): View[] => g.from(realization).in(E.chooses).where((v) => v.active).nodes()

/** Does a choice hold in this environment (in every environment, without one)? */
export const holdsIn = (g: Graph, binding: View, env: View | undefined) =>
  !env || g.from(binding).out(E.environments).nodes().some((e) => e.node === env.node)

/**
 * A technical choice: in some environments, the realizations that answer some ports (an implementation if it touches
 * the platform, a function otherwise). It is the only place where a technology is chosen: the code that uses a port
 * never names what answers it, so changing the choice is changing this node. A choice that changes several ports
 * together (a database and its dialect) chooses them in one node. Like an architecture decision, it says why
 * (context), what follows, and what was rejected; it names the patterns it follows, and its shape is checked against
 * them. A realization it chooses is reached through its port, never directly. Its status is that of its realizations.
 */
const kind = defineKind({
  name: KindName.binding,
  label: { one: say.bindingTechnicalChoice(), many: say.bindingTechnicalChoices() },
  renderOwns: reasonsShown,
  fields: { owner: field.owner(say.adrDecidedBy()), ...reasonFields },
  edges,

  holes(self, g) {
    const { counts, texts, lists } = g.lib
    const chosen = chosenBy(g, self)
    const out = []
    if (counts.isEmpty(chosen)) out.push(hole.error(say.bindingChoosesNothing(), self.owner))
    if (!g.from(self).out(E.environments).exists()) out.push(hole.error(say.bindingHoldsInNoEnvironment(), self.owner))
    if (!g.from(self).out(E.follows).exists()) out.push(hole.warning(say.bindingFollowsNoPatternTheShapeOf(), self.owner))
    // Each realization answers a port, and a port is answered once in a choice.
    const seen = new Map<string, View>()
    for (const r of chosen) {
      const ports = portsOf(g, r)
      if (counts.isEmpty(ports)) out.push(hole.error(say.bindingImplementsNoPortThereIsNothing(r.title), self.owner))
      for (const p of ports) {
        const other = seen.get(p.ref)
        if (other) out.push(hole.error(say.bindingChoosesAndForTheSamePort(other.title, r.title, p.title), self.owner))
        else seen.set(p.ref, r)
      }
      // Reached through its port: a node that depends on the realization itself would not follow the choice.
      for (const user of g.from(r).in(EdgeName.deps).nodes()) {
        out.push(hole.error(say.bindingIsReachedDirectlyByNotThrough(r.title, user.title), self.owner))
      }
    }
    // The shape each pattern requires.
    const shape = shapeOf(g, self)
    for (const p of g.from(self).out(E.follows).nodes()) {
      const requires = requiresOf(p, g.lib)
      const missing = unmet(requires, shape)
      if (counts.any(missing)) {
        const wanted = requiresSaid(Object.fromEntries(missing.map((k) => [k, requires[k]])))
        out.push(hole.error(say.bindingFollowsWhichRequires(p.title, texts.concat(lists.conjunction(wanted))), self.owner))
      }
    }
    return out
  },

  status(self, g) {
    const all = chosenBy(g, self).map((v) => v.status).filter((s): s is Status => s !== undefined && s !== Status.unknown)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return g.lib.counts.any(all) ? Status.held : Status.unknown
  },

  render(self, g) {
    const refs = (vs: View[]): Inline[] => g.lib.lists.enumeration(vs.map(doc.ref))
    const rows = chosenBy(g, self).map((r): Inline[][] => [refs(portsOf(g, r)), [doc.ref(r)], [r.kind === KindName.function ? say.bindingAFunction() : say.bindingAnImplementation()]])
    const blocks: Block[] = [
      doc.para(...say.bindingInEnvironments(refs(g.from(self).out(E.environments).nodes()))),
      doc.table([say.bindingPort(), say.bindingAnsweredBy(), say.bindingWhichIs()], rows),
      ...reasonsOf(self, g.lib),
    ]
    return blocks
  },
})

interface BindingInput {
  owner: string
  /** What it chooses: implementations (they may touch the platform) or functions (they touch nothing). */
  chooses: readonly Node<"implementation" | "function">[]
  /** Where the choice holds. */
  environments: readonly Node<"environment">[]
  /** The patterns it follows: its shape is checked against what each requires. */
  follows?: readonly Node<"pattern">[]
  context: string
  consequences?: string
  rejected?: Record<string, string>
  serves?: readonly Node<"goal">[]
}

/** `binding({ owner, chooses: [Esbuild], environments: [Local, Test], follows: [Adapter], context, rejected })` */
export function binding(input: BindingInput): Node<"binding"> {
  return kind(input as never) as never
}

export const bindingKind = kind
