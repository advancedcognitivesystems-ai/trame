// Results kept in the process: one map for the whole process, whatever the number of sessions that wire it. It is made
// when this file is first imported, and goes with the process.

import type { BodyOf } from "../../../trame/kernel"
import type { ResultsInTheProcess } from "../../platform"

const kept = new Map<string, unknown>()

const body: BodyOf<typeof ResultsInTheProcess> = () => ({
  get: (key) => kept.get(key),
  set: (key, value) => void kept.set(key, value),
})

export default body
