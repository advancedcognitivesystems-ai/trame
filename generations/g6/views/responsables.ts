import { defineView, doc, type Block, type View } from "../trame/kernel"

/** Par personne : ce qu'elle doit décider, trancher ou surveiller, et ce qu'elle porte. */
export default defineView({
  name: "responsables",
  label: "Responsables",
  group: "document",
  order: 30,
  run(c) {
    const views = c.all().where((v) => !v.repealedBy).nodes()
    const issues = c.issues()
    const people = [...new Set([...issues.map((i) => i.owner), ...views.map((v) => v.owner)].filter((x): x is string => !!x))].sort()
    const state = (v: View) =>
      v.status ? [doc.status(v.status)]
        : c.kindOf(v).fields.some((f) => f.role === "début") ? [v.active ? "en vigueur" : "pas en vigueur"]
          : issues.some((i) => i.node?.ref === v.ref && i.severity === "bloquant") ? ["à décider"] : [""]
    const count = (list: typeof issues, s: string) => String(list.filter((i) => i.severity === s).length)
    const blocks: Block[] = [doc.table(["Responsable", "À décider ou trancher", "Erreurs", "À surveiller", "Porte"], people.map((p) => {
      const mine = issues.filter((i) => i.owner === p)
      return [[doc.person(p)], [count(mine, "bloquant")], [count(mine, "erreur")], [count(mine, "avertissement")], [String(views.filter((v) => v.owner === p).length)]]
    }))]
    const orphans = issues.filter((i) => !i.owner)
    for (const p of [...people, ...(orphans.length ? [undefined] : [])]) {
      const mine = issues.filter((i) => i.owner === p)
      const inner: Block[] = []
      if (!mine.length) inner.push(doc.para("Rien à décider ni à surveiller."))
      else inner.push(doc.issues(mine.map(c.issueItem)))
      const owned = views.filter((v) => p && v.owner === p)
      if (owned.length) {
        inner.push(doc.section("Porte", [doc.table(["Nœud", "Type", "État"], owned.map((v) => [[doc.ref(v)], [c.kindOf(v).label.one], state(v)]))]))
      }
      blocks.push(doc.section(p ?? "à attribuer", inner, p))
    }
    return { title: "Responsables", intro: ["Ce que chacun doit décider, trancher ou surveiller le ", doc.date(c.today), ", et ce qu'il porte."], blocks }
  },
})
