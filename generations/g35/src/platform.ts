/** Trame · Platform */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { environment } from "../kinds/environment"
import { implementation } from "../kinds/implementation"
import { fn } from "../kinds/function"
import { binding } from "../kinds/binding"
import {
  Prelude, FileReading, FileWriting, Paths, ModuleLoader, TypeScriptCompiler, SyntaxTrees, Hashing, Process, Terminal,
  Clock, Timer, HttpServer, Bundler, Resources, CommandLine, WriteLog, TerminalLog, Programs, FileTrees,
} from "./architecture"
import { ExitStatus, NodeArguments, Iso8601, NodeCli, NodeEvents, Posix, UnifiedDiff } from "./standards"
import { PlatformMessages } from "./messages"
import { Sequences, Texts } from "./algebra"
import { TrameCommands, TrameEnvironment } from "./conventions"
import { Adapter, AbstractFactory, Strategy } from "./patterns"
import { ReplaceableTechnology } from "./product"

/**
 * Local
 * The machine where `trame` is started: real files, real terminal, real clock.
 */
export const Local = environment({ owner: "trame" })

/**
 * Test
 * The scenarios: the engine reads the real files of the example, but what it writes and prints is kept in memory.
 */
export const Test = environment({ owner: "trame" })

/**
 * Example project
 * The project on which the scenarios run the engine, relative to Trame's root.
 */
export const ExampleRoot = decision<string>({ owner: "trame", value: "examples/reservations" })

/**
 * Where the engine's own files are
 * From the code of the platform: the prelude's internal module (its extension aside, as a program imports it), the
 * page's script and its stylesheet.
 */
export const EngineFiles = decision<{ prelude: string; preludeExtension: string; pageScript: string; pageStyle: string; narrowStyle: string }>({
  owner: "trame",
  value: { prelude: "../../../trame/internal", preludeExtension: ".ts", pageScript: "../page/main.ts", pageStyle: "../page/page.css", narrowStyle: "../page/narrow.css" },
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
  body: code.file("./code/platform/tsx-loader.ts"),
})

/**
 * TypeScript compiler
 */
export const RealTypeScript = implementation({
  owner: "trame", implements: [TypeScriptCompiler],
  body: code.file("./code/platform/typescript.ts"),
})

/**
 * tree-sitter in WebAssembly
 * The syntax trees of the bodies, with web-tree-sitter and the grammars that the languages name.
 */
export const WebTreeSitter = implementation({
  owner: "trame", implements: [SyntaxTrees],
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
  body: code.file("./code/platform/esbuild.ts"),
})

/**
 * Page resources
 */
export const PageResources = implementation({
  owner: "trame", implements: [Resources],
  deps: { files: EngineFiles },
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
 * The current directory is the example project's, resolved by the paths of the platform; no process is started.
 */
export const ExampleProcess = fn({
  owner: "trame", implements: [Process],
  deps: { root: ExampleRoot, paths: Paths, messages: PlatformMessages },
  body: code.file("./code/platform/example-process.ts"),
})

/**
 * No advance in test
 * The scenarios run one engine in memory: no other engine is started, no tree of files is copied or compared.
 */
export const NoAdvanceInTest = fn({
  owner: "trame", implements: [Programs, FileTrees],
  deps: { messages: PlatformMessages },
  body: code.file("./code/platform/no-advance.ts"),
})

/**
 * Writing in memory
 */
export const MemoryWriting = fn({
  owner: "trame", implements: [FileWriting, WriteLog],
  body: code.file("./code/platform/memory-writing.ts"),
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
 * Keeps each line. Exiting throws an error instead of stopping the process.
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
export const NodePlatform = binding({
  owner: "trame",
  chooses: [DiskReading, NodePaths, NodeHashing, NodeTimer, NodeHttpServer, NodeCommandLine],
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
 * On a machine, Node.js writes and runs
 * On the machine where trame is started, Node.js writes the files, copies and compares trees, starts processes and
 * other engines, shows the terminal and gives the time.
 */
export const NodeMachine = binding({
  owner: "trame",
  chooses: [DiskWriting, DiskTrees, NodeProcess, NodePrograms, NodeTerminal, SystemClock],
  environments: [Local],
  follows: [Adapter, AbstractFactory],
  serves: [ReplaceableTechnology],
  context: "What changes the world (files written, processes, the terminal, the clock) is real only on a machine; the scenarios keep it in memory.",
  consequences: "Writing goes through FileWriting and FileTrees only, which the rule \"Only commands write\" checks; comparing trees uses GNU diff, through a process.",
  rejected: { "A library to compare trees": "GNU diff writes the unified format the advance keeps, and is on every machine that runs it" },
})

/**
 * Scenarios run in memory
 * In the scenarios, what the engine writes and prints is kept in memory, the clock is stopped on the day of the
 * scenarios, the current directory is the example's, and no other engine is started.
 */
export const InMemoryScenarios = binding({
  owner: "trame",
  chooses: [MemoryWriting, MemoryTerminal, StoppedClock, NoAdvanceInTest, ExampleProcess],
  environments: [Test],
  follows: [Strategy, AbstractFactory],
  serves: [ReplaceableTechnology],
  context: "A scenario runs the described engine on the example and reads what it wrote and printed; it must give the same result every day and leave nothing behind.",
  consequences: "These realizations are functions: they touch nothing, and the logs a scenario reads come with what writes them, chosen together.",
  rejected: {
    "A temporary directory": "slower, and a scenario could read what was written only through the platform",
    "The system clock": "the documents of the example would change every day",
  },
})

/**
 * esbuild bundles the page's script
 */
export const EsbuildBundles = binding({
  owner: "trame",
  chooses: [Esbuild],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The page's script is TypeScript in several modules; a standalone page needs it as one script, built when the page is asked for.",
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
 * The prelude and the page's script and style sheets are found from the code of the platform, wherever the engine is.
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
