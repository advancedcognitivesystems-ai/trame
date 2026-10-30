import {
  defineKind, field, optional, edge, hole, doc, isHole,
  type AnyNode, type Node, type Provides, type ProvidedBy, type HasDeps, type Provided, type Constante, type Valeurs, type Inline,
} from "../trame/kernel"

/** Un exemple : ce qu'on donne à l'élément, et ce qu'il doit écrire. */
export interface Exemple {
  entree: readonly unknown[]
  sortie: unknown
}

interface Resultat {
  entree: readonly unknown[]
  attendu: unknown
  obtenu?: unknown
  erreur?: string
  tenu: boolean
}

const exemplesDe = (raw: unknown): Exemple[] =>
  Array.isArray(raw) ? raw.filter((e): e is Exemple => !!e && typeof e === "object" && Array.isArray((e as Exemple).entree)) : []

const montrer = (v: unknown) => JSON.stringify(v) ?? String(v)

/**
 * Un élément de syntaxe : une construction d'une norme publiée (un titre CommonMark, une ligne de tableau GFM…).
 * Il déclare ses marques comme des constantes, avec leur sens ; son corps les reçoit et écrit la construction ;
 * ses exemples disent ce qu'il doit écrire, et sont vérifiés à chaque compilation. Il peut en composer d'autres.
 * Sa norme est aussi un paramètre de son corps (« norme ») : les marques communes à plusieurs éléments y sont déclarées.
 */
const kind = defineKind({
  name: "syntax",
  label: { one: "Élément de syntaxe", many: "Éléments de syntaxe" },
  order: 37,
  main: "constantes",
  renderOwns: ["section", "url", "constantes", "exemples"],
  fields: {
    owner: field.owner(),
    section: field.value<string>("Section"),
    url: optional(field.value<string>("Adresse")),
    constantes: field.constantes("Marques"),
    deps: optional(field.deps()),
    ecrire: field.body(),
    exemples: field.value<Exemple[]>("Exemples"),
  },
  edges: {
    norme: edge.one(["standard"], { label: "Défini par", inverse: "Définit" }),
  },

  /** Les exemples, joués sur l'élément branché avec ses marques et ce qu'il compose. */
  async evaluate(self, g): Promise<Resultat[]> {
    const exemples = exemplesDe(self.field("exemples"))
    let ecrire: (...a: unknown[]) => unknown
    try {
      ecrire = (await g.wire([{ name: "ecrire", node: self }], undefined)).ecrire as (...a: unknown[]) => unknown
      if (typeof ecrire !== "function") throw new Error("le corps ne rend pas une fonction")
    } catch (e) {
      return exemples.map((x) => ({ entree: x.entree, attendu: x.sortie, erreur: (e as Error).message, tenu: false }))
    }
    return exemples.map((x) => {
      try {
        const obtenu = ecrire(...x.entree)
        return { entree: x.entree, attendu: x.sortie, obtenu, tenu: montrer(obtenu) === montrer(x.sortie) }
      } catch (e) {
        return { entree: x.entree, attendu: x.sortie, erreur: (e as Error).message, tenu: false }
      }
    })
  },

  status(self) {
    const r = self.result<Resultat[]>()
    if (!r?.length) return "inconnu"
    return r.every((x) => x.tenu) ? "tenu" : "violé"
  },

  holes: (self) =>
    (self.result<Resultat[]>() ?? []).filter((r) => !r.tenu).map((r) =>
      hole.error(`Exemple non tenu : (${r.entree.map(montrer).join(", ")}) doit écrire ${montrer(r.attendu)}, ${r.erreur ? `échoue (${r.erreur})` : `écrit ${montrer(r.obtenu)}`}`)),

  render(self) {
    const section = self.field("section")
    const url = self.field("url")
    const head: Inline[] = ["Section : ", typeof section === "string" && !isHole(section) ? section : "à préciser", ...(typeof url === "string" ? [" · ", doc.ident(url)] : [])]
    const r = self.result<Resultat[]>() ?? []
    const rows = exemplesDe(self.field("exemples")).map((x, i): Inline[][] => {
      const res = r[i]
      const verdict: Inline[] = !res ? ["non joué"] : res.tenu ? ["tenu"] : res.erreur ? ["échoue : ", res.erreur] : ["écrit ", doc.ident(montrer(res.obtenu))]
      return [[doc.ident(x.entree.map(montrer).join(", "))], [doc.ident(montrer(x.sortie))], verdict]
    })
    const brutes = self.field("constantes")
    const marques = Object.entries((brutes && typeof brutes === "object" && !isHole(brutes) ? brutes : {}) as Record<string, Constante>)
      .filter(([, c]) => c && typeof c === "object")
      .map(([k, c]): Inline[][] => [[doc.ident(k)], [doc.ident(typeof c.valeur === "string" && c.valeur.trim() !== c.valeur ? montrer(c.valeur) : String(c.valeur))], [c.sens]])
    return [
      doc.para(...head),
      ...(marques.length ? [doc.table(["Marque", "Valeur", "Sens"], marques)] : []),
      ...(rows.length ? [doc.table(["Entrée", "Écrit", "Vérifié"], rows)] : []),
    ]
  },
})

type Ecrivain = (...args: never[]) => unknown

interface SyntaxeInput<N extends Node<"standard">, C extends Record<string, Constante>, D extends Record<string, AnyNode>, F extends Ecrivain> {
  owner: string
  /** La norme qui définit cette construction. Le corps reçoit aussi ses constantes, sous le nom « norme ». */
  norme: N
  /** Où, dans la norme. */
  section: string
  url?: string
  /** Les marques de la construction : le corps les reçoit en paramètres. */
  constantes: C
  /** Les éléments qu'elle compose. */
  deps?: D
  /** Écrit la construction, à partir de ses marques et de ce qu'elle compose. */
  ecrire: (p: Valeurs<C> & Provided<D> & { norme: ProvidedBy<N> }) => F
  /**
   * Ce qu'elle doit écrire : vérifié à chaque compilation, par le moteur. (TypeScript ne peut pas les typer d'après
   * le corps sans figer F avant de l'avoir lu : ce sont les exemples joués qui font foi.)
   */
  exemples: readonly Exemple[]
}

/** `syntaxe({ norme: CommonMark, constantes: { diese: { valeur: "#", sens: "…" } }, ecrire: ({ diese }) => (…) => …, exemples })` */
export function syntaxe<N extends Node<"standard">, const C extends Record<string, Constante>, F extends Ecrivain, D extends Record<string, AnyNode> = {}>(
  input: SyntaxeInput<N, C, D, F>,
): Node<"syntax"> & Provides<F> & HasDeps<D & { norme: N }> {
  return kind({ ...input, deps: { norme: input.norme, ...(input.deps ?? {}) } } as never) as never
}

export const syntaxKind = kind
