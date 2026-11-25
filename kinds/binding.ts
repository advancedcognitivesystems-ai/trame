import {
  defineKind, field, optionalEdge, edge, hole, doc, keysOf, Status, KindName, EdgeName, BindingEdge, EntryField, TriggerType, HoleCode, PortField, isCommandsExposure,
  type Block, type Graph, type Inline, type Node, type View,
} from "../trame/kernel"
import { chosenBy, portsOf, requiresOf, requiresSaid, shapeOf, unmet } from "./pattern"
import { reasonFields, reasonsOf, reasonsShown } from "./adr"
import words from "./words"

const say = words()

const edges = {
  [BindingEdge.chooses]: edge.many([KindName.implementation, KindName.function, KindName.entry], { label: say.bindingChooses(), inverse: say.bindingChosenBy() }),
  [EdgeName.environments]: edge.many([KindName.environment], { label: say.bindingIn(), inverse: say.bindingTechnicalChoices() }),
  follows: optionalEdge(edge.many([KindName.pattern], { label: say.bindingFollows(), inverse: say.bindingFollowedBy() })),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
}
const E = keysOf(edges)
/** The names of a technical choice's edges: the kinds and views that follow one name them by these. */
export const bindingEdges = E

/** The choices in force that choose this realization. */
export const choicesOf = (g: Graph, realization: View): View[] => g.from(realization).in(E.chooses).where((v) => v.active).nodes()

/**
 * The command an entry point is (E3, since g117): the word a command triggers it by, in a component that std's
 * ProgramCommands exposes; nothing for another entry point.
 */
export const commandOf = (g: Graph, entry: View): string | undefined => {
  const trigger = entry.field(EntryField.trigger) as { type?: unknown; name?: unknown } | undefined
  if (!g.lib.values.isObject(trigger) || trigger.type !== TriggerType.command || !g.lib.values.isText(trigger.name)) return undefined
  const exposed = g.from(entry).out(EdgeName.partOf).nodes().some((c) => c.dependencies.some((d) => isCommandsExposure(d.node)))
  return exposed ? trigger.name : undefined
}

/** Does a choice hold in this environment (in every environment, without one)? */
export const holdsIn = (g: Graph, binding: View, env: View | undefined) =>
  !env || g.from(binding).out(E.environments).nodes().some((e) => e.node === env.node)

/**
 * A technical choice: in some environments, the realizations that answer some ports (an implementation if it touches
 * the platform, a function otherwise). It is the only place where a technology is chosen: the code that uses a port
 * never names what answers it, so changing the choice is changing this node. A choice that changes several ports
 * together (a database and its dialect) chooses them in one node. Like an architecture decision, it says why
 * (context), what follows, and what was rejected; it names the patterns it follows, and its shape is checked against
 * them. A realization it chooses is reached through its port, never directly. Its status is that of its realizations:
 * violated if one is, held when each one that has a status holds, unknown while one does not (evidence awaited).
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
    if (counts.isEmpty(chosen)) out.push(hole.error(HoleCode.bindingChoosesNothing, say.bindingChoosesNothing(), self.owner))
    if (!g.from(self).out(E.environments).exists()) out.push(hole.error(HoleCode.bindingInNoEnvironment, say.bindingHoldsInNoEnvironment(), self.owner))
    if (!g.from(self).out(E.follows).exists()) out.push(hole.warning(HoleCode.bindingWithoutPattern, say.bindingFollowsNoPatternTheShapeOf(), self.owner))
    // A command of a library is chosen to run in the project (E3): a command, a library's, and once by its name.
    const named = new Map<string, View>()
    for (const r of chosen.filter((v) => v.kind === KindName.entry)) {
      const name = commandOf(g, r)
      if (name === undefined) out.push(hole.error(HoleCode.bindingChoosesNoCommand, say.bindingNotACommand(r.title), self.owner))
      else if (r.library === undefined) out.push(hole.error(HoleCode.bindingChoosesOwnCommand, say.bindingOwnCommand(r.title), self.owner))
      const other = name === undefined ? undefined : named.get(name)
      if (other && name !== undefined) out.push(hole.error(HoleCode.bindingChoosesTwice, say.bindingCommandTwice(name, other.title, r.title), self.owner))
      else if (name !== undefined) named.set(name, r)
    }
    // The commands chosen are assembled in each environment of the choice, with their component: what cannot be wired there.
    const commands = chosen.filter((v) => v.kind === KindName.entry && commandOf(g, v) !== undefined)
    const components = [...new Set(commands.flatMap((c) => g.from(c).out(EdgeName.partOf).nodes()))]
    for (const env of g.from(self).out(E.environments).nodes()) {
      for (const component of components) {
        const entries = commands.filter((c) => g.from(c).out(EdgeName.partOf).nodes().some((p) => p.node === component.node))
        for (const e of new Set(g.plan([...component.dependencies.map((d) => d.node), ...entries], env).errors)) {
          out.push(hole.blocking(HoleCode.componentUnwirable, say.componentCannotBeWiredIn(env.title, e), self.owner))
        }
      }
    }
    // Each realization answers a port, and a port is answered once in a choice.
    const seen = new Map<string, View>()
    for (const r of chosen.filter((v) => v.kind !== KindName.entry)) {
      const ports = portsOf(g, r)
      if (counts.isEmpty(ports)) out.push(hole.error(HoleCode.bindingChoosesNoPort, say.bindingImplementsNoPortThereIsNothing(r.title), self.owner))
      for (const p of ports) {
        const other = seen.get(p.ref)
        // An extension point is answered by every realization chosen, in the order chosen (since g120).
        if (other && p.field(PortField.extension) === true) continue
        if (other) out.push(hole.error(HoleCode.bindingChoosesTwice, say.bindingChoosesAndForTheSamePort(other.title, r.title, p.title), self.owner))
        else seen.set(p.ref, r)
      }
      // Reached through its port: a node that depends on the realization itself would not follow the choice.
      for (const user of g.from(r).in(EdgeName.deps).nodes()) {
        out.push(hole.error(HoleCode.realizationReachedDirectly, say.bindingIsReachedDirectlyByNotThrough(r.title, user.title), self.owner))
      }
    }
    // The shape each pattern requires.
    const shape = shapeOf(g, self)
    for (const p of g.from(self).out(E.follows).nodes()) {
      const requires = requiresOf(p, g.lib)
      const missing = unmet(requires, shape)
      if (counts.any(missing)) {
        const wanted = requiresSaid(Object.fromEntries(missing.map((k) => [k, requires[k]])))
        out.push(hole.error(HoleCode.bindingPatternBroken, say.bindingFollowsWhichRequires(p.title, texts.concat(lists.conjunction(wanted))), self.owner))
      }
    }
    return out
  },

  status(self, g) {
    const all = chosenBy(g, self).map((v) => v.status).filter((s): s is Status => s !== undefined)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return g.lib.counts.any(all) && all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  render(self, g) {
    const refs = (vs: View[]): Inline[] => g.lib.lists.enumeration(vs.map(doc.ref))
    const which = (r: View) => (r.kind === KindName.function ? say.bindingAFunction() : r.kind === KindName.entry ? say.bindingACommand() : say.bindingAnImplementation())
    const answered = (r: View): Inline[] => {
      const name = r.kind === KindName.entry ? commandOf(g, r) : undefined
      return name === undefined ? refs(portsOf(g, r)) : [say.bindingCommand(name)]
    }
    const rows = chosenBy(g, self).map((r): Inline[][] => [answered(r), [doc.ref(r)], [which(r)]])
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
  /**
   * What it chooses: implementations (they may touch the platform) or functions (they touch nothing); or a library's
   * commands, which then run in the project (E3), with what answers the ports of their settings.
   */
  chooses: readonly Node<"implementation" | "function" | typeof KindName.entry>[]
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
