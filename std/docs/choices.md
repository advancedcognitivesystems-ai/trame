# Technical choices

*What answers each port in each environment on 1 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **1 technical choice for 11 ports, in 1 environment**

| Port | Test |
|---|---|
| [Preferences](platform.md#PreferencesStore) | [Preferences kept in memory](platform.md#MemoryPreferences) |
| [Speech](platform.md#SpeechVoice) | [A voice that writes down](platform.md#WrittenSpeech) |
| [What was said](platform.md#SpeechHeard) | [A voice that writes down](platform.md#WrittenSpeech) |
| [Screen kept awake](platform.md#ScreenAwake) | [The screen kept awake, in memory](platform.md#AwakeInMemory) |
| [Whether the screen is kept awake](platform.md#ScreenKeptAwake) | [The screen kept awake, in memory](platform.md#AwakeInMemory) |
| [Animation frames](platform.md#AnimationFrames) | [Frames turned by hand](platform.md#FramesByHand) |
| [Time turned by hand](platform.md#TimeTurned) | [Frames turned by hand](platform.md#FramesByHand) |
| [Project files](tooling.md#Files) | [Files kept in memory](tooling.md#FilesInMemory) |
| [Files written](tooling.md#FilesKept) | [Files kept in memory](tooling.md#FilesInMemory) |
| [Headless browser](tooling.md#HeadlessBrowser) | [A browser kept in memory](tooling.md#BrowserInMemory) |
| [Browser script](tooling.md#BrowserScripted) | [A browser kept in memory](tooling.md#BrowserInMemory) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](patterns.md#Strategy) | **held** | [In memory](scenarios.md#InMemory) |
| [Adapter](patterns.md#Adapter) | unknown | — |
| [Bridge](patterns.md#Bridge) | unknown | — |
| [Abstract Factory](patterns.md#AbstractFactory) | unknown | — |
| [Repository](patterns.md#Repository) | unknown | — |

## Standard library · Scenarios

<a id="InMemory"></a>

### In memory

`InMemory` · `src/scenarios.ts:32` · status: **held**

In the library's scenarios, each port of a device or of the tooling is answered by its realization kept in memory.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Screen kept awake](platform.md#ScreenAwake), [Whether the screen is kept awake](platform.md#ScreenKeptAwake) | [The screen kept awake, in memory](platform.md#AwakeInMemory) | a function |
| [Animation frames](platform.md#AnimationFrames), [Time turned by hand](platform.md#TimeTurned) | [Frames turned by hand](platform.md#FramesByHand) | a function |
| [Preferences](platform.md#PreferencesStore) | [Preferences kept in memory](platform.md#MemoryPreferences) | a function |
| [What was said](platform.md#SpeechHeard), [Speech](platform.md#SpeechVoice) | [A voice that writes down](platform.md#WrittenSpeech) | a function |
| [Browser script](tooling.md#BrowserScripted), [Headless browser](tooling.md#HeadlessBrowser) | [A browser kept in memory](tooling.md#BrowserInMemory) | a function |
| [Project files](tooling.md#Files), [Files written](tooling.md#FilesKept) | [Files kept in memory](tooling.md#FilesInMemory) | a function |

Context: A realization kept in memory is what a project's scenarios run in place of the device: it must keep its port's promise.

- Decided by: trame
- Chooses: [Preferences kept in memory](platform.md#MemoryPreferences), [A voice that writes down](platform.md#WrittenSpeech), [The screen kept awake, in memory](platform.md#AwakeInMemory), [Frames turned by hand](platform.md#FramesByHand), [Files kept in memory](tooling.md#FilesInMemory), [A browser kept in memory](tooling.md#BrowserInMemory)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](patterns.md#Strategy)
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
