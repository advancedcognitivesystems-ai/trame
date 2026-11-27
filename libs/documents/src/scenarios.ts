/** Documents · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { adr } from "#trame/kinds/adr"
import { fn } from "#trame/kinds/function"
import { Adapter, Bridge, Strategy } from "#std/patterns"
import { ReadByTheEngine, EngineAsAProvider } from "#std/engine"
import { TextFile } from "#std/text"
import { RenderedOnce } from "./product"
import { DocumentLanguage, Dates, Lists, Punctuation, Units, WordsLanguage, type WrittenLanguage } from "./language"
import { Common, Rendering, FileRendering, TerminalRendering, MarkdownSyntax, PlainTextSyntax, MermaidDiagrams, TextFigures } from "./rendering"
import { SampleDocuments } from "./samples"

/**
 * Test
 * Where the library's scenarios run: the documents written in British English.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * The language of the scenarios
 * British English, with the marks Trame writes its documents with.
 */
export const ScenarioLanguage = decision<WrittenLanguage>({
  owner: "trame",
  value: {
    tag: "en-GB",
    punctuation: { parts: " · ", items: ", ", givenBy: " ← ", opensAside: " (", closesAside: ")", clauses: "; ", introduces: ": ", equals: " = ", absent: "—" },
  },
})

/**
 * Written in the language of the scenarios
 * The language of the documents, in the library's scenarios: the one decided for them.
 */
export const WrittenForTheScenarios = fn({
  owner: "trame", implements: [DocumentLanguage],
  deps: { language: ScenarioLanguage },
  body: ({ language }) => language,
})

/**
 * The scenarios' language
 * In the library's scenarios, the documents are written in the language decided for them.
 */
export const InTheScenariosLanguage = binding({
  owner: "trame",
  chooses: [WrittenForTheScenarios],
  environments: [Test],
  follows: [Strategy],
  serves: [RenderedOnce],
  context: "A project writes its documents in the language its engine speaks: the library's scenarios decide one of their own, the one Trame speaks.",
})

/**
 * What the scenarios read and expect
 * A day and how it is written, long and short; three items and how a conjunction joins them; numbers and how they are
 * written, alone and in a quantity's units (a minute, sixty seconds).
 */
export const Expected = decision<{
  day: string; long: string; short: string; shortWithYear: string; month: string
  items: string[]; joined: string[]
  number: number; written: string
  units: [string, number][]; whole: number; inLarger: string; notWhole: number; inSmaller: string
}>({
  owner: "trame",
  value: {
    day: "2026-10-17", long: "17 October 2026", short: "17 Oct", shortWithYear: "17 Oct 2026", month: "Oct",
    items: ["A", "B", "C"], joined: ["A", ", ", "B", " and ", "C"],
    number: 0.666, written: "0.67",
    units: [["min", 60], ["s", 1]], whole: 120, inLarger: "2", notWhole: 90, inSmaller: "90",
  },
})

/**
 * What the scenarios check
 */
export const ScenarioWords = catalog({
  owner: "trame",
  language: WordsLanguage,
  messages: () => ({
    datesWritten: (day: string) => `${day} is written as people read it, long and short, and its month`,
    listsJoined: () => "Three items are joined by the words of a conjunction, as they are",
    punctuationGiven: () => "The marks between the parts of a line are those of the language of the documents",
    numbersWritten: () => "A number is written with two decimals at most; a quantity in the largest of its units it makes a whole number of",
    writtenAsFiles: (title: string) => `${title}, written as a file, reads as expected`,
    writtenAtATerminal: (title: string) => `${title}, printed at a terminal, reads as expected`,
  }),
})

/**
 * The language of the documents, written
 * Dates as people read them, lists joined, the marks of the language and numbers in their units: what the renderers
 * write in every place a document is read.
 */
export const LanguageWritten = scenario({
  owner: "trame",
  verifies: [Dates, Lists, Punctuation, Units, WrittenForTheScenarios],
  env: Test,
  deps: { dates: Dates, lists: Lists, punctuation: Punctuation, units: Units, language: ScenarioLanguage, expected: Expected, checks: ScenarioWords },
  body: ({ dates, lists, punctuation, units, language, expected: x, checks }) => async (check) => {
    check(checks.datesWritten(x.day),
      dates.format(x.day) === x.long && dates.formatShort(x.day) === x.short && dates.formatShort(x.day, true) === x.shortWithYear && dates.month(x.day) === x.month)
    check(checks.listsJoined(), JSON.stringify(lists.conjunction(x.items)) === JSON.stringify(x.joined))
    check(checks.punctuationGiven(), JSON.stringify(punctuation) === JSON.stringify(language.punctuation))
    check(checks.numbersWritten(),
      units.format(x.number) === x.written && units.inUnits(x.whole, x.units, {}) === x.inLarger && units.inUnits(x.notWhole, x.units, {}) === x.inSmaller)
  },
})

/**
 * The documents speak the engine's language
 * The views speak the language of the engine that compiles a graph: what renders their documents writes its dates, its
 * lists, its marks and its numbers, through a port each project realizes with its decision of the language (Trame with
 * its own), and the library's scenarios with one decided for them.
 */
export const TheEnginesLanguage = adr({
  owner: "trame",
  context: "A document says, in one line, what a view said and what a renderer wrote around it: two languages, or two ways of writing a date, would show in the same sentence.",
  consequences: "The engine's g.lib, the renderers and the page read the same nodes; another language is another realization, with its catalogs.",
  rejected: { "The library's own language, fixed": "a project whose engine spoke another would get documents in two languages" },
  serves: [RenderedOnce],
  appliedBy: [Dates, Lists, Punctuation, Units, InTheScenariosLanguage],
})

// The renderers, played ---------------------------------------------------------------------------------------------

/**
 * Files in Markdown
 * In the library's scenarios, the documents written as files are in Markdown, as a project chooses them.
 */
export const FilesInMarkdown = binding({
  owner: "trame",
  chooses: [MarkdownSyntax],
  environments: [Test],
  follows: [Bridge, Strategy],
  serves: [RenderedOnce],
  context: "The scenarios play the syntax of files the library offers.",
})

/**
 * Figures in Mermaid
 * In the library's scenarios, the figures of the files are Mermaid diagrams.
 */
export const FiguresInMermaid = binding({
  owner: "trame",
  chooses: [MermaidDiagrams],
  environments: [Test],
  follows: [Strategy],
  serves: [RenderedOnce],
  context: "The scenarios play the figures of files the library offers.",
})

/**
 * The terminal in text
 * In the library's scenarios, what a terminal prints is plain text.
 */
export const TerminalInText = binding({
  owner: "trame",
  chooses: [PlainTextSyntax],
  environments: [Test],
  follows: [Bridge, Strategy],
  serves: [RenderedOnce],
  context: "The scenarios play the syntax of the terminal the library offers.",
})

/**
 * Figures at a terminal, as text
 * In the library's scenarios, a figure printed at a terminal is drawn in lines of text.
 */
export const TerminalFiguresAsText = binding({
  owner: "trame",
  chooses: [TextFigures],
  environments: [Test],
  follows: [Strategy],
  serves: [RenderedOnce],
  context: "The scenarios play the figures of the terminal the library offers.",
})

/**
 * Read by the engine
 * Where the library's build evaluates, the HTML its syntax elements write is read back by the engine that builds it.
 */
export const LanguagesRead = binding({
  owner: "trame",
  chooses: [ReadByTheEngine],
  environments: [Test],
  follows: [Adapter],
  serves: [RenderedOnce],
  context: "Reading a language is the engine's: the grammar and its reader are the engine's packages, which no library carries.",
})

/**
 * What the scenarios expect
 * Each sample document as it reads written as a file, and printed at a terminal.
 */
export const ExpectedDocuments = decision<{ files: Record<string, readonly string[]>; terminal: Record<string, readonly string[]> }>({
  owner: "trame",
  value: {
    files: {
      index: [
        "# A small project",
        "",
        "*What the project is for: [Reservations answered fast](product.md#Fast).*",
        "",
        "> **1 goal, 1 requirement · **held****",
        "",
        "<a id=\"holds\"></a>",
        "",
        "## What it holds",
        "",
        "Decided 15 min, open **to be decided**, by karim on 26 November 2026, in `src/product.ts:12`; see [Product](product.md) and [its sources](../src/product.ts) (warning).",
        "",
        "- Owner: karim",
        "- Since: 30 October 2026",
        "",
        "- A goal",
        "- A requirement that refines it",
        "",
        "| Node | Status |",
        "|---|---|",
        "| [Reservations answered fast](product.md#Fast) | **held** |",
        "",
        "```ts",
        "export const Fast = goal({ owner: \"karim\" })",
        "```",
        "",
        "**Criteria of [Answered in time](product.md#Answered)**",
        "",
        "| Criterion | Result |",
        "|---|---|",
        "| An answer within the minute | passed |",
        "| A late answer refused | **failed**: took 2 min |",
        "",
        "**In force** since 1 October 2026, until 31 December 2026",
        "",
        "<details><summary>The code</summary>",
        "",
        "```ts",
        "const x = 1",
        "```",
        "",
        "</details>",
        "",
        "| Severity | Code | What | Where | Owner | Consequence |",
        "|---|---|---|---|---|---|",
        "| error | `literal-in-body` | A literal in a body | [Answered in time](product.md#Answered) | karim |  |",
        "| error, raised from warning |  | Nothing applies it yet | the graph | lea | a wish |",
        "",
        "```mermaid",
        "flowchart TB",
        "  n0[\"Reservations answered fast<br/><small>Goal</small>\"]:::held",
        "  n1[\"Answered in time<br/><small>Requirement</small>\"]:::violated",
        "  n1 -->|refines| n0",
        "  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a",
        "  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a",
        "  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a",
        "  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a",
        "  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a",
        "```",
        "",
        "*The layers of the graph*",
        "",
        "```mermaid",
        "gantt",
        "  dateFormat YYYY-MM-DD",
        "  axisFormat %d.%m",
        "  title Around 26 November 2026",
        "  section Answered in time",
        "    In force : 2026-10-01, 2026-12-31",
        "    Reviewed : milestone, 2026-12-15, 0d",
        "  section Date of the graph",
        "    26 November 2026 : milestone, 2026-11-26, 0d",
        "```",
        "",
        "*When it holds*",
        "",
      ],
      product: [
        "# Product",
        "",
        "<a id=\"Fast\"></a>",
        "",
        "## Reservations answered fast",
        "",
        "`Fast` · `src/product.ts:3` · status: **held**",
        "",
        "A person who reserves knows at once.",
        "",
        "Back to [the summary](index.md).",
        "",
        "- Decided by: karim",
        "- refined by: [Answered in time](#Answered)",
        "",
        "<a id=\"Answered\"></a>",
        "",
        "Within the minute.",
        "",
      ],
    },
    terminal: {
      index: [
        "A small project",
        "What the project is for: Reservations answered fast.",
        "1 goal, 1 requirement · held",
        "",
        "what it holds",
        "  Decided 15 min, open to be decided, by karim on 26 November 2026, in src/product.ts:12; see Product and its sources (src/product.ts) (warning).",
        "  Owner  karim",
        "  Since  30 October 2026",
        "  - A goal",
        "  - A requirement that refines it",
        "  NODE                        STATUS",
        "  Reservations answered fast  held",
        "      export const Fast = goal({ owner: \"karim\" })",
        "  Criteria of Answered in time",
        "    passed  An answer within the minute",
        "    failed  A late answer refused (took 2 min)",
        "  In force since 1 October 2026, until 31 December 2026",
        "  The code",
        "        const x = 1",
        "error          literal-in-body               src/product.ts:14     A literal in a body · karim",
        "error, raised from warning Nothing applies it yet · lea · a wish",
        "rank 0   Reservations answered fast",
        "rank 1   Answered in time",
        "1 October 2026    start              Answered in time",
        "26 November 2026  date of the graph",
        "15 December 2026  reviewed           Answered in time",
        "31 December 2026  end                Answered in time",
        "",
      ],
      product: [
        "Product",
        "Reservations answered fast",
        "  goal · Fast · src/product.ts:3 · status held",
        "  Back to the summary.",
        "  Decided by  karim",
        "  refined by  Answered in time",
        "  Within the minute.",
        "",
      ],
    },
  },
})

/**
 * The documents, rendered
 * The sample documents written as files, with references from one to the other and to a file of the project, and
 * printed at a terminal: each one as expected, line by line.
 */
export const DocumentsRendered = scenario({
  owner: "trame",
  verifies: [Common, Rendering, FileRendering, TerminalRendering, MarkdownSyntax, PlainTextSyntax, MermaidDiagrams, TextFigures],
  env: Test,
  deps: { files: FileRendering, terminal: TerminalRendering, common: Common, samples: SampleDocuments, expected: ExpectedDocuments, text: TextFile, checks: ScenarioWords },
  body: ({ files, terminal, common, samples, expected, text: { endOfLine }, checks }) => async (check) => {
    const context = { locate: common.locate(samples), files: new Map(samples.map((d) => [d.id, d.file])) }
    for (const d of samples) {
      check(checks.writtenAsFiles(d.title), files.render(d, context) === expected.files[d.id]?.join(endOfLine))
      check(checks.writtenAtATerminal(d.title), terminal.render(d) === expected.terminal[d.id]?.join(endOfLine))
    }
  },
})

/**
 * The scenarios render as a project does
 * The renderers are pure: they receive documents in the intermediate format, the contract of the views, and give text.
 * The scenarios render documents written in it, with each syntax and each kind of figures the library offers, chosen
 * as a project chooses them; what its syntax elements write in HTML is read back by the engine that builds the library.
 */
export const HowTheScenariosRender = adr({
  owner: "trame",
  context: "A renderer is held to the intermediate format, not to a graph: what a view gives, whatever the project.",
  consequences: "A change of the renderers shows in the expected documents, line by line, as a review of the documents of a project would show it.",
  rejected: { "A project compiled and its documents rendered": "the views would be played again here, and the API gives no documents yet" },
  serves: [RenderedOnce],
  adopts: [EngineAsAProvider],
  appliedBy: [FilesInMarkdown, FiguresInMermaid, TerminalInText, TerminalFiguresAsText, LanguagesRead],
})
