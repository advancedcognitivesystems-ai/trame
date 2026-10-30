// Sequences: positions in a list or in a text. ECMAScript counts positions from its first index; each position follows
// the previous one by one (Counts). A position where there is nothing gives nothing (undefined): the element may be
// missing, and the type says so.

import type { Api as Counts } from "./counts"

export interface Deps {
  ecma: { firstIndex: 0; notFound: -1 }
  counts: Counts
}

const body = ({ ecma: { firstIndex, notFound }, counts }: Deps) => {
  const { next, previous: before, one } = counts

  /** What follows the first element. */
  function rest(xs: string): string
  function rest<T>(xs: readonly T[]): T[]
  function rest(xs: string | readonly unknown[]) {
    return xs.slice(next(firstIndex))
  }

  /** The first n elements (all of them if there are fewer). */
  function take(xs: string, n: number): string
  function take<T>(xs: readonly T[], n: number): T[]
  function take(xs: string | readonly unknown[], n: number) {
    return xs.slice(firstIndex, n)
  }

  /** The first element; nothing for an empty sequence, or for no sequence at all. */
  const head = <T>(xs: ArrayLike<T> | undefined): T | undefined => xs?.[firstIndex]

  return {
    head,
    rest,
    take,
    /** The last element; nothing for an empty sequence. */
    last: <T>(xs: ArrayLike<T> | undefined): T | undefined => xs?.[before(xs.length)],
    /** Is this the position of the first element? */
    isFirst: (i: number) => i === firstIndex,
    /** Is this the position of the last element? */
    isLast: (xs: ArrayLike<unknown>, i: number) => i === before(xs.length),
    /** The element just before position i; nothing before the first. */
    previous: <T>(xs: ArrayLike<T>, i: number): T | undefined => xs[before(i)],
    /** Every two elements, once each, in their order: (a, b) with a before b. */
    pairs: <T>(xs: readonly T[]): [T, T][] => xs.flatMap((a, i) => xs.slice(next(i)).map((b): [T, T] => [a, b])),
    /** The position of x; nothing if x is not there. */
    position: <T>(xs: readonly T[], x: T): number | undefined => {
      const i = xs.indexOf(x)
      return i === notFound ? undefined : i
    },
    /** Takes the element at position i out of the list, and gives it back (nothing if there was none). */
    removeAt: <T>(xs: T[], i: number): T | undefined => head(xs.splice(i, one)),
    /** The element at position i, or the last one beyond: how arguments meet parameters when the last one gathers the rest. */
    atOrLast: <T>(xs: readonly T[], i: number): T | undefined => xs[Math.min(i, before(xs.length))],
    /** f called n times, with the positions from the first: the list of what it gives. */
    times: <T>(n: number, f: (i: number) => T): T[] => Array.from({ length: n }, (_, i) => f(i)),
  }
}

export type Api = ReturnType<typeof body>
export default body
