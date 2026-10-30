import { defineView, doc, ViewGroup, type Block } from "../trame/kernel"
import words from "./words"

const say = words()

/** The project at a glance: the modules, the issues that remain open, the overlaps. */
export default defineView({
  name: "index",
  label: say.indexProject(),
  group: ViewGroup.document,
  order: 10,
  run(c) {
    const nodes = c.all().nodes()
    const issues = c.issues()
    const shown = c.kinds().filter((k) => !k.inline && nodes.some((v) => v.kind === k.name))
    const blocks: Block[] = [
      doc.summary(...c.summary(issues, nodes)),
      doc.table([say.indexModule(), ...shown.map((k) => k.label.many), say.indexOpenIssues()], c.modules().map((m) => [
        [doc.docLink(c.moduleDoc(m.id), m.title)],
        ...shown.map((k) => [String(nodes.filter((v) => v.module === m.id && v.kind === k.name).length)]),
        [String(c.issues({ module: m.id }).length)],
      ])),
    ]
    if (issues.length) blocks.push(doc.section(say.indexOpenIssues(), [doc.issues(issues.map(c.issueItem))]))
    const conflicts = c.resolutions()
    if (conflicts.length) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    return { title: say.indexProject(), intro: [say.indexTheGraphInForceOn(), doc.date(c.today), say.indexGeneratedBy(), doc.ident(say.indexTrameBuild()), "."], blocks }
  },
})
