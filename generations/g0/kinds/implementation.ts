import {
  defineKind, field, optional, edge, hole, doc,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type ProvidedBy, type FileBody, type Signature,
} from "../trame/kernel"

/**
 * Une implémentation : ce qui réalise un ou plusieurs accès dans certains environnements.
 * C'est le seul endroit où le code touche la plateforme (base, réseau, fichiers, horloge).
 * Elle peut aussi décrire son provisionnement (un module Terraform), dont les variables sont des dépendances.
 */
const kind = defineKind({
  name: "implementation",
  label: { one: "Implémentation", many: "Implémentations" },
  order: 150,
  ambient: true,
  fields: {
    owner: field.owner(),
    deps: optional(field.deps()),
    body: field.body(),
    variables: optional(field.deps("Variables", "provisionnement")),
    provision: optional(field.body("provisionnement")),
  },
  edges: {
    implements: edge.many(["port"], { label: "Réalise", inverse: "Réalisé par" }),
    environments: edge.many(["environment"], { label: "Pour", inverse: "Utilise" }),
  },

  // Ce qu'elle fait passe par ses dépendances : s'il en sort plus que ce que l'accès promet, c'est une erreur.
  holes: (self) =>
    self.implements.map((port) => {
      const promised = new Set(port.effects)
      const extra = self.effects.filter((e) => !promised.has(e))
      return extra.length > 0 && hole.error(`Fait plus que ce que promet « ${port.title} » : ${extra.join(", ")}`)
    }),
})

type Deps = Record<string, AnyNode>
type UnionToIntersection<U> = (U extends unknown ? (x: U) => void : never) extends (x: infer I) => void ? I : never
/** Le contrat d'une implémentation : tous ceux des accès qu'elle réalise. */
export type ContractOf<P> = UnionToIntersection<ProvidedBy<P>>

interface ImplementationInput<P extends Node<"port">, D extends Deps> {
  owner: string
  implements: readonly P[]
  environments: readonly Node<"environment">[]
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
