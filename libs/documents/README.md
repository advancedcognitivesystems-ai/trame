# Documents

A Trame library of what renders the documents a graph's views give (E3): written once, in the language the views
speak, for the commands of every project (`libs/commands`) and a project's own.

- `src/language.ts` — the language of the documents: the port `DocumentLanguage` (its tag and its punctuation, which
  a project realizes with its decision of the language: Trame with its `Language`), and what writes in it: `Dates`,
  `Lists`, `Punctuation`, `Units` (with `NumberDisplay`). The engine's `g.lib`, the renderers and the page read these
  nodes: one source.
- `src/scenarios.ts` — the language written, in the language decided for the scenarios.
- `src/sdlc.ts` — how a version ships, and the workflow that checks each pull request (job `documents`).

The renderers come next (decided 26 November): the common renderer and its syntaxes (Markdown, the terminal's text,
HTML), the figures (Mermaid, text, SVG), the specifications of Markdown and Mermaid, then the page. Their syntax
elements in HTML and CSS name std's languages (`#std/languages`), which the engine reads (g128): what they write is
read back.
