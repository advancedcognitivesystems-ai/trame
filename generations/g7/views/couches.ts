import { defineView, doc, type View } from "../trame/kernel"

/** Tout le graphe, rangé par distance à l'objectif : les objectifs en haut, ce qui en découle en dessous. */
export default defineView({
  name: "couches",
  label: "Couches",
  group: "figure",
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
      title: "Couches",
      intro: ["Le graphe en vigueur le ", doc.date(c.today), ", rangé par distance à l'objectif."],
      blocks: [doc.figure({
        type: "graph",
        shape: "couches",
        nodes: nodes.map((v) => c.figureNode(v, dist.get(v.ref) ?? far)),
        edges: c.figureEdges(nodes),
        groups: c.modules().map((m) => ({ id: m.id, label: m.title })),
      }, "Chaque rang est à une arête de plus de l'objectif. Les nœuds reliés à aucun objectif sont tout en bas.")],
    }
  },
})
