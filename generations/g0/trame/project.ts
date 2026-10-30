// La configuration d'un projet : où sont ses types et ses vues. Par défaut kinds/ et views/ à sa racine ;
// un trame.json peut en désigner d'autres, partagés entre plusieurs projets (une bibliothèque commune).

import { existsSync, readFileSync } from "node:fs"
import { join, resolve } from "node:path"

export interface ProjectDirs {
  kinds: string[]
  views: string[]
}

export function projectDirs(root: string): ProjectDirs {
  const file = join(root, "trame.json")
  const raw = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as { types?: string[]; vues?: string[] }) : {}
  return {
    kinds: (raw.types ?? ["kinds"]).map((d) => resolve(root, d)),
    views: (raw.vues ?? ["views"]).map((d) => resolve(root, d)),
  }
}
