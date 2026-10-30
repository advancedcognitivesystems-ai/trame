import { defineView, doc, Nature, Shape, ViewGroup, ViewScope, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** Why this node exists: the shortest path to a goal. */
export default defineView({
  name: "why",
  label: say.whyWhy(),
  group: ViewGroup.node,
  per: ViewScope.node,
  order: 20,
  run(c, { node }) {
    const start = node!
    const title = say.whyWhy2(start.title)
    const intro = [say.whyTheShortestPathFrom(), doc.ref(start), say.whyToAGoal()]
    if (c.kindOf(start).root) return { title, intro, blocks: [doc.para(doc.ref(start), say.whyIsAGoalItIsThe())] }
    const roots = c.all().where((v) => c.kindOf(v).root).nodes()
    const path = roots
      .map((r) => c.from(start).path(r))
      .filter((p): p is View[] => !!p)
      .sort((a, b) => a.length - b.length)[0]
    if (!path) return { title, intro, blocks: [doc.para(doc.ref(start), say.whyIsConnectedToNoGoal())] }
    const pairs = new Set(path.slice(1).map((v, i) => `${path[i].ref}|${v.ref}`))
    return {
      title,
      intro,
      blocks: [doc.figure({
        type: "graph",
        shape: Shape.path,
        focus: start.ref,
        nodes: path.map((v, i) => c.figureNode(v, i)),
        edges: c.figureEdges(path).filter((e) => e.nature !== Nature.computed && (pairs.has(`${e.from}|${e.to}`) || pairs.has(`${e.to}|${e.from}`))),
        groups: [],
      })],
    }
  },
})
