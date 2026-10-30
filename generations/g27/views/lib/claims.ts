import { doc, formatDate, ClaimOutcome, type ClaimInfo, type Inline } from "../../trame/kernel"

/** "A, B and C". */
export function listOf(items: Inline[]): Inline[] {
  return items.flatMap((x, i) => (i === 0 ? [x] : [i === items.length - 1 ? " and " : ", ", x]))
}

/** What became of a claim, in a short phrase. */
export function outcomeOf(ci: ClaimInfo, today: string): Inline[] {
  switch (ci.outcome) {
    case ClaimOutcome.notInForce: return [`not in force on ${formatDate(today)}`]
    case ClaimOutcome.applied: return ci.reason ? [`applied (${ci.reason})`] : ["applied"]
    case ClaimOutcome.replaced: return ["replaced by ", ...(ci.replacedBy ? [doc.ref(ci.replacedBy)] : [])]
    case ClaimOutcome.discarded: return ["discarded in favour of ", ...listOf(ci.winners.map(doc.ref)), ...(ci.reason ? [` (${ci.reason})`] : [])]
    case ClaimOutcome.contested: return [doc.value(undefined, undefined, { contested: true }), ", to be settled by ", ci.arbiter ? doc.person(ci.arbiter) : "an owner yet to be named"]
  }
}
