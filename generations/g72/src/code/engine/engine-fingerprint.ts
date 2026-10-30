// The fingerprint of an engine: its program and the page's, its graph and its code, and its libraries', each file with
// its SHA-256, as a generation keeps them. The advance records it beside a generation it freezes; the engine that runs
// knows its own from where its program is: a generation's record, or, for a candidate, the files of its repository.

import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Hashing, Layout, Paths } from "../../architecture"
import type { NodeEncodings } from "#std/system"
import type { Sha256 } from "#std/algorithms"
import type { Sequences, Texts, ValueTypes } from "#std/algebra"
import type { Api as ProjectApi } from "./project"

export interface Deps {
  layout: Layout
  /** The components the engine is made of, and the environments they are assembled for. */
  advancement: { component: string; environment: string; page: { component: string; environment: string } }
  /** The language of the engine's programs: the extension of their files. */
  language: { extensions: readonly string[] }
  project: ProjectApi
  reading: FileReading
  paths: Paths
  hashing: Hashing
  sha256: ProvidedBy<typeof Sha256>
  encodings: ProvidedBy<typeof NodeEncodings>
  /** How many characters of the hash a fingerprint keeps. */
  fingerprint: number
  json: { indentation: number }
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  values: ProvidedBy<typeof ValueTypes>
}

const body = (deps: Deps) => {
  const { layout, advancement, hashing, sha256, encodings } = deps
  const { join, relative, dirname } = deps.paths
  const { existsSync, readFileSync, readdirSync, statSync } = deps.reading
  const { head, take } = deps.sequences
  const { lowerWords, optional } = deps.texts

  /** A component's program under a directory, as the assembly names it. */
  const programOf = (component: string, environment: string) => (base: string) =>
    join(base, layout.output, lowerWords(environment, layout.wordJoint), lowerWords(component, layout.wordJoint) + optional(head(deps.language.extensions)))
  const programIn = programOf(advancement.component, advancement.environment)
  const pageIn = programOf(advancement.page.component, advancement.page.environment)
  const hash = (data: string | Buffer) => hashing.createHash(sha256.algorithm).update(data).digest(encodings.hex)
  /** Every file under a directory, relative to it, in the order of their names. */
  const filesUnder = (dir: string): string[] => existsSync(dir)
    ? (readdirSync(dir, { recursive: true }) as string[]).filter((f) => statSync(join(dir, f)).isFile()).sort()
    : []

  /** The fingerprint of the engine under this directory, its libraries' code under theirs; nothing without a program. */
  const of = (base: string, libraries: readonly string[]): string | undefined => {
    if (!existsSync(programIn(base))) return undefined
    const files = [
      relative(base, programIn(base)), relative(base, pageIn(base)),
      ...[layout.sources, ...libraries.map((l) => join(l, layout.sources))].flatMap((d) => filesUnder(join(base, d)).map((f) => join(d, f))),
    ]
    return take(hash(JSON.stringify(files.map((f) => [f, existsSync(join(base, f)) ? hash(readFileSync(join(base, f))) : undefined]))), deps.fingerprint)
  }

  /** What a generation records of its engine, when it does (from g72). */
  const recorded = (base: string): string | undefined => {
    const file = join(base, layout.engine)
    if (!existsSync(file)) return undefined
    const { fingerprint } = JSON.parse(String(readFileSync(file, encodings.utf8))) as { fingerprint?: unknown }
    return deps.values.isText(fingerprint) ? fingerprint : undefined
  }

  return {
    programIn,
    pageIn,
    of,
    recorded,
    /**
     * The fingerprint of the engine a program belongs to: what its generation records, or, for a candidate run in its
     * repository, its files and those of the libraries the repository imports as they are; nothing otherwise.
     */
    identity(program: string): string | undefined {
      const base = dirname(dirname(dirname(program)))
      const kept = recorded(base)
      if (kept !== undefined || !existsSync(join(base, layout.configuration))) return kept
      return of(base, deps.project.projectDirs(base).libraries.map((lib) => relative(base, lib.root)))
    },
    /** The record a generation keeps of its engine. */
    record: (fingerprint: string): string => JSON.stringify({ fingerprint }, undefined, deps.json.indentation),
  }
}

export type Api = ReturnType<typeof body>
export default body
