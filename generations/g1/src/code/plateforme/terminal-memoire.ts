import type { BodyOf } from "../../../trame/kernel"
import type { TerminalMemoire } from "../../plateforme"

const corps: BodyOf<typeof TerminalMemoire> = () => {
  const lignes: string[] = []
  return {
    args: [],
    ecrire: (ligne) => void lignes.push(ligne),
    ecrireBrut: (texte) => void lignes.push(texte),
    erreur: (ligne) => void lignes.push(ligne),
    quitter: (code) => {
      throw new Error(`le moteur a quitté avec le code ${code} : ${lignes.slice(-3).join(" | ")}`)
    },
    lignes: () => [...lignes],
  }
}

export default corps
