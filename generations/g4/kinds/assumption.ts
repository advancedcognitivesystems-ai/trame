import { defineKind, field, hole, doc, frDate, daysBetween } from "../trame/kernel"

/** Une hypothèse sur le monde extérieur, à vérifier avant une date. */
export const assume = defineKind({
  name: "assumption",
  label: { one: "Hypothèse", many: "Hypothèses" },
  order: 50,
  fields: {
    owner: field.owner(),
    expires: field.date("À vérifier avant", "échéance"),
  },
  edges: {},

  holes(self, g) {
    if (self.evidence.length) return []
    const days = daysBetween(g.today, self.expires)
    if (days < 0) return [hole.error(`Hypothèse expirée le ${frDate(self.expires)}, sans preuve`)]
    if (days <= 60) {
      return [hole.warning(`Vérifier l'hypothèse avant le ${frDate(self.expires)} (dans ${days} jours)`, undefined, "aucune preuve pour l'instant")]
    }
    return []
  },

  status: (self) => (self.evidence.length ? "tenu" : "inconnu"),

  render: (self) => [doc.facts([{ label: "Preuve", value: [self.evidence.length ? "oui" : "aucune pour l'instant"] }])],
})
