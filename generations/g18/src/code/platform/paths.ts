import { join, resolve, relative, dirname, basename } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { NodePaths } from "../../platform"

const body: BodyOf<typeof NodePaths> = () => ({ join, resolve, relative, dirname, basename })

export default body
