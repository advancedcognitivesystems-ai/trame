// What all commands share: reading the options, checking and compiling the project, refusing cleanly.
// It started as a port of the bootstrap's command line (trame/cli.ts): same options, same order of checks.

import type { Compilation, Document, ProvidedBy, Severity, View } from "../../../trame/kernel"
import type { Clock, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as CompilerApi, Compiled, Loaded } from "../engine/compiler"
import type { Api as CompilationApi } from "../engine/compilation-api"
import type { Api as LawsApi, KindReport } from "../engine/laws"
import type { Api as ViewsApi, ViewFailure } from "../engine/views"
import type { Api as LockApi } from "../engine/lock"
import type { Api as CommonApi } from "../rendering/common"
import type { Counts, Sequences, Texts } from "../../algebra"
import type { TrameCommands } from "../../conventions"
import type { PaddedCell, TerminalColumns, TerminalText } from "../../text"

export interface Deps {
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
}

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
  /** --accept: the differences an advance shows are wanted. */
  accept: boolean
  /** --promote "what changes": the candidate of an advance becomes the next generation. */
  promote?: string
  /** What remains once the options are read. */
  args: string[]
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
  const { load, compileAt, loadKinds } = deps.compiler
  const { makeCompilation } = deps.compilationApi
  const { checkKinds, checkImports } = deps.laws
  const { loadViews, runViews, checkViewDecls } = deps.views
  const { checkLock, readLock } = deps.lock
  const { locate } = deps.common
  const { terminal, messages } = deps

  function options(command: string, raw: string[]): Options {
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
    const format = take(line.format)
    const port = Number(take(line.port) ?? deps.devPort)
    const fragment = has(line.fragment)
    const envName = take(line.env)
    const all = has(line.all)
    const accept = has(line.accept)
    const promote = take(line.promote)
    return { root: deps.currentProcess.cwd(), command, today, format, port, fragment, envName, all, accept, promote, args: argv }
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

  /** Imports, laws of kinds and views, TypeScript, compilation, trame.lock. */
  async function prepare(o: Options): Promise<Ctx> {
    await loadKinds(o.root)
    await loadViews(o.root)
    const imports = checkImports(o.root)
    const kindsRefused = printLaws(checkKinds(o.today), false)
    const viewsRefused = checkViewDecls()
    if (imports.length || kindsRefused.length || viewsRefused.length) {
      refuse(o, [
        ...imports.map((i) => messages.importRefused(i)),
        ...kindsRefused.map((r) => messages.kindRefused(r.kind.name, r.failures.map((f) => f.law))),
        ...viewsRefused.map((f) => messages.viewRefused(f.view, f.law, f.example)),
        ...(kindsRefused.length ? [messages.kindLawDetails()] : []),
      ])
    }
    loaded = await load(o.root)
    if (loaded.typeErrors.length) refuse(o, [messages.typeScriptRefuses(), ...loaded.typeErrors.map((e) => indent + e)])
    return await at(o, o.today)
  }

  /** Compiles the already loaded graph at a date, with trame.lock. */
  async function at(o: Options, date: string): Promise<Ctx> {
    const c = await compileAt(loaded!, date)
    const lockIssues = checkLock(c, o.root)
    c.diags.push(...lockIssues)
    c.diags.sort((a, b) => deps.severityOrder(a.severity) - deps.severityOrder(b.severity))
    const published = new Set(Object.keys(readLock(o.root).published))
    c.published = published
    c.lockIssues = lockIssues
    return { c, comp: makeCompilation(c, { published, lockIssues, views: deps.views.sortedViews() }) }
  }

  function views(o: Options, comp: Compilation): Document[] {
    const { documents, failures } = runViews(comp)
    if (failures.length) refuse(o, failures.map((f: ViewFailure) => messages.viewRefused(f.view, f.law, f.example)))
    return documents
  }

  /** Where references lead, for a syntax that links: the card of each node, the file of each document. */
  const renderingContext = (docs: Document[]) => ({ locate: locate(docs), files: new Map(docs.map((d) => [d.id, d.file])) })

  return { options, printLaws, refuse, prepare, at, views, renderingContext }
}

export type Api = ReturnType<typeof body>
export type { View }
export default body
