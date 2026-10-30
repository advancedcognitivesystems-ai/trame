import { defineKind, field, hole, doc, formatDate, daysBetween, plural, DateRole, Status } from "../trame/kernel"

/** An assumption about the outside world, to check before a date. */
export const assume = defineKind({
  name: "assumption",
  label: { one: "Assumption", many: "Assumptions" },
  order: 50,
  fields: {
    owner: field.owner(),
    expires: field.date("Check before", DateRole.deadline),
  },
  edges: {},

  holes(self, g) {
    if (self.evidence.length) return []
    const days = daysBetween(g.today, self.expires)
    if (days < 0) return [hole.error(`Assumption expired on ${formatDate(self.expires)}, without evidence`)]
    if (days <= 60) {
      return [hole.warning(`Check the assumption before ${formatDate(self.expires)} (in ${plural(days, "day")})`, undefined, "no evidence yet")]
    }
    return []
  },

  status: (self) => (self.evidence.length ? Status.held : Status.unknown),

  render: (self) => [doc.facts([{ label: "Evidence", value: [self.evidence.length ? "yes" : "none yet"] }])],
})
