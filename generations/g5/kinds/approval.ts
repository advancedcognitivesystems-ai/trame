import { defineKind, field, optional, edge, doc } from "../trame/kernel"

/** Une validation : quelqu'un approuve un amendement. Affichée à l'intérieur de l'amendement. */
export const approval = defineKind({
  name: "approval",
  label: { one: "Validation", many: "Validations" },
  order: 75,
  history: true,
  inline: "approves",
  fields: {
    owner: field.owner("Validé par"),
    why: optional(field.text("Motif")),
  },
  edges: {
    approves: edge.one(["amendment"], { label: "Valide", inverse: "Validé par" }),
  },

  render: (self) => [doc.para("Validé par ", doc.person(self.owner), ...(self.why ? [" : ", self.why] : []))],
})
