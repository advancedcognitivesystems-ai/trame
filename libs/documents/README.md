# Documents

A Trame library of what renders the documents a graph's views give (E3): written once, in the language the views
speak, for the commands of every project (`libs/commands`) and a project's own.

- `src/language.ts` — the language of the documents: the port `DocumentLanguage` (its tag and its punctuation, which
  a project realizes with its decision of the language: Trame with its `Language`), and what writes in it: `Dates`,
  `Lists`, `Punctuation`, `Units` (with `NumberDisplay`). The engine's `g.lib`, the renderers and the page read these
  nodes: one source.
- `src/rendering.ts` — the renderer (0.2.0): `Rendering`, one walk of a document's blocks given a syntax; the ports of
  the syntaxes and figures of files (`FileSyntax`, `FileFigures`) and of the terminal (`TerminalSyntax`,
  `TerminalFigures`), and the renderers in them (`FileRendering`, `TerminalRendering`); their realizations
  (`MarkdownSyntax` with `MermaidDiagrams`, `PlainTextSyntax` with `TextFigures`); `Common`, what every renderer
  shares, a page included; the words of the renderers (`RenderingMessages`); the decisions of the formats
  (`TextRendering`, `MermaidFigures`, `SentenceSlots`). A project with another audience (Trame's page) declares its
  ports and gives `Rendering` its syntax.
- `src/markdown.ts`, `src/mermaid.ts`, `src/text.ts`, `src/html.ts` — the syntax elements the renderers compose:
  CommonMark and GFM, Mermaid, the terminal's text (a decision of Trame's), the elements of HTML the documents write,
  and the HTML, SVG and CSS of the page (0.5.0). A relative reference is written from the document it is in.
- The page (0.5.0, Trame's before): `src/rendering.ts` holds its syntax and figures (`PageSyntax`, `PageFigures`,
  `HtmlSyntax`, `SvgFigures`, `PageRendering`) and the names of the documents (`DocumentIds`, which the engine gives
  and the page reads); `src/markup.ts` what a document's elements are named by in the page; `src/appearance.ts` its
  fonts, its measures and the geometry of its figures; `src/page.ts` its shell, its theme, its scripts, its style
  sheets (read beside the library, `SheetsBesideTheLibrary`), its words (`PageWords`), what trame dev serves
  (`DevService`), how the graph it carries is packed (`GraphPacking`, `GzipInBase64`), and `Page`, which puts it
  together from the program a command gives it, read back by std's reader; `src/browser.ts` its program, the component
  `PageApp`, which names no environment: each project assembles it for its environment of a browser with the
  realizations it chooses (the browser's, here), the engine bundles it. Its entry point `ShowGraph` and its explorer
  (`ExplorerFigures`) are bodies of the graph.
- The formats of std's answers (0.4.0): `AnswersAtATerminal` (`text`) and `AnswersInMarkdown` (`md`, with where each
  card is), add-ons of std's `AnswerFormats`, which a project chooses with std's `AnswersInJson`.
- `src/appearance.ts` — the look of the documents: the `Palette`, which colours the figures and a page; the page's
  fonts, measures and drawings.
- `src/samples.ts`, `src/scenarios.ts` — the language written, and two documents in the intermediate format rendered
  as files, at a terminal and in the page, as expected; a page made, standalone and hosted; a graph explored.
- `src/sdlc.ts` — how a version ships, and the workflow that checks each pull request (job `documents`).

The format decisions, the palette and the page's look are the library's: a project amends them in its graph.
