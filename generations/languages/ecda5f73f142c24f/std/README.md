# Standard library

The nodes every product described with Trame needs and none should write again: the algebraic structures bodies share
instead of writing `0`, `1` or `""`, the values published texts fix (HTTP, URIs, ECMAScript, POSIX, Node.js, ISO 8601,
units of measure, algorithms), and the design patterns technical choices follow.

It is a Trame project of its own (ADR "A library is a Trame project, imported by path", in Trame's principles): its
graph is `src/`, its bodies `src/code/`, it pins a generation in `trame.json` and writes its own documents in `docs/`.

## Importing it

A project names it in its `trame.json`, by a name and a path:

```json
{ "libraries": { "std": "../std" } }
```

and imports its nodes from their modules (`import { Counts } from "../std/src/algebra"`). In the project's graph, the
library's modules take its name (`std/algebra`, `std/algebra.Counts`); the project's documents link to the library's,
its index counts the library's issues apart, its lock freezes only its own declarations.

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
| `web` | HTTP, media types, URIs, server-sent events, UI events, CSSOM View, media queries |
| `algorithms` | Mulberry32, multiplicative hashing, depth-first search, SHA-256 |
| `measures` | Units of measure, ISO 8601 dates, semantic versioning |
| `system` | Exit status, POSIX signals, Node.js process, events, command line, modules and encodings, npm |
| `patterns` | Strategy, Adapter, Bridge, Abstract Factory, Repository |
