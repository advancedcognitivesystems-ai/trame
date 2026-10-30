import { defineKind, field, optional, hole, doc, keysOf, Status, KindName, PackageField, PackageReport, type Evidence, type Lib, type Node, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** The last report of a kind, among a node's evidence. */
const last = (self: View, source: PackageReport, lib: Lib): Evidence | undefined => lib.sequences.last(self.evidence.filter((e) => e.source === source))

const fields = {
  owner: field.owner(),
  [PackageField.name]: field.text(say.packageName()),
  [PackageField.version]: field.text(say.packageVersion()),
  url: optional(field.text(say.packageUrl())),
  [PackageField.ceiling]: optional(field.text(say.packageHoldsBelow())),
  because: optional(field.text(say.packageBecause())),
}
const F = keysOf(fields)

/** A text field of a package, or nothing. */
const textOf = (self: View, name: string, lib: Lib): string => {
  const x = self.field(name)
  return lib.values.isText(x) ? x : lib.texts.empty
}
/** A text field a package may leave out. */
const optionalText = (self: View, name: string, lib: Lib): string | undefined => {
  const x = self.field(name)
  return lib.values.isText(x) ? x : undefined
}

/**
 * A package the code depends on: its name in the registry and the version the project installs. Its version is checked
 * against the project's lockfile; the registry's reports (trame audit) reach it as evidence, dated: its known
 * vulnerabilities, and how many releases that break what uses it it is behind the latest. A package may be held below a
 * version, for a reason the graph keeps: the releases beyond do not count as behind, and its version must stay below.
 * A package with a known vulnerability, or whose version the lockfile does not install, is violated (a warning: the
 * engine that writes the manifest must still be assembled); the implementations that use it say so.
 */
const kind = defineKind({
  name: KindName.package,
  label: { one: say.packagePackage(), many: say.packagePackages() },
  renderOwns: [F.packageName, F.version, F.url, F.holdsBelow, F.because],
  fields,
  edges: {},

  holes(self, g) {
    const { counts, versions } = g.lib
    const name = textOf(self, F.packageName, g.lib)
    const version = textOf(self, F.version, g.lib)
    const installed = g.installed?.(name)
    const out = []
    // The graph decides the version and the lockfile says what is installed: until trame manifest and npm install follow
    // the graph, the package is violated, but nothing stops the engine that writes the manifest from being assembled.
    if (g.installed && installed === undefined) out.push(hole.warning(say.packageNotInstalled(name), self.owner))
    if (installed !== undefined && installed !== version) out.push(hole.warning(say.packageDisagree(version, installed), self.owner))
    const ceiling = optionalText(self, F.holdsBelow, g.lib)
    if (ceiling !== undefined && !versions.below(version, ceiling)) out.push(hole.error(say.packageNotBelow(version, ceiling), self.owner))
    if (ceiling !== undefined && optionalText(self, F.because, g.lib) === undefined) out.push(hole.warning(say.packageHeldWithoutReason(ceiling), self.owner))
    const audit = last(self, PackageReport.audit, g.lib)
    const outdated = last(self, PackageReport.outdated, g.lib)
    // Known, and reported: the package is violated, and what uses it; it does not stop an assembly, which must still be
    // able to ship the version that fixes it.
    if (audit && audit.value > counts.zero) out.push(hole.warning(say.packageVulnerable(audit.value, audit.at), self.owner))
    if (outdated && outdated.value > counts.zero) out.push(hole.warning(say.packageBehind(outdated.value, outdated.note ?? g.lib.texts.empty, outdated.at), self.owner))
    if (!audit && !outdated) out.push(hole.warning(say.packageNoReport(), self.owner))
    return out
  },

  // Without a report, nothing is known of it (the lockfile's disagreement is a hole all the same).
  status(self, g) {
    const audit = last(self, PackageReport.audit, g.lib)
    if (!audit) return Status.unknown
    const installed = g.installed?.(textOf(self, F.packageName, g.lib))
    if (audit.value > g.lib.counts.zero || (g.installed && installed !== textOf(self, F.version, g.lib))) return Status.violated
    return Status.held
  },

  render(self, g) {
    const { counts } = g.lib
    const name = textOf(self, F.packageName, g.lib)
    const installed = g.installed?.(name)
    const audit = last(self, PackageReport.audit, g.lib)
    const outdated = last(self, PackageReport.outdated, g.lib)
    const ceiling = optionalText(self, F.holdsBelow, g.lib)
    const reported = (e: Evidence | undefined, said: string) => (e ? say.packageReported(said, e.at, e.url) : [say.packageNoReport()])
    return [
      doc.facts([
        { label: say.packageName(), value: say.packageNamed(doc.ident(name), optionalText(self, F.url, g.lib)) },
        { label: say.packageVersion(), value: [doc.ident(textOf(self, F.version, g.lib))] },
        { label: say.packageInstalled(), value: [installed !== undefined ? doc.ident(installed) : g.installed ? say.packageNotInstalled(name) : say.packageNotRead()] },
        { label: say.packageAudit(), value: reported(audit, audit && audit.value > counts.zero ? audit.note ?? String(audit.value) : say.packageNone()) },
        { label: say.packageOutdated(), value: reported(outdated, outdated?.note || say.packageUpToDate()) },
        ...(ceiling !== undefined ? [{ label: say.packageHoldsBelow(), value: say.packageHeldBelow(doc.ident(ceiling), optionalText(self, F.because, g.lib)) }] : []),
      ]),
    ]
  },
})

interface PackageInput {
  owner: string
  /** Its name in the registry. */
  packageName: string
  /** The version the project installs, as its lockfile says. */
  version: string
  /** Its page in the registry. */
  url?: string
  /** A version it stays below: the releases from there on are not taken. */
  holdsBelow?: string
  /** Why it stays below. */
  because?: string
}

/** `pkg({ owner, packageName: "esbuild", version: "0.23.1" })` */
export function pkg(input: PackageInput): Node<"package"> {
  return kind(input as never) as never
}

export const packageKind = kind
