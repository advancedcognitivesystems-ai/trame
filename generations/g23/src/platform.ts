/** Trame · Platform */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { environment } from "../kinds/environment"
import { implementation } from "../kinds/implementation"
import {
  Prelude, FileReading, FileWriting, Paths, ModuleLoader, TypeScriptCompiler, SyntaxTrees, Hashing, Process, Terminal,
  Clock, Timer, HttpServer, Bundler, Resources, CommandLine, WriteLog, TerminalLog,
} from "./architecture"
import { ExitStatus, NodeArguments, Iso8601, NodeCli, NodeEvents, Posix } from "./standards"
import { PlatformMessages } from "./messages"
import { Sequences, Texts } from "./algebra"

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
 * Runner of TypeScript
 * The module Node imports first to run a program written in TypeScript, as the engine itself runs (tsx).
 */
export const TypeScriptRunner = decision<string>({ owner: "trame", value: "tsx" })

/**
 * Day of the scenarios
 * The date the engine sees in test: the one on which the expected documents of the example were built.
 */
export const TestDay = decision<string>({ owner: "trame", value: "2026-10-17" })

// Shared by Local and Test ---------------------------------------------------------------

/**
 * Trame's prelude
 */
export const TramePrelude = implementation({
  owner: "trame", implements: [Prelude], environments: [Local, Test],
  deps: { texts: Texts },
  body: code.file("./code/platform/prelude.ts"),
})

/**
 * System files, for reading
 */
export const DiskReading = implementation({
  owner: "trame", implements: [FileReading], environments: [Local, Test],
  body: code.file("./code/platform/disk-reading.ts"),
})

/**
 * Node paths
 */
export const NodePaths = implementation({
  owner: "trame", implements: [Paths], environments: [Local, Test],
  body: code.file("./code/platform/paths.ts"),
})

/**
 * tsx loader
 * Runs the TypeScript modules of the project as they are.
 */
export const TsxLoader = implementation({
  owner: "trame", implements: [ModuleLoader], environments: [Local, Test],
  body: code.file("./code/platform/tsx-loader.ts"),
})

/**
 * TypeScript compiler
 */
export const RealTypeScript = implementation({
  owner: "trame", implements: [TypeScriptCompiler], environments: [Local, Test],
  body: code.file("./code/platform/typescript.ts"),
})

/**
 * tree-sitter in WebAssembly
 * The syntax trees of the bodies, with web-tree-sitter and the grammars that the languages name.
 */
export const WebTreeSitter = implementation({
  owner: "trame", implements: [SyntaxTrees], environments: [Local, Test],
  deps: { messages: PlatformMessages },
  body: code.file("./code/platform/web-tree-sitter.ts"),
})

/**
 * SHA-256 hashes
 */
export const NodeHashing = implementation({
  owner: "trame", implements: [Hashing], environments: [Local, Test],
  body: code.file("./code/platform/hashing.ts"),
})

/**
 * Node timer
 */
export const NodeTimer = implementation({
  owner: "trame", implements: [Timer], environments: [Local, Test],
  body: code.file("./code/platform/timer.ts"),
})

/**
 * Node HTTP server
 */
export const NodeHttpServer = implementation({
  owner: "trame", implements: [HttpServer], environments: [Local, Test],
  body: code.file("./code/platform/http.ts"),
})

/**
 * esbuild
 */
export const Esbuild = implementation({
  owner: "trame", implements: [Bundler], environments: [Local, Test],
  body: code.file("./code/platform/esbuild.ts"),
})

/**
 * Page resources
 */
export const PageResources = implementation({
  owner: "trame", implements: [Resources], environments: [Local, Test],
  body: code.file("./code/platform/page-resources.ts"),
})

// Local ---------------------------------------------------------------------------------

/**
 * System files, for writing
 */
export const DiskWriting = implementation({
  owner: "trame", implements: [FileWriting], environments: [Local],
  body: code.file("./code/platform/disk-writing.ts"),
})

/**
 * Node process
 */
export const NodeProcess = implementation({
  owner: "trame", implements: [Process], environments: [Local],
  deps: { argv: NodeArguments, node: NodeCli, runner: TypeScriptRunner },
  body: code.file("./code/platform/process.ts"),
})

/**
 * Node terminal
 */
export const NodeTerminal = implementation({
  owner: "trame", implements: [Terminal], environments: [Local],
  deps: { argv: NodeArguments, exitStatus: ExitStatus, events: NodeEvents, posix: Posix, messages: PlatformMessages },
  body: code.file("./code/platform/terminal.ts"),
})

/**
 * System clock
 */
export const SystemClock = implementation({
  owner: "trame", implements: [Clock], environments: [Local],
  deps: { iso: Iso8601, sequences: Sequences },
  body: code.file("./code/platform/system-clock.ts"),
})

/**
 * Command line
 * The first argument chooses the command; the following ones are passed to it as they are.
 */
export const NodeCommandLine = implementation({
  owner: "trame", implements: [CommandLine], environments: [Local, Test],
  deps: { terminal: Terminal, exitStatus: ExitStatus, messages: PlatformMessages },
  body: code.file("./code/platform/command-line.ts"),
})

// Test ----------------------------------------------------------------------------------

/**
 * Example process
 * The current directory is the example project's; no process is started.
 */
export const ExampleProcess = implementation({
  owner: "trame", implements: [Process], environments: [Test],
  deps: { root: ExampleRoot, messages: PlatformMessages },
  body: code.file("./code/platform/example-process.ts"),
})

/**
 * Writing in memory
 */
export const MemoryWriting = implementation({
  owner: "trame", implements: [FileWriting, WriteLog], environments: [Test],
  body: code.file("./code/platform/memory-writing.ts"),
})

/**
 * Terminal in memory
 * Keeps each line. Exiting throws an error instead of stopping the process.
 */
export const MemoryTerminal = implementation({
  owner: "trame", implements: [Terminal, TerminalLog], environments: [Test],
  deps: { messages: PlatformMessages },
  body: code.file("./code/platform/memory-terminal.ts"),
})

/**
 * Stopped clock
 */
export const StoppedClock = implementation({
  owner: "trame", implements: [Clock], environments: [Test],
  deps: { day: TestDay },
  body: code.file("./code/platform/stopped-clock.ts"),
})
