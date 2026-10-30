/** Trame · Markdown */

import { standard } from "../kinds/standard"
import { syntax } from "../kinds/syntax"
import { Html, Uri } from "./standards"

/**
 * CommonMark
 * The Markdown syntax of the documents that Trame writes. The marks that several constructs share are here.
 */
export const CommonMark = standard({
  owner: "trame",
  source: "CommonMark Spec 0.31.2 (2024)",
  url: "https://spec.commonmark.org/0.31.2/",
  constants: {
    endOfLine: { value: "\n", meaning: "Ends a line (§ 2.1: a line feed, U+000A)" },
    space: { value: " ", meaning: "Separates a mark from what it introduces (§ 2.1: U+0020)" },
    backtick: { value: "`", meaning: "Delimits code, inline or in a block (§ 4.5, § 6.1)" },
    asterisk: { value: "*", meaning: "Delimits emphasis (§ 6.2)" },
  },
})

/**
 * GitHub Flavored Markdown
 * The extensions of CommonMark that Trame uses: tables.
 */
export const Gfm = standard({
  owner: "trame",
  source: "GitHub Flavored Markdown Spec 0.29-gfm (2019)",
  url: "https://github.github.com/gfm/",
  constants: {
    pipe: { value: "|", meaning: "Separates the cells of a table, and borders each row (§ 4.10)" },
  },
})

// The document ---------------------------------------------------------------------------

/**
 * Sequence of blocks
 * The lines of the document, joined. Between two blocks, an empty line; several empty lines make only one.
 */
export const Blocks = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "4.9 Blank lines",
  url: "https://spec.commonmark.org/0.31.2/#blank-lines",
  constants: {
    maxBlankLines: { value: 1, meaning: "The number of blank lines that separate two blocks, at most" },
  },
  write: ({ standard: { endOfLine }, maxBlankLines }) => (lines: string[]) => {
    const allowed = endOfLine.repeat(maxBlankLines + 1)
    const tooMany = allowed + endOfLine
    let text = lines.join(endOfLine)
    while (text.includes(tooMany)) text = text.split(tooMany).join(allowed)
    return text
  },
  examples: [
    { input: [["# Title", "", "", "Text", ""]], output: "# Title\n\nText\n" },
    { input: [["a", "b"]], output: "a\nb" },
  ],
})

/**
 * Heading
 * Hash signs, one per level, a space, then the text of the heading.
 */
export const Heading = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "4.2 ATX headings",
  url: "https://spec.commonmark.org/0.31.2/#atx-headings",
  constants: {
    hash: { value: "#", meaning: "Repeated as many times as the level of the heading" },
    maxLevel: { value: 6, meaning: "The deepest level: beyond six hash signs, the line is no longer a heading" },
  },
  write: ({ standard: { space }, hash, maxLevel }) => (level: number, text: string) =>
    hash.repeat(Math.min(level, maxLevel)) + space + text,
  examples: [
    { input: [2, "Goals"], output: "## Goals" },
    { input: [9, "Very deep"], output: "###### Very deep" },
  ],
})

/**
 * List item
 * A bullet, a space, then the content of the item.
 */
export const ListItem = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "5.2 List items",
  url: "https://spec.commonmark.org/0.31.2/#list-items",
  constants: {
    bullet: { value: "-", meaning: "Marks an item of an unordered list" },
  },
  write: ({ standard: { space }, bullet }) => (text: string) => bullet + space + text,
  examples: [{ input: ["Owner: trame"], output: "- Owner: trame" }],
})

/**
 * Block quote
 * A greater-than sign, a space, then the quoted text.
 */
export const BlockQuote = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "5.1 Block quotes",
  url: "https://spec.commonmark.org/0.31.2/#block-quotes",
  constants: {
    marker: { value: ">", meaning: "Marks a line of a block quote" },
  },
  write: ({ standard: { space }, marker }) => (text: string) => marker + space + text,
  examples: [{ input: ["All of them apply."], output: "> All of them apply." }],
})

/**
 * Backtick string
 * What delimits code: backticks, more of them than in any run in the delimited text, so that the text does not close it.
 */
export const BacktickString = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "6.1 Code spans (backtick string); 4.5 Fenced code blocks",
  url: "https://spec.commonmark.org/0.31.2/#backtick-string",
  constants: {},
  write: ({ standard: { backtick } }) => (text: string, minLength: number) => {
    let longest = 0
    let current = 0
    for (const c of text) {
      current = c === backtick ? current + 1 : 0
      longest = Math.max(longest, current)
    }
    return backtick.repeat(Math.max(minLength, longest + 1))
  },
  examples: [
    { input: ["trame.json", 1], output: "`" },
    { input: ["a`b", 1], output: "``" },
    { input: ["const x = 1", 3], output: "```" },
    { input: ["```ts\nx\n```", 3], output: "````" },
  ],
})

/**
 * Code block
 * A fence of backticks followed by the language, the lines of the code, then the same fence. The fence is longer
 * than any run of backticks in the code: a code block can show another one.
 */
export const CodeBlock = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "4.5 Fenced code blocks",
  url: "https://spec.commonmark.org/0.31.2/#fenced-code-blocks",
  constants: {
    length: { value: 3, meaning: "A fence has at least three backticks" },
  },
  deps: { backtickString: BacktickString },
  write: ({ standard: { endOfLine }, length, backtickString }) => (language: string, lines: string[]) => {
    const fence = backtickString(lines.join(endOfLine), length)
    return [fence + language, ...lines, fence]
  },
  examples: [
    { input: ["ts", ["const x = 1"]], output: ["```ts", "const x = 1", "```"] },
    { input: ["md", ["```ts", "x", "```"]], output: ["````md", "```ts", "x", "```", "````"] },
  ],
})

// Inline ---------------------------------------------------------------------------------

/**
 * Emphasis
 * The text between two single asterisks.
 */
export const Emphasis = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "6.2 Emphasis",
  url: "https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis",
  constants: {
    count: { value: 1, meaning: "One asterisk on each side" },
  },
  write: ({ standard: { asterisk }, count }) => (text: string) => asterisk.repeat(count) + text + asterisk.repeat(count),
  examples: [{ input: ["The graph in force"], output: "*The graph in force*" }],
})

/**
 * Strong emphasis
 * The text between two double asterisks: a status, a value to decide.
 */
export const StrongEmphasis = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "6.2 Strong emphasis",
  url: "https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis",
  constants: {
    count: { value: 2, meaning: "Two asterisks on each side" },
  },
  write: ({ standard: { asterisk }, count }) => (text: string) => asterisk.repeat(count) + text + asterisk.repeat(count),
  examples: [{ input: ["held"], output: "**held**" }],
})

/**
 * Code span
 * A name, a path, a value as written in the code: between backticks. A text that contains backticks is
 * delimited by a longer string; if it starts or ends with a backtick, a space separates it (removed when read).
 */
export const CodeSpan = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "6.1 Code spans",
  url: "https://spec.commonmark.org/0.31.2/#code-spans",
  constants: {
    minLength: { value: 1, meaning: "A single backtick is enough, if the text contains none" },
  },
  deps: { backtickString: BacktickString },
  write: ({ standard: { backtick, space }, minLength, backtickString }) => (text: string) => {
    const delimiter = backtickString(text, minLength)
    const padded = text.startsWith(backtick) || text.endsWith(backtick) ||
      (text.startsWith(space) && text.endsWith(space) && [...text].some((c) => c !== space))
    const margin = padded ? space : ""
    return delimiter + margin + text + margin + delimiter
  },
  examples: [
    { input: ["trame.json"], output: "`trame.json`" },
    { input: ["a`b"], output: "``a`b``" },
    { input: ["`written: ${…}`"], output: "`` `written: ${…}` ``" },
    { input: [" x "], output: "`  x  `" },
  ],
})

/**
 * Link
 * The text of the link between square brackets, then its destination between parentheses.
 */
export const Link = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "6.3 Links",
  url: "https://spec.commonmark.org/0.31.2/#links",
  constants: {
    openText: { value: "[", meaning: "Opens the text of the link" },
    closeText: { value: "]", meaning: "Closes the text of the link" },
    openDestination: { value: "(", meaning: "Opens the destination" },
    closeDestination: { value: ")", meaning: "Closes the destination" },
  },
  write: ({ openText, closeText, openDestination, closeDestination }) => (text: string, destination: string) =>
    openText + text + closeText + openDestination + destination + closeDestination,
  examples: [{ input: ["Goal", "product.md#Goal"], output: "[Goal](product.md#Goal)" }],
})

/**
 * Relative reference
 * The address of a document in the same folder (its last segment), followed by an anchor; or the anchor alone, in the document itself.
 */
export const RelativeReference = syntax({
  owner: "trame",
  standard: Uri,
  section: "4.2 Relative reference; 3.5 Fragment",
  url: "https://www.rfc-editor.org/rfc/rfc3986#section-4.2",
  constants: {
    segment: { value: "/", meaning: "Separates the segments of a path" },
    fragment: { value: "#", meaning: "Introduces the fragment: the anchor, in the target document" },
  },
  write: ({ segment, fragment }) => (path: string | undefined, anchor?: string) =>
    (path === undefined ? "" : path.slice(path.lastIndexOf(segment) + 1)) + (anchor === undefined ? "" : fragment + anchor),
  examples: [
    { input: ["docs/product.md", "Goal"], output: "product.md#Goal" },
    { input: [undefined, "Graph"], output: "#Graph" },
    { input: ["docs/product.md"], output: "product.md" },
  ],
})

// Tables ---------------------------------------------------------------------------------

/**
 * Table cell
 * The content of a cell fits on one line, and a pipe in it is escaped.
 */
export const TableCell = syntax({
  owner: "trame",
  standard: Gfm,
  section: "4.10 Tables: a pipe in a cell",
  url: "https://github.github.com/gfm/#tables-extension-",
  constants: {
    escape: { value: "\\", meaning: "Comes before a pipe that belongs to the content" },
  },
  deps: { commonMark: CommonMark },
  write: ({ standard: { pipe }, escape, commonMark: { endOfLine, space } }) => (text: string) =>
    text.split(pipe).join(escape + pipe).split(endOfLine).join(space),
  examples: [{ input: ["a | b\nc"], output: "a \\| b c" }],
})

/**
 * Table row
 * The cells, separated and bordered by pipes, with a space on each side.
 */
export const TableRow = syntax({
  owner: "trame",
  standard: Gfm,
  section: "4.10 Tables: a row",
  url: "https://github.github.com/gfm/#tables-extension-",
  constants: {},
  deps: { commonMark: CommonMark },
  write: ({ standard: { pipe }, commonMark: { space } }) => (cells: string[]) =>
    pipe + space + cells.join(space + pipe + space) + space + pipe,
  examples: [{ input: [["Name", "Role"]], output: "| Name | Role |" }],
})

/**
 * Delimiter row
 * Under the header: dashes for each column, between pipes.
 */
export const TableDelimiterRow = syntax({
  owner: "trame",
  standard: Gfm,
  section: "4.10 Tables: the delimiter row",
  url: "https://github.github.com/gfm/#tables-extension-",
  constants: {
    dash: { value: "-", meaning: "Fills the delimiter cell of a column" },
    length: { value: 3, meaning: "The number of dashes per column" },
  },
  write: ({ standard: { pipe }, dash, length }) => (columns: number) =>
    pipe + Array.from({ length: columns }, () => dash.repeat(length)).join(pipe) + pipe,
  examples: [{ input: [3], output: "|---|---|---|" }],
})

/**
 * Table
 * The header row, the delimiter row, then one row per record. The cells arrive already written.
 */
export const Table = syntax({
  owner: "trame",
  standard: Gfm,
  section: "4.10 Tables",
  url: "https://github.github.com/gfm/#tables-extension-",
  constants: {},
  deps: { row: TableRow, delimiterRow: TableDelimiterRow },
  write: ({ row, delimiterRow }) => (header: string[], rows: string[][]) => [row(header), delimiterRow(header.length), ...rows.map(row)],
  examples: [{ input: [["Name", "Role"], [["Ada", "author"]]], output: ["| Name | Role |", "|---|---|", "| Ada | author |"] }],
})

// The HTML that the documents use --------------------------------------------------------

/**
 * Start tag
 * The name of the element, then its attributes, each name="value".
 */
export const HtmlStartTag = syntax({
  owner: "trame",
  standard: Html,
  section: "13.1.2.1 Start tags; 13.1.2.3 Attributes",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#start-tags",
  constants: {
    equals: { value: "=", meaning: "Separates the name of an attribute from its value" },
    quote: { value: "\"", meaning: "Surrounds the value of an attribute" },
  },
  deps: { commonMark: CommonMark },
  write: ({ standard: { lessThan, greaterThan }, equals, quote, commonMark: { space } }) => (name: string, attributes: Record<string, string>) =>
    lessThan + name + Object.entries(attributes).map(([a, v]) => space + a + equals + quote + v + quote).join("") + greaterThan,
  examples: [{ input: ["a", { id: "Goal" }], output: "<a id=\"Goal\">" }],
})

/**
 * End tag
 */
export const HtmlEndTag = syntax({
  owner: "trame",
  standard: Html,
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
 * The start tag, the content, the end tag.
 */
export const HtmlElement = syntax({
  owner: "trame",
  standard: Html,
  section: "13.1.2 Elements",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
  constants: {},
  deps: { startTag: HtmlStartTag, endTag: HtmlEndTag },
  write: ({ startTag, endTag }) => (name: string, attributes: Record<string, string>, content: string) => startTag(name, attributes) + content + endTag(name),
  examples: [{ input: ["summary", {}, "The code"], output: "<summary>The code</summary>" }],
})

/**
 * Anchor
 * An empty element that carries an identifier: the target of links to a node or a section.
 */
export const Anchor = syntax({
  owner: "trame",
  standard: Html,
  section: "4.5.1 The a element; 3.2.6 The id attribute",
  url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
  constants: {
    tag: { value: "a", meaning: "The link element, here without content" },
    attribute: { value: "id", meaning: "The identifier that the fragment of an address targets" },
  },
  deps: { element: HtmlElement },
  write: ({ tag, attribute, element }) => (id: string) => element(tag, { [attribute]: id }, ""),
  examples: [{ input: ["Goal"], output: "<a id=\"Goal\"></a>" }],
})

/**
 * Small text
 * A side note, in small print: the kind of a node under its title, in a figure.
 */
export const Small = syntax({
  owner: "trame",
  standard: Html,
  section: "4.5.4 The small element",
  url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element",
  constants: {
    tag: { value: "small", meaning: "A side note, in small print" },
  },
  deps: { element: HtmlElement },
  write: ({ tag, element }) => (text: string) => element(tag, {}, text),
  examples: [{ input: ["Decision"], output: "<small>Decision</small>" }],
})

/**
 * Collapsible block
 * A summary that is always visible; the rest unfolds. An empty line after the summary: the content is Markdown again.
 */
export const Details = syntax({
  owner: "trame",
  standard: Html,
  section: "4.11.1 The details element; 4.11.2 The summary element",
  url: "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
  constants: {
    tag: { value: "details", meaning: "The collapsible block" },
    summary: { value: "summary", meaning: "Its summary, always visible" },
  },
  deps: { startTag: HtmlStartTag, endTag: HtmlEndTag, element: HtmlElement },
  write: ({ tag, summary, startTag, endTag, element }) => (title: string, lines: string[]) =>
    [startTag(tag, {}) + element(summary, {}, title), "", ...lines, endTag(tag)],
  examples: [{ input: ["The code", ["x"]], output: ["<details><summary>The code</summary>", "", "x", "</details>"] }],
})
