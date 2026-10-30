import { defineKind, field, doc, isHole, type Node, type Provides, type ProvidedBy } from "../trame/kernel"

const entries = (raw: unknown): [string, string][] =>
  raw !== null && typeof raw === "object" && !isHole(raw)
    ? Object.entries(raw as Record<string, unknown>).filter((e): e is [string, string] => typeof e[1] === "string")
    : []

/**
 * Un vocabulaire : un ensemble fermé de mots, chacun avec son sens (les effets, les gravités…). Le type de ses mots est
 * leur union : un littéral qui en fait partie est déclaré ; un mot inconnu est une erreur de type.
 */
const kind = defineKind({
  name: "vocabulary",
  label: { one: "Vocabulaire", many: "Vocabulaires" },
  order: 36,
  main: "mots",
  renderOwns: ["mots"],
  fields: {
    owner: field.owner(),
    mots: field.value<Record<string, string>>("Mots"),
  },
  edges: {},

  /** Branché comme dépendance : la liste de ses mots. */
  provide: (self) => entries(self.field("mots")).map(([k]) => k),

  render: (self) => [doc.table(["Mot", "Sens"], entries(self.field("mots")).map(([k, sens]) => [[doc.ident(k)], [sens]]))],
})

/** Les mots d'un vocabulaire, en type : `type Effet = MotDe<typeof Effets>`. */
export type MotDe<N> = ProvidedBy<N> extends readonly (infer M)[] ? M : never

export function vocabulaire<const M extends Record<string, string>>(input: { owner: string; mots: M }): Node<"vocabulary"> & Provides<readonly (keyof M & string)[]> {
  return kind(input as never) as never
}

export const vocabularyKind = kind
