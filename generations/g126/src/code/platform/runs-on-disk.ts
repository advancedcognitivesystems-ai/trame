// Runs kept on disk, beyond the process: under the project's library links, one directory per engine (the fingerprint of
// the engine this code belongs to, found from where it is), one file per run, written once and read back as it was. The
// oldest files go once there are more than the scope keeps; an engine that cannot say what it is keeps nothing on disk.
// A project that lies in the sources of another (one a library's scenarios compile, in the library and in a copy of its
// version, since g126) keeps its runs beside that other: nothing is written into sources.

import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs"
import { dirname, join, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { RunsOnDisk } from "../../platform"

const body: BodyOf<typeof RunsOnDisk> = ({ layout, files, engines, scope, encodings }) => {
  const engine = engines.identityOf(fileURLToPath(new URL(files.root, import.meta.url)))
  const memory = new Map<string, Map<string, unknown>>()
  const pruned = new Set<string>()

  /** Keeps the newest files only, across the engines: the others go. */
  const prune = (base: string) => {
    if (pruned.has(base) || !existsSync(base)) return
    pruned.add(base)
    const all = readdirSync(base).flatMap((e) => readdirSync(join(base, e)).map((f) => join(base, e, f)))
    const newest = all.map((f) => ({ f, at: statSync(f).mtimeMs })).sort((a, b) => b.at - a.at)
    for (const { f } of newest.slice(scope.kept)) rmSync(f, { force: true })
  }

  /** Where a project's runs are kept: beside it, or beside the project in whose sources it lies. */
  const keepers = new Map<string, string>()
  const keeper = (root: string): string => {
    const known = keepers.get(root)
    if (known !== undefined) return known
    let found = root
    for (let up = dirname(root), at = root; up !== at; at = up, up = dirname(up)) {
      if (!existsSync(join(up, layout.configuration))) continue
      found = relative(up, root).split(sep).includes(layout.sources) ? keeper(up) : root
      break
    }
    keepers.set(root, found)
    return found
  }

  return {
    at(root) {
      const base = join(keeper(root), layout.libraryLinks, layout.runs)
      const dir = engine === undefined ? undefined : join(base, engine)
      const known = memory.get(root) ?? new Map<string, unknown>()
      memory.set(root, known)
      prune(base)
      const fileOf = (key: string) => (dir === undefined ? undefined : join(dir, key + layout.runExtension))
      return {
        get(key) {
          if (known.has(key)) return known.get(key)
          const file = fileOf(key)
          if (file === undefined || !existsSync(file)) return undefined
          const value: unknown = JSON.parse(readFileSync(file, encodings.utf8))
          known.set(key, value)
          return value
        },
        set(key, value) {
          known.set(key, value)
          const file = fileOf(key)
          if (file === undefined || dir === undefined) return
          mkdirSync(dir, { recursive: true })
          writeFileSync(file, JSON.stringify(value))
        },
      }
    },
  }
}

export default body
