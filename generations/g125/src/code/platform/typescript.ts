import ts from "typescript"
import type { BodyOf } from "../../../trame/kernel"
import type { RealTypeScript } from "../../platform"

const body: BodyOf<typeof RealTypeScript> = () => ts

export default body
