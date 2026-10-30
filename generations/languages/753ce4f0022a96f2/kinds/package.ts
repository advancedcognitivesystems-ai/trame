import { defineKind, field, optional, hole, doc, Status, type Evidence, type Node, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/** The reports a package receives, as evidence: what the registry says of its vulnerabilities, and of its latest version. */
export const PackageReport = { audit: "audit", outdated: "outdated" } as const

/** The last report of a kind, among a node's evidence. */
const last = (self: View, source: string): Evidence | undefined => self.evidence.filter((e) => e.source === source).at(-1)

/**
 * A package the code depends on: its name in the registry and the version the project installs. Its version is checked
 * against the project's lockfile; the registry's reports (trame audit) reach it as evidence, dated: its known
 * vulnerabilities, and how many releases that break what uses it it is behind the latest. A package with a known
 * vulnerability, or whose version the lockfile does not install, is violated; the implementations that use it say so.
 */
const kind = defineKind({
  name: "package",
  label: { one: say.packagePackage(), many: say.packagePackages() },
  order: 152,
  renderOwns: ["packageName", "version"],
  fields: {
    owner: field.owner(),
    packageName: field.text(say.packageName()),
    version: field.text(say.packageVersion()),
    url: optional(field.text(say.packageUrl())),
  },
  edges: {},

  holes(self, g) {
    const name = String(self.field("packageName") ?? "")
    const version = String(self.field("version") ?? "")
    const installed = g.installed?.(name)
    const out = []
    if (g.installed && installed === undefined) out.push(hole.error(say.packageNotInstalled(name), self.owner))
    if (installed !== undefined && installed !== version) out.push(hole.error(say.packageDisagree(version, installed), self.owner))
    const audit = last(self, PackageReport.audit)
    const outdated = last(self, PackageReport.outdated)
    // Known, and reported: the package is violated, and what uses it; it does not stop an assembly, which must still be
    // able to ship the version that fixes it.
    if (audit && audit.value > 0) out.push(hole.warning(say.packageVulnerable(audit.value, audit.at), self.owner))
    if (outdated && outdated.value > 0) out.push(hole.warning(say.packageBehind(outdated.value, outdated.note ?? "", outdated.at), self.owner))
    if (!audit && !outdated) out.push(hole.warning(say.packageNoReport(), self.owner))
    return out
  },

  // Without a report, nothing is known of it (the lockfile's disagreement is a hole all the same).
  status(self, g) {
    const audit = last(self, PackageReport.audit)
    if (!audit) return Status.unknown
    const installed = g.installed?.(String(self.field("packageName") ?? ""))
    if (audit.value > 0 || (g.installed && installed !== String(self.field("version") ?? ""))) return Status.violated
    return Status.held
  },

  render(self, g) {
    const name = String(self.field("packageName") ?? "")
    const installed = g.installed?.(name)
    const audit = last(self, PackageReport.audit)
    const outdated = last(self, PackageReport.outdated)
    const url = self.field("url")
    const reported = (e: Evidence | undefined, said: string) =>
      e ? [say.packageReportedOn(said, e.at), ...(e.url ? [" ", e.url] : [])] : [say.packageNoReport()]
    return [
      doc.facts([
        { label: say.packageName(), value: typeof url === "string" ? [doc.ident(name), " ", url] : [doc.ident(name)] },
        { label: say.packageVersion(), value: [doc.ident(String(self.field("version") ?? ""))] },
        { label: say.packageInstalled(), value: [installed !== undefined ? doc.ident(installed) : g.installed ? say.packageNotInstalled(name) : say.packageNotRead()] },
        { label: say.packageAudit(), value: reported(audit, audit && audit.value > 0 ? audit.note ?? String(audit.value) : say.packageNone()) },
        { label: say.packageOutdated(), value: reported(outdated, outdated?.note || say.packageUpToDate()) },
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
}

/** `pkg({ owner, packageName: "esbuild", version: "0.23.1" })` */
export function pkg(input: PackageInput): Node<"package"> {
  return kind(input as never) as never
}

export const packageKind = kind
