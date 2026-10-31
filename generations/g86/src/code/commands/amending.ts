// An amendment prepared: a chosen value of a node changed, compiled first with the graph, in memory, the day it comes
// into force, and what it would change said (the comparison of two builds). It is refused when the node is unknown,
// when the value changes in the code, when a cited value comes without its source, when the value is not of the type
// of the one it replaces, or when it raises an error (unless accepted). trame amend and trame dev record it then,
// through the port "Where an amendment goes": this function writes nothing.

import { AmendmentField, ChangeWay, KindName, Severity, type ProvidedBy } from "../../../trame/kernel"
import type { AmendmentToRecord, Paths, Prelude } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { References } from "../../engine"
import type { AmendmentNaming } from "../../conventions"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as ComparisonApi, Build } from "./comparison"
import type { Api as ProjectApi } from "../engine/project"
import type { Counts, ValueTypes } from "#std/algebra"
import type { NodeModuleSpecifiers } from "#std/system"

/** An amendment asked for: of which node, which value, to what, by whom, why, from and until when. */
export interface AmendmentAsked {
  node: string
  path: string
  /** The new value: JSON, or a text as it is. */
  value: string
  why: string
  by: string
  from?: string
  until?: string
  /** The source that changed a cited value. */
  source?: string
  /** Recorded even when it raises an error, for its owner to settle. */
  accept?: boolean
}

/** What an amendment would do: why it is refused, or what it would change and what to record; whose approval it awaits. */
export interface AmendmentPrepared {
  refused?: string
  heading?: string
  lines: string[]
  record?: AmendmentToRecord
  awaits?: string
}

export interface Deps {
  preparation: PreparationApi
  machine: MachineApi
  comparison: ComparisonApi
  prelude: Prelude
  references: ProvidedBy<typeof References>
  project: ProjectApi
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  values: ProvidedBy<typeof ValueTypes>
  paths: Paths
  messages: ProvidedBy<typeof CommandMessages>
  naming: ProvidedBy<typeof AmendmentNaming>
  counts: ProvidedBy<typeof Counts>
}

const body = (deps: Deps) => {
  const { prepare, alsoWith } = deps.preparation
  const { meta, refOf, instantiate, setPath, isHole, kinds } = deps.prelude.internal
  const { messages, values, references, paths, naming } = deps
  const refused = (why: string): AmendmentPrepared => ({ refused: why, lines: [] })

  async function prepareAmendment(o: Options, a: AmendmentAsked): Promise<AmendmentPrepared> {
    const { c } = await prepare(o)
    // The node: by its reference, or by its name alone when one node of the project bears it.
    const [target, ...others] = c.nodes.filter((n) => c.graph.view(n).library === undefined && (refOf(n) === a.node || meta(n).id === a.node))
    if (!target || others.length) return refused(messages.amendNoSuchNode(a.node))
    const view = c.graph.view(target)
    const field = references.firstSegment(a.path)
    const way = view.fieldInfo(field)?.changes ?? ChangeWay.code
    if (way === ChangeWay.code) return refused(messages.amendInTheCode(view.title, field))
    if (way === ChangeWay.cited && a.source === undefined) return refused(messages.amendCitedNeedsSource(view.title, field))

    // The value: JSON, or a text as it is; of the same type as the one it replaces, unless that one is undecided.
    const value = ((): unknown => {
      try {
        return JSON.parse(a.value)
      } catch {
        return a.value
      }
    })()
    const typeOf = (v: unknown) => JSON.stringify([values.isText(v), values.isNumber(v), values.isBoolean(v), Array.isArray(v), values.isObject(v)])
    const current = view.base(a.path)
    if (current !== undefined && !isHole(current) && typeOf(current) !== typeOf(value)) return refused(messages.amendNotTheSame(a.path))
    const patch: Record<string, unknown> = {}
    setPath(patch, a.path, value)
    if (way === ChangeWay.cited && a.source !== undefined) patch[AmendmentField.source] = a.source

    // Its name: the node's, then the word of amendments, then a number when the module already has one.
    const module = meta(target).module
    const taken = new Set(c.nodes.filter((n) => meta(n).module === module).map((n) => meta(n).id))
    const base = meta(target).id + naming.suffix
    const numbered = (n: number): string => (taken.has(base + n) ? numbered(deps.counts.next(n)) : base + n)
    const name = taken.has(base) ? numbered(naming.first) : base
    const from = a.from ?? o.today
    const def = kinds.find((k) => k.name === KindName.amendment)
    if (!def) return refused(messages.amendNoKind())
    const amendment = instantiate(def, {
      amends: target, patch, [AmendmentField.owner]: a.by, [AmendmentField.why]: a.why, [AmendmentField.from]: from,
      ...(a.until === undefined ? {} : { [AmendmentField.until]: a.until }),
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
    const heading = messages.amendWouldChange(view.title, a.path, date)
    const lines = deps.comparison.lines(plan, before, now)
    const errorsOf = (cc: typeof c) => new Set(cc.diags.filter((d) => d.severity === Severity.error).map((d) => JSON.stringify([d.node && refOf(d.node), d.what])))
    const had = errorsOf(without)
    const raised = [...errorsOf(withIt)].filter((e) => !had.has(e))
    if (raised.length && !a.accept) return { refused: messages.amendRefused(raised.length), heading, lines }

    // Where it would be recorded: beside the node it amends, the import of amendments as that file writes it.
    const info = view.decl
    if (!info) return refused(messages.amendNoSuchNode(a.node))
    const file = paths.join(o.root, info.file)
    const [kindsDir] = deps.project.projectDirs(o.root).kinds
    const kindPath = paths.relative(paths.dirname(file), paths.join(kindsDir, KindName.amendment)).split(paths.sep).join(deps.specifiers.separator)
    const kind = kindPath.startsWith(deps.specifiers.parent) ? kindPath : deps.specifiers.current + kindPath
    return {
      heading, lines,
      record: { file, target: meta(target).id ?? a.node, name, patch, owner: a.by, why: a.why, from, until: a.until, kind },
      awaits: view.owner !== undefined && view.owner !== a.by ? view.owner : undefined,
    }
  }

  return { prepareAmendment }
}

export type Api = ReturnType<typeof body>
export default body
