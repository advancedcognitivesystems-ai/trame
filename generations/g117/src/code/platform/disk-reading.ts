import { readFileSync, existsSync, readdirSync, statSync, watch, realpathSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { DiskReading } from "../../platform"

const body: BodyOf<typeof DiskReading> = () => ({ readFileSync, existsSync, readdirSync, statSync, watch, realpathSync })

export default body
