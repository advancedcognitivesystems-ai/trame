// Trame kernel · public API.
// It is all that kinds (kinds/), views (views/) and the product graph (src/) see.
// The kernel knows no node kind and no view: it only knows what a kind is and what a view is.
// Kinds and views read the graph only through this API: Graph, Q and View (and Compilation for views).

import {
  HOLE, REMOVE as REMOVE_SYMBOL, isHole as isHoleImpl, isNode, isPlain, refOf, Hole, kinds, views,
  instantiate, patchLeaves, getPath, fileBody, isFileBody, meta, type FileBody,
} from "./internal"
import type {
  Block, Card, Document, FigureEdge, FigureNode, Figure, Inline, IssueItem, Json, NodeRef, ResolutionBlock, ViewScope,
} from "./ir"
import {
  OPEN_KEY, DateRole, FieldType, JsonMark, Openness, RuleState, Severity, Stage, Status, Outcome, Validity, ViewGroup,
  Moment, Origin, ClaimOutcome, ClaimSide, ResolutionOutcome, WireMode, LiteralKind,
} from "./ir"
import type { Unit } from "./format"

export { Hole, patchLeaves, getPath, isFileBody }
export type { FileBody }
export * from "./format"
export * from "./ir"

// Units ----------------------------------------------------------------------

export type Duration = number // seconds
export type CHF = number
export type Percent = number // 0.5 = 50%

export const s = (n: number): Duration => n
export const min = (n: number): Duration => n * 60
export const h = (n: number): Duration => n * 3600
export const chf = (n: number): CHF => n
export const pct = (n: number): Percent => n / 100
/** A duration as JavaScript's dates count time: in milliseconds. */
export const ms = (d: Duration): number => d * 1000
/** The duration from one instant to another, both in milliseconds (as Date.parse and getTime give them). */
export const elapsed = (from: number, to: number): Duration => (to - from) / 1000

/** Guesses the unit from the text of a TypeScript type, for instance `Record<Tier, Duration>`. */
export function unitOf(typeText?: string): Unit | undefined {
  if (!typeText) return undefined
  if (/\bDuration\b/.test(typeText)) return "duration"
  if (/\bPercent\b/.test(typeText)) return "percent"
  if (/\bCHF\b/.test(typeText)) return "chf"
  return undefined
}

/** The type of the keys of a record, from the text of its TypeScript type: `Tier` for `Record<Tier, Duration>`. */
export function recordKeyOf(typeText?: string): string | undefined {
  return typeText ? /^Record<\s*(\w+)/.exec(typeText)?.[1] : undefined
}

// Undecided values, removals -------------------------------------------------

/** A value not decided yet. Compiles everywhere; reading it throws a `Hole`. */
export const TODO = HOLE as unknown as never
export const isHole = isHoleImpl
/** The value of a claim that removes a whole node (a repeal). */
export const REMOVE: unknown = REMOVE_SYMBOL

// Nodes ----------------------------------------------------------------------

declare const BRAND: unique symbol
export type BrandKey = typeof BRAND

/** A node of the graph, branded with the name of its kind. */
export type Node<N extends string = string> = { readonly [BRAND]: N }
export type AnyNode = Node<string>

// Fields ---------------------------------------------------------------------

export interface FieldSpec<T = unknown, O extends boolean = boolean> {
  type: FieldType
  label?: string
  optional: O
  owner?: boolean
  /** For a date: what it marks (start, end, deadline, review). Meaning, not form. */
  role?: DateRole
  /** For dependencies and a body: do they serve at run time, or to provision the infrastructure? */
  stage?: Stage
  min?: number
  max?: number
  /** A value the laws try the kind on, made with what the engine gives the language. */
  sample?: (lib: Lib) => T
  readonly __type?: T
}

function mk<T>(type: FieldType, label?: string, extra: Partial<FieldSpec<T, false>> = {}): FieldSpec<T, false> {
  return { type, label, optional: false, ...extra }
}

export const field = {
  owner: (label = "Owner") => mk<string>(FieldType.person, label, { owner: true }),
  person: (label: string) => mk<string>(FieldType.person, label),
  text: (label: string) => mk<string>(FieldType.text, label),
  date: (label: string, role: DateRole = DateRole.deadline) => mk<string>(FieldType.date, label, { role }),
  number: (label: string, o: { min?: number; max?: number } = {}) => mk<number>(FieldType.number, label, o),
  duration: (label: string) => mk<Duration>(FieldType.duration, label),
  percent: (label: string) => mk<Percent>(FieldType.percent, label),
  chf: (label: string) => mk<CHF>(FieldType.chf, label),
  range: (label: string) => mk<[number, number]>(FieldType.range, label),
  value: <T = unknown>(label?: string) => mk<T>(FieldType.value, label),
  map: (label: string) => mk<Record<string, string>>(FieldType.map, label),
  /** A function (a rule, criteria). Never shown as is. `sample` serves the laws. */
  fn: <F>(sample?: (lib: Lib) => F) => mk<F>(FieldType.fn, undefined, { sample }),
  /** What a node claims on another one. */
  patch: <T = Record<string, unknown>>() => mk<T>(FieldType.patch),
  /** Named dependencies on other nodes. */
  deps: (label = "Parameters", stage: Stage = Stage.execution) =>
    mk<Record<string, AnyNode>>(FieldType.deps, label, { stage }),
  /** A function body, which receives the dependencies as parameters. */
  body: <F = unknown>(stage: Stage = Stage.execution) =>
    mk<F | FileBody>(FieldType.body, undefined, { stage }),
  /** Constants the node declares. Its body, if it has one, receives them as parameters. */
  constants: (label = "Constants") => mk<Record<string, Constant>>(FieldType.constants, label),
}

/** A constant declared in the graph: its value, and what it means. */
export interface Constant {
  value: string | number
  meaning: string
  /** The constant of another node that this one refines: the same value, a meaning of its own, in another domain. */
  refines?: ConstantRef
}
/** Is this a declared constant (an object with its value)? */
export const isConstant = (v: unknown): v is Constant => !!v && typeof v === "object" && "value" in v
/** A constant of a node, designated by the node and the constant's name. */
export interface ConstantRef {
  node: AnyNode
  name: string
}
/** The values of declared constants, typed down to the literal: `{ ok: { value: 200, … } }` gives `{ ok: 200 }`. */
export type Values<C> = { readonly [K in keyof C]: C[K] extends { value: infer V } ? V : never }

declare const DECLARES: unique symbol
/** Type brand: the constants a node declares, so that another node can refine one of them. */
export type Declares<C> = { readonly [DECLARES]?: C }

/**
 * A constant that refines a constant of another node: `blank: refines(Texts, "empty", "A line containing no characters")`.
 * Its value is the other one's, written nowhere else; its meaning is its own. The compiler draws the edge "refines".
 */
export function refines<C extends Record<string, Constant>, K extends keyof C & string>(
  node: Declares<C>, name: K, meaning: string,
): { value: C[K]["value"]; meaning: string; refines: ConstantRef } {
  const m = meta(node)
  const field = m && Object.keys(m.def.fields).find((k) => m.def.fields[k].type === FieldType.constants)
  const target = field ? (m.data[field] as Record<string, Constant> | undefined)?.[name] : undefined
  if (!target) throw new Error(`refines: the node declares no constant "${name}"`)
  return { value: target.value, meaning, refines: { node: node as AnyNode, name } }
}

/** The body of a node written in a file. The path is relative to the module that declares the node. */
export const code = {
  /** `code.file<typeof import("./code/x").default>("./code/x.ts")`: the body is typed, and checked against the dependencies. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: <F = any>(path: string, language = "typescript"): FileBody<NoInfer<F>> => fileBody(path, language),
}

// What a node gives when injected -------------------------------------------------

declare const PROVIDES: unique symbol
declare const DEPS: unique symbol
/** Type brand: what this node gives when another one receives it as a parameter. */
export type Provides<T> = { readonly [PROVIDES]?: T }
/** Type brand: the declared dependencies of a code node. */
export type HasDeps<D> = { readonly [DEPS]?: D }
export type ProvidedBy<N> = N extends { readonly [PROVIDES]?: infer T } ? T : unknown
/** The parameters of a body: each dependency replaced by what it gives. */
export type Provided<D> = { [K in keyof D]: ProvidedBy<D[K]> }
/** The type of a body written in a file, deduced from the node that declares it. */
export type BodyOf<N> = N extends HasDeps<infer D> & Provides<infer T> ? (deps: Provided<D>) => T | Promise<T> : never
/** A signature declared without an inline body (for a body in a file). */
export type Signature<F> = { readonly __signature?: F }
export const signature = <F>(): Signature<F> => ({})

export const optional = <T>(spec: FieldSpec<T, false>): FieldSpec<T, true> => ({ ...spec, optional: true })

// Edges ----------------------------------------------------------------------

/** How many nodes an edge leads to: one, or a list. */
export const EdgeMode = { one: "one", many: "many" } as const
export type EdgeMode = (typeof EdgeMode)[keyof typeof EdgeMode]

/** The way an edge is followed: from the node that declares it (out), or back to it (in). */
export const Direction = { out: "out", in: "in" } as const
export type Direction = (typeof Direction)[keyof typeof Direction]

/** The target of an edge that leads to a node of any kind. */
export const AnyTarget = "*"

/**
 * The edges the engine itself draws, or reads by name (a dependency, a use, a refinement, an overlap, a part of a
 * component), and those several kinds declare alike: what a node serves, the port a realization implements, the
 * environments it is for, the standard or decision that defines it, the language it is written in, the packages it uses.
 */
export const EdgeName = {
  deps: "deps", uses: "uses", refines: "refines", overlaps: "overlaps", partOf: "in",
  serves: "serves", implements: "implements", environments: "environments", standard: "standard", language: "language", packages: "packages",
} as const

/**
 * The effects the language itself reads: a function that must stay synchronous may not depend on what is asynchronous.
 * The other effects are words of a project's vocabulary.
 */
export const LanguageEffect = { asynchronous: "asynchronous" } as const

/**
 * The kinds of the language, in the order documents show them: a kind is named by its key, and placed by its position
 * (a kind outside this list is placed by its own order, or after them).
 */
export const KindName = {
  goal: "goal", requirement: "requirement", slo: "slo", standard: "standard", vocabulary: "vocabulary", structure: "structure",
  syntax: "syntax", language: "language", pattern: "pattern", decision: "decision", adr: "adr", assumption: "assumption",
  acceptance: "acceptance", amendment: "amendment", repeal: "repeal", approval: "approval", component: "component", port: "port",
  release: "release", rule: "rule", function: "function", stylesheet: "stylesheet", entry: "entry", catalog: "catalog",
  implementation: "implementation", package: "package", binding: "binding", environment: "environment", scenario: "scenario",
} as const

/** The views of the language, in the order documents list them within their group: named and placed like the kinds. */
export const ViewName = {
  module: "module", index: "index", snapshot: "snapshot", adrs: "adrs", choices: "choices", versions: "versions", owners: "owners",
  schedule: "schedule", review: "review", literals: "literals", layers: "layers", timeline: "timeline", overlaps: "overlaps",
  summary: "summary", impact: "impact", why: "why", history: "history", assembly: "assembly",
} as const

/** The place of a word in a vocabulary, from 1: the order of a kind or a view that does not give its own. */
const placeIn = (vocabulary: Record<string, string>, word: string): number | undefined => {
  const i = Object.values(vocabulary).indexOf(word)
  return i < 0 ? undefined : i + 1
}

/**
 * The names of an object's properties, as values: `keysOf({ a: …, b: … }).a` is "a". A kind names its own fields and
 * edges with it, and a kind or a view those of another kind (fieldsOf, edgesOf), without writing them again.
 */
export const keysOf = <T extends object>(o: T): { readonly [K in keyof T & string]: K } =>
  Object.fromEntries(Object.keys(o).map((k) => [k, k])) as never
/** The names of a kind's fields. */
export const fieldsOf = <F extends object>(kind: { def: { fields: F } }) => keysOf(kind.def.fields)
/** The names of a kind's edges. */
export const edgesOf = <E extends object>(kind: { def: { edges: E } }) => keysOf(kind.def.edges)

/** The functions a kind may define, which the engine calls by name (and names when one fails). */
export const KindHook = {
  activeAt: "activeAt", claims: "claims", resolve: "resolve", status: "status", effects: "effects", evaluate: "evaluate", holes: "holes", render: "render",
} as const

export interface EdgeSpec<N extends string = string, M extends EdgeMode = EdgeMode, O extends boolean = boolean> {
  /** Target kinds; `*` (AnyTarget) = any kind. */
  targets: readonly N[]
  mode: M
  optional: O
  label: string
  inverse: string
  acyclic?: boolean
}

interface EdgeOptions {
  label: string
  inverse: string
  acyclic?: boolean
}

export const edge = {
  many: <const N extends string>(targets: readonly N[], o: EdgeOptions): EdgeSpec<N, typeof EdgeMode.many, false> =>
    ({ targets, mode: EdgeMode.many, optional: false, ...o }),
  one: <const N extends string>(targets: readonly N[], o: EdgeOptions): EdgeSpec<N, typeof EdgeMode.one, false> =>
    ({ targets, mode: EdgeMode.one, optional: false, ...o }),
  /** An edge to a node of any kind, without cycles (amendments, repeals). */
  amends: (o: Omit<EdgeOptions, "acyclic">): EdgeSpec<string, typeof EdgeMode.one, false> =>
    ({ targets: [AnyTarget], mode: EdgeMode.one, optional: false, acyclic: true, ...o }),
}

export const optionalEdge = <N extends string, M extends EdgeMode>(e: EdgeSpec<N, M, false>): EdgeSpec<N, M, true> =>
  ({ ...e, optional: true })

// Derived types --------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Fields = Record<string, FieldSpec<any, boolean>>
export type Edges = Record<string, EdgeSpec<string, EdgeMode, boolean>>
type AnyFn = (...args: any[]) => any
/* eslint-enable @typescript-eslint/no-explicit-any */

type FieldValue<S> = S extends FieldSpec<infer T, boolean> ? T : never
/** When read, an optional field may be absent. */
type ReadField<S> = S extends FieldSpec<infer T, infer O> ? (O extends true ? T | undefined : T) : never
type EdgeValue<S> = S extends EdgeSpec<infer N, infer M, boolean>
  ? M extends "many" ? readonly Node<N>[] : Node<N>
  : never
type EdgeView<S> = S extends EdgeSpec<string, infer M, infer O>
  ? M extends "many" ? readonly View[] : O extends true ? View | undefined : View
  : never
type RequiredKeys<T> = { [K in keyof T]: T[K] extends { optional: false } ? K : never }[keyof T]
type OptionalKeys<T> = { [K in keyof T]: T[K] extends { optional: true } ? K : never }[keyof T]

export type InputOf<F extends Fields, E extends Edges> =
  { [K in RequiredKeys<F>]: FieldValue<F[K]> } &
  { [K in OptionalKeys<F>]?: FieldValue<F[K]> } &
  { [K in RequiredKeys<E>]: EdgeValue<E[K]> } &
  { [K in OptionalKeys<E>]?: EdgeValue<E[K]> }

/** What product code sees of a node (src/). */
export type NodeOf<N extends string, F extends Fields, E extends Edges> = Node<N> &
  { readonly [K in keyof F]: ReadField<F[K]> } &
  { readonly [K in keyof E]: EdgeValue<E[K]> }

/** What a kind sees of its own nodes: a view, plus its typed fields and its edges as views. */
export type SelfOf<F extends Fields, E extends Edges> = View &
  { readonly [K in keyof F]: ReadField<F[K]> } &
  { readonly [K in keyof E]: EdgeView<E[K]> }

type PatchValue<V> = V extends AnyFn ? (previous: V) => V
  : V extends AnyNode ? V
  : V extends readonly unknown[] ? V
  : V extends object ? { [K in keyof V]?: PatchValue<V[K]> }
  : V

/** What can be redefined on a node: each value in part, a function from the previous one. */
export type PatchOf<T> = { [K in Exclude<keyof T, BrandKey>]?: PatchValue<T[K]> }

// Holes ----------------------------------------------------------------------

export interface HoleSpec {
  severity: Severity
  what: string
  owner?: string
  effect?: string
  /** The node concerned, when it is not the one reporting (an architecture rule reports another node). */
  on?: View
}

export const hole = {
  blocking: (what: string, owner?: string, effect?: string): HoleSpec => ({ severity: Severity.blocking, what, owner, effect }),
  error: (what: string, owner?: string, effect?: string): HoleSpec => ({ severity: Severity.error, what, owner, effect }),
  warning: (what: string, owner?: string, effect?: string): HoleSpec => ({ severity: Severity.warning, what, owner, effect }),
  /** The same hole, put on another node. */
  on: (v: View, h: HoleSpec): HoleSpec => ({ ...h, on: v }),
}

export interface Evidence {
  value: number
  at: string
  source?: string
  /** What the measure found, in words (a vulnerability's title, the latest version of a package). */
  note?: string
  /** Where to read more. */
  url?: string
}

// The intermediate format, for authors -----------------------------------------
// Kinds and views describe what they say. They never choose the appearance.

/** A raw value as JSON: an undecided value becomes `{ [OPEN_KEY]: Openness.undecided }`. */
function toJson(v: unknown): Json {
  if (isHole(v)) return { [OPEN_KEY]: Openness.undecided }
  if (v === REMOVE_SYMBOL) return JsonMark.removed
  if (typeof v === "function") return JsonMark.rule
  if (isNode(v)) return refOf(v)
  if (Array.isArray(v)) return v.map(toJson)
  if (isPlain(v)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toJson(x)]))
  if (v === undefined) return null
  return v as Json
}

export const doc = {
  // In a sentence.
  /** A value with its unit. An undecided value, a rule, a contested value are said as such. */
  value: (v: unknown, unit?: Unit, o: { type?: "date" | "range" | "map"; contested?: boolean; rule?: RuleState } = {}): Inline => {
    if (o.contested) return { t: "value", value: null, unit, open: Openness.contested }
    if (isHole(v)) return { t: "value", value: null, unit, open: Openness.undecided }
    if (typeof v === "function" || o.rule) return { t: "value", value: null, rule: o.rule ?? RuleState.original }
    return { t: "value", value: toJson(v), unit, ...(o.type ? { type: o.type } : {}) }
  },
  ref: (v: View): Inline => ({ t: "ref", ref: v.ref, title: v.title }),
  /** A node kept by its reference and title (in a result, say). */
  refTo: (r: NodeRef): Inline => ({ t: "ref", ref: r.ref, title: r.title }),
  docLink: (id: string, title: string): Inline => ({ t: "doc", id, title }),
  status: (status: Status): Inline => ({ t: "status", status }),
  severity: (severity: Severity): Inline => ({ t: "severity", severity }),
  date: (date: string): Inline => ({ t: "date", date }),
  person: (name: string): Inline => ({ t: "person", name }),
  ident: (text: string): Inline => ({ t: "ident", text }),

  // Blocks.
  para: (...content: Inline[]): Block => ({ type: "para", content }),
  facts: (items: { label: string; value: Inline[] }[]): Block => ({ type: "facts", items }),
  list: (items: Inline[][]): Block => ({ type: "list", items }),
  table: (head: string[], rows: Inline[][][]): Block => ({ type: "table", head, rows }),
  code: (lang: string, text: string, source?: string): Block => ({ type: "code", lang, text, source }),
  checks: (items: { name: string; outcome: Outcome; detail?: Inline[] }[], title?: Inline[]): Block => ({ type: "checks", title, items }),
  validity: (state: Validity, from?: string, until?: string): Block => ({ type: "validity", state, from, until }),
  details: (summary: string, blocks: Block[]): Block => ({ type: "details", summary, blocks }),
  section: (title: string, blocks: Block[], id?: string): Block => ({ type: "section", title, id, blocks }),
  summary: (...content: Inline[]): Block => ({ type: "summary", content }),
  issues: (items: IssueItem[]): Block => ({ type: "issues", items }),
  figure: (figure: Figure, caption?: string): Block => ({ type: "figure", figure, caption }),
}

/** What reading the source code knows about a node. */
export interface StaticInfo {
  file: string
  line: number
  title?: string
  description?: string
  typeArgs: string[]
  args: string[]
  props: Record<string, string>
  refs: { target: string; prop?: string }[]
  sourceText: string
}

// The traversal API: the only way to read the graph ----------------------------

/** A read-only node. The kernel records every read. */
export interface View {
  readonly node: AnyNode
  readonly ref: string
  readonly id: string
  readonly kind: string
  readonly module: string
  readonly title: string
  readonly owner?: string
  /** False for a node that is not (or no longer) in force at the date of the graph. */
  readonly active: boolean
  /** The computed status. Not available in the frozen graph. */
  readonly status: Status | undefined
  /** What reading the source code knows about the node. */
  readonly decl: StaticInfo | undefined
  readonly evidence: Evidence[]
  /** The claims applied to this node, and what each one redefined. */
  readonly amendedBy: { by: View; paths: string[] }[]
  readonly repealedBy: View | undefined
  /** The paths whose value is contested (no claim could win). */
  readonly contested: string[]
  /** The raw value (an undecided value is returned as is). In the frozen graph, reading a value being resolved throws. */
  field(path: string): unknown
  /** The declared value, before any claim. */
  base(path: string): unknown
  /** The type, label and role of one of this node's fields. */
  fieldInfo(name: string): { type: FieldType; label?: string; role?: DateRole; stage?: string } | undefined
  /** Its named dependencies (the parameters of its body). */
  readonly dependencies: { name: string; node: View; stage: string }[]
  /** Its effects: its own, and those of everything it depends on. Computed in the consolidated graph. */
  readonly effects: string[]
  /** The result of the evaluation (for instance criteria that were run). */
  result<T = unknown>(): T | undefined
}

/** A query: finite, sorted, without side effects. */
export interface Q {
  out(edge?: string): Q
  in(edge?: string): Q
  /** Transitive closure, without loops. */
  closure(edge: string, dir?: Direction): Q
  where(test: (v: View) => boolean): Q
  nodes(): View[]
  first(): View | undefined
  exists(): boolean
  count(): number
  /** The shortest path, following edges both ways. */
  path(to: View | AnyNode, via?: string[]): View[] | undefined
}

export interface EdgeInfo {
  name: string
  label: string
  inverse: string
  other: View
  inferred: boolean
  derived: boolean
  /** False for an edge that leaves a node not in force. */
  active: boolean
  /** For a named dependency: the name of the parameter. */
  param?: string
}

/** What a kind receives when a node is wired. */
export interface WireContext {
  /** The environment the node is wired for (test, production…). */
  env: View | undefined
  date: string
  g: Graph
  /** What another node gives, wired in the same environment. */
  wire(v: View): Promise<unknown>
  /** A node's run-time dependencies, wired. */
  wireDeps(v: View): Promise<Record<string, unknown>>
}

export interface Graph {
  /** Frozen: before resolution, declared values. Consolidated: after resolution, the values in force. */
  readonly moment: Moment
  readonly today: string
  node(ref: string): Q
  all(kind?: string): Q
  from(start: View | AnyNode): Q
  view(n: AnyNode): View
  edges(v: View, dir: Direction): EdgeInfo[]
  /** During evaluation: reports that an undecided value blocks something (a criterion, a scenario: its noun). */
  blocked(hole: Hole, what: Noun, of: View): void
  /** Consolidated graph: wires these dependencies in an environment, in a fresh session. */
  wire(deps: { name: string; node: View }[], env: View | undefined): Promise<Record<string, unknown>>
  /** Consolidated graph: the wiring plan of these nodes in an environment, without running anything. */
  plan(entries: View[], env: View | undefined): WirePlan
  /** The version of a package installed in the project, as its lockfile says; absent from an engine that does not read it. */
  installed?(pkg: string): string | undefined
  /** What the engine gives the kinds and the views, from the graph that describes it. */
  readonly lib: Lib
}

/** A noun, in the singular and in the plural: what a count counts. */
export interface Noun {
  one: string
  many: string
}

/** Something whose elements can be counted: a list, a text, a set, a map. */
export type Countable = { readonly length: number } | { readonly size: number }

/**
 * What the engine gives the kinds and the views, which receive nothing else: the algebraic structures the bodies of the
 * graph receive (ValueTypes, Counts, Sequences, Texts), the lists and the punctuation of the language the documents are
 * written in, positions in a file and the paths of a value, the calendar dates, the settings of the documents, the
 * draws of the laws, the layout of a project. Through it, the values a kind or a view uses are the graph's.
 */
export interface Lib {
  values: {
    isText(v: unknown): v is string
    isNumber(v: unknown): v is number
    isBoolean(v: unknown): v is boolean
    isFunction(v: unknown): v is (...args: never[]) => unknown
    isObject(v: unknown): v is object
  }
  counts: {
    zero: number
    one: number
    next(n: number): number
    previous(n: number): number
    isEmpty(xs: Countable): boolean
    any(xs: Countable): boolean
    single(xs: Countable): boolean
    several(xs: Countable): boolean
    largest(ns: readonly number[]): number
  }
  sequences: {
    head<T>(xs: ArrayLike<T> | undefined): T | undefined
    rest<T>(xs: readonly T[]): T[]
    last<T>(xs: ArrayLike<T> | undefined): T | undefined
    take: { (xs: string, n: number): string; <T>(xs: readonly T[], n: number): T[] }
    takeLast<T>(xs: readonly T[], n: number): T[]
    isFirst(i: number): boolean
    times<T>(n: number, f: (i: number) => T): T[]
  }
  texts: {
    empty: string
    space: string
    ellipsis: string
    concat(parts: readonly string[]): string
    optional<T>(x: T | null | undefined, show?: (x: T) => string | null | undefined): string
    when<T>(condition: T, show: (x: Exclude<T, false | 0 | 0n | "" | null | undefined>) => string): string
  }
  /** Lists as the language of the documents writes them: "A, B and C", or "A, B, C". */
  lists: {
    conjunction<T>(items: readonly T[]): (T | string)[]
    enumeration<T>(items: readonly T[]): (T | string)[]
  }
  /**
   * The marks of the language the documents are written in: between parts, between items, from a name to what gives it,
   * around an aside, between clauses, after a label, between a name and its value; what stands for nothing.
   */
  punctuation: {
    parts: string; items: string; givenBy: string; opensAside: string; closesAside: string
    clauses: string; introduces: string; equals: string; absent: string
  }
  /** "file:line". */
  positions: { reference(file: string, line: number): string }
  /** The paths of a value in a node: their steps, the field they start at, the whole node (no step). */
  references: {
    segments(path: string): string[]
    depth(path: string): number
    isWholeNode(path: string): boolean
    firstSegment(path: string): string
    join(steps: string[]): string
    within(path: string, prefix: string): boolean
  }
  /** A calendar date, as ISO 8601 writes it; written as the language of the documents writes it. */
  dates: { isCalendarDate(text: string): boolean; format(iso: string): string }
  /** What ends a line of a text file. */
  file: { endOfLine: string }
  /** The settings of the documents, decided in the graph. */
  settings: LanguageSettings
  /** The draws of the laws: a generator seeded by a text, a whole number between two bounds, and what the laws of a structure draw. */
  draws: {
    generator(seed: string): () => number
    integer(rnd: () => number, lo: number, hi: number): number
    structures: StructureDraws
  }
  /** The files of a project the documents name. */
  layout: { lock: string }
  /** The language the graph's declarations are written in, as a body names it: what their code is shown in. */
  declarations: { language: string }
  /** The order of two versions, part by part from the major: negative, zero or positive; and whether one is below another. */
  versions: { compare(a: string, b: string): number; below(a: string, b: string): boolean }
  /** A value with its unit, in the words of the decided language: "15 min", "50%". */
  units: { format(v: unknown, unit?: Unit): string }
  /** A text shown so that every character can be seen: in quotes, its hidden characters escaped; or as it is. */
  shown: { quoted(text: string): string; visible(text: string): string }
}

/**
 * The settings of the documents: how far the timeline reaches, what the catalogue of literals shows, when an assumption
 * warns, which percentiles an objective may hold.
 */
export interface LanguageSettings {
  timeline: { before: number; after: number }
  catalogue: { examples: number; frequent: number; repeated: number; unrepeated: readonly string[] }
  assumption: { warnWithin: number }
  slo: { percentile: readonly [number, number] }
}

/** What the laws of a structure draw: how many times, and from what. */
export interface StructureDraws {
  draws: number
  integers: readonly [number, number]
  naturals: readonly [number, number]
  alphabet: readonly string[]
  textLength: readonly [number, number]
  listLength: readonly [number, number]
  chance: number
  /** What joins a structure's reference and a law's place, in the seed of the law's draws. */
  seed: string
}

/** What will be built, in which order, with what. */
export interface WirePlan {
  steps: {
    node: View
    /** body: its body called with its dependencies; value: what its kind gives (a decision, a rule). */
    how: WireMode
    deps: { param: string; node: View }[]
    /** The ports that delegated to this node. */
    via: View[]
  }[]
  errors: string[]
}

// Claims ---------------------------------------------------------------------

export interface ClaimSpec {
  target: View
  /** The claimed path; "" = the whole node. */
  path: string
  value: unknown
}

export interface Claim extends ClaimSpec {
  by: View
}

/** How a kind settles overlapping claims: it applies them in an order, or declares them contested. */
export const ResolutionKind = { apply: "apply", contested: "contested" } as const
export type ResolutionKind = (typeof ResolutionKind)[keyof typeof ResolutionKind]

export type Resolution =
  | { kind: typeof ResolutionKind.apply; order: View[]; reason: string; replaced?: [View, View][] }
  | { kind: typeof ResolutionKind.contested; reason: string; arbiter?: string }

// Node kinds -----------------------------------------------------------------

export type HoleList = ReadonlyArray<HoleSpec | false | null | undefined>

export interface KindDef<N extends string, F extends Fields, E extends Edges> {
  name: N
  label: { one: string; many: string }
  fields: F
  edges: E
  /** The nodes of this kind are roots: everything else must be connected to one. */
  root?: boolean
  /** Order of the sections in documents. */
  order?: number
  /** The field that carries the decision itself (to name holes). */
  main?: keyof F & string
  /** The node is a function that calls this field. */
  callable?: keyof F & string
  /** The node is shown inside the target of this edge. */
  inline?: keyof E & string
  /** Fields that `render` says itself (they are not repeated in the list of facts). */
  renderOwns?: (keyof F & string)[]
  /** The nodes of this kind are history: absent from the consolidated snapshot. */
  history?: boolean
  /** The body of its nodes may touch the platform (files, network, database). Otherwise it receives the world through its parameters only. */
  ambient?: boolean
  /**
   * The literals written in the body of its nodes are what these nodes declare (a message catalog holds the text of
   * messages): they are not literals left to specify.
   */
  declaresLiterals?: boolean
  /** For an assembled component: the language of its program (a driver must know how to write it). */
  language?(self: SelfOf<F, E>, g: Graph): string

  /** Frozen graph. In force at the date of the graph? By default, always. */
  activeAt?(self: SelfOf<F, E>, g: Graph): boolean
  /** Frozen graph. What this node claims on others. */
  claims?(self: SelfOf<F, E>, g: Graph): ReadonlyArray<ClaimSpec>
  /** Frozen graph. Settles overlapping claims of this kind. */
  resolve?(target: View, claims: Claim[], g: Graph): Resolution
  /** Consolidated graph. */
  evaluate?(self: SelfOf<F, E>, g: Graph): unknown
  /** Consolidated graph. Nothing: the node has no status of its own (it depends on what it relates to, and there is none). */
  status?(self: SelfOf<F, E>, g: Graph): Status | undefined
  holes?(self: SelfOf<F, E>, g: Graph): HoleList
  /** What the kind says about a node, as blocks of the intermediate format. */
  render?(self: SelfOf<F, E>, g: Graph): Block[]
  /** Its own effects (the effects of its dependencies are added). */
  effects?(self: SelfOf<F, E>): readonly string[]
  /** When wiring: the node that replaces it in this environment (a port delegates to its implementation). */
  delegate?(self: SelfOf<F, E>, ctx: WireContext): View | undefined
  /** When wiring: what this node gives (a decision gives its value, a rule its function). By default: its body called with its dependencies. */
  provide?(self: SelfOf<F, E>, ctx: WireContext): unknown
  /** When an assembled component starts: what it does with its entry points. */
  start?(self: SelfOf<F, E>, entries: { node: View; value: unknown }[], ctx: WireContext): Promise<unknown>
  summary?(selves: SelfOf<F, E>[], g: Graph): string | undefined
}

export type AnyKind = KindDef<string, Fields, Edges>

export type Ctor<N extends string, F extends Fields, E extends Edges> =
  ({} extends InputOf<F, E>
    ? (input?: InputOf<F, E>) => NodeOf<N, F, E>
    : (input: InputOf<F, E>) => NodeOf<N, F, E>) & { readonly def: KindDef<N, F, E> }

export function defineKind<const N extends string, F extends Fields, E extends Edges>(
  def: KindDef<N, F, E>,
): Ctor<N, F, E> {
  if (def.order === undefined) def.order = placeIn(KindName, def.name)
  const anyDef = def as unknown as AnyKind
  kinds.push(anyDef)
  const ctor = (input: Record<string, unknown> = {}) => instantiate(anyDef, input)
  return Object.assign(ctor, { def }) as unknown as Ctor<N, F, E>
}

// Views ----------------------------------------------------------------------
// A view asks the compiled graph a question and answers with blocks (a document, a figure).

export interface KindInfo {
  name: string
  label: { one: string; many: string }
  order: number
  root: boolean
  history: boolean
  inline?: string
  fields: { name: string; type: FieldType; label?: string; role?: DateRole }[]
}

/** A hole, an error, something to watch. */
export interface Issue {
  severity: Severity
  /** Where the problem comes from. */
  origin?: Origin
  what: string
  node?: View
  /** For a problem without a node (a published declaration that was deleted). */
  module?: string
  where?: string
  owner?: string
  effect?: string
}

/** A claim, and what became of it. */
export interface ClaimInfo {
  by: View
  target: View
  path: string
  active: boolean
  before: Inline
  after: Inline
  outcome: ClaimOutcome
  reason?: string
  winners: View[]
  replacedBy?: View
  arbiter?: string
}

/** A set of overlapping claims, and how it was settled. */
export interface ResolutionInfo {
  target: View
  paths: string[]
  claimants: View[]
  outcome: ResolutionOutcome
  applied: View[]
  replaced: [View, View][]
  reason: string
  arbiter?: string
  because: View[]
}

export interface DateInfo {
  date: string
  label: string
  role: DateRole
  node: View
}

/** A literal written in the body of a code node, found by the driver of its language. */
export interface LiteralInfo {
  node: View
  /** The file of the body (relative to the root), or the node's module for an inline body. */
  file: string
  line: number
  /** As written. */
  value: string
  kind: LiteralKind
  /** What it looks like: colour, file, media type, sentence, number, identifier, separator… */
  category: string
  /** The line it appears on. */
  context: string
  /** What declares it: the message catalog whose text it is. */
  declaredBy?: string
  /** What it does, from its place in the code: index, arithmetic, comparison, initial value, argument of… */
  role: string
  /** Its value: a number, or the text its parts and escape sequences make (absent from an engine that does not read it). */
  raw?: string | number
  /** Its role without what names its place: an argument, whatever the function called (absent from an older engine). */
  family?: string
}

/** A literal written in a kind or a view of the project: the same record, without a node. */
export type LanguageLiteral = Omit<LiteralInfo, "node" | "declaredBy">

/** The compiled graph, as a view sees it: the traversal API, plus what the compilation found. */

export interface Compilation extends Graph {
  modules(): { id: string; title: string }[]
  kinds(): KindInfo[]
  kindOf(v: View): KindInfo
  issues(scope?: { node?: View; module?: string }): Issue[]
  claims(v: View, side: ClaimSide): ClaimInfo[]
  /** The id of a module's document (the one where its nodes' cards live). */
  moduleDoc(module: string): string
  /** The resolutions (several claims on the same value) where this node is target or party. */
  resolutions(v?: View): ResolutionInfo[]
  /** Published in trame.lock? `undefined` when there is no lock. */
  published(v: View): boolean | undefined
  /** What the code does to published declarations. */
  lockIssues(): Issue[]
  /** A node's standard card. */
  card(v: View): Card
  /** One of a node's values, with the unit of its field. */
  value(target: View, path: string, raw: unknown): Inline
  resolution(r: ResolutionInfo): ResolutionBlock
  issueItem(i: Issue): IssueItem
  figureNode(v: View, layer: number): FigureNode
  /** The edges between these nodes. */
  figureEdges(nodes: View[]): FigureEdge[]
  /** The line that sums up a set: decisions to take, errors, the kinds' summaries. */
  summary(issues: Issue[], nodes: View[]): Inline[]
  /** All the dates that fields carry, with their role. */
  dates(): DateInfo[]
  counts(): { edges: number; inferred: number; derived: number }
  /** The literals written in code bodies (an engine that does not find them has no such method). */
  literals?(v?: View): LiteralInfo[]
  /** The literals of the language the project writes, its kinds and views: reported, they belong to no node. */
  languageLiterals?(): LanguageLiteral[]
}

export interface ViewArg {
  module?: string
  node?: View
}

export interface ViewOutput {
  title: string
  intro?: Inline[]
  blocks: Block[]
}

export interface ViewDef {
  name: string
  label: string
  /** Where the view files itself: one document per module, a document, a figure, a per-node view, the summary. */
  group: ViewGroup
  order?: number
  /** One instance per module, per node, or a single one. */
  per?: ViewScope
  /** For a per-node view: the nodes where it makes sense. */
  applies?(node: View, c: Compilation): boolean
  /** Written to docs/ by `trame build` (by default: everything except per-node views and the summary). */
  file?: boolean
  run(c: Compilation, arg: ViewArg): ViewOutput
}

export function defineView(def: ViewDef): ViewDef {
  if (def.order === undefined) def.order = placeIn(ViewName, def.name)
  views.push(def)
  return def
}

export type { Document }
