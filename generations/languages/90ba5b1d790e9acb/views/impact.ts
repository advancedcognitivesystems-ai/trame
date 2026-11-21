import { defineView, doc, Direction, FigureType, Nature, Shape, Status, ViewGroup, ViewName, ViewScope, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** Everything that depends on a node, directly or not. */
export default defineView({
  name: ViewName.impact,
  label: say.impactImpact(),
  group: ViewGroup.node,
  per: ViewScope.node,
  run(c, { node }) {
    const { counts, sequences, lists } = c.lib
    const start = node!
    const depth = new Map<string, number>([[start.ref, counts.zero]])
    const reached: View[] = [start]
    const queue: View[] = [start]
    while (counts.any(queue)) {
      const v = queue.shift()!
      for (const e of c.edges(v, Direction.in)) {
        if (e.derived || depth.has(e.other.ref)) continue
        depth.set(e.other.ref, counts.next(depth.get(v.ref)!))
        reached.push(e.other)
        queue.push(e.other)
      }
    }
    const dependents = sequences.rest(reached)
    const blocked = dependents.filter((v) => v.status === Status.blocked || v.status === Status.violated)
    return {
      title: say.impactImpact2(start.title),
      intro: say.impactIntroduction(doc.ref(start), doc.date(c.today)),
      blocks: [
        doc.summary(counts.any(dependents) ? say.impactDependOn(dependents.length, start.title, blocked.length) : say.impactNothingDependsOn(start.title)),
        doc.figure({
          type: FigureType.graph,
          shape: Shape.tree,
          focus: start.ref,
          nodes: reached.map((v) => c.figureNode(v, depth.get(v.ref)!)),
          edges: c.figureEdges(reached).filter((e) => e.nature !== Nature.computed),
          groups: [],
        }),
        ...(counts.any(blocked) ? [doc.para(...say.impactToLookAt(lists.conjunction(blocked.map(doc.ref))))] : []),
      ],
    }
  },
})
