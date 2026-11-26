# Technical choices

*What answers each port in each environment on 26 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **2 technical choices for 4 ports, in 1 environment**

| Port | Test |
|---|---|
| [The project at hand](../.trame/std/docs/engine.md#TheProject) | [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere) |
| [The project of a scenario](../.trame/std/docs/engine.md#ProjectOfTheScenario) | [Which project the scenarios compile](scenarios.md#TheSmallProject) |
| [Project files](../.trame/std/docs/tooling.md#Files) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) |
| [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [Played on a small project](scenarios.md#PlayedOnASmallProject), [In memory](../.trame/std/docs/scenarios.md#InMemory), [Judged as the language says](../.trame/std/docs/scenarios.md#LanguageJudgment), [Judged strictly](../.trame/std/docs/scenarios.md#StrictJudgment), [The scenarios' settings](../.trame/std/docs/scenarios.md#ScenarioSettings) |
| [Adapter](../.trame/std/docs/patterns.md#Adapter) | **held** | [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine) |

## Commands · Scenarios

<a id="CompiledByTheEngine"></a>

### Compiled by the engine that plays them

`CompiledByTheEngine` · `src/scenarios.ts:50` · status: **held**

In the library's scenarios, the project at hand is compiled by the engine that plays them, as on a machine it is compiled by the engine that runs the command.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The project at hand](../.trame/std/docs/engine.md#TheProject) | [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere) | an implementation |

Context: A command computes from a graph the engine compiled: a graph a scenario wrote by hand would check the command against what its author thought the engine gives.

| Rejected | Why |
|---|---|
| A graph written by the scenario | it proves nothing of what the engine gives, which is what the command reads on a machine |

- Decided by: trame
- Chooses: [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere)
- In: [Test](scenarios.md#Test)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)

<a id="PlayedOnASmallProject"></a>

### Played on a small project

`PlayedOnASmallProject` · `src/scenarios.ts:64` · status: **held**

In the library's scenarios, the project at hand is the small project, and the project's files are kept in memory.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The project of a scenario](../.trame/std/docs/engine.md#ProjectOfTheScenario) | [Which project the scenarios compile](scenarios.md#TheSmallProject) | a function |
| [Project files](../.trame/std/docs/tooling.md#Files), [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | a function |

Context: The library's own project is the one being compiled when its scenarios play: they compile another, small and of the library's own, whose files are read again when they change.

- Decided by: trame
- Chooses: [Which project the scenarios compile](scenarios.md#TheSmallProject), [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
