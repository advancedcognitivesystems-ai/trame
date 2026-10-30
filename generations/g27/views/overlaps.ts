import { defineView, doc, EdgeRole, Nature, ResolutionOutcome, Shape, ViewGroup, type Block, type FigureEdge } from "../trame/kernel"
import words from "./words"

const say = words()

/** Each overlap of claims: the target, the nodes that claim it, which one wins, and what the decision rests on. */
export default defineView({
  name: "overlaps",
  label: say.historyOverlaps(),
  group: ViewGroup.figure,
  order: 30,
  run(c) {
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
      blocks.push(doc.section(`${r.target.title} · ${r.paths.join(", ")}`, [
        doc.figure({
          type: "graph",
          shape: Shape.tree,
          focus: r.target.ref,
          nodes: nodes.map((v, i) => c.figureNode(v, i === 0 ? 0 : r.claimants.includes(v) ? 1 : 2)),
          edges: [...claimEdges, ...support],
          groups: [],
        }),
        c.resolution(r),
      ]))
    }
    if (!blocks.length) blocks.push(doc.para(say.overlapsThereIsNoOverlapOn(), doc.date(c.today), say.overlapsNoValueIsClaimedByTwo()))
    return { title: say.historyOverlaps(), intro: [say.overlapsTheValuesClaimedBySeveralNodes(), doc.date(c.today), say.overlapsAndHowEachOverlapWasSettled()], blocks }
  },
})
