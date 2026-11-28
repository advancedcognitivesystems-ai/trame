import type { BodyOf } from "#trame/kernel"
import type { MachineClock } from "../../running"

const body: BodyOf<typeof MachineClock> = () => ({ now: () => new Date() })

export default body
