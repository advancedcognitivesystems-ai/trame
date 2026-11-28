import type { BodyOf } from "#trame/kernel"
import type { MachineTimers } from "../../running"

const body: BodyOf<typeof MachineTimers> = () => ({ setTimeout, clearTimeout })

export default body
