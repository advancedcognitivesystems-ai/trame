import { defineKind } from "../trame/kernel"

/** A goal: the reason for everything else. Every node must be connected to one. */
export const goal = defineKind({
  name: "goal",
  label: { one: "Goal", many: "Goals" },
  root: true,
  order: 10,
  fields: {},
  edges: {},
})
