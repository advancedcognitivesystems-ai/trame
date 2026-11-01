import { defineKind, field, optional, keysOf, KindName } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  // Where the build wires what it evaluates without an environment (the examples of a syntax element or a language, the
  // criteria): when a port has a realization in several environments, the one of this environment answers.
  evaluates: optional(field.value<boolean>(say.environmentEvaluates())),
}

/** The names of an environment's fields: the port reads which environment evaluates. */
export const environmentFields = keysOf(fields)

/**
 * An environment: where code runs (test, a local machine, production). Each port has an implementation there. One of
 * them may be where the build evaluates what needs no environment of its own (examples, criteria).
 */
export const environment = defineKind({
  name: KindName.environment,
  label: { one: say.environmentEnvironment(), many: say.environmentEnvironments() },
  fields,
  edges: {},
})
