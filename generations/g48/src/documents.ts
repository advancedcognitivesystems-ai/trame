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
  /** Gantt charts: formats of the dates, and which dates become milestones (their words are the catalog's). */
  gantt: { dateFormat: string; axisFormat: string; milestones: KeyOf<typeof DateRole>[] }
}

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
 * Punctuation of documents
 * The marks that separate the parts of a line, the same in every rendering (the terminal, Markdown, the page): a middle
 * dot (U+00B7) between parts that are not the items of a list, such as the facts of a card's head or the counts of a
 * summary; a comma between the items of a list; a leftwards arrow (U+2190) from a name to the node that gives it; an
 * aside in parentheses after what it qualifies. How a value reads (a list, a map, a record) is said by the catalog.
 */
export const Punctuation = decision<{ parts: string; items: string; givenBy: string; opensAside: string; closesAside: string }>({
  owner: "trame",
  value: { parts: " · ", items: ", ", givenBy: " ← ", opensAside: " (", closesAside: ")" },
})

/**
 * Settings of the documents
 * How far the timeline reaches before the first date it shows and after the last one, in days; how many examples, most
 * frequent values and repeated values the catalogue of literals shows; how many days before it expires an assumption
 * warns. The kinds and the views receive them from the engine.
 */
export const LanguageSettings = decision<{
  timeline: { before: number; after: number }
  catalogue: { examples: number; frequent: number; repeated: number }
  assumption: { warnWithin: number }
}>({
  owner: "trame",
  value: {
    timeline: { before: 14, after: 30 },
    catalogue: { examples: 3, frequent: 5, repeated: 40 },
    assumption: { warnWithin: 60 },
  },
})

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
