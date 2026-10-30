import { defineKind, field, optional, edge, doc } from "../trame/kernel"
import words from "./words"

const say = words()

/** An approval: someone approves an amendment. Shown inside the amendment. */
export const approval = defineKind({
  name: "approval",
  label: { one: say.approvalApproval(), many: say.approvalApprovals() },
  order: 75,
  history: true,
  inline: "approves",
  fields: {
    owner: field.owner(say.approvalApprovedBy()),
    why: optional(field.text(say.amendmentReason())),
  },
  edges: {
    approves: edge.one(["amendment"], { label: say.approvalApproves(), inverse: say.approvalApprovedBy() }),
  },

  render: (self) => [doc.para(say.approvalApprovedBy2(), doc.person(self.owner), ...(self.why ? [": ", self.why] : []))],
})
