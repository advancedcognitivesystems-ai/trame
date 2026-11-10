// trame upgrade [package…]: moves each package of Trame the project references (the language at a generation, a
// library at a version) to the newest version its origin holds, or only those named: the reference's version, and the
// path it is reached by, written again in the module that declares it; then trame manifest places them and keeps the
// configuration, the import map and the lockfile with them (C1, since g100). A reference to a package as it is moves
// nowhere.

import { KindName, PackageField, type ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileWriting, Paths, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { TrameCommands } from "../../conventions"
import type { VersionOrder } from "../../packages"
import type { StringLiteral } from "../../typescript"
import type { NodeEncodings, NodeEvents } from "#std/system"
import type { TextFile } from "#std/text"
import type { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"

export interface Deps {
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  reading: FileReading
  writing: FileWriting
  paths: Paths
  versions: ProvidedBy<typeof VersionOrder>
  /** How a text is written in TypeScript: the reference's version and path, as its module writes them. */
  text: ProvidedBy<typeof StringLiteral>
  file: ProvidedBy<typeof TextFile>
  encodings: ProvidedBy<typeof NodeEncodings>
  events: ProvidedBy<typeof NodeEvents>
  currentProcess: Process
  line: ProvidedBy<typeof TrameCommands>
  values: ProvidedBy<typeof ValueTypes>
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
  texts: ProvidedBy<typeof Texts>
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { paths, messages, terminal, exitStatus } = deps
  const { join, dirname, basename } = paths
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  const { c, comp } = await deps.preparation.prepare(o)
  const text = (v: { field(name: string): unknown }, name: string) => {
    const x = v.field(name)
    return deps.values.isText(x) ? x : undefined
  }
  const references = comp.all(KindName.package).nodes()
    .filter((v) => text(v, PackageField.joins) !== undefined)
    .filter((v) => !o.args.length || o.args.includes(String(v.field(PackageField.name))))

  // What moves: each reference whose origin holds a newer version than the one it names.
  const edits = new Map<string, { line: number; from: string; to: string }[]>()
  for (const v of references) {
    const current = text(v, PackageField.version)
    const decl = v.decl
    if (current === undefined || !decl) continue
    const held = c.graph.packageVersions?.(v.ref) ?? []
    const newer = held.filter((x) => deps.versions.below(current, x)).sort(deps.versions.compare)
    const newest = deps.sequences.last(newer)
    if (newest === undefined) continue
    const at = text(v, PackageField.at)
    // A path to a version names it as its directory does: what comes before the version stays (g for a generation).
    const before = at === undefined ? undefined : deps.sequences.take(basename(at), basename(at).length - current.length)
    const file = join(o.root, decl.file)
    const list = edits.get(file) ?? []
    list.push({ line: decl.line, from: deps.text(current), to: deps.text(newest) })
    if (at !== undefined && before !== undefined) list.push({ line: decl.line, from: deps.text(at), to: deps.text(join(dirname(at), before + newest)) })
    edits.set(file, list)
    terminal.write(messages.upgraded(String(v.field(PackageField.name)), current, newest))
  }
  if (!edits.size) {
    terminal.write(messages.upgradeNothing(references.length))
    return { status: exitStatus.success, body: undefined }
  }

  // Each text is written again where its reference is declared: from its line to the next declaration of the module
  // (lines counted from one, as the declarations give them).
  const { previous } = deps.counts
  for (const [file, list] of edits) {
    const lines = String(deps.reading.readFileSync(file, deps.encodings.utf8)).split(deps.file.endOfLine)
    const starts = comp.all().nodes().flatMap((v) => (v.decl && join(o.root, v.decl.file) === file ? [v.decl.line] : [])).sort((a, b) => a - b)
    for (const e of list) {
      const from = previous(e.line)
      const to = previous(starts.find((l) => l > e.line) ?? deps.counts.next(lines.length))
      const span = lines.slice(from, to).join(deps.file.endOfLine)
      lines.splice(from, to - from, ...span.replace(e.from, e.to).split(deps.file.endOfLine))
    }
    deps.writing.writeFileSync(file, lines.join(deps.file.endOfLine))
  }

  // Then the manifest, in a fresh process: it reads the graph with the references as they are now.
  return new Promise((done) => {
    const child = deps.currentProcess.relaunch([deps.line.manifest], o.root)
    const chunks: string[] = []
    child.stdout?.setEncoding(deps.encodings.utf8)
    child.stdout?.on(deps.events.data, (d: string) => chunks.push(d))
    child.on(deps.events.close, (code: number | null) => {
      terminal.writeRaw(chunks.join(deps.texts.empty))
      done({ status: code ?? exitStatus.failure, body: undefined })
    })
  })
}

export default body
