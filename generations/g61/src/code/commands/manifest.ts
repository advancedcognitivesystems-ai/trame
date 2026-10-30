// trame manifest: writes the packages of the graph, each at the version its node declares, as the dependencies of the
// project's manifest; npm install then installs them, and the lockfile says what it installed, which each package
// checks. The graph decides the versions: the manifest is written from it. It also writes the import map: where the
// name of each library the project imports leads (#std/* to its sources, or to the version it froze); a library
// outside the package is reached through a link under the project, since an import map leads nowhere outside it.

import { KindName, PackageField, type ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileTrees, FileWriting, Layout, Paths, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { NodeEncodings, NodeEvents, NodeModuleSpecifiers, NpmManifest } from "#std/system"
import type { Texts } from "#std/algebra"
import type { TrameCommands } from "../../conventions"
import type { TextFile } from "#std/text"
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
  trees: FileTrees
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
  const { join, relative, dirname, sep } = deps.paths
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
  const libraries = deps.project.projectDirs(o.root).libraries
  const imports = { ...((manifest[npm.imports] ?? {}) as Record<string, string>) }
  for (const lib of libraries) {
    let base = relative(o.root, lib.root)
    if (asSpecifier(base).startsWith(specifiers.parent)) {
      const link = join(o.root, layout.libraryLinks, lib.name)
      deps.trees.remove(link)
      deps.writing.mkdirSync(dirname(link), { recursive: true })
      deps.trees.link(relative(dirname(link), lib.root), link)
      base = join(layout.libraryLinks, lib.name)
    }
    const name = specifiers.imports + lib.name + specifiers.separator + specifiers.pattern
    imports[name] = specifiers.current + asSpecifier(join(base, layout.sources)) + specifiers.separator + specifiers.pattern + extension
  }
  manifest[npm.imports] = Object.fromEntries(Object.entries(imports).sort(([a], [b]) => a.localeCompare(b)))
  write(manifest)
  deps.terminal.write(deps.messages.librariesNamed(libraries.length, layout.manifest))
  // Node.js read the manifest when this process started: if the import map changed, a fresh process reads the graph.
  if (JSON.stringify(manifest[npm.imports]) !== before) {
    const status = await new Promise<number>((done) => {
      const child = deps.currentProcess.relaunch([deps.line.manifest], o.root)
      const chunks: string[] = []
      child.stdout!.setEncoding(deps.encodings.utf8)
      child.stdout!.on(deps.events.data, (d: string) => chunks.push(d))
      child.on(deps.events.close, (code: number | null) => {
        deps.terminal.writeRaw(chunks.join(empty))
        done(code ?? deps.exitStatus.failure)
      })
    })
    return { status, body: undefined }
  }

  // Then the packages of the graph.
  const { comp } = await prepare(o)
  const versions = comp.all(KindName.package).nodes()
    .map((v): [string, string] => [String(v.field(PackageField.name)), String(v.field(PackageField.version))])
    .sort(([a], [b]) => a.localeCompare(b))
  write({ ...read(), [npm.dependencies]: Object.fromEntries(versions) })
  deps.terminal.write(deps.messages.manifestWritten(versions.length, layout.manifest))
  return { status: deps.exitStatus.success, body: versions.length }
}

export default body
