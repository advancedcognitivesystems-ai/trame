import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, edgesOf, Status, Outcome, Hole, KindName, EdgeName,
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
  /** A rule that constrains another (A3): the cases that rule is played on, each one its arguments. */
  examples: optional(field.value<readonly (readonly unknown[])[]>(say.requirementExamples())),
}
const F = keysOf(fields)

const edges = {
  [EdgeName.refines]: edge.many([KindName.goal, KindName.requirement], { label: say.requirementRefines(), inverse: say.requirementRefinedBy(), acyclic: true }),
  assumes: optionalEdge(edge.many([KindName.assumption], { label: say.requirementAssumes(), inverse: say.requirementAssumedBy() })),
  /** The rule this one constrains: what it answers on each example must satisfy this one (A3). */
  constrains: optionalEdge(edge.one([KindName.requirement], { label: say.requirementConstrains(), inverse: say.requirementConstrainedBy() })),
}
const E = keysOf(edges)

/** What a constraint found, playing each example on the rule it constrains, then itself on that answer. */
interface Played {
  at: number
  status: Outcome
  /** The decision nobody took, when the example waits for it. */
  waiting?: { ref: string; title: string }
  error?: string
}

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
  renderOwns: [F.body, F.examples],
  fields,
  edges,

  /**
   * A rule that constrains another plays each of its examples on that rule, then itself on the arguments and the answer
   * (A3): kept when it says so, refused when not, waiting when either reads a value nobody decided.
   */
  evaluate(self, g): Played[] | undefined {
    const constrained = g.lib.sequences.head(g.from(self).out(E.constrains).nodes())
    const examples = self.field(F.examples)
    if (!constrained || !Array.isArray(examples)) return undefined
    return examples.map((example, i): Played => {
      const at = g.lib.counts.next(i)
      try {
        const theirs = ruleOf(constrained)
        const mine = ruleOf(self)
        if (!g.lib.values.isFunction(theirs) || !g.lib.values.isFunction(mine)) return { at, status: Outcome.error }
        const args: unknown[] = Array.isArray(example) ? example : [example]
        const answer = (theirs as (...a: unknown[]) => unknown)(...args)
        return { at, status: (mine as (...a: unknown[]) => unknown)(...args, answer) ? Outcome.passed : Outcome.failed }
      } catch (e) {
        if (e instanceof Hole) {
          g.blocked(e, { one: say.requirementExample(), many: say.requirementExamplesNoun() }, self)
          const v = g.view(e.node)
          return { at, status: Outcome.blocked, waiting: { ref: v.ref, title: v.title } }
        }
        return { at, status: Outcome.error, error: (e as Error).message }
      }
    })
  },

  holes: (self, g) => {
    const owner = self.field(F.owner)
    const asBody = self.field(F.body) !== undefined
    const asFunction = self.field(F.rule) !== undefined
    const constrained = g.lib.sequences.head(g.from(self).out(E.constrains).nodes())
    const refused = (self.result<Played[]>() ?? []).filter((x) => x.status === Outcome.failed || x.status === Outcome.error).map((x) => x.at)
    const ownerOf = (v: View) => v.owner ?? say.requirementNobody()
    return [
      (constrained === undefined) !== (self.field(F.examples) === undefined) && hole.error(say.requirementConstraintWhole()),
      // A disagreement between two owners: each is told, until one amends their rule.
      ...(constrained && g.lib.counts.any(refused) ? [
        hole.error(say.requirementRefuses(constrained.title, ownerOf(constrained), refused), g.lib.values.isText(owner) ? owner : undefined),
        hole.on(constrained, hole.error(say.requirementRefusedBy(self.title, ownerOf(self), refused), constrained.owner)),
      ] : []),
      !g.from(self).in(edgesOf(acceptance).accepts).exists() && hole.warning(say.requirementRequirementWithoutAcceptanceCriteria()),
      asBody === asFunction && hole.error(say.requirementRuleOnce()),
      asFunction && !asBody && hole.warning(say.requirementRuleNotABody()),
      self.field(F.owner) === undefined && hole.warning(say.ownerMissing()),
      // Two rules that answer the same question for the same goal may disagree, and who prevails would hide in the code.
      ...lookAlikes(self, g).map((o) => hole.warning(say.requirementLooksLike(o.title, ownerOf(o)), g.lib.values.isText(owner) ? owner : undefined)),
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
    // Right: its criteria, and the examples of the rules that constrain it played on it (A3).
    const right = [
      ...g.from(self).in(edgesOf(acceptance).accepts).nodes().map((a) => a.status),
      // An objective constrains a rule too, through an edge of the same name: it is judged by what is measured.
      ...g.from(self).in(E.constrains).nodes().filter((c) => c.kind === KindName.requirement).map((c) => playedStatus(c, g)),
    ]
    const by = followers(self, g)
    // A library's rule nothing follows here is offered: the projects that follow it judge it, and the library itself.
    if (self.library !== undefined && g.lib.counts.isEmpty(by)) return undefined
    const says = by.map((f) => (f.kind === KindName.dataset ? keepsItsRules(f, g.lib) : f.status))
    // A rule that constrains another is followed where that one is, and as far as that one keeps it on its examples.
    const kept = g.from(self).out(E.constrains).exists() ? [playedStatus(self, g)] : []
    const all = [...right, ...says, ...kept]
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
    const constrained = g.lib.sequences.head(g.from(self).out(E.constrains).nodes())
    const played = self.result<Played[]>() ?? []
    return [
      ...(by ? [doc.para(...say.requirementRuleRedefinedBy(doc.ref(by)))] : []),
      ...(rule ? [doc.details(by ? say.requirementTheOriginalRuleInTheCode() : say.requirementTheRuleInTheCode(), [doc.code(declarations.language, rule, source)])] : []),
      ...(constrained && self.decl?.props[F.examples]
        ? [doc.details(say.requirementTheExamplesInTheCode(), [doc.code(declarations.language, self.decl.props[F.examples], source)])]
        : []),
      ...(constrained && g.lib.counts.any(played)
        ? [doc.checks(played.map((x) => ({ name: say.requirementExampleAt(x.at), outcome: x.status, detail: x.waiting ? say.requirementWaitingFor(doc.refTo(x.waiting)) : x.error ? [x.error] : undefined })), say.requirementPlayedOn(doc.ref(constrained)))]
        : []),
    ]
  },
})

/**
 * The rules of the project that compute the same kind of answer as this one from the same kind of arguments (their types,
 * in any order) and refine the same node, without one using, refining or constraining the other (A3). A rule that
 * answers true or false is left out, and one a rule or an obligation applies as a check of the graph: conditions and
 * checks add up, both must hold. An engine before g81 does not say how a rule is called: none then.
 */
function lookAlikes(self: View, g: Graph): View[] {
  const mine = self.decl?.signature
  const applied = (v: View) => g.from(v).in(EdgeName.applies).exists()
  if (!mine || mine.decides || self.library !== undefined || applied(self)) return []
  const sorted = (xs: readonly string[]) => [...xs].sort()
  const alike = (a: readonly string[], b: readonly string[]) => a.length === b.length && sorted(a).join() === sorted(b).join()
  const parents = (v: View) => g.from(v).out(EdgeName.refines).nodes().map((p) => p.ref)
  const above = parents(self)
  const linked = (a: View, b: View) => [EdgeName.deps, EdgeName.uses, EdgeName.refines, E.constrains].some((e) => g.from(a).out(e).nodes().some((x) => x.ref === b.ref))
  return g.all(KindName.requirement).nodes().filter((o) => {
    const theirs = o.decl?.signature
    return o.ref !== self.ref && o.library === undefined && theirs !== undefined && !theirs.decides && !applied(o)
      && theirs.returns === mine.returns && alike(theirs.params, mine.params)
      && parents(o).some((p) => above.includes(p)) && !linked(self, o) && !linked(o, self)
  })
}

/** What a node gives as its rule: wired from its body (since g79), or written as the function itself. */
const ruleOf = (v: View): unknown => v.given?.() ?? v.field(F.rule)

/** What a constraint's examples say: refused if one is, waiting if one waits, kept when all are; unknown unplayed. */
function playedStatus(c: View, g: Graph): Status {
  const played = c.result<Played[]>()
  if (!played || g.lib.counts.isEmpty(played)) return Status.unknown
  if (played.some((x) => x.status === Outcome.failed || x.status === Outcome.error)) return Status.violated
  if (played.some((x) => x.status === Outcome.blocked)) return Status.blocked
  return Status.held
}

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
  // A rule that constrains another is followed where that one is.
  for (const c of g.from(self).out(E.constrains).nodes()) if (!seen.has(c.ref)) found.push(...followers(c, g, seen))
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
  constrains?: never
  examples?: never
}

/** What a rule that constrains another receives: that rule's arguments, then its answer; and says whether it keeps it. */
type Judged<C extends Fn> = (...args: [...Parameters<C>, ReturnType<C>]) => boolean

interface AsConstraint<C extends Fn & Node<typeof KindName.requirement>, D extends Deps, K extends Record<string, Constant>> extends Declared {
  /** Who answers for the constraint: told, with the other rule's owner, when that rule's answer is refused. */
  owner: string
  /** The rule it constrains: what that rule answers on each example must satisfy this one. */
  constrains: C
  /** The cases that rule is played on: each one its arguments. */
  examples: readonly Parameters<C>[]
  deps?: D
  constants?: K
  /** Given what it reads, the constraint: the other rule's arguments and answer, kept or not. */
  body: ((deps: Provided<D> & Values<K>) => Judged<C>) | FileBody<(deps: Provided<D> & Values<K>) => Judged<C>>
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
    Node<typeof KindName.requirement> & F & { readonly body: (deps: Provided<D> & Values<C>) => F } & Provides<F> & HasDeps<D> & Declares<C>
  /** The rule written as the function itself, as before g79: warned, until every rule is a body. */
  <F extends Fn>(input: AsFunction<F>): Node<typeof KindName.requirement> & F & { readonly rule: F } & Provides<F>
  /** A rule that constrains another (A3): played on that rule's examples at every build. */
  <C extends Fn & Node<typeof KindName.requirement>, D extends Deps = {}, const K extends Record<string, Constant> = {}>(input: AsConstraint<C, D, K>):
    Node<typeof KindName.requirement> & Judged<C> & { readonly body: (deps: Provided<D> & Values<K>) => Judged<C> } & Provides<Judged<C>> & HasDeps<D> & Declares<K>
} & { def: typeof kind.def }
