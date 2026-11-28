/** Trame · Doctor */

// What trame doctor asks the machine for the engine itself (since g122): each question an add-on of the engine's own
// extension point (an implementation: asking the machine touches it, a file written to be read back), chosen here and
// assembled into the engine, which asks them always, even in an empty directory or a
// project whose graph does not load; then what the project's add-ons to std's MachineNeeds ask. A question that a
// command needs moves with that command into libs/commands, asked only of a project that composes it.

import { fn } from "../kinds/function"
import { implementation } from "../kinds/implementation"
import { decision } from "../kinds/decision"
import { binding } from "../kinds/binding"
import { extensionPoint } from "../kinds/port"
import type { MachineNeed } from "../trame/kernel"
import { ExecutableSpecification } from "./product"
import { Waiting, HttpServing } from "#std/running"
import { Clock, FileReading, FileWriting, FileTrees, KeptRuns, PackageInstalls, PackageReports, Paths, Process, Programs, Local, Test } from "./architecture"
import { CommandMessages } from "./messages"
import { Layout } from "./conventions"
import { Counts, Texts } from "#std/algebra"
import { ExitStatus, NodeEncodings } from "#std/system"
import { Iso8601 } from "#std/measures"
import { Plugin } from "#std/patterns"

/**
 * What the doctor writes, runs and waits for
 * A file and its text; a program that prints that text, run with the engine's loader; how long it waits, in
 * milliseconds.
 */
export const DoctorProbe = decision<{ file: string; text: string; program: string; source: string; pause: number }>({
  owner: "trame",
  value: { file: "probe.txt", text: "trame doctor", program: "probe.ts", source: "console.log(\"trame doctor\")\n", pause: 10 },
})

/**
 * What the engine needs of the machine
 * The extension point of trame doctor for the engine itself: each add-on asks one thing the engine needs to run at all,
 * and answers whether it holds, in one line.
 */
export const EngineNeeds = extensionPoint<MachineNeed>({
  owner: "trame",
  declaredEffects: { ask: ["read", "write", "process", "execution", "network", "time", "keeps", "asynchronous"] },
})

/**
 * Asking
 * One question asked: what is asked, and whether it holds; what went wrong, when it broke, said with it.
 */
export const Asking = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { messages: CommandMessages },
  body: ({ messages }) => ({
    answer: async (what: string, holds: () => boolean | Promise<boolean>): Promise<{ holds: boolean; says: string }> => {
      try {
        return { holds: await holds(), says: what }
      } catch (e) {
        return { holds: false, says: messages.doctorWhy(what, (e as Error).message) }
      }
    },
  }),
})

/** The clock gives the day */
export const ClockAnswers = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { clock: Clock, iso: Iso8601, asking: Asking, messages: CommandMessages },
  body: ({ clock, iso, asking, messages }) => ({ ask: () => asking.answer(messages.doctorClock(), () => clock.today().length === iso.dateLength) }),
})

/** A file written is read back */
export const FilesAnswer = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { trees: FileTrees, reading: FileReading, writing: FileWriting, paths: Paths, probe: DoctorProbe, encodings: NodeEncodings, asking: Asking, messages: CommandMessages },
  body: ({ trees, reading, writing, paths, probe, encodings, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorFiles(), () => {
      const dir = trees.temporary()
      const file = paths.join(dir, probe.file)
      writing.writeFileSync(file, probe.text)
      const read = String(reading.readFileSync(file, encodings.utf8)) === probe.text
      trees.remove(dir)
      return read
    }),
  }),
})

/** A directory copied is the same as the original */
export const TreesAnswer = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { trees: FileTrees, writing: FileWriting, currentProcess: Process, paths: Paths, probe: DoctorProbe, texts: Texts, asking: Asking, messages: CommandMessages },
  body: ({ trees, writing, currentProcess, paths, probe, texts, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorTrees(), async () => {
      const dir = trees.temporary()
      const copy = trees.temporary()
      writing.writeFileSync(paths.join(dir, probe.file), probe.text)
      trees.copy(dir, copy)
      const same = trees.files(copy).includes(probe.file) && (await trees.differences(currentProcess.cwd(), dir, copy)) === texts.empty
      trees.remove(dir)
      trees.remove(copy)
      return same
    }),
  }),
})

/** A program runs with the engine's loader, and prints what it says */
export const ProgramsAnswer = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { trees: FileTrees, writing: FileWriting, programs: Programs, paths: Paths, probe: DoctorProbe, exitStatus: ExitStatus, asking: Asking, messages: CommandMessages },
  body: ({ trees, writing, programs, paths, probe, exitStatus, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorPrograms(), async () => {
      const dir = trees.temporary()
      const program = paths.join(dir, probe.program)
      writing.writeFileSync(program, probe.source)
      const ran = await programs.run(program, [], dir, {})
      trees.remove(dir)
      return ran.status === exitStatus.success && ran.output.trim() === probe.text
    }),
  }),
})

/** A run is kept, and given back until a file it read changes */
export const RunsAnswer = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { trees: FileTrees, writing: FileWriting, runs: KeptRuns, paths: Paths, probe: DoctorProbe, asking: Asking, messages: CommandMessages },
  body: ({ trees, writing, runs, paths, probe, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorRuns(), () => {
      const dir = trees.temporary()
      const file = paths.join(dir, probe.file)
      writing.writeFileSync(file, probe.text)
      const none = new Set<string>()
      runs.open(dir, [dir], none).set(probe.file, probe.text)
      const kept = runs.open(dir, [dir], none).get(probe.file) === probe.text
      writing.writeFileSync(file, probe.source)
      const forgotten = runs.open(dir, [dir], none).get(probe.file) === undefined
      trees.remove(dir)
      return kept && forgotten
    }),
  }),
})

/** A server listens on a port the system gives */
export const ServerAnswers = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { httpServer: HttpServing, counts: Counts, asking: Asking, messages: CommandMessages },
  body: ({ httpServer, counts, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorServer(), () => new Promise<boolean>((done) => {
      const server = httpServer.createServer((_, res) => void res.end())
      server.listen(counts.zero, () => {
        server.close()
        done(true)
      })
    })),
  }),
})

/** The time passes */
export const TimerAnswers = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { clock: Clock, timer: Waiting, probe: DoctorProbe, asking: Asking, messages: CommandMessages },
  body: ({ clock, timer, probe, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorTimer(), () => new Promise<boolean>((done) => {
      const before = clock.now().getTime()
      timer.setTimeout(() => done(clock.now().getTime() >= before), probe.pause)
    })),
  }),
})

/** The registry answers about the packages */
export const RegistryAnswers = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: { reports: PackageReports, currentProcess: Process, asking: Asking, messages: CommandMessages },
  body: ({ reports, currentProcess, asking, messages }) => ({
    ask: () => asking.answer(messages.doctorRegistry(), async () => Array.isArray(await reports.audit(currentProcess.cwd()))),
  }),
})

/** The installer installs what a manifest names and writes its lockfile */
export const InstallerAnswers = implementation({
  owner: "trame", implements: [EngineNeeds],
  deps: {
    trees: FileTrees, reading: FileReading, writing: FileWriting, installs: PackageInstalls, layout: Layout, paths: Paths, exitStatus: ExitStatus,
    asking: Asking, messages: CommandMessages,
  },
  body: ({ trees, reading, writing, installs, layout, paths, exitStatus, asking, messages }) => ({
    // A project that names no package: the installer writes its lockfile all the same (since g100).
    ask: () => asking.answer(messages.doctorInstalls(), async () => {
      const dir = trees.temporary()
      writing.writeFileSync(paths.join(dir, layout.manifest), JSON.stringify({}))
      const installed = (await installs.install(dir)) === exitStatus.success && reading.existsSync(paths.join(dir, layout.lockfile))
      trees.remove(dir)
      return installed
    }),
  }),
})

/**
 * What the engine asks the machine
 * The questions trame doctor asks for the engine, in this order, on a machine and in the scenarios (where the machine is
 * the one kept in memory). The server and the registry leave with the commands that need them (dev; audit, upgrade).
 */
export const EngineQuestions = binding({
  owner: "trame",
  chooses: [ClockAnswers, FilesAnswer, TreesAnswer, ProgramsAnswer, RunsAnswer, ServerAnswers, TimerAnswers, RegistryAnswers, InstallerAnswers],
  environments: [Local, Test],
  follows: [Plugin],
  context: "trame doctor answers in an empty directory and in a project whose graph does not load: what the engine needs to run is asked whatever the project says, as add-ons of its own, chosen here.",
})
