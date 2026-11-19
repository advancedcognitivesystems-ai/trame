# Architecture decisions

*The choices that shape the product without being values, in force on 19 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **5 architecture decisions, 4 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [An entry point says who may call it](access.md#SaysItsAudience) | **held** | [Who calls a shipment's programs is identified](obligations.md#Identified) |
| [A component in a browser starts with its page](platform.md#StartsWithThePage) | unknown | [The browser loads the page](platform.md#BrowserLoading), [Loading of a page](platform.md#PageLoading) |
| [The device's services, as ports](platform.md#DeviceAsPorts) | **held** | [Animation frames](platform.md#AnimationFrames), [The screen kept awake, in memory](platform.md#AwakeInMemory), [The browser's frames](platform.md#BrowserFrames), [The browser's languages](platform.md#BrowserLanguages), [The browser keeps the preferences](platform.md#BrowserPreferences), [The browser's voice](platform.md#BrowserSpeech), [The browser keeps the screen awake](platform.md#BrowserWakeLock), [Languages of the device](platform.md#DeviceLanguages), [Frames turned by hand](platform.md#FramesByHand), [Preferences kept in memory](platform.md#MemoryPreferences), [Preferences](platform.md#PreferencesStore), [Screen kept awake](platform.md#ScreenAwake), [Whether the screen is kept awake](platform.md#ScreenKeptAwake), [What was said](platform.md#SpeechHeard), [Speech](platform.md#SpeechVoice), [Time turned by hand](platform.md#TimeTurned), [A voice that writes down](platform.md#WrittenSpeech) |
| [A repository is set by its project's graph](repository.md#RepositoryThroughItsApi) | **held** | [GitHub's command line](repository.md#GitHubCliRepository), [How GitHub merges a pull request](repository.md#MergeMethods), [A repository on GitHub](repository.md#RepositoryApi), [A repository compared with its settings](repository.md#RepositoryCompared), [A repository kept in memory](repository.md#RepositoryInMemory), [The repositories a scenario keeps](repository.md#RepositoryKept), [The parts of a repository's settings](repository.md#RepositoryParts) |
| [The SDLC's tooling is realized once](tooling.md#ToolingAsPorts) | **held** | [A browser kept in memory](tooling.md#BrowserInMemory), [Browser script](tooling.md#BrowserScripted), [Project files](tooling.md#Files), [Files kept in memory](tooling.md#FilesInMemory), [Files written](tooling.md#FilesKept), [Headless browser](tooling.md#HeadlessBrowser), [The machine's files](tooling.md#MachineFiles), [Node's command line](tooling.md#NodeProgramCommands), [Where a package comes from](tooling.md#PackageSources), [Chromium, driven by Playwright](tooling.md#PlaywrightBrowser), [Commands of a program](tooling.md#ProgramCommands) |

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

`RepositoryThroughItsApi` · `src/repository.ts:276` · status: **held**

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

## Standard library · Tooling

<a id="ToolingAsPorts"></a>

### The SDLC's tooling is realized once

`ToolingAsPorts` · `src/tooling.ts:304` · status: **held**

The files of a project and a headless browser are ports of the library, each realized for a machine and in memory: every project's checks and deployments use them, and play them in scenarios, rather than calling the machine itself.

Context: The code that builds, checks and deploys a product is code like the product's: written once, tested before it runs.

Consequences: A check opens the delivered page through HeadlessBrowser, a deployment copies through Files, a project reaches the packages it uses through PackageSources wherever they come from; scenarios play them with the realizations kept in memory.

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Commands of a program](tooling.md#ProgramCommands), [Node's command line](tooling.md#NodeProgramCommands), [Project files](tooling.md#Files), [Files written](tooling.md#FilesKept), [The machine's files](tooling.md#MachineFiles), [Files kept in memory](tooling.md#FilesInMemory), [Headless browser](tooling.md#HeadlessBrowser), [Chromium, driven by Playwright](tooling.md#PlaywrightBrowser), [Browser script](tooling.md#BrowserScripted), [A browser kept in memory](tooling.md#BrowserInMemory), [Where a package comes from](tooling.md#PackageSources)
