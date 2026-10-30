import { defineKind } from "../trame/kernel"

/** Un objectif : la raison d'être de tout le reste. Tout nœud doit y être relié. */
export const goal = defineKind({
  name: "goal",
  label: { one: "Objectif", many: "Objectifs" },
  root: true,
  order: 10,
  fields: {},
  edges: {},
})
