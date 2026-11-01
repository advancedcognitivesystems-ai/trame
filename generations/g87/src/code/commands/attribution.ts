// A record's seal, by attribution: the SHA-256 of what it says, its keys in order at every depth, its seal left out.

import type { BodyOf } from "../../../trame/kernel"
import type { Attribution } from "../../shipping"

const body: BodyOf<typeof Attribution> = ({ hashing, sha256, encodings, values }) => {
  /** The same value, its keys in order at every depth. */
  const canonical = (v: unknown): unknown =>
    Array.isArray(v) ? v.map(canonical)
    : v !== null && values.isObject(v) ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonical((v as Record<string, unknown>)[k])]))
    : v
  return {
    seal: (record) => {
      const { seal: _, ...said } = record
      return hashing.createHash(sha256.algorithm).update(JSON.stringify(canonical(said))).digest(encodings.hex)
    },
  }
}

export default body
