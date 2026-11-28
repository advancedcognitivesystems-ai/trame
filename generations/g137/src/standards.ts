/** Trame · Standards */

import { standard } from "../kinds/standard"

/**
 * TypeScript compiler API
 * What the API returns when asked where a node is: a line and a character, counted from zero.
 */
export const TypeScriptApi = standard({
  owner: "trame",
  source: "TypeScript, compiler API: ts.LineAndCharacter (getLineAndCharacterOfPosition)",
  url: "https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API",
  constants: {
    firstLine: { value: 0, meaning: "The number the API gives to the first line" },
  },
})

/**
 * tree-sitter API
 * Where tree-sitter says a node is: a point, made of a row and a column counted from zero, and an offset in the text.
 */
export const TreeSitterApi = standard({
  owner: "trame",
  source: "tree-sitter, Using Parsers: Point (row, column), counted from zero; web-tree-sitter 0.27, Node.startPosition and startIndex",
  url: "https://tree-sitter.github.io/tree-sitter/using-parsers/",
  constants: {
    firstRow: { value: 0, meaning: "The row tree-sitter gives to the first line of a text" },
    firstColumn: { value: 0, meaning: "The column tree-sitter gives to the first character of a line" },
  },
})

