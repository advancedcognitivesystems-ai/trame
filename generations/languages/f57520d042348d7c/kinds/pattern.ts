import { defineKind, field, edge, optionalEdge, doc, isHole, keysOf, Stage, Status, KindName, EdgeName, type Graph, type Inline, type Lib, type Node, type View } from "../trame/kernel"
import { sourceFields, sourceOf, sourceShown } from "./standard"
// A cycle with the kind of technical choices, whose names are read only when a function runs.
import { bindingEdges } from "./binding"
import words from "./words"

const say = words()

/**
 * What a technical choice is, in the terms a pattern requires: read from the graph, never declared. A choice (a
 * binding) chooses realizations; each realizes one or more ports.
 */
export interface Shape {
  /** It chooses several ports at once: a family that changes together. */
  family: boolean
  /** Each realization it chooses is an implementation: it may touch the platform. */
  platform: boolean
  /** Each realization it chooses is a function: it touches nothing. */
  pure: boolean
  /** Each realization it chooses reaches another port: what it does goes through another abstraction. */
  layered: boolean
}

/** What a pattern requires of the choices that follow it: each property it states must be as it states. */
export type Requires = Partial<Shape>

/** Each property, said when it is required true and when it is required false. */
export const shapeSays: Record<keyof Shape, { yes: string; no: string }> = {
  family: { yes: say.patternSeveralPortsChosenTogether(), no: say.patternASinglePort() },
  platform: { yes: say.patternRealizationsThatTouchThePlatformImplementations(), no: say.patternRealizationsThatDoNotTouchThe() },
  pure: { yes: say.patternRealizationsThatAreFunctions(), no: say.patternRealizationsThatAreNotFunctions() },
  layered: { yes: say.patternRealizationsThatReachAnotherPort(), no: say.patternRealizationsThatReachNoOtherPort() },
}

const shapeKeys = Object.keys(shapeSays) as (keyof Shape)[]

const fields = {
  owner: field.owner(say.patternMaintainedBy()),
  ...sourceFields,
  requires: field.value<Requires>(say.patternRequiresOfAChoice()),
}
const F = keysOf(fields)

/** The realizations a choice makes, in force. */
export const chosenBy = (g: Graph, binding: View): View[] => g.from(binding).out(bindingEdges.chooses).where((v) => v.active).nodes()

/** The ports a realization answers. */
export const portsOf = (g: Graph, realization: View): View[] => g.from(realization).out(EdgeName.implements).nodes()

/** Does a realization reach a port, at run time? */
const reachesPort = (r: View) => r.dependencies.some((d) => d.stage === Stage.execution && d.node.kind === KindName.port)

/** The shape of a choice, read from the graph. */
export function shapeOf(g: Graph, binding: View): Shape {
  const { counts } = g.lib
  const chosen = chosenBy(g, binding)
  const ports = new Set(chosen.flatMap((r) => portsOf(g, r).map((p) => p.ref)))
  return {
    family: counts.several(ports),
    platform: counts.any(chosen) && chosen.every((r) => r.kind === KindName.implementation),
    pure: counts.any(chosen) && chosen.every((r) => r.kind === KindName.function),
    layered: counts.any(chosen) && chosen.every(reachesPort),
  }
}

/** What a pattern declares it requires, as far as it says it. */
export function requiresOf(pattern: View, { values }: Lib): Requires {
  const raw = pattern.field(F.requires)
  if (!values.isObject(raw) || isHole(raw)) return {}
  const r = raw as Record<string, unknown>
  return Object.fromEntries(shapeKeys.filter((k) => values.isBoolean(r[k])).map((k) => [k, r[k] as boolean]))
}

/** The properties a pattern requires that a shape does not have. */
export const unmet = (requires: Requires, shape: Shape): (keyof Shape)[] => shapeKeys.filter((k) => requires[k] !== undefined && requires[k] !== shape[k])

/** What a pattern requires, in words. */
export const requiresSaid = (requires: Requires): string[] =>
  shapeKeys.filter((k) => requires[k] !== undefined).map((k) => (requires[k] ? shapeSays[k].yes : shapeSays[k].no))

/**
 * A design pattern: a published way of separating what varies from what does not (Strategy, Adapter, Bridge…). The
 * graph does not implement it here: its kinds do, once (a port, its realizations, the choice that binds them). The
 * pattern names the intent, cites its source, and says what it requires of the shape of a choice that follows it,
 * which every such choice is checked against. Its status is that of the choices that follow it: violated if one does
 * not have the shape it requires, held if they all have it; none if no choice of the graph follows it (a library offers
 * it, and the projects that follow it judge it).
 */
const kind = defineKind({
  name: KindName.pattern,
  label: { one: say.patternDesignPattern(), many: say.patternDesignPatterns() },
  renderOwns: [...sourceShown, F.requires],
  fields,
  edges: {
    [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
  },

  status(self, g) {
    const followers = g.from(self).in(bindingEdges.follows).where((v) => v.active).nodes()
    // Offered here and followed by no choice of the graph (a library's pattern, judged where it is followed).
    if (g.lib.counts.isEmpty(followers)) return undefined
    return followers.every((b) => g.lib.counts.isEmpty(unmet(requiresOf(self, g.lib), shapeOf(g, b)))) ? Status.held : Status.violated
  },

  render(self, g) {
    const { counts, lists, punctuation } = g.lib
    const requires = requiresOf(self, g.lib)
    const said = requiresSaid(requires)
    const followers = g.from(self).in(bindingEdges.follows).nodes()
    const rows = followers.map((b): Inline[][] => {
      const missing = unmet(requires, shapeOf(g, b))
      return [[doc.ref(b)], counts.any(missing) ? say.patternLacks(lists.enumeration(requiresSaid(Object.fromEntries(missing.map((k) => [k, requires[k]]))))) : [say.patternHasTheShape()]]
    })
    return [
      doc.para(...sourceOf(self, g.lib)),
      doc.para(...say.patternAChoiceThatFollowsItHas(counts.any(said) ? said.join(punctuation.clauses) : say.patternNoParticularShape())),
      ...(counts.any(rows) ? [doc.table([say.bindingFollowedBy(), say.patternShape()], rows)] : [doc.para(say.patternNoChoiceFollowsItYet())]),
    ]
  },
})

interface PatternInput {
  owner: string
  source: string
  url?: string
  /** What a choice that follows it must be: several ports at once, realizations that touch the platform or not… */
  requires: Requires
  serves?: readonly Node<"goal">[]
}

/** Declares a design pattern. */
export function pattern(input: PatternInput): Node<"pattern"> {
  return kind(input as never) as never
}

export const patternKind = kind
