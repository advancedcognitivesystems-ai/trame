import type { BodyOf } from "../../../trame/kernel"
import type { StoppedClock } from "../../platform"

const body: BodyOf<typeof StoppedClock> = ({ day }) => ({
  now: () => new Date(`${day}T08:00:00.000Z`),
  today: () => day,
})

export default body
