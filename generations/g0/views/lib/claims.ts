import { doc, frDate, type ClaimInfo, type Inline } from "../../trame/kernel"

/** « A, B et C ». */
export function listOf(items: Inline[]): Inline[] {
  return items.flatMap((x, i) => (i === 0 ? [x] : [i === items.length - 1 ? " et " : ", ", x]))
}

/** Ce qu'une revendication est devenue, en une phrase courte. */
export function outcomeOf(ci: ClaimInfo, today: string): Inline[] {
  switch (ci.outcome) {
    case "pas en vigueur": return [`pas en vigueur le ${frDate(today)}`]
    case "appliqué": return ci.reason ? [`appliqué (${ci.reason})`] : ["appliqué"]
    case "remplacé": return ["remplacé par ", ...(ci.replacedBy ? [doc.ref(ci.replacedBy)] : [])]
    case "écarté": return ["écarté au profit de ", ...listOf(ci.winners.map(doc.ref)), ...(ci.reason ? [` (${ci.reason})`] : [])]
    case "contesté": return [doc.value(undefined, undefined, { contested: true }), " par ", ci.arbiter ? doc.person(ci.arbiter) : "un responsable à désigner"]
  }
}
