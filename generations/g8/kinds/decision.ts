import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, isHole, fmtUnit, unitOf,
  type Node, type HoleSpec, type Block, type Inline, type View, type Provides,
} from "../trame/kernel"

/** Une décision produit : une valeur, un responsable, ce qu'on a écarté. */
const kind = defineKind({
  name: "decision",
  label: { one: "Décision", many: "Décisions" },
  order: 40,
  main: "value",
  renderOwns: ["value", "range"],
  fields: {
    owner: field.owner("Décidé par"),
    value: field.value("Valeur"),
    review: optional(field.date("Revue prévue", "revue")),
    range: optional(field.range("Plage autorisée")),
    rejected: optional(field.map("Écarté")),
  },
  edges: {
    bounded: optionalEdge(edge.many(["decision"], { label: "Plafonné par", inverse: "Plafonne" })),
  },

  holes(self) {
    const unit = unitOf(self.decl?.typeArgs[0])
    const out: HoleSpec[] = []
    const v = self.field("value")
    const range = self.field("range") as [number, number] | undefined
    const entries: [string | undefined, unknown][] =
      v !== null && typeof v === "object" ? Object.entries(v) : [[undefined, v]]
    for (const [key, x] of entries) {
      if (range && typeof x === "number" && (x < range[0] || x > range[1])) {
        out.push(hole.error(`${fmtUnit(x, unit)}${key ? ` pour ${key}` : ""} sort de la plage de ${fmtUnit(range[0], unit)} à ${fmtUnit(range[1], unit)}`))
      }
    }
    for (const b of self.bounded) {
      const bv = b.field("value")
      if (isHole(bv)) out.push(hole.warning(`Plafond non vérifiable : « ${b.title} » n'est pas décidé`, b.owner))
      else if (typeof v === "number" && typeof bv === "number" && v > bv) {
        out.push(hole.error(`${fmtUnit(v, unit)} dépasse « ${b.title} » (${fmtUnit(bv, unit)})`))
      }
    }
    return out
  },

  /** Branchée comme dépendance : sa valeur en vigueur (lire une valeur à décider lève un trou). */
  provide: (self) => self.value,

  render(self) {
    const typeArg = self.decl?.typeArgs[0]
    const unit = unitOf(typeArg)
    // À côté de chaque valeur : qui l'a redéfinie, ou le fait qu'elle est contestée.
    const amended = new Map<string, View>()
    for (const a of self.amendedBy) for (const p of a.paths) amended.set(p, a.by)
    const contested = (path: string) => self.contested.some((p) => p === path || p === "value")
    const cell = (x: unknown, path: string): Inline[] => {
      if (contested(path)) return [doc.value(x, unit, { contested: true })]
      const by = amended.get(path) ?? amended.get("value")
      return by ? [doc.value(x, unit), " · amendé par ", doc.ref(by)] : [doc.value(x, unit)]
    }
    const out: Block[] = []
    const facts: { label: string; value: Inline[] }[] = []
    const v = self.field("value")
    if (v !== null && typeof v === "object") {
      const keyType = /^Record<\s*(\w+)/.exec(typeArg ?? "")?.[1] ?? "Cas"
      out.push(doc.table([keyType, "Valeur"], Object.entries(v).map(([k, x]) => [[k], cell(x, `value.${k}`)])))
    } else {
      facts.push({ label: "Valeur", value: cell(v, "value") })
    }
    const range = self.field("range")
    if (Array.isArray(range)) facts.push({ label: "Plage autorisée", value: ["de ", doc.value(range[0], unit), " à ", doc.value(range[1], unit)] })
    if (facts.length) out.push(doc.facts(facts))
    return out
  },
})

export type DecisionNode<T> = Node<"decision"> & { readonly value: T; readonly owner: string } & Provides<T>

interface DecisionInput<T> {
  owner: string
  value: T
  review?: string
  range?: [number, number]
  rejected?: Record<string, string>
  bounded?: readonly Node<"decision">[]
}

/** Façade typée : `decision<Percent>({ … })` garde le type de la valeur. */
export const decision = kind as unknown as (<T>(input: DecisionInput<T>) => DecisionNode<T>) & { def: typeof kind.def }
