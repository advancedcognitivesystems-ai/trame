import { defineKind, field, optional, doc, isHole, type Node, type Provides, type Inline, type Constante, type Valeurs } from "../trame/kernel"

const entries = (raw: unknown): [string, Constante][] =>
  raw !== null && typeof raw === "object" && !isHole(raw)
    ? Object.entries(raw as Record<string, unknown>).filter((e): e is [string, Constante] => typeof e[1] === "object" && e[1] !== null && "valeur" in e[1])
    : []

/**
 * Une norme : un texte publié ailleurs (une RFC, un registre, un algorithme), dont le graphe déclare les constantes
 * qu'il utilise, avec leur sens. Rien n'y est décidé : on cite la source. Le code reçoit les valeurs par une dépendance,
 * et le graphe sait qui utilise quelle norme. Le moteur affiche ses constantes, comme celles de tout nœud.
 */
const kind = defineKind({
  name: "standard",
  label: { one: "Norme", many: "Normes" },
  order: 35,
  main: "constantes",
  renderOwns: ["source", "url"],
  fields: {
    owner: field.owner("Tenue par"),
    source: field.value<string>("Source"),
    url: optional(field.value<string>("Adresse")),
    constantes: field.constantes(),
  },
  edges: {},

  /** Branchée comme dépendance : ses valeurs, par nom. */
  provide: (self) => Object.fromEntries(entries(self.field("constantes")).map(([k, c]) => [k, c.valeur])),

  render(self) {
    const url = self.field("url")
    const source = self.field("source")
    const head: Inline[] = ["Source : ", typeof source === "string" ? source : "", ...(typeof url === "string" ? [" · ", doc.ident(url)] : [])]
    return [doc.para(...head)]
  },
})

interface NormeInput<C extends Record<string, Constante>> {
  owner: string
  source: string
  url?: string
  constantes: C
}

/** `norme({ … constantes: { introuvable: { valeur: 404, sens: "…" } } })` : le code reçoit `{ introuvable: 404 }`, typé au littéral près. */
export function norme<const C extends Record<string, Constante>>(input: NormeInput<C>): Node<"standard"> & Provides<Valeurs<C>> {
  return kind(input as never) as never
}

export const standardKind = kind
