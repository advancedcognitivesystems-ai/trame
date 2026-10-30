/** Trame · Platform */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { implementation } from "../kinds/implementation"
import { fn } from "../kinds/function"
import { binding } from "../kinds/binding"
import {
  Prelude, FileReading, FileWriting, Paths, ModuleLoader, TypeScriptCompiler, SyntaxTrees, Hashing, KeptResults, Process, Terminal,
  Clock, Timer, HttpServer, Bundler, Compression, Resources, CommandLine, WriteLog, TerminalLog, ProcessLog, ServerLog, Programs, FileTrees, PackageReports,
  Local, Test, Browser, PageWindow, PageMemory, GraphFeed, Decompression, RunStore,
} from "./architecture"
import { EngineFingerprint, KeptRunsScope, ProjectRuns } from "./engine"
import { PackedGraph } from "./page"
import { PageLoading } from "#std/platform"
import { TsxPackage, TypeScriptPackage, NodeTypes, WebTreeSitterPackage, EsbuildPackage } from "./packages"
import { ExitStatus, NodeArguments, NodeCli, NodeEvents, Posix, NpmCli, NodeModuleSpecifiers, NodeEncodings } from "#std/system"
import { Iso8601 } from "#std/measures"
import { UnifiedDiff, TextFile } from "#std/text"
import { Punctuation } from "./documents"
import { PlatformMessages } from "./messages"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import { TrameCommands, TrameEnvironment, Layout } from "./conventions"
import { Advancement } from "./generations"
import { TypeScript } from "./typescript"
import { Adapter, AbstractFactory, Strategy } from "#std/patterns"
import { ReplaceableTechnology } from "./product"

/**
 * Example project
 * The project on which the scenarios run the engine, relative to Trame's root.
 */
export const ExampleRoot = decision<string>({ owner: "trame", value: "examples/reservations" })

/**
 * Where the engine's own files are
 * From the code of the platform: the prelude's internal module (its extension aside, as a program imports it), the
 * root of the engine, where the page's program is found as the assembly writes it, and the page's style sheets.
 */
export const EngineFiles = decision<{ prelude: string; preludeExtension: string; root: string; pageStyle: string; narrowStyle: string }>({
  owner: "trame",
  value: { prelude: "../../../trame/internal", preludeExtension: ".ts", root: "../../../", pageStyle: "../page/page.css", narrowStyle: "../page/narrow.css" },
})

/**
 * Runner of TypeScript
 * The module Node imports first to run a program written in TypeScript, as the engine itself runs (tsx).
 */
export const TypeScriptRunner = decision<string>({ owner: "trame", value: "tsx" })

/**
 * Day of the scenarios
 * The date the engine sees in test: the one on which the expected documents of the example were built.
 */
export const TestDay = decision<string>({ owner: "trame", value: "2026-10-17" })

// The platform's realizations: the implementations touch Node, TypeScript, esbuild or tree-sitter; the functions, used
// in the scenarios, touch nothing. None of them says where it serves: the technical choices at the end of the module do.

// Used on a machine and in the scenarios ---------------------------------------------------

/**
 * Trame's prelude
 */
export const TramePrelude = implementation({
  owner: "trame", implements: [Prelude],
  deps: { files: EngineFiles },
  body: code.file("./code/platform/prelude.ts"),
})

/**
 * System files, for reading
 */
export const DiskReading = implementation({
  owner: "trame", implements: [FileReading],
  body: code.file("./code/platform/disk-reading.ts"),
})

/**
 * Node paths
 */
export const NodePaths = implementation({
  owner: "trame", implements: [Paths],
  body: code.file("./code/platform/paths.ts"),
})

/**
 * tsx loader
 * Runs the TypeScript modules of the project as they are.
 */
export const TsxLoader = implementation({
  owner: "trame", implements: [ModuleLoader],
  packages: [TsxPackage],
  body: code.file("./code/platform/tsx-loader.ts"),
})

/**
 * TypeScript compiler
 */
export const RealTypeScript = implementation({
  owner: "trame", implements: [TypeScriptCompiler],
  packages: [TypeScriptPackage, NodeTypes],
  body: code.file("./code/platform/typescript.ts"),
})

/**
 * tree-sitter in WebAssembly
 * The syntax trees of the bodies, with web-tree-sitter and the grammars that the languages name.
 */
export const WebTreeSitter = implementation({
  owner: "trame", implements: [SyntaxTrees],
  packages: [WebTreeSitterPackage],
  deps: { messages: PlatformMessages },
  body: code.file("./code/platform/web-tree-sitter.ts"),
})

/**
 * SHA-256 hashes
 */
export const NodeHashing = implementation({
  owner: "trame", implements: [Hashing],
  body: code.file("./code/platform/hashing.ts"),
})

/**
 * gzip, with Node's zlib
 * The graph of a page compressed as "A page carries its graph compressed" says: gzip, written in base64.
 */
export const NodeCompression = implementation({
  owner: "trame", implements: [Compression],
  deps: { packing: PackedGraph },
  body: code.file("./code/platform/compression.ts"),
})

/**
 * npm's reports
 * The registry's reports on the packages a project installs, asked of npm's command line.
 */
export const NpmReports = implementation({
  owner: "trame", implements: [PackageReports],
  deps: { npm: NpmCli, values: ValueTypes, counts: Counts, punctuation: Punctuation },
  body: code.file("./code/platform/npm-reports.ts"),
})

/**
 * Node timer
 */
export const NodeTimer = implementation({
  owner: "trame", implements: [Timer],
  body: code.file("./code/platform/timer.ts"),
})

/**
 * Node HTTP server
 */
export const NodeHttpServer = implementation({
  owner: "trame", implements: [HttpServer],
  body: code.file("./code/platform/http.ts"),
})

/**
 * esbuild
 */
export const Esbuild = implementation({
  owner: "trame", implements: [Bundler],
  packages: [EsbuildPackage],
  body: code.file("./code/platform/esbuild.ts"),
})

/**
 * Page resources
 */
export const PageResources = implementation({
  owner: "trame", implements: [Resources],
  deps: {
    files: EngineFiles, layout: Layout, advancement: Advancement, language: TypeScript, specifiers: NodeModuleSpecifiers,
    texts: Texts, sequences: Sequences,
  },
  body: code.file("./code/platform/page-resources.ts"),
})

// Used on a machine ----------------------------------------------------------------------

/**
 * System files, for writing
 */
export const DiskWriting = implementation({
  owner: "trame", implements: [FileWriting],
  body: code.file("./code/platform/disk-writing.ts"),
})

/**
 * Node process
 */
export const NodeProcess = implementation({
  owner: "trame", implements: [Process],
  deps: { argv: NodeArguments, node: NodeCli, runner: TypeScriptRunner },
  body: code.file("./code/platform/process.ts"),
})

/**
 * Node programs
 * Another engine, run with the same loader; what it prints on its standard output is read, its errors reach the terminal.
 */
export const NodePrograms = implementation({
  owner: "trame", implements: [Programs],
  deps: { node: NodeCli, runner: TypeScriptRunner, events: NodeEvents },
  body: code.file("./code/platform/programs.ts"),
})

/**
 * Trees on disk
 * Copies, links and removes with Node's file system; compares with GNU diff.
 */
export const DiskTrees = implementation({
  owner: "trame", implements: [FileTrees],
  deps: { diff: UnifiedDiff, node: NodeCli, events: NodeEvents },
  body: code.file("./code/platform/trees.ts"),
})

/**
 * Node terminal
 */
export const NodeTerminal = implementation({
  owner: "trame", implements: [Terminal],
  deps: { argv: NodeArguments, exitStatus: ExitStatus, events: NodeEvents, posix: Posix, messages: PlatformMessages },
  body: code.file("./code/platform/terminal.ts"),
})

/**
 * System clock
 */
export const SystemClock = implementation({
  owner: "trame", implements: [Clock],
  deps: { iso: Iso8601, environment: TrameEnvironment, sequences: Sequences },
  body: code.file("./code/platform/system-clock.ts"),
})

/**
 * Command line
 * The first argument chooses the command; the following ones are passed to it as they are.
 */
export const NodeCommandLine = implementation({
  owner: "trame", implements: [CommandLine],
  deps: { terminal: Terminal, exitStatus: ExitStatus, line: TrameCommands, messages: PlatformMessages },
  body: code.file("./code/platform/command-line.ts"),
})

// Used in the scenarios: functions that touch nothing --------------------------------------

/**
 * Example process
 * The current directory is the example project's, or the project of the repository a scenario enters, resolved by the
 * paths of the platform. A program it starts (the engine relaunched, a program run, another engine) runs nothing: it
 * prints what the scenario said it answers and exits with that status; what was started is kept for the scenario.
 */
export const ExampleProcess = fn({
  owner: "trame", implements: [Process, Programs, ProcessLog],
  deps: { root: ExampleRoot, paths: Paths, line: TrameCommands, events: NodeEvents, messages: PlatformMessages },
  body: code.file("./code/platform/example-process.ts"),
})

/**
 * No registry in test
 * The scenarios ask no registry: no package is reported on.
 */
export const NoReportsInTest = fn({
  owner: "trame", implements: [PackageReports],
  body: () => ({ audit: async () => [], outdated: async () => [] }),
})

/**
 * Temporary directories in memory
 * What a temporary directory in memory is named after, in the current directory, with its number.
 */
export const MemoryTemporary = decision<{ prefix: string }>({ owner: "trame", value: { prefix: ".scenario-" } })

/**
 * Files in memory, over the disk
 * What the engine writes stays in memory and is read back first; the disk underneath is read, never written. Trees are
 * copied, linked and removed in memory and compared in the unified format; a watch is told of each file written under
 * it. The scenario reads what was written.
 */
export const MemoryFiles = implementation({
  owner: "trame", implements: [FileReading, FileWriting, FileTrees, WriteLog],
  deps: {
    paths: Paths, temporary: MemoryTemporary, diff: UnifiedDiff, file: TextFile, events: NodeEvents, encodings: NodeEncodings,
    texts: Texts, counts: Counts, sequences: Sequences, values: ValueTypes, messages: PlatformMessages,
  },
  body: code.file("./code/platform/memory-files.ts"),
})

/**
 * A server in memory
 * trame dev starts it as a server of Node.js; the scenario asks it for a path as a browser would. Nothing listens on the
 * network.
 */
export const MemoryHttpServer = fn({
  owner: "trame", implements: [HttpServer, ServerLog],
  deps: { events: NodeEvents, texts: Texts, messages: PlatformMessages },
  body: code.file("./code/platform/memory-http.ts"),
})

/**
 * Lines shown on an exit in test
 * When the engine exits during a scenario, the error says the last lines it printed: enough to see why.
 */
export const LinesOnExit = decision<number>({ owner: "trame", value: 3 })

/**
 * Time of the scenarios
 * The time of day the stopped clock shows on the day of the scenarios, in UTC: in the morning, the same date in every
 * time zone of Europe.
 */
export const TestTime = decision<string>({ owner: "trame", value: "08:00:00.000Z" })

/**
 * Terminal in memory
 * Keeps each line. Exiting throws an error instead of stopping the process. The scenario types the arguments the next
 * command line reads.
 */
export const MemoryTerminal = fn({
  owner: "trame", implements: [Terminal, TerminalLog],
  deps: { kept: LinesOnExit, sequences: Sequences, messages: PlatformMessages },
  body: code.file("./code/platform/memory-terminal.ts"),
})

/**
 * Stopped clock
 */
export const StoppedClock = fn({
  owner: "trame", implements: [Clock],
  deps: { day: TestDay, time: TestTime, iso: Iso8601 },
  body: code.file("./code/platform/stopped-clock.ts"),
})

// Technical choices ---------------------------------------------------------------------

/**
 * The engine runs on Node.js
 * Everywhere the engine runs, Node.js reads the files, resolves the paths, hashes, waits, serves HTTP and reads the
 * command line: a family of adapters that would change together.
 */
/**
 * Results kept in the process
 * One map for the whole process, whatever the number of sessions that wire it: the program assembled and every session
 * of the scenarios share it, and it goes with the process.
 */
export const ResultsInTheProcess = implementation({
  owner: "trame", implements: [KeptResults],
  body: code.file("./code/platform/kept-results.ts"),
})

/**
 * Runs kept in the process
 * One map for the whole process, by keys that already tell the projects and the states of their files apart: the
 * scenarios of a scenario's project, compiled again and again in memory, are played once while nothing they read
 * changed.
 */
export const RunsInTheProcess = implementation({
  owner: "trame", implements: [RunStore],
  body: code.file("./code/platform/runs-in-the-process.ts"),
})

/**
 * Runs kept on disk
 * Under the project's library links, one directory per engine (found from where its code is), one file per run: the
 * next build, the assembly after a build and the generation that builds the same graph again find what was played.
 */
export const RunsOnDisk = implementation({
  owner: "trame", implements: [RunStore],
  deps: { layout: Layout, files: EngineFiles, engines: EngineFingerprint, scope: KeptRunsScope, encodings: NodeEncodings },
  body: code.file("./code/platform/runs-on-disk.ts"),
})

export const NodePlatform = binding({
  owner: "trame",
  chooses: [NodePaths, NodeHashing, NodeCompression, NodeTimer, NodeCommandLine, ResultsInTheProcess],
  environments: [Local, Test],
  follows: [Adapter, AbstractFactory],
  serves: [ReplaceableTechnology],
  context: "The bootstrap ran on Node.js, and the tools Trame uses are npm packages that resolve the Node way: the TypeScript compiler, esbuild, tsx, the tree-sitter grammars.",
  consequences: "Node's built-in modules appear only in these implementations; moving to another runtime is a new family of adapters and this choice changed, the engine untouched.",
  rejected: {
    "Deno": "its module resolution and its permissions would change how every package above loads",
    "Bun": "faster to start, but the WebAssembly grammars and the TypeScript compiler were not tried on it",
  },
})

/**
 * On a machine, Node.js reads, writes and runs
 * On the machine where trame is started, Node.js reads and writes the files, copies and compares trees, starts
 * processes and other engines, serves HTTP, shows the terminal and gives the time.
 */
export const NodeMachine = binding({
  owner: "trame",
  chooses: [DiskReading, DiskWriting, DiskTrees, NodeProcess, NodePrograms, NodeTerminal, SystemClock, NpmReports, NodeHttpServer],
  environments: [Local],
  follows: [Adapter, AbstractFactory],
  serves: [ReplaceableTechnology],
  context: "What changes the world (files written, processes, the terminal, the clock) is real only on a machine; the scenarios keep it in memory.",
  consequences: "Writing goes through FileWriting and FileTrees only, which the rule \"Only commands write\" checks; comparing trees uses GNU diff, through a process.",
  rejected: { "A library to compare trees": "GNU diff writes the unified format the advance keeps, and is on every machine that runs it" },
})

/**
 * Scenarios write in memory, over the disk
 * In the scenarios, the files are read from the disk and what the engine writes is kept in memory over them: one
 * adapter that reads Node's file system and never writes it.
 */
export const FilesInMemoryOverTheDisk = binding({
  owner: "trame",
  chooses: [MemoryFiles],
  environments: [Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "A scenario runs commands that write, then read what they wrote: a shipment rereads the evidence it recorded, a release reads the copy it froze.",
  consequences: "Reading and writing are one realization in the scenarios, so that what is written is read back; the disk is never written.",
  rejected: { "Reading the disk, writing in memory, apart": "what a command wrote could not be read back: the shipment, the release and the manifest would be verified nowhere" },
})

/**
 * Scenarios run in memory
 * In the scenarios, what the engine writes is kept in memory over the disk it reads, what it prints is kept, the clock
 * is stopped on the day of the scenarios, the current directory is the example's (or the project a scenario enters),
 * the programs it starts answer what the scenario says, and its server answers the scenario.
 */
export const InMemoryScenarios = binding({
  owner: "trame",
  chooses: [MemoryTerminal, StoppedClock, NoReportsInTest, ExampleProcess, MemoryHttpServer],
  environments: [Test],
  follows: [Strategy, AbstractFactory],
  serves: [ReplaceableTechnology],
  context: "A scenario runs the described engine on the example and reads what it wrote and printed; it must give the same result every day and leave nothing behind.",
  consequences: "These realizations touch nothing but the disk they read: the logs a scenario reads come with what writes them, chosen together. The disk, the processes and the server of a machine are verified by the checks the candidate runs on one.",
  rejected: {
    "A temporary directory": "slower, and a scenario could read what was written only through the platform",
    "The system clock": "the documents of the example would change every day",
    "Commands that refuse in test": "the advance, the release, the manifest, the shipment and trame dev would be verified nowhere",
  },
})

/**
 * A run is kept while what it reads is as it was
 * The runs of a project (its scenarios played) are told apart by the code they wire and the files the project reads;
 * on a machine they are kept on disk, in the scenarios in the process.
 */
export const RunsByWhatTheyRead = binding({
  owner: "trame",
  chooses: [ProjectRuns],
  environments: [Local, Test],
  follows: [Strategy],
  serves: [ReplaceableTechnology],
  context: "A build of Trame played its scenarios 2,030 times: Poselia's eleven times, the example's thirty-six, for a hundred seconds of the hundred and forty; a shipment compiles Trame's graph a dozen times with the same code.",
  consequences: "A scenario is played again only when the code it wires or a file its project reads has changed: a body changed plays again the scenarios that wire it, any other file all of them.",
  rejected: { "Playing every scenario at every compilation": "the same code on the same files gives the same result; a shipment took thirty-six minutes" },
})

/**
 * On a machine, runs are kept on disk
 */
export const RunsKeptOnDisk = binding({
  owner: "trame",
  chooses: [RunsOnDisk],
  environments: [Local],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The commands of a shipment and of an advance run as separate processes, each compiling the same graph: what one played, the next can find only on disk.",
  consequences: "Each project keeps its runs under .trame/runs, by engine; the oldest go. Deleting the directory loses nothing but time.",
  rejected: { "A server that keeps them": "one more process to start, for what files under the project do" },
})

/**
 * In the scenarios, runs are kept in the process
 */
export const RunsKeptInTheProcess = binding({
  owner: "trame",
  chooses: [RunsInTheProcess],
  environments: [Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "A scenario compiles its project again and again in memory: Poselia's scenarios were played eleven times in a build of Trame, the example's thirty-six.",
  consequences: "What a scenario of a scenario's project played is found again in the process while nothing it reads has changed; the disk is never written.",
  rejected: { "On disk, as on a machine": "a scenario must leave nothing behind" },
})

/**
 * esbuild bundles the page's program
 */
export const EsbuildBundles = binding({
  owner: "trame",
  chooses: [Esbuild],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The page's program is TypeScript in several modules, the graph's among them; a standalone page needs it as one script, built when the page is asked for.",
  rejected: {
    "tsc alone": "it compiles but does not bundle: the page would load its modules one by one",
    "Rollup or webpack": "plugins and configuration for what esbuild does in one call",
  },
})

/**
 * tree-sitter reads the bodies
 */
export const TreeSitterReads = binding({
  owner: "trame",
  chooses: [WebTreeSitter],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "Bodies are written in several languages (TypeScript, Terraform, CSS) and read alike, by one reader and the queries of each language.",
  rejected: {
    "The TypeScript compiler's API": "it reads TypeScript only: every other language would need its own parser",
    "Regular expressions": "the old drivers; they missed what a grammar sees",
    "Native tree-sitter bindings": "a compiler at install time; WebAssembly runs wherever Node does",
  },
})

/**
 * tsx runs TypeScript
 */
export const TsxRuns = binding({
  owner: "trame",
  chooses: [TsxLoader],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The graph, its bodies and the generations are TypeScript, run as they are written.",
  consequences: "The processes the engine starts import the same runner (the decision TypeScriptRunner).",
  rejected: {
    "Compiling with tsc first": "one more step, and each generation would keep JavaScript beside its sources",
    "ts-node": "slower to start than tsx, which already runs the engine",
  },
})

/**
 * The TypeScript compiler reads the declarations
 */
export const CompilerReadsDeclarations = binding({
  owner: "trame",
  chooses: [RealTypeScript],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The static analysis needs what only types say: the type argument of a decision, the documentation comment of a declaration, the module a reference points to.",
  rejected: { "tree-sitter alone": "it sees the syntax, not the types" },
})

/**
 * The engine's own files sit beside its code
 * The prelude and the page's program and style sheets are found from the code of the platform, wherever the engine is.
 */
export const EngineFilesBesideCode = binding({
  owner: "trame",
  chooses: [TramePrelude, PageResources],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "A frozen generation runs from its own directory, and reaches the shared language through links.",
  rejected: { "A path set in a configuration": "one more value to keep in step with where the generation is" },
})
