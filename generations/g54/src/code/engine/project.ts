// The configuration of a project: where its kinds and its views are, and the libraries it imports. By default kinds/
// and views/ at its root, and no library; a trame.json can name others, shared between several projects.

import type { FileReading, Layout, Paths } from "../../architecture"
import type { NodeEncodings } from "../../standards"
import type { ProvidedBy } from "../../../trame/kernel"

/** A library the project imports: its name in the project's graph, and its root, absolute. */
export interface Library {
  name: string
  root: string
}

export interface ProjectDirs {
  kinds: string[]
  views: string[]
  /** In the order of their names. */
  libraries: Library[]
}

export interface Deps {
  encodings: ProvidedBy<typeof NodeEncodings>
  layout: Layout
  reading: FileReading
  paths: Paths
}

const body = (deps: Deps) => {
  const { encodings } = deps
  const { existsSync, readFileSync } = deps.reading
  const { join, resolve } = deps.paths

  function projectDirs(root: string): ProjectDirs {
    const l = deps.layout
    const file = join(root, l.configuration)
    const raw = existsSync(file)
      ? (JSON.parse(readFileSync(file, encodings.utf8)) as { kinds?: string[]; views?: string[]; libraries?: Record<string, string> })
      : {}
    return {
      kinds: (raw.kinds ?? [l.kinds]).map((x) => resolve(root, x)),
      views: (raw.views ?? [l.views]).map((x) => resolve(root, x)),
      libraries: Object.entries(raw.libraries ?? {})
        .map(([name, path]): Library => ({ name, root: resolve(root, path) }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }
  }

  return { projectDirs }
}

export type Api = ReturnType<typeof body>
export default body
