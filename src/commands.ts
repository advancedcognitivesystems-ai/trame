/** Trame · Commands */

import { ReferenceSyntax } from "#std/engine"
import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { entryPoint, command } from "../kinds/entry-point"
import { ExecutableSpecification, SingleSource, SeverityOrder, DevPort } from "./product"
import { decision } from "../kinds/decision"
import { TrameCli, Terminal, Process, Clock, FileReading, FileWriting, Paths, Hashing, Programs, FileTrees, PackageReports, PackageInstalls, Bundler, Timer, HttpServer, KeptRuns, AmendmentPlace, Prelude, TypeScriptCompiler } from "./architecture"
import { Compiler, CompilationApi, Laws, Views, Lock, MachineOutputs, PayloadBuilder, DateBundle, DevServer, Assembly, Fingerprint, References, Project, EngineFingerprint, Wiring, ShipmentPipeline, Differences, JudgedHarder, Fingerprints } from "./engine"
import { SyntaxReader } from "./syntax"
import { BuildComparison } from "#commands/commands"
import { Page, PageBundle, PageDocument } from "./page"
import { Html } from "#std/html"
import { ScriptElement } from "./html"
import { DeliveredStyle, NamesLed } from "./delivery"
import { Common, FileRendering, TerminalRendering } from "#documents/rendering"
import { PageRendering } from "./rendering"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import { Layout, JsonFormatting, TrameCommands, TrameEnvironment, commandNames, AmendmentNaming, LanguageNames, ProjectStart, KeptCommands } from "./conventions"
import { PackageSources } from "#std/tooling"
import { ExitStatus, NodeEvents, Posix, NodeEncodings, NodeModuleSpecifiers, NpmManifest } from "#std/system"
import { Sha256 } from "#std/algorithms"
import { SemanticVersioning, Iso8601 } from "#std/measures"
import { ReleaseIsSettled, LibraryReleaseNames } from "./libraries"
import { UnifiedDiff, TextFile } from "#std/text"
import { Uri } from "#std/web"
import { PackageAudit, VersionOrder, NpmLockfile } from "./packages"
import { CommandMessages, AdvanceMessages, OutputMessages } from "./messages"
import { TerminalText, TerminalColumns, PaddedCell, Columns } from "#documents/text"
import { ExampleRoot, TestDay } from "./platform"
import { TypeScript, StringLiteral, TypeScriptSyntax, ModuleTitle, DocBlock, ExportDeclaration, ConstDeclaration, Call, ObjectLiteral, Property, NamedImport, InlineArray, MemberAccess } from "./typescript"
import { Drivers } from "./languages"
import { Advancement, AcceptCandidate, EnginePin, LanguageSharing, Releases, ReleaseRecords } from "./generations"
import { Punctuation } from "#documents/language"
import { ShipOnlyWhatHolds, SdlcEvidence, ShipmentRunPlan, ProgramBundle } from "./shipping"
import { EngineNeeds } from "./doctor"
import { Anyone } from "#std/access"

/**
 * The project's commands
 * The commands of a project (E3): the entry points a command triggers in the components of its own graph that std's
 * ProgramCommands exposes; and those of them that never run, which a command of the engine or a view answers first, or
 * another command of the project has the name of.
 */
export const ProjectCommands = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { wiring: Wiring, counts: Counts, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/project-commands").default>("./code/commands/project-commands.ts"),
})

/**
 * The add-ons of a command the engine keeps
 * The realizations of one of its extension points (std's) that a choice of the project makes, wired in the project's
 * graph in the engine's process, in the order chosen (since g120); each run whatever the others did, what failed said.
 */
export const AddOns = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { wiring: Wiring, counts: Counts, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/add-ons").default>("./code/commands/add-ons.ts"),
})

/**
 * Preparation
 * Reads the options, checks and compiles the project, refuses cleanly: what all commands share. It gives the engine's
 * API (since g124), which the language defines: the project as the dispatch prepared it for a command, another project
 * compiled at a date, each with what a view receives and the graph as a build writes it, where a project's files
 * are, and the engine's reader of languages (since g128). The engine is the running one while it compiles: a library's
 * scenario it plays, or a language of a library it reads, reaches the API then.
 */
export const Preparation = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { line: TrameCommands,
    compiler: Compiler, compilationApi: CompilationApi, laws: Laws, views: Views, lock: Lock, common: Common,
    terminal: Terminal, currentProcess: Process, clock: Clock, severityOrder: SeverityOrder, devPort: DevPort, exitStatus: ExitStatus,
    layout: TerminalText, columns: TerminalColumns, cell: PaddedCell,
    counts: Counts, sequences: Sequences, texts: Texts, messages: CommandMessages, projectLayout: Layout, uri: Uri, references: References,
    projectCommands: ProjectCommands, kept: KeptCommands, machine: MachineOutputs, paths: Paths, reading: FileReading, specifiers: NodeModuleSpecifiers, reader: SyntaxReader,
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
  deps: { preparation: Preparation, assembly: Assembly, layout: TerminalText, punctuation: Punctuation, texts: Texts, counts: Counts, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/assembler").default>("./code/commands/assembler.ts"),
})

/**
 * Build
 * Checks, writes docs/ in Markdown, graph.json and snapshot.json, shows the summary.
 */
export const Build = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
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
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.promotion),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, engines: EngineFingerprint, line: TrameCommands, layout: Layout, advancement: Advancement, accept: AcceptCandidate,
    example: ExampleRoot, day: TestDay, environment: TrameEnvironment, language: TypeScript,
    programs: Programs, trees: FileTrees, reading: FileReading, writing: FileWriting, paths: Paths, hashing: Hashing,
    sha256: Sha256, fingerprint: Fingerprint, encodings: NodeEncodings, diff: UnifiedDiff, file: TextFile,
    terminal: Terminal, table: Columns, columns: TerminalText, laws: CommandMessages,
    counts: Counts, sequences: Sequences, texts: Texts, values: ValueTypes, messages: AdvanceMessages,
    pin: EnginePin, sharing: LanguageSharing, releases: Releases, records: ReleaseRecords, json: JsonFormatting,
    specifiers: NodeModuleSpecifiers, references: ReferenceSyntax, clock: Clock, project: Project, packages: PackageSources, names: LanguageNames,
  },
  body: code.file<typeof import("./code/commands/advance").default>("./code/commands/advance.ts"),
})

/**
 * Test the laws
 * The laws of kinds and views, and the imports.
 */
export const TestKinds = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
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
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.snapshot),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, files: FileRendering, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/snapshot").default>("./code/commands/snapshot.ts"),
})

/**
 * Publish
 * The current declarations enter trame.lock and no longer change.
 */
export const Publish = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
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
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.payload),
  deps: { exitStatus: ExitStatus, preparation: Preparation, payload: PayloadBuilder, files: FileRendering, screen: TerminalRendering, pageRendering: PageRendering, terminal: Terminal },
  body: code.file<typeof import("./code/commands/payload").default>("./code/commands/payload.ts"),
})

/**
 * Audit the packages
 * Asks the registry about each package of the graph: its known vulnerabilities, its latest version.
 */
export const Audit = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
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
 * leads (#std/* to its sources, or to a version it froze), and where the language's names lead (#trame/kernel,
 * #trame/kinds/*: the generation it pins), each package placed by where it comes from.
 */
export const WriteManifest = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.manifest),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, npm: NpmManifest, layout: Layout, project: Project, specifiers: NodeModuleSpecifiers,
    reading: FileReading, writing: FileWriting, packages: PackageSources, names: LanguageNames, prelude: Prelude, pin: EnginePin, values: ValueTypes, counts: Counts,
    paths: Paths, encodings: NodeEncodings, installs: PackageInstalls, lock: NpmLockfile,
    file: TextFile, json: JsonFormatting, language: TypeScript, terminal: Terminal, messages: CommandMessages, currentProcess: Process, events: NodeEvents,
    line: TrameCommands, texts: Texts,
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
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.deliver),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, assembly: Assembly, assembler: Assembler, bundler: Bundler, led: NamesLed, bundle: PageBundle, document: PageDocument,
    html: Html, script: ScriptElement, style: DeliveredStyle, reading: FileReading, writing: FileWriting, paths: Paths, encodings: NodeEncodings,
    terminal: Terminal, sequences: Sequences, texts: Texts, values: ValueTypes, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/deliver").default>("./code/commands/deliver.ts"),
})

/**
 * Ship
 * trame ship <shipment> --by <name>: runs the shipment's pipeline as the engine computes it (the one the view of the
 * pipelines shows): builds its artefacts (and those its checks read), runs the checks a program of the SDLC makes,
 * records what they found as evidence attributed to the person who ships; compiles again, and refuses while an
 * obligation does not hold, saying which and whose (requirement "Ship only what holds"); then runs the programs that
 * deploy it, in order, and writes its dossier. --dry-run stops before deploying. The programs of the SDLC are assembled
 * for the shipment's environment.
 */
export const Ship = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ShipOnlyWhatHolds],
  trigger: command(commandNames.ship),
  deps: {
    exitStatus: ExitStatus, line: TrameCommands, preparation: Preparation, deliver: Deliver, assembly: Assembly, assembler: Assembler, sdlc: SdlcEvidence, runPlan: ShipmentRunPlan,
    holds: ShipOnlyWhatHolds, bundler: Bundler, led: NamesLed, programBundle: ProgramBundle,
    currentProcess: Process, projectCommands: ProjectCommands, events: NodeEvents, reading: FileReading, writing: FileWriting, paths: Paths, encodings: NodeEncodings, terminal: Terminal,
    sequences: Sequences, counts: Counts, values: ValueTypes, engines: EngineFingerprint, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/ship").default>("./code/commands/ship.ts"),
})

/**
 * Record evidence
 * trame evidence <node> passed|failed --by <name>: what a person gives, attributed to them, on what is there now: a
 * check made by hand (for the artefacts as last built), a review (each row of a dataset in each language, or a node as
 * it is written), where an artefact was deployed. Refused to someone not of the role that signs it, or who reviews their
 * own work when the role forbids it.
 */
export const RecordEvidence = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ShipOnlyWhatHolds],
  trigger: command(commandNames.evidence),
  deps: {
    exitStatus: ExitStatus, line: TrameCommands, preparation: Preparation, sdlc: SdlcEvidence, writing: FileWriting, paths: Paths, terminal: Terminal,
    sequences: Sequences, counts: Counts, values: ValueTypes, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/evidence").default>("./code/commands/evidence.ts"),
})

/**
 * Release a version
 * Freezes a version of a library under releases/<version>: its graph, its code, and its documents written at that
 * version; links the language at the same place, so that the copy reaches it as the library does; then writes the
 * release in the library's module of releases. Refused when something is left to decide or in error.
 */
export const Release = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.release),
  deps: {
    packages: PackageSources,
    exitStatus: ExitStatus, preparation: Preparation, layout: Layout, project: Project, machine: MachineOutputs, files: FileRendering, settled: ReleaseIsSettled,
    names: LibraryReleaseNames, releases: Releases, records: ReleaseRecords, versions: SemanticVersioning, specifiers: NodeModuleSpecifiers,
    reading: FileReading, writing: FileWriting, trees: FileTrees, paths: Paths, hashing: Hashing, sha256: Sha256, fingerprint: Fingerprint,
    encodings: NodeEncodings, language: TypeScript, clock: Clock, terminal: Terminal, messages: CommandMessages, advance: AdvanceMessages, sequences: Sequences, counts: Counts,
    drivers: Drivers, text: StringLiteral, ship: Ship, line: TrameCommands,
  },
  body: code.file<typeof import("./code/commands/release").default>("./code/commands/release.ts"),
})

/**
 * Export the page
 */
export const Export = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.export),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, bundle: DateBundle, page: Page, project: Project, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/export").default>("./code/commands/export.ts"),
})


/**
 * Ask the machine
 * trame doctor: does this machine run Trame? It says the day, writes a file and reads it back, copies a directory and
 * compares the copy, runs a program with the engine's loader, keeps a run until a file changes, serves HTTP on a port
 * the system gives, waits, and asks
 * the registry about the project's packages: one line for each, and the status of the whole. Run on a machine by a
 * check of Trame's shipment, it proves the realizations no scenario in memory can run.
 */
export const Doctor = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.doctor),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, engine: EngineNeeds, terminal: Terminal, messages: CommandMessages, addOns: AddOns,
  },
  body: code.file<typeof import("./code/commands/doctor").default>("./code/commands/doctor.ts"),
})

/**
 * Plan a build
 * trame plan: what a build would change, written nowhere. It compiles the graph now (or at --at) and compares it with
 * graph.json, the last build: nodes added and removed, statuses that change, nodes whose fields, result or edges
 * change, issues raised and resolved, and the shipments whose obligations are touched. A person reads it before
 * building, a review before accepting a change.
 */
export const Plan = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.plan),
  deps: {
    exitStatus: ExitStatus, layout: Layout, text: TerminalText, preparation: Preparation, machine: MachineOutputs, comparison: BuildComparison,
    reading: FileReading, paths: Paths, encodings: NodeEncodings, terminal: Terminal, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/plan").default>("./code/commands/plan.ts"),
})

/**
 * An amendment prepared
 * A chosen value of a node changed by an amendment, compiled first with the graph in memory, the day it comes into
 * force: what it would change, or why it is refused (a value code is built on, a cited one without its source, a value
 * of another type, an error raised). It writes nothing: trame amend and trame dev record it, through the port "Where an
 * amendment goes".
 */
export const Amending = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: {
    preparation: Preparation, machine: MachineOutputs, comparison: BuildComparison, prelude: Prelude, references: References, project: Project,
    specifiers: NodeModuleSpecifiers, layout: Layout, values: ValueTypes, paths: Paths, messages: CommandMessages, naming: AmendmentNaming, counts: Counts,
  },
  body: code.file<typeof import("./code/commands/amending").default>("./code/commands/amending.ts"),
})

/**
 * Amend
 * Changes a chosen value of a node by an amendment: who, why, from when, the value. What it would change is said first
 * (statuses, issues raised, a criterion or a scenario that would fail); unless it raises an error (or --accept), it is
 * recorded where the project's amendments go, and its owner's approval awaited when someone else wrote it. --dry-run
 * only says. A cited value changes only with its source (--source); a value code is built on, never from here.
 */
export const Amend = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.amend),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, amending: Amending, place: AmendmentPlace, paths: Paths, text: TerminalText, terminal: Terminal,
    messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/amend").default>("./code/commands/amend.ts"),
})

/**
 * Upgrade
 * Moves each package of Trame the project references, or those named, to the newest version its origin holds: the
 * reference written again in its module, then the manifest (C1, since g100).
 */
export const Upgrade = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.upgrade),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, reading: FileReading, writing: FileWriting, paths: Paths, versions: VersionOrder, text: StringLiteral,
    file: TextFile, encodings: NodeEncodings, events: NodeEvents, currentProcess: Process, line: TrameCommands, values: ValueTypes, sequences: Sequences,
    counts: Counts, texts: Texts, terminal: Terminal, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/upgrade").default>("./code/commands/upgrade.ts"),
})

/**
 * Fill the registry
 * Publishes to the registry of this machine the generations frozen in the language's home (each with its language)
 * and the releases of its libraries; after a clone, what fills the registry again.
 */
export const Registry = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.registry),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, layout: Layout, project: Project, packages: PackageSources, names: LanguageNames,
    reading: FileReading, trees: FileTrees, paths: Paths, terminal: Terminal, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/registry").default>("./code/commands/registry.ts"),
})

/**
 * A module of references
 * Writes the packages of Trame a project uses as package nodes, as a person would: trame init writes the first, an
 * advance the example's language.
 */
export const ReferencesModule = fn({
  owner: "trame", serves: [SingleSource],
  deps: {
    syntax: TypeScriptSyntax, title: ModuleTitle, doc: DocBlock, exported: ExportDeclaration, constant: ConstDeclaration, call: Call, object: ObjectLiteral,
    property: Property, text: StringLiteral, list: InlineArray, imports: NamedImport, texts: Texts,
  },
  body: code.file<typeof import("./code/commands/references").default>("./code/commands/references.ts"),
})

/**
 * Start a project
 * In an empty directory: its configuration (the generation that runs, the libraries the language's home uses), a
 * first module with the goal it serves, the guide for agents and the skill, then its manifest, by a fresh engine.
 */
export const Init = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [SingleSource],
  trigger: command(commandNames.init),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, layout: Layout, project: Project, prelude: Prelude, start: ProjectStart, pin: EnginePin,
    reading: FileReading, writing: FileWriting, paths: Paths, encodings: NodeEncodings, file: TextFile, json: JsonFormatting, language: TypeScript,
    syntax: TypeScriptSyntax, title: ModuleTitle, doc: DocBlock, exported: ExportDeclaration, constant: ConstDeclaration, call: Call, object: ObjectLiteral,
    property: Property, text: StringLiteral, imports: NamedImport, terminal: Terminal, messages: CommandMessages, currentProcess: Process,
    events: NodeEvents, line: TrameCommands, texts: Texts, references: ReferencesModule, names: LanguageNames, specifiers: NodeModuleSpecifiers,
    member: MemberAccess, list: InlineArray, addOns: AddOns, projectCommands: ProjectCommands, values: ValueTypes, counts: Counts,
  },
  body: code.file<typeof import("./code/commands/init").default>("./code/commands/init.ts"),
})

/**
 * Start trame dev
 */
export const Dev = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.dev),
  deps: { preparation: Preparation, devServer: DevServer, amending: Amending, place: AmendmentPlace, paths: Paths },
  body: code.file<typeof import("./code/commands/dev").default>("./code/commands/dev.ts"),
})

/**
 * Assemble a component
 */
export const Assemble = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.assemble),
  deps: { exitStatus: ExitStatus, preparation: Preparation, assembler: Assembler, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/assemble").default>("./code/commands/assemble.ts"),
})

/**
 * Run a component
 * Assembles, then runs the program and exits with its code.
 */
export const Run = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.run),
  deps: { exitStatus: ExitStatus, assemble: Assemble, currentProcess: Process, posix: Posix, events: NodeEvents },
  body: code.file<typeof import("./code/commands/run").default>("./code/commands/run.ts"),
})

/**
 * Show a view
 */
export const ShowView = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.view),
  deps: { exitStatus: ExitStatus, preparation: Preparation, renderView: RenderView },
  body: code.file<typeof import("./code/commands/show-view").default>("./code/commands/show-view.ts"),
})

/**
 * A command of the project, or a view
 * Any other word: the name of a view, or of a command of the project (E3), whose component is assembled for its
 * environment and run with the rest of the line, as trame run would. A command of the engine it does not keep is asked
 * here first (since g119): the project's of that name replaces it. A program whose commands run in the engine is
 * imported in the engine's process, with the engine's modules.
 */
export const CommandOrView = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.fallback),
  deps: {
    line: TrameCommands, exitStatus: ExitStatus, preparation: Preparation, renderView: RenderView, compiler: Compiler, views: Views,
    assembler: Assembler, projectCommands: ProjectCommands, writing: FileWriting, paths: Paths, currentProcess: Process, posix: Posix, events: NodeEvents,
    terminal: Terminal, counts: Counts, sequences: Sequences, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/command-or-view").default>("./code/commands/command-or-view.ts"),
})

/**
 * Rewriting an example
 * An example's output written again where its element's declaration has it: as JSON, or as the lines its array joins.
 */
export const ExampleRewriting = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { ts: TypeScriptCompiler, file: TextFile, sequences: Sequences, texts: Texts, syntax: TypeScriptSyntax, values: ValueTypes },
  body: code.file<typeof import("./code/commands/example-rewriting").default>("./code/commands/example-rewriting.ts"),
})

/**
 * Examples
 * trame examples [--accept]: the examples of the project's syntax elements not met, with what they write; written
 * again in their declarations with --accept.
 */
export const Examples = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.examples),
  deps: {
    exitStatus: ExitStatus, preparation: Preparation, rewriting: ExampleRewriting, reading: FileReading, writing: FileWriting, paths: Paths, terminal: Terminal,
    line: TrameCommands, encodings: NodeEncodings, counts: Counts, messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/examples").default>("./code/commands/examples.ts"),
})

/**
 * Help
 * What a person may type here: the commands of the engine, those of the project with the entry point and the component
 * each runs, and the views.
 */
export const Help = entryPoint({
  owner: "trame", in: TrameCli, for: Anyone, serves: [ExecutableSpecification],
  trigger: command(commandNames.help),
  deps: { exitStatus: ExitStatus, preparation: Preparation, projectCommands: ProjectCommands, views: Views, terminal: Terminal, cell: PaddedCell, columns: TerminalColumns, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/help").default>("./code/commands/help.ts"),
})
