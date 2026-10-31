// trame amend <node> <path> <value> --why … --by … [--from …] [--until …] [--source …] [--dry-run] [--accept]: a chosen
// value changed by an amendment. The amendment is compiled first with the graph, in memory, and what it would change is
// said (statuses, issues raised and resolved, the shipments touched); unless it raises an error (or --accept), it is
// recorded where the project's amendments go. Its owner's approval is awaited when someone else wrote it.

import { AmendmentField, ChangeWay, KindName, Severity, type ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { AmendmentPlace, Paths, Prelude, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { References } from "../../engine"
import type { AmendmentNaming } from "../../conventions"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as ComparisonApi, Build } from "./comparison"
import type { Api as ProjectApi } from "../engine/project"
import type { Counts, ValueTypes } from "#std/algebra"
import type { NodeModuleSpecifiers } from "#std/system"

export interface Deps {
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  machine: MachineApi
  comparison: ComparisonApi
  place: AmendmentPlace
  prelude: Prelude
  references: ProvidedBy<typeof References>
  project: ProjectApi
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  values: ProvidedBy<typeof ValueTypes>
  paths: Paths
  text: { indent: string }
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
  naming: ProvidedBy<typeof AmendmentNaming>
  counts: ProvidedBy<typeof Counts>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, alsoWith, refuse } = deps.preparation
  const { meta, refOf, instantiate, setPath, isHole, kinds } = deps.prelude.internal
  const { messages, terminal, values, references, paths, naming } = deps
  const { indent } = deps.text
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const [ref, path, raw] = o.args
  if (ref === undefined || path === undefined || raw === undefined || o.why === undefined || o.by === undefined) return refuse(o, [messages.amendUsage()])
  const { c } = await prepare(o)

  // The node: by its reference, or by its name alone when one node of the project bears it.
  const [target, ...others] = c.nodes.filter((n) => c.graph.view(n).library === undefined && (refOf(n) === ref || meta(n).id === ref))
  if (!target || others.length) return refuse(o, [messages.amendNoSuchNode(ref)])
  const view = c.graph.view(target)
  const field = references.firstSegment(path)
  const way = view.fieldInfo(field)?.changes ?? ChangeWay.code
  if (way === ChangeWay.code) return refuse(o, [messages.amendInTheCode(view.title, field)])
  if (way === ChangeWay.cited && o.source === undefined) return refuse(o, [messages.amendCitedNeedsSource(view.title, field)])

  // The value: JSON, or a text as it is; of the same type as the one it replaces, unless that one is undecided.
  const value = ((): unknown => {
    try {
      return JSON.parse(raw)
    } catch {
      return raw
    }
  })()
  const typeOf = (v: unknown) => JSON.stringify([values.isText(v), values.isNumber(v), values.isBoolean(v), Array.isArray(v), values.isObject(v)])
  const current = view.base(path)
  if (current !== undefined && !isHole(current) && typeOf(current) !== typeOf(value)) return refuse(o, [messages.amendNotTheSame(path)])
  const patch: Record<string, unknown> = {}
  setPath(patch, path, value)
  if (way === ChangeWay.cited && o.source !== undefined) patch[AmendmentField.source] = o.source

  // Its name: the node's, then the word of amendments, then a number when the module already has one.
  const module = meta(target).module
  const taken = new Set(c.nodes.filter((n) => meta(n).module === module).map((n) => meta(n).id))
  const base = meta(target).id + naming.suffix
  const numbered = (n: number): string => (taken.has(base + n) ? numbered(deps.counts.next(n)) : base + n)
  const name = taken.has(base) ? numbered(naming.first) : base
  const from = o.from ?? o.today
  const def = kinds.find((k) => k.name === KindName.amendment)
  if (!def) return refuse(o, [messages.amendNoKind()])
  const amendment = instantiate(def, {
    amends: target, patch, [AmendmentField.owner]: o.by, [AmendmentField.why]: o.why, [AmendmentField.from]: from,
    ...(o.until === undefined ? {} : { [AmendmentField.until]: o.until }),
  })
  meta(amendment).id = name
  meta(amendment).module = module

  // What it would change, the day it comes into force: the graph that day, without it and with it.
  const date = from > o.today ? from : o.today
  const without = date === o.today ? c : (await alsoWith(o, [], date)).c
  const withIt = (await alsoWith(o, [amendment], date)).c
  const before = JSON.parse(deps.machine.graphJson(without)) as Build
  const now = JSON.parse(deps.machine.graphJson(withIt)) as Build
  const plan = deps.comparison.compare(before, now)
  terminal.write(messages.amendWouldChange(view.title, path, date))
  const lines = deps.comparison.lines(plan, before, now)
  for (const l of lines) terminal.write(indent + l)
  if (!lines.length) terminal.write(indent + messages.planNothing())
  const errorsOf = (cc: typeof c) => new Set(cc.diags.filter((d) => d.severity === Severity.error).map((d) => JSON.stringify([d.node && refOf(d.node), d.what])))
  const had = errorsOf(without)
  const raised = [...errorsOf(withIt)].filter((e) => !had.has(e))
  if (raised.length && !o.accept) return refuse(o, [messages.amendRefused(raised.length)])
  if (o.dryRun) {
    terminal.write(messages.amendDryRun())
    return { status: deps.exitStatus.success, body: { name, plan } }
  }

  // Recorded where the project's amendments go, beside the node it amends.
  const info = view.decl
  if (!info) return refuse(o, [messages.amendNoSuchNode(ref)])
  const file = paths.join(o.root, info.file)
  const [kindsDir] = deps.project.projectDirs(o.root).kinds
  const kindPath = paths.relative(paths.dirname(file), paths.join(kindsDir, KindName.amendment)).split(paths.sep).join(deps.specifiers.separator)
  const kind = kindPath.startsWith(deps.specifiers.parent) ? kindPath : deps.specifiers.current + kindPath
  const recorded = deps.place.record({ file, target: meta(target).id ?? ref, name, patch, owner: o.by, why: o.why, from, until: o.until, kind })
  terminal.write(messages.amendWritten(name, paths.relative(o.root, recorded.file)))
  if (view.owner !== undefined && view.owner !== o.by) terminal.write(messages.amendAwaitsApproval(view.owner))
  return { status: deps.exitStatus.success, body: { name, file: recorded.file, plan } }
}

export default body
