import { defineView, doc, EdgeRole, Nature, ResolutionOutcome, Shape, ViewGroup, type Block, type FigureEdge } from "../trame/kernel"

/** Each overlap of claims: the target, the nodes that claim it, which one wins, and what the decision rests on. */
export default defineView({
  name: "overlaps",
  label: "Overlaps",
  group: ViewGroup.figure,
  order: 30,
  run(c) {
    const blocks: Block[] = []
    for (const r of c.resolutions()) {
      const nodes = [r.target, ...r.claimants, ...r.because]
      const claimEdges: FigureEdge[] = r.claimants.map((a) => ({
        from: a.ref, to: r.target.ref, label: "Claims", inverse: "Claimed by", nature: Nature.declared, active: true,
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
    if (!blocks.length) blocks.push(doc.para("There is no overlap on ", doc.date(c.today), ": no value is claimed by two nodes at once."))
    return { title: "Overlaps", intro: ["The values claimed by several nodes on ", doc.date(c.today), ", and how each overlap was settled."], blocks }
  },
})
