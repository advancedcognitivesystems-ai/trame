// trame.lock: what has been published (merged into the main branch) does not change any more.
// A published declaration is not modified: it is amended. It is not deleted: it is repealed.

import { Origin, Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Hashing, Layout, Paths, Prelude } from "../../architecture"
import type { OutputMessages } from "../../messages"
import type { Compiled, Diag } from "./compiler"
import type { Sequences } from "../../algebra"

export interface Lock {
  published: Record<string, string> // module.name → hash of the declaration
}

export interface Deps {
  layout: Layout
  json: { indentation: number }
  textFile: { endOfLine: string }
  references: { module(ref: string): string }
  hashing: Hashing
  reading: FileReading
  paths: Paths
  prelude: Prelude
  messages: ProvidedBy<typeof OutputMessages>
  sequences: ProvidedBy<typeof Sequences>
}

const body = (deps: Deps) => {
  const { take } = deps.sequences
  const { createHash } = deps.hashing
  const { existsSync, readFileSync } = deps.reading
  const { join } = deps.paths
  const { refOf } = deps.prelude.internal
  const { messages } = deps

  const file = (root: string) => join(root, deps.layout.lock)
  const hashOf = (text: string) => take(createHash("sha256").update(text).digest("hex"), 16)

  function readLock(root: string): Lock {
    if (!existsSync(file(root))) return { published: {} }
    return JSON.parse(readFileSync(file(root), "utf8")) as Lock
  }

  /** What the current code does to the published declarations. */
  function checkLock(c: Compiled, root: string): Diag[] {
    const lock = readLock(root)
    const out: Diag[] = []
    for (const [ref, hash] of Object.entries(lock.published)) {
      const n = c.nodes.find((x) => refOf(x) === ref)
      if (!n) {
        out.push({
          severity: Severity.error,
          origin: Origin.publication,
          module: deps.references.module(ref),
          where: `\`${ref}\``,
          what: messages.publishedRemoved(),
        })
        continue
      }
      const text = c.graph.view(n).decl?.sourceText
      if (text !== undefined && hashOf(text) !== hash) {
        out.push({ severity: Severity.error, origin: Origin.publication, node: n, what: messages.publishedChanged() })
      }
    }
    return out
  }

  /** Publishes: every current declaration becomes immutable. Refused if a published declaration has changed. */
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
    return { added, refused: [], file: file(root), text: JSON.stringify(lock, null, deps.json.indentation) + deps.textFile.endOfLine }
  }

  return { hashOf, readLock, checkLock, publish }
}

export type Api = ReturnType<typeof body>
export default body
