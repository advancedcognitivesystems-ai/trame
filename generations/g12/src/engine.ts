/** Trame · Engine */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { ExecutableSpecification, SingleSource, SampleCount, ClaimSets, DevDebounce, SampledOwners, SeverityOrder, CandidateDates } from "./product"
import {
  Http, MediaTypes, ServerSentEvents, Mulberry32, MultiplicativeHash, EcmaScript, TextFile, GnuPositions, TypeScriptApi,
  DepthFirstSearch, EcmaScriptReservedWords,
} from "./standards"
import { Palette, Typography } from "./appearance"
import { Layout, DefaultRank, ReferenceSyntax, DocComment, JsonFormatting } from "./conventions"
import {
  Prelude, FileReading, Paths, ModuleLoader, TypeScriptCompiler, Hashing, Process, Terminal, Clock, Timer,
  HttpServer, Bundler, Resources,
} from "./architecture"
import { Language, Dates, CompilerMessages, DriverMessages, LawMessages, ViewMessages, OutputMessages, DevMessages } from "./messages"

/**
 * References
 * Reads a reference ("module.Identifier") and a path in a field ("value.case"), following the syntax of the language.
 */
export const References = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { syntax: ReferenceSyntax },
  body: ({ syntax: { separator, wholeNode } }) => {
    const segments = (path: string): string[] => (path === wholeNode ? [] : path.split(separator))
    return {
      /** The steps of a path; none for the whole node. */
      segments,
      /** The number of steps of a path. */
      depth: (path: string) => segments(path).length,
      /** Does the path designate the whole node? */
      isWholeNode: (path: string) => path === wholeNode,
      /** The field where a path starts. */
      firstSegment: (path: string) => {
        const [first] = path.split(separator)
        return first
      },
      /** The module of a reference. */
      module: (ref: string) => {
        const [module] = ref.split(separator)
        return module
      },
      /** The identifier of a reference, without its module. */
      identifier: (ref: string) => {
        const [, ...rest] = ref.split(separator)
        return rest.join(separator)
      },
      /** Steps joined into a path. */
      join: (steps: string[]) => steps.join(separator),
    }
  },
})

/**
 * Positions
 * Designates a place in a file as messages do ("file:line"), from what the TypeScript API gives.
 */
export const Positions = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { gnu: GnuPositions, typeScriptApi: TypeScriptApi },
  body: ({ gnu, typeScriptApi }) => ({
    /** The number, as messages give it, of a line of the TypeScript API. */
    lineNumber: (tsLine: number) => tsLine - typeScriptApi.firstLine + gnu.firstLine,
    /** "file:line" */
    reference: (file: string, line: number) => file + gnu.separator + line,
  }),
})

/**
 * Cycles
 * Finds the cycles of a relation with a depth-first search: the vertices from which the search closes one.
 */
export const Cycles = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { search: DepthFirstSearch },
  body: code.file<typeof import("./code/engine/cycles").default>("./code/engine/cycles.ts"),
})

/**
 * Graph
 * The traversal API: read-only views on the nodes, queries, the edges, recorded reading.
 */
export const GraphApi = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { prelude: Prelude, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/graph").default>("./code/engine/graph.ts"),
})

/**
 * Static reading
 * The TypeScript compiler reads the sources without running them: titles, lines, properties, references, type errors.
 */
export const StaticAnalysis = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { ts: TypeScriptCompiler, paths: Paths, positions: Positions, docComment: DocComment, ecma: EcmaScript, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/static-analysis").default>("./code/engine/static-analysis.ts"),
})

/**
 * TypeScript driver
 * Checks what a body touches, loads it, writes the program of an assembled component.
 */
export const DriverTypeScript = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { positions: Positions, textFile: TextFile, loader: ModuleLoader, ts: TypeScriptCompiler, reading: FileReading, paths: Paths, prelude: Prelude, reservedWords: EcmaScriptReservedWords, dates: Dates, messages: DriverMessages },
  body: code.file<typeof import("./code/engine/driver-typescript").default>("./code/engine/driver-typescript.ts"),
})

/**
 * HCL driver
 * Confronts the variables of a Terraform module with the provisioning dependencies, writes the call of the module.
 */
export const DriverHcl = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { reading: FileReading, paths: Paths, prelude: Prelude, dates: Dates, messages: DriverMessages },
  body: code.file<typeof import("./code/engine/driver-hcl").default>("./code/engine/driver-hcl.ts"),
})

/**
 * Drivers
 * The driver of each language.
 */
export const Drivers = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { driverTypeScript: DriverTypeScript, driverHcl: DriverHcl },
  body: code.file<typeof import("./code/engine/drivers").default>("./code/engine/drivers.ts"),
})

/**
 * Wiring
 * The plan: what to build, in which order, with which implementation for each port; then its execution.
 */
export const Wiring = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout, paths: Paths, prelude: Prelude, drivers: Drivers, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/wiring").default>("./code/engine/wiring.ts"),
})

/**
 * Project
 * Where the kinds and the views of a project are (trame.json).
 */
export const Project = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout, reading: FileReading, paths: Paths },
  body: code.file<typeof import("./code/engine/project").default>("./code/engine/project.ts"),
})

/**
 * Compiler
 * Loads the project once, then compiles it at a date: frozen graph, claims, resolution, consolidated graph,
 * evaluation, statuses, holes.
 */
export const Compiler = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout, severityOrder: SeverityOrder, cycles: Cycles, references: References,
    loader: ModuleLoader, reading: FileReading, paths: Paths, analysis: StaticAnalysis, project: Project, graph: GraphApi,
    wiring: Wiring, drivers: Drivers, prelude: Prelude, messages: CompilerMessages,
  },
  body: code.file<typeof import("./code/engine/compiler").default>("./code/engine/compiler.ts"),
})

/**
 * Pseudo-random generator
 * A reproducible sequence of numbers from a seed: the laws draw their test nodes with it.
 */
export const Generator = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { mulberry: Mulberry32, hash: MultiplicativeHash, ecma: EcmaScript },
  body: code.file<typeof import("./code/engine/generator").default>("./code/engine/generator.ts"),
})

/**
 * Laws
 * Tests each kind on nodes drawn at random, and its resolution on sets of claims; checks the imports.
 */
export const Laws = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout,
    samples: SampleCount, claimSets: ClaimSets, generator: Generator, owners: SampledOwners,
    reading: FileReading, paths: Paths, project: Project, graph: GraphApi, prelude: Prelude, messages: LawMessages,
  },
  body: code.file<typeof import("./code/engine/laws").default>("./code/engine/laws.ts"),
})

/**
 * Views
 * Loads them, lists their instances, runs them under their laws.
 */
export const Views = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { rank: DefaultRank, layout: Layout, loader: ModuleLoader, reading: FileReading, paths: Paths, prelude: Prelude, project: Project, messages: ViewMessages },
  body: code.file<typeof import("./code/engine/views").default>("./code/engine/views.ts"),
})

/**
 * Compilation API
 * What a view receives: the graph, plus the holes, the claims, the overlaps, the card of a node.
 */
export const CompilationApi = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { rank: DefaultRank, positions: Positions, references: References, prelude: Prelude, messages: ViewMessages },
  body: code.file<typeof import("./code/engine/compilation-api").default>("./code/engine/compilation-api.ts"),
})

/**
 * Machine outputs
 * graph.json and snapshot.json.
 */
export const MachineOutputs = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { positions: Positions, prelude: Prelude, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/machine").default>("./code/engine/machine.ts"),
})

/**
 * Lock
 * trame.lock: the hash of each published declaration, and what the code has done to them since.
 */
export const Lock = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { layout: Layout, json: JsonFormatting, textFile: TextFile, references: References, hashing: Hashing, reading: FileReading, paths: Paths, prelude: Prelude, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/lock").default>("./code/engine/lock.ts"),
})

/**
 * Payload
 * The compiled graph in the intermediate format, for the page. It carries the language, so that the page writes dates as the documents do.
 */
export const PayloadBuilder = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout, candidateDates: CandidateDates, clock: Clock, machine: MachineOutputs, views: Views, language: Language },
  body: code.file<typeof import("./code/engine/payload").default>("./code/engine/payload.ts"),
})

/**
 * Date bundle
 * Compiles the graph at each date where it can change, in a fresh process: the engine relaunches itself.
 */
export const DateBundle = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { clock: Clock, currentProcess: Process, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/date-bundle").default>("./code/engine/date-bundle.ts"),
})

/**
 * Differences
 * What a change altered between two compilations: statuses, holes, overlaps.
 */
export const Differences = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { messages: OutputMessages },
  body: code.file<typeof import("./code/engine/differences").default>("./code/engine/differences.ts"),
})

/**
 * Page
 * The standalone page: the bundled script, its stylesheet, the compiled graph.
 */
export const Page = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { palette: Palette, typography: Typography, resources: Resources, reading: FileReading, bundler: Bundler, messages: OutputMessages, language: Language },
  body: code.file<typeof import("./code/engine/page").default>("./code/engine/page.ts"),
})

/**
 * trame dev server
 * Watches the project, recompiles it at each save, pushes the updated page.
 */
export const DevServer = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout,
    http: Http, mediaTypes: MediaTypes, events: ServerSentEvents,
    terminal: Terminal, clock: Clock, timer: Timer, debounce: DevDebounce, httpServer: HttpServer,
    reading: FileReading, paths: Paths, project: Project, bundle: DateBundle, differences: Differences, page: Page,
    dates: Dates, language: Language, messages: DevMessages,
  },
  body: code.file<typeof import("./code/engine/dev-server").default>("./code/engine/dev-server.ts"),
})

/**
 * Assembly
 * The plan of a component for an environment, written as a program by the driver of its language.
 */
export const Assembly = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout, paths: Paths, wiring: Wiring, prelude: Prelude, drivers: Drivers, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/assembly").default>("./code/engine/assembly.ts"),
})
