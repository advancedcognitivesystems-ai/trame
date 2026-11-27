/** Trame · HTML and CSS of the page */

import { syntax } from "../kinds/syntax"
import { HtmlMarkup, CssStyleSheets } from "#std/languages"
import { Html, Aria, Svg, Css } from "#std/html"
import { HtmlStartTag, HtmlEndTag, HtmlElement } from "#documents/html"
import { TypeScript } from "./typescript"

// The HTML and the CSS that Trame's page is written in, with the names of the standard library's standards (module
// html); the elements its documents write too are libs/documents' (module html), until the page moves there. Each
// construct is a syntax element of the spec that defines it; the page composes them. Both languages are std's (module
// languages, since g129), read by the engine with their tree-sitter grammars: what is written in them is read back,
// and a style sheet is a body like any other, where a value written is a literal.

// SVG -------------------------------------------------------------------------------------

/**
 * Path data
 * A path from its start: each step a straight line to a point, or a cubic curve through two control points to its end;
 * each point as two numbers joined by a comma, the points and the commands separated by a space; a closed path ends
 * with z.
 */
export const PathData = syntax({
  owner: "trame",
  standard: Svg,
  section: "9.3 Path data",
  url: "https://www.w3.org/TR/SVG2/paths.html#PathData",
  constants: {
    moveTo: { value: "M", meaning: "Starts the path at a point" },
    curveTo: { value: "C", meaning: "A cubic curve: two control points, then its end" },
    lineTo: { value: "L", meaning: "A straight line to a point" },
    close: { value: "z", meaning: "Closes the path, back to its start" },
  },
  write: ({ standard: { separator, comma }, moveTo, curveTo, lineTo, close }) => {
    type Point = readonly [number, number]
    const point = ([x, y]: Point) => String(x) + comma + String(y)
    return (start: Point, steps: readonly { to: Point; via?: readonly [Point, Point] }[], closed: boolean) => [
      moveTo + point(start),
      ...steps.map((s) => (s.via ? curveTo + [...s.via, s.to].map(point).join(separator) : lineTo + point(s.to))),
      ...(closed ? [close] : []),
    ].join(separator)
  },
  examples: [
    { input: [[89, 60], [{ via: [[89, 91], [111, 91]], to: [111, 122] }], false], output: "M89,60 C89,91 111,91 111,122" },
    { input: [[5, 8], [{ to: [12, 16] }, { to: [5, 24] }], true], output: "M5,8 L12,16 L5,24 z" },
  ],
})

// HTML ------------------------------------------------------------------------------------

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
    commentOpen: { value: "<!--", meaning: "What would let a later start tag of a script swallow the end of the element" },
    commentEscaped: { value: "<\\!--", meaning: "The same text for the code: a backslash before a character that needs none" },
  },
  deps: { element: HtmlElement },
  write: ({ tag, endTagOpen, escaped, everyCase, commentOpen, commentEscaped, element }) => (code: string, attributes: Readonly<Record<string, string | true>> = {}) =>
    element(tag, attributes, code.replace(new RegExp(endTagOpen, everyCase), escaped).split(commentOpen).join(commentEscaped)),
  examples: [
    { input: ["const s = \"</SCRIPT>\""], output: "<script>const s = \"<\\/script>\"</script>" },
    { input: ["const s = \"<!--\""], output: "<script>const s = \"<\\!--\"</script>" },
  ],
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
 * Attribute presence
 * The elements that have an attribute, whatever its value: the name between brackets.
 */
export const AttributePresence = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "", after: " {}" },
  section: "Selectors Level 4, § 6.1 Attribute presence and value selectors",
  url: "https://www.w3.org/TR/selectors-4/#attribute-representation",
  constants: {
    openBracket: { value: "[", meaning: "Opens an attribute selector" },
    closeBracket: { value: "]", meaning: "Closes it" },
  },
  write: ({ openBracket, closeBracket }) => (name: string) => openBracket + name + closeBracket,
  examples: [{ input: ["data-ref"], output: "[data-ref]" }],
})

/**
 * Selector list
 * The elements that any selector of a list selects.
 */
export const SelectorList = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  fragment: { before: "", after: " {}" },
  section: "Selectors Level 4, § 4.1 Selector lists",
  url: "https://www.w3.org/TR/selectors-4/#grouping",
  constants: {},
  write: ({ standard: { comma, space } }) => (selectors: readonly string[]) => selectors.join(comma + space),
  examples: [{ input: [["[data-ref]", "[data-doc]"]], output: "[data-ref], [data-doc]" }],
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
