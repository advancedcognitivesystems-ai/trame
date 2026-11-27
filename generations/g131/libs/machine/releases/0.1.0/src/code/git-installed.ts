// Git, installed: it answers which it is, or it is not there.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { GitInstalled } from "../machine"

const body: BodyOf<typeof GitInstalled> = ({ git, cli, events, exit, words }) => ({
  ask: () =>
    new Promise((done) => {
      const answered = (holds: boolean) => done({ holds, says: holds ? words.gitInstalled() : words.gitMissing() })
      const child = spawn(git.program, [git.version], { stdio: [cli.ignore, cli.ignore, cli.ignore] })
      child.on(events.error, () => answered(false))
      child.on(events.close, (status: number | null) => answered(status === exit.success))
    }),
})

export default body
