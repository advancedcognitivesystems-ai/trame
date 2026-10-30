import { defineView, doc, frDate, relDays, plural } from "../trame/kernel"

/** Toutes les dates du graphe, autour de la date de compilation. */
export default defineView({
  name: "echeancier",
  label: "Échéancier",
  group: "document",
  order: 40,
  run(c) {
    const dates = c.dates()
    const past = dates.filter((d) => d.date < c.today)
    const next = dates.filter((d) => d.date >= c.today)
    const row = (d: (typeof dates)[number]) => [[doc.date(d.date)], [relDays(c.today, d.date)], [d.label], [doc.ref(d.node)], d.node.owner ? [doc.person(d.node.owner)] : [""]]
    return {
      title: "Échéancier",
      intro: ["Toutes les dates du graphe, autour du ", doc.date(c.today), " : entrées en vigueur, fins, vérifications et revues prévues."],
      blocks: [
        doc.summary(`${plural(past.length, "date passée", "dates passées")} · ${plural(next.length, "date à venir", "dates à venir")}${next[0] ? ` · prochaine : ${frDate(next[0].date)}, « ${next[0].node.title} »` : ""}`),
        doc.table(["Date", "Quand", "Ce qui se passe", "Nœud", "Responsable"], [
          ...past.map(row),
          [[doc.date(c.today)], ["aujourd'hui"], ["date du graphe"], [""], [""]],
          ...next.map(row),
        ]),
      ],
    }
  },
})
