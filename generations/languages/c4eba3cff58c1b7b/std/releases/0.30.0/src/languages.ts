/** Standard library · Languages */

// The languages the engine reads for every project (since 0.29.0, g128): their grammars, the queries that say what the
// engine sees in their code, and examples of what its reader must find, played at every compilation. Reading is a
// primitive of the engine, as compiling is (ADR "The engine is a provider"): a language here is read through the port
// LanguageReading, which the engine realizes; a syntax element of any library may then name it, and what it writes is
// read back by the engine. HTML and CSS came from Trame's graph, whose documents and page write them; the grammars are
// the engine's packages, whose versions the engine's graph names (one source: a language here names only the module).

import { language } from "#trame/kinds/language"
import { standard } from "#trame/kinds/standard"
import { Html, Css } from "./html"
import { LanguageReading } from "./engine"

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

/**
 * HTML markup
 * HTML as Trame reads it, with tree-sitter's HTML grammar: the values written in markup are the values of its
 * attributes and the texts of its elements, character references decoded. A class, an identifier, and the attributes
 * that refer to an identifier name something that the style sheets and the scripts share with the markup: they are
 * names. What a style or a script element holds is read in its own language. Named "html" in the graph.
 */
export const HtmlMarkup = language({
  owner: "trame",
  tag: "html",
  standard: Html,
  queryLanguage: TreeSitterQueries,
  reader: LanguageReading,
  grammar: { module: "tree-sitter-html/tree-sitter-html.wasm" },
  extensions: [".html"],
  queries: {
    values: {
      value: String.raw`
(quoted_attribute_value) @literal.text
(attribute (attribute_value) @literal.text)
(text) @literal.text
(entity) @literal.text`,
      meaning: "The values written in markup: the value of an attribute, quoted or not; a text; a character reference on its own, between two texts",
    },
    parts: {
      value: String.raw`
(attribute_value) @literal.part
(text) @literal.part
(entity) @literal.escape`,
      meaning: "What a value is made of: an attribute's value as written (its character references included: the grammar does not catch them apart there), a text, a character reference",
    },
    names: {
      value: String.raw`
((attribute (attribute_name) @_name) @name (#any-of? @_name "class" "id" "for" "aria-labelledby" "aria-describedby" "aria-controls"))`,
      meaning: "What is written like a value but names something: a class, an identifier, an attribute that refers to an identifier",
    },
    roles: {
      value: String.raw`
(attribute (quoted_attribute_value) @role.attribute)
(attribute (attribute_value) @role.attribute)
(element (text) @role.content)
(element (entity) @role.content)`,
      meaning: "The places that give a literal its role (the engine's roles of a literal): the value of an attribute, the content of an element",
    },
  },
  escapes: {
    mark: "&",
    single: { "amp;": "&", "lt;": "<", "gt;": ">", "quot;": "\"", "apos;": "'", "nbsp;": " " },
    numeric: [{ prefix: "#x", radix: 16, close: ";" }, { prefix: "#X", radix: 16, close: ";" }, { prefix: "#", radix: 10, close: ";" }],
    keepUnknown: true,
  },
  examples: [
    { code: "<a id=\"Goal\" href=\"#Goal\">Goal</a>", literals: ["\"#Goal\"", "Goal"], values: ["#Goal", "Goal"], roles: ["attribute value", "content of an element"] },
    { code: "<p title=\"a &amp; b &eacute;\">T &lt; U &#x2192; V</p>", literals: ["\"a &amp; b &eacute;\"", "T", "&lt;", "U", "&#x2192;", "V"], values: ["a & b &eacute;", "T", "<", "U", "→", "V"] },
    { code: "<button class=\"chip\" aria-pressed=\"true\" hidden>x</button>", literals: ["\"true\"", "x"], roles: ["attribute value", "content of an element"] },
    { code: "<!DOCTYPE html>\n<style>.a { margin: 0 }</style>\n<script>const x = 1</script>\n", literals: [] },
  ],
})

/**
 * CSS style sheets
 * CSS as Trame reads it, with tree-sitter's CSS grammar: the values written in a style sheet are its numbers, with
 * their units, its colours and its texts. A property, a class, a keyword (flex, none), a variable are names, and so is
 * the value an attribute selector matches, which the markup shares with the sheet as it shares a class. A url() and an
 * @import reach outside the sheet. What a sheet receives are the variables it uses, and it may declare its own. Named
 * "css" in the graph.
 */
export const CssStyleSheets = language({
  owner: "trame",
  tag: "css",
  standard: Css,
  queryLanguage: TreeSitterQueries,
  reader: LanguageReading,
  grammar: { module: "tree-sitter-css/tree-sitter-css.wasm" },
  extensions: [".css"],
  queries: {
    values: {
      value: String.raw`
(integer_value) @literal.number
(float_value) @literal.number
(color_value) @literal.text
(string_value) @literal.text
((plain_value) @literal.text (#match? @literal.text "[0-9]") (#not-match? @literal.text "^--"))`,
      meaning: "The values written in a style sheet: a number with its unit, a colour, a text; a plain value that holds a digit, which is the rest of a number the grammar cut (12.5px/1.4 reads 12.5, then px/1.4), a variable aside",
    },
    parts: {
      value: String.raw`
(color_value) @literal.part
((plain_value) @literal.part (#match? @literal.part "[0-9]") (#not-match? @literal.part "^--"))
(string_value (string_content) @literal.part)
(string_value (escape_sequence) @literal.escape)`,
      meaning: "What a text is made of: a colour, a plain value as written, the content of a quoted text and its escape sequences",
    },
    names: {
      value: String.raw`
(attribute_selector (string_value) @name)`,
      meaning: "What is written like a value but names something: the value an attribute selector matches",
    },
    declarations: {
      value: String.raw`
((call_expression (function_name) @_function (arguments . (plain_value) @parameter)) (#eq? @_function "var"))
((declaration (property_name) @output) (#match? @output "^--"))`,
      meaning: "What a sheet receives and gives: each variable it uses (var(--x)), each variable it declares (--x: …)",
    },
    globals: {
      value: String.raw`
((call_expression (function_name) @global) (#eq? @global "url"))
(import_statement "@import" @global)`,
      meaning: "What reaches outside the sheet: a resource loaded by its address, another sheet imported",
    },
    roles: {
      value: String.raw`
(declaration (_) @role.property)
(call_expression (function_name) @callee (arguments (_) @role.argument))
(call_expression (arguments (binary_expression (_) @role.arithmetic)))
(feature_query (_) @role.condition)`,
      meaning: "The places that give a literal its role (the engine's roles of a literal): the value of a property, an argument of a function, an operand of a calculation, a condition of a media query",
    },
  },
  escapes: {
    mark: "\\",
    single: {},
    numeric: [{ prefix: "", radix: 16, most: 6, trailing: ["\r\n", " ", "\t", "\n", "\r", "\f"] }],
  },
  examples: [
    { code: ".a { margin: 0 -2px; color: #fff; }", literals: ["0", "-2px", "#fff"], values: [0, "-2px", "#fff"], roles: ["property value", "property value", "property value"] },
    { code: ".b[aria-pressed=\"true\"] { top: calc(env(x, 0px) + 20px); }", literals: ["0px", "20px"], roles: ["argument of env", "arithmetic"] },
    { code: ".c { font: 12.5px/1.4 var(--font, \"A \\\"B\\\" \\2014 C\"); width: var(--w); }", literals: ["12.5", "px/1.4", "\"A \\\"B\\\" \\2014 C\""], values: [12.5, "px/1.4", "A \"B\" —C"] },
    { code: "@import url(theme.css);\n@media (max-width: 920px) { .d { flex: none; } }\n", literals: ["920px"], roles: ["condition"], globals: ["@import", "url"] },
    { code: ".e { --gap: var(--space-md); margin: var(--gap) var(--edge, var(--gap)); }", literals: [], parameters: ["--space-md", "--gap", "--edge", "--gap"], outputs: ["--gap"] },
  ],
})
