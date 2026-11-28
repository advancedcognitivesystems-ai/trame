/** Documents · HTML */

import { syntax } from "#trame/kinds/syntax"
import { HtmlMarkup } from "#std/languages"
import { Html } from "#std/html"
import { Texts } from "#std/algebra"

// The elements of HTML the documents write (anchors and collapsible blocks in Markdown, the documents of the page),
// with the names of the standard library's standard (module html). Each construct is a syntax element of the spec that
// defines it, in std's language HtmlMarkup, read back by the engine with its tree-sitter grammar.

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
 * Heading of a rank
 * A heading of a rank, from 1 to 6: its element is the rank after the letter h.
 */
export const HtmlHeading = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  section: "4.3.6 The h1, h2, h3, h4, h5, and h6 elements",
  url: "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  constants: {
    prefix: { value: "h", meaning: "Before the rank of a heading: the name of its element" },
  },
  deps: { element: HtmlElement },
  write: ({ prefix, element }) => (rank: number, attributes: Readonly<Record<string, string | true>>, content: string) =>
    element(prefix + String(rank), attributes, content),
  examples: [{ input: [2, {}, "Cards"], output: "<h2>Cards</h2>" }],
})

/**
 * Escaped text
 * A text written in the content of an element or the value of an attribute: the characters that would open a tag or a
 * reference, or close the value, are written as character references.
 */
export const EscapedText = syntax({
  owner: "trame",
  standard: Html,
  language: HtmlMarkup,
  fragment: { before: "<p title=\"", after: "\"></p>" },
  section: "13.1.4 Character references",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#character-references",
  constants: {
    ampersand: { value: "&", meaning: "Opens a character reference" },
    quotationMark: { value: "\"", meaning: "Closes the value of an attribute" },
    amp: { value: "&amp;", meaning: "The reference written for an ampersand" },
    lt: { value: "&lt;", meaning: "The reference written for a less-than sign" },
    gt: { value: "&gt;", meaning: "The reference written for a greater-than sign" },
    quot: { value: "&quot;", meaning: "The reference written for a quotation mark" },
  },
  write: ({ standard: { lessThan, greaterThan }, ampersand, quotationMark, amp, lt, gt, quot }) => (text: string) =>
    [[ampersand, amp], [lessThan, lt], [greaterThan, gt], [quotationMark, quot]].reduce((written, [character, reference]) => written.split(character).join(reference), text),
  examples: [
    { input: ["a < b & \"c\" > d"], output: "a &lt; b &amp; &quot;c&quot; &gt; d" },
    { input: ["&lt;"], output: "&amp;lt;" },
  ],
})
