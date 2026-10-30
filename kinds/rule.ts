import {
  defineKind, field, edge, optional, optionalEdge, hole, doc, keysOf, fieldsOf, edgesOf, isNode, Status, Severity, KindName, EdgeName, Direction,
  type Graph, type View, type GraphSketch, type SketchNode, type RuleFinding, type AnyNode,
} from "../trame/kernel"
import { requirement } from "./requirement"
import { adrKind } from "./adr"
import words from "./words"

const say = words()

export interface Violation { on: View; what: string }

const fields = {
  owner: field.owner(),
  check: optional(field.fn<(g: Graph) => Violation[]>(() => () => [])),
  params: optional(field.value()),
  // How much a broken rule weighs: an error by default; a project may keep one as a warning while it gets there.
  severity: optional(field.value<typeof Severity.error | typeof Severity.warning>(say.ruleSeverity())),
}
const F = keysOf(fields)
const edges = {
  [EdgeName.applies]: optionalEdge(edge.one([KindName.requirement], { label: say.ruleApplies(), inverse: say.ruleAppliedBy() })),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal, KindName.requirement, KindName.adr, KindName.decision], { label: say.ruleServes(), inverse: say.ruleKeptBy() })),
}
const E = keysOf(edges)

// The graph as a rule of a library reads it, made once for each graph a build judges.
const sketches = new WeakMap<Graph, GraphSketch>()
export const sketchOf = (g: Graph): GraphSketch => {
  const known = sketches.get(g)
  if (known) return known
  const views = g.all().nodes()
  const sketch: GraphSketch = {
    nodes: views.map((v) => ({
      ref: v.ref, kind: v.kind, module: v.module, library: v.library, title: v.title, owner: v.owner, effects: v.effects, field: (path: string) => v.field(path),
    })),
    edges: views.flatMap((v) => g.edges(v, Direction.out).filter((e) => e.active).map((e) => ({ from: v.ref, to: e.other.ref, name: e.name }))),
  }
  sketches.set(g, sketch)
  return sketch
}

// The parameters a rule gives the requirement it applies: the nodes they name, as the sketch has them.
export const resolved = (value: unknown, g: Graph, sketch: GraphSketch): unknown => {
  const { values } = g.lib
  if (isNode(value)) {
    const ref = g.view(value as AnyNode).ref
    return sketch.nodes.find((n: SketchNode) => n.ref === ref)
  }
  if (Array.isArray(value)) return value.map((x) => resolved(x, g, sketch))
  if (values.isObject(value) && !values.isFunction(value))
    return Object.fromEntries(Object.entries(value).map(([k, x]) => [k, resolved(x, g, sketch)]))
  return value
}

/**
 * An architecture rule: a query on the consolidated graph. It applies a requirement (of the standard library, or the
 * project's), with its parameters, or holds its own query; it says why it holds (what it serves, or the ADR that applies
 * it). Each violation becomes an error placed on the offending node, with the owner of the rule.
 */
export const rule = defineKind({
  name: KindName.rule,
  label: { one: say.ruleArchitectureRule(), many: say.ruleArchitectureRules() },
  main: F.check,
  /** An architecture rule is a root of its layer, as a goal is of the product. */
  root: true,
  fields,
  edges,

  evaluate: (self, g): Violation[] => {
    const { values, texts, lists, counts } = g.lib
    const applied = g.from(self).out(E.applies).first()
    if (applied) {
      const run = applied.field(fieldsOf(requirement).rule)
      if (!values.isFunction(run)) return []
      const sketch = sketchOf(g)
      const found = (run as unknown as (s: GraphSketch, p: unknown) => RuleFinding[])(sketch, resolved(self.field(F.params), g, sketch)) ?? []
      const title = (ref: string) => g.node(ref).first()?.title ?? ref
      return found.map((f) => {
        const listed = (xs: readonly string[]) => texts.concat(lists.conjunction(xs).map(String))
        const words = f.words ?? []
        const nodes = (f.nodes ?? []).map(title)
        const about = [
          ...(counts.any(words) ? [say.ruleUses(listed(words))] : []),
          ...(counts.any(nodes) ? [counts.any(words) ? say.ruleThrough(listed(nodes)) : say.ruleInvolves(listed(nodes))] : []),
        ]
        return { on: g.node(f.on).first() ?? self, what: counts.any(about) ? about.join(g.lib.punctuation.clauses) : say.ruleBreaks() }
      })
    }
    const own = self.field(F.check)
    return values.isFunction(own) ? ((own as unknown as (g: Graph) => Violation[])(g) ?? []) : []
  },

  status(self, g) {
    const r = self.result<Violation[]>()
    return r === undefined ? Status.unknown : g.lib.counts.any(r) ? Status.violated : Status.held
  },

  holes: (self, g) => [
    ...(self.result<Violation[]>() ?? []).map((v) =>
      hole.on(v.on, (self.field(F.severity) === Severity.warning ? hole.warning : hole.error)(say.ruleRule(v.what, self.title), self.owner))),
    ...(g.from(self).out(E.serves).exists() || g.from(self).in(edgesOf(adrKind).appliedBy).exists() ? [] : [hole.warning(say.ruleWithoutReason())]),
  ],

  render(self, g) {
    const { counts, positions, declarations } = g.lib
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    const check = self.decl?.props[F.check]
    const params = self.decl?.props[F.params]
    const r = self.result<Violation[]>() ?? []
    return [
      counts.any(r) ? doc.list(r.map((v) => say.ruleViolation(doc.ref(v.on), v.what))) : doc.para(say.ruleRespectedEverywhere()),
      ...(params ? [doc.details(say.ruleParameters(), [doc.code(declarations.language, params, source)])] : []),
      ...(check ? [doc.details(say.ruleTheRuleInCode(), [doc.code(declarations.language, check, source)])] : []),
    ]
  },
})
