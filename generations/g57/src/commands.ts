/** Trame · Commands */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { entryPoint, command } from "../kinds/entry-point"
import { ExecutableSpecification, SingleSource, SeverityOrder, DevPort } from "./product"
import { TrameCli, Terminal, Process, Clock, FileReading, FileWriting, Paths, Hashing, Programs, FileTrees, PackageReports, Bundler } from "./architecture"
import { Compiler, CompilationApi, Laws, Views, Lock, MachineOutputs, PayloadBuilder, DateBundle, DevServer, Assembly, Fingerprint, References, Project } from "./engine"
import { Page, PageBundle, PageDocument } from "./page"
import { Html, ScriptElement } from "./html"
import { DeliveredStyle } from "./delivery"
import { Common, FileRendering, TerminalRendering, PageRendering } from "./rendering"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import { Layout, JsonFormatting, TrameCommands, TrameEnvironment, ReferenceSyntax, commandNames } from "./conventions"
import { ExitStatus, NodeEvents, Posix, NodeEncodings, NodeModuleSpecifiers, NpmManifest } from "#std/system"
import { Sha256 } from "#std/algorithms"
import { SemanticVersioning } from "#std/measures"
import { ReleaseIsSettled, LibraryReleaseNames } from "./libraries"
import { UnifiedDiff, TextFile } from "#std/text"
import { Uri } from "#std/web"
import { PackageAudit, VersionOrder } from "./packages"
import { CommandMessages, AdvanceMessages } from "./messages"
import { TerminalText, TerminalColumns, PaddedCell, Columns } from "./text"
import { ExampleRoot, TestDay } from "./platform"
import { TypeScript, StringLiteral } from "./typescript"
import { Drivers } from "./languages"
import { Advancement, AcceptCandidate, EnginePin, LanguageSharing, Releases, ReleaseRecords } from "./generations"
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
    counts: Counts, sequences: Sequences, texts: Texts, messages: CommandMessages, projectLayout: Layout, uri: Uri, references: References,
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
  deps: { line: TrameCommands, json: JsonFormatting, preparation: Preparation, views: Views, files: FileRendering, screen: TerminalRendering, terminal: Terminal, messages: CommandMessages },
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
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, files: FileRendering, screen: TerminalRendering, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/build").default>("./code/commands/build.ts"),
})

/**
 * Advance
 * The generation in place builds Trame's libraries, the example and Trame's graph, assembles the candidate; the
 * candidate builds them all as it did, reassembles itself to a fixed point, and the laws hold. The requirement "Accept a
 * candidate" decides; with --promote, the candidate becomes the next generation, with a copy of the graph it was
 * assembled from and of its libraries'.
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
    counts: Counts, sequences: Sequences, texts: Texts, values: ValueTypes, messages: AdvanceMessages,
    pin: EnginePin, sharing: LanguageSharing, releases: Releases, records: ReleaseRecords, json: JsonFormatting,
    specifiers: NodeModuleSpecifiers, references: ReferenceSyntax, clock: Clock, project: Project,
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
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, files: FileRendering, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
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
  deps: { exitStatus: ExitStatus, preparation: Preparation, payload: PayloadBuilder, files: FileRendering, screen: TerminalRendering, pageRendering: PageRendering, terminal: Terminal },
  body: code.file<typeof import("./code/commands/payload").default>("./code/commands/payload.ts"),
})

/**
 * Audit the packages
 * Asks the registry about each package of the graph: its known vulnerabilities, its latest version.
 */
export const Audit = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command(commandNames.audit),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, reports: PackageReports, audit: PackageAudit, layout: Layout,
    reading: FileReading, writing: FileWriting, paths: Paths, versions: VersionOrder, encodings: NodeEncodings, json: JsonFormatting,
    terminal: Terminal, table: Columns, columns: TerminalText, counts: Counts, values: ValueTypes, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/audit").default>("./code/commands/audit.ts"),
})

/**
 * Write the manifest
 * The packages of the graph, at the versions their nodes declare, written as the dependencies of package.json: the
 * graph decides the versions, npm installs them. And the import map: where the name of each library the project imports
 * leads (#std/* to its sources, or to a version it froze), through a link when the library is outside the package.
 */
export const WriteManifest = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command(commandNames.manifest),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, npm: NpmManifest, layout: Layout, project: Project, specifiers: NodeModuleSpecifiers,
    reading: FileReading, writing: FileWriting, trees: FileTrees, paths: Paths, encodings: NodeEncodings, file: TextFile, json: JsonFormatting,
    language: TypeScript, terminal: Terminal, messages: CommandMessages, currentProcess: Process, events: NodeEvents, line: TrameCommands, texts: Texts,
  },
  body: code.file<typeof import("./code/commands/manifest").default>("./code/commands/manifest.ts"),
})

/**
 * Deliver
 * Writes the deliveries of the project, or the one named: for a page, the component assembled for its environment, its
 * program bundled into one script with the bundler's settings of the page, its style sheets after the variables they
 * use, in one document a browser opens as it is. Refused while the graph is in error.
 */
export const Deliver = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command(commandNames.deliver),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, assembly: Assembly, bundler: Bundler, bundle: PageBundle, document: PageDocument,
    html: Html, script: ScriptElement, style: DeliveredStyle, reading: FileReading, writing: FileWriting, paths: Paths, encodings: NodeEncodings,
    terminal: Terminal, sequences: Sequences, texts: Texts, values: ValueTypes, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/deliver").default>("./code/commands/deliver.ts"),
})

/**
 * Release a version
 * Freezes a version of a library under releases/<version>: its graph, its code, and its documents written at that
 * version; links the language at the same place, so that the copy reaches it as the library does; then writes the
 * release in the library's module of releases. Refused when something is left to decide or in error.
 */
export const Release = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command(commandNames.release),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, layout: Layout, project: Project, machine: MachineOutputs, files: FileRendering, settled: ReleaseIsSettled,
    names: LibraryReleaseNames, releases: Releases, records: ReleaseRecords, versions: SemanticVersioning, specifiers: NodeModuleSpecifiers,
    reading: FileReading, writing: FileWriting, trees: FileTrees, paths: Paths, hashing: Hashing, sha256: Sha256, fingerprint: Fingerprint,
    encodings: NodeEncodings, language: TypeScript, clock: Clock, terminal: Terminal, messages: CommandMessages, advance: AdvanceMessages, sequences: Sequences, counts: Counts,
    drivers: Drivers, text: StringLiteral,
  },
  body: code.file<typeof import("./code/commands/release").default>("./code/commands/release.ts"),
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
