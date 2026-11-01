// trame manifest: writes the packages of the graph, each at the version its node declares, as the dependencies of the
// project's manifest; npm install then installs them, and the lockfile says what it installed, which each package
// checks. The graph decides the versions: the manifest is written from it. It also writes the import map: where the
// name of each library the project imports leads (#std/* to its sources, or to the version it froze), and since g87
// where the language's names lead (#trame/kernel, #trame/kinds/*: the generation the project pins); where each package
// comes from is the port "Where a package comes from" (a link under the project, for a local path).

import { KindName, PackageField, PackageJoins, type ProvidedBy } from "../../../trame/kernel"
import type { EnginePin } from "../../generations"
import type { Counts, ValueTypes } from "#std/algebra"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileWriting, Layout, Paths, Prelude, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { NodeEncodings, NodeEvents, NodeModuleSpecifiers, NpmManifest } from "#std/system"
import type { Texts } from "#std/algebra"
import type { TrameCommands } from "../../conventions"
import type { TextFile } from "#std/text"
import type { PackageSource } from "#std/tooling"
import type { LanguageNames } from "../../conventions"
import type { LanguageDescription } from "../../../kinds/language"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ProjectApi } from "../engine/project"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  npm: ProvidedBy<typeof NpmManifest>
  layout: Layout
  project: ProjectApi
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  reading: FileReading
  writing: FileWriting
  /** Where each package comes from: it places the package, and says where the import map leads. */
  packages: PackageSource
  names: ProvidedBy<typeof LanguageNames>
  /** Where the language the engine speaks is: for a project that pins no generation. */
  prelude: Prelude
  /** The key under which a project names the generation it pins: the configuration, derived from its references. */
  pin: ProvidedBy<typeof EnginePin>
  values: ProvidedBy<typeof ValueTypes>
  counts: ProvidedBy<typeof Counts>
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  file: ProvidedBy<typeof TextFile>
  json: { indentation: number }
  /** The language of the graph: the extension of a library's modules. */
  language: LanguageDescription
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
  /** Relaunches the engine when the import map changed. */
  currentProcess: Process
  events: ProvidedBy<typeof NodeEvents>
  line: ProvidedBy<typeof TrameCommands>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare } = deps.preparation
  const { npm, layout, specifiers } = deps
  const { join, sep, resolve } = deps.paths
  const { empty } = deps.texts
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const file = join(o.root, layout.manifest)
  const read = () => (deps.reading.existsSync(file) ? (JSON.parse(deps.reading.readFileSync(file, deps.encodings.utf8)) as Record<string, unknown>) : {})
  const write = (manifest: Record<string, unknown>) => deps.writing.writeFileSync(file, JSON.stringify(manifest, undefined, deps.json.indentation) + deps.file.endOfLine)

  // First where each library's name leads, from the configuration: the graph cannot be read before its imports resolve.
  // As a path of the package: the library's sources, through a link if it is outside.
  const manifest = read()
  const before = JSON.stringify(manifest[npm.imports] ?? {})
  const asSpecifier = (path: string) => path.split(sep).join(specifiers.separator)
  const [extension] = deps.language.extensions
  const dirs = deps.project.projectDirs(o.root)
  const libraries = dirs.libraries
  const imports = { ...((manifest[npm.imports] ?? {}) as Record<string, string>) }
  const place = (name: string, at: string, version?: string) =>
    deps.packages.place({ project: o.root, under: layout.libraryLinks, name, at, version })
  for (const lib of libraries) {
    const base = place(lib.name, lib.root, lib.version)
    const name = specifiers.imports + lib.name + specifiers.separator + specifiers.pattern
    imports[name] = specifiers.current + asSpecifier(join(base, layout.sources)) + specifiers.separator + specifiers.pattern + extension
  }
  // The language: the generation the project pins, each module by its name; its home reaches it where it is.
  const { names } = deps
  const language = place(names.name, deps.project.isHome(o.root) ? o.root : dirs.engine ?? deps.prelude.root)
  for (const [name, module] of Object.entries(names.modules)) {
    imports[specifiers.imports + names.name + specifiers.separator + name] = specifiers.current + asSpecifier(join(language, module)) + extension
  }
  manifest[npm.imports] = Object.fromEntries(Object.entries(imports).sort(([a], [b]) => a.localeCompare(b)))
  // A Trame project is written in ES modules: without it, Node.js would read the files of a release as CommonJS.
  manifest[npm.type] ??= npm.module
  write(manifest)
  deps.terminal.write(deps.messages.librariesNamed(libraries.length, layout.manifest))
  // Node.js read the manifest when this process started: if the import map changed, a fresh process reads the graph.
  const relaunch = () => new Promise<number>((done) => {
    const child = deps.currentProcess.relaunch([deps.line.manifest], o.root)
    const chunks: string[] = []
    child.stdout!.setEncoding(deps.encodings.utf8)
    child.stdout!.on(deps.events.data, (d: string) => chunks.push(d))
    child.on(deps.events.close, (code: number | null) => {
      deps.terminal.writeRaw(chunks.join(empty))
      done(code ?? deps.exitStatus.failure)
    })
  })
  if (JSON.stringify(manifest[npm.imports]) !== before) return { status: await relaunch(), body: undefined }

  // Then the graph: the packages of Trame it references (since g91), each placed where its reference says it comes
  // from, make the configuration the engine starts from (derived: the language as the engine to run, the libraries as
  // placed). If it changed, a fresh process reads the graph with it.
  const { c, comp } = await prepare(o)
  const text = (v: { field(name: string): unknown }, name: string) => {
    const x = v.field(name)
    return deps.values.isText(x) ? x : undefined
  }
  const references = comp.all(KindName.package).nodes().filter((v) => text(v, PackageField.joins) !== undefined)
  if (deps.counts.any(references)) {
    const file = join(o.root, layout.configuration)
    const configuration = JSON.parse(deps.reading.readFileSync(file, deps.encodings.utf8)) as Record<string, unknown>
    const libraries: Record<string, { at: string; version?: string }> = {}
    let engine: string | undefined
    for (const v of references) {
      const atPath = text(v, PackageField.at)
      const name = String(v.field(PackageField.name))
      const version = text(v, PackageField.version)
      const base = deps.packages.place({
        project: o.root, under: layout.libraryLinks, name, version, from: text(v, PackageField.from),
        at: atPath === undefined ? undefined : resolve(o.root, atPath),
      })
      if (text(v, PackageField.joins) === PackageJoins.language) engine = base
      else libraries[name] = { at: base, version }
    }
    const derived = { ...configuration, libraries, ...(engine === undefined ? {} : { [deps.pin.key]: engine }) }
    if (JSON.stringify(derived) !== JSON.stringify(configuration)) {
      deps.writing.writeFileSync(file, JSON.stringify(derived, undefined, deps.json.indentation) + deps.file.endOfLine)
      deps.terminal.write(deps.messages.configurationDerived(references.length, layout.configuration))
      return { status: await relaunch(), body: undefined }
    }
  }
  // Its packages from npm, and those of every library it imports, frozen or not, whose code its programs run: it
  // installs them all. A package of Trame is placed above, never installed by npm.
  const all = c.libraries.flatMap((lib) => lib.nodes.map((n) => c.graph.view(n)))
  const versions = [...comp.all(KindName.package).nodes(), ...all.filter((v) => v.kind === KindName.package)]
    .filter((v) => text(v, PackageField.joins) === undefined)
    .map((v): [string, string] => [String(v.field(PackageField.name)), String(v.field(PackageField.version))])
    .sort(([a], [b]) => a.localeCompare(b))
  write({ ...read(), [npm.dependencies]: Object.fromEntries(versions) })
  deps.terminal.write(deps.messages.manifestWritten(versions.length, layout.manifest))
  return { status: deps.exitStatus.success, body: versions.length }
}

export default body
