// What trame ship and trame evidence share: the fingerprint of an artefact on disk, the fingerprint a check holds for,
// and the evidence added to the file already there (which the commands write: only a command writes).

import type { Evidence, ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Hashing, Layout, Paths } from "../../architecture"
import type { Sha256 } from "#std/algorithms"
import type { NodeEncodings } from "#std/system"
import type { Api as FingerprintsApi } from "../engine/fingerprints"

/** A piece of evidence, with the node it is on, as the evidence files keep it. */
export type Entry = Evidence & { node: string }

export interface Deps {
  layout: Layout
  records: { evidence: string; dossiers: string }
  reading: FileReading
  paths: Paths
  hashing: Hashing
  sha256: ProvidedBy<typeof Sha256>
  encodings: ProvidedBy<typeof NodeEncodings>
  json: { indentation: number }
  fingerprints: FingerprintsApi
}

const body = (deps: Deps) => {
  const { layout, records, reading, encodings } = deps
  const { join } = deps.paths
  const hash = (data: string | Buffer) => deps.hashing.createHash(deps.sha256.algorithm).update(data).digest(encodings.hex)
  const text = (value: unknown) => JSON.stringify(value, undefined, deps.json.indentation)
  /** Two pieces of evidence that say the same thing on the same day: the later one replaces the other. */
  const same = (a: Entry, b: Entry) =>
    a.node === b.node && a.source === b.source && a.at === b.at && a.subject === b.subject && a.language === b.language

  return {
    /** The file of the SDLC's evidence. */
    file: (root: string) => join(root, layout.evidence, records.evidence + layout.evidenceExtension),

    /** Where a shipment's dossier is written, for a day. */
    dossier: (root: string, shipment: string, at: string) =>
      join(root, layout.evidence, records.dossiers, shipment + layout.wordJoint + at + layout.evidenceExtension),

    /**
     * The fingerprint of an artefact as it is on disk: the SHA-256 of a file; for a directory, that of the list of its
     * files, each with its own. Nothing when it is not there.
     */
    built(path: string): string | undefined {
      if (!reading.existsSync(path)) return undefined
      if (!reading.statSync(path).isDirectory()) return hash(reading.readFileSync(path))
      const files = (reading.readdirSync(path, { recursive: true }) as string[])
        .filter((f) => reading.statSync(join(path, f)).isFile())
        .sort()
      return hash(JSON.stringify(files.map((f) => [f, hash(reading.readFileSync(join(path, f)))])))
    },

    /** The fingerprint a check holds for: that of its artefacts as built, in order; nothing while one is not built. */
    checked: (built: readonly (string | undefined)[]): string | undefined =>
      built.some((b) => b === undefined) ? undefined : deps.fingerprints.of(built),

    /** The fingerprint of a value (a declaration's text, a dossier). */
    of: (value: unknown): string => deps.fingerprints.of(value),

    /**
     * The file of the SDLC's evidence with this evidence added, for the command to write: what says the same thing on
     * the same day is replaced.
     */
    added(root: string, entries: readonly Entry[]): { file: string; text: string } {
      const file = join(root, layout.evidence, records.evidence + layout.evidenceExtension)
      const before = reading.existsSync(file) ? (JSON.parse(reading.readFileSync(file, encodings.utf8)) as Entry[]) : []
      const kept = [...before.filter((e) => !entries.some((n) => same(e, n))), ...entries]
        .sort((a, b) => a.at.localeCompare(b.at) || a.node.localeCompare(b.node))
      return { file, text: text(kept) }
    },

    /** A value as the JSON of an evidence file. */
    text,
  }
}

export type Api = ReturnType<typeof body>
export default body
