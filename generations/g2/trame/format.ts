// Mise en mots des valeurs : unités, dates, pluriels. Pur (aucune dépendance) : le noyau, les rendus et la page s'en servent.

export type Unit = "duration" | "percent" | "chf"

const fmtNumber = (n: number) => String(Math.round(n * 100) / 100).replace(".", ",")

export function fmtUnit(v: unknown, unit?: Unit): string {
  if (typeof v !== "number") return String(v)
  if (unit === "duration") return v % 3600 === 0 ? `${v / 3600} h` : v % 60 === 0 ? `${v / 60} min` : `${fmtNumber(v)} s`
  if (unit === "percent") return `${fmtNumber(v * 100)} %`
  if (unit === "chf") return `${fmtNumber(v)} CHF`
  return fmtNumber(v)
}

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
  "septembre", "octobre", "novembre", "décembre"]
const SHORT = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]

/** « 1er novembre 2026 », « mars 2027 ». */
export function frDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  if (!m) return iso
  if (!d) return `${MONTHS[m - 1]} ${y}`
  return `${d === 1 ? "1er" : d} ${MONTHS[m - 1]} ${y}`
}

/** « 1er nov. », « mars 2027 » : pour les axes et les boutons. */
export function frDateShort(iso: string, withYear = false): string {
  const [y, m, d] = iso.split("-").map(Number)
  if (!m) return iso
  if (!d) return `${SHORT[m - 1]} ${y}`
  return `${d === 1 ? "1er" : d} ${SHORT[m - 1]}${withYear ? ` ${y}` : ""}`
}

/** Une date en mois seul (« 2027-03 ») compte pour le premier du mois. */
export const fullDate = (iso: string) => (iso.length === 7 ? `${iso}-01` : iso)

export const daysBetween = (from: string, to: string) =>
  Math.round((Date.parse(fullDate(to)) - Date.parse(fullDate(from))) / 86_400_000)

export const addDays = (iso: string, n: number) =>
  new Date(Date.parse(fullDate(iso)) + n * 86_400_000).toISOString().slice(0, 10)

export const plural = (n: number, one: string, many = one + "s") => `${n} ${n > 1 ? many : one}`

export const listFr = (parts: string[]) =>
  parts.length > 1 ? `${parts.slice(0, -1).join(", ")} et ${parts.at(-1)}` : parts.join("")

export const relDays = (from: string, to: string) => {
  const days = daysBetween(from, to)
  if (days === 0) return "aujourd'hui"
  return days > 0 ? `dans ${plural(days, "jour")}` : `il y a ${plural(-days, "jour")}`
}
