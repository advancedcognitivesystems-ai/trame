/** Poselia · Product */

import { s, type Duration } from "#trame/kernel"
import { goal } from "#trame/kinds/goal"
import { decision } from "#trame/kinds/decision"
import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { assume } from "#trame/kinds/assumption"

// Poselia shows yoga poses, still and clear, and the sequences that link them, animated, with what to do at each breath:
// poses, sequences, exercises. The person practises on their own, the phone on the mat; the breath sets the pace, and a
// voice says what to do, in their language. The content is written by some and checked by friends who practise.

/**
 * Practise yoga on one's own, guided
 * A person practises at home with the phone on the mat: each pose is shown still and clear, each sequence moves with
 * their breath, and a voice says what to do, in their language.
 */
export const PractiseGuided = goal({ owner: "ghalaax" })

/**
 * The breath sets the pace
 * Nothing in a practice is counted in seconds that the person did not choose: a movement lasts a phase of their breath,
 * a hold lasts whole breaths.
 */
export const BreathSetsThePace = goal({ owner: "ghalaax" })

/**
 * In the person's language
 * Every word the app shows or says is in the language the person chose, among those offered.
 */
export const InTheirLanguage = goal({ owner: "ghalaax" })

/**
 * Content checked by people who practise
 * What a pose asks, and how a sequence goes, is reviewed by people who practise and teach, in each language, before it
 * reaches others.
 */
export const CheckedContent = goal({ owner: "ghalaax" })

// The breath ----------------------------------------------------------------------------------

/** The four phases of a breath, in their order. */
export enum BreathPhase { inhale = "inhale", holdTop = "holdTop", exhale = "exhale", holdBottom = "holdBottom" }

/** How long each phase of a breath lasts. */
export type BreathPattern = Record<BreathPhase, Duration>

/**
 * How a breath is set at one level (a pose, a sequence, a step of it, an exercise): it follows the person's pattern,
 * imposes a ratio scaled on their inhale (an exhale twice as long), imposes exact timings (4-4-4-4), or changes its
 * speed.
 */
export type BreathSetting =
  | { follows: true }
  | { ratio: Record<BreathPhase, number> }
  | { exact: BreathPattern }
  | { speed: number }

/**
 * The breath of someone who has set nothing
 * The pattern a practice follows until the person sets their own, in the settings or by tapping their breath: four
 * seconds in, four seconds out, no pause at the top or at the bottom. A product decision.
 */
export const DefaultBreath = decision<BreathPattern>({
  owner: "ghalaax",
  value: { inhale: s(4), holdTop: s(0), exhale: s(4), holdBottom: s(0) },
  rejected: { "A timer in seconds": "the person would follow a clock instead of their breath" },
})

/**
 * The breath of a moment
 * The breath a moment of a practice follows: the setting of the most specific level that has one (an exercise, then the
 * step, then the sequence, then the pose), applied to the person's pattern, or to the default one.
 */
export const BreathOf = requirement({
  owner: "ghalaax",
  refines: [BreathSetsThePace],
  rule: (person: BreathPattern | undefined, levels: readonly (BreathSetting | undefined)[]): BreathPattern => {
    const base = person ?? DefaultBreath.value
    const setting = levels.find((x) => x !== undefined)
    const each = (f: (phase: BreathPhase) => Duration): BreathPattern =>
      ({ inhale: f(BreathPhase.inhale), holdTop: f(BreathPhase.holdTop), exhale: f(BreathPhase.exhale), holdBottom: f(BreathPhase.holdBottom) })
    if (!setting || "follows" in setting) return base
    if ("exact" in setting) return setting.exact
    if ("speed" in setting) return each((p) => base[p] / setting.speed)
    return each((p) => (setting.ratio[p] * base.inhale) / setting.ratio.inhale)
  },
})

/** Criteria of the breath of a moment */
export const BreathOfCriteria = acceptance({
  accepts: BreathOf,
  owner: "ghalaax",
  criteria: (criterion) => {
    const mine: BreathPattern = { inhale: s(5), holdTop: s(1), exhale: s(6), holdBottom: s(0) }
    const square: BreathPattern = { inhale: s(4), holdTop: s(4), exhale: s(4), holdBottom: s(4) }
    criterion("Without any setting, the person's own breath", () => BreathOf(mine, [undefined, undefined]) === mine)
    criterion("The most specific level wins: an exercise's exact timings over its pose's ratio",
      () => BreathOf(mine, [{ exact: square }, { ratio: { inhale: 1, holdTop: 0, exhale: 2, holdBottom: 0 } }]) === square)
    criterion("A ratio is scaled on the person's inhale: the exhale twice as long",
      () => BreathOf(mine, [{ ratio: { inhale: 1, holdTop: 0, exhale: 2, holdBottom: 0 } }]).exhale === s(10))
    criterion("Twice the speed halves each phase", () => BreathOf(mine, [{ speed: 2 }]).exhale === s(3))
  },
})

/**
 * A hold counts in breaths
 * A hold written in seconds lasts the whole number of breaths nearest to it, and at least one, so that the end of a
 * hold always falls at the end of a breath.
 */
export const HoldInBreaths = requirement({
  owner: "ghalaax",
  refines: [BreathSetsThePace],
  rule: (hold: Duration, breath: BreathPattern): number => {
    const length = breath.inhale + breath.holdTop + breath.exhale + breath.holdBottom
    return Math.max(1, Math.round(hold / length))
  },
})

/** Criteria of a hold in breaths */
export const HoldInBreathsCriteria = acceptance({
  accepts: HoldInBreaths,
  owner: "ghalaax",
  criteria: (criterion) => {
    const eight: BreathPattern = { inhale: s(4), holdTop: s(0), exhale: s(4), holdBottom: s(0) }
    criterion("Thirty seconds at eight seconds a breath is four breaths", () => HoldInBreaths(s(30), eight) === 4)
    criterion("A hold is never shorter than one breath", () => HoldInBreaths(s(1), eight) === 1)
  },
})

// The language -------------------------------------------------------------------------------

/**
 * The language of the app
 * The one the person chose, if it is offered; otherwise the first of the device's languages that is offered; otherwise
 * the first language offered.
 */
export const ChosenLanguage = requirement({
  owner: "ghalaax",
  refines: [InTheirLanguage],
  rule: (offered: readonly string[], chosen: string | undefined, device: readonly string[]): string => {
    const base = (tag: string) => tag.split("-")[0]
    if (chosen !== undefined && offered.includes(chosen)) return chosen
    return device.map(base).find((tag) => offered.includes(tag)) ?? offered[0]
  },
})

/** Criteria of the language of the app */
export const ChosenLanguageCriteria = acceptance({
  accepts: ChosenLanguage,
  owner: "ghalaax",
  criteria: (criterion) => {
    const offered = ["fr", "en"]
    criterion("The person's choice wins", () => ChosenLanguage(offered, "en", ["fr-CH"]) === "en")
    criterion("Without a choice, the device's language, by its base", () => ChosenLanguage(offered, undefined, ["fr-CH", "en"]) === "fr")
    criterion("A language not offered is passed over", () => ChosenLanguage(offered, "de", ["de-CH", "en-GB"]) === "en")
    criterion("Nothing offered by the device: the first language offered", () => ChosenLanguage(offered, undefined, ["ja"]) === "fr")
  },
})

// What the design rests on -------------------------------------------------------------------

/**
 * The phone stays on the mat
 * During a practice the person does not hold the phone: they glance at it and listen. What matters is said aloud, and
 * the screen stays awake.
 */
export const PhoneOnTheMat = assume({ owner: "ghalaax", expires: "2027-03-01" })
