import { defineView, doc, edgesOf, Status, KindName, ViewGroup, ViewName, type Block, type Inline, type View } from "../trame/kernel"
import { adrKind } from "../kinds/adr"
import words from "./words"

const say = words()

/** The architecture decisions of the graph: why each one was taken, what was rejected, and what applies it. */
export default defineView({
  name: ViewName.adrs,
  label: say.adrsArchitectureDecisions(),
  group: ViewGroup.document,
  run(c) {
    const { counts, lists } = c.lib
    const title = say.adrsArchitectureDecisions()
    // In the order of the modules, then of their declarations: the order in which their authors wrote them.
    const moduleIds = c.modules().map((m) => m.id)
    const all = c.all().where((v) => v.kind === KindName.adr && !v.repealedBy).nodes()
      .sort((a, b) => moduleIds.indexOf(a.module) - moduleIds.indexOf(b.module) || (a.decl?.line ?? counts.zero) - (b.decl?.line ?? counts.zero))
    if (counts.isEmpty(all)) return { title, blocks: [doc.para(say.adrsTheGraphRecordsNoArchitectureDecision())] }
    const appliers = (v: View): Inline[] => lists.enumeration(c.from(v).out(edgesOf(adrKind).appliedBy).nodes().map(doc.ref))
    const held = all.filter((v) => v.status === Status.held).length
    const modules = [...new Set(all.map((v) => v.module))]
    const blocks: Block[] = [
      doc.summary(say.adrsHeldByTheNodesThatApply(all.length, held)),
      doc.table([say.adrsDecision(), say.adrsStatus(), say.adrsAppliedBy()], all.map((v) => [[doc.ref(v)], v.status ? [doc.status(v.status)] : [say.adrsUnknown()], appliers(v)])),
      ...modules.map((m) => doc.section(c.modules().find((x) => x.id === m)?.title ?? m, all.filter((v) => v.module === m).map((v) => c.card(v)))),
    ]
    return {
      title,
      intro: [say.adrsTheChoicesThatShapeTheProduct(), doc.date(c.today), say.adrsWhyEachWasTakenWhatWas()],
      blocks,
    }
  },
})
