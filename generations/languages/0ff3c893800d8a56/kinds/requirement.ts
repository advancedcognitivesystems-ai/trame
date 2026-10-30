import { defineKind, field, edge, optionalEdge, hole, doc, Status, type Node, type Provides } from "../trame/kernel"

/** A requirement: a pure function, the oracle the projected code will be judged against. */
const kind = defineKind({
  name: "requirement",
  label: { one: "Requirement", many: "Requirements" },
  order: 20,
  main: "rule",
  callable: "rule",
  fields: {
    rule: field.fn<(...args: never[]) => unknown>(() => () => 0),
  },
  edges: {
    refines: edge.many(["goal", "requirement"], { label: "Refines", inverse: "Refined by", acyclic: true }),
    assumes: optionalEdge(edge.many(["assumption"], { label: "Assumes", inverse: "Assumed by" })),
  },

  holes: (self, g) => [!g.from(self).in("accepts").exists() && hole.warning("Requirement without acceptance criteria")],

  status(self, g) {
    const all = g.from(self).in("accepts").nodes().map((a) => a.status)
    if (!all.length) return Status.unknown
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  /** Wired as a dependency: the rule itself, which then serves as oracle and as code. */
  provide: (self) => self.rule,

  render(self) {
    const rule = self.decl?.props.rule
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const by = self.amendedBy.find((a) => a.paths.includes("rule"))?.by
    return [
      ...(by ? [doc.para("Rule redefined by ", doc.ref(by), ". The code below is the original rule.")] : []),
      ...(rule ? [doc.details(by ? "The original rule, in the code" : "The rule, in the code", [doc.code("ts", rule, source)])] : []),
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
