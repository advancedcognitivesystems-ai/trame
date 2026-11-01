/** Standard library · Platform */

import { code } from "../../../../trame/kernel"
import { port } from "../../../../kinds/port"
import { implementation } from "../../../../kinds/implementation"
import { adr } from "../../../../kinds/adr"
import type { Exposure } from "../../../../kinds/component"
import { fn } from "../../../../kinds/function"
import { UiEvents, ScreenWakeLockApi } from "./web"
import { Counts } from "./algebra"
import { LanguageTags } from "./measures"
import { RealizedOnce } from "./product"

// What a product needs of a platform, as ports, with their realizations on that platform. A product binds, in each of its
// environments, the realization that answers there; the ports and their realizations are written here once.

/**
 * Loading of a page
 * Runs the entry points of a page once its document is loaded: what exposes a component that runs in a browser.
 */
export const PageLoading = port<Exposure>({ owner: "trame", declaredEffects: ["display"] })

/**
 * The browser loads the page
 * The entry points triggered by the loading run once the document is parsed.
 */
export const BrowserLoading = implementation({
  owner: "trame", implements: [PageLoading],
  deps: { events: UiEvents },
  body: code.file("./code/platform/loading.ts"),
})

/**
 * A component in a browser starts with its page
 * A component that runs in a browser is exposed by the loading of its page: its entry points triggered by the loading
 * run once the document is parsed, and the browser's realization is the one a product binds there.
 */
export const StartsWithThePage = adr({
  owner: "trame",
  context: "A page and the program it carries are opened together; the program must not reach for elements the browser has not parsed yet, and two products would write the same wait.",
  consequences: "The exposure of a browser's component is the port PageLoading; BrowserLoading runs the entry points triggered by the loading once the document is parsed (DOMContentLoaded, or at once when it already is).",
  rejected: { "A script placed at the end of the body": "the order of a document would decide when the program starts, and nothing would say it" },
  serves: [RealizedOnce],
  appliedBy: [PageLoading, BrowserLoading],
})

// The device's services -------------------------------------------------------------------

/** What a person chose, kept on the device under a name. */
export interface Preferences {
  get(name: string): string | undefined
  set(name: string, value: string): void
}

/**
 * Preferences
 * What the person chose (a language, a pace, a voice turned off), kept on the device between two uses, under a name the
 * product decides.
 */
export const PreferencesStore = port<Preferences>({ owner: "trame", declaredEffects: ["read", "write"] })

/**
 * The browser keeps the preferences
 * In the storage of the page's origin. A browser that keeps nothing (a private window, storage refused) forgets them
 * when the page closes, and the product starts as it would the first time.
 */
export const BrowserPreferences = implementation({
  owner: "trame", implements: [PreferencesStore],
  body: code.file("./code/platform/preferences.ts"),
})

/**
 * Preferences kept in memory
 * For a scenario: what is set is kept while the program runs, and nothing reaches the device.
 */
export const MemoryPreferences = fn({
  owner: "trame", implements: [PreferencesStore],
  body: () => {
    const kept = new Map<string, string>()
    return { get: (name: string) => kept.get(name), set: (name: string, value: string) => void kept.set(name, value) }
  },
})

/** The languages the device says its person reads. */
export interface Languages {
  languages(): readonly string[]
}

/**
 * Languages of the device
 * The languages the device says its person reads, in their order of preference, as language tags (fr-CH, en).
 */
export const DeviceLanguages = port<Languages>({ owner: "trame", declaredEffects: ["read"] })

/**
 * The browser's languages
 * Those the browser sends with each request (navigator.languages), or its one language when it gives no list.
 */
export const BrowserLanguages = implementation({
  owner: "trame", implements: [DeviceLanguages],
  body: code.file("./code/platform/languages.ts"),
})

/** A voice that says texts aloud. */
export interface Speech {
  /** Whether the device can speak at all. */
  available(): boolean
  say(text: string, language: string): void
  stop(): void
}

/**
 * Speech
 * Says a text aloud in a language, after what it is already saying; stops at once when asked; says whether the device
 * can speak at all, so that a product tells the person rather than staying silent.
 */
export const SpeechVoice = port<Speech>({ owner: "trame", declaredEffects: ["display"] })

/**
 * The browser's voice
 * The speech synthesis of the browser (Web Speech API): a voice of the device in the language asked (the same tag,
 * else the same language, one on the device first), named on each utterance with its own tag, which Chrome on Android
 * needs; the voices are read again when the browser says they changed. A browser without speech synthesis (the
 * WebView of an Android app) says it cannot speak.
 */
export const BrowserSpeech = implementation({
  owner: "trame", implements: [SpeechVoice],
  deps: { tags: LanguageTags },
  body: code.file("./code/platform/speech.ts"),
})

/** What a voice said, in order: for a scenario to read. */
export interface Said {
  said(): readonly { text: string; language: string }[]
}

/**
 * What was said
 * The texts a voice was asked to say, in order, with their language: realized together with the voice that writes them
 * down.
 */
export const SpeechHeard = port<Said>({ owner: "trame", declaredEffects: [] })

/**
 * A voice that writes down
 * For a scenario: what would be said is kept, in order, and stopping forgets nothing.
 */
export const WrittenSpeech = fn({
  owner: "trame", implements: [SpeechVoice, SpeechHeard],
  body: () => {
    const said: { text: string; language: string }[] = []
    return {
      available: () => true,
      say: (text: string, language: string) => void said.push({ text, language }),
      stop: () => undefined,
      said: () => [...said],
    }
  },
})

/** The screen kept on while it is needed. */
export interface WakeLock {
  keep(): Promise<void>
  release(): void
}

/**
 * Screen kept awake
 * Keeps the screen on while the product needs it to be read from afar, then lets it sleep again.
 */
export const ScreenAwake = port<WakeLock>({ owner: "trame", declaredEffects: ["display", "asynchronous"] })

/**
 * The browser keeps the screen awake
 * Through the Screen Wake Lock API, where the browser has it; elsewhere the screen sleeps as it would.
 */
export const BrowserWakeLock = implementation({
  owner: "trame", implements: [ScreenAwake],
  deps: { wake: ScreenWakeLockApi },
  body: code.file("./code/platform/wake-lock.ts"),
})

/** Whether the screen is kept awake: for a scenario to read. */
export interface Awake {
  awake(): boolean
}

/**
 * Whether the screen is kept awake
 * For a scenario: realized together with the screen kept awake in memory.
 */
export const ScreenKeptAwake = port<Awake>({ owner: "trame", declaredEffects: [] })

/**
 * The screen kept awake, in memory
 * For a scenario: keeping and releasing the screen only changes whether it says it is kept awake.
 */
export const AwakeInMemory = fn({
  owner: "trame", implements: [ScreenAwake, ScreenKeptAwake],
  body: () => {
    let kept = false
    return {
      keep: async () => {
        kept = true
      },
      release: () => {
        kept = false
      },
      awake: () => kept,
    }
  },
})

/** A clock that beats with the screen. */
export interface Frames {
  /** Calls back before each frame the screen paints, with the seconds since the start, until stopped. */
  start(each: (seconds: number) => void): { stop(): void }
}

/**
 * Animation frames
 * Calls back before each frame the screen paints, with the seconds since it started, until it is stopped: what moves on
 * a screen moves at the screen's pace, and stops when the page is hidden.
 */
export const AnimationFrames = port<Frames>({ owner: "trame", declaredEffects: ["time", "display"] })

/**
 * The browser's frames
 * The browser calls back before each repaint (requestAnimationFrame, HTML § 8.10), and the seconds come from its
 * high-resolution clock (performance.now, High Resolution Time).
 */
export const BrowserFrames = implementation({
  owner: "trame", implements: [AnimationFrames],
  body: code.file("./code/platform/frames.ts"),
})

/** Time turned by hand: a scenario moves it forward. */
export interface Turning {
  /** Moves the time forward by these seconds, and calls back what was started, as a frame would. */
  turn(seconds: number): void
}

/**
 * Time turned by hand
 * For a scenario: the frames come when it turns the time, by the seconds it says; realized together with the frames.
 */
export const TimeTurned = port<Turning>({ owner: "trame", declaredEffects: [] })

/**
 * Frames turned by hand
 * For a scenario: nothing moves until the time is turned; each turn calls back what was started with the seconds since
 * its start.
 */
export const FramesByHand = fn({
  owner: "trame", implements: [AnimationFrames, TimeTurned],
  deps: { counts: Counts },
  body: ({ counts }) => {
    let now = counts.zero
    const started = new Map<(seconds: number) => void, number>()
    return {
      start: (each: (seconds: number) => void) => {
        started.set(each, now)
        return { stop: () => void started.delete(each) }
      },
      turn: (seconds: number) => {
        now += seconds
        for (const [each, at] of [...started]) each(now - at)
      },
    }
  },
})

/**
 * The device's services, as ports
 * What a product needs of the device (its preferences, its languages, a voice, the screen awake, the frames of its
 * screen) are ports, with the browser's realizations and, for scenarios, realizations that keep everything in memory.
 */
export const DeviceAsPorts = adr({
  owner: "trame",
  context: "An app that runs in a browser, then on phones, reaches the same services through different platforms; and a scenario must run without any of them.",
  consequences: "Each service is a port with its effects; the browser's realizations are written here once, the phones' will be too; a product binds them by environment. A browser that refuses a service (no storage, no voice, no wake lock) leaves the product working without it.",
  rejected: { "Each product calling the browser itself": "every product would write the same guards, and none could run in a scenario" },
  serves: [RealizedOnce],
  appliedBy: [
    PreferencesStore, BrowserPreferences, MemoryPreferences, DeviceLanguages, BrowserLanguages, SpeechVoice, BrowserSpeech, WrittenSpeech, SpeechHeard,
    ScreenAwake, BrowserWakeLock, AwakeInMemory, ScreenKeptAwake, AnimationFrames, BrowserFrames, FramesByHand, TimeTurned,
  ],
})
