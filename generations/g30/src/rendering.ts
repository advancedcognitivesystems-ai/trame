/** Trame · Rendering */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { decision } from "../kinds/decision"
import { adr } from "../kinds/adr"
import { RenderingWithoutGraph } from "./architecture"
import { ExecutableSpecification } from "./product"
import { Palette } from "./appearance"
import {
  Blocks, Heading, ListItem, BlockQuote, CodeBlock, Emphasis, StrongEmphasis, CodeSpan, Link, RelativeReference,
  TableCell, Table, Anchor, Details, Small,
} from "./markdown"
import {
  Flowchart, MermaidNode, Subgraph, MermaidLink, ClassDefinition, NodeStyle,
  Gantt, GanttSection, GanttTask, Milestone, MermaidBlock,
} from "./mermaid"
import { TextRendering, MermaidFigures, Punctuation } from "./documents"
import { TerminalText, TerminalColumns, PaddedCell, Columns, ItemLine, CodeLines, TerminalLines, TreeBranch, PathStep } from "./text"
import { References } from "./engine"
import { ReferenceSyntax } from "./conventions"
import { Counts, Sequences, Texts, ValueTypes } from "./algebra"
import { Dates, Lists, RenderingMessages } from "./messages"

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
  deps: { values: ValueTypes, syntax: ReferenceSyntax, slots: SentenceSlots, dates: Dates, lists: Lists, texts: Texts, messages: RenderingMessages },
  body: code.file<typeof import("./code/rendering/common").default>("./code/rendering/common.ts"),
})

/**
 * Figure rendering
 * A figure as a Mermaid diagram, as "Figures: Mermaid diagrams in documents" decides: it composes the elements of the
 * Mermaid spec, with the colours of the palette.
 */
export const Diagrams = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    figures: MermaidFigures, palette: Palette, small: Small,
    flowchart: Flowchart, node: MermaidNode, subgraph: Subgraph, link: MermaidLink, classDefinition: ClassDefinition, nodeStyle: NodeStyle,
    gantt: Gantt, ganttSection: GanttSection, ganttTask: GanttTask, milestone: Milestone,
    counts: Counts, dates: Dates, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/mermaid").default>("./code/rendering/mermaid.ts"),
})

/**
 * Markdown rendering
 * The text rendering of documents ("Text rendering of documents: Markdown"). It composes the elements of the Markdown
 * spec, and puts figures in mermaid blocks: it writes no syntax mark itself.
 */
export const Markdown = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { values: ValueTypes,
    common: Common, references: References, textRendering: TextRendering, punctuation: Punctuation, diagrams: Diagrams, mermaidBlock: MermaidBlock,
    blocks: Blocks, heading: Heading, listItem: ListItem, blockQuote: BlockQuote, codeBlock: CodeBlock,
    emphasis: Emphasis, strong: StrongEmphasis, codeSpan: CodeSpan, link: Link, relativeReference: RelativeReference,
    tableCell: TableCell, table: Table, anchor: Anchor, details: Details,
    counts: Counts, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/markdown").default>("./code/rendering/markdown.ts"),
})

/**
 * Text rendering
 * What the terminal shows, in the format the decision "Terminal text" defines: the body composes the syntax elements of
 * the module text, with the punctuation of documents.
 */
export const Text = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    common: Common, layout: TerminalText, columns: TerminalColumns, punctuation: Punctuation,
    cell: PaddedCell, table: Columns, item: ItemLine, code: CodeLines, lines: TerminalLines, branch: TreeBranch, step: PathStep,
    dates: Dates, counts: Counts, sequences: Sequences, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/text").default>("./code/rendering/text.ts"),
})

/**
 * Kinds and views say what; renderers say how
 * Kinds and views describe meaning only, in an intermediate format of blocks and inlines (values with their unit,
 * references, statuses, cards, figures); renderers choose the look: Markdown with Mermaid figures, terminal text, HTML.
 */
export const MeaningThenLook = adr({
  owner: "trame",
  context: "The same answer is read in a review, in a terminal, in a page and by an agent; a kind written for one format would be wrong in the others.",
  consequences: "Three points of extension: a kind says what a node is, a view which question is asked, a renderer in which format the answer comes. Renderers compose the syntax elements of their format and never read the graph.",
  rejected: { "Kinds that write Markdown": "one format only, and the page would have to parse it back" },
  serves: [ExecutableSpecification],
  appliedBy: [Markdown, Text, Diagrams, Common, RenderingWithoutGraph],
})
