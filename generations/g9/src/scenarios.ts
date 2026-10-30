/** Trame · Scenarios */

import { Severity, Status } from "../trame/kernel"
import { scenario } from "../kinds/scenario"
import { decision } from "../kinds/decision"
import { Test } from "./platform"
import { Process, Clock, FileReading, WriteLog, TerminalLog } from "./architecture"
import { Compiler, Laws } from "./engine"
import { Build } from "./commands"
import { ExitStatus } from "./standards"
import { CommandMessages, ScenarioMessages } from "./messages"

/**
 * The described engine compiles the example
 * The compiler assembled from this graph loads the reservations project and compiles it at the date of the scenarios.
 */
export const CompileExample = scenario({
  owner: "trame",
  verifies: [Compiler],
  env: Test,
  deps: { compiler: Compiler, currentProcess: Process, clock: Clock, messages: ScenarioMessages },
  body: ({ compiler, currentProcess, clock, messages }) => async (check) => {
    const root = currentProcess.cwd()
    await compiler.loadKinds(root)
    const l = await compiler.load(root)
    check(messages.typeScriptAcceptsTheExample(), l.typeErrors.length === 0)
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
  deps: { laws: Laws, compiler: Compiler, currentProcess: Process, clock: Clock, messages: ScenarioMessages },
  body: ({ laws, compiler, currentProcess, clock, messages }) => async (check) => {
    const kinds = await compiler.loadKinds(currentProcess.cwd())
    const reports = laws.checkKinds(clock.today())
    check(messages.kindsRespectTheirLaws(reports.length, kinds.length), reports.every((r) => r.failures.length === 0))
  },
})

// Why the example's files differ from those of generation 8 (see the decision below).
const reason = "the engine now speaks English: its words come from the message catalogs, where the engine in place (generation 8) writes French"

/**
 * Expected differences on the example
 * The files of the example that a wanted change of the engine writes differently, with the reason. The scenario "The
 * build writes the same documents" lets them through, and only them; a difference that is not declared here makes it
 * fail. Once the generation that writes them is in place, the list is emptied.
 */
export const ExpectedDifferences = decision<Record<string, string>>({
  owner: "trame",
  value: {
    "docs/api.md": reason,
    "docs/architecture.md": reason,
    "docs/cancellation.md": reason,
    "docs/committee.md": reason,
    "docs/index.md": reason,
    "docs/infra.md": reason,
    "docs/layers.md": reason,
    "docs/legal.md": reason,
    "docs/overlaps.md": reason,
    "docs/owners.md": reason,
    "docs/review.md": reason,
    "docs/scenarios.md": reason,
    "docs/schedule.md": reason,
    "docs/snapshot.md": reason,
    "docs/support.md": reason,
    "docs/timeline.md": reason,
    "graph.json": reason,
    "snapshot.json": reason,
  },
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
    reading: FileReading, currentProcess: Process, commandMessages: CommandMessages, messages: ScenarioMessages,
  },
  body: ({ build, exitStatus, expected, writeLog, terminalLog, reading, currentProcess, commandMessages, messages }) => async (check) => {
    const root = currentProcess.cwd()
    const r = await build({ params: { command: "build" }, body: { args: [] } })
    check(messages.buildSucceeds(), r.status === exitStatus.success)
    const summary = commandMessages.written([])
    check(messages.summaryShown(), terminalLog.lines().some((l) => l.startsWith(summary)))
    const written = [...writeLog.files()].sort(([a], [b]) => a.localeCompare(b))
    const relative = (path: string) => path.replace(root + "/", "")
    const different = written.filter(([path, content]) => !reading.existsSync(path) || reading.readFileSync(path, "utf8") !== content)
    const unexpected = different.map(([path]) => relative(path)).filter((path) => !(path in expected))
    const declared = Object.entries(expected)
    check(messages.filesWrittenAsBefore(written.length, declared.length), written.length > 0 && unexpected.length === 0)
    for (const [path, reason] of declared) check(messages.expectedDifference(path, reason), true)
    for (const path of unexpected) check(messages.unexpectedDifference(path), false)
  },
})
