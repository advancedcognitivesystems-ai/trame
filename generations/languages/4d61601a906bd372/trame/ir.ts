// The intermediate format: what kinds and views produce, what renderers translate.
// It only says what things mean: never bold, colour or shape. The renderer chooses the appearance.
// Everything in it serialises to JSON: the page receives it as is.
//
// The vocabularies below are objects: code names a value by its key (`Status.held`), never by the value itself. The
// values are the words that appear in machine outputs and documents.

import type { Unit } from "./format"

export type { Unit }

type ValueOf<T> = T[keyof T]

/**
 * The key of a vocabulary value: `keyOf(Status, s)` is "held" when `s` is `Status.held`. Graph values that depend on a
 * vocabulary (a colour per status, a stroke per nature) are keyed by these names, which do not change when the words do.
 */
export function keyOf<V extends Record<string, string>>(vocabulary: V, value: string): (keyof V & string) | undefined {
  return (Object.keys(vocabulary) as (keyof V & string)[]).find((k) => vocabulary[k] === value)
}
/** The key of a word of the vocabulary: its type says it belongs there, so there is one. */
export function keyFor<V extends Record<string, string>>(vocabulary: V, value: V[keyof V]): keyof V & string {
  const key = keyOf(vocabulary, value)
  if (key === undefined) throw new Error(`"${value}" is not a word of the vocabulary`)
  return key
}
/** The keys of a vocabulary, as a type: `KeyOf<typeof Status>` is `"held" | "violated" | "blocked" | "unknown"`. */
export type KeyOf<V> = keyof V & string

/** What a node's checks say about it. */
export const Status = { held: "held", violated: "violated", blocked: "blocked", unknown: "unknown" } as const
export type Status = ValueOf<typeof Status>

/** How serious a problem is. */
export const Severity = { blocking: "blocking", error: "error", warning: "warning" } as const
export type Severity = ValueOf<typeof Severity>

/** The result of one check (a criterion, a scenario step). */
export const Outcome = { passed: "passed", failed: "failed", blocked: "blocked", error: "error" } as const
export type Outcome = ValueOf<typeof Outcome>

/** Whether a node is in force at the date of the graph. */
export const Validity = { inForce: "in force", notYet: "not yet in force", noLonger: "no longer in force" } as const
export type Validity = ValueOf<typeof Validity>

/** Where an edge comes from: declared in the graph, inferred from the code, or computed. */
export const Nature = { declared: "declared", inferred: "inferred", computed: "computed" } as const
export type Nature = ValueOf<typeof Nature>

/** What a date marks. Meaning, not form. */
export const DateRole = { start: "start", end: "end", deadline: "deadline", review: "review" } as const
export type DateRole = ValueOf<typeof DateRole>

/** A value that is not decided yet, or that claims contest. */
export const Openness = { undecided: "undecided", contested: "contested" } as const
export type Openness = ValueOf<typeof Openness>

/** A rule (a function value): the one declared, or one an amendment redefined. */
export const RuleState = { original: "original", redefined: "redefined" } as const
export type RuleState = ValueOf<typeof RuleState>

/** The role of an edge in a resolution of claims. */
export const EdgeRole = { winner: "winner", discarded: "discarded", replaced: "replaced", contested: "contested", support: "support" } as const
export type EdgeRole = ValueOf<typeof EdgeRole>

/** How a set of overlapping claims was settled. */
export const ResolutionOutcome = { applied: "applied", contested: "contested" } as const
export type ResolutionOutcome = ValueOf<typeof ResolutionOutcome>

/** The shape of the question a graph figure answers: layers, a tree from one node, a path. */
export const Shape = { layers: "layers", tree: "tree", path: "path" } as const
export type Shape = ValueOf<typeof Shape>

/** Where a view files its documents. */
export const ViewGroup = { module: "module", document: "document", figure: "figure", node: "node", summary: "summary" } as const
export type ViewGroup = ValueOf<typeof ViewGroup>

/** What a view has one instance per. */
export const ViewScope = { module: "module", node: "node" } as const
export type ViewScope = ValueOf<typeof ViewScope>

/** The kinds of field a kind can declare. */
export const FieldType = {
  person: "person", text: "text", date: "date", number: "number", duration: "duration", percent: "percent", chf: "chf",
  range: "range", value: "value", map: "map", fn: "fn", patch: "patch",
  /** Named dependencies: each one is an edge, and becomes a parameter of the body. */
  deps: "deps",
  /** A function body: inline, or in a file (any language that has a driver). */
  body: "body",
  /** Constants the node declares, each with its meaning. Its body receives them as parameters, next to its dependencies. */
  constants: "constants",
} as const
export type FieldType = ValueOf<typeof FieldType>

/** When dependencies and a body serve: at run time, or to provision the infrastructure. */
export const Stage = { execution: "execution", provisioning: "provisioning" } as const
export type Stage = ValueOf<typeof Stage>

/** Frozen: before resolution, declared values. Consolidated: after resolution, the values in force. */
export const Moment = { frozen: "frozen", consolidated: "consolidated" } as const
export type Moment = ValueOf<typeof Moment>

/** Where a problem comes from: a value to decide, a resolution of claims, a kind, the structure of the graph, publication, code. */
export const Origin = { value: "value", resolution: "resolution", kind: "kind", graph: "graph", publication: "publication", code: "code" } as const
export type Origin = ValueOf<typeof Origin>

/** What became of one claim. */
export const ClaimOutcome = { applied: "applied", discarded: "discarded", replaced: "replaced", contested: "contested", notInForce: "not in force" } as const
export type ClaimOutcome = ValueOf<typeof ClaimOutcome>

/** Which claims of a node: the ones made on it, or the ones it makes. */
export const ClaimSide = { on: "on", by: "by" } as const
export type ClaimSide = ValueOf<typeof ClaimSide>

/** How a literal is written in a body. */
export const LiteralKind = { text: "text", number: "number", template: "template", regex: "regex", key: "key" } as const
export type LiteralKind = ValueOf<typeof LiteralKind>

/** How a node gives what it gives when wired: its body called with its dependencies, or the value its kind provides. */
export const WireMode = { body: "body", value: "value" } as const
export type WireMode = ValueOf<typeof WireMode>

/** What JSON says for a value that is not plain data: a removed node, a rule (a function). */
export const JsonMark = { removed: "repealed", rule: "(rule)", undecided: "TODO" } as const

/** A raw value in JSON: an undecided value becomes `{ [OPEN_KEY]: Openness.undecided }`. */
export type Json = null | boolean | number | string | Json[] | { [k: string]: Json }

/** Deep inside a composite value, a part that is not decided. */
export const OPEN_KEY = "$open"

/** A reference to a node, with its title: a renderer has nothing to look up. */
export interface NodeRef {
  ref: string
  title: string
}

// In a sentence --------------------------------------------------------------

/** The types of the parts of a sentence that are not plain text. */
export const InlineType = {
  value: "value", ref: "ref", doc: "doc", status: "status", severity: "severity", date: "date", person: "person", ident: "ident",
} as const
export type InlineType = ValueOf<typeof InlineType>

/** What a value is, when its JSON does not say it: a date, a range of two numbers, a map of cases. */
export const ValueType = { date: "date", range: "range", map: "map" } as const
export type ValueType = ValueOf<typeof ValueType>

export type Inline =
  | string
  /** A value, with its unit. `open`: undecided, or contested. `rule`: a rule (a function), original or redefined. */
  | { t: typeof InlineType.value; value: Json; unit?: Unit; type?: ValueType; open?: Openness; rule?: RuleState }
  | ({ t: typeof InlineType.ref } & NodeRef)
  /** Another document (a module, a view). */
  | { t: typeof InlineType.doc; id: string; title: string }
  | { t: typeof InlineType.status; status: Status }
  | { t: typeof InlineType.severity; severity: Severity }
  | { t: typeof InlineType.date; date: string }
  | { t: typeof InlineType.person; name: string }
  /** An identifier, a path, a signal name: `value.ultra`, `src/committee.ts:12`. */
  | { t: typeof InlineType.ident; text: string }

// Blocks ---------------------------------------------------------------------

export interface Fact {
  label: string
  value: Inline[]
}

export interface IssueItem {
  severity: Severity
  what: string
  where?: NodeRef | string
  /** File and line, when the problem is about a node. */
  source?: string
  owner?: string
  effect?: string
}

/** The types of blocks, as the intermediate format names them: what a renderer switches on. */
export const BlockType = {
  para: "para", facts: "facts", list: "list", table: "table", code: "code", checks: "checks", validity: "validity", details: "details",
  section: "section", summary: "summary", issues: "issues", resolution: "resolution", card: "card", figure: "figure",
} as const
export type BlockType = ValueOf<typeof BlockType>

/** The types of figures: a graph of nodes, a timeline of dates. */
export const FigureType = { graph: "graph", timeline: "timeline" } as const
export type FigureType = ValueOf<typeof FigureType>

/** A set of overlapping claims, and how it was settled. */
export interface ResolutionBlock {
  type: typeof BlockType.resolution
  target: NodeRef
  paths: string[]
  claimants: NodeRef[]
  outcome: ResolutionOutcome
  applied: NodeRef[]
  replaced: [NodeRef, NodeRef][]
  reason: string
  arbiter?: string
  because: NodeRef[]
}

/** A node's card: put together by the kernel, with what its kind renders. */
export interface Card {
  type: typeof BlockType.card
  ref: string
  id: string
  title: string
  module: string
  kind: string
  kindLabel: string
  source?: string
  status?: Status
  published?: boolean
  repealedBy?: NodeRef
  description?: string
  history: boolean
  active: boolean
  /** What the kind renders. */
  body: Block[]
  facts: Fact[]
  links: { label: string; nature: Nature; active: boolean; targets: NodeRef[] }[]
  resolutions: ResolutionBlock[]
  /** The nodes shown inside this one (its acceptance criteria, for instance). */
  children: { ref: string; body: Block[] }[]
  /** The per-node views that apply to this node. */
  views: { name: string; label: string }[]
}

export interface FigureNode extends NodeRef {
  kind: string
  kindLabel: string
  module: string
  status?: Status
  active: boolean
  history: boolean
  root: boolean
  repealed: boolean
  /** A decision is still to be taken on this node. */
  open: boolean
  /** Rank in the figure (distance to the goal, depth from the start, place in the path). */
  layer: number
}

export interface FigureEdge {
  from: string
  to: string
  label: string
  inverse: string
  nature: Nature
  active: boolean
  /** Role in a resolution of claims. */
  role?: EdgeRole
}

export interface TimelineLane extends NodeRef {
  kindLabel: string
  module: string
  active: boolean
  periods: { from?: string; until?: string }[]
  marks: { date: string; label: string; role: DateRole }[]
}

export type Figure =
  | {
    type: typeof FigureType.graph
    shape: Shape
    focus?: string
    nodes: FigureNode[]
    edges: FigureEdge[]
    groups: { id: string; label: string }[]
  }
  | { type: typeof FigureType.timeline; today: string; from: string; to: string; lanes: TimelineLane[] }

export type Block =
  | { type: typeof BlockType.para; content: Inline[] }
  | { type: typeof BlockType.facts; items: Fact[] }
  | { type: typeof BlockType.list; items: Inline[][] }
  | { type: typeof BlockType.table; head: string[]; rows: Inline[][][] }
  | { type: typeof BlockType.code; lang: string; text: string; source?: string }
  | { type: typeof BlockType.checks; title?: Inline[]; items: { name: string; outcome: Outcome; detail?: Inline[] }[] }
  | { type: typeof BlockType.validity; state: Validity; from?: string; until?: string }
  | { type: typeof BlockType.details; summary: string; blocks: Block[] }
  | { type: typeof BlockType.section; title: string; id?: string; blocks: Block[] }
  /** The line that sums a document up. */
  | { type: typeof BlockType.summary; content: Inline[] }
  | { type: typeof BlockType.issues; items: IssueItem[] }
  | ResolutionBlock
  | Card
  | { type: typeof BlockType.figure; figure: Figure; caption?: string }


// Documents ------------------------------------------------------------------

export interface Document {
  /** `cancellation`, `owners`, `impact:cancellation.FreePeriod` */
  id: string
  view: string
  group: ViewGroup
  title: string
  /** For a per-node view: the node. */
  arg?: string
  /** Written to docs/ by `trame build`. */
  file?: string
  intro?: Inline[]
  blocks: Block[]
}

/** What `trame payload` produces for one date: everything a page needs to show. */
export interface Payload {
  date: string
  /** The language of the product (a BCP 47 tag): the page writes dates in it, as the documents do. */
  language: string
  generatedAt: string
  modules: { id: string; title: string }[]
  nodes: (NodeRef & { module: string; kindLabel: string })[]
  views: { name: string; label: string; group: ViewGroup; per?: ViewScope }[]
  documents: Document[]
  /** The machine outputs, by file name (the project's layout says which). */
  machine: Record<string, string>
  /** Each document rendered by the engine, as Markdown, as text and as HTML: the page shows them as they are. */
  renders?: Record<string, { markdown: string; text: string; html?: string }>
  /** The dates where the graph may change (taken from date fields). */
  candidates: string[]
  /** All the dates nodes carry, with their role. */
  events: (NodeRef & { date: string; label: string; role: DateRole })[]
  /** What it takes to compare two compilations. A key is the JSON of the parts that tell one issue or one overlap from another. */
  state: {
    statuses: Record<string, Status | null>
    issues: { key: string; severity: Severity; what: string; ref?: string; owner?: string }[]
    resolutions: { key: string; target: string; paths: string[]; outcome: string; applied: string[] }[]
  }
}

/** How the page receives the graph: followed live (trame dev), or exported once. */
export const BundleMode = { dev: "dev", export: "export" } as const
export type BundleMode = ValueOf<typeof BundleMode>

/** The documents the engine itself names: the snapshot view, what the last change changed. */
export const DocumentName = { snapshot: "snapshot", changes: "changes" } as const

/** What triggers an entry point: an HTTP request, a command, a message, a schedule. */
export const TriggerType = { http: "http", command: "command", message: "message", scheduled: "scheduled" } as const
export type TriggerType = ValueOf<typeof TriggerType>

/** The graph compiled at several dates: what the page receives. */
export interface Bundle {
  generatedAt: string
  today: string
  mode: BundleMode
  dates: { date: string; payload?: Payload; error?: string }[]
  /** What the last change changed (trame dev). */
  changes?: Document
  /** The same, written for the page (its blocks, one level down). */
  changesHtml?: string
  /** The last compilation failed: the last valid graph is kept. */
  error?: string
}
