/** Standard library · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { SharedOperations, RealizedOnce } from "./product"
import { SeededDraws } from "./algorithms"
import {
  PreferencesStore, MemoryPreferences, SpeechVoice, SpeechHeard, WrittenSpeech, ScreenAwake, ScreenKeptAwake, AwakeInMemory, AnimationFrames, TimeTurned,
  FramesByHand,
} from "./platform"
import { Files, FilesKept, FilesInMemory, HeadlessBrowser, BrowserScripted, BrowserInMemory } from "./tooling"
import { Strategy } from "./patterns"
import { Commands, Effects } from "./effects"
import { Counts } from "./algebra"

// What the library offers to scenarios is code like the rest: its realizations kept in memory are played here, against
// the contract of their ports, and its draws against what they promise. Its realizations on a device or a machine are
// chosen, and verified, by the projects that run them.

/**
 * Test
 * Where the library's scenarios run: its realizations kept in memory.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * In memory
 * In the library's scenarios, each port of a device or of the tooling is answered by its realization kept in memory.
 */
export const InMemory = binding({
  owner: "trame",
  chooses: [MemoryPreferences, WrittenSpeech, AwakeInMemory, FramesByHand, FilesInMemory, BrowserInMemory],
  environments: [Test],
  follows: [Strategy],
  serves: [RealizedOnce],
  context: "A realization kept in memory is what a project's scenarios run in place of the device: it must keep its port's promise.",
})

/**
 * The language of the library's scenarios
 */
export const ScenarioLanguage = decision<{ tag: string }>({ owner: "trame", value: { tag: "en-GB" } })

/**
 * What the library's scenarios check
 */
export const ScenarioChecks = catalog({
  owner: "trame",
  language: ScenarioLanguage,
  messages: () => ({
    sameSeedSameDraws: () => "The same seed draws the same numbers, a text the same seed",
    otherSeedOthers: () => "Another seed draws others",
    integersWithin: (lo: number, hi: number) => `Integers drawn between ${lo} and ${hi} stay between them, and reach both`,
    weightedByWeight: () => "An element is drawn by its weight: one that weighs nothing never is; nothing from a list that weighs nothing",
    preferencesKept: () => "A preference set is read back, another stays unset",
    speechHeard: () => "What the voice says is heard, in its language",
    awakeKept: () => "The screen is kept awake, then released",
    framesTurned: () => "Time turned by hand calls each frame started with the seconds since its start, until it stops",
    filesKept: () => "A file written exists, is read back, copied, fingerprinted alike, and kept for the scenario",
    pageShown: () => "A page scripted shows what it was given: its elements, their text, its errors; the clicks and the choices are kept",
    commandsMade: () => "A command is made for each effect, from its text, which it keeps as it is",
  }),
})

/**
 * What the library's scenarios are given
 * Two seeds and a text; how many numbers to draw, between which bounds; items and their weights; a preference and a
 * value; a sentence and its language; the seconds turned; a file, its text and its copy; a page, a selector, a text, an
 * error.
 */
export const ScenarioData = decision<{
  seeds: number[]; text: string; draws: number; bounds: { lo: number; hi: number }
  weighted: { item: string; weight: number }[]; never: string
  preference: { name: string; value: string; unset: string }
  sentence: { text: string; language: string }
  turned: number[]
  file: { path: string; text: string; copy: string }
  page: { path: string; selector: string; count: number; text: string; error: string; language: string }
  command: string
}>({
  owner: "trame",
  value: {
    seeds: [1, 2], text: "a seed", draws: 200, bounds: { lo: 1, hi: 6 },
    weighted: [{ item: "light", weight: 1 }, { item: "heavy", weight: 3 }, { item: "never", weight: 0 }], never: "never",
    preference: { name: "voice", value: "off", unset: "pace" },
    sentence: { text: "Breathe in", language: "en" },
    turned: [0.5, 0.25],
    file: { path: "dist/page.html", text: "<p>a page</p>", copy: "public/index.html" },
    page: { path: "dist/page.html", selector: ".poses li", count: 12, text: "Mountain", error: "The page broke", language: "fr" },
    command: "SELECT 1",
  },
})

/**
 * Commands are made for each effect
 * The command maker gives, for each word of effects, a command of that intent from its text, and the text it was given
 * is the command: nothing added, nothing lost.
 */
export const CommandsMade = scenario({
  owner: "trame",
  verifies: [Commands],
  env: Test,
  deps: { commands: Commands, effects: Effects, data: ScenarioData, checks: ScenarioChecks },
  body: ({ commands, effects, data, checks }) => async (check) => {
    const made = effects.map((e) => commands[e](data.command))
    check(checks.commandsMade(), made.length === effects.length && made.every((c) => c === data.command))
  },
})

/**
 * Seeded draws keep their promise
 * The same seed draws the same numbers, another seed others; integers drawn stay within their bounds and reach both; an
 * element is drawn by its weight, and one that weighs nothing never is.
 */
export const DrawsKeepTheirPromise = scenario({
  owner: "trame",
  verifies: [SeededDraws],
  env: Test,
  deps: { draws: SeededDraws, data: ScenarioData, counts: Counts, checks: ScenarioChecks },
  body: ({ draws, data, counts, checks }) => async (check) => {
    const [seed = counts.one, other = counts.zero] = data.seeds
    const series = (s: number) => {
      const next = draws.from(s)
      return Array.from({ length: data.draws }, () => next())
    }
    check(checks.sameSeedSameDraws(), series(seed).join() === series(seed).join() && draws.seedOf(data.text) === draws.seedOf(data.text))
    check(checks.otherSeedOthers(), series(seed).join() !== series(other).join())
    const next = draws.from(seed)
    const { lo, hi } = data.bounds
    const integers = Array.from({ length: data.draws }, () => draws.integer(next, lo, hi))
    check(checks.integersWithin(lo, hi), integers.every((n) => n >= lo && n <= hi) && integers.includes(lo) && integers.includes(hi))
    const picked = Array.from({ length: data.draws }, () => draws.weighted(next, data.weighted))
    check(checks.weightedByWeight(), !picked.includes(data.never) && picked.every((p) => p !== undefined) &&
      draws.weighted(next, data.weighted.filter((x) => x.item === data.never)) === undefined)
  },
})

/**
 * The device, in memory
 * The preferences kept read back what was set; the voice is heard saying what it says, in its language; the screen kept
 * awake is released; time turned by hand calls each frame started, with the seconds since its start, until it stops.
 */
export const DeviceInMemory = scenario({
  owner: "trame",
  verifies: [MemoryPreferences, WrittenSpeech, AwakeInMemory, FramesByHand],
  env: Test,
  deps: {
    preferences: PreferencesStore, voice: SpeechVoice, heard: SpeechHeard, screen: ScreenAwake, awake: ScreenKeptAwake, frames: AnimationFrames,
    time: TimeTurned, data: ScenarioData, counts: Counts, checks: ScenarioChecks,
  },
  body: ({ preferences, voice, heard, screen, awake, frames, time, data, counts, checks }) => async (check) => {
    const { preference, sentence } = data
    preferences.set(preference.name, preference.value)
    check(checks.preferencesKept(), preferences.get(preference.name) === preference.value && preferences.get(preference.unset) === undefined)
    voice.say(sentence.text, sentence.language)
    check(checks.speechHeard(), heard.said().some((s) => s.text === sentence.text && s.language === sentence.language))
    await screen.keep()
    const kept = awake.awake()
    screen.release()
    check(checks.awakeKept(), kept && !awake.awake())
    const seen: number[] = []
    const started = frames.start((seconds) => void seen.push(seconds))
    const [first = counts.zero, second = counts.zero] = data.turned
    time.turn(first)
    time.turn(second)
    started.stop()
    time.turn(first)
    check(checks.framesTurned(), seen.length === data.turned.length && seen.join() === [first, first + second].join())
  },
})

/**
 * The tooling, in memory
 * A file written exists, is read back, copied and fingerprinted alike, and kept for the scenario; a page scripted shows
 * what it was given, and the clicks on it are kept.
 */
export const ToolingInMemory = scenario({
  owner: "trame",
  verifies: [FilesInMemory, BrowserInMemory],
  env: Test,
  deps: { files: Files, kept: FilesKept, browser: HeadlessBrowser, script: BrowserScripted, data: ScenarioData, checks: ScenarioChecks },
  body: ({ files, kept, browser, script, data, checks }) => async (check) => {
    const { file, page } = data
    files.write(file.path, file.text)
    files.copy(file.path, file.copy)
    check(checks.filesKept(), files.exists(file.path) && files.read(file.copy) === file.text && files.fingerprint(file.copy) === files.fingerprint(file.path) &&
      kept.written().get(file.copy) === file.text)
    script.show(page.path, { elements: { [page.selector]: { count: page.count, text: page.text } }, errors: [page.error] })
    const shown = await browser.open(page.path, page.language)
    await shown.click(page.selector)
    await shown.choose(page.selector, page.text)
    check(checks.pageShown(), (await shown.count(page.selector)) === page.count && (await shown.text(page.selector)) === page.text &&
      shown.errors().includes(page.error) && script.clicks().includes(page.selector) &&
      script.choices().some((c) => c.selector === page.selector && c.value === page.text))
  },
})
