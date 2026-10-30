/** Trame · Scenarios */

import { LiteralKind, Severity, Status } from "../trame/kernel"
import { scenario } from "../kinds/scenario"
import { decision } from "../kinds/decision"
import { Test, TrameRoot } from "./platform"
import { Process, Clock, FileReading, Paths, WriteLog, TerminalLog } from "./architecture"
import { Compiler, Laws, DriverTypeScript, Positions } from "./engine"
import { Build } from "./commands"
import { ExitStatus } from "./standards"
import { CommandMessages, ScenarioMessages } from "./messages"
import { Counts, Sequences, Texts } from "./algebra"
import { SyntaxReader } from "./syntax"
import { TypeScript } from "./languages"

/**
 * The described engine compiles the example
 * The compiler assembled from this graph loads the reservations project and compiles it at the date of the scenarios.
 */
export const CompileExample = scenario({
  owner: "trame",
  verifies: [Compiler],
  env: Test,
  deps: { compiler: Compiler, currentProcess: Process, clock: Clock, counts: Counts, messages: ScenarioMessages },
  body: ({ compiler, currentProcess, clock, counts, messages }) => async (check) => {
    const root = currentProcess.cwd()
    await compiler.loadKinds(root)
    const l = await compiler.load(root)
    check(messages.typeScriptAcceptsTheExample(), counts.isEmpty(l.typeErrors))
    const c = await compiler.compileAt(l, clock.today())
    const scenarios = c.nodes.filter((n) => c.graph.view(n).kind === "scenario")
    check(messages.exampleNodes(c.nodes.length, scenarios.length), scenarios.length === 3)
    check(messages.noErrorInTheExample(), c.diags.every((d) => d.severity !== Severity.error))
    check(messages.exampleScenariosHold(), scenarios.every((n) => c.graph.view(n).status === Status.held))
  },
})

/**
 * The laws of the kinds hold
 */
export const KindLaws = scenario({
  owner: "trame",
  verifies: [Laws],
  env: Test,
  deps: { laws: Laws, compiler: Compiler, currentProcess: Process, clock: Clock, counts: Counts, messages: ScenarioMessages },
  body: ({ laws, compiler, currentProcess, clock, counts, messages }) => async (check) => {
    const kinds = await compiler.loadKinds(currentProcess.cwd())
    const reports = laws.checkKinds(clock.today())
    check(messages.kindsRespectTheirLaws(reports.length, kinds.length), reports.every((r) => counts.isEmpty(r.failures)))
  },
})

/**
 * Expected differences on the example
 * The files of the example that a wanted change of the engine writes differently, with the reason. The scenario "The
 * build writes the same documents" lets them through, and only them; a difference that is not declared here makes it
 * fail. Once the generation that writes them is in place, the list is emptied.
 */
export const ExpectedDifferences = decision<Record<string, string>>({
  owner: "trame",
  value: {},
})

/**
 * The build writes the same documents as the engine in place
 * trame build, run by the described engine on the example, writes character for character what the engine in place
 * wrote (the generation that assembles it): docs/, graph.json, snapshot.json. Only the differences declared as
 * expected pass.
 */
export const BuildLikeBefore = scenario({
  owner: "trame",
  verifies: [Build],
  env: Test,
  deps: {
    build: Build, exitStatus: ExitStatus, expected: ExpectedDifferences, writeLog: WriteLog, terminalLog: TerminalLog,
    reading: FileReading, paths: Paths, currentProcess: Process, counts: Counts, commandMessages: CommandMessages, messages: ScenarioMessages,
  },
  body: ({ build, exitStatus, expected, writeLog, terminalLog, reading, paths, currentProcess, counts, commandMessages, messages }) => async (check) => {
    const root = currentProcess.cwd()
    const r = await build({ params: { command: "build" }, body: { args: [] } })
    check(messages.buildSucceeds(), r.status === exitStatus.success)
    const summary = commandMessages.written([])
    check(messages.summaryShown(), terminalLog.lines().some((l) => l.startsWith(summary)))
    const written = [...writeLog.files()].sort(([a], [b]) => a.localeCompare(b))
    const relative = (path: string) => paths.relative(root, path)
    const different = written.filter(([path, content]) => !reading.existsSync(path) || reading.readFileSync(path, "utf8") !== content)
    const unexpected = different.map(([path]) => relative(path)).filter((path) => !(path in expected))
    const declared = Object.entries(expected)
    check(messages.filesWrittenAsBefore(written.length, declared.length), counts.any(written) && counts.isEmpty(unexpected))
    for (const [path, reason] of declared) check(messages.expectedDifference(path, reason), true)
    for (const path of unexpected) check(messages.unexpectedDifference(path), false)
  },
})

/**
 * The syntax reader finds what the TypeScript driver finds
 * On Trame and on the example, the reader (tree-sitter, the TypeScript language node) and the TypeScript driver (the
 * TypeScript compiler) read the same bodies; each literal the driver finds, the reader finds on the same line, with the
 * same value, kind, role, category and context. Two differences are wanted: a template is shown as written, escape
 * sequences included; a template whose fixed parts are only blanks is a literal. The scenario lasts as long as the
 * driver does.
 */
export const ReaderLikeBefore = scenario({
  owner: "trame",
  verifies: [SyntaxReader],
  env: Test,
  deps: {
    compiler: Compiler, reader: SyntaxReader, typeScript: TypeScript, driver: DriverTypeScript, trameRoot: TrameRoot,
    currentProcess: Process, paths: Paths, positions: Positions, counts: Counts, sequences: Sequences, texts: Texts, messages: ScenarioMessages,
  },
  body: ({ compiler, reader, typeScript, driver, trameRoot, currentProcess, paths, positions, counts, sequences, texts, messages }) => async (check) => {
    await reader.load(typeScript)
    for (const root of [paths.resolve(trameRoot), currentProcess.cwd()]) {
      const project = paths.basename(root)
      const l = await compiler.load(root)
      const sources = [...l.bodies.values()].flat().filter((s) => typeScript.extensions.some((x) => s.file.endsWith(x)))
      const before = driver.typescript.literals?.(sources, root) ?? new Map()
      const now = reader.literals(typeScript, sources)
      let found: number = counts.zero
      const shown: string[] = []
      const blank: string[] = []
      const differ: (() => void)[] = []
      for (const s of sources) {
        const left = [...(now.get(s.key) ?? [])]
        const where = (line: number) => positions.reference(paths.relative(root, s.file), line)
        for (const x of before.get(s.key) ?? []) {
          const y = left.find((y) => y.line === x.line && y.raw === x.raw && y.kind === x.kind && y.role === x.role && y.category === x.category && y.context === x.context)
          if (!y) {
            differ.push(() => check(messages.onlyTheDriverFinds(where(x.line), x.value, x.role), false))
            continue
          }
          sequences.removeAt(left, left.indexOf(y))
          found = counts.next(found)
          if (y.value !== x.value) shown.push(y.value)
        }
        for (const y of left) {
          if (y.kind === LiteralKind.template && !String(y.raw).replaceAll(texts.ellipsis, texts.empty).trim()) blank.push(y.value)
          else differ.push(() => check(messages.onlyTheReaderFinds(where(y.line), y.value, y.role), false))
        }
      }
      const total = [...before.values()].reduce((n, xs) => n + xs.length, counts.zero)
      check(messages.readsLikeTheDriver(project, found, total), found === total && counts.isEmpty(differ))
      if (counts.any(shown)) check(messages.templatesShownAsWritten(project, shown.length), true)
      if (counts.any(blank)) check(messages.blankTemplatesCounted(project, blank.length), true)
      for (const d of differ) d()
    }
  },
})
