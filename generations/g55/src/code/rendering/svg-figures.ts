// SVG figures: the page's figures, drawn by the engine (choice "Figures in SVG"). A graph is drawn layer under layer, its
// nodes ordered by barycentres, with its legend; a timeline as lanes of bars and marks under the months. A graph too
// large to be read whole is left to the page, which explores it: its place carries the figure's index in the document.
// The elements are SVG's (src/html.ts), the geometry the decisions of appearance, the classes "Figures in the page", the
// words the page's catalog. Pure.

import { DateRole, EdgeRole, FigureType, Nature, Shape, Status, daysBetween, fullDate, keyOf } from "../../../trame/kernel"
import type { Figure, FigureEdge, ProvidedBy } from "../../../trame/kernel"
import type { Aria, Css, CssDeclaration, EscapedText, Html, HtmlElement, PathData, SelfClosingTag, Svg } from "../../html"
import type { DocumentMarkup, FigureMarkup } from "../../markup"
import type { ThePage } from "../../page"
import type { GraphDrawing, LegendDrawing, TimelineDrawing } from "../../appearance"
import type { Punctuation } from "../../documents"
import type { FigureSyntax } from "../../rendering"
import type { Dates, PageWords, RenderingMessages } from "../../messages"
import type { Iso8601 } from "../../../std/src/measures"
import type { Counts, Sequences, Texts } from "../../../std/src/algebra"
import type { Api as CommonApi } from "./common"

type GraphFigure = Extract<Figure, { type: typeof FigureType.graph }>
type TimelineFigure = Extract<Figure, { type: typeof FigureType.timeline }>
type Attributes = Readonly<Record<string, string | true>>

export interface Deps {
  html: ProvidedBy<typeof Html>
  svg: ProvidedBy<typeof Svg>
  aria: ProvidedBy<typeof Aria>
  css: ProvidedBy<typeof Css>
  markup: ProvidedBy<typeof DocumentMarkup>
  figures: ProvidedBy<typeof FigureMarkup>
  page: ProvidedBy<typeof ThePage>
  graph: ProvidedBy<typeof GraphDrawing>
  timeline: ProvidedBy<typeof TimelineDrawing>
  legend: ProvidedBy<typeof LegendDrawing>
  element: ProvidedBy<typeof HtmlElement>
  empty: ProvidedBy<typeof SelfClosingTag>
  path: ProvidedBy<typeof PathData>
  declaration: ProvidedBy<typeof CssDeclaration>
  escape: ProvidedBy<typeof EscapedText>
  common: CommonApi
  dates: ProvidedBy<typeof Dates>
  words: ProvidedBy<typeof PageWords>
  messages: ProvidedBy<typeof RenderingMessages>
  punctuation: ProvidedBy<typeof Punctuation>
  iso: ProvidedBy<typeof Iso8601>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps): FigureSyntax => {
  const { html, svg, aria, css, markup, element, empty, path, declaration, escape, common, dates, words, messages, iso } = deps
  const { figures: fm, graph: gd, timeline: td, legend: ld } = deps
  const { parts } = deps.punctuation
  const { zero, one, next, previous, largest } = deps.counts
  const { head } = deps.sequences
  const { empty: nothing, space, ellipsis, concat, optional, shorten } = deps.texts
  const two = next(one)
  const half = (x: number) => x / two
  const none: Attributes = {}
  const num = (x: number) => String(x)
  /** The classes that apply, in one attribute. */
  const classes = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(space)
  /** The class part of a vocabulary value: its key, which does not change when the words do. */
  const key = <V extends Record<string, string>>(vocabulary: V, value: string) => optional(keyOf(vocabulary, value))
  /** As wide as the figure, never narrower than its narrowest, never wider than itself. */
  const width = (narrowest: number, widest: number) => [
    declaration(css.width, num(css.whole) + css.percent), declaration(css.minWidth, num(narrowest) + css.pixel), declaration(css.maxWidth, num(widest) + css.pixel),
  ].join(space)
  const tipped = (name: string, attributes: Attributes, tip: string) => element(name, attributes, element(svg.title, none, tip))

  /** A text in lines of at most `max` characters, `lines` at most: the last one kept ends with an ellipsis. */
  function wrap(text: string, max: number, lines: number): string[] {
    const out: string[] = []
    let current: string = nothing
    for (const word of text.split(space)) {
      const joined = (current + space + word).trim()
      if (joined.length > max && current) {
        out.push(current)
        current = word
      } else current = joined
    }
    if (current) out.push(current)
    if (out.length <= lines) return out
    const kept = out.slice(zero, lines)
    const last = kept[previous(lines)]
    kept[previous(lines)] = last.slice(zero, largest([last.length - gd.title.cut])) + ellipsis
    return kept
  }

  /** Each node's place: layers one under the other, each ordered by module, then under its neighbours (barycentres). */
  function layout(f: GraphFigure) {
    const { width: W, height: H } = gd.box
    const { across, down: below } = gd.gaps
    const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
    const groupIndex = new Map(f.groups.map((g, i) => [g.id, i]))
    const byLayer = layers.map((l) => f.nodes.filter((n) => n.layer === l)
      .sort((a, b) => (groupIndex.get(a.module) ?? zero) - (groupIndex.get(b.module) ?? zero) || a.title.localeCompare(b.title)))
    const neighbours = new Map<string, string[]>()
    for (const e of f.edges) {
      neighbours.set(e.from, [...(neighbours.get(e.from) ?? []), e.to])
      neighbours.set(e.to, [...(neighbours.get(e.to) ?? []), e.from])
    }
    for (let pass: number = zero; pass < gd.passes; pass = next(pass)) {
      const down = pass % two === zero
      const order = down ? byLayer.map((_, i) => i).slice(one) : byLayer.map((_, i) => i).reverse().slice(one)
      for (const li of order) {
        const ref = byLayer[down ? previous(li) : next(li)]
        const index = new Map(ref.map((n, i) => [n.ref, i]))
        const bary = new Map(byLayer[li].map((n, i) => {
          const ns = (neighbours.get(n.ref) ?? []).map((r) => index.get(r)).filter((x): x is number => x !== undefined)
          return [n.ref, ns.length ? ns.reduce((a, b) => a + b, zero) / ns.length : i]
        }))
        byLayer[li] = [...byLayer[li]].sort((a, b) => bary.get(a.ref)! - bary.get(b.ref)!)
      }
    }
    const widest = Math.max(...byLayer.map((l) => l.length))
    const total = widest * (W + across) - across
    const places = new Map<string, { x: number; y: number; layer: number }>()
    byLayer.forEach((list, li) => {
      const offset = half(total - (list.length * (W + across) - across))
      list.forEach((n, i) => places.set(n.ref, { x: offset + i * (W + across), y: li * (H + below), layer: li }))
    })
    return { places, width: total, height: byLayer.length * (H + below) - below }
  }

  /** The arrowhead of an edge, by its role in an overlap; a computed edge has none. */
  const markerOf = (e: FigureEdge) =>
    e.nature === Nature.computed ? undefined
      : e.role === EdgeRole.winner || e.role === EdgeRole.support ? fm.markers.accent
        : e.role === EdgeRole.discarded || e.role === EdgeRole.replaced ? fm.markers.bad
          : e.role === EdgeRole.contested ? fm.markers.warn : fm.markers.base

  function drawGraph(f: GraphFigure): string {
    const { width: W, height: H } = gd.box
    const P = gd.margin
    const { places, width: total, height } = layout(f)
    // On the whole map, edge labels would overlap: they stay on hover.
    const labelled = f.shape !== Shape.layers
    const edges = concat(f.edges.map((e) => {
      const a = places.get(e.from)
      const b = places.get(e.to)
      if (!a || !b) return nothing
      let d: string
      let mid: { x: number; y: number }
      if (a.layer !== b.layer) {
        const down = a.layer < b.layer
        const s = { x: a.x + half(W), y: down ? a.y + H : a.y }
        const t = { x: b.x + half(W), y: down ? b.y : b.y + H }
        const dy = half(t.y - s.y)
        d = path([s.x, s.y], [{ via: [[s.x, s.y + dy], [t.x, t.y - dy]], to: [t.x, t.y] }], false)
        mid = { x: half(s.x + t.x), y: half(s.y + t.y) }
      } else {
        const s = { x: a.x + half(W), y: a.y }
        const t = { x: b.x + half(W), y: b.y }
        d = path([s.x, s.y], [{ via: [[s.x, s.y - gd.arch.rise], [t.x, t.y - gd.arch.rise]], to: [t.x, t.y] }], false)
        mid = { x: half(s.x + t.x), y: s.y - gd.arch.label }
      }
      const marker = markerOf(e)
      const label = e.active ? e.label : messages.inactiveLabel(e.label)
      return element(svg.group, { [html.class]: classes(fm.edge, fm.nature + key(Nature, e.nature), !e.active && fm.inactive, e.role && fm.role + key(EdgeRole, e.role)) }, concat([
        element(svg.title, none, escape(label)),
        empty(svg.path, { [svg.d]: d, ...(marker ? { [svg.markerEnd]: svg.reference + marker + svg.referenceEnd } : {}) }),
        labelled ? element(svg.text, { [svg.x]: num(mid.x), [svg.y]: num(mid.y + gd.labelBaseline), [svg.textAnchor]: svg.middle }, escape(label.toLowerCase())) : nothing,
      ]))
    }))
    const nodes = concat(f.nodes.map((n) => {
      const p = places.get(n.ref)!
      const status = n.status ? common.statusText(n.status) : nothing
      const tip = [n.title, n.kindLabel, status, !n.active && messages.notInForce(), n.open && words.decisionRemains()].filter(Boolean).join(parts)
      return element(svg.group, {
        [html.class]: classes(fm.node, n.status && deps.page.statusClass + key(Status, n.status), n.history && fm.history, !n.active && fm.inactive, n.ref === f.focus && fm.focus),
        [markup.attributes.reference]: escape(n.ref),
        [svg.transform]: svg.translate + svg.openArguments + num(p.x) + svg.comma + num(p.y) + svg.closeArguments,
        [html.tabindex]: html.focusable, [aria.role]: aria.link, [aria.label]: escape(tip),
      }, concat([
        element(svg.title, none, escape(tip)),
        empty(svg.rect, { [html.class]: fm.box, [svg.width]: num(W), [svg.height]: num(H), [svg.rx]: num(gd.box.radius) }),
        ...wrap(n.title, gd.title.chars, gd.title.lines).map((line, i) =>
          element(svg.text, { [svg.x]: num(gd.box.inset), [svg.y]: num(gd.box.firstLine + i * gd.box.lineHeight) }, escape(line))),
        element(svg.text, { [html.class]: fm.kind, [svg.x]: num(gd.box.inset), [svg.y]: num(H - gd.box.kindBottom) },
          escape(optional(head(wrap([n.kindLabel, status].filter(Boolean).join(parts), gd.kind.chars, one))))),
        n.open ? empty(svg.circle, { [html.class]: fm.open, [svg.cx]: num(W - gd.open.inset), [svg.cy]: num(gd.open.inset), [svg.r]: num(gd.open.radius) }) : nothing,
      ]))
    }))
    const w = total + two * P
    const h = height + two * P + gd.head
    return element(svg.svg, {
      [svg.viewBox]: [-P, -P - gd.head, w, h].join(svg.separator), [svg.width]: num(w), [html.style]: width(Math.round(w * gd.narrowest), w),
      [aria.role]: aria.img, [aria.label]: escape(words.figure()),
    }, edges + nodes)
  }

  /** Under a graph, a sample of each stroke and box it uses, and what it means. */
  function drawLegend(f: GraphFigure): string {
    const has = (test: (e: FigureEdge) => boolean) => f.edges.some(test)
    const middle = half(ld.line.height)
    const stroke = (cls: string, dash?: string) => element(svg.svg, { [svg.width]: num(ld.line.width), [svg.height]: num(ld.line.height), [aria.hidden]: String(true) },
      empty(svg.line, {
        [svg.x1]: num(zero), [svg.y1]: num(middle), [svg.x2]: num(ld.line.width), [svg.y2]: num(middle), [html.class]: cls, [svg.strokeWidth]: num(ld.line.stroke),
        ...(dash ? { [svg.strokeDasharray]: dash } : {}),
      }))
    const box = (look: Attributes) => element(svg.svg, { [svg.width]: num(ld.box.width), [svg.height]: num(ld.box.height), [aria.hidden]: String(true) },
      empty(svg.rect, {
        [svg.x]: num(ld.box.inset), [svg.y]: num(ld.box.inset), [svg.width]: num(ld.box.width - two * ld.box.inset), [svg.height]: num(ld.box.height - two * ld.box.inset),
        [svg.rx]: num(ld.box.radius), [html.class]: fm.samples.box, ...look,
      }))
    const dot = element(svg.svg, { [svg.width]: num(ld.dot.size), [svg.height]: num(ld.dot.size), [aria.hidden]: String(true) },
      empty(svg.circle, { [svg.cx]: num(half(ld.dot.size)), [svg.cy]: num(half(ld.dot.size)), [svg.r]: num(ld.dot.radius), [html.class]: fm.samples.open }))
    const item = (sample: string, said: string) => element(html.span, none, sample + escape(said))
    const items = [
      has((e) => e.nature === Nature.declared && !e.role) && item(stroke(fm.samples.base), words.declaredEdge()),
      has((e) => e.nature === Nature.inferred) && item(stroke(fm.samples.base, ld.dashes.inferred), words.inferredEdge()),
      has((e) => e.nature === Nature.computed) && item(stroke(fm.samples.accent, ld.dashes.computed), words.computedOverlap()),
      has((e) => e.role === EdgeRole.winner) && item(stroke(fm.samples.accent), words.prevails()),
      has((e) => e.role === EdgeRole.discarded || e.role === EdgeRole.replaced) && item(stroke(fm.samples.bad, ld.dashes.discarded), words.discarded()),
      f.nodes.some((n) => n.history) && item(box({ [svg.strokeDasharray]: ld.dashes.history }), words.history()),
      f.nodes.some((n) => !n.active) && item(box({ [svg.opacity]: ld.box.faded }), messages.notInForce()),
      f.nodes.some((n) => n.open) && item(dot, words.decisionToTake()),
    ].filter((x): x is string => !!x)
    return items.length ? element(html.div, { [html.class]: fm.legend }, concat(items)) : nothing
  }

  /** The first day of each month, from the first of the timeline's to its end. */
  function months(from: string, to: string): string[] {
    const day = (time: number) => new Date(time).toISOString().slice(zero, iso.dateLength)
    const start = new Date(fullDate(from))
    const out: string[] = []
    for (let m = Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), iso.firstDay); day(m) <= to;) {
      out.push(day(m))
      const d = new Date(m)
      m = Date.UTC(d.getUTCFullYear(), next(d.getUTCMonth()), iso.firstDay)
    }
    return out
  }

  function drawTimeline(f: TimelineFigure): string {
    const { width: Wd, label: labelW, row, top } = td
    const span = Math.max(td.shortestSpan, daysBetween(f.from, f.to))
    const x = (d: string) => labelW + (Math.max(zero, Math.min(span, daysBetween(f.from, d))) / span) * (Wd - labelW - td.pad)
    const bottom = top + f.lanes.length * row
    const ticks = concat(months(f.from, f.to).filter((m) => m >= f.from).map((m) =>
      empty(svg.line, { [html.class]: fm.grid, [svg.x1]: num(x(m)), [svg.y1]: num(top - td.grid.above), [svg.x2]: num(x(m)), [svg.y2]: num(bottom) }) +
      element(svg.text, { [html.class]: fm.tick, [svg.x]: num(x(m) + td.tick.x), [svg.y]: num(top - td.tick.above) }, escape(dates.month(m)))))
    const lanes = concat(f.lanes.map((l, i) => {
      const y = top + i * row
      const periods = concat(l.periods.map((p) => {
        const x1 = x(p.from ?? f.from)
        const x2 = x(p.until ?? f.to)
        const when = (p.from ? words.periodFrom(dates.format(p.from)) : nothing) + (p.until ? words.periodUntil(dates.format(p.until)) : words.noEnd())
        return tipped(svg.rect, {
          [html.class]: classes(fm.period, !l.active && fm.inactive), [svg.x]: num(x1), [svg.y]: num(y + td.period.y),
          [svg.width]: num(Math.max(td.period.shortest, x2 - x1)), [svg.height]: num(td.period.height), [svg.rx]: num(td.period.radius),
        }, escape([l.title, when].join(parts)))
      }))
      const marks = concat(l.marks.filter((mk) => mk.role === DateRole.deadline || mk.role === DateRole.review).map((mk) => {
        const cx = x(fullDate(mk.date))
        const tip = escape(words.markOn(mk.label, dates.format(mk.date)))
        const centre = y + td.mark.centre
        return mk.role === DateRole.review
          ? tipped(svg.circle, { [html.class]: fm.review, [svg.cx]: num(cx), [svg.cy]: num(centre), [svg.r]: num(td.mark.radius) }, tip)
          : tipped(svg.path, {
            [html.class]: fm.mark,
            [svg.d]: path([cx, y + td.mark.top], [{ to: [cx + td.mark.half, centre] }, { to: [cx, y + td.mark.bottom] }, { to: [cx - td.mark.half, centre] }], true),
          }, tip)
      }))
      const label = element(svg.group, { [html.class]: fm.lane, [markup.attributes.reference]: escape(l.ref), [html.tabindex]: html.focusable, [aria.role]: aria.link },
        element(svg.text, { [svg.x]: num(zero), [svg.y]: num(y + td.lane.title) }, escape(shorten(l.title, { longest: td.titleChars, kept: previous(td.titleChars) }))) +
        element(svg.text, { [html.class]: fm.muted, [svg.x]: num(zero), [svg.y]: num(y + td.lane.kind) }, escape(l.kindLabel)))
      return label + periods + marks
    }))
    const tx = x(f.today)
    const h = bottom + td.bottom
    return element(svg.svg, {
      [html.class]: fm.timeline, [svg.viewBox]: [zero, zero, Wd, h].join(svg.separator), [svg.width]: num(Wd), [html.style]: width(td.narrowest, Wd),
      [aria.role]: aria.img, [aria.label]: escape(words.timeline()),
    }, concat([
      ticks,
      lanes,
      empty(svg.line, { [html.class]: fm.today, [svg.x1]: num(tx), [svg.y1]: num(top - td.today.above), [svg.x2]: num(tx), [svg.y2]: num(h - td.today.below) }),
      element(svg.text, { [html.class]: fm.muted, [svg.x]: num(tx + td.today.label), [svg.y]: num(top - td.today.above) }, escape(words.graphDate(dates.formatShort(f.today)))),
    ]))
  }

  return {
    figure: (f, index) => {
      // Too large to be read whole: the page explores it, from the figure at this index of the document.
      if (f.type === FigureType.graph && f.nodes.length > gd.explored) {
        return { lines: [element(html.div, { [html.class]: markup.classes.figureScroll, [markup.attributes.figure]: num(index) }, nothing)] }
      }
      const drawn = f.type === FigureType.graph ? drawGraph(f) + drawLegend(f) : drawTimeline(f)
      return { lines: [element(html.div, { [html.class]: markup.classes.figureScroll }, drawn)] }
    },
  }
}

export default body
