import type { BodyOf } from "../../../trame/kernel"
import type { MinuteurNode } from "../../plateforme"

const corps: BodyOf<typeof MinuteurNode> = () => ({ setTimeout, clearTimeout })

export default corps
