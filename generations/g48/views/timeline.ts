import { defineView, doc, addDays, DateRole, ViewGroup, type TimelineLane } from "../trame/kernel"
import words from "./words"

const say = words()

/** What comes into force, what stops, what reaches its deadline, around the date of the graph. */
export default defineView({
  name: "timeline",
  label: say.timelineTimeline(),
  group: ViewGroup.figure,
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
      const from = lane.marks.find((m) => m.role === DateRole.start)?.date
      const until = lane.marks.find((m) => m.role === DateRole.end)?.date
      if (from || until) lane.periods.push({ from, until })
    }
    const all = [...dates.map((d) => d.date), c.today].sort()
    return {
      title: say.timelineTimeline(),
      intro: [say.timelineWhatComesIntoForceStopsOr(), doc.date(c.today), "."],
      blocks: [doc.figure({
        type: "timeline",
        today: c.today,
        from: addDays(all[0], -14),
        to: addDays(all.at(-1)!, 30),
        lanes: [...lanes.values()],
      }, say.timelineTheBarsAreThePeriodsOf())],
    }
  },
})
