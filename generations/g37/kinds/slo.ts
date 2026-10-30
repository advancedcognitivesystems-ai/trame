import { defineKind, field, optional, edge, hole, doc, Status } from "../trame/kernel"
import words from "./words"

const say = words()

/** A service level objective: a threshold measured in production. */
export const slo = defineKind({
  name: "slo",
  label: { one: say.sloServiceLevelObjective(), many: say.sloServiceLevelObjectives() },
  order: 30,
  renderOwns: ["signal", "percentile", "threshold", "window"],
  fields: {
    owner: field.owner(),
    signal: field.text(say.sloMeasuredSignal()),
    percentile: field.number(say.sloPercentile(), { min: 50, max: 100 }),
    threshold: field.duration(say.sloThreshold()),
    window: field.duration(say.sloWindow()),
    source: optional(field.text(say.sloMeasurementSource())),
  },
  edges: {
    constrains: edge.many(["requirement"], { label: say.sloConstrains(), inverse: say.sloConstrainedBy() }),
  },

  holes: (self) => [!self.source && hole.warning(say.sloNoProductionMeasurementWired())],

  status: (self) => {
    const m = self.evidence.at(-1)
    if (!m) return Status.unknown // without a measurement we do not know: neither held nor violated
    return m.value <= self.threshold ? Status.held : Status.violated
  },

  render: (self) => [
    doc.para("p", doc.value(self.percentile), " of ", doc.ident(self.signal), " under ", doc.value(self.threshold, "duration"), say.sloOver(), doc.value(self.window, "duration")),
  ],
})
