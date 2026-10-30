import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, edgesOf, KindName, EdgeName, Severity, ObligationField,
  type Node,
} from "../trame/kernel"
import { adrKind } from "./adr"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [ObligationField.params]: optional(field.value()),
  // What a gap weighs, when the family finds one: an error blocks the shipment, a warning says it.
  [ObligationField.gaps]: optional(field.value<typeof Severity.error | typeof Severity.warning>(say.obligationGaps())),
}
const F = keysOf(fields)
const edges = {
  [EdgeName.applies]: edge.one([KindName.requirement], { label: say.obligationApplies(), inverse: say.obligationAppliedBy() }),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal, KindName.requirement, KindName.adr, KindName.decision], { label: say.ruleServes(), inverse: say.ruleKeptBy() })),
}
const E = keysOf(edges)

/**
 * An obligation: one family of what a shipment must prove (a requirement of the standard library, or the project's),
 * applied with its parameters, and what a gap it finds weighs. It says why (what it serves, or the ADR that applies
 * it). A policy groups the obligations of a way of working, one per family; a shipment that follows the policy derives
 * from them the nodes it must prove, from what it reaches.
 */
const kind = defineKind({
  name: KindName.obligation,
  label: { one: say.obligationObligation(), many: say.obligationObligations() },
  renderOwns: [F.params, F.gaps],
  fields,
  edges,

  holes: (self, g) => [
    !g.from(self).out(E.serves).exists() && !g.from(self).in(edgesOf(adrKind).appliedBy).exists() && hole.warning(say.obligationWithoutReason(), self.owner),
  ],

  render(self, g) {
    const { positions, declarations, values } = g.lib
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    const params = self.decl?.props[F.params]
    const gaps = self.field(F.gaps)
    return [
      ...(values.isText(gaps) ? [doc.para(...say.obligationGapsWeigh(gaps === Severity.error ? say.obligationBlock() : say.obligationWarn()))] : []),
      ...(params ? [doc.details(say.ruleParameters(), [doc.code(declarations.language, params, source)])] : []),
    ]
  },
})

/** What a family is given: the third parameter of its rule (the graph's sketch and the reach come first). */
type ParamsOf<R> = R extends (sketch: never, reach: never, params: infer P) => unknown ? P : never

interface ObligationInput<R> {
  owner: string
  /** The family it applies: a requirement of #std/obligations, or of the project. */
  applies: R
  /** What the family is given, as its rule types it. */
  params?: ParamsOf<R>
  /** What a gap the family finds weighs: an error blocks, a warning says it. */
  gaps?: typeof Severity.error | typeof Severity.warning
  /** Why it is asked. */
  serves?: readonly Node[]
}

/** `obligation({ owner, applies: Verified, params: { kinds: [KindName.entry] }, gaps: Severity.warning, serves: [Goal] })` */
export function obligation<R extends Node<typeof KindName.requirement>>(input: ObligationInput<R>): Node<typeof KindName.obligation> {
  return kind(input as never) as never
}

export const obligationKind = kind
