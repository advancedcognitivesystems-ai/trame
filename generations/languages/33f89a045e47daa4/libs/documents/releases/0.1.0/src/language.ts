/** Documents · Language */

// The language the documents are written in is the engine's: the views speak it (their words, the engine's g.lib), so
// what renders them writes its dates, its lists and its punctuation (E3, decided 26 November). The library declares it
// as a port, which a project realizes with its decision of the language (Trame: its Language); the engine's g.lib, the
// renderers and the page all read these nodes: one source.

import { formatDate, formatDateShort, formatMonth, listParts, ListStyle } from "#trame/kernel"
import { port } from "#trame/kinds/port"
import { fn } from "#trame/kinds/function"
import { decision } from "#trame/kinds/decision"
import { Counts, ValueTypes } from "#std/algebra"
import { RenderedOnce } from "./product"

/**
 * The marks of a language between the parts of a line: a middle dot between parts, a comma between items, an arrow from
 * a name to what gives it, an aside in parentheses, a semicolon between clauses, a colon after a label, an equals sign
 * between a name and its value, a dash for nothing.
 */
export interface Marks {
  parts: string
  items: string
  givenBy: string
  opensAside: string
  closesAside: string
  clauses: string
  introduces: string
  equals: string
  absent: string
}

/** A language the documents are written in: its tag (BCP 47, as the platform's formatting reads it), and its marks. */
export interface WrittenLanguage {
  tag: string
  punctuation: Marks
}

/**
 * The language of the documents
 * The language the documents are written in, which the views speak: its tag and its punctuation. A project realizes it
 * with its decision of the language; another language is another realization, with its catalogs.
 */
export const DocumentLanguage = port<WrittenLanguage>({ owner: "trame", declaredEffects: [] })

/**
 * Dates
 * Writes a date of the graph (an ISO day, "2026-10-17") as people read it in the language of the documents.
 */
export const Dates = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { language: DocumentLanguage },
  body: ({ language }) => ({
    /** "17 October 2026" */
    format: (iso: string) => formatDate(iso, language.tag),
    /** "17 Oct 2026", or "17 Oct" without the year. */
    formatShort: (iso: string, withYear = false) => formatDateShort(iso, withYear, language.tag),
    /** "Oct" */
    month: (iso: string) => formatMonth(iso, language.tag),
  }),
})

/**
 * Lists
 * Joins the items of a list as people write it in the language of the documents: "A, B and C". The items stay as they
 * are (a reference stays a reference); only the words between them are added.
 */
export const Lists = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { language: DocumentLanguage },
  body: ({ language }) => ({
    /** The items, with the words of a conjunction between them. */
    conjunction: <T>(items: readonly T[]) => listParts(items, language.tag),
    /** The items, as a plain enumeration of the language. */
    enumeration: <T>(items: readonly T[]) => listParts(items, language.tag, ListStyle.enumeration),
  }),
})

/**
 * Punctuation
 * The marks of the language of the documents that separate the parts of a line, the same in every rendering (the
 * terminal, Markdown, the page). How a value reads (a list, a map, a record) is said by a catalog.
 */
export const Punctuation = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { language: DocumentLanguage },
  body: ({ language }) => language.punctuation,
})

/**
 * How a number is written
 * A value of the graph is written in decimal digits, with at most two decimals.
 */
export const NumberDisplay = decision<{ base: number; decimals: number }>({
  owner: "trame",
  value: { base: 10, decimals: 2 },
})

/**
 * Values with their units
 * A number written in decimal digits; a value of a quantity of the graph in the largest of its units it makes a whole
 * number of, in the words of that unit. A number of no quantity has no unit.
 */
export const Units = fn({
  owner: "trame",
  serves: [RenderedOnce],
  deps: { display: NumberDisplay, counts: Counts, values: ValueTypes },
  body: ({ display, counts, values }) => {
    const scale = Math.pow(display.base, display.decimals)
    const number = (n: number) => String(Math.round(n * scale) / scale)
    return {
      /** A number in decimal digits, at most two decimals; a value that is not a number, as it is. */
      format: (v: unknown): string => (values.isNumber(v) ? number(v) : String(v)),
      /**
       * A number of a quantity of the graph, given its units from the largest: written in the largest one it makes a
       * whole number of, in the smallest otherwise, with the words of that unit (its message, when it has one).
       */
      inUnits: (v: number, units: readonly (readonly [string, number])[], unitWords: Readonly<Record<string, unknown>>): string => {
        // Whole in a unit: a whole number once written, and not a value that only rounds to nothing.
        const fits = units.filter(([, factor]) => {
          const written = Math.round((v / factor) * scale) / scale
          return Number.isInteger(written) && (written !== counts.zero || v === counts.zero)
        })
        const [chosen] = [...fits, ...[...units].reverse()]
        if (!chosen) return number(v)
        const [name, factor] = chosen
        const write = unitWords[name]
        return values.isFunction(write) ? String((write as (n: string) => unknown)(number(v / factor))) : number(v / factor)
      },
    }
  },
})
