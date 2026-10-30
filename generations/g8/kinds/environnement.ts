import { defineKind, field, optional } from "../trame/kernel"

/** Un environnement : là où le code tourne (test, poste local, production). Chaque accès y a une implémentation. */
export const environnement = defineKind({
  name: "environment",
  label: { one: "Environnement", many: "Environnements" },
  order: 160,
  fields: {
    owner: optional(field.owner()),
  },
  edges: {},
})
