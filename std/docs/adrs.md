# Architecture decisions

*The choices that shape the product without being values, in force on 28 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **10 architecture decisions, 9 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [An entry point says who may call it](access.md#SaysItsAudience) | **held** | [Who calls a shipment's programs is identified](obligations.md#Identified) |
| [A library offers commands, a project chooses them](commands.md#CommandsOfALibrary) | **held** | [The library's commands](commands.md#LibraryCommands), [Merge a pull request](commands.md#MergePullRequest), [Open a pull request](commands.md#OpenPullRequest), [Propagate](commands.md#Propagate), [Command](patterns.md#Command) |
| [The engine is a provider](engine.md#EngineAsAProvider) | **held** | [Reading a language](engine.md#LanguageReading), [A project compiled by the engine that plays the scenario](engine.md#ProjectCompiledHere), [The project the engine prepared](engine.md#ProjectInTheEngine), [The project of a scenario](engine.md#ProjectOfTheScenario), [Read by the engine](engine.md#ReadByTheEngine), [The project at hand](engine.md#TheProject) |
| [A project judges harder than the language, never softer](judgment.md#HarderNeverSofter) | **held** | [As the language says](judgment.md#AsTheLanguageSays), [Every warning an error](judgment.md#EveryWarning), [Hardening](judgment.md#Hardening), [Raising](judgment.md#Raising) |
| [A component in a browser starts with its page](platform.md#StartsWithThePage) | unknown | [The browser loads the page](platform.md#BrowserLoading), [Loading of a page](platform.md#PageLoading) |
| [The device's services, as ports](platform.md#DeviceAsPorts) | **held** | [Animation frames](platform.md#AnimationFrames), [The screen kept awake, in memory](platform.md#AwakeInMemory), [The browser's frames](platform.md#BrowserFrames), [The browser's languages](platform.md#BrowserLanguages), [The browser keeps the preferences](platform.md#BrowserPreferences), [The browser's voice](platform.md#BrowserSpeech), [The browser keeps the screen awake](platform.md#BrowserWakeLock), [Languages of the device](platform.md#DeviceLanguages), [Frames turned by hand](platform.md#FramesByHand), [Preferences kept in memory](platform.md#MemoryPreferences), [Preferences](platform.md#PreferencesStore), [Screen kept awake](platform.md#ScreenAwake), [Whether the screen is kept awake](platform.md#ScreenKeptAwake), [What was said](platform.md#SpeechHeard), [Speech](platform.md#SpeechVoice), [Time turned by hand](platform.md#TimeTurned), [A voice that writes down](platform.md#WrittenSpeech) |
| [A repository is set by its project's graph](repository.md#RepositoryThroughItsApi) | **held** | [GitHub's command line](repository.md#GitHubCliRepository), [How GitHub merges a pull request](repository.md#MergeMethods), [A repository on GitHub](repository.md#RepositoryApi), [A repository compared with its settings](repository.md#RepositoryCompared), [A repository kept in memory](repository.md#RepositoryInMemory), [The repositories a scenario keeps](repository.md#RepositoryKept), [The parts of a repository's settings](repository.md#RepositoryParts) |
| [A command that keeps running asks the machine through ports](running.md#RunningThroughPorts) | **held** | [A clock stopped](running.md#ClockStopped), [Serving HTTP](running.md#HttpServing), [Lines kept](running.md#LinesInMemory), [Printing as it goes](running.md#LinesPrinted), [The machine's clock](running.md#MachineClock), [The machine's timers](running.md#MachineTimers), [A server of Node.js](running.md#NodeHttpServing), [A server in memory](running.md#ServerInMemory), [The standard output](running.md#StandardOutput), [The clock](running.md#TheClock), [Timers](running.md#Waiting) |
| [How the library's scenarios run](scenarios.md#HowTheScenariosRun) | **held** | [The formats of the scenarios](scenarios.md#FormatsOfTheScenarios), [In memory](scenarios.md#InMemory), [Judged as the language says](scenarios.md#LanguageJudgment), [Read by the engine that builds](scenarios.md#ReadInTheEngine), [The scenarios' settings](scenarios.md#ScenarioSettings), [Judged strictly](scenarios.md#StrictJudgment), [Waiting on the machine](scenarios.md#WaitingAsAPersonWould) |
| [The SDLC's tooling is realized once](tooling.md#ToolingAsPorts) | **held** | [A browser kept in memory](tooling.md#BrowserInMemory), [Browser script](tooling.md#BrowserScripted), [Commands run in the engine](tooling.md#CommandsInTheEngine), [Project files](tooling.md#Files), [Files kept in memory](tooling.md#FilesInMemory), [Files written](tooling.md#FilesKept), [Headless browser](tooling.md#HeadlessBrowser), [The machine's files](tooling.md#MachineFiles), [What the machine must also have](tooling.md#MachineNeeds), [Node's command line](tooling.md#NodeProgramCommands), [Where a package comes from](tooling.md#PackageSources), [Chromium, driven by Playwright](tooling.md#PlaywrightBrowser), [Playwright's browser, installed](tooling.md#PlaywrightBrowserInstalled), [Commands of a program](tooling.md#ProgramCommands), [What repairs a project](tooling.md#ProjectRepairs) |

## Standard library · Access

<a id="SaysItsAudience"></a>

### An entry point says who may call it

`SaysItsAudience` · `src/access.ts:39` · status: **held**

Each entry point names its audience, and the graph checks it against what the entry point reaches: records that belong to someone (a person, a tenant) ask an audience that carries that identity.

Context: Who may call an entry point decides whose records it may touch. Left unsaid, an entry point is open to whoever reaches it, and nothing tells a reader or a review that it is.

Consequences: Every entry point names its audience (an error otherwise); an audience nobody calls is for no trigger a person calls; an entry point that reaches records owned by a person or a tenant has an audience that carries one, or that reaches every owner's. A shipment whose policy applies Identified proves that each audience carrying an identity is identified where it runs (C7).

| Rejected | Why |
|---|---|
| Anyone by default | whatever is forgotten would be open, the classic hole |
| A role, as the SDLC's | a role names the people who sign evidence; an audience is a kind of caller, its members known only at run time |
| A word of a vocabulary | a word cannot say what its callers carry, nor be read against what an entry point reaches |

- Decided by: trame
- Serves: [Rules applied, not written again](product.md#SharedRules)
- Applied by: [Who calls a shipment's programs is identified](obligations.md#Identified)

## Standard library · Commands

<a id="CommandsOfALibrary"></a>

### A library offers commands, a project chooses them

`CommandsOfALibrary` · `src/commands.ts:200` · status: **held**

The commands any project of a repository needs (open a pull request, carry a version across) are written once, in the library; a project runs one when a technical choice of its own chooses it, with its decisions as settings.

Context: Opening a pull request, carrying a version across the projects, were done by hand or by a script of whoever worked: nothing in the graph said how, nor checked it.

Consequences: The library's component LibraryCommands holds the commands; a project chooses those it runs by a binding that follows Command, with a function of its own for each port of settings (its repository, its way of merging, its projects); trame <name> runs them as the project's own commands. A command reads no value of a project but through its settings.

| Rejected | Why |
|---|---|
| A command written by each project | the same pull request opened six ways, none of them checked |
| Settings named by the binding | a new concept in two kinds, and nothing checks that the decision has the type the command reads |

- Decided by: trame
- Serves: [Commands chosen, not written again](product.md#ChosenCommands)
- Applied by: [The library's commands](commands.md#LibraryCommands), [Open a pull request](commands.md#OpenPullRequest), [Merge a pull request](commands.md#MergePullRequest), [Propagate](commands.md#Propagate), [Command](patterns.md#Command)

## Standard library · The engine

<a id="EngineAsAProvider"></a>

### The engine is a provider

`EngineAsAProvider` · `src/engine.ts:128` · status: **held**

What a command needs of the engine (the project compiled at a date, with what a view receives; a language read; later the evidence, the assembly, the publication, the engine's identity) is a port of the library, realized by an adapter that reads the API the language defines; a command, or a language, of a library or a project reaches the engine only through them.

Context: The engine's commands reached its modules directly; a command of a library or a project could not, and a command moved out of the engine would have lost what it computed with.

Consequences: Every command reaches the engine the same way, through ports versioned with the library; the API they read is the language's, given by the engine, and it grows with a generation when a command needs more. A library's scenario compiles a project of its own through the engine that plays it.

| Rejected | Why |
|---|---|
| A library of contracts | a third place for types the language already defines (what a view receives) and the ports std already holds |
| The engine's modules, given as they are | what a command reads would change with each generation, unseen by the types |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [The project at hand](engine.md#TheProject), [The project of a scenario](engine.md#ProjectOfTheScenario), [The project the engine prepared](engine.md#ProjectInTheEngine), [A project compiled by the engine that plays the scenario](engine.md#ProjectCompiledHere), [Reading a language](engine.md#LanguageReading), [Read by the engine](engine.md#ReadByTheEngine)

## Standard library · Judgment

<a id="HarderNeverSofter"></a>

### A project judges harder than the language, never softer

`HarderNeverSofter` · `src/judgment.ts:113` · status: **held**

A project raises the problems the language judges (a warning it will not leave, by its code), by a strategy of its own; the engine keeps the harder severity whatever the strategy answers.

Context: The language judges every project alike; a project that wants no missing owner, or no warning at all, has no way to say so, and a way to lower a problem would let it hide what the language guarantees.

Consequences: A project chooses a realization of Hardening by a binding where its build evaluates: AsTheLanguageSays, EveryWarning, or one of its own built on Raising (the codes it lists in a decision of its own); the engine keeps the harder of the two severities, and a way that would lower one is an error of the project (hardening-lowers).

| Rejected | Why |
|---|---|
| A decision the engine reads | one way only, the codes listed; a project that wants every warning raised, or to raise by kind, would wait for the engine |
| A rule of std, Raised | a broken rule is one error for all, not each problem raised where it is, with its owner |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Raising](judgment.md#Raising), [Hardening](judgment.md#Hardening), [As the language says](judgment.md#AsTheLanguageSays), [Every warning an error](judgment.md#EveryWarning)

## Standard library · Platform

<a id="StartsWithThePage"></a>

### A component in a browser starts with its page

`StartsWithThePage` · `src/platform.ts:38`

A component that runs in a browser is exposed by the loading of its page: its entry points triggered by the loading run once the document is parsed, and the browser's realization is the one a product binds there.

Context: A page and the program it carries are opened together; the program must not reach for elements the browser has not parsed yet, and two products would write the same wait.

Consequences: The exposure of a browser's component is the port PageLoading; BrowserLoading runs the entry points triggered by the loading once the document is parsed (DOMContentLoaded, or at once when it already is).

| Rejected | Why |
|---|---|
| A script placed at the end of the body | the order of a document would decide when the program starts, and nothing would say it |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Loading of a page](platform.md#PageLoading), [The browser loads the page](platform.md#BrowserLoading)

<a id="DeviceAsPorts"></a>

### The device's services, as ports

`DeviceAsPorts` · `src/platform.ts:283` · status: **held**

What a product needs of the device (its preferences, its languages, a voice, the screen awake, the frames of its screen) are ports, with the browser's realizations and, for scenarios, realizations that keep everything in memory.

Context: An app that runs in a browser, then on phones, reaches the same services through different platforms; and a scenario must run without any of them.

Consequences: Each service is a port with its effects; the browser's realizations are written here once, the phones' will be too; a product binds them by environment. A browser that refuses a service (no storage, no voice, no wake lock) leaves the product working without it.

| Rejected | Why |
|---|---|
| Each product calling the browser itself | every product would write the same guards, and none could run in a scenario |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Preferences](platform.md#PreferencesStore), [The browser keeps the preferences](platform.md#BrowserPreferences), [Preferences kept in memory](platform.md#MemoryPreferences), [Languages of the device](platform.md#DeviceLanguages), [The browser's languages](platform.md#BrowserLanguages), [Speech](platform.md#SpeechVoice), [The browser's voice](platform.md#BrowserSpeech), [A voice that writes down](platform.md#WrittenSpeech), [What was said](platform.md#SpeechHeard), [Screen kept awake](platform.md#ScreenAwake), [The browser keeps the screen awake](platform.md#BrowserWakeLock), [The screen kept awake, in memory](platform.md#AwakeInMemory), [Whether the screen is kept awake](platform.md#ScreenKeptAwake), [Animation frames](platform.md#AnimationFrames), [The browser's frames](platform.md#BrowserFrames), [Frames turned by hand](platform.md#FramesByHand), [Time turned by hand](platform.md#TimeTurned)

## Standard library · Repositories on GitHub

<a id="RepositoryThroughItsApi"></a>

### A repository is set by its project's graph

`RepositoryThroughItsApi` · `src/repository.ts:629` · status: **held**

The settings of a repository are a decision of the project's graph, applied through a port of the library and read back: realized once for a machine (GitHub's command line) and once in memory.

Context: A repository's settings decide what reaches its main branch: set by hand in GitHub's pages, nothing says why, and nothing tells when they drift from what the project decided.

Consequences: A project decides its settings (RepositorySettings) and applies them by a program of its SDLC that a shipment deploys, which reads them back and compares them (RepositoryCompared); its scenarios play that program with the repository kept in memory, and a check reads the repository as it is.

| Rejected | Why |
|---|---|
| A script the graph writes, which an administrator runs | nothing reads the repository back, and nothing records who set it |
| A writer in ci | a program that calls GitHub is code a project runs and verifies, not a file a place runs |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [How GitHub merges a pull request](repository.md#MergeMethods), [The parts of a repository's settings](repository.md#RepositoryParts), [A repository compared with its settings](repository.md#RepositoryCompared), [A repository on GitHub](repository.md#RepositoryApi), [GitHub's command line](repository.md#GitHubCliRepository), [The repositories a scenario keeps](repository.md#RepositoryKept), [A repository kept in memory](repository.md#RepositoryInMemory)

## Standard library · Running

<a id="RunningThroughPorts"></a>

### A command that keeps running asks the machine through ports

`RunningThroughPorts` · `src/running.ts:186` · status: **held**

trame dev serves a page, waits before it compiles again, says when it compiled: what it asks of the machine is a port of the library, which a project realizes where its commands run.

Context: trame dev leaves the engine for a library of commands: the server, the timers, the clock and the terminal it used were the engine's own ports, which no library reaches.

Consequences: A library's command that keeps running is played in memory like any other: its server asked as a browser would, its clock stopped, its lines kept; on a machine, Node.js answers.

| Rejected | Why |
|---|---|
| The engine's API serving the page | the engine would serve HTTP for a command, a platform it has no reason to give |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [The clock](running.md#TheClock), [Timers](running.md#Waiting), [Serving HTTP](running.md#HttpServing), [Printing as it goes](running.md#LinesPrinted), [The machine's clock](running.md#MachineClock), [The machine's timers](running.md#MachineTimers), [A server of Node.js](running.md#NodeHttpServing), [The standard output](running.md#StandardOutput), [A clock stopped](running.md#ClockStopped), [A server in memory](running.md#ServerInMemory), [Lines kept](running.md#LinesInMemory)

## Standard library · Scenarios

<a id="HowTheScenariosRun"></a>

### How the library's scenarios run

`HowTheScenariosRun` · `src/scenarios.ts:711` · status: **held**

Every port the library's code touches is played in memory, by the realizations the library offers for that (they keep their port's promise, as a project's scenarios need); a command's settings are the scenario's own; the library judges as the language says, and plays the strict way of judging through its port in an environment of its own; its languages are read by the engine that builds it, whose grammars no library carries.

Context: The library offers realizations in memory to every project's scenarios: its own scenarios prove that they keep their ports' promises, before any project relies on them.

Consequences: A project that judges harder chooses EveryWarning or one of its own (C4); the library leaves its warnings as points to watch. Reading HTML and CSS needs an engine: the library's build has one.

| Rejected | Why |
|---|---|
| Scenarios on the machine | they would touch the disk, a browser and GitHub at each build of the library |
| Strict judgment for the library itself | a library's warnings are often what its projects decide (a port nobody realizes here) |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [In memory](scenarios.md#InMemory), [Waiting on the machine](scenarios.md#WaitingAsAPersonWould), [The scenarios' settings](scenarios.md#ScenarioSettings), [Judged as the language says](scenarios.md#LanguageJudgment), [Judged strictly](scenarios.md#StrictJudgment), [Read by the engine that builds](scenarios.md#ReadInTheEngine), [The formats of the scenarios](scenarios.md#FormatsOfTheScenarios)

## Standard library · Tooling

<a id="ToolingAsPorts"></a>

### The SDLC's tooling is realized once

`ToolingAsPorts` · `src/tooling.ts:562` · status: **held**

The files of a project and a headless browser are ports of the library, each realized for a machine and in memory: every project's checks and deployments use them, and play them in scenarios, rather than calling the machine itself.

Context: The code that builds, checks and deploys a product is code like the product's: written once, tested before it runs.

Consequences: A check opens the delivered page through HeadlessBrowser, a deployment copies through Files, a project reaches the packages it uses through PackageSources wherever they come from; scenarios play them with the realizations kept in memory.

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Commands of a program](tooling.md#ProgramCommands), [Node's command line](tooling.md#NodeProgramCommands), [Commands run in the engine](tooling.md#CommandsInTheEngine), [What the machine must also have](tooling.md#MachineNeeds), [Playwright's browser, installed](tooling.md#PlaywrightBrowserInstalled), [What repairs a project](tooling.md#ProjectRepairs), [Project files](tooling.md#Files), [Files written](tooling.md#FilesKept), [The machine's files](tooling.md#MachineFiles), [Files kept in memory](tooling.md#FilesInMemory), [Headless browser](tooling.md#HeadlessBrowser), [Chromium, driven by Playwright](tooling.md#PlaywrightBrowser), [Browser script](tooling.md#BrowserScripted), [A browser kept in memory](tooling.md#BrowserInMemory), [Where a package comes from](tooling.md#PackageSources)
