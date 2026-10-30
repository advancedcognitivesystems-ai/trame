import { defineView, doc, plural, Nature, Shape, Status, ViewGroup, ViewScope, type View } from "../trame/kernel"
import { listOf } from "./lib/claims"
import words from "./words"

const say = words()

/** Everything that depends on a node, directly or not. */
export default defineView({
  name: "impact",
  label: say.impactImpact(),
  group: ViewGroup.node,
  per: ViewScope.node,
  order: 10,
  run(c, { node }) {
    const start = node!
    const depth = new Map<string, number>([[start.ref, 0]])
    const reached: View[] = [start]
    const queue: View[] = [start]
    while (queue.length) {
      const v = queue.shift()!
      for (const e of c.edges(v, "in")) {
        if (e.derived || depth.has(e.other.ref)) continue
        depth.set(e.other.ref, depth.get(v.ref)! + 1)
        reached.push(e.other)
        queue.push(e.other)
      }
    }
    const dependents = reached.slice(1)
    const blocked = dependents.filter((v) => v.status === Status.blocked || v.status === Status.violated)
    return {
      title: say.impactImpact2(start.title),
      intro: [say.impactWhatDependsOn(), doc.ref(start), say.impactDirectlyOrNotOn(), doc.date(c.today), "."],
      blocks: [
        doc.summary(dependents.length
          ? say.impactOn(plural(dependents.length, say.impactNodeDepends(), say.impactNodesDepend()), start.title, blocked.length ? say.impactIncludingBlockedOrViolated(blocked.length) : "")
          : say.impactNothingDependsOn(start.title)),
        doc.figure({
          type: "graph",
          shape: Shape.tree,
          focus: start.ref,
          nodes: reached.map((v) => c.figureNode(v, depth.get(v.ref)!)),
          edges: c.figureEdges(reached).filter((e) => e.nature !== Nature.computed),
          groups: [],
        }),
        ...(blocked.length ? [doc.para(say.impactToLookAt(), ...listOf(blocked.map(doc.ref)), ".")] : []),
      ],
    }
  },
})
