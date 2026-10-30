import { defineView, doc, type Block } from "../trame/kernel"

/** Le document d'un module : ce qui reste à traiter, puis la fiche de chaque nœud, rangée par type. */
export default defineView({
  name: "module",
  label: "Document du module",
  group: "module",
  per: "module",
  order: 10,
  run(c, { module = "" }) {
    const title = c.modules().find((m) => m.id === module)?.title ?? module
    const nodes = c.all().where((v) => v.module === module).nodes()
    const issues = c.issues({ module })
    const blocks: Block[] = [doc.summary(...c.summary(issues, nodes))]
    if (issues.length) blocks.push(doc.section("À traiter", [doc.issues(issues.map(c.issueItem))]))
    for (const k of c.kinds().filter((x) => !x.inline)) {
      const list = nodes.filter((v) => v.kind === k.name)
      if (list.length) blocks.push(doc.section(list.length > 1 ? k.label.many : k.label.one, list.map((v) => c.card(v))))
    }
    return {
      title,
      intro: ["Graphe en vigueur le ", doc.date(c.today), ", généré par ", doc.ident("trame build"), " depuis ", doc.ident(`src/${module}.ts`), ". Ce document suit le code : pour le changer, on change le code."],
      blocks,
    }
  },
})
