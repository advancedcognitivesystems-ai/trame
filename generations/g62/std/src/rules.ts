/** Standard library · Rules */

import { requirement } from "../../kinds/requirement"
import { acceptance } from "../../kinds/acceptance"
import { vocabulary, type WordOf } from "../../kinds/vocabulary"
import { Direction, EdgeName, VocabularyField } from "../../trame/kernel"
import type { GraphSketch, SketchNode, RuleFinding } from "../../trame/kernel"
import { Counts } from "./algebra"
import { SharedRules } from "./product"

// The rules a project keeps on its graph, written once: a project's rule applies one of them with its parameters (the
// nodes it judges, the edges it follows, the nodes it must or must not reach, the effects or the words it refuses), and
// the rule's title says, in the project's words, what it asks. Each requirement reads the graph as a sketch (its nodes,
// their effects and fields, its edges in force) and gives what it finds wrong, each finding on a node; its criteria
// play it on small graphs written by hand.

/**
 * Directions
 * Which way a rule follows an edge: from the node it judges to the node the edge leads to, or from a node whose edge
 * leads to it. A rule's parameters name a direction by one of these words (`way: "in"`), checked by the compiler.
 */
export const Directions = vocabulary({
  owner: "trame",
  serves: [SharedRules],
  words: {
    out: "From the node, along the edge: what it serves, what it depends on",
    in: "Toward the node, against the edge: what serves it, what depends on it",
  },
})

/** Which way an edge is followed: a word of the vocabulary Directions. */
export type Way = WordOf<typeof Directions>

/**
 * Which nodes a rule judges: of these kinds, in these modules, these nodes themselves; having one of these effects;
 * with or without an edge of this name; whose fields at these paths have these values. The project's own nodes, unless
 * the libraries' are asked for.
 */
export interface Selector {
  kinds?: readonly string[]
  modules?: readonly string[]
  nodes?: readonly SketchNode[]
  effects?: readonly string[]
  having?: { edge: string; way?: Way }
  without?: { edge: string; way?: Way }
  where?: readonly { path: string; equals: unknown }[]
  libraries?: boolean
}

/** The nodes a selector picks. */
const picked = (sketch: GraphSketch, s: Selector): SketchNode[] => {
  const linked = (n: SketchNode, e: { edge: string; way?: Way }) =>
    sketch.edges.some((x) => x.name === e.edge && ((e.way ?? "out") === "out" ? x.from === n.ref : x.to === n.ref))
  const at = (n: SketchNode, path: string) => {
    const [first, ...rest] = path.split(".")
    return rest.reduce<unknown>((v, k) => (v !== null && typeof v === "object" ? (v as Record<string, unknown>)[k] : undefined), n.field(first))
  }
  return sketch.nodes.filter((n) =>
    (s.libraries || n.library === undefined || s.nodes !== undefined)
    && (!s.kinds || s.kinds.includes(n.kind))
    && (!s.modules || s.modules.includes(n.module))
    && (!s.nodes || s.nodes.some((x) => x.ref === n.ref))
    && (!s.effects || s.effects.some((e) => n.effects.includes(e)))
    && (!s.having || linked(n, s.having))
    && (!s.without || !linked(n, s.without))
    && (s.where ?? []).every((w) => at(n, w.path) === w.equals))
}

/** The nodes reached from a node through edges of these names, one way, without loops. */
const reached = (sketch: GraphSketch, from: string, through: readonly string[], way: Way): Set<string> => {
  const seen = new Set<string>()
  const next = [from]
  while (next.length > 0) {
    const at = next.pop()!
    for (const e of sketch.edges) {
      if (!through.includes(e.name)) continue
      const [a, b] = way === "out" ? [e.from, e.to] : [e.to, e.from]
      if (a === at && !seen.has(b)) {
        seen.add(b)
        next.push(b)
      }
    }
  }
  return seen
}

/**
 * A node reaches what it must
 * Each node the rule judges reaches, through edges of the names given (followed one way, from node to node), at least
 * one node of the targets: an ADR serves a goal, code reaches a requirement or an ADR. What it finds: each node that
 * reaches none.
 */
export const Reaches = requirement({
  owner: "trame",
  refines: [SharedRules],
  body: () => (sketch: GraphSketch, p: { nodes: Selector; through: readonly string[]; to: Selector; way?: Way }): RuleFinding[] => {
    const targets = new Set(picked(sketch, { libraries: true, ...p.to }).map((n) => n.ref))
    return picked(sketch, p.nodes)
      .filter((n) => ![...reached(sketch, n.ref, p.through, p.way ?? Direction.out)].some((r) => targets.has(r)))
      .map((n) => ({ on: n.ref }))
  },
})

/**
 * A node never reaches what it must not
 * No node the rule judges reaches, through edges of the names given, any node of the targets, even from afar: a
 * renderer never reaches the graph. What it finds: each node that does, with the targets it reaches.
 */
export const NeverReaches = requirement({
  owner: "trame",
  refines: [SharedRules],
  deps: { counts: Counts },
  body: ({ counts }) => (sketch: GraphSketch, p: { nodes: Selector; through: readonly string[]; to: Selector; way?: Way }): RuleFinding[] => {
    const targets = new Set(picked(sketch, { libraries: true, ...p.to }).map((n) => n.ref))
    return picked(sketch, p.nodes).flatMap((n) => {
      const hit = [...reached(sketch, n.ref, p.through, p.way ?? Direction.out)].filter((r) => targets.has(r))
      return counts.any(hit) ? [{ on: n.ref, nodes: hit }] : []
    })
  },
})

/**
 * As many links as asked
 * Each node the rule judges has, one way, at least and at most the number of edges of this name given: an entry point
 * that calls a third party is verified by a scenario. What it finds: each node with too few or too many, with the nodes
 * it is linked to.
 */
export const Linked = requirement({
  owner: "trame",
  refines: [SharedRules],
  deps: { counts: Counts },
  body: ({ counts }) => (sketch: GraphSketch, p: { nodes: Selector; edge: string; way?: Way; atLeast?: number; atMost?: number }): RuleFinding[] =>
    picked(sketch, p.nodes).flatMap((n) => {
      const out = (p.way ?? Direction.out) === Direction.out
      const others = sketch.edges
        .filter((e) => e.name === p.edge && (out ? e.from === n.ref : e.to === n.ref))
        .map((e) => (out ? e.to : e.from))
      const wrong = others.length < (p.atLeast ?? counts.zero) || (p.atMost !== undefined && others.length > p.atMost)
      return wrong ? [{ on: n.ref, nodes: others }] : []
    }),
})

/**
 * Effects a node may not have
 * No node the rule judges has one of these effects, its own or through what it depends on: a read writes nothing, an
 * engine function does not write to disk. What it finds: each node that has some, with the effects and the
 * dependencies that bring them.
 */
export const WithoutEffects = requirement({
  owner: "trame",
  refines: [SharedRules],
  deps: { counts: Counts },
  body: ({ counts }) => (sketch: GraphSketch, p: { nodes: Selector; effects: readonly string[]; dependency?: string }): RuleFinding[] =>
    picked(sketch, p.nodes).flatMap((n) => {
      const bad = p.effects.filter((e) => n.effects.includes(e))
      if (counts.isEmpty(bad)) return []
      const byRef = new Map(sketch.nodes.map((x) => [x.ref, x]))
      const carriers = sketch.edges
        .filter((e) => e.from === n.ref && e.name === (p.dependency ?? EdgeName.deps))
        .map((e) => byRef.get(e.to))
        .filter((d): d is SketchNode => d !== undefined && d.effects.some((x) => bad.includes(x)))
        .map((d) => d.ref)
      return [{ on: n.ref, words: bad, nodes: carriers }]
    }),
})

/**
 * Words of a vocabulary
 * The words a node lists in a field (the effects a port declares) are words of a vocabulary, or of the words given
 * besides. What it finds: each node with words that are not, and those words.
 */
export const WordsOf = requirement({
  owner: "trame",
  refines: [SharedRules],
  deps: { counts: Counts },
  body: ({ counts }) => (sketch: GraphSketch, p: { nodes: Selector; field: string; vocabulary: SketchNode; also?: readonly string[] }): RuleFinding[] => {
    const known = new Set([...Object.keys((p.vocabulary.field(VocabularyField.words) as Record<string, unknown> | undefined) ?? {}), ...(p.also ?? [])])
    // A field holds a list of words, or lists by name (the effects of a port, method by method).
    const listed = (v: unknown): readonly string[] =>
      Array.isArray(v) ? v : v instanceof Object ? Object.values(v).flatMap((x) => (Array.isArray(x) ? x : [])) : []
    return picked(sketch, p.nodes).flatMap((n) => {
      const words = listed(n.field(p.field)).filter((w) => !known.has(w))
      return counts.any(words) ? [{ on: n.ref, words }] : []
    })
  },
})

// Small graphs for the criteria: nodes by kind and module, with effects and fields, and named edges.

const node = (ref: string, kind: string, more: { module?: string; effects?: string[]; fields?: Record<string, unknown>; library?: string } = {}): SketchNode => ({
  ref, kind, module: more.module ?? "m", library: more.library, title: ref, effects: more.effects ?? [], field: (path) => more.fields?.[path],
})
const graph = (nodes: SketchNode[], edges: [string, string, string][]): GraphSketch =>
  ({ nodes, edges: edges.map(([from, name, to]) => ({ from, to, name })) })
const refs = (found: RuleFinding[]) => found.map((f) => f.on).join()

/** Criteria of a node that reaches what it must */
export const ReachesCriteria = acceptance({
  accepts: Reaches,
  owner: "trame",
  criteria: (criterion) => {
    const g = graph(
      [node("goal", "goal"), node("req", "requirement"), node("adr1", "adr"), node("adr2", "adr"), node("adr3", "adr")],
      [["req", "refines", "goal"], ["adr1", "serves", "goal"], ["adr2", "serves", "req"]],
    )
    const p = { nodes: { kinds: ["adr"] }, through: ["serves", "refines"], to: { kinds: ["goal"] } }
    criterion("An ADR that serves a goal, directly or through a requirement, reaches it; one that serves nothing does not", () => refs(Reaches(g, p)) === "adr3")
    criterion("A library's nodes are not judged unless asked", () =>
      Reaches(graph([node("lib", "adr", { library: "std" })], []), p).length === 0)
  },
})

/** Criteria of a node that never reaches what it must not */
export const NeverReachesCriteria = acceptance({
  accepts: NeverReaches,
  owner: "trame",
  criteria: (criterion) => {
    const g = graph(
      [node("render", "function", { module: "rendering" }), node("helper", "function", { module: "text" }), node("prelude", "function", { module: "kernel" }), node("pure", "function", { module: "rendering" })],
      [["render", "deps", "helper"], ["helper", "deps", "prelude"]],
    )
    const found = NeverReaches(g, { nodes: { kinds: ["function"], modules: ["rendering"] }, through: ["deps"], to: { nodes: [g.nodes[2]] } })
    criterion("A renderer that reaches the prelude from afar is found, with what it reaches; one that does not is not", () =>
      refs(found) === "render" && found[0].nodes?.join() === "prelude")
  },
})

/** Criteria of as many links as asked */
export const LinkedCriteria = acceptance({
  accepts: Linked,
  owner: "trame",
  criteria: (criterion) => {
    const g = graph(
      [node("pay", "entry", { effects: ["third-party"] }), node("list", "entry"), node("book", "entry", { effects: ["third-party"] }), node("s", "scenario")],
      [["s", "verifies", "pay"]],
    )
    criterion("An entry point calling a third party without a scenario that verifies it is found", () =>
      refs(Linked(g, { nodes: { kinds: ["entry"], effects: ["third-party"] }, edge: "verifies", way: "in", atLeast: 1 })) === "book")
    criterion("At most one: two are too many", () =>
      refs(Linked(graph([node("a", "x"), node("b", "y"), node("c", "y")], [["a", "e", "b"], ["a", "e", "c"]]), { nodes: { kinds: ["x"] }, edge: "e", atMost: 1 })) === "a")
  },
})

/** Criteria of effects a node may not have */
export const WithoutEffectsCriteria = acceptance({
  accepts: WithoutEffects,
  owner: "trame",
  criteria: (criterion) => {
    const g = graph(
      [node("get", "entry", { effects: ["read", "write"], fields: { trigger: { type: "http", method: "GET" } } }), node("post", "entry", { effects: ["write"], fields: { trigger: { type: "http", method: "POST" } } }),
        node("db", "function", { effects: ["write"] })],
      [["get", "deps", "db"]],
    )
    const found = WithoutEffects(g, { nodes: { kinds: ["entry"], where: [{ path: "trigger.type", equals: "http" }, { path: "trigger.method", equals: "GET" }] }, effects: ["write", "third-party"] })
    criterion("A read that writes is found, with the effect and the dependency that brings it; a write that writes is not judged", () =>
      refs(found) === "get" && found[0].words?.join() === "write" && found[0].nodes?.join() === "db")
  },
})

/** Criteria of words of a vocabulary */
export const WordsOfCriteria = acceptance({
  accepts: WordsOf,
  owner: "trame",
  criteria: (criterion) => {
    const effects = node("effects", "vocabulary", { fields: { words: { read: "Reads", write: "Writes" } } })
    const g = graph([effects, node("p1", "port", { fields: { declaredEffects: ["read"] } }), node("p2", "port", { fields: { declaredEffects: ["write", "teleport", "asynchronous"] } })], [])
    const found = WordsOf(g, { nodes: { kinds: ["port"] }, field: "declaredEffects", vocabulary: effects, also: ["asynchronous"] })
    criterion("A port that declares an effect the vocabulary does not know is found, with that word only", () =>
      refs(found) === "p2" && found[0].words?.join() === "teleport")
    const byMethod = graph([effects, node("p3", "port", { fields: { declaredEffects: { find: ["read"], save: ["write", "teleport"] } } })], [])
    const inMethods = WordsOf(byMethod, { nodes: { kinds: ["port"] }, field: "declaredEffects", vocabulary: effects })
    criterion("The words of a port that says its effects method by method are read too", () =>
      refs(inMethods) === "p3" && inMethods[0].words?.join() === "teleport")
  },
})
