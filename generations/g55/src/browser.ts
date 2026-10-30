/** Trame · The page in a browser */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { implementation } from "../kinds/implementation"
import { binding } from "../kinds/binding"
import { entryPoint, load } from "../kinds/entry-point"
import { adr } from "../kinds/adr"
import {
  Browser, PageApp, PageLoading, PageWindow, PageMemory, GraphFeed, Decompression, RenderingWithoutGraph,
} from "./architecture"
import {
  Html, Svg, Aria, Css, HtmlElement, HtmlStartTag, SelfClosingTag, PathData, CssDeclaration, EscapedText,
  AttributeSelector, AttributePresence, SelectorList, ClassSelector, MediaFeature,
} from "./html"
import { DocumentMarkup, FigureMarkup, AroundMarkup, ExplorerMarkup } from "./markup"
import { ExplorerDrawing } from "./appearance"
import { ThePage, PageRegions, RenderingModes, MachineHighlighting, PackedGraph } from "./page"
import { Common, SentenceSlots } from "./rendering"
import { Language, PageWords, RenderingMessages } from "./messages"
import { DocumentIds } from "./conventions"
import { Punctuation } from "./documents"
import { DevService } from "./engine"
import { UiEvents, CssomView, MediaQueries5 } from "../std/src/web"
import { Iso8601 } from "../std/src/measures"
import { TextFile } from "../std/src/text"
import { EcmaScript } from "../std/src/ecmascript"
import { Counts, Sequences, Texts, ValueTypes } from "../std/src/algebra"
import { Adapter } from "../std/src/patterns"
import { ExecutableSpecification, ReplaceableTechnology } from "./product"

// The page Trame writes is a program of its own: the component "The page in a browser", assembled for the environment
// Browser as the command line is for a machine. Its entry point shows the documents the engine wrote; its explorer
// draws a graph too large to be read whole; what it touches of the browser goes through its ports, realized here.

/**
 * Explorer of a graph
 * Draws the explorer of a graph too large to be read whole, where the engine left its place: the map of its layers,
 * or one node and its neighbours, with the bar that moves in it. Pure: the page keeps where each explorer is.
 */
export const ExplorerFigures = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
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
  owner: "trame", in: PageApp, serves: [ExecutableSpecification],
  trigger: load(),
  deps: {
    window: PageWindow, memory: PageMemory, feed: GraphFeed, unpacking: Decompression, explorer: ExplorerFigures, common: Common,
    page: ThePage, regions: PageRegions, modes: RenderingModes, highlighting: MachineHighlighting,
    markup: DocumentMarkup, around: AroundMarkup, explorerMarkup: ExplorerMarkup, drawing: ExplorerDrawing,
    ids: DocumentIds, slots: SentenceSlots, punctuation: Punctuation, language: Language,
    html: Html, aria: Aria, events: UiEvents, view: CssomView, iso: Iso8601, file: TextFile,
    element: HtmlElement, escape: EscapedText, attribute: AttributeSelector, presence: AttributePresence, selectors: SelectorList, classSelector: ClassSelector,
    words: PageWords, counts: Counts, sequences: Sequences, texts: Texts,
  },
  body: code.file<typeof import("./code/page/show").default>("./code/page/show.ts"),
})

// In a browser ------------------------------------------------------------------------------

/**
 * The page loads
 * The entry points triggered by the loading run once the document is parsed.
 */
export const BrowserLoading = implementation({
  owner: "trame", implements: [PageLoading],
  deps: { events: UiEvents },
  body: code.file("./code/browser/loading.ts"),
})

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
 * The browser's gzip
 * DecompressionStream, after base64: what "A page carries its graph compressed" packed.
 */
export const BrowserDecompression = implementation({
  owner: "trame", implements: [Decompression],
  deps: { packing: PackedGraph, ecma: EcmaScript },
  body: code.file("./code/browser/decompression.ts"),
})

/**
 * The browser runs the page
 * In the browser, the page loads, writes in its window, keeps the person's place, receives the graph and makes it whole
 * again with what every browser has: the DOM, local storage, fetch and server-sent events, DecompressionStream.
 */
export const TheBrowserRunsThePage = binding({
  owner: "trame",
  chooses: [BrowserLoading, BrowserWindow, BrowserMemory, BrowserFeed, BrowserDecompression],
  environments: [Browser],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The page's script took what it needed from the browser itself, here and there: the graph could not say what the page asks of the browser, nor try it elsewhere.",
  consequences: "The browser's globals appear only in these implementations; the entry point and the explorer are bodies like any other, and their values are the graph's.",
  rejected: {
    "A framework for the page": "a dependency, and its own way of writing the page, for a page that writes HTML strings and listens to a few events",
    "Libraries for storage and decompression": "every browser the page targets has local storage and gzip",
  },
})

/**
 * The page is assembled
 * The page's script was the only code of Trame outside the graph: written by hand, wired by hand, its values written in
 * it. It is now a component assembled for the browser, its entry point and its explorer bodies of the graph.
 */
export const ThePageIsAssembled = adr({
  owner: "trame",
  context: "The page's script built by hand what it shared with the engine and wrote its values (classes, identifiers, the explorer's geometry) as literals the catalogue could not see: a change in the graph did not reach it.",
  consequences: "The page's program is written by the assembly, like the command line's: the values of the graph frozen in it, its bodies wired, the browser's implementations chosen for the environment Browser. It carries the modules of the graph its bodies use, which makes it heavier.",
  rejected: {
    "Values passed to the script in the page": "the script would still build its functions by hand, outside the graph",
    "The page drawn whole by the engine": "the explorer's states are too many to draw in advance",
  },
  serves: [ExecutableSpecification],
  appliedBy: [ShowGraph, ExplorerFigures, TheBrowserRunsThePage, RenderingWithoutGraph],
})
