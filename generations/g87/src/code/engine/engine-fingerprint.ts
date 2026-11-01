// The fingerprints of an engine, each file with its SHA-256, as a generation keeps them: what its origin says (its
// programs, its graph and its code), and what evidence names it by (its graph and its code, and its libraries'), which
// the advance records beside a generation it freezes; the engine that runs knows its own from where its program is.

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

  /** Each file, with its SHA-256, fingerprinted together. */
  const together = (base: string, files: readonly string[]) =>
    take(hash(JSON.stringify(files.map((f) => [f, existsSync(join(base, f)) ? hash(readFileSync(join(base, f))) : undefined]))), deps.fingerprint)
  /** The graph and the code of the engine under this directory (its prelude and its kinds too), and its libraries' under theirs. */
  const codeFiles = (base: string, libraries: readonly string[]) =>
    [layout.sources, layout.prelude, layout.kinds, ...libraries.map((l) => join(l, layout.sources))].flatMap((d) => filesUnder(join(base, d)).map((f) => join(d, f)))

  /**
   * What a generation's origin says: its programs (the engine's and the page's, as assembled, on the day of their graph)
   * and its graph and code; nothing without a program.
   */
  const of = (base: string, libraries: readonly string[]): string | undefined =>
    existsSync(programIn(base)) ? together(base, [relative(base, programIn(base)), relative(base, pageIn(base)), ...codeFiles(base, libraries)]) : undefined

  /**
   * The engine itself, as evidence names it: its graph and its code, its prelude and its kinds, and its libraries'. Its
   * programs are left out: the
   * same engine assembled on another day says another day in their first line.
   */
  const codeOf = (base: string, libraries: readonly string[]): string => together(base, codeFiles(base, libraries))

  /** What a generation records of its engine, when it does (from g72). */
  const recorded = (base: string): string | undefined => {
    const file = join(base, layout.engine)
    if (!existsSync(file)) return undefined
    const { fingerprint } = JSON.parse(String(readFileSync(file, encodings.utf8))) as { fingerprint?: unknown }
    return deps.values.isText(fingerprint) ? fingerprint : undefined
  }

  /**
   * The fingerprint of the engine whose root is here: what its generation records, or, for a candidate in its
   * repository, its graph and code and those of the libraries the repository imports, as they are; nothing otherwise.
   */
  const identityOf = (base: string): string | undefined => {
    const kept = recorded(base)
    if (kept !== undefined || !existsSync(join(base, layout.configuration))) return kept
    return codeOf(base, deps.project.projectDirs(base).libraries.map((lib) => relative(base, lib.root)))
  }

  return {
    programIn,
    pageIn,
    of,
    codeOf,
    recorded,
    /**
     * The fingerprint of the engine a program belongs to: what its generation records, or, for a candidate run in its
     * repository, its graph and code and those of the libraries the repository imports, as they are; nothing otherwise.
     */
    identity: (program: string): string | undefined => identityOf(dirname(dirname(dirname(program)))),
    identityOf,
    /** The record a generation keeps of its engine. */
    record: (fingerprint: string): string => JSON.stringify({ fingerprint }, undefined, deps.json.indentation),
  }
}

export type Api = ReturnType<typeof body>
export default body
