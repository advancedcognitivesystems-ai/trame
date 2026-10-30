// Ce que tous les rendus partagent : dire une valeur, une phrase de recoupement, trouver où vit la fiche d'un nœud.
// Pur : aucune dépendance à Node. La page s'en sert aussi.

import { OPEN_KEY, type Block, type Document, type Inline, type Json, type NodeRef, type ResolutionBlock, type Unit } from "../ir"
import { fmtUnit, frDate } from "../format"

type ValueInline = Extract<Inline, { t: "value" }>

function jsonText(v: Json, unit?: Unit, type?: ValueInline["type"]): string {
  if (v === null) return "absent"
  if (typeof v === "object" && !Array.isArray(v) && OPEN_KEY in v) return "à décider"
  if (type === "date" && typeof v === "string") return frDate(v)
  if (type === "range" && Array.isArray(v)) return `de ${jsonText(v[0], unit)} à ${jsonText(v[1], unit)}`
  if (type === "map" && typeof v === "object" && !Array.isArray(v)) return Object.entries(v).map(([k, x]) => `${k}, ${jsonText(x)}`).join(" ; ")
  if (Array.isArray(v)) return v.map((x) => jsonText(x, unit)).join(", ")
  if (typeof v === "object") return `{ ${Object.entries(v).map(([k, x]) => `${k} : ${jsonText(x, unit)}`).join(", ")} }`
  if (typeof v === "number") return fmtUnit(v, unit)
  return String(v)
}

/** Une valeur en mots : « 15 min », « à décider », « contesté, à trancher », « règle redéfinie ». */
export function valueText(i: ValueInline): string {
  if (i.open) return i.open === "contesté" ? "contesté, à trancher" : "à décider"
  if (i.rule) return i.rule === "redéfinie" ? "règle redéfinie" : "règle d'origine"
  return jsonText(i.value, i.unit, i.type)
}

/** Une valeur qui reste ouverte (non décidée ou contestée), même au fond d'une valeur composée. */
export function isOpen(i: ValueInline): boolean {
  if (i.open) return true
  const walk = (v: Json): boolean =>
    v !== null && typeof v === "object" && (Array.isArray(v) ? v.some(walk) : OPEN_KEY in v || Object.values(v).some(walk))
  return walk(i.value)
}

/** Le texte brut d'un morceau de phrase. */
export function inlineText(i: Inline): string {
  if (typeof i === "string") return i
  switch (i.t) {
    case "value": return valueText(i)
    case "ref": return i.title
    case "doc": return i.title
    case "status": return i.status
    case "severity": return i.severity
    case "date": return frDate(i.date)
    case "person": return i.name
    case "ident": return i.text
  }
}

export const inlinesText = (list: Inline[]) => list.map(inlineText).join("")

const refI = (r: NodeRef): Inline => ({ t: "ref", ...r })

/** « A, B et C », en gardant les références. */
export function listInline(items: Inline[]): Inline[] {
  const out: Inline[] = []
  items.forEach((x, i) => {
    if (i > 0) out.push(i === items.length - 1 ? " et " : ", ")
    out.push(x)
  })
  return out
}

/** La phrase qui raconte un recoupement : qui revendiquait quoi, qui l'a emporté, et pourquoi. */
export function resolutionInlines(r: ResolutionBlock): Inline[] {
  const paths = listInline(r.paths.map((p): Inline => (p ? { t: "ident", text: p } : "le nœud entier")))
  const head: Inline[] = ["Recoupement sur ", ...paths, " de ", refI(r.target), ", entre ", ...listInline(r.claimants.map(refI)), " : "]
  if (r.outcome === "contesté") {
    return [...head, { t: "value", value: null, open: "contesté" }, " par ", r.arbiter ? { t: "person", name: r.arbiter } : "un responsable à désigner", ` (${r.reason}).`]
  }
  const winners = listInline(r.applied.map(refI))
  const verdict: Inline[] = r.applied.length === r.claimants.length ? ["tous s'appliquent, dans l'ordre ", ...winners] : [...winners, " l'emporte"]
  const because: Inline[] = r.because.length ? [" ; voir ", ...listInline(r.because.map(refI))] : []
  return [...head, ...verdict, ` (${r.reason || "sans motif"}`, ...because, ")."]
}

/** « En vigueur » et la suite (« depuis le 15 octobre 2026, jusqu'au … »). */
export function validityParts(b: Extract<Block, { type: "validity" }>): [string, string] {
  const from = b.from ? frDate(b.from) : undefined
  const until = b.until ? frDate(b.until) : undefined
  if (b.state === "en vigueur") return ["En vigueur", `${from ? ` depuis le ${from}` : ""}${until ? `, jusqu'au ${until}` : ""}`]
  if (b.state === "pas encore en vigueur") return ["Pas encore en vigueur", `${from ? ` : à partir du ${from}` : ""}${until ? `, jusqu'au ${until}` : ""}`]
  return ["Plus en vigueur", until ? ` depuis le ${until}` : ""]
}

export const validityText = (b: Extract<Block, { type: "validity" }>) => validityParts(b).join("")

/** Parcourt tous les blocs, sections et fiches comprises. */
export function walkBlocks(blocks: Block[], fn: (b: Block) => void): void {
  for (const b of blocks) {
    fn(b)
    if (b.type === "section" || b.type === "details") walkBlocks(b.blocks, fn)
    if (b.type === "card") {
      walkBlocks(b.body, fn)
      for (const ch of b.children) walkBlocks(ch.body, fn)
    }
  }
}

export interface Location {
  doc: string
  file?: string
  anchor: string
}

/** Où vit la fiche de chaque nœud : le premier document qui la contient (un document de module, d'abord). */
export function locate(docs: Document[]): Map<string, Location> {
  const map = new Map<string, Location>()
  const ordered = [...docs].sort((a, b) => (a.group === "module" ? 0 : 1) - (b.group === "module" ? 0 : 1))
  for (const d of ordered) {
    walkBlocks(d.blocks, (b) => {
      if (b.type !== "card") return
      if (!map.has(b.ref)) map.set(b.ref, { doc: d.id, file: d.file, anchor: b.id })
      for (const ch of b.children) {
        if (!map.has(ch.ref)) map.set(ch.ref, { doc: d.id, file: d.file, anchor: ch.ref.split(".").slice(1).join(".") })
      }
    })
  }
  return map
}

export const idOf = (ref: string) => ref.split(".").slice(1).join(".") || ref
