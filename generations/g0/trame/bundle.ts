// Compiler le graphe à plusieurs dates. La compilation tourne dans un processus neuf :
// les modules du produit sont rechargés à neuf, et une compilation qui échoue n'emporte rien.

import { spawn } from "node:child_process"
import { fileURLToPath } from "node:url"
import type { Bundle } from "./ir"

/** Compile à la date du jour, puis à chaque date où le graphe peut changer, dans un seul processus neuf. */
export function makeBundle(root: string, today: string, mode: Bundle["mode"]): Promise<Bundle> {
  const generatedAt = new Date().toISOString()
  return new Promise((resolve) => {
    // Le moteur se relance lui-même, dans le dossier du projet (qui n'est pas forcément celui du moteur).
    const cli = fileURLToPath(new URL("./cli.ts", import.meta.url))
    const child = spawn(process.execPath, ["--import", "tsx", cli, "payload", "--all", "--at", today], { cwd: root, env: process.env })
    let out = ""
    let err = ""
    // Décodé en flux : un caractère sur deux morceaux ne doit pas devenir « � ».
    child.stdout.setEncoding("utf8")
    child.stderr.setEncoding("utf8")
    child.stdout.on("data", (d) => (out += d))
    child.stderr.on("data", (d) => (err += d))
    child.on("close", (code) => {
      if (code !== 0) return resolve({ generatedAt, today, mode, dates: [], error: (err || out).trim() || "la compilation a échoué" })
      try {
        resolve({ generatedAt, today, mode, dates: JSON.parse(out) as Bundle["dates"] })
      } catch (e) {
        resolve({ generatedAt, today, mode, dates: [], error: `sortie illisible : ${(e as Error).message}` })
      }
    })
  })
}
