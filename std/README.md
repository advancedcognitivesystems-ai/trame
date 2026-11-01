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
| `effects` | The vocabulary of effects, and what the platform may do: each module of Node.js (or each of its exports), each global of a host, the few members of ECMAScript that touch the world; what an implementation reaches is checked against it (g83) |
| `text` | Lines of a text file, characters that do not show, places in a file, unified differences |
| `web` | HTTP, media types, URIs, server-sent events, UI and pointer events, CSSOM View, media queries, Screen Wake Lock, Web Speech (its errors), Web Audio (its latency) |
| `html` | HTML, WAI-ARIA, SVG and CSS: the elements, attributes, roles and marks a page and its style sheets write, the class selector and the descendant combinator |
| `algorithms` | Mulberry32, multiplicative hashing, depth-first search, SHA-256; seeded draws (a number, an integer between bounds, an element by its weight, the same from the same seed) |
| `measures` | Units of measure, ISO 8601 dates, semantic versioning, language tags (BCP 47, and the underscore form of Java and Android) |
| `system` | Exit status, POSIX signals and the current directory, Node.js process, events, command line, modules and encodings, npm |
| `patterns` | Strategy, Adapter, Bridge, Abstract Factory, Repository |
| `platform` | The loading of a page, and the device's services as ports (preferences, languages, a voice that says whether the device can speak, picks a voice of the language asked and keeps what it last failed with, the screen awake, the frames of the screen), with their browser realizations and, for scenarios, realizations kept in memory (what a voice said, whether the screen is awake, time turned by hand) |
| `rules` | Requirements a project's rules apply with their parameters, instead of a function of their own: `Reaches` (each node selected reaches one of the others through the edges named), `NeverReaches`, `Linked` (how many edges of a name, at least and at most), `WithoutEffects` (no effect of these, its own or through its dependencies), `WordsOf` (the words of a field come from a vocabulary); nodes are selected by kind, module, edge present or absent, field values, library or not; the way an edge is followed is a word of the vocabulary `Directions` (out, in); each with acceptance criteria |
| `obligations` | The families of what a shipment must prove, derived from what it reaches (the artefacts it ships, what produces them, what its programs wire): `Verified` (the scenarios that verify the reached code; reached code of the kinds named that none verifies is a gap), `Served` (from what the reached code serves up to the goals, then every requirement that refines them, at any depth), `Applied` (the ADRs a reached node applies), `Reviewed` (the reviews of the data carried; data nothing reviews is a gap), `Checked` (the checks of the shipped artefacts: those a program runs, or all of them, a word of the vocabulary `CheckWays`), `Ruled` (the project's rules), `Safe` (the packages the reached code uses); a project applies one through an `obligation`, with its parameters (typed by the family's rule) and what a gap weighs, and groups them in a `policy`, one per family; each with acceptance criteria |
| `tooling` | The ports of a project's SDLC: `ProgramCommands` (a program whose first argument names the command; `NodeProgramCommands` writes out the lines it answers), `Files` (machine and memory), `HeadlessBrowser` (Chromium driven by Playwright 1.56.0, WebGL drawn by SwiftShader; a browser in memory that shows what a scenario writes), `PackageSources` (where a package a project uses comes from: a local path, a registry; its realizations are the tools'); Playwright's node says what it asks once installed (its Chromium), which the plan of a run elsewhere carries |
| `scenarios` | Where the library plays what it offers to the scenarios of its projects: an environment `Test` (where it also evaluates its examples), its realizations kept in memory chosen there (`InMemory`, following Strategy), and three scenarios: the seeded draws keep their promise, the device in memory (preferences, voice, screen awake, frames turned by hand), the tooling in memory (files, a scripted browser). Its realizations on a device or a machine are chosen, and verified, by the projects that run them: offered here and chosen nowhere, they have no status, nor has the decision only they apply ("A component in a browser starts with its page"), judged where it is chosen. Nothing in std's graph is left unknown (0.11.0); `Verified` obliges only what a machine runs, a check made by hand being `Checked`'s business (0.11.1) |
| `releases` | The versions frozen under `releases/`: 0.1.0, 0.2.0, 0.3.0, 0.4.0, 0.5.0, 0.6.0, 0.7.0, 0.8.0, 0.9.0, 0.10.0, 0.11.0, 0.11.1 |
