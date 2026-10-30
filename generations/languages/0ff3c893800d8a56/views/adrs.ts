import { defineView, doc, plural, Status, ViewGroup, type Block, type Inline, type View } from "../trame/kernel"

/** The architecture decisions of the graph: why each one was taken, what was rejected, and what applies it. */
export default defineView({
  name: "adrs",
  label: "Architecture decisions",
  group: ViewGroup.document,
  order: 25,
  run(c) {
    const title = "Architecture decisions"
    // In the order of the modules, then of their declarations: the order in which their authors wrote them.
    const moduleIds = c.modules().map((m) => m.id)
    const all = c.all().where((v) => v.kind === "adr" && !v.repealedBy).nodes()
      .sort((a, b) => moduleIds.indexOf(a.module) - moduleIds.indexOf(b.module) || (a.decl?.line ?? 0) - (b.decl?.line ?? 0))
    if (!all.length) return { title, blocks: [doc.para("The graph records no architecture decision.")] }
    const appliers = (v: View): Inline[] => c.from(v).out("appliedBy").nodes().flatMap((w, i): Inline[] => [...(i ? [", "] : []), doc.ref(w)])
    const held = all.filter((v) => v.status === Status.held).length
    const modules = [...new Set(all.map((v) => v.module))]
    const blocks: Block[] = [
      doc.summary(`${plural(all.length, "architecture decision")}, ${held} held by the nodes that apply them`),
      doc.table(["Decision", "Status", "Applied by"], all.map((v) => [[doc.ref(v)], v.status ? [doc.status(v.status)] : ["unknown"], appliers(v)])),
      ...modules.map((m) => doc.section(c.modules().find((x) => x.id === m)?.title ?? m, all.filter((v) => v.module === m).map((v) => c.card(v)))),
    ]
    return {
      title,
      intro: ["The choices that shape the product without being values, in force on ", doc.date(c.today), ": why each was taken, what was rejected, and the nodes that apply it."],
      blocks,
    }
  },
})
