/** Documents · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { adr } from "#trame/kinds/adr"
import { fn } from "#trame/kinds/function"
import { Adapter, Bridge, Strategy, Plugin } from "#std/patterns"
import { AnswerFormats } from "#std/tooling"
import { ReadByTheEngine, EngineAsAProvider } from "#std/engine"
import { TextFile } from "#std/text"
import { RenderedOnce, ShownInAPage } from "./product"
import { BlockType, FigureType } from "#trame/kernel"
import { DocumentLanguage, Dates, Lists, Punctuation, Units, WordsLanguage, type WrittenLanguage } from "./language"
import {
  Common, Rendering, FileRendering, TerminalRendering, PageRendering, MarkdownSyntax, PlainTextSyntax, HtmlSyntax, MermaidDiagrams, TextFigures, SvgFigures,
  AnswersAtATerminal, AnswersInMarkdown,
} from "./rendering"
import { Page, PageScripts, PageWords, SheetsBesideTheLibrary } from "./page"
import { ExplorerFigures } from "./browser"
import { Doctype, EscapedText } from "./html"
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
    answersPrinted: () => "Documents a command answers, printed at a terminal, read as the renderer of the terminal gives them",
    answersWritten: () => "Documents a command answers, in Markdown, read as the renderer of files gives them, their references leading where the answer says",
    shownInThePage: (title: string) => `${title}, in the page, reads as expected`,
    pageMade: () => "A page is a document of its own: its DOCTYPE first, its title naming the project, its program and the graph in its scripts",
    pageHosted: () => "A page a host shows has no skeleton: no DOCTYPE, its title and its scripts all the same",
    mapDrawn: () => "A large graph is explored from the map of its layers",
    focusDrawn: (title: string) => `${title}, in focus, is drawn with its neighbours`,
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
 * The formats of the answers
 * In the library's scenarios, the documents a command answers are printed as text first, written in Markdown on demand.
 */
export const FormatsOfTheAnswers = binding({
  owner: "trame",
  chooses: [AnswersAtATerminal, AnswersInMarkdown],
  environments: [Test],
  follows: [Plugin],
  serves: [RenderedOnce],
  context: "The scenarios play the formats of std's answers the library offers, in the order a project chooses them.",
})

/**
 * Answers written in their formats
 * The sample documents answered by a command: printed at a terminal, then written in Markdown with where each card is,
 * each as the renderer of its syntax gives it.
 */
export const AnswersWritten = scenario({
  owner: "trame",
  verifies: [AnswersAtATerminal, AnswersInMarkdown],
  env: Test,
  deps: { formats: AnswerFormats, common: Common, samples: SampleDocuments, expected: ExpectedDocuments, text: TextFile, checks: ScenarioWords },
  body: ({ formats, common, samples, expected, text: { endOfLine }, checks }) => async (check) => {
    const places = { locate: common.locate(samples), files: new Map(samples.map((d) => [d.id, d.file])) }
    const [terminal, markdown] = formats
    const printed = await terminal?.write({ documents: samples })
    const written = await markdown?.write({ documents: samples, places: async () => places })
    check(checks.answersPrinted(), JSON.stringify(printed) === JSON.stringify(samples.map((d) => expected.terminal[d.id]?.join(endOfLine))))
    check(checks.answersWritten(), JSON.stringify(written) === JSON.stringify(samples.map((d) => expected.files[d.id]?.join(endOfLine))))
  },
})

// The page, played (documents 0.5.0) ---------------------------------------------------------------------------------

/**
 * The page in HTML
 * In the library's scenarios, a document in the page is written in HTML, as a project chooses it.
 */
export const PageInHtml = binding({
  owner: "trame",
  chooses: [HtmlSyntax],
  environments: [Test],
  follows: [Bridge, Strategy],
  serves: [ShownInAPage],
  context: "The scenarios play the syntax of the page the library offers.",
})

/**
 * The page's figures in SVG
 * In the library's scenarios, a figure in the page is drawn in SVG.
 */
export const PageFiguresDrawn = binding({
  owner: "trame",
  chooses: [SvgFigures],
  environments: [Test],
  follows: [Strategy],
  serves: [ShownInAPage],
  context: "The scenarios play the figures of the page the library offers.",
})

/**
 * Style sheets read beside the library
 * In the library's scenarios, the page's style sheets are read where the library's sources keep them.
 */
export const SheetsRead = binding({
  owner: "trame",
  chooses: [SheetsBesideTheLibrary],
  environments: [Test],
  follows: [Adapter],
  serves: [ShownInAPage],
  context: "The style sheets are files of the library, which its versions carry.",
})

/**
 * What the page expects
 * Each sample document as the page shows it, written in HTML.
 */
export const ExpectedPage = decision<Record<string, string>>({
  owner: "trame",
  value: {
    index: "<h1>A small project</h1><p class=\"intro\">What the project is for: <a class=\"ref\" data-ref=\"product.Fast\" tabindex=\"0\">Reservations answered fast</a>.</p><div class=\"summary\">1 goal, 1 requirement · <span class=\"pill st-held\">held</span></div><section id=\"holds\"><h2>What it holds</h2><p>Decided 15 min, open <mark class=\"open\">to be decided</mark>, by <span class=\"person\">karim</span> on <time datetime=\"2026-11-26\">26 November 2026</time>, in <code>src/product.ts:12</code>; see <a data-doc=\"product\" tabindex=\"0\">Product</a> and <a href=\"src/product.ts\">its sources</a> (<span class=\"sev sev-warning\">warning</span>).</p><dl class=\"facts\"><dt>Owner</dt><dd><span class=\"person\">karim</span></dd><dt>Since</dt><dd><time datetime=\"2026-10-30\">30 October 2026</time></dd></dl><ul><li>A goal</li><li>A requirement that refines it</li></ul><div class=\"table-wrap\"><table><thead><tr><th>Node</th><th>Status</th></tr></thead><tbody><tr><td><a class=\"ref\" data-ref=\"product.Fast\" tabindex=\"0\">Reservations answered fast</a></td><td><span class=\"pill st-held\">held</span></td></tr></tbody></table></div><pre class=\"code\"><code>export const Fast = goal({ owner: &quot;karim&quot; })</code></pre><p class=\"code-source\">src/product.ts:3</p><p class=\"checks-title\">Criteria of <a class=\"ref\" data-ref=\"product.Answered\" tabindex=\"0\">Answered in time</a></p><div class=\"table-wrap\"><table><thead><tr><th>Criterion</th><th>Result</th></tr></thead><tbody><tr><td>An answer within the minute</td><td><span class=\"pill oc-passed\">passed</span></td></tr><tr><td>A late answer refused</td><td><span class=\"pill oc-failed\">failed</span> took 2 min</td></tr></tbody></table></div><p class=\"validity\"><span class=\"pill va-inForce\">In force</span> since 1 October 2026, until 31 December 2026</p><details><summary>The code</summary><pre class=\"code\"><code>const x = 1</code></pre><p class=\"code-source\">src/product.ts:9</p></details></section><div class=\"table-wrap\"><table><thead><tr><th>Severity</th><th>Code</th><th>What</th><th>Where</th><th>Owner</th><th>Consequence</th></tr></thead><tbody><tr><td><span class=\"sev sev-error\">error</span></td><td><code>literal-in-body</code></td><td>A literal in a body</td><td><a class=\"ref\" data-ref=\"product.Answered\" tabindex=\"0\">Answered in time</a></td><td><span class=\"person\">karim</span></td><td></td></tr><tr><td><span class=\"sev sev-error\">error, raised from warning</span></td><td></td><td>Nothing applies it yet</td><td><code>the graph</code></td><td><span class=\"person\">lea</span></td><td>a wish</td></tr></tbody></table></div><figure class=\"figure\"><div class=\"figure-scroll\"><svg viewBox=\"-10 -40 198 232\" width=\"198\" style=\"width: 100%; min-width: 123px; max-width: 198px;\" role=\"img\" aria-label=\"Figure\"><g class=\"fe n-declared\"><title>refines</title><path d=\"M89,122 C89,91 89,91 89,60\" marker-end=\"url(#arrow-base)\"/></g><g class=\"fn st-held\" data-ref=\"product.Fast\" transform=\"translate(0,0)\" tabindex=\"0\" role=\"link\" aria-label=\"Reservations answered fast · Goal · held\"><title>Reservations answered fast · Goal · held</title><rect class=\"box\" width=\"178\" height=\"60\" rx=\"7\"/><text x=\"10\" y=\"19\">Reservations answered</text><text x=\"10\" y=\"34\">fast</text><text class=\"kind\" x=\"10\" y=\"51\">Goal · held</text></g><g class=\"fn st-violated\" data-ref=\"product.Answered\" transform=\"translate(0,122)\" tabindex=\"0\" role=\"link\" aria-label=\"Answered in time · Requirement · violated · a decision remains to be taken\"><title>Answered in time · Requirement · violated · a decision remains to be taken</title><rect class=\"box\" width=\"178\" height=\"60\" rx=\"7\"/><text x=\"10\" y=\"19\">Answered in time</text><text class=\"kind\" x=\"10\" y=\"51\">Requirement · violated</text><circle class=\"open\" cx=\"168\" cy=\"10\" r=\"5\"/></g></svg><div class=\"legend\"><span><svg width=\"26\" height=\"8\" aria-hidden=\"true\"><line x1=\"0\" y1=\"4\" x2=\"26\" y2=\"4\" class=\"lg-base\" stroke-width=\"2\"/></svg>declared edge</span><span><svg width=\"12\" height=\"12\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"5\" class=\"lg-open\"/></svg>decision to take</span></div></div><figcaption>The layers of the graph</figcaption></figure><figure class=\"figure\"><div class=\"figure-scroll\"><svg class=\"tl\" viewBox=\"0 0 920 88\" width=\"920\" style=\"width: 100%; min-width: 640px; max-width: 920px;\" role=\"img\" aria-label=\"Timeline\"><line class=\"grid\" x1=\"240\" y1=\"32\" x2=\"240\" y2=\"76\"/><text class=\"tick\" x=\"244\" y=\"28\">Oct</text><line class=\"grid\" x1=\"465.5164835164835\" y1=\"32\" x2=\"465.5164835164835\" y2=\"76\"/><text class=\"tick\" x=\"469.5164835164835\" y=\"28\">Nov</text><line class=\"grid\" x1=\"683.7582417582418\" y1=\"32\" x2=\"683.7582417582418\" y2=\"76\"/><text class=\"tick\" x=\"687.7582417582418\" y=\"28\">Dec</text><g class=\"lane-label\" data-ref=\"product.Answered\" tabindex=\"0\" role=\"link\"><text x=\"0\" y=\"55\">Answered in time</text><text class=\"muted\" x=\"0\" y=\"69\">Requirement</text></g><rect class=\"period\" x=\"240\" y=\"50\" width=\"662\" height=\"12\" rx=\"6\"><title>Answered in time · from 1 October 2026 until 31 December 2026</title></rect><circle class=\"review\" cx=\"785.6043956043956\" cy=\"56\" r=\"5\"><title>Reviewed: 15 December 2026</title></circle><line class=\"today\" x1=\"647.3846153846155\" y1=\"14\" x2=\"647.3846153846155\" y2=\"84\"/><text class=\"muted\" x=\"652.3846153846155\" y=\"14\">date of the graph · 26 Nov</text></svg></div><figcaption>When it holds</figcaption></figure>",
    product: "<h1>Product</h1><article class=\"card\" id=\"Fast\"><h3>Reservations answered fast</h3><div class=\"meta\"><span>Goal</span><code>Fast</code><code>src/product.ts:3</code><span class=\"pill st-held\">held</span></div><p>A person who reserves knows at once.</p><p>Back to <a data-doc=\"index\" tabindex=\"0\">the summary</a>.</p><dl class=\"facts\"><dt>Decided by</dt><dd><span class=\"person\">karim</span></dd><dt class=\"\">refined by</dt><dd class=\"\"><a class=\"ref\" data-ref=\"product.Answered\" tabindex=\"0\">Answered in time</a></dd></dl><div class=\"child\" id=\"Answered\"><p>Within the minute.</p></div></article>",
  },
})

/**
 * The documents in the page
 * The sample documents written for the page, their figures drawn in SVG: each one as expected.
 */
export const DocumentsInThePage = scenario({
  owner: "trame",
  verifies: [PageRendering, HtmlSyntax, SvgFigures],
  env: Test,
  deps: { page: PageRendering, samples: SampleDocuments, expected: ExpectedPage, checks: ScenarioWords },
  body: ({ page, samples, expected, checks }) => async (check) => {
    for (const d of samples) check(checks.shownInThePage(d.title), page.render(d) === expected[d.id])
  },
})

/**
 * A page asked for
 * What a command gives Page to make a page: a program, bundled; the name of the program that writes it; the project
 * it shows; the graph, packed.
 */
export const PageAsked = decision<{ script: string; program: string; project: string; packed: string }>({
  owner: "trame",
  value: { script: "start()", program: "trame", project: "Small", packed: "H4sIAAAA" },
})

/**
 * A page made
 * The page a command asks for, standalone then hosted: its DOCTYPE first, or none; its title naming the project; its
 * program and the graph in its scripts; its style and its markup read back by the engine, each in its language.
 */
export const ThePageIsMade = scenario({
  owner: "trame",
  verifies: [Page, SheetsBesideTheLibrary],
  env: Test,
  deps: { page: Page, asked: PageAsked, scripts: PageScripts, doctype: Doctype, words: PageWords, checks: ScenarioWords },
  body: ({ page, asked, scripts, doctype, words, checks }) => async (check) => {
    const pieces = (made: string) => made.includes(words.pageTitle(asked.project)) && made.includes(scripts(asked.script, asked.packed, undefined))
    const standalone = page.pageHtml(asked)
    check(checks.pageMade(), standalone.startsWith(doctype()) && pieces(standalone))
    const hosted = page.pageHtml({ ...asked, fragment: true })
    check(checks.pageHosted(), !hosted.includes(doctype()) && pieces(hosted))
  },
})

/**
 * The explorer of a large graph
 * The sample graph explored: the map of its layers, then its first node in focus with its neighbours.
 */
export const TheExplorerDraws = scenario({
  owner: "trame",
  verifies: [ExplorerFigures],
  env: Test,
  deps: { explorer: ExplorerFigures, samples: SampleDocuments, words: PageWords, escape: EscapedText, checks: ScenarioWords },
  body: ({ explorer, samples, words, escape, checks }) => async (check) => {
    for (const d of samples) {
      for (const b of d.blocks) {
        if (b.type !== BlockType.figure || b.figure.type !== FigureType.graph) continue
        const f = b.figure
        check(checks.mapDrawn(), explorer.draw(d.id, { f, trail: [], all: new Set() }).includes(escape(words.mapLabel())))
        const [first] = f.nodes
        if (first) check(checks.focusDrawn(first.title), explorer.draw(d.id, { f, focus: first.ref, trail: [], all: new Set() }).includes(escape(words.andItsNeighbours(first.title))))
      }
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
  appliedBy: [FilesInMarkdown, FiguresInMermaid, TerminalInText, TerminalFiguresAsText, LanguagesRead, FormatsOfTheAnswers, PageInHtml, PageFiguresDrawn, SheetsRead],
})
