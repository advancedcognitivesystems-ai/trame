import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, Status, KindName, EdgeName, ArtifactField, ArtifactEdge, DeliveryField, EvidenceSource,
  ShipmentEdge, type Node, type View, type Evidence, type Provides, type Graph,
} from "../trame/kernel"
import { wiredBy } from "./scenario"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [ArtifactField.path]: optional(field.value<string>(say.artifactPath())),
  [ArtifactField.media]: optional(field.value<string>(say.artifactMedia())),
}
const F = keysOf(fields)
const edges = {
  [ArtifactEdge.producedBy]: edge.one(
    [KindName.delivery, KindName.entry, KindName.release, KindName.component, KindName.syntax],
    { label: say.artifactProducedBy(), inverse: say.artifactProduces() },
  ),
  [ArtifactEdge.runs]: optionalEdge(edge.one([KindName.shipment], { label: say.artifactRuns(), inverse: say.artifactRunElsewhereBy() })),
  [ArtifactEdge.settings]: optionalEdge(edge.one([KindName.decision], { label: say.artifactSettings(), inverse: say.artifactSets() })),
  [ArtifactEdge.publishes]: optionalEdge(edge.many([KindName.artifact], { label: say.artifactPublishes(), inverse: say.artifactPublishedBy() })),
  // The programs it carries, assembled for where they run (a page carries the component that shows it, for the browser),
  // when what produces it does not say so (a delivery does: its component).
  [ArtifactEdge.carries]: optionalEdge(edge.many([KindName.component], { label: say.artifactCarries(), inverse: say.artifactCarriedBy() })),
}
const E = keysOf(edges)

/** The latest evidence of a node from a source, if any. */
export const latestOf = (v: View, source: string): Evidence | undefined =>
  v.evidence.filter((e) => e.source === source).reduce<Evidence | undefined>((_, e) => e, undefined)

/** Where an artefact lives: the path it declares, or where the delivery that produces it writes it. */
export const pathOf = (v: View, g: Graph): string | undefined => {
  const declared = v.field(ArtifactField.path)
  if (g.lib.values.isText(declared)) return declared
  const producer = g.from(v).out(ArtifactEdge.producedBy).first()
  const output = producer?.kind === KindName.delivery ? producer.field(DeliveryField.output) : undefined
  return g.lib.values.isText(output) ? output : undefined
}

/** The fingerprint of an artefact as last built, if it was. */
export const builtFingerprint = (v: View): string | undefined => latestOf(v, EvidenceSource.built)?.fingerprint

/** What an artefact computes once: where it lives, and the code it is made from. */
interface Made { path?: string; code?: string }

/**
 * The fingerprint of an artefact as last built, when it was built from the code as it is now (or the engine does not
 * say what its code is); none otherwise: an artefact built from older code is to build again.
 */
export const builtNow = (v: View): string | undefined => {
  const built = latestOf(v, EvidenceSource.built)
  const code = v.result<Made>()?.code
  return built?.fingerprint !== undefined && (code === undefined || built.code === code) ? built.fingerprint : undefined
}

/**
 * The nodes an artefact is made from: itself, what produces it and, for a program, every node it wires where the
 * artefact goes (a delivery's environment; the environment of the shipments that ship it, or any); for a writer, the
 * shipment it runs elsewhere and its settings; the components it carries, wherever they can be assembled.
 */
const madeOf = (self: View, g: Graph): View[] => {
  const producer = g.from(self).out(ArtifactEdge.producedBy).first()
  const environments = g.all(KindName.environment).nodes()
  const shipped = g.from(self).in(ShipmentEdge.ships).nodes().flatMap((s) => g.from(s).out(ShipmentEdge.environment).nodes())
  const where = g.lib.counts.any(shipped) ? shipped : environments
  const entriesOf = (c: View) => g.from(c).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes()
  const program = (entries: View[], component: View | undefined, envs: View[]) =>
    envs.flatMap((env) => wiredBy(g, [...entries, ...(component?.dependencies.map((d) => d.node) ?? [])], env))
  const delivered = producer?.kind === KindName.delivery ? g.from(producer).out(EdgeName.delivers).first() : undefined
  const made =
    delivered && producer ? program(entriesOf(delivered), delivered, g.from(producer).out(EdgeName.environment).nodes())
    : producer?.kind === KindName.component ? program(entriesOf(producer), producer, where)
    : producer?.kind === KindName.entry ? program([producer], g.from(producer).out(EdgeName.partOf).first(), where)
    : [...g.from(self).out(ArtifactEdge.runs).nodes(), ...g.from(self).out(ArtifactEdge.settings).nodes()]
  const carried = g.from(self).out(ArtifactEdge.carries).nodes().flatMap((c) => program(entriesOf(c), c, environments))
  return [self, ...(producer ? [producer] : []), ...made, ...carried]
}

/**
 * An artefact: what a project produces to ship it (a page, a program, a library's release, a dossier of evidence, the
 * file that runs a shipment elsewhere), where it lives in the project (where its delivery writes it, unless it says),
 * its media type, and what produces it. A writer (a syntax element: a workflow of continuous integration, a script)
 * writes the plan the engine computes to run the shipment the artefact names elsewhere, with the settings it is given;
 * what that place makes available once shipped is what the artefact publishes, and nothing else.
 * Wired, it gives where it lives: a program of the SDLC names the artefact, not its path. trame ship builds it and records its
 * fingerprint with the code it was made from; it holds while that code is the code as it is, and the checks of the
 * artefact hold for that build; a deployment records where it was published.
 */
const kind = defineKind({
  name: KindName.artifact,
  label: { one: say.artifactArtifact(), many: say.artifactArtifacts() },
  renderOwns: [F.path, F.media],
  fields,
  edges,

  // Where it lives and the code it is made from, computed once: the engine reads them here to produce it, to fingerprint
  // it and to record what made it.
  evaluate: (self, g): Made => ({ [F.path]: pathOf(self, g), code: g.code?.(madeOf(self, g)) }),

  // Wired, an artefact gives where it lives and its media type: a program of the SDLC names it, not its path.
  provide: (self, ctx) => ({ [F.path]: pathOf(self, ctx.g), ...(self.field(F.media) === undefined ? {} : { [F.media]: self.field(F.media) }) }),

  status: (self) => (builtNow(self) === undefined ? Status.unknown : Status.held),

  holes: (self, g) => [
    pathOf(self, g) === undefined && hole.error(say.artifactWithoutPath(), self.owner),
    g.from(self).out(E.producedBy).first()?.kind === KindName.syntax && !g.from(self).out(E.runs).exists() && hole.error(say.artifactRunsNothing(), self.owner),
    g.from(self).out(E.publishes).exists() && g.from(self).out(E.producedBy).first()?.kind !== KindName.syntax && hole.error(say.artifactPublishesWithoutWriter(), self.owner),
    builtFingerprint(self) === undefined && hole.warning(say.artifactNotBuilt(), self.owner),
    builtFingerprint(self) !== undefined && builtNow(self) === undefined && hole.warning(say.artifactBuiltFromOlderCode(), self.owner),
  ],

  render(self, g) {
    const { values } = g.lib
    const built = latestOf(self, EvidenceSource.built)
    const media = self.field(F.media)
    const published = self.evidence.filter((e) => e.source === EvidenceSource.deployed && values.isText(e.url))
    return [
      doc.facts([
        { label: say.artifactPath(), value: [doc.ident(pathOf(self, g) ?? g.lib.texts.empty)] },
        ...(values.isText(media) ? [{ label: say.artifactMedia(), value: [doc.ident(media)] }] : []),
      ]),
      ...(built ? [doc.para(...say.artifactBuilt(doc.date(built.at), built.by ?? self.owner ?? g.lib.texts.empty, doc.ident(built.fingerprint ?? g.lib.texts.empty)))] : []),
      ...published.map((e) => doc.para(...say.artifactPublished(doc.date(e.at), doc.ident(e.url ?? g.lib.texts.empty)))),
    ]
  },
})

interface ArtifactInput {
  owner: string
  /** Where it lives, from the project's root; where its delivery writes it when a delivery produces it. */
  path?: string
  /** Its media type, as its standard names it. */
  media?: string
  /** What produces it: a delivery, a command of the SDLC, a component assembled, a release, a writer. */
  producedBy: Node<typeof KindName.delivery | typeof KindName.entry | typeof KindName.release | typeof KindName.component | typeof KindName.syntax>
  /** Written by a writer: the shipment whose plan it writes, to run it elsewhere. */
  runs?: Node<typeof KindName.shipment>
  /** Written by a writer: the settings it is given (when it runs, on what, with which runtime, what it keeps). */
  settings?: Node<typeof KindName.decision>
  /** Written by a writer: what that place makes available once the shipment shipped; nothing unless named here. */
  publishes?: readonly Node<typeof KindName.artifact>[]
  /** The programs it carries, assembled for where they run, when what produces it does not say so. */
  carries?: readonly Node<typeof KindName.component>[]
}

/** `artifact({ owner, path: "dist/poselia.html", media: "text/html", producedBy: PoseliaPage })` */
export function artifact(input: ArtifactInput): Node<typeof KindName.artifact> & Provides<{ path: string; media?: string }> {
  return kind(input as never) as never
}

export const artifactKind = kind
