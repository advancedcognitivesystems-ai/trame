// trame.lock : ce qui a été publié (fusionné dans la branche principale) ne change plus.
// On ne modifie pas une déclaration publiée : on l'amende. On ne la supprime pas : on l'abroge.

import type { Chemins, Disposition, Empreinte, LectureFichiers, Prelude } from "../../architecture"
import type { Compiled, Diag } from "./compilateur"

export interface Lock {
  published: Record<string, string> // module.nom → empreinte de la déclaration
}

export interface Deps {
  disposition: Disposition
  empreinte: Empreinte
  lecture: LectureFichiers
  chemins: Chemins
  prelude: Prelude
}

const corps = (deps: Deps) => {
  const { createHash } = deps.empreinte
  const { existsSync, readFileSync } = deps.lecture
  const { join } = deps.chemins
  const { refOf } = deps.prelude.interne

  const file = (root: string) => join(root, deps.disposition.verrou)
  const hashOf = (text: string) => createHash("sha256").update(text).digest("hex").slice(0, 16)

  function readLock(root: string): Lock {
    if (!existsSync(file(root))) return { published: {} }
    return JSON.parse(readFileSync(file(root), "utf8")) as Lock
  }

  /** Ce que le code actuel fait aux déclarations publiées. */
  function checkLock(c: Compiled, root: string): Diag[] {
    const lock = readLock(root)
    const out: Diag[] = []
    for (const [ref, hash] of Object.entries(lock.published)) {
      const n = c.nodes.find((x) => refOf(x) === ref)
      if (!n) {
        out.push({
          severity: "erreur",
          origin: "publication",
          module: ref.split(".")[0],
          where: `\`${ref}\``,
          what: "Élément publié supprimé : abrogez-le au lieu de le retirer du code",
        })
        continue
      }
      const text = c.graph.view(n).decl?.sourceText
      if (text !== undefined && hashOf(text) !== hash) {
        out.push({ severity: "erreur", origin: "publication", node: n, what: "Modifié après publication : créez un amendement au lieu de changer la déclaration" })
      }
    }
    return out
  }

  /** Publie : toutes les déclarations actuelles deviennent immuables. Refusé si une déclaration publiée a changé. */
  function publish(c: Compiled, root: string): { added: string[]; refused: Diag[]; file?: string; text?: string } {
    const refused = checkLock(c, root)
    if (refused.length) return { added: [], refused }
    const lock = readLock(root)
    const added: string[] = []
    for (const n of c.nodes) {
      const ref = refOf(n)
      const text = c.graph.view(n).decl?.sourceText
      if (text === undefined || lock.published[ref]) continue
      lock.published[ref] = hashOf(text)
      added.push(ref)
    }
    lock.published = Object.fromEntries(Object.entries(lock.published).sort(([a], [b]) => a.localeCompare(b)))
    return { added, refused: [], file: file(root), text: JSON.stringify(lock, null, 2) + "\n" }
  }

  return { hashOf, readLock, checkLock, publish }
}

export type Api = ReturnType<typeof corps>
export default corps
