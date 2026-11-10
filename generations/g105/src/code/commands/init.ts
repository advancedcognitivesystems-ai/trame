// trame init "<title>" --by <owner>: starts a project in the current directory. Its configuration pins the generation
// that runs the command and names the libraries the language's home uses, at the versions it uses them; its first
// module holds the goal the project serves, for its owner to describe; the guide for agents comes with it (AGENTS.md,
// a CLAUDE.md that points to it, the skill), copied from the language's home. A fresh engine then writes the manifest:
// where the language's names and the libraries' lead. Refused where a project already is, and without a title or an owner.

import { KindName, PackageJoins, type ProvidedBy } from "../../../trame/kernel"
import type { Api as ReferencesApi } from "./references"
import type { LanguageNames } from "../../conventions"
import type { NodeModuleSpecifiers } from "#std/system"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileWriting, Layout, Paths, Prelude, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { NodeEncodings, NodeEvents } from "#std/system"
import type { Texts } from "#std/algebra"
import type { TextFile } from "#std/text"
import type { ProjectStart, TrameCommands } from "../../conventions"
import type { EnginePin } from "../../generations"
import type { LanguageDescription } from "../../../kinds/language"
import type { ConstDeclaration, Call, ExportDeclaration, DocBlock, ModuleTitle, NamedImport, ObjectLiteral, Property, StringLiteral, TypeScriptSyntax } from "../../typescript"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ProjectApi } from "../engine/project"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  layout: Layout
  project: ProjectApi
  /** Where the language and the engine that runs are. */
  prelude: Prelude
  start: ProvidedBy<typeof ProjectStart>
  /** The key under which a project names the generation it pins. */
  pin: ProvidedBy<typeof EnginePin>
  reading: FileReading
  writing: FileWriting
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  file: ProvidedBy<typeof TextFile>
  json: { indentation: number }
  /** The language of the graph: the extension of its modules. */
  language: LanguageDescription
  syntax: ProvidedBy<typeof TypeScriptSyntax>
  title: ProvidedBy<typeof ModuleTitle>
  doc: ProvidedBy<typeof DocBlock>
  exported: ProvidedBy<typeof ExportDeclaration>
  constant: ProvidedBy<typeof ConstDeclaration>
  call: ProvidedBy<typeof Call>
  object: ProvidedBy<typeof ObjectLiteral>
  property: ProvidedBy<typeof Property>
  text: ProvidedBy<typeof StringLiteral>
  imports: ProvidedBy<typeof NamedImport>
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
  /** Starts a fresh engine on the project, which reads its configuration to write its manifest. */
  currentProcess: Process
  events: ProvidedBy<typeof NodeEvents>
  line: ProvidedBy<typeof TrameCommands>
  texts: ProvidedBy<typeof Texts>
  references: ReferencesApi
  names: ProvidedBy<typeof LanguageNames>
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, refuse } = deps.preparation
  const { layout, start, paths, messages, texts } = deps
  const { join, relative, dirname, basename } = paths
  const { specifiers } = deps
  const { existsSync, readFileSync } = deps.reading
  const { writeFileSync, mkdirSync } = deps.writing
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const [title] = o.args
  const owner = o.by
  if (!title || !owner) return refuse(o, [messages.initNeedsTitle()])
  if (existsSync(join(o.root, layout.configuration))) return refuse(o, [messages.initExists(layout.configuration)])
  const write = (file: string, content: string) => {
    mkdirSync(dirname(join(o.root, file)), { recursive: true })
    writeFileSync(join(o.root, file), content)
  }
  // The configuration: the generation that runs, the libraries the language's home uses, as it uses them.
  const home = deps.prelude.root
  const libraries = Object.fromEntries(deps.project.projectDirs(home).libraries.map((lib) => {
    const path = relative(o.root, lib.home)
    return [lib.name, lib.version === undefined ? path : { path, version: lib.version }]
  }))
  const configuration = { title, libraries, [deps.pin.key]: relative(o.root, deps.prelude.engine) }
  write(layout.configuration, JSON.stringify(configuration, undefined, deps.json.indentation) + deps.file.endOfLine)
  // The first module: the goal the project serves, for its owner to describe.
  const [extension] = deps.language.extensions
  const sources = join(o.root, layout.sources)
  const module = [
    deps.title(messages.initModuleTitle(title)),
    texts.empty,
    deps.imports([KindName.goal], deps.project.languageModule(o.root, sources, start.goalKind)),
    texts.empty,
    deps.doc([title, messages.initGoal(title)]),
    deps.exported(deps.constant(start.goal, deps.call(KindName.goal, [deps.object([deps.property(start.owner, deps.text(owner))])]))),
    texts.empty,
  ].join(deps.syntax.endOfLine)
  write(join(layout.sources, start.module + extension), module)
  // The references, in the graph: the language at the generation that runs, each library as the home uses it. The
  // configuration written above is what the manifest derives from them, so that the engine starts.
  const generation = basename(deps.prelude.engine)
  const references = deps.references.module(messages.initReferencesTitle(title), {
    from: deps.project.languageModule(o.root, sources, start.packageKind), facade: start.packageFacade,
  }, [
    {
      node: start.language, doc: [messages.initLanguage(), messages.initLanguageDoc()], owner, name: deps.names.name,
      version: generation.startsWith(layout.generation) ? generation.slice(layout.generation.length) : generation,
      joins: PackageJoins.language, at: relative(o.root, deps.prelude.engine),
    },
    ...deps.project.projectDirs(home).libraries.map((lib) => ({
      node: lib.name + start.library, doc: [messages.initLibrary(lib.name), messages.initLibraryDoc()], owner, name: lib.name,
      version: lib.version ?? texts.empty, joins: PackageJoins.library, at: relative(o.root, lib.root),
    })),
  ], { goal: start.goal, from: specifiers.current + start.module })
  write(join(layout.sources, start.references + extension), references)
  // The guide for agents, from the language's home.
  for (const guide of start.guides) if (existsSync(join(home, guide))) write(guide, String(readFileSync(join(home, guide), deps.encodings.utf8)))
  write(start.pointer, start.pointerText + deps.file.endOfLine)
  deps.terminal.write(messages.initWritten(title, relative(o.root, deps.prelude.engine)))
  // Then the manifest, by an engine that reads the configuration just written.
  const status = await new Promise<number>((done) => {
    const child = deps.currentProcess.relaunch([deps.line.manifest], o.root)
    const chunks: string[] = []
    child.stdout!.setEncoding(deps.encodings.utf8)
    child.stdout!.on(deps.events.data, (d: string) => chunks.push(d))
    child.on(deps.events.close, (code: number | null) => {
      deps.terminal.writeRaw(chunks.join(texts.empty))
      done(code ?? deps.exitStatus.failure)
    })
  })
  return { status, body: title }
}

export default body
