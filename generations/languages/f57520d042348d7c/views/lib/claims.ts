import { doc, ClaimOutcome, type ClaimInfo, type Graph, type Inline } from "../../trame/kernel"
import words from "../words"

const say = words()

/** What became of a claim, in a short phrase. */
export function outcomeOf(ci: ClaimInfo, g: Graph): Inline[] {
  switch (ci.outcome) {
    case ClaimOutcome.notInForce: return [say.claimsNotInForceOn(g.lib.dates.format(g.today))]
    case ClaimOutcome.applied: return [say.claimsApplied(ci.reason)]
    case ClaimOutcome.replaced: return say.claimsReplacedBy(ci.replacedBy && doc.ref(ci.replacedBy))
    case ClaimOutcome.discarded: return say.claimsDiscardedInFavourOf(g.lib.lists.conjunction(ci.winners.map(doc.ref)), ci.reason)
    case ClaimOutcome.contested: return say.claimsToBeSettledBy(doc.value(undefined, undefined, { contested: true }), ci.arbiter ? doc.person(ci.arbiter) : undefined)
  }
}
