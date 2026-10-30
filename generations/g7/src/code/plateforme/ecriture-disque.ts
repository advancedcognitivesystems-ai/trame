import { writeFileSync, mkdirSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { EcritureDisque } from "../../plateforme"

const corps: BodyOf<typeof EcritureDisque> = () => ({ writeFileSync, mkdirSync })

export default corps
