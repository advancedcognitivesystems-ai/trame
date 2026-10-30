/** Trame · Rendering */

import { code } from "../trame/kernel"
import type { BlockType, Card, Figure, Nature, Outcome, RuleState, Severity, Status, Validity } from "../trame/kernel"
import { fn } from "../kinds/function"
import { port } from "../kinds/port"
import { binding } from "../kinds/binding"
import { decision } from "../kinds/decision"
import { adr } from "../kinds/adr"
import { RenderingWithoutGraph, Local, Test } from "./architecture"
import { ExecutableSpecification, ReplaceableTechnology } from "./product"
import { Palette, GraphDrawing, TimelineDrawing, LegendDrawing } from "./appearance"
import { Bridge, Strategy } from "../std/src/patterns"
import {
  Blocks, Heading, ListItem, BlockQuote, CodeBlock, Emphasis, StrongEmphasis, CodeSpan, Link, RelativeReference,
  TableCell, Table, Anchor, Details, Small,
} from "./markdown"
import {
  Mermaid, Flowchart, MermaidNode, Subgraph, MermaidLink, ClassDefinition, NodeStyle,
  Gantt, GanttSection, GanttTask, Milestone,
} from "./mermaid"
import { TextRendering, MermaidFigures, Punctuation, Units } from "./documents"
import { TerminalText, TerminalColumns, PaddedCell, Columns, ItemLine, CodeLines, TerminalLines, TreeBranch, PathStep } from "./text"
import { Html, Svg, Aria, Css, HtmlElement, HtmlHeading, EscapedText, SelfClosingTag, PathData, CssDeclaration } from "./html"
import { ThePage } from "./page"
import { DocumentMarkup, FigureMarkup } from "./markup"
import { ReferenceSyntax } from "./conventions"
import { Counts, Sequences, Texts, ValueTypes } from "../std/src/algebra"
import { Dates, Lists, RenderingMessages, PageWords } from "./messages"
import { Iso8601 } from "../std/src/measures"

// A document is rendered by one renderer, whatever its format: it walks the blocks of the intermediate format, says
// each piece in words (a value, a status, the sentence of an overlap) and finds where each reference leads; how a piece
// is written is the syntax's, a port. Markdown, the terminal's text and the page's HTML are three realizations of it,
// and the figures are a second port, which each syntax reaches: syntax and figures are chosen apart (Bridge).

/**
 * Places in a sentence
 * A sentence of a catalog may hold pieces that are not text (references, values): the catalog receives a mark in place
 * of each, writes its words around the marks, in the order its language wants, and the renderer puts the pieces back
 * where the marks are. A mark is the number of its piece between two delimiters: the NUL character (U+0000), which no
 * sentence holds.
 */
export const SentenceSlots = decision<{ delimiter: "\u0000" }>({ owner: "trame", value: { delimiter: "\u0000" } })

/**
 * Common rendering
 * What the renderers share: a value as text, a resolution, where each node lives.
 */
export const Common = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { values: ValueTypes, syntax: ReferenceSyntax, slots: SentenceSlots, dates: Dates, lists: Lists, texts: Texts, messages: RenderingMessages, units: Units },
  body: code.file<typeof import("./code/rendering/common").default>("./code/rendering/common.ts"),
})

// The contracts -----------------------------------------------------------------------------

/** A piece of a document as a syntax writes it: its lines (a block of Markdown, lines of the terminal, a fragment of HTML). */
export type Written = readonly string[]

/** Where the card of a referenced node is, seen from the document being written: in it (an anchor), or in another file. */
export interface Target {
  file?: string
  anchor: string
}

/** The blocks whose content is written one level down. */
export type Nesting = typeof BlockType.section | typeof BlockType.card | typeof BlockType.details

/** A card, its pieces said and written: the syntax lays them out, and shows those its format shows. */
export interface WrittenCard {
  card: Card
  /** The words of its status. */
  status?: string
  /** The node that repealed it, as a written reference. */
  repealedBy?: string
  body: Written[]
  /** The sentence of each overlap on it, written. */
  resolutions: string[]
  facts: { label: string; value: string }[]
  links: { label: string; active: boolean; nature: Nature; targets: string[] }[]
  children: { anchor: string; body: Written[] }[]
}

/** A criterion and its outcome, in words. */
export interface WrittenCheck {
  name: string
  outcome: Outcome
  words: string
  detail?: string
}

/** A problem: its severity in words, where it is (a text, or a written reference), who owns it. */
export interface WrittenIssue {
  severity: Severity
  words: string
  source?: string
  what: string
  whereText?: string
  whereRef?: string
  owner?: string
  effect?: string
}

/**
 * How a document is written: the pieces of a sentence, the blocks, the depth of what is nested, the whole document.
 * Each block is given its depth; the syntax says where a document starts, and how deep the content of a nesting block
 * goes. Words come said: the syntax only writes them (escapes them, marks them, lays them out).
 */
export interface DocumentSyntax {
  text(words: string): string
  value(words: string, open: boolean, rule?: RuleState): string
  ref(title: string, ref: string, target?: Target): string
  doc(title: string, id: string, file?: string): string
  /** A file of the project outside its documents, by its path from the project's root. */
  file(title: string, path: string): string
  status(words: string, status: Status): string
  severity(words: string, severity: Severity): string
  date(words: string, iso: string): string
  person(name: string): string
  ident(text: string): string
  start: number
  within(block: Nesting, depth: number): number
  paragraph(line: string, depth: number): Written[]
  facts(rows: { label: string; value: string }[], depth: number): Written[]
  list(items: string[], depth: number): Written[]
  table(head: string[], rows: string[][], depth: number): Written[]
  code(lang: string, text: string, source: string | undefined, depth: number): Written[]
  checks(title: string | undefined, items: WrittenCheck[], depth: number): Written[]
  validity(head: string, rest: string, state: Validity, depth: number): Written[]
  details(summary: string, content: Written[], depth: number): Written[]
  section(title: string, id: string | undefined, content: Written[], depth: number): Written[]
  summary(line: string, depth: number): Written[]
  issues(items: WrittenIssue[], depth: number): Written[]
  resolution(line: string, depth: number): Written[]
  card(card: WrittenCard, depth: number): Written[]
  /** A figure, the index-th of its document. */
  figure(figure: Figure, caption: string | undefined, depth: number, index: number): Written[]
  document(title: string, intro: string | undefined, blocks: Written[]): string
  join(blocks: Written[]): string
}

/** A figure, drawn: its lines, and the language they are written in, when they are a language's. */
export interface DrawnFigure {
  lines: string[]
  language?: string
}

/** How a figure is drawn: the index-th of its document. */
export interface FigureSyntax {
  figure(f: Figure, index: number): DrawnFigure
}

// The ports: one per audience, so that each one's syntax is chosen apart -------------------

/**
 * Syntax of the documents written as files
 * What docs/ and the snapshot are written in: a review compares them line by line.
 */
export const FileSyntax = port<DocumentSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Syntax of the terminal
 * What a command prints: a summary, a view.
 */
export const TerminalSyntax = port<DocumentSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Syntax of the page
 * What the page shows a document in, formatted: the engine writes it, the page puts it in place.
 */
export const PageSyntax = port<DocumentSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures of the documents written as files
 */
export const FileFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures of the terminal
 */
export const TerminalFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures of the page
 */
export const PageFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

// Figures -------------------------------------------------------------------------------------

/**
 * Mermaid diagrams
 * A figure as a Mermaid diagram, as "Figures: Mermaid diagrams in documents" decides: it composes the elements of the
 * Mermaid spec, with the colours of the palette.
 */
export const MermaidDiagrams = fn({
  owner: "trame",
  implements: [FileFigures],
  serves: [ExecutableSpecification],
  deps: {
    mermaid: Mermaid, figures: MermaidFigures, palette: Palette, small: Small,
    flowchart: Flowchart, node: MermaidNode, subgraph: Subgraph, link: MermaidLink, classDefinition: ClassDefinition, nodeStyle: NodeStyle,
    gantt: Gantt, ganttSection: GanttSection, ganttTask: GanttTask, milestone: Milestone,
    counts: Counts, dates: Dates, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/mermaid").default>("./code/rendering/mermaid.ts"),
})

/**
 * Figures as text
 * A figure in lines of text: the tree of an impact, a path step by step, the dates of a timeline, the layers one per
 * line.
 */
export const TextFigures = fn({
  owner: "trame",
  implements: [TerminalFigures],
  serves: [ExecutableSpecification],
  deps: {
    common: Common, columns: TerminalColumns, punctuation: Punctuation, cell: PaddedCell, table: Columns, branch: TreeBranch, step: PathStep,
    dates: Dates, counts: Counts, sequences: Sequences, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/text-figures").default>("./code/rendering/text-figures.ts"),
})

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

// Syntaxes ------------------------------------------------------------------------------------

/**
 * Markdown writer
 * Documents in Markdown: it composes the elements of the Markdown spec, and puts each figure in a code block, in the
 * language of its drawing. It writes no mark itself.
 */
export const MarkdownSyntax = fn({
  owner: "trame",
  implements: [FileSyntax],
  serves: [ExecutableSpecification],
  deps: { figures: FileFigures,
    textRendering: TextRendering, punctuation: Punctuation,
    blocks: Blocks, heading: Heading, listItem: ListItem, blockQuote: BlockQuote, codeBlock: CodeBlock,
    emphasis: Emphasis, strong: StrongEmphasis, codeSpan: CodeSpan, link: Link, relativeReference: RelativeReference,
    tableCell: TableCell, table: Table, anchor: Anchor, details: Details,
    counts: Counts, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/markdown").default>("./code/rendering/markdown.ts"),
})

/**
 * Plain text writer
 * What the terminal shows, in the format the decision "Terminal text" defines: it composes the syntax elements of the
 * module text, with the punctuation of documents; nesting is indentation.
 */
export const PlainTextSyntax = fn({
  owner: "trame",
  implements: [TerminalSyntax],
  serves: [ExecutableSpecification],
  deps: { figures: TerminalFigures,
    layout: TerminalText, columns: TerminalColumns, punctuation: Punctuation,
    cell: PaddedCell, table: Columns, item: ItemLine, code: CodeLines, lines: TerminalLines,
    counts: Counts, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/text").default>("./code/rendering/text.ts"),
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

// The renderer, one per audience --------------------------------------------------------------

/**
 * Rendering of the files
 * The documents of docs/ and the snapshot: the renderer, in the syntax of files.
 */
export const FileRendering = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { common: Common, syntax: FileSyntax, values: ValueTypes, texts: Texts, counts: Counts, messages: RenderingMessages },
  body: code.file<typeof import("./code/rendering/document").default>("./code/rendering/document.ts"),
})

/**
 * Rendering in the terminal
 * A summary, a view: the renderer, in the syntax of the terminal.
 */
export const TerminalRendering = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { common: Common, syntax: TerminalSyntax, values: ValueTypes, texts: Texts, counts: Counts, messages: RenderingMessages },
  body: code.file<typeof import("./code/rendering/document").default>("./code/rendering/document.ts"),
})

/**
 * Rendering in the page
 * Each document formatted for the page, and the changes the page announces: the renderer, in the syntax of the page.
 */
export const PageRendering = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { common: Common, syntax: PageSyntax, values: ValueTypes, texts: Texts, counts: Counts, messages: RenderingMessages },
  body: code.file<typeof import("./code/rendering/document").default>("./code/rendering/document.ts"),
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
 * One renderer, its syntax a choice
 * A document is rendered by one renderer, which says each piece in words and finds where references lead; the syntax
 * it writes in is a port, chosen per audience, and the figures a second port, which the syntax reaches.
 */
export const OneRendererManySyntaxes = adr({
  owner: "trame",
  context: "Markdown, the terminal and the page each had their renderer: three walks of the same blocks, three ways of saying a status or an overlap, and the page's outside the graph.",
  consequences: "The words of a document are said once, by the renderer; a new format is a realization of a syntax port and a choice, without touching the renderer. Syntax and figures vary apart: Markdown with figures as text is two choices, not a new renderer.",
  rejected: {
    "A renderer per format": "the walk and the words repeated, and drifting",
    "Figures in each syntax": "a syntax and a way of drawing tied together, which no longer vary apart",
  },
  serves: [ReplaceableTechnology],
  appliedBy: [FileRendering, TerminalRendering, PageRendering, DocumentsInMarkdown, FiguresInMermaid, TerminalInText, TerminalFiguresAsText, PageInHtml, PageFiguresDrawn],
})
