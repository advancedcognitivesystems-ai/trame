/** Trame · Principles */

import { adr } from "../kinds/adr"
import { ExecutableSpecification, SingleSource } from "./product"
import { Prelude, TypeScriptCompiler, TrameCli, RenderingWithoutGraph, OnlyCommandsWrite, KnownEffects } from "./architecture"
import { PreludeApi, FrozenApi, DocComment } from "./conventions"
import { StaticAnalysis, Project, Compiler, Wiring, GraphApi, Laws, Views, CompilationApi, MachineOutputs, Lock, Assembly, PayloadBuilder } from "./engine"
import { BodyChecks, SyntaxReader } from "./syntax"
import { Drivers } from "./languages"
import { TypeScript } from "./typescript"
import { Page } from "./page"
import { Build, Publish, TakeSnapshot, Advance } from "./commands"
import { AcceptCandidate } from "./generations"
import { CompileExample, KindLaws, BuildLikeBefore, ExpectedDifferences } from "./scenarios"

// Ten decisions shape everything else; the last two came from describing Trame with Trame. Then the layers: each has
// its author and what protects it.

// The ten principles -----------------------------------------------------------------------

/**
 * The graph is written in TypeScript
 * A node is an exported constant: its name is its identifier; the first line of its documentation comment is its title,
 * the rest its description. Its fields and edges are typed by its kind.
 */
export const GraphInTypeScript = adr({
  owner: "trame",
  context: "A product's description must be checked by a compiler, navigable in an editor, and written by an LLM together with the people who decide.",
  consequences: "The static reading takes titles, lines, references and type errors from the TypeScript compiler; a body is TypeScript, or another language a node of the graph describes.",
  rejected: {
    "YAML or JSON": "no types, no references between nodes, no code",
    "A language of its own": "no editor, no type checker, and an LLM writes it less well",
  },
  serves: [ExecutableSpecification],
  appliedBy: [StaticAnalysis, TypeScriptCompiler, TypeScript, DocComment],
})

/**
 * The prelude and the compiler know no kind of node
 * They know what a kind is: its fields, its edges, a few functions. The vocabulary (goal, decision, port, scenario…)
 * lives in kinds/, as files.
 */
export const NoKindInTheCore = adr({
  owner: "trame",
  context: "The vocabulary of products differs from one to the next (a service level objective here, a regulation there) and keeps growing.",
  consequences: "A new kind needs no change to the engine; each kind is tried on nodes drawn at random against seven laws. The assembly names only what it assembles: a component, an environment, an entry point.",
  rejected: {
    "A fixed metamodel": "it would freeze the vocabulary of every product",
    "Kinds as nodes": "a node per kind would need a kind of kinds",
  },
  serves: [ExecutableSpecification],
  appliedBy: [Laws, Compiler, Project],
})

/**
 * The traversal API is the only way to read the graph
 * Kinds, views and rules read the graph through the queries and the views of nodes the compiler builds; nothing else
 * reaches the raw data.
 */
export const OneWayToRead = adr({
  owner: "trame",
  context: "Kinds and views are written by an LLM and reviewed by people: what they can read must be small, sorted, finite and read-only.",
  consequences: "Two moments of the graph: the frozen one, where reading a value being settled throws, and the consolidated one. Results are sorted; traversals ignore cycles; views are frozen.",
  rejected: { "Access to the registry": "a kind could read a value while it is being settled, or change it" },
  serves: [ExecutableSpecification],
  appliedBy: [CompilationApi, GraphApi, Views, RenderingWithoutGraph],
})

/**
 * The source carries the history
 * A published declaration is never erased: it is amended or repealed, and the graph in force at any date is rebuilt
 * from the source alone.
 */
export const HistoryInTheSource = adr({
  owner: "trame",
  context: "A decision is read by people who took it, people who apply it, and auditors who must know what was in force on a date.",
  consequences: "trame publish freezes the fingerprint of each declaration in trame.lock; changing or removing a published one is an error. --at gives the graph of any date.",
  rejected: { "The history of Git": "it records lines, not decisions, and it is not read by the build" },
  serves: [SingleSource],
  appliedBy: [Lock, Publish],
})

/**
 * A change to a node is a claim
 * An amendment claims values of another node, a repeal claims its removal. When two claims overlap, the kind concerned
 * settles them; if it cannot, the value is contested.
 */
export const ChangesAreClaims = adr({
  owner: "trame",
  context: "Several people change the same decision: support asks for a longer period while legal caps it.",
  consequences: "The compiler detects overlaps, always records them, and applies what the kind settles; the settlement names the nodes it read. It never depends on the value it settles, nor on the order of the claims.",
  rejected: { "The most recent wins": "it hides disagreements; a kind may choose it where it makes sense" },
  serves: [SingleSource],
  appliedBy: [Compiler, Laws],
})

/**
 * An undecided value blocks; it does not crash
 * Reading a value that is not decided, or contested, raises a hole assigned to an owner. What depends on it is blocked
 * and says so.
 */
export const UndecidedBlocks = adr({
  owner: "trame",
  context: "A graph is written before everything is decided, and must still build, render and run what can run.",
  consequences: "A criterion that reads an undecided value is blocked, a service that computes with one refuses with the name of the value, and the documents say who must decide.",
  rejected: { "A default value": "the product would run on a decision nobody took" },
  serves: [ExecutableSpecification],
  appliedBy: [Compiler, Wiring],
})

/**
 * Without evidence, a status is unknown
 * A node is held or violated only on evidence: a criterion played, a scenario run, a measurement. Otherwise its status
 * is unknown, never held by default.
 */
export const UnknownWithoutEvidence = adr({
  owner: "trame",
  context: "A status read as held when nothing checked it gives a false confidence, worse than none.",
  consequences: "One of the laws of the kinds: the first version of the service level objective, which declared itself held without a measurement, was refused by it.",
  serves: [ExecutableSpecification],
  appliedBy: [Laws, KindLaws],
})

/**
 * One output for each reader
 * Compiling gives documents and a page for people, a consolidated snapshot without history for agents, and assembled
 * programs for machines.
 */
export const OneOutputPerReader = adr({
  owner: "trame",
  context: "People read the history and the reasons; an agent that writes code needs the exact expected state; a machine needs a program.",
  consequences: "One source, several outputs, each from the same compilation: the documents in Markdown, the page, graph.json and snapshot.json, the frozen programs and their infrastructure.",
  serves: [SingleSource],
  appliedBy: [Build, TakeSnapshot, MachineOutputs, Page, Assembly],
})

/**
 * Code holds no hidden decision
 * A body receives the world through its parameters only; only implementations touch the platform; a value written in
 * a body is declared in the graph instead, with its meaning, and the text people read is in catalogs.
 */
export const NoHiddenDecision = adr({
  owner: "trame",
  context: "A decision hidden in code is answered for by nobody, and nobody knows who else relies on it.",
  consequences: "The checks of a body refuse a hidden dependency, an access to the platform outside an implementation, and since g28 a literal; effects come from a vocabulary; only commands write.",
  rejected: {
    "Code reviews alone": "they find what a reader notices, not what the graph can check every time",
  },
  serves: [SingleSource],
  appliedBy: [BodyChecks, Drivers, Compiler, KnownEffects, OnlyCommandsWrite],
})

/**
 * A literal in a body is an error
 * A value written in a body is declared in the graph instead, with its meaning, and the body receives it as a
 * parameter. The reader sets aside what names something (a key, a module, a type); a catalog's text is what it
 * declares.
 */
export const EveryLiteralDeclared = adr({
  owner: "trame",
  context: "The checks of a body kept the platform out, but a value written in a body was still a decision nobody answered for: Trame's own bodies held 1,077 of them.",
  consequences: "One error per node, with each place, in every language a driver reads; trame.json says nothing about literals. Trame's bodies and the example's went to none before the rule came (g27, g28).",
  rejected: {
    "A list of refused values (0, 1, -1, \"\")": "it said which literals mattered, while every one hides a meaning",
    "A baseline of tolerated literals": "it would never shrink",
  },
  serves: [SingleSource],
  appliedBy: [Compiler, SyntaxReader],
})

/**
 * A key is made of its parts
 * What tells two things apart (an issue, an overlap, a body) is the JSON of its parts, never texts joined with a
 * separator.
 */
export const KeysOfParts = adr({
  owner: "trame",
  context: "Keys joined with a bar or a colon needed a separator nobody declared, which a part could contain, and which had to be split again.",
  consequences: "A record that needs a part carries it (an overlap carries its target and its paths); nothing parses a key.",
  rejected: { "A declared separator": "a part may still contain it, and the key must still be split" },
  serves: [SingleSource],
  appliedBy: [Compiler, CompilationApi, PayloadBuilder, StaticAnalysis, Laws],
})

/**
 * Trame builds Trame
 * The engine is a graph like any product's, and only a frozen generation compiled from that graph assembles the next
 * one.
 */
export const TrameBuildsTrame = adr({
  owner: "trame",
  context: "An engine that describes products must show that its description is enough to build a product, starting with itself.",
  consequences: "A capability exists only once it is written in the graph, and serves from the next generation on. A candidate is accepted only if it builds everything as the generation in place did, reassembles itself to a fixed point, and keeps the laws.",
  rejected: { "Editing the engine by hand": "the graph would describe an engine that does not exist" },
  serves: [ExecutableSpecification],
  appliedBy: [Advance, AcceptCandidate, CompileExample, BuildLikeBefore, KindLaws],
})

// The layers ----------------------------------------------------------------------------

/**
 * The prelude: the runtime of the language
 * trame/ holds the registry of nodes and kinds, the API of kinds, the intermediate format, the vocabularies and
 * formatting. It is written rarely, by hand, and the engine reaches it only through its public API.
 */
export const PreludeLayer = adr({
  owner: "trame",
  context: "Kinds, views and the engine must share one registry and one format, as the runtime of a compiler is shared by what it compiles.",
  consequences: "The graph describes the prelude as a port; a body imports only its public API; a frozen program calls only its frozen API. The laws of kinds and views, and every generation that runs on it, protect it.",
  rejected: { "The prelude as nodes": "it is what nodes are made of: the graph cannot produce it" },
  serves: [ExecutableSpecification],
  appliedBy: [Prelude, PreludeApi, FrozenApi, Laws],
})

/**
 * Kinds and views: the vocabulary, as reviewed files
 * kinds/ and views/ say what a node can be and which questions are asked of the graph. An LLM proposes them, a person
 * reviews them; typing and the laws protect them.
 */
export const VocabularyLayer = adr({
  owner: "trame",
  context: "The vocabulary changes less often than a product, and a mistake in it misleads every product that uses it.",
  consequences: "A project names the directories of its kinds and views (trame.json), so that several share them; each kind and each view is tried against its laws before anything is built.",
  serves: [ExecutableSpecification],
  appliedBy: [Laws, Views, Project],
})

/**
 * The graph: the description of a product
 * src/ holds a product's graph, written by an LLM together with the people who decide. The build protects it: holes,
 * overlaps, criteria, scenarios.
 */
export const GraphLayer = adr({
  owner: "trame",
  context: "The description changes every day, live, while the people who decide talk with the LLM that writes it.",
  consequences: "Every build checks the whole graph and says what is undecided, contested, violated or untested, and who must act.",
  serves: [ExecutableSpecification],
  appliedBy: [Compiler, Build],
})

/**
 * The engine: a graph like any product's
 * In Trame's repository, src/ is the engine's graph and src/code/ holds one body per code node, whose dependencies are
 * its parameters. The engine changes only there.
 */
export const EngineLayer = adr({
  owner: "trame",
  context: "The engine follows the rules it imposes on products, or those rules are not credible.",
  consequences: "The engine is a component (TrameCli) whose commands are entry points; its bodies pass the same checks as a product's; three architecture rules hold at every build.",
  serves: [ExecutableSpecification],
  appliedBy: [TrameCli, RenderingWithoutGraph, OnlyCommandsWrite, KnownEffects],
})

/**
 * Generations: frozen engines
 * generations/ holds the engines that were accepted: each one assembled by the one before from the graph of its time,
 * with a copy of that graph, never edited. Only g0 was written by hand.
 */
export const GenerationLayer = adr({
  owner: "trame",
  context: "A described engine needs an engine to build it; the one that builds it must not change while it does.",
  consequences: "The language (prelude and kinds) stays shared through links until a change a generation cannot follow gives it its own copy. A wanted difference on the example is declared in the graph before it is accepted.",
  serves: [ExecutableSpecification],
  appliedBy: [Advance, AcceptCandidate, BuildLikeBefore, ExpectedDifferences],
})
