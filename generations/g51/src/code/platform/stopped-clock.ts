import type { BodyOf } from "../../../trame/kernel"
import type { StoppedClock } from "../../platform"

const body: BodyOf<typeof StoppedClock> = ({ day, time, iso }) => ({
  now: () => new Date(day + iso.timeDesignator + time),
  today: () => day,
})

export default body
