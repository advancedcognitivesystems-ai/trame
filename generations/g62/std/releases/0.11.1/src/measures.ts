/** Standard library · Measures */

import { standard } from "../../../../kinds/standard"
import { CitedNotCopied } from "./product"

// Units of measure, calendar dates, versions and language tags, as their standards write them.

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
