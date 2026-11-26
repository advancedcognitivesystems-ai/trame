// trame examples [--accept]: the examples of the project's syntax elements that are not met, each with what its
// element writes; with --accept, each output is written again where its declaration has it (an element that failed
// has nothing to write), and the build that follows finds them met.

import { KindName } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileWriting, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { TrameCommands } from "../../conventions"
import type { NodeEncodings } from "#std/system"
import type { Counts } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RewritingApi } from "./example-rewriting"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  rewriting: RewritingApi
  reading: FileReading
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  line: ProvidedBy<typeof TrameCommands>
  encodings: ProvidedBy<typeof NodeEncodings>
  counts: ProvidedBy<typeof Counts>
  messages: ProvidedBy<typeof CommandMessages>
}

/** An example as the syntax element's kind judged it. */
interface Judged {
  expected: unknown
  actual?: unknown
  error?: string
  held: boolean
}

const body = (deps: Deps): Handler => async (req) => {
  const { exitStatus, terminal, messages, counts, paths } = deps
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args, req.params.commands)
  const { c } = await deps.preparation.prepare(o)
  const elements = c.graph.all(KindName.syntax).nodes().filter((v) => v.library === undefined)
  const unmet = elements.flatMap((v) => (v.result<Judged[]>() ?? []).flatMap((r, index) => (r.held ? [] : [{ v, r, index }])))
  if (counts.isEmpty(unmet)) {
    terminal.write(messages.examplesMet(elements.length))
    return { status: exitStatus.success, body: undefined }
  }
  for (const { v, r, index } of unmet) {
    terminal.write(messages.exampleUnmet(v.ref, counts.next(index), JSON.stringify(r.expected), r.error ?? JSON.stringify(r.actual)))
  }
  if (!o.accept) {
    terminal.write(messages.examplesToAccept(deps.line.accept))
    return { status: exitStatus.failure, body: undefined }
  }
  // Each output written again in its declaration's file, the files written once all are.
  const texts = new Map<string, string>()
  const rewritten: string[] = []
  for (const { v, r, index } of unmet) {
    if (r.error !== undefined || !v.decl) continue
    const file = paths.resolve(o.root, v.decl.file)
    const again = deps.rewriting.rewrite(texts.get(file) ?? deps.reading.readFileSync(file, deps.encodings.utf8), v.id, index, r.actual)
    if (again === undefined) terminal.error(messages.exampleNotFound(v.ref, counts.next(index)))
    else texts.set(file, again), rewritten.push(v.ref)
  }
  for (const [file, text] of texts) deps.writing.writeFileSync(file, text)
  terminal.write(messages.examplesWritten(rewritten.length, [...texts.keys()].map((f) => paths.relative(o.root, f))))
  return { status: exitStatus.success, body: undefined }
}

export default body
