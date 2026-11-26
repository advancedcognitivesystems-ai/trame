// trame init "<title>" --by <owner>: starts a project in the current directory, or repairs the one there (since g120).
// Its configuration pins the generation that runs the command and names the libraries the language's home uses, at the
// versions it uses them; its first module holds the goal the project serves, for its owner to describe; the guide for
// agents comes with it (AGENTS.md, a CLAUDE.md that points to it, the skill), copied from the language's home. In a
// project already there, it writes only what lacks (the configuration and its references go together; the first module
// when the graph has no goal of its own; each guide that is not there), never over a file, and the add-ons the project
// chooses for it (std's ProjectRepairs) repair the rest; run twice, it writes nothing. A fresh engine then writes the
// manifest: where the language's names and the libraries' lead. Refused without a title (the configuration gives it in
// a project) or an owner.
import { ActorField, ActorSort, EdgeName, KindName, KeptCommandPoints, PackageJoins, type ProjectRepair, type ProvidedBy } from "../../../trame/kernel"
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
import type { LanguageDescription } from "../../../trame/kernel"
import type { ConstDeclaration, Call, ExportDeclaration, DocBlock, InlineArray, MemberAccess, ModuleTitle, NamedImport, ObjectLiteral, Property, StringLiteral, TypeScriptSyntax } from "../../typescript"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ProjectApi } from "../engine/project"
import type { Api as AddOnsApi } from "./add-ons"
import type { Api as ProjectCommandsApi } from "./project-commands"
import type { Counts, ValueTypes } from "#std/algebra"

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
  member: ProvidedBy<typeof MemberAccess>
  list: ProvidedBy<typeof InlineArray>
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
  /** What the project chooses to repair it besides (since g120), and the commands it already has. */
  addOns: AddOnsApi
  projectCommands: ProjectCommandsApi
  values: ProvidedBy<typeof ValueTypes>
  counts: ProvidedBy<typeof Counts>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, refuse } = deps.preparation
  const { layout, start, paths, messages, texts } = deps
  const { join, relative, dirname, basename } = paths
  const { specifiers } = deps
  const { existsSync, readFileSync } = deps.reading
  const { writeFileSync, mkdirSync } = deps.writing
  const o = options(req.params.command, (req.body as { args: string[] }).args, req.params.commands)
  // A project already here (since g120): its configuration gives the title, and init repairs what it lacks.
  const configured = existsSync(join(o.root, layout.configuration))
  const configuration = configured ? (JSON.parse(String(readFileSync(join(o.root, layout.configuration), deps.encodings.utf8))) as { title?: unknown }) : {}
  const [given] = o.args
  const title = given ?? (deps.values.isText(configuration.title) ? configuration.title : undefined)
  const owner = o.by
  if (!title || !owner) return refuse(o, [messages.initNeedsTitle()])
  const found: string[] = []
  const wrote: string[] = []
  const write = (file: string, content: string) => {
    mkdirSync(dirname(join(o.root, file)), { recursive: true })
    writeFileSync(join(o.root, file), content)
    wrote.push(file)
  }
  // The project as it is, when its graph can be read: what it already says.
  const ctx = configured ? await deps.preparation.attempt(o) : undefined
  // The configuration: the generation that runs, the libraries the language's home uses, as it uses them.
  const home = deps.prelude.root
  const [extension] = deps.language.extensions
  const sources = join(o.root, layout.sources)
  const generation = basename(deps.prelude.engine)
  if (configured) found.push(layout.configuration)
  else {
    const libraries = Object.fromEntries(deps.project.projectDirs(home).libraries.map((lib) => {
      const path = relative(o.root, lib.home)
      return [lib.name, lib.version === undefined ? path : { path, version: lib.version }]
    }))
    const written = { title, libraries, [deps.pin.key]: relative(o.root, deps.prelude.engine) }
    write(layout.configuration, JSON.stringify(written, undefined, deps.json.indentation) + deps.file.endOfLine)
    // The references, in the graph: the language at the generation that runs, each library as the home uses it. The
    // configuration written above is what the manifest derives from them, so that the engine starts.
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
  }
  // The first module: the goal the project serves, for its owner to describe; none when the graph has a goal of its own.
  const first = join(layout.sources, start.module + extension)
  const goals = ctx ? ctx.c.graph.all(KindName.goal).nodes().filter((v) => v.library === undefined) : []
  if (existsSync(join(o.root, first)) || deps.counts.any(goals)) found.push(first)
  else {
    const module = [
      deps.title(messages.initModuleTitle(title)),
      texts.empty,
      deps.imports([start.actorSorts], deps.project.languageModule(o.root, sources, start.kernel)),
      deps.imports([KindName.goal], deps.project.languageModule(o.root, sources, start.goalKind)),
      deps.imports([KindName.actor], deps.project.languageModule(o.root, sources, start.actorKind)),
      texts.empty,
      deps.doc([title, messages.initGoal(title)]),
      deps.exported(deps.constant(start.goal, deps.call(KindName.goal, [deps.object([deps.property(start.owner, deps.text(owner))])]))),
      texts.empty,
      // Who started it (C4): the owner it names is an actor the graph declares.
      deps.doc([owner, messages.initOwner(title)]),
      deps.exported(deps.constant(start.actor, deps.call(KindName.actor, [deps.object([
        deps.property(start.owner, deps.text(owner)), deps.property(ActorField.handle, deps.text(owner)),
        deps.property(ActorField.sort, deps.member(start.actorSorts, ActorSort.person)), deps.property(EdgeName.serves, deps.list([start.goal])),
      ])]))),
      texts.empty,
    ].join(deps.syntax.endOfLine)
    write(first, module)
  }
  // The guide for agents, from the language's home: each one the project does not have.
  for (const guide of start.guides) {
    if (existsSync(join(o.root, guide))) found.push(guide)
    else if (existsSync(join(home, guide))) write(guide, String(readFileSync(join(home, guide), deps.encodings.utf8)))
  }
  if (existsSync(join(o.root, start.pointer))) found.push(start.pointer)
  else write(start.pointer, start.pointerText + deps.file.endOfLine)
  // What the project chooses to repair it besides (since g120): each add-on, whatever the others did.
  let repairsFailed = false
  if (ctx) {
    const commands = deps.projectCommands.of(ctx.c).map((x) => x.name)
    const { addOns, refused } = await deps.addOns.wired<ProjectRepair>(ctx.c, o.root, KeptCommandPoints.repairs, o.envName)
    if (refused) deps.terminal.write(refused)
    const failed = await deps.addOns.each(addOns, async (repair) => {
      wrote.push(...(await repair.repair({ root: o.root, title, owner, commands })))
      return true
    })
    for (const f of failed) deps.terminal.write(messages.addOnFailed(f.title, f.why))
    repairsFailed = refused !== undefined || deps.counts.any(failed)
  }
  deps.terminal.write(!configured
    ? messages.initWritten(title, relative(o.root, deps.prelude.engine))
    : deps.counts.any(wrote) ? messages.initRepaired(title, found, wrote) : messages.initNothingLacked(title, found))
  // Then the manifest, by an engine that reads the configuration just written.
  const status = await new Promise<number>((done) => {
    const child = deps.currentProcess.restart([deps.line.manifest], o.root)
    const chunks: string[] = []
    child.stdout!.setEncoding(deps.encodings.utf8)
    child.stdout!.on(deps.events.data, (d: string) => chunks.push(d))
    child.on(deps.events.close, (code: number | null) => {
      deps.terminal.writeRaw(chunks.join(texts.empty))
      done(code ?? deps.exitStatus.failure)
    })
  })
  return { status: repairsFailed ? deps.exitStatus.failure : status, body: title }
}

export default body
