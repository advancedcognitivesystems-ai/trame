import { createHash } from "node:crypto"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeHashing } from "../../platform"

const body: BodyOf<typeof NodeHashing> = () => ({ createHash })

export default body
