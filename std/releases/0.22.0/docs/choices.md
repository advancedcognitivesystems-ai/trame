# Technical choices

*What answers each port in each environment on 22 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **4 technical choices for 22 ports, in 2 environments**

| Port | Test | Strict |
|---|---|---|
| [How pull requests are opened](commands.md#PullRequestSettings) | [How the scenarios' pull requests are opened](scenarios.md#ScenarioPullRequests) | — |
| [How a version is carried](commands.md#PropagationSettings) | [How the scenarios' versions are carried](scenarios.md#ScenarioPropagation) | — |
| [Hardening](judgment.md#Hardening) | [As the language says](judgment.md#AsTheLanguageSays) | [Every warning an error](judgment.md#EveryWarning) |
| [Preferences](platform.md#PreferencesStore) | [Preferences kept in memory](platform.md#MemoryPreferences) | — |
| [Speech](platform.md#SpeechVoice) | [A voice that writes down](platform.md#WrittenSpeech) | — |
| [What was said](platform.md#SpeechHeard) | [A voice that writes down](platform.md#WrittenSpeech) | — |
| [Screen kept awake](platform.md#ScreenAwake) | [The screen kept awake, in memory](platform.md#AwakeInMemory) | — |
| [Whether the screen is kept awake](platform.md#ScreenKeptAwake) | [The screen kept awake, in memory](platform.md#AwakeInMemory) | — |
| [Animation frames](platform.md#AnimationFrames) | [Frames turned by hand](platform.md#FramesByHand) | — |
| [Time turned by hand](platform.md#TimeTurned) | [Frames turned by hand](platform.md#FramesByHand) | — |
| [A repository on GitHub](repository.md#RepositoryApi) | [A repository kept in memory](repository.md#RepositoryInMemory) | — |
| [The repositories a scenario keeps](repository.md#RepositoryKept) | [A repository kept in memory](repository.md#RepositoryInMemory) | — |
| [The branches](repository.md#Branches) | [Branches kept in memory](repository.md#BranchesInMemory) | — |
| [The branches a scenario keeps](repository.md#BranchesKept) | [Branches kept in memory](repository.md#BranchesInMemory) | — |
| [Pull requests](repository.md#PullRequests) | [Pull requests kept in memory](repository.md#PullRequestsInMemory) | — |
| [The pull requests a scenario keeps](repository.md#PullRequestsKept) | [Pull requests kept in memory](repository.md#PullRequestsInMemory) | — |
| [Project files](tooling.md#Files) | [Files kept in memory](tooling.md#FilesInMemory) | — |
| [Files written](tooling.md#FilesKept) | [Files kept in memory](tooling.md#FilesInMemory) | — |
| [Programs run](tooling.md#ProgramRuns) | [Programs run in memory](tooling.md#ProgramRunsInMemory) | — |
| [The programs a scenario keeps: the file it says a program writes is written when that program runs.](tooling.md#ProgramRunsKept) | [Programs run in memory](tooling.md#ProgramRunsInMemory) | — |
| [Headless browser](tooling.md#HeadlessBrowser) | [A browser kept in memory](tooling.md#BrowserInMemory) | — |
| [Browser script](tooling.md#BrowserScripted) | [A browser kept in memory](tooling.md#BrowserInMemory) | — |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](patterns.md#Strategy) | **held** | [In memory](scenarios.md#InMemory), [Judged as the language says](scenarios.md#LanguageJudgment), [Judged strictly](scenarios.md#StrictJudgment), [The scenarios' settings](scenarios.md#ScenarioSettings) |
| [Adapter](patterns.md#Adapter) | unknown | — |
| [Bridge](patterns.md#Bridge) | unknown | — |
| [Abstract Factory](patterns.md#AbstractFactory) | unknown | — |
| [Repository](patterns.md#Repository) | unknown | — |
| [Command](patterns.md#Command) | unknown | — |

## Standard library · Scenarios

<a id="InMemory"></a>

### In memory

`InMemory` · `src/scenarios.ts:43` · status: **held**

In the library's scenarios, each port of a device or of the tooling is answered by its realization kept in memory.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Screen kept awake](platform.md#ScreenAwake), [Whether the screen is kept awake](platform.md#ScreenKeptAwake) | [The screen kept awake, in memory](platform.md#AwakeInMemory) | a function |
| [Animation frames](platform.md#AnimationFrames), [Time turned by hand](platform.md#TimeTurned) | [Frames turned by hand](platform.md#FramesByHand) | a function |
| [Preferences](platform.md#PreferencesStore) | [Preferences kept in memory](platform.md#MemoryPreferences) | a function |
| [What was said](platform.md#SpeechHeard), [Speech](platform.md#SpeechVoice) | [A voice that writes down](platform.md#WrittenSpeech) | a function |
| [The branches](repository.md#Branches), [The branches a scenario keeps](repository.md#BranchesKept) | [Branches kept in memory](repository.md#BranchesInMemory) | a function |
| [Pull requests](repository.md#PullRequests), [The pull requests a scenario keeps](repository.md#PullRequestsKept) | [Pull requests kept in memory](repository.md#PullRequestsInMemory) | a function |
| [A repository on GitHub](repository.md#RepositoryApi), [The repositories a scenario keeps](repository.md#RepositoryKept) | [A repository kept in memory](repository.md#RepositoryInMemory) | a function |
| [Browser script](tooling.md#BrowserScripted), [Headless browser](tooling.md#HeadlessBrowser) | [A browser kept in memory](tooling.md#BrowserInMemory) | a function |
| [Project files](tooling.md#Files), [Files written](tooling.md#FilesKept) | [Files kept in memory](tooling.md#FilesInMemory) | a function |
| [Programs run](tooling.md#ProgramRuns), [The programs a scenario keeps: the file it says a program writes is written when that program runs.](tooling.md#ProgramRunsKept) | [Programs run in memory](tooling.md#ProgramRunsInMemory) | a function |

Context: A realization kept in memory is what a project's scenarios run in place of the device: it must keep its port's promise.

- Decided by: trame
- Chooses: [Preferences kept in memory](platform.md#MemoryPreferences), [A voice that writes down](platform.md#WrittenSpeech), [The screen kept awake, in memory](platform.md#AwakeInMemory), [Frames turned by hand](platform.md#FramesByHand), [Files kept in memory](tooling.md#FilesInMemory), [A browser kept in memory](tooling.md#BrowserInMemory), [A repository kept in memory](repository.md#RepositoryInMemory), [Branches kept in memory](repository.md#BranchesInMemory), [Pull requests kept in memory](repository.md#PullRequestsInMemory), [Programs run in memory](tooling.md#ProgramRunsInMemory)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](patterns.md#Strategy)
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)

<a id="LanguageJudgment"></a>

### Judged as the language says

`LanguageJudgment` · `src/scenarios.ts:59` · status: **held**

Where the library's build evaluates, it raises nothing: each problem as the language judges it.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Hardening](judgment.md#Hardening) | [As the language says](judgment.md#AsTheLanguageSays) | a function |

Context: The library raises nothing the language does not: its warnings are points to watch, as in any project that says nothing.

- Decided by: trame
- Chooses: [As the language says](judgment.md#AsTheLanguageSays)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](patterns.md#Strategy)
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)

<a id="StrictJudgment"></a>

### Judged strictly

`StrictJudgment` · `src/scenarios.ts:78` · status: **held**

In Strict, every warning is an error.

In [Strict](scenarios.md#Strict):

| Port | Answered by | Which is |
|---|---|---|
| [Hardening](judgment.md#Hardening) | [Every warning an error](judgment.md#EveryWarning) | a function |

Context: A project that leaves nothing to watch chooses it; the library plays it here, through its port, as such a project would.

- Decided by: trame
- Chooses: [Every warning an error](judgment.md#EveryWarning)
- In: [Strict](scenarios.md#Strict)
- Follows: [Strategy](patterns.md#Strategy)
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)

<a id="ScenarioSettings"></a>

### The scenarios' settings

`ScenarioSettings` · `src/scenarios.ts:216` · status: **held**

Where the library's scenarios run, its commands read the settings the scenarios give.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [How a version is carried](commands.md#PropagationSettings) | [How the scenarios' versions are carried](scenarios.md#ScenarioPropagation) | a function |
| [How pull requests are opened](commands.md#PullRequestSettings) | [How the scenarios' pull requests are opened](scenarios.md#ScenarioPullRequests) | a function |

Context: A command of the library reads its settings through its ports: a scenario answers them with its own.

- Decided by: trame
- Chooses: [How the scenarios' pull requests are opened](scenarios.md#ScenarioPullRequests), [How the scenarios' versions are carried](scenarios.md#ScenarioPropagation)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](patterns.md#Strategy)
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
