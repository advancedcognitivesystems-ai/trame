// Texts: the monoid of texts. Concatenation puts them one after the other; the empty text changes nothing, and is what
// shows when there is nothing to show. An absent value folds into it.

export interface Constants {
  empty: ""
}

/** What a JavaScript condition treats as false. */
type Falsy = false | 0 | 0n | "" | null | undefined

const body = ({ empty }: Constants) => {
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
  }
}

export type Api = ReturnType<typeof body>
export default body
