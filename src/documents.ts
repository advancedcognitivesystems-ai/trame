/** Trame · Documents */

import { decision } from "../kinds/decision"
import { fn } from "../kinds/function"
import { adr } from "../kinds/adr"
import { binding } from "../kinds/binding"
import { DocumentLanguage } from "#documents/language"
import { Strategy } from "#std/patterns"
import { Local, Session, Test, Browser } from "./architecture"
import { Language } from "./messages"
import { UnicodeEscape, EcmaScript } from "#std/ecmascript"
import { InvisibleCharacters } from "#std/text"
import { Counts, Texts, ValueTypes } from "#std/algebra"
import { SingleSource } from "./product"
import { type DateRole, type EdgeRole, type KeyOf, type Nature, type ProvidedBy, type Shape } from "../trame/kernel"
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
 * The documents in Trame's language
 * The language the documents are written in (libs/documents' port, since g129): Trame's, with its tag and its marks,
 * which the views speak; the dates, the lists, the punctuation and the units of the library write in it.
 */
export const OurDocumentLanguage = fn({
  owner: "trame", implements: [DocumentLanguage],
  deps: { language: Language },
  body: ({ language }) => language,
})

/**
 * Documents written in Trame's language
 * Wherever the engine, its commands and its page run, the documents are written in Trame's language.
 */
export const DocumentsInOurLanguage = binding({
  owner: "trame",
  chooses: [OurDocumentLanguage],
  environments: [Local, Session, Test, Browser],
  follows: [Strategy],
  serves: [SingleSource],
  context: "The views speak the engine's language: what renders their documents, on a machine, in the scenarios or in the page, writes its dates, lists and marks.",
})

/**
 * The punctuation is the language's
 * The marks between the parts of a line are written in the decided language, with its tag; the renderers, the page,
 * the kinds and the views receive those of the language decided.
 */
export const PunctuationOfTheLanguage = adr({
  owner: "trame",
  context: "The marks were a decision of their own, the same whatever the language, and the kinds and the views wrote their own (a comma between items, a middle dot between parts, a dash for nothing, a semicolon between clauses): another language could not change them.",
  consequences: "The Language decision holds the marks of the language with its tag; Punctuation gives those of the language decided to the renderers, the page and, through the engine, to the kinds and the views. Another language is another value of Language, with its catalogs. A sentence keeps its own punctuation: it is in a catalog, written in its language.",
  rejected: {
    "A decision of marks keyed by language tag": "two places to change for one language, and a tag written twice",
    "The marks in every catalog": "the renderers, the page and the views share them: each catalog would repeat them",
  },
  serves: [SingleSource],
  appliedBy: [OurDocumentLanguage, Language],
})

/**
 * Settings of the documents
 * How far the timeline reaches before the first date it shows and after the last one, in days; how many examples, most
 * frequent values and repeated values the catalogue of literals shows, and the categories it leaves out of the repeated
 * values (a separator repeats by nature); how many days before it expires an assumption warns, and before its end an
 * amendment warns its owner, so they prolong it or let it end knowingly; the percentiles a service
 * level objective may hold (below the median, an objective would say that most measures may miss it). The kinds and the
 * views receive them from the engine.
 */
export const LanguageSettings = decision<{
  timeline: { before: number; after: number }
  catalogue: { examples: number; frequent: number; repeated: number; unrepeated: readonly string[] }
  assumption: { warnWithin: number }
  amendment: { warnWithin: number }
  slo: { percentile: readonly [number, number] }
}>({
  owner: "trame",
  value: {
    timeline: { before: 14, after: 30 },
    catalogue: { examples: 3, frequent: 5, repeated: 40, unrepeated: ["separator"] },
    assumption: { warnWithin: 60 },
    amendment: { warnWithin: 30 },
    slo: { percentile: [50, 100] },
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

/**
 * Visible text
 * A text shown so that every character can be seen: in quotes as JSON writes it, the characters JSON leaves as they are
 * written as escapes; or as it is, when nothing in it hides.
 */
export const VisibleText = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { escape: UnicodeEscape, invisible: InvisibleCharacters, ecma: EcmaScript, texts: Texts },
  body: ({ escape, invisible, ecma, texts }) => {
    const hidden = new RegExp(invisible.hidden)
    const leftByJson = new RegExp(invisible.leftByJson)
    const escaped = (c: string) => escape.prefix + c.charCodeAt(ecma.firstIndex).toString(escape.radix).padStart(escape.digits, escape.pad)
    const quoted = (text: string) => texts.concat([...JSON.stringify(text)].map((c) => (leftByJson.test(c) ? escaped(c) : c)))
    return { quoted, visible: (text: string) => (hidden.test(text) ? quoted(text) : text) }
  },
})
