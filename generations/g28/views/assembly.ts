import { defineView, doc, plural, Shape, Stage, ViewGroup, ViewScope, WireMode, type Block, type Inline, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * What a component would become in each environment: which nodes are built, in which order, with what, and which
 * implementation answers each port. This is the plan that `trame assemble` writes.
 */
export default defineView({
  name: "assembly",
  label: say.assemblyAssembly(),
  group: ViewGroup.node,
  per: ViewScope.node,
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
      if (p.errors.length) return doc.section(env.title, [doc.summary(say.assemblyCannotBeAssembledIn(env.title)), doc.list(p.errors.map((e) => [e]))], env.id)

      // The ports, and what answers each of them in this environment.
      const ports = p.steps.filter((s) => s.via.length).flatMap((s) => s.via.map((port) => [[doc.ref(port)], [doc.ref(s.node)], port.effects.length ? [port.effects.join(", ")] : ["none"]] as Inline[][]))
      const order = p.steps.map((s, i): Inline[][] => [
        [String(i + 1)],
        [doc.ref(s.node)],
        [s.how === WireMode.value ? say.assemblyItsValueReadAtStartup() : say.assemblyItsBody()],
        s.deps.length ? s.deps.flatMap((d, j) => [...(j ? [" · "] : []), doc.ident(d.param), " ← ", doc.ref(d.node)]) : ["—"],
      ])

      // The figure: the entry points at the top, then what each one depends on; under each port, what implements it here.
      const implOf = new Map(p.steps.flatMap((s) => s.via.map((x) => [x.ref, s.node] as const)))
      const depth = new Map<string, number>()
      const place = (v: View, d: number) => {
        if ((depth.get(v.ref) ?? -1) >= d) return
        depth.set(v.ref, d)
        const impl = implOf.get(v.ref)
        if (impl) return place(impl, d + 1)
        for (const x of v.dependencies) if (x.stage === Stage.execution) place(x.node, d + 1)
      }
      for (const v of needed) place(v, 0)
      const nodes = [...p.steps.map((s) => s.node), ...p.steps.flatMap((s) => s.via)]
      const layerOf = (v: View) => depth.get(v.ref) ?? 0
      const shown = new Set(nodes.map((v) => v.ref))
      const edges = c.figureEdges(nodes).filter((e) => shown.has(e.from) && shown.has(e.to) && (e.label === say.assemblyDependsOn() || e.label === say.assemblyImplements()))

      return doc.section(env.title, [
        doc.summary(`${plural(p.steps.length, say.assemblyNodeBuilt(), say.assemblyNodesBuilt())}, ${plural(ports.length, say.assemblyPortWired(), say.assemblyPortsWired())}`),
        doc.table([say.assemblyPort(), say.assemblyImplementedBy(), say.assemblyDeclaredEffects()], ports),
        doc.figure({ type: "graph", shape: Shape.layers, nodes: nodes.map((v) => c.figureNode(v, layerOf(v))), edges, groups: [] }, say.assemblyTheWiringIn(env.title)),
        doc.details(say.assemblyBuildOrder(), [doc.table(["", say.assemblyNode(), say.assemblyGives(), say.assemblyReceives()], order)]),
      ], env.id)
    })

    return {
      title: say.assemblyAssembly2(comp.title),
      intro: [
        say.assemblyWhat(), doc.ref(comp), say.assemblyBecomesInEachEnvironmentWithThe(), doc.date(c.today), say.assemblyEntryPoints(),
        ...refs(entries), ". ", doc.ident(say.assemblyTrameAssemble()), say.assemblyWritesThisPlanIntoAProgram(),
      ],
      blocks: sections,
    }
  },
})
