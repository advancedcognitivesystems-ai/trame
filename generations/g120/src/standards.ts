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

/**
 * tree-sitter queries
 * The language the queries of a language node are written in: patterns of S-expressions, captures named with @, and
 * predicates that filter the captures by their text. web-tree-sitter evaluates the predicates below itself; any other
 * one would be kept aside, and its pattern would catch too much: tree-sitter says which, when it parses the query. A code
 * block names the queries "scheme", the S-expressions they are written in: no package yet gives their own grammar, which
 * would let Trame read them as a language.
 */
export const TreeSitterQueries = standard({
  owner: "trame",
  source: "tree-sitter, Query Syntax: Predicates and Directives; the predicates evaluated by web-tree-sitter 0.27 (Query.matches, Query.captures)",
  url: "https://tree-sitter.github.io/tree-sitter/using-parsers/queries/3-predicates-and-directives.html",
  tag: "scheme",
  constants: {
    eq: { value: "#eq?", meaning: "The capture's text equals a string, or another capture's text" },
    notEq: { value: "#not-eq?", meaning: "The capture's text differs from a string, or from another capture's text" },
    anyEq: { value: "#any-eq?", meaning: "One of the quantified capture's nodes equals the string" },
    anyNotEq: { value: "#any-not-eq?", meaning: "One of the quantified capture's nodes differs from the string" },
    match: { value: "#match?", meaning: "The capture's text matches a regular expression" },
    notMatch: { value: "#not-match?", meaning: "The capture's text does not match a regular expression" },
    anyMatch: { value: "#any-match?", meaning: "One of the quantified capture's nodes matches the regular expression" },
    anyNotMatch: { value: "#any-not-match?", meaning: "One of the quantified capture's nodes does not match the regular expression" },
    anyOf: { value: "#any-of?", meaning: "The capture's text is one of the strings that follow" },
    notAnyOf: { value: "#not-any-of?", meaning: "The capture's text is none of the strings that follow" },
    is: { value: "#is?", meaning: "Asserts a property of the match (kept aside for the reader)" },
    isNot: { value: "#is-not?", meaning: "Refutes a property of the match (kept aside for the reader)" },
    set: { value: "#set!", meaning: "Sets a property on the match: a directive, not a filter" },
  },
})

