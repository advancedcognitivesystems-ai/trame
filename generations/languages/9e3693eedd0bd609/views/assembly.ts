import { defineView, doc, EdgeName, FigureType, KindName, Shape, Stage, ViewGroup, ViewName, ViewScope, WireMode, type Block, type Inline, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * What a component would become in each environment: which nodes are built, in which order, with what, and which
 * implementation answers each port. This is the plan that `trame assemble` writes.
 */
export default defineView({
  name: ViewName.assembly,
  label: say.assemblyAssembly(),
  group: ViewGroup.node,
  per: ViewScope.node,
  applies: (v) => v.kind === KindName.component,
  run(c, { node }) {
    const { counts, texts, lists, punctuation } = c.lib
    const comp = node!
    const entries = c.from(comp).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes()
    const needed = [...comp.dependencies.map((d) => d.node), ...entries]
    const listed = c.from(comp).out(EdgeName.environments).nodes()
    const envs = counts.any(listed) ? listed : c.all(KindName.environment).nodes()
    const refs = (vs: View[]): Inline[] => lists.enumeration(vs.map(doc.ref))

    const sections: Block[] = envs.map((env) => {
      const p = c.plan(needed, env)
      if (counts.any(p.errors)) return doc.section(env.title, [doc.summary(say.assemblyCannotBeAssembledIn(env.title)), doc.list(p.errors.map((e) => [e]))], env.id)

      // The ports, and what answers each of them in this environment.
      const ports = p.steps.filter((s) => counts.any(s.via)).flatMap((s) => s.via.map((port) =>
        [[doc.ref(port)], [doc.ref(s.node)], counts.any(port.effects) ? [texts.concat(lists.enumeration(port.effects))] : [say.assemblyNone()]] as Inline[][]))
      const order = p.steps.map((s, i): Inline[][] => [
        [String(counts.next(i))],
        [doc.ref(s.node)],
        [s.how === WireMode.value ? say.assemblyItsValueReadAtStartup() : say.assemblyItsBody()],
        counts.any(s.deps) ? s.deps.flatMap((d, j) => [...(j ? [punctuation.parts] : []), doc.ident(d.param), punctuation.givenBy, doc.ref(d.node)]) : [punctuation.absent],
      ])

      // The figure: the entry points at the top, then what each one depends on; under each port, what implements it here.
      const implOf = new Map(p.steps.flatMap((s) => s.via.map((x) => [x.ref, s.node] as const)))
      const depth = new Map<string, number>()
      const place = (v: View, d: number) => {
        const known = depth.get(v.ref)
        if (known !== undefined && known >= d) return
        depth.set(v.ref, d)
        const impl = implOf.get(v.ref)
        if (impl) return place(impl, counts.next(d))
        for (const x of v.dependencies) if (x.stage === Stage.execution) place(x.node, counts.next(d))
      }
      for (const v of needed) place(v, counts.zero)
      const nodes = [...p.steps.map((s) => s.node), ...p.steps.flatMap((s) => s.via)]
      const layerOf = (v: View) => depth.get(v.ref) ?? counts.zero
      const shown = new Set(nodes.map((v) => v.ref))
      const edges = c.figureEdges(nodes).filter((e) => shown.has(e.from) && shown.has(e.to) && (e.label === say.assemblyDependsOn() || e.label === say.assemblyImplements()))

      return doc.section(env.title, [
        doc.summary(say.assemblyBuiltAndWired(p.steps.length, ports.length)),
        doc.table([say.assemblyPort(), say.assemblyImplementedBy(), say.assemblyDeclaredEffects()], ports),
        doc.figure({ type: FigureType.graph, shape: Shape.layers, nodes: nodes.map((v) => c.figureNode(v, layerOf(v))), edges, groups: [] }, say.assemblyTheWiringIn(env.title)),
        doc.details(say.assemblyBuildOrder(), [doc.table([texts.empty, say.assemblyNode(), say.assemblyGives(), say.assemblyReceives()], order)]),
      ], env.id)
    })

    return {
      title: say.assemblyAssembly2(comp.title),
      intro: say.assemblyIntroduction(doc.ref(comp), doc.date(c.today), refs(entries), doc.ident(say.assemblyTrameAssemble())),
      blocks: sections,
    }
  },
})
