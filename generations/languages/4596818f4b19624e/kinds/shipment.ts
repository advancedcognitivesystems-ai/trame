import {
  defineKind, field, edge, optionalEdge, hole, doc, keysOf, fieldsOf, Status, Severity, KindName, EdgeName, AnyTarget, ShipmentField, ShipmentEdge,
  ArtifactEdge, CheckEdge, PolicyEdge, ObligationField, EvidenceSource,
  type Node, type View, type Graph, type GraphSketch, type ObligationReach, type ObligationFinding, type DerivedObligation,
} from "../trame/kernel"
import { latestOf } from "./artifact"
import { requirement } from "./requirement"
import { sketchOf, resolved } from "./rule"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [ShipmentField.target]: field.value<string>(say.shipmentTarget()),
}
const F = keysOf(fields)
const edges = {
  [ShipmentEdge.ships]: edge.many([KindName.artifact], { label: say.shipmentShips(), inverse: say.shipmentShippedBy() }),
  [ShipmentEdge.requires]: optionalEdge(edge.many([AnyTarget], { label: say.shipmentRequires(), inverse: say.shipmentRequiredBy() })),
  [ShipmentEdge.deploys]: optionalEdge(edge.many([KindName.entry], { label: say.shipmentDeploys(), inverse: say.shipmentDeploysFor() })),
  [ShipmentEdge.environment]: optionalEdge(edge.one([KindName.environment], { label: say.shipmentEnvironment(), inverse: say.shipmentRunsFor() })),
  [ShipmentEdge.policy]: optionalEdge(edge.one([KindName.policy], { label: say.shipmentPolicy(), inverse: say.shipmentFollowedBy() })),
}
const E = keysOf(edges)

/** A gap a shipment's policy finds: the reached node nothing proves, the obligation that found it, what it weighs. */
interface Gap { node: string; obligation: string; weight?: string }

/** What a shipment computes once: the obligations its policy derives, and the gaps it finds. */
interface Result { derived: DerivedObligation[]; gaps: Gap[] }

/**
 * What a shipment reaches: the artefacts it ships and what produces them; the programs behind them (a delivery's
 * component in its environment, an entry point's or a component's in the shipment's environment), and the programs it
 * runs to check its artefacts and to deploy, each with every node it wires there, as trame assemble would. A node of a
 * library frozen at a version is left out: its release covers it.
 */
const reachOf = (self: View, g: Graph): ObligationReach => {
  const shipped = g.from(self).out(E.ships).nodes()
  const environment = g.from(self).out(E.environment).first()
  const reached = new Map<string, View>()
  const covered = (v: View) => v.library !== undefined && g.libraryVersion?.(v.library) !== undefined
  const add = (v: View | undefined) => v && !covered(v) && reached.set(v.ref, v)
  const wire = (component: View | undefined, where: View | undefined) => {
    if (!component || !where) return
    const entries = g.from(component).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes()
    add(component)
    for (const step of g.plan([...component.dependencies.map((d) => d.node), ...entries], where).steps) add(step.node)
  }
  const program = (v: View | undefined) => {
    add(v)
    if (v?.kind === KindName.delivery) wire(g.from(v).out(EdgeName.delivers).first(), g.from(v).out(EdgeName.environment).first())
    if (v?.kind === KindName.entry) wire(g.from(v).out(EdgeName.partOf).first(), environment)
    if (v?.kind === KindName.component) wire(v, environment)
  }
  for (const a of shipped) {
    add(a)
    program(g.from(a).out(ArtifactEdge.producedBy).first())
    for (const c of g.from(a).in(CheckEdge.on).nodes()) program(g.from(c).out(CheckEdge.runs).first())
  }
  for (const d of g.from(self).out(E.deploys).nodes()) program(d)
  return { shipped: shipped.map((a) => a.ref), reached: [...reached.keys()] }
}

/** What a shipment must prove: its artefacts built, every node it requires, every node its policy derives. */
const obligations = (self: View, g: Graph): View[] => {
  const derived = (self.result<Result>()?.derived ?? []).flatMap((d) => g.node(d.node).nodes())
  return [...new Map([...g.from(self).out(E.ships).nodes(), ...g.from(self).out(E.requires).nodes(), ...derived].map((v) => [v.ref, v])).values()]
}

/**
 * A shipment: a version made available for a target (a preview, a public release, a generation), the artefacts it
 * ships, the policy it follows (the obligations it derives what it must prove from, from what it reaches), what it also
 * requires (what derivation cannot see), and the programs that deploy it. It holds when every obligation holds and no
 * gap blocks; each one that does not is an issue of its owner. trame ship builds the artefacts, runs the checks a
 * machine can run, refuses while an obligation does not hold, deploys, and records the dossier; the programs it runs
 * are assembled for the shipment's environment. The foundations (no literal, a sound graph) are proven by every
 * shipment, whatever its policy.
 */
const kind = defineKind({
  name: KindName.shipment,
  label: { one: say.shipmentShipment(), many: say.shipmentShipments() },
  renderOwns: [F.target],
  fields,
  edges,

  evaluate(self, g): Result {
    const policy = g.from(self).out(E.policy).first()
    if (!policy) return { derived: [], gaps: [] }
    const { values } = g.lib
    const reach = reachOf(self, g)
    const sketch: GraphSketch = sketchOf(g)
    const derived: DerivedObligation[] = []
    const gaps: Gap[] = []
    for (const o of g.from(policy).out(PolicyEdge.obligations).nodes()) {
      const run = g.from(o).out(EdgeName.applies).first()?.field(fieldsOf(requirement).rule)
      if (!values.isFunction(run)) continue
      const found = (run as unknown as (s: GraphSketch, r: ObligationReach, p: unknown) => ObligationFinding)(sketch, reach, resolved(o.field(ObligationField.params), g, sketch))
      const weight = o.field(ObligationField.gaps)
      derived.push(...(found?.obliged ?? []).map((x) => ({ node: x.node, via: x.via, obligation: o.ref })))
      gaps.push(...(found?.gaps ?? []).map((node) => ({ node, obligation: o.ref, ...(values.isText(weight) ? { weight } : {}) })))
    }
    return { derived: derived.filter((d, i) => derived.findIndex((x) => x.node === d.node) === i), gaps }
  },

  status(self, g) {
    const all = obligations(self, g).map((v) => v.status)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    const blocking = (self.result<Result>()?.gaps ?? []).some((x) => x.weight === Severity.error)
    return !blocking && g.lib.counts.any(all) && all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  holes: (self, g) => [
    ...obligations(self, g)
      .filter((v) => v.status !== Status.held)
      .map((v) => hole.warning(say.shipmentMissing(v.title, String(v.status ?? Status.unknown)), v.owner ?? self.owner)),
    ...(self.result<Result>()?.gaps ?? []).flatMap((x) => {
      const gap = g.node(x.node).first()
      const obligation = g.node(x.obligation).first()
      if (!gap || !obligation) return []
      if (x.weight === undefined) return [hole.error(say.obligationWeightless(obligation.title), obligation.owner)]
      // A gap that blocks keeps the shipment, not the graph: like an obligation unknown, the graph says it as a warning.
      return [hole.on(gap, hole.warning(say.shipmentGap(gap.title, obligation.title, x.weight === Severity.error ? self.title : undefined), gap.owner ?? self.owner))]
    }),
  ],

  render(self, g) {
    const { texts } = g.lib
    const last = latestOf(self, EvidenceSource.shipped)
    const derived = self.result<Result>()?.derived ?? []
    const originOf = (v: View) => {
      const d = derived.find((x) => x.node === v.ref)
      const obligation = d && g.node(d.obligation).first()
      const via = d && g.node(d.via).first()
      const shipped = g.from(self).out(E.ships).where((a) => a.ref === v.ref).exists()
      return obligation ? [doc.ref(obligation), ...(via && via.ref !== v.ref ? [say.shipmentVia(), doc.ref(via)] : [])] : [say.shipmentDeclared(shipped)]
    }
    return [
      doc.facts([{ label: say.shipmentTarget(), value: [doc.ident(String(self.field(F.target)))] }]),
      doc.table([say.shipmentObligation(), say.shipmentStatus(), say.shipmentOrigin()],
        obligations(self, g).map((v) => [[doc.ref(v)], [doc.status(v.status ?? Status.unknown)], originOf(v)])),
      last ? doc.para(...say.shipmentLast(doc.date(last.at), last.by ?? texts.empty, last.url ? doc.ident(last.url) : undefined)) : doc.para(say.shipmentNever()),
    ]
  },
})

interface ShipmentInput {
  owner: string
  /** Who it is for: a preview, a public release, a generation. */
  target: string
  /** The artefacts it ships. */
  ships: readonly Node<typeof KindName.artifact>[]
  /** The way of working it follows: the obligations it derives what it must prove from. */
  policy?: Node<typeof KindName.policy>
  /** What it must also prove, which derivation cannot see. */
  requires?: readonly Node[]
  /** The programs of the SDLC that deploy it, in order. */
  deploys?: readonly Node<typeof KindName.entry>[]
  /** The environment the programs of the SDLC (what produces an artefact, runs a check, deploys) are assembled for. */
  environment?: Node<typeof KindName.environment>
}

/** `shipment({ owner, target: "preview", ships: [Page], policy: PreviewMode, deploys: [PublishPage], environment: Machine })` */
export function shipment(input: ShipmentInput): Node<typeof KindName.shipment> {
  return kind(input as never) as never
}

export const shipmentKind = kind
