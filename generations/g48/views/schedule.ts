import { defineView, doc, formatDate, relativeDays, plural, ViewGroup } from "../trame/kernel"
import words from "./words"

const say = words()

/** All the dates of the graph, around the date of compilation. */
export default defineView({
  name: "schedule",
  label: say.scheduleSchedule(),
  group: ViewGroup.document,
  run(c) {
    const dates = c.dates()
    const past = dates.filter((d) => d.date < c.today)
    const next = dates.filter((d) => d.date >= c.today)
    const row = (d: (typeof dates)[number]) => [[doc.date(d.date)], [relativeDays(c.today, d.date)], [d.label], [doc.ref(d.node)], d.node.owner ? [doc.person(d.node.owner)] : [""]]
    return {
      title: say.scheduleSchedule(),
      intro: [say.scheduleAllTheDatesOfTheGraph(), doc.date(c.today), say.scheduleEntriesIntoForceEndsAndPlanned()],
      blocks: [
        doc.summary(`${plural(past.length, say.schedulePastDate())} · ${plural(next.length, say.scheduleUpcomingDate())}${next[0] ? say.scheduleNext(formatDate(next[0].date), next[0].node.title) : ""}`),
        doc.table([say.scheduleDate(), say.scheduleWhen(), say.scheduleWhatHappens(), say.assemblyNode(), say.historyOwner()], [
          ...past.map(row),
          [[doc.date(c.today)], ["today"], [say.scheduleDateOfTheGraph()], [""], [""]],
          ...next.map(row),
        ]),
      ],
    }
  },
})
