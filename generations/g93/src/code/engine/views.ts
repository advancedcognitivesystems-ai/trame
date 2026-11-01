// The views: load them, list their instances, run them under their laws.
// The kernel knows no view: it only knows what a view is.

import { BlockType, InlineType, ViewGroup, ViewScope } from "../../../trame/kernel"
import type { ProvidedBy, Compilation, Document, Inline, Json, ViewDef, View, Block } from "../../../trame/kernel"
import type { FileReading, Layout, ModuleLoader, Paths, Prelude } from "../../architecture"
import type { OutputMessages, ViewMessages } from "../../messages"
import type { Uri } from "#std/web"
import type { DocumentIds } from "../../conventions"
import type { Api as ProjectApi } from "./project"
import type { Api as DriversApi } from "../languages/drivers"
import type { AnswersWithoutCrashing, CompleteViewDeclaration, IntermediateFormatOnly, SameInputSameAnswer } from "../../laws"

export interface Instance {
  def: ViewDef
  id: string
  arg: { module?: string; node?: View }
  file?: string
}

export interface ViewFailure {
  view: string
  law: string
  example: string
}

export interface Deps {
  drivers: DriversApi
  rank: number
  layout: Layout
  loader: ModuleLoader
  reading: FileReading
  paths: Paths
  prelude: Prelude
  project: ProjectApi
  messages: ProvidedBy<typeof ViewMessages>
  /** What the machine outputs write in place of a function: a document must not hold one. */
  output: ProvidedBy<typeof OutputMessages>
  ids: ProvidedBy<typeof DocumentIds>
  uri: ProvidedBy<typeof Uri>
  groupOrder: readonly ViewGroup[]
  // The laws of views, each the rule of its requirement (module laws).
  declaration: ProvidedBy<typeof CompleteViewDeclaration>
  answers: ProvidedBy<typeof AnswersWithoutCrashing>
  same: ProvidedBy<typeof SameInputSameAnswer>
  serial: ProvidedBy<typeof IntermediateFormatOnly>
}

const body = (deps: Deps) => {
  const { drivers } = deps
  const { loader, messages } = deps
  const { declaration, answers, same, serial } = deps
  /** A view may not stop at an undecided value: a document cannot wait. */
  const viewsMayStop = false
  const { readdirSync, existsSync } = deps.reading
  const { join } = deps.paths
  const { views: registry, Hole } = deps.prelude.internal
  const { projectDirs } = deps.project

  // The views of the project: those that its view files export. The registry of the prelude is shared by the whole
  // process (another project may have loaded its own views into it): it only serves to recognise a view.
  let views: ViewDef[] = []

  async function loadViews(root: string): Promise<ViewDef[]> {
    const mine: ViewDef[] = []
    for (const dir of projectDirs(root).views) {
      if (!existsSync(dir)) continue
      for (const f of readdirSync(dir).filter((x) => drivers.graphDriver().extensions.some((e) => x.endsWith(e))).sort()) {
        const mod = await loader.import(join(dir, f))
        for (const v of Object.values(mod)) if (registry.includes(v as ViewDef) && !mine.includes(v as ViewDef)) mine.push(v as ViewDef)
      }
    }
    views = mine
    return views
  }

  /** The rank of a group: its place in the decided order. */
  const groupRank = (group: ViewGroup) => deps.groupOrder.indexOf(group)

  const sortedViews = () =>
    [...views].sort((a, b) => groupRank(a.group) - groupRank(b.group) || (a.order ?? deps.rank) - (b.order ?? deps.rank) || a.name.localeCompare(b.name))

  /** All the instances: one per module, one per node where the view applies, or a single one. */
  function instances(c: Compilation): Instance[] {
    const out: Instance[] = []
    const { documents, documentExtension } = deps.layout
    const { ids, uri } = deps
    /** The file of a document, under the documents of the project: a relative reference, which links between documents follow. */
    const fileOf = (id: string) => documents + uri.pathSeparator + id + documentExtension
    for (const def of sortedViews()) {
      const writes = def.file ?? (def.group !== ViewGroup.node && def.group !== ViewGroup.summary)
      if (def.per === ViewScope.module) {
        for (const m of c.modules()) {
          const id = def.name === sortedViews().find((v) => v.per === ViewScope.module)?.name ? c.moduleDoc(m.id) : def.name + ids.ofModule + m.id
          out.push({ def, id, arg: { module: m.id }, file: writes ? fileOf(id) : undefined })
        }
      } else if (def.per === ViewScope.node) {
        for (const v of c.all().nodes()) {
          if (def.applies && !def.applies(v, c)) continue
          out.push({ def, id: def.name + ids.ofNode + v.ref, arg: { node: v } })
        }
      } else {
        out.push({ def, id: def.name, arg: {}, file: writes ? fileOf(def.name) : undefined })
      }
    }
    return out
  }

  const VIEW_LAWS = {
    declared: messages.lawDeclared(),
    total: messages.lawTotal(),
    deterministic: messages.lawDeterministic(),
    serial: messages.lawSerial(),
  } as const

  /** The laws that the declaration of a view must respect, before any run. */
  function checkViewDecls(): ViewFailure[] {
    const out: ViewFailure[] = []
    const names = new Set<string>()
    for (const v of views) {
      const faults = declaration({
        named: Boolean(v.name && v.label), duplicate: names.has(v.name),
        nodeGroup: v.group === ViewGroup.node, applies: Boolean(v.applies), perNode: v.per === ViewScope.node,
      })
      const failed = (example: string) => out.push({ view: v.name ?? messages.unnamedView(), law: VIEW_LAWS.declared, example })
      if (faults.unnamed) failed(messages.missingNameOrLabel())
      if (faults.duplicate) failed(messages.duplicateName())
      names.add(v.name)
      if (faults.nodeGroupNotPerNode) failed(messages.nodeGroupNotPerNode())
      if (faults.appliesNotPerNode) failed(messages.appliesNotPerNode())
    }
    return out
  }

  const BLOCK_TYPES = new Set<string>(Object.values(BlockType))

  /** Runs every instance, twice each, and checks the laws. */
  /**
   * Runs the views on a compilation: each document, and what breaks a law. Each view runs twice only when the laws are
   * played (trame test-kinds, which every shipment of Trame runs): a build runs it once. Without the views of each node,
   * only those of the project and its modules run (a day of history in an export).
   */
  /**
   * A document whose values of the graph's quantities are written in their units, as the compilation writes them (since
   * g80): each value with a quantity carries the words the renderers print, beside the value itself.
   */
  function inUnits(text: string, shown: NonNullable<Compilation["shown"]>): Document {
    type Value = Extract<Inline, { t: typeof InlineType.value }>
    return JSON.parse(text, (_key, x: Partial<Value> | null) => {
      if (x?.t !== InlineType.value || x.unit === undefined || x.shownAs !== undefined) return x
      const inWords = shown(x.value as Json, x.unit)
      return inWords === undefined ? x : { ...x, shownAs: inWords }
    }) as Document
  }

  function runViews(c: Compilation, opts: { twice?: boolean; perNode?: boolean } = {}): { documents: Document[]; failures: ViewFailure[] } {
    const documents: Document[] = []
    const failures: ViewFailure[] = []
    const fail = (view: string, law: string, example: string) => {
      if (!failures.some((f) => f.view === view && f.law === law)) failures.push({ view, law, example })
    }
    for (const inst of instances(c)) {
      if (opts.perNode === false && inst.arg.node) continue
      const run = () => inst.def.run(c, inst.arg)
      let out
      try {
        out = run()
      } catch (e) {
        const undecided = e instanceof Hole
        if (!answers({ threw: true, undecided }, viewsMayStop)) {
          fail(inst.def.name, VIEW_LAWS.total, messages.instanceFailed(inst.id, undecided ? messages.readsUndecidedValue() : (e as Error).message))
        }
        continue
      }
      const made: Document = {
        id: inst.id, view: inst.def.name, group: inst.def.group, title: out.title,
        arg: inst.arg.node?.ref ?? inst.arg.module, file: inst.file, intro: out.intro, blocks: out.blocks,
      }
      const text = JSON.stringify(made)
      const document = c.shown ? inUnits(text, c.shown) : made
      const written = serial({
        text, readBack: JSON.stringify(JSON.parse(text)), functionMark: JSON.stringify(deps.output.functionValue()),
        blockTypes: out.blocks.map((b) => String(b.type)),
      }, BLOCK_TYPES)
      if (written.notSerial) fail(inst.def.name, VIEW_LAWS.serial, inst.id)
      if (written.unknownBlock !== undefined) fail(inst.def.name, VIEW_LAWS.serial, messages.unknownBlockType(written.unknownBlock))
      try {
        if (opts.twice && !same([JSON.stringify({ ...document, ...run() }), JSON.stringify({ ...document, ...out })])) {
          fail(inst.def.name, VIEW_LAWS.deterministic, messages.twoRunsTwoDocuments(inst.id))
        }
      } catch (e) {
        if (!answers({ threw: true, undecided: e instanceof Hole }, viewsMayStop)) {
          fail(inst.def.name, VIEW_LAWS.total, messages.instanceFailed(inst.id, (e as Error).message))
        }
      }
      documents.push(document)
    }
    return { documents, failures }
  }

  return { loadViews, sortedViews, instances, VIEW_LAWS, checkViewDecls, runViews }
}

export type Api = ReturnType<typeof body>
export default body
