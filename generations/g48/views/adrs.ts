import { defineView, doc, plural, Status, ViewGroup, type Block, type Inline, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** The architecture decisions of the graph: why each one was taken, what was rejected, and what applies it. */
export default defineView({
  name: "adrs",
  label: say.adrsArchitectureDecisions(),
  group: ViewGroup.document,
  run(c) {
    const title = say.adrsArchitectureDecisions()
    // In the order of the modules, then of their declarations: the order in which their authors wrote them.
    const moduleIds = c.modules().map((m) => m.id)
    const all = c.all().where((v) => v.kind === "adr" && !v.repealedBy).nodes()
      .sort((a, b) => moduleIds.indexOf(a.module) - moduleIds.indexOf(b.module) || (a.decl?.line ?? 0) - (b.decl?.line ?? 0))
    if (!all.length) return { title, blocks: [doc.para(say.adrsTheGraphRecordsNoArchitectureDecision())] }
    const appliers = (v: View): Inline[] => c.from(v).out("appliedBy").nodes().flatMap((w, i): Inline[] => [...(i ? [", "] : []), doc.ref(w)])
    const held = all.filter((v) => v.status === Status.held).length
    const modules = [...new Set(all.map((v) => v.module))]
    const blocks: Block[] = [
      doc.summary(say.adrsHeldByTheNodesThatApply(plural(all.length, say.adrsArchitectureDecision()), held)),
      doc.table([say.adrsDecision(), say.adrsStatus(), say.adrsAppliedBy()], all.map((v) => [[doc.ref(v)], v.status ? [doc.status(v.status)] : ["unknown"], appliers(v)])),
      ...modules.map((m) => doc.section(c.modules().find((x) => x.id === m)?.title ?? m, all.filter((v) => v.module === m).map((v) => c.card(v)))),
    ]
    return {
      title,
      intro: [say.adrsTheChoicesThatShapeTheProduct(), doc.date(c.today), say.adrsWhyEachWasTakenWhatWas()],
      blocks,
    }
  },
})
