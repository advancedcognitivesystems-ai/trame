import { defineView, doc, plural, type Block, type Inline, type View } from "../trame/kernel"

/**
 * Ce que deviendrait un composant dans chaque environnement : quels nœuds sont construits, dans quel ordre,
 * avec quoi, et quelle implémentation répond à chaque accès. C'est le plan qu'écrit `trame assemble`.
 */
export default defineView({
  name: "assemblage",
  label: "Assemblage",
  group: "nœud",
  per: "nœud",
  order: 40,
  applies: (v) => v.kind === "component",
  run(c, { node }) {
    const comp = node!
    const entries = c.from(comp).in("in").where((v) => v.kind === "entry").nodes()
    const needed = [...comp.dependencies.map((d) => d.node), ...entries]
    const listed = c.from(comp).out("environments").nodes()
    const envs = listed.length ? listed : c.all("environment").nodes()
    const refs = (vs: View[]): Inline[] => vs.flatMap((v, i) => [...(i ? [", "] : []), doc.ref(v)])

    const sections: Block[] = envs.map((env) => {
      const p = c.plan(needed, env)
      if (p.errors.length) return doc.section(env.title, [doc.summary(`Ne peut pas être assemblé dans « ${env.title} »`), doc.list(p.errors.map((e) => [e]))], env.id)

      // Les accès, et ce qui y répond dans cet environnement.
      const ports = p.steps.filter((s) => s.via.length).flatMap((s) => s.via.map((port) => [[doc.ref(port)], [doc.ref(s.node)], port.effects.length ? [port.effects.join(", ")] : ["aucun"]] as Inline[][]))
      const order = p.steps.map((s, i): Inline[][] => [
        [String(i + 1)],
        [doc.ref(s.node)],
        [s.how === "valeur" ? "sa valeur (lue au démarrage)" : "son corps"],
        s.deps.length ? s.deps.flatMap((d, j) => [...(j ? [" · "] : []), doc.ident(d.param), " ← ", doc.ref(d.node)]) : ["—"],
      ])

      // La figure : les points d'entrée en haut, puis ce dont chacun dépend ; sous chaque accès, ce qui le réalise ici.
      const implOf = new Map(p.steps.flatMap((s) => s.via.map((x) => [x.ref, s.node] as const)))
      const depth = new Map<string, number>()
      const place = (v: View, d: number) => {
        if ((depth.get(v.ref) ?? -1) >= d) return
        depth.set(v.ref, d)
        const impl = implOf.get(v.ref)
        if (impl) return place(impl, d + 1)
        for (const x of v.dependencies) if (x.stage === "exécution") place(x.node, d + 1)
      }
      for (const v of needed) place(v, 0)
      const nodes = [...p.steps.map((s) => s.node), ...p.steps.flatMap((s) => s.via)]
      const layerOf = (v: View) => depth.get(v.ref) ?? 0
      const shown = new Set(nodes.map((v) => v.ref))
      const edges = c.figureEdges(nodes).filter((e) => shown.has(e.from) && shown.has(e.to) && (e.label === "Dépend de" || e.label === "Réalise"))

      return doc.section(env.title, [
        doc.summary(`${plural(p.steps.length, "nœud construit", "nœuds construits")}, ${plural(ports.length, "accès branché", "accès branchés")}`),
        doc.table(["Accès", "Réalisé par", "Effets promis"], ports),
        doc.figure({ type: "graph", shape: "couches", nodes: nodes.map((v) => c.figureNode(v, layerOf(v))), edges, groups: [] }, `Le branchement dans « ${env.title} »`),
        doc.details("Ordre de construction", [doc.table(["", "Nœud", "Donne", "Reçoit"], order)]),
      ], env.id)
    })

    return {
      title: `Assemblage · ${comp.title}`,
      intro: [
        "Ce que ", doc.ref(comp), " devient dans chaque environnement, avec le graphe du ", doc.date(c.today), ". Points d'entrée : ",
        ...refs(entries), ". ", doc.ident("trame assemble"), " écrit ce plan dans un programme ; rien n'y est choisi au démarrage.",
      ],
      blocks: sections,
    }
  },
})
