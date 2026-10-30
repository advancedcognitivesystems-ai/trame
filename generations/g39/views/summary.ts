import { defineView, doc, formatDate, plural, ViewGroup, type Block } from "../trame/kernel"
import words from "./words"

const say = words()

/** What `trame build` prints: the graph in figures, the statuses, the overlaps, and the issues that remain open. */
export default defineView({
  name: "summary",
  label: say.summaryBuildSummary(),
  group: ViewGroup.summary,
  order: 10,
  run(c) {
    const nodes = c.all().nodes()
    const n = c.counts()
    const kinds = c.kinds()
    const blocks: Block[] = [doc.table([say.indexModule(), say.summaryContents()], c.modules().map((m) => [
      [m.id],
      [kinds
        .map((k) => [k, nodes.filter((v) => v.module === m.id && v.kind === k.name).length] as const)
        .filter(([, count]) => count)
        .map(([k, count]) => `${count} ${(count > 1 ? k.label.many : k.label.one).toLowerCase()}`)
        .join(" · ")],
    ]))]
    const withStatus = nodes.filter((v) => v.status)
    if (withStatus.length) blocks.push(doc.section(say.summaryStatuses(), [doc.table([say.assemblyNode(), say.adrsStatus()], withStatus.map((v) => [[doc.ident(v.id)], [doc.status(v.status!)]]))]))
    const conflicts = c.resolutions()
    if (conflicts.length) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    const issues = c.issues()
    if (issues.length) blocks.push(doc.section(say.indexOpenIssues(), [doc.issues(issues.map(c.issueItem))]))
    return {
      title: say.summaryTrameBuildOfThemInferredFrom(formatDate(c.today), plural(c.modules().length, "module"), plural(nodes.length, "node"), plural(n.edges, "edge"), n.inferred, n.derived ? say.summaryAndComputed(n.derived) : ""),
      blocks,
    }
  },
})
