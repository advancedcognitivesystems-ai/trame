import { join, resolve, relative, dirname, basename } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { CheminsNode } from "../../plateforme"

const corps: BodyOf<typeof CheminsNode> = () => ({ join, resolve, relative, dirname, basename })

export default corps
