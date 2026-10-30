/** Trame · Laws */

import { Severity, Status } from "../trame/kernel"
import { goal } from "../kinds/goal"
import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"

// The laws of kinds and views. A kind says how a node of its kind is checked, settled and shown; a view, which document
// the graph gives. Whoever writes them, the project or an LLM, the engine trusts them only once they keep these laws.
// Each law is a requirement: a pure judgement that the engine applies to what it observes, when it tries a kind on
// nodes drawn at random (function "Laws") or runs a view on the graph (function "Views"). Its criteria show it on cases
// chosen by hand: the laws are specified, and checked, before they judge anything.

/**
 * Kinds and views that can be trusted
 * A kind or a view takes part in the compilation only once it keeps its laws, whoever wrote it. A new kind needs no
 * change to the engine; a faulty one is refused before it misleads a document.
 */
export const TrustedExtensions = goal()

// What a kind declares -----------------------------------------------------------------------------------------------

/** What a kind declares, as the laws read it; and what its claims targeted, on the nodes drawn at random. */
export interface KindDeclaration {
  /** It has a label, in the singular and in the plural. */
  labelled: boolean
  /** The names of its fields and of its edges. */
  names: readonly string[]
  /** Each of its edges, with a kind it points to. */
  targets: readonly (readonly [edge: string, target: string])[]
  /** Its fields that hold an owner. */
  ownerFields: readonly string[]
  /** It settles claims (resolve). */
  resolves: boolean
  /** It makes claims (claims). */
  claims: boolean
  /** A claim it made targeted something other than a node. */
  claimsOffNodes: boolean
}

/** What a declaration is checked against: the names the API reserves, the kinds loaded, the target that means any kind. */
export interface KnownNames {
  reserved: ReadonlySet<string>
  kinds: ReadonlySet<string>
  any: string
}

/** What a declaration misses: each fault, and the names involved. */
export interface DeclarationFaults {
  unlabelled: boolean
  reserved: readonly string[]
  unknownTargets: readonly (readonly [edge: string, target: string])[]
  severalOwners: boolean
  resolveWithoutClaims: boolean
  claimsOffNodes: boolean
}

/**
 * Complete declaration
 * A kind has a label, names that the API does not reserve, edges towards kinds that exist (or towards any kind), at
 * most one field for its owner; it settles claims only if it makes some, and its claims target nodes.
 */
export const CompleteDeclaration = requirement({
  refines: [TrustedExtensions],
  rule: (d: KindDeclaration, known: KnownNames): DeclarationFaults => ({
    unlabelled: !d.labelled,
    reserved: d.names.filter((n) => known.reserved.has(n)),
    unknownTargets: d.targets.filter(([, t]) => t !== known.any && !known.kinds.has(t)),
    severalOwners: d.ownerFields.length > 1,
    resolveWithoutClaims: d.resolves && !d.claims,
    claimsOffNodes: d.claimsOffNodes,
  }),
})

const sound: KindDeclaration = { labelled: true, names: ["value"], targets: [["serves", "goal"]], ownerFields: ["owner"], resolves: false, claims: false, claimsOffNodes: false }
const known: KnownNames = { reserved: new Set(["ref", "name"]), kinds: new Set(["goal"]), any: "*" }
const faultless = (f: DeclarationFaults) =>
  !f.unlabelled && !f.reserved.length && !f.unknownTargets.length && !f.severalOwners && !f.resolveWithoutClaims && !f.claimsOffNodes

/** Criteria of the complete declaration */
export const CompleteDeclarationCriteria = acceptance({
  accepts: CompleteDeclaration,
  owner: "trame",
  criteria: (criterion) => {
    criterion("A sound declaration has no fault", () => faultless(CompleteDeclaration(sound, known)))
    criterion("A name the API reserves is a fault", () => CompleteDeclaration({ ...sound, names: ["name", "value"] }, known).reserved.join() === "name")
    criterion("An edge towards an unknown kind is a fault; towards any kind, it is not", () =>
      CompleteDeclaration({ ...sound, targets: [["uses", "widget"], ["about", "*"]] }, known).unknownTargets.map(([e]) => e).join() === "uses")
    criterion("Two owner fields are a fault", () => CompleteDeclaration({ ...sound, ownerFields: ["owner", "author"] }, known).severalOwners)
    criterion("Settling claims without making any is a fault", () =>
      CompleteDeclaration({ ...sound, resolves: true }, known).resolveWithoutClaims && faultless(CompleteDeclaration({ ...sound, resolves: true, claims: true }, known)))
  },
})

// How a kind answers -------------------------------------------------------------------------------------------------

/** How a call ended: it threw, and what it threw was the reading of an undecided value. */
export interface CallEnd {
  threw: boolean
  undecided: boolean
}

/**
 * Answers without crashing
 * A function of a kind answers on any value it may be given. Reading an undecided value stops it: that is a decision
 * to take, not a crash; any other error is. A view may not stop: a document cannot wait.
 */
export const AnswersWithoutCrashing = requirement({
  refines: [TrustedExtensions],
  rule: (end: CallEnd, mayStop: boolean): boolean => !end.threw || (mayStop && end.undecided),
})

/** Criteria of the answers without crashing */
export const AnswersWithoutCrashingCriteria = acceptance({
  accepts: AnswersWithoutCrashing,
  owner: "trame",
  criteria: (criterion) => {
    criterion("An answer keeps the law", () => AnswersWithoutCrashing({ threw: false, undecided: false }, false))
    criterion("A kind stopped by an undecided value keeps it", () => AnswersWithoutCrashing({ threw: true, undecided: true }, true))
    criterion("A view stopped by an undecided value breaks it", () => !AnswersWithoutCrashing({ threw: true, undecided: true }, false))
    criterion("Any other error breaks it", () => !AnswersWithoutCrashing({ threw: true, undecided: false }, true))
  },
})

/** A hole a kind reports: its severity, and the person it names. */
export interface ReportedHole {
  severity: Severity
  owner?: string
}

/**
 * A blocking hole has an owner
 * A hole that blocks names who must fill it: the hole's own owner, or else the owner of its node.
 */
export const BlockingHoleHasOwner = requirement({
  refines: [TrustedExtensions],
  rule: (hole: ReportedHole, nodeOwner?: string): boolean => hole.severity !== Severity.blocking || Boolean(hole.owner ?? nodeOwner),
})

/** Criteria of the owner of a blocking hole */
export const BlockingHoleHasOwnerCriteria = acceptance({
  accepts: BlockingHoleHasOwner,
  owner: "trame",
  criteria: (criterion) => {
    criterion("A blocking hole without any owner breaks the law", () => !BlockingHoleHasOwner({ severity: Severity.blocking }))
    criterion("The owner of the node is enough", () => BlockingHoleHasOwner({ severity: Severity.blocking }, "person-a"))
    criterion("A warning needs no owner", () => BlockingHoleHasOwner({ severity: Severity.warning }))
  },
})

/**
 * Without evidence, the status is unknown
 * A kind says that a node holds, or is violated, only from evidence: a measure or an evaluation. Before any, its status
 * is unknown, blocked, or none.
 */
export const UnknownWithoutEvidence = requirement({
  refines: [TrustedExtensions],
  rule: (status: Status | undefined, evidence: boolean): boolean => evidence || (status !== Status.held && status !== Status.violated),
})

/** Criteria of the status without evidence */
export const UnknownWithoutEvidenceCriteria = acceptance({
  accepts: UnknownWithoutEvidence,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Held without evidence breaks the law", () => !UnknownWithoutEvidence(Status.held, false))
    criterion("Violated without evidence breaks the law", () => !UnknownWithoutEvidence(Status.violated, false))
    criterion("Unknown, or no status, keeps it", () => UnknownWithoutEvidence(Status.unknown, false) && UnknownWithoutEvidence(undefined, false))
    criterion("With evidence, any status keeps it", () => UnknownWithoutEvidence(Status.held, true))
  },
})

/**
 * Same input, same answer
 * Called twice on the same input, a function of a kind gives the same answer; run twice on the same graph, a view
 * gives the same document. The answers are compared as written.
 */
export const SameInputSameAnswer = requirement({
  refines: [TrustedExtensions],
  rule: (answers: readonly string[]): boolean => new Set(answers).size <= 1,
})

/** Criteria of the same answer */
export const SameInputSameAnswerCriteria = acceptance({
  accepts: SameInputSameAnswer,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Two equal answers keep the law", () => SameInputSameAnswer(["held", "held"]))
    criterion("Two different answers break it", () => !SameInputSameAnswer(["held", "unknown"]))
  },
})

// How a kind settles claims ------------------------------------------------------------------------------------------

/**
 * The resolution does not depend on the order
 * The same claims, presented in other orders, are the same input: the kind that settles them gives the same answer.
 */
export const OrderFree = requirement({
  refines: [SameInputSameAnswer],
  rule: (answers: readonly string[]): boolean => SameInputSameAnswer(answers),
})

/** Criteria of the resolution in any order */
export const OrderFreeCriteria = acceptance({
  accepts: OrderFree,
  owner: "trame",
  criteria: (criterion) => {
    criterion("The same order of claimants, whatever the order of the claims, keeps the law", () => OrderFree(["a,b", "a,b", "a,b"]))
    criterion("Another claimant first, in one order, breaks it", () => !OrderFree(["a,b", "b,a"]))
  },
})

/**
 * The resolution returns only what it is given
 * Settling claims orders the claimants, or names an arbiter among them: it returns no node that claims nothing.
 */
export const ClosedResolution = requirement({
  refines: [TrustedExtensions],
  rule: <T>(given: ReadonlySet<T>, returned: readonly T[]): T[] => returned.filter((x) => !given.has(x)),
})

/** Criteria of the closed resolution */
export const ClosedResolutionCriteria = acceptance({
  accepts: ClosedResolution,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Returning claimants only keeps the law", () => !ClosedResolution(new Set(["a", "b"]), ["b", "a"]).length)
    criterion("A node that claims nothing is named", () => ClosedResolution(new Set(["a"]), ["a", "c"]).join() === "c")
  },
})

// What a view declares and writes ------------------------------------------------------------------------------------

/** What a view declares, as the laws read it. */
export interface ViewDeclaration {
  /** It has a name and a label. */
  named: boolean
  /** An earlier view has the same name. */
  duplicate: boolean
  /** It belongs to the group of the node's views. */
  nodeGroup: boolean
  /** It says to which nodes it applies. */
  applies: boolean
  /** It writes one document per node. */
  perNode: boolean
}

/** What a view's declaration misses. */
export interface ViewDeclarationFaults {
  unnamed: boolean
  duplicate: boolean
  nodeGroupNotPerNode: boolean
  appliesNotPerNode: boolean
}

/**
 * Complete declaration of a view
 * A view has a name of its own and a label; it belongs to the node's views, or says to which nodes it applies, only if
 * it writes one document per node.
 */
export const CompleteViewDeclaration = requirement({
  refines: [TrustedExtensions],
  rule: (v: ViewDeclaration): ViewDeclarationFaults => ({
    unnamed: !v.named,
    duplicate: v.duplicate,
    nodeGroupNotPerNode: v.nodeGroup && !v.perNode,
    appliesNotPerNode: v.applies && !v.perNode,
  }),
})

/** Criteria of the declaration of a view */
export const CompleteViewDeclarationCriteria = acceptance({
  accepts: CompleteViewDeclaration,
  owner: "trame",
  criteria: (criterion) => {
    const view: ViewDeclaration = { named: true, duplicate: false, nodeGroup: true, applies: true, perNode: true }
    const faults = (f: ViewDeclarationFaults) => [f.unnamed, f.duplicate, f.nodeGroupNotPerNode, f.appliesNotPerNode].filter(Boolean).length
    criterion("A view of the node, per node, has no fault", () => !faults(CompleteViewDeclaration(view)))
    criterion("A view of the node that is not per node has two", () => faults(CompleteViewDeclaration({ ...view, perNode: false })) === 2)
    criterion("A name taken twice is a fault", () => CompleteViewDeclaration({ ...view, duplicate: true }).duplicate)
  },
})

/** A document as a view wrote it: as text, as read back, the mark of a function, and the types of its blocks. */
export interface WrittenDocument {
  text: string
  readBack: string
  functionMark: string
  blockTypes: readonly string[]
}

/** What a written document holds beyond the intermediate format. */
export interface SerialFaults {
  /** It does not survive being written and read back, or it holds a function. */
  notSerial: boolean
  /** The first block of a type the format does not know. */
  unknownBlock?: string
}

/**
 * Produces only the intermediate format
 * A view writes a document of the intermediate format: data that survive being written and read back, with no
 * function, in blocks whose types the format knows. The renderers, and the page, need nothing else.
 */
export const IntermediateFormatOnly = requirement({
  refines: [TrustedExtensions],
  rule: (d: WrittenDocument, known: ReadonlySet<string>): SerialFaults => ({
    notSerial: d.readBack !== d.text || d.text.includes(d.functionMark),
    unknownBlock: d.blockTypes.find((t) => !known.has(t)),
  }),
})

/** Criteria of the intermediate format */
export const IntermediateFormatOnlyCriteria = acceptance({
  accepts: IntermediateFormatOnly,
  owner: "trame",
  criteria: (criterion) => {
    const blocks = new Set(["para", "table"])
    const doc: WrittenDocument = { text: "{\"t\":1}", readBack: "{\"t\":1}", functionMark: "\"[fn]\"", blockTypes: ["para"] }
    criterion("Plain data in known blocks keep the law", () => {
      const f = IntermediateFormatOnly(doc, blocks)
      return !f.notSerial && f.unknownBlock === undefined
    })
    criterion("A value lost on the way back breaks it", () => IntermediateFormatOnly({ ...doc, readBack: "{}" }, blocks).notSerial)
    criterion("A function breaks it", () => IntermediateFormatOnly({ ...doc, text: "{\"f\":\"[fn]\"}", readBack: "{\"f\":\"[fn]\"}" }, blocks).notSerial)
    criterion("A block of an unknown type is named", () => IntermediateFormatOnly({ ...doc, blockTypes: ["para", "chart"] }, blocks).unknownBlock === "chart")
  },
})
