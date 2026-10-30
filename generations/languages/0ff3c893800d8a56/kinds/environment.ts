import { defineKind, field, optional, KindName } from "../trame/kernel"

/** An environment: where code runs (test, a local machine, production). Each port has an implementation there. */
export const environment = defineKind({
  name: KindName.environment,
  label: { one: "Environment", many: "Environments" },
  order: 160,
  fields: {
    owner: optional(field.owner()),
  },
  edges: {},
})
