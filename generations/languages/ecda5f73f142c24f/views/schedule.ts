import { defineView, doc, daysBetween, ViewGroup, ViewName } from "../trame/kernel"
import words from "./words"

const say = words()

/** All the dates of the graph, around the date of compilation. */
export default defineView({
  name: ViewName.schedule,
  label: say.scheduleSchedule(),
  group: ViewGroup.document,
  run(c) {
    const { texts, sequences, dates: calendar } = c.lib
    const dates = c.dates()
    const past = dates.filter((d) => d.date < c.today)
    const next = dates.filter((d) => d.date >= c.today)
    const row = (d: (typeof dates)[number]) => [
      [doc.date(d.date)], [say.scheduleRelative(daysBetween(c.today, d.date))], [d.label], [doc.ref(d.node)], d.node.owner ? [doc.person(d.node.owner)] : [texts.empty],
    ]
    const first = sequences.head(next)
    return {
      title: say.scheduleSchedule(),
      intro: [say.scheduleAllTheDatesOfTheGraph(), doc.date(c.today), say.scheduleEntriesIntoForceEndsAndPlanned()],
      blocks: [
        doc.summary(say.scheduleSummary(past.length, next.length, first && { date: calendar.format(first.date), title: first.node.title })),
        doc.table([say.scheduleDate(), say.scheduleWhen(), say.scheduleWhatHappens(), say.assemblyNode(), say.historyOwner()], [
          ...past.map(row),
          [[doc.date(c.today)], [say.scheduleToday()], [say.scheduleDateOfTheGraph()], [texts.empty], [texts.empty]],
          ...next.map(row),
        ]),
      ],
    }
  },
})
