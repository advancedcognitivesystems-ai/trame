/** Trame · Commands */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { entryPoint, command } from "../kinds/entry-point"
import { ExecutableSpecification, SingleSource, SeverityOrder, DevPort } from "./product"
import { TrameCli, Terminal, Process, Clock, FileReading, FileWriting, Paths, Hashing, Programs, FileTrees } from "./architecture"
import { Compiler, CompilationApi, Laws, Views, Lock, MachineOutputs, PayloadBuilder, DateBundle, DevServer, Assembly, Fingerprint } from "./engine"
import { Page } from "./page"
import { Common, Markdown, Text } from "./rendering"
import { Counts, Sequences, Texts } from "./algebra"
import { Layout, JsonFormatting, TrameCommands, TrameEnvironment, commandNames } from "./conventions"
import { ExitStatus, NodeEvents, Posix, NodeEncodings, Sha256, UnifiedDiff, TextFile } from "./standards"
import { CommandMessages, AdvanceMessages } from "./messages"
import { TerminalText, TerminalColumns, PaddedCell, Columns } from "./text"
import { ExampleRoot, TestDay } from "./platform"
import { TypeScript } from "./typescript"
import { Advancement, AcceptCandidate } from "./generations"
import { Punctuation } from "./documents"

/**
 * Preparation
 * Reads the options, checks and compiles the project, refuses cleanly: what all commands share.
 */
export const Preparation = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { line: TrameCommands,
    compiler: Compiler, compilationApi: CompilationApi, laws: Laws, views: Views, lock: Lock, common: Common,
    terminal: Terminal, currentProcess: Process, clock: Clock, severityOrder: SeverityOrder, devPort: DevPort, exitStatus: ExitStatus,
    layout: TerminalText, columns: TerminalColumns, cell: PaddedCell,
    counts: Counts, sequences: Sequences, texts: Texts, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/preparation").default>("./code/commands/preparation.ts"),
})

/**
 * Render a view
 * A view, rendered for the terminal, in Markdown or in JSON.
 */
export const RenderView = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { line: TrameCommands, json: JsonFormatting, preparation: Preparation, views: Views, markdown: Markdown, text: Text, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/render-view").default>("./code/commands/render-view.ts"),
})

/**
 * Assembler
 * The program of a component for an environment, and its infrastructure, ready to write.
 */
export const Assembler = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { preparation: Preparation, assembly: Assembly, layout: TerminalText, punctuation: Punctuation, texts: Texts, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/assembler").default>("./code/commands/assembler.ts"),
})

/**
 * Build
 * Checks, writes docs/ in Markdown, graph.json and snapshot.json, shows the summary.
 */
export const Build = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.build),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, markdown: Markdown, text: Text, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/build").default>("./code/commands/build.ts"),
})

/**
 * Advance
 * The generation in place builds the example and Trame's graph, assembles the candidate; the candidate builds both as it
 * did, reassembles itself to a fixed point, and the laws hold. The requirement "Accept a candidate" decides; with
 * --promote, the candidate becomes the next generation, with a copy of the graph it was assembled from.
 */
export const Advance = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.advance),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, line: TrameCommands, layout: Layout, advancement: Advancement, accept: AcceptCandidate,
    example: ExampleRoot, day: TestDay, environment: TrameEnvironment, language: TypeScript,
    programs: Programs, trees: FileTrees, reading: FileReading, writing: FileWriting, paths: Paths, hashing: Hashing,
    sha256: Sha256, fingerprint: Fingerprint, encodings: NodeEncodings, diff: UnifiedDiff, file: TextFile,
    terminal: Terminal, table: Columns, columns: TerminalText, laws: CommandMessages,
    counts: Counts, sequences: Sequences, texts: Texts, messages: AdvanceMessages,
  },
  body: code.file<typeof import("./code/commands/advance").default>("./code/commands/advance.ts"),
})

/**
 * Test the laws
 * The laws of kinds and views, and the imports.
 */
export const TestKinds = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.testKinds),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, compiler: Compiler, views: Views, laws: Laws, terminal: Terminal,
    layout: TerminalText, columns: TerminalColumns, cell: PaddedCell, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/test-kinds").default>("./code/commands/test-kinds.ts"),
})

/**
 * Take the snapshot
 */
export const TakeSnapshot = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command(commandNames.snapshot),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, markdown: Markdown, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/snapshot").default>("./code/commands/snapshot.ts"),
})

/**
 * Publish
 * The current declarations enter trame.lock and no longer change.
 */
export const Publish = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command(commandNames.publish),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, lock: Lock, writing: FileWriting, terminal: Terminal,
    layout: TerminalText, columns: TerminalColumns, cell: PaddedCell, texts: Texts, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/publish").default>("./code/commands/publish.ts"),
})

/**
 * Payload
 * The compiled graph in the intermediate format, at one date or at all of them.
 */
export const EmitPayload = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.payload),
  deps: { exitStatus: ExitStatus, preparation: Preparation, payload: PayloadBuilder, markdown: Markdown, text: Text, terminal: Terminal },
  body: code.file<typeof import("./code/commands/payload").default>("./code/commands/payload.ts"),
})

/**
 * Export the page
 */
export const Export = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.export),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, bundle: DateBundle, page: Page, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/export").default>("./code/commands/export.ts"),
})

/**
 * Start trame dev
 */
export const Dev = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.dev),
  deps: { preparation: Preparation, devServer: DevServer },
  body: code.file<typeof import("./code/commands/dev").default>("./code/commands/dev.ts"),
})

/**
 * Assemble a component
 */
export const Assemble = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.assemble),
  deps: { exitStatus: ExitStatus, preparation: Preparation, assembler: Assembler, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/assemble").default>("./code/commands/assemble.ts"),
})

/**
 * Run a component
 * Assembles, then runs the program and exits with its code.
 */
export const Run = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.run),
  deps: { exitStatus: ExitStatus, assemble: Assemble, currentProcess: Process, posix: Posix, events: NodeEvents },
  body: code.file<typeof import("./code/commands/run").default>("./code/commands/run.ts"),
})

/**
 * Show a view
 */
export const ShowView = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.view),
  deps: { exitStatus: ExitStatus, preparation: Preparation, renderView: RenderView },
  body: code.file<typeof import("./code/commands/show-view").default>("./code/commands/show-view.ts"),
})

/**
 * View by its name
 * Any other command: the name of a view.
 */
export const ViewByName = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.fallback),
  deps: { line: TrameCommands, exitStatus: ExitStatus, preparation: Preparation, renderView: RenderView, compiler: Compiler, views: Views, terminal: Terminal, texts: Texts, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/view-by-name").default>("./code/commands/view-by-name.ts"),
})
