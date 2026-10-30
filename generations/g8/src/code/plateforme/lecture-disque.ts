import { readFileSync, existsSync, readdirSync, statSync, watch } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { LectureDisque } from "../../plateforme"

const corps: BodyOf<typeof LectureDisque> = () => ({ readFileSync, existsSync, readdirSync, statSync, watch })

export default corps
