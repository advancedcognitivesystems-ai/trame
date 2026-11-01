import { defineKind, field, optional, edge, hole, doc, keysOf, Status, KindName, Unit, ChangeWay} from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  signal: field.text(say.sloMeasuredSignal()),
  percentile: field.number(say.sloPercentile()),
  threshold: field.duration(say.sloThreshold()),
  window: field.duration(say.sloWindow()),
  source: optional(field.text(say.sloMeasurementSource())),
}
const F = keysOf(fields)

/** A service level objective: a threshold measured in production. */
export const slo = defineKind({
  name: KindName.slo,
  label: { one: say.sloServiceLevelObjective(), many: say.sloServiceLevelObjectives() },
  renderOwns: [F.signal, F.percentile, F.threshold, F.window],
  fields,
  changes: { [F.percentile]: ChangeWay.chosen, [F.threshold]: ChangeWay.chosen, [F.window]: ChangeWay.chosen },
  edges: {
    constrains: edge.many([KindName.requirement], { label: say.sloConstrains(), inverse: say.sloConstrainedBy() }),
  },

  holes: (self, g) => {
    const [lowest, highest] = g.lib.settings.slo.percentile
    const outside = g.lib.values.isNumber(self.percentile) && (self.percentile < lowest || self.percentile > highest)
    return [
      !self.source && hole.warning(say.sloNoProductionMeasurementWired()),
      outside && hole.error(say.sloPercentileOutside(self.percentile, lowest, highest), self.owner),
    ]
  },

  status: (self, g) => {
    const m = g.lib.sequences.last(self.evidence)
    if (!m) return Status.unknown // without a measurement we do not know: neither held nor violated
    return m.value <= self.threshold ? Status.held : Status.violated
  },

  render: (self) => [
    doc.para(...say.sloObjective(doc.value(self.percentile), doc.ident(self.signal), doc.value(self.threshold, self.quantityOf?.(F.threshold) ?? Unit.duration), doc.value(self.window, self.quantityOf?.(F.window) ?? Unit.duration))),
  ],
})
