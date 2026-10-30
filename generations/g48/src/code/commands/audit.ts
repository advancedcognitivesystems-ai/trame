// trame audit: asks the registry about each package of the graph (its known vulnerabilities, its latest version) and
// writes the answers as dated evidence, which the packages read at the next build.

import type { Evidence, ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileWriting, Layout, PackageReports, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { EcmaScript, NodeEncodings, SemanticVersioning } from "../../standards"
import type { PackageAudit } from "../../packages"
import type { Columns, TerminalText } from "../../text"
import type { Counts, ValueTypes } from "../../algebra"
import type { Api as PreparationApi } from "./preparation"

type Entry = Evidence & { node: string }

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  reports: PackageReports
  audit: ProvidedBy<typeof PackageAudit>
  layout: Layout
  reading: FileReading
  writing: FileWriting
  paths: Paths
  semver: ProvidedBy<typeof SemanticVersioning>
  encodings: ProvidedBy<typeof NodeEncodings>
  json: { indentation: number }
  terminal: Terminal
  table: ProvidedBy<typeof Columns>
  columns: ProvidedBy<typeof TerminalText>
  counts: ProvidedBy<typeof Counts>
  values: ProvidedBy<typeof ValueTypes>
  ecma: ProvidedBy<typeof EcmaScript>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare } = deps.preparation
  const { audit, layout, semver, messages, terminal } = deps
  const { join } = deps.paths
  const { zero, one } = deps.counts
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const { comp } = await prepare(o)
  const packages = comp.all(audit.kind).nodes().map((v) => {
    const ceiling = v.field(audit.ceiling)
    return { ref: v.ref, name: String(v.field(audit.name)), ceiling: deps.values.isText(ceiling) ? ceiling : undefined }
  })
  const [found, behind] = await Promise.all([deps.reports.audit(o.root), deps.reports.outdated(o.root)])
  const vulnerable = new Map(found.filter((f) => audit.counted.includes(f.severity)).map((f) => [f.name, f]))
  const late = new Map(behind.map((b) => [b.name, b]))
  // The releases behind that break what uses the package: its majors, or its minors in its initial development.
  const breaking = (current: string, latest: string) => {
    const [cm, cn] = current.split(semver.separator).map(Number)
    const [lm, ln] = latest.split(semver.separator).map(Number)
    return cm !== semver.initial ? lm - cm : lm !== semver.initial ? lm : ln - cn
  }
  /** Is version a at or beyond version b? Their parts compared as numbers, from the major. */
  const reaches = (a: string, b: string) => {
    const [x, y] = [a, b].map((v) => v.split(semver.separator).map(Number))
    const differs = x.findIndex((n, i) => n !== (y[i] ?? zero))
    return differs === deps.ecma.notFound || x[differs] > (y[differs] ?? zero)
  }
  // Held below a version: the releases from there on are not behind; the last breaking release before it is the aim.
  const behindOf = (current: string, latest: string, ceiling?: string) =>
    ceiling !== undefined && reaches(latest, ceiling) ? breaking(current, ceiling) - one : breaking(current, latest)
  const entries: Entry[] = packages.flatMap((p): Entry[] => {
    const v = vulnerable.get(p.name)
    const l = late.get(p.name)
    return [
      { node: p.ref, at: o.today, source: audit.sources.audit, value: v ? v.count : zero, ...(v ? { note: messages.advisory(v.severity, v.title), url: v.url } : {}) },
      { node: p.ref, at: o.today, source: audit.sources.outdated, value: l ? behindOf(l.current, l.latest, p.ceiling) : zero,
        ...(l ? { note: p.ceiling !== undefined && reaches(l.latest, p.ceiling) ? messages.latestHeld(l.latest, p.ceiling) : l.latest } : {}) },
    ]
  })
  // Added to the evidence already there; a report of the same day replaces the one before.
  const dir = join(o.root, layout.evidence)
  const file = join(dir, audit.evidence + layout.evidenceExtension)
  const same = (a: Entry, b: Entry) => a.node === b.node && a.source === b.source && a.at === b.at
  const before = deps.reading.existsSync(file) ? (JSON.parse(deps.reading.readFileSync(file, deps.encodings.utf8)) as Entry[]) : []
  const kept = [...before.filter((e) => !entries.some((n) => same(e, n))), ...entries].sort((a, b) => a.at.localeCompare(b.at) || a.node.localeCompare(b.node))
  deps.writing.mkdirSync(dir, { recursive: true })
  deps.writing.writeFileSync(file, JSON.stringify(kept, undefined, deps.json.indentation))
  const rows = packages.map((p) => {
    const v = vulnerable.get(p.name)
    const l = late.get(p.name)
    const latest = !l ? messages.upToDate() : p.ceiling !== undefined && reaches(l.latest, p.ceiling) ? messages.latestHeld(l.latest, p.ceiling) : messages.latestIs(l.latest)
    return [p.name, v ? messages.advisories(v.count, v.severity) : messages.noAdvisory(), latest]
  })
  for (const line of deps.table(undefined, rows, deps.columns.indent)) terminal.write(line)
  terminal.write(messages.audited(packages.length, vulnerable.size, file))
  return { status: deps.exitStatus.success, body: kept.length }
}

export default body
