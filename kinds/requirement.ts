import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, edgesOf, Status, KindName, EdgeName,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Constant, type Values, type Declares,
  type Graph, type View,
} from "../trame/kernel"
import { acceptance } from "./acceptance"
import { keepsItsRules } from "./dataset"
import words from "./words"

const say = words()

const fields = {
  /** Who answers for the rule: told when its criteria fail, when nothing follows it, when another constrains it. */
  owner: optional(field.owner()),
  deps: optional(field.deps()),
  constants: optional(field.constants()),
  /** The rule as a body: given what it reads (its dependencies, its constants), the rule. Since g79. */
  body: optional(field.body<(...args: never[]) => unknown>()),
  /** The rule written as the function itself, as before g79: still read, and warned, until every rule is a body. */
  rule: optional(field.fn<(...args: never[]) => unknown>((lib) => () => lib.counts.zero)),
}
const F = keysOf(fields)

/**
 * A requirement: a pure function, the oracle the projected code will be judged against. Its rule is code that programs
 * run, so it is written as a body (since g79): it receives what it reads (decisions, structures, other rules) as
 * parameters, holds no literal and touches nothing; called, the node is the rule its dependencies make. A rule written
 * as the function itself, as before, is still read, with a warning, until every project and library has moved.
 */
const kind = defineKind({
  name: KindName.requirement,
  label: { one: say.requirementRequirement(), many: say.requirementRequirements() },
  main: F.rule,
  callable: F.rule,
  renderOwns: [F.body],
  fields,
  edges: {
    [EdgeName.refines]: edge.many([KindName.goal, KindName.requirement], { label: say.requirementRefines(), inverse: say.requirementRefinedBy(), acyclic: true }),
    assumes: optionalEdge(edge.many([KindName.assumption], { label: say.requirementAssumes(), inverse: say.requirementAssumedBy() })),
  },

  holes: (self, g) => {
    const owner = self.field(F.owner)
    const asBody = self.field(F.body) !== undefined
    const asFunction = self.field(F.rule) !== undefined
    return [
      !g.from(self).in(edgesOf(acceptance).accepts).exists() && hole.warning(say.requirementRequirementWithoutAcceptanceCriteria()),
      asBody === asFunction && hole.error(say.requirementRuleOnce()),
      asFunction && !asBody && hole.warning(say.requirementRuleNotABody()),
      self.field(F.owner) === undefined && hole.warning(say.ownerMissing()),
      self.library === undefined && g.lib.counts.isEmpty(followers(self, g)) && hole.warning(say.requirementNotFollowed(), g.lib.values.isText(owner) ? owner : undefined),
    ]
  },

  /**
   * Held when its rule is right (its acceptance criteria all pass) and the product follows it (A1): each node that
   * follows it holds (code that calls it, a scenario or a check that verifies code against it, a dataset whose rows it
   * checks) and one at least does, or follows it without a status of its own (an obligation, a rule that applies it).
   * Violated or blocked as soon as a criterion or a follower is; unknown while something that follows it is, or nothing
   * does. A library's rule nothing follows in the project that imports it has no status there: it is offered.
   */
  status(self, g) {
    const right = g.from(self).in(edgesOf(acceptance).accepts).nodes().map((a) => a.status)
    const by = followers(self, g)
    // A library's rule nothing follows here is offered: the projects that follow it judge it, and the library itself.
    if (self.library !== undefined && g.lib.counts.isEmpty(by)) return undefined
    const says = by.map((f) => (f.kind === KindName.dataset ? keepsItsRules(f, g.lib) : f.status))
    const all = [...right, ...says]
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    const isRight = g.lib.counts.any(right) && right.every((s) => s === Status.held)
    const isFollowed = g.lib.counts.any(by) && says.every((s) => s === undefined || s === Status.held)
    return isRight && isFollowed ? Status.held : Status.unknown
  },

  /**
   * A rule written as the function itself gives that function. A rule written as a body is built from it (an engine
   * since g79 wires a body first); a program assembled before reads this.
   */
  provide: (self) => self.rule,

  render(self, g) {
    const { positions, declarations } = g.lib
    const written = self.field(F.body) !== undefined ? F.body : F.rule
    const rule = self.decl?.props[written]
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    const by = self.amendedBy.find((a) => a.paths.includes(written))?.by
    return [
      ...(by ? [doc.para(...say.requirementRuleRedefinedBy(doc.ref(by)))] : []),
      ...(rule ? [doc.details(by ? say.requirementTheOriginalRuleInTheCode() : say.requirementTheRuleInTheCode(), [doc.code(declarations.language, rule, source)])] : []),
    ]
  },
})

/**
 * What makes the product follow a rule: by construction, the code and the data that use it (a dependency, a call by
 * name), what applies it (a rule, an obligation), and what follows a rule that uses it, as far as it goes; by
 * verification, the scenarios and the checks that verify code against it. A criterion judges the rule, a scenario that
 * only uses it as an oracle verifies nothing it does not say: neither is the product.
 */
function followers(self: View, g: Graph, seen: Set<string> = new Set()): View[] {
  seen.add(self.ref)
  const judges: readonly string[] = [KindName.acceptance, KindName.scenario]
  const using = [...g.from(self).in(EdgeName.deps).nodes(), ...g.from(self).in(EdgeName.uses).nodes(), ...g.from(self).in(EdgeName.applies).nodes()]
  const found: View[] = [...g.from(self).in(EdgeName.verifies).nodes()]
  for (const v of using) {
    if (seen.has(v.ref)) continue
    if (v.kind === KindName.requirement) found.push(...followers(v, g, seen))
    else if (!judges.includes(v.kind)) found.push(v)
  }
  return found.filter((v, i, all) => all.findIndex((x) => x.ref === v.ref) === i)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any
type Deps = Record<string, AnyNode>

interface Declared {
  refines: readonly Node<typeof KindName.goal | typeof KindName.requirement>[]
  assumes?: readonly Node<typeof KindName.assumption>[]
}

interface AsBody<D extends Deps, C extends Record<string, Constant>, F extends Fn> extends Declared {
  /** Who answers for the rule. */
  owner: string
  /** What the rule reads: each dependency becomes a parameter, as a body's do. */
  deps?: D
  /** Values only this rule uses, with their meaning: the rule receives them as parameters too. */
  constants?: C
  /** Inline, or `code.file(…)`: given its parameters, the rule. */
  body: ((deps: Provided<D> & Values<C>) => F) | FileBody<(deps: Provided<D> & Values<C>) => F>
  rule?: never
}

interface AsFunction<F extends Fn> extends Declared {
  owner?: string
  rule: F
  body?: never
  deps?: never
  constants?: never
}

/** Typed facade: the node is called like its rule; wired, it gives that rule. */
export const requirement = kind as unknown as {
  <F extends Fn, D extends Deps = {}, const C extends Record<string, Constant> = {}>(input: AsBody<D, C, F>):
    Node<"requirement"> & F & { readonly body: (deps: Provided<D> & Values<C>) => F } & Provides<F> & HasDeps<D> & Declares<C>
  /** The rule written as the function itself, as before g79: warned, until every rule is a body. */
  <F extends Fn>(input: AsFunction<F>): Node<"requirement"> & F & { readonly rule: F } & Provides<F>
} & { def: typeof kind.def }
