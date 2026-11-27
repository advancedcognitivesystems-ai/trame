/** Standard library · The engine */

// The engine is a provider, as GitHub is (E3, decided 23 November): its primitives are ports of the library, beside
// the other providers' (git, GitHub, npm, Playwright, the files), realized by adapters that reach the engine running in
// this process through the API the language defines (#trame/kernel's EngineApi, since g124), as a view receives its
// own. A command of a library or of a project uses the ports, and works with the graph as freely as the engine's own
// commands: what it reaches of the engine is what the ports say. They grow as the engine's commands move out of it.

import { code, refines } from "#trame/kernel"
import type { CompiledProject, LanguageReader, ProjectLayout } from "#trame/kernel"
import { port } from "#trame/kinds/port"
import { standard } from "#trame/kinds/standard"
import { implementation } from "#trame/kinds/implementation"
import { catalog } from "#trame/kinds/catalog"
import { adr } from "#trame/kinds/adr"
import { RealizedOnce, CitedNotCopied } from "./product"
import { CommandLanguage } from "./tooling"
import { Texts } from "./algebra"

/**
 * Trame references
 * How the engine names a node and a field: "module.Identifier", "value.case". An empty path designates the whole node.
 * A module of a library takes the library's name before its own: "std/algebra.Counts". The engine gives every reference
 * so (what a view receives, the graph a build writes); what reads one (a command, a renderer) reads it so.
 */
export const ReferenceSyntax = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Trame, the prelude (trame/kernel.ts: refOf, getPath)",
  constants: {
    separator: { value: ".", meaning: "Separates the module from the identifier, and the steps of a path in a field" },
    library: { value: "/", meaning: "Separates a library's name from the name of one of its modules, in the graph that imports it" },
    wholeNode: refines(Texts, "empty", "The empty path: the whole node, not one of its fields"),
  },
})

/** The project a command runs for. */
export interface ProjectAtHand {
  /** Where its files are, from its root, as the engine reads and writes them. */
  layout(): ProjectLayout
  /** The project, compiled at the day its command line says (--at, or today), once. */
  compiled(): Promise<CompiledProject>
}

/**
 * The project at hand
 * The project a command runs for, compiled at the day its command line says: what a view receives of it (the graph,
 * its statuses and issues, the pipelines of its shipments), the graph as a build writes it, and where its files are.
 */
export const TheProject = port<ProjectAtHand>({ owner: "trame", declaredEffects: ["read", "asynchronous"] })

/** Which project a scenario compiles, and at which day. */
export interface ProjectChosen {
  /** Its directory, from the project whose scenario it is. */
  readonly root: string
  readonly today: string
}

/**
 * The project of a scenario
 * Which project a scenario compiles, and at which day: a project of the library's own, which its scenarios read.
 */
export const ProjectOfTheScenario = port<ProjectChosen>({ owner: "trame", declaredEffects: [] })

/**
 * What the engine's adapters say
 */
export const EngineWords = catalog({
  owner: "trame",
  language: CommandLanguage,
  messages: () => ({
    noEngine: () => "no engine runs this program: its commands are typed through trame, which runs them in its own process",
    nothingPrepared: () => "the engine prepared no project for this command: it runs it from a project's directory",
  }),
})

/**
 * The project the engine prepared
 * On a machine, a command runs in the engine (std's CommandsInTheEngine): the project at hand is the one the engine
 * prepared to find the command, compiled once at the day the line says. Run without an engine, it has none, and says so.
 */
export const ProjectInTheEngine = implementation({
  owner: "trame", implements: [TheProject],
  deps: { say: EngineWords },
  body: code.file("./code/engine/project-in-the-engine.ts"),
})

/**
 * A project compiled by the engine that plays the scenario
 * In a scenario, the project at hand is the one the scenario names (a project of the library's own), compiled at the
 * day it says by the engine that plays the scenario, checked as the dispatch checks one; once. What a command computes
 * from the graph is then played on a real graph, only the platform kept in memory.
 */
export const ProjectCompiledHere = implementation({
  owner: "trame", implements: [TheProject],
  deps: { chosen: ProjectOfTheScenario, say: EngineWords },
  body: code.file("./code/engine/project-compiled-here.ts"),
})

/**
 * Reading a language
 * The reader of the languages bodies are written in (tree-sitter): it loads a language's grammar, reads an example of
 * it, and says which predicates of its queries tree-sitter keeps aside. A language node names it as its reader.
 */
export const LanguageReading = port<LanguageReader>({ owner: "trame", declaredEffects: ["read", "asynchronous"] })

/**
 * Read by the engine
 * A language is read by the engine that compiles the project, with its reader, through the API the language defines
 * (since g128): in a build, in a library's scenarios, wherever the engine runs. Without an engine, it says so.
 */
export const ReadByTheEngine = implementation({
  owner: "trame", implements: [LanguageReading],
  deps: { say: EngineWords },
  body: code.file("./code/engine/read-by-the-engine.ts"),
})

/**
 * The engine is a provider
 * What a command needs of the engine (the project compiled at a date, with what a view receives; a language read; later
 * the evidence, the assembly, the publication, the engine's identity) is a port of the library, realized by an adapter
 * that reads the API the language defines; a command, or a language, of a library or a project reaches the engine only
 * through them.
 */
export const EngineAsAProvider = adr({
  owner: "trame",
  context: "The engine's commands reached its modules directly; a command of a library or a project could not, and a command moved out of the engine would have lost what it computed with.",
  consequences: "Every command reaches the engine the same way, through ports versioned with the library; the API they read is the language's, given by the engine, and it grows with a generation when a command needs more. A library's scenario compiles a project of its own through the engine that plays it.",
  rejected: {
    "A library of contracts": "a third place for types the language already defines (what a view receives) and the ports std already holds",
    "The engine's modules, given as they are": "what a command reads would change with each generation, unseen by the types",
  },
  serves: [RealizedOnce],
  appliedBy: [TheProject, ProjectOfTheScenario, ProjectInTheEngine, ProjectCompiledHere, LanguageReading, ReadByTheEngine],
})
