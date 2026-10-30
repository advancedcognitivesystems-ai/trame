import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, isHole, formatUnit, unitOf, DateRole,
  type Node, type HoleSpec, type Block, type Inline, type View, type Provides,
} from "../trame/kernel"
import words from "./words"

const say = words()

/** A product decision: a value, an owner, what was rejected. */
const kind = defineKind({
  name: "decision",
  label: { one: say.decisionDecision(), many: say.decisionDecisions() },
  main: "value",
  renderOwns: ["value", "range"],
  fields: {
    owner: field.owner(say.adrDecidedBy()),
    value: field.value(say.decisionValue()),
    review: optional(field.date(say.decisionReviewPlanned(), DateRole.review)),
    range: optional(field.range(say.decisionAllowedRange())),
    rejected: optional(field.map(say.adrRejected())),
  },
  edges: {
    bounded: optionalEdge(edge.many(["decision"], { label: say.decisionCappedBy(), inverse: say.decisionCaps() })),
  },

  holes(self) {
    const unit = unitOf(self.decl?.typeArgs[0])
    const out: HoleSpec[] = []
    const v = self.field("value")
    const range = self.field("range") as [number, number] | undefined
    const entries: [string | undefined, unknown][] =
      v !== null && typeof v === "object" ? Object.entries(v) : [[undefined, v]]
    for (const [key, x] of entries) {
      if (range && typeof x === "number" && (x < range[0] || x > range[1])) {
        out.push(hole.error(say.decisionIsOutsideTheRangeFromTo(formatUnit(x, unit), key ? ` for ${key}` : "", formatUnit(range[0], unit), formatUnit(range[1], unit))))
      }
    }
    for (const b of self.bounded) {
      const bv = b.field("value")
      if (isHole(bv)) out.push(hole.warning(say.decisionCapCannotBeCheckedIsNot(b.title), b.owner))
      else if (typeof v === "number" && typeof bv === "number" && v > bv) {
        out.push(hole.error(say.decisionExceeds(formatUnit(v, unit), b.title, formatUnit(bv, unit))))
      }
    }
    return out
  },

  /** Wired as a dependency: its value in force (reading an undecided value throws a hole). */
  provide: (self) => self.value,

  render(self) {
    const typeArg = self.decl?.typeArgs[0]
    const unit = unitOf(typeArg)
    // Next to each value: who redefined it, or the fact that it is contested.
    const amended = new Map<string, View>()
    for (const a of self.amendedBy) for (const p of a.paths) amended.set(p, a.by)
    const contested = (path: string) => self.contested.some((p) => p === path || p === "value")
    const cell = (x: unknown, path: string): Inline[] => {
      if (contested(path)) return [doc.value(x, unit, { contested: true })]
      const by = amended.get(path) ?? amended.get("value")
      return by ? [doc.value(x, unit), say.decisionAmendedBy(), doc.ref(by)] : [doc.value(x, unit)]
    }
    const out: Block[] = []
    const facts: { label: string; value: Inline[] }[] = []
    const v = self.field("value")
    if (v !== null && typeof v === "object") {
      const keyType = /^Record<\s*(\w+)/.exec(typeArg ?? "")?.[1] ?? say.decisionCase()
      out.push(doc.table([keyType, say.decisionValue()], Object.entries(v).map(([k, x]) => [[k], cell(x, `value.${k}`)])))
    } else {
      facts.push({ label: say.decisionValue(), value: cell(v, "value") })
    }
    const range = self.field("range")
    if (Array.isArray(range)) facts.push({ label: say.decisionAllowedRange(), value: ["from ", doc.value(range[0], unit), " to ", doc.value(range[1], unit)] })
    if (facts.length) out.push(doc.facts(facts))
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
