import { defineView, doc, Shape, ViewGroup, type View } from "../trame/kernel"

/** The whole graph, ordered by distance to the goals: the goals at the top, what follows from them below. */
export default defineView({
  name: "layers",
  label: "Layers",
  group: ViewGroup.figure,
  order: 10,
  run(c) {
    const nodes = c.all().where((v) => !v.repealedBy).nodes()
    const roots = nodes.filter((v) => c.kindOf(v).root)
    const dist = new Map<string, number>(roots.map((r) => [r.ref, 0]))
    const queue: View[] = [...roots]
    while (queue.length) {
      const v = queue.shift()!
      for (const e of [...c.edges(v, "out"), ...c.edges(v, "in")]) {
        if (e.derived || e.other.repealedBy || dist.has(e.other.ref)) continue
        dist.set(e.other.ref, dist.get(v.ref)! + 1)
        queue.push(e.other)
      }
    }
    const far = Math.max(0, ...dist.values()) + 1
    return {
      title: "Layers",
      intro: ["The graph in force on ", doc.date(c.today), ", ordered by distance to the goals."],
      blocks: [doc.figure({
        type: "graph",
        shape: Shape.layers,
        nodes: nodes.map((v) => c.figureNode(v, dist.get(v.ref) ?? far)),
        edges: c.figureEdges(nodes),
        groups: c.modules().map((m) => ({ id: m.id, label: m.title })),
      }, "Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.")],
    }
  },
})
