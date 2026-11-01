/** Standard library · Measures */

import { unitsOf, type Quantity } from "#trame/kernel"
import { standard } from "#trame/kinds/standard"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { quantity } from "#trame/kinds/quantity"
import { CitedNotCopied } from "./product"

// Units of measure, calendar dates, versions and language tags, as their standards write them; and the quantities a
// product measures most, with their units: a duration, a ratio.

/**
 * Units of measure
 * A minute is 60 seconds and an hour 3,600 (the non-SI units accepted for use with the SI); a percent is a hundredth.
 */
export const UnitsOfMeasure = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "BIPM, The International System of Units (SI Brochure, 9th edition), Table 8 and § 5.4.7",
  url: "https://www.bipm.org/en/publications/si-brochure",
  constants: {
    minute: { value: 60, meaning: "The seconds of a minute" },
    hour: { value: 3600, meaning: "The seconds of an hour" },
    percent: { value: 100, meaning: "The hundredths of a whole: a ratio times 100 is a percentage" },
  },
})

/**
 * ISO 8601 dates
 * Calendar dates ("2026-10-17"): year, month and day in the extended format, in the Gregorian
 * calendar. Months go from 01 to 12; every month has at least 28 days.
 */
export const Iso8601 = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "ISO 8601-1:2019, calendar dates in the extended format (§ 5.2.2), in the Gregorian calendar",
  url: "https://www.iso.org/standard/70907.html",
  constants: {
    dateLength: { value: 10, meaning: "YYYY-MM-DD: the characters of a calendar date in the extended format" },
    yearLength: { value: 4, meaning: "YYYY: the characters of the year, which open a calendar date" },
    calendarDate: { value: "^\\d{4}-\\d{2}-\\d{2}$", meaning: "The pattern of a calendar date in the extended format: four digits, two, two, joined by hyphens" },
    firstMonth: { value: 1, meaning: "January" },
    lastMonth: { value: 12, meaning: "December" },
    firstDay: { value: 1, meaning: "The first day of a month" },
    shortestMonth: { value: 28, meaning: "The days that every month has (February, in a common year)" },
    timeDesignator: { value: "T", meaning: "Between the date and the time of day, in a date and time (§ 5.4.1)" },
  },
})

/**
 * Semantic versioning
 * A version as major.minor.patch: a change of major breaks what used the package; under 1.0.0, a change of minor does.
 */
export const SemanticVersioning = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Semantic Versioning 2.0.0, §§ 2, 4, 8",
  url: "https://semver.org/spec/v2.0.0.html",
  constants: {
    separator: { value: ".", meaning: "Separates the major, the minor and the patch" },
    initial: { value: 0, meaning: "The major of a package in its initial development: its minor then breaks what uses it" },
  },
})

/**
 * Language tags
 * A language written as a tag of subtags (fr, fr-CH, en-GB): the language first, then its script or its region,
 * separated by hyphens; Java's locales, and the voices of Android, write an underscore instead.
 */
export const LanguageTags = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "IETF BCP 47 (RFC 5646), Tags for Identifying Languages, § 2.1; Java SE, Locale.toString (the form Android reports)",
  url: "https://www.rfc-editor.org/rfc/rfc5646",
  constants: {
    separator: { value: "-", meaning: "Between the subtags of a language tag" },
    localeSeparator: { value: "_", meaning: "Between the language and the region of a locale, as Java and Android write it" },
  },
})

/** The language the symbols of units are written in: the same in most languages, as the SI writes them. */
export const SymbolsLanguage = decision<{ tag: string }>({ owner: "trame", value: { tag: "en-GB" } })

/**
 * Symbols of units
 * A number followed by the symbol of its unit, as the SI and the custom of each writes it: 15 min, 2 h, 30 s, 50%.
 */
export const UnitSymbols = catalog({
  owner: "trame",
  language: SymbolsLanguage,
  messages: () => ({
    second: (n: string) => `${n} s`,
    minute: (n: string) => `${n} min`,
    hour: (n: string) => `${n} h`,
    percent: (n: string) => `${n}%`,
  }),
})

/**
 * Time
 * How long something lasts, counted in seconds; a minute is 60 of them and an hour 3,600 (the units accepted for use
 * with the SI).
 */
export const Time = quantity({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "BIPM, The International System of Units (SI Brochure, 9th edition), Tables 2 and 8",
  url: "https://www.bipm.org/en/publications/si-brochure",
  units: { second: 1, minute: 60, hour: 3600 },
  written: UnitSymbols,
})

/** A value of time, counted in seconds. */
export type Duration = Quantity<typeof Time>
/** A duration from a number of seconds, of minutes, of hours: `min(15)`. */
export const { second: s, minute: min, hour: h } = unitsOf(Time)

/**
 * Ratio
 * A part of a whole, a number without dimension (a half is 0.5), written as a percentage: a hundredth is one percent.
 */
export const Ratio = quantity({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "BIPM, The International System of Units (SI Brochure, 9th edition), § 5.4.7",
  url: "https://www.bipm.org/en/publications/si-brochure",
  units: { percent: 0.01 },
  ratio: true,
  written: UnitSymbols,
})

/** A ratio: a part of a whole, which multiplies any quantity without changing what it measures. */
export type Share = Quantity<typeof Ratio>
/** A ratio from a percentage: `pct(50)` is a half. */
export const { percent: pct } = unitsOf(Ratio)
