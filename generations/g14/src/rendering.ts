/** Trame · Rendering */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
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
import { TextRendering, MermaidFigures, TerminalColumns } from "./documents"
import { References } from "./engine"
import { Counts, Sequences, Texts } from "./algebra"
import { Dates, Lists, RenderingMessages } from "./messages"

/**
 * Common rendering
 * What the renderers share: a value as text, a resolution, where each node lives.
 */
export const Common = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { dates: Dates, lists: Lists, texts: Texts, messages: RenderingMessages },
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
  deps: {
    common: Common, references: References, textRendering: TextRendering, diagrams: Diagrams, mermaidBlock: MermaidBlock,
    blocks: Blocks, heading: Heading, listItem: ListItem, blockQuote: BlockQuote, codeBlock: CodeBlock,
    emphasis: Emphasis, strong: StrongEmphasis, codeSpan: CodeSpan, link: Link, relativeReference: RelativeReference,
    tableCell: TableCell, table: Table, anchor: Anchor, details: Details,
    counts: Counts, texts: Texts, messages: RenderingMessages,
  },
  body: code.file<typeof import("./code/rendering/markdown").default>("./code/rendering/markdown.ts"),
})

/**
 * Text rendering
 * What the terminal shows.
 */
export const Text = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { common: Common, dates: Dates, columns: TerminalColumns, counts: Counts, sequences: Sequences, texts: Texts, messages: RenderingMessages },
  body: code.file<typeof import("./code/rendering/text").default>("./code/rendering/text.ts"),
})
