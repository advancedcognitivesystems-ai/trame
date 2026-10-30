import {
  defineKind, field, optional, edge, optionalEdge, doc,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Signature,
} from "../trame/kernel"

/** Ce qui déclenche un point d'entrée. Une requête HTTP aujourd'hui ; un message ou une échéance demain. */
export type Declencheur =
  | { type: "http"; methode: "GET" | "POST" | "PUT" | "DELETE"; chemin: string }
  | { type: "commande"; nom: string; aide?: string }
  | { type: "message"; file: string }
  | { type: "planifié"; quand: string }

export const http = (methode: "GET" | "POST" | "PUT" | "DELETE", chemin: string): Declencheur => ({ type: "http", methode, chemin })
export const commande = (nom: string, aide?: string): Declencheur => ({ type: "commande", nom, ...(aide ? { aide } : {}) })

/** Ce que reçoit et rend un point d'entrée déclenché par une requête. */
export interface Requete {
  params: Record<string, string>
  corps?: unknown
}
export interface Reponse {
  statut?: number
  corps: unknown
}
export type Traitement = (requete: Requete) => Promise<Reponse>

/** Un point d'entrée : une fonction qu'un composant expose au monde. */
const kind = defineKind({
  name: "entry",
  label: { one: "Point d'entrée", many: "Points d'entrée" },
  order: 145,
  renderOwns: ["declencheur"],
  fields: {
    owner: field.owner(),
    declencheur: field.value<Declencheur>("Déclencheur"),
    deps: optional(field.deps()),
    body: field.body(),
  },
  edges: {
    serves: optionalEdge(edge.many(["requirement", "goal"], { label: "Sert", inverse: "Servi par" })),
    in: edge.one(["component"], { label: "Fait partie de", inverse: "Expose" }),
  },

  /** Son statut : celui des scénarios qui le vérifient. */
  status(self, g) {
    const all = g.from(self).in("verifies").nodes().map((s) => s.status)
    if (!all.length) return "inconnu"
    if (all.includes("violé")) return "violé"
    if (all.includes("bloqué")) return "bloqué"
    return all.every((s) => s === "tenu") ? "tenu" : "inconnu"
  },

  render(self) {
    const d = self.field("declencheur") as Declencheur | undefined
    if (!d || typeof d !== "object") return []
    const text = d.type === "http" ? `${d.methode} ${d.chemin}` : d.type === "commande" ? `commande ${d.nom}` : d.type === "message" ? `message sur ${d.file}` : `planifié : ${d.quand}`
    return [doc.para("Déclenché par ", doc.ident(text))]
  },
})

type Deps = Record<string, AnyNode>

interface PointEntreeInput<D extends Deps> {
  owner: string
  declencheur: Declencheur
  in: Node<"component">
  serves?: readonly Node<"requirement" | "goal">[]
  deps?: D
  body: ((deps: Provided<D>) => Traitement | Promise<Traitement>) | FileBody<(deps: Provided<D>) => Traitement | Promise<Traitement>>
  signature?: Signature<Traitement>
}

export function pointEntree<D extends Deps = {}>(input: PointEntreeInput<D>): Node<"entry"> & Provides<Traitement> & HasDeps<D> {
  const { signature: _s, ...rest } = input
  return kind(rest as never) as never
}

export const entryKind = kind
