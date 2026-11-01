// Draws from a seed: the seed (a number, or a text hashed into one) becomes a 32-bit state, then Mulberry32 draws
// numbers between 0 and 1 from it. An integer between two bounds, and an element of a list by its weight, are drawn
// from those numbers.

export interface Deps {
  mulberry: { increment: number; shift1: number; shift2: number; shift3: number; oddBit: number; odd: number; scale: number }
  hash: { multiplier: number; start: number }
  ecma: { firstIndex: number; toUnsigned32: number }
  counts: { zero: number; between(lo: number, hi: number): number }
}

const body = (deps: Deps) => {
  const { increment, shift1, shift2, shift3, oddBit, odd, scale } = deps.mulberry
  const { multiplier, start } = deps.hash
  const { firstIndex, toUnsigned32 } = deps.ecma
  const { zero, between } = deps.counts

  /** A text reduced to a seed. */
  const seedOf = (text: string): number =>
    [...text].reduce((h, c) => Math.imul(h ^ c.charCodeAt(firstIndex), multiplier) >>> toUnsigned32, start)

  /** A sequence of numbers in [0, 1), always the same for the same seed. */
  const from = (seed: number): (() => number) => {
    let a = seed >>> toUnsigned32
    return () => {
      a = (a + increment) >>> toUnsigned32
      let t = a
      t = Math.imul(t ^ (t >>> shift1), t | oddBit)
      t ^= t + Math.imul(t ^ (t >>> shift2), t | odd)
      return ((t ^ (t >>> shift3)) >>> toUnsigned32) / scale
    }
  }

  /** An integer from lo to hi, both included. */
  const integer = (draw: () => number, lo: number, hi: number): number => lo + Math.floor(draw() * between(lo, hi))

  /** An element of a list, each as likely as its weight; none when the list is empty or weighs nothing. */
  const weighted = <T>(draw: () => number, items: readonly { item: T; weight: number }[]): T | undefined => {
    const total = items.reduce((sum, x) => sum + Math.max(zero, x.weight), zero)
    if (total <= zero) return undefined
    let left = draw() * total
    let found: T | undefined
    for (const x of items) {
      if (x.weight <= zero) continue
      found = x.item
      left -= x.weight
      if (left < zero) break
    }
    return found
  }

  return { seedOf, from, integer, weighted }
}

export type Api = ReturnType<typeof body>
export default body
