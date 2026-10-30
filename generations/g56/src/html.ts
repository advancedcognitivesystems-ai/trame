/** Trame · HTML and CSS */

import { standard } from "../kinds/standard"
import { syntax } from "../kinds/syntax"
import { HtmlGrammar, CssGrammar } from "./packages"
import { language } from "../kinds/language"
import { Texts } from "#std/algebra"
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
  source: "WHATWG HTML: § 13.1 Writing HTML documents (the DOCTYPE, elements, start and end tags, attributes); § 3.2.6 Global attributes; § 4 The elements of HTML",
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
    p: { value: "p", meaning: "A paragraph (§ 4.4.1)" },
    a: { value: "a", meaning: "A link, or a place that a script makes one (§ 4.5.1)" },
    href: { value: "href", meaning: "The address a link leads to (§ 4.6.2)" },
    mark: { value: "mark", meaning: "A run of text marked for the reader's attention (§ 4.5.23)" },
    code: { value: "code", meaning: "A fragment of code: an identifier, a path (§ 4.5.15)" },
    time: { value: "time", meaning: "A date, with its value for machines (§ 4.5.14)" },
    datetime: { value: "datetime", meaning: "The value of a date for machines (§ 4.5.14)" },
    ul: { value: "ul", meaning: "A list whose order does not matter (§ 4.4.7)" },
    li: { value: "li", meaning: "An item of a list (§ 4.4.8)" },
    dl: { value: "dl", meaning: "A list of names and their values (§ 4.4.9)" },
    dt: { value: "dt", meaning: "A name, in such a list (§ 4.4.10)" },
    dd: { value: "dd", meaning: "Its value (§ 4.4.11)" },
    table: { value: "table", meaning: "A table (§ 4.9.1)" },
    thead: { value: "thead", meaning: "The rows that head a table (§ 4.9.6)" },
    tbody: { value: "tbody", meaning: "The rows of its data (§ 4.9.5)" },
    tr: { value: "tr", meaning: "A row (§ 4.9.8)" },
    th: { value: "th", meaning: "A cell that heads a column (§ 4.9.10)" },
    td: { value: "td", meaning: "A cell of data (§ 4.9.9)" },
    pre: { value: "pre", meaning: "Preformatted text: its lines and spaces are kept (§ 4.4.3)" },
    details: { value: "details", meaning: "Content the reader opens (§ 4.11.1)" },
    summary: { value: "summary", meaning: "What it says when closed (§ 4.11.2)" },
    section: { value: "section", meaning: "A section of a document, with its heading (§ 4.3.3)" },
    article: { value: "article", meaning: "A part that stands on its own: a node's card (§ 4.3.2)" },
    figure: { value: "figure", meaning: "A figure, with its caption (§ 4.4.12)" },
    figcaption: { value: "figcaption", meaning: "The caption of a figure (§ 4.4.13)" },
    button: { value: "button", meaning: "A button (§ 4.10.6)" },
    type: { value: "type", meaning: "What a button does (§ 4.10.6)" },
    buttonType: { value: "button", meaning: "A button that only runs the page's script: it submits nothing (§ 4.10.6)" },
    tabindex: { value: "tabindex", meaning: "An element that the keyboard can reach (§ 6.6.3)" },
    focusable: { value: "0", meaning: "Reached in the order of the document (§ 6.6.3)" },
    style: { value: "style", meaning: "Declarations of CSS for this element alone (§ 3.2.6)" },
    window: { value: "window", meaning: "The global object of a page's scripts (§ 7.2 The Window object)" },
    module: { value: "module", meaning: "The type of a script that is a module: deferred, it may wait at its top level (§ 4.12.1)" },
    b: { value: "b", meaning: "A run of text set apart, without more importance (§ 4.5.21)" },
    small: { value: "small", meaning: "A side comment, in smaller print (§ 4.5.4)" },
    h2: { value: "h2", meaning: "A heading of the second rank (§ 4.3.6)" },
    ol: { value: "ol", meaning: "A list whose order matters (§ 4.4.5)" },
    select: { value: "select", meaning: "A list of choices (§ 4.10.7)" },
    option: { value: "option", meaning: "A choice of a list (§ 4.10.10)" },
    optgroup: { value: "optgroup", meaning: "A group of choices, under its label (§ 4.10.9)" },
    input: { value: "input", meaning: "A field (§ 4.10.5)" },
    datalist: { value: "datalist", meaning: "The choices a field suggests (§ 4.10.8)" },
    label: { value: "label", meaning: "The label of a group of choices (§ 4.10.9)" },
    value: { value: "value", meaning: "The value of a choice (§ 4.10.10)" },
    selected: { value: "selected", meaning: "The choice that is chosen (§ 4.10.10)" },
    disabled: { value: "disabled", meaning: "A control the person cannot use (§ 4.10.18.5)" },
    title: { value: "title", meaning: "Advisory information on an element, shown as a tip (§ 3.2.6.1)" },
    list: { value: "list", meaning: "The identifier of the choices a field suggests (§ 4.10.5.3.9)" },
    placeholder: { value: "placeholder", meaning: "A hint shown in an empty field (§ 4.10.5.3.10)" },
    search: { value: "search", meaning: "The type of a field where the person searches (§ 4.10.5.1.3)" },
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
    link: { value: "link", meaning: "The role of an element that leads somewhere" },
    img: { value: "img", meaning: "The role of a drawing, read as one image with its label" },
    current: { value: "aria-current", meaning: "The element that is the current one of a set" },
    page: { value: "page", meaning: "The current page of a set of links" },
    expanded: { value: "aria-expanded", meaning: "Whether what the element controls is open" },
    button: { value: "button", meaning: "The role of an element that acts when activated" },
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
    text: { value: "text", meaning: "A line of text (§ 11.2)" },
    line: { value: "line", meaning: "A segment (§ 10.5)" },
    circle: { value: "circle", meaning: "A circle (§ 10.3)" },
    title: { value: "title", meaning: "What a shape is, said to whoever points at it (§ 5.9)" },
    defs: { value: "defs", meaning: "Definitions that other shapes refer to (§ 5.3)" },
    marker: { value: "marker", meaning: "A shape drawn at the end of a path: an arrowhead (§ 13.7)" },
    cx: { value: "cx", meaning: "The centre of a circle, across" },
    cy: { value: "cy", meaning: "Down" },
    r: { value: "r", meaning: "Its radius" },
    x1: { value: "x1", meaning: "The start of a segment, across" },
    y1: { value: "y1", meaning: "Down" },
    x2: { value: "x2", meaning: "Its end, across" },
    y2: { value: "y2", meaning: "Down" },
    transform: { value: "transform", meaning: "Moves a group (§ 8.5)" },
    translate: { value: "translate", meaning: "The move of a group: across, then down" },
    textAnchor: { value: "text-anchor", meaning: "Which point of a text its position gives (§ 11.10)" },
    middle: { value: "middle", meaning: "The middle of the text" },
    markerEnd: { value: "marker-end", meaning: "The marker drawn at the end of a path" },
    refX: { value: "refX", meaning: "The point of a marker placed on the end of the path, across" },
    refY: { value: "refY", meaning: "Down" },
    markerWidth: { value: "markerWidth", meaning: "The width a marker is drawn at" },
    markerHeight: { value: "markerHeight", meaning: "Its height" },
    orient: { value: "orient", meaning: "How a marker turns with the path" },
    autoStartReverse: { value: "auto-start-reverse", meaning: "Along the path, and the other way at its start" },
    strokeDasharray: { value: "stroke-dasharray", meaning: "The dashes of an outline" },
    opacity: { value: "opacity", meaning: "How opaque a shape is" },
    reference: { value: "url(#", meaning: "Opens a reference to an element of the page by its identifier (a marker)" },
    referenceEnd: { value: ")", meaning: "Closes it" },
    openArguments: { value: "(", meaning: "Opens the numbers of a transform" },
    closeArguments: { value: ")", meaning: "Closes them" },
    comma: { value: ",", meaning: "Separates two numbers of a pair" },
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
    comma: { value: ",", meaning: "Separates the selectors of a list (Selectors Level 4, § 4.1)" },
    width: { value: "width", meaning: "The width of a box (CSS Box Sizing Level 3)" },
    minWidth: { value: "min-width", meaning: "The width it does not go under" },
    maxWidth: { value: "max-width", meaning: "The width it does not go over" },
    percent: { value: "%", meaning: "A length as a share of the box that holds it" },
    whole: { value: 100, meaning: "The whole of the box that holds it, as a share" },
    pixel: { value: "px", meaning: "A length in CSS pixels" },
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
  packages: [HtmlGrammar],
  tag: "html",
  standard: Html,
  queryLanguage: TreeSitterQueries,
  reader: SyntaxReader,
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
  packages: [CssGrammar],
  tag: "css",
  standard: Css,
  queryLanguage: TreeSitterQueries,
  reader: SyntaxReader,
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
