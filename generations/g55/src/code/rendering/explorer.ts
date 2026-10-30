// The explorer of a graph too large to be read whole (function "Explorer of a graph"): the page draws it where the
// engine left the figure's place, and draws it again as the person moves in it. First the map of its layers, a box per
// module in each, the edges gathered between them; a box opens on its nodes; then one node, with its neighbours in the
// layers above and under it. A click on a neighbour moves to it, the trail keeps the way back, and the node in focus
// opens its card. Its geometry is the decision "Drawing of the explorer", its names the decisions of markup; it writes
// SVG and HTML with the elements of the module html. Pure: the page keeps where each explorer is.

import { Status, keyOf, type Figure, type FigureNode, type ProvidedBy } from "../../../trame/kernel"
import type { Html, Svg, Aria, Css, HtmlElement, HtmlStartTag, SelfClosingTag, PathData, CssDeclaration, EscapedText } from "../../html"
import type { DocumentMarkup, FigureMarkup, ExplorerMarkup } from "../../markup"
import type { ExplorerDrawing } from "../../appearance"
import type { ThePage } from "../../page"
import type { PageWords, RenderingMessages } from "../../messages"
import type { Punctuation } from "../../documents"
import type { Counts, Sequences, Texts } from "../../../std/src/algebra"
import type { Api as CommonApi } from "./common"

type GraphFigure = Extract<Figure, { type: "graph" }>
type Attributes = Readonly<Record<string, string | true>>

/** Where an explorer is: its figure, the node in focus (none: the map), the box open on the map, the trail, the layers shown whole. */
export interface Exploration {
  f: GraphFigure
  focus?: string
  box?: string
  trail: string[]
  all: Set<number>
}

export interface Deps {
  html: ProvidedBy<typeof Html>
  svg: ProvidedBy<typeof Svg>
  aria: ProvidedBy<typeof Aria>
  css: ProvidedBy<typeof Css>
  page: ProvidedBy<typeof ThePage>
  markup: ProvidedBy<typeof DocumentMarkup>
  figures: ProvidedBy<typeof FigureMarkup>
  explorer: ProvidedBy<typeof ExplorerMarkup>
  drawing: ProvidedBy<typeof ExplorerDrawing>
  element: ProvidedBy<typeof HtmlElement>
  start: ProvidedBy<typeof HtmlStartTag>
  empty: ProvidedBy<typeof SelfClosingTag>
  path: ProvidedBy<typeof PathData>
  declaration: ProvidedBy<typeof CssDeclaration>
  escape: ProvidedBy<typeof EscapedText>
  common: CommonApi
  words: ProvidedBy<typeof PageWords>
  messages: ProvidedBy<typeof RenderingMessages>
  punctuation: ProvidedBy<typeof Punctuation>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { html, svg, aria, css, page, markup, figures: fm, explorer: em, drawing: d, element, start, empty, path, declaration, escape, common, words, messages } = deps
  const { parts, items } = deps.punctuation
  const { zero, one, next, previous, largest, any } = deps.counts
  const { head, take } = deps.sequences
  const { empty: nothing, space, ellipsis, concat, optional, when } = deps.texts
  const two = next(one)
  const half = (x: number) => x / two
  const none: Attributes = {}
  const num = (x: number) => String(x)
  /** The classes that apply, in one attribute. */
  const classes = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(space)
  /** The class of a status: the page's prefix, then the key of the status, which does not change when the words do. */
  const statusClass = (status: Status) => page.statusClass + optional(keyOf(Status, status))
  const translate = (x: number, y: number) => svg.translate + svg.openArguments + num(x) + svg.comma + num(y) + svg.closeArguments
  const tipped = (attributes: Attributes, tip: string, content: string) => element(svg.group, attributes, element(svg.title, none, escape(tip)) + content)
  const rect = (cls: string, width: number, height: number, radius?: number, x?: number, y?: number) =>
    empty(svg.rect, {
      [html.class]: cls, ...(x !== undefined ? { [svg.x]: num(x) } : none), ...(y !== undefined ? { [svg.y]: num(y) } : none),
      [svg.width]: num(width), [svg.height]: num(height), ...(radius !== undefined ? { [svg.rx]: num(radius) } : none),
    })
  const text = (attributes: Attributes, words: string) => element(svg.text, attributes, escape(words))
  /** The characters a box of this width holds. */
  const charsIn = (width: number) => Math.floor(width / d.charWidth)
  /** The width of a box when `columns` of them share a width, `gap` between them. */
  const across = (width: number, columns: number, gap: number) => Math.floor((width - two * d.layer.pad - previous(columns) * gap) / columns)
  /** The drawing: as wide as the page, never narrower than its narrowest, never wider than itself. */
  const drawingOf = (cls: string, height: number, label: string, content: string, extra: Attributes = none) => {
    const widest = d.width + two * d.margin
    return element(svg.svg, {
      [html.class]: cls, ...extra,
      [svg.viewBox]: [-d.margin, -d.margin, widest, height + two * d.margin].map(num).join(svg.separator),
      [svg.width]: num(widest),
      [html.style]: [declaration(css.width, num(css.whole) + css.percent), declaration(css.minWidth, num(d.narrowest) + css.pixel), declaration(css.maxWidth, num(widest) + css.pixel)].join(space),
      [aria.role]: aria.img, [aria.label]: escape(label),
    }, content)
  }

  /** A text in lines of at most `max` characters, `lines` at most: the last one kept ends with an ellipsis. */
  function wrap(words: string, max: number, lines: number): string[] {
    const out: string[] = []
    let current: string = nothing
    for (const word of words.split(space)) {
      const joined = (current + space + word).trim()
      if (joined.length > max && current) {
        out.push(current)
        current = word
      } else current = joined
    }
    if (current) out.push(current)
    if (out.length <= lines) return out
    const kept = take(out, lines)
    const last = kept[previous(lines)]
    kept[previous(lines)] = last.slice(zero, largest([last.length - two])) + ellipsis
    return kept
  }
  const firstLine = (words: string, max: number) => optional(head(wrap(words, max, one)))
  const titleLines = (title: string, chars: number) =>
    concat(wrap(title, chars, d.text.lines).map((line, j) => text({ [svg.x]: num(d.text.inset), [svg.y]: num(d.text.firstLine + j * d.text.lineHeight) }, line)))

  /** The label a node is found by, in the field of the bar. */
  const label = (n: FigureNode) => n.title + parts + n.kindLabel
  /** The classes of a node's box: a node of a figure, its status, history, out of force, and what else applies. */
  const nodeClasses = (n: FigureNode, extra?: string) =>
    classes(fm.node, n.status && statusClass(n.status), n.history && fm.history, !n.active && fm.inactive, extra)
  const statusWords = (n: FigureNode) => (n.status ? common.statusText(n.status) : nothing)
  const nodeTip = (n: FigureNode) => label(n) + when(statusWords(n), (s) => parts + s)
  const openMark = (width: number) => empty(svg.circle, { [html.class]: fm.open, [svg.cx]: num(width - d.open.inset), [svg.cy]: num(d.open.inset), [svg.r]: num(d.open.radius) })
  const button = (attributes: Attributes, pressed: boolean, words: string) =>
    element(html.button, { [html.type]: html.buttonType, [html.class]: markup.classes.viewButton, ...attributes, [aria.pressed]: String(pressed) }, escape(words))

  /** The bar: back to the layers, a field that goes to a node by its name, a hint on the map, the trail of the nodes visited. */
  function bar(id: string, x: Exploration): string {
    const byRef = new Map(x.f.nodes.map((n) => [n.ref, n]))
    const trail = x.trail.map((ref) => byRef.get(ref)).filter((n): n is FigureNode => !!n)
    const list = id + em.ids.suggestions
    const options = concat([...x.f.nodes].sort((a, b) => a.title.localeCompare(b.title)).map((n) => element(html.option, { [html.value]: escape(label(n)) }, nothing)))
    return element(html.div, { [html.class]: em.classes.bar }, concat([
      button({ [em.attributes.explore]: id, [markup.attributes.node]: nothing }, !x.focus, words.layers()),
      start(html.input, {
        [html.type]: html.search, [html.class]: em.classes.find, [html.list]: list, [em.attributes.find]: id,
        [html.placeholder]: escape(words.goToNode()), [aria.label]: escape(words.goToNodeLabel()),
      }),
      element(html.datalist, { [html.id]: list }, options),
      x.focus ? nothing : element(html.span, { [html.class]: em.classes.hint }, escape(words.hint())),
      any(trail)
        ? element(html.ol, { [html.class]: em.classes.trail, [aria.label]: escape(words.nodesVisited()) }, concat(trail.map((n) =>
          element(html.li, none, button({ [em.attributes.explore]: id, [markup.attributes.node]: escape(n.ref) }, n.ref === x.focus, n.title)))))
        : nothing,
    ]))
  }

  /** A module's place in a layer: the box of the map that holds its nodes of that layer. */
  const boxKey = (layer: number, module: string) => num(layer) + em.joints.box + module

  /**
   * The map of the layers: a frame per layer, a box per module in it (its name, how many of its nodes are there, the
   * share of each status), and between the boxes the edges of the graph, gathered (the thicker, the more edges). A box
   * open lists its nodes under its layer, each one a way into the graph.
   */
  function map(id: string, x: Exploration): string {
    const f = x.f
    const { columns, height: H, across: gapX, down: gapY, gap, kindBottom } = d.map
    const { head: headHeight, pad, rankBaseline } = d.layer
    const W = across(d.width, columns, gapX)
    const chars = charsIn(W)
    const nodes = d.map.nodes
    const NW = across(d.width, nodes.columns, nodes.gap)
    const nchars = charsIn(NW)
    const labels = new Map(f.groups.map((g) => [g.id, g.label]))
    // The project's name opens most modules' labels ("Trame · Engine"): the map leaves it out, the document says it.
    const heads = new Map<string, number>()
    for (const g of f.groups) {
      const [first] = g.label.split(parts)
      if (g.label.includes(parts)) heads.set(first, next(heads.get(first) ?? zero))
    }
    const [project] = [...heads.entries()].filter(([, n]) => n * two >= f.groups.length).map(([h]) => h)
    const moduleName = (m: string) => {
      const name = labels.get(m) ?? m
      return project !== undefined && name.startsWith(project + parts) ? name.slice((project + parts).length) : name
    }
    const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
    const statuses = Object.values(Status)

    const frames: string[] = []
    const boxes: string[] = []
    const places = new Map<string, { x: number; y: number }>()
    const moduleOf = new Map(f.nodes.map((n) => [n.ref, boxKey(n.layer, n.module)]))
    let y: number = zero
    for (const layer of layers) {
      const here = f.nodes.filter((n) => n.layer === layer)
      const modules = [...new Set(here.map((n) => n.module))].sort((a, b) => moduleName(a).localeCompare(moduleName(b)))
      const lines = Math.ceil(modules.length / columns)
      const open = modules.find((m) => boxKey(layer, m) === x.box)
      const members = open ? here.filter((n) => n.module === open).sort((a, b) => a.title.localeCompare(b.title)) : []
      const nlines = Math.ceil(members.length / nodes.columns)
      const detail = open ? headHeight + nlines * nodes.height + previous(nlines) * nodes.gap : zero
      const height = headHeight + lines * H + previous(lines) * gapY + pad + detail
      frames.push(element(svg.group, { [html.class]: em.classes.group }, rect(em.classes.frame, d.width, height, d.radius.frame, zero, y) +
        text({ [html.class]: em.classes.rank, [svg.x]: num(pad), [svg.y]: num(y + rankBaseline) }, messages.rank(layer) + parts + words.nodes(here.length))))
      modules.forEach((m, i) => {
        const at = boxKey(layer, m)
        const px = pad + (i % columns) * (W + gapX)
        const py = y + headHeight + Math.floor(i / columns) * (H + gapY)
        places.set(at, { x: px, y: py })
        const inBox = here.filter((n) => n.module === m)
        // The share of each status, as a strip at the bottom of the box; the nodes without a status, in the colour of a line.
        const shares = [
          ...statuses.map((st) => ({ cls: statusClass(st), n: inBox.filter((n) => n.status === st).length })),
          { cls: em.classes.none, n: inBox.filter((n) => !n.status).length },
        ].filter((c) => c.n)
        let sx: number = d.strip.inset
        const strip = concat(shares.map((c) => {
          const w = ((W - two * d.strip.inset) * c.n) / inBox.length
          const segment = rect(classes(em.classes.segment, c.cls), w, d.strip.height, undefined, sx, H - d.strip.bottom)
          sx += w
          return segment
        }))
        const name = moduleName(m)
        const tip = name + parts + messages.rank(layer) + parts + words.nodes(inBox.length)
        boxes.push(tipped({
          [html.class]: classes(em.classes.box, at === x.box && em.classes.selected), [em.attributes.box]: id, [em.attributes.place]: escape(at),
          [svg.transform]: translate(px, py), [html.tabindex]: html.focusable, [aria.role]: aria.button, [aria.expanded]: String(at === x.box), [aria.label]: escape(tip),
        }, tip, concat([
          rect(fm.box, W, H, d.radius.box),
          titleLines(name, chars),
          text({ [html.class]: fm.kind, [svg.x]: num(d.text.inset), [svg.y]: num(H - kindBottom) }, words.nodes(inBox.length)),
          strip,
        ])))
      })
      if (open) {
        const top = y + headHeight + lines * H + previous(lines) * gapY + pad
        frames.push(text({ [html.class]: em.classes.rank, [svg.x]: num(pad), [svg.y]: num(top + rankBaseline) }, moduleName(open) + parts + words.nodes(members.length)))
        members.forEach((n, i) => {
          const px = pad + (i % nodes.columns) * (NW + nodes.gap)
          const py = top + headHeight + Math.floor(i / nodes.columns) * (nodes.height + nodes.gap)
          boxes.push(tipped({
            [html.class]: nodeClasses(n), [em.attributes.explore]: id, [markup.attributes.node]: escape(n.ref),
            [svg.transform]: translate(px, py), [html.tabindex]: html.focusable, [aria.role]: aria.button, [aria.label]: escape(nodeTip(n)),
          }, nodeTip(n), concat([
            rect(fm.box, NW, nodes.height, d.radius.box),
            text({ [svg.x]: num(d.text.inset), [svg.y]: num(d.text.firstLine) }, firstLine(n.title, nchars)),
            text({ [html.class]: fm.kind, [svg.x]: num(d.text.inset), [svg.y]: num(nodes.height - nodes.kindBottom) }, firstLine(n.kindLabel + when(statusWords(n), (s) => parts + s), nchars + d.text.kindExtra)),
            n.open ? openMark(NW) : nothing,
          ])))
        })
      }
      y += height + gap
    }

    // The edges between two boxes, gathered: one link per pair of boxes, as thick as the edges it carries are many.
    const pairs = new Map<string, { a: string; b: string; n: number }>()
    const place = (k: string) => places.get(k) ?? { x: zero, y: zero }
    for (const e of f.edges) {
      const from = moduleOf.get(e.from)
      const to = moduleOf.get(e.to)
      if (!from || !to || from === to) continue
      const [a, b] = [from, to].sort((p, q) => place(p).y - place(q).y || place(p).x - place(q).x)
      const key = a + em.joints.pair + b
      const pair = pairs.get(key) ?? { a, b, n: zero }
      pair.n = next(pair.n)
      pairs.set(key, pair)
    }
    const lit = (p: { a: string; b: string }) => x.box !== undefined && (p.a === x.box || p.b === x.box)
    const links = [...pairs.values()].map((p) => {
      const s = place(p.a)
      const t = place(p.b)
      const centre = (at: { x: number }) => at.x + half(W)
      // Side by side: under the boxes, from one to the other; otherwise from the bottom of one to the top of the other.
      const line = s.y === t.y
        ? path([centre(s), s.y + H], [{ to: [centre(t), t.y + H], via: [[centre(s), s.y + H + d.link.curve], [centre(t), t.y + H + d.link.curve]] }], false)
        : path([centre(s), s.y + H], [{ to: [centre(t), t.y], via: [[centre(s), s.y + H + half(t.y - s.y - H)], [centre(t), t.y - half(t.y - s.y - H)]] }], false)
      const width = Math.min(d.link.base + Math.log2(p.n), d.link.widest).toFixed(d.link.precision)
      return element(svg.path, {
        [html.class]: classes(em.classes.link, lit(p) && em.classes.lit), [em.attributes.from]: escape(p.a), [em.attributes.to]: escape(p.b),
        [svg.d]: line, [svg.strokeWidth]: width,
      }, element(svg.title, none, escape(words.edges(p.n))))
    })

    return drawingOf(classes(em.classes.graph, em.classes.map, x.box && em.classes.lighting), y - gap, words.mapLabel(),
      concat([...frames, ...links, ...boxes, element(svg.group, { [html.class]: em.classes.top }, nothing)]),
      { [em.attributes.selected]: escape(optional(x.box)) })
  }

  /**
   * One node in focus: in the middle; above it, its neighbours in the layers nearer the roots; under it, those of its own
   * layer, then those further away. Each layer is a frame of boxes, the rest of a long one on demand; a rail on the left
   * ties every frame to the node in focus.
   */
  function focus(id: string, x: Exploration): string {
    const f = x.f
    const { columns, height: H, across: gapX, down: gapY, gap, left, rail: railX, tie, kindBottom } = d.focus
    const { head: headHeight, pad, rankBaseline } = d.layer
    const W = across(d.width - left, columns, gapX)
    const chars = charsIn(W)
    const byRef = new Map(f.nodes.map((n) => [n.ref, n]))
    const centre = byRef.get(optional(x.focus))
    if (!centre) return map(id, x)
    // Each neighbour once, with the relations that link it to the node in focus, said from the node in focus.
    const links = new Map<string, { node: FigureNode; relations: string[] }>()
    for (const e of f.edges) {
      if (e.from !== centre.ref && e.to !== centre.ref) continue
      const other = byRef.get(e.from === centre.ref ? e.to : e.from)
      if (!other || other.ref === centre.ref) continue
      const said = e.from === centre.ref ? e.label : e.inverse
      const relation = (e.active ? said : messages.inactiveLabel(said)).toLowerCase()
      const l = links.get(other.ref) ?? { node: other, relations: [] }
      if (!l.relations.includes(relation)) l.relations.push(relation)
      links.set(other.ref, l)
    }
    const ranks = [...new Set([...links.values()].map((l) => l.node.layer))].sort((a, b) => a - b)
    const order = [...ranks.filter((r) => r < centre.layer), undefined, ...ranks.filter((r) => r >= centre.layer)]
    const box = (n: FigureNode, px: number, py: number, under: string, attributes: Attributes, extra?: string) => tipped({
      [html.class]: nodeClasses(n, extra), ...attributes, [svg.transform]: translate(px, py), [html.tabindex]: html.focusable, [aria.label]: escape(nodeTip(n)),
    }, nodeTip(n), concat([
      rect(fm.box, W, H, d.radius.box),
      titleLines(n.title, chars),
      text({ [html.class]: fm.kind, [svg.x]: num(d.text.inset), [svg.y]: num(H - kindBottom) }, firstLine(under, chars + d.text.kindExtra)),
      n.open ? openMark(W) : nothing,
    ]))
    const rail = (from: [number, number], to: [number, number]) => empty(svg.path, { [html.class]: em.classes.rail, [svg.d]: path(from, [{ to }], false) })
    const shapes: string[] = []
    const ties: number[] = []
    let y: number = zero
    for (const layer of order) {
      if (layer === undefined) {
        const px = left + half(d.width - left - W)
        shapes.push(box(centre, px, y, words.openItsCard(centre.kindLabel), { [markup.attributes.reference]: escape(centre.ref), [aria.role]: aria.link }, fm.focus))
        shapes.push(rail([railX, y + half(H)], [px, y + half(H)]))
        ties.push(y + half(H))
        y += H + gap
        continue
      }
      const here = [...links.values()].filter((l) => l.node.layer === layer)
        .sort((a, b) => optional(head(a.relations)).localeCompare(optional(head(b.relations))) || a.node.title.localeCompare(b.node.title))
      const shown = x.all.has(layer) ? here : take(here, d.neighbours)
      const rest = here.length - shown.length
      const count = shown.length + (rest > zero ? one : zero)
      const lines = Math.ceil(count / columns)
      const height = headHeight + lines * H + previous(lines) * gapY + pad
      const at = (i: number): [number, number] => [left + pad + (i % columns) * (W + gapX), y + headHeight + Math.floor(i / columns) * (H + gapY)]
      const inner = shown.map((l, i) => {
        const [px, py] = at(i)
        return box(l.node, px, py, l.relations.join(items) + parts + l.node.kindLabel, { [em.attributes.explore]: id, [markup.attributes.node]: escape(l.node.ref), [aria.role]: aria.button })
      })
      if (rest > zero) {
        const [px, py] = at(shown.length)
        inner.push(element(svg.group, {
          [html.class]: classes(fm.node, em.classes.more), [em.attributes.more]: id, [em.attributes.layer]: num(layer),
          [svg.transform]: translate(px, py), [html.tabindex]: html.focusable, [aria.role]: aria.button,
        }, rect(fm.box, W, H, d.radius.box) + text({ [svg.x]: num(half(W)), [svg.y]: num(half(H) + d.more.baseline), [svg.textAnchor]: svg.middle }, words.more(rest))))
      }
      shapes.push(element(svg.group, { [html.class]: em.classes.group }, concat([
        rect(em.classes.frame, d.width - left, height, d.radius.frame, left, y),
        text({ [html.class]: em.classes.rank, [svg.x]: num(left + pad), [svg.y]: num(y + rankBaseline) }, messages.rank(layer) + parts + words.neighbours(here.length)),
        ...inner,
      ])))
      shapes.push(rail([railX, y + tie], [left, y + tie]))
      ties.push(y + tie)
      y += height + gap
    }
    return drawingOf(em.classes.graph, y - gap, words.andItsNeighbours(centre.title),
      rail([railX, Math.min(...ties)], [railX, Math.max(...ties)]) + concat(shapes))
  }

  return {
    label,
    boxKey,
    /** The bar of an explorer, then its drawing: the node in focus, or the map of the layers. */
    draw: (id: string, x: Exploration): string =>
      bar(id, x) + element(html.div, { [html.class]: markup.classes.figureScroll }, x.focus ? focus(id, x) : map(id, x)),
  }
}

export type Api = ReturnType<typeof body>
export default body
