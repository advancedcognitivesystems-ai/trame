import { defineKind, field, optional, edge, hole, doc, Status } from "../trame/kernel"

/** A service level objective: a threshold measured in production. */
export const slo = defineKind({
  name: "slo",
  label: { one: "Service level objective", many: "Service level objectives" },
  order: 30,
  renderOwns: ["signal", "percentile", "threshold", "window"],
  fields: {
    owner: field.owner(),
    signal: field.text("Measured signal"),
    percentile: field.number("Percentile", { min: 50, max: 100 }),
    threshold: field.duration("Threshold"),
    window: field.duration("Window"),
    source: optional(field.text("Measurement source")),
  },
  edges: {
    constrains: edge.many(["requirement"], { label: "Constrains", inverse: "Constrained by" }),
  },

  holes: (self) => [!self.source && hole.warning("No production measurement wired")],

  status: (self) => {
    const m = self.evidence.at(-1)
    if (!m) return Status.unknown // without a measurement we do not know: neither held nor violated
    return m.value <= self.threshold ? Status.held : Status.violated
  },

  render: (self) => [
    doc.para("p", doc.value(self.percentile), " of ", doc.ident(self.signal), " under ", doc.value(self.threshold, "duration"), ", over ", doc.value(self.window, "duration")),
  ],
})
