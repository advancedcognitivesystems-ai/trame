import { defineKind, field, optional, edge, hole, doc, REMOVE, type AnyNode, type Node, type Resolution } from "../trame/kernel"

/** Une abrogation : retire un nœud publié du graphe en vigueur, sans l'effacer du code. */
const kind = defineKind({
  name: "repeal",
  label: { one: "Abrogation", many: "Abrogations" },
  order: 72,
  history: true,
  fields: {
    owner: field.owner("Décidé par"),
    why: field.text("Motif"),
    from: optional(field.date("En vigueur à partir du", "début")),
  },
  edges: {
    repeals: edge.amends({ label: "Abroge", inverse: "Abrogé par" }),
  },

  activeAt: (self, g) => !self.from || self.from <= g.today,

  /** Le nœud entier, retiré. */
  claims: (self) => [{ target: self.repeals, path: "", value: REMOVE }],

  /** Deux abrogations du même nœud ont le même effet : un doublon, pas un conflit. */
  resolve(_target, claims): Resolution {
    const by = [...new Map(claims.map((c) => [c.by.node, c.by])).values()].sort((a, b) => a.ref.localeCompare(b.ref))
    return { kind: "apply", order: by, reason: "abrogations en double : même effet" }
  },

  holes(self, g) {
    const target = self.repeals
    if (!self.active || !target?.repealedBy) return []
    return g.from(target).in()
      .where((v) => v.node !== self.node && v.kind !== self.kind && v.active && !v.repealedBy)
      .nodes()
      .map((v) => hole.warning(`« ${v.title} » dépend encore de « ${target.title} », abrogé`, v.owner))
  },

  render: (self) => [doc.validity(self.active ? "en vigueur" : "pas encore en vigueur", self.from)],
})

interface RepealMeta {
  owner: string
  why: string
  from?: string
}

/** Abroge un nœud : il reste dans le code et dans l'historique, il sort du graphe en vigueur. */
export function repeal(target: AnyNode, m: RepealMeta): Node<"repeal"> {
  return kind({ repeals: target, ...m })
}

export const repealKind = kind
