/** Trame · The page */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { syntax } from "../kinds/syntax"
import { fn } from "../kinds/function"
import { stylesheet } from "../kinds/stylesheet"
import { adr } from "../kinds/adr"
import { vocabulary, type WordOf } from "../kinds/vocabulary"
import { ExecutableSpecification, SingleSource } from "./product"
import { Bundler, Compression, FileReading, Resources } from "./architecture"
import { Palette, Typography, NarrowScreen, Spacing, Radii, TypeScale, Opacities, Strokes, Motion, PageLayout, GraphDrawing } from "./appearance"
import { FigureMarkup } from "./markup"
import { GnuPositions, TextFile } from "#std/text"
import { NodeEncodings } from "#std/system"
import { TrameCommands } from "./conventions"
import { Counts, Sequences, Texts } from "#std/algebra"
import { Language, OutputMessages } from "./messages"
import { Html, Aria, Svg, Css } from "#std/html"
import { HtmlMarkup, CssStyleSheets, HtmlStartTag, HtmlEndTag, HtmlElement, HtmlBlock, SelfClosingTag, Doctype, ScriptElement, JsonInScript, PathData, CssDeclaration, CustomProperty, CssVariable, CssRule, MediaRule, MediaFeature, ClassSelector, AttributeSelector, NegationSelector } from "./html"
import { MemberAccess, Assignment } from "./typescript"
import { SyntaxReader } from "./syntax"

// The page shows the graph in a browser. A decision says what it is made of; its syntax elements write its HTML and
// its CSS, from the elements of the module html; Page puts it together with its script, its style sheets and the graph.
// The style sheets are bodies in CSS: their values are variables that the page writes from the decisions of appearance.

/** The words of the page's shell, from the catalog: the order of the renderings is that of the vocabulary "The renderings of a document". */
export interface ShellWords {
  subtitle: string
  dates: string
  navigation: string
  document: string
  rendering: string
  renderings: readonly string[]
}

/**
 * The renderings of a document
 * The page shows a document in one of three renderings; the first is shown first. Its style sheet and its script know
 * them by these words: the script is typed by them, so a word changed here stops it from compiling.
 */
export const RenderingModes = vocabulary({
  owner: "trame",
  words: {
    rendered: "The document as the page lays it out, in HTML, with its figures drawn",
    markdown: "Its Markdown, as trame build writes it",
    text: "Its plain text, as a command prints it in the terminal",
  },
})
export type RenderingMode = WordOf<typeof RenderingModes>

/** What makes a page: its language, its title, its fonts, its style, its shell, its scripts. */
export interface PageParts {
  lang: string
  title: string
  fonts: string
  style: string
  shell: readonly string[]
  scripts: string
  /** Without the skeleton of a document: for a host that gives its own (an artifact). */
  fragment?: boolean
}

/**
 * The page
 * Trame's page shows the graph in a browser, standalone (trame export) or live (trame dev). A side bar holds the brand,
 * the state of the compilation, the dates the graph can be read at, the navigation between documents and views (a
 * select on small screens); the main area holds a banner for the last change, the head of the document (its path and
 * the choice of rendering) and the document. The page's program and its style sheet find these regions by the classes
 * and identifiers their elements declare; the program receives the compiled graph, and the mode of trame dev, through
 * globals of the window. Its colours and fonts are the decisions of appearance, written as CSS variables, light and
 * dark; a theme the person chooses is an attribute of the root element. The value holds what several elements share:
 * the class of the labels of the side bar, the attribute and the names of the themes, the prefix of the class of a
 * status, the names of the globals, the name under which the browser keeps the person's place, the name of the files
 * for tools among the documents, the view a reference opens when no document holds the node's card, and the prompt
 * written before a command. The renderings of a document are a vocabulary.
 */
export const ThePage = decision<{
  label: string
  themeAttribute: string
  themes: { light: string; dark: string }
  statusClass: string
  globals: { packedBundle: string; dev: string }
  memory: string
  machine: string
  nodeView: string
  prompt: string
}>({
  owner: "trame",
  value: {
    label: "label",
    themeAttribute: "data-theme",
    themes: { light: "light", dark: "dark" },
    statusClass: "st-",
    globals: { packedBundle: "TRAME_BUNDLE_GZIP", dev: "TRAME_DEV" },
    memory: "trame-page",
    machine: "machine",
    nodeView: "impact",
    prompt: "$ ",
  },
  rejected: {
    "A page per document": "the page must work without a server (trame export): one file holds the graph at every date and all its documents",
    "A front-end framework": "one program, assembled from the graph like the command line, is enough to show the intermediate format",
  },
})

/**
 * Regions of the page
 * The identifiers of the regions the shell writes and the page fills: the state of the compilation, the dates and
 * their note, the navigation, the picker of documents and that of nodes, the banner and its button, the choice of
 * rendering and the prefix of its buttons, the path of the document, the document. A region that a class styles too
 * has that name for class.
 */
export const PageRegions = decision<{
  status: string
  dates: string
  dateNote: string
  nav: string
  documents: string
  nodes: string
  banner: string
  bannerClose: string
  toggle: string
  rendering: string
  path: string
  doc: string
}>({
  owner: "trame",
  value: {
    status: "status", dates: "dates", dateNote: "date-note", nav: "nav", documents: "doc-select", nodes: "node-select",
    banner: "banner", bannerClose: "banner-close", toggle: "toggle", rendering: "view-", path: "doc-path", doc: "doc",
  },
})

/**
 * Files for tools in the page
 * A file of JSON is shown with its parts coloured: a key (a text before a colon), a text, a literal, a number. The
 * pattern finds them in the file's escaped text: the first group a text, the second the colon after a key, the third
 * a literal, the fourth a number.
 */
export const MachineHighlighting = decision<{ pattern: string; flags: string }>({
  owner: "trame",
  value: {
    pattern: "(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\\s*:)?|\\b(true|false|null)\\b|(-?\\d+(?:\\.\\d+)?)",
    flags: "g",
  },
})

/**
 * Style of the standalone document
 * What a host gives a fragment and a standalone document must say itself: room for the safe areas of the screen (a
 * notch, rounded corners), no margin around the body, a hidden element that stays hidden whatever the style sheet says,
 * images no wider than their container. By selector, the declarations of each rule.
 */
export const StandaloneStyle = decision<Record<string, Record<string, string>>>({
  owner: "trame",
  value: {
    ":root": { "padding-top": "env(safe-area-inset-top,0px)", "padding-bottom": "env(safe-area-inset-bottom,0px)" },
    "body": { margin: "0" },
    "[hidden]": { display: "none!important" },
    "img": { "max-width": "100%" },
  },
})

/**
 * A page carries its graph compressed
 * An exported page holds the graph at every date, each document written three times (HTML, Markdown, text): in JSON,
 * about 15 MB a date. Compressed with gzip and written in base64, it is about 2 MB; the browser decompresses it itself
 * (DecompressionStream), before the page shows its first document.
 */
export const PackedGraph = decision<{ format: "gzip"; encoding: "base64" }>({
  owner: "trame",
  value: { format: "gzip", encoding: "base64" },
  rejected: {
    "The graph in JSON, as it is": "a page of 15 MB a date: slow to open, and too big for some hosts",
    "Fewer dates in a page": "reading the graph at another date is what an exported page is for",
    "A compression library in the page": "every browser decompresses gzip itself",
  },
})

/**
 * Bundle of the page
 * How esbuild bundles the page's program: a module, since the program waits at its top level for what it builds, for
 * browsers that run ES2022, without licence comments, in UTF-8.
 */
export const PageBundle = decision<{ format: "esm"; target: string; legalComments: "none"; charset: "utf8" }>({
  owner: "trame",
  value: { format: "esm", target: "es2022", legalComments: "none", charset: "utf8" },
})

// The shell -------------------------------------------------------------------------------

/**
 * Logo
 * The brand drawn as a weave: three threads of warp, in the accent colour, and two threads of weft (trame, in French), in
 * the colour of the text, broken where they pass under the warp; on a soft accent square with rounded corners.
 * Decoration: assistive technologies skip it.
 */
export const Logo = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Brand",
  constants: {
    size: { value: 26, meaning: "The side of the drawing, in pixels, and of the grid it is drawn on" },
    radius: { value: 6, meaning: "The radius of the corners of the square" },
    thread: { value: 2.2, meaning: "The width of a thread" },
    warp: { value: "M7 5v16M13 5v16M19 5v16", meaning: "The warp: three vertical threads" },
    weft: { value: "M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3", meaning: "The weft: two horizontal threads, in pieces between the threads of warp" },
    background: { value: "accent-soft", meaning: "The colour of the square: the soft accent of the palette" },
    warpColour: { value: "accent", meaning: "The colour of the warp: the accent of the palette" },
  },
  deps: {
    svg: Svg, aria: Aria, palette: Palette, counts: Counts,
    block: HtmlBlock, element: HtmlElement, empty: SelfClosingTag, variable: CssVariable,
  },
  write: ({ size, radius, thread, warp, weft, background, warpColour, svg, aria, palette, counts: { zero }, block, element, empty, variable }) => () => {
    const side = String(size)
    const threads = (colour: string) => ({
      [svg.stroke]: variable(colour), [svg.strokeWidth]: String(thread), [svg.strokeLinecap]: svg.round, [svg.fill]: svg.none,
    })
    return block(svg.svg, { [svg.width]: side, [svg.height]: side, [svg.viewBox]: [zero, zero, size, size].join(svg.separator), [aria.hidden]: String(true) }, [
      empty(svg.rect, { [svg.x]: String(zero), [svg.y]: String(zero), [svg.width]: side, [svg.height]: side, [svg.rx]: String(radius), [svg.fill]: variable(background) }),
      element(svg.group, threads(warpColour), empty(svg.path, { [svg.d]: warp })),
      element(svg.group, threads(palette.ink), empty(svg.path, { [svg.d]: weft })),
    ])
  },
  examples: [{
    input: [],
    output: [
      "<svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" aria-hidden=\"true\">",
      "  <rect x=\"0\" y=\"0\" width=\"26\" height=\"26\" rx=\"6\" fill=\"var(--accent-soft)\"/>",
      "  <g stroke=\"var(--accent)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M7 5v16M13 5v16M19 5v16\"/></g>",
      "  <g stroke=\"var(--ink)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3\"/></g>",
      "</svg>",
    ],
  }],
})

/**
 * Brand
 * At the top of the side bar: the logo, the name of the program and the subtitle of the page.
 */
export const Brand = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Side bar",
  constants: {
    brand: { value: "brand", meaning: "The class of the brand" },
    name: { value: "brand-name", meaning: "The class of the name and its subtitle" },
  },
  deps: { html: Html, commands: TrameCommands, logo: Logo, block: HtmlBlock, element: HtmlElement },
  write: ({ brand, name, html, commands, logo, block, element }) => (subtitle: string) =>
    block(html.div, { [html.class]: brand }, [
      ...logo(),
      element(html.div, { [html.class]: name }, commands.program + html.space + element(html.span, {}, subtitle)),
    ]),
  examples: [{
    input: ["graph"],
    output: [
      "<div class=\"brand\">",
      "  <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" aria-hidden=\"true\">",
      "    <rect x=\"0\" y=\"0\" width=\"26\" height=\"26\" rx=\"6\" fill=\"var(--accent-soft)\"/>",
      "    <g stroke=\"var(--accent)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M7 5v16M13 5v16M19 5v16\"/></g>",
      "    <g stroke=\"var(--ink)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3\"/></g>",
      "  </svg>",
      "  <div class=\"brand-name\">trame <span>graph</span></div>",
      "</div>",
    ],
  }],
})

/**
 * State of the compilation
 * Where the script tells whether the graph compiled, and when.
 */
export const CompilationState = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Side bar",
  constants: {},
  deps: { regions: PageRegions, html: Html, element: HtmlElement, texts: Texts },
  write: ({ regions: { status }, html, element, texts: { empty } }) => () => element(html.div, { [html.class]: status, [html.id]: status }, empty),
  examples: [{ input: [], output: "<div class=\"status\" id=\"status\"></div>" }],
})

/**
 * Dates
 * The dates the graph can be read at: a label, then the group of buttons the script writes, one per date, and a note on
 * what a date shows.
 */
export const DatePicker = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Side bar",
  constants: {
    paragraph: { value: "p", meaning: "The label is a paragraph" },
    labelId: { value: "dates-label", meaning: "The identifier of the label, which names the group" },
  },
  deps: { regions: PageRegions, html: Html, aria: Aria, block: HtmlBlock, element: HtmlElement, texts: Texts },
  write: ({ standard: { label: labelClass }, paragraph, labelId, regions: { dates, dateNote: note }, html, aria, block, element, texts: { empty } }) => (label: string) =>
    block(html.div, {}, [
      element(paragraph, { [html.class]: labelClass, [html.id]: labelId }, label),
      element(html.div, { [html.class]: dates, [html.id]: dates, [aria.role]: aria.group, [aria.labelledBy]: labelId }, empty),
      element(html.div, { [html.class]: note, [html.id]: note }, empty),
    ]),
  examples: [{
    input: ["Graph in force on"],
    output: [
      "<div>",
      "  <p class=\"label\" id=\"dates-label\">Graph in force on</p>",
      "  <div class=\"dates\" id=\"dates\" role=\"group\" aria-labelledby=\"dates-label\"></div>",
      "  <div class=\"date-note\" id=\"date-note\"></div>",
      "</div>",
    ],
  }],
})

/**
 * Navigation
 * Where the script writes a button per document and per view.
 */
export const Navigation = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Side bar",
  constants: {
    tag: { value: "nav", meaning: "The region of navigation" },
  },
  deps: { regions: PageRegions, html: Html, aria: Aria, element: HtmlElement, texts: Texts },
  write: ({ tag, regions: { nav }, html, aria, element, texts: { empty } }) => (label: string) =>
    element(tag, { [html.class]: nav, [html.id]: nav, [aria.label]: label }, empty),
  examples: [{ input: ["Documents and views"], output: "<nav class=\"nav\" id=\"nav\" aria-label=\"Documents and views\"></nav>" }],
})

/**
 * Document picker
 * On small screens, in place of the navigation: a labelled select, where the script writes an option per document.
 */
export const DocumentPicker = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Side bar",
  constants: {
    picker: { value: "mobile-pick", meaning: "The class of the picker, which the style sheet shows on small screens only" },
    labelTag: { value: "label", meaning: "The label of the select" },
    for: { value: "for", meaning: "The control a label names" },
    select: { value: "select", meaning: "The list of documents" },
  },
  deps: { regions: PageRegions, html: Html, block: HtmlBlock, element: HtmlElement, texts: Texts },
  write: ({ standard: { label: labelClass }, picker, labelTag, for: forAttribute, select, regions: { documents: selectId }, html, block, element, texts: { empty } }) => (label: string) =>
    block(html.div, { [html.class]: picker }, [
      element(labelTag, { [html.class]: labelClass, [forAttribute]: selectId }, label),
      element(select, { [html.id]: selectId }, empty),
    ]),
  examples: [{
    input: ["Document"],
    output: [
      "<div class=\"mobile-pick\">",
      "  <label class=\"label\" for=\"doc-select\">Document</label>",
      "  <select id=\"doc-select\"></select>",
      "</div>",
    ],
  }],
})

/**
 * Side bar
 * The brand, the state of the compilation, the dates, the navigation, the document picker.
 */
export const SideBar = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Side bar",
  constants: {
    tag: { value: "aside", meaning: "The side bar is beside the main content" },
    side: { value: "side", meaning: "Its class" },
  },
  deps: { html: Html, block: HtmlBlock, brand: Brand, state: CompilationState, dates: DatePicker, navigation: Navigation, picker: DocumentPicker },
  write: ({ tag, side, html, block, brand, state, dates, navigation, picker }) => (words: ShellWords) =>
    block(tag, { [html.class]: side }, [...brand(words.subtitle), state(), ...dates(words.dates), navigation(words.navigation), ...picker(words.document)]),
  examples: [{
    input: [{ subtitle: "graph", dates: "Dates", navigation: "Views", document: "Document", rendering: "Rendering", renderings: ["Rendered", "Markdown", "Text"] }],
    output: [
      "<aside class=\"side\">",
      "  <div class=\"brand\">",
      "    <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" aria-hidden=\"true\">",
      "      <rect x=\"0\" y=\"0\" width=\"26\" height=\"26\" rx=\"6\" fill=\"var(--accent-soft)\"/>",
      "      <g stroke=\"var(--accent)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M7 5v16M13 5v16M19 5v16\"/></g>",
      "      <g stroke=\"var(--ink)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3\"/></g>",
      "    </svg>",
      "    <div class=\"brand-name\">trame <span>graph</span></div>",
      "  </div>",
      "  <div class=\"status\" id=\"status\"></div>",
      "  <div>",
      "    <p class=\"label\" id=\"dates-label\">Dates</p>",
      "    <div class=\"dates\" id=\"dates\" role=\"group\" aria-labelledby=\"dates-label\"></div>",
      "    <div class=\"date-note\" id=\"date-note\"></div>",
      "  </div>",
      "  <nav class=\"nav\" id=\"nav\" aria-label=\"Views\"></nav>",
      "  <div class=\"mobile-pick\">",
      "    <label class=\"label\" for=\"doc-select\">Document</label>",
      "    <select id=\"doc-select\"></select>",
      "  </div>",
      "</aside>",
    ],
  }],
})

/**
 * Banner
 * Where the script tells the last change, in trame dev: hidden until there is one.
 */
export const Banner = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Main area",
  constants: {},
  deps: { regions: PageRegions, html: Html, element: HtmlElement, texts: Texts },
  write: ({ regions: { banner }, html, element, texts: { empty } }) => () => element(html.div, { [html.class]: banner, [html.id]: banner, [html.hidden]: true }, empty),
  examples: [{ input: [], output: "<div class=\"banner\" id=\"banner\" hidden></div>" }],
})

/**
 * Choice of rendering
 * A group of toggle buttons, one per rendering of a document, the first one pressed. The script hides the group when
 * the page shows a file rather than a document.
 */
export const RenderingToggle = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Main area",
  constants: {},
  deps: { modes: RenderingModes, regions: PageRegions, html: Html, aria: Aria, block: HtmlBlock, element: HtmlElement, sequences: Sequences },
  write: ({ modes, regions: { toggle, rendering: idPrefix }, html, aria, block, element, sequences: { isFirst } }) =>
    (label: string, names: readonly string[]) =>
      block(html.div, { [html.class]: toggle, [html.id]: toggle, [aria.role]: aria.group, [aria.label]: label },
        modes.map((mode, i) => element(html.button, { [html.type]: html.buttonType, [html.id]: idPrefix + mode, [aria.pressed]: String(isFirst(i)) }, names[i]))),
  examples: [{
    input: ["Rendering", ["Rendered", "Markdown", "Text"]],
    output: [
      "<div class=\"toggle\" id=\"toggle\" role=\"group\" aria-label=\"Rendering\">",
      "  <button type=\"button\" id=\"view-rendered\" aria-pressed=\"true\">Rendered</button>",
      "  <button type=\"button\" id=\"view-markdown\" aria-pressed=\"false\">Markdown</button>",
      "  <button type=\"button\" id=\"view-text\" aria-pressed=\"false\">Text</button>",
      "</div>",
    ],
  }],
})

/**
 * Head of the document
 * Where the script writes the path of the document and the date of the graph; then the choice of rendering.
 */
export const DocumentHead = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Main area",
  constants: {
    tag: { value: "header", meaning: "The head of the main content" },
    head: { value: "doc-head", meaning: "Its class" },
    path: { value: "path", meaning: "The class of the path" },
  },
  deps: { regions: PageRegions, html: Html, block: HtmlBlock, element: HtmlElement, toggle: RenderingToggle, texts: Texts },
  write: ({ tag, head, path, regions: { path: pathId }, html, block, element, toggle, texts: { empty } }) => (label: string, names: readonly string[]) =>
    block(tag, { [html.class]: head }, [element(html.div, { [html.class]: path, [html.id]: pathId }, empty), ...toggle(label, names)]),
  examples: [{
    input: ["Rendering", ["Rendered", "Markdown", "Text"]],
    output: [
      "<header class=\"doc-head\">",
      "  <div class=\"path\" id=\"doc-path\"></div>",
      "  <div class=\"toggle\" id=\"toggle\" role=\"group\" aria-label=\"Rendering\">",
      "    <button type=\"button\" id=\"view-rendered\" aria-pressed=\"true\">Rendered</button>",
      "    <button type=\"button\" id=\"view-markdown\" aria-pressed=\"false\">Markdown</button>",
      "    <button type=\"button\" id=\"view-text\" aria-pressed=\"false\">Text</button>",
      "  </div>",
      "</header>",
    ],
  }],
})

/**
 * Main area
 * The banner, the head of the document, then the document, which the script writes.
 */
export const MainArea = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Main area",
  constants: {
    tag: { value: "main", meaning: "The main content of the page" },
    article: { value: "article", meaning: "The document" },
  },
  deps: { regions: PageRegions, html: Html, block: HtmlBlock, element: HtmlElement, banner: Banner, head: DocumentHead, texts: Texts },
  write: ({ tag, article, regions: { doc }, html, block, element, banner, head, texts: { empty } }) => (words: ShellWords) =>
    block(tag, {}, [banner(), ...head(words.rendering, words.renderings), element(article, { [html.class]: doc, [html.id]: doc }, empty)]),
  examples: [{
    input: [{ subtitle: "graph", dates: "Dates", navigation: "Views", document: "Document", rendering: "Rendering", renderings: ["Rendered", "Markdown", "Text"] }],
    output: [
      "<main>",
      "  <div class=\"banner\" id=\"banner\" hidden></div>",
      "  <header class=\"doc-head\">",
      "    <div class=\"path\" id=\"doc-path\"></div>",
      "    <div class=\"toggle\" id=\"toggle\" role=\"group\" aria-label=\"Rendering\">",
      "      <button type=\"button\" id=\"view-rendered\" aria-pressed=\"true\">Rendered</button>",
      "      <button type=\"button\" id=\"view-markdown\" aria-pressed=\"false\">Markdown</button>",
      "      <button type=\"button\" id=\"view-text\" aria-pressed=\"false\">Text</button>",
      "    </div>",
      "  </header>",
      "  <article class=\"doc\" id=\"doc\"></article>",
      "</main>",
    ],
  }],
})

/**
 * Arrowheads of the figures
 * The ends of the edges, defined once in the page, each under its identifier, in a drawing that takes no room: every
 * figure refers to them. One per stroke of an edge: the base, the accent of a winner, the bad of what is discarded, the
 * warning of what is contested.
 */
export const FigureMarkers = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Figures",
  constants: {},
  deps: {
    svg: Svg, aria: Aria, html: Html, figures: FigureMarkup, drawing: GraphDrawing, counts: Counts, texts: Texts,
    block: HtmlBlock, element: HtmlElement, empty: SelfClosingTag, path: PathData,
  },
  write: ({ svg, aria, html, figures, drawing: { marker }, counts: { zero, one, next }, texts: { concat }, block, element, empty, path }) => () => {
    const middle = marker.box / next(one)
    const arrow = path([zero, zero], [{ to: [marker.box, middle] }, { to: [zero, marker.box] }], true)
    const strokes = Object.keys(figures.arrows) as (keyof typeof figures.arrows)[]
    return block(svg.svg, { [html.class]: figures.defs, [svg.width]: String(zero), [svg.height]: String(zero), [aria.hidden]: String(true) }, [
      element(svg.defs, {}, concat(strokes.map((k) => element(svg.marker, {
        [html.id]: figures.markers[k], [svg.viewBox]: [zero, zero, marker.box, marker.box].join(svg.separator), [svg.refX]: String(marker.tip),
        [svg.refY]: String(middle), [svg.markerWidth]: String(marker.size), [svg.markerHeight]: String(marker.size), [svg.orient]: svg.autoStartReverse,
      }, empty(svg.path, { [html.class]: figures.arrows[k], [svg.d]: arrow }))))),
    ])
  },
  examples: [{
    input: [],
    output: [
      "<svg class=\"figure-defs\" width=\"0\" height=\"0\" aria-hidden=\"true\">",
      "  <defs><marker id=\"arrow-base\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"arrow-to-accent\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow-accent\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"arrow-to-bad\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow-bad\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"arrow-to-warn\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow-warn\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs>",
      "</svg>",
    ],
  }],
})

/**
 * Shell
 * What the page shows before its script runs: the side bar and the main area, empty, which the script fills.
 */
export const Shell = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Shell",
  constants: {
    app: { value: "app", meaning: "The class of the whole: a grid of the side bar and the main area" },
  },
  deps: { html: Html, block: HtmlBlock, side: SideBar, main: MainArea, markers: FigureMarkers },
  write: ({ app, html, block, side, main, markers }) => (words: ShellWords) => block(html.div, { [html.class]: app }, [...side(words), ...main(words), ...markers()]),
  examples: [{
    input: [{ subtitle: "graph", dates: "Dates", navigation: "Views", document: "Document", rendering: "Rendering", renderings: ["Rendered", "Markdown", "Text"] }],
    output: [
      "<div class=\"app\">",
      "  <aside class=\"side\">",
      "    <div class=\"brand\">",
      "      <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" aria-hidden=\"true\">",
      "        <rect x=\"0\" y=\"0\" width=\"26\" height=\"26\" rx=\"6\" fill=\"var(--accent-soft)\"/>",
      "        <g stroke=\"var(--accent)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M7 5v16M13 5v16M19 5v16\"/></g>",
      "        <g stroke=\"var(--ink)\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3\"/></g>",
      "      </svg>",
      "      <div class=\"brand-name\">trame <span>graph</span></div>",
      "    </div>",
      "    <div class=\"status\" id=\"status\"></div>",
      "    <div>",
      "      <p class=\"label\" id=\"dates-label\">Dates</p>",
      "      <div class=\"dates\" id=\"dates\" role=\"group\" aria-labelledby=\"dates-label\"></div>",
      "      <div class=\"date-note\" id=\"date-note\"></div>",
      "    </div>",
      "    <nav class=\"nav\" id=\"nav\" aria-label=\"Views\"></nav>",
      "    <div class=\"mobile-pick\">",
      "      <label class=\"label\" for=\"doc-select\">Document</label>",
      "      <select id=\"doc-select\"></select>",
      "    </div>",
      "  </aside>",
      "  <main>",
      "    <div class=\"banner\" id=\"banner\" hidden></div>",
      "    <header class=\"doc-head\">",
      "      <div class=\"path\" id=\"doc-path\"></div>",
      "      <div class=\"toggle\" id=\"toggle\" role=\"group\" aria-label=\"Rendering\">",
      "        <button type=\"button\" id=\"view-rendered\" aria-pressed=\"true\">Rendered</button>",
      "        <button type=\"button\" id=\"view-markdown\" aria-pressed=\"false\">Markdown</button>",
      "        <button type=\"button\" id=\"view-text\" aria-pressed=\"false\">Text</button>",
      "      </div>",
      "    </header>",
      "    <article class=\"doc\" id=\"doc\"></article>",
      "  </main>",
      "  <svg class=\"figure-defs\" width=\"0\" height=\"0\" aria-hidden=\"true\">",
      "    <defs><marker id=\"arrow-base\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"arrow-to-accent\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow-accent\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"arrow-to-bad\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow-bad\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"arrow-to-warn\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"arrow-warn\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs>",
      "  </svg>",
      "</div>",
    ],
  }],
})

// The style -------------------------------------------------------------------------------

/**
 * Theme
 * The colours, the fonts and the measures of the page as CSS variables of the root element: light; dark when the
 * system prefers it and the person did not choose light; dark when the person chose it. In dark, the browser draws its
 * own controls dark. The measures are the same in both.
 */
export const Theme = syntax({
  owner: "trame",
  standard: ThePage,
  language: CssStyleSheets,
  section: "Style",
  constants: {
    root: { value: ":root", meaning: "The root element: its variables hold for the whole page" },
    colorScheme: { value: "color-scheme", meaning: "The scheme the browser draws its own controls in (CSS Color Adjustment Level 1)" },
    preference: { value: "prefers-color-scheme", meaning: "The scheme the system prefers (Media Queries Level 5)" },
    dark: { value: "dark", meaning: "The dark scheme, as both name it" },
  },
  deps: {
    rule: CssRule, media: MediaRule, feature: MediaFeature, attribute: AttributeSelector, negation: NegationSelector,
    property: CustomProperty, declaration: CssDeclaration,
  },
  write: ({ standard: { themeAttribute, themes }, root, colorScheme, preference, dark, rule, media, feature, attribute, negation, property, declaration }) =>
    (lightColours: Readonly<Record<string, string>>, darkColours: Readonly<Record<string, string>>, fonts: Readonly<Record<string, string>>,
      measures: readonly Readonly<Record<string, string>>[]) => {
      const variables = (values: Readonly<Record<string, string>>) => Object.entries(values).map(([name, value]) => property(name, value))
      const inDark = [...variables(darkColours), declaration(colorScheme, dark)]
      return [
        rule(root, [...variables(lightColours), ...variables(fonts), ...measures.flatMap(variables)]),
        media(feature(preference, dark), [rule(root + negation(attribute(themeAttribute, themes.light)), inDark)]),
        rule(root + attribute(themeAttribute, themes.dark), inDark),
      ]
    },
  examples: [{
    input: [{ bg: "#fff" }, { bg: "#000" }, { "font-ui": "sans-serif" }, [{ "space-sm": "8px" }, { "radius-md": "6px" }]],
    output: [
      ":root { --bg: #fff; --font-ui: sans-serif; --space-sm: 8px; --radius-md: 6px; }",
      "@media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) { --bg: #000; color-scheme: dark; } }",
      ":root[data-theme=\"dark\"] { --bg: #000; color-scheme: dark; }",
    ],
  }],
})

/**
 * Colours of a status
 * The pill of a status, and the box of a node in a figure, in the colours of its status: the background and the text,
 * the fill and the stroke.
 */
export const StatusStyle = syntax({
  owner: "trame",
  standard: ThePage,
  language: CssStyleSheets,
  section: "Style",
  constants: {
    background: { value: "background", meaning: "The background of the pill (CSS Backgrounds Level 3)" },
    color: { value: "color", meaning: "The colour of its text (CSS Color Level 4)" },
    figureNode: { value: "fn", meaning: "The class of a node in a figure the script draws" },
    box: { value: "box", meaning: "The class of the box of that node" },
  },
  deps: { css: Css, svg: Svg, rule: CssRule, declaration: CssDeclaration, variable: CssVariable, selector: ClassSelector },
  write: ({ standard: { statusClass }, background, color, figureNode, box, css, svg, rule, declaration, variable, selector }) =>
    (status: string, fill: string, stroke: string) => [
      rule(selector(statusClass + status), [declaration(background, variable(fill)), declaration(color, variable(stroke))]),
      rule(selector(figureNode) + selector(statusClass + status) + css.space + svg.rect + selector(box), [declaration(svg.fill, variable(fill)), declaration(svg.stroke, variable(stroke))]),
    ],
  examples: [{
    input: ["held", "ok-soft", "ok"],
    output: [
      ".st-held { background: var(--ok-soft); color: var(--ok); }",
      ".fn.st-held rect.box { fill: var(--ok-soft); stroke: var(--ok); }",
    ],
  }],
})

/**
 * Rules of a narrow screen
 * The rules that apply below a width, in a media rule on the width of the viewport: a media query cannot read a
 * variable, so the width is written in it.
 */
export const NarrowScreenRule = syntax({
  owner: "trame",
  standard: ThePage,
  language: CssStyleSheets,
  section: "Style",
  constants: {
    maxWidth: { value: "max-width", meaning: "The viewport is at most this wide (Media Queries Level 4, § 4.1 width)" },
  },
  deps: { media: MediaRule, feature: MediaFeature },
  write: ({ maxWidth, media, feature }) => (width: string, rules: string) => media(feature(maxWidth, width), [rules]),
  examples: [{ input: ["920px", ".nav { display: none; }"], output: "@media (max-width: 920px) { .nav { display: none; } }" }],
})

// The document ----------------------------------------------------------------------------

/**
 * Fonts
 * The connections to the origins of the fonts, opened before they are asked, then the style sheet that declares them.
 * The files of fonts are fetched without credentials, as fonts always are: the connection opened beforehand must be one
 * without credentials too.
 */
export const FontLinks = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "4.6.7.11 Link type preconnect; 4.6.7.17 Link type stylesheet; 2.5.4 CORS settings attributes",
  url: "https://html.spec.whatwg.org/multipage/links.html#link-type-preconnect",
  constants: {
    link: { value: "link", meaning: "A link from the page to a resource" },
    rel: { value: "rel", meaning: "What the resource is to the page" },
    href: { value: "href", meaning: "Its address" },
    preconnect: { value: "preconnect", meaning: "An origin to connect to before it is asked" },
    stylesheet: { value: "stylesheet", meaning: "A style sheet of the page" },
    crossorigin: { value: "crossorigin", meaning: "Fetched without credentials" },
  },
  deps: { startTag: HtmlStartTag, texts: Texts },
  write: ({ link, rel, href, preconnect, stylesheet, crossorigin, startTag, texts: { concat } }) => (origin: string, files: string, sheet: string) =>
    concat([
      startTag(link, { [rel]: preconnect, [href]: origin }),
      startTag(link, { [rel]: preconnect, [href]: files, [crossorigin]: true }),
      startTag(link, { [rel]: stylesheet, [href]: sheet }),
    ]),
  examples: [{
    input: ["https://fonts.example", "https://files.example", "https://fonts.example/css"],
    output: "<link rel=\"preconnect\" href=\"https://fonts.example\"><link rel=\"preconnect\" href=\"https://files.example\" crossorigin><link rel=\"stylesheet\" href=\"https://fonts.example/css\">",
  }],
})

/**
 * Scripts of the page
 * The globals the page reads, each assigned in a script of its own before it: the mode of trame dev, the compiled
 * graph, compressed ("A page carries its graph compressed"). Then the page's program, a module.
 */
export const PageScripts = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Scripts",
  constants: {},
  deps: { html: Html, script: ScriptElement, json: JsonInScript, member: MemberAccess, assignment: Assignment, texts: Texts },
  write: ({ standard: { globals }, html, script, json, member, assignment, texts: { concat, when } }) =>
    (code: string, packed: string | undefined, dev: boolean | undefined) => concat([
      when(dev, (on) => script(assignment(member(html.window, globals.dev), JSON.stringify(on)))),
      when(packed, (graph) => script(assignment(member(html.window, globals.packedBundle), json(graph)))),
      script(code, { [html.type]: html.module }),
    ]),
  examples: [
    { input: ["start()", "H4sIAAAA", true], output: "<script>window.TRAME_DEV = true</script><script>window.TRAME_BUNDLE_GZIP = \"H4sIAAAA\"</script><script type=\"module\">start()</script>" },
    { input: ["start()", undefined, undefined], output: "<script type=\"module\">start()</script>" },
  ],
})

/**
 * Document of the page
 * The page as a document of its own: the DOCTYPE, the root element in the language of the page, a head (the encoding,
 * the viewport, the host's fit, the title, the fonts, the style), a body (the shell, the scripts). As a fragment, for
 * a host that gives the skeleton of the document (an artifact): the title, the host's fit, the fonts, the style, the
 * shell, the scripts. The viewport is as wide as the device, not zoomed, and covers the whole screen; so does the host.
 */
export const PageDocument = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Document",
  constants: {
    html: { value: "html", meaning: "The root element" },
    head: { value: "head", meaning: "What the document says of itself" },
    body: { value: "body", meaning: "What it shows" },
    title: { value: "title", meaning: "The title of the document" },
    style: { value: "style", meaning: "A style sheet written in the document" },
    meta: { value: "meta", meaning: "What the document says of itself, as a name and a content" },
    name: { value: "name", meaning: "The name of a meta element" },
    content: { value: "content", meaning: "Its content" },
    charset: { value: "charset", meaning: "The encoding of the document" },
    encoding: { value: "utf-8", meaning: "UTF-8, as the WHATWG Encoding standard labels it" },
    viewport: { value: "viewport", meaning: "How a mobile browser lays the page out (CSS Viewport Module Level 1)" },
    deviceWidth: { value: "width=device-width, initial-scale=1, viewport-fit=cover", meaning: "As wide as the device, not zoomed, drawn under the notch and the rounded corners" },
    hostFit: { value: "claude:viewport-fit-sides", meaning: "What the host that shows the page as an artifact (claude.ai) reads to draw it" },
    cover: { value: "cover", meaning: "To the edges of the screen" },
  },
  deps: {
    htmlNames: Html, doctype: Doctype, startTag: HtmlStartTag, endTag: HtmlEndTag, element: HtmlElement,
    file: TextFile, texts: Texts,
  },
  write: ({ html, head, body, title, style, meta, name, content, charset, encoding, viewport, deviceWidth, hostFit, cover, htmlNames, doctype, startTag, endTag, element, file: { endOfLine }, texts: { empty } }) =>
    (p: PageParts) => {
      const fit = startTag(meta, { [name]: hostFit, [content]: cover })
      const titled = element(title, {}, p.title)
      const styled = element(style, {}, p.style)
      const lines = p.fragment
        ? [titled, fit, p.fonts, styled, ...p.shell, p.scripts]
        : [
          doctype(), startTag(html, { [htmlNames.lang]: p.lang }),
          startTag(head, {}), startTag(meta, { [charset]: encoding }), startTag(meta, { [name]: viewport, [content]: deviceWidth }), fit, titled, p.fonts, styled, endTag(head),
          startTag(body, {}), ...p.shell, p.scripts, endTag(body),
          endTag(html),
        ]
      return [...lines, empty].join(endOfLine)
    },
  examples: [
    {
      input: [{ lang: "en-GB", title: "Trame graph", fonts: "<link>", style: "body { margin: 0; }", shell: ["<div class=\"app\">", "</div>"], scripts: "<script>start()</script>" }],
      output: "<!doctype html>\n<html lang=\"en-GB\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n<meta name=\"claude:viewport-fit-sides\" content=\"cover\">\n<title>Trame graph</title>\n<link>\n<style>body { margin: 0; }</style>\n</head>\n<body>\n<div class=\"app\">\n</div>\n<script>start()</script>\n</body>\n</html>\n",
    },
    {
      input: [{ lang: "en-GB", title: "Trame graph", fonts: "<link>", style: "body { margin: 0; }", shell: ["<div class=\"app\">", "</div>"], scripts: "<script>start()</script>", fragment: true }],
      output: "<title>Trame graph</title>\n<meta name=\"claude:viewport-fit-sides\" content=\"cover\">\n<link>\n<style>body { margin: 0; }</style>\n<div class=\"app\">\n</div>\n<script>start()</script>\n",
    },
  ],
})

// Putting it together ---------------------------------------------------------------------

/**
 * Page
 * The page put together: its shell, its theme and the style of a standalone document, written by the syntax elements
 * of the page; its style sheet and its script (bundled by esbuild, once) read from the resources; the compiled graph.
 * What it writes is read back before it is given (languages.ReadBackWhatIsWritten): the style in CSS, where each
 * variable used must be written, and the page in HTML.
 */
export const Page = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    pageBundle: PageBundle, standalone: StandaloneStyle, encodings: NodeEncodings, file: TextFile, palette: Palette, typography: Typography,
    narrowScreen: NarrowScreen, spacing: Spacing, radii: Radii, typeScale: TypeScale, opacities: Opacities, strokes: Strokes, motion: Motion,
    pageLayout: PageLayout, resources: Resources, reading: FileReading, bundler: Bundler, compression: Compression,
    shell: Shell, theme: Theme, statusStyle: StatusStyle, narrow: NarrowScreenRule, fonts: FontLinks, scripts: PageScripts, document: PageDocument,
    rule: CssRule, declaration: CssDeclaration,
    messages: OutputMessages, language: Language,
    reader: SyntaxReader, markup: HtmlMarkup, sheets: CssStyleSheets, gnu: GnuPositions,
  },
  body: code.file<typeof import("./code/page/page").default>("./code/page/page.ts"),
})

// The style sheets ------------------------------------------------------------------------

/**
 * Style sheet of the page
 * The appearance of the page: a navigator kept in view beside a reading column, the documents, their figures. Here,
 * and only here, the page chooses how things look; what they mean comes from the format of the documents.
 */
export const PageStyle = stylesheet({
  owner: "trame",
  body: code.file("./code/page/page.css", "css"),
  variables: [Palette, Typography, Spacing, Radii, TypeScale, Opacities, Strokes, Motion, PageLayout],
  styles: [Page],
})

/**
 * Style sheet of a narrow screen
 * Below the width of a narrow screen, the navigator stacks over the reading column and the documents are reached by a
 * picker. The page writes these rules in a media rule (NarrowScreenRule), after the style sheet of the page.
 */
export const NarrowScreenStyle = stylesheet({
  owner: "trame",
  body: code.file("./code/page/narrow.css", "css"),
  variables: [Spacing, TypeScale, PageLayout],
  styles: [Page],
})

/**
 * A style sheet writes no value
 * The values of the page's appearance are decisions of the graph: the page writes them as variables before its style
 * sheets, which hold only variables, names and keywords.
 */
export const StyleThroughVariables = adr({
  owner: "trame",
  context: "A style sheet is a body like any other: a value written in it hides its meaning, and the sheet of the page held 355. CSS cannot import a value, but it reads a variable declared before it.",
  consequences: "Each family of measures is a decision of appearance, and the theme writes them in :root with the colours and the fonts; the page refuses a style that uses a variable it does not write. A media query cannot read a variable: the width of a narrow screen is a decision, which the page writes in the media rule around the second sheet. The lines of a grid are named, not numbered. The scale was taken as it was, so the page looks as it did; folding it is a change of decisions.",
  rejected: {
    "Folding the values into a lighter scale first": "the page would have changed at the same time as its sheet was brought into the graph",
    "Writing the rules as syntax elements": "the sheet is where the appearance is chosen; two hundred rules spread over elements would hide it",
    "An exception for style sheets": "a value without its meaning is the same problem in a sheet as in code",
  },
  serves: [SingleSource],
  appliedBy: [PageStyle, NarrowScreenStyle, Theme, NarrowScreenRule, Page],
})
