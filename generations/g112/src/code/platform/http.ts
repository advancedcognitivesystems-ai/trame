import { createServer } from "node:http"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeHttpServer } from "../../platform"

const body: BodyOf<typeof NodeHttpServer> = () => ({ createServer })

export default body
