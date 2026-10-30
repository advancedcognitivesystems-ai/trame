import { createServer } from "node:http"
import type { BodyOf } from "../../../trame/kernel"
import type { HttpNode } from "../../plateforme"

const corps: BodyOf<typeof HttpNode> = () => ({ createServer })

export default corps
