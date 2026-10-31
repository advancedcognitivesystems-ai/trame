import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, edgesOf, Status, KindName, EdgeName, LanguageEffect,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type ProvidedBy, type FileBody, type Signature, type Constant, type Values, type Declares,
} from "../trame/kernel"
import { verifiedStatus } from "./scenario"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  deps: optional(field.deps()),
  constants: optional(field.constants()),
  body: field.body(),
  synchronous: optional(field.value<boolean>(say.functionMustStaySynchronous())),
}
const F = keysOf(fields)

/**
 * A function: a body, and its named dependencies, which become its parameters. Utilities are functions too.
 * It may declare its own constants: its body receives them as parameters, with their meaning written in the graph.
 * A function may implement ports: it is then a realization that touches nothing (a strategy, a test double, a
 * repository over a database port), which a technical choice (a binding) chooses, and which is reached through its
 * ports only. It does no more than they promise.
 */
const kind = defineKind({
  name: KindName.function,
  label: { one: say.functionFunction(), many: say.functionFunctions() },
  fields,
  edges: {
    [EdgeName.serves]: optionalEdge(edge.many([KindName.requirement, KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
    [EdgeName.partOf]: optionalEdge(edge.one([KindName.component], { label: say.entryPointPartOf(), inverse: say.functionContains() })),
    [EdgeName.implements]: optionalEdge(edge.many([KindName.port], { label: say.functionImplements(), inverse: say.functionImplementedBy() })),
  },
  /** Its status: that of the scenarios and the checks that verify it. */
  status: (self, g) => verifiedStatus(self, g),

  renderOwns: [F.synchronous],

  holes: (self, g) => {
    const { counts, texts, lists } = g.lib
    return [
      self.synchronous === true && self.effects.includes(LanguageEffect.asynchronous) &&
        hole.error(say.functionMustStaySynchronousButDependsOn()),
      // A realization does no more than the ports it implements promise.
      ...self.implements.map((port) => {
        const promised = new Set(port.effects)
        const extra = self.effects.filter((e) => !promised.has(e))
        return counts.any(extra) && hole.error(say.functionDoesMoreThanPromises(port.title, texts.concat(lists.enumeration(extra))))
      }),
    ]
  },

  render: (self) => (self.synchronous ? [doc.para(say.functionMustStaySynchronous2())] : []),
})

type Deps = Record<string, AnyNode>

interface FunctionInput<D extends Deps, C extends Record<string, Constant>, F> {
  owner: string
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
