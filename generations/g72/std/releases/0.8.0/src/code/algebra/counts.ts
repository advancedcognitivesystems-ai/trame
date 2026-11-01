// Counts: the natural numbers that count things (the elements of a list, the characters of a run, levels, layers).
// Zero is the count of nothing; one more thing counted gives the next count. Whether a collection is empty, has a
// single element or several is a question about its count.

/** What has a count: a list or a text (its length), a set or a map (its size). */
export type Countable = { readonly length: number } | { readonly size: number }

export interface Constants {
  zero: 0
  one: 1
}

const body = ({ zero, one }: Constants) => {
  const count = (xs: Countable): number => (xs as { length?: number }).length ?? (xs as { size: number }).size
  return {
    /** The count of nothing: no element, no change, no character yet. */
    zero,
    /** A single element. */
    one,
    /** How many elements. */
    count,
    /** One more than n: the next level, the next layer, a run that grows. */
    next: (n: number) => n + one,
    /** One less than n. */
    previous: (n: number) => n - one,
    /** How many integers from lo to hi, both included. */
    between: (lo: number, hi: number) => hi - lo + one,
    /** No element at all. */
    isEmpty: (xs: Countable) => count(xs) === zero,
    /** At least one element. */
    any: (xs: Countable) => count(xs) > zero,
    /** Exactly one element. */
    single: (xs: Countable) => count(xs) === one,
    /** More than one element: several claimants on one value make an overlap. */
    several: (xs: Countable) => count(xs) > one,
    /** The largest of these counts; zero when there are none. */
    largest: (ns: readonly number[]) => Math.max(zero, ...ns),
    /** How many elements fall under each key, in the order where the keys first appear. */
    tally: <T, K>(xs: Iterable<T>, key: (x: T) => K): Map<K, number> => {
      const counted = new Map<K, number>()
      for (const x of xs) counted.set(key(x), (counted.get(key(x)) ?? zero) + one)
      return counted
    },
  }
}

export type Api = ReturnType<typeof body>
export default body
