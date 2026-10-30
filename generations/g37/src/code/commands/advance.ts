// trame advance: the generation in place assembles the described engine and checks it; the requirement "Accept a
// candidate" decides; with --promote, the candidate is frozen into the next generation.
// Each build keeps what it wrote (the documents, graph.json, snapshot.json) and what it printed, under the name of whose
// build it is; two builds are compared with the differences of their trees.

import { KindName, Status } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileTrees, FileWriting, Hashing, Layout, Paths, Programs, Terminal } from "../../architecture"
import type { AdvanceMessages, CommandMessages } from "../../messages"
import type { NodeEncodings, Sha256, TextFile, UnifiedDiff } from "../../standards"
import type { TrameCommands, TrameEnvironment } from "../../conventions"
import type { Advancement, AdvanceReport } from "../../generations"
import type { Columns, TerminalText } from "../../text"
import type { Counts, Sequences, Texts } from "../../algebra"
import type { LanguageDescription } from "../../../kinds/language"
import type { Api as PreparationApi } from "./preparation"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  line: ProvidedBy<typeof TrameCommands>
  layout: Layout
  advancement: ProvidedBy<typeof Advancement>
  /** The rule of the requirement "Accept a candidate". */
  accept: (report: AdvanceReport) => boolean
  /** The example project, relative to Trame's root. */
  example: string
  /** The date both engines compile at: documents that do not change from one day to the next. */
  day: string
  environment: ProvidedBy<typeof TrameEnvironment>
  /** The language of the engine's program: its extension. */
  language: LanguageDescription
  programs: Programs
  trees: FileTrees
  reading: FileReading
  writing: FileWriting
  paths: Paths
  hashing: Hashing
  sha256: ProvidedBy<typeof Sha256>
  fingerprint: number
  encodings: ProvidedBy<typeof NodeEncodings>
  diff: ProvidedBy<typeof UnifiedDiff>
  file: ProvidedBy<typeof TextFile>
  terminal: Terminal
  table: ProvidedBy<typeof Columns>
  columns: ProvidedBy<typeof TerminalText>
  /** What test-kinds prints after a kind or a view whose laws hold. */
  laws: ProvidedBy<typeof CommandMessages>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof AdvanceMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { line, layout, advancement, programs, trees, terminal, diff, messages } = deps
  const { saves } = advancement
  const { endOfLine } = deps.file
  const { readFileSync, readdirSync, existsSync } = deps.reading
  const { writeFileSync, mkdirSync } = deps.writing
  const { join, relative, basename, dirname } = deps.paths
  const { next } = deps.counts
  const { head, last, take } = deps.sequences
  const { concat, lowerWords, optional } = deps.texts
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  const root = o.root
  const write = (text: string) => terminal.write(text)
  const stop = () => ({ status: deps.exitStatus.failure, body: undefined })

  // The program of the engine under a directory: the component assembled for its environment, as the assembly names it.
  const kebab = (name: string) => lowerWords(name, layout.wordJoint)
  const programIn = (base: string) => join(base, layout.output, kebab(advancement.environment), kebab(advancement.component) + optional(head(deps.language.extensions)))

  // The generation in place: the last one.
  const generations = join(root, layout.generations)
  const numberOf = (name: string) => (name.startsWith(layout.generation) ? Number(name.slice(layout.generation.length)) : Number.NaN)
  const numbers = (existsSync(generations) ? readdirSync(generations) : []).map(numberOf).filter(Number.isInteger).sort((a, b) => a - b)
  const n = last(numbers)
  if (n === undefined) {
    write(messages.noGeneration(relative(root, generations)))
    return stop()
  }
  const inPlace = layout.generation + String(n)
  const reference = programIn(join(generations, inPlace))
  const candidate = programIn(root)
  const example = join(root, deps.example)
  const env = { [deps.environment.today]: deps.day }
  const tmp = trees.temporary()

  /** Runs an engine on a project; a run that stops is reported, and stops the advance. */
  const run = async (program: string, args: string[], cwd: string, failed: (status: number) => string) => {
    const r = await programs.run(program, args, cwd, env)
    if (r.status !== deps.exitStatus.success) {
      write(r.output)
      write(messages.failed(failed(r.status)))
      return undefined
    }
    return r.output
  }
  const build = (program: string, cwd: string) => run(program, [line.build], cwd, messages.buildFailed)
  const assemble = (program: string) => run(program, [line.assemble, advancement.component, line.env, advancement.environment], root, messages.assemblyFailed)

  /** What a build wrote and printed, kept under the name of whose build it is. */
  const save = (project: string, whose: string, output: string) => {
    const kept = join(tmp, whose, basename(project))
    mkdirSync(kept, { recursive: true })
    for (const file of [layout.documents, layout.graph, layout.snapshot]) if (existsSync(join(project, file))) trees.copy(join(project, file), join(kept, file))
    writeFileSync(join(kept, advancement.terminal), output)
  }
  const firstLine = (output: string) => optional(head(output.split(endOfLine)))
  const shown: string[] = []

  /** Compares two builds of a project: identical, or the differences, kept to be shown. */
  const compare = async (project: string, a: string, b: string): Promise<boolean> => {
    const found = await trees.differences(tmp, join(a, basename(project)), join(b, basename(project)))
    if (!found) {
      write(messages.done(messages.asBefore(inPlace)))
      return true
    }
    shown.push(found)
    const lines = found.split(endOfLine)
    const headers = lines.filter((l) => l.startsWith(diff.header) || l.startsWith(diff.onlyIn))
    const changed = lines.filter((l) => (l.startsWith(diff.added) && !l.startsWith(diff.newFile)) || (l.startsWith(diff.removed) && !l.startsWith(diff.oldFile)))
    write(messages.noted(messages.differences(inPlace, headers.length, changed.length)))
    for (const h of take(headers, advancement.shown)) write(messages.differingFile(h))
    return false
  }

  write(messages.inPlace(inPlace))

  write(messages.referenceExample(inPlace))
  const ex0 = await build(reference, example)
  if (ex0 === undefined) return stop()
  save(example, saves.reference, ex0)
  write(messages.done(firstLine(ex0)))

  write(messages.referenceSelf(inPlace))
  const self0 = await build(reference, root)
  if (self0 === undefined) return stop()
  save(root, saves.reference, self0)
  write(messages.done(firstLine(self0)))
  // The scenarios of the graph, as the generation in place compiled them.
  const graph = JSON.parse(readFileSync(join(root, layout.graph), deps.encodings.utf8)) as { nodes: { id: string; kind: string; status?: string }[] }
  const scenarios = graph.nodes.filter((x) => x.kind === KindName.scenario)
  for (const r of deps.table(undefined, scenarios.map((x) => [x.id, optional(x.status)]), deps.columns.indent + deps.columns.indent)) write(r)
  const scenariosHold = scenarios.every((x) => x.status === Status.held)
  if (!scenariosHold) write(messages.noted(messages.scenarioNotHeld()))

  write(messages.assembleCandidate(inPlace))
  const assembled = await assemble(reference)
  if (assembled === undefined) return stop()
  write(assembled.trimEnd())
  const first = readFileSync(candidate, deps.encodings.utf8)

  write(messages.candidateExample())
  const ex1 = await build(candidate, example)
  if (ex1 === undefined) return stop()
  save(example, saves.candidate, ex1)
  const exampleAsBefore = await compare(example, join(tmp, saves.reference), join(tmp, saves.candidate))

  write(messages.candidateSelf())
  const self1 = await build(candidate, root)
  if (self1 === undefined) return stop()
  save(root, saves.candidate, self1)
  const selfAsBefore = await compare(root, join(tmp, saves.reference), join(tmp, saves.candidate))

  write(messages.candidateReassembles())
  const reassembled = await assemble(candidate)
  if (reassembled === undefined) return stop()
  write(reassembled.trimEnd())
  const second = readFileSync(candidate, deps.encodings.utf8)
  write(second === first ? messages.done(messages.identicalToCandidate()) : messages.noted(messages.differsFromCandidate()))

  write(messages.secondSelf())
  const self2 = await build(candidate, root)
  if (self2 === undefined) return stop()
  save(root, saves.second, self2)
  const secondAsFirst = !(await trees.differences(tmp, join(saves.candidate, basename(root)), join(saves.second, basename(root))))
  write(secondAsFirst ? messages.done(messages.identicalToCandidate()) : messages.failed(messages.secondDiffers()))

  write(messages.secondReassembles())
  const again = await assemble(candidate)
  if (again === undefined) return stop()
  const fixedPoint = readFileSync(candidate, deps.encodings.utf8) === second
  write(fixedPoint ? messages.done(messages.fixedPoint()) : messages.failed(messages.noFixedPoint()))

  write(messages.laws())
  const laws = await programs.run(candidate, [line.testKinds], root, env)
  for (const l of laws.output.split(endOfLine).filter((x) => x.trim() && !x.endsWith(deps.laws.lawsHold()))) write(messages.law(l))
  const lawsHold = laws.status === deps.exitStatus.success

  const report: AdvanceReport = { scenariosHold, exampleAsBefore, selfAsBefore, secondAsFirst, fixedPoint, lawsHold, accepted: o.accept }
  const differences = join(root, layout.differences)
  if (shown.length) {
    writeFileSync(differences, concat(shown))
    write(messages.differencesWritten(inPlace, layout.differences))
  }
  if (!deps.accept(report)) {
    write(messages.notAccepted())
    trees.remove(tmp)
    return stop()
  }

  if (o.promote !== undefined) {
    const number = next(n)
    const dest = join(generations, layout.generation + String(number))
    if (existsSync(dest)) {
      write(messages.exists(relative(root, dest)))
      trees.remove(tmp)
      return stop()
    }
    const program = programIn(dest)
    mkdirSync(dirname(program), { recursive: true })
    trees.copy(candidate, program)
    trees.copy(join(root, layout.sources), join(dest, layout.sources))
    for (const shared of [layout.prelude, layout.kinds]) trees.link(relative(dest, join(root, shared)), join(dest, shared))
    // The fingerprint covers the program and the code it imports: two generations with the same program differ by their bodies.
    const hash = (text: string | Buffer) => deps.hashing.createHash(deps.sha256.algorithm).update(text).digest(deps.encodings.hex)
    const files = [relative(dest, program), ...trees.files(join(dest, layout.sources)).map((f) => join(layout.sources, f))]
    const fingerprint = take(hash(JSON.stringify(files.map((f) => [f, hash(readFileSync(join(dest, f)))]))), deps.fingerprint)
    const by = messages.assembledBy(inPlace, !!shown.length, layout.differences)
    writeFileSync(join(dest, layout.origin), messages.origin(number, by, o.promote, fingerprint, relative(dest, program), relative(root, program), layout.sources, layout.prelude, layout.kinds))
    if (shown.length) trees.copy(differences, join(dest, layout.differences))
    write(messages.frozen(relative(root, dest), fingerprint))
  }
  write(messages.succeeded())
  trees.remove(tmp)
  return { status: deps.exitStatus.success, body: report }
}

export default body
