# Architecture decisions

*The choices that shape the product without being values, in force on 26 October 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **2 architecture decisions, 0 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [A component in a browser starts with its page](platform.md#StartsWithThePage) | **unknown** | [The browser loads the page](platform.md#BrowserLoading), [Loading of a page](platform.md#PageLoading) |
| [The device's services, as ports](platform.md#DeviceAsPorts) | **unknown** | [Animation frames](platform.md#AnimationFrames), [The screen kept awake, in memory](platform.md#AwakeInMemory), [The browser's frames](platform.md#BrowserFrames), [The browser's languages](platform.md#BrowserLanguages), [The browser keeps the preferences](platform.md#BrowserPreferences), [The browser's voice](platform.md#BrowserSpeech), [The browser keeps the screen awake](platform.md#BrowserWakeLock), [Languages of the device](platform.md#DeviceLanguages), [Frames turned by hand](platform.md#FramesByHand), [Preferences kept in memory](platform.md#MemoryPreferences), [Preferences](platform.md#PreferencesStore), [Screen kept awake](platform.md#ScreenAwake), [Whether the screen is kept awake](platform.md#ScreenKeptAwake), [What was said](platform.md#SpeechHeard), [Speech](platform.md#SpeechVoice), [Time turned by hand](platform.md#TimeTurned), [A voice that writes down](platform.md#WrittenSpeech) |

## Standard library · Platform

<a id="StartsWithThePage"></a>

### A component in a browser starts with its page

`StartsWithThePage` · `src/platform.ts:37` · status: **unknown**

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

`DeviceAsPorts` · `src/platform.ts:265` · status: **unknown**

What a product needs of the device (its preferences, its languages, a voice, the screen awake, the frames of its screen) are ports, with the browser's realizations and, for scenarios, realizations that keep everything in memory.

Context: An app that runs in a browser, then on phones, reaches the same services through different platforms; and a scenario must run without any of them.

Consequences: Each service is a port with its effects; the browser's realizations are written here once, the phones' will be too; a product binds them by environment. A browser that refuses a service (no storage, no voice, no wake lock) leaves the product working without it.

| Rejected | Why |
|---|---|
| Each product calling the browser itself | every product would write the same guards, and none could run in a scenario |

- Decided by: trame
- Serves: [Ports of the platform, realized once](product.md#RealizedOnce)
- Applied by: [Preferences](platform.md#PreferencesStore), [The browser keeps the preferences](platform.md#BrowserPreferences), [Preferences kept in memory](platform.md#MemoryPreferences), [Languages of the device](platform.md#DeviceLanguages), [The browser's languages](platform.md#BrowserLanguages), [Speech](platform.md#SpeechVoice), [The browser's voice](platform.md#BrowserSpeech), [A voice that writes down](platform.md#WrittenSpeech), [What was said](platform.md#SpeechHeard), [Screen kept awake](platform.md#ScreenAwake), [The browser keeps the screen awake](platform.md#BrowserWakeLock), [The screen kept awake, in memory](platform.md#AwakeInMemory), [Whether the screen is kept awake](platform.md#ScreenKeptAwake), [Animation frames](platform.md#AnimationFrames), [The browser's frames](platform.md#BrowserFrames), [Frames turned by hand](platform.md#FramesByHand), [Time turned by hand](platform.md#TimeTurned)
