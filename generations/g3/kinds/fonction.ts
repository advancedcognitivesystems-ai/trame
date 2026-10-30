import {
  defineKind, field, optional, edge, optionalEdge, hole, doc,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Signature, type Constante, type Valeurs,
} from "../trame/kernel"

/**
 * Une fonction : un corps, et ses dépendances nommées, qui deviennent ses paramètres. Les utilitaires aussi sont des fonctions.
 * Elle peut déclarer ses propres constantes : son corps les reçoit en paramètres, avec leur sens écrit dans le graphe.
 */
const kind = defineKind({
  name: "function",
  label: { one: "Fonction", many: "Fonctions" },
  order: 140,
  fields: {
    owner: optional(field.owner()),
    deps: optional(field.deps()),
    constantes: optional(field.constantes()),
    body: field.body(),
    synchrone: optional(field.value<boolean>("Doit rester synchrone")),
  },
  edges: {
    serves: optionalEdge(edge.many(["requirement", "goal"], { label: "Sert", inverse: "Servi par" })),
    in: optionalEdge(edge.one(["component"], { label: "Fait partie de", inverse: "Contient" })),
  },
  /** Son statut : celui des scénarios qui le vérifient. */
  status(self, g) {
    const all = g.from(self).in("verifies").nodes().map((s) => s.status)
    if (!all.length) return "inconnu"
    if (all.includes("violé")) return "violé"
    if (all.includes("bloqué")) return "bloqué"
    return all.every((s) => s === "tenu") ? "tenu" : "inconnu"
  },

  renderOwns: ["synchrone"],

  holes: (self) => [
    self.synchrone === true && self.effects.includes("asynchrone") &&
      hole.error("Doit rester synchrone, mais dépend de quelque chose d'asynchrone"),
  ],

  render: (self) => (self.synchrone ? [doc.para("Doit rester synchrone.")] : []),
})

type Deps = Record<string, AnyNode>

interface FonctionInput<D extends Deps, C extends Record<string, Constante>, F> {
  owner?: string
  deps?: D
  /** Ses constantes : le corps les reçoit en paramètres, comme ses dépendances. */
  constantes?: C
  /** En ligne, ou `code.file(…)` avec une `signature`. */
  body: ((deps: Provided<D> & Valeurs<C>) => F | Promise<F>) | FileBody<(deps: Provided<D> & Valeurs<C>) => F | Promise<F>>
  signature?: Signature<F>
  synchrone?: boolean
  serves?: readonly Node<"requirement" | "goal">[]
  in?: Node<"component">
}

/** Déclare une fonction. Ce qu'elle donne à ceux qui la reçoivent : ce que rend son corps. */
export function fonction<D extends Deps = {}, F = unknown, const C extends Record<string, Constante> = {}>(input: FonctionInput<D, C, F>): Node<"function"> & Provides<F> & HasDeps<D> {
  const { signature: _s, ...rest } = input
  return kind(rest as never) as never
}

export const functionKind = kind
