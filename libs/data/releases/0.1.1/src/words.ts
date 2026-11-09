/** Data · Words */

import { catalog } from "#trame/kinds/catalog"
import { code } from "#trame/kernel"
import { SymbolsLanguage } from "#std/measures"

/**
 * Words of the kinds of data
 * What the kinds the library carries say: their labels, the labels of their fields, what their holes say, what they
 * render. The kinds are files of the language, outside the graph: their words are a catalog all the same, which they
 * call; a kind writes no text of its own.
 */
export const DataKindWords = catalog({
  owner: "trame",
  language: SymbolsLanguage,
  messages: code.file<typeof import("./kinds/words").default>("./kinds/words.ts"),
})
