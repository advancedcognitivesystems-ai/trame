import { createHash } from "node:crypto"
import type { BodyOf } from "../../../trame/kernel"
import type { EmpreinteNode } from "../../plateforme"

const corps: BodyOf<typeof EmpreinteNode> = () => ({ createHash })

export default corps
