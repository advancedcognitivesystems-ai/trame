// trame doctor: does this machine run Trame, and what this project needs? First what the engine needs to run at all,
// each question an add-on of its own extension point, chosen in its graph and assembled into it (since g122: the day,
// a file written and read back, a directory copied and compared, a program run with the engine's loader, a run kept
// until a file changes, a server on a port the system gives, the time passing, the registry, the installer). Then, in a
// project whose graph can be read, what its add-ons to std's MachineNeeds ask (since g120). One line for each, each
// asked whatever the others answered, and the status of the whole. Run by a check of a shipment, it is what proves the
// realizations no scenario in memory can run.

import { KeptCommandPoints, type MachineNeed, type ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AddOnsApi } from "./add-ons"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  /** What the engine needs of the machine, in the order its graph chose (since g122). */
  engine: readonly MachineNeed[]
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
  /** What the project asks of the machine besides (since g120). */
  addOns: AddOnsApi
}

const body = (deps: Deps): Handler => async (req) => {
  const { terminal, messages, exitStatus } = deps
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args, req.params.commands)
  const results: boolean[] = []
  /** One question asked: its answer on one line, whatever went wrong said with it. */
  const ask = async (need: MachineNeed): Promise<boolean> => {
    const { holds, says } = await need.ask()
    terminal.write(holds ? messages.doctorAnswers(says) : messages.doctorFails(says))
    return holds
  }
  for (const need of deps.engine) {
    try {
      results.push(await ask(need))
    } catch (e) {
      terminal.write(messages.doctorFails((e as Error).message))
      results.push(false)
    }
  }
  // What the project asks of the machine besides, when its graph can be read (since g120).
  const ctx = await deps.preparation.attempt(o)
  if (ctx) {
    const { addOns, refused } = await deps.addOns.wired<MachineNeed>(ctx.c, o.root, KeptCommandPoints.machine, o.envName)
    if (refused) {
      terminal.write(refused)
      results.push(false)
    }
    const failed = await deps.addOns.each(addOns, ask)
    results.push(...addOns.map((a) => !failed.some((f) => f.title === a.title)))
    for (const f of failed) terminal.write(messages.addOnFailed(f.title, f.why))
  }
  const answered = results.filter((r) => r)
  terminal.write(messages.doctorSummary(answered.length, results.length))
  return { status: answered.length === results.length ? exitStatus.success : exitStatus.failure, body: undefined }
}

export default body
