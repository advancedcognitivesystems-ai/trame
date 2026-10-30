/** Trame · Documents */

import { decision } from "../kinds/decision"
import type { DateRole, EdgeRole, KeyOf, Nature, ProvidedBy, Shape } from "../trame/kernel"
import type { MermaidLink, Flowchart, StyleProperties } from "./mermaid"

type Direction = Parameters<ProvidedBy<typeof Flowchart>>[0]
type Stroke = Parameters<ProvidedBy<typeof MermaidLink>>[2]
type Style = Parameters<ProvidedBy<typeof StyleProperties>>[0]

/**
 * How Trame draws its figures, in the terms of the Mermaid spec. Vocabulary values (a shape, a nature, a role, a date
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
  /** Gantt charts: formats of the dates, labels, and which dates become milestones. */
  gantt: { dateFormat: string; axisFormat: string; title: string; period: string; today: string; milestones: KeyOf<typeof DateRole>[] }
}

/**
 * Text rendering of documents: Markdown
 * Trame's documents are written in Markdown: CommonMark, with GFM tables. They read as they are in a terminal or an
 * editor, compare line by line in a review, and forges (GitHub, GitLab) as well as most editors display them formatted.
 * HTML serves only for anchors and collapsible blocks. It is Trame's text rendering, hence the extension of the
 * documents in the layout; the page is its HTML rendering, the terminal its plain-text rendering.
 */
export const TextRendering = decision<{ titleLevel: number; sectionLevel: number }>({
  owner: "trame",
  value: { titleLevel: 1, sectionLevel: 2 },
  rejected: {
    "HTML only": "unreadable as plain text, and a review no longer compares lines",
    "AsciiDoc or reStructuredText": "less well displayed by forges and editors",
    "Plain text": "no links, no tables, no figures",
  },
})

/**
 * Figures: Mermaid diagrams in documents
 * A figure (the layers of the graph, the tree of an impact, a timeline) is written in the Markdown document as a
 * Mermaid diagram, in a "mermaid" block: GitHub, GitLab and most editors draw it, and it stays text, which a review
 * compares line by line. The value says how Trame draws its figures: the reading direction of each shape, the stroke
 * of each edge, the look of a node that is history or not in force, the Gantt chart. The colours of the statuses come
 * from the palette.
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
      dateFormat: "YYYY-MM-DD", axisFormat: "%d.%m", title: "Around", period: "In force", today: "Date of the graph",
      milestones: ["deadline", "review"],
    },
  },
  rejected: {
    "Images (SVG, PNG)": "to regenerate at every change, and silent in a text review",
    "Graphviz (DOT)": "neither GitHub nor GitLab draws it",
    "PlantUML": "needs a rendering server",
  },
})
