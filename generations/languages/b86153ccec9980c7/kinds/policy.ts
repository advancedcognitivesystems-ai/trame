import { defineKind, field, edge, hole, doc, keysOf, KindName, EdgeName, PolicyEdge, type Node } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = { owner: field.owner() }
const edges = {
  [PolicyEdge.obligations]: edge.many([KindName.obligation], { label: say.policyObligations(), inverse: say.policyGroupedIn() }),
}
const E = keysOf(edges)

/**
 * A policy: a way of working (a preview, a public version, a generation), as the obligations a shipment that follows it
 * derives what it must prove from, one per family. Every policy also holds the foundations, which no policy chooses:
 * no literal in a body, and a sound graph.
 */
const kind = defineKind({
  name: KindName.policy,
  label: { one: say.policyPolicy(), many: say.policyPolicies() },
  fields,
  edges,

  holes(self, g) {
    const obligations = g.from(self).out(E.obligations).nodes()
    const families = obligations.map((o) => g.from(o).out(EdgeName.applies).first()?.ref)
    return obligations
      .filter((_, i) => families.indexOf(families[i]) !== i)
      .map((o) => hole.error(say.policyTwice(o.title, g.from(o).out(EdgeName.applies).first()?.title ?? o.title), self.owner))
  },

  render: () => [doc.para(say.policyFoundations())],
})

interface PolicyInput {
  owner: string
  /** Its obligations, one per family. */
  obligations: readonly Node<typeof KindName.obligation>[]
}

/** `policy({ owner, obligations: [CodeVerified, ProgramChecks, RulesHeld] })` */
export function policy(input: PolicyInput): Node<typeof KindName.policy> {
  return kind(input as never) as never
}

export const policyKind = kind
