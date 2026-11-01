# Literals

*The values written in code bodies, found by the syntax reader with the queries of each language, on 30 October 2026.*

> **0 literals to declare in 0 bodies, 0 of them already declared by a constant · 1859 declared by a catalog**

A literal written in a body is an error of its node: its value belongs in the graph, with its meaning (a standard, a decision, a structure, a catalog), and the body receives it as a parameter. The text of a message catalog is what the catalog declares.

## By category

| Category | To declare | Examples |
|---|---|---|

## By role

What each literal does, from its place in the code. The same 0 can be an index, a starting value or a status: the role says what has to be declared.

| Role | To declare | Most frequent values |
|---|---|---|

## Repeated values

The same value written in several places: a single declaration would replace all of them.

| Value | Times | In |
|---|---|---|

## Values that a constant already declares

The graph already declares these texts, with their meaning: the body could receive the constant as a parameter instead of writing it again. One value can have several meanings ("/" separates the segments of an address, and it also closes a tag): the meaning chooses the constant, or calls for a new one.

| Value | Times | Constants | In |
|---|---|---|---|

## Declared by a catalog

The text written in a message catalog is what the catalog declares: words said to people, in one language.

| Catalog | Literals | Examples |
|---|---|---|
| [Words of the kinds](messages.md#KindWords) | 628 | `"en-GB"` `"Acceptance criteria"` `"Accepts"` |
| [Words of the views](messages.md#ViewWords) | 290 | `"en-GB"` `"Architecture decisions"` `"The graph records no architecture decision."` |
| [Messages of the commands](messages.md#CommandMessages) | 221 | `` `written: ${…}` `` `", "` `` `kind laws · ${…} · ${…} drawn at random per kind` `` |
| [Messages of the scenarios](messages.md#ScenarioMessages) | 122 | `"TypeScript accepts the example"` `` `The example has ${…}, ${…} among them` `` `"node"` |
| [Messages of the compiler](messages.md#CompilerMessages) | 96 | `"error"` `"errors"` `` `${…} without a name: export it` `` |
| [Words of the page](messages.md#PageWords) | 90 | `"What"` `"Now"` `"New value"` |
| [Messages of the renderers](messages.md#RenderingMessages) | 81 | `"held"` `"violated"` `"blocked"` |
| [Messages of an advance](messages.md#AdvanceMessages) | 75 | `` `No generation in ${…}: see its README` `` `` `Generation in place: ${…}` `` `` `1. ${…} builds the library ${…}: the reference` `` |
| [Words of Trame's views](messages.md#EngineViewWords) | 72 | `"en-GB"` `"Literals"` `"This engine does not record literals."` |
| [Messages of the outputs](messages.md#OutputMessages) | 40 | `"(function)"` `` `${…}: ${…}` `` `"Published element deleted: repeal it instead of removing it from t…` |
| [Messages of the views](messages.md#ViewMessages) | 32 | `"?"` `"Complete declaration"` `"Answers on this graph, without crashing"` |
| [Messages of the drivers](messages.md#DriverMessages) | 29 | `` `Access to the platform ("${…}"): reserved for implementations; go … `` `` `Hidden dependency: the body imports "${…}"; declare it as a parame… `` `"import() of a computed path"` |
| [Messages of the laws](messages.md#LawMessages) | 25 | `"Complete declaration"` `"Answers on any value, without crashing"` `"A blocking hole has an owner"` |
| [Roles of a literal](syntax.md#LiteralRoles) | 21 | `"index"` `"concatenation"` `"arithmetic"` |
| [Messages of trame dev](messages.md#DevMessages) | 15 | `` `trame dev · ${…} · graph of ${…}` `` `` `watching ${…} · Ctrl+C to stop` `` `""` |
| [Messages of the platform](messages.md#PlatformMessages) | 10 | `` `Unknown command: ${…}` `` `` `warning: a promise was rejected without being awaited (${…})` `` `"In test, the engine starts no process"` |
| [What the programs of Trame's SDLC say](sdlc.md#SdlcWords) | 7 | `"The graph page opens: its documents, a document shown, its nodes, …` `"The navigation lists no document"` `"No document is shown"` |
| [Words of the units](messages.md#UnitWords) | 5 | `` `${…} h` `` `` `${…} min` `` `` `${…} s` `` |

## By body

## In the language

The kinds and the views the project writes hold no literal: what they need, the engine gives them from the graph, and their words are in catalogs.
