// trame run: assembles (through the trame assemble command itself), then runs the program and exits with its code.

import type { Handler } from "../../../kinds/entry-point"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Process } from "../../architecture"
import type { NodeEvents, Posix } from "../../../std/src/system"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  assemble: Handler
  currentProcess: Process
  posix: ProvidedBy<typeof Posix>
  events: ProvidedBy<typeof NodeEvents>
}

const body = (deps: Deps): Handler => async (req) => {
  const program = (await deps.assemble(req)).body as string
  const child = deps.currentProcess.runTs(program, [])
  for (const signal of [deps.posix.interrupt, deps.posix.terminate]) deps.currentProcess.onSignal(signal, () => child.kill(signal))
  const code = await new Promise<number>((end) => child.on(deps.events.exit, (c: number | null) => end(c ?? deps.exitStatus.success)))
  return { status: code, body: undefined }
}

export default body
