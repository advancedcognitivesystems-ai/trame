import { defineKind, field, optional, KindName } from "../trame/kernel"
import words from "./words"

const say = words()

/** An environment: where code runs (test, a local machine, production). Each port has an implementation there. */
export const environment = defineKind({
  name: KindName.environment,
  label: { one: say.environmentEnvironment(), many: say.environmentEnvironments() },
  fields: {
    owner: optional(field.owner()),
  },
  edges: {},
})
