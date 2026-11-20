import { defineKind, field, hole, doc, daysBetween, keysOf, DateRole, Status, KindName, ChangeWay, HoleCode } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  expires: field.date(say.assumptionCheckBefore(), DateRole.deadline),
}
const F = keysOf(fields)

/** An assumption about the outside world, to check before a date. */
export const assume = defineKind({
  name: KindName.assumption,
  label: { one: say.assumptionAssumption(), many: say.assumptionAssumptions() },
  fields,
  edges: {},
  /** What is assumed is stated (D1); the date it is checked by is chosen, moved by an amendment. */
  statement: ChangeWay.stated,
  changes: { [F.expires]: ChangeWay.chosen },

  holes(self, g) {
    const { counts, dates, settings } = g.lib
    if (counts.any(self.evidence)) return []
    const days = daysBetween(g.today, self.expires)
    if (days < counts.zero) return [hole.error(HoleCode.assumptionExpired, say.assumptionAssumptionExpiredOnWithoutEvidence(dates.format(self.expires)))]
    if (days <= settings.assumption.warnWithin) {
      return [hole.warning(HoleCode.assumptionToCheck, say.assumptionCheckTheAssumptionBeforeIn(dates.format(self.expires), days), undefined, say.assumptionNoEvidenceYet())]
    }
    return []
  },

  status: (self, g) => (g.lib.counts.any(self.evidence) ? Status.held : Status.unknown),

  render: (self, g) => [doc.facts([{ label: say.assumptionEvidence(), value: [g.lib.counts.any(self.evidence) ? say.assumptionYes() : say.assumptionNoneYet()] }])],
})
