import { createServer } from "node:http"
import type { BodyOf } from "#trame/kernel"
import type { NodeHttpServing } from "../../running"

const body: BodyOf<typeof NodeHttpServing> = () => ({ createServer })

export default body
