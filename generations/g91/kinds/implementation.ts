import {
  defineKind, field, optional, edge, optionalEdge, hole, keysOf, edgesOf, Stage, Status, KindName, EdgeName, CoveredEffects,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type ProvidedBy, type FileBody, type Signature, type View, type Reach,
} from "../trame/kernel"
import { bindingKind } from "./binding"
import { verifiedStatus } from "./scenario"
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

  // As sound as what verifies it (a scenario that runs it, a check whose program runs it on a machine) and the packages
  // it uses: a vulnerable package, or one the lockfile does not install, makes it violated; unknown while nothing
  // verifies it. One that no choice of the graph takes, nor any environment, has nothing to prove here.
  status: (self, g) => {
    // Offered here and chosen nowhere (a library's adapter, which the projects that choose it verify): nothing to prove.
    if (!g.from(self).in(edgesOf(bindingKind).chooses).exists() && !g.from(self).out(E.environments).exists()) return undefined
    // A package of a library frozen at a version is proven by its release, not here.
    const frozen = (p: View) => p.library !== undefined && g.libraryVersion?.(p.library) !== undefined
    const all = [verifiedStatus(self, g), ...g.from(self).out(E.packages).where((p) => !frozen(p)).nodes().map((p) => p.status)]
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  // What it does goes through its dependencies, and through what its body reaches (since g83: a module, a package, a
  // global): if more comes out than its ports promise, or what it reaches says nothing, it is an error.
  holes: (self, g) => {
    const { counts, texts, lists } = g.lib
    // A promise may cover another (what keeps writes, only it reads).
    const promised = new Set(self.implements.flatMap((port) => port.effects).flatMap((e) => [e, ...(CoveredEffects[e] ?? [])]))
    const reached = self.reaches?.() ?? []
    const named = (r: Reach) => say.implementationReached(r.module, r.name, r.global, r.member)
    return [
      ...reached.filter((r) => r.effects === undefined).map((r) => hole.error(say.implementationReachesUnsaid(named(r), r.where))),
      ...reached.map((r) => {
        const beyond = (r.effects ?? []).filter((e) => !promised.has(e))
        return counts.any(beyond) && hole.error(say.implementationReachesBeyond(named(r), texts.concat(lists.enumeration(beyond)), r.where))
      }),
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
