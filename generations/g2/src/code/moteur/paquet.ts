// Compiler le graphe à plusieurs dates. La compilation tourne dans un processus neuf :
// les modules du produit sont rechargés à neuf, et une compilation qui échoue n'emporte rien.

import type { Horloge, Processus } from "../../architecture"
import type { Bundle } from "../../../trame/kernel"

export interface Deps {
  horloge: Horloge
  processus: Processus
}

const corps = (deps: Deps) => {
  const { relancer } = deps.processus
  const { horloge } = deps

  /** Compile à la date du jour, puis à chaque date où le graphe peut changer, dans un seul processus neuf. */
  function makeBundle(root: string, today: string, mode: Bundle["mode"]): Promise<Bundle> {
    const generatedAt = horloge.maintenant().toISOString()
    return new Promise((resolve) => {
      // Le moteur se relance lui-même, dans le dossier du projet (qui n'est pas forcément celui du moteur).
      const child = relancer(["payload", "--all", "--at", today], root)
      let out = ""
      let err = ""
      // Décodé en flux : un caractère sur deux morceaux ne doit pas devenir « � ».
      child.stdout!.setEncoding("utf8")
      child.stderr!.setEncoding("utf8")
      child.stdout!.on("data", (d: string) => (out += d))
      child.stderr!.on("data", (d: string) => (err += d))
      child.on("close", (code: number | null) => {
        if (code !== 0) return resolve({ generatedAt, today, mode, dates: [], error: (err || out).trim() || "la compilation a échoué" })
        try {
          resolve({ generatedAt, today, mode, dates: JSON.parse(out) as Bundle["dates"] })
        } catch (e) {
          resolve({ generatedAt, today, mode, dates: [], error: `sortie illisible : ${(e as Error).message}` })
        }
      })
    })
  }

  return { makeBundle }
}

export type Api = ReturnType<typeof corps>
export default corps
