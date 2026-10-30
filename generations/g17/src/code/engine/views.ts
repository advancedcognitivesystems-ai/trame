// The views: load them, list their instances, run them under their laws.
// The kernel knows no view: it only knows what a view is.

import { ViewGroup, ViewScope } from "../../../trame/kernel"
import type { ProvidedBy, Compilation, Document, ViewDef, View, Block } from "../../../trame/kernel"
import type { FileReading, Layout, ModuleLoader, Paths, Prelude } from "../../architecture"
import type { ViewMessages } from "../../messages"
import type { Api as ProjectApi } from "./project"

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
  rank: number
  layout: Layout
  loader: ModuleLoader
  reading: FileReading
  paths: Paths
  prelude: Prelude
  project: ProjectApi
  messages: ProvidedBy<typeof ViewMessages>
  groupOrder: readonly ViewGroup[]
}

const body = (deps: Deps) => {
  const { loader, messages } = deps
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
      for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts")).sort()) {
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
    for (const def of sortedViews()) {
      const writes = def.file ?? (def.group !== ViewGroup.node && def.group !== ViewGroup.summary)
      if (def.per === ViewScope.module) {
        for (const m of c.modules()) {
          const id = def.name === sortedViews().find((v) => v.per === ViewScope.module)?.name ? c.moduleDoc(m.id) : `${def.name}.${m.id}`
          out.push({ def, id, arg: { module: m.id }, file: writes ? `${documents}/${id}${documentExtension}` : undefined })
        }
      } else if (def.per === ViewScope.node) {
        for (const v of c.all().nodes()) {
          if (def.applies && !def.applies(v, c)) continue
          out.push({ def, id: `${def.name}:${v.ref}`, arg: { node: v } })
        }
      } else {
        out.push({ def, id: def.name, arg: {}, file: writes ? `${documents}/${def.name}${documentExtension}` : undefined })
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
      if (!v.name || !v.label) out.push({ view: v.name ?? "?", law: VIEW_LAWS.declared, example: messages.missingNameOrLabel() })
      if (names.has(v.name)) out.push({ view: v.name, law: VIEW_LAWS.declared, example: messages.duplicateName() })
      names.add(v.name)
      if (v.group === ViewGroup.node && v.per !== ViewScope.node) out.push({ view: v.name, law: VIEW_LAWS.declared, example: messages.nodeGroupNotPerNode() })
      if (v.applies && v.per !== ViewScope.node) out.push({ view: v.name, law: VIEW_LAWS.declared, example: messages.appliesNotPerNode() })
    }
    return out
  }

  const BLOCK_TYPES = new Set<Block["type"]>([
    "para", "facts", "list", "table", "code", "checks", "validity", "details", "section", "summary", "issues",
    "resolution", "card", "figure",
  ])

  /** Runs every instance, twice each, and checks the laws. */
  function runViews(c: Compilation): { documents: Document[]; failures: ViewFailure[] } {
    const documents: Document[] = []
    const failures: ViewFailure[] = []
    const fail = (view: string, law: string, example: string) => {
      if (!failures.some((f) => f.view === view && f.law === law)) failures.push({ view, law, example })
    }
    for (const inst of instances(c)) {
      const run = () => inst.def.run(c, inst.arg)
      let out
      try {
        out = run()
      } catch (e) {
        fail(inst.def.name, VIEW_LAWS.total, messages.instanceFailed(inst.id, e instanceof Hole ? messages.readsUndecidedValue() : (e as Error).message))
        continue
      }
      const document: Document = {
        id: inst.id, view: inst.def.name, group: inst.def.group, title: out.title,
        arg: inst.arg.node?.ref ?? inst.arg.module, file: inst.file, intro: out.intro, blocks: out.blocks,
      }
      const text = JSON.stringify(document)
      if (JSON.stringify(JSON.parse(text)) !== text || /"\(function\)"/.test(text)) fail(inst.def.name, VIEW_LAWS.serial, inst.id)
      const bad = out.blocks.find((b) => !BLOCK_TYPES.has(b.type))
      if (bad) fail(inst.def.name, VIEW_LAWS.serial, messages.unknownBlockType(String(bad.type)))
      try {
        if (JSON.stringify({ ...document, ...run() }) !== JSON.stringify({ ...document, ...out })) {
          fail(inst.def.name, VIEW_LAWS.deterministic, messages.twoRunsTwoDocuments(inst.id))
        }
      } catch (e) {
        fail(inst.def.name, VIEW_LAWS.total, messages.instanceFailed(inst.id, (e as Error).message))
      }
      documents.push(document)
    }
    return { documents, failures }
  }

  return { loadViews, sortedViews, instances, VIEW_LAWS, checkViewDecls, runViews }
}

export type Api = ReturnType<typeof body>
export default body
