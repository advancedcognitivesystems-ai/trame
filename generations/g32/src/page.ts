/** Trame · The page */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { syntax } from "../kinds/syntax"
import { fn } from "../kinds/function"
import { ExecutableSpecification } from "./product"
import { Bundler, FileReading, Resources } from "./architecture"
import { Palette, Typography } from "./appearance"
import { GnuPositions, NodeEncodings, TextFile } from "./standards"
import { TrameCommands } from "./conventions"
import { Counts, Sequences, Texts } from "./algebra"
import { Language, OutputMessages } from "./messages"
import {
  Html, Aria, Svg, Css, HtmlMarkup, CssStyleSheets, HtmlStartTag, HtmlEndTag, HtmlElement, HtmlBlock, SelfClosingTag, Doctype, ScriptElement, JsonInScript,
  CssDeclaration, CustomProperty, CssVariable, CssRule, MediaRule, MediaFeature, ClassSelector, AttributeSelector, NegationSelector,
} from "./html"
import { MemberAccess, Assignment } from "./typescript"
import { SyntaxReader } from "./syntax"

// The page shows the graph in a browser. A decision says what it is made of; its syntax elements write its HTML and
// its CSS, from the elements of the module html; Page puts it together with its script, its style sheet and the graph.

/** The words of the page's shell, from the catalog: the order of the renderings is that of the page's modes. */
export interface ShellWords {
  subtitle: string
  dates: string
  navigation: string
  document: string
  rendering: string
  renderings: readonly string[]
}

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
 * the choice of rendering) and the document. The page's script and its style sheet find these regions by the classes
 * and identifiers their elements declare; the script receives the compiled graph, and the mode of trame dev, through
 * globals of the window. Its colours and fonts are the decisions of appearance, written as CSS variables, light and
 * dark; a theme the person chooses is an attribute of the root element. The value holds what several elements share:
 * the class of the labels of the side bar, the attribute and the names of the themes, the prefix of the class of a
 * status, the names of the globals, the renderings of a document (the first one is shown first).
 */
export const ThePage = decision<{
  label: string
  themeAttribute: string
  themes: { light: string; dark: string }
  statusClass: string
  globals: { bundle: string; dev: string }
  modes: readonly string[]
}>({
  owner: "trame",
  value: {
    label: "label",
    themeAttribute: "data-theme",
    themes: { light: "light", dark: "dark" },
    statusClass: "st-",
    globals: { bundle: "TRAME_BUNDLE", dev: "TRAME_DEV" },
    modes: ["rendered", "markdown", "text"],
  },
  rejected: {
    "A page per document": "the page must work without a server (trame export): one file holds the graph at every date and all its documents",
    "A front-end framework": "one script, bundled from one file, without dependencies, is enough to render the intermediate format",
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
 * Bundle of the page
 * How esbuild bundles the page's script: one immediately invoked function, for browsers that run ES2020, without
 * licence comments, in UTF-8.
 */
export const PageBundle = decision<{ format: "iife"; target: string; legalComments: "none"; charset: "utf8" }>({
  owner: "trame",
  value: { format: "iife", target: "es2020", legalComments: "none", charset: "utf8" },
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
  constants: {
    status: { value: "status", meaning: "Its class and its identifier" },
  },
  deps: { html: Html, element: HtmlElement, texts: Texts },
  write: ({ status, html, element, texts: { empty } }) => () => element(html.div, { [html.class]: status, [html.id]: status }, empty),
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
    dates: { value: "dates", meaning: "The class and the identifier of the group of dates" },
    note: { value: "date-note", meaning: "The class and the identifier of the note" },
  },
  deps: { html: Html, aria: Aria, block: HtmlBlock, element: HtmlElement, texts: Texts },
  write: ({ standard: { label: labelClass }, paragraph, labelId, dates, note, html, aria, block, element, texts: { empty } }) => (label: string) =>
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
    nav: { value: "nav", meaning: "Its class and its identifier" },
  },
  deps: { html: Html, aria: Aria, element: HtmlElement, texts: Texts },
  write: ({ tag, nav, html, aria, element, texts: { empty } }) => (label: string) =>
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
    selectId: { value: "doc-select", meaning: "The identifier of the select" },
  },
  deps: { html: Html, block: HtmlBlock, element: HtmlElement, texts: Texts },
  write: ({ standard: { label: labelClass }, picker, labelTag, for: forAttribute, select, selectId, html, block, element, texts: { empty } }) => (label: string) =>
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
  constants: {
    banner: { value: "banner", meaning: "Its class and its identifier" },
  },
  deps: { html: Html, element: HtmlElement, texts: Texts },
  write: ({ banner, html, element, texts: { empty } }) => () => element(html.div, { [html.class]: banner, [html.id]: banner, [html.hidden]: true }, empty),
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
  constants: {
    toggle: { value: "toggle", meaning: "The class and the identifier of the group" },
    button: { value: "button", meaning: "A button" },
    type: { value: "type", meaning: "What a button does" },
    buttonType: { value: "button", meaning: "A button that only runs the page's script: it submits nothing" },
    idPrefix: { value: "view-", meaning: "Before the name of a rendering: the identifier of its button" },
  },
  deps: { html: Html, aria: Aria, block: HtmlBlock, element: HtmlElement, sequences: Sequences },
  write: ({ standard: { modes }, toggle, button, type, buttonType, idPrefix, html, aria, block, element, sequences: { isFirst } }) =>
    (label: string, names: readonly string[]) =>
      block(html.div, { [html.class]: toggle, [html.id]: toggle, [aria.role]: aria.group, [aria.label]: label },
        modes.map((mode, i) => element(button, { [type]: buttonType, [html.id]: idPrefix + mode, [aria.pressed]: String(isFirst(i)) }, names[i]))),
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
    pathId: { value: "doc-path", meaning: "The identifier of the path" },
  },
  deps: { html: Html, block: HtmlBlock, element: HtmlElement, toggle: RenderingToggle, texts: Texts },
  write: ({ tag, head, path, pathId, html, block, element, toggle, texts: { empty } }) => (label: string, names: readonly string[]) =>
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
    doc: { value: "doc", meaning: "The class and the identifier of the document" },
  },
  deps: { html: Html, block: HtmlBlock, element: HtmlElement, banner: Banner, head: DocumentHead, texts: Texts },
  write: ({ tag, article, doc, html, block, element, banner, head, texts: { empty } }) => (words: ShellWords) =>
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
  deps: { html: Html, block: HtmlBlock, side: SideBar, main: MainArea },
  write: ({ app, html, block, side, main }) => (words: ShellWords) => block(html.div, { [html.class]: app }, [...side(words), ...main(words)]),
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
      "</div>",
    ],
  }],
})

// The style -------------------------------------------------------------------------------

/**
 * Theme
 * The colours and the fonts of the page as CSS variables of the root element: light; dark when the system prefers it
 * and the person did not choose light; dark when the person chose it. In dark, the browser draws its own controls dark.
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
    (lightColours: Readonly<Record<string, string>>, darkColours: Readonly<Record<string, string>>, fonts: Readonly<Record<string, string>>) => {
      const variables = (values: Readonly<Record<string, string>>) => Object.entries(values).map(([name, value]) => property(name, value))
      const inDark = [...variables(darkColours), declaration(colorScheme, dark)]
      return [
        rule(root, [...variables(lightColours), ...variables(fonts)]),
        media(feature(preference, dark), [rule(root + negation(attribute(themeAttribute, themes.light)), inDark)]),
        rule(root + attribute(themeAttribute, themes.dark), inDark),
      ]
    },
  examples: [{
    input: [{ bg: "#fff" }, { bg: "#000" }, { "font-ui": "sans-serif" }],
    output: [
      ":root { --bg: #fff; --font-ui: sans-serif; }",
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
 * The globals the script reads, each assigned in a script of its own before it: the mode of trame dev, the compiled
 * graph as JSON. Then the script of the page.
 */
export const PageScripts = syntax({
  owner: "trame",
  standard: ThePage,
  language: HtmlMarkup,
  section: "Scripts",
  constants: {},
  deps: { html: Html, script: ScriptElement, json: JsonInScript, member: MemberAccess, assignment: Assignment, texts: Texts },
  write: ({ standard: { globals }, html, script, json, member, assignment, texts: { concat, when } }) =>
    (code: string, bundle: unknown, dev: boolean | undefined) => concat([
      when(dev, (on) => script(assignment(member(html.window, globals.dev), JSON.stringify(on)))),
      when(bundle, (graph) => script(assignment(member(html.window, globals.bundle), json(graph)))),
      script(code),
    ]),
  examples: [
    { input: ["start()", { dates: [] }, true], output: "<script>window.TRAME_DEV = true</script><script>window.TRAME_BUNDLE = {\"dates\":[]}</script><script>start()</script>" },
    { input: ["start()", undefined, undefined], output: "<script>start()</script>" },
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
 * What it writes is read back before it is given (languages.ReadBackWhatIsWritten): the style in CSS, the page in HTML.
 */
export const Page = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    pageBundle: PageBundle, standalone: StandaloneStyle, encodings: NodeEncodings, file: TextFile, palette: Palette, typography: Typography,
    resources: Resources, reading: FileReading, bundler: Bundler,
    shell: Shell, theme: Theme, statusStyle: StatusStyle, fonts: FontLinks, scripts: PageScripts, document: PageDocument,
    rule: CssRule, declaration: CssDeclaration,
    messages: OutputMessages, language: Language,
    reader: SyntaxReader, markup: HtmlMarkup, sheets: CssStyleSheets, gnu: GnuPositions,
  },
  body: code.file<typeof import("./code/page/page").default>("./code/page/page.ts"),
})
