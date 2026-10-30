// The configuration of a project: where its kinds and its views are, and the libraries it imports. By default kinds/
// and views/ at its root, and no library; a trame.json can name others, shared between several projects. A library is
// named by its path, or by its path and a version: the version frozen under its releases.

import type { FileReading, Layout, Paths } from "../../architecture"
import type { NodeEncodings } from "#std/system"
import type { ValueTypes } from "#std/algebra"
import type { ProvidedBy } from "../../../trame/kernel"

/** A library the project imports: its name in the project's graph, its root (absolute), and its version if frozen. */
export interface Library {
  name: string
  root: string
  /** Where the library itself is, absolute: its root, unless a version of it is imported. */
  home: string
  version?: string
}

export interface ProjectDirs {
  kinds: string[]
  views: string[]
  /** In the order of their names. */
  libraries: Library[]
  /** What the project calls itself: what the titles of its modules start with. */
  title?: string
}

export interface Deps {
  encodings: ProvidedBy<typeof NodeEncodings>
  values: ProvidedBy<typeof ValueTypes>
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
      ? (JSON.parse(readFileSync(file, encodings.utf8)) as {
          kinds?: string[]; views?: string[]; title?: string; libraries?: Record<string, string | { path: string; version?: string }>
        })
      : {}
    return {
      kinds: (raw.kinds ?? [l.kinds]).map((x) => resolve(root, x)),
      views: (raw.views ?? [l.views]).map((x) => resolve(root, x)),
      libraries: Object.entries(raw.libraries ?? {})
        .map(([name, at]): Library => {
          const { path, version }: { path: string; version?: string } = deps.values.isText(at) ? { path: at } : at
          const home = resolve(root, path)
          return { name, home, version, root: version === undefined ? home : join(home, l.releases, version) }
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
      title: raw.title,
    }
  }

  return { projectDirs }
}

export type Api = ReturnType<typeof body>
export default body
