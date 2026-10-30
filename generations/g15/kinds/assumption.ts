import { defineKind, field, hole, doc, formatDate, daysBetween, plural, DateRole, Status } from "../trame/kernel"
import words from "./words"

const say = words()

/** An assumption about the outside world, to check before a date. */
export const assume = defineKind({
  name: "assumption",
  label: { one: say.assumptionAssumption(), many: say.assumptionAssumptions() },
  order: 50,
  fields: {
    owner: field.owner(),
    expires: field.date(say.assumptionCheckBefore(), DateRole.deadline),
  },
  edges: {},

  holes(self, g) {
    if (self.evidence.length) return []
    const days = daysBetween(g.today, self.expires)
    if (days < 0) return [hole.error(say.assumptionAssumptionExpiredOnWithoutEvidence(formatDate(self.expires)))]
    if (days <= 60) {
      return [hole.warning(say.assumptionCheckTheAssumptionBeforeIn(formatDate(self.expires), plural(days, "day")), undefined, say.assumptionNoEvidenceYet())]
    }
    return []
  },

  status: (self) => (self.evidence.length ? Status.held : Status.unknown),

  render: (self) => [doc.facts([{ label: say.assumptionEvidence(), value: [self.evidence.length ? "yes" : say.assumptionNoneYet()] }])],
})
