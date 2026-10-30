/** Trame · Architecture */

import { Stage, type Status, type KeyOf, type Graph, type View } from "../trame/kernel"
import { port } from "../kinds/port"
import { component, type Exposure } from "../kinds/component"
import { rule } from "../kinds/rule"
import { vocabulary, type WordOf } from "../kinds/vocabulary"
import type { Grammar } from "../kinds/language"

// The contracts: what the engine asks of the platform. Types, not implementations.
// When Node already has the right type, the contract reuses it (a part of node:fs, node:path…).

/** The colours, by CSS variable name ("ok-soft": the background of what holds). */
export interface Palette {
  light: Record<string, string>
  dark: Record<string, string>
  /** For each status, by its key in `Status` (and "neutral"), the background colour and the stroke colour, by variable name. */
  statuses: Record<KeyOf<typeof Status> | "neutral", { fill: string; stroke: string }>
  /** The colour of the text. */
  ink: string
}
export interface Typography {
  /** By CSS variable name. */
  fonts: Record<string, string>
  /** The addresses to preload, then the stylesheet that declares the fonts. */
  loading: string[]
}
/** Where a project keeps its files. */
export interface Layout {
  sources: string
  documents: string
  documentExtension: string
  output: string
  /** Under the output of an assembly, where the infrastructure of the provisioned implementations is written. */
  provision: string
  evidence: string
  /** The extension of the files of evidence. */
  evidenceExtension: string
  /** Joins the words of a node's name in the name of a file (kebab-case: trame-cli). */
  wordJoint: string
  kinds: string
  views: string
  configuration: string
  lock: string
  graph: string
  snapshot: string
  page: string
  /** Where the prelude is, in Trame's repository. */
  prelude: string
  /** Where the frozen generations of the engine are, each named by the prefix and its number. */
  generations: string
  generation: string
  /** What a generation says of itself. */
  origin: string
  /** The differences an advance shows, and a generation keeps when they were accepted. */
  differences: string
}

/** The prelude: the part of the language that kinds, views and the engine share (the registry of nodes and kinds). */
export interface Prelude {
  internal: typeof import("#trame/internal")
  /** The path of the module, so that a frozen program imports it. */
  path: string
}
export type FileReading = Pick<typeof import("node:fs"), "readFileSync" | "existsSync" | "readdirSync" | "statSync" | "watch">
export type FileWriting = Pick<typeof import("node:fs"), "writeFileSync" | "mkdirSync">
export type Paths = Pick<typeof import("node:path"), "join" | "resolve" | "relative" | "dirname" | "basename" | "sep">
export interface ModuleLoader {
  /** Runs a TypeScript module and returns what it exports. */
  import(file: string): Promise<Record<string, unknown>>
}
export type TypeScriptCompiler = typeof import("typescript")
export type Hashing = Pick<typeof import("node:crypto"), "createHash">
export interface Programs {
  /** Runs a TypeScript program (another engine) in a directory: its standard output comes back, its errors go to the terminal. */
  run(program: string, args: readonly string[], cwd: string, env: Readonly<Record<string, string>>): Promise<{ status: number; output: string }>
}
export interface FileTrees {
  /** A new empty directory, for what is kept only while a command runs. */
  temporary(): string
  /** Copies a file or a directory and everything under it. */
  copy(from: string, to: string): void
  /** A symbolic link at path, to target. */
  link(target: string, path: string): void
  /** Removes a file or a directory and everything under it. */
  remove(path: string): void
  /** The files under a directory, as paths relative to it, in the order of their code points. */
  files(dir: string): string[]
  /** The differences between two files or two trees, named relative to dir, in the unified format; nothing if they are the same. */
  differences(dir: string, a: string, b: string): Promise<string>
}
export interface Process {
  cwd(): string
  env: Record<string, string | undefined>
  /** Relaunches this program (the engine itself) with other arguments, in another directory. */
  relaunch(args: string[], cwd: string): import("node:child_process").ChildProcess
  /** Runs a TypeScript program; its outputs are those of the terminal. */
  runTs(file: string, args: string[]): import("node:child_process").ChildProcess
  onSignal(signal: "SIGINT" | "SIGTERM", f: () => void): void
}
export interface Terminal {
  args: string[]
  /** A line on the standard output. */
  write(line: string): void
  /** Text as it is on the standard output. */
  writeRaw(text: string): void
  /** A line on the standard error. */
  error(line: string): void
  exit(code: number): never
}
export interface Clock {
  now(): Date
  /** Today's date, or the one TRAME_TODAY sets. */
  today(): string
}
export type Timer = Pick<typeof globalThis, "setTimeout" | "clearTimeout">
export type HttpServer = Pick<typeof import("node:http"), "createServer">
export type Bundler = Pick<typeof import("esbuild"), "build">
export interface Compression {
  /** A text, compressed, in an encoding that a page carries as a string and decompresses itself. */
  pack(text: string): string
}
/** A place in a text, as tree-sitter gives it: a row and a column counted from its first, and an offset. */
export interface SyntaxPoint {
  row: number
  column: number
  offset: number
}
/**
 * A node that a query caught, as a record: the capture's name, the node's type in the grammar, its text, its place, and
 * the match it belongs to (the captures of one match of one pattern share it: a call and its arguments, a key and its value).
 */
export interface SyntaxCapture {
  name: string
  type: string
  text: string
  start: SyntaxPoint
  end: SyntaxPoint
  match: number
}
/** What the queries caught in a text, and the places where the text does not follow the grammar. */
export interface SyntaxReading {
  captures: SyntaxCapture[]
  errors: SyntaxPoint[]
}
export interface SyntaxTrees {
  /** Loads a grammar, once for the process. */
  load(grammar: Grammar): Promise<void>
  /** Parses the text with a loaded grammar and runs the queries: what each match caught, as records. No tree leaves. */
  read(grammar: Grammar, text: string, queries: readonly string[]): SyntaxReading
}
export interface Resources {
  /** The page's script (for the browser), its style sheet and the rules of a narrow screen, absolute paths. */
  script: string
  style: string
  narrowStyle: string
}

/**
 * Effects
 * What a port may do to the world. A port declares only words of this vocabulary.
 */
export const Effects = vocabulary({
  owner: "trame",
  words: {
    read: "Reads a state (files, a database)",
    write: "Changes a state",
    execution: "Runs loaded code",
    process: "Starts or controls processes",
    terminal: "Reads the arguments, writes on the outputs",
    time: "Reads the time, or waits",
    network: "Talks to another machine",
  },
})
export type Effect = WordOf<typeof Effects>
/** The effects of a port, checked by TypeScript against the vocabulary. */
const effects = (...e: Effect[]): Effect[] => e

/**
 * Prelude
 * The registry of nodes and kinds, and the tooling of frozen programs: what the language shares with the engine.
 */
export const Prelude = port<Prelude>({ owner: "trame", declaredEffects: effects() })

/**
 * File reading
 */
export const FileReading = port<FileReading>({ owner: "trame", declaredEffects: effects("read") })

/**
 * File writing
 */
export const FileWriting = port<FileWriting>({ owner: "trame", declaredEffects: effects("write") })

/**
 * Paths
 * Computations on file paths, without touching the files.
 */
export const Paths = port<Paths>({ owner: "trame", declaredEffects: effects() })

/**
 * Module loader
 * Runs a module of the graph, of a kind or of a view, and reads what it exports.
 */
export const ModuleLoader = port<ModuleLoader>({ owner: "trame", declaredEffects: effects("read", "execution") })

/**
 * Syntax trees
 * Parses a text with a tree-sitter grammar, and gives back what queries catch in it, as records. The only place that
 * touches tree-sitter: no node of a tree crosses it.
 */
export const SyntaxTrees = port<SyntaxTrees>({ owner: "trame", declaredEffects: effects("read") })

/**
 * TypeScript compiler
 * Reads the code of the graph and checks it.
 */
export const TypeScriptCompiler = port<TypeScriptCompiler>({ owner: "trame", declaredEffects: effects("read") })

/**
 * Hashing
 */
export const Hashing = port<Hashing>({ owner: "trame", declaredEffects: effects() })

/**
 * Process
 * The current directory, the environment, and starting other processes.
 */
export const Process = port<Process>({ owner: "trame", declaredEffects: effects("process") })

/**
 * Terminal
 * The arguments, the outputs, the exit code.
 */
export const Terminal = port<Terminal>({ owner: "trame", declaredEffects: effects("terminal") })

/**
 * Clock
 */
export const Clock = port<Clock>({ owner: "trame", declaredEffects: effects("time") })

/**
 * Timer
 */
export const Timer = port<Timer>({ owner: "trame", declaredEffects: effects("time") })

/**
 * HTTP server
 */
export const HttpServer = port<HttpServer>({ owner: "trame", declaredEffects: effects("network") })

/**
 * Bundler
 * Gathers the page's script and what it imports into a single file for the browser.
 */
export const Bundler = port<Bundler>({ owner: "trame", declaredEffects: effects("read") })

/**
 * Compression
 * A text made smaller for a page to carry: the browser decompresses it.
 */
export const Compression = port<Compression>({ owner: "trame", declaredEffects: effects() })

/**
 * Page resources
 */
export const Resources = port<Resources>({ owner: "trame", declaredEffects: effects() })

/**
 * Programs
 * Runs another engine (a frozen generation, a candidate) and reads what it prints.
 */
export const Programs = port<Programs>({ owner: "trame", declaredEffects: effects("process", "execution") })

/**
 * File trees
 * Copies, links, removes and compares files and directories: what an advance does with documents and generations.
 */
export const FileTrees = port<FileTrees>({ owner: "trame", declaredEffects: effects("read", "write", "process") })

/**
 * Command line
 * Exposes Trame's commands: reads the arguments, calls the command, exits with its code.
 */
export const CommandLine = port<Exposure>({ owner: "trame", declaredEffects: effects("terminal") })

/**
 * Trame on the command line
 * The `trame` program: build, views, laws, snapshot, publication, export, dev, assembly.
 */
export const TrameCli = component({
  owner: "trame",
  language: "typescript",
  deps: { exposure: CommandLine },
})

/** Everything a node depends on at run time, step by step. */
const closure = (v: View): View[] => {
  const seen = new Map<string, View>()
  const visit = (x: View) => {
    for (const d of x.dependencies) {
      if (d.stage !== Stage.execution || seen.has(d.node.ref)) continue
      seen.set(d.node.ref, d.node)
      visit(d.node)
    }
  }
  visit(v)
  return [...seen.values()]
}

/**
 * Rendering does not read the graph
 * A renderer receives only the intermediate format: it never reaches the prelude, even from afar.
 */
export const RenderingWithoutGraph = rule({
  owner: "trame",
  check: (g: Graph) =>
    g.all("function").nodes()
      .filter((v) => v.module === "rendering" && closure(v).some((d) => d.node === Prelude))
      .map((v) => ({ on: v, what: "A renderer reaches the prelude, hence the graph" })),
})

/**
 * Only commands write
 * The engine computes what to write; only a command writes it to disk.
 */
export const OnlyCommandsWrite = rule({
  owner: "trame",
  check: (g: Graph) =>
    g.all("function").nodes()
      .filter((v) => v.effects.includes("write"))
      .map((v) => {
        const by = v.dependencies.find((d) => d.node.effects.includes("write") && d.node.kind !== "port")
        return { on: v, what: by ? `An engine function writes to disk, through "${by.node.title}"` : "An engine function writes to disk" }
      }),
})

// Ports that exist only in test: what the scenarios observe.

export interface WriteLog {
  /** What was written, by absolute path. */
  files(): Map<string, string>
}
export interface TerminalLog {
  lines(): string[]
}

/**
 * Write log
 * What the engine wrote, when writing is simulated.
 */
export const WriteLog = port<WriteLog>({ owner: "trame", declaredEffects: effects() })

/**
 * Terminal log
 * What the engine printed, when the terminal is simulated.
 */
export const TerminalLog = port<TerminalLog>({ owner: "trame", declaredEffects: effects() })

/**
 * Effects come from the vocabulary
 * A port that declares an effect outside the "Effects" vocabulary is refused: the rules that read effects would miss it.
 */
export const KnownEffects = rule({
  owner: "trame",
  check: (g: Graph) => {
    const known = new Set(Object.keys((g.view(Effects).field("words") as Record<string, string>) ?? {}))
    return g.all("port").nodes().flatMap((v) =>
      ((v.field("declaredEffects") as string[]) ?? []).filter((e) => !known.has(e)).map((e) => ({ on: v, what: `Unknown effect: "${e}"` })))
  },
})
