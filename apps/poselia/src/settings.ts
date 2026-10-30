/** Poselia · Settings */

import { code, s, type Duration } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { requirement } from "../../../kinds/requirement"
import { acceptance } from "../../../kinds/acceptance"
import { fn } from "../../../kinds/function"
import { PreferencesStore, SpeechVoice } from "#std/platform"
import { Texts, Counts } from "#std/algebra"
import { BreathSetsThePace, PractiseGuided, BreathPhase, DefaultBreath, type BreathPattern } from "./product"
import { Screen } from "./architecture"
import { PreferenceNames, InterfaceWords, AppLanguage } from "./language"

// What the person sets once and the app keeps on the device: their breath, the four phases in seconds, set half a
// second at a time or measured by tapping along with it; whether the voice speaks, and what it says (the breath, the
// cues); whether the bowl rings.

/**
 * Bounds of a breath
 * A phase is set half a second at a time; a breath in or out lasts at least a second, a hold may last nothing, and none
 * lasts more than twenty seconds.
 */
export const BreathBounds = decision<{ step: Duration; least: Duration; most: Duration }>({
  owner: "ghalaax",
  value: { step: s(0.5), least: s(1), most: s(20) },
})

/**
 * A breath read back
 * What the device kept as the person's breath, read back: the four phases in seconds, a breath in and out within the
 * bounds, holds from nothing to the most; anything else is no breath, and the default one is followed.
 */
export const BreathRead = requirement({
  refines: [BreathSetsThePace],
  rule: (kept: string | undefined): BreathPattern | undefined => {
    const b = BreathBounds.value
    try {
      const p = JSON.parse(kept ?? "null") as Partial<Record<BreathPhase, unknown>> | null
      if (p === null || typeof p !== "object") return undefined
      const phase = (name: BreathPhase, least: number) => {
        const v = p[name]
        return typeof v === "number" && Number.isFinite(v) && v >= least && v <= b.most ? v : undefined
      }
      const inhale = phase(BreathPhase.inhale, b.least)
      const holdTop = phase(BreathPhase.holdTop, 0)
      const exhale = phase(BreathPhase.exhale, b.least)
      const holdBottom = phase(BreathPhase.holdBottom, 0)
      if (inhale === undefined || holdTop === undefined || exhale === undefined || holdBottom === undefined) return undefined
      return { inhale, holdTop, exhale, holdBottom }
    } catch {
      return undefined
    }
  },
})

/** Criteria of a breath read back */
export const BreathReadCriteria = acceptance({
  accepts: BreathRead,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("A breath kept is read back as it was",
      () => BreathRead(JSON.stringify({ inhale: 5, holdTop: 1, exhale: 6, holdBottom: 0 }))?.exhale === 6)
    criterion("Nothing kept: no breath", () => BreathRead(undefined) === undefined)
    criterion("A breath in of no length: no breath", () => BreathRead(JSON.stringify({ inhale: 0, holdTop: 0, exhale: 4, holdBottom: 0 })) === undefined)
    criterion("Something else than a breath: no breath", () => BreathRead("{oops") === undefined)
  },
})

/**
 * A phase set by the person
 * A phase of the person's breath made longer or shorter by steps of half a second, kept within its bounds.
 */
export const AdjustedBreath = requirement({
  refines: [BreathSetsThePace],
  rule: (pattern: BreathPattern, phase: BreathPhase, steps: number): BreathPattern => {
    const b = BreathBounds.value
    const least = phase === BreathPhase.inhale || phase === BreathPhase.exhale ? b.least : 0
    return { ...pattern, [phase]: Math.min(b.most, Math.max(least, pattern[phase] + steps * b.step)) }
  },
})

/** Criteria of a phase set by the person */
export const AdjustedBreathCriteria = acceptance({
  accepts: AdjustedBreath,
  owner: "ghalaax",
  criteria: (criterion) => {
    const four: BreathPattern = { inhale: 4, holdTop: 0, exhale: 4, holdBottom: 0 }
    criterion("Two steps longer: a second more", () => AdjustedBreath(four, BreathPhase.inhale, 2).inhale === 5)
    criterion("A hold never shorter than nothing", () => AdjustedBreath(four, BreathPhase.holdTop, -1).holdTop === 0)
    criterion("A breath out never shorter than a second", () => AdjustedBreath(four, BreathPhase.exhale, -10).exhale === 1)
  },
})

/**
 * A breath measured by tapping
 * The person taps as each breath in starts and as each breath out starts: a breath in lasts, on average, from a tap to
 * the next one, a breath out from that one to the following; no holds. Fewer than three taps measure nothing; the
 * result is rounded to the step and kept within the bounds.
 */
export const MeasuredBreath = requirement({
  refines: [BreathSetsThePace],
  rule: (taps: readonly number[]): BreathPattern | undefined => {
    const b = BreathBounds.value
    if (taps.length < 3) return undefined
    const gaps = taps.slice(1).map((t, i) => t - taps[i])
    const mean = (xs: number[]) => xs.reduce((a, x) => a + x, 0) / xs.length
    const fit = (v: number) => Math.min(b.most, Math.max(b.least, Math.round(v / b.step) * b.step))
    return {
      inhale: fit(mean(gaps.filter((_, i) => i % 2 === 0))),
      holdTop: 0,
      exhale: fit(mean(gaps.filter((_, i) => i % 2 === 1))),
      holdBottom: 0,
    }
  },
})

/** Criteria of a breath measured by tapping */
export const MeasuredBreathCriteria = acceptance({
  accepts: MeasuredBreath,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("Taps at 0, 5 and 11 seconds: five seconds in, six out", () => {
      const m = MeasuredBreath([0, 5, 11])
      return m?.inhale === 5 && m.exhale === 6 && m.holdTop === 0
    })
    criterion("Two breaths are averaged, to the half second", () => MeasuredBreath([0, 4, 10, 15, 21])?.inhale === 4.5)
    criterion("Two taps measure nothing", () => MeasuredBreath([0, 4]) === undefined)
  },
})

/**
 * What the practice says and rings
 * What the person can turn off, each kept on the device under its name: the voice altogether (also from the player),
 * the phase of the breath it says, the words of each step, and the bowl.
 */
export const VoiceParts = decision<{ voice: string; breath: string; cues: string; bowl: string }>({
  owner: "ghalaax",
  value: { voice: "poselia.voice", breath: "poselia.voice.breath", cues: "poselia.voice.cues", bowl: "poselia.bowl" },
})

/**
 * The person's breath
 * The breath the person set, kept on the device; none until they set it, and the default one is followed.
 */
export const PersonBreath = fn({
  owner: "ghalaax",
  serves: [BreathSetsThePace],
  deps: { preferences: PreferencesStore, names: PreferenceNames, read: BreathRead, texts: Texts },
  body: ({ preferences, names, read, texts }) => ({
    current: () => read(preferences.get(names.breath)),
    set: (pattern: BreathPattern) => preferences.set(names.breath, JSON.stringify(pattern)),
    clear: () => preferences.set(names.breath, texts.empty),
  }),
})

/**
 * The voice the person chose
 * Each part of what the practice says and rings, on unless the person turned it off, kept on the device; the voice says
 * the breath or the cues only when it speaks at all.
 */
export const VoiceChoice = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { preferences: PreferencesStore, parts: VoiceParts },
  body: ({ preferences, parts }) => {
    const on = (name: string) => preferences.get(name) !== String(false)
    return {
      parts: () => Object.entries(parts).map(([part, name]) => ({ part, on: on(name) })),
      set: (part: string, kept: boolean) => {
        const found = Object.entries(parts).find(([p]) => p === part)
        if (!found) return
        const [, name] = found
        preferences.set(name, String(kept))
      },
      speaks: () => on(parts.voice),
      speak: (kept: boolean) => preferences.set(parts.voice, String(kept)),
      saysBreath: () => on(parts.voice) && on(parts.breath),
      saysCues: () => on(parts.voice) && on(parts.cues),
      rings: () => on(parts.bowl),
    }
  },
})

/**
 * The landmarks the person chose
 * Whether the landmarks are drawn on the body: yes, unless the person hid them, kept on the device.
 */
export const MarksChoice = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { preferences: PreferencesStore, names: PreferenceNames },
  body: ({ preferences, names }) => ({
    shown: () => preferences.get(names.marks) !== String(false),
    show: (on: boolean) => preferences.set(names.marks, String(on)),
  }),
})

/**
 * The settings view
 * What the settings show, in the language the app speaks: each phase of the breath with its seconds, the measure by
 * tapping and how many taps it has, the way back to the default breath, and each part of what the practice says and
 * rings, on or off. It touches nothing.
 */
export const SettingsViewOf = fn({
  owner: "ghalaax",
  serves: [BreathSetsThePace, PractiseGuided],
  deps: { words: InterfaceWords, language: AppLanguage },
  body: code.file<typeof import("./code/settings-view").default>("./code/settings-view.ts"),
})

/**
 * Show the settings
 * The settings, shown again after each change: a phase made longer or shorter, a tap, the default breath, a part of the
 * voice turned on or off; the person goes back when done. A device that cannot speak is said so, with what to do.
 */
export const ShowSettings = fn({
  owner: "ghalaax",
  serves: [BreathSetsThePace, PractiseGuided],
  deps: {
    screen: Screen, breath: PersonBreath, voice: VoiceChoice, view: SettingsViewOf, speech: SpeechVoice, adjust: AdjustedBreath, measure: MeasuredBreath,
    defaults: DefaultBreath, counts: Counts,
  },
  constants: {
    taps: { value: 7, meaning: "The taps kept to measure a breath: the last three breaths in and out" },
  },
  body: code.file<typeof import("./code/show-settings").default>("./code/show-settings.ts"),
})

/**
 * Names of the settings
 * The classes the browser's screen gives the parts of the settings, which the style sheet styles.
 */
export const SettingsNames = decision<{ settings: string; phases: string; measure: string; tap: string }>({
  owner: "ghalaax",
  value: { settings: "settings", phases: "phases", measure: "measure", tap: "tap" },
})
