import type { BodyOf } from "../../../trame/kernel"
import type { SystemClock } from "../../platform"

const body: BodyOf<typeof SystemClock> = () => ({
  now: () => new Date(),
  today: () => process.env.TRAME_TODAY ?? new Date().toISOString().slice(0, 10),
})

export default body
