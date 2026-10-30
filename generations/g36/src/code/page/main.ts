// The page: it shows the documents the engine wrote, in the payload (HTML, Markdown, text), and draws their figures.
// It receives the graph compiled at several dates (standalone export), or follows it live (trame dev).
// It knows no kind and no view: only documents and figures.
// Vocabulary values are named by their key in CSS classes (`st-held`, `oc-passed`, `sev-error`…), and shown in words
// through the renderers' message catalog, as the documents show them.

import type { Bundle, Document, Figure, FigureEdge, FigureNode, Payload, ProvidedBy } from "../../../trame/kernel"
import {
  DEFAULT_LANGUAGE, DateRole, EdgeRole, Nature, Shape, Status, ViewGroup, ViewScope,
  addDays, daysBetween, formatDate, formatDateShort, fullDate, keyOf, listParts, plural,
} from "../../../trame/kernel"
import type { Dates, Lists } from "../../messages"
import createCommon, { type Api as CommonApi, type Location } from "../rendering/common"
import renderingMessages from "../rendering/messages"
import createCounts from "../algebra/counts"
import createSequences from "../algebra/sequences"
import createTexts from "../algebra/texts"
import createValueTypes from "../algebra/values"

// The page runs in the browser, where nothing assembles the graph (there is no driver for the browser).
// The documents arrive written (HTML, Markdown, text); only the common renderer is wired here, for the figures and the
// navigation, by hand, with the renderers' message catalog (a file without dependencies), the dates and lists of the payload's language, and the monoid of texts
// with the structures it builds on. Each is given its constants here, as the graph declares them ("algebra.Counts",
// "standards.EcmaScript", "algebra.Texts", "standards.EcmaScriptTypes", "conventions.ReferenceSyntax",
// "rendering.SentenceSlots"): their types admit those values only, so a change in the graph stops this file from compiling.
const messages = renderingMessages()
const counts = createCounts({ zero: 0, one: 1 })
const sequences = createSequences({ ecma: { firstIndex: 0, notFound: -1 }, counts })
const texts = createTexts({ empty: "", space: " ", ellipsis: "…", wordBoundary: "(\\p{Ll}|\\p{Nd})(\\p{Lu})", everyWord: "gu", sequences })
const values = createValueTypes({
  types: { undefined: "undefined", object: "object", boolean: "boolean", number: "number", string: "string", symbol: "symbol", bigint: "bigint", function: "function" },
})
// The language of the payload: the dates the page writes follow it. The common renderer is made for it when the first
// payload arrives, and made again when the language changes.
let language: string | undefined
let dates: ProvidedBy<typeof Dates>
let lists: ProvidedBy<typeof Lists>
let common: CommonApi

function speak(p: Payload | undefined) {
  const tag = p?.language || DEFAULT_LANGUAGE
  if (tag === language) return
  language = tag
  dates = { format: (iso) => formatDate(iso, tag), formatShort: (iso, withYear = false) => formatDateShort(iso, withYear, tag) }
  lists = { conjunction: (items) => listParts(items, tag) }
  common = createCommon({ dates, lists, messages, texts, values, syntax: { separator: ".", wholeNode: "" }, slots: { delimiter: "\u0000" } })
}

declare global {
  interface Window {
    /** The graph of an exported page, compressed (decision "A page carries its graph compressed": gzip, in base64). */
    TRAME_BUNDLE_GZIP?: string
    TRAME_DEV?: boolean
  }
}

type Mode = "rendered" | "markdown" | "text"
const MODES: Mode[] = ["rendered", "markdown", "text"]
type GraphFigure = Extract<Figure, { type: "graph" }>
type TimelineFigure = Extract<Figure, { type: "timeline" }>

const $ = (id: string) => document.getElementById(id) as HTMLElement
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
/** The CSS class part of a vocabulary value: its key, which does not change when the words do. */
const key = (vocabulary: Record<string, string>, value: string) => keyOf(vocabulary, value) ?? ""
// The machine outputs: their names come from the payload (the project's layout chooses them).
let MACHINE: string[] = []

const state = {
  bundle: undefined as Bundle | undefined,
  date: "",
  doc: "",
  mode: "rendered" as Mode,
  node: "",
  busy: false,
  hideBanner: false,
}

try {
  const saved = JSON.parse(localStorage.getItem("trame-page") || "null")
  if (saved) Object.assign(state, { doc: saved.doc ?? "", mode: MODES.includes(saved.mode) ? saved.mode : "rendered", node: saved.node ?? "" })
} catch {
  /* storage unavailable: default state */
}
const save = () => {
  try {
    localStorage.setItem("trame-page", JSON.stringify({ doc: state.doc, mode: state.mode, node: state.node }))
  } catch {
    /* nothing */
  }
}

const payload = (): Payload | undefined => state.bundle?.dates.find((d) => d.date === state.date)?.payload
const locations = new WeakMap<Payload, Map<string, Location>>()
const locOf = (p: Payload) => {
  let m = locations.get(p)
  if (!m) locations.set(p, (m = common.locate(p.documents)))
  return m
}
const findDoc = (p: Payload, id: string) => p.documents.find((d) => d.id === id)
const firstDoc = (p: Payload) => p.documents.find((d) => d.group === ViewGroup.document) ?? p.documents[0]

// Documents ---------------------------------------------------------------------
// The engine writes each document in HTML, with the renderer of every other format (choice "The page in HTML"): the
// page puts it in place, and draws its figures where the HTML leaves room for them (choice "Figures drawn by the page").

/** A reference outside a document (the note of a date): a link the page follows, as the documents write them. */
const refLink = (ref: string, title: string) => `<a class="ref" data-ref="${esc(ref)}" tabindex="0">${esc(title)}</a>`

let figureCount = 0

// Figures -----------------------------------------------------------------------

function wrapWords(text: string, max: number, lines: number): string[] {
  const words = text.split(" ")
  const out: string[] = []
  let cur = ""
  for (const w of words) {
    if ((cur + " " + w).trim().length > max && cur) {
      out.push(cur)
      cur = w
    } else cur = (cur + " " + w).trim()
  }
  if (cur) out.push(cur)
  if (out.length > lines) {
    const kept = out.slice(0, lines)
    kept[lines - 1] = kept[lines - 1].replace(/.{0,2}$/, "") + "…"
    return kept
  }
  return out
}

function layoutGraph(f: GraphFigure, W: number, H: number) {
  const GX = 22
  const GY = 62
  const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
  const groupIndex = new Map(f.groups.map((g, i) => [g.id, i]))
  const byLayer = layers.map((l) => f.nodes.filter((n) => n.layer === l)
    .sort((a, b) => (groupIndex.get(a.module) ?? 0) - (groupIndex.get(b.module) ?? 0) || a.title.localeCompare(b.title)))
  const neighbors = new Map<string, string[]>()
  for (const e of f.edges) {
    neighbors.set(e.from, [...(neighbors.get(e.from) ?? []), e.to])
    neighbors.set(e.to, [...(neighbors.get(e.to) ?? []), e.from])
  }
  // Barycentres: each node goes under the average of its neighbours in the next layer (a few passes, both ways).
  for (let iter = 0; iter < 8; iter++) {
    const down = iter % 2 === 0
    const order = down ? byLayer.map((_, i) => i).slice(1) : byLayer.map((_, i) => i).reverse().slice(1)
    for (const li of order) {
      const ref = byLayer[down ? li - 1 : li + 1]
      const index = new Map(ref.map((n, i) => [n.ref, i]))
      const bary = new Map(byLayer[li].map((n, i) => {
        const ns = (neighbors.get(n.ref) ?? []).map((r) => index.get(r)).filter((x): x is number => x !== undefined)
        return [n.ref, ns.length ? ns.reduce((a, b) => a + b, 0) / ns.length : i]
      }))
      byLayer[li] = [...byLayer[li]].sort((a, b) => bary.get(a.ref)! - bary.get(b.ref)!)
    }
  }
  const maxCount = Math.max(...byLayer.map((l) => l.length))
  const totalW = maxCount * (W + GX) - GX
  const pos = new Map<string, { x: number; y: number; layer: number }>()
  byLayer.forEach((list, li) => {
    const offset = (totalW - (list.length * (W + GX) - GX)) / 2
    list.forEach((n, i) => pos.set(n.ref, { x: offset + i * (W + GX), y: li * (H + GY), layer: li }))
  })
  return { pos, width: totalW, height: byLayer.length * (H + GY) - GY }
}

function graphSvg(f: GraphFigure): string {
  const W = 178
  const H = 60
  const P = 10
  const id = `f${figureCount++}`
  const { pos, width, height } = layoutGraph(f, W, H)
  // On the whole map, edge labels would overlap: they stay on hover.
  const showLabels = f.shape !== Shape.layers
  const marker = (name: string, cls: string) =>
    `<marker id="${id}-${name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="${cls}" d="M0,0 L10,5 L0,10 z"/></marker>`
  const markerOf = (e: FigureEdge) =>
    e.nature === Nature.computed ? ""
      : e.role === EdgeRole.winner || e.role === EdgeRole.support ? "accent"
        : e.role === EdgeRole.discarded || e.role === EdgeRole.replaced ? "bad"
          : e.role === EdgeRole.contested ? "warn" : "base"
  const edges = f.edges.map((e) => {
    const a = pos.get(e.from)
    const b = pos.get(e.to)
    if (!a || !b) return ""
    let d: string
    let mid: { x: number; y: number }
    if (a.layer !== b.layer) {
      const down = a.layer < b.layer
      const s = { x: a.x + W / 2, y: down ? a.y + H : a.y }
      const t = { x: b.x + W / 2, y: down ? b.y : b.y + H }
      const dy = (t.y - s.y) / 2
      d = `M${s.x},${s.y} C${s.x},${s.y + dy} ${t.x},${t.y - dy} ${t.x},${t.y}`
      mid = { x: (s.x + t.x) / 2, y: (s.y + t.y) / 2 }
    } else {
      const s = { x: a.x + W / 2, y: a.y }
      const t = { x: b.x + W / 2, y: b.y }
      d = `M${s.x},${s.y} C${s.x},${s.y - 34} ${t.x},${t.y - 34} ${t.x},${t.y}`
      mid = { x: (s.x + t.x) / 2, y: s.y - 26 }
    }
    const m = markerOf(e)
    const cls = ["fe", `n-${key(Nature, e.nature)}`, e.active ? "" : "inactive", e.role ? `r-${key(EdgeRole, e.role)}` : ""].filter(Boolean).join(" ")
    const label = e.active ? e.label : messages.inactiveLabel(e.label)
    return `<g class="${cls}"><title>${esc(label)}</title><path d="${d}"${m ? ` marker-end="url(#${id}-${m})"` : ""}/>${showLabels ? `<text x="${mid.x}" y="${mid.y + 4}" text-anchor="middle">${esc(label.toLowerCase())}</text>` : ""}</g>`
  }).join("")
  const nodes = f.nodes.map((n: FigureNode) => {
    const p = pos.get(n.ref)!
    const lines = wrapWords(n.title, 24, 2)
    const status = n.status ? common.statusText(n.status) : ""
    const cls = ["fn", n.status ? `st-${key(Status, n.status)}` : "", n.history ? "hist" : "", n.active ? "" : "inactive", n.ref === f.focus ? "focus" : ""].filter(Boolean).join(" ")
    const tip = `${n.title} · ${n.kindLabel}${status ? ` · ${status}` : ""}${n.active ? "" : ` · ${messages.notInForce()}`}${n.open ? " · a decision remains to be taken" : ""}`
    return `<g class="${cls}" data-ref="${esc(n.ref)}" transform="translate(${p.x},${p.y})" tabindex="0" role="link" aria-label="${esc(tip)}">
      <title>${esc(tip)}</title>
      <rect class="box" width="${W}" height="${H}" rx="7"/>
      ${lines.map((l, i) => `<text x="10" y="${19 + i * 15}">${esc(l)}</text>`).join("")}
      <text class="kind" x="10" y="${H - 9}">${esc(wrapWords(`${n.kindLabel}${status ? ` · ${status}` : ""}`, 27, 1)[0])}</text>
      ${n.open ? `<circle class="open" cx="${W - 10}" cy="10" r="5"/>` : ""}
    </g>`
  }).join("")
  const w = width + 2 * P
  const h = height + 2 * P + 30
  return `<svg viewBox="${-P} ${-P - 30} ${w} ${h}" width="${w}" style="width:100%;min-width:${Math.round(w * 0.62)}px;max-width:${w}px" role="img" aria-label="Figure">
    <defs>${marker("base", "arrow")}${marker("accent", "arrow-accent")}${marker("bad", "arrow-bad")}${marker("warn", "arrow-warn")}</defs>
    ${edges}${nodes}
  </svg>`
}

function legend(f: GraphFigure): string {
  const has = (test: (e: FigureEdge) => boolean) => f.edges.some(test)
  const sample = (cls: string, dash?: string) =>
    `<svg width="26" height="8" aria-hidden="true"><line x1="0" y1="4" x2="26" y2="4" class="${cls}" stroke-width="2"${dash ? ` stroke-dasharray="${dash}"` : ""}/></svg>`
  const items: string[] = []
  if (has((e) => e.nature === Nature.declared && !e.role)) items.push(`<span>${sample("lg-base", "")}declared edge</span>`)
  if (has((e) => e.nature === Nature.inferred)) items.push(`<span>${sample("lg-base", "2 3")}inferred from the code</span>`)
  if (has((e) => e.nature === Nature.computed)) items.push(`<span>${sample("lg-accent", "6 4")}computed overlap</span>`)
  if (has((e) => e.role === EdgeRole.winner)) items.push(`<span>${sample("lg-accent")}prevails</span>`)
  if (has((e) => e.role === EdgeRole.discarded || e.role === EdgeRole.replaced)) items.push(`<span>${sample("lg-bad", "5 4")}discarded</span>`)
  if (f.nodes.some((n) => n.history)) items.push(`<span><svg width="18" height="12" aria-hidden="true"><rect x="1" y="1" width="16" height="10" rx="2" class="lg-box" stroke-dasharray="3 2"/></svg>history</span>`)
  if (f.nodes.some((n) => !n.active)) items.push(`<span><svg width="18" height="12" aria-hidden="true"><rect x="1" y="1" width="16" height="10" rx="2" class="lg-box" opacity="0.45"/></svg>${esc(messages.notInForce())}</span>`)
  if (f.nodes.some((n) => n.open)) items.push(`<span><svg width="12" height="12" aria-hidden="true"><circle cx="6" cy="6" r="5" class="lg-open"/></svg>decision to take</span>`)
  return items.length ? `<div class="legend">${items.join("")}</div>` : ""
}

function timelineSvg(f: TimelineFigure): string {
  const Wd = 920
  const labelW = 240
  const rowH = 36
  const top = 40
  const pad = 18
  const span = Math.max(1, daysBetween(f.from, f.to))
  const x = (d: string) => labelW + (Math.max(0, Math.min(span, daysBetween(f.from, d))) / span) * (Wd - labelW - pad)
  const ticks: string[] = []
  let m = fullDate(f.from).slice(0, 7) + "-01"
  while (m <= f.to) {
    if (m >= f.from) {
      ticks.push(`<line class="grid" x1="${x(m)}" y1="${top - 8}" x2="${x(m)}" y2="${top + f.lanes.length * rowH}"/><text class="tick" x="${x(m) + 4}" y="${top - 12}">${esc(dates.formatShort(m.slice(0, 7)).replace(/ \d{4}$/, ""))}</text>`)
    }
    const [y, mo] = m.split("-").map(Number)
    m = mo === 12 ? `${y + 1}-01-01` : `${y}-${String(mo + 1).padStart(2, "0")}-01`
  }
  const lanes = f.lanes.map((l, i) => {
    const y = top + i * rowH
    const title = l.title.length > 32 ? l.title.slice(0, 31) + "…" : l.title
    const periods = l.periods.map((p) => {
      const x1 = x(p.from ?? f.from)
      const x2 = x(p.until ?? f.to)
      const when = `${p.from ? `from ${dates.format(p.from)}` : ""}${p.until ? ` until ${dates.format(p.until)}` : ", no end"}`
      return `<rect class="period${l.active ? "" : " inactive"}" x="${x1}" y="${y + 10}" width="${Math.max(4, x2 - x1)}" height="12" rx="6"><title>${esc(`${l.title} · ${when}`)}</title></rect>`
    }).join("")
    const marks = l.marks.filter((mk) => mk.role === DateRole.deadline || mk.role === DateRole.review).map((mk) => {
      const cx = x(fullDate(mk.date))
      const tip = esc(`${mk.label}: ${dates.format(mk.date)}`)
      return mk.role === DateRole.review
        ? `<circle class="review" cx="${cx}" cy="${y + 16}" r="5"><title>${tip}</title></circle>`
        : `<path class="mark" d="M${cx},${y + 8} L${cx + 7},${y + 16} L${cx},${y + 24} L${cx - 7},${y + 16} z"><title>${tip}</title></path>`
    }).join("")
    return `<g class="lane-label" data-ref="${esc(l.ref)}" tabindex="0" role="link"><text x="0" y="${y + 15}">${esc(title)}</text><text class="muted" x="0" y="${y + 29}">${esc(l.kindLabel)}</text></g>${periods}${marks}`
  }).join("")
  const tx = x(f.today)
  const h = top + f.lanes.length * rowH + 12
  return `<svg class="tl" viewBox="0 0 ${Wd} ${h}" width="${Wd}" style="width:100%;min-width:640px;max-width:${Wd}px" role="img" aria-label="Timeline">
    ${ticks.join("")}${lanes}
    <line class="today" x1="${tx}" y1="${top - 26}" x2="${tx}" y2="${h - 4}"/>
    <text class="muted" x="${tx + 5}" y="${top - 26}">date of the graph · ${esc(dates.formatShort(f.today))}</text>
  </svg>`
}

// The explorer ------------------------------------------------------------------
// A graph too large to be read whole is explored from node to node: first its layers, as rows of names grouped by
// module; then one node, with its neighbours in the layers above and below it. A click on a neighbour moves to it, the
// trail keeps the way back, and the node in focus opens its card.

/** A graph with more nodes than this is explored rather than drawn whole. */
const EXPLORED_ABOVE = 40
/** The neighbours shown in one layer before the rest is asked for. */
const NEIGHBOURS_SHOWN = 15

interface Exploration {
  f: GraphFigure
  focus?: string
  trail: string[]
  /** The layers whose neighbours are all shown. */
  all: Set<number>
}
const explorations = new Map<string, Exploration>()

const explored = (f: Figure): boolean => f.type === "graph" && f.nodes.length > EXPLORED_ABOVE
const nodeLabel = (n: FigureNode) => `${n.title} · ${n.kindLabel}`

function explorerBar(id: string, x: Exploration): string {
  const byRef = new Map(x.f.nodes.map((n) => [n.ref, n]))
  const trail = x.trail.map((ref) => byRef.get(ref)).filter((n): n is FigureNode => !!n)
  const options = [...x.f.nodes].sort((a, b) => a.title.localeCompare(b.title)).map((n) => `<option value="${esc(nodeLabel(n))}"></option>`).join("")
  return `<div class="explorer-bar">
    <button type="button" class="chip-btn" data-explore="${id}" data-node="" aria-pressed="${!x.focus}">Layers</button>
    <input type="search" class="explorer-find" list="${id}-nodes" data-explore-find="${id}" placeholder="Go to a node…" aria-label="Go to a node">
    <datalist id="${id}-nodes">${options}</datalist>
    ${trail.length ? `<ol class="trail" aria-label="Nodes visited">${trail.map((n) => `<li><button type="button" class="chip-btn" data-explore="${id}" data-node="${esc(n.ref)}" aria-pressed="${n.ref === x.focus}">${esc(n.title)}</button></li>`).join("")}</ol>` : ""}
  </div>`
}

function explorerLayers(id: string, f: GraphFigure): string {
  const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
  const groups = new Map(f.groups.map((g) => [g.id, g.label]))
  return `<div class="layers">${layers.map((l) => {
    const here = f.nodes.filter((n) => n.layer === l)
    const modules = [...new Set(here.map((n) => n.module))].sort((a, b) => (groups.get(a) ?? a).localeCompare(groups.get(b) ?? b))
    return `<section class="layer"><h4 class="layer-name">${esc(messages.rank(l))} · ${esc(plural(here.length, "node"))}</h4>${modules.map((m) => `<div class="layer-module">
      <span class="layer-module-name">${esc(groups.get(m) ?? m)}</span>
      <div class="chips">${here.filter((n) => n.module === m).sort((a, b) => a.title.localeCompare(b.title)).map((n) =>
        `<button type="button" class="node-chip${n.status ? ` st-${key(Status, n.status)}` : ""}${n.active ? "" : " inactive"}" data-explore="${id}" data-node="${esc(n.ref)}" title="${esc(nodeLabel(n))}">${esc(n.title)}</button>`).join("")}</div>
    </div>`).join("")}</section>`
  }).join("")}</div>`
}

function explorerFocus(id: string, x: Exploration): string {
  const f = x.f
  const H = 62
  const GX = 16
  const Wd = 976
  /** The left margin, where the rail that ties the groups to the node in focus runs. */
  const RAIL = 14
  const LEFT = 30
  /** Inside a group: its name, then its boxes, as many to a line as `cols`, as wide as the group allows. */
  const HEAD = 30
  const LINE = 16
  const PAD = 14
  const GAP = 24
  const cols = 4
  const W = Math.floor((Wd - LEFT - 2 * PAD - (cols - 1) * GX) / cols)
  const chars = Math.floor(W / 7.4)
  const byRef = new Map(f.nodes.map((n) => [n.ref, n]))
  const focus = byRef.get(x.focus!)!
  // Each neighbour once, with the relations that link it to the node in focus, said from the node in focus.
  const links = new Map<string, { node: FigureNode; relations: string[] }>()
  for (const e of f.edges) {
    if (e.from !== focus.ref && e.to !== focus.ref) continue
    const other = byRef.get(e.from === focus.ref ? e.to : e.from)
    if (!other || other.ref === focus.ref) continue
    const said = e.from === focus.ref ? e.label : e.inverse
    const relation = (e.active ? said : messages.inactiveLabel(said)).toLowerCase()
    const l = links.get(other.ref) ?? { node: other, relations: [] }
    if (!l.relations.includes(relation)) l.relations.push(relation)
    links.set(other.ref, l)
  }
  // The node in focus in the middle; above it, its neighbours in the layers nearer the roots; under it, those of its own
  // layer, then those further away. Each layer is a group of boxes, wrapped, the rest of a long one on demand; a rail on
  // the left ties every group to the node in focus.
  const ranks = [...new Set([...links.values()].map((l) => l.node.layer))].sort((a, b) => a - b)
  const order = [...ranks.filter((r) => r < focus.layer), undefined, ...ranks.filter((r) => r >= focus.layer)]
  const box = (n: FigureNode, px: number, py: number, under: string, attrs: string, extra: string) => {
    const status = n.status ? common.statusText(n.status) : ""
    const cls = ["fn", n.status ? `st-${key(Status, n.status)}` : "", n.history ? "hist" : "", n.active ? "" : "inactive", extra].filter(Boolean).join(" ")
    const tip = `${nodeLabel(n)}${status ? ` · ${status}` : ""}`
    return `<g class="${cls}" ${attrs} transform="translate(${px},${py})" tabindex="0" aria-label="${esc(tip)}">
      <title>${esc(tip)}</title>
      <rect class="box" width="${W}" height="${H}" rx="7"/>
      ${wrapWords(n.title, chars, 2).map((t, i) => `<text x="10" y="${19 + i * 15}">${esc(t)}</text>`).join("")}
      <text class="kind" x="10" y="${H - 9}">${esc(wrapWords(under, chars + 4, 1)[0])}</text>
      ${n.open ? `<circle class="open" cx="${W - 10}" cy="10" r="5"/>` : ""}
    </g>`
  }
  const parts: string[] = []
  const ties: number[] = []
  let y = 0
  for (const layer of order) {
    if (layer === undefined) {
      const px = LEFT + (Wd - LEFT - W) / 2
      parts.push(box(focus, px, y, `${focus.kindLabel} · open its card`, `data-ref="${esc(focus.ref)}" role="link"`, "focus"))
      parts.push(`<path class="explorer-rail" d="M${RAIL},${y + H / 2} H${px}"/>`)
      ties.push(y + H / 2)
      y += H + GAP
      continue
    }
    const here = [...links.values()].filter((l) => l.node.layer === layer)
      .sort((a, b) => a.relations[0].localeCompare(b.relations[0]) || a.node.title.localeCompare(b.node.title))
    const shown = x.all.has(layer) ? here : here.slice(0, NEIGHBOURS_SHOWN)
    const items: ({ link: (typeof here)[number] } | { more: number })[] = [
      ...shown.map((l) => ({ link: l })),
      ...(shown.length < here.length ? [{ more: here.length - shown.length }] : []),
    ]
    const lines = Math.ceil(items.length / cols)
    const height = HEAD + lines * H + (lines - 1) * LINE + PAD
    const inner: string[] = []
    items.forEach((item, i) => {
      const px = LEFT + PAD + (i % cols) * (W + GX)
      const py = y + HEAD + Math.floor(i / cols) * (H + LINE)
      if ("more" in item) {
        inner.push(`<g class="fn more" data-explore-more="${id}" data-layer="${layer}" transform="translate(${px},${py})" tabindex="0" role="button">
          <rect class="box" width="${W}" height="${H}" rx="7"/><text x="${W / 2}" y="${H / 2 + 4}" text-anchor="middle">${esc(`${item.more} more`)}</text></g>`)
      } else inner.push(box(item.link.node, px, py, `${item.link.relations.join(", ")} · ${item.link.node.kindLabel}`, `data-explore="${id}" data-node="${esc(item.link.node.ref)}" role="button"`, ""))
    })
    parts.push(`<g class="explorer-group"><rect class="frame" x="${LEFT}" y="${y}" width="${Wd - LEFT}" height="${height}" rx="9"/>
      <text class="rank" x="${LEFT + PAD}" y="${y + 19}">${esc(messages.rank(layer))} · ${esc(plural(here.length, "neighbour"))}</text>${inner.join("")}</g>`)
    parts.push(`<path class="explorer-rail" d="M${RAIL},${y + 15} H${LEFT}"/>`)
    ties.push(y + 15)
    y += height + GAP
  }
  const rail = `<path class="explorer-rail" d="M${RAIL},${Math.min(...ties)} V${Math.max(...ties)}"/>`
  const h = y - GAP
  return `<svg class="explorer-graph" viewBox="-6 -6 ${Wd + 12} ${h + 12}" width="${Wd + 12}" style="width:100%;min-width:620px;max-width:${Wd + 12}px" role="img" aria-label="${esc(focus.title)} and its neighbours">
    ${rail}${parts.join("")}
  </svg>`
}

function explorerInner(id: string): string {
  const x = explorations.get(id)!
  return explorerBar(id, x) + `<div class="figure-scroll">${x.focus ? explorerFocus(id, x) : explorerLayers(id, x.f)}</div>`
}

/** Moves an exploration to a node (to its layers, without one), and draws it again in place. */
function explore(id: string, node: string | undefined) {
  const x = explorations.get(id)
  const el = document.getElementById(id)
  if (!x || !el) return
  x.focus = node || undefined
  x.all.clear()
  if (node) x.trail = [...x.trail.filter((r) => r !== node), node].slice(-8)
  el.querySelector(".explorer")!.innerHTML = explorerInner(id)
  // Back to the top of the figure when it was scrolled past: the bar and the node in focus come into view.
  if (el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start" })
}

/** The figures of a document, in the order its HTML holds them (the order of its blocks, cards included). */
function figuresOf(d: Document): Figure[] {
  const found: Figure[] = []
  common.walkBlocks(d.blocks, (b) => {
    if (b.type === "figure") found.push(b.figure)
  })
  return found
}

/** Draws each figure in the place the HTML leaves for it: a drawing, or the explorer of the layers. */
function drawFigures(root: HTMLElement, d: Document) {
  const figures = figuresOf(d)
  root.querySelectorAll<HTMLElement>("[data-figure]").forEach((place, i) => {
    const f = figures[i]
    place.removeAttribute("data-figure")
    if (!f) return
    if (f.type === "graph" && explored(f)) {
      const id = `f${figureCount++}`
      explorations.set(id, { f, focus: f.focus, trail: f.focus ? [f.focus] : [], all: new Set() })
      place.className = "explorer"
      place.innerHTML = explorerInner(id)
      if (place.parentElement) place.parentElement.id = id
      return
    }
    place.innerHTML = f.type === "graph" ? graphSvg(f) + legend(f) : timelineSvg(f)
  })
}

const hasFigure = (d: Document) => figuresOf(d).length > 0

function renderDocument(el: HTMLElement, p: Payload, d: Document) {
  figureCount = 0
  explorations.clear()
  el.innerHTML = p.renders?.[d.id]?.html ?? ""
  drawFigures(el, d)
}

function highlightJson(text: string): string {
  return esc(text).replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g, (_m, str, colon, lit, num) => {
    if (str) return colon ? `<span class="j-key">${str}</span>${colon}` : `<span class="j-str">${str}</span>`
    if (lit) return `<span class="j-lit">${lit}</span>`
    return `<span class="j-num">${num}</span>`
  })
}

const commandOf = (d: Document, date: string) => {
  const at = ` -- --at ${date}`
  if (d.group === ViewGroup.summary) return `npm run build${at}`
  if (d.group === ViewGroup.node) return `npm run trame ${d.view} ${common.idOf(d.arg ?? "")}${at}`
  if (d.group === ViewGroup.module) return `npm run trame view ${d.view} ${d.arg}${at}`
  return `npm run trame ${d.view}${at}`
}

const timeOf = (iso: string) => new Date(iso).toLocaleTimeString(language)

function renderStatus() {
  const el = $("status")
  const b = state.bundle
  el.className = `status${state.busy ? " busy" : b?.error ? " failed" : ""}`
  const time = b ? timeOf(b.generatedAt) : ""
  const text = !b ? "waiting for the first compilation…"
    : state.busy ? "compiling…"
      : b.mode === "dev"
        ? b.error ? `last compilation refused · valid graph from ${time}` : `trame dev · compiled at ${time} · ${plural(b.dates.length, "date")}`
        : `export of ${dates.format(b.today)} · ${plural(b.dates.length, "date")}`
  el.innerHTML = `<span class="dot"></span><span>${esc(text)}</span>`
}

function renderDates() {
  const b = state.bundle
  if (!b) return
  let prevYear = ""
  $("dates").innerHTML = b.dates.map((d) => {
    const year = d.date.slice(0, 4)
    const small = d.date === b.today ? "today" : year !== prevYear ? year : ""
    prevYear = year
    return `<button type="button" data-date="${d.date}" aria-pressed="${d.date === state.date}"${d.payload ? "" : ` class="failed" disabled title="${esc(d.error ?? "failed")}"`}>${esc(dates.formatShort(d.date))}<small>${small}</small></button>`
  }).join("")
  const p = payload()
  const notes: string[] = []
  if (p) {
    // The day a period ends, the node is still in force: it leaves the graph the day after.
    const changeDay = (e: Payload["events"][number]) => (e.role === DateRole.end ? addDays(e.date, 1) : fullDate(e.date))
    const on = p.events.filter((e) => changeDay(e) === state.date)
    for (const e of on) {
      const what = e.role === DateRole.start ? "Comes into force" : e.role === DateRole.end ? "No longer in force" : e.role === DateRole.review ? "Review planned" : e.label
      notes.push(`${esc(what)}: ${refLink(e.ref, e.title)}`)
    }
    const first = p.events.map(changeDay).sort()[0]
    if (!on.length) notes.push(first && state.date < first ? "Before any dated change: the graph as it is declared." : "No dated change on that day.")
  }
  $("date-note").innerHTML = notes.length > 1 ? `<ul>${notes.map((n) => `<li>${n}</li>`).join("")}</ul>` : notes.join("")
}

function navItem(id: string, title: string, file: string, badge?: number) {
  const b = badge === undefined ? "" : `<span class="badge${badge ? "" : " zero"}" title="issues to address">${badge}</span>`
  return `<li><a data-doc="${esc(id)}" tabindex="0"${id === state.doc ? ' aria-current="page"' : ""}><span class="t">${esc(title)}</span>${b}<span class="f">${esc(file)}</span></a></li>`
}

function renderNav() {
  const p = payload()
  if (!p) return
  const issuesOf = (module: string) => p.state.issues.filter((i) => i.ref && p.nodes.find((n) => n.ref === i.ref)?.module === module).length
  const group = (g: Document["group"], label: string) => {
    const docs = p.documents.filter((d) => d.group === g)
    if (!docs.length) return ""
    return `<div><p class="label">${label}</p><ul>${docs.map((d) => navItem(d.id, d.title, d.file ?? commandOf(d, p.date).replace(/ -- --at .*$/, "").replace(/^npm run /, ""), g === ViewGroup.module ? issuesOf(d.arg ?? "") : undefined)).join("")}</ul></div>`
  }
  const nodeViews = p.views.filter((v) => v.per === ViewScope.node)
  if (!state.node || !p.nodes.some((n) => n.ref === state.node)) state.node = p.nodes[0]?.ref ?? ""
  const nodePick = nodeViews.length ? `<div class="node-pick"><p class="label">Per node</p>
    <select id="node-select" aria-label="Node">${p.modules.map((m) => `<optgroup label="${esc(m.title)}">${p.nodes.filter((n) => n.module === m.id).map((n) => `<option value="${esc(n.ref)}"${n.ref === state.node ? " selected" : ""}>${esc(n.title)}</option>`).join("")}</optgroup>`).join("")}</select>
    <div class="node-views">${nodeViews.map((v) => {
      const id = `${v.name}:${state.node}`
      const exists = !!findDoc(p, id)
      return `<button type="button" class="chip-btn" data-doc="${esc(id)}" aria-pressed="${state.doc === id}"${exists ? "" : " disabled"}>${esc(v.label)}</button>`
    }).join("")}</div></div>` : ""
  $("nav").innerHTML = [
    group(ViewGroup.module, "One document per module"),
    group(ViewGroup.document, "Documents"),
    group(ViewGroup.figure, "Figures"),
    nodePick,
    group(ViewGroup.summary, "Summary"),
    `<div><p class="label">For tools</p><ul>${MACHINE.map((f) => navItem(`machine:${f}`, f, f)).join("")}</ul></div>`,
  ].join("")
  const sel = (g: Document["group"]) => p.documents.filter((d) => d.group === g)
  $("doc-select").innerHTML = [
    ["Modules", sel(ViewGroup.module)], ["Documents", sel(ViewGroup.document)], ["Figures", sel(ViewGroup.figure)], ["Summary", sel(ViewGroup.summary)],
  ].map(([label, docs]) => (docs as Document[]).length
    ? `<optgroup label="${label}">${(docs as Document[]).map((d) => `<option value="${esc(d.id)}"${d.id === state.doc ? " selected" : ""}>${esc(d.title)}</option>`).join("")}</optgroup>`
    : "").join("") + `<optgroup label="For tools">${MACHINE.map((f) => `<option value="machine:${f}"${state.doc === `machine:${f}` ? " selected" : ""}>${f}</option>`).join("")}</optgroup>`
  if (!(document.getElementById("doc-select") as HTMLSelectElement).value) {
    const opt = document.createElement("option")
    opt.textContent = findDoc(p, state.doc)?.title ?? state.doc
    opt.selected = true
    $("doc-select").prepend(opt)
  }
}

function renderBanner() {
  const b = state.bundle
  const el = $("banner")
  if (!b || state.hideBanner || (!b.error && !b.changes)) {
    el.hidden = true
    return
  }
  el.hidden = false
  if (b.error) {
    el.className = "banner error"
    el.innerHTML = `<h2>The last compilation failed</h2><p>The page shows the last valid graph. Fix it and save: the page updates by itself.</p><pre>${esc(b.error)}</pre>`
  } else if (b.changes) {
    el.className = "banner changes"
    el.innerHTML = `<h2>${esc(b.changes.title)} · ${esc(timeOf(b.generatedAt))}</h2>${b.changesHtml ?? ""}<button type="button" id="banner-close" class="chip-btn">Hide</button>`
  }
}

function renderMain(anchor?: string) {
  const p = payload()
  const docEl = $("doc")
  if (!p) {
    docEl.innerHTML = `<p>${state.bundle?.error ? "No valid graph yet." : window.TRAME_BUNDLE_GZIP ? "Opening the graph…" : "Compiling…"}</p>`
    return
  }
  if (state.doc.startsWith("machine:")) {
    const f = state.doc.slice(8) as (typeof MACHINE)[number]
    const text = p.machine[f]
    $("toggle").hidden = true
    $("doc-path").innerHTML = `<b>${esc(f)}</b> · ${plural(text.split("\n").length, "line")} · graph as of ${esc(dates.format(p.date))}`
    docEl.className = "doc wide"
    docEl.innerHTML = `<pre class="json">${highlightJson(text)}</pre>`
    return
  }
  let d = findDoc(p, state.doc)
  if (!d) {
    // This document does not exist at this date (a view that no longer applies, say): back to the node, or to the start.
    const node = state.doc.includes(":") ? state.doc.split(":")[1] : ""
    const loc = node ? locOf(p).get(node) : undefined
    d = (loc && findDoc(p, loc.doc)) || firstDoc(p)
    state.doc = d.id
  }
  $("toggle").hidden = false
  for (const m of MODES) $(`view-${m}`).setAttribute("aria-pressed", String(state.mode === m))
  $("doc-path").innerHTML = `<b>${esc(d.file ?? commandOf(d, p.date).replace(/^npm run /, "").replace(/ -- --at .*$/, ""))}</b> · graph as of ${esc(dates.format(p.date))}`
  docEl.className = `doc${hasFigure(d) && state.mode === "rendered" ? " wide" : ""}`
  if (state.mode === "markdown") {
    docEl.innerHTML = `<pre class="source">${esc(p.renders?.[d.id]?.markdown ?? "")}</pre>`
  } else if (state.mode === "text") {
    docEl.innerHTML = `<pre class="term"><span class="t-prompt">$ ${esc(commandOf(d, p.date))}</span>\n${esc(p.renders?.[d.id]?.text ?? "")}</pre>`
  } else {
    renderDocument(docEl, p, d)
  }
  if (anchor && state.mode === "rendered") {
    const target = document.getElementById(anchor)
    if (target) {
      target.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })
      target.classList.remove("flash")
      void target.offsetWidth
      target.classList.add("flash")
      return
    }
  }
  window.scrollTo({ top: 0 })
}

function render(anchor?: string) {
  // Once a bundle is there: the language of the payload shown (or of the first valid one) before anything is written.
  if (state.bundle) speak(payload() ?? state.bundle.dates.find((d) => d.payload)?.payload)
  renderStatus()
  renderDates()
  renderNav()
  renderBanner()
  renderMain(anchor)
  renderNav()
  save()
}

function go(doc: string, anchor?: string) {
  state.doc = doc
  if (doc.includes(":") && !doc.startsWith("machine:")) state.node = doc.split(":").slice(1).join(":")
  render(anchor)
}

function goRef(ref: string) {
  const p = payload()
  if (!p) return
  const loc = locOf(p).get(ref)
  state.mode = "rendered"
  if (loc) go(loc.doc, loc.anchor)
  else if (findDoc(p, `impact:${ref}`)) go(`impact:${ref}`)
}

function setBundle(b: Bundle) {
  state.bundle = b
  state.busy = false
  state.hideBanner = false
  const ok = b.dates.filter((d) => d.payload)
  MACHINE = Object.keys(ok[0]?.payload?.machine ?? {})
  if (!ok.some((d) => d.date === state.date)) state.date = ok.find((d) => d.date === b.today)?.date ?? ok[0]?.date ?? b.today
  const p = payload()
  if (p && !state.doc) state.doc = firstDoc(p)?.id ?? ""
  render()
}

// Events ------------------------------------------------------------------------

function activate(target: HTMLElement): boolean {
  // In an explorer: another node, the layers, or the rest of a layer's neighbours.
  const step = target.closest<HTMLElement>("[data-explore]")
  if (step) {
    explore(step.dataset.explore!, step.dataset.node)
    return true
  }
  const more = target.closest<HTMLElement>("[data-explore-more]")
  if (more) {
    const id = more.dataset.exploreMore!
    explorations.get(id)?.all.add(Number(more.dataset.layer))
    const el = document.getElementById(id)?.querySelector(".explorer")
    if (el) el.innerHTML = explorerInner(id)
    return true
  }
  const ref = target.closest<HTMLElement>("[data-ref]")
  const doc = target.closest<HTMLElement>("[data-doc]")
  const view = target.closest<HTMLElement>("[data-view]")
  const date = target.closest<HTMLElement>("[data-date]")
  if (view) {
    state.mode = "rendered"
    go(`${view.dataset.view}:${view.dataset.node}`)
  } else if (ref) goRef(ref.dataset.ref!)
  else if (doc) go(doc.dataset.doc!)
  else if (date && !(date as HTMLButtonElement).disabled) {
    state.date = date.dataset.date!
    render()
  } else return false
  return true
}

document.addEventListener("click", (e) => {
  const t = e.target as HTMLElement
  if (t.closest("#banner-close")) {
    state.hideBanner = true
    renderBanner()
    return
  }
  if (activate(t)) e.preventDefault()
})
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return
  const t = e.target as HTMLElement
  if (t.matches("[data-ref], [data-doc], [data-explore], [data-explore-more]") && activate(t)) e.preventDefault()
})
// The search of an explorer: a name chosen in its list moves to that node.
document.addEventListener("input", (e) => {
  const t = e.target as HTMLInputElement
  const id = t.dataset.exploreFind
  const x = id ? explorations.get(id) : undefined
  const n = x?.f.nodes.find((m) => nodeLabel(m) === t.value)
  if (id && n) explore(id, n.ref)
})
document.addEventListener("change", (e) => {
  const t = e.target as HTMLSelectElement
  if (t.id === "node-select") {
    state.node = t.value
    const current = state.doc.includes(":") && !state.doc.startsWith("machine:") ? state.doc.split(":")[0] : ""
    const p = payload()
    if (current && p && findDoc(p, `${current}:${t.value}`)) go(`${current}:${t.value}`)
    else renderNav()
  } else if (t.id === "doc-select") go(t.value)
})
for (const m of MODES) {
  $(`view-${m}`).addEventListener("click", () => {
    state.mode = m
    render()
  })
}

/** The graph an exported page carries: the browser decompresses it. */
async function unpack(packed: string): Promise<Bundle> {
  const bytes = Uint8Array.from(atob(packed), (c) => c.charCodeAt(0))
  const text = await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).text()
  return JSON.parse(text) as Bundle
}

render()
if (window.TRAME_BUNDLE_GZIP) {
  unpack(window.TRAME_BUNDLE_GZIP).then(setBundle).catch((e: Error) => {
    $("doc").innerHTML = `<p>The graph of this page cannot be read: ${esc(e.message)}</p>`
  })
}

if (window.TRAME_DEV) {
  fetch("bundle.json").then((r) => (r.ok ? r.json() : null)).then((b: Bundle | null) => b && setBundle(b)).catch(() => {})
  const events = new EventSource("events")
  events.addEventListener("compiling", () => {
    state.busy = true
    renderStatus()
  })
  events.addEventListener("bundle", (e) => setBundle(JSON.parse((e as MessageEvent).data)))
}
