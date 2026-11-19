// trame plan: what a build would change, written nowhere. It compiles the graph now (or at --at) and compares it with
// graph.json, the last build (the comparison is the function "Two builds compared").

import type { Handler } from "../../../kinds/entry-point"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as ComparisonApi, Build } from "./comparison"
import type { NodeEncodings } from "#std/system"

export type { Plan } from "./comparison"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  layout: Layout
  text: { indent: string }
  preparation: PreparationApi
  machine: MachineApi
  comparison: ComparisonApi
  reading: FileReading
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => {
  const { options, prepare } = deps.preparation
  const { readFileSync, existsSync } = deps.reading
  const { indent } = deps.text
  const { messages, terminal, comparison } = deps

  return async (req) => {
    const o = options(req.params.command, (req.body as { args: string[] }).args)
    const { c } = await prepare(o)
    const file = deps.paths.join(o.root, deps.layout.graph)
    if (!existsSync(file)) {
      terminal.write(messages.planNothingBuilt(deps.layout.graph))
      return { status: deps.exitStatus.success, body: undefined }
    }
    const before = JSON.parse(String(readFileSync(file, deps.encodings.utf8))) as Build
    const now = JSON.parse(deps.machine.graphJson(c)) as Build
    const plan = comparison.compare(before, now)
    terminal.write(messages.planHeading(plan.since, o.today, {
      added: plan.added.length, removed: plan.removed.length, statuses: plan.statuses.length, changed: plan.changed.length,
      raised: plan.raised.length, resolved: plan.resolved.length,
    }))
    const lines = comparison.lines(plan, before, now)
    for (const l of lines) terminal.write(indent + l)
    terminal.write(lines.length ? messages.planShipments(comparison.shipments(plan, before, now)) : messages.planNothing())
    return { status: deps.exitStatus.success, body: plan }
  }
}

export default body
