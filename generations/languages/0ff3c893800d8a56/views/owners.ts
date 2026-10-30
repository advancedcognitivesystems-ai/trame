import { defineView, doc, DateRole, Severity, ViewGroup, type Block, type View } from "../trame/kernel"

/** For each person: what they must decide, settle or watch, and what they own. */
export default defineView({
  name: "owners",
  label: "Owners",
  group: ViewGroup.document,
  order: 30,
  run(c) {
    const views = c.all().where((v) => !v.repealedBy).nodes()
    const issues = c.issues()
    const people = [...new Set([...issues.map((i) => i.owner), ...views.map((v) => v.owner)].filter((x): x is string => !!x))].sort()
    const state = (v: View) =>
      v.status ? [doc.status(v.status)]
        : c.kindOf(v).fields.some((f) => f.role === DateRole.start) ? [v.active ? "in force" : "not in force"]
          : issues.some((i) => i.node?.ref === v.ref && i.severity === Severity.blocking) ? ["to decide"] : [""]
    const count = (list: typeof issues, s: Severity) => String(list.filter((i) => i.severity === s).length)
    const blocks: Block[] = [doc.table(["Owner", "To decide or settle", "Errors", "To watch", "Owns"], people.map((p) => {
      const mine = issues.filter((i) => i.owner === p)
      return [[doc.person(p)], [count(mine, Severity.blocking)], [count(mine, Severity.error)], [count(mine, Severity.warning)], [String(views.filter((v) => v.owner === p).length)]]
    }))]
    const orphans = issues.filter((i) => !i.owner)
    for (const p of [...people, ...(orphans.length ? [undefined] : [])]) {
      const mine = issues.filter((i) => i.owner === p)
      const inner: Block[] = []
      if (!mine.length) inner.push(doc.para("Nothing to decide or watch."))
      else inner.push(doc.issues(mine.map(c.issueItem)))
      const owned = views.filter((v) => p && v.owner === p)
      if (owned.length) {
        inner.push(doc.section("Owns", [doc.table(["Node", "Kind", "State"], owned.map((v) => [[doc.ref(v)], [c.kindOf(v).label.one], state(v)]))]))
      }
      blocks.push(doc.section(p ?? "unassigned", inner, p))
    }
    return { title: "Owners", intro: ["What each person must decide, settle or watch on ", doc.date(c.today), ", and what they own."], blocks }
  },
})
