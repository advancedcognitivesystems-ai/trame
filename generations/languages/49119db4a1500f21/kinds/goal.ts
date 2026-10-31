import { defineKind, KindName } from "../trame/kernel"
import words from "./words"

const say = words()

/** A goal: the reason for everything else. Every node must be connected to one. */
export const goal = defineKind({
  name: KindName.goal,
  label: { one: say.goalGoal(), many: say.goalGoals() },
  root: true,
  fields: {},
  edges: {},
})
