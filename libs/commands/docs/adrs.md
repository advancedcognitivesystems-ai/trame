# Architecture decisions

*The choices that shape the product without being values, in force on 27 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **1 architecture decision, 1 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [A command is played on a real graph](scenarios.md#PlayedOnARealGraph) | **held** | [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine), [Played on a small project](scenarios.md#PlayedOnASmallProject) |

## Commands · Scenarios

<a id="PlayedOnARealGraph"></a>

### A command is played on a real graph

`PlayedOnARealGraph` · `src/scenarios.ts:166` · status: **held**

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
