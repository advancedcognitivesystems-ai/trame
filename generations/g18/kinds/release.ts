import { defineKind, field, optional, edge, optionalEdge, hole, doc, type Block, type Node, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** How a release reaches the language it runs on: through the repository's (shared), or a copy of its own. */
export const LanguageUse = { shared: "shared", own: "own" } as const
export type LanguageUse = (typeof LanguageUse)[keyof typeof LanguageUse]

/** A calendar day, as ISO 8601 writes it: what a release's date must be. */
const day = /^\d{4}-\d{2}-\d{2}$/

/**
 * A release: a component frozen at a version, what changed in it, its fingerprint, the release that assembled it (for
 * an engine that builds itself). Its date is a fact of the past, not a date the graph changes at: it is a text, which
 * no view takes for a candidate date. It says how it reaches its language: through the repository's, which it shares
 * with the releases after it, or a copy of its own; the archive names the language it was released with, kept so that
 * it can receive that copy the day the language changes in a way it cannot follow.
 */
const kind = defineKind({
  name: "release",
  label: { one: say.releaseRelease(), many: say.releaseReleases() },
  order: 105,
  renderOwns: ["version", "date", "what", "fingerprint", "language", "archive", "differences"],
  fields: {
    owner: field.owner(say.releaseReleasedBy()),
    version: field.text(say.releaseVersion()),
    date: field.text(say.releaseReleasedOn()),
    what: field.text(say.amendmentWhatChanges()),
    fingerprint: field.text(say.releaseFingerprint()),
    language: field.text(say.componentLanguage()),
    archive: optional(field.text(say.releaseLanguageArchived())),
    differences: optional(field.text(say.releaseAcceptedDifferences())),
  },
  edges: {
    component: edge.one(["component"], { label: say.releaseReleases(), inverse: say.releaseReleasedAs() }),
    assembledBy: optionalEdge(edge.one(["release"], { label: say.releaseAssembledBy(), inverse: say.releaseAssembled(), acyclic: true })),
  },

  holes(self, g) {
    const out = []
    const text = (x: unknown) => (typeof x === "string" ? x : "")
    if (!day.test(text(self.field("date")))) out.push(hole.error(say.releaseItsDateIsNotACalendar(), self.owner))
    if (!Object.values(LanguageUse).includes(text(self.field("language")) as LanguageUse)) {
      out.push(hole.error(say.releaseItsLanguageIsNeitherNor(LanguageUse.shared, LanguageUse.own), self.owner))
    }
    if (!text(self.field("fingerprint"))) out.push(hole.error(say.releaseNoFingerprintNothingSaysWhatWas(), self.owner))
    const component = g.from(self).out("component").nodes()
    for (const by of g.from(self).out("assembledBy").nodes()) {
      const theirs = g.from(by).out("component").nodes()
      if (theirs.length && component.length && theirs[0].node !== component[0].node) {
        out.push(hole.error(say.releaseAssembledByAReleaseOfAnother(by.title), self.owner))
      }
    }
    return out
  },

  render(self, g) {
    const text = (x: unknown) => (typeof x === "string" ? x : "")
    const by = g.from(self).out("assembledBy").nodes()
    const component = g.from(self).out("component").nodes()
    const facts: { label: string; value: ReturnType<typeof doc.ident>[] }[] = [
      { label: say.releaseVersion(), value: [doc.ident(text(self.field("version")))] },
      { label: say.releaseReleasedOn(), value: day.test(text(self.field("date"))) ? [doc.date(text(self.field("date")))] : [text(self.field("date"))] },
      { label: say.releaseFingerprint(), value: [doc.ident(text(self.field("fingerprint")))] },
      { label: say.componentLanguage(), value: [text(self.field("language")) === LanguageUse.own ? say.releaseACopyOfItsOwn() : say.releaseTheRepositorySShared()] },
    ]
    const archive = text(self.field("archive"))
    if (archive) facts.push({ label: say.releaseLanguageArchived(), value: [doc.ident(archive)] })
    const differences = text(self.field("differences"))
    if (differences) facts.push({ label: say.releaseAcceptedDifferences(), value: [doc.ident(differences)] })
    const blocks: Block[] = [
      doc.para(text(self.field("what"))),
      doc.para(
        ...(component.length ? [say.releaseReleases2(), doc.ref(component[0] as View)] : []),
        ...(by.length ? [component.length ? say.releaseAssembledBy2() : say.releaseAssembledBy3(), doc.ref(by[0] as View), "."] : [component.length ? say.releaseTheFirstRelease() : say.releaseTheFirstRelease2()]),
      ),
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
