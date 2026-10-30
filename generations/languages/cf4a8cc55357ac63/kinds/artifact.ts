import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, Status, KindName, ArtifactField, ArtifactEdge, DeliveryField, EvidenceSource,
  type Node, type View, type Evidence, type Provides, type Graph,
} from "../trame/kernel"
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

/**
 * An artefact: what a project produces to ship it (a page, a program, a library's release, a dossier of evidence, the
 * file that runs a shipment elsewhere), where it lives in the project (where its delivery writes it, unless it says),
 * its media type, and what produces it. A writer (a syntax element: a workflow of continuous integration, a script)
 * writes the plan the engine computes to run the shipment the artefact names elsewhere, with the settings it is given.
 * Wired, it gives where it lives: a program of the SDLC names the artefact, not its path. trame ship builds it and records its
 * fingerprint; the checks of the artefact hold for that fingerprint; a deployment records where it was published.
 */
const kind = defineKind({
  name: KindName.artifact,
  label: { one: say.artifactArtifact(), many: say.artifactArtifacts() },
  renderOwns: [F.path, F.media],
  fields,
  edges,

  // Where it lives, computed once: the engine reads it here to produce it and to fingerprint it.
  evaluate: (self, g) => ({ [F.path]: pathOf(self, g) }),

  // Wired, an artefact gives where it lives and its media type: a program of the SDLC names it, not its path.
  provide: (self, ctx) => ({ [F.path]: pathOf(self, ctx.g), ...(self.field(F.media) === undefined ? {} : { [F.media]: self.field(F.media) }) }),

  status: (self) => (builtFingerprint(self) === undefined ? Status.unknown : Status.held),

  holes: (self, g) => [
    pathOf(self, g) === undefined && hole.error(say.artifactWithoutPath(), self.owner),
    g.from(self).out(E.producedBy).first()?.kind === KindName.syntax && !g.from(self).out(E.runs).exists() && hole.error(say.artifactRunsNothing(), self.owner),
    builtFingerprint(self) === undefined && hole.warning(say.artifactNotBuilt(), self.owner),
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
  /** Written by a writer: the settings it is given (when it runs, on what, with which runtime). */
  settings?: Node<typeof KindName.decision>
}

/** `artifact({ owner, path: "dist/poselia.html", media: "text/html", producedBy: PoseliaPage })` */
export function artifact(input: ArtifactInput): Node<typeof KindName.artifact> & Provides<{ path: string; media?: string }> {
  return kind(input as never) as never
}

export const artifactKind = kind
