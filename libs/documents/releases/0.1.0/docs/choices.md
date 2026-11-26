# Technical choices

*What answers each port in each environment on 26 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **1 technical choice for 1 port, in 1 environment**

| Port | Test |
|---|---|
| [The language of the documents](language.md#DocumentLanguage) | [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [The scenarios' language](scenarios.md#InTheScenariosLanguage), [In memory](../.trame/std/docs/scenarios.md#InMemory), [Judged as the language says](../.trame/std/docs/scenarios.md#LanguageJudgment), [Judged strictly](../.trame/std/docs/scenarios.md#StrictJudgment), [The scenarios' settings](../.trame/std/docs/scenarios.md#ScenarioSettings) |

## Documents · Scenarios

<a id="InTheScenariosLanguage"></a>

### The scenarios' language

`InTheScenariosLanguage` · `src/scenarios.ts:46` · status: **held**

In the library's scenarios, the documents are written in the language decided for them.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The language of the documents](language.md#DocumentLanguage) | [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) | a function |

Context: A project writes its documents in the language its engine speaks: the library's scenarios decide one of their own, the one Trame speaks.

- Decided by: trame
- Chooses: [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
