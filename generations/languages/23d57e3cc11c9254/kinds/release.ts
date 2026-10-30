import { defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, KindName, LanguageUse, type Block, type Lib, type Node, type View } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(say.releaseReleasedBy()),
  version: field.text(say.releaseVersion()),
  date: field.text(say.releaseReleasedOn()),
  what: field.text(say.amendmentWhatChanges()),
  fingerprint: field.text(say.releaseFingerprint()),
  language: field.text(say.componentLanguage()),
  archive: optional(field.text(say.releaseLanguageArchived())),
  differences: optional(field.text(say.releaseAcceptedDifferences())),
}
const F = keysOf(fields)

const edges = {
  component: edge.one([KindName.component], { label: say.releaseReleases(), inverse: say.releaseReleasedAs() }),
  assembledBy: optionalEdge(edge.one([KindName.release], { label: say.releaseAssembledBy(), inverse: say.releaseAssembled(), acyclic: true })),
}
const E = keysOf(edges)

/** The names of a release's fields and edges: the views that read one name them by these. */
export const releaseFields = F
export const releaseEdges = E

/** A text field of a release, or nothing. */
const textOf = (self: View, name: string, lib: Lib): string => {
  const x = self.field(name)
  return lib.values.isText(x) ? x : lib.texts.empty
}

/**
 * A release: a component frozen at a version, what changed in it, its fingerprint, the release that assembled it (for
 * an engine that builds itself). Its date is a fact of the past, not a date the graph changes at: it is a text, which
 * no view takes for a candidate date. It says how it reaches its language: through the repository's, which it shares
 * with the releases after it, or a copy of its own; the archive names the language it was released with, kept so that
 * it can receive that copy the day the language changes in a way it cannot follow.
 */
const kind = defineKind({
  name: KindName.release,
  label: { one: say.releaseRelease(), many: say.releaseReleases() },
  renderOwns: [F.version, F.date, F.what, F.fingerprint, F.language, F.archive, F.differences],
  fields,
  edges,

  holes(self, g) {
    const { dates, sequences } = g.lib
    const out = []
    const text = (name: string) => textOf(self, name, g.lib)
    if (!dates.isCalendarDate(text(F.date))) out.push(hole.error(say.releaseItsDateIsNotACalendar(), self.owner))
    if (!Object.values(LanguageUse).includes(text(F.language) as LanguageUse)) {
      out.push(hole.error(say.releaseItsLanguageIsNeitherNor(LanguageUse.shared, LanguageUse.own), self.owner))
    }
    if (!text(F.fingerprint)) out.push(hole.error(say.releaseNoFingerprintNothingSaysWhatWas(), self.owner))
    const component = sequences.head(g.from(self).out(E.component).nodes())
    for (const by of g.from(self).out(E.assembledBy).nodes()) {
      const theirs = sequences.head(g.from(by).out(E.component).nodes())
      if (theirs && component && theirs.node !== component.node) {
        out.push(hole.error(say.releaseAssembledByAReleaseOfAnother(by.title), self.owner))
      }
    }
    return out
  },

  render(self, g) {
    const { dates, sequences } = g.lib
    const text = (name: string) => textOf(self, name, g.lib)
    const by = sequences.head(g.from(self).out(E.assembledBy).nodes())
    const component = sequences.head(g.from(self).out(E.component).nodes())
    const date = text(F.date)
    const facts: { label: string; value: ReturnType<typeof doc.ident>[] }[] = [
      { label: say.releaseVersion(), value: [doc.ident(text(F.version))] },
      { label: say.releaseReleasedOn(), value: dates.isCalendarDate(date) ? [doc.date(date)] : [date] },
      { label: say.releaseFingerprint(), value: [doc.ident(text(F.fingerprint))] },
      { label: say.componentLanguage(), value: [text(F.language) === LanguageUse.own ? say.releaseACopyOfItsOwn() : say.releaseTheRepositorySShared()] },
    ]
    const archive = text(F.archive)
    if (archive) facts.push({ label: say.releaseLanguageArchived(), value: [doc.ident(archive)] })
    const differences = text(F.differences)
    if (differences) facts.push({ label: say.releaseAcceptedDifferences(), value: [doc.ident(differences)] })
    const blocks: Block[] = [
      doc.para(text(F.what)),
      doc.para(...say.releaseOrigin(component && doc.ref(component), by && doc.ref(by))),
      doc.facts(facts),
    ]
    return blocks
  },
})

interface ReleaseInput {
  owner: string
  /** The component released. */
  component: Node<"component">
  /** Its version: the name of its folder, for a generation of an engine. */
  version: string
  /** The day it was released (YYYY-MM-DD). */
  date: string
  /** What changes in it. */
  what: string
  /** What was frozen: the program and the code it imports, hashed. */
  fingerprint: string
  /** How it reaches its language. */
  language: LanguageUse
  /** The fingerprint of the language it was released with, archived beside the releases. */
  archive?: string
  /** The differences that were accepted when it was released, kept beside it. */
  differences?: string
  /** The release that assembled it. */
  assembledBy?: Node<"release">
}

/** `release({ owner, component: TrameCli, version: "g38", date: "2026-10-23", what, fingerprint, language: "shared", assembledBy: G37 })` */
export function release(input: ReleaseInput): Node<"release"> {
  return kind(input as never) as never
}

export const releaseKind = kind
