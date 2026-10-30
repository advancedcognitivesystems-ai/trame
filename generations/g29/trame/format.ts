// Values in words: units, dates, plurals. Pure (no dependencies): the kernel, the renderers and the page use it.
// Dates follow a language tag (BCP 47): the engine passes the one its graph decides; kinds and views get the default.

export type Unit = "duration" | "percent" | "chf"

/** The language tag used when none is given. */
export const DEFAULT_LANGUAGE = "en-GB"

const formatNumber = (n: number) => String(Math.round(n * 100) / 100)

/** "15 min", "2 h", "50%", "CHF 20". */
export function formatUnit(v: unknown, unit?: Unit): string {
  if (typeof v !== "number") return String(v)
  if (unit === "duration") return v % 3600 === 0 ? `${v / 3600} h` : v % 60 === 0 ? `${v / 60} min` : `${formatNumber(v)} s`
  if (unit === "percent") return `${formatNumber(v * 100)}%`
  if (unit === "chf") return `CHF ${formatNumber(v)}`
  return formatNumber(v)
}

const parts = (iso: string) => iso.split("-").map(Number)
const utc = (y: number, m: number, d = 1) => new Date(Date.UTC(y, m - 1, d))

/** "1 November 2026", "March 2027" (in the given language). */
export function formatDate(iso: string, language = DEFAULT_LANGUAGE): string {
  const [y, m, d] = parts(iso)
  if (!m) return iso
  const options: Intl.DateTimeFormatOptions = d
    ? { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
    : { month: "long", year: "numeric", timeZone: "UTC" }
  return new Intl.DateTimeFormat(language, options).format(utc(y, m, d))
}

/** "1 Nov", "Mar 2027": for axes and buttons. */
export function formatDateShort(iso: string, withYear = false, language = DEFAULT_LANGUAGE): string {
  const [y, m, d] = parts(iso)
  if (!m) return iso
  const options: Intl.DateTimeFormatOptions = !d
    ? { month: "short", year: "numeric", timeZone: "UTC" }
    : withYear ? { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" } : { day: "numeric", month: "short", timeZone: "UTC" }
  return new Intl.DateTimeFormat(language, options).format(utc(y, m, d))
}

/** The name of a month, short: "Oct" for "2026-10" or "2026-10-17". */
export function formatMonth(iso: string, language = DEFAULT_LANGUAGE): string {
  const [y, m] = parts(iso)
  if (!m) return iso
  return new Intl.DateTimeFormat(language, { month: "short", timeZone: "UTC" }).format(utc(y, m, 1))
}

/** A month-only date ("2027-03") counts as the first of the month. */
export const fullDate = (iso: string) => (iso.length === 7 ? `${iso}-01` : iso)

export const daysBetween = (from: string, to: string) =>
  Math.round((Date.parse(fullDate(to)) - Date.parse(fullDate(from))) / 86_400_000)

export const addDays = (iso: string, n: number) =>
  new Date(Date.parse(fullDate(iso)) + n * 86_400_000).toISOString().slice(0, 10)

/** "1 error", "3 errors", "0 errors". */
export const plural = (n: number, one: string, many = one + "s") => `${n} ${n === 1 ? one : many}`

/** The items of a list with the words that join them in a language ("A, B and C"); the items come back as they are. */
/** How a list reads: with the words of a conjunction ("A, B and C"), or as a plain enumeration ("A, B, C"). */
export const ListStyle = { conjunction: "conjunction", enumeration: "unit" } as const
export type ListStyle = (typeof ListStyle)[keyof typeof ListStyle]

export function listParts<T>(items: readonly T[], language = DEFAULT_LANGUAGE, style: ListStyle = ListStyle.conjunction): (T | string)[] {
  return new Intl.ListFormat(language, { type: style })
    .formatToParts(items.map((_, i) => String(i)))
    .map((p) => (p.type === "element" ? items[Number(p.value)] : p.value))
}

/** "a, b and c". */
export const joinList = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items.at(-1)}` : items.join("")

/** "today", "in 3 days", "3 days ago". */
export const relativeDays = (from: string, to: string) => {
  const days = daysBetween(from, to)
  if (days === 0) return "today"
  return days > 0 ? `in ${plural(days, "day")}` : `${plural(-days, "day")} ago`
}
