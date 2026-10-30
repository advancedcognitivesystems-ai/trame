// Les vues : les charger, énumérer leurs instances, les exécuter sous leurs lois.
// Le noyau ne connaît aucune vue : il sait seulement ce qu'est une vue.

import { readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { views, Hole } from "./internal"
import { projectDirs } from "./project"
import type { Compilation, Document, ViewDef, ViewGroup, View, Block } from "./kernel"

export async function loadViews(root: string): Promise<ViewDef[]> {
  for (const dir of projectDirs(root).views) {
    if (!existsSync(dir)) continue
    for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts")).sort()) await import(pathToFileURL(join(dir, f)).href)
  }
  return views
}

const GROUP_ORDER: Record<ViewGroup, number> = { module: 0, document: 1, figure: 2, bilan: 3, "nœud": 4 }

export const sortedViews = () =>
  [...views].sort((a, b) => GROUP_ORDER[a.group] - GROUP_ORDER[b.group] || (a.order ?? 100) - (b.order ?? 100) || a.name.localeCompare(b.name))

export interface Instance {
  def: ViewDef
  id: string
  arg: { module?: string; node?: View }
  file?: string
}

/** Toutes les instances : une par module, une par nœud où la vue s'applique, ou une seule. */
export function instances(c: Compilation): Instance[] {
  const out: Instance[] = []
  for (const def of sortedViews()) {
    const writes = def.file ?? (def.group !== "nœud" && def.group !== "bilan")
    if (def.per === "module") {
      for (const m of c.modules()) {
        const id = def.name === sortedViews().find((v) => v.per === "module")?.name ? c.moduleDoc(m.id) : `${def.name}.${m.id}`
        out.push({ def, id, arg: { module: m.id }, file: writes ? `docs/${id}.md` : undefined })
      }
    } else if (def.per === "nœud") {
      for (const v of c.all().nodes()) {
        if (def.applies && !def.applies(v, c)) continue
        out.push({ def, id: `${def.name}:${v.ref}`, arg: { node: v } })
      }
    } else {
      out.push({ def, id: def.name, arg: {}, file: writes ? `docs/${def.name}.md` : undefined })
    }
  }
  return out
}

export const VIEW_LAWS = {
  declared: "Déclaration complète",
  total: "Répond sur ce graphe, sans planter",
  deterministic: "Même graphe, même document",
  serial: "Ne produit que du format intermédiaire",
} as const

export interface ViewFailure {
  view: string
  law: string
  example: string
}

/** Les lois que la déclaration d'une vue doit respecter, avant toute exécution. */
export function checkViewDecls(): ViewFailure[] {
  const out: ViewFailure[] = []
  const names = new Set<string>()
  for (const v of views) {
    if (!v.name || !v.label) out.push({ view: v.name ?? "?", law: VIEW_LAWS.declared, example: "nom ou libellé manquant" })
    if (names.has(v.name)) out.push({ view: v.name, law: VIEW_LAWS.declared, example: "deux vues portent ce nom" })
    names.add(v.name)
    if (v.group === "nœud" && v.per !== "nœud") out.push({ view: v.name, law: VIEW_LAWS.declared, example: "une vue du groupe « nœud » doit être par nœud" })
    if (v.applies && v.per !== "nœud") out.push({ view: v.name, law: VIEW_LAWS.declared, example: "applies() n'a de sens que pour une vue par nœud" })
  }
  return out
}

const BLOCK_TYPES = new Set<Block["type"]>([
  "para", "facts", "list", "table", "code", "checks", "validity", "details", "section", "summary", "issues",
  "resolution", "card", "figure",
])

/** Exécute toutes les instances, deux fois chacune, et vérifie les lois. */
export function runViews(c: Compilation): { documents: Document[]; failures: ViewFailure[] } {
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
      fail(inst.def.name, VIEW_LAWS.total, `${inst.id} : ${e instanceof Hole ? "lit une valeur non décidée" : (e as Error).message}`)
      continue
    }
    const document: Document = {
      id: inst.id, view: inst.def.name, group: inst.def.group, title: out.title,
      arg: inst.arg.node?.ref ?? inst.arg.module, file: inst.file, intro: out.intro, blocks: out.blocks,
    }
    const text = JSON.stringify(document)
    if (JSON.stringify(JSON.parse(text)) !== text || /"\(fonction\)"/.test(text)) fail(inst.def.name, VIEW_LAWS.serial, inst.id)
    const bad = out.blocks.find((b) => !BLOCK_TYPES.has(b.type))
    if (bad) fail(inst.def.name, VIEW_LAWS.serial, `type de bloc inconnu : ${String(bad.type)}`)
    try {
      if (JSON.stringify({ ...document, ...run() }) !== JSON.stringify({ ...document, ...out })) {
        fail(inst.def.name, VIEW_LAWS.deterministic, `${inst.id} : deux exécutions, deux documents`)
      }
    } catch (e) {
      fail(inst.def.name, VIEW_LAWS.total, `${inst.id} : ${(e as Error).message}`)
    }
    documents.push(document)
  }
  return { documents, failures }
}
