import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, Status,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type ProvidedBy, type FileBody, type Signature, type Constant, type Values, type Declares, EdgeName } from "../trame/kernel"

/**
 * A function: a body, and its named dependencies, which become its parameters. Utilities are functions too.
 * It may declare its own constants: its body receives them as parameters, with their meaning written in the graph.
 * A function may implement ports: it is then a realization that touches nothing (a strategy, a test double, a
 * repository over a database port), which a technical choice (a binding) chooses, and which is reached through its
 * ports only. It does no more than they promise.
 */
const kind = defineKind({
  name: "function",
  label: { one: "Function", many: "Functions" },
  order: 140,
  fields: {
    owner: optional(field.owner()),
    deps: optional(field.deps()),
    constants: optional(field.constants()),
    body: field.body(),
    synchronous: optional(field.value<boolean>("Must stay synchronous")),
  },
  edges: {
    serves: optionalEdge(edge.many(["requirement", "goal"], { label: "Serves", inverse: "Served by" })),
    [EdgeName.partOf]: optionalEdge(edge.one(["component"], { label: "Part of", inverse: "Contains" })),
    implements: optionalEdge(edge.many(["port"], { label: "Implements", inverse: "Implemented by" })),
  },
  /** Its status: that of the scenarios that verify it. */
  status(self, g) {
    const all = g.from(self).in("verifies").nodes().map((s) => s.status)
    if (!all.length) return Status.unknown
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  renderOwns: ["synchronous"],

  holes: (self) => [
    self.synchronous === true && self.effects.includes("asynchronous") &&
      hole.error("Must stay synchronous, but depends on something asynchronous"),
    // A realization does no more than the ports it implements promise.
    ...self.implements.map((port) => {
      const promised = new Set(port.effects)
      const extra = self.effects.filter((e) => !promised.has(e))
      return extra.length > 0 && hole.error(`Does more than "${port.title}" promises: ${extra.join(", ")}`)
    }),
  ],

  render: (self) => (self.synchronous ? [doc.para("Must stay synchronous.")] : []),
})

type Deps = Record<string, AnyNode>

interface FunctionInput<D extends Deps, C extends Record<string, Constant>, F> {
  owner?: string
  deps?: D
  /** Its constants: the body receives them as parameters, like its dependencies. */
  constants?: C
  /** Inline, or `code.file(…)` with a `signature`. */
  body: ((deps: Provided<D> & Values<C>) => F | Promise<F>) | FileBody<(deps: Provided<D> & Values<C>) => F | Promise<F>>
  signature?: Signature<F>
  synchronous?: boolean
  serves?: readonly Node<"requirement" | "goal">[]
  in?: Node<"component">
}

type UnionToIntersection<U> = (U extends unknown ? (x: U) => void : never) extends (x: infer I) => void ? I : never
/** The contract of a realization: all those of the ports it implements. */
type ContractOf<P> = UnionToIntersection<ProvidedBy<P>>

interface RealizationInput<P extends Node<"port">, D extends Deps, C extends Record<string, Constant>> extends Omit<FunctionInput<D, C, ContractOf<P>>, "body" | "signature"> {
  /** The ports it answers, when a technical choice chooses it. */
  implements: readonly P[]
  body: ((deps: Provided<D> & Values<C>) => ContractOf<P> | Promise<ContractOf<P>>) | FileBody<(deps: Provided<D> & Values<C>) => ContractOf<P> | Promise<ContractOf<P>>>
  signature?: Signature<ContractOf<P>>
}

/** Declares a function. What it gives to those who receive it: what its body returns (a port's contract, if it implements one). */
export function fn<P extends Node<"port">, D extends Deps = {}, const C extends Record<string, Constant> = {}>(input: RealizationInput<P, D, C>): Node<"function"> & Provides<ContractOf<P>> & HasDeps<D> & Declares<C>
export function fn<D extends Deps = {}, F = unknown, const C extends Record<string, Constant> = {}>(input: FunctionInput<D, C, F>): Node<"function"> & Provides<F> & HasDeps<D> & Declares<C>
export function fn(input: { signature?: unknown }): never {
  const { signature: _s, ...rest } = input
  return kind(rest as never) as never
}

export const functionKind = kind
