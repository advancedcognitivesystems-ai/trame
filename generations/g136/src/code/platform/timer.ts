import type { BodyOf } from "../../../trame/kernel"
import type { NodeTimer } from "../../platform"

const body: BodyOf<typeof NodeTimer> = () => ({ setTimeout, clearTimeout })

export default body
