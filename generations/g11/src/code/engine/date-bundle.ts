// Compiling the graph at several dates. The compilation runs in a fresh process:
// the modules of the product are loaded afresh, and a compilation that fails takes nothing down with it.

import type { ProvidedBy, Bundle } from "../../../trame/kernel"
import type { Clock, Process } from "../../architecture"
import type { OutputMessages } from "../../messages"

export interface Deps {
  clock: Clock
  currentProcess: Process
  messages: ProvidedBy<typeof OutputMessages>
}

const body = (deps: Deps) => {
  const { relaunch } = deps.currentProcess
  const { clock, messages } = deps

  /** Compiles at today's date, then at each date where the graph may change, in a single fresh process. */
  function makeBundle(root: string, today: string, mode: Bundle["mode"]): Promise<Bundle> {
    const generatedAt = clock.now().toISOString()
    return new Promise((resolve) => {
      // The engine relaunches itself, in the directory of the project (which is not necessarily that of the engine).
      const child = relaunch(["payload", "--all", "--at", today], root)
      let out = ""
      let err = ""
      // Decoded as a stream: a character split over two chunks must not become "�".
      child.stdout!.setEncoding("utf8")
      child.stderr!.setEncoding("utf8")
      child.stdout!.on("data", (d: string) => (out += d))
      child.stderr!.on("data", (d: string) => (err += d))
      child.on("close", (code: number | null) => {
        if (code !== 0) return resolve({ generatedAt, today, mode, dates: [], error: (err || out).trim() || messages.compilationFailed() })
        try {
          resolve({ generatedAt, today, mode, dates: JSON.parse(out) as Bundle["dates"] })
        } catch (e) {
          resolve({ generatedAt, today, mode, dates: [], error: messages.unreadableOutput((e as Error).message) })
        }
      })
    })
  }

  return { makeBundle }
}

export type Api = ReturnType<typeof body>
export default body
