// trame.lock: what has been published (merged into the main branch) does not change any more.
// A published declaration is not modified: it is amended. It is not deleted: it is repealed. Since g108 a publication
// freezes the parts of a declaration its kind says people decide (chosen, cited, stated), not its code.

import { ChangeWay, Origin, PublicationState, Severity } from "../../../trame/kernel"
import type { AnyNode, PartPublication, ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Layout, Paths, Prelude } from "../../architecture"
import type { OutputMessages } from "../../messages"
import type { Compiled, Diag, LockEntry } from "./compiler"
import type { NodeEncodings } from "#std/system"
import type { CodeSpan } from "../../markdown"

export interface Lock {
  /**
   * module.name → the fingerprint of each part of the declaration a publication freezes (since g108); a text: the
   * fingerprint of the whole declaration, published before its parts were.
   */
  published: Record<string, LockEntry>
  /**
   * The declarations published again because their form changed, not their meaning (since g80): when, why, and which.
   * A change of meaning is an amendment's business, or a new node's that repeals the old one.
   */
  migrations?: { at: string; why: string; nodes: string[] }[]
}

export interface Deps {
  encodings: ProvidedBy<typeof NodeEncodings>
  layout: Layout
  json: { indentation: number }
  textFile: { endOfLine: string }
  references: { module(ref: string): string }
  /** Where a removed declaration was: its reference, written as code. */
  codeSpan: ProvidedBy<typeof CodeSpan>
  reading: FileReading
  paths: Paths
  prelude: Prelude
  messages: ProvidedBy<typeof OutputMessages>
}

const body = (deps: Deps) => {
  const { encodings } = deps
  const { existsSync, readFileSync } = deps.reading
  const { join } = deps.paths
  const { refOf } = deps.prelude.internal
  const { messages } = deps

  const file = (root: string) => join(root, deps.layout.lock)
  /** Whether the project has published anything: it has a lock. */
  const exists = (root: string) => existsSync(file(root))

  function readLock(root: string): Lock {
    if (!exists(root)) return { published: {} }
    return JSON.parse(readFileSync(file(root), encodings.utf8)) as Lock
  }

  /** What a changed part asks for, by how it changes: an amendment, one that cites a source, a new statement. */
  const changedPart = (p: PartPublication) =>
    p.way === ChangeWay.stated ? messages.publishedStatedChanged(p.part)
      : p.way === ChangeWay.cited ? messages.publishedCitedChanged(p.part)
        : messages.publishedChanged(p.part)

  /**
   * What the current code does to the published declarations (since g108, part by part): a declaration deleted, a part
   * changed (an amendment, a new node that repeals it), a declaration published before its parts were.
   */
  function checkLock(c: Compiled, root: string): Diag[] {
    const lock = readLock(root)
    const out: Diag[] = []
    for (const ref of Object.keys(lock.published)) {
      if (c.nodes.some((x) => refOf(x) === ref)) continue
      out.push({ severity: Severity.error, origin: Origin.publication, module: deps.references.module(ref), where: deps.codeSpan(ref), what: messages.publishedRemoved() })
    }
    for (const [node, parts] of c.publication ?? []) {
      if (lock.published[refOf(node)] === undefined) continue
      if (parts.some((p) => p.state === PublicationState.outdated)) {
        out.push({ severity: Severity.error, origin: Origin.publication, node, what: messages.publishedOutdated() })
        continue
      }
      for (const p of parts.filter((x) => x.state === PublicationState.changed)) {
        out.push({ severity: Severity.error, origin: Origin.publication, node, what: changedPart(p) })
      }
    }
    return out
  }

  /** The references whose every frozen part is published as it is; nothing when the project has published nothing. */
  function publishedOf(c: Compiled, root: string): Set<string> | undefined {
    if (!exists(root)) return undefined
    return new Set([...(c.publication ?? [])].filter(([, parts]) => parts.every((p) => p.state === PublicationState.published)).map(([n]) => refOf(n)))
  }

  /**
   * Publishes: every part a publication freezes enters trame.lock, by its fingerprint. Refused while a published part has
   * changed. With a migration (why the form changed, not the meaning), only that: the declarations published before
   * their parts were, and the statements whose form changed, are published again; a value changed stays refused.
   */
  function publish(c: Compiled, root: string, migration?: { at: string; why: string }): { added: string[]; migrated: string[]; refused: Diag[]; file?: string; text?: string } {
    const found = checkLock(c, root)
    const states = c.publication ?? new Map()
    // What a migration may publish again: a declaration published before its parts were, a statement reworded.
    const formOnly = (node: AnyNode | undefined) => node !== undefined && (states.get(node) ?? []).every((p: PartPublication) =>
      p.state !== PublicationState.changed || p.way === ChangeWay.stated)
    const refused = found.filter((d) => migration === undefined || !formOnly(d.node))
    if (refused.length) return { added: [], migrated: [], refused }
    const lock = readLock(root)
    const fingerprints = (node: AnyNode) => Object.fromEntries((c.parts?.get(node) ?? []).map((p) => [p.part, p.fingerprint]))
    const migrated: string[] = []
    for (const { node } of found) {
      if (!node) continue
      lock.published[refOf(node)] = fingerprints(node)
      migrated.push(refOf(node))
    }
    if (migration) {
      // A declaration whose kind now freezes nothing leaves the lock: the code holds it.
      for (const ref of Object.keys(lock.published)) {
        const node = c.nodes.find((x) => refOf(x) === ref)
        if (!node || c.parts?.has(node)) continue
        delete lock.published[ref]
        migrated.push(ref)
      }
    }
    if (migration && migrated.length) lock.migrations = [...(lock.migrations ?? []), { ...migration, nodes: migrated }]
    // Published again, nothing else: what is new is published by a publication of its own.
    const added: string[] = []
    for (const [node, parts] of migration ? [] : states) {
      const ref = refOf(node)
      if (lock.published[ref] !== undefined || !parts.length) continue
      lock.published[ref] = fingerprints(node)
      added.push(ref)
    }
    lock.published = Object.fromEntries(Object.entries(lock.published).sort(([a], [b]) => a.localeCompare(b)))
    return { added, migrated, refused: [], file: file(root), text: JSON.stringify(lock, null, deps.json.indentation) + deps.textFile.endOfLine }
  }

  return { exists, readLock, checkLock, publishedOf, publish }
}

export type Api = ReturnType<typeof body>
export default body
