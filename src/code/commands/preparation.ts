// What all commands share: reading the options, checking and compiling the project, refusing cleanly.
// It started as a port of the bootstrap's command line (trame/cli.ts): same options, same order of checks.

import { ViewRefusal, ViewScope, withEngine } from "../../../trame/kernel"
import type { AmendmentAnswer, AmendmentAsked, AnyNode, Compilation, CompiledProject, Document, EngineApi, LanguageReader, TextReader, ProvidedBy, Severity, View, ViewAnswer } from "../../../trame/kernel"
import type { Clock, FileReading, Layout, Paths, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as CompilerApi, Compiled, Loaded } from "../engine/compiler"
import type { Api as CompilationApi } from "../engine/compilation-api"
import type { Api as LawsApi, KindReport } from "../engine/laws"
import type { Api as ViewsApi, ViewFailure } from "../engine/views"
import type { Api as LockApi } from "../engine/lock"
import type { Api as CommonApi } from "#documents/code/rendering/common"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { NodeModuleSpecifiers } from "#std/system"
import type { LongOptions, StandardOptions } from "#std/tooling"
import type { TrameCommands } from "../../conventions"
import type { Uri } from "#std/web"
import type { References } from "../../engine"
import type { PaddedCell, TerminalColumns, TerminalText } from "#documents/text"
import type { Api as ProjectCommandsApi } from "./project-commands"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as PayloadApi } from "../engine/payload"
import type { Api as DateBundleApi } from "../engine/date-bundle"
import type { Api as WatchingApi } from "../engine/watching"
import type { Api as PageApi } from "../page/page"
import type { Api as ProjectApi } from "../engine/project"

export interface Deps {
  /** How a long option is written, and std's options of every command (since g135: --format). */
  long: ProvidedBy<typeof LongOptions>
  standard: ProvidedBy<typeof StandardOptions>
  line: ProvidedBy<typeof TrameCommands>
  compiler: CompilerApi
  compilationApi: CompilationApi
  laws: LawsApi
  views: ViewsApi
  lock: LockApi
  common: CommonApi
  terminal: Terminal
  currentProcess: Process
  clock: Clock
  /** The sort of problems: the rule of the requirement "Sort problems by severity". */
  severityOrder: (severity: Severity) => number
  devPort: number
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  messages: ProvidedBy<typeof CommandMessages>
  layout: ProvidedBy<typeof TerminalText>
  columns: ProvidedBy<typeof TerminalColumns>
  cell: ProvidedBy<typeof PaddedCell>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  /** Where a library keeps its documents: the layout of every project. */
  projectLayout: Layout
  uri: ProvidedBy<typeof Uri>
  references: ProvidedBy<typeof References>
  /** The commands of the project's graph, and those of them that never run (E3, since g116). */
  projectCommands: ProjectCommandsApi
  /** The graph as a build writes it, for tools and agents: what the engine's API gives of a project (since g124). */
  machine: MachineApi
  paths: Paths
  /** Whether a directory the API is asked to compile holds a project (since g125). */
  reading: FileReading
  /** How a project the API is asked to compile is named by a package and a path in it (since g125). */
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  /** The engine's reader of languages, which the API gives (since g128). */
  reader: LanguageReader & TextReader
  /** The commands the engine keeps, whatever the project says (since g119): a command of the project never takes their names. */
  kept: readonly string[]
  /** What the API gives of a project for a page (since g136): what it calls itself, the graph as a page receives it, compiled at each date, watched; the page's program. */
  project: ProjectApi
  payload: PayloadApi
  dateBundle: DateBundleApi
  watching: WatchingApi
  page: PageApi
}

/** What amends the project a command runs for, which the dispatch gives the API (since g136). */
export type Amending = (asked: AmendmentAsked) => Promise<AmendmentAnswer>

export interface Options {
  root: string
  command: string
  /** --at YYYY-MM-DD: the graph as it is (or will be) in force on that date. */
  today: string
  format?: string
  port: number
  fragment: boolean
  envName?: string
  all: boolean
  /** --history: with --all, the last days of the project's history too. */
  history: boolean
  /** --accept: the differences an advance shows are wanted. */
  accept: boolean
  /** --promote "what changes": the candidate of an advance becomes the next generation. */
  promote?: string
  /** --migrate "why": publish again the published declarations the language changed the form of (since g80). */
  migrate?: string
  /** --by: who gives the evidence. --subject, --language: the row reviewed, in which language. --note, --url. */
  by?: string
  /** --for: whom an agent (--by) gives the evidence for, under a delegation of the role (C4, since g115). */
  for?: string
  /** --why, --from, --until, --source: why an amendment changes a value, from and until when, the source a cited one names. */
  why?: string
  from?: string
  until?: string
  source?: string
  subject?: string
  language?: string
  note?: string
  url?: string
  /** --dry-run: a shipment built and checked, not deployed. */
  dryRun: boolean
  /** What remains once the options are read. */
  args: string[]
  /** The commands of the engine, as its command line names them: a command of the project never takes their names. */
  commands: string[]
}

export type Ctx = { c: Compiled; comp: Compilation }

const body = (deps: Deps) => {
  const { line } = deps
  const { zero } = deps.counts
  const { head, isFirst, position, removeAt } = deps.sequences
  const { empty, when } = deps.texts
  const { cell } = deps
  const { indent } = deps.layout
  const { widths } = deps.columns
  const { load, compileAt, loadKinds, readEvidence } = deps.compiler
  const { makeCompilation } = deps.compilationApi
  const { checkKinds, checkImports } = deps.laws
  const { loadViews, runViews, checkViewDecls, sortedViews } = deps.views
  const { checkLock, publishedOf } = deps.lock
  const { locate } = deps.common
  const { terminal, messages } = deps

  /** The commands of the engine, as the last command line read named them: a project's command named like one comes before a view. */
  let engineCommands: readonly string[] = []

  function options(command: string, raw: string[], commands?: string): Options {
    const argv = [...raw]
    /** An option and its value: both leave the arguments; the value is given back. */
    const take = (flag: string) => {
      const at = position(argv, flag)
      if (at === undefined) return undefined
      removeAt(argv, at)
      return removeAt(argv, at)
    }
    /** An option alone: it leaves the arguments. */
    const has = (flag: string) => {
      const at = position(argv, flag)
      if (at === undefined) return false
      removeAt(argv, at)
      return true
    }
    const today = take(line.at) ?? deps.clock.today()
    // The format a command's documents are written in: std's option of every command (since g135).
    const format = take(deps.long.prefix + deps.standard.format.name)
    const port = Number(take(line.port) ?? deps.devPort)
    const fragment = has(line.fragment)
    const envName = take(line.env)
    const all = has(line.all)
    const history = has(line.history)
    const accept = has(line.accept)
    const promote = take(line.promote)
    const migrate = take(line.migrate)
    const by = take(line.by)
    const onBehalf = take(line.for)
    const subject = take(line.subject)
    const language = take(line.language)
    const note = take(line.note)
    const url = take(line.url)
    const dryRun = has(line.dryRun)
    const why = take(line.why)
    const from = take(line.from)
    const until = take(line.until)
    const source = take(line.source)
    const engine = deps.texts.optional(commands).split(line.separator).filter(Boolean)
    if (deps.counts.any(engine)) engineCommands = engine
    return {
      root: deps.currentProcess.cwd(), command, today, format, port, fragment, envName, all, history, accept, promote, migrate,
      by, ...(onBehalf === undefined ? {} : { for: onBehalf }), subject, language, note, url, dryRun, why, from, until, source, args: argv,
      commands: engine,
    }
  }

  function printLaws(reports: KindReport[], verbose: boolean) {
    const failed = reports.filter((r) => r.failures.length)
    if (verbose) {
      terminal.write(messages.kindLaws(reports.length, head(reports)?.samples ?? zero))
      for (const r of reports) {
        if (!r.failures.length) {
          terminal.write(indent + cell(r.kind.name, widths.name) + messages.lawsHold())
          continue
        }
        r.failures.forEach((f, i) => {
          terminal.write(indent + cell(when(isFirst(i), () => r.kind.name), widths.name) + messages.lawFailed(f.law))
          // The counterexample, one step under the law.
          terminal.write(indent + cell(empty, widths.name) + indent + messages.lawCounterexample(f.example, f.count))
        })
      }
    }
    return failed
  }

  /** Refuses (exit status failure): on the error output for `payload`, otherwise on the standard output. */
  function refuse(o: Options, lines: string[]): never {
    for (const l of lines) (o.command === line.payload ? terminal.error : terminal.write)(l)
    return terminal.exit(deps.exitStatus.failure)
  }

  let loaded: Loaded | undefined
  /**
   * The project as the dispatch prepared it, by its root and its date (since g119): the dispatch prepares it to find the
   * project's commands; when it has none, the engine's command it gives way to takes it, once, rather than compile again.
   */
  let handed: { key: string; ctx: Ctx } | undefined
  const keyOf = (o: Options) => JSON.stringify([o.root, o.today])

  /** What refuses a project before it is compiled: its imports, the laws of its kinds and views; then what reading it found. */
  async function refusals(root: string, today: string): Promise<{ refused: string[]; read?: Loaded }> {
    await loadKinds(root)
    await loadViews(root)
    const imports = checkImports(root)
    const kindsRefused = printLaws(checkKinds(today), false)
    const viewsRefused = checkViewDecls()
    if (imports.length || kindsRefused.length || viewsRefused.length) {
      return {
        refused: [
          ...imports.map((i) => messages.importRefused(i)),
          ...kindsRefused.map((r) => messages.kindRefused(r.kind.name, r.failures.map((f) => f.law))),
          ...viewsRefused.map((f) => messages.viewRefused(f.view, f.law, f.example)),
          ...(kindsRefused.length ? [messages.kindLawDetails()] : []),
        ],
      }
    }
    const read = await load(root)
    if (read.typeErrors.length) return { refused: [messages.typeScriptRefuses(), ...read.typeErrors.map((e) => indent + e)] }
    const mixed = read.quantityErrors ?? []
    if (mixed.length) return { refused: [messages.quantitiesRefuse(), ...mixed.map((e) => indent + e)] }
    const madeOfText = read.textAsCode ?? []
    if (madeOfText.length) return { refused: [messages.textAsCodeRefuses(), ...madeOfText.map((e) => indent + e)] }
    const forged = read.forgedCommands ?? []
    if (forged.length) return { refused: [messages.forgedCommandsRefuse(), ...forged.map((e) => indent + e)] }
    return { refused: [], read }
  }

  /** Imports, laws of kinds and views, TypeScript, compilation, trame.lock. */
  async function prepare(o: Options): Promise<Ctx> {
    const given = handed
    handed = undefined
    if (given?.key === keyOf(o)) return given.ctx
    const { refused, read } = await refusals(o.root, o.today)
    if (!read) refuse(o, refused)
    loaded = read
    return await at(o, o.today)
  }

  /**
   * The project prepared as prepare does, or nothing, said nowhere, when it cannot be (since g119): the dispatch asks it
   * before a command of the engine, which then says itself what is wrong (test-kinds, the laws that fail).
   */
  async function attempt(o: Options): Promise<Ctx | undefined> {
    try {
      const { read } = await refusals(o.root, o.today)
      if (!read) return undefined
      loaded = read
      return await at(o, o.today)
    } catch {
      return undefined
    }
  }

  /** Hands the project as prepared to the command that runs next, for the same root and date (since g119). */
  function handOver(o: Options, ctx: Ctx): void {
    handed = { key: keyOf(o), ctx }
  }

  /** Compiles the already loaded graph at a date, with trame.lock. */
  async function at(o: Options, date: string): Promise<Ctx> {
    return compiledAt(loaded!, date)
  }

  /** A graph read, compiled at a date, with trame.lock; the engine running while it is (the scenarios it plays reach it). */
  async function compiledAt(read: Loaded, date: string, opts: { keep?: boolean } = {}): Promise<Ctx> {
    // A day before today: what was proven then is judged as it was given, the code and the engine of that day unknown.
    const c = await running(read, () => compileAt(read, date, { asGiven: date < deps.clock.today(), ...opts }))
    const lockIssues = checkLock(c, read.root)
    const hidden = deps.projectCommands.hidden(c, deps.kept, deps.views.sortedViews().map((v) => v.name), engineCommands)
    c.diags.push(...lockIssues, ...hidden)
    c.diags.sort((a, b) => deps.severityOrder(a.severity) - deps.severityOrder(b.severity))
    const published = publishedOf(c, read.root)
    c.published = published
    c.lockIssues = lockIssues
    return { c, comp: makeCompilation(c, { published, lockIssues, views: deps.views.sortedViews() }) }
  }

  // The engine's API (since g124): what a command, or a scenario the engine plays, reaches of it ------------------------

  /**
   * One view's document (since g132): by the view's name, and the node or the module a view of a node or of a module
   * is for; or why there is none.
   */
  function oneView(comp: Compilation, name: string, arg: string | undefined): ViewAnswer {
    const def = sortedViews().find((v) => v.name === name)
    if (!def) return { refused: ViewRefusal.unknownView, asked: name, known: sortedViews().map((v) => v.name) }
    let runArg: { module?: string; node?: View } = {}
    if (def.per === ViewScope.node) {
      const node = arg ? comp.node(arg).first() : undefined
      if (!node) return { refused: ViewRefusal.unknownNode, asked: arg, known: [] }
      if (def.applies && !def.applies(node, comp)) return { refused: ViewRefusal.notApplicable, asked: node.id, view: def.label, known: [] }
      runArg = { node }
    } else if (def.per === ViewScope.module) {
      if (!arg || !comp.modules().some((m) => m.id === arg)) return { refused: ViewRefusal.unknownModule, asked: arg, known: comp.modules().map((m) => m.id) }
      runArg = { module: arg }
    }
    const out = def.run(comp, runArg)
    return { document: { id: def.name, view: def.name, group: def.group, title: out.title, intro: out.intro, blocks: out.blocks, arg } }
  }

  /**
   * Runs `f` with the views of another project loaded (its own beside the language's), then those of the project being
   * compiled again: a project the API compiled elsewhere is given its own documents.
   */
  async function withViewsOf<T>(elsewhere: string | undefined, compiling: Loaded | undefined, f: () => T): Promise<T> {
    if (elsewhere === undefined) return f()
    await loadViews(elsewhere)
    try {
      return f()
    } finally {
      if (compiling) await loadViews(compiling.root)
    }
  }

  /**
   * A project as the API gives it: what a view receives, the graph as a build writes it, the documents of its views and
   * one view's (since g132). A project compiled elsewhere has its views loaded while they run.
   */
  const project = (root: string, read: Loaded, ctx: Ctx, elsewhere?: { compiling: Loaded | undefined }, amend?: Amending): CompiledProject => {
    const { c, comp } = ctx
    const own = elsewhere === undefined ? undefined : root
    const { title } = deps.project.projectDirs(root)
    return {
      root, today: c.today, graph: comp, ...(title === undefined ? {} : { title }), written: () => deps.machine.graphJson(c), snapshot: () => deps.machine.snapshotJson(c),
      documents: (asked = {}) => withViewsOf(own, elsewhere?.compiling, () => {
        const { documents, failures } = runViews(comp, asked)
        if (failures.length) throw new Error(messages.viewsRefused(failures.map((f: ViewFailure) => messages.viewRefused(f.view, f.law, f.example))))
        return { documents, places: renderingContext(documents, ctx) }
      }),
      view: (name, arg) => withViewsOf(own, elsewhere?.compiling, () => oneView(comp, name, arg)),
      // What a page receives of it (since g136): its views are the project's while the payload names them.
      payload: (documents) => withViewsOf(own, elsewhere?.compiling, () => deps.payload.makePayload(c, comp, [...documents])),
      candidates: (history) => deps.payload.candidateDates(comp, history),
      bundle: (mode) => deps.dateBundle.makeBundle(root, c.today, mode),
      watch: (changed) => deps.watching.watch(root, changed),
      // The graph read once, compiled at another day (since g136): what a page offers at each of its dates.
      at: async (date) => {
        if (own === undefined) return project(root, read, await compiledAt(read, date), undefined, amend)
        await loadViews(own)
        try {
          return project(root, read, await compiledAt(read, date, { keep: false }), elsewhere, amend)
        } finally {
          if (elsewhere?.compiling) await loadViews(elsewhere.compiling.root)
        }
      },
      ...(amend === undefined ? {} : { amend }),
    }
  }

  /**
   * Where a project the API is asked to compile is (since g125): a directory from where the engine runs, or, named by a
   * package and a path in it (#commands/samples/small), in the sources of the package the project being compiled leads
   * that name to: its own (its directory's name), or one of its libraries, as it imports it. A library's scenario then
   * finds what its version carries, wherever the project that plays it imports it.
   */
  function located(root: string, compiling: Loaded | undefined): string {
    const { imports, separator } = deps.specifiers
    if (!root.startsWith(imports)) return deps.paths.resolve(deps.currentProcess.cwd(), root)
    const [name, ...inside] = root.slice(imports.length).split(separator)
    const led = compiling === undefined ? undefined
      : deps.paths.basename(compiling.root) === name ? compiling.root : compiling.libraries.find((lib) => lib.name === name)?.root
    if (led === undefined) throw new Error(messages.projectRefusedHere(root, [messages.packageNotLed(name)]))
    return deps.paths.join(led, deps.projectLayout.sources, ...inside)
  }

  /**
   * Another project compiled at a date, the project already read left as it was, nothing kept beside it; refused with
   * what refuses it, a directory without a configuration first.
   */
  async function elsewhere(root: string, today: string, compiling: Loaded | undefined): Promise<CompiledProject> {
    const at = located(root, compiling)
    const configuration = deps.projectLayout.configuration
    if (!deps.reading.existsSync(deps.paths.join(at, configuration))) throw new Error(messages.projectRefusedHere(at, [messages.notAProject(configuration)]))
    try {
      const { refused, read } = await refusals(at, today)
      if (!read) throw new Error(messages.projectRefusedHere(at, refused))
      return project(at, read, await compiledAt(read, today, { keep: false }), { compiling })
    } finally {
      // The views loaded are a project's (its own beside the language's): the project being compiled gets its own back,
      // or its documents would be the other's (a cold build of Trame lost its literals and its versions, g129).
      if (compiling) await loadViews(compiling.root)
    }
  }

  /**
   * The engine's API: the project as the dispatch prepared it for the command, when there is one; the project being
   * compiled, by whose packages a project to compile may be named.
   */
  function api(prepared?: { o: Options; ctx: Ctx; amend?: Amending }, compiling: Loaded | undefined = loaded): EngineApi {
    return {
      layout: deps.projectLayout,
      prepared: () => (prepared === undefined || compiling === undefined ? undefined : project(prepared.o.root, compiling, prepared.ctx, undefined, prepared.amend)),
      compile: (root, today) => elsewhere(root, today, compiling),
      reader: deps.reader,
      page: () => deps.page.script(),
    }
  }

  /** Runs `f` with this engine running, while it compiles a project: what it compiles reaches the API, no project prepared. */
  const running = <T>(compiling: Loaded, f: () => Promise<T>) => withEngine({ offer: () => undefined, api: api(undefined, compiling) }, f)

  /**
   * The loaded graph compiled at a date with nodes besides its own (an amendment not yet recorded, since g85): what the
   * graph would be, written nowhere. The graph as loaded is left as it was.
   */
  async function alsoWith(o: Options, extra: readonly AnyNode[], date: string): Promise<Ctx> {
    const c = await running(loaded!, () => compileAt({ ...loaded!, nodes: [...loaded!.nodes, ...extra] }, date))
    c.diags.sort((a, b) => deps.severityOrder(a.severity) - deps.severityOrder(b.severity))
    return { c, comp: makeCompilation(c, { published: c.published ?? new Set(), lockIssues: [], views: deps.views.sortedViews() }) }
  }

  /**
   * Compiles the loaded graph again with the evidence as it is on disk now (after a command recorded some), judged by
   * the engine that recorded it rather than by the engine the project pins: by none when that engine does not say which
   * it is (a program no generation records, as in the scenarios), whose evidence then names none either.
   */
  async function reread(o: Options, engine: string | undefined): Promise<Ctx> {
    loaded = { ...loaded!, ...readEvidence(o.root), engine }
    return at(o, o.today)
  }

  /** The documents of the views (with those of each node, unless said otherwise); a view that breaks a law refuses. */
  function views(o: Options, comp: Compilation, opts: { perNode?: boolean } = {}): Document[] {
    const { documents, failures } = runViews(comp, opts)
    if (failures.length) refuse(o, failures.map((f: ViewFailure) => messages.viewRefused(f.view, f.law, f.example)))
    return documents
  }

  /**
   * Where references lead, for a syntax that links: the card of each node, the file of each document. A node of a
   * library leads to its card in the library's documents, which the library writes.
   */
  const renderingContext = (docs: Document[], { c, comp }: Ctx) => {
    const { documents, documentExtension } = deps.projectLayout
    const located = locate(docs)
    for (const lib of c.libraries) {
      for (const n of lib.nodes) {
        const v = c.graph.view(n)
        if (located.has(v.ref)) continue
        const doc = comp.moduleDoc(deps.references.ownName(v.module)) + documentExtension
        located.set(v.ref, { doc: empty, file: [lib.path, documents, doc].join(deps.uri.pathSeparator), anchor: v.id })
      }
    }
    return { locate: located, files: new Map(docs.map((d) => [d.id, d.file])) }
  }

  return { options, printLaws, refuse, prepare, attempt, handOver, at, alsoWith, reread, views, renderingContext, api }
}

export type Api = ReturnType<typeof body>
export type { View }
export default body
