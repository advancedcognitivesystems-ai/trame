/** Trame · HTML and CSS */

import { standard } from "../kinds/standard"
import { syntax } from "../kinds/syntax"
import { language } from "../kinds/language"
import { Texts } from "./algebra"
import { TreeSitterQueries } from "./standards"
import { SyntaxReader } from "./syntax"
import { TypeScript } from "./typescript"

// The HTML and the CSS that Trame writes: anchors and collapsible blocks in its documents, its page. Each construct is a
// syntax element of the spec that defines it; the documents and the page compose them. Trame reads both languages too,
// with their tree-sitter grammars: what it writes in them is read back, and a style sheet is a body like any other, where
// a value written is a literal.

/**
 * HTML
 * The syntax of HTML (start and end tags, attributes), the global attributes Trame writes, and the elements without a
 * meaning of their own.
 */
export const Html = standard({
  owner: "trame",
  source: "WHATWG HTML: § 13.1 Writing HTML documents (the DOCTYPE, elements, start and end tags, attributes); § 3.2.6 Global attributes",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#writing",
  constants: {
    lessThan: { value: "<", meaning: "Opens a tag" },
    greaterThan: { value: ">", meaning: "Closes a tag" },
    space: { value: " ", meaning: "Separates the name of an element from its attributes, and each attribute from the next (ASCII whitespace)" },
    id: { value: "id", meaning: "The identifier of an element: a script finds the element by it, an address targets it" },
    class: { value: "class", meaning: "The classes of an element, which style sheets select" },
    hidden: { value: "hidden", meaning: "The element is not shown, until a script shows it" },
    lang: { value: "lang", meaning: "The language of the content" },
    div: { value: "div", meaning: "A block with no meaning of its own, which a class names (§ 4.4.15)" },
    span: { value: "span", meaning: "A run of text with no meaning of its own (§ 4.5.26)" },
    window: { value: "window", meaning: "The global object of a page's scripts (§ 7.2 The Window object)" },
  },
})

/**
 * WAI-ARIA
 * The attributes that tell assistive technologies what an element is and how it is named.
 */
export const Aria = standard({
  owner: "trame",
  source: "W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2: § 5.3 roles, § 6.7 states and properties",
  url: "https://www.w3.org/TR/wai-aria-1.2/",
  constants: {
    role: { value: "role", meaning: "What the element is, for assistive technologies" },
    group: { value: "group", meaning: "The role of a set of controls that belong together" },
    label: { value: "aria-label", meaning: "The name of the element, when no visible text gives it" },
    labelledBy: { value: "aria-labelledby", meaning: "The element whose text names this one" },
    pressed: { value: "aria-pressed", meaning: "Whether a toggle button is pressed" },
    hidden: { value: "aria-hidden", meaning: "The element is decoration: assistive technologies skip it" },
  },
})

/**
 * SVG
 * The elements and attributes of the drawings that Trame writes inline in its page.
 */
export const Svg = standard({
  owner: "trame",
  source: "W3C, Scalable Vector Graphics (SVG) 2: § 5 document structure (svg, g), § 9 basic shapes (rect), § 9.3 paths, § 13 painting",
  url: "https://www.w3.org/TR/SVG2/",
  constants: {
    svg: { value: "svg", meaning: "A drawing, inline in the page (§ 5.1.2)" },
    group: { value: "g", meaning: "A group of shapes that share their painting (§ 5.2.1)" },
    rect: { value: "rect", meaning: "A rectangle (§ 10.2)" },
    path: { value: "path", meaning: "A path (§ 9.3)" },
    width: { value: "width", meaning: "The width of the drawing or of a rectangle" },
    height: { value: "height", meaning: "Its height" },
    viewBox: { value: "viewBox", meaning: "The coordinates the drawing is made in: x, y, width, height (§ 8.2)" },
    x: { value: "x", meaning: "The left of a rectangle" },
    y: { value: "y", meaning: "Its top" },
    rx: { value: "rx", meaning: "The radius of a rectangle's corners" },
    d: { value: "d", meaning: "The data of a path: its commands" },
    fill: { value: "fill", meaning: "What paints the inside of a shape (§ 13.2)" },
    stroke: { value: "stroke", meaning: "What paints its outline (§ 13.3)" },
    strokeWidth: { value: "stroke-width", meaning: "The width of the outline" },
    strokeLinecap: { value: "stroke-linecap", meaning: "The shape of the ends of an open line" },
    round: { value: "round", meaning: "Round ends" },
    none: { value: "none", meaning: "Paints nothing" },
    separator: { value: " ", meaning: "Separates the numbers of a list (§ 4.3: whitespace)" },
  },
})

/**
 * CSS
 * The syntax of the style sheets Trame writes: rules, declarations, functions.
 */
export const Css = standard({
  owner: "trame",
  source: "W3C, CSS Syntax Module Level 3 (§ 5 rules and declarations, § 4 tokens)",
  url: "https://www.w3.org/TR/css-syntax-3/",
  constants: {
    openBlock: { value: "{", meaning: "Opens the declarations of a rule" },
    closeBlock: { value: "}", meaning: "Closes them" },
    colon: { value: ":", meaning: "Separates a property from its value" },
    semicolon: { value: ";", meaning: "Ends a declaration" },
    openParenthesis: { value: "(", meaning: "Opens the arguments of a function, or a condition" },
    closeParenthesis: { value: ")", meaning: "Closes them" },
    space: { value: " ", meaning: "Whitespace between the parts of a rule" },
  },
})

// Reading ---------------------------------------------------------------------------------

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
  reader: SyntaxReader,
  grammar: { package: "tree-sitter-html", version: "0.23.2", module: "tree-sitter-html/tree-sitter-html.wasm" },
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
      meaning: "The places that give a literal its role (syntax.LiteralRoles): the value of an attribute, the content of an element",
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
  reader: SyntaxReader,
  grammar: { package: "tree-sitter-css", version: "0.23.2", module: "tree-sitter-css/tree-sitter-css.wasm" },
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
      meaning: "The places that give a literal its role (syntax.LiteralRoles): the value of a property, an argument of a function, an operand of a calculation, a condition of a media query",
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

// HTML ------------------------------------------------------------------------------------

/**
 * Attributes
 * Each attribute after a space: its name, an equals sign, its value in quotes; a boolean attribute, its name alone.
 */
export const HtmlAttributes = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  fragment: { before: "<a", after: ">" },
  section: "13.1.2.3 Attributes",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#attributes-2",
  constants: {
    equals: { value: "=", meaning: "Separates the name of an attribute from its value" },
    quote: { value: "\"", meaning: "Surrounds the value of an attribute" },
  },
  deps: { texts: Texts },
  write: ({ standard: { space }, equals, quote, texts: { concat, empty } }) => (attributes: Readonly<Record<string, string | true>>) =>
    concat(Object.entries(attributes).map(([name, value]) => space + name + (value === true ? empty : equals + quote + value + quote))),
  examples: [
    { input: [{ id: "Goal" }], output: " id=\"Goal\"" },
    { input: [{ class: "banner", hidden: true }], output: " class=\"banner\" hidden" },
  ],
})

/**
 * Start tag
 * The name of the element, then its attributes.
 */
export const HtmlStartTag = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "13.1.2.1 Start tags",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#start-tags",
  constants: {},
  deps: { attributes: HtmlAttributes },
  write: ({ standard: { lessThan, greaterThan }, attributes }) => (name: string, given: Readonly<Record<string, string | true>>) =>
    lessThan + name + attributes(given) + greaterThan,
  examples: [{ input: ["a", { id: "Goal" }], output: "<a id=\"Goal\">" }],
})

/**
 * Self-closing tag
 * An element of SVG without content: its start tag, closed by a slash.
 */
export const SelfClosingTag = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "13.1.2.1 Start tags (the self-closing flag of foreign elements)",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#start-tags",
  constants: {
    slash: { value: "/", meaning: "Before the greater-than sign: the element has no content and no end tag" },
  },
  deps: { attributes: HtmlAttributes },
  write: ({ standard: { lessThan, greaterThan }, slash, attributes }) => (name: string, given: Readonly<Record<string, string | true>>) =>
    lessThan + name + attributes(given) + slash + greaterThan,
  examples: [{ input: ["path", { d: "M7 5v16" }], output: "<path d=\"M7 5v16\"/>" }],
})

/**
 * End tag
 */
export const HtmlEndTag = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  fragment: { before: "<details>", after: "" },
  section: "13.1.2.2 End tags",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#end-tags",
  constants: {
    slash: { value: "/", meaning: "After the less-than sign: the tag closes the element" },
  },
  write: ({ standard: { lessThan, greaterThan }, slash }) => (name: string) => lessThan + slash + name + greaterThan,
  examples: [{ input: ["details"], output: "</details>" }],
})

/**
 * HTML element
 * The start tag, the content, the end tag, on one line.
 */
export const HtmlElement = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "13.1.2 Elements",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
  constants: {},
  deps: { startTag: HtmlStartTag, endTag: HtmlEndTag },
  write: ({ startTag, endTag }) => (name: string, attributes: Readonly<Record<string, string | true>>, content: string) =>
    startTag(name, attributes) + content + endTag(name),
  examples: [{ input: ["summary", {}, "The code"], output: "<summary>The code</summary>" }],
})

/**
 * Element over several lines
 * The start tag on its line, each line of the content indented under it, the end tag on its line: the markup reads as
 * the tree it is.
 */
export const HtmlBlock = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "13.1.2 Elements",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
  constants: {
    indent: { value: "  ", meaning: "Two spaces per level of nesting" },
  },
  deps: { startTag: HtmlStartTag, endTag: HtmlEndTag },
  write: ({ indent, startTag, endTag }) => (name: string, attributes: Readonly<Record<string, string | true>>, content: readonly string[]) =>
    [startTag(name, attributes), ...content.map((line) => indent + line), endTag(name)],
  examples: [{ input: ["main", {}, ["<article class=\"doc\" id=\"doc\"></article>"]], output: ["<main>", "  <article class=\"doc\" id=\"doc\"></article>", "</main>"] }],
})

/**
 * DOCTYPE
 * The first line of an HTML document: the page is read in no-quirks mode.
 */
export const Doctype = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "13.1.1 The DOCTYPE",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#the-doctype",
  constants: {
    doctype: { value: "<!doctype html>", meaning: "The DOCTYPE, in lower case, which HTML allows" },
  },
  write: ({ doctype }) => () => doctype,
  examples: [{ input: [], output: "<!doctype html>" }],
})

/**
 * Script
 * Code run by the page, in a script element. Its text must not end the element before its end: where it holds the
 * opening of an end tag of script, in any case, a backslash comes before the slash, which the code reads the same.
 */
export const ScriptElement = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "4.12.1.3 Restrictions for contents of script elements",
  url: "https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements",
  constants: {
    tag: { value: "script", meaning: "The element of code run by the page" },
    endTagOpen: { value: "</script", meaning: "What would end the element in its text" },
    escaped: { value: "<\\/script", meaning: "The same text for the code, which no longer ends the element" },
    everyCase: { value: "gi", meaning: "Every occurrence, whatever its case" },
  },
  deps: { element: HtmlElement },
  write: ({ tag, endTagOpen, escaped, everyCase, element }) => (code: string) =>
    element(tag, {}, code.replace(new RegExp(endTagOpen, everyCase), escaped)),
  examples: [{ input: ["const s = \"</SCRIPT>\""], output: "<script>const s = \"<\\/script>\"</script>" }],
})

/**
 * JSON in a script
 * A value written in a script as JSON, its less-than signs written as JSON escapes: no tag can open in it.
 */
export const JsonInScript = syntax({
  owner: "trame",
  standard: Html,
  language: TypeScript,
  fragment: { before: "x = ", after: "" },
  section: "4.12.1.3 Restrictions for contents of script elements",
  url: "https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements",
  constants: {
    escape: { value: "\\u003c", meaning: "The less-than sign, as a JSON escape (RFC 8259, § 7)" },
  },
  write: ({ standard: { lessThan }, escape }) => (value: unknown) => JSON.stringify(value).split(lessThan).join(escape),
  examples: [{ input: [{ title: "</script>" }], output: "{\"title\":\"\\u003c/script>\"}" }],
})

// CSS -------------------------------------------------------------------------------------

/**
 * Declaration
 * A property, a colon, its value, a semicolon.
 */
export const CssDeclaration = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "a { ", after: " }" },
  section: "5.4.6 Consume a declaration",
  url: "https://www.w3.org/TR/css-syntax-3/#consume-declaration",
  constants: {},
  write: ({ standard: { colon, semicolon, space } }) => (property: string, value: string) => property + colon + space + value + semicolon,
  examples: [{ input: ["color-scheme", "dark"], output: "color-scheme: dark;" }],
})

/**
 * Custom property
 * A property the style sheet names itself, which values read with var(): its name after two dashes.
 */
export const CustomProperty = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: ":root { ", after: " }" },
  section: "CSS Custom Properties for Cascading Variables Level 1, § 2 Defining custom properties",
  url: "https://www.w3.org/TR/css-variables-1/#defining-variables",
  constants: {
    dashes: { value: "--", meaning: "Begins the name of a custom property" },
  },
  deps: { declaration: CssDeclaration },
  write: ({ dashes, declaration }) => (name: string, value: string) => declaration(dashes + name, value),
  examples: [{ input: ["bg", "#f3f5f6"], output: "--bg: #f3f5f6;" }],
})

/**
 * Variable
 * The value of a custom property, read where a value is expected.
 */
export const CssVariable = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "a { color: ", after: "; }" },
  section: "CSS Custom Properties for Cascading Variables Level 1, § 3 Using cascading variables: the var() notation",
  url: "https://www.w3.org/TR/css-variables-1/#using-variables",
  constants: {
    notation: { value: "var", meaning: "The function that reads a custom property" },
    dashes: { value: "--", meaning: "Begins the name of a custom property" },
  },
  write: ({ standard: { openParenthesis, closeParenthesis }, notation, dashes }) => (property: string) =>
    notation + openParenthesis + dashes + property + closeParenthesis,
  examples: [{ input: ["accent"], output: "var(--accent)" }],
})

/**
 * Rule
 * A selector, then its declarations between braces, on one line.
 */
export const CssRule = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  section: "5.4.3 Consume a qualified rule",
  url: "https://www.w3.org/TR/css-syntax-3/#consume-qualified-rule",
  constants: {},
  write: ({ standard: { openBlock, closeBlock, space } }) => (selector: string, declarations: readonly string[]) =>
    [selector, openBlock, ...declarations, closeBlock].join(space),
  examples: [{ input: ["body", ["margin: 0;"]], output: "body { margin: 0; }" }],
})

/**
 * Media rule
 * Rules that apply when a condition on the medium holds: the keyword, the condition, the rules between braces.
 */
export const MediaRule = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  section: "CSS Conditional Rules Level 3, § 6 Media-specific style sheets: the @media rule",
  url: "https://www.w3.org/TR/css-conditional-3/#at-media",
  constants: {
    keyword: { value: "@media", meaning: "Opens a media rule" },
  },
  write: ({ standard: { openBlock, closeBlock, space }, keyword }) => (condition: string, rules: readonly string[]) =>
    [keyword, condition, openBlock, ...rules, closeBlock].join(space),
  examples: [{ input: ["(prefers-color-scheme: dark)", ["body { margin: 0; }"]], output: "@media (prefers-color-scheme: dark) { body { margin: 0; } }" }],
})

/**
 * Media feature
 * A condition on the medium: a feature and its value, in parentheses.
 */
export const MediaFeature = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "@media ", after: " {}" },
  section: "Media Queries Level 4, § 2.4 Media features",
  url: "https://www.w3.org/TR/mediaqueries-4/#mq-features",
  constants: {},
  write: ({ standard: { openParenthesis, closeParenthesis, colon, space } }) => (feature: string, value: string) =>
    openParenthesis + feature + colon + space + value + closeParenthesis,
  examples: [{ input: ["prefers-color-scheme", "dark"], output: "(prefers-color-scheme: dark)" }],
})

/**
 * Class selector
 * The elements of a class: a dot, then the class.
 */
export const ClassSelector = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "", after: " {}" },
  section: "Selectors Level 4, § 6.6 Class selectors",
  url: "https://www.w3.org/TR/selectors-4/#class-html",
  constants: {
    dot: { value: ".", meaning: "Begins a class selector" },
  },
  write: ({ dot }) => (name: string) => dot + name,
  examples: [{ input: ["st-held"], output: ".st-held" }],
})

/**
 * Attribute selector
 * The elements whose attribute has a value: the name, an equals sign, the value in quotes, between brackets.
 */
export const AttributeSelector = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "", after: " {}" },
  section: "Selectors Level 4, § 6.1 Attribute presence and value selectors",
  url: "https://www.w3.org/TR/selectors-4/#attribute-representation",
  constants: {
    openBracket: { value: "[", meaning: "Opens an attribute selector" },
    closeBracket: { value: "]", meaning: "Closes it" },
    equals: { value: "=", meaning: "The attribute has exactly this value" },
    quote: { value: "\"", meaning: "Surrounds the value" },
  },
  write: ({ openBracket, closeBracket, equals, quote }) => (name: string, value: string) =>
    openBracket + name + equals + quote + value + quote + closeBracket,
  examples: [{ input: ["data-theme", "dark"], output: "[data-theme=\"dark\"]" }],
})

/**
 * Negation
 * The elements that a selector does not select.
 */
export const NegationSelector = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "", after: " {}" },
  section: "Selectors Level 4, § 4.3 The negation pseudo-class",
  url: "https://www.w3.org/TR/selectors-4/#negation",
  constants: {
    pseudoClass: { value: ":not", meaning: "The negation pseudo-class" },
  },
  write: ({ standard: { openParenthesis, closeParenthesis }, pseudoClass }) => (selector: string) =>
    pseudoClass + openParenthesis + selector + closeParenthesis,
  examples: [{ input: ["[data-theme=\"light\"]"], output: ":not([data-theme=\"light\"])" }],
})
