// Show the graph (entry point of the page in a browser): the documents the engine wrote, at each date of the graph.
// It writes the side bar (the state of the compilation, the dates, the navigation), the head of the document and the
// document in the rendering chosen, draws the explorer where a figure is too large to be read whole, and follows what
// the person does. It knows no kind and no view: only documents and figures. What it touches of the browser comes
// through its ports (the window, the memory, the feed of the graph, the decompression); its names are the page's
// decisions; the documents come written in HTML, Markdown and text.

import {
  BlockType, BundleMode, DateRole, EvidenceSource, FigureType, ViewGroup, ViewScope,
  addDays, formatDate, formatDateShort, fullDate, movedTo,
} from "../../../trame/kernel"
import type { Bundle, Document, Figure, Payload, ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { PageWindow, PageMemory, GraphFeed, Decompression } from "../../architecture"
import type { Html, Aria } from "#std/html"
import type { HtmlElement, EscapedText, AttributeSelector, AttributePresence, SelectorList, ClassSelector } from "../../html"
import type { DocumentMarkup, AroundMarkup, ExplorerMarkup } from "../../markup"
import type { ExplorerDrawing } from "../../appearance"
import type { ThePage, PageRegions, RenderingModes, MachineHighlighting, RenderingMode } from "../../page"
import type { Language, PageWords } from "../../messages"
import type { DocumentIds } from "../../conventions"
import type { SentenceSlots } from "../../rendering"
import type { Punctuation } from "../../documents"
import type { UiEvents, CssomView } from "#std/web"
import type { Iso8601 } from "#std/measures"
import type { TextFile } from "#std/text"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { Api as CommonApi, Location } from "../rendering/common"
import type { Api as ExplorerApi, Exploration } from "../rendering/explorer"

type Attributes = Readonly<Record<string, string | true>>
type Mode = RenderingMode

export interface Deps {
  window: PageWindow
  memory: PageMemory
  feed: GraphFeed
  unpacking: Decompression
  explorer: ExplorerApi
  common: CommonApi
  page: ProvidedBy<typeof ThePage>
  regions: ProvidedBy<typeof PageRegions>
  modes: ProvidedBy<typeof RenderingModes>
  highlighting: ProvidedBy<typeof MachineHighlighting>
  markup: ProvidedBy<typeof DocumentMarkup>
  around: ProvidedBy<typeof AroundMarkup>
  explorerMarkup: ProvidedBy<typeof ExplorerMarkup>
  drawing: ProvidedBy<typeof ExplorerDrawing>
  ids: ProvidedBy<typeof DocumentIds>
  slots: ProvidedBy<typeof SentenceSlots>
  punctuation: ProvidedBy<typeof Punctuation>
  /** The language decided: the page speaks it until a payload says another. */
  language: ProvidedBy<typeof Language>
  html: ProvidedBy<typeof Html>
  aria: ProvidedBy<typeof Aria>
  events: ProvidedBy<typeof UiEvents>
  view: ProvidedBy<typeof CssomView>
  iso: ProvidedBy<typeof Iso8601>
  file: ProvidedBy<typeof TextFile>
  element: ProvidedBy<typeof HtmlElement>
  escape: ProvidedBy<typeof EscapedText>
  attribute: ProvidedBy<typeof AttributeSelector>
  presence: ProvidedBy<typeof AttributePresence>
  selectors: ProvidedBy<typeof SelectorList>
  classSelector: ProvidedBy<typeof ClassSelector>
  words: ProvidedBy<typeof PageWords>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps): Handler => {
  const { window, memory, feed, unpacking, explorer, common, page, regions, modes, highlighting, markup, around, ids, slots, html, aria, events, view, iso, file } = deps
  const { element, escape, attribute, presence, selectors, classSelector, words } = deps
  const { classes: em, attributes: ea, ids: explorerIds } = deps.explorerMarkup
  const { parts } = deps.punctuation
  const { zero, one, next, any, several } = deps.counts
  const { head, take, takeLast } = deps.sequences
  const { empty, space, concat, optional, when } = deps.texts
  const doc = window.document
  const none: Attributes = {}
  const num = (x: number) => String(x)
  /** The rendering shown first: the document as the page lays it out, with its figures. */
  const [rendered] = modes
  /** The classes that apply, in one attribute. */
  const classes = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(space)
  const $ = (id: string) => doc.getElementById(id) as HTMLElement
  /** The documents of the files for tools: the name of their view, then the file. */
  const machinePrefix = page.machine + ids.ofNode
  /** A sentence of the catalog whose parameters are written pieces: its words escaped, the pieces put where it placed them. */
  const placed = (message: (...marks: string[]) => string, ...pieces: string[]): string => {
    const marks = pieces.map((_, n) => slots.delimiter + String(n) + slots.delimiter)
    return pieces.reduce((written, piece, n) => written.split(marks[n]).join(piece), escape(message(...marks)))
  }

  // The language of the payload: the dates the page writes follow it; until a payload says one, the decided language.
  let language: string = deps.language.tag
  const speak = (p: Payload | undefined) => {
    language = p?.language || deps.language.tag
  }
  const day = (iso8601: string) => formatDate(iso8601, language)
  const shortDay = (iso8601: string) => formatDateShort(iso8601, false, language)
  const timeOf = (instant: string) => new Date(instant).toLocaleTimeString(language)

  // The names of the files for tools: they come from the payload (the project's layout chooses them).
  let machine: string[] = []
  const state = {
    bundle: undefined as Bundle | undefined,
    date: empty as string,
    doc: empty as string,
    mode: rendered as Mode,
    node: empty as string,
    busy: false,
    hideBanner: false,
  }

  const recall = () => {
    const kept = memory.recall()
    if (kept === undefined) return
    try {
      const saved = JSON.parse(kept) as Partial<{ doc: string; mode: Mode; node: string }>
      Object.assign(state, { doc: saved.doc ?? empty, mode: saved.mode && modes.includes(saved.mode) ? saved.mode : rendered, node: saved.node ?? empty })
    } catch {
      /* a place kept by another version of the page: the default state */
    }
  }
  const save = () => memory.keep(JSON.stringify({ doc: state.doc, mode: state.mode, node: state.node }))

  const payload = (): Payload | undefined => state.bundle?.dates.find((d) => d.date === state.date)?.payload
  const locations = new WeakMap<Payload, Map<string, Location>>()
  const locOf = (p: Payload) => {
    let m = locations.get(p)
    if (!m) locations.set(p, (m = common.locate(p.documents)))
    return m
  }
  const findDoc = (p: Payload, id: string) => p.documents.find((d) => d.id === id)
  const firstDoc = (p: Payload) => p.documents.find((d) => d.group === ViewGroup.document) ?? head(p.documents)

  /** A reference outside a document (the note of a date): a link the page follows, as the documents write them. */
  const refLink = (ref: string, title: string) =>
    element(html.a, { [html.class]: markup.classes.reference, [markup.attributes.reference]: escape(ref), [html.tabindex]: html.focusable }, escape(title))

  // Documents and their figures --------------------------------------------------------------
  // The engine writes each document in HTML and draws its figures; a graph too large to be read whole leaves the place
  // of the explorer, with the figure's index in the document.

  const explorations = new Map<string, Exploration>()
  let explorers: number = zero

  /** The figures of a document, in the order its HTML holds them (the order of its blocks, cards included). */
  function figuresOf(d: Document): Figure[] {
    const found: Figure[] = []
    common.walkBlocks(d.blocks, (b) => {
      if (b.type === BlockType.figure) found.push(b.figure)
    })
    return found
  }
  const hasFigure = (d: Document) => any(figuresOf(d))

  const explorerOf = (id: string) => doc.getElementById(id)?.querySelector<HTMLElement>(classSelector(em.explorer))
  const redraw = (id: string) => {
    const x = explorations.get(id)
    const el = explorerOf(id)
    if (x && el) el.innerHTML = explorer.draw(id, x)
  }

  function drawFigures(root: HTMLElement, d: Document) {
    const figures = figuresOf(d)
    root.querySelectorAll<HTMLElement>(presence(markup.attributes.figure)).forEach((place) => {
      const f = figures[Number(place.getAttribute(markup.attributes.figure))]
      place.removeAttribute(markup.attributes.figure)
      if (f?.type !== FigureType.graph) return
      const id = explorerIds.explorer + num(explorers)
      explorers = next(explorers)
      explorations.set(id, { f, focus: f.focus, trail: f.focus ? [f.focus] : [], all: new Set() })
      place.className = em.explorer
      place.innerHTML = explorer.draw(id, explorations.get(id)!)
      if (place.parentElement) place.parentElement.id = id
    })
  }

  /** Moves an explorer to a node (to its layers, without one), and draws it again in place. */
  function explore(id: string, node: string | null) {
    const x = explorations.get(id)
    const el = doc.getElementById(id)
    if (!x || !el) return
    x.focus = node || undefined
    x.all.clear()
    if (node) x.trail = takeLast([...x.trail.filter((r) => r !== node), node], deps.drawing.trail)
    redraw(id)
    // Back to the top of the figure when it was scrolled past: the bar and the node in focus come into view.
    if (el.getBoundingClientRect().top < zero) el.scrollIntoView({ block: view.start })
  }

  /** Lights the links of a box of the map, and the boxes at their other end; without one, those of the open box. */
  function lightMap(svg: Element, key: string | null | undefined) {
    const k = key || svg.getAttribute(ea.selected) || empty
    svg.classList.toggle(em.lighting, !!k)
    svg.querySelectorAll(classSelector(em.box) + classSelector(em.lit)).forEach((b) => b.classList.remove(em.lit))
    const top = svg.querySelector(classSelector(em.top))
    if (top) top.innerHTML = empty
    // The links are the drawing's own children; those of the box under the pointer are drawn again over the boxes.
    for (const link of Array.from(svg.children).filter((c) => c.classList.contains(em.link))) {
      const [a, b] = [link.getAttribute(ea.from), link.getAttribute(ea.to)]
      const on = !!k && (a === k || b === k)
      link.classList.toggle(em.lit, on)
      if (!on) continue
      if (key) top?.appendChild(link.cloneNode(true))
      const other = a === k ? b : a
      svg.querySelector(classSelector(em.box) + attribute(ea.place, window.escape(optional(other))))?.classList.add(em.lit)
    }
  }

  function renderDocument(el: HTMLElement, p: Payload, d: Document) {
    explorers = zero
    explorations.clear()
    el.innerHTML = optional(p.renders?.[d.id]?.html)
    drawFigures(el, d)
  }

  /** A file of JSON, its parts coloured. */
  function highlight(text: string): string {
    const span = (cls: string, written: string) => element(html.span, { [html.class]: cls }, written)
    return escape(text).replace(new RegExp(highlighting.pattern, highlighting.flags), (_whole, str?: string, colon?: string, literal?: string, number?: string) => {
      if (str) return colon ? span(around.json.key, str) + colon : span(around.json.text, str)
      if (literal) return span(around.json.literal, literal)
      return span(around.json.number, optional(number))
    })
  }

  /** The words of the command that writes a document in the terminal. */
  const commandWords = (d: Document) => {
    if (d.group === ViewGroup.summary) return words.buildWords()
    if (d.group === ViewGroup.node) return words.trameWords(d.view + space + common.idOf(optional(d.arg)))
    if (d.group === ViewGroup.module) return words.moduleViewWords(d.view, optional(d.arg))
    return words.trameWords(d.view)
  }
  const commandOf = (d: Document, date: string) => words.command(commandWords(d), date)

  // The side bar ------------------------------------------------------------------------------

  function renderStatus() {
    const el = $(regions.status)
    const b = state.bundle
    el.className = classes(regions.status, state.busy ? around.classes.busy : !!b?.error && around.classes.failed)
    const time = b ? timeOf(b.generatedAt) : empty
    const said = !b ? words.waiting()
      : state.busy ? words.compiling()
        : b.mode === BundleMode.dev
          ? b.error ? words.refused(time) : words.compiledAt(time, b.dates.length)
          : words.exportOf(day(b.today), b.dates.length)
    el.innerHTML = element(html.span, { [html.class]: around.classes.dot }, empty) + element(html.span, none, escape(said))
  }

  function renderDates() {
    const b = state.bundle
    if (!b) return
    let year: string = empty
    $(regions.dates).innerHTML = concat(b.dates.map((d) => {
      const its = take(d.date, iso.yearLength)
      const small = d.date === b.today ? words.today() : its !== year ? its : empty
      year = its
      const failed: Attributes = d.payload ? none : { [html.class]: around.classes.failed, [html.disabled]: true, [html.title]: escape(d.error ?? words.failed()) }
      return element(html.button, { [html.type]: html.buttonType, [around.attributes.date]: d.date, [aria.pressed]: String(d.date === state.date), ...failed },
        escape(shortDay(d.date)) + element(html.small, none, escape(small)))
    }))
    const p = payload()
    const notes: string[] = []
    if (p) {
      // The day a period ends, the node is still in force: it leaves the graph the day after.
      const changeDay = (e: Payload["events"][number]) => (e.role === DateRole.end ? addDays(e.date, one) : fullDate(e.date))
      const on = p.events.filter((e) => changeDay(e) === state.date)
      for (const e of on) {
        const what = e.role === DateRole.start ? words.comesIntoForce() : e.role === DateRole.end ? words.noLongerInForce() : e.role === DateRole.review ? words.reviewPlanned() : e.label
        notes.push(placed(words.markOn, escape(what), refLink(e.ref, e.title)))
      }
      // What was given that day: a version released, evidence recorded (each once).
      const given = new Map((p.history ?? []).filter((h) => h.date === state.date).map((h) => {
        const what = h.version !== undefined ? words.releasedAs(h.version)
          : h.source === EvidenceSource.built ? words.builtThatDay()
          : h.source === EvidenceSource.check ? (h.value ? words.checkPassedThatDay() : words.checkFailedThatDay())
          : h.source === EvidenceSource.review ? words.reviewedThatDay()
          : h.source === EvidenceSource.deployed ? words.deployedThatDay()
          : h.source === EvidenceSource.shipped ? words.shippedThatDay()
          : words.givenThatDay()
        return [JSON.stringify([what, h.ref]), placed(words.markOn, escape(what), refLink(h.ref, h.title))]
      }))
      notes.push(...given.values())
      const [first] = p.events.map(changeDay).sort()
      if (!any(on) && !any([...given.values()])) notes.push(escape(first && state.date < first ? words.beforeAnyChange() : words.noChangeThatDay()))
    }
    $(regions.dateNote).innerHTML = several(notes) ? element(html.ul, none, concat(notes.map((n) => element(html.li, none, n)))) : concat(notes)
  }

  function navItem(id: string, title: string, under: string, badge?: number) {
    const count = badge === undefined ? empty
      : element(html.span, { [html.class]: classes(around.classes.badge, !badge && around.classes.zero), [html.title]: escape(words.issuesToAddress()) }, num(badge))
    const current: Attributes = id === state.doc ? { [aria.current]: aria.page } : none
    return element(html.li, none, element(html.a, { [markup.attributes.doc]: escape(id), [html.tabindex]: html.focusable, ...current }, concat([
      element(html.span, { [html.class]: around.classes.title }, escape(title)), count, element(html.span, { [html.class]: around.classes.file }, escape(under)),
    ])))
  }
  const labelled = (label: string, content: string) => element(html.p, { [html.class]: page.label }, escape(label)) + content
  const option = (value: string, chosen: boolean, title: string) =>
    element(html.option, { [html.value]: escape(value), ...(chosen ? { [html.selected]: true } : none) }, escape(title))

  function renderNav() {
    const p = payload()
    if (!p) return
    const issuesOf = (module: string) => p.state.issues.filter((i) => i.ref && p.nodes.find((n) => n.ref === i.ref)?.module === module).length
    const group = (g: Document["group"], label: string) => {
      const docs = p.documents.filter((d) => d.group === g)
      if (!any(docs)) return empty
      return element(html.div, none, labelled(label, element(html.ul, none, concat(docs.map((d) =>
        navItem(d.id, d.title, d.file ?? commandWords(d), g === ViewGroup.module ? issuesOf(optional(d.arg)) : undefined))))))
    }
    const nodeViews = p.views.filter((v) => v.per === ViewScope.node)
    if (!state.node || !p.nodes.some((n) => n.ref === state.node)) state.node = head(p.nodes)?.ref ?? empty
    const nodePick = any(nodeViews) ? element(html.div, { [html.class]: around.classes.nodePick }, labelled(words.perNode(), concat([
      element(html.select, { [html.id]: regions.nodes, [aria.label]: escape(words.node()) }, concat(p.modules.map((m) =>
        element(html.optgroup, { [html.label]: escape(m.title) }, concat(p.nodes.filter((n) => n.module === m.id).map((n) => option(n.ref, n.ref === state.node, n.title))))))),
      element(html.div, { [html.class]: around.classes.nodeViews }, concat(nodeViews.map((v) => {
        const id = v.name + ids.ofNode + state.node
        const missing: Attributes = findDoc(p, id) ? none : { [html.disabled]: true }
        return element(html.button, { [html.type]: html.buttonType, [html.class]: markup.classes.viewButton, [markup.attributes.doc]: escape(id), [aria.pressed]: String(state.doc === id), ...missing }, escape(v.label))
      }))),
    ]))) : empty
    $(regions.nav).innerHTML = concat([
      group(ViewGroup.module, words.oneDocumentPerModule()),
      group(ViewGroup.document, words.documents()),
      group(ViewGroup.figure, words.figures()),
      nodePick,
      group(ViewGroup.summary, words.summary()),
      element(html.div, none, labelled(words.forTools(), element(html.ul, none, concat(machine.map((f) => navItem(machinePrefix + f, f, f)))))),
    ])
    const of = (g: Document["group"]) => p.documents.filter((d) => d.group === g)
    const groups: [string, Document[]][] = [
      [words.modules(), of(ViewGroup.module)], [words.documents(), of(ViewGroup.document)], [words.figures(), of(ViewGroup.figure)], [words.summary(), of(ViewGroup.summary)],
    ]
    $(regions.documents).innerHTML = concat(groups.map(([label, docs]) => when(any(docs), () =>
      element(html.optgroup, { [html.label]: escape(label) }, concat(docs.map((d) => option(d.id, d.id === state.doc, d.title))))))) +
      element(html.optgroup, { [html.label]: escape(words.forTools()) }, concat(machine.map((f) => option(machinePrefix + f, state.doc === machinePrefix + f, f))))
    const picker = doc.getElementById(regions.documents) as HTMLSelectElement
    if (!picker.value) {
      const shown = doc.createElement(html.option)
      shown.textContent = findDoc(p, state.doc)?.title ?? state.doc
      shown.selected = true
      picker.prepend(shown)
    }
  }

  // The main area -----------------------------------------------------------------------------

  function renderBanner() {
    const b = state.bundle
    const el = $(regions.banner)
    if (!b || state.hideBanner || (!b.error && !b.changes)) {
      el.hidden = true
      return
    }
    el.hidden = false
    if (b.error) {
      el.className = classes(regions.banner, around.classes.error)
      el.innerHTML = element(html.h2, none, escape(words.compilationFailed())) + element(html.p, none, escape(words.keptLastValid())) + element(html.pre, none, escape(b.error))
    } else if (b.changes) {
      el.className = classes(regions.banner, around.classes.changes)
      el.innerHTML = element(html.h2, none, escape(b.changes.title + parts + timeOf(b.generatedAt))) + optional(b.changesHtml) +
        element(html.button, { [html.type]: html.buttonType, [html.id]: regions.bannerClose, [html.class]: markup.classes.viewButton }, escape(words.hide()))
    }
  }

  /** How each rendering shows a document: laid out with its figures, its Markdown, its text after the command that writes it. */
  const show: Record<Mode, (el: HTMLElement, p: Payload, d: Document) => void> = {
    rendered: (el, p, d) => renderDocument(el, p, d),
    markdown: (el, p, d) => {
      el.innerHTML = element(html.pre, { [html.class]: around.classes.source }, escape(optional(p.renders?.[d.id]?.markdown)))
    },
    text: (el, p, d) => {
      el.innerHTML = element(html.pre, { [html.class]: around.classes.terminal },
        element(html.span, { [html.class]: around.classes.prompt }, escape(page.prompt + commandOf(d, p.date))) + file.endOfLine + escape(optional(p.renders?.[d.id]?.text)))
    },
  }

  function renderMain(anchor?: string) {
    const p = payload()
    const docEl = $(regions.doc)
    if (!p) {
      docEl.innerHTML = element(html.p, none, escape(state.bundle?.error ? words.noValidGraph() : feed.packed() !== undefined ? words.openingGraph() : words.compilingGraph()))
      return
    }
    if (state.doc.startsWith(machinePrefix)) {
      const f = state.doc.slice(machinePrefix.length)
      const text = optional(p.machine[f as keyof Payload["machine"]])
      $(regions.toggle).hidden = true
      $(regions.path).innerHTML = element(html.b, none, escape(f)) + escape(parts + words.lines(text.split(file.endOfLine).length) + parts + words.graphAsOf(day(p.date)))
      docEl.className = classes(regions.doc, around.classes.wide)
      docEl.innerHTML = element(html.pre, { [html.class]: around.classes.json }, highlight(text))
      return
    }
    let d = findDoc(p, state.doc)
    if (!d) {
      // This document does not exist at this date (a view that no longer applies, say): back to the node, or to the start.
      const [, node] = state.doc.split(ids.ofNode)
      const loc = node ? locOf(p).get(node) : undefined
      d = (loc && findDoc(p, loc.doc)) || firstDoc(p)
      if (!d) return
      state.doc = d.id
    }
    $(regions.toggle).hidden = false
    for (const m of modes) $(regions.rendering + m).setAttribute(aria.pressed, String(state.mode === m))
    $(regions.path).innerHTML = element(html.b, none, escape(d.file ?? commandWords(d))) + escape(parts + words.graphAsOf(day(p.date)))
    docEl.className = classes(regions.doc, hasFigure(d) && state.mode === rendered && around.classes.wide)
    show[state.mode](docEl, p, d)
    if (anchor && state.mode === rendered) {
      const target = doc.getElementById(anchor)
      if (target) {
        target.scrollIntoView({ block: view.start, behavior: window.reducedMotion() ? view.instant : view.smooth })
        target.classList.remove(around.classes.flash)
        void target.offsetWidth
        target.classList.add(around.classes.flash)
        return
      }
    }
    window.toTop()
  }

  function render(anchor?: string) {
    // Once a graph is there: the language of the payload shown (or of the first valid one) before anything is written.
    if (state.bundle) speak(payload() ?? state.bundle.dates.find((d) => d.payload)?.payload)
    renderStatus()
    renderDates()
    renderNav()
    renderBanner()
    renderMain(anchor)
    renderNav()
    save()
  }

  function go(to: string, anchor?: string) {
    state.doc = to
    if (to.includes(ids.ofNode) && !to.startsWith(machinePrefix)) {
      const [, ...node] = to.split(ids.ofNode)
      state.node = node.join(ids.ofNode)
    }
    render(anchor)
  }

  function goRef(ref: string) {
    const p = payload()
    if (!p) return
    const loc = locOf(p).get(ref)
    state.mode = rendered
    if (loc) go(loc.doc, loc.anchor)
    else if (findDoc(p, page.nodeView + ids.ofNode + ref)) go(page.nodeView + ids.ofNode + ref)
  }

  /** A bundle of several dates carries once the documents that are as on another date: each date gets them back. */
  function expand(b: Bundle): Bundle {
    const byDate = new Map(b.dates.map((d) => [d.date, d.payload]))
    return {
      ...b,
      dates: b.dates.map((d) => {
        const p = d.payload
        const from = p?.same && byDate.get(p.same.date)
        if (!p?.same || !from) return d
        const own = new Map(p.documents.map((doc) => [doc.id, doc]))
        const theirs = new Map(from.documents.map((doc) => [doc.id, doc]))
        // A document written on another date, moved to this one: its date of the graph, in its form and as written.
        const moved = <T>(x: T): T => JSON.parse(movedTo(JSON.stringify(x), from.date, p.date, p.language)) as T
        const shared = p.same.order.filter((id) => !own.has(id) && theirs.has(id))
        const documents = p.same.order.map((id) => own.get(id) ?? (theirs.has(id) ? moved(theirs.get(id)) : undefined)).filter((doc): doc is Document => doc !== undefined)
        const renders = { ...Object.fromEntries(shared.flatMap((id) => (from.renders?.[id] ? [[id, moved(from.renders[id])]] : []))), ...p.renders }
        return { ...d, payload: { ...p, documents, renders } }
      }),
    }
  }

  function setBundle(given: Bundle) {
    const b = expand(given)
    state.bundle = b
    state.busy = false
    state.hideBanner = false
    const ok = b.dates.filter((d) => d.payload)
    machine = Object.keys((ok.find((d) => d.date === b.today) ?? head(ok))?.payload?.machine ?? {})
    if (!ok.some((d) => d.date === state.date)) state.date = ok.find((d) => d.date === b.today)?.date ?? head(ok)?.date ?? b.today
    const p = payload()
    if (p && !state.doc) state.doc = firstDoc(p)?.id ?? empty
    render()
  }

  // What the person does ----------------------------------------------------------------------

  const near = (target: Element, name: string) => target.closest<HTMLElement>(presence(name))

  function activate(target: HTMLElement): boolean {
    // In an explorer: another node, the layers, a box of the map, or the rest of a layer's neighbours.
    const step = near(target, ea.explore)
    if (step) {
      explore(optional(step.getAttribute(ea.explore)), step.getAttribute(markup.attributes.node))
      return true
    }
    const box = near(target, ea.box)
    if (box) {
      const id = optional(box.getAttribute(ea.box))
      const place = box.getAttribute(ea.place) ?? undefined
      const x = explorations.get(id)
      if (x) x.box = x.box === place ? undefined : place
      redraw(id)
      doc.getElementById(id)?.querySelector<HTMLElement>(attribute(ea.place, window.escape(optional(place))))?.focus({ preventScroll: true })
      return true
    }
    const more = near(target, ea.more)
    if (more) {
      const id = optional(more.getAttribute(ea.more))
      explorations.get(id)?.all.add(Number(more.getAttribute(ea.layer)))
      redraw(id)
      return true
    }
    const ref = near(target, markup.attributes.reference)
    const toDoc = near(target, markup.attributes.doc)
    const toView = near(target, markup.attributes.view)
    const date = near(target, around.attributes.date)
    if (toView) {
      state.mode = rendered
      go(optional(toView.getAttribute(markup.attributes.view)) + ids.ofNode + optional(toView.getAttribute(markup.attributes.node)))
    } else if (ref) goRef(optional(ref.getAttribute(markup.attributes.reference)))
    else if (toDoc) go(optional(toDoc.getAttribute(markup.attributes.doc)))
    else if (date && !(date as HTMLButtonElement).disabled) {
      state.date = optional(date.getAttribute(around.attributes.date))
      render()
    } else return false
    return true
  }

  const activated = selectors([markup.attributes.reference, markup.attributes.doc, ea.explore, ea.more, ea.box].map(presence))

  function listen() {
    doc.addEventListener(events.click, (e) => {
      const t = e.target as HTMLElement
      if (t.closest(attribute(html.id, regions.bannerClose))) {
        state.hideBanner = true
        renderBanner()
        return
      }
      if (activate(t)) e.preventDefault()
    })
    doc.addEventListener(events.keydown, (e) => {
      if (e.key !== events.enter && e.key !== events.space) return
      const t = e.target as HTMLElement
      if (t.matches(activated) && activate(t)) e.preventDefault()
    })
    // On the map of the layers, the box under the pointer, or the one the keyboard is on, lights its links.
    const lighting: [string, boolean][] = [[events.over, true], [events.out, false], [events.focusIn, true], [events.focusOut, false]]
    for (const [type, on] of lighting) {
      doc.addEventListener(type, (e) => {
        const box = (e.target as Element).closest?.(classSelector(em.box))
        const svg = box?.closest(classSelector(em.map))
        if (box && svg) lightMap(svg, on ? box.getAttribute(ea.place) : undefined)
      })
    }
    // The field of an explorer: a name chosen in its list moves to that node.
    doc.addEventListener(events.input, (e) => {
      const t = e.target as HTMLInputElement
      const id = t.getAttribute(ea.find)
      const x = id ? explorations.get(id) : undefined
      const n = x?.f.nodes.find((m) => explorer.label(m) === t.value)
      if (id && n) explore(id, n.ref)
    })
    doc.addEventListener(events.change, (e) => {
      const t = e.target as HTMLSelectElement
      if (t.id === regions.nodes) {
        state.node = t.value
        const [current] = state.doc.includes(ids.ofNode) && !state.doc.startsWith(machinePrefix) ? state.doc.split(ids.ofNode) : [empty]
        const p = payload()
        if (current && p && findDoc(p, current + ids.ofNode + t.value)) go(current + ids.ofNode + t.value)
        else renderNav()
      } else if (t.id === regions.documents) go(t.value)
    })
    for (const m of modes) {
      $(regions.rendering + m).addEventListener(events.click, () => {
        state.mode = m
        render()
      })
    }
  }

  return async () => {
    recall()
    listen()
    render()
    const packed = feed.packed()
    if (packed !== undefined) {
      unpacking.unpack(packed).then((text) => setBundle(JSON.parse(text) as Bundle)).catch((e: Error) => {
        $(regions.doc).innerHTML = element(html.p, none, escape(words.unreadable(e.message)))
      })
    }
    if (feed.live()) {
      feed.follow({
        compiling: () => {
          state.busy = true
          renderStatus()
        },
        bundle: setBundle,
      })
    }
    return { body: undefined }
  }
}

export default body
