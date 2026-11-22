// trame propagate --by <name>: the versions published carried across the projects of the repository, each after the
// libraries it imports and the projects it reads (two that import each other, in the order decided): its packages at
// their newest versions; its files that run elsewhere written again when that moved a reference; its documents built
// again, at its day when it has one. It stops at the first step that fails.

import type { BodyOf } from "#trame/kernel"
import type { Propagate, ProjectToPropagate } from "../../commands"

const body: BodyOf<typeof Propagate> = ({ settings, files, programs, say, exit, sequences, posix, texts }) => async (req) => {
  const args = (req.body as { args: readonly string[] }).args
  const { engine, configuration, projects } = settings
  const at = sequences.position([...args], engine.by)
  const [, person] = at === undefined ? [] : args.slice(at)
  if (!person) return { status: exit.failure, body: [say.propagateUsage(engine.by)] }

  // Each project after the libraries it imports and the projects it reads, among those of the repository.
  const named = new Set(projects.map((p) => p.name))
  const described = (p: ProjectToPropagate) => texts.concat([p.dir, posix.slash, configuration])
  const read = (p: ProjectToPropagate) => (files.exists(described(p)) ? files.read(described(p)) : texts.empty)
  const librariesOf = (p: ProjectToPropagate) => {
    const text = read(p)
    return text ? Object.keys((JSON.parse(text) as { libraries?: Record<string, unknown> }).libraries ?? {}) : []
  }
  const needs = new Map(projects.map((p) => [p.name, [...librariesOf(p), ...(p.reads ?? [])].filter((n) => named.has(n) && n !== p.name)]))
  const ordered: ProjectToPropagate[] = []
  const done = new Set<string>()
  const waiting = (p: ProjectToPropagate) => (needs.get(p.name) ?? []).filter((n) => !done.has(n)).length
  for (const _ of projects) {
    // Ready when all it needs is done; when none is (two that import each other), the one that waits for the fewest,
    // the first decided among them.
    const [next] = projects.filter((p) => !done.has(p.name)).sort((a, b) => waiting(a) - waiting(b))
    if (next) {
      ordered.push(next)
      done.add(next.name)
    }
  }

  const run = (p: ProjectToPropagate, said: string, args: readonly string[], variables?: Record<string, string>) =>
    programs.run({ program: engine.launcher, args, dir: p.dir, said, ...(variables ? { variables } : {}) })
  for (const p of ordered) {
    const before = read(p)
    const upgrading = say.upgrading(p.name)
    if ((await run(p, upgrading, [engine.upgrade])) !== exit.success) return { status: exit.failure, body: [say.propagationStopped(p.name, upgrading)] }
    // Its files that run elsewhere, only when a reference moved: what writes them, or what they run, changed.
    if (p.runners && read(p) !== before) {
      const writing = say.writingRunners(p.name, p.runners)
      if ((await run(p, writing, [engine.ship, p.runners, engine.by, person])) !== exit.success) return { status: exit.failure, body: [say.propagationStopped(p.name, writing)] }
    }
    const building = say.building(p.name, p.day)
    if ((await run(p, building, [engine.build], p.day ? { [engine.today]: p.day } : undefined)) !== exit.success) {
      return { status: exit.failure, body: [say.propagationStopped(p.name, building)] }
    }
  }
  return { status: exit.success, body: [say.propagated(ordered.map((p) => p.name))] }
}

export default body
