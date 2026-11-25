import { writeFileSync, mkdirSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { DiskWriting } from "../../platform"

const body: BodyOf<typeof DiskWriting> = () => ({ writeFileSync, mkdirSync })

export default body
