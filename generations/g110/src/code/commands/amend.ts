// trame amend <node> <path> <value> --why … --by … [--from …] [--until …] [--source …] [--dry-run] [--accept]: a chosen
// value changed by an amendment. What it would change is said first (the function "An amendment prepared"); unless it
// is refused, or --dry-run, it is recorded where the project's amendments go.

import type { Handler } from "../../../kinds/entry-point"
import type { ProvidedBy } from "../../../trame/kernel"
import type { AmendmentPlace, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AmendingApi } from "./amending"

export interface Deps {
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  amending: AmendingApi
  place: AmendmentPlace
  paths: Paths
  text: { indent: string }
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, refuse } = deps.preparation
  const { messages, terminal } = deps
  const { indent } = deps.text
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const [node, path, value] = o.args
  if (node === undefined || path === undefined || value === undefined || o.why === undefined || o.by === undefined) return refuse(o, [messages.amendUsage()])
  const prepared = await deps.amending.prepareAmendment(o, { node, path, value, why: o.why, by: o.by, from: o.from, until: o.until, source: o.source, accept: o.accept })
  if (prepared.heading !== undefined) terminal.write(prepared.heading)
  for (const l of prepared.lines) terminal.write(indent + l)
  if (prepared.heading !== undefined && !prepared.lines.length) terminal.write(indent + messages.planNothing())
  if (prepared.refused !== undefined || !prepared.record) return refuse(o, [prepared.refused ?? messages.amendNoKind()])
  if (o.dryRun) {
    terminal.write(messages.amendDryRun())
    return { status: deps.exitStatus.success, body: prepared }
  }
  const recorded = deps.place.record(prepared.record)
  terminal.write(messages.amendWritten(prepared.record.name, deps.paths.relative(o.root, recorded.file)))
  if (prepared.awaits !== undefined) terminal.write(messages.amendAwaitsApproval(prepared.awaits))
  return { status: deps.exitStatus.success, body: { ...prepared, file: recorded.file } }
}

export default body
