import { defineKind, field, optional, edge, doc } from "../trame/kernel"

/** An approval: someone approves an amendment. Shown inside the amendment. */
export const approval = defineKind({
  name: "approval",
  label: { one: "Approval", many: "Approvals" },
  order: 75,
  history: true,
  inline: "approves",
  fields: {
    owner: field.owner("Approved by"),
    why: optional(field.text("Reason")),
  },
  edges: {
    approves: edge.one(["amendment"], { label: "Approves", inverse: "Approved by" }),
  },

  render: (self) => [doc.para("Approved by ", doc.person(self.owner), ...(self.why ? [": ", self.why] : []))],
})
