import {
  defineKind, field, optional, edge, optionalEdge, hole, keysOf, edgesOf, Stage, Status, KindName, EdgeName,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type ProvidedBy, type FileBody, type Signature,
} from "../trame/kernel"
import { bindingKind } from "./binding"
import words from "./words"

const say = words()

const edges = {
  [EdgeName.implements]: edge.many([KindName.port], { label: say.functionImplements(), inverse: say.functionImplementedBy() }),
  [EdgeName.environments]: optionalEdge(edge.many([KindName.environment], { label: say.implementationFor(), inverse: say.implementationUses() })),
  [EdgeName.packages]: optionalEdge(edge.many([KindName.package], { label: say.packageUses(), inverse: say.packageUsedBy() })),
}
const E = keysOf(edges)

/**
 * An implementation: what realises one or more ports by touching the platform (database, network, files, clock). It is
 * the only place where code may do so. A technical choice (a binding) chooses it for some environments; in a graph
 * without choices, an implementation named its environments itself. It may also describe its provisioning (a
 * Terraform module), whose variables are dependencies.
 */
const kind = defineKind({
  name: KindName.implementation,
  label: { one: say.implementationImplementation(), many: say.implementationImplementations() },
  ambient: true,
  fields: {
    owner: field.owner(),
    deps: optional(field.deps()),
    body: field.body(),
    variables: optional(field.deps(say.implementationVariables(), Stage.provisioning)),
    provision: optional(field.body(Stage.provisioning)),
  },
  edges,

  // As sound as the packages it uses: a vulnerable one, or one the lockfile does not install, makes it violated. One that
  // names no package has no status of its own.
  status: (self, g) => {
    const used = g.from(self).out(E.packages).nodes().map((p) => p.status)
    if (g.lib.counts.isEmpty(used)) return undefined
    if (used.includes(Status.violated)) return Status.violated
    return used.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  // What it does goes through its dependencies: if more comes out than the port promises, it is an error.
  holes: (self, g) => {
    const { counts, texts, lists } = g.lib
    return [
      ...self.implements.map((port) => {
        const promised = new Set(port.effects)
        const extra = self.effects.filter((e) => !promised.has(e))
        return counts.any(extra) && hole.error(say.functionDoesMoreThanPromises(port.title, texts.concat(lists.enumeration(extra))))
      }),
      g.from(self).out(E.environments).exists() && g.from(self).in(edgesOf(bindingKind).chooses).exists() &&
        hole.warning(say.implementationNamesItsOwnEnvironmentsAndIs()),
    ]
  },
})

type Deps = Record<string, AnyNode>
type UnionToIntersection<U> = (U extends unknown ? (x: U) => void : never) extends (x: infer I) => void ? I : never
/** The contract of an implementation: all those of the ports it implements. */
export type ContractOf<P> = UnionToIntersection<ProvidedBy<P>>

interface ImplementationInput<P extends Node<"port">, D extends Deps> {
  owner: string
  implements: readonly P[]
  /** The packages its body imports. */
  packages?: readonly Node<"package">[]
  /** Before technical choices (bindings), the environments it served. */
  environments?: readonly Node<"environment">[]
  deps?: D
  body: ((deps: Provided<D>) => ContractOf<P> | Promise<ContractOf<P>>) | FileBody<(deps: Provided<D>) => ContractOf<P> | Promise<ContractOf<P>>>
  signature?: Signature<ContractOf<P>>
  variables?: Deps
  provision?: FileBody
}

export function implementation<P extends Node<"port">, D extends Deps = {}>(input: ImplementationInput<P, D>): Node<"implementation"> & Provides<ContractOf<P>> & HasDeps<D> {
  const { signature: _s, ...rest } = input
  return kind(rest as never) as never
}

export const implementationKind = kind
