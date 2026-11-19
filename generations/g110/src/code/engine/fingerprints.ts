// The fingerprint of a value: enough to see that it changed. Its JSON, keys in order whatever order they were written
// in, hashed into 32 bits (multiplicative hashing), written in hexadecimal on a fixed number of digits.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Texts, ValueTypes } from "#std/algebra"

export interface Deps {
  hash: { multiplier: number; start: number }
  ecma: { firstIndex: number; toUnsigned32: number }
  values: ProvidedBy<typeof ValueTypes>
  texts: ProvidedBy<typeof Texts>
  radix: number
  digits: number
  pad: string
}

const body = ({ hash: { multiplier, start }, ecma: { firstIndex, toUnsigned32 }, values, texts, radix, digits, pad }: Deps) => {
  /** The same value, its keys in order at every depth. */
  const canonical = (v: unknown): unknown =>
    Array.isArray(v) ? v.map(canonical)
    : v !== null && values.isObject(v) ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonical((v as Record<string, unknown>)[k])]))
    : v
  return {
    /** The fingerprint of a value: two values written alike, keys in any order, have the same. */
    of: (v: unknown): string => {
      const text = JSON.stringify(canonical(v)) ?? texts.empty
      const h = [...text].reduce((acc, c) => Math.imul(acc ^ c.charCodeAt(firstIndex), multiplier) >>> toUnsigned32, start)
      return h.toString(radix).padStart(digits, pad)
    },
  }
}

export type Api = ReturnType<typeof body>
export default body
