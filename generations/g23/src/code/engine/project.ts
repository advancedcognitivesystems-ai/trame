// The configuration of a project: where its kinds and its views are. By default kinds/ and views/ at its root;
// a trame.json can name others, shared between several projects (a common library).

import type { FileReading, Layout, Paths } from "../../architecture"
import type { NodeEncodings } from "../../standards"
import type { ProvidedBy } from "../../../trame/kernel"

export interface ProjectDirs {
  kinds: string[]
  views: string[]
  /** Report the literals of the bodies as points to handle (otherwise they are only listed). */
  literals: boolean
  /** The literal values refused in bodies, unless something declares them: an error each time. */
  refusedLiterals: (string | number)[]
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
      ? (JSON.parse(readFileSync(file, encodings.utf8)) as { kinds?: string[]; views?: string[]; literals?: string; refusedLiterals?: (string | number)[] })
      : {}
    return {
      kinds: (raw.kinds ?? [l.kinds]).map((x) => resolve(root, x)),
      views: (raw.views ?? [l.views]).map((x) => resolve(root, x)),
      literals: raw.literals === "report",
      refusedLiterals: raw.refusedLiterals ?? [],
    }
  }

  return { projectDirs }
}

export type Api = ReturnType<typeof body>
export default body
