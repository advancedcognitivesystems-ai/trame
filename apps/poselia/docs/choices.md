# Technical choices

*What answers each port in each environment on 8 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **5 technical choices for 20 ports, in 3 environments**

| Port | Browser | Test | A machine |
|---|---|---|---|
| [Bowl](architecture.md#Bowl) | [The browser's bowl](sound.md#BrowserBowl) | [A bowl that counts](scenarios.md#RecordedBowl) | — |
| [Bowl rung](architecture.md#BowlRung) | — | [A bowl that counts](scenarios.md#RecordedBowl) | — |
| [Stage](architecture.md#Stage) | [The browser's stage](stage.md#BrowserStage) | — | — |
| [Screen](architecture.md#Screen) | [The browser's screen](app.md#BrowserScreen) | [A screen that records](scenarios.md#RecordedScreen) | — |
| [Content](architecture.md#ContentSource) | [The content the app carries](app.md#CarriedContent) | [The content the app carries](app.md#CarriedContent) | — |
| [Views shown](architecture.md#ViewsShown) | — | [A screen that records](scenarios.md#RecordedScreen) | — |
| [Loading of a page](../.trame/std/docs/platform.md#PageLoading) | [The browser loads the page](../.trame/std/docs/platform.md#BrowserLoading) | — | — |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [The browser keeps the preferences](../.trame/std/docs/platform.md#BrowserPreferences) | [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences) | — |
| [Languages of the device](../.trame/std/docs/platform.md#DeviceLanguages) | [The browser's languages](../.trame/std/docs/platform.md#BrowserLanguages) | [The device's languages, given](scenarios.md#GivenLanguages) | — |
| [Speech](../.trame/std/docs/platform.md#SpeechVoice) | [The browser's voice](../.trame/std/docs/platform.md#BrowserSpeech) | [A voice that writes down](../.trame/std/docs/platform.md#WrittenSpeech) | — |
| [What was said](../.trame/std/docs/platform.md#SpeechHeard) | — | [A voice that writes down](../.trame/std/docs/platform.md#WrittenSpeech) | — |
| [Screen kept awake](../.trame/std/docs/platform.md#ScreenAwake) | [The browser keeps the screen awake](../.trame/std/docs/platform.md#BrowserWakeLock) | [The screen kept awake, in memory](../.trame/std/docs/platform.md#AwakeInMemory) | — |
| [Whether the screen is kept awake](../.trame/std/docs/platform.md#ScreenKeptAwake) | — | [The screen kept awake, in memory](../.trame/std/docs/platform.md#AwakeInMemory) | — |
| [Animation frames](../.trame/std/docs/platform.md#AnimationFrames) | [The browser's frames](../.trame/std/docs/platform.md#BrowserFrames) | [Frames turned by hand](../.trame/std/docs/platform.md#FramesByHand) | — |
| [Time turned by hand](../.trame/std/docs/platform.md#TimeTurned) | — | [Frames turned by hand](../.trame/std/docs/platform.md#FramesByHand) | — |
| [Commands of a program](../.trame/std/docs/tooling.md#ProgramCommands) | — | — | [Node's command line](../.trame/std/docs/tooling.md#NodeProgramCommands) |
| [Project files](../.trame/std/docs/tooling.md#Files) | — | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | [The machine's files](../.trame/std/docs/tooling.md#MachineFiles) |
| [Files written](../.trame/std/docs/tooling.md#FilesKept) | — | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | — |
| [Headless browser](../.trame/std/docs/tooling.md#HeadlessBrowser) | — | [A browser kept in memory](../.trame/std/docs/tooling.md#BrowserInMemory) | [Chromium, driven by Playwright](../.trame/std/docs/tooling.md#PlaywrightBrowser) |
| [Browser script](../.trame/std/docs/tooling.md#BrowserScripted) | — | [A browser kept in memory](../.trame/std/docs/tooling.md#BrowserInMemory) | — |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [Content carried by the app](app.md#ContentCarried), [The app in memory](scenarios.md#InMemory), [The SDLC in memory](sdlc.md#SdlcInMemory), [In memory](../.trame/std/docs/scenarios.md#InMemory) |
| [Adapter](../.trame/std/docs/patterns.md#Adapter) | **held** | [The browser's realizations](app.md#InTheBrowser), [On the machine](sdlc.md#OnTheMachine) |
| [Abstract Factory](../.trame/std/docs/patterns.md#AbstractFactory) | **held** | [The app in memory](scenarios.md#InMemory) |

## Poselia · The app in a browser

<a id="InTheBrowser"></a>

### The browser's realizations

`InTheBrowser` · `src/app.ts:93` · status: **unknown**

In a browser, the page loads, keeps the person's choices, reads the device's languages, speaks, keeps the screen awake and moves with the screen's frames as the standard library's realizations do; the screen is the document, the stage a scene of three.js in it, the bowl a sound made with Web Audio.

In [Browser](architecture.md#Browser):

| Port | Answered by | Which is |
|---|---|---|
| [Screen](architecture.md#Screen) | [The browser's screen](app.md#BrowserScreen) | an implementation |
| [Bowl](architecture.md#Bowl) | [The browser's bowl](sound.md#BrowserBowl) | an implementation |
| [Stage](architecture.md#Stage) | [The browser's stage](stage.md#BrowserStage) | an implementation |
| [Animation frames](../.trame/std/docs/platform.md#AnimationFrames) | [The browser's frames](../.trame/std/docs/platform.md#BrowserFrames) | an implementation |
| [Languages of the device](../.trame/std/docs/platform.md#DeviceLanguages) | [The browser's languages](../.trame/std/docs/platform.md#BrowserLanguages) | an implementation |
| [Loading of a page](../.trame/std/docs/platform.md#PageLoading) | [The browser loads the page](../.trame/std/docs/platform.md#BrowserLoading) | an implementation |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [The browser keeps the preferences](../.trame/std/docs/platform.md#BrowserPreferences) | an implementation |
| [Speech](../.trame/std/docs/platform.md#SpeechVoice) | [The browser's voice](../.trame/std/docs/platform.md#BrowserSpeech) | an implementation |
| [Screen kept awake](../.trame/std/docs/platform.md#ScreenAwake) | [The browser keeps the screen awake](../.trame/std/docs/platform.md#BrowserWakeLock) | an implementation |

Context: The first delivery is a page a browser opens as it is; the phones come later, with their own realizations.

- Decided by: ghalaax
- Chooses: [The browser loads the page](../.trame/std/docs/platform.md#BrowserLoading), [The browser's screen](app.md#BrowserScreen), [The browser's stage](stage.md#BrowserStage), [The browser's bowl](sound.md#BrowserBowl), [The browser keeps the preferences](../.trame/std/docs/platform.md#BrowserPreferences), [The browser's languages](../.trame/std/docs/platform.md#BrowserLanguages), [The browser's voice](../.trame/std/docs/platform.md#BrowserSpeech), [The browser keeps the screen awake](../.trame/std/docs/platform.md#BrowserWakeLock), [The browser's frames](../.trame/std/docs/platform.md#BrowserFrames)
- In: [Browser](architecture.md#Browser)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)

<a id="ContentCarried"></a>

### Content carried by the app

`ContentCarried` · `src/app.ts:116` · status: **held**

Until updates are downloaded, the app reads the content it was delivered with.

In [Browser](architecture.md#Browser), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Content](architecture.md#ContentSource) | [The content the app carries](app.md#CarriedContent) | a function |

Context: An app on the mat works offline; the content is small enough to travel with it.

| Rejected | Why |
|---|---|
| Downloading the content at the first start | nothing to practise until the network answers |

- Decided by: ghalaax
- Chooses: [The content the app carries](app.md#CarriedContent)
- In: [Browser](architecture.md#Browser), [Test](architecture.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)

## Poselia · Scenarios

<a id="InMemory"></a>

### The app in memory

`InMemory` · `src/scenarios.ts:109` · status: **held**

In the scenarios, the screen records, the person's choices are kept while the app runs, the device's languages are given, time moves only when the scenario turns it, the voice writes down what it says, the bowl counts its strikes and the screen only says whether it is kept awake.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Languages of the device](../.trame/std/docs/platform.md#DeviceLanguages) | [The device's languages, given](scenarios.md#GivenLanguages) | a function |
| [Bowl](architecture.md#Bowl), [Bowl rung](architecture.md#BowlRung) | [A bowl that counts](scenarios.md#RecordedBowl) | a function |
| [Screen](architecture.md#Screen), [Views shown](architecture.md#ViewsShown) | [A screen that records](scenarios.md#RecordedScreen) | a function |
| [Screen kept awake](../.trame/std/docs/platform.md#ScreenAwake), [Whether the screen is kept awake](../.trame/std/docs/platform.md#ScreenKeptAwake) | [The screen kept awake, in memory](../.trame/std/docs/platform.md#AwakeInMemory) | a function |
| [Animation frames](../.trame/std/docs/platform.md#AnimationFrames), [Time turned by hand](../.trame/std/docs/platform.md#TimeTurned) | [Frames turned by hand](../.trame/std/docs/platform.md#FramesByHand) | a function |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences) | a function |
| [What was said](../.trame/std/docs/platform.md#SpeechHeard), [Speech](../.trame/std/docs/platform.md#SpeechVoice) | [A voice that writes down](../.trame/std/docs/platform.md#WrittenSpeech) | a function |

Context: A scenario reads what the app would show and keeps, the same every time, without a browser.

Consequences: The screen and what records it are chosen together: a scenario reads the views the app showed.

- Decided by: ghalaax
- Chooses: [A screen that records](scenarios.md#RecordedScreen), [A bowl that counts](scenarios.md#RecordedBowl), [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences), [The device's languages, given](scenarios.md#GivenLanguages), [Frames turned by hand](../.trame/std/docs/platform.md#FramesByHand), [A voice that writes down](../.trame/std/docs/platform.md#WrittenSpeech), [The screen kept awake, in memory](../.trame/std/docs/platform.md#AwakeInMemory)
- In: [Test](architecture.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy), [Abstract Factory](../.trame/std/docs/patterns.md#AbstractFactory)

## Poselia · SDLC

<a id="OnTheMachine"></a>

### On the machine

`OnTheMachine` · `src/sdlc.ts:85` · status: **held**

On a machine, the programs of the SDLC read their commands from Node's command line, the project's files from the disk, and open the page in Chromium driven by Playwright, as the standard library realizes them.

In [A machine](sdlc.md#Machine):

| Port | Answered by | Which is |
|---|---|---|
| [Project files](../.trame/std/docs/tooling.md#Files) | [The machine's files](../.trame/std/docs/tooling.md#MachineFiles) | an implementation |
| [Commands of a program](../.trame/std/docs/tooling.md#ProgramCommands) | [Node's command line](../.trame/std/docs/tooling.md#NodeProgramCommands) | an implementation |
| [Headless browser](../.trame/std/docs/tooling.md#HeadlessBrowser) | [Chromium, driven by Playwright](../.trame/std/docs/tooling.md#PlaywrightBrowser) | an implementation |

Context: A check must open the page a person opens: the file delivered, in a real browser.

- Decided by: ghalaax
- Chooses: [Node's command line](../.trame/std/docs/tooling.md#NodeProgramCommands), [The machine's files](../.trame/std/docs/tooling.md#MachineFiles), [Chromium, driven by Playwright](../.trame/std/docs/tooling.md#PlaywrightBrowser)
- In: [A machine](sdlc.md#Machine)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)

<a id="SdlcInMemory"></a>

### The SDLC in memory

`SdlcInMemory` · `src/sdlc.ts:97` · status: **held**

In the scenarios, the files are kept in memory and the browser shows the page a scenario writes.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Browser script](../.trame/std/docs/tooling.md#BrowserScripted), [Headless browser](../.trame/std/docs/tooling.md#HeadlessBrowser) | [A browser kept in memory](../.trame/std/docs/tooling.md#BrowserInMemory) | a function |
| [Project files](../.trame/std/docs/tooling.md#Files), [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | a function |

Context: A program of the SDLC is code like the app's: its scenarios play it before it runs on a machine.

- Decided by: ghalaax
- Chooses: [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory), [A browser kept in memory](../.trame/std/docs/tooling.md#BrowserInMemory)
- In: [Test](architecture.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
