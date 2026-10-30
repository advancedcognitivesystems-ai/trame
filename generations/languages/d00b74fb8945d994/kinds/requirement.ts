import { defineKind, field, edge, optionalEdge, hole, doc, keysOf, edgesOf, Status, KindName, EdgeName, type Node, type Provides } from "../trame/kernel"
import { acceptance } from "./acceptance"
import words from "./words"

const say = words()

const fields = {
  rule: field.fn<(...args: never[]) => unknown>((lib) => () => lib.counts.zero),
}
const F = keysOf(fields)

/** A requirement: a pure function, the oracle the projected code will be judged against. */
const kind = defineKind({
  name: KindName.requirement,
  label: { one: say.requirementRequirement(), many: say.requirementRequirements() },
  main: F.rule,
  callable: F.rule,
  fields,
  edges: {
    [EdgeName.refines]: edge.many([KindName.goal, KindName.requirement], { label: say.requirementRefines(), inverse: say.requirementRefinedBy(), acyclic: true }),
    assumes: optionalEdge(edge.many([KindName.assumption], { label: say.requirementAssumes(), inverse: say.requirementAssumedBy() })),
  },

  holes: (self, g) => [!g.from(self).in(edgesOf(acceptance).accepts).exists() && hole.warning(say.requirementRequirementWithoutAcceptanceCriteria())],

  status(self, g) {
    const all = g.from(self).in(edgesOf(acceptance).accepts).nodes().map((a) => a.status)
    if (g.lib.counts.isEmpty(all)) return Status.unknown
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  /** Wired as a dependency: the rule itself, which then serves as oracle and as code. */
  provide: (self) => self.rule,

  render(self, g) {
    const { positions, declarations } = g.lib
    const rule = self.decl?.props[F.rule]
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    const by = self.amendedBy.find((a) => a.paths.includes(F.rule))?.by
    return [
      ...(by ? [doc.para(...say.requirementRuleRedefinedBy(doc.ref(by)))] : []),
      ...(rule ? [doc.details(by ? say.requirementTheOriginalRuleInTheCode() : say.requirementTheRuleInTheCode(), [doc.code(declarations.language, rule, source)])] : []),
    ]
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any

interface RequirementInput<F extends Fn> {
  refines: readonly Node<"goal" | "requirement">[]
  assumes?: readonly Node<"assumption">[]
  rule: F
}

/** Typed facade: the node is called like the rule it carries. */
export const requirement = kind as unknown as
  (<F extends Fn>(input: RequirementInput<F>) => Node<"requirement"> & F & { readonly rule: F } & Provides<F>) & { def: typeof kind.def }
