import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, Stage, Status,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type ProvidedBy, type FileBody, type Signature,
} from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * An implementation: what realises one or more ports by touching the platform (database, network, files, clock). It is
 * the only place where code may do so. A technical choice (a binding) chooses it for some environments; in a graph
 * without choices, an implementation named its environments itself. It may also describe its provisioning (a
 * Terraform module), whose variables are dependencies.
 */
const kind = defineKind({
  name: "implementation",
  label: { one: say.implementationImplementation(), many: say.implementationImplementations() },
  order: 150,
  ambient: true,
  fields: {
    owner: field.owner(),
    deps: optional(field.deps()),
    body: field.body(),
    variables: optional(field.deps(say.implementationVariables(), Stage.provisioning)),
    provision: optional(field.body(Stage.provisioning)),
  },
  edges: {
    implements: edge.many(["port"], { label: say.functionImplements(), inverse: say.functionImplementedBy() }),
    environments: optionalEdge(edge.many(["environment"], { label: say.implementationFor(), inverse: say.implementationUses() })),
    packages: optionalEdge(edge.many(["package"], { label: say.packageUses(), inverse: say.packageUsedBy() })),
  },

  // As sound as the packages it uses: a vulnerable one, or one the lockfile does not install, makes it violated. One that
  // names no package has no status of its own.
  status: (self, g) => {
    const used = g.from(self).out("packages").nodes().map((p) => p.status)
    if (!used.length) return undefined
    if (used.includes(Status.violated)) return Status.violated
    return used.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  // What it does goes through its dependencies: if more comes out than the port promises, it is an error.
  holes: (self, g) => [
    ...self.implements.map((port) => {
      const promised = new Set(port.effects)
      const extra = self.effects.filter((e) => !promised.has(e))
      return extra.length > 0 && hole.error(say.functionDoesMoreThanPromises(port.title, extra.join(", ")))
    }),
    g.from(self).out("environments").exists() && g.from(self).in("chooses").exists() &&
      hole.warning(say.implementationNamesItsOwnEnvironmentsAndIs()),
  ],
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
