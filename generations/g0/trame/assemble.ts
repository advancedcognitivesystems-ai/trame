// L'assemblage : un composant, un environnement, un plan de branchement écrit en dur dans un programme.
// Le driver du langage du composant écrit le programme ; le driver de chaque provisionnement écrit l'infrastructure.
// Rien n'est décidé au démarrage : ni quelle implémentation, ni dans quel ordre. Seules les valeurs du graphe
// (décisions, règles) sont lues au démarrage, à la date du jour.

import { mkdirSync, writeFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { plan, depsOf, bodyOf, bodyPath, type Plan, type WireHost } from "./runtime"
import { meta, refOf, isFileBody, isNode } from "./internal"
import { driverFor } from "./drivers"
import type { Compiled } from "./compile"
import type { AnyNode } from "./kernel"

export interface Provision {
  node: AnyNode
  language: string
  /** Le chemin absolu du module. */
  module: string
  variables: { name: string; from: AnyNode; value: unknown }[]
}

export interface Assembly {
  host: WireHost
  component: AnyNode
  env: AnyNode
  entries: AnyNode[]
  plan: Plan
  provisions: Provision[]
  /** Le dossier de sortie, absolu : out/<environnement>. */
  out: string
  command: string
  /**
   * Programme figé : pour chaque nœud qui donne une valeur, la valeur écrite en JSON à la date de l'assemblage,
   * ou « déclaration » quand elle ne s'écrit pas en JSON (une règle) et se lit dans la déclaration du nœud.
   */
  fige?: Map<AnyNode, { json: string } | { declaration: true }>
  /**
   * Ce que lisent les valeurs « déclaration » (une règle lit d'autres nœuds par leur nom) : les données en vigueur
   * de ces nœuds, figées elles aussi, pour que la règle les lise telles qu'elles sont à la date de l'assemblage.
   */
  figeLues?: Map<AnyNode, string>
  /** Les changements datés du graphe après l'assemblage, qu'un programme figé ne verra pas. */
  changes?: string[]
  /** Où est le corps de chaque nœud construit : un fichier (chemin absolu), ou en ligne dans sa déclaration. */
  bodies: Map<AnyNode, { file: string } | { inline: true }>
  /** Le module du prélude (l'outillage des programmes figés), chemin absolu sans extension. */
  prelude: string
  /** Les dépendances du composant, par nom de paramètre. */
  componentDeps: { param: string; node: AnyNode }[]
  /** Les champs simples (JSON) de chaque point d'entrée, que le type du composant lit au démarrage. */
  entryFields: Map<AnyNode, Record<string, unknown>>
}

export interface Emitted {
  path: string
  content: string
}

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

export function findNode(c: Compiled, ref: string, kind?: string): AnyNode | undefined {
  return c.nodes.find((n) => (refOf(n) === ref || meta(n).id === ref) && (!kind || meta(n).def.name === kind))
}

export function prepareAssembly(
  c: Compiled, root: string, componentRef: string, envRef: string, opts: { figer?: boolean; changes?: string[] } = {},
): Assembly | { errors: string[] } {
  const component = findNode(c, componentRef, "component")
  const env = findNode(c, envRef, "environment")
  if (!component) return { errors: [`Composant inconnu : ${componentRef}`] }
  if (!env) return { errors: [`Environnement inconnu : ${envRef}`] }
  const g = c.graph
  const host: WireHost = { graph: g, root, today: c.today }
  const entries = g.from(component).in("in").where((v) => v.kind === "entry").nodes().map((v) => v.node)
  const needed = [...depsOf(component).map(([, n]) => n), ...entries]
  const p = plan(host, needed, env)
  if (p.errors.length) return { errors: p.errors }

  const errors: string[] = []
  const provisions: Provision[] = []
  for (const step of p.steps) {
    const body = bodyOf(step.node, "provisionnement")
    if (!isFileBody(body)) continue
    const variables = depsOf(step.node, "provisionnement").map(([name, from]) => {
      const def = meta(from).def
      if (!def.provide) {
        errors.push(`« ${g.view(step.node).title} » : la variable « ${name} » doit recevoir une valeur, « ${g.view(from).title} » n'en donne pas`)
        return { name, from, value: undefined }
      }
      try {
        const value = def.provide(g.self(from) as never, { env: g.view(env), date: c.today, g, wire: () => Promise.reject(), wireDeps: () => Promise.reject() })
        return { name, from, value }
      } catch (e) {
        errors.push(`« ${g.view(step.node).title} » : la variable « ${name} » n'a pas de valeur (${(e as Error).message})`)
        return { name, from, value: undefined }
      }
    })
    provisions.push({ node: step.node, language: body.language, module: bodyPath(host, step.node, body), variables })
  }
  // Figé : chaque valeur est lue maintenant. Une valeur amendée qui ne s'écrit pas en JSON ne peut pas être figée.
  let fige: Assembly["fige"]
  if (opts.figer) {
    fige = new Map()
    for (const step of p.steps.filter((s) => s.how === "valeur")) {
      const v = g.view(step.node)
      try {
        const value = meta(step.node).def.provide!(g.self(step.node) as never, { env: g.view(env), date: c.today, g, wire: () => Promise.reject(), wireDeps: () => Promise.reject() })
        const json = JSON.stringify(value)
        if (json !== undefined && typeof value !== "function" && JSON.stringify(JSON.parse(json)) === json) fige.set(step.node, { json })
        else if (v.amendedBy.length) errors.push(`« ${v.title} » est amendé à cette date et ne s'écrit pas en JSON : il ne peut pas être figé`)
        else fige.set(step.node, { declaration: true })
      } catch (e) {
        errors.push(`« ${v.title} » n'a pas de valeur à figer (${(e as Error).message})`)
      }
    }
  }
  const figeLues: Assembly["figeLues"] = new Map()
  if (fige) {
    const visit = (n: AnyNode) => {
      for (const e of g.edges(g.view(n), "out")) {
        if (e.name !== "uses" || figeLues.has(e.other.node)) continue
        const hasNode = (v: unknown): boolean =>
          isNode(v) || (Array.isArray(v) ? v.some(hasNode) : v !== null && typeof v === "object" ? Object.values(v).some(hasNode) : false)
        const data = Object.fromEntries(Object.entries(meta(e.other.node).data).filter(([, v]) => typeof v !== "function" && !hasNode(v)))
        figeLues.set(e.other.node, JSON.stringify(data))
        visit(e.other.node)
      }
    }
    for (const [n, f] of fige) if ("declaration" in f) visit(n)
  }
  if (errors.length) return { errors }
  const bodies: Assembly["bodies"] = new Map()
  for (const step of p.steps.filter((s) => s.how === "corps")) {
    const b = bodyOf(step.node)
    bodies.set(step.node, isFileBody(b) ? { file: bodyPath(host, step.node, b) } : { inline: true })
  }
  const entryFields: Assembly["entryFields"] = new Map()
  for (const e of entries) {
    const { def, data } = meta(e)
    const fields: Record<string, unknown> = {}
    for (const [k, f] of Object.entries(def.fields)) {
      if (f.type !== "value" || data[k] === undefined) continue
      const json = JSON.stringify(data[k])
      if (json !== undefined) fields[k] = JSON.parse(json)
    }
    entryFields.set(e, fields)
  }
  return {
    host, component, env, entries, plan: p, provisions, fige, figeLues, changes: opts.changes, bodies, entryFields,
    prelude: fileURLToPath(new URL("./internal", import.meta.url)),
    componentDeps: depsOf(component).map(([param, node]) => ({ param, node })),
    out: join(root, "out", kebab(meta(env).id ?? "env")),
    command: `trame assemble ${meta(component).id} --env ${meta(env).id}${opts.figer ? " --figer" : ""}`,
  }
}

/** Écrit le programme et l'infrastructure d'un composant pour un environnement. */
export function writeAssembly(a: Assembly): { written: string[]; errors: string[] } {
  const lang = String(meta(a.component).data.langage ?? "")
  const program = driverFor(lang)
  if (!program?.emitProgram) return { written: [], errors: [`Aucun driver ne sait assembler un composant en « ${lang} »`] }
  const files: Emitted[] = [...program.emitProgram(a, kebab(meta(a.component).id ?? "composant"))]
  const byLanguage = new Map<string, Provision[]>()
  for (const p of a.provisions) byLanguage.set(p.language, [...(byLanguage.get(p.language) ?? []), p])
  const errors: string[] = []
  for (const [language, items] of byLanguage) {
    const d = driverFor(language)
    if (!d?.emitProvision) errors.push(`Aucun driver ne sait écrire le provisionnement en « ${language} »`)
    else files.push(...d.emitProvision(a, items))
  }
  for (const f of files) {
    mkdirSync(dirname(f.path), { recursive: true })
    writeFileSync(f.path, f.content)
  }
  return { written: files.map((f) => f.path), errors }
}
