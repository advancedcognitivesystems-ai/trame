import { defineKind, field, optional, edge, hole, doc, REMOVE, DateRole, Validity, type AnyNode, type Node, type Resolution } from "../trame/kernel"

/** A repeal: takes a published node out of the graph in force, without erasing it from the code. */
const kind = defineKind({
  name: "repeal",
  label: { one: "Repeal", many: "Repeals" },
  order: 72,
  history: true,
  fields: {
    owner: field.owner("Decided by"),
    why: field.text("Reason"),
    from: optional(field.date("In force from", DateRole.start)),
  },
  edges: {
    repeals: edge.amends({ label: "Repeals", inverse: "Repealed by" }),
  },

  activeAt: (self, g) => !self.from || self.from <= g.today,

  /** The whole node, removed. */
  claims: (self) => [{ target: self.repeals, path: "", value: REMOVE }],

  /** Two repeals of the same node have the same effect: a duplicate, not a conflict. */
  resolve(_target, claims): Resolution {
    const by = [...new Map(claims.map((c) => [c.by.node, c.by])).values()].sort((a, b) => a.ref.localeCompare(b.ref))
    return { kind: "apply", order: by, reason: "duplicate repeals: same effect" }
  },

  holes(self, g) {
    const target = self.repeals
    if (!self.active || !target?.repealedBy) return []
    return g.from(target).in()
      .where((v) => v.node !== self.node && v.kind !== self.kind && v.active && !v.repealedBy)
      .nodes()
      .map((v) => hole.warning(`"${v.title}" still depends on "${target.title}", which is repealed`, v.owner))
  },

  render: (self) => [doc.validity(self.active ? Validity.inForce : Validity.notYet, self.from)],
})

interface RepealMeta {
  owner: string
  why: string
  from?: string
}

/** Repeals a node: it stays in the code and in the history, and leaves the graph in force. */
export function repeal(target: AnyNode, m: RepealMeta): Node<"repeal"> {
  return kind({ repeals: target, ...m })
}

export const repealKind = kind
