/** Trame · Terminal text */

import { decision } from "../kinds/decision"
import { standard } from "../kinds/standard"
import { syntax } from "../kinds/syntax"
import { TextFile } from "../std/src/text"
import { Counts, Sequences, Texts } from "../std/src/algebra"

// What the terminal shows is a format of Trame's own: a decision defines it, and its syntax elements write it, as the
// elements of the Markdown spec write Trame's documents. Where a construct draws, it draws with Unicode characters.

/**
 * Terminal text
 * What Trame shows in a terminal is plain text in lines, read in a monospace font: no markup, no colour, no control
 * sequence. Position shows the structure: what belongs to something is indented under it, one step per level; columns
 * are aligned with spaces; trees and paths are drawn with box-drawing characters. Several blank lines in a row make
 * one, and the text ends with an end of line. Each construct declares its own marks in its syntax element; the marks
 * they share are here: the space that aligns, the step of indentation, the blank lines allowed in a row.
 */
export const TerminalText = decision<{ space: string; indent: string; maxBlankLines: number }>({
  owner: "trame",
  value: { space: " ", indent: "  ", maxBlankLines: 1 },
  rejected: {
    "Markdown": "a terminal does not render it: its marks would be read as they are",
    "Colours and control sequences": "an output is not always a terminal (a file, a pipe, a test): the text must say everything without them, and it is compared line by line from one generation to the next",
    "Tabs": "their width depends on the terminal: columns would no longer line up",
  },
})

/**
 * Columns in the terminal
 * The terminal shows tables as columns of text: each column as wide as its widest cell, then a gap. Lines written one
 * at a time (a report as it goes, the issues of a list, the layers of the graph) do not know their widest cell: their
 * columns have a fixed width, the rank of a layer, the severity and the source of an issue, the name of a kind or of a
 * view. A text too wide for its column still keeps the smallest gap before the next one.
 */
export const TerminalColumns = decision<{ gap: number; minimumGap: number; widths: { rank: number; severity: number; source: number; name: number } }>({
  owner: "trame",
  value: { gap: 2, minimumGap: 1, widths: { rank: 9, severity: 15, source: 22, name: 14 } },
})

/**
 * Box drawing
 * The characters of the Unicode Standard that draw lines across the cells of a monospace grid: Trame draws the
 * branches of a tree and the steps of a path with them.
 */
export const BoxDrawing = standard({
  owner: "trame",
  source: "The Unicode Standard, Version 15.1, code chart Box Drawing (U+2500 to U+257F)",
  url: "https://www.unicode.org/charts/PDF/U2500.pdf",
  constants: {
    vertical: { value: "│", meaning: "U+2502 BOX DRAWINGS LIGHT VERTICAL: a line that goes on below" },
    verticalAndRight: { value: "├", meaning: "U+251C BOX DRAWINGS LIGHT VERTICAL AND RIGHT: a branch, with others below it" },
    upAndRight: { value: "└", meaning: "U+2514 BOX DRAWINGS LIGHT UP AND RIGHT: the last branch, or a step under the one before" },
  },
})

// Columns ---------------------------------------------------------------------------------

/**
 * Padded cell
 * A text, then spaces up to the width of its column. A text too wide keeps the smallest gap before what follows.
 * Widths count characters, as a monospace font shows them.
 */
export const PaddedCell = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Columns",
  constants: {},
  deps: { columns: TerminalColumns },
  write: ({ standard: { space }, columns: { minimumGap } }) => (text: string, width: number) =>
    text + space.repeat(Math.max(minimumGap, width - [...text].length)),
  examples: [
    { input: ["held", 8], output: "held    " },
    { input: ["a long name", 4], output: "a long name " },
  ],
})

/**
 * Columns
 * Rows of cells aligned in columns, under the same indentation: each column as wide as its widest cell, then the gap.
 * The last column is not padded, since nothing follows it. A head, when there is one, is written in capitals.
 */
export const Columns = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Columns",
  constants: {},
  deps: { cell: PaddedCell, columns: TerminalColumns, texts: Texts, sequences: Sequences },
  write: ({ cell, columns: { gap }, texts: { concat, optional }, sequences: { isLast } }) =>
    (head: readonly string[] | undefined, rows: readonly (readonly string[])[], indent: string) => {
      const all = head ? [head, ...rows] : rows
      const n = Math.max(...all.map((r) => r.length))
      const widths = Array.from({ length: n }, (_, i) => Math.max(...all.map((r) => [...optional(r[i])].length)))
      const line = (r: readonly string[]) => indent + concat(r.map((x, i) => (isLast(r, i) ? x : cell(x, widths[i] + gap)))).trimEnd()
      return [...(head ? [line(head.map((h) => h.toUpperCase()))] : []), ...rows.map(line)]
    },
  examples: [
    { input: [undefined, [["Owner", "trame"], ["Review planned", "1 March 2027"]], "  "], output: ["  Owner           trame", "  Review planned  1 March 2027"] },
    { input: [["Name", "Kind"], [["Text", "function"]], ""], output: ["NAME  KIND", "Text  function"] },
  ],
})

// Lines -----------------------------------------------------------------------------------

/**
 * Item line
 * An item of a list, under the indentation of its list: a hyphen, a space, then the item.
 */
export const ItemLine = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Lists",
  constants: {
    bullet: { value: "-", meaning: "Marks an item of a list" },
  },
  write: ({ standard: { space }, bullet }) => (indent: string, item: string) => indent + bullet + space + item,
  examples: [{ input: ["  ", "Owner: trame"], output: "  - Owner: trame" }],
})

/**
 * Code lines
 * A text shown as it is (code, what a program wrote): each of its lines behind a margin wider than a step of
 * indentation, so that it stands apart from the text around it.
 */
export const CodeLines = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Code",
  constants: {
    margin: { value: "    ", meaning: "Four spaces before each line: two steps of indentation" },
  },
  deps: { file: TextFile },
  write: ({ margin, file: { endOfLine } }) => (indent: string, code: string) => code.split(endOfLine).map((line) => indent + margin + line),
  examples: [{ input: ["  ", "const a = 1\nexport default a"], output: ["      const a = 1", "      export default a"] }],
})

/**
 * Lines of the terminal
 * The lines of what the terminal shows, joined into one text: several blank lines in a row make as many as the format
 * allows, the text does not end with blanks, and it ends with an end of line.
 */
export const TerminalLines = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Lines",
  constants: {},
  deps: { file: TextFile, counts: Counts },
  write: ({ standard: { maxBlankLines }, file: { endOfLine }, counts }) => (lines: readonly string[]) => {
    // n blank lines in a row: n + 1 ends of line.
    const allowed = endOfLine.repeat(counts.next(maxBlankLines))
    const tooMany = allowed + endOfLine
    let text = lines.join(endOfLine)
    while (text.includes(tooMany)) text = text.split(tooMany).join(allowed)
    return text.trimEnd() + endOfLine
  },
  examples: [
    { input: [["Layers", "", "", "", "rank 1   Goals", "  "]], output: "Layers\n\nrank 1   Goals\n" },
    { input: [["a", "b"]], output: "a\nb\n" },
  ],
})

// Figures ---------------------------------------------------------------------------------

/**
 * Tree branch
 * A branch of a tree, under its parent: the lines already drawn on its left, a corner (the last branch) or a tee (a
 * branch with others below it), the name of the link, then the node it leads to. What hangs under the branch carries
 * the same lines, and a vertical line while other branches follow; the space of the corner and its space otherwise.
 */
export const TreeBranch = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Trees",
  constants: {},
  deps: { box: BoxDrawing },
  write: ({ standard: { space }, box: { vertical, verticalAndRight, upAndRight } }) =>
    (left: string, last: boolean, link: string, node: string) => ({
      line: left + (last ? upAndRight : verticalAndRight) + space + link + space + node,
      under: left + (last ? space : vertical) + space,
    }),
  examples: [
    { input: ["", false, "serves", "Bookings (goal)"], output: { line: "├ serves Bookings (goal)", under: "│ " } },
    { input: ["│ ", true, "uses", "Store (port)"], output: { line: "│ └ uses Store (port)", under: "│   " } },
  ],
})

/**
 * Path step
 * A step of a path, under the step before it: shifted to the right by its position, a corner, the name of the link,
 * then the node.
 */
export const PathStep = syntax({
  owner: "trame",
  standard: TerminalText,
  section: "Paths",
  constants: {
    shift: { value: "   ", meaning: "Three spaces per position: the corner of the step before, its space, and one more" },
  },
  deps: { box: BoxDrawing },
  write: ({ standard: { space }, shift, box: { upAndRight } }) => (position: number, link: string, node: string) =>
    shift.repeat(position) + upAndRight + space + link + space + node,
  examples: [
    { input: [0, "serves", "Bookings (goal)"], output: "└ serves Bookings (goal)" },
    { input: [2, "uses", "Store (port)"], output: "      └ uses Store (port)" },
  ],
})
