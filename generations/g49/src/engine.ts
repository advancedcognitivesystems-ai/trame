/** Trame · Engine */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { decision } from "../kinds/decision"
import { adr } from "../kinds/adr"
import { ExecutableSpecification, SingleSource, SampleCount, ClaimSets, DevDebounce, SampledOwners, SampledValues, SeverityOrder, CandidateDates, StructureDraws } from "./product"
import {
  CompleteDeclaration, AnswersWithoutCrashing, BlockingHoleHasOwner, UnknownWithoutEvidence, SameInputSameAnswer, OrderFree, ClosedResolution,
  CompleteViewDeclaration, IntermediateFormatOnly, TrustedExtensions,
} from "./laws"
import { Http, MediaTypes, ServerSentEvents, Mulberry32, MultiplicativeHash, EcmaScript, TextFile, GnuPositions, TypeScriptApi, DepthFirstSearch, EcmaScriptReservedWords, ExitStatus, Iso8601, NodeEncodings, NodeEvents, Sha256, NodeModuleSpecifiers, Uri } from "./standards"
import { Layout, DefaultRank, ReferenceSyntax, DocComment, JsonFormatting, ViewGroupOrder, DocumentIds, TrameCommands, StepNames, PreludeApi } from "./conventions"
import { Counts, Sequences, Texts, ValueTypes } from "./algebra"
import {
  Prelude, FileReading, Paths, ModuleLoader, TypeScriptCompiler, Hashing, Process, Terminal, Clock, Timer,
  HttpServer,
} from "./architecture"
import { Language, Dates, Lists, CompilerMessages, LawMessages, ViewMessages, OutputMessages, DevMessages } from "./messages"
import { Drivers } from "./languages"
import { Punctuation, LanguageSettings } from "./documents"
import { CodeSpan } from "./markdown"
import { CodeLines } from "./text"
import { Page } from "./page"
import { PageRendering } from "./rendering"
import { TypeScript, TypeScriptSyntax } from "./typescript"
import { VersionOrder } from "./packages"

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
      /** Is the path this one, or a path under it? */
      within: (path: string, prefix: string) => path === prefix || path.startsWith(prefix + separator),
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
 * Pseudo-random generator
 * A reproducible sequence of numbers from a seed: the laws draw their test nodes with it.
 */
export const Generator = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { mulberry: Mulberry32, hash: MultiplicativeHash, ecma: EcmaScript, counts: Counts },
  body: code.file<typeof import("./code/engine/generator").default>("./code/engine/generator.ts"),
})

/**
 * Graph
 * The traversal API: read-only views on the nodes, queries, the edges, recorded reading.
 */
export const GraphApi = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    prelude: Prelude, syntax: ReferenceSyntax, counts: Counts, sequences: Sequences, texts: Texts, messages: CompilerMessages,
    // What the graph gives the kinds and the views (Lib).
    values: ValueTypes, lists: Lists, dates: Dates, punctuation: Punctuation, positions: Positions, references: References, iso: Iso8601, file: TextFile,
    settings: LanguageSettings, generator: Generator, structureDraws: StructureDraws, layout: Layout, typescript: TypeScript, versions: VersionOrder,
  },
  body: code.file<typeof import("./code/engine/graph").default>("./code/engine/graph.ts"),
})

/**
 * Options of the static reading
 * The ambient types the TypeScript compiler loads to read the project: Node's (the package @types/node).
 */
export const TypeScriptOptions = decision<{ types: readonly string[] }>({ owner: "trame", value: { types: ["node"] } })

/**
 * Static reading
 * The TypeScript compiler reads the sources without running them: titles, lines, properties, references, type errors.
 */
export const StaticAnalysis = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    specifiers: NodeModuleSpecifiers, language: TypeScript, syntax: TypeScriptSyntax, references: References, file: TextFile,
    options: TypeScriptOptions, ts: TypeScriptCompiler, paths: Paths, positions: Positions, docComment: DocComment,
    counts: Counts, sequences: Sequences, texts: Texts, messages: CompilerMessages,
  },
  body: code.file<typeof import("./code/engine/static-analysis").default>("./code/engine/static-analysis.ts"),
})

/**
 * Wiring
 * The plan: what to build, in which order, with which implementation for each port; then its execution.
 */
export const Wiring = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { steps: StepNames, values: ValueTypes, layout: Layout, paths: Paths, prelude: Prelude, drivers: Drivers, sequences: Sequences, texts: Texts, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/wiring").default>("./code/engine/wiring.ts"),
})

/**
 * Project
 * Where the kinds and the views of a project are (trame.json).
 */
export const Project = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { encodings: NodeEncodings, layout: Layout, reading: FileReading, paths: Paths },
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
  deps: { encodings: NodeEncodings, specifiers: NodeModuleSpecifiers, values: ValueTypes, layout: Layout, severityOrder: SeverityOrder, cycles: Cycles, references: References,
    positions: Positions, loader: ModuleLoader, reading: FileReading, paths: Paths, analysis: StaticAnalysis, project: Project, graph: GraphApi,
    wiring: Wiring, drivers: Drivers, prelude: Prelude, counts: Counts, sequences: Sequences, texts: Texts, messages: CompilerMessages,
  },
  body: code.file<typeof import("./code/engine/compiler").default>("./code/engine/compiler.ts"),
})


/**
 * Laws
 * Tests each kind on nodes drawn at random, and its resolution on sets of claims; checks the imports.
 */
export const Laws = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { drivers: Drivers, preludeApi: PreludeApi, layout: Layout,
    samples: SampleCount, claimSets: ClaimSets, generator: Generator, owners: SampledOwners, sampled: SampledValues, iso: Iso8601, references: References,
    reading: FileReading, paths: Paths, project: Project, graph: GraphApi, prelude: Prelude,
    counts: Counts, sequences: Sequences, texts: Texts, messages: LawMessages,
    declaration: CompleteDeclaration, answers: AnswersWithoutCrashing, owned: BlockingHoleHasOwner, evidence: UnknownWithoutEvidence,
    same: SameInputSameAnswer, orderFree: OrderFree, closed: ClosedResolution,
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
  deps: {
    drivers: Drivers, rank: DefaultRank, groupOrder: ViewGroupOrder, ids: DocumentIds, uri: Uri, layout: Layout, loader: ModuleLoader,
    reading: FileReading, paths: Paths, prelude: Prelude, project: Project, output: OutputMessages, messages: ViewMessages,
    declaration: CompleteViewDeclaration, answers: AnswersWithoutCrashing, same: SameInputSameAnswer, serial: IntermediateFormatOnly,
  },
  body: code.file<typeof import("./code/engine/views").default>("./code/engine/views.ts"),
})

/**
 * The language receives the graph's values
 * The kinds and the views are files, not nodes: what they write is given to them by the engine, from the graph.
 */
export const TheLanguageReceivesTheGraph = adr({
  owner: "trame",
  context: "The kinds and the views are the vocabulary nodes are made of, not nodes: the values they wrote (the names of kinds and of fields, zero and the empty text, a comma, the pattern of a date, the file of the lock) belonged to no node, and repeated what the graph already declared.",
  consequences: "The engine gives them the graph's values through the graph they read (Lib): its algebraic structures; the lists, punctuation and dates of the decided language; positions in a file and paths of a value; the settings of the documents and the draws of the laws; the layout of a project; the language its declarations are written in; the order of versions. The names they share with the engine are words of the prelude (KindName, ViewName, EdgeName, PackageReport, LanguageUse); a kind names its own fields and edges with keysOf, another kind's with fieldsOf and edgesOf; their words are in their catalogs. A feature of Lib serves the kinds from the generation that brings it on. The catalogue of literals reports what remains, by file.",
  rejected: {
    "Kinds and views as nodes": "they are what nodes are made of: the graph cannot produce its own vocabulary",
    "Each kind importing the nodes it needs": "the example's graph is not Trame's: the kinds would read a graph that is not the one they compile",
  },
  serves: [SingleSource],
  appliedBy: [GraphApi, Views],
})

/**
 * The laws are requirements
 * Each law of the kinds and the views is a requirement of the module laws: a pure rule, with its acceptance criteria.
 * The functions "Laws" and "Views" observe a kind on nodes drawn at random, or a view on the graph, and ask the rule
 * whether what they saw keeps the law; they phrase what breaks it.
 */
export const LawsAreRequirements = adr({
  owner: "trame",
  context: "The laws were written in the engine's code only: the graph named them in a catalog of messages, without saying what each one demands, and nothing checked the checks.",
  consequences: "A law reads in the graph as a requirement, refines the goal it serves, and is accepted on cases chosen by hand before it judges any kind. The engine keeps what only it can do: drawing nodes, calling the kind in a sandbox, catching what it throws.",
  rejected: {
    "Laws in the engine's code": "what a kind must respect, invisible in the graph that describes the engine",
    "A law as a scenario": "a scenario plays the whole engine; a law is a judgement on one observation, pure, that a criterion shows",
  },
  serves: [TrustedExtensions],
  appliedBy: [Laws, Views],
})

/**
 * Compilation API
 * What a view receives: the graph, plus the holes, the claims, the overlaps, the card of a node.
 */
export const CompilationApi = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    values: ValueTypes, rank: DefaultRank, positions: Positions, references: References, prelude: Prelude,
    counts: Counts, sequences: Sequences, texts: Texts, punctuation: Punctuation, ids: DocumentIds, messages: ViewMessages,
  },
  body: code.file<typeof import("./code/engine/compilation-api").default>("./code/engine/compilation-api.ts"),
})

/**
 * Machine outputs
 * graph.json and snapshot.json.
 */
export const MachineOutputs = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { values: ValueTypes, json: JsonFormatting, positions: Positions, prelude: Prelude, counts: Counts, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/machine").default>("./code/engine/machine.ts"),
})

/**
 * Length of a fingerprint
 * How many hexadecimal characters of the SHA-256 digest a lock keeps to fingerprint a declaration: 64 bits.
 */
export const Fingerprint = decision<number>({ owner: "trame", value: 16 })

/**
 * Lock
 * trame.lock: the hash of each published declaration, and what the code has done to them since.
 */
export const Lock = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { encodings: NodeEncodings, sha256: Sha256, fingerprint: Fingerprint, layout: Layout, json: JsonFormatting, textFile: TextFile, references: References, codeSpan: CodeSpan, hashing: Hashing, reading: FileReading, paths: Paths, prelude: Prelude, sequences: Sequences, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/lock").default>("./code/engine/lock.ts"),
})

/**
 * Payload
 * The compiled graph in the intermediate format, for the page. It carries the language, so that the page writes dates as the documents do.
 */
export const PayloadBuilder = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { layout: Layout, candidateDates: CandidateDates, clock: Clock, machine: MachineOutputs, views: Views, language: Language, texts: Texts },
  body: code.file<typeof import("./code/engine/payload").default>("./code/engine/payload.ts"),
})

/**
 * Date bundle
 * Compiles the graph at each date where it can change, in a fresh process: the engine relaunches itself.
 */
export const DateBundle = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { line: TrameCommands, encodings: NodeEncodings, events: NodeEvents, clock: Clock, currentProcess: Process, exitStatus: ExitStatus, texts: Texts, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/date-bundle").default>("./code/engine/date-bundle.ts"),
})

/**
 * Differences
 * What a change altered between two compilations: statuses, holes, overlaps.
 */
export const Differences = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { punctuation: Punctuation, messages: OutputMessages },
  body: code.file<typeof import("./code/engine/differences").default>("./code/engine/differences.ts"),
})

/**
 * What trame dev serves
 * The paths the page is asked at, the bundle of the graph, the stream of its changes; the events of that stream; the
 * host it answers on; the endings of the files an editor leaves while it saves, which change nothing.
 */
export const DevService = decision<{ page: readonly string[]; bundle: string; events: string; compiling: string; ready: string; host: string; ignored: readonly string[] }>({
  owner: "trame",
  value: {
    page: ["/", "/index.html"], bundle: "/bundle.json", events: "/events",
    compiling: "compiling", ready: "bundle", host: "localhost", ignored: ["~", ".swp", ".tmp"],
  },
})

/**
 * trame dev server
 * Watches the project, recompiles it at each save, pushes the updated page.
 */
export const DevServer = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { service: DevService, uri: Uri, line: TrameCommands, nodeEvents: NodeEvents, layout: Layout,
    http: Http, mediaTypes: MediaTypes, events: ServerSentEvents,
    terminal: Terminal, codeLines: CodeLines, file: TextFile, clock: Clock, timer: Timer, debounce: DevDebounce, httpServer: HttpServer,
    reading: FileReading, paths: Paths, project: Project, bundle: DateBundle, differences: Differences, page: Page, pageRendering: PageRendering,
    counts: Counts, sequences: Sequences, texts: Texts, dates: Dates, language: Language, messages: DevMessages,
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
  deps: { line: TrameCommands, values: ValueTypes, layout: Layout, paths: Paths, wiring: Wiring, prelude: Prelude, drivers: Drivers, texts: Texts, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/assembly").default>("./code/engine/assembly.ts"),
})
