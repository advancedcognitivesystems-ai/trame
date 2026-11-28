/** Documents · Rendering */

import { code } from "#trame/kernel"
import type { BlockType, Card, DateRole, EdgeRole, Figure, KeyOf, Nature, Outcome, ProvidedBy, RuleState, Severity, Shape, Status, Validity } from "#trame/kernel"
import { fn } from "#trame/kinds/function"
import { port } from "#trame/kinds/port"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { adr } from "#trame/kinds/adr"
import { standard } from "#trame/kinds/standard"
import { ReferenceSyntax } from "#std/engine"
import { AnswerFormats } from "#std/tooling"
import { MediaTypes } from "#std/web"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import { RenderedOnce, ShownInAPage } from "./product"
import { Dates, Lists, Punctuation, Units, WordsLanguage } from "./language"
import { Palette, GraphDrawing, TimelineDrawing, LegendDrawing } from "./appearance"
import {
  Blocks, Heading, ListItem, BlockQuote, CodeBlock, Emphasis, StrongEmphasis, CodeSpan, Link, RelativeReference,
  TableCell, Table, Anchor, Details, Small,
} from "./markdown"
import {
  Mermaid, Flowchart, MermaidNode, Subgraph, MermaidLink, ClassDefinition, NodeStyle, StyleProperties,
  Gantt, GanttSection, GanttTask, Milestone,
} from "./mermaid"
import { TerminalText, TerminalColumns, PaddedCell, Columns, ItemLine, CodeLines, TerminalLines, TreeBranch, PathStep } from "./text"
import { HtmlElement, HtmlHeading, EscapedText, SelfClosingTag, PathData, CssDeclaration } from "./html"
import { DocumentMarkup, FigureMarkup } from "./markup"
import { ThePage, PageWords } from "./page"
import { Html, Svg, Aria, Css } from "#std/html"
import { Iso8601 } from "#std/measures"

type Direction = Parameters<ProvidedBy<typeof Flowchart>>[0]
type Stroke = Parameters<ProvidedBy<typeof MermaidLink>>[2]
type Style = Parameters<ProvidedBy<typeof StyleProperties>>[0]

// A document is rendered by one renderer, whatever its format: it walks the blocks of the intermediate format, says
// each piece in words (a value, a status, the sentence of an overlap) and finds where each reference leads; how a piece
// is written is the syntax's, a port. Markdown, the terminal's text and the page's HTML (since 0.5.0) are three
// realizations of it, here; a project writes others for the ports it declares. The figures are a second port, which
// each syntax reaches: syntax and figures are chosen apart (Bridge). The renderer receives only the intermediate format:
// what the views of a graph give, never the graph.

/**
 * Places in a sentence
 * A sentence of a catalog may hold pieces that are not text (references, values): the catalog receives a mark in place
 * of each, writes its words around the marks, in the order its language wants, and the renderer puts the pieces back
 * where the marks are. A mark is the number of its piece between two delimiters: the NUL character (U+0000), which no
 * sentence holds.
 */
export const SentenceSlots = decision<{ delimiter: "\u0000" }>({ owner: "trame", value: { delimiter: "\u0000" } })

/**
 * Heading levels of Markdown documents
 * The title of a document is a heading of the first level, its sections start at the second; a card is one level under
 * the section that holds it.
 */
export const TextRendering = decision<{ titleLevel: number; sectionLevel: number }>({
  owner: "trame",
  value: { titleLevel: 1, sectionLevel: 2 },
})

/**
 * How the figures are drawn, in the terms of the Mermaid spec. Vocabulary values (a shape, a nature, a role, a date
 * role) are named by their key in the prelude's vocabularies.
 */
export interface FigureDisplay {
  /** What comes before the rank of a node in its Mermaid identifier. */
  idPrefix: string
  /** The reading direction of each shape of figure. */
  directions: Record<KeyOf<typeof Shape>, Direction>
  /** The stroke of an edge: by its nature (computed, inferred), its role in an overlap (winner, support), otherwise the stroke of the others. */
  strokes: Record<KeyOf<typeof Nature> & ("computed" | "inferred"), Stroke> & Record<KeyOf<typeof EdgeRole> & ("winner" | "support"), Stroke> & { other: Stroke }
  /** The class of a node without a status. */
  defaultStatus: string
  /** The look of a node that exists only in the history. */
  history: Style
  /** The look of a node that is not in force at the date of the graph. */
  inactive: Style
  /** Gantt charts: formats of the dates, and which dates become milestones (their words are the catalog's). */
  gantt: { dateFormat: string; axisFormat: string; milestones: KeyOf<typeof DateRole>[] }
}

/**
 * How Mermaid figures are drawn
 * The reading direction of each shape, the stroke of each edge, the look of a node that is history or not in force, the
 * Gantt chart. The colours of the statuses come from the palette.
 */
export const MermaidFigures = decision<FigureDisplay>({
  owner: "trame",
  value: {
    idPrefix: "n",
    directions: { layers: "down", tree: "down", path: "right" },
    strokes: { computed: "dottedOpen", inferred: "dotted", winner: "thick", support: "thick", other: "solid" },
    defaultStatus: "neutral",
    history: { dashes: "4 3" },
    inactive: { opacity: "0.5" },
    gantt: {
      dateFormat: "YYYY-MM-DD", axisFormat: "%d.%m",
      milestones: ["deadline", "review"],
    },
  },
})

/**
 * Words of the renderers
 * The words that the renderers add to the intermediate format: labels, notes, the names of statuses and outcomes.
 * Written in a file: a page, which runs in the browser where nothing is wired, reads it too.
 */
export const RenderingMessages = catalog({
  owner: "trame",
  language: WordsLanguage,
  messages: code.file<typeof import("./code/rendering/messages").default>("./code/rendering/messages.ts"),
})

/**
 * Common rendering
 * What the renderers share: a value as text, a resolution, where each node lives.
 */
export const Common = fn({
  owner: "trame",
  serves: [RenderedOnce],
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
  /** The file of the document being written, from the project's root: where a relative reference starts from. */
  from?: string
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
  /** What is wrong, by its code (C4). */
  code?: string
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
  /** Another document, by its file from the project's root, seen from the file of the document being written. */
  doc(title: string, id: string, file?: string, from?: string): string
  /** A file of the project outside its documents, by its path from the project's root, seen from the same. */
  file(title: string, path: string, from?: string): string
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
 * Figures of the documents written as files
 */
export const FileFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures of the terminal
 */
export const TerminalFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

// Figures -------------------------------------------------------------------------------------

/**
 * Mermaid diagrams
 * A figure as a Mermaid diagram, as "Figures: Mermaid diagrams in documents" decides: it composes the elements of the
 * Mermaid spec, with the colours of the palette.
 */
export const MermaidDiagrams = fn({
  owner: "trame",
  implements: [FileFigures],
  serves: [RenderedOnce],
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
  serves: [RenderedOnce],
  deps: {
    common: Common, columns: TerminalColumns, punctuation: Punctuation, cell: PaddedCell, table: Columns, branch: TreeBranch, step: PathStep,
    dates: Dates, counts: Counts, sequences: Sequences, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/text-figures").default>("./code/rendering/text-figures.ts"),
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
  serves: [RenderedOnce],
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
  serves: [RenderedOnce],
  deps: { figures: TerminalFigures,
    layout: TerminalText, columns: TerminalColumns, punctuation: Punctuation,
    cell: PaddedCell, table: Columns, item: ItemLine, code: CodeLines, lines: TerminalLines,
    counts: Counts, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/text").default>("./code/rendering/text.ts"),
})

// The renderer, and one per audience -------------------------------------------------------

/**
 * The renderer
 * One walk of the blocks of a document, whatever its format: it says each piece in words (a value, a status, the
 * sentence of an overlap, the validity of a node) and finds where each reference leads; given a syntax, it writes the
 * document in it. An audience's renderer is this one, given the syntax its port chooses.
 */
export const Rendering = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { common: Common, values: ValueTypes, texts: Texts, counts: Counts, messages: RenderingMessages },
  body: code.file<typeof import("./code/rendering/document").default>("./code/rendering/document.ts"),
})

/**
 * Rendering of the files
 * The documents of docs/ and the snapshot: the renderer, in the syntax of files.
 */
export const FileRendering = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { rendering: Rendering, syntax: FileSyntax },
  body: ({ rendering, syntax }) => rendering(syntax),
})

/**
 * Rendering in the terminal
 * A summary, a view: the renderer, in the syntax of the terminal.
 */
export const TerminalRendering = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { rendering: Rendering, syntax: TerminalSyntax },
  body: ({ rendering, syntax }) => rendering(syntax),
})

// The page (documents 0.5.0) ---------------------------------------------------------------------------------------

/**
 * Names of the documents
 * How a document of a view is named: a view of the whole graph by its name; a view of a module by its name and the
 * module ("layers.engine"), except the first view per module, named by the module alone; a view of a node by its name
 * and the reference of the node ("impact:engine.Compiler"), which the page reads back to show it.
 */
export const DocumentIds = standard({
  owner: "trame",
  source: "Trame, the documents of its views (the engine names them, the page reads them)",
  serves: [ShownInAPage],
  constants: {
    ofModule: { value: ".", meaning: "Between the name of a view and the module it shows" },
    ofNode: { value: ":", meaning: "Between the name of a view and the reference of the node it shows" },
  },
})

/**
 * Syntax of the page
 * What the page shows a document in, formatted: the engine writes it, the page puts it in place.
 */
export const PageSyntax = port<DocumentSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures of the page
 */
export const PageFigures = port<FigureSyntax>({ owner: "trame", declaredEffects: [] })

/**
 * Figures in SVG
 * A figure of the page, drawn: a graph layer under layer, its nodes under their neighbours, with its legend; a timeline
 * as lanes of bars and marks under the months. A graph too large to be read whole is left to the page, which explores
 * it: its place carries the figure's index in the document.
 */
export const SvgFigures = fn({
  owner: "trame",
  implements: [PageFigures],
  serves: [ShownInAPage],
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
  serves: [ShownInAPage],
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
  serves: [ShownInAPage],
  deps: { rendering: Rendering, syntax: PageSyntax },
  body: ({ rendering, syntax }) => rendering(syntax),
})

/**
 * One renderer, its syntax a choice
 * A document is rendered by one renderer, which says each piece in words and finds where references lead; the syntax
 * it writes in is a port, chosen per audience, and the figures a second port, which the syntax reaches.
 */
export const OneRendererManySyntaxes = adr({
  owner: "trame",
  context: "Markdown, the terminal and the page each had their renderer: three walks of the same blocks, three ways of saying a status or an overlap, and the page's outside the graph.",
  consequences: "The words of a document are said once, by the renderer; a new format is a realization of a syntax port and a choice, without touching the renderer. Syntax and figures vary apart: Markdown with figures as text is two choices, not a new renderer. A project that declares a port of its own for another audience gives the same renderer its syntax, as the page does (since 0.5.0).",
  rejected: {
    "A renderer per format": "the walk and the words repeated, and drifting",
    "Figures in each syntax": "a syntax and a way of drawing tied together, which no longer vary apart",
  },
  serves: [RenderedOnce],
  appliedBy: [Rendering, FileRendering, TerminalRendering, PageRendering, MarkdownSyntax, PlainTextSyntax, HtmlSyntax, MermaidDiagrams, TextFigures, SvgFigures],
})

// The formats a command's documents are written in (documents 0.4.0) -----------------------------------------------

/**
 * Documents at a terminal
 * A format of std's answers: each document a command answers, printed in the syntax of the terminal.
 */
export const AnswersAtATerminal = fn({
  owner: "trame", implements: [AnswerFormats],
  serves: [RenderedOnce],
  constants: { word: { value: "text", meaning: "The word of the format, after --format" } },
  deps: { printed: TerminalRendering, media: MediaTypes },
  body: code.file<typeof import("./code/rendering/answers-at-a-terminal").default>("./code/rendering/answers-at-a-terminal.ts"),
})

/**
 * Documents in Markdown
 * A format of std's answers: each document a command answers, in the syntax of files, its references leading where
 * each card is.
 */
export const AnswersInMarkdown = fn({
  owner: "trame", implements: [AnswerFormats],
  serves: [RenderedOnce],
  constants: { word: { value: "md", meaning: "The word of the format, after --format" } },
  deps: { written: FileRendering, media: MediaTypes },
  body: code.file<typeof import("./code/rendering/answers-in-markdown").default>("./code/rendering/answers-in-markdown.ts"),
})
