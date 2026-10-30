import { build } from "esbuild"
import type { BodyOf } from "../../../trame/kernel"
import type { Esbuild } from "../../platform"

const body: BodyOf<typeof Esbuild> = () => ({ build })

export default body
