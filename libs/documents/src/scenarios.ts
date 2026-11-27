/** Documents · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { adr } from "#trame/kinds/adr"
import { fn } from "#trame/kinds/function"
import { Strategy } from "#std/patterns"
import { RenderedOnce } from "./product"
import { DocumentLanguage, Dates, Lists, Punctuation, Units, WordsLanguage, type WrittenLanguage } from "./language"

/**
 * Test
 * Where the library's scenarios run: the documents written in British English.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * The language of the scenarios
 * British English, with the marks Trame writes its documents with.
 */
export const ScenarioLanguage = decision<WrittenLanguage>({
  owner: "trame",
  value: {
    tag: "en-GB",
    punctuation: { parts: " · ", items: ", ", givenBy: " ← ", opensAside: " (", closesAside: ")", clauses: "; ", introduces: ": ", equals: " = ", absent: "—" },
  },
})

/**
 * Written in the language of the scenarios
 * The language of the documents, in the library's scenarios: the one decided for them.
 */
export const WrittenForTheScenarios = fn({
  owner: "trame", implements: [DocumentLanguage],
  deps: { language: ScenarioLanguage },
  body: ({ language }) => language,
})

/**
 * The scenarios' language
 * In the library's scenarios, the documents are written in the language decided for them.
 */
export const InTheScenariosLanguage = binding({
  owner: "trame",
  chooses: [WrittenForTheScenarios],
  environments: [Test],
  follows: [Strategy],
  serves: [RenderedOnce],
  context: "A project writes its documents in the language its engine speaks: the library's scenarios decide one of their own, the one Trame speaks.",
})

/**
 * What the scenarios read and expect
 * A day and how it is written, long and short; three items and how a conjunction joins them; numbers and how they are
 * written, alone and in a quantity's units (a minute, sixty seconds).
 */
export const Expected = decision<{
  day: string; long: string; short: string; shortWithYear: string; month: string
  items: string[]; joined: string[]
  number: number; written: string
  units: [string, number][]; whole: number; inLarger: string; notWhole: number; inSmaller: string
}>({
  owner: "trame",
  value: {
    day: "2026-10-17", long: "17 October 2026", short: "17 Oct", shortWithYear: "17 Oct 2026", month: "Oct",
    items: ["A", "B", "C"], joined: ["A", ", ", "B", " and ", "C"],
    number: 0.666, written: "0.67",
    units: [["min", 60], ["s", 1]], whole: 120, inLarger: "2", notWhole: 90, inSmaller: "90",
  },
})

/**
 * What the scenarios check
 */
export const ScenarioWords = catalog({
  owner: "trame",
  language: WordsLanguage,
  messages: () => ({
    datesWritten: (day: string) => `${day} is written as people read it, long and short, and its month`,
    listsJoined: () => "Three items are joined by the words of a conjunction, as they are",
    punctuationGiven: () => "The marks between the parts of a line are those of the language of the documents",
    numbersWritten: () => "A number is written with two decimals at most; a quantity in the largest of its units it makes a whole number of",
  }),
})

/**
 * The language of the documents, written
 * Dates as people read them, lists joined, the marks of the language and numbers in their units: what the renderers
 * write in every place a document is read.
 */
export const LanguageWritten = scenario({
  owner: "trame",
  verifies: [Dates, Lists, Punctuation, Units, WrittenForTheScenarios],
  env: Test,
  deps: { dates: Dates, lists: Lists, punctuation: Punctuation, units: Units, language: ScenarioLanguage, expected: Expected, checks: ScenarioWords },
  body: ({ dates, lists, punctuation, units, language, expected: x, checks }) => async (check) => {
    check(checks.datesWritten(x.day),
      dates.format(x.day) === x.long && dates.formatShort(x.day) === x.short && dates.formatShort(x.day, true) === x.shortWithYear && dates.month(x.day) === x.month)
    check(checks.listsJoined(), JSON.stringify(lists.conjunction(x.items)) === JSON.stringify(x.joined))
    check(checks.punctuationGiven(), JSON.stringify(punctuation) === JSON.stringify(language.punctuation))
    check(checks.numbersWritten(),
      units.format(x.number) === x.written && units.inUnits(x.whole, x.units, {}) === x.inLarger && units.inUnits(x.notWhole, x.units, {}) === x.inSmaller)
  },
})

/**
 * The documents speak the engine's language
 * The views speak the language of the engine that compiles a graph: what renders their documents writes its dates, its
 * lists, its marks and its numbers, through a port each project realizes with its decision of the language (Trame with
 * its own), and the library's scenarios with one decided for them.
 */
export const TheEnginesLanguage = adr({
  owner: "trame",
  context: "A document says, in one line, what a view said and what a renderer wrote around it: two languages, or two ways of writing a date, would show in the same sentence.",
  consequences: "The engine's g.lib, the renderers and the page read the same nodes; another language is another realization, with its catalogs.",
  rejected: { "The library's own language, fixed": "a project whose engine spoke another would get documents in two languages" },
  serves: [RenderedOnce],
  appliedBy: [Dates, Lists, Punctuation, Units, InTheScenariosLanguage],
})
