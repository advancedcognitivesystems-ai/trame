import { defineView, doc, plural, type View } from "../trame/kernel"
import { listOf } from "./lib/claims"

/** Tout ce qui dépend d'un nœud, directement ou non. */
export default defineView({
  name: "impact",
  label: "Impact",
  group: "nœud",
  per: "nœud",
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
    const blocked = dependents.filter((v) => v.status === "bloqué" || v.status === "violé")
    return {
      title: `Impact · ${start.title}`,
      intro: ["Ce qui dépend de ", doc.ref(start), ", directement ou non, le ", doc.date(c.today), "."],
      blocks: [
        doc.summary(dependents.length
          ? `${plural(dependents.length, "nœud dépend", "nœuds dépendent")} de « ${start.title} »${blocked.length ? `, dont ${blocked.length} bloqué${blocked.length > 1 ? "s" : ""} ou violé${blocked.length > 1 ? "s" : ""}` : ""}`
          : `Rien ne dépend de « ${start.title} »`),
        doc.figure({
          type: "graph",
          shape: "arbre",
          focus: start.ref,
          nodes: reached.map((v) => c.figureNode(v, depth.get(v.ref)!)),
          edges: c.figureEdges(reached).filter((e) => e.nature !== "calculée"),
          groups: [],
        }),
        ...(blocked.length ? [doc.para("À regarder : ", ...listOf(blocked.map(doc.ref)), ".")] : []),
      ],
    }
  },
})
