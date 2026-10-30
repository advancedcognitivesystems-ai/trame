import { defineView, doc, FigureType, Nature, Shape, ViewGroup, ViewName, ViewScope, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** Why this node exists: the shortest path to a goal. */
export default defineView({
  name: ViewName.why,
  label: say.whyWhy(),
  group: ViewGroup.node,
  per: ViewScope.node,
  run(c, { node }) {
    const { sequences } = c.lib
    const start = node!
    const title = say.whyWhy2(start.title)
    const intro = [say.whyTheShortestPathFrom(), doc.ref(start), say.whyToAGoal()]
    if (c.kindOf(start).root) return { title, intro, blocks: [doc.para(doc.ref(start), say.whyIsAGoalItIsThe())] }
    const roots = c.all().where((v) => c.kindOf(v).root).nodes()
    const path = sequences.head(roots
      .map((r) => c.from(start).path(r))
      .filter((p): p is View[] => !!p)
      .sort((a, b) => a.length - b.length))
    if (!path) return { title, intro, blocks: [doc.para(doc.ref(start), say.whyIsConnectedToNoGoal())] }
    // Each node of the path, and the one after it: an edge of the figure joins two neighbours, in either direction.
    const after = new Map(sequences.rest(path).map((v, i) => [path[i].ref, v.ref]))
    const neighbours = (a: string, b: string) => after.get(a) === b || after.get(b) === a
    return {
      title,
      intro,
      blocks: [doc.figure({
        type: FigureType.graph,
        shape: Shape.path,
        focus: start.ref,
        nodes: path.map((v, i) => c.figureNode(v, i)),
        edges: c.figureEdges(path).filter((e) => e.nature !== Nature.computed && neighbours(e.from, e.to)),
        groups: [],
      })],
    }
  },
})
