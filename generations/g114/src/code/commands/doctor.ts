// trame doctor: does this machine run Trame? It says the day, writes a file and reads it back, copies a directory and
// compares the copy, runs a program with the engine's loader, keeps a run until a file changes, serves HTTP on a port the system gives, waits, and asks
// the registry about the project's packages: one line for each, and the status of the whole. Run on a machine by a
// check of Trame's shipment, it is what proves the realizations no scenario in memory can run.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Clock, FileReading, FileTrees, FileWriting, HttpServer, KeptRuns, PackageReports, Paths, Programs, Terminal, Timer, PackageInstalls, Layout } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Counts, Texts } from "#std/algebra"
import type { NodeEncodings } from "#std/system"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  /** What the doctor writes, runs and waits for. */
  probe: { file: string; text: string; program: string; source: string; pause: number }
  /** How many characters a day is written with (ISO 8601). */
  iso: { dateLength: number }
  reading: FileReading
  writing: FileWriting
  trees: FileTrees
  programs: Programs
  /** Where the runs of a project are kept: given back while its files are as they were. */
  runs: KeptRuns
  httpServer: HttpServer
  timer: Timer
  reports: PackageReports
  /** What installs a project's packages and writes its lockfile (since g100). */
  installs: PackageInstalls
  layout: Layout
  clock: Clock
  paths: Paths
  terminal: Terminal
  encodings: ProvidedBy<typeof NodeEncodings>
  counts: ProvidedBy<typeof Counts>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { probe, reading, writing, trees, programs, clock, terminal, messages, exitStatus } = deps
  const { join } = deps.paths
  const { zero } = deps.counts
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  const results: boolean[] = []
  /** Asks one thing of the machine: its answer, or what went wrong, on one line. */
  const ask = async (what: string, answer: () => boolean | Promise<boolean>) => {
    let ok = false
    try {
      ok = await answer()
      terminal.write(ok ? messages.doctorAnswers(what) : messages.doctorFails(what))
    } catch (e) {
      terminal.write(messages.doctorBroke(what, (e as Error).message))
    }
    results.push(ok)
  }

  await ask(messages.doctorClock(), () => clock.today().length === deps.iso.dateLength)
  const dir = trees.temporary()
  const file = join(dir, probe.file)
  await ask(messages.doctorFiles(), () => {
    writing.writeFileSync(file, probe.text)
    return String(reading.readFileSync(file, deps.encodings.utf8)) === probe.text
  })
  const copy = trees.temporary()
  await ask(messages.doctorTrees(), async () => {
    trees.copy(dir, copy)
    return trees.files(copy).includes(probe.file) && (await trees.differences(o.root, dir, copy)) === deps.texts.empty
  })
  await ask(messages.doctorPrograms(), async () => {
    const program = join(dir, probe.program)
    writing.writeFileSync(program, probe.source)
    const ran = await programs.run(program, [], dir, {})
    return ran.status === exitStatus.success && ran.output.trim() === probe.text
  })
  await ask(messages.doctorRuns(), () => {
    const none = new Set<string>()
    deps.runs.open(dir, [dir], none).set(probe.file, probe.text)
    const kept = deps.runs.open(dir, [dir], none).get(probe.file) === probe.text
    writing.writeFileSync(file, probe.source)
    return kept && deps.runs.open(dir, [dir], none).get(probe.file) === undefined
  })
  await ask(messages.doctorServer(), () => new Promise<boolean>((done) => {
    const server = deps.httpServer.createServer((_, res) => void res.end())
    server.listen(zero, () => {
      server.close()
      done(true)
    })
  }))
  await ask(messages.doctorTimer(), () => new Promise<boolean>((done) => {
    const before = clock.now().getTime()
    deps.timer.setTimeout(() => done(clock.now().getTime() >= before), probe.pause)
  }))
  await ask(messages.doctorRegistry(), async () => Array.isArray(await deps.reports.audit(o.root)))
  // A project that names no package: the installer writes its lockfile all the same (since g100).
  await ask(messages.doctorInstalls(), async () => {
    writing.writeFileSync(join(dir, deps.layout.manifest), JSON.stringify({}))
    return (await deps.installs.install(dir)) === exitStatus.success && reading.existsSync(join(dir, deps.layout.lockfile))
  })
  trees.remove(dir)
  trees.remove(copy)
  const answered = results.filter((r) => r)
  terminal.write(messages.doctorSummary(answered.length, results.length))
  return { status: answered.length === results.length ? exitStatus.success : exitStatus.failure, body: undefined }
}

export default body
