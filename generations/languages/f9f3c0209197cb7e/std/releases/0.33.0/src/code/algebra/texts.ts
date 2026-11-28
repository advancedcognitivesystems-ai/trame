// Texts: the monoid of texts. Concatenation puts them one after the other; the empty text changes nothing, and is what
// shows when there is nothing to show. An absent value folds into it.

import type { Api as Sequences } from "./sequences"

export interface Constants {
  empty: ""
  space: " "
  ellipsis: "…"
  wordBoundary: string
  everyWord: string
}

export interface Deps {
  sequences: Sequences
}

/** How long a text may be before it is cut, and how much of it a cut keeps (the ellipsis follows). */
export interface Shortening {
  longest: number
  kept: number
}

/** What a JavaScript condition treats as false. */
type Falsy = false | 0 | 0n | "" | null | undefined

const body = ({ empty, space, ellipsis, wordBoundary, everyWord, sequences }: Constants & Deps) => {
  const { take } = sequences
  /**
   * A value that may be absent (undefined or null): absent shows nothing. With `show`, what to show of a value that is
   * there; a `show` that finds nothing shows nothing too.
   */
  function optional(x: string | null | undefined): string
  function optional<T>(x: T | null | undefined, show: (x: T) => string | null | undefined): string
  function optional<T>(x: T | null | undefined, show?: (x: T) => string | null | undefined): string {
    if (x === undefined || x === null) return empty
    return (show ? show(x) : (x as string)) ?? empty
  }

  return {
    /** The text with no characters: nothing to show, a blank line, a cell with nothing in it. */
    empty,
    /** The texts, one after the other. */
    concat: (parts: readonly string[]) => parts.join(empty),
    optional,
    /** What to show when the condition holds, as JavaScript reads a condition (false, 0, "" and absence do not); nothing otherwise. */
    when: <T>(condition: T, show: (x: Exclude<T, Falsy>) => string): string => (condition ? show(condition as Exclude<T, Falsy>) : empty),
    /** The text without the first occurrence of a part (a regular expression removes what it matches). */
    without: (text: string, part: string | RegExp) => text.replace(part, empty),
    /** Marks where a text was cut short, or what is left out of it. */
    ellipsis,
    /** A name written in camel case, in lower case, its words joined by the joint: TrameCli and "-" give trame-cli. */
    lowerWords: (name: string, joint: string) =>
      name.replace(new RegExp(wordBoundary, everyWord), (_, before: string, capital: string) => before + joint + capital).toLowerCase(),
    /** What separates words. */
    space,
    /**
     * The words of a text, one space between each: a run of white space (spaces, tabs, ends of line, as String's trim
     * knows them) becomes one space, and none is left at either end.
     */
    squeeze: (text: string) => {
      const words: string[] = []
      let word = empty
      for (const character of text) {
        if (character.trim() !== empty) word += character
        else if (word !== empty) {
          words.push(word)
          word = empty
        }
      }
      if (word !== empty) words.push(word)
      return words.join(space)
    },
    /** The text as it is when it is not longer than `longest`; otherwise its first `kept` characters, then the ellipsis. */
    shorten: (text: string, { longest, kept }: Shortening) => (text.length > longest ? take(text, kept) + ellipsis : text),
  }
}

export type Api = ReturnType<typeof body>
export default body
