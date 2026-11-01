# Architecture decisions

*The choices that shape the product without being values, in force on 26 October 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **1 architecture decision, 0 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [A component in a browser starts with its page](platform.md#StartsWithThePage) | **unknown** | [The browser loads the page](platform.md#BrowserLoading), [Loading of a page](platform.md#PageLoading) |

## Standard library · Platform

<a id="StartsWithThePage"></a>

### A component in a browser starts with its page

`StartsWithThePage` · `src/platform.ts:35` · status: **unknown**

A component that runs in a browser is exposed by the loading of its page: its entry points triggered by the loading run once the document is parsed, and the browser's realization is the one a product binds there.

Context: A page and the program it carries are opened together; the program must not reach for elements the browser has not parsed yet, and two products would write the same wait.

Consequences: The exposure of a browser's component is the port PageLoading; BrowserLoading runs the entry points triggered by the loading once the document is parsed (DOMContentLoaded, or at once when it already is).

| Rejected | Why |
|---|---|
| A script placed at the end of the body | the order of a document would decide when the program starts, and nothing would say it |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Loading of a page](platform.md#PageLoading), [The browser loads the page](platform.md#BrowserLoading)
