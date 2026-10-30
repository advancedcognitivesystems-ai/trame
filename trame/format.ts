// Dates, lists and counts in the words of a language: the caller always says which (a BCP 47 tag), from the graph's
// Language decision or the catalog it writes; nothing here presumes one. Pure (no dependencies): the kernel, the
// renderers and the page use it.

/** The units a value of the graph is written in: a duration, a percentage, an amount in Swiss francs. */
export const Unit = { duration: "duration", percent: "percent", chf: "chf" } as const
export type Unit = (typeof Unit)[keyof typeof Unit]

const parts = (iso: string) => iso.split("-").map(Number)
const utc = (y: number, m: number, d = 1) => new Date(Date.UTC(y, m - 1, d))

/** One formatter per language and options: making one costs far more than formatting with it. */
const formatters = new Map<string, Intl.DateTimeFormat>()
const formatter = (language: string, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat => {
  const key = JSON.stringify([language, options])
  const known = formatters.get(key)
  if (known) return known
  const made = new Intl.DateTimeFormat(language, options)
  formatters.set(key, made)
  return made
}

/** "1 November 2026", "March 2027" (in the given language). */
export function formatDate(iso: string, language: string): string {
  const [y, m, d] = parts(iso)
  if (!m) return iso
  const options: Intl.DateTimeFormatOptions = d
    ? { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
    : { month: "long", year: "numeric", timeZone: "UTC" }
  return formatter(language, options).format(utc(y, m, d))
}

/** "1 Nov", "Mar 2027": for axes and buttons. */
export function formatDateShort(iso: string, withYear: boolean, language: string): string {
  const [y, m, d] = parts(iso)
  if (!m) return iso
  const options: Intl.DateTimeFormatOptions = !d
    ? { month: "short", year: "numeric", timeZone: "UTC" }
    : withYear ? { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" } : { day: "numeric", month: "short", timeZone: "UTC" }
  return formatter(language, options).format(utc(y, m, d))
}

/**
 * A text written at one date, written at another: the day as it is in the intermediate format and as the documents write
 * it, replaced. A page of several dates carries once what differs only by the date of the graph.
 */
export function movedTo(text: string, from: string, to: string, language: string): string {
  const forms = (iso: string) => [iso, formatDate(iso, language), formatDateShort(iso, true, language), formatDateShort(iso, false, language)]
  const [was, is] = [forms(from), forms(to)]
  return was.reduce((written, form, i) => written.split(form).join(is[i]), text)
}

/** The name of a month, short: "Oct" for "2026-10" or "2026-10-17". */
export function formatMonth(iso: string, language: string): string {
  const [y, m] = parts(iso)
  if (!m) return iso
  return formatter(language, { month: "short", timeZone: "UTC" }).format(utc(y, m, 1))
}

/** A month-only date ("2027-03") counts as the first of the month. */
export const fullDate = (iso: string) => (iso.length === 7 ? `${iso}-01` : iso)

export const daysBetween = (from: string, to: string) =>
  Math.round((Date.parse(fullDate(to)) - Date.parse(fullDate(from))) / 86_400_000)

export const addDays = (iso: string, n: number) =>
  new Date(Date.parse(fullDate(iso)) + n * 86_400_000).toISOString().slice(0, 10)

/** The forms of a noun by plural category (CLDR): every language has other; English adds one; others have two, few, many… */
export type PluralForms = { other: string } & Partial<Record<Intl.LDMLPluralRule, string>>

/**
 * A count and the form of its noun the rules of a language choose: `plurals("en-GB")(3, { one: "error", other: "errors" })`
 * is "3 errors". A catalog says the language it is written in; nothing here presumes one.
 */
export const plurals = (language: string) => {
  const rules = new Intl.PluralRules(language)
  return (n: number, forms: PluralForms): string => `${n} ${forms[rules.select(n)] ?? forms.other}`
}

/** How a list reads: with the words of a conjunction ("A, B and C"), or as a plain enumeration ("A, B, C"). */
export const ListStyle = { conjunction: "conjunction", enumeration: "unit" } as const
export type ListStyle = (typeof ListStyle)[keyof typeof ListStyle]

/** The items of a list with the words that join them in a language ("A, B and C"); the items come back as they are. */
const listFormats = new Map<string, Intl.ListFormat>()
export function listParts<T>(items: readonly T[], language: string, style: ListStyle = ListStyle.conjunction): (T | string)[] {
  const key = JSON.stringify([language, style])
  const format = listFormats.get(key) ?? new Intl.ListFormat(language, { type: style })
  listFormats.set(key, format)
  return format
    .formatToParts(items.map((_, i) => String(i)))
    .map((p) => (p.type === "element" ? items[Number(p.value)] : p.value))
}

