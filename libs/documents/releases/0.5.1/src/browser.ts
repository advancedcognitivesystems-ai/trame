/** Documents · The page in a browser */

import { code } from "#trame/kernel"
import type { AmendmentAnswer, Bundle } from "#trame/kernel"
import { fn } from "#trame/kinds/function"
import { port } from "#trame/kinds/port"
import { component } from "#trame/kinds/component"
import { implementation } from "#trame/kinds/implementation"
import { entryPoint, load } from "#trame/kinds/entry-point"
import { adr } from "#trame/kinds/adr"
import { PageLoading } from "#std/platform"
import { Html, Svg, Aria, Css } from "#std/html"
import { UiEvents, CssomView, MediaQueries5, Http, MediaTypes } from "#std/web"
import { Iso8601 } from "#std/measures"
import { TextFile } from "#std/text"
import { EcmaScript } from "#std/ecmascript"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import { Anyone } from "#std/access"
import { ShownInAPage } from "./product"
import {
  HtmlElement, HtmlStartTag, SelfClosingTag, EscapedText, PathData, CssDeclaration, AttributeSelector, AttributePresence, SelectorList,
  ClassSelector, MediaFeature,
} from "./html"
import { DocumentMarkup, FigureMarkup, AroundMarkup, ExplorerMarkup } from "./markup"
import { ExplorerDrawing } from "./appearance"
import { ThePage, PageRegions, RenderingModes, MachineHighlighting, PackedGraph, PageWords, DevService } from "./page"
import { Common, SentenceSlots, RenderingMessages, DocumentIds } from "./rendering"
import { DocumentLanguage, Punctuation } from "./language"

// The page a project writes is a program of its own: the component "The page in a browser", which each project
// assembles for its environment of a browser as the command line is for a machine (since 0.5.0, Trame's before). Its
// entry point shows the documents the engine wrote; its explorer draws a graph too large to be read whole; what it
// touches of the browser goes through its ports, realized here with what every browser has, which a project chooses.

/** A packed text made whole again: the graph a page carries. */
export interface Decompression {
  unpack(packed: string): Promise<string>
}
/** Where the page sends an amendment a person writes (since g86): trame dev, which prepares it and records it. */
export interface PageAmendments {
  /** The page can amend: it follows trame dev. */
  available(): boolean
  /** Sends an amendment, previewed or to record; what trame dev answers: what it would change, why it refuses, where it went. */
  send(asked: Readonly<Record<string, unknown>>): Promise<AmendmentAnswer>
}
/** The window of the browser that shows the page: its document, and what the page asks of the window around it. */
export interface PageWindow {
  /** The page's document: the page writes in it and hears what the person does in it. */
  document: Document
  /** A value written so that a CSS selector reads it character for character (CSSOM, CSS.escape). */
  escape(value: string): string
  /** The person asked for less motion. */
  reducedMotion(): boolean
  /** Back to the top of the page. */
  toTop(): void
}
/** What the page keeps of the person's place between two visits, in the browser. */
export interface PageMemory {
  recall(): string | undefined
  keep(text: string): void
}
/** Where the page receives the compiled graph from: packed in an exported page, or from trame dev as it compiles. */
export interface GraphFeed {
  /** The graph an exported page carries, packed. */
  packed(): string | undefined
  /** The page follows trame dev. */
  live(): boolean
  /** In trame dev: the last graph compiled, then each compilation that starts and each graph it gives. */
  follow(on: { compiling(): void; bundle(b: Bundle): void }): void
}

/**
 * Window of the page
 * The document the page writes in and hears, and what it asks of the window around it.
 */
export const PageWindow = port<PageWindow>({ owner: "trame", declaredEffects: ["display"] })

/**
 * Memory of the page
 * The document, the rendering and the node the person was on, kept for their next visit.
 */
export const PageMemory = port<PageMemory>({ owner: "trame", declaredEffects: { recall: ["read"], keep: ["write"] } })

/**
 * Feed of the graph
 * The compiled graph the page shows: carried by an exported page, or given by trame dev at each compilation.
 */
export const GraphFeed = port<GraphFeed>({ owner: "trame", declaredEffects: { packed: ["display"], live: ["display"], follow: ["network", "asynchronous"] } })

/**
 * Amendments from the page
 * What a person amends in the page goes to trame dev, which says first what it would change, then records it.
 */
export const PageAmendments = port<PageAmendments>({ owner: "trame", declaredEffects: { available: ["display"], send: ["network", "asynchronous"] } })

/**
 * Decompression
 * The graph an exported page carries, made whole again by the browser.
 */
export const Decompression = port<Decompression>({ owner: "trame", declaredEffects: [] })

/**
 * The page in a browser
 * What runs in a project's page: it shows the documents of the graph at each date, follows trame dev, and explores
 * the figures too large to be read whole. It names no environment (offered): each project assembles it for its own
 * environment of a browser, with the realizations it chooses there (the browser's, below), as the command line is
 * assembled for a machine; the values of the graph are written into its program, the engine bundles it.
 */
export const PageApp = component({
  owner: "trame",
  language: "typescript",
  deps: { exposure: PageLoading },
})

/**
 * Explorer of a graph
 * Draws the explorer of a graph too large to be read whole, where the engine left its place: the map of its layers,
 * or one node and its neighbours, with the bar that moves in it. Pure: the page keeps where each explorer is.
 */
export const ExplorerFigures = fn({
  owner: "trame",
  serves: [ShownInAPage],
  deps: {
    html: Html, svg: Svg, aria: Aria, css: Css, page: ThePage, markup: DocumentMarkup, figures: FigureMarkup, explorer: ExplorerMarkup, drawing: ExplorerDrawing,
    element: HtmlElement, start: HtmlStartTag, empty: SelfClosingTag, path: PathData, declaration: CssDeclaration, escape: EscapedText,
    common: Common, words: PageWords, messages: RenderingMessages, punctuation: Punctuation, counts: Counts, sequences: Sequences, texts: Texts,
  },
  body: code.file<typeof import("./code/rendering/explorer").default>("./code/rendering/explorer.ts"),
})

/**
 * Show the graph
 * When the page loads: the state of the compilation, the dates, the navigation, then the document the person was on,
 * in the rendering they chose; the graph comes packed in an exported page, or from trame dev at each compilation.
 */
export const ShowGraph = entryPoint({
  owner: "trame", in: PageApp, for: Anyone, serves: [ShownInAPage],
  trigger: load(),
  deps: {
    window: PageWindow, memory: PageMemory, feed: GraphFeed, unpacking: Decompression, amendments: PageAmendments, explorer: ExplorerFigures, common: Common,
    page: ThePage, regions: PageRegions, modes: RenderingModes, highlighting: MachineHighlighting,
    markup: DocumentMarkup, around: AroundMarkup, explorerMarkup: ExplorerMarkup, drawing: ExplorerDrawing,
    ids: DocumentIds, slots: SentenceSlots, punctuation: Punctuation, language: DocumentLanguage,
    html: Html, aria: Aria, events: UiEvents, view: CssomView, iso: Iso8601, file: TextFile,
    element: HtmlElement, escape: EscapedText, attribute: AttributeSelector, presence: AttributePresence, selectors: SelectorList, classSelector: ClassSelector,
    words: PageWords, counts: Counts, sequences: Sequences, texts: Texts,
  },
  body: code.file<typeof import("./code/page/show").default>("./code/page/show.ts"),
})

// In a browser ------------------------------------------------------------------------------


/**
 * The browser's window
 * The document of the page, CSS.escape, the media query of reduced motion, the scroll of the window.
 */
export const BrowserWindow = implementation({
  owner: "trame", implements: [PageWindow],
  deps: { motion: MediaQueries5, feature: MediaFeature, counts: Counts },
  body: code.file("./code/browser/window.ts"),
})

/**
 * Local storage
 * The person's place, in the storage of the page's origin, under the name the page decides.
 */
export const BrowserMemory = implementation({
  owner: "trame", implements: [PageMemory],
  deps: { page: ThePage },
  body: code.file("./code/browser/memory.ts"),
})

/**
 * The globals of the page, and trame dev
 * The graph an exported page carries and the mode of trame dev, in the globals the page's scripts assign; in trame dev,
 * the last graph and the stream of compilations, at the addresses of the service.
 */
export const BrowserFeed = implementation({
  owner: "trame", implements: [GraphFeed],
  deps: { page: ThePage, service: DevService, values: ValueTypes },
  body: code.file("./code/browser/feed.ts"),
})

/**
 * Amendments sent to trame dev
 * Posted as JSON to trame dev's address of amendments; the page can amend only when it follows trame dev.
 */
export const BrowserAmendments = implementation({
  owner: "trame", implements: [PageAmendments],
  deps: { page: ThePage, service: DevService, http: Http, media: MediaTypes },
  body: code.file("./code/browser/amendments.ts"),
})

/**
 * The browser's gzip
 * DecompressionStream, after base64: what "A page carries its graph compressed" packed.
 */
export const BrowserDecompression = implementation({
  owner: "trame", implements: [Decompression],
  deps: { packing: PackedGraph, ecma: EcmaScript },
  body: code.file("./code/browser/decompression.ts"),
})

/**
 * The page is assembled
 * The page's script was the only code of Trame outside the graph: written by hand, wired by hand, its values written in
 * it. It is now a component assembled for the browser, its entry point and its explorer bodies of the graph.
 */
export const ThePageIsAssembled = adr({
  owner: "trame",
  context: "The page's script built by hand what it shared with the engine and wrote its values (classes, identifiers, the explorer's geometry) as literals the catalogue could not see: a change in the graph did not reach it.",
  consequences: "The page's program is written by the assembly, like the command line's: the values of the graph frozen in it, its bodies wired, the browser's implementations chosen for the project's environment of a browser. It carries the modules of the graph its bodies use, which makes it heavier. Offered by the library (since 0.5.0), it is assembled by each project with its own choices.",
  rejected: {
    "Values passed to the script in the page": "the script would still build its functions by hand, outside the graph",
    "The page drawn whole by the engine": "the explorer's states are too many to draw in advance",
  },
  serves: [ShownInAPage],
  appliedBy: [PageApp, ExplorerFigures],
})
