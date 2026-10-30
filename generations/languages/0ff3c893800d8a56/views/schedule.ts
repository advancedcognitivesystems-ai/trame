import { defineView, doc, formatDate, relativeDays, plural, ViewGroup } from "../trame/kernel"

/** All the dates of the graph, around the date of compilation. */
export default defineView({
  name: "schedule",
  label: "Schedule",
  group: ViewGroup.document,
  order: 40,
  run(c) {
    const dates = c.dates()
    const past = dates.filter((d) => d.date < c.today)
    const next = dates.filter((d) => d.date >= c.today)
    const row = (d: (typeof dates)[number]) => [[doc.date(d.date)], [relativeDays(c.today, d.date)], [d.label], [doc.ref(d.node)], d.node.owner ? [doc.person(d.node.owner)] : [""]]
    return {
      title: "Schedule",
      intro: ["All the dates of the graph, around ", doc.date(c.today), ": entries into force, ends, and planned checks and reviews."],
      blocks: [
        doc.summary(`${plural(past.length, "past date")} · ${plural(next.length, "upcoming date")}${next[0] ? ` · next: ${formatDate(next[0].date)}, "${next[0].node.title}"` : ""}`),
        doc.table(["Date", "When", "What happens", "Node", "Owner"], [
          ...past.map(row),
          [[doc.date(c.today)], ["today"], ["date of the graph"], [""], [""]],
          ...next.map(row),
        ]),
      ],
    }
  },
})
