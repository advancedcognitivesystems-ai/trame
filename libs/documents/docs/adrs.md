# Architecture decisions

*The choices that shape the product without being values, in force on 27 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **1 architecture decision, 1 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [The documents speak the engine's language](scenarios.md#TheEnginesLanguage) | **held** | [Dates](language.md#Dates), [Lists](language.md#Lists), [Punctuation](language.md#Punctuation), [Values with their units](language.md#Units), [The scenarios' language](scenarios.md#InTheScenariosLanguage) |

## Documents · Scenarios

<a id="TheEnginesLanguage"></a>

### The documents speak the engine's language

`TheEnginesLanguage` · `src/scenarios.ts:115` · status: **held**

The views speak the language of the engine that compiles a graph: what renders their documents writes its dates, its lists, its marks and its numbers, through a port each project realizes with its decision of the language (Trame with its own), and the library's scenarios with one decided for them.

Context: A document says, in one line, what a view said and what a renderer wrote around it: two languages, or two ways of writing a date, would show in the same sentence.

Consequences: The engine's g.lib, the renderers and the page read the same nodes; another language is another realization, with its catalogs.

| Rejected | Why |
|---|---|
| The library's own language, fixed | a project whose engine spoke another would get documents in two languages |

- Decided by: trame
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applied by: [Dates](language.md#Dates), [Lists](language.md#Lists), [Punctuation](language.md#Punctuation), [Values with their units](language.md#Units), [The scenarios' language](scenarios.md#InTheScenariosLanguage)
