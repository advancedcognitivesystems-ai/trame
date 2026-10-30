/** Trame · Algebra */

import { code } from "../trame/kernel"
import { structure } from "../kinds/structure"
import { EcmaScript, EcmaScriptTypes } from "./standards"

// The structures that the bodies share, instead of writing 0, 1 and "" themselves: a body that takes the first element
// says `head`, a body that counts under a key says `tally`, a body that shows nothing says `empty`.

/** Two values written the same way. */
const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b)

/**
 * Counts
 * The natural numbers that count things: the elements of a list, the characters of a run, levels and layers.
 * Whether a collection is empty, has a single element or several is a question about its count.
 */
export const Counts = structure({
  owner: "trame",
  constants: {
    zero: { value: 0, meaning: "The count of nothing: no element, no change. The identity of addition" },
    one: { value: 1, meaning: "A single element; what a count grows by when one more thing is counted" },
  },
  operations: code.file<typeof import("./code/algebra/counts").default>("./code/algebra/counts.ts"),
  laws: [
    {
      says: "A collection is empty, single or several: exactly one of the three",
      holds: (c, d) => {
        const xs = d.list(d.integer)
        return [c.isEmpty(xs), c.single(xs), c.several(xs)].filter(Boolean).length === 1
      },
    },
    {
      says: "Any is the opposite of isEmpty, for a list, a text and a set",
      holds: (c, d) => {
        const xs = d.list(d.integer)
        const t = d.text()
        return c.any(xs) !== c.isEmpty(xs) && c.any(t) !== c.isEmpty(t) && c.any(new Set(xs)) !== c.isEmpty(new Set(xs))
      },
    },
    {
      says: "Zero counts nothing; the next count after zero counts one element",
      holds: (c, d) => c.count([]) === c.zero && c.isEmpty("") && c.next(c.zero) === c.count([d.integer()]) && c.single([d.text()]),
    },
    {
      says: "Previous undoes next, and next undoes previous",
      holds: (c, d) => {
        const n = d.natural()
        return c.previous(c.next(n)) === n && c.next(c.previous(n)) === n
      },
    },
    {
      says: "Between counts the integers from lo to hi, both included",
      holds: (c, d) => {
        const lo = d.integer()
        const hi = lo + d.natural()
        let n = 0
        for (let i = lo; i <= hi; i++) n++
        return c.between(lo, hi) === n
      },
    },
    {
      says: "Tally counts each element once, under its key, in the order where the keys first appear",
      holds: (c, d) => {
        const xs = d.list(d.integer)
        const key = (x: number) => Math.abs(x) % 3
        const t = c.tally(xs, key)
        return [...t.values()].reduce((a, b) => a + b, 0) === xs.length &&
          [...t].every(([k, n]) => n === xs.filter((x) => key(x) === k).length) &&
          same([...t.keys()], [...new Set(xs.map(key))])
      },
    },
    {
      says: "The largest of nothing is zero; the largest of two lists put together is the larger of their two largest",
      holds: (c, d) => {
        const a = d.list(d.natural)
        const b = d.list(d.natural)
        return c.largest([]) === c.zero && c.largest([...a, ...b]) === Math.max(c.largest(a), c.largest(b))
      },
    },
  ],
})

/**
 * Sequences
 * Positions in a list or in a text: the first, the last, the one before, what follows. Positions start where
 * ECMAScript starts them, and follow one another by one. A position where there is nothing gives nothing.
 */
export const Sequences = structure({
  owner: "trame",
  deps: { ecma: EcmaScript, counts: Counts },
  operations: code.file<typeof import("./code/algebra/sequences").default>("./code/algebra/sequences.ts"),
  laws: [
    {
      says: "Head and rest take a sequence apart: x first, then what follows",
      holds: (s, d) => {
        const x = d.integer()
        const xs = d.list(d.integer)
        const t = d.text()
        return s.head([x, ...xs]) === x && same(s.rest([x, ...xs]), xs) && s.head(`a${t}`) === "a" && s.rest(`a${t}`) === t
      },
    },
    {
      says: "An empty sequence, or no sequence at all, has no head and no last element",
      holds: (s) => s.head([]) === undefined && s.head(undefined) === undefined && s.head("") === undefined && s.last([]) === undefined,
    },
    {
      says: "The last element of a sequence that ends with x is x, at the only last position",
      holds: (s, d) => {
        const x = d.integer()
        const xs = [...d.list(d.integer), x]
        return s.last(xs) === x && xs.filter((_, i) => s.isLast(xs, i)).length === 1 && xs.every((y, i) => !s.isLast(xs, i) || y === x)
      },
    },
    {
      says: "The last n elements end the sequence, in its order: all of them when there are fewer",
      holds: (s, d) => {
        const [xs, ys] = [d.list(d.integer), d.list(d.integer)]
        return JSON.stringify(s.takeLast([...xs, ...ys], ys.length)) === JSON.stringify(ys) &&
          JSON.stringify(s.takeLast(xs, xs.length + d.natural())) === JSON.stringify(xs)
      },
    },
    {
      says: "The head is at the only first position",
      holds: (s, d) => {
        const xs = [d.integer(), ...d.list(d.integer)]
        return xs.filter((_, i) => s.isFirst(i)).length === 1 && xs.every((y, i) => !s.isFirst(i) || y === s.head(xs))
      },
    },
    {
      says: "Previous gives the element just before a position, and nothing before the first",
      holds: (s, d) => {
        const xs = d.list(d.integer)
        return xs.every((_, i) => s.previous(xs, i) === (s.isFirst(i) ? undefined : xs[i - 1]))
      },
    },
    {
      says: "What take keeps, followed by the rest, is the whole sequence",
      holds: (s, d) => {
        const xs = d.list(d.integer)
        const t = d.text()
        const n = d.natural()
        return same([...s.take(xs, n), ...xs.slice(n)], xs) && s.take(t, n) + t.slice(n) === t
      },
    },
    {
      says: "Pairs gives every two elements once, each pair in their order",
      holds: (s, d) => {
        const xs = [...new Set(d.list(d.integer))]
        const p = s.pairs(xs)
        return p.length === (xs.length * (xs.length - 1)) / 2 && p.every(([a, b]) => xs.indexOf(a) < xs.indexOf(b)) &&
          new Set(p.map(([a, b]) => `${a},${b}`)).size === p.length
      },
    },
    {
      says: "Position finds where x first is, and nothing when x is not there",
      holds: (s, d) => {
        const xs = d.list(d.natural)
        const x = d.natural()
        const i = s.position(xs, x)
        return i === undefined ? !xs.includes(x) : xs[i] === x && !xs.slice(0, i).includes(x)
      },
    },
    {
      says: "RemoveAt takes the element at a position out of the list, and gives it back",
      holds: (s, d) => {
        const before = d.list(d.integer)
        const xs = [...before]
        const i = d.natural()
        const got = s.removeAt(xs, i)
        return got === before[i] && same(xs, [...before.slice(0, i), ...before.slice(i + 1)])
      },
    },
    {
      says: "AtOrLast gives the element at a position, or the last one beyond the end",
      holds: (s, d) => {
        const xs = d.list(d.integer)
        const i = d.natural()
        return s.atOrLast(xs, i) === (i < xs.length ? xs[i] : s.last(xs))
      },
    },
    {
      says: "Times calls f once per count, with the positions in order from the first",
      holds: (s, d) => {
        const n = d.natural()
        const got = s.times(n, (i) => i)
        return got.length === n && got.every((v, k) => v === k) && (n === 0 || s.isFirst(got[0]))
      },
    },
  ],
})

/**
 * Texts
 * The monoid of texts: concatenation puts them one after the other, and the empty text changes nothing. It is what
 * shows when there is nothing to show: an absent value folds into it.
 */
export const Texts = structure({
  owner: "trame",
  constants: {
    empty: { value: "", meaning: "The text with no characters: the identity of concatenation, what nothing shows" },
    space: { value: " ", meaning: "What separates words (U+0020, space)" },
    ellipsis: { value: "…", meaning: "Marks where a text was cut short (U+2026, horizontal ellipsis), or what is left out of it" },
    wordBoundary: { value: "(\\p{Ll}|\\p{Nd})(\\p{Lu})", meaning: "Where a name written in camel case changes word: a lower-case letter or a digit, then a capital" },
    everyWord: { value: "gu", meaning: "Every change of word, read in Unicode" },
  },
  deps: { sequences: Sequences },
  operations: code.file<typeof import("./code/algebra/texts").default>("./code/algebra/texts.ts"),
  laws: [
    {
      says: "The empty text changes nothing in a concatenation, and is the concatenation of nothing",
      holds: (t, d) => {
        const a = d.text()
        return t.concat([t.empty, a]) === a && t.concat([a, t.empty]) === a && t.concat([]) === t.empty
      },
    },
    {
      says: "Concatenation is associative",
      holds: (t, d) => {
        const [a, b, c] = [d.text(), d.text(), d.text()]
        return t.concat([t.concat([a, b]), c]) === t.concat([a, t.concat([b, c])])
      },
    },
    {
      says: "Optional keeps what is there, and shows nothing for undefined or null",
      holds: (t, d) => {
        const a = d.text()
        return t.optional(a) === a && t.optional(undefined) === t.empty && t.optional(null) === t.empty &&
          t.optional(a, (x) => x + x) === a + a && t.optional(undefined, () => a) === t.empty && t.optional(a, () => undefined) === t.empty
      },
    },
    {
      says: "When shows only what holds: false, zero, the empty text and absence do not",
      holds: (t, d) => {
        const a = d.text()
        return t.when(false, () => a) === t.empty && t.when(0, () => a) === t.empty && t.when("", () => a) === t.empty &&
          t.when(undefined, () => a) === t.empty && t.when(true, () => a) === a && t.when(a, (x) => x) === a
      },
    },
    {
      says: "Without removes a part where it first appears",
      holds: (t, d) => {
        const [a, b] = [d.text(), d.text()]
        return t.without(a + b, a) === b
      },
    },
    {
      says: "Lower words puts the joint where a camel-case name changes word, and writes it in lower case",
      holds: (t, d) => {
        const joint = d.text()
        return t.lowerWords("TrameCli", joint) === "trame" + joint + "cli" && t.lowerWords("Cache2Db", joint) === "cache2" + joint + "db" &&
          t.lowerWords("plain", joint) === "plain"
      },
    },
    {
      says: "Squeeze leaves the words, one space between each, and no white space at either end",
      holds: (t, d) => {
        const [a, b] = [d.text(), d.text()]
        const s = t.squeeze(t.space + a + "\n\t " + b + t.space)
        return s === t.squeeze(s) && s.trim() === s && !s.includes(t.space + t.space) && s.split(t.space).join(t.empty) === (a + b).replace(/\s/g, t.empty)
      },
    },
    {
      says: "Shorten leaves a text that is not too long as it is; a longer one keeps its beginning, then the ellipsis",
      holds: (t, d) => {
        const a = d.text() + d.text()
        const longest = d.natural()
        const kept = Math.min(longest, d.natural())
        const s = t.shorten(a, { longest, kept })
        return a.length <= longest ? s === a : s === a.slice(0, kept) + t.ellipsis && s.length <= longest + 1
      },
    },
  ],
})

/**
 * Types of values
 * What a value is, as ECMAScript's typeof tells it, said by name: a text, a number, a boolean, a function, a symbol, an
 * object (null is not one, whatever typeof says). A body that asks says isText, not the word typeof gives.
 */
export const ValueTypes = structure({
  owner: "trame",
  deps: { types: EcmaScriptTypes },
  operations: code.file<typeof import("./code/algebra/values").default>("./code/algebra/values.ts"),
  laws: [
    {
      says: "A value has at most one of these types; null, undefined and a big integer have none",
      holds: (t, d) => {
        const all = [d.text(), d.integer(), d.boolean(), d.list(d.integer), { a: d.text() }, () => d.integer(), Symbol(d.text()), null, undefined, BigInt(d.integer())]
        const tests = [t.isText, t.isNumber, t.isBoolean, t.isFunction, t.isSymbol, t.isObject]
        return all.every((v) => tests.filter((test) => test(v)).length <= 1) &&
          !tests.some((test) => test(null) || test(undefined) || test(BigInt(0)))
      },
    },
    {
      says: "Each kind of value is told by its own test: a list is an object, a function is not",
      holds: (t, d) =>
        t.isText(d.text()) && t.isNumber(d.integer()) && t.isBoolean(d.boolean()) && t.isObject(d.list(d.text)) &&
        t.isObject({}) && t.isFunction(() => d.integer()) && !t.isObject(() => d.integer()) && t.isSymbol(Symbol(d.text())),
    },
  ],
})
