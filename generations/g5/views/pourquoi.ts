import { defineView, doc, type View } from "../trame/kernel"

/** Pourquoi ce nœud existe : le plus court chemin jusqu'à un objectif. */
export default defineView({
  name: "pourquoi",
  label: "Pourquoi",
  group: "nœud",
  per: "nœud",
  order: 20,
  run(c, { node }) {
    const start = node!
    const title = `Pourquoi · ${start.title}`
    const intro = ["Le plus court chemin de ", doc.ref(start), " jusqu'à un objectif."]
    if (c.kindOf(start).root) return { title, intro, blocks: [doc.para(doc.ref(start), " est un objectif : c'est la raison d'être du reste.")] }
    const roots = c.all().where((v) => c.kindOf(v).root).nodes()
    const path = roots
      .map((r) => c.from(start).path(r))
      .filter((p): p is View[] => !!p)
      .sort((a, b) => a.length - b.length)[0]
    if (!path) return { title, intro, blocks: [doc.para(doc.ref(start), " n'est relié à aucun objectif.")] }
    const pairs = new Set(path.slice(1).map((v, i) => `${path[i].ref}|${v.ref}`))
    return {
      title,
      intro,
      blocks: [doc.figure({
        type: "graph",
        shape: "chemin",
        focus: start.ref,
        nodes: path.map((v, i) => c.figureNode(v, i)),
        edges: c.figureEdges(path).filter((e) => e.nature !== "calculée" && (pairs.has(`${e.from}|${e.to}`) || pairs.has(`${e.to}|${e.from}`))),
        groups: [],
      })],
    }
  },
})
