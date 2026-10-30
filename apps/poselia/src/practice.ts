/** Poselia · Practice */

import { code } from "../../../trame/kernel"
import { requirement } from "../../../kinds/requirement"
import { acceptance } from "../../../kinds/acceptance"
import { decision } from "../../../kinds/decision"
import { fn } from "../../../kinds/function"
import { Counts, Texts } from "#std/algebra"
import { AnimationFrames, SpeechVoice, ScreenAwake } from "#std/platform"
import { PractiseGuided, BreathSetsThePace, BreathPhase, BreathOf, type BreathPattern } from "./product"
import { KeyOf, BodyAt, SidesOf, type Keyframe } from "./body"
import { MarksOn, MarksWhen } from "./marks"
import { Screen, Bowl } from "./architecture"
import { CuePlaceholders, Spoken } from "./content"
import { AppLanguage, InterfaceWords } from "./language"
import { VoiceChoice, MarksChoice } from "./settings"
import { StageViews } from "./stage"

// A sequence played with the breath: each step lasts the phase of the breath it moves on, and during it the body moves
// from the pose before to its own as the engine moves a body (module body): slowly at the start and at the end, as a
// breath goes, what rests in both poses staying where it is. The lungs fill on an inhale and empty on an exhale, and the
// screen shows it. Played to learn it, or composed, each pose is held whole breaths after the movement that reaches it:
// the voice says the movement in a few words, then what to do in the pose while it is held, and a bowl rings when it is
// time to move.

/**
 * Where a practice is
 * At a time since the start, the step under way and how far it has gone, from 0 to 1: the steps follow each other, each
 * as long as it lasts; a step that lasts nothing is passed. Past the end, the last step, gone to its end, and the practice
 * is done.
 */
export const MomentAt = requirement({
  refines: [BreathSetsThePace],
  rule: (durations: readonly number[], seconds: number): { index: number; progress: number; done: boolean } => {
    let start = 0
    for (const [index, length] of durations.entries()) {
      if (length > 0 && seconds < start + length) return { index, progress: Math.max(0, seconds - start) / length, done: false }
      start += length
    }
    return { index: Math.max(0, durations.length - 1), progress: 1, done: true }
  },
})

/** Criteria of where a practice is */
export const MomentAtCriteria = acceptance({
  accepts: MomentAt,
  owner: "ghalaax",
  criteria: (criterion) => {
    const steps = [4, 4, 0, 4]
    criterion("At the start, the first step, not begun", () => MomentAt(steps, 0).index === 0 && MomentAt(steps, 0).progress === 0)
    criterion("Six seconds in, the second step, half gone", () => MomentAt(steps, 6).index === 1 && MomentAt(steps, 6).progress === 0.5)
    criterion("A step that lasts nothing is passed", () => MomentAt(steps, 8).index === 3)
    criterion("Past the end, the practice is done", () => MomentAt(steps, 20).done && MomentAt(steps, 20).progress === 1)
  },
})

/**
 * A movement goes as a breath goes
 * How far a movement has gone, for how far its phase has: slowly at the start, faster in the middle, slowly at the end
 * (a cubic, the same on both halves), never back.
 */
export const Eased = requirement({
  refines: [BreathSetsThePace],
  rule: (progress: number): number => {
    const t = Math.min(1, Math.max(0, progress))
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  },
})

/** Criteria of a movement that goes as a breath goes */
export const EasedCriteria = acceptance({
  accepts: Eased,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("It starts and ends where the phase does", () => Eased(0) === 0 && Eased(1) === 1)
    criterion("Half way through the phase, half way through the movement", () => Math.abs(Eased(0.5) - 0.5) < 1e-9)
    criterion("Slow at the start: a tenth of the phase moves less than a tenth", () => Eased(0.1) < 0.1)
  },
})

/**
 * How full the lungs are
 * During a phase of the breath, from empty (0) to full (1): they fill on an inhale, stay full when holding at the top,
 * empty on an exhale, stay empty when holding at the bottom.
 */
export const LungsFull = requirement({
  refines: [BreathSetsThePace],
  rule: (phase: BreathPhase, progress: number): number =>
    ({ [BreathPhase.inhale]: progress, [BreathPhase.holdTop]: 1, [BreathPhase.exhale]: 1 - progress, [BreathPhase.holdBottom]: 0 })[phase],
})

/** Criteria of how full the lungs are */
export const LungsFullCriteria = acceptance({
  accepts: LungsFull,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("Half way through an inhale, half full", () => LungsFull(BreathPhase.inhale, 0.5) === 0.5)
    criterion("At the end of an exhale, empty", () => LungsFull(BreathPhase.exhale, 1) === 0)
    criterion("Holding at the top, full", () => LungsFull(BreathPhase.holdTop, 0.3) === 1)
  },
})

/**
 * A hold of whole breaths
 * The phases of the breath a pose is held for, after the movement that reaches it: from the phase after the movement's,
 * breath after breath, as many whole breaths as asked, then on until the breath comes to the phase the next movement
 * moves on, so that the lungs go on as they were; each phase with its length (those of no length left out) and the breath
 * it belongs to, from the first. No breath, no hold.
 */
export const HoldPhases = requirement({
  refines: [BreathSetsThePace],
  rule: (pattern: BreathPattern, after: BreathPhase, breaths: number, next?: BreathPhase): { phase: BreathPhase; duration: number; breath: number }[] => {
    if (breaths <= 0) return []
    const order = [BreathPhase.inhale, BreathPhase.holdTop, BreathPhase.exhale, BreathPhase.holdBottom]
    const held: { phase: BreathPhase; duration: number; breath: number }[] = []
    for (let taken = 0, k = order.indexOf(after); ; taken++) {
      k = (k + 1) % order.length
      const phase = order[k]
      if (taken >= breaths * order.length && (next === undefined || phase === next)) break
      held.push({ phase, duration: pattern[phase], breath: Math.min(breaths, Math.floor(taken / order.length) + 1) })
    }
    return held.filter((h) => h.duration > 0)
  },
})

/** Criteria of a hold of whole breaths */
export const HoldPhasesCriteria = acceptance({
  accepts: HoldPhases,
  owner: "ghalaax",
  criteria: (criterion) => {
    const four: BreathPattern = { inhale: 4, holdTop: 0, exhale: 4, holdBottom: 0 }
    const length = (h: { duration: number }[]) => h.reduce((sum, x) => sum + x.duration, 0)
    const rising = HoldPhases(four, BreathPhase.inhale, 3, BreathPhase.exhale)
    criterion("Three breaths after a breath in, before a breath out: twenty-four seconds, ending full", () =>
      length(rising) === 24 && rising[rising.length - 1].phase === BreathPhase.inhale)
    criterion("Each phase says which breath it belongs to", () => rising.map((h) => h.breath).join() === "1,1,2,2,3,3")
    const twice = HoldPhases(four, BreathPhase.inhale, 1, BreathPhase.inhale)
    criterion("Rising twice: the hold goes on until the lungs are empty again", () =>
      length(twice) === 12 && twice[twice.length - 1].phase === BreathPhase.exhale)
    criterion("No breath, no hold", () => HoldPhases(four, BreathPhase.inhale, 0).length === 0)
  },
})

/**
 * Breaths to say a cue
 * How many whole breaths it takes to say a text, the longest of its languages, at the rate voices speak: at least one,
 * so that a pose is held at least as long as what to do in it takes to say.
 */
export const BreathsToSay = requirement({
  refines: [BreathSetsThePace],
  rule: (texts: readonly string[], pattern: BreathPattern): number => {
    const breath = pattern.inhale + pattern.holdTop + pattern.exhale + pattern.holdBottom
    return Math.max(1, ...texts.map((t) => Math.ceil(Spoken(t, false) / breath)))
  },
})

/** Criteria of breaths to say a cue */
export const BreathsToSayCriteria = acceptance({
  accepts: BreathsToSay,
  owner: "ghalaax",
  criteria: (criterion) => {
    const four: BreathPattern = { inhale: 4, holdTop: 0, exhale: 4, holdBottom: 0 }
    criterion("A short cue: one breath", () => BreathsToSay(["Arms overhead."], four) === 1)
    criterion("A hundred and twenty characters at eight seconds a breath: two breaths", () => BreathsToSay(["x".repeat(120)], four) === 2)
  },
})

/** A phase of the breath a pose is held for, and the breath of the hold it belongs to, from the first. */
export interface HeldPhase {
  phase: BreathPhase
  duration: number
  breath: number
}

/**
 * A step of a practice, played: the round, the step, the poses it goes between, when it starts and how long its
 * movement lasts; then, if the pose is held, the phases it is held for and how many whole breaths.
 */
export interface Move {
  round: number
  leg: import("./body").Leg
  index: number
  step: import("./content").SequenceStep
  pose: import("./content").Pose
  from: Keyframe
  to: Keyframe
  start: number
  duration: number
  hold: readonly HeldPhase[]
  breaths: number
}

/** A sequence, ready to play: its moves, how long it lasts, and whether each pose is held. */
export interface Practice {
  sequence: import("./content").Sequence
  moves: readonly Move[]
  total: number
  holding: boolean
}

/**
 * A practice
 * A sequence ready to play with a person's breath (or the default one): each round, each step, its breath as the most
 * specific level sets it, the pose before and its own, placed for the round; held, if asked, the breaths asked or those
 * its cue takes to say, whichever is more, until the phase of the next movement.
 */
export const PracticeOf = fn({
  owner: "ghalaax",
  serves: [PractiseGuided, BreathSetsThePace],
  deps: { breathOf: BreathOf, key: KeyOf, holdPhases: HoldPhases, toSay: BreathsToSay, counts: Counts },
  body: code.file<typeof import("./code/practice-of").default>("./code/practice-of.ts"),
})

/**
 * The moment of a practice
 * At a time since the start, what the screen shows: the body between the two poses of the step under way, or still in
 * its pose while it is held; the pose, the phase of the breath, what to do and what the voice says of it, the step and
 * the round, the breaths left to hold; how full the lungs are, and how far the practice has gone; the landmarks of the
 * pose on the body, when the person wants them and as the decision "When the landmarks are drawn" says (drawn once
 * for a still body). It touches nothing.
 */
export const MomentOf = fn({
  owner: "ghalaax",
  serves: [PractiseGuided, BreathSetsThePace],
  deps: {
    at: MomentAt, eased: Eased, lungs: LungsFull, bodyAt: BodyAt, marksOn: MarksOn, sides: SidesOf, when: MarksWhen,
    words: InterfaceWords, language: AppLanguage, placeholders: CuePlaceholders, counts: Counts, texts: Texts,
  },
  body: code.file<typeof import("./code/moment-of").default>("./code/moment-of.ts"),
})

/**
 * Play a practice
 * Shows the player, then each moment as the screen's frames come, until the practice is done; says each movement aloud
 * as it starts, in the app's language and in a few words (the breath, the words of the step, as the person chose), and,
 * when a pose is held, what to do in it as the hold starts; strikes the bowl as the practice starts and ends, and, when
 * the poses are held, as each movement starts; keeps the screen awake while it plays. The person pauses, resumes,
 * starts again, turns the voice off or on, shows the landmarks or hides them, or goes back. On a device that cannot
 * speak, the player says so and what to do to hear the voice, and offers no voice button.
 */
export const PlayPractice = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: {
    screen: Screen, frames: AnimationFrames, voice: SpeechVoice, awake: ScreenAwake, bowl: Bowl, choice: VoiceChoice, marking: MarksChoice,
    practiceOf: PracticeOf, momentOf: MomentOf, words: InterfaceWords, language: AppLanguage, counts: Counts, stageViews: StageViews,
  },
  body: code.file<typeof import("./code/play-practice").default>("./code/play-practice.ts"),
})

/**
 * Names of the player
 * The classes the browser's screen gives the parts of the player, which the style sheet styles; the variables a moment
 * sets for it (how full the lungs are, how far the practice has gone); what separates the step from the round.
 */
export const PlayerNames = decision<{
  player: string; stage: string; badge: string; views: string; lungs: string; said: string; held: string; controls: string; progress: string; done: string
  note: string; markList: string
  lungsVariable: string; progressVariable: string; separator: string
}>({
  owner: "ghalaax",
  value: {
    player: "player", stage: "stage", badge: "badge", views: "views", lungs: "lungs", said: "said", held: "held", controls: "controls", progress: "progress",
    done: "done", note: "note", markList: "marks", lungsVariable: "--lungs", progressVariable: "--progress", separator: " · ",
  },
})
