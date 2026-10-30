import { defineView, doc, type Block, type FigureEdge } from "../trame/kernel"

/** Chaque recoupement de revendications : la cible, ceux qui la revendiquent, qui l'emporte, et sur quoi la décision s'appuie. */
export default defineView({
  name: "recoupements",
  label: "Recoupements",
  group: "figure",
  order: 30,
  run(c) {
    const blocks: Block[] = []
    for (const r of c.resolutions()) {
      const nodes = [r.target, ...r.claimants, ...r.because]
      const claimEdges: FigureEdge[] = r.claimants.map((a) => ({
        from: a.ref, to: r.target.ref, label: "Revendique", inverse: "Revendiqué par", nature: "déclarée", active: true,
        role: r.outcome === "contesté" ? "contesté"
          : r.applied.some((x) => x.ref === a.ref) ? "gagnant"
            : r.replaced.some(([, lost]) => lost.ref === a.ref) ? "remplacé" : "écarté",
      }))
      const support = c.figureEdges([...r.because, ...r.claimants])
        .filter((e) => e.nature === "calculée" || r.because.some((b) => b.ref === e.from))
        .map((e): FigureEdge => (e.nature === "calculée" ? e : { ...e, role: "appui" }))
      blocks.push(doc.section(`${r.target.title} · ${r.paths.join(", ")}`, [
        doc.figure({
          type: "graph",
          shape: "arbre",
          focus: r.target.ref,
          nodes: nodes.map((v, i) => c.figureNode(v, i === 0 ? 0 : r.claimants.includes(v) ? 1 : 2)),
          edges: [...claimEdges, ...support],
          groups: [],
        }),
        c.resolution(r),
      ]))
    }
    if (!blocks.length) blocks.push(doc.para("Aucun recoupement le ", doc.date(c.today), " : aucune valeur n'est revendiquée par deux nœuds à la fois."))
    return { title: "Recoupements", intro: ["Les valeurs revendiquées par plusieurs nœuds le ", doc.date(c.today), ", et comment chaque recoupement a été tranché."], blocks }
  },
})
