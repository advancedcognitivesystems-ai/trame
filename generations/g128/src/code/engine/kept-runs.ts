// The runs kept for a project: under the fingerprint of what each run ran and of the files the project reads as they
// are (every file under its root, its libraries, its kinds, its views and their prelude, but the directories the scope
// skips and what the compiler leaves out: the files the code of its nodes covers, which the fingerprint of what each run
// ran already tells apart, and what the project writes itself). Where they are kept is another port: in the process, or
// on disk beyond it.

import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Hashing, KeptRuns, Paths, RunStore } from "../../architecture"
import type { Sha256 } from "#std/algorithms"
import type { NodeEncodings } from "#std/system"

export interface Deps {
  reading: FileReading
  paths: Paths
  hashing: Hashing
  sha256: ProvidedBy<typeof Sha256>
  encodings: ProvidedBy<typeof NodeEncodings>
  /** The directories never read for the state of a project, by name. */
  scope: { skipped: readonly string[] }
  store: RunStore
}

const body = (deps: Deps): KeptRuns => {
  const { join, relative } = deps.paths
  const { existsSync, readFileSync, readdirSync, statSync } = deps.reading
  const skipped = new Set(deps.scope.skipped)
  const hash = (data: string | Buffer) => deps.hashing.createHash(deps.sha256.algorithm).update(data).digest(deps.encodings.hex)

  /**
   * The digest of each file read, with its size and the time it was changed when the file system says them: read and
   * hashed again only once one of them changed (a file system that does not say them, in memory, is read each time).
   */
  const digests = new Map<string, { size: number; changed: number; digest: string }>()
  const digestOf = (file: string): string => {
    const { size, mtimeMs: changed } = statSync(file) as { size?: number; mtimeMs?: number }
    const known = digests.get(file)
    if (known && known.size === size && known.changed === changed) return known.digest
    const digest = hash(readFileSync(file))
    if (size !== undefined && changed !== undefined) digests.set(file, { size, changed, digest })
    return digest
  }

  /** Every file under a directory, by its path, but the directories skipped and what is left out (files or directories). */
  const filesUnder = (dir: string, left: ReadonlySet<string>): string[] =>
    !existsSync(dir) ? [] : readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const path = join(dir, entry.name)
      if (skipped.has(entry.name) || left.has(path)) return []
      if (entry.isDirectory()) return filesUnder(path, left)
      return entry.isFile() ? [path] : []
    })

  return {
    open(root, read, left, instead = new Map()) {
      const files = [...new Set(read.flatMap((dir) => filesUnder(dir, left)))].sort()
      const besides = [...instead].sort(([a], [b]) => a.localeCompare(b)).map(([name, text]) => [name, hash(text)])
      const state = hash(JSON.stringify([...files.map((file) => [relative(root, file), digestOf(file)]), ...besides]))
      const kept = deps.store.at(root)
      const keyOf = (key: string) => hash(state + key)
      return { get: (key) => kept.get(keyOf(key)), set: (key, value) => kept.set(keyOf(key), value) }
    },
  }
}

export default body
