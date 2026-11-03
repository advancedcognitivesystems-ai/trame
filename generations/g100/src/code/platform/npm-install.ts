// npm installs what a project's manifest names, in its directory, and writes what it installed into the lockfile. Its
// output goes to the terminal; its exit status comes back, a failure when npm could not be started.

import { spawn } from "node:child_process"
import type { BodyOf } from "../../../trame/kernel"
import type { NpmInstall } from "../../platform"

const body: BodyOf<typeof NpmInstall> = ({ npm, node, events, exitStatus }) => ({
  install: (root) =>
    new Promise<number>((done) => {
      const child = spawn(npm.command, [npm.install, npm.noAudit, npm.noFund], { cwd: root, stdio: node.inherit })
      child.on(events.error, () => done(exitStatus.failure))
      child.on(events.close, (status: number | null) => done(status ?? exitStatus.failure))
    }),
})

export default body
