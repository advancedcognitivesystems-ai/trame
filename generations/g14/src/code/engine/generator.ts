// A reproducible pseudo-random generator: the seed (a text) is hashed into a 32-bit state, then Mulberry32 draws
// numbers between 0 and 1 from it. The constants come from the two standards.

export interface Deps {
  mulberry: { increment: number; shift1: number; shift2: number; shift3: number; oddBit: number; odd: number; scale: number }
  hash: { multiplier: number; start: number }
  ecma: { firstIndex: number; toUnsigned32: number }
}

const body = (deps: Deps) => {
  const { increment, shift1, shift2, shift3, oddBit, odd, scale } = deps.mulberry
  const { multiplier, start } = deps.hash
  const { firstIndex, toUnsigned32 } = deps.ecma

  /** A sequence of numbers in [0, 1), always the same for the same seed. */
  function prng(seedText: string): () => number {
    let a = [...seedText].reduce((h, c) => Math.imul(h ^ c.charCodeAt(firstIndex), multiplier) >>> toUnsigned32, start)
    return () => {
      a = (a + increment) >>> toUnsigned32
      let t = a
      t = Math.imul(t ^ (t >>> shift1), t | oddBit)
      t ^= t + Math.imul(t ^ (t >>> shift2), t | odd)
      return ((t ^ (t >>> shift3)) >>> toUnsigned32) / scale
    }
  }

  return { prng }
}

export type Api = ReturnType<typeof body>
export default body
