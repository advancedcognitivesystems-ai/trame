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
  appliedBy: [OurDocumentLanguage, DocumentsInOurLanguage, Language],
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
