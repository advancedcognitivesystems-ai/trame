import { defineView, doc, ViewGroup, ViewName, type Block } from "../trame/kernel"
import words from "./words"

const say = words()

/** The project at a glance: the modules, the libraries it imports, the issues that remain open, the overlaps. */
export default defineView({
  name: ViewName.index,
  label: say.indexProject(),
  group: ViewGroup.document,
  run(c) {
    const { counts, lists } = c.lib
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
    // An engine that imports no library has no such method.
    const libraries = c.libraries?.() ?? []
    if (counts.any(libraries)) {
      blocks.push(doc.section(say.indexLibraries(), [
        doc.para(say.indexLibrariesIntroduction()),
        doc.table([say.indexLibrary(), say.indexModules(), say.indexNodes(), say.indexOpenIssues()], libraries.map((lib) => [
          [doc.fileLink(lib.index, lib.name)],
          lists.enumeration(lib.modules.map((m) => m.title)),
          [String(lib.nodes)],
          c.summary(lib.issues, []),
        ])),
      ]))
    }
    if (counts.any(issues)) blocks.push(doc.section(say.indexOpenIssues(), [doc.issues(issues.map(c.issueItem))]))
    const conflicts = c.resolutions()
    if (counts.any(conflicts)) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    return { title: say.indexProject(), intro: say.indexIntroduction(doc.date(c.today), doc.ident(say.indexTrameBuild())), blocks }
  },
})
