import { build } from "esbuild"
import type { BodyOf } from "../../../trame/kernel"
import type { Esbuild } from "../../plateforme"

const corps: BodyOf<typeof Esbuild> = () => ({ build })

export default corps
