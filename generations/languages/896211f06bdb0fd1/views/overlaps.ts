import { defineView, doc, EdgeRole, FigureType, Nature, ResolutionOutcome, Shape, ViewGroup, ViewName, type Block, type FigureEdge } from "../trame/kernel"
import words from "./words"

const say = words()

/** Each overlap of claims: the target, the nodes that claim it, which one wins, and what the decision rests on. */
export default defineView({
  name: ViewName.overlaps,
  label: say.historyOverlaps(),
  group: ViewGroup.figure,
  run(c) {
    const { counts, texts, lists, punctuation } = c.lib
    const blocks: Block[] = []
    for (const r of c.resolutions()) {
      const nodes = [r.target, ...r.claimants, ...r.because]
      const claimEdges: FigureEdge[] = r.claimants.map((a) => ({
        from: a.ref, to: r.target.ref, label: say.overlapsClaims(), inverse: say.overlapsClaimedBy(), nature: Nature.declared, active: true,
        role: r.outcome === ResolutionOutcome.contested ? EdgeRole.contested
          : r.applied.some((x) => x.ref === a.ref) ? EdgeRole.winner
            : r.replaced.some(([, lost]) => lost.ref === a.ref) ? EdgeRole.replaced : EdgeRole.discarded,
      }))
      const support = c.figureEdges([...r.because, ...r.claimants])
        .filter((e) => e.nature === Nature.computed || r.because.some((b) => b.ref === e.from))
        .map((e): FigureEdge => (e.nature === Nature.computed ? e : { ...e, role: EdgeRole.support }))
      // The target at the top, the claimants under it, what the decision rests on under them.
      const rankOf = (v: (typeof nodes)[number], i: number) =>
        c.lib.sequences.isFirst(i) ? counts.zero : r.claimants.includes(v) ? counts.one : counts.next(counts.one)
      blocks.push(doc.section(texts.concat([r.target.title, punctuation.parts, texts.concat(lists.enumeration(r.paths))]), [
        doc.figure({
          type: FigureType.graph,
          shape: Shape.tree,
          focus: r.target.ref,
          nodes: nodes.map((v, i) => c.figureNode(v, rankOf(v, i))),
          edges: [...claimEdges, ...support],
          groups: [],
        }),
        c.resolution(r),
      ]))
    }
    if (counts.isEmpty(blocks)) blocks.push(doc.para(say.overlapsThereIsNoOverlapOn(), doc.date(c.today), say.overlapsNoValueIsClaimedByTwo()))
    return { title: say.historyOverlaps(), intro: [say.overlapsTheValuesClaimedBySeveralNodes(), doc.date(c.today), say.overlapsAndHowEachOverlapWasSettled()], blocks }
  },
})
