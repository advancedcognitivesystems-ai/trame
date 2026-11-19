import { defineKind, field, optional, hole, keysOf, KindName, ChangeWay } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  /** Who answers for it: the person told what serves it and what does not (since A6, 31 October). */
  owner: optional(field.owner()),
}
const F = keysOf(fields)

/**
 * A goal: the reason for everything else. Every node must be connected to one. Its owner answers for it; a goal that
 * names none is warned, until every project names one.
 */
export const goal = defineKind({
  name: KindName.goal,
  label: { one: say.goalGoal(), many: say.goalGoals() },
  root: true,
  fields,
  edges: {},
  /** What a goal says is stated: once published, a new goal that repeals it says another (D1). */
  statement: ChangeWay.stated,

  holes: (self) => [self.field(F.owner) === undefined && hole.warning(say.ownerMissing())],
})
