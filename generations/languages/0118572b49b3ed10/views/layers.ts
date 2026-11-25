import { defineView, doc, Direction, FigureType, Shape, ViewGroup, ViewName, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** The whole graph, ordered by distance to the goals: the goals at the top, what follows from them below. */
export default defineView({
  name: ViewName.layers,
  label: say.layersLayers(),
  group: ViewGroup.figure,
  run(c) {
    const { counts } = c.lib
    const nodes = c.all().where((v) => !v.repealedBy).nodes()
    const roots = nodes.filter((v) => c.kindOf(v).root)
    const dist = new Map<string, number>(roots.map((r) => [r.ref, counts.zero]))
    const queue: View[] = [...roots]
    while (counts.any(queue)) {
      const v = queue.shift()!
      for (const e of [...c.edges(v, Direction.out), ...c.edges(v, Direction.in)]) {
        if (e.derived || e.other.repealedBy || dist.has(e.other.ref)) continue
        dist.set(e.other.ref, counts.next(dist.get(v.ref)!))
        queue.push(e.other)
      }
    }
    const far = counts.next(counts.largest([...dist.values()]))
    return {
      title: say.layersLayers(),
      intro: say.layersIntroduction(doc.date(c.today)),
      blocks: [doc.figure({
        type: FigureType.graph,
        shape: Shape.layers,
        nodes: nodes.map((v) => c.figureNode(v, dist.get(v.ref) ?? far)),
        edges: c.figureEdges(nodes),
        groups: c.modules().map((m) => ({ id: m.id, label: m.title })),
      }, say.layersEachRankIsOneEdgeFurther())],
    }
  },
})
