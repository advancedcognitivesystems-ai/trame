// The current process. Relaunching means starting this same program again (whichever engine is running), with the
// same loader.

import { spawn } from "node:child_process"
import { resolve } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeProcess } from "../../platform"

const body: BodyOf<typeof NodeProcess> = ({ argv, node, runner }) => ({
  cwd: () => process.cwd(),
  program: () => resolve(process.argv[argv.script]),
  env: process.env,
  relaunch: (args, cwd) => spawn(process.execPath, [...process.execArgv, process.argv[argv.script], ...args], { cwd, env: process.env }),
  runTs: (file, args) =>
    // The loader resolved from where the engine is installed: the program it runs runs the same from any directory.
    spawn(process.execPath, [node.importFirst, import.meta.resolve(runner), file, ...args], { stdio: node.inherit, env: { ...process.env, NODE_NO_WARNINGS: node.enabled } }),
  onSignal: (signal, f) => void process.on(signal, f),
})

export default body
