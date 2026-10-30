// La configuration d'un projet : où sont ses types et ses vues. Par défaut kinds/ et views/ à sa racine ;
// un trame.json peut en désigner d'autres, partagés entre plusieurs projets (une bibliothèque commune).

import type { Chemins, Disposition, LectureFichiers } from "../../architecture"

export interface ProjectDirs {
  kinds: string[]
  views: string[]
  /** Signaler les littéraux des corps comme des points à traiter (sinon, ils sont seulement relevés). */
  literals: boolean
}

export interface Deps {
  disposition: Disposition
  lecture: LectureFichiers
  chemins: Chemins
}

const corps = (deps: Deps) => {
  const { existsSync, readFileSync } = deps.lecture
  const { join, resolve } = deps.chemins

  function projectDirs(root: string): ProjectDirs {
    const d = deps.disposition
    const file = join(root, d.configuration)
    const raw = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as { types?: string[]; vues?: string[]; litteraux?: string }) : {}
    return {
      kinds: (raw.types ?? [d.types]).map((x) => resolve(root, x)),
      views: (raw.vues ?? [d.vues]).map((x) => resolve(root, x)),
      literals: raw.litteraux === "signaler",
    }
  }

  return { projectDirs }
}

export type Api = ReturnType<typeof corps>
export default corps
