// A program a command runs, started by Node in its directory, on the same terminal, with its variables added to those
// of the command; what it runs is said first. A path is found from where the command runs; a name, by the system.

import { spawn } from "node:child_process"
import { resolve } from "node:path"
import type { BodyOf } from "#trame/kernel"
import type { NodeProgramRuns, ProgramRun } from "../../tooling"

const body: BodyOf<typeof NodeProgramRuns> = ({ cli, events, exit, posix }) => ({
  run: ({ program, args, dir, variables, said }: ProgramRun) =>
    new Promise<number>((done) => {
      console.log(said)
      const found = program.includes(posix.slash) ? resolve(program) : program
      const child = spawn(found, [...args], { cwd: dir, stdio: cli.inherit, env: { ...process.env, ...variables } })
      child.on(events.error, () => done(exit.failure))
      child.on(events.close, (status: number | null) => done(status ?? exit.failure))
    }),
})

export default body
