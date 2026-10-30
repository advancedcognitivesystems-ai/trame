// La page : un rendu HTML du format intermédiaire. Les rendus Markdown et texte viennent du moteur, dans la charge utile.
// Elle reçoit le graphe compilé à plusieurs dates (export autonome), ou le suit en direct (trame dev).
// Elle ne connaît aucun type ni aucune vue : seulement les blocs et les figures.

import type { Block, Bundle, Card, Document, Figure, FigureEdge, FigureNode, Inline, Payload } from "../../../trame/kernel"
import { addDays, daysBetween, frDate, frDateShort, fullDate } from "../../../trame/kernel"
import creerCommun, { type Location } from "../rendu/commun"

// La page tourne dans le navigateur, où rien n'assemble le graphe (il n'y a pas de driver pour le navigateur).
// Les rendus Markdown et texte y arrivent faits ; seul le rendu commun, sans dépendance, est branché ici, à la main.
const commun = creerCommun({})
const { idOf, isOpen, locate, resolutionInlines, validityParts, valueText } = commun

declare global {
  interface Window {
    TRAME_BUNDLE?: Bundle
    TRAME_DEV?: boolean
  }
}

type Mode = "rendu" | "markdown" | "texte"
type GraphFigure = Extract<Figure, { type: "graph" }>
type TimelineFigure = Extract<Figure, { type: "timeline" }>

const $ = (id: string) => document.getElementById(id) as HTMLElement
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
// Les sorties machine : leurs noms viennent de la charge utile (la disposition du projet les choisit).
let MACHINE: string[] = []

const state = {
  bundle: undefined as Bundle | undefined,
  date: "",
  doc: "",
  mode: "rendu" as Mode,
  node: "",
  busy: false,
  hideBanner: false,
}

try {
  const saved = JSON.parse(localStorage.getItem("trame-page") || "null")
  if (saved) Object.assign(state, { doc: saved.doc ?? "", mode: saved.mode ?? "rendu", node: saved.node ?? "" })
} catch {
  /* stockage indisponible : état par défaut */
}
const save = () => {
  try {
    localStorage.setItem("trame-page", JSON.stringify({ doc: state.doc, mode: state.mode, node: state.node }))
  } catch {
    /* rien */
  }
}

const payload = (): Payload | undefined => state.bundle?.dates.find((d) => d.date === state.date)?.payload
const locations = new WeakMap<Payload, Map<string, Location>>()
const locOf = (p: Payload) => {
  let m = locations.get(p)
  if (!m) locations.set(p, (m = locate(p.documents)))
  return m
}
const findDoc = (p: Payload, id: string) => p.documents.find((d) => d.id === id)
const firstDoc = (p: Payload) => p.documents.find((d) => d.group === "document") ?? p.documents[0]

// Morceaux de phrase ------------------------------------------------------------

function inl(i: Inline): string {
  if (typeof i === "string") return esc(i)
  switch (i.t) {
    case "value": {
      const t = esc(valueText(i))
      return isOpen(i) ? `<mark class="open">${t}</mark>` : i.rule ? `<span class="rule">${t}</span>` : t
    }
    case "ref": return `<a class="ref" data-ref="${esc(i.ref)}" tabindex="0">${esc(i.title)}</a>`
    case "doc": return `<a data-doc="${esc(i.id)}" tabindex="0">${esc(i.title)}</a>`
    case "status": return `<span class="pill st-${i.status}">${i.status}</span>`
    case "severity": return `<span class="sev sev-${i.severity}">${i.severity}</span>`
    case "date": return `<time datetime="${esc(i.date)}">${esc(frDate(i.date))}</time>`
    case "person": return `<span class="person">${esc(i.name)}</span>`
    case "ident": return `<code>${esc(i.text)}</code>`
  }
}
const line = (list: Inline[]) => list.map(inl).join("")
const wrapTable = (head: string[], rows: string[][]) =>
  `<div class="table-wrap"><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`

// Blocs -------------------------------------------------------------------------

let figureCount = 0

function card(c: Card): string {
  const views = c.views.length
    ? `<div class="views">${c.views.map((v) => `<button type="button" class="chip-btn" data-view="${esc(v.name)}" data-node="${esc(c.ref)}">${esc(v.label)}</button>`).join("")}</div>`
    : ""
  const meta = [
    `<span>${esc(c.kindLabel)}${c.active ? "" : " · pas en vigueur"}</span>`,
    `<code>${esc(c.id)}</code>`,
    c.source ? `<code>${esc(c.source)}</code>` : "",
    c.status ? `<span class="pill st-${c.status}">${c.status}</span>` : "",
    c.published ? `<span class="pill pub">publié</span>` : "",
  ].filter(Boolean).join("")
  const natureTag = (n: string) => (n === "déclarée" ? "" : `<span class="nature">${n === "déduite" ? "déduite du code" : "calculée"}</span>`)
  const facts = [
    ...c.facts.map((f) => `<dt>${esc(f.label)}</dt><dd>${line(f.value)}</dd>`),
    ...c.links.map((l) => `<dt class="${l.active ? "" : "inactive"}">${esc(l.label)}</dt><dd class="${l.active ? "" : "inactive"}">${l.targets.map((t) => inl({ t: "ref", ...t })).join(", ")}${natureTag(l.nature)}${l.active ? "" : `<span class="nature">pas en vigueur</span>`}</dd>`),
  ]
  return `<article class="card${c.history ? " history" : ""}${c.repealedBy ? " repealed" : ""}" id="${esc(c.id)}">
    <h3>${esc(c.title)}${c.repealedBy ? " (abrogé)" : ""}</h3>
    <div class="meta">${meta}</div>
    ${c.description ? `<p>${esc(c.description)}</p>` : ""}
    ${c.repealedBy ? `<p><span class="pill st-violé">Abrogé</span> par ${inl({ t: "ref", ...c.repealedBy })} : ce nœud n'est plus dans le graphe en vigueur.</p>` : ""}
    ${views}
    ${blocks(c.body, 4)}
    ${c.resolutions.map((r) => `<div class="resolution">${line(resolutionInlines(r))}</div>`).join("")}
    ${facts.length ? `<dl class="facts">${facts.join("")}</dl>` : ""}
    ${c.children.map((ch) => `<div class="child" id="${esc(idOf(ch.ref))}">${blocks(ch.body, 4)}</div>`).join("")}
  </article>`
}

function blocks(list: Block[], level: number): string {
  return list.map((b) => {
    switch (b.type) {
      case "para": return `<p>${line(b.content)}</p>`
      case "facts": return `<dl class="facts">${b.items.map((f) => `<dt>${esc(f.label)}</dt><dd>${line(f.value)}</dd>`).join("")}</dl>`
      case "list": return `<ul>${b.items.map((x) => `<li>${line(x)}</li>`).join("")}</ul>`
      case "table": return wrapTable(b.head, b.rows.map((r) => r.map(line)))
      case "code": return `<pre class="code"><code>${esc(b.text)}</code></pre>${b.source ? `<p class="code-source">${esc(b.source)}</p>` : ""}`
      case "checks":
        return `${b.title ? `<p class="checks-title">${line(b.title)}</p>` : ""}${wrapTable(["Critère", "Résultat"], b.items.map((x) => [
          esc(x.name), `<span class="pill oc-${x.outcome}">${x.outcome}</span>${x.detail ? ` ${line(x.detail)}` : ""}`,
        ]))}`
      case "validity": {
        const [head, rest] = validityParts(b)
        const cls = b.state === "en vigueur" ? "va-envigueur" : b.state === "pas encore en vigueur" ? "va-pasencore" : "va-plus"
        return `<p class="validity"><span class="pill ${cls}">${esc(head)}</span>${esc(rest)}</p>`
      }
      case "details": return `<details><summary>${esc(b.summary)}</summary>${blocks(b.blocks, level)}</details>`
      case "section": {
        const h = level <= 2 ? "h2" : "h4"
        return `<section${b.id ? ` id="${esc(b.id)}"` : ""}><${h}>${esc(b.title)}</${h}>${blocks(b.blocks, level + 1)}</section>`
      }
      case "summary": return `<div class="summary">${line(b.content)}</div>`
      case "issues":
        return wrapTable(["Gravité", "Quoi", "Où", "Responsable", "Conséquence"], b.items.map((x) => [
          `<span class="sev sev-${x.severity}">${x.severity}</span>`, esc(x.what),
          typeof x.where === "string" ? `<code>${esc(x.where)}</code>` : x.where ? inl({ t: "ref", ...x.where }) : "",
          x.owner ? `<span class="person">${esc(x.owner)}</span>` : "à attribuer", esc(x.effect ?? ""),
        ]))
      case "resolution": return `<div class="resolution">${line(resolutionInlines(b))}</div>`
      case "card": return card(b)
      case "figure": return figure(b.figure, b.caption)
      default: {
        const never: never = b
        return `<p>Bloc inconnu : ${esc(JSON.stringify(never))}</p>`
      }
    }
  }).join("")
}

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
  // Barycentres : chaque nœud se place sous la moyenne de ses voisins de la couche d'à côté (quelques passes, dans les deux sens).
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
  // Sur la carte entière, les libellés d'arêtes se chevaucheraient : ils restent au survol.
  const showLabels = f.shape !== "couches"
  const marker = (name: string, cls: string) =>
    `<marker id="${id}-${name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="${cls}" d="M0,0 L10,5 L0,10 z"/></marker>`
  const markerOf = (e: FigureEdge) =>
    e.nature === "calculée" ? "" : e.role === "gagnant" || e.role === "appui" ? "accent" : e.role === "écarté" || e.role === "remplacé" ? "bad" : e.role === "contesté" ? "warn" : "base"
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
    const cls = ["fe", `n-${e.nature}`, e.active ? "" : "inactive", e.role ? `r-${e.role}` : ""].filter(Boolean).join(" ")
    const label = `${e.label}${e.active ? "" : " (pas en vigueur)"}`
    return `<g class="${cls}"><title>${esc(label)}</title><path d="${d}"${m ? ` marker-end="url(#${id}-${m})"` : ""}/>${showLabels ? `<text x="${mid.x}" y="${mid.y + 4}" text-anchor="middle">${esc(label.toLowerCase())}</text>` : ""}</g>`
  }).join("")
  const nodes = f.nodes.map((n: FigureNode) => {
    const p = pos.get(n.ref)!
    const lines = wrapWords(n.title, 24, 2)
    const cls = ["fn", n.status ? `st-${n.status}` : "", n.history ? "hist" : "", n.active ? "" : "inactive", n.ref === f.focus ? "focus" : ""].filter(Boolean).join(" ")
    const tip = `${n.title} · ${n.kindLabel}${n.status ? ` · ${n.status}` : ""}${n.active ? "" : " · pas en vigueur"}${n.open ? " · une décision reste à prendre" : ""}`
    return `<g class="${cls}" data-ref="${esc(n.ref)}" transform="translate(${p.x},${p.y})" tabindex="0" role="link" aria-label="${esc(tip)}">
      <title>${esc(tip)}</title>
      <rect class="box" width="${W}" height="${H}" rx="7"/>
      ${lines.map((l, i) => `<text x="10" y="${19 + i * 15}">${esc(l)}</text>`).join("")}
      <text class="kind" x="10" y="${H - 9}">${esc(wrapWords(`${n.kindLabel}${n.status ? ` · ${n.status}` : ""}`, 27, 1)[0])}</text>
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
  if (has((e) => e.nature === "déclarée" && !e.role)) items.push(`<span>${sample("lg-base", "")}arête déclarée</span>`)
  if (has((e) => e.nature === "déduite")) items.push(`<span>${sample("lg-base", "2 3")}déduite du code</span>`)
  if (has((e) => e.nature === "calculée")) items.push(`<span>${sample("lg-accent", "6 4")}chevauchement calculé</span>`)
  if (has((e) => e.role === "gagnant")) items.push(`<span>${sample("lg-accent")}l'emporte</span>`)
  if (has((e) => e.role === "écarté" || e.role === "remplacé")) items.push(`<span>${sample("lg-bad", "5 4")}écarté</span>`)
  if (f.nodes.some((n) => n.history)) items.push(`<span><svg width="18" height="12" aria-hidden="true"><rect x="1" y="1" width="16" height="10" rx="2" class="lg-box" stroke-dasharray="3 2"/></svg>historique</span>`)
  if (f.nodes.some((n) => !n.active)) items.push(`<span><svg width="18" height="12" aria-hidden="true"><rect x="1" y="1" width="16" height="10" rx="2" class="lg-box" opacity="0.45"/></svg>pas en vigueur</span>`)
  if (f.nodes.some((n) => n.open)) items.push(`<span><svg width="12" height="12" aria-hidden="true"><circle cx="6" cy="6" r="5" class="lg-open"/></svg>décision à prendre</span>`)
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
      ticks.push(`<line class="grid" x1="${x(m)}" y1="${top - 8}" x2="${x(m)}" y2="${top + f.lanes.length * rowH}"/><text class="tick" x="${x(m) + 4}" y="${top - 12}">${esc(frDateShort(m.slice(0, 7)).replace(/ \d{4}$/, ""))}</text>`)
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
      return `<rect class="period${l.active ? "" : " inactive"}" x="${x1}" y="${y + 10}" width="${Math.max(4, x2 - x1)}" height="12" rx="6"><title>${esc(`${l.title} · ${p.from ? `du ${frDate(p.from)}` : ""}${p.until ? ` au ${frDate(p.until)}` : ", sans fin"}`)}</title></rect>`
    }).join("")
    const marks = l.marks.filter((mk) => mk.role === "échéance" || mk.role === "revue").map((mk) => {
      const cx = x(fullDate(mk.date))
      return mk.role === "revue"
        ? `<circle class="review" cx="${cx}" cy="${y + 16}" r="5"><title>${esc(`${mk.label} : ${frDate(mk.date)}`)}</title></circle>`
        : `<path class="mark" d="M${cx},${y + 8} L${cx + 7},${y + 16} L${cx},${y + 24} L${cx - 7},${y + 16} z"><title>${esc(`${mk.label} : ${frDate(mk.date)}`)}</title></path>`
    }).join("")
    return `<g class="lane-label" data-ref="${esc(l.ref)}" tabindex="0" role="link"><text x="0" y="${y + 15}">${esc(title)}</text><text class="muted" x="0" y="${y + 29}">${esc(l.kindLabel)}</text></g>${periods}${marks}`
  }).join("")
  const tx = x(f.today)
  const h = top + f.lanes.length * rowH + 12
  return `<svg class="tl" viewBox="0 0 ${Wd} ${h}" width="${Wd}" style="width:100%;min-width:640px;max-width:${Wd}px" role="img" aria-label="Chronologie">
    ${ticks.join("")}${lanes}
    <line class="today" x1="${tx}" y1="${top - 26}" x2="${tx}" y2="${h - 4}"/>
    <text class="muted" x="${tx + 5}" y="${top - 26}">date du graphe · ${esc(frDateShort(f.today))}</text>
  </svg>`
}

function figure(f: Figure, caption?: string): string {
  const body = f.type === "graph" ? graphSvg(f) + legend(f) : timelineSvg(f)
  return `<figure class="figure"><div class="figure-scroll">${body}</div>${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}</figure>`
}

// La page -----------------------------------------------------------------------

const hasFigure = (d: Document) => JSON.stringify(d.blocks).includes('"type":"figure"')

function renderDocument(d: Document): string {
  figureCount = 0
  return `<h1>${esc(d.title)}</h1>${d.intro ? `<p class="intro">${line(d.intro)}</p>` : ""}${blocks(d.blocks, 2)}`
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
  if (d.group === "bilan") return `npm run build${at}`
  if (d.group === "nœud") return `npm run trame ${d.view} ${idOf(d.arg ?? "")}${at}`
  if (d.group === "module") return `npm run trame view ${d.view} ${d.arg}${at}`
  return `npm run trame ${d.view}${at}`
}

function renderStatus() {
  const el = $("status")
  const b = state.bundle
  el.className = `status${state.busy ? " busy" : b?.error ? " failed" : ""}`
  const time = b ? new Date(b.generatedAt).toLocaleTimeString("fr-CH") : ""
  const text = !b ? "en attente de la première compilation…"
    : state.busy ? "compilation en cours…"
      : b.mode === "dev"
        ? b.error ? `dernière compilation refusée · graphe valide de ${time}` : `trame dev · compilé à ${time} · ${b.dates.length} dates`
        : `export du ${frDate(b.today)} · ${b.dates.length} dates`
  el.innerHTML = `<span class="dot"></span><span>${esc(text)}</span>`
}

function renderDates() {
  const b = state.bundle
  if (!b) return
  let prevYear = ""
  $("dates").innerHTML = b.dates.map((d) => {
    const year = d.date.slice(0, 4)
    const small = d.date === b.today ? "aujourd'hui" : year !== prevYear ? year : ""
    prevYear = year
    return `<button type="button" data-date="${d.date}" aria-pressed="${d.date === state.date}"${d.payload ? "" : ` class="failed" disabled title="${esc(d.error ?? "échec")}"`}>${esc(frDateShort(d.date))}<small>${small}</small></button>`
  }).join("")
  const p = payload()
  const notes: string[] = []
  if (p) {
    const on = p.events.filter((e) => (e.role === "fin" ? addDays(e.date, 1) : fullDate(e.date)) === state.date)
    for (const e of on) {
      const what = e.role === "début" ? "Entre en vigueur" : e.role === "fin" ? "N'est plus en vigueur" : e.role === "revue" ? "Revue prévue" : e.label
      notes.push(`${esc(what)} : ${inl({ t: "ref", ref: e.ref, title: e.title })}`)
    }
    const first = [...p.events].map((e) => (e.role === "fin" ? addDays(e.date, 1) : fullDate(e.date))).sort()[0]
    if (!on.length) notes.push(first && state.date < first ? "Avant tout changement daté : le graphe tel qu'il est déclaré." : "Aucun changement daté ce jour-là.")
  }
  $("date-note").innerHTML = notes.length > 1 ? `<ul>${notes.map((n) => `<li>${n}</li>`).join("")}</ul>` : notes.join("")
}

function navItem(id: string, title: string, file: string, badge?: number) {
  const b = badge === undefined ? "" : `<span class="badge${badge ? "" : " zero"}" title="points à traiter">${badge}</span>`
  return `<li><a data-doc="${esc(id)}" tabindex="0"${id === state.doc ? ' aria-current="page"' : ""}><span class="t">${esc(title)}</span>${b}<span class="f">${esc(file)}</span></a></li>`
}

function renderNav() {
  const p = payload()
  if (!p) return
  const issuesOf = (module: string) => p.state.issues.filter((i) => i.ref && p.nodes.find((n) => n.ref === i.ref)?.module === module).length
  const group = (g: Document["group"], label: string) => {
    const docs = p.documents.filter((d) => d.group === g)
    if (!docs.length) return ""
    return `<div><p class="label">${label}</p><ul>${docs.map((d) => navItem(d.id, d.title, d.file ?? commandOf(d, p.date).replace(/ -- --at .*$/, "").replace(/^npm run /, ""), g === "module" ? issuesOf(d.arg ?? "") : undefined)).join("")}</ul></div>`
  }
  const nodeViews = p.views.filter((v) => v.per === "nœud")
  if (!state.node || !p.nodes.some((n) => n.ref === state.node)) state.node = p.nodes[0]?.ref ?? ""
  const nodePick = nodeViews.length ? `<div class="node-pick"><p class="label">Par nœud</p>
    <select id="node-select" aria-label="Nœud">${p.modules.map((m) => `<optgroup label="${esc(m.title)}">${p.nodes.filter((n) => n.module === m.id).map((n) => `<option value="${esc(n.ref)}"${n.ref === state.node ? " selected" : ""}>${esc(n.title)}</option>`).join("")}</optgroup>`).join("")}</select>
    <div class="node-views">${nodeViews.map((v) => {
      const id = `${v.name}:${state.node}`
      const exists = !!findDoc(p, id)
      return `<button type="button" class="chip-btn" data-doc="${esc(id)}" aria-pressed="${state.doc === id}"${exists ? "" : " disabled"}>${esc(v.label)}</button>`
    }).join("")}</div></div>` : ""
  $("nav").innerHTML = [
    group("module", "Un document par module"),
    group("document", "Documents"),
    group("figure", "Figures"),
    nodePick,
    group("bilan", "Bilan"),
    `<div><p class="label">Pour les outils</p><ul>${MACHINE.map((f) => navItem(`machine:${f}`, f, f)).join("")}</ul></div>`,
  ].join("")
  const sel = (g: Document["group"]) => p.documents.filter((d) => d.group === g)
  $("doc-select").innerHTML = [
    ["Modules", sel("module")], ["Documents", sel("document")], ["Figures", sel("figure")], ["Bilan", sel("bilan")],
  ].map(([label, docs]) => (docs as Document[]).length
    ? `<optgroup label="${label}">${(docs as Document[]).map((d) => `<option value="${esc(d.id)}"${d.id === state.doc ? " selected" : ""}>${esc(d.title)}</option>`).join("")}</optgroup>`
    : "").join("") + `<optgroup label="Pour les outils">${MACHINE.map((f) => `<option value="machine:${f}"${state.doc === `machine:${f}` ? " selected" : ""}>${f}</option>`).join("")}</optgroup>`
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
    el.innerHTML = `<h2>La dernière compilation a échoué</h2><p>La page montre le dernier graphe valide. Corrigez puis enregistrez : la page se met à jour seule.</p><pre>${esc(b.error)}</pre>`
  } else if (b.changes) {
    el.className = "banner changes"
    el.innerHTML = `<h2>${esc(b.changes.title)} · ${esc(new Date(b.generatedAt).toLocaleTimeString("fr-CH"))}</h2>${blocks(b.changes.blocks, 3)}<button type="button" id="banner-close" class="chip-btn">Masquer</button>`
  }
}

function renderMain(anchor?: string) {
  const p = payload()
  const docEl = $("doc")
  if (!p) {
    docEl.innerHTML = `<p>${state.bundle?.error ? "Aucun graphe valide pour l'instant." : "Compilation en cours…"}</p>`
    return
  }
  if (state.doc.startsWith("machine:")) {
    const f = state.doc.slice(8) as (typeof MACHINE)[number]
    const text = p.machine[f]
    $("toggle").hidden = true
    $("doc-path").innerHTML = `<b>${esc(f)}</b> · ${text.split("\n").length} lignes · graphe du ${esc(frDate(p.date))}`
    docEl.className = "doc wide"
    docEl.innerHTML = `<pre class="json">${highlightJson(text)}</pre>`
    return
  }
  let d = findDoc(p, state.doc)
  if (!d) {
    // Ce document n'existe pas à cette date (par exemple une vue qui ne s'applique plus) : on revient au nœud, ou au début.
    const node = state.doc.includes(":") ? state.doc.split(":")[1] : ""
    const loc = node ? locOf(p).get(node) : undefined
    d = (loc && findDoc(p, loc.doc)) || firstDoc(p)
    state.doc = d.id
  }
  $("toggle").hidden = false
  for (const m of ["rendu", "markdown", "texte"] as Mode[]) $(`view-${m}`).setAttribute("aria-pressed", String(state.mode === m))
  $("doc-path").innerHTML = `<b>${esc(d.file ?? commandOf(d, p.date).replace(/^npm run /, "").replace(/ -- --at .*$/, ""))}</b> · graphe du ${esc(frDate(p.date))}`
  docEl.className = `doc${hasFigure(d) && state.mode === "rendu" ? " wide" : ""}`
  if (state.mode === "markdown") {
    docEl.innerHTML = `<pre class="source">${esc(p.rendus?.[d.id]?.markdown ?? "")}</pre>`
  } else if (state.mode === "texte") {
    docEl.innerHTML = `<pre class="term"><span class="t-prompt">$ ${esc(commandOf(d, p.date))}</span>\n${esc(p.rendus?.[d.id]?.texte ?? "")}</pre>`
  } else {
    docEl.innerHTML = renderDocument(d)
  }
  if (anchor && state.mode === "rendu") {
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
  state.mode = "rendu"
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

// Événements ----------------------------------------------------------------------

function activate(target: HTMLElement): boolean {
  const ref = target.closest<HTMLElement>("[data-ref]")
  const doc = target.closest<HTMLElement>("[data-doc]")
  const view = target.closest<HTMLElement>("[data-view]")
  const date = target.closest<HTMLElement>("[data-date]")
  if (view) {
    state.mode = "rendu"
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
  if (t.matches("[data-ref], [data-doc]") && activate(t)) e.preventDefault()
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
for (const m of ["rendu", "markdown", "texte"] as Mode[]) {
  $(`view-${m}`).addEventListener("click", () => {
    state.mode = m
    render()
  })
}

if (window.TRAME_BUNDLE) setBundle(window.TRAME_BUNDLE)
else render()

if (window.TRAME_DEV) {
  fetch("bundle.json").then((r) => (r.ok ? r.json() : null)).then((b: Bundle | null) => b && setBundle(b)).catch(() => {})
  const events = new EventSource("events")
  events.addEventListener("compiling", () => {
    state.busy = true
    renderStatus()
  })
  events.addEventListener("bundle", (e) => setBundle(JSON.parse((e as MessageEvent).data)))
}
