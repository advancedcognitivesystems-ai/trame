# Standard library

The nodes every product described with Trame needs and none should write again: the algebraic structures bodies share
instead of writing `0`, `1` or `""`, the values published texts fix (HTTP, URIs, ECMAScript, POSIX, Node.js, ISO 8601,
units of measure, algorithms), and the design patterns technical choices follow.

It is a Trame project of its own (ADR "A library is a Trame project, imported by path", in Trame's principles): its
graph is `src/`, its bodies `src/code/`, it pins a generation in `trame.json` and writes its own documents in `docs/`.

## Importing it

A project names it in its `trame.json`, by a name and a path, and if it wants a frozen version, by that version:

```json
{ "libraries": { "std": "../std" } }
{ "libraries": { "std": { "path": "../std", "version": "0.1.0" } } }
```

It imports its nodes by the library's name (`import { Counts } from "#std/algebra"`); `trame manifest` writes where the
name leads in its `package.json`. In the project's graph, the library's modules take its name (`std/algebra`,
`std/algebra.Counts`); the project's documents link to the library's (the frozen ones for a version), its index counts
the library's issues apart, its lock freezes only its own declarations.

## Versions

`../trame.sh release 0.1.0 "what changes"`, run here, freezes a version under `releases/0.1.0/`: the graph, the code
and the documents as they are, with the imports that leave the library written again from there. The version is
recorded in `src/releases.ts`. A version is refused while something is left to decide or in error.

Its own `package.json` installs Playwright for `tooling` (`npm install` here) and says `"type": "module"`: without it,
the files of a release are read as CommonJS, and the projects that import it find nodes without a name.

## Building it

```
cd std && ../trame.sh build
```

`trame advance`, run from Trame's root, builds it with the example and Trame's graph, and each generation keeps a copy
of it beside the engine's graph: the engine's bodies import its structures.

| Module | Holds |
|---|---|
| `product` | What the library is for: shared operations, published values cited, known designs |
| `algebra` | `Counts`, `Sequences`, `Texts`, `ValueTypes`: the structures, with their laws |
| `ecmascript` | What ECMA-262 fixes: first index, `typeof`, reserved words, Unicode escapes |
| `text` | Lines of a text file, characters that do not show, places in a file, unified differences |
| `web` | HTTP, media types, URIs, server-sent events, UI and pointer events, CSSOM View, media queries, Screen Wake Lock, Web Speech (its errors), Web Audio (its latency) |
| `html` | HTML, WAI-ARIA, SVG and CSS: the elements, attributes, roles and marks a page and its style sheets write, the class selector and the descendant combinator |
| `algorithms` | Mulberry32, multiplicative hashing, depth-first search, SHA-256; seeded draws (a number, an integer between bounds, an element by its weight, the same from the same seed) |
| `measures` | Units of measure, ISO 8601 dates, semantic versioning, language tags (BCP 47, and the underscore form of Java and Android) |
| `system` | Exit status, POSIX signals, Node.js process, events, command line, modules and encodings, npm |
| `patterns` | Strategy, Adapter, Bridge, Abstract Factory, Repository |
| `platform` | The loading of a page, and the device's services as ports (preferences, languages, a voice that says whether the device can speak, picks a voice of the language asked and keeps what it last failed with, the screen awake, the frames of the screen), with their browser realizations and, for scenarios, realizations kept in memory (what a voice said, whether the screen is awake, time turned by hand) |
| `rules` | Requirements a project's rules apply with their parameters, instead of a function of their own: `Reaches` (each node selected reaches one of the others through the edges named), `NeverReaches`, `Linked` (how many edges of a name, at least and at most), `WithoutEffects` (no effect of these, its own or through its dependencies), `WordsOf` (the words of a field come from a vocabulary); nodes are selected by kind, module, edge present or absent, field values, library or not; each with acceptance criteria |
| `tooling` | The ports of a project's SDLC: `ProgramCommands` (a program whose first argument names the command; `NodeProgramCommands` writes out the lines it answers), `Files` (machine and memory), `HeadlessBrowser` (Chromium driven by Playwright 1.56.0, WebGL drawn by SwiftShader; a browser in memory that shows what a scenario writes) |
| `releases` | The versions frozen under `releases/`: 0.1.0, 0.2.0, 0.3.0, 0.4.0, 0.5.0, 0.6.0, 0.7.0, 0.8.0 |
