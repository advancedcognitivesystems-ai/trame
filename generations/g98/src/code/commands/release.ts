// trame release <version> "what changes": freezes a version of a library under releases/<version>. The copy holds its
// graph and its code, and its documents, written at this version; an import that leaves the library (the language: the
// prelude, the kinds) is written again from the copy's place, so that the copy reaches the same file without a link. The
// release is then written in the library's module of releases, after the copy: a version is not in its own copy. A
// project imports it by naming the version beside the library's path, in its configuration.

import { KindName, LanguageUse, Severity, type ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { LanguageDescription } from "../../../kinds/language"
import type { Clock, FileReading, FileTrees, FileWriting, Hashing, Layout, Paths, Terminal } from "../../architecture"
import type { AdvanceMessages, CommandMessages } from "../../messages"
import type { Releases } from "../../generations"
import type { LibraryReleaseNames } from "../../libraries"
import type { NodeEncodings, NodeModuleSpecifiers } from "#std/system"
import type { Sha256 } from "#std/algorithms"
import type { SemanticVersioning } from "#std/measures"
import type { Counts, Sequences } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RecordsApi, GraphRecords, ReleaseRecord } from "./releases"
import type { Api as ProjectApi } from "../engine/project"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as RenderingApi } from "../rendering/document"
import type { Api as DriversApi } from "../languages/drivers"
import type { StringLiteral } from "../../typescript"
import type { PackageSource } from "#std/tooling"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  layout: Layout
  project: ProjectApi
  machine: MachineApi
  /** The renderer of the documents written as files. */
  files: RenderingApi
  /** The rule of the requirement "A release is settled". */
  settled: (found: { blocking: number; errors: number }) => boolean
  names: ProvidedBy<typeof LibraryReleaseNames>
  releases: ProvidedBy<typeof Releases>
  records: RecordsApi
  versions: ProvidedBy<typeof SemanticVersioning>
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  reading: FileReading
  writing: FileWriting
  trees: FileTrees
  paths: Paths
  hashing: Hashing
  sha256: ProvidedBy<typeof Sha256>
  fingerprint: number
  encodings: ProvidedBy<typeof NodeEncodings>
  /** The language of the graph: the extension of its modules. */
  language: LanguageDescription
  /** The day a release is frozen. */
  clock: Clock
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
  advance: ProvidedBy<typeof AdvanceMessages>
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
  /** Reads the imports of the library's modules and bodies. */
  drivers: DriversApi
  /** Where a version is published (since g92). */
  packages: PackageSource
  /** A specifier as the code writes it, between quotes. */
  text: ProvidedBy<typeof StringLiteral>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, views, renderingContext, refuse } = deps.preparation
  const { layout, specifiers, trees, messages } = deps
  const { join, relative, dirname, resolve, basename } = deps.paths
  const { existsSync, readFileSync } = deps.reading
  const { writeFileSync, mkdirSync } = deps.writing
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const [version, what] = o.args
  if (!version || !what) return refuse(o, [messages.releaseNeedsVersion()])
  const ctx = await prepare(o)
  const issues = ctx.comp.issues()
  const found = {
    blocking: issues.filter((i) => i.severity === Severity.blocking).length,
    errors: issues.filter((i) => i.severity === Severity.error).length,
  }
  if (!deps.settled(found)) return refuse(o, [messages.releaseUnsettled(found.blocking, found.errors)])

  const home = o.root
  const releases = join(home, layout.releases)
  const dest = join(releases, version)
  // A version frozen already is never written again: it is published (since g92), where the strategy keeps versions.
  const name = basename(home)
  if (existsSync(dest)) {
    deps.terminal.write(messages.releasePublished(version, deps.packages.publish({ name, version, from: dest })))
    return { status: deps.exitStatus.success, body: version }
  }

  // Its graph and its code, as they are; its documents, written at this version.
  trees.copy(join(home, layout.sources), join(dest, layout.sources))
  const docs = views(o, ctx.comp).filter((d) => d.file)
  const rendering = renderingContext(docs, ctx)
  mkdirSync(join(dest, layout.documents), { recursive: true })
  for (const d of docs) writeFileSync(join(dest, d.file!), deps.files.render(d, rendering))
  // What the copy imports outside the library, written again from where the copy is.
  const within = (path: string, dir: string) => path === dir || path.startsWith(dir + deps.paths.sep)
  const asSpecifier = (from: string, to: string) => {
    const path = relative(from, to).split(deps.paths.sep).join(specifiers.separator)
    return path.startsWith(specifiers.parent) ? path : specifiers.current + path
  }
  const graphDriver = deps.drivers.graphDriver()
  for (const f of trees.files(join(dest, layout.sources)).filter((x) => graphDriver.extensions.some((e) => x.endsWith(e)))) {
    const original = join(home, layout.sources, f)
    const copy = join(dest, layout.sources, f)
    const leaving = (graphDriver.read?.({ key: original, file: original }).imports ?? [])
      .map((i) => i.module)
      .filter((m) => (m.startsWith(specifiers.current) || m.startsWith(specifiers.parent)) && !within(resolve(dirname(original), m), home))
    let text = readFileSync(copy, deps.encodings.utf8)
    for (const m of new Set(leaving)) text = text.split(deps.text(m)).join(deps.text(asSpecifier(dirname(copy), resolve(dirname(original), m))))
    writeFileSync(copy, text)
  }

  // No manifest goes with it (since g96): in its library, the library's manifest says its files are ES modules and where
  // the language is; published, the registry gives it one that says only the first, and its reader leads the language.
  // The fingerprint covers what was frozen, file by file.
  const hash = (text: string | Buffer) => deps.hashing.createHash(deps.sha256.algorithm).update(text).digest(deps.encodings.hex)
  const frozen = trees.files(dest)
  const fingerprint = deps.sequences.take(hash(JSON.stringify(frozen.map((f) => [f, hash(readFileSync(join(dest, f)))]))), deps.fingerprint)

  // The release, written in the library's module of releases with those it already holds. It serves the library's
  // goals, and is released by whoever owns most of its nodes (the first by name, between equals).
  const known = deps.records.read(JSON.parse(deps.machine.graphJson(ctx.c)) as GraphRecords)
  const goals = ctx.comp.all(KindName.goal).nodes()
  const owners = deps.counts.tally(ctx.comp.all().nodes().flatMap((v) => (v.owner ? [v.owner] : [])), (name) => name)
  const [owner] = [...owners].sort(([a, x], [b, y]) => y - x || a.localeCompare(b)).map(([name]) => name)
  const record: ReleaseRecord = {
    id: deps.names.prefix + version.split(deps.versions.separator).join(deps.names.joint),
    title: deps.advance.libraryReleaseTitle(version),
    version, date: deps.clock.today(), what, fingerprint, language: LanguageUse.shared, owner,
    serves: deps.counts.any(goals) ? goals.map((g) => g.id) : undefined,
  }
  const sources = join(home, layout.sources)
  const specifier = (to: string) => {
    const path = relative(sources, to)
    return path.startsWith(specifiers.parent) ? path : specifiers.current + path
  }
  // The goals the releases serve, imported from their modules by the module of releases.
  const served = goals.filter((g) => [...known, record].some((r) => r.serves?.includes(g.id)))
  const others = [...new Set(served.map((g) => g.module))].map((m) => ({
    names: served.filter((g) => g.module === m).map((g) => g.id),
    from: specifier(join(sources, m)),
  }))
  const [extension] = deps.language.extensions
  const dirs = deps.project.projectDirs(home)
  // The kind of releases, as the library names the language: by its name, unless it is the language's home.
  const kind = deps.project.languageModule(home, sources, [layout.kinds, deps.releases.kind].join(specifiers.separator))
  const written = deps.records.module([...known, record], undefined, kind, {
    title: deps.advance.libraryReleasesTitle(dirs.title),
    header: deps.advance.libraryReleasesHeader(),
  }, others)
  writeFileSync(join(sources, deps.releases.module + extension), written)
  deps.terminal.write(messages.released(version, relative(home, dest), fingerprint, docs.length))
  deps.terminal.write(messages.releasePublished(version, deps.packages.publish({ name, version, from: dest })))
  return { status: deps.exitStatus.success, body: fingerprint }
}

export default body
