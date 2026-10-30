import type { BodyOf } from "../../../trame/kernel"
import type { HorlogeArretee } from "../../plateforme"

const corps: BodyOf<typeof HorlogeArretee> = ({ jour }) => ({
  maintenant: () => new Date(`${jour}T08:00:00.000Z`),
  aujourdhui: () => jour,
})

export default corps
