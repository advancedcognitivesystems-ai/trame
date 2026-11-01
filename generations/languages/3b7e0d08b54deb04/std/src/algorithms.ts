/** Standard library · Algorithms */

import { code } from "#trame/kernel"
import { standard } from "#trame/kinds/standard"
import { fn } from "#trame/kinds/function"
import { CitedNotCopied, SharedOperations } from "./product"
import { EcmaScript } from "./ecmascript"
import { Counts } from "./algebra"

// Algorithms described elsewhere, with their constants: a reproducible generator, a hash of a text, the search for a
// cycle, a digest; and the draws a product makes with the generator.

/**
 * Mulberry32
 * A 32-bit pseudo-random generator: fast, reproducible from a seed.
 */
export const Mulberry32 = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Tommy Ettinger, Mulberry32 (2017, public domain)",
  url: "https://gist.github.com/tommyettinger/46a874533244883189143505d203312c",
  constants: {
    increment: { value: 0x6d2b79f5, meaning: "Added to the state at each draw" },
    shift1: { value: 15, meaning: "First shift of the mix" },
    shift2: { value: 7, meaning: "Second shift of the mix" },
    shift3: { value: 14, meaning: "Last shift of the mix" },
    oddBit: { value: 1, meaning: "OR with 1: the first multiplier is odd" },
    odd: { value: 61, meaning: "Makes the second multiplier odd" },
    scale: { value: 4294967296, meaning: "2³²: brings the draw between 0 and 1" },
  },
})

/**
 * Multiplicative hashing
 * Reduces a text (the seed) to a 32-bit integer.
 */
export const MultiplicativeHash = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Knuth, The Art of Computer Programming, vol. 3, § 6.4; FIPS 180-4 (initial value)",
  constants: {
    multiplier: { value: 2654435761, meaning: "⌊2³² / φ⌋: Knuth's multiplier" },
    start: { value: 1779033703, meaning: "0x6a09e667, the first bits of √2 (initial value of SHA-256)" },
  },
})

/**
 * Depth-first search
 * Looking for a cycle: each vertex is first discovered (grey), then finished (black). Coming back to a grey vertex closes a cycle.
 */
export const DepthFirstSearch = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Cormen, Leiserson, Rivest and Stein, Introduction to Algorithms, 3rd ed., § 22.3 Depth-first search",
  constants: {
    grey: { value: "grey", meaning: "Discovered, its search is not finished: coming back to it closes a cycle" },
    black: { value: "black", meaning: "Its search is finished, without a cycle" },
  },
})

/**
 * SHA-256
 * The digest that fingerprints a text: what a lock freezes, what a release is made of.
 */
export const Sha256 = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "FIPS 180-4, Secure Hash Standard; Node.js crypto.createHash (the algorithm's name)",
  url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf",
  constants: {
    algorithm: { value: "sha256", meaning: "The name Node gives to SHA-256" },
  },
})

/**
 * Seeded draws
 * Numbers drawn between 0 and 1, always the same from the same seed: Mulberry32 from a 32-bit state, the seed a number
 * or a text hashed into one (multiplicative hashing); an integer drawn between two bounds, both included; an element
 * of a list drawn by its weight. It touches nothing.
 */
export const SeededDraws = fn({
  owner: "trame",
  serves: [SharedOperations],
  deps: { mulberry: Mulberry32, hash: MultiplicativeHash, ecma: EcmaScript, counts: Counts },
  body: code.file<typeof import("./code/algorithms/seeded-draws").default>("./code/algorithms/seeded-draws.ts"),
})
