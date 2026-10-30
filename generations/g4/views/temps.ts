import { defineView, doc, addDays, type TimelineLane } from "../trame/kernel"

/** Ce qui entre en vigueur, ce qui s'arrête, ce qui arrive à échéance, autour de la date du graphe. */
export default defineView({
  name: "temps",
  label: "Chronologie",
  group: "figure",
  order: 20,
  run(c) {
    const dates = c.dates()
    const lanes = new Map<string, TimelineLane>()
    for (const d of dates) {
      const lane = lanes.get(d.node.ref) ?? {
        ref: d.node.ref, title: d.node.title, kindLabel: c.kindOf(d.node).label.one, module: d.node.module,
        active: d.node.active, periods: [], marks: [],
      }
      lane.marks.push({ date: d.date, label: d.label, role: d.role })
      lanes.set(d.node.ref, lane)
    }
    for (const lane of lanes.values()) {
      const from = lane.marks.find((m) => m.role === "début")?.date
      const until = lane.marks.find((m) => m.role === "fin")?.date
      if (from || until) lane.periods.push({ from, until })
    }
    const all = [...dates.map((d) => d.date), c.today].sort()
    return {
      title: "Chronologie",
      intro: ["Ce qui entre en vigueur, s'arrête ou arrive à échéance, autour du ", doc.date(c.today), "."],
      blocks: [doc.figure({
        type: "timeline",
        today: c.today,
        from: addDays(all[0], -14),
        to: addDays(all.at(-1)!, 30),
        lanes: [...lanes.values()],
      }, "Les barres sont les périodes de validité, les repères les échéances et les revues. La ligne marque la date du graphe.")],
    }
  },
})
