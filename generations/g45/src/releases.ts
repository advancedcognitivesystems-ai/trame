/** Trame · Releases */

// Written by trame advance at each promotion, from the releases already here and the generation it freezes: do not
// edit. A generation's own release is written after its graph is copied, so it is not in its own copy.

import { release } from "../kinds/release"
import { TrameCli } from "./architecture"

/**
 * Generation 1
 */
export const G1 = release({
  owner: "trame",
  component: TrameCli,
  version: "g1",
  date: "2026-10-17",
  what: "A node can declare its constants; its body receives them as parameters",
  fingerprint: "be0e0abd65fe24ce",
  language: "own",
})

/**
 * Generation 2
 */
export const G2 = release({
  owner: "trame",
  component: TrameCli,
  version: "g2",
  date: "2026-10-17",
  what: "The Markdown spec: 19 syntax elements; the Markdown renderer composes them; the page receives the engine's renderings",
  fingerprint: "7252e7e1678a47fa",
  language: "own",
  assembledBy: G1,
})

/**
 * Generation 3
 */
export const G3 = release({
  owner: "trame",
  component: TrameCli,
  version: "g3",
  date: "2026-10-17",
  what: "Code spans and code blocks follow CommonMark (the \"backtick string\" element)",
  fingerprint: "e731437b5da9ad5e",
  language: "own",
  differences: "ecarts.diff",
  assembledBy: G2,
})

/**
 * Generation 4
 */
export const G4 = release({
  owner: "trame",
  component: TrameCli,
  version: "g4",
  date: "2026-10-17",
  what: "A constant surrounded by spaces is shown between quotes",
  fingerprint: "5f1f31d75479e8c8",
  language: "own",
  differences: "ecarts.diff",
  assembledBy: G3,
})

/**
 * Generation 5
 */
export const G5 = release({
  owner: "trame",
  component: TrameCli,
  version: "g5",
  date: "2026-10-17",
  what: "The style of history nodes is written `stroke-dasharray:4 3`, without a space; a wanted difference on the example is declared in the graph",
  fingerprint: "bd17ecaa9fd4cdc7",
  language: "own",
  differences: "ecarts.diff",
  assembledBy: G4,
})

/**
 * Generation 6
 */
export const G6 = release({
  owner: "trame",
  component: TrameCli,
  version: "g6",
  date: "2026-10-17",
  what: "The Mermaid spec: 14 elements; the display choices as decisions; a figure renderer that composes the spec",
  fingerprint: "da2cb6aad88f9d95",
  language: "own",
  assembledBy: G5,
})

/**
 * Generation 7
 */
export const G7 = release({
  owner: "trame",
  component: TrameCli,
  version: "g7",
  date: "2026-10-18",
  what: "No literal is let through any more: 0, 1 and `\"\"` are recorded like the others; each literal carries its role",
  fingerprint: "83690982c0d0e95a",
  language: "own",
  differences: "ecarts.diff",
  assembledBy: G6,
})

/**
 * Generation 8
 */
export const G8 = release({
  owner: "trame",
  component: TrameCli,
  version: "g8",
  date: "2026-10-18",
  what: "The domain behind those values: POSIX exit status, severity order, positions, depth-first search, Trame references…",
  fingerprint: "df45bf57c8925c55",
  language: "own",
  assembledBy: G7,
})

/**
 * Generation 9
 */
export const G9 = release({
  owner: "trame",
  component: TrameCli,
  version: "g9",
  date: "2026-10-18",
  what: "The whole workspace in English; messages in catalog nodes, in the language the graph decides; assembly always frozen",
  fingerprint: "5e8f445aa20a896f",
  language: "shared",
  differences: "differences.diff",
  assembledBy: G8,
})

/**
 * Generation 10
 */
export const G10 = release({
  owner: "trame",
  component: TrameCli,
  version: "g10",
  date: "2026-10-18",
  what: "The language's vocabulary values in English; the transitional aliases removed. Built as g9, character for character",
  fingerprint: "d12448c3f1e4ff27",
  language: "shared",
  assembledBy: G9,
})

/**
 * Generation 11
 */
export const G11 = release({
  owner: "trame",
  component: TrameCli,
  version: "g11",
  date: "2026-10-18",
  what: "Freezing writes only plain JSON data, checked at every depth; the program's variables avoid ECMAScript's reserved words",
  fingerprint: "4b677ea8158491d1",
  language: "shared",
  assembledBy: G10,
})

/**
 * Generation 12
 */
export const G12 = release({
  owner: "trame",
  component: TrameCli,
  version: "g12",
  date: "2026-10-18",
  what: "The export command is the node `Export` again: g11 assembles it as `commands_export`",
  fingerprint: "3f6083e2d55c3d8d",
  language: "shared",
  assembledBy: G11,
})

/**
 * Generation 13
 */
export const G13 = release({
  owner: "trame",
  component: TrameCli,
  version: "g13",
  date: "2026-10-18",
  what: "The `structure` kind and the `algebra` module (Counts, Sequences, Texts), whose laws are played at every compilation; the engine's core writes no 0, 1 or `\"\"` any more",
  fingerprint: "83bc969f0c085070",
  language: "shared",
  assembledBy: G12,
})

/**
 * Generation 14
 */
export const G14 = release({
  owner: "trame",
  component: TrameCli,
  version: "g14",
  date: "2026-10-18",
  what: "Documents as blocks: a `BlankLine` element closes each Markdown block; \"A, B and C\" comes from the language (Intl.ListFormat); the empty text shows as `\"\"` in constant tables",
  fingerprint: "513aee60abaff3ed",
  language: "shared",
  differences: "differences.diff",
  assembledBy: G13,
})

/**
 * Generation 15
 */
export const G15 = release({
  owner: "trame",
  component: TrameCli,
  version: "g15",
  date: "2026-10-18",
  what: "Commands, platform and scenarios: arguments named by destructuring, options taken by position, `NodeArguments`, `Iso8601`",
  fingerprint: "c95a45534a5d0b1e",
  language: "shared",
  assembledBy: G14,
})

/**
 * Generation 16
 */
export const G16 = release({
  owner: "trame",
  component: TrameCli,
  version: "g16",
  date: "2026-10-18",
  what: "The laws draw from decided ranges (`SampledValues`); Trame's bodies write no 0, 1 or `\"\"` any more",
  fingerprint: "2554e025a41c2360",
  language: "shared",
  assembledBy: G15,
})

/**
 * Generation 17
 */
export const G17 = release({
  owner: "trame",
  component: TrameCli,
  version: "g17",
  date: "2026-10-18",
  what: "The lock: `trame.json` refuses 0, 1, -1 and `\"\"` in bodies unless something declares them; the assembly of a graph that writes one is refused",
  fingerprint: "0548196056128b46",
  language: "shared",
  differences: "differences.diff",
  assembledBy: G16,
})

/**
 * Generation 18
 */
export const G18 = release({
  owner: "trame",
  component: TrameCli,
  version: "g18",
  date: "2026-10-19",
  what: "A constant can refine a constant of another node: its value is written once, its meaning is its own, and an edge \"Refines\" links them",
  fingerprint: "3fbfb03eed17669a",
  language: "shared",
  differences: "differences.diff",
  assembledBy: G17,
})

/**
 * Generation 19
 */
export const G19 = release({
  owner: "trame",
  component: TrameCli,
  version: "g19",
  date: "2026-10-19",
  what: "The syntax layer, beside the TypeScript driver: tree-sitter behind the `SyntaxTrees` port, the `language` kind, the `syntax` and `languages` modules; `ReaderLikeBefore` finds every literal the driver finds, alike",
  fingerprint: "1eab6ff41875441e",
  language: "shared",
  assembledBy: G18,
})

/**
 * Generation 20
 */
export const G20 = release({
  owner: "trame",
  component: TrameCli,
  version: "g20",
  date: "2026-10-19",
  what: "The compiler reads every body through the syntax reader (`languages.Drivers`): checks and literals come from the reading, and a literal that a type expects is a literal; the old reading code leaves the engine",
  fingerprint: "a96e5b4249e9af9b",
  language: "shared",
  differences: "differences.diff",
  assembledBy: G19,
})

/**
 * Generation 21
 */
export const G21 = release({
  owner: "trame",
  component: TrameCli,
  version: "g21",
  date: "2026-10-19",
  what: "What Trame writes in TypeScript is specified: the module `typescript` holds the language node, 20 syntax elements read back as TypeScript, and the writer that composes them; an assembled program is read back before it is written, and its values must come back",
  fingerprint: "fcaaa2d5792337c4",
  language: "shared",
  assembledBy: G20,
})

/**
 * Generation 22
 */
export const G22 = release({
  owner: "trame",
  component: TrameCli,
  version: "g22",
  date: "2026-10-19",
  what: "Terraform is a language node: its queries replace the HCL driver's regular expressions, its variables are checked against the provisioning dependencies; the module `terraform` specifies what Trame writes (5 syntax elements read back as Terraform) and its writer. The old drivers are gone",
  fingerprint: "cd3e2ae38cfb2714",
  language: "shared",
  assembledBy: G21,
})

/**
 * Generation 23
 */
export const G23 = release({
  owner: "trame",
  component: TrameCli,
  version: "g23",
  date: "2026-10-19",
  what: "The domains of the literals, first part: the vocabularies of the intermediate format and of the graph API in the prelude, the structure `ValueTypes`, the standards of Node and POSIX (450 → 232 literals)",
  fingerprint: "c1372e9e4a3d7e33",
  language: "shared",
  assembledBy: G22,
})

/**
 * Generation 24
 */
export const G24 = release({
  owner: "trame",
  component: TrameCli,
  version: "g24",
  date: "2026-10-19",
  what: "Second part: Trame's commands and configuration, the files and paths of the engine, what `trame dev` serves (232 → 166)",
  fingerprint: "37b89a4fd821f778",
  language: "shared",
  assembledBy: G23,
})

/**
 * Generation 25
 */
export const G25 = release({
  owner: "trame",
  component: TrameCli,
  version: "g25",
  date: "2026-10-19",
  what: "Third part: the terminal text is a format of Trame's own, defined by a decision and written by 7 syntax elements (module `text`); the punctuation of documents; the words of values in the rendering catalog (166 → 82)",
  fingerprint: "c2617affd59db26e",
  language: "shared",
  assembledBy: G24,
})

/**
 * Generation 26
 */
export const G26 = release({
  owner: "trame",
  component: TrameCli,
  version: "g26",
  date: "2026-10-19",
  what: "Fourth part: the page (module `page`: what it is made of, its shell, its theme and its document as 17 syntax elements) on the elements of HTML, ARIA, SVG and CSS (module `html`) (82 → 63)",
  fingerprint: "631d52d2a0370f2f",
  language: "shared",
  assembledBy: G25,
})

/**
 * Generation 27
 */
export const G27 = release({
  owner: "trame",
  component: TrameCli,
  version: "g27",
  date: "2026-10-19",
  what: "Last part: the laws' draws, keys as JSON, the names of documents, the places of a sentence, module titles read by the TypeScript API. No literal is left to specify (63 → 0)",
  fingerprint: "f41aab14b09b9f7a",
  language: "shared",
  assembledBy: G26,
})

/**
 * Generation 28
 */
export const G28 = release({
  owner: "trame",
  component: TrameCli,
  version: "g28",
  date: "2026-10-19",
  what: "The rule of the language: a literal written in a body is an error, except in a catalog; no list of refused values, no setting. The example declares its standards, messages and statements",
  fingerprint: "b3b3b169ec3b8d50",
  language: "shared",
  assembledBy: G27,
})

/**
 * Generation 29
 */
export const G29 = release({
  owner: "trame",
  component: TrameCli,
  version: "g29",
  date: "2026-10-19",
  what: "The graph explains Trame: the kind `adr` (architecture decisions) and the view `adrs`; the ten principles, the five layers and the decisions taken on the way are nodes, with what applies them",
  fingerprint: "a2c2e4e00acd2eec",
  language: "shared",
  assembledBy: G28,
})

/**
 * Generation 30
 */
export const G30 = release({
  owner: "trame",
  component: TrameCli,
  version: "g30",
  date: "2026-10-19",
  what: "`trame advance`, a command of the graph: the requirement \"Accept a candidate\" decides, its criteria say how; ports to run other engines and to compare trees of files",
  fingerprint: "2101e0c4e445e0bc",
  language: "shared",
  assembledBy: G29,
})

/**
 * Generation 31
 */
export const G31 = release({
  owner: "trame",
  component: TrameCli,
  version: "g31",
  date: "2026-10-19",
  what: "The first generation frozen by `trame advance`; `advance.sh` only finds the last generation and runs its command",
  fingerprint: "316cc1a13acbb87f",
  language: "shared",
  assembledBy: G30,
})

/**
 * Generation 32
 */
export const G32 = release({
  owner: "trame",
  component: TrameCli,
  version: "g32",
  date: "2026-10-20",
  what: "Trame reads HTML and CSS: two language nodes (`HtmlMarkup`, `CssStyleSheets`); the HTML, CSS and page elements are read in them, and the page reads back its style and itself",
  fingerprint: "8baaf8b55ca7fc40",
  language: "shared",
  assembledBy: G31,
})

/**
 * Generation 33
 */
export const G33 = release({
  owner: "trame",
  component: TrameCli,
  version: "g33",
  date: "2026-10-20",
  what: "The style sheets are bodies (kind `stylesheet`, a CSS driver): `page.css` and `narrow.css` write no value, only the variables of a design scale of seven decisions, taken as it was (355 → 0); the page refuses a variable it does not write",
  fingerprint: "e37acd6e5fc36d65",
  language: "shared",
  differences: "differences.diff",
  assembledBy: G32,
})

/**
 * Generation 34
 */
export const G34 = release({
  owner: "trame",
  component: TrameCli,
  version: "g34",
  date: "2026-10-21",
  what: "Technical choices: a binding chooses what answers each port in each environment, with its reasons; a function may answer a port; five design patterns are nodes that check the shape of the choices following them (see \"Technical choices and patterns\")",
  fingerprint: "d5e1dddea8128e50",
  language: "shared",
  assembledBy: G33,
})

/**
 * Generation 35
 */
export const G35 = release({
  owner: "trame",
  component: TrameCli,
  version: "g35",
  date: "2026-10-21",
  what: "The example's SQL behind a dialect port: each database is chosen with its dialect (Abstract Factory), SQLite and Postgres, and the repositories write no SQL; the page explores the layers of the graph step by step instead of drawing 42,000 px of them",
  fingerprint: "a54fbdd07d1ce39c",
  language: "shared",
  assembledBy: G34,
})

/**
 * Generation 36
 */
export const G36 = release({
  owner: "trame",
  component: TrameCli,
  version: "g36",
  date: "2026-10-21",
  what: "One renderer, its syntax a choice (Bridge): Markdown, terminal text and the page's HTML are realizations of a syntax port per audience, the figures a second port; the page shows the HTML the engine writes, and carries its graph compressed (24 MB → 3.7 MB) (see \"One renderer, its syntax a choice\")",
  fingerprint: "171e1bd764c72030",
  language: "shared",
  assembledBy: G35,
})

/**
 * Generation 37
 */
export const G37 = release({
  owner: "trame",
  component: TrameCli,
  version: "g37",
  date: "2026-10-22",
  what: "The layers drawn as a map: a band per layer, a box per module with the share of each status, the edges gathered between boxes and lit with a box; a box opens on its nodes, a node on its neighbours",
  fingerprint: "27974ec4ee12c740",
  language: "shared",
  assembledBy: G36,
})

/**
 * Generation 38
 */
export const G38 = release({
  owner: "trame",
  component: TrameCli,
  version: "g38",
  date: "2026-10-23",
  what: "Generations and their deployment in the graph: each generation is a release (kind release, module releases) that trame advance writes; a project pins the generation it runs; a generation keeps its packages; its language is archived, and an older generation that no longer runs on today's receives it",
  fingerprint: "05e29ac9dd153995",
  language: "shared",
  assembledBy: G37,
})

/**
 * Generation 39
 */
export const G39 = release({
  owner: "trame",
  component: TrameCli,
  version: "g39",
  date: "2026-10-23",
  what: "The first generation deployed by trame advance: its release written in the graph by the command, its packages frozen beside it, its language archived, Trame and the example pinned to it",
  fingerprint: "6f13e4743c59aa7e",
  language: "shared",
  archive: "0ff3c893800d8a56",
  assembledBy: G38,
})

/**
 * Generation 40
 */
export const G40 = release({
  owner: "trame",
  component: TrameCli,
  version: "g40",
  date: "2026-10-23",
  what: "The words in catalogs: the page's script, the kinds and the views say nothing of their own; four catalogs of the language (the page, the kinds, the views, Trame's views) hold their 530 words, and the documents are the same, character for character",
  fingerprint: "9a51bae52cc202d2",
  language: "shared",
  archive: "3f6b4e20cd4d0f8f",
  assembledBy: G39,
})

/**
 * Generation 41
 */
export const G41 = release({
  owner: "trame",
  component: TrameCli,
  version: "g41",
  date: "2026-10-23",
  what: "The page's figures drawn by the engine: graphs, their legends and timelines in SVG, from the geometry of three decisions of appearance and the words of the page's catalog; the arrowheads defined once in the page; only the explorer of a large graph is drawn by the page's script",
  fingerprint: "54ebe4248c16ef91",
  language: "shared",
  archive: "4d61601a906bd372",
  assembledBy: G40,
})

/**
 * Generation 42
 */
export const G42 = release({
  owner: "trame",
  component: TrameCli,
  version: "g42",
  date: "2026-10-23",
  what: "Packages and their reports in the graph: a kind package, checked against the lockfile; implementations and languages name the packages they use, and implementations take their status; trame audit asks the registry and keeps its answers as dated evidence (vulnerabilities, breaking releases behind)",
  fingerprint: "0d8da7afe804a127",
  language: "shared",
  archive: "753ce4f0022a96f2",
  differences: "differences.diff",
  assembledBy: G41,
})

/**
 * Generation 43
 */
export const G43 = release({
  owner: "trame",
  component: TrameCli,
  version: "g43",
  date: "2026-10-23",
  what: "The renderings of a document are a vocabulary the page script is typed by; the laws of kinds and views are requirements with acceptance criteria, applied by the engine as oracles",
  fingerprint: "8d9641685fa6927b",
  language: "shared",
  archive: "753ce4f0022a96f2",
  assembledBy: G42,
})

/**
 * Generation 44
 */
export const G44 = release({
  owner: "trame",
  component: TrameCli,
  version: "g44",
  date: "2026-10-23",
  what: "The page is a component assembled for the browser: its entry point and its explorer are bodies of the graph, its values the graph's, the browser's globals in five implementations; the literals of the language are reported",
  fingerprint: "a141a5848a796d6d",
  language: "shared",
  archive: "446f44932abd9bbd",
  differences: "differences.diff",
  assembledBy: G43,
})
