import { defineKind, field, optional, edge, hole, doc } from "../trame/kernel"

/** Un objectif de service : un seuil mesuré en production. */
export const slo = defineKind({
  name: "slo",
  label: { one: "Objectif de service", many: "Objectifs de service" },
  order: 30,
  renderOwns: ["signal", "percentile", "threshold", "window"],
  fields: {
    owner: field.owner(),
    signal: field.text("Signal mesuré"),
    percentile: field.number("Centile", { min: 50, max: 100 }),
    threshold: field.duration("Seuil"),
    window: field.duration("Fenêtre"),
    source: optional(field.text("Source de mesure")),
  },
  edges: {
    constrains: edge.many(["requirement"], { label: "Contraint", inverse: "Contraint par" }),
  },

  holes: (self) => [!self.source && hole.warning("Aucune mesure de production branchée")],

  status: (self) => {
    const m = self.evidence.at(-1)
    if (!m) return "inconnu" // sans mesure, on ne sait pas : ni tenu, ni violé
    return m.value <= self.threshold ? "tenu" : "violé"
  },

  render: (self) => [
    doc.para("p", doc.value(self.percentile), " de ", doc.ident(self.signal), " sous ", doc.value(self.threshold, "duration"), ", sur ", doc.value(self.window, "duration")),
  ],
})
