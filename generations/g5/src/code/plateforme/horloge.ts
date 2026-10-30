import type { BodyOf } from "../../../trame/kernel"
import type { HorlogeSysteme } from "../../plateforme"

const corps: BodyOf<typeof HorlogeSysteme> = () => ({
  maintenant: () => new Date(),
  aujourdhui: () => process.env.TRAME_TODAY ?? new Date().toISOString().slice(0, 10),
})

export default corps
