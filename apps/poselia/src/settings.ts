/** Poselia · Settings */

import { code } from "#trame/kernel"
import { s, Time, type Duration } from "#std/measures"
import { entity, stored } from "#data/kinds/entity"
import { Documents, DocumentsInPreferences } from "#data/documents"
import { binding } from "#trame/kinds/binding"
import { Strategy } from "#std/patterns"
import { decision } from "#trame/kinds/decision"
import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { fn } from "#trame/kinds/function"
import { PreferencesStore, SpeechVoice } from "#std/platform"
import { Texts, Counts, ValueTypes } from "#std/algebra"
import { BreathSetsThePace, PractiseGuided, BreathPhase, DefaultBreath, type BreathPattern } from "./product"
import { Screen, Browser, Test } from "./architecture"
import { PreferenceNames, InterfaceWords, AppLanguage } from "./language"

// What the person sets once and the app keeps on the device: their breath, the four phases in seconds, set half a
// second at a time or measured by tapping along with it; whether the voice speaks, and what it says (the breath, the
// cues); whether the bowl rings.

/**
 * Bounds of a breath
 * A phase is set half a second at a time; a breath in or out lasts at least a second, a hold may last nothing, and none
 * lasts more than twenty seconds.
 */
export const BreathBounds = decision<{ step: Duration; least: Duration; most: Duration; none: Duration }>({
  owner: "ghalaax",
  value: { step: s(0.5), least: s(1), most: s(20), none: s(0) },
})

/**
 * The person's breath, kept
 * What the device keeps of the person's breath: the four phases, each a duration. Kept under the name it always had; the
 * library of data reads it back migrated and checked against this description, or not at all.
 */
export const Breath = entity({
  owner: "ghalaax",
  keptAs: "poselia.breath",
  fields: { inhale: stored.number(Time), holdTop: stored.number(Time), exhale: stored.number(Time), holdBottom: stored.number(Time) },
  serves: [BreathSetsThePace],
})

/**
 * Kept in the preferences of the device
 * What the app keeps whole (the person's breath) lives in the preferences of the device, in the browser as in the
 * scenarios: read back migrated and checked by the library of data.
 */
export const KeptOnTheDevice = binding({
  owner: "ghalaax",
  chooses: [DocumentsInPreferences],
  environments: [Browser, Test],
  follows: [Strategy],
  context: "The app keeps a little on the device, under names of its own: its preferences are where.",
})

/**
 * A breath within its bounds
 * A breath the device kept is followed only within the bounds: a breath in and out of a second at least, holds from
 * nothing, none longer than the most; another is no breath, and the default one is followed.
 */
export const BreathWithinBounds = requirement({
  owner: "ghalaax",
  refines: [BreathSetsThePace],
  deps: { b: BreathBounds },
  body: ({ b }) => (p: BreathPattern): boolean => {
    const within = (v: Duration, least: Duration) => v >= least && v <= b.most
    return within(p.inhale, b.least) && within(p.holdTop, b.none) && within(p.exhale, b.least) && within(p.holdBottom, b.none)
  },
})

/** Criteria of a breath read back */
export const BreathWithinBoundsCriteria = acceptance({
  accepts: BreathWithinBounds,
  owner: "ghalaax",
  criteria: (criterion) => {
    const breath = (inhale: number, holdTop: number, exhale: number, holdBottom: number): BreathPattern =>
      ({ inhale: s(inhale), holdTop: s(holdTop), exhale: s(exhale), holdBottom: s(holdBottom) })
    criterion("A breath of five seconds in, a second held, six out: followed", () => BreathWithinBounds(breath(5, 1, 6, 0)))
    criterion("A breath in of no length: no breath", () => !BreathWithinBounds(breath(0, 0, 4, 0)))
    criterion("A hold longer than the most: no breath", () => !BreathWithinBounds(breath(4, 30, 4, 0)))
  },
})

/**
 * A phase set by the person
 * A phase of the person's breath made longer or shorter by steps of half a second, kept within its bounds.
 */
export const AdjustedBreath = requirement({
  owner: "ghalaax",
  refines: [BreathSetsThePace],
  deps: { b: BreathBounds },
  body: ({ b }) => (pattern: BreathPattern, phase: BreathPhase, steps: number): BreathPattern => {
    const least = phase === BreathPhase.inhale || phase === BreathPhase.exhale ? b.least : b.none
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
 * Tapping
 * How many taps measure a breath: at least three, a breath in and a breath out.
 */
export const Tapping = decision<{ least: number }>({
  owner: "ghalaax",
  value: { least: 3 },
  rejected: { "Two taps": "one gap measures a breath in, and nothing of the breath out" },
})

/**
 * A breath measured by tapping
 * The person taps as each breath in starts and as each breath out starts: a breath in lasts, on average, from a tap to
 * the next one, a breath out from that one to the following; no holds. Fewer than three taps measure nothing; the
 * result is rounded to the step and kept within the bounds.
 */
export const MeasuredBreath = requirement({
  owner: "ghalaax",
  refines: [BreathSetsThePace],
  deps: { b: BreathBounds, tapping: Tapping, counts: Counts },
  body: ({ b, tapping, counts }) => (taps: readonly number[]): BreathPattern | undefined => {
    if (counts.count(taps) < tapping.least) return undefined
    // From each tap to the next.
    const gapsOf = ([t, next, ...rest]: readonly number[]): number[] => (next === undefined ? [] : [next - t, ...gapsOf([next, ...rest])])
    const gaps = gapsOf(taps)
    // The gaps alternate: a breath in, then a breath out.
    const split = ([first, second, ...rest]: readonly number[]): [number[], number[]] => {
      if (first === undefined) return [[], []]
      const [ins, outs] = split(rest)
      return [[first, ...ins], second === undefined ? outs : [second, ...outs]]
    }
    const mean = (xs: number[]) => xs.reduce((a, x) => a + x, counts.zero) / counts.count(xs)
    const fit = (v: number): Duration => Math.min(b.most, Math.max(b.least, Math.round(v / b.step) * b.step)) as Duration
    const [ins, outs] = split(gaps)
    return { inhale: fit(mean(ins)), holdTop: b.none, exhale: fit(mean(outs)), holdBottom: b.none }
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
  deps: { documents: Documents, breath: Breath, within: BreathWithinBounds },
  body: ({ documents, breath, within }) => ({
    current: (): BreathPattern | undefined => {
      const kept = documents.read(breath)
      return kept && within(kept) ? kept : undefined
    },
    set: (pattern: BreathPattern) => documents.write(breath, pattern),
    clear: () => documents.clear(breath),
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
