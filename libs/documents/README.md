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
  CommonMark and GFM, Mermaid, the terminal's text (a decision of Trame's), the elements of HTML the documents write.
  A relative reference is written from the document it is in.
- `src/appearance.ts` — the look of the documents: the `Palette`, which colours the figures and a page.
- `src/samples.ts`, `src/scenarios.ts` — the language written, and two documents in the intermediate format rendered
  as files and at a terminal, line by line as expected.
- `src/sdlc.ts` — how a version ships, and the workflow that checks each pull request (job `documents`).

The format decisions and the palette are the library's: a project amends them in its graph. The page comes next, with
its HTML and SVG, its look and its explorer (decided 26 November).
