import { defineView, doc, plural, Nature, Shape, Status, ViewGroup, ViewScope, type View } from "../trame/kernel"
import { listOf } from "./lib/claims"

/** Everything that depends on a node, directly or not. */
export default defineView({
  name: "impact",
  label: "Impact",
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
      title: `Impact · ${start.title}`,
      intro: ["What depends on ", doc.ref(start), ", directly or not, on ", doc.date(c.today), "."],
      blocks: [
        doc.summary(dependents.length
          ? `${plural(dependents.length, "node depends", "nodes depend")} on "${start.title}"${blocked.length ? `, including ${blocked.length} blocked or violated` : ""}`
          : `Nothing depends on "${start.title}"`),
        doc.figure({
          type: "graph",
          shape: Shape.tree,
          focus: start.ref,
          nodes: reached.map((v) => c.figureNode(v, depth.get(v.ref)!)),
          edges: c.figureEdges(reached).filter((e) => e.nature !== Nature.computed),
          groups: [],
        }),
        ...(blocked.length ? [doc.para("To look at: ", ...listOf(blocked.map(doc.ref)), ".")] : []),
      ],
    }
  },
})
