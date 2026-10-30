import ts from "typescript"
import type { BodyOf } from "../../../trame/kernel"
import type { TypeScriptReel } from "../../plateforme"

const corps: BodyOf<typeof TypeScriptReel> = () => ts

export default corps
