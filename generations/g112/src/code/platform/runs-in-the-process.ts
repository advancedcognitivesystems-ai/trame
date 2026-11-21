// Runs kept in the process: one map for the whole process, by the key that already tells the projects and the states of
// their files apart; they go with the process.

import type { BodyOf } from "../../../trame/kernel"
import type { RunsInTheProcess } from "../../platform"

const kept = new Map<string, unknown>()

const body: BodyOf<typeof RunsInTheProcess> = () => ({
  at: () => ({ get: (key) => kept.get(key), set: (key, value) => void kept.set(key, value) }),
})

export default body
