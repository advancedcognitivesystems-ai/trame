import { defineView, doc, frDate, plural, type Block } from "../trame/kernel"

/** Ce que `trame build` affiche : le graphe en chiffres, les statuts, les recoupements, ce qui reste à traiter. */
export default defineView({
  name: "bilan",
  label: "Bilan du build",
  group: "bilan",
  order: 10,
  run(c) {
    const nodes = c.all().nodes()
    const n = c.counts()
    const kinds = c.kinds()
    const blocks: Block[] = [doc.table(["Module", "Contenu"], c.modules().map((m) => [
      [m.id],
      [kinds
        .map((k) => [k, nodes.filter((v) => v.module === m.id && v.kind === k.name).length] as const)
        .filter(([, count]) => count)
        .map(([k, count]) => `${count} ${(count > 1 ? k.label.many : k.label.one).toLowerCase()}`)
        .join(" · ")],
    ]))]
    const withStatus = nodes.filter((v) => v.status)
    if (withStatus.length) blocks.push(doc.section("Statuts", [doc.table(["Nœud", "Statut"], withStatus.map((v) => [[doc.ident(v.id)], [doc.status(v.status!)]]))]))
    const conflicts = c.resolutions()
    if (conflicts.length) blocks.push(doc.section("Recoupements", conflicts.map(c.resolution)))
    const issues = c.issues()
    if (issues.length) blocks.push(doc.section("À traiter", [doc.issues(issues.map(c.issueItem))]))
    return {
      title: `trame build · ${frDate(c.today)} · ${plural(c.modules().length, "module")} · ${plural(nodes.length, "nœud")} · ${plural(n.edges, "arête")}, dont ${n.inferred} déduites du code${n.derived ? ` et ${plural(n.derived, "calculée")}` : ""}`,
      blocks,
    }
  },
})
