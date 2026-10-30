// trame run: assembles (through the trame assemble command itself), then runs the program and exits with its code.

import type { Handler } from "../../../kinds/entry-point"
import type { Process } from "../../architecture"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  assemble: Handler
  currentProcess: Process
}

const body = (deps: Deps): Handler => async (req) => {
  const program = (await deps.assemble(req)).body as string
  const child = deps.currentProcess.runTs(program, [])
  for (const signal of ["SIGINT", "SIGTERM"] as const) deps.currentProcess.onSignal(signal, () => child.kill(signal))
  const code = await new Promise<number>((end) => child.on("exit", (c) => end(c ?? deps.exitStatus.success)))
  return { status: code, body: undefined }
}

export default body
