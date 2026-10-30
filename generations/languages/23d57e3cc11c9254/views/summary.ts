import { defineView, doc, ViewGroup, ViewName, type Block } from "../trame/kernel"
import words from "./words"

const say = words()

/** What `trame build` prints: the graph in figures, the statuses, the overlaps, and the issues that remain open. */
export default defineView({
  name: ViewName.summary,
  label: say.summaryBuildSummary(),
  group: ViewGroup.summary,
  run(c) {
    const { counts, punctuation, dates } = c.lib
    const nodes = c.all().nodes()
    const n = c.counts()
    const kinds = c.kinds()
    const blocks: Block[] = [doc.table([say.indexModule(), say.summaryContents()], c.modules().map((m) => [
      [m.id],
      [kinds
        .map((k) => [k, nodes.filter((v) => v.module === m.id && v.kind === k.name).length] as const)
        .filter(([, count]) => count)
        .map(([k, count]) => say.summaryCount(count, (count > counts.one ? k.label.many : k.label.one).toLowerCase()))
        .join(punctuation.parts)],
    ]))]
    const withStatus = nodes.filter((v) => v.status)
    if (counts.any(withStatus)) blocks.push(doc.section(say.summaryStatuses(), [doc.table([say.assemblyNode(), say.adrsStatus()], withStatus.map((v) => [[doc.ident(v.id)], [doc.status(v.status!)]]))]))
    const conflicts = c.resolutions()
    if (counts.any(conflicts)) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    const issues = c.issues()
    if (counts.any(issues)) blocks.push(doc.section(say.indexOpenIssues(), [doc.issues(issues.map(c.issueItem))]))
    return {
      title: say.summaryTitle(dates.format(c.today), c.modules().length, nodes.length, n.edges, n.inferred, n.derived),
      blocks,
    }
  },
})
