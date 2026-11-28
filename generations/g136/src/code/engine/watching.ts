// Watching a project: each file its build reads that changes, from its root (its sources, its kinds and views, its
// evidence, its lock), what an editor leaves aside. trame dev follows it; the engine's API gives it (since g136).

import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Layout, Paths } from "../../architecture"
import type { Api as ProjectApi } from "./project"
import type { EditorLeftovers } from "../../engine"
import type { Texts } from "#std/algebra"

export interface Deps {
  reading: FileReading
  paths: Paths
  layout: Layout
  project: ProjectApi
  leftovers: ProvidedBy<typeof EditorLeftovers>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { watch, existsSync } = deps.reading
  const { join, relative } = deps.paths
  const { optional } = deps.texts

  /** Calls `changed` with each file the build of the project at `root` reads that changes, from its root. */
  function watchProject(root: string, changed: (path: string) => void): void {
    const told = (path: string) => {
      if (!deps.leftovers.endings.some((ending) => path.endsWith(ending))) changed(path)
    }
    const { layout } = deps
    const dirs = deps.project.projectDirs(root)
    for (const abs of [join(root, layout.sources), ...dirs.kinds, ...dirs.views, join(root, layout.evidence)]) {
      const dir = relative(root, abs)
      if (existsSync(abs)) watch(abs, { recursive: true }, (_e, f) => told(join(dir, optional(f))))
    }
    if (existsSync(join(root, layout.lock))) watch(join(root, layout.lock), () => told(layout.lock))
  }

  return { watch: watchProject }
}

export type Api = ReturnType<typeof body>
export default body
