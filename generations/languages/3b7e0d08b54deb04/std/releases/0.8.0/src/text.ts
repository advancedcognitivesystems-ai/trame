/** Standard library · Text */

import { standard } from "../../../../kinds/standard"
import { CitedNotCopied } from "./product"

// Text as files and tools write it: lines, characters a reader cannot see, places in a file, differences.

/**
 * Text file
 * What a line of a text file is: characters, then a newline, the last line included.
 */
export const TextFile = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "POSIX.1-2017, Base Definitions, § 3.206 Line and § 3.403 Text File",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_206",
  constants: {
    endOfLine: { value: "\n", meaning: "Ends each line, the last one included" },
  },
})

/**
 * Characters that do not show
 * The control characters (U+0000 to U+001F), the no-break space (U+00A0) and the line and paragraph separators (U+2028,
 * U+2029): written as they are, a reader cannot see them. JSON escapes the control characters, and leaves the others as
 * they are.
 */
export const InvisibleCharacters = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "The Unicode Standard 15.1, § 23.1 Control Codes, § 6.2 General Punctuation (U+00A0, U+2028, U+2029); RFC 8259 § 7",
  url: "https://www.unicode.org/versions/Unicode15.1.0/",
  constants: {
    hidden: { value: "[\\u0000-\\u001f\\u00a0\\u2028\\u2029]", meaning: "Every character a reader cannot see, as a class of a regular expression" },
    leftByJson: { value: "[\\u00a0\\u2028\\u2029]", meaning: "Those of them that JSON writes as they are" },
  },
})

/**
 * Positions in a file
 * How a message designates a place in a file: "file:line", the first line having the number 1.
 */
export const GnuPositions = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "GNU Coding Standards, § 4.4 Formatting Error Messages",
  url: "https://www.gnu.org/prep/standards/html_node/Errors.html",
  constants: {
    firstLine: { value: 1, meaning: "The number of the first line of a file" },
    firstColumn: { value: 1, meaning: "The number of the first column of a line" },
    separator: { value: ":", meaning: "Separates the file from the line number" },
  },
})

/**
 * Unified differences
 * How two files or two trees differ, as GNU diff writes it: a header per pair of files, the lines removed and added,
 * the files that only one tree holds.
 */
export const UnifiedDiff = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "GNU diffutils: Comparing and Merging Files, § 2.2.3 Unified Format and § 4 Comparing Directories; POSIX.1-2017, diff",
  url: "https://www.gnu.org/software/diffutils/manual/html_node/Unified-Format.html",
  constants: {
    program: { value: "diff", meaning: "The program that compares" },
    options: { value: "-ru", meaning: "Recursively, in the unified format" },
    same: { value: 0, meaning: "The exit status when nothing differs" },
    differ: { value: 1, meaning: "The exit status when something differs" },
    header: { value: "diff ", meaning: "Opens the differences of a pair of files" },
    onlyIn: { value: "Only in ", meaning: "A file that only one tree holds" },
    oldFile: { value: "---", meaning: "Names the first file of a pair" },
    newFile: { value: "+++", meaning: "Names the second file of a pair" },
    removed: { value: "-", meaning: "Begins a line of the first file that the second does not have" },
    added: { value: "+", meaning: "Begins a line of the second file that the first does not have" },
  },
})
