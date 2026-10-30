// Le terminal de Node. Une sortie coupée (« | head ») arrête sans bruit ; une promesse oubliée ne fait pas tomber le moteur.

import type { BodyOf } from "../../../trame/kernel"
import type { TerminalNode } from "../../plateforme"

const corps: BodyOf<typeof TerminalNode> = () => {
  process.on("unhandledRejection", (e) => console.error(`avertissement : promesse rejetée sans être attendue (${(e as Error)?.message ?? e})`))
  process.stdout.on("error", (e: NodeJS.ErrnoException) => {
    if (e.code === "EPIPE") process.exit(0)
    throw e
  })
  return {
    args: process.argv.slice(2),
    ecrire: (ligne) => console.log(ligne),
    ecrireBrut: (texte) => void process.stdout.write(texte),
    erreur: (ligne) => console.error(ligne),
    quitter: (code) => process.exit(code),
  }
}

export default corps
