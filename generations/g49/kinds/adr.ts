import { defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, AnyTarget, Status, KindName, EdgeName, type Block, type Lib, type Node, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** What a choice says of itself: why the question arose, what follows from it, what was rejected and why. */
export const reasonFields = {
  context: field.text(say.adrContext()),
  consequences: optional(field.text(say.adrConsequences())),
  rejected: optional(field.map(say.adrRejected())),
}
const F = keysOf(reasonFields)
/** The reasons a choice renders itself. */
export const reasonsShown = [F.context, F.consequences, F.rejected]

const fields = { owner: field.owner(say.adrDecidedBy()), ...reasonFields }

const edges = {
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
  appliedBy: optionalEdge(edge.many([AnyTarget], { label: say.adrAppliedBy(), inverse: say.adrApplies() })),
}
const E = keysOf(edges)

/** A text field, or nothing. */
const textOf = (lib: Lib, x: unknown): string => (lib.values.isText(x) ? x : lib.texts.empty)

/**
 * The reasons of a choice, as an architecture decision and a technical choice give them: its context, what follows
 * from it, and the options it rejected with why.
 */
export function reasonsOf(self: View, lib: Lib): Block[] {
  const rejected = self.field(F.rejected)
  const options = lib.values.isObject(rejected) ? Object.entries(rejected as Record<string, unknown>) : []
  const blocks: Block[] = [doc.para(say.adrContext2(), textOf(lib, self.field(F.context)))]
  const consequences = textOf(lib, self.field(F.consequences))
  if (consequences) blocks.push(doc.para(say.adrConsequences2(), consequences))
  if (lib.counts.any(options)) blocks.push(doc.table([say.adrRejected(), say.adrWhy()], options.map(([option, why]) => [[option], [textOf(lib, why)]])))
  return blocks
}

/**
 * An architecture decision: a choice that shapes the product without being a value (the language a graph is written in,
 * what may touch the platform, how a program is checked before it is written). Its title says what was decided and its
 * description how; it says why the question arose (its context), what follows from it, and what was rejected and why.
 * The nodes that apply it are its evidence: a rule that checks it, a function that realises it, a scenario that plays
 * it. Its status is theirs: violated if one of them is violated, held if those that have a status hold, unknown
 * otherwise. Nothing applying it is a wish, not yet a decision.
 */
const kind = defineKind({
  name: KindName.adr,
  label: { one: say.adrArchitectureDecision(), many: say.adrArchitectureDecisions() },
  renderOwns: reasonsShown,
  fields,
  edges,

  holes: (self, g) => [!g.from(self).out(E.appliedBy).exists() && hole.warning(say.adrNothingAppliesItYetAWish(), self.owner)],

  status(self, g) {
    const all = g.from(self).out(E.appliedBy).nodes().map((v) => v.status).filter((s): s is Status => s !== undefined && s !== Status.unknown)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return g.lib.counts.any(all) ? Status.held : Status.unknown
  },

  render: (self, g) => reasonsOf(self, g.lib),
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
