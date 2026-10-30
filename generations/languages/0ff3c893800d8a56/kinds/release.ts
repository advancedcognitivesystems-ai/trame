import { defineKind, field, optional, edge, optionalEdge, hole, doc, type Block, type Node, type View } from "../trame/kernel"

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
  label: { one: "Release", many: "Releases" },
  order: 105,
  renderOwns: ["version", "date", "what", "fingerprint", "language", "archive", "differences"],
  fields: {
    owner: field.owner("Released by"),
    version: field.text("Version"),
    date: field.text("Released on"),
    what: field.text("What changes"),
    fingerprint: field.text("Fingerprint"),
    language: field.text("Language"),
    archive: optional(field.text("Language archived")),
    differences: optional(field.text("Accepted differences")),
  },
  edges: {
    component: edge.one(["component"], { label: "Releases", inverse: "Released as" }),
    assembledBy: optionalEdge(edge.one(["release"], { label: "Assembled by", inverse: "Assembled", acyclic: true })),
  },

  holes(self, g) {
    const out = []
    const text = (x: unknown) => (typeof x === "string" ? x : "")
    if (!day.test(text(self.field("date")))) out.push(hole.error("Its date is not a calendar day (YYYY-MM-DD)", self.owner))
    if (!Object.values(LanguageUse).includes(text(self.field("language")) as LanguageUse)) {
      out.push(hole.error(`Its language is neither "${LanguageUse.shared}" nor "${LanguageUse.own}"`, self.owner))
    }
    if (!text(self.field("fingerprint"))) out.push(hole.error("No fingerprint: nothing says what was frozen", self.owner))
    const component = g.from(self).out("component").nodes()
    for (const by of g.from(self).out("assembledBy").nodes()) {
      const theirs = g.from(by).out("component").nodes()
      if (theirs.length && component.length && theirs[0].node !== component[0].node) {
        out.push(hole.error(`Assembled by "${by.title}", a release of another component`, self.owner))
      }
    }
    return out
  },

  render(self, g) {
    const text = (x: unknown) => (typeof x === "string" ? x : "")
    const by = g.from(self).out("assembledBy").nodes()
    const component = g.from(self).out("component").nodes()
    const facts: { label: string; value: ReturnType<typeof doc.ident>[] }[] = [
      { label: "Version", value: [doc.ident(text(self.field("version")))] },
      { label: "Released on", value: day.test(text(self.field("date"))) ? [doc.date(text(self.field("date")))] : [text(self.field("date"))] },
      { label: "Fingerprint", value: [doc.ident(text(self.field("fingerprint")))] },
      { label: "Language", value: [text(self.field("language")) === LanguageUse.own ? "a copy of its own" : "the repository's, shared"] },
    ]
    const archive = text(self.field("archive"))
    if (archive) facts.push({ label: "Language archived", value: [doc.ident(archive)] })
    const differences = text(self.field("differences"))
    if (differences) facts.push({ label: "Accepted differences", value: [doc.ident(differences)] })
    const blocks: Block[] = [
      doc.para(text(self.field("what"))),
      doc.para(
        ...(component.length ? ["Releases ", doc.ref(component[0] as View)] : []),
        ...(by.length ? [component.length ? ", assembled by " : "Assembled by ", doc.ref(by[0] as View), "."] : [component.length ? ": the first release." : "The first release."]),
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
