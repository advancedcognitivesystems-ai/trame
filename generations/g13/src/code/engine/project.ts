// The configuration of a project: where its kinds and its views are. By default kinds/ and views/ at its root;
// a trame.json can name others, shared between several projects (a common library).

import type { FileReading, Layout, Paths } from "../../architecture"

export interface ProjectDirs {
  kinds: string[]
  views: string[]
  /** Report the literals of the bodies as points to handle (otherwise they are only listed). */
  literals: boolean
}

export interface Deps {
  layout: Layout
  reading: FileReading
  paths: Paths
}

const body = (deps: Deps) => {
  const { existsSync, readFileSync } = deps.reading
  const { join, resolve } = deps.paths

  function projectDirs(root: string): ProjectDirs {
    const l = deps.layout
    const file = join(root, l.configuration)
    const raw = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as { kinds?: string[]; views?: string[]; literals?: string }) : {}
    return {
      kinds: (raw.kinds ?? [l.kinds]).map((x) => resolve(root, x)),
      views: (raw.views ?? [l.views]).map((x) => resolve(root, x)),
      literals: raw.literals === "report",
    }
  }

  return { projectDirs }
}

export type Api = ReturnType<typeof body>
export default body
