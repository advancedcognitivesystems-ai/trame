import type { BodyOf } from "../../../trame/kernel"
import type { EcritureMemoire } from "../../plateforme"

const corps: BodyOf<typeof EcritureMemoire> = () => {
  const fichiers = new Map<string, string>()
  return {
    writeFileSync: ((chemin: unknown, contenu: unknown) => void fichiers.set(String(chemin), String(contenu))) as never,
    mkdirSync: (() => undefined) as never,
    fichiers: () => fichiers,
  }
}

export default corps
