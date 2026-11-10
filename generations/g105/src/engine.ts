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
import { Http, MediaTypes, ServerSentEvents, Uri } from "#std/web"
import { Mulberry32, MultiplicativeHash, DepthFirstSearch, Sha256 } from "#std/algorithms"
import { EcmaScript, EcmaScriptReservedWords, TextAsCode } from "#std/ecmascript"
import { PlatformEffects } from "#std/effects"
import { PackageSources } from "#std/tooling"
import { TextFile, GnuPositions } from "#std/text"
import { TypeScriptApi } from "./standards"
import { ExitStatus, NodeEncodings, NodeEvents, NodeModuleSpecifiers } from "#std/system"
import { Iso8601 } from "#std/measures"
import { Layout, DefaultRank, ReferenceSyntax, DocComment, JsonFormatting, ViewGroupOrder, DocumentIds, TrameCommands, StepNames, PreludeApi, LanguageNames } from "./conventions"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import {
  Prelude, FileReading, Paths, ModuleLoader, TypeScriptCompiler, Hashing, KeptResults, Signatures, Process, Terminal, Clock, Timer,
  HttpServer, KeptRuns, RunStore,
} from "./architecture"
import { Language, Dates, Lists, CompilerMessages, LawMessages, ViewMessages, OutputMessages, DevMessages, CommandMessages } from "./messages"
import { Drivers } from "./languages"
import { Punctuation, LanguageSettings, Units, VisibleText } from "./documents"
import { CodeSpan } from "./markdown"
import { CodeLines } from "./text"
import { Page } from "./page"
import { PageRendering } from "./rendering"
import { TypeScript, TypeScriptSyntax, TypeScriptLibraries } from "./typescript"
import { VersionOrder } from "./packages"
import { LibraryOfAModule } from "./libraries"
import { Advancement, EnginePin } from "./generations"

/**
 * References
 * Reads a reference ("module.Identifier") and a path in a field ("value.case"), following the syntax of the language;
 * names a library's module in the graph that imports it ("std/algebra"), and says which library a module belongs to.
 */
export const References = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { syntax: ReferenceSyntax, libraryOf: LibraryOfAModule, values: ValueTypes },
  body: ({ syntax: { separator, wholeNode, library }, libraryOf, values }) => {
    const segments = (path: string): string[] => (path === wholeNode ? [] : path.split(separator))
    /** A value without what a path's steps reach: an element of a list is gone through, each in turn. */
    const drop = (v: unknown, steps: readonly string[]): unknown => {
      const [step, ...rest] = steps
      if (step === undefined) return v
      if (Array.isArray(v)) return v.map((x) => drop(x, steps))
      if (v === null || !values.isObject(v)) return v
      return Object.fromEntries(Object.entries(v).flatMap(([k, x]) => (k !== step ? [[k, x]] : rest.length ? [[k, drop(x, rest)]] : [])))
    }
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
      /** A value without what these paths reach (an element of a list is gone through): what a review does not judge. */
      without: (value: unknown, paths: readonly string[]) => paths.reduce((v, p) => drop(v, segments(p)), value),
      /** Is the path this one, or a path under it? */
      within: (path: string, prefix: string) => path === prefix || path.startsWith(prefix + separator),
      /** The library a module belongs to; nothing for a module of the project. */
      library: (module: string) => libraryOf(module, library),
      /** The name a library's module takes in the graph that imports it. */
      inLibrary: (name: string, module: string) => name + library + module,
      /** A module's name in its own project: a library's module without the library's name. */
      ownName: (module: string) => {
        const name = libraryOf(module, library)
        return name === undefined ? module : module.slice(name.length + library.length)
      },
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
 * Fingerprints
 * The fingerprint of a value, enough to see that it changed: what a review saw, compared with what is there now. Its
 * JSON with the keys in order, hashed into 32 bits, in hexadecimal.
 */
export const Fingerprints = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  constants: {
    radix: { value: 16, meaning: "Hexadecimal: how a fingerprint is written" },
    digits: { value: 8, meaning: "Eight digits: the 32 bits of the hash, padded on the left" },
    pad: { value: "0", meaning: "What pads them on the left" },
  },
  deps: { hash: MultiplicativeHash, ecma: EcmaScript, values: ValueTypes, texts: Texts },
  body: code.file<typeof import("./code/engine/fingerprints").default>("./code/engine/fingerprints.ts"),
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
    settings: LanguageSettings, generator: Generator, structureDraws: StructureDraws, layout: Layout, typescript: TypeScript, versions: VersionOrder, units: Units, visible: VisibleText,
    fingerprints: Fingerprints,
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
 * A program read again in the same process, every file the compiler read as it was, gives the reading kept.
 */
export const StaticAnalysis = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    specifiers: NodeModuleSpecifiers, syntax: TypeScriptSyntax, references: References, file: TextFile,
    options: TypeScriptOptions, ts: TypeScriptCompiler, kept: KeptResults, runs: RunStore, hashing: Hashing, sha256: Sha256, encodings: NodeEncodings,
    paths: Paths, positions: Positions, docComment: DocComment, counts: Counts, sequences: Sequences, texts: Texts, messages: CompilerMessages,
    textAsCode: TextAsCode, libraries: TypeScriptLibraries, prelude: PreludeApi, running: Prelude,
  },
  constants: {
    commandDepth: { value: 3, meaning: "How deep the type of a cast is searched for a command: itself, a member or what a function gives, and one step further" },
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
  deps: { steps: StepNames, references: ReferenceSyntax, values: ValueTypes, layout: Layout, paths: Paths, prelude: Prelude, drivers: Drivers, sequences: Sequences, texts: Texts, messages: CompilerMessages },
  body: code.file<typeof import("./code/engine/wiring").default>("./code/engine/wiring.ts"),
})

/**
 * Length of a fingerprint
 * How many hexadecimal characters of the SHA-256 digest a lock keeps to fingerprint a declaration: 64 bits.
 */
export const Fingerprint = decision<number>({ owner: "trame", value: 16 })

/**
 * Project
 * Where the kinds and the views of a project are, and the libraries it imports (trame.json): the language's, from the
 * engine that reads it (since g87), and those the project names besides; whether it names the language as a package.
 */
export const Project = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    encodings: NodeEncodings, values: ValueTypes, layout: Layout, reading: FileReading, paths: Paths, pin: EnginePin, prelude: Prelude,
    names: LanguageNames, specifiers: NodeModuleSpecifiers, language: TypeScript,
  },
  body: code.file<typeof import("./code/engine/project").default>("./code/engine/project.ts"),
})

/**
 * The fingerprint of an engine
 * Each file with its SHA-256, as a generation keeps them: what its origin says (its programs, its graph and its code),
 * and the engine itself, as evidence names it (its graph and its code, and its libraries': its programs say the day of
 * their graph). The advance records the second beside a generation it freezes (engine.json); the engine that runs knows
 * its own from where its program is (its generation's record, or its repository's files for a candidate). Evidence a
 * program of the engine records carries it: it holds while the project pins that engine.
 */
export const EngineFingerprint = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    layout: Layout, advancement: Advancement, language: TypeScript, project: Project, reading: FileReading, paths: Paths, hashing: Hashing,
    sha256: Sha256, encodings: NodeEncodings, fingerprint: Fingerprint, json: JsonFormatting, sequences: Sequences, texts: Texts, values: ValueTypes,
  },
  body: code.file<typeof import("./code/engine/engine-fingerprint").default>("./code/engine/engine-fingerprint.ts"),
})

/**
 * Compiler
 * Loads the project once (the code of each node fingerprinted), then compiles it at a date: frozen graph, claims,
 * resolution, consolidated graph, evaluation, statuses, holes.
 */
export const Compiler = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { encodings: NodeEncodings, specifiers: NodeModuleSpecifiers, values: ValueTypes, layout: Layout, severityOrder: SeverityOrder, cycles: Cycles, references: References,
    positions: Positions, loader: ModuleLoader, reading: FileReading, paths: Paths, analysis: StaticAnalysis, project: Project, graph: GraphApi,
    wiring: Wiring, drivers: Drivers, prelude: Prelude, counts: Counts, sequences: Sequences, texts: Texts, messages: CompilerMessages,
    fingerprints: Fingerprints, signatures: Signatures, engines: EngineFingerprint, runs: KeptRuns, platform: PlatformEffects, names: LanguageNames,
    packages: PackageSources,
  },
  body: code.file<typeof import("./code/engine/compiler").default>("./code/engine/compiler.ts"),
})

/**
 * What tells a project's runs apart
 * A run kept (a scenario played) is given back while what it ran and the files the project reads are as they were:
 * every file under its root, its libraries, its kinds and its views, but those of the directories named here. The
 * packages installed are told by the lockfile, which is read; the repository's history is not the project; Trame's own
 * links and runs are what it writes itself; a frozen generation is written once, with the pin that names it. On disk,
 * the newest runs are kept, so many and no more.
 */
export const KeptRunsScope = decision<{ skipped: string[]; kept: number }>({
  owner: "trame",
  value: { skipped: ["node_modules", ".git", ".trame", "generations"], kept: 10000 },
  rejected: {
    "The code each run wires, alone": "a scenario reads files besides the code it runs (the example's documents, Poselia's evidence): kept by its code alone, it would say what the files no longer say",
    "The time each file was changed": "a build writes again files that do not change, and an advance rewrites the example's documents as they were: every run would be played again",
  },
})

/**
 * The runs of a project
 * A run kept under the fingerprint of what it ran and of the files the project reads as they are, except those the code
 * of its nodes covers (the fingerprint of what each run wires tells them apart): changing a body plays again only the
 * runs that wire it. Where the runs are kept is a port of its own: in the process, or on disk beyond it.
 */
export const ProjectRuns = fn({
  owner: "trame",
  implements: [KeptRuns],
  serves: [ExecutableSpecification],
  deps: { reading: FileReading, paths: Paths, hashing: Hashing, sha256: Sha256, encodings: NodeEncodings, scope: KeptRunsScope, store: RunStore },
  body: code.file<typeof import("./code/engine/kept-runs").default>("./code/engine/kept-runs.ts"),
})


/**
 * Laws
 * Tests each kind on nodes drawn at random, and its resolution on sets of claims; checks the imports.
 */
export const Laws = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { kept: KeptResults, drivers: Drivers, preludeApi: PreludeApi, specifiers: NodeModuleSpecifiers, layout: Layout,
    samples: SampleCount, claimSets: ClaimSets, generator: Generator, owners: SampledOwners, sampled: SampledValues, iso: Iso8601, references: References,
    reading: FileReading, paths: Paths, project: Project, graph: GraphApi, prelude: Prelude, names: LanguageNames,
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
  consequences: "The engine gives them the graph's values through the graph they read (Lib): its algebraic structures; the lists, punctuation and dates of the decided language; positions in a file and paths of a value; the settings of the documents and the draws of the laws; the layout of a project; the language its declarations are written in; the order of versions; values with their units and texts shown visibly, in the words of the decided language. The names they share with the engine are words of the prelude (KindName, ViewName, EdgeName, PackageReport, LanguageUse, PackageField, ReleaseEdge); a kind names its own fields and edges with keysOf, another kind's with fieldsOf and edgesOf; their words are in their catalogs. A feature of Lib serves the kinds from the generation that brings it on. The catalogue of literals lists what a file of the language writes, and since g53 each such file is an error (ADR \"A literal in a kind or a view is an error\").",
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
 * A shipment's pipeline
 * The steps trame ship runs for a shipment, computed once, which the views show: each artefact produced (by what, where
 * it lives, as the artefact's kind says), each check a program makes and the artefacts it reads, each obligation to
 * prove, each entry point that deploys, in order, then the dossier; and what keeps it from running (an artefact that
 * says nowhere where it lives, programs to run with no environment to assemble them for).
 */
export const ShipmentPipeline = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { sequences: Sequences, values: ValueTypes, messages: CommandMessages },
  body: code.file<typeof import("./code/engine/pipeline").default>("./code/engine/pipeline.ts"),
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
    counts: Counts, sequences: Sequences, texts: Texts, punctuation: Punctuation, ids: DocumentIds, layout: Layout, uri: Uri, messages: ViewMessages,
    pipeline: ShipmentPipeline, units: Units,
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
 * The days of history a page offers
 * Besides the dates where the graph changes, an export offers the last days something was given (a version released,
 * evidence recorded), each with what was proven by then, judged as it was given: the most recent, so many. Each date
 * is a compilation; its documents and figures that differ from today's but for the date are carried once more, without
 * the views of each node, the snapshot and the outputs for tools.
 */
export const PageHistory = decision<{ days: number }>({
  owner: "trame",
  value: { days: 7 },
  rejected: {
    "Every day since the first": "a page of Trame's graph carries 3.7 MB a date; each day is a compilation of the export",
    "Fourteen days": "the page of Trame's graph came to 15.8 MB, at the edge of what a claude.ai artifact holds, and the export to four minutes",
    "No day of history": "the page showed the 16th and the 17th of October, two weeks of work later",
  },
})

/**
 * Payload
 * The compiled graph in the intermediate format, for the page. It carries the language, so that the page writes dates as the documents do.
 */
export const PayloadBuilder = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    layout: Layout, candidateDates: CandidateDates, history: PageHistory, iso: Iso8601, clock: Clock, machine: MachineOutputs, views: Views,
    language: Language, texts: Texts, values: ValueTypes, counts: Counts, sequences: Sequences,
  },
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
export const DevService = decision<{ page: readonly string[]; bundle: string; events: string; amend: string; compiling: string; ready: string; host: string; ignored: readonly string[] }>({
  owner: "trame",
  value: {
    page: ["/", "/index.html"], bundle: "/bundle.json", events: "/events", amend: "/amend",
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
  deps: {
    line: TrameCommands, values: ValueTypes, layout: Layout, paths: Paths, wiring: Wiring, prelude: Prelude, drivers: Drivers, texts: Texts, messages: CompilerMessages,
    names: LanguageNames, specifiers: NodeModuleSpecifiers, language: TypeScript,
  },
  body: code.file<typeof import("./code/engine/assembly").default>("./code/engine/assembly.ts"),
})
