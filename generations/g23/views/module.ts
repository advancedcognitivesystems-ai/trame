import { defineView, doc, ViewGroup, ViewScope, type Block } from "../trame/kernel"
import words from "./words"

const say = words()

/** The document of a module: the issues that remain open, then the card of each node, grouped by kind. */
export default defineView({
  name: "module",
  label: say.moduleModuleDocument(),
  group: ViewGroup.module,
  per: ViewScope.module,
  order: 10,
  run(c, { module = "" }) {
    const title = c.modules().find((m) => m.id === module)?.title ?? module
    const nodes = c.all().where((v) => v.module === module).nodes()
    const issues = c.issues({ module })
    const blocks: Block[] = [doc.summary(...c.summary(issues, nodes))]
    if (issues.length) blocks.push(doc.section(say.indexOpenIssues(), [doc.issues(issues.map(c.issueItem))]))
    for (const k of c.kinds().filter((x) => !x.inline)) {
      const list = nodes.filter((v) => v.kind === k.name)
      if (list.length) blocks.push(doc.section(list.length > 1 ? k.label.many : k.label.one, list.map((v) => c.card(v))))
    }
    return {
      title,
      intro: [say.indexTheGraphInForceOn(), doc.date(c.today), say.indexGeneratedBy(), doc.ident(say.indexTrameBuild()), " from ", doc.ident(say.moduleSrcTs(module)), say.moduleThisDocumentFollowsTheCodeTo()],
      blocks,
    }
  },
})
