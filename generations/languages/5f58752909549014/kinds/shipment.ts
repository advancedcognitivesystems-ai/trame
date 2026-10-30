import {
  defineKind, field, edge, optionalEdge, hole, doc, keysOf, Status, KindName, AnyTarget, ShipmentField, ShipmentEdge, EvidenceSource,
  type Node, type View, type Graph,
} from "../trame/kernel"
import { latestOf } from "./artifact"
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
}
const E = keysOf(edges)

/** What a shipment must prove: its artefacts built, and every node it requires held. */
const obligations = (self: View, g: Graph): View[] => [...g.from(self).out(E.ships).nodes(), ...g.from(self).out(E.requires).nodes()]

/**
 * A shipment: a version made available for a target (a preview, a public release, a generation), the artefacts it
 * ships, what it requires (checks, reviews, scenarios, rules, requirements…), and the programs that deploy it. It holds
 * when every obligation holds; each one that does not is an issue of its owner. trame ship builds the artefacts, runs
 * the checks a machine can run, refuses while an obligation does not hold, deploys, and records the dossier; the
 * programs it runs are assembled for the shipment's environment.
 */
const kind = defineKind({
  name: KindName.shipment,
  label: { one: say.shipmentShipment(), many: say.shipmentShipments() },
  renderOwns: [F.target],
  fields,
  edges,

  status(self, g) {
    const all = obligations(self, g).map((v) => v.status)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return g.lib.counts.any(all) && all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  holes: (self, g) =>
    obligations(self, g)
      .filter((v) => v.status !== Status.held)
      .map((v) => hole.warning(say.shipmentMissing(v.title, String(v.status ?? Status.unknown)), v.owner ?? self.owner)),

  render(self, g) {
    const { texts } = g.lib
    const last = latestOf(self, EvidenceSource.shipped)
    return [
      doc.facts([{ label: say.shipmentTarget(), value: [doc.ident(String(self.field(F.target)))] }]),
      doc.table([say.shipmentObligation(), say.shipmentStatus()], obligations(self, g).map((v) => [[doc.ref(v)], [doc.status(v.status ?? Status.unknown)]])),
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
  /** What must hold before it ships: checks, reviews, scenarios, rules, requirements… */
  requires?: readonly Node[]
  /** The programs of the SDLC that deploy it, in order. */
  deploys?: readonly Node<typeof KindName.entry>[]
  /** The environment the programs of the SDLC (what produces an artefact, runs a check, deploys) are assembled for. */
  environment?: Node<typeof KindName.environment>
}

/** `shipment({ owner, target: "preview", ships: [Page], requires: [PageOpens, ContentReviewed], deploys: [PublishPage] })` */
export function shipment(input: ShipmentInput): Node<typeof KindName.shipment> {
  return kind(input as never) as never
}

export const shipmentKind = kind
