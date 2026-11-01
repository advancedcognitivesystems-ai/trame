/** Continuous integration · YAML */

import { standard } from "#trame/kinds/standard"
import { syntax } from "#trame/kinds/syntax"
import { OneWriterPerPlace } from "./product"

// The YAML a workflow is written in: a writer builds the document as nodes (mappings with their keys in order,
// sequences, texts, numbers, literal blocks), and one syntax element writes them in the block style.

/**
 * A node of a YAML document, as a writer builds it: a mapping (its keys in order), a sequence, a text, a number, lines
 * kept as they are (a literal block); a node with none of them is empty (a key with nothing after it).
 */
export interface YamlNode {
  readonly map?: readonly (readonly [string, YamlNode])[]
  readonly list?: readonly YamlNode[]
  readonly text?: string
  readonly number?: number
  readonly lines?: readonly string[]
}

/**
 * YAML
 * The marks of a YAML document in the block style: what ends a key, opens an entry of a sequence, opens a literal block,
 * opens a comment, ends a line.
 */
export const Yaml = standard({
  owner: "trame",
  serves: [OneWriterPerPlace],
  source: "YAML Ain't Markup Language, version 1.2.2 (2021): § 5.4 line breaks, § 6.6 comments, § 8.1.2 literal style, § 8.2.1 block sequences, § 8.2.2 block mappings",
  url: "https://yaml.org/spec/1.2.2/",
  constants: {
    colon: { value: ":", meaning: "Ends the key of an entry of a mapping (§ 8.2.2)" },
    space: { value: " ", meaning: "Separates a key's colon, a sequence's dash or a comment's mark from what follows" },
    dash: { value: "-", meaning: "Opens an entry of a block sequence (§ 8.2.1)" },
    literal: { value: "|", meaning: "Opens a literal block: the lines under it, deeper, are kept as they are (§ 8.1.2)" },
    comment: { value: "#", meaning: "Opens a comment, to the end of the line (§ 6.6)" },
    endOfLine: { value: "\n", meaning: "Ends a line: a line feed (§ 5.4)" },
  },
})

/**
 * A YAML document
 * The comment lines that head it, then its nodes in the block style: a key and its text on one line, a key alone over
 * what it holds, one level deeper; an entry of a sequence after a dash, a mapping in it starting on the dash's line;
 * lines kept as they are in a literal block. A text is written as it is when YAML reads it back the same, otherwise in
 * double quotes, as JSON writes a string (YAML 1.2 reads JSON's strings).
 */
export const YamlDocument = syntax({
  owner: "trame",
  standard: Yaml,
  section: "§ 8.2 Block collection styles; § 7.3.1 Double-quoted style",
  url: "https://yaml.org/spec/1.2.2/#82-block-collection-styles",
  constants: {
    indent: { value: "  ", meaning: "One level deeper: two spaces, as wide as a dash and its space, as GitHub's examples write it" },
    top: { value: "", meaning: "No indentation: the keys of the document itself" },
    plain: {
      value: "^[A-Za-z0-9][A-Za-z0-9._/@ -]*[A-Za-z0-9._/@-]$|^[A-Za-z0-9]$",
      meaning: "A text written without quotes: letters, digits, and marks that mean nothing to YAML inside a text, without a space at its end",
    },
  },
  write: ({ standard: { colon, space, dash, literal, comment, endOfLine }, indent, top, plain }) => {
    const bare = new RegExp(plain)
    const scalar = (n: YamlNode): string | undefined =>
      n.text !== undefined ? (bare.test(n.text) ? n.text : JSON.stringify(n.text)) : n.number !== undefined ? String(n.number) : undefined
    /** A key and what it holds, at a depth. */
    const entry = (head: string, value: YamlNode, depth: string): string[] => {
      const one = scalar(value)
      if (one !== undefined) return [head + space + one]
      if (value.lines) return [head + space + literal, ...value.lines.map((l) => depth + indent + l)]
      if (value.map || value.list) return [head, ...block(value, depth + indent)]
      return [head]
    }
    /** A mapping's entries or a sequence's, at a depth. */
    const block = (n: YamlNode, depth: string): string[] => {
      if (n.map) return n.map.flatMap(([key, value]) => entry(depth + key + colon, value, depth))
      return (n.list ?? []).flatMap((value) => {
        const one = scalar(value)
        if (one !== undefined) return [depth + dash + space + one]
        // A mapping in a sequence: its first entry on the dash's line, the others under it.
        const [first, ...rest] = block(value, depth + indent)
        return first === undefined ? [depth + dash] : [depth + dash + space + first.slice((depth + indent).length), ...rest]
      })
    }
    return (heading: readonly string[], document: YamlNode): string =>
      [...heading.map((h) => comment + space + h), ...block(document, top)].join(endOfLine) + endOfLine
  },
  examples: [
    {
      input: [["Written from the graph"], { map: [["name", { text: "A preview" }], ["on", { map: [["workflow_dispatch", {}]] }]] }],
      output: "# Written from the graph\nname: A preview\non:\n  workflow_dispatch:\n",
    },
    {
      input: [[], { map: [["steps", { list: [
        { map: [["uses", { text: "actions/setup-node@v4" }], ["with", { map: [["node-version", { number: 22 }]] }]] },
        { map: [["run", { text: "trame.sh ship Preview --by \"${{ github.actor }}\"" }], ["working-directory", { text: "apps/poselia" }]] },
        { map: [["with", { map: [["path", { lines: ["apps/poselia/evidence", "apps/poselia/dist/poselia.html"] }]] }]] },
      ] }]] }],
      output: "steps:\n  - uses: actions/setup-node@v4\n    with:\n      node-version: 22\n  - run: \"trame.sh ship Preview --by \\\"${{ github.actor }}\\\"\"\n    working-directory: apps/poselia\n  - with:\n      path: |\n        apps/poselia/evidence\n        apps/poselia/dist/poselia.html\n",
    },
    {
      input: [[], { map: [["branches", { list: [{ text: "main" }, { text: "release/*" }] }], ["if", { text: "always()" }]] }],
      output: "branches:\n  - main\n  - \"release/*\"\nif: \"always()\"\n",
    },
  ],
})
