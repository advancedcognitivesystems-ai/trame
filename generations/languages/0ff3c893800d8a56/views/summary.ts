import { defineView, doc, formatDate, plural, ViewGroup, type Block } from "../trame/kernel"

/** What `trame build` prints: the graph in figures, the statuses, the overlaps, and the issues that remain open. */
export default defineView({
  name: "summary",
  label: "Build summary",
  group: ViewGroup.summary,
  order: 10,
  run(c) {
    const nodes = c.all().nodes()
    const n = c.counts()
    const kinds = c.kinds()
    const blocks: Block[] = [doc.table(["Module", "Contents"], c.modules().map((m) => [
      [m.id],
      [kinds
        .map((k) => [k, nodes.filter((v) => v.module === m.id && v.kind === k.name).length] as const)
        .filter(([, count]) => count)
        .map(([k, count]) => `${count} ${(count > 1 ? k.label.many : k.label.one).toLowerCase()}`)
        .join(" · ")],
    ]))]
    const withStatus = nodes.filter((v) => v.status)
    if (withStatus.length) blocks.push(doc.section("Statuses", [doc.table(["Node", "Status"], withStatus.map((v) => [[doc.ident(v.id)], [doc.status(v.status!)]]))]))
    const conflicts = c.resolutions()
    if (conflicts.length) blocks.push(doc.section("Overlaps", conflicts.map(c.resolution)))
    const issues = c.issues()
    if (issues.length) blocks.push(doc.section("Open issues", [doc.issues(issues.map(c.issueItem))]))
    return {
      title: `trame build · ${formatDate(c.today)} · ${plural(c.modules().length, "module")} · ${plural(nodes.length, "node")} · ${plural(n.edges, "edge")}, ${n.inferred} of them inferred from the code${n.derived ? ` and ${n.derived} computed` : ""}`,
      blocks,
    }
  },
})
