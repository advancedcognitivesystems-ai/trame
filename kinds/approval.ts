import { defineKind, field, optional, edge, doc, keysOf, KindName, ChangeWay } from "../trame/kernel"
import words from "./words"

const say = words()

const edges = {
  approves: edge.one([KindName.amendment], { label: say.approvalApproves(), inverse: say.approvalApprovedBy() }),
}
const E = keysOf(edges)

const fields = {
  owner: field.owner(say.approvalApprovedBy()),
  why: optional(field.text(say.amendmentReason())),
}
const F = keysOf(fields)

/** An approval: someone approves an amendment. Shown inside the amendment. */
export const approval = defineKind({
  name: KindName.approval,
  label: { one: say.approvalApproval(), many: say.approvalApprovals() },
  history: true,
  inline: E.approves,
  fields,
  edges,
  /** An approval is a record (D1): once published, nothing of it changes. */
  changes: { [F.owner]: ChangeWay.stated, [F.why]: ChangeWay.stated, [E.approves]: ChangeWay.stated },

  render: (self) => [doc.para(...say.approvalApprovedByBecause(doc.person(self.owner), self.why))],
})
