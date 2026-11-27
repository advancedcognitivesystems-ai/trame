/** Trame · Rendering */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { port } from "../kinds/port"
import { binding } from "../kinds/binding"
import { adr } from "../kinds/adr"
import { RenderingWithoutGraph, Local, Test } from "./architecture"
import { ExecutableSpecification, ReplaceableTechnology } from "./product"
import { GraphDrawing, TimelineDrawing, LegendDrawing } from "./appearance"
import { Bridge, Strategy } from "#std/patterns"
import { Punctuation, Dates } from "#documents/language"
import {
  Common, Rendering, FileRendering, TerminalRendering, MarkdownSyntax, MermaidDiagrams, PlainTextSyntax, TextFigures,
  SentenceSlots, RenderingMessages, OneRendererManySyntaxes, type DocumentSyntax, type FigureSyntax,
} from "#documents/rendering"
import { Html, Svg, Aria, Css } from "#std/html"
import { HtmlElement, HtmlHeading, EscapedText, SelfClosingTag } from "#documents/html"
import { PathData, CssDeclaration } from "./html"
import { ThePage } from "./page"
import { DocumentMarkup, FigureMarkup } from "./markup"
import { Counts, Sequences, Texts } from "#std/algebra"
import { PageWords } from "./messages"
import { Iso8601 } from "#std/measures"

// Trame's documents are rendered by libs/documents (since g131): one renderer, given a syntax; Markdown with Mermaid
// for the files, text for the terminal, which Trame chooses below. The page's syntax is Trame's until the page moves
// there: its ports are declared here, its HTML and its SVG written here, and the library's renderer is given them.

// The page's ports -------------------------------------------------------------------------------

/**
 * Syntax of the page
 * What the page shows a document in, formatted: the engine writes it, the page puts it in place.
 */
export const PageSyntax = port<DocumentSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures of the page
 */
export const PageFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

// The page's syntax and figures -------------------------------------------------------------------

/**
 * Figures in SVG
 * A figure of the page, drawn: a graph layer under layer, its nodes under their neighbours, with its legend; a timeline
 * as lanes of bars and marks under the months. A graph too large to be read whole is left to the page, which explores
 * it: its place carries the figure's index in the document.
 */
export const SvgFigures = fn({
  owner: "trame",
  implements: [PageFigures],
  serves: [ExecutableSpecification],
  deps: {
    html: Html, svg: Svg, aria: Aria, css: Css, markup: DocumentMarkup, figures: FigureMarkup, page: ThePage,
    graph: GraphDrawing, timeline: TimelineDrawing, legend: LegendDrawing,
    element: HtmlElement, empty: SelfClosingTag, path: PathData, declaration: CssDeclaration, escape: EscapedText,
    common: Common, dates: Dates, words: PageWords, messages: RenderingMessages, punctuation: Punctuation, iso: Iso8601,
    counts: Counts, sequences: Sequences, texts: Texts,
  },
  body: code.file<typeof import("./code/rendering/svg-figures").default>("./code/rendering/svg-figures.ts"),
})

/**
 * HTML writer
 * A document as the page shows it: the elements of HTML, with the classes and attributes that the page's style sheet
 * and its script know ("Documents in the page"). Its text is escaped; a sentence of the catalog that holds pieces is
 * escaped around them.
 */
export const HtmlSyntax = fn({
  owner: "trame",
  implements: [PageSyntax],
  serves: [ExecutableSpecification],
  deps: { figures: PageFigures,
    html: Html, markup: DocumentMarkup, page: ThePage, element: HtmlElement, heading: HtmlHeading, escape: EscapedText,
    punctuation: Punctuation, slots: SentenceSlots,
    counts: Counts, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/html").default>("./code/rendering/html.ts"),
})

/**
 * Rendering in the page
 * Each document formatted for the page, and the changes the page announces: the library's renderer, in the syntax of
 * the page.
 */
export const PageRendering = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { rendering: Rendering, syntax: PageSyntax },
  body: ({ rendering, syntax }) => rendering(syntax),
})

// The choices -----------------------------------------------------------------------------------

/**
 * Documents in Markdown
 * Trame's documents are written in Markdown: CommonMark, with GFM tables. They read as they are in a terminal or an
 * editor, compare line by line in a review, and forges (GitHub, GitLab) as well as most editors display them formatted.
 * HTML serves only for anchors and collapsible blocks.
 */
export const DocumentsInMarkdown = binding({
  owner: "trame",
  chooses: [MarkdownSyntax],
  environments: [Local, Test],
  follows: [Bridge, Strategy],
  serves: [ReplaceableTechnology],
  context: "The documents are read in reviews, in editors, on forges, and compared line by line by the advance: their syntax must be text that every one of them displays.",
  consequences: "Another syntax for the files is a realization of \"Syntax of the documents written as files\" and this choice changed: the renderer, the views and the kinds do not change; the figures stay a choice of their own.",
  rejected: {
    "HTML only": "unreadable as plain text, and a review no longer compares lines",
    "AsciiDoc or reStructuredText": "less well displayed by forges and editors",
    "Plain text": "no links, no tables, no figures",
  },
})

/**
 * Figures in Mermaid
 * A figure (the layers of the graph, the tree of an impact, a timeline) is written in a document as a Mermaid diagram,
 * in a "mermaid" block: GitHub, GitLab and most editors draw it, and it stays text, which a review compares line by line.
 */
export const FiguresInMermaid = binding({
  owner: "trame",
  chooses: [MermaidDiagrams],
  environments: [Local, Test],
  follows: [Strategy],
  serves: [ReplaceableTechnology],
  context: "A figure of a document must be drawn by the forges and editors that display the document, and stay text that a review compares.",
  consequences: "The Markdown writer puts the lines of a figure in a code block, in the language the drawing says: figures as text in the documents would be the text figures answering \"Figures of the documents written as files\" too, and this choice changed; the writer does not change.",
  rejected: {
    "Images (SVG, PNG)": "to regenerate at every change, and silent in a text review",
    "Graphviz (DOT)": "neither GitHub nor GitLab draws it",
    "PlantUML": "needs a rendering server",
  },
})

/**
 * The terminal in plain text
 * What a command prints is text, with the punctuation of documents: indented, aligned in columns, without marks.
 */
export const TerminalInText = binding({
  owner: "trame",
  chooses: [PlainTextSyntax],
  environments: [Local, Test],
  follows: [Bridge, Strategy],
  serves: [ReplaceableTechnology],
  context: "A terminal shows characters: marks of a syntax (asterisks, pipes, tags) would be noise there.",
  consequences: "A view printed in Markdown is the --format md option, which renders with the files' renderer; a terminal syntax with colours would be another realization of \"Syntax of the terminal\".",
  rejected: {
    "Markdown in the terminal": "its marks are noise when they are not displayed",
    "ANSI colours": "lost in logs and pipes, and the scenarios compare text",
  },
})

/**
 * Figures in the terminal, as text
 * In the terminal, a tree is drawn with box-drawing characters, a path step by step, a timeline as dated lines.
 */
export const TerminalFiguresAsText = binding({
  owner: "trame",
  chooses: [TextFigures],
  environments: [Local, Test],
  follows: [Strategy],
  serves: [ReplaceableTechnology],
  context: "A terminal draws no diagram: a figure must read as lines.",
  consequences: "The terminal syntax indents the lines of a figure like any other content.",
  rejected: { "Mermaid in the terminal": "its source does not read as a figure" },
})

/**
 * The page in HTML
 * The engine writes each document in HTML for the page, with the renderer of every other format: the page has no
 * renderer of its own, and shows what the engine wrote.
 */
export const PageInHtml = binding({
  owner: "trame",
  chooses: [HtmlSyntax],
  environments: [Local, Test],
  follows: [Bridge, Strategy],
  serves: [ReplaceableTechnology],
  context: "The page wrote its own HTML from the intermediate format, in its script: a second renderer, outside the graph, whose words and layout could drift from the documents'.",
  consequences: "The payload holds each document in Markdown, in text and in HTML; the page puts the HTML in place and draws the explorer of a large graph. A page in another markup would be another realization of \"Syntax of the page\".",
  rejected: {
    "HTML written by the page's script": "a renderer outside the graph, with its own words",
    "Markdown converted to HTML in the browser": "a library in the page, and what Markdown cannot say (statuses, the views of a card) lost",
  },
})

/**
 * The page's figures in SVG
 * The engine draws the page's figures in SVG, beside their document: the page shows them as they are, and explores in
 * the browser a graph too large to be read whole.
 */
export const PageFiguresDrawn = binding({
  owner: "trame",
  chooses: [SvgFigures],
  environments: [Local, Test],
  follows: [Strategy],
  serves: [ReplaceableTechnology],
  context: "The page's script drew the figures, outside the graph, with its own geometry and its own words; only the exploration of a large graph needs the browser, where it follows the reader's clicks.",
  consequences: "Graphs, legends and timelines are written by the engine, with the geometry of the decisions of appearance; the place of an explored graph carries its index, and the page's script draws the explorer there.",
  rejected: {
    "Mermaid in the page": "a library of several hundred kilobytes, and diagrams that cannot be explored",
    "Everything drawn by the page's script": "a renderer outside the graph, whose numbers no decision holds",
  },
})

/**
 * Kinds and views say what; renderers say how
 * Kinds and views describe meaning only, in an intermediate format of blocks and inlines (values with their unit,
 * references, statuses, cards, figures); renderers choose the look: Markdown with Mermaid figures, terminal text, HTML.
 */
export const MeaningThenLook = adr({
  owner: "trame",
  context: "The same answer is read in a review, in a terminal, in a page and by an agent; a kind written for one format would be wrong in the others.",
  consequences: "Three points of extension: a kind says what a node is, a view which question is asked, a syntax in which format the answer comes. Renderers compose the syntax elements of their format and never read the graph.",
  rejected: { "Kinds that write Markdown": "one format only, and the page would have to parse it back" },
  serves: [ExecutableSpecification],
  appliedBy: [FileRendering, TerminalRendering, PageRendering, Common, RenderingWithoutGraph],
})

/**
 * Trame's documents, rendered by the library of documents
 * The renderers are libs/documents': Trame chooses their syntaxes for its files and its terminal, and gives the same
 * renderer the syntax of its page, which it still writes.
 */
export const RenderedByTheLibrary = adr({
  owner: "trame",
  context: "The renderers were the engine's: the commands of every project need them (build, view, snapshot), and a project's own command could not reach them (decided 26 November).",
  consequences: "Trame's commands use the library's renderers as they use std's structures; the page's syntax and figures move there with the page.",
  rejected: { "Renderers kept in the engine": "a command moved out of the engine would lose what writes its documents" },
  serves: [ReplaceableTechnology],
  adopts: [OneRendererManySyntaxes],
  appliedBy: [PageRendering, DocumentsInMarkdown, FiguresInMermaid, TerminalInText, TerminalFiguresAsText, PageInHtml, PageFiguresDrawn],
})
