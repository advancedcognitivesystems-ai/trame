import { defineView, doc, type Block } from "../trame/kernel"

/** Le projet d'un coup d'œil : les modules, ce qui reste à traiter, les recoupements. */
export default defineView({
  name: "index",
  label: "Projet",
  group: "document",
  order: 10,
  run(c) {
    const nodes = c.all().nodes()
    const issues = c.issues()
    const shown = c.kinds().filter((k) => !k.inline && nodes.some((v) => v.kind === k.name))
    const blocks: Block[] = [
      doc.summary(...c.summary(issues, nodes)),
      doc.table(["Module", ...shown.map((k) => k.label.many), "À traiter"], c.modules().map((m) => [
        [doc.docLink(c.moduleDoc(m.id), m.title)],
        ...shown.map((k) => [String(nodes.filter((v) => v.module === m.id && v.kind === k.name).length)]),
        [String(c.issues({ module: m.id }).length)],
      ])),
    ]
    if (issues.length) blocks.push(doc.section("À traiter", [doc.issues(issues.map(c.issueItem))]))
    const conflicts = c.resolutions()
    if (conflicts.length) blocks.push(doc.section("Recoupements", conflicts.map(c.resolution)))
    return { title: "Projet", intro: ["Graphe en vigueur le ", doc.date(c.today), ", généré par ", doc.ident("trame build"), "."], blocks }
  },
})
