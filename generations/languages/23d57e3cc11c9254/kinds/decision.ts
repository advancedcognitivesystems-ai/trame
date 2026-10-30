import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, isHole, formatUnit, unitOf, recordKeyOf, keysOf, DateRole, KindName,
  type Node, type HoleSpec, type Block, type Inline, type View, type Provides,
} from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(say.adrDecidedBy()),
  value: field.value(say.decisionValue()),
  review: optional(field.date(say.decisionReviewPlanned(), DateRole.review)),
  range: optional(field.range(say.decisionAllowedRange())),
  rejected: optional(field.map(say.adrRejected())),
}
const F = keysOf(fields)

/** A product decision: a value, an owner, what was rejected. */
const kind = defineKind({
  name: KindName.decision,
  label: { one: say.decisionDecision(), many: say.decisionDecisions() },
  main: F.value,
  renderOwns: [F.value, F.range],
  fields,
  edges: {
    bounded: optionalEdge(edge.many([KindName.decision], { label: say.decisionCappedBy(), inverse: say.decisionCaps() })),
  },

  holes(self, g) {
    const { values, sequences } = g.lib
    const unit = unitOf(sequences.head(self.decl?.typeArgs))
    const out: HoleSpec[] = []
    const v = self.field(F.value)
    const range = self.field(F.range)
    const entries: [string | undefined, unknown][] = values.isObject(v) ? Object.entries(v) : [[undefined, v]]
    for (const [key, x] of entries) {
      if (!Array.isArray(range)) continue
      const [lo, hi] = range as [number, number]
      if (values.isNumber(x) && (x < lo || x > hi)) {
        out.push(hole.error(say.decisionIsOutsideTheRange(formatUnit(x, unit), key, formatUnit(lo, unit), formatUnit(hi, unit))))
      }
    }
    for (const b of self.bounded) {
      const bv = b.field(F.value)
      if (isHole(bv)) out.push(hole.warning(say.decisionCapCannotBeCheckedIsNot(b.title), b.owner))
      else if (values.isNumber(v) && values.isNumber(bv) && v > bv) {
        out.push(hole.error(say.decisionExceeds(formatUnit(v, unit), b.title, formatUnit(bv, unit))))
      }
    }
    return out
  },

  /** Wired as a dependency: its value in force (reading an undecided value throws a hole). */
  provide: (self) => self.value,

  render(self, g) {
    const { values, references, sequences, counts } = g.lib
    const typeArg = sequences.head(self.decl?.typeArgs)
    const unit = unitOf(typeArg)
    // Next to each value: who redefined it, or the fact that it is contested.
    const amended = new Map<string, View>()
    for (const a of self.amendedBy) for (const p of a.paths) amended.set(p, a.by)
    const contested = (path: string) => self.contested.some((p) => p === path || p === F.value)
    const cell = (x: unknown, path: string): Inline[] => {
      if (contested(path)) return [doc.value(x, unit, { contested: true })]
      const by = amended.get(path) ?? amended.get(F.value)
      return by ? [doc.value(x, unit), say.decisionAmendedBy(), doc.ref(by)] : [doc.value(x, unit)]
    }
    const out: Block[] = []
    const facts: { label: string; value: Inline[] }[] = []
    const v = self.field(F.value)
    if (values.isObject(v)) {
      const keyType = recordKeyOf(typeArg) ?? say.decisionCase()
      out.push(doc.table([keyType, say.decisionValue()], Object.entries(v).map(([k, x]) => [[k], cell(x, references.join([F.value, k]))])))
    } else {
      facts.push({ label: say.decisionValue(), value: cell(v, F.value) })
    }
    const range = self.field(F.range)
    if (Array.isArray(range)) {
      const [lo, hi] = range
      facts.push({ label: say.decisionAllowedRange(), value: say.decisionFromTo(doc.value(lo, unit), doc.value(hi, unit)) })
    }
    if (counts.any(facts)) out.push(doc.facts(facts))
    return out
  },
})

export type DecisionNode<T> = Node<"decision"> & { readonly value: T; readonly owner: string } & Provides<T>

interface DecisionInput<T> {
  owner: string
  value: T
  review?: string
  range?: [number, number]
  rejected?: Record<string, string>
  bounded?: readonly Node<"decision">[]
}

/** Typed facade: `decision<Percent>({ … })` keeps the type of the value. */
export const decision = kind as unknown as (<T>(input: DecisionInput<T>) => DecisionNode<T>) & { def: typeof kind.def }
