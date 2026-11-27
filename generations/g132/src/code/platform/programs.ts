// Another engine, started with the loader of this one (Node and the TypeScript runner): what it prints on its standard
// output comes back as text, with its exit status (none when a signal stopped it); its errors reach this terminal as
// they come.

import { spawn } from "node:child_process"
import type { BodyOf } from "../../../trame/kernel"
import type { NodePrograms } from "../../platform"

const body: BodyOf<typeof NodePrograms> = ({ node, runner, events }) => ({
  run: (program, args, cwd, env) =>
    new Promise((done, fail) => {
      // The loader resolved from where the engine is installed, not from the directory the program runs in: a program
      // run in another directory, which installs no loader of its own, still runs.
      const child = spawn(process.execPath, [node.importFirst, import.meta.resolve(runner), program, ...args], {
        cwd, env: { ...process.env, NODE_NO_WARNINGS: node.enabled, ...env }, stdio: [node.ignore, node.pipe, node.inherit],
      })
      const chunks: Buffer[] = []
      child.stdout.on(events.data, (chunk: Buffer) => chunks.push(chunk))
      child.on(events.error, fail)
      child.on(events.close, (status: number | null) => done({ status: status ?? Number.NaN, output: Buffer.concat(chunks).toString() }))
    }),
})

export default body
