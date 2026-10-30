/** Trame · Generations */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"
import { fn } from "../kinds/function"
import { ExecutableSpecification } from "./product"
import { TypeScriptSyntax, DocBlock, ModuleTitle, LineComment, NamedImport, ExportDeclaration, ConstDeclaration, Call, ObjectBlock, Property, StringLiteral } from "./typescript"
import { ReferenceSyntax } from "./conventions"
import { GnuPositions } from "./standards"
import { Texts, ValueTypes } from "./algebra"
import { AdvanceMessages } from "./messages"

// The engine advances by frozen generations: the generation in place compiles the engine's graph and assembles the next
// one (the command `trame advance`). What makes a candidate acceptable is a requirement, whose rule the command
// receives; its criteria say what it must answer. Each generation is a release of the engine's component, declared in
// the module releases, which the command writes; a project runs the generation its configuration pins, and the older
// generations share the language while they can run on it.

/** What an advance found, check by check. */
export interface AdvanceReport {
  /** The scenarios of the graph hold, run by the generation in place on the example. */
  scenariosHold: boolean
  /** The candidate builds the example as the generation in place did, character for character. */
  exampleAsBefore: boolean
  /** The candidate builds Trame's graph as the generation in place did. */
  selfAsBefore: boolean
  /** The program the candidate assembles builds Trame's graph as the candidate did. */
  secondAsFirst: boolean
  /** That program reassembles itself character for character. */
  fixedPoint: boolean
  /** The older generations that share the language still run on it, or can receive the copy archived for them. */
  olderRun: boolean
  /** The laws of the kinds and of the views hold. */
  lawsHold: boolean
  /** The differences shown are wanted (trame advance --accept). */
  accepted: boolean
}

/**
 * What an advance assembles
 * The candidate is the component of the engine assembled for the environment of a machine, with the page it writes
 * assembled for the browser: both are compared at the fixed point, and frozen together. Beside the documents of
 * each build, an advance keeps what it printed, in a file of its own, and names what it keeps by whose build it is: the
 * reference (the generation in place), the candidate, the second assembly. The terminal names the first files that
 * differ; the file of differences has them all.
 */
export const Advancement = decision<{
  component: string
  environment: string
  page: { component: string; environment: string }
  terminal: string
  saves: { reference: string; candidate: string; second: string }
  shown: number
}>({
  owner: "trame",
  value: {
    component: "TrameCli",
    environment: "Local",
    page: { component: "PageApp", environment: "Browser" },
    terminal: "terminal.txt",
    saves: { reference: "reference", candidate: "candidate", second: "second" },
    shown: 12,
  },
})

/**
 * Accept a candidate
 * A candidate becomes the next generation only if its second assembly builds Trame's graph as it did and reassembles
 * itself character for character (the fixed point), the laws hold and the older generations still run (or can receive
 * their language); and if it builds the example and Trame's graph as the generation in place, whose scenarios hold,
 * unless the differences are declared wanted.
 */
export const AcceptCandidate = requirement({
  refines: [ExecutableSpecification],
  rule: (r: AdvanceReport): boolean =>
    r.secondAsFirst && r.fixedPoint && r.lawsHold && r.olderRun && (r.accepted || (r.scenariosHold && r.exampleAsBefore && r.selfAsBefore)),
})

/** What a candidate needs to be accepted */
export const AcceptCandidateCriteria = acceptance({
  accepts: AcceptCandidate,
  owner: "trame",
  criteria: (criterion) => {
    const sound = { scenariosHold: true, exampleAsBefore: true, selfAsBefore: true, secondAsFirst: true, fixedPoint: true, olderRun: true, lawsHold: true, accepted: false }
    criterion("A candidate that builds everything as before, reaches its fixed point and keeps the laws is accepted", () => AcceptCandidate(sound))
    criterion("A difference on the example refuses it, unless it is wanted", () => !AcceptCandidate({ ...sound, exampleAsBefore: false }) && AcceptCandidate({ ...sound, exampleAsBefore: false, accepted: true }))
    criterion("A difference on Trame's graph refuses it, unless it is wanted", () => !AcceptCandidate({ ...sound, selfAsBefore: false }) && AcceptCandidate({ ...sound, selfAsBefore: false, accepted: true }))
    criterion("A scenario that does not hold refuses it, unless the differences are wanted", () => !AcceptCandidate({ ...sound, scenariosHold: false }) && AcceptCandidate({ ...sound, scenariosHold: false, accepted: true }))
    criterion("Without a fixed point, nothing is accepted, not even when wanted", () => !AcceptCandidate({ ...sound, fixedPoint: false, accepted: true }))
    criterion("A second assembly that builds differently refuses it, even when wanted", () => !AcceptCandidate({ ...sound, secondAsFirst: false, accepted: true }))
    criterion("A law that breaks refuses it, even when wanted", () => !AcceptCandidate({ ...sound, lawsHold: false, accepted: true }))
    criterion("An older generation that no longer runs, and cannot receive its language, refuses it, even when wanted", () => !AcceptCandidate({ ...sound, olderRun: false, accepted: true }))
  },
})

/**
 * Releases of the engine
 * Each generation frozen is a release of the engine's component: a node of the module releases, named by the prefix and
 * the generation's number. trame advance writes the module at each promotion, from the releases the graph already holds
 * and the one it freezes, so it is never edited by hand; a generation's own release is written after its graph is
 * copied, and is not in its own copy. The value names the module, the kind's constructor and file, and its edge to the
 * release that assembled a release; how a release reaches its language is a word of the prelude (LanguageUse).
 */
export const Releases = decision<{ module: string; kind: string; prefix: string; owner: string; assembledBy: string }>({
  owner: "trame",
  value: { module: "releases", kind: "release", prefix: "G", owner: "trame", assembledBy: "assembledBy" },
  rejected: {
    "The history in the README": "written by hand, and it drifted from the generations",
    "A file of records beside the generations": "data the graph would not hold, and no view could show",
  },
})

/**
 * The engine a project runs
 * A project pins the generation it runs in its configuration (trame.json), under this key: the path of the generation,
 * from the project. Deploying a new generation is moving the pin, which trame advance does when it promotes, for Trame
 * and for the example; going back is moving it back. The launcher (trame.sh) runs the generation the pin names; trame
 * advance takes it as the generation in place.
 */
export const EnginePin = decision<{ key: string }>({
  owner: "trame",
  value: { key: "engine" },
  rejected: {
    "The last generation, whatever it is": "a project could neither stay on a generation nor go back to one",
    "An npm package per generation": "a registry to publish to, and a version beside the generation's number, for one project today",
    "The candidate, run as it is": "an engine that no advance accepted",
  },
})

/**
 * Generations that share the language
 * A generation reaches the repository's language (the prelude, the kinds, the views) through links while it can run on
 * it: it then compiles a project written in the language of today. Each advance replays the oldest and the newest of
 * the other generations that share it on the example, through a view that writes nothing. One that no longer runs
 * receives the copy of the language archived with the generation in place, the last language they all ran on, with a
 * copy of the example, and runs on its own from then on, as g1 to g8 do; without such an archive, the candidate is
 * refused. Each promotion archives its language, once per fingerprint.
 */
export const LanguageSharing = decision<{ oldest: number; newest: number; view: string }>({
  owner: "trame",
  value: { oldest: 1, newest: 1, view: "index" },
  rejected: {
    "A copy of the language in every generation": "a generation could then compile only its own graph: it would share no registry with today's projects",
    "Replaying every generation": "a minute each, at every advance",
  },
})

/**
 * Records of the releases
 * The releases of the graph, read back from graph.json, and the module that declares them, written in TypeScript with
 * the syntax elements of the module typescript.
 */
export const ReleaseRecords = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    releases: Releases, syntax: TypeScriptSyntax, references: ReferenceSyntax, positions: GnuPositions,
    doc: DocBlock, title: ModuleTitle, comment: LineComment, imports: NamedImport, exported: ExportDeclaration, constant: ConstDeclaration,
    call: Call, object: ObjectBlock, property: Property, text: StringLiteral,
    texts: Texts, values: ValueTypes, messages: AdvanceMessages,
  },
  body: code.file<typeof import("./code/commands/releases").default>("./code/commands/releases.ts"),
})
