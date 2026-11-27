// trame advance --by <name> [--accept] [--promote "what changes"]: the generation in place assembles the candidate and
// Trame's SDLC for the machine, then the candidate (by its launcher) ships the next generation with the rest of the
// line, judging what it builds as the generation it will be. It stops where an assembly fails.

import type { BodyOf } from "../../../trame/kernel"
import type { AdvanceAGeneration } from "../../sdlc"

const body: BodyOf<typeof AdvanceAGeneration> = (d) => async (req) => {
  const { runs, currentProcess, events, exit, layout, line, advancing, candidate, typescript, names, say, posix, texts, sequences } = d
  const args = (req.body as { args: readonly string[] }).args
  const at = sequences.position([...args], line.by)
  const [, person] = at === undefined ? [] : args.slice(at)
  if (!person) return { status: exit.failure, body: [say.advanceUsage(line.by, line.accept, line.promote)] }

  const launcher = texts.concat([posix.currentDirectory, posix.slash, layout.launcher])
  for (const component of advancing.assembled) {
    const assembled = await runs.run({
      program: launcher, args: [line.assemble, component, line.env, advancing.environment], dir: posix.currentDirectory, said: say.advanceAssembling(component),
    })
    if (assembled !== exit.success) return { status: exit.failure, body: [say.advanceStopped(component)] }
  }

  // The candidate, by its launcher (its program's name, then the launcher's mark): it leads the names of the packages.
  const [extension] = typescript.extensions
  const stem = extension !== undefined && candidate.path.endsWith(extension) ? sequences.take(candidate.path, candidate.path.length - extension.length) : candidate.path
  const program = texts.concat([stem, names.launcher, extension ?? texts.empty])
  const child = currentProcess.runTs(program, [line.ship, advancing.shipment, ...args])
  const status = await new Promise<number>((end) => child.on(events.exit, (code: number | null) => end(code ?? exit.failure)))
  return { status, body: [] }
}

export default body
