import { defineKind, field, optional, edge, optionalEdge, hole, doc, AnyTarget, Status, type Block, type Node } from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * An architecture decision: a choice that shapes the product without being a value (the language a graph is written in,
 * what may touch the platform, how a program is checked before it is written). Its title says what was decided and its
 * description how; it says why the question arose (its context), what follows from it, and what was rejected and why.
 * The nodes that apply it are its evidence: a rule that checks it, a function that realises it, a scenario that plays
 * it. Its status is theirs: violated if one of them is violated, held if those that have a status hold, unknown
 * otherwise. Nothing applying it is a wish, not yet a decision.
 */
const kind = defineKind({
  name: "adr",
  label: { one: say.adrArchitectureDecision(), many: say.adrArchitectureDecisions() },
  order: 45,
  renderOwns: ["context", "consequences", "rejected"],
  fields: {
    owner: field.owner(say.adrDecidedBy()),
    context: field.text(say.adrContext()),
    consequences: optional(field.text(say.adrConsequences())),
    rejected: optional(field.map(say.adrRejected())),
  },
  edges: {
    serves: optionalEdge(edge.many(["goal"], { label: say.adrServes(), inverse: say.adrServedBy() })),
    appliedBy: optionalEdge(edge.many([AnyTarget], { label: say.adrAppliedBy(), inverse: say.adrApplies() })),
  },

  holes: (self, g) => [!g.from(self).out("appliedBy").exists() && hole.warning(say.adrNothingAppliesItYetAWish(), self.owner)],

  status(self, g) {
    const all = g.from(self).out("appliedBy").nodes().map((v) => v.status).filter((s): s is Status => s !== undefined && s !== Status.unknown)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.length ? Status.held : Status.unknown
  },

  render(self) {
    const text = (x: unknown) => (typeof x === "string" ? x : "")
    const rejected = self.field("rejected")
    const options = rejected && typeof rejected === "object" ? Object.entries(rejected as Record<string, string>) : []
    const blocks: Block[] = [doc.para(say.adrContext2(), text(self.field("context")))]
    const consequences = text(self.field("consequences"))
    if (consequences) blocks.push(doc.para(say.adrConsequences2(), consequences))
    if (options.length) blocks.push(doc.table([say.adrRejected(), say.adrWhy()], options.map(([option, why]) => [[option], [text(why)]])))
    return blocks
  },
})

interface AdrInput {
  owner: string
  context: string
  consequences?: string
  rejected?: Record<string, string>
  serves?: readonly Node<"goal">[]
  appliedBy?: readonly Node[]
}

/** `adr({ owner, context, consequences, rejected: { option: "why not" }, serves: [Goal], appliedBy: [Rule, Function] })` */
export function adr(input: AdrInput): Node<"adr"> {
  return kind(input as never) as never
}

export const adrKind = kind
