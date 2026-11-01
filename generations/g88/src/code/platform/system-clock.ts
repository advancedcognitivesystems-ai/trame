import type { BodyOf } from "../../../trame/kernel"
import type { SystemClock } from "../../platform"

// Today, as an ISO day: the date part of the current instant (or the day the environment fixes).
const body: BodyOf<typeof SystemClock> = ({ iso, environment, sequences }) => ({
  now: () => new Date(),
  today: () => process.env[environment.today] ?? sequences.take(new Date().toISOString(), iso.dateLength),
})

export default body
