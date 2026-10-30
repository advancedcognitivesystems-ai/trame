// The current process. Relaunching means starting this same program again (whichever engine is running), with the
// same loader.

import { spawn } from "node:child_process"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeProcess } from "../../platform"

const body: BodyOf<typeof NodeProcess> = () => ({
  cwd: () => process.cwd(),
  env: process.env,
  relaunch: (args, cwd) => spawn(process.execPath, [...process.execArgv, process.argv[1], ...args], { cwd, env: process.env }),
  runTs: (file, args) =>
    spawn(process.execPath, ["--import", "tsx", file, ...args], { stdio: "inherit", env: { ...process.env, NODE_NO_WARNINGS: "1" } }),
  onSignal: (signal, f) => void process.on(signal, f),
})

export default body
