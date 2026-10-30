/** Trame · Scenarios */

import { KindName, Severity, Status } from "../trame/kernel"
import { scenario } from "../kinds/scenario"
import { decision } from "../kinds/decision"
import { Process, Clock, FileReading, Paths, WriteLog, TerminalLog, Test } from "./architecture"
import { Compiler, Laws } from "./engine"
import { Build } from "./commands"
import { ExitStatus, NodeEncodings } from "./standards"
import { CommandMessages, ScenarioMessages } from "./messages"
import { Counts } from "./algebra"
import { TrameCommands } from "./conventions"

/**
 * Shape of the example
 * How many scenarios the example project holds: the described engine must find them all.
 */
export const ExampleShape = decision<{ scenarios: number }>({ owner: "trame", value: { scenarios: 3 } })

/**
 * The described engine compiles the example
 * The compiler assembled from this graph loads the reservations project and compiles it at the date of the scenarios.
 */
export const CompileExample = scenario({
  owner: "trame",
  verifies: [Compiler],
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
 * expected pass.
 */
export const BuildLikeBefore = scenario({
  owner: "trame",
  verifies: [Build],
  env: Test,
  deps: {
    build: Build, exitStatus: ExitStatus, expected: ExpectedDifferences, writeLog: WriteLog, terminalLog: TerminalLog,
    reading: FileReading, paths: Paths, currentProcess: Process, encodings: NodeEncodings, line: TrameCommands, counts: Counts, commandMessages: CommandMessages, messages: ScenarioMessages,
  },
  body: ({ build, exitStatus, expected, writeLog, terminalLog, reading, paths, currentProcess, encodings, line, counts, commandMessages, messages }) => async (check) => {
    const root = currentProcess.cwd()
    const r = await build({ params: { command: line.build }, body: { args: [] } })
    check(messages.buildSucceeds(), r.status === exitStatus.success)
    const summary = commandMessages.written([])
    check(messages.summaryShown(), terminalLog.lines().some((l) => l.startsWith(summary)))
    const written = [...writeLog.files()].sort(([a], [b]) => a.localeCompare(b))
    const relative = (path: string) => paths.relative(root, path)
    const different = written.filter(([path, content]) => !reading.existsSync(path) || reading.readFileSync(path, encodings.utf8) !== content)
    const unexpected = different.map(([path]) => relative(path)).filter((path) => !(path in expected))
    const declared = Object.entries(expected)
    check(messages.filesWrittenAsBefore(written.length, declared.length), counts.any(written) && counts.isEmpty(unexpected))
    for (const [path, reason] of declared) check(messages.expectedDifference(path, reason), true)
    for (const path of unexpected) check(messages.unexpectedDifference(path), false)
  },
})
