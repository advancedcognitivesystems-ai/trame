/** Trame · Scenarios */

import { KindName, Severity, Status, Unit } from "../trame/kernel"
import { scenario } from "../kinds/scenario"
import { decision } from "../kinds/decision"
import { Process, Clock, FileReading, Paths, WriteLog, TerminalLog, Test } from "./architecture"
import {
  Compiler, Laws, Project, StaticAnalysis, Wiring, GraphApi, CompilationApi, Views, MachineOutputs, Lock, Cycles, Generator, Fingerprints,
  References, Positions,
} from "./engine"
import { Build, Preparation } from "./commands"
import { ExitStatus, NodeEncodings } from "#std/system"
import { CommandMessages, ScenarioMessages, Lists, Dates, Language } from "./messages"
import { Counts, Texts } from "#std/algebra"
import { TrameCommands, Layout } from "./conventions"
import { RealTypeScript, TsxLoader, TramePrelude, NodePaths, ExampleProcess, MemoryFiles, MemoryTerminal, StoppedClock } from "./platform"
import { FileRendering, Common, MarkdownSyntax, MermaidDiagrams } from "./rendering"
import { Punctuation, Units, VisibleText } from "./documents"
import { VersionOrder } from "./packages"

/**
 * Shape of the example
 * How many scenarios the example project holds: the described engine must find them all.
 */
export const ExampleShape = decision<{ scenarios: number }>({ owner: "trame", value: { scenarios: 3 } })

/**
 * The described engine compiles the example
 * The compiler assembled from this graph loads the reservations project (its files read from the disk, its TypeScript
 * run by tsx and checked by the compiler of TypeScript, its declarations read statically) and compiles it at the date of
 * the scenarios: every scenario of the example found, wired and held.
 */
export const CompileExample = scenario({
  owner: "trame",
  verifies: [Compiler, Project, StaticAnalysis, Wiring, GraphApi, RealTypeScript, TsxLoader, TramePrelude, MemoryFiles, NodePaths, ExampleProcess],
  env: Test,
  deps: { compiler: Compiler, currentProcess: Process, clock: Clock, shape: ExampleShape, counts: Counts, messages: ScenarioMessages },
  body: ({ compiler, currentProcess, clock, shape, counts, messages }) => async (check) => {
    const root = currentProcess.cwd()
    await compiler.loadKinds(root)
    const l = await compiler.load(root)
    check(messages.typeScriptAcceptsTheExample(), counts.isEmpty(l.typeErrors))
    const c = await compiler.compileAt(l, clock.today())
    const scenarios = c.nodes.filter((n) => c.graph.view(n).kind === KindName.scenario)
    check(messages.exampleNodes(c.nodes.length, scenarios.length), scenarios.length === shape.scenarios)
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
 * expected pass. What writes them is verified so: the preparation and the compilation the views read, the views, the
 * rendering of the files in Markdown with their figures in Mermaid, the machine outputs, trame.lock read for what is
 * published, on the day the stopped clock shows; written and printed in memory.
 */
export const BuildLikeBefore = scenario({
  owner: "trame",
  verifies: [
    Build, Preparation, CompilationApi, Views, FileRendering, Common, MarkdownSyntax, MermaidDiagrams, MachineOutputs, Lock, MemoryFiles, MemoryTerminal,
    StoppedClock,
  ],
  env: Test,
  deps: {
    build: Build, exitStatus: ExitStatus, expected: ExpectedDifferences, writeLog: WriteLog, terminalLog: TerminalLog, layout: Layout,
    reading: FileReading, paths: Paths, currentProcess: Process, encodings: NodeEncodings, line: TrameCommands, counts: Counts, commandMessages: CommandMessages, messages: ScenarioMessages,
  },
  body: ({ build, exitStatus, expected, writeLog, terminalLog, layout, reading, paths, currentProcess, encodings, line, counts, commandMessages, messages }) => async (check) => {
    const root = currentProcess.cwd()
    const r = await build({ params: { command: line.build }, body: { args: [] } })
    check(messages.buildSucceeds(), r.status === exitStatus.success)
    const summary = commandMessages.written([])
    check(messages.summaryShown(), terminalLog.lines().some((l) => l.startsWith(summary)))
    const written = [...writeLog.written()].sort(([a], [b]) => a.localeCompare(b))
    const relative = (path: string) => paths.relative(root, path)
    const different = written.filter(([path, content]) => !reading.existsSync(path) || reading.readFileSync(path, encodings.utf8) !== content)
    const unexpected = different.map(([path]) => relative(path)).filter((path) => !(path in expected))
    const declared = Object.entries(expected)
    const machine = new Set([layout.graph, layout.snapshot])
    const machineWritten = written.filter(([path]) => machine.has(relative(path)))
    const documents = written.filter(([path]) => relative(path).startsWith(layout.documents + paths.sep))
    const same = ([path]: [string, string]) => !different.some(([p]) => p === path) || relative(path) in expected
    check(messages.machineOutputsAsBefore(), machineWritten.length === machine.size && machineWritten.every(same))
    check(messages.documentsAsBefore(documents.length), counts.any(documents) && documents.every(same))
    check(messages.filesWrittenAsBefore(written.length, declared.length), counts.any(written) && counts.isEmpty(unexpected))
    for (const [path, reason] of declared) check(messages.expectedDifference(path, reason), true)
    for (const path of unexpected) check(messages.unexpectedDifference(path), false)
  },
})

/**
 * What the engine's reckoning is checked with
 * A relation with one cycle, reached again from outside it; two seeds and how many numbers to draw, between which
 * bounds; a reference and a library's module; a value, the same written in another order, and a value changed; a place
 * in a file.
 */
export const ReckoningData = decision<{
  relation: Record<string, string[]>
  cycleStarts: string[]
  seeds: string[]
  draws: number
  bounds: { lo: number; hi: number }
  reference: { ref: string; module: string; identifier: string }
  library: { module: string; name: string; own: string }
  fingerprinted: { value: Record<string, number>; reordered: Record<string, number>; changed: Record<string, number> }
  place: { file: string; tsLine: number; line: number; written: string }
}>({
  owner: "trame",
  value: {
    relation: { a: ["b"], b: ["c"], c: ["a"], d: ["a"] },
    cycleStarts: ["a"],
    seeds: ["kind laws", "view laws"],
    draws: 20,
    bounds: { lo: 1, hi: 6 },
    reference: { ref: "engine.Compiler", module: "engine", identifier: "Compiler" },
    library: { module: "std/algebra", name: "std", own: "algebra" },
    fingerprinted: { value: { a: 1, b: 2 }, reordered: { b: 2, a: 1 }, changed: { a: 1, b: 3 } },
    place: { file: "src/engine.ts", tsLine: 9, line: 10, written: "src/engine.ts:10" },
  },
})

/**
 * The engine reckons as it says
 * A cycle is found once, from the vertex where the search closes it, not again from a vertex that only reaches it; the
 * same seed draws the same numbers, another seed others, and an integer drawn stays within its bounds; a value has the
 * same fingerprint whatever the order of its keys, another once it changes; a reference gives its module and its
 * identifier, a library's module its library and its own name; a line of the TypeScript API is written as messages
 * write it.
 */
export const EngineReckons = scenario({
  owner: "trame",
  verifies: [Cycles, Generator, Fingerprints, References, Positions],
  env: Test,
  deps: {
    cycles: Cycles, generator: Generator, fingerprints: Fingerprints, references: References, positions: Positions, data: ReckoningData,
    messages: ScenarioMessages,
  },
  body: ({ cycles, generator, fingerprints, references, positions, data, messages }) => async (check) => {
    const { relation } = data
    const starts = cycles.cycleStarts(Object.keys(relation), (n) => relation[n] ?? [])
    check(messages.cycleFoundOnce(), starts.join() === data.cycleStarts.join())
    const [seed = data.reference.ref, other = data.reference.module] = data.seeds
    const draw = (from: string) => {
      const next = generator.prng(from)
      return Array.from({ length: data.draws }, () => next())
    }
    check(messages.sameSeedSameDraws(), draw(seed).join() === draw(seed).join())
    check(messages.otherSeedOtherDraws(), draw(seed).join() !== draw(other).join())
    const rnd = generator.prng(seed)
    const integers = Array.from({ length: data.draws }, () => generator.integer(rnd, data.bounds.lo, data.bounds.hi))
    check(messages.integersWithinBounds(data.bounds.lo, data.bounds.hi), integers.every((n) => Number.isInteger(n) && n >= data.bounds.lo && n <= data.bounds.hi))
    const { value, reordered, changed } = data.fingerprinted
    check(messages.fingerprintIgnoresOrder(), fingerprints.of(value) === fingerprints.of(reordered))
    check(messages.fingerprintSeesChange(), fingerprints.of(value) !== fingerprints.of(changed))
    check(messages.referenceRead(data.reference.ref),
      references.module(data.reference.ref) === data.reference.module && references.identifier(data.reference.ref) === data.reference.identifier)
    check(messages.libraryModuleRead(data.library.module),
      references.library(data.library.module) === data.library.name && references.ownName(data.library.module) === data.library.own &&
        references.inLibrary(data.library.name, data.library.own) === data.library.module)
    check(messages.placeWritten(data.place.written),
      positions.lineNumber(data.place.tsLine) === data.place.line && positions.reference(data.place.file, data.place.line) === data.place.written)
  },
})

/**
 * How the documents write what they show, checked
 * A day and how it is written in full, short and as its month; three items and the list they make; durations in
 * seconds, a ratio and an amount, with how each is written; a text with a character nobody sees and how it is shown, and
 * a text shown as it is; two versions in order, and a version behind the latest by two major releases, before and after
 * 1.0.
 */
export const DocumentWordsData = decision<{
  day: { iso: string; written: string; short: string; month: string }
  list: { items: string[]; conjunction: string }
  durations: { seconds: number; written: string }[]
  ratio: { value: number; written: string }
  amount: { value: number; written: string }
  hidden: { text: string; shown: string }
  plain: string
  versions: { older: string; newer: string; behind: { current: string; latest: string; breaking: number }[] }
}>({
  owner: "trame",
  value: {
    day: { iso: "2026-10-17", written: "17 October 2026", short: "17 Oct", month: "Oct" },
    list: { items: ["kinds", "views", "the prelude"], conjunction: "kinds, views and the prelude" },
    durations: [{ seconds: 900, written: "15 min" }, { seconds: 7200, written: "2 h" }, { seconds: 45, written: "45 s" }],
    ratio: { value: 0.5, written: "50%" },
    amount: { value: 20, written: "CHF 20" },
    hidden: { text: "a\u00a0b", shown: "\"a\\u00a0b\"" },
    plain: "a b",
    versions: {
      older: "1.9.0",
      newer: "1.10.0",
      behind: [{ current: "2.1.0", latest: "4.0.0", breaking: 2 }, { current: "0.3.1", latest: "0.5.0", breaking: 2 }],
    },
  },
})

/**
 * The documents write in the decided language
 * A day is written in full, short and as its month in the decided language; a list joins its items with the words of
 * the language; a duration takes the largest unit it is a whole number of, a ratio is a percentage and an amount is in
 * Swiss francs; a text that hides a character is shown with it escaped, another as it is; the marks between parts are
 * those of the language decided; versions are ordered by their numbers, not as texts, and the releases that break what
 * uses a package are counted by major version, or by minor version before 1.0.
 */
export const DocumentWords = scenario({
  owner: "trame",
  verifies: [Dates, Lists, Units, VisibleText, Punctuation, VersionOrder],
  env: Test,
  deps: {
    dates: Dates, lists: Lists, units: Units, visible: VisibleText, punctuation: Punctuation, language: Language, versions: VersionOrder,
    data: DocumentWordsData, texts: Texts, messages: ScenarioMessages,
  },
  body: ({ dates, lists, units, visible, punctuation, language, versions, data, texts, messages }) => async (check) => {
    const { day, list, ratio, amount, hidden } = data
    check(messages.dayWritten(day.written),
      dates.format(day.iso) === day.written && dates.formatShort(day.iso) === day.short && dates.month(day.iso) === day.month)
    check(messages.listJoined(list.conjunction), texts.concat(lists.conjunction(list.items).map(String)) === list.conjunction)
    check(messages.durationsWritten(), data.durations.every((d) => units.format(d.seconds, Unit.duration) === d.written))
    check(messages.ratioAndAmountWritten(ratio.written, amount.written),
      units.format(ratio.value, Unit.percent) === ratio.written && units.format(amount.value, Unit.chf) === amount.written)
    check(messages.hiddenCharacterShown(), visible.visible(hidden.text) === hidden.shown && visible.visible(data.plain) === data.plain)
    check(messages.marksOfTheLanguage(language.tag), punctuation.parts === language.punctuation.parts && punctuation.items === language.punctuation.items)
    check(messages.versionsOrdered(data.versions.older, data.versions.newer), versions.below(data.versions.older, data.versions.newer))
    check(messages.breakingReleasesCounted(), data.versions.behind.every((b) => versions.breaking(b.current, b.latest) === b.breaking))
  },
})
