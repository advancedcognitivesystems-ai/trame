# Architecture decisions

*The choices that shape the product without being values, in force on 28 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **2 architecture decisions, 2 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [A command is played on a real graph](scenarios.md#PlayedOnARealGraph) | **held** | [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine), [Played on a small project](scenarios.md#PlayedOnASmallProject) |
| [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes) | **held** | [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles), [In the language of libs/documents' scenarios](scenarios.md#DocumentsLanguage), [Figures in Mermaid and in text](scenarios.md#FiguresOfTheDocuments) |

## Commands · Scenarios

<a id="PlayedOnARealGraph"></a>

### A command is played on a real graph

`PlayedOnARealGraph` · `src/scenarios.ts:176` · status: **held**

What a command computes from a graph is played on one the engine compiles: a small project the library carries in its sources, compiled by the engine that plays the scenarios, only the platform kept in memory. The library adopts std's decision that the engine is a provider, reached through std's ports.

Context: A command reads what the engine gives (the graph as a build writes it, what a view receives): written by hand, a graph would check the command against what its author thought the engine gives.

Consequences: The small project travels with each version, named by the library's package; a project that imports the library plays the scenarios on it there.

| Rejected | Why |
|---|---|
| A graph written by the scenario | it proves nothing of what the engine gives, which is what the command reads on a machine |

- Decided by: trame
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applied by: [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine), [Played on a small project](scenarios.md#PlayedOnASmallProject)
- Adopts: [The engine is a provider](../.trame/std/docs/engine.md#EngineAsAProvider)

<a id="WrittenAsAProjectDoes"></a>

### A command writes documents as a project does

`WrittenAsAProjectDoes` · `src/scenarios.ts:233` · status: **held**

The library's commands write the documents the views give with the renderers of libs/documents: one renderer, its syntax a choice per audience. Its scenarios choose the syntaxes a project chooses.

Context: A command that wrote its documents itself would be a second renderer, whose words and layout could drift from the others'.

Consequences: What a build writes is what the engine's build wrote, character for character: the same views, the same renderer, the same places.

| Rejected | Why |
|---|---|
| A renderer of the commands' own | the walk and the words of the documents repeated |

- Decided by: trame
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applied by: [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles), [Figures in Mermaid and in text](scenarios.md#FiguresOfTheDocuments), [In the language of libs/documents' scenarios](scenarios.md#DocumentsLanguage)
- Adopts: [One renderer, its syntax a choice](../.trame/documents/docs/rendering.md#OneRendererManySyntaxes)
