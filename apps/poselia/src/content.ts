/** Poselia · Content */

import { decision } from "#trame/kinds/decision"
import { Counts, Sequences as SequenceOps } from "#std/algebra"
import { dataset } from "#trame/kinds/dataset"
import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { PractiseGuided, BreathPhase, BreathOf, DefaultBreath, type BreathSetting } from "./product"
import { poses } from "./data/poses"
import { sequences } from "./data/sequences"
import {
  RestsOnWhatItNames, LimbsReach, BodyRest, Level, Stance, Leg, KeyOf, BodyAt, SurfaceHeights, Movement, Touching, LegsApart, type Shape, type Spot,
  type Vec,
} from "./body"

// What the app shows is data, not code: the poses, then the sequences and the exercises, as datasets whose rows are
// typed, checked by rules at every build, written in each language offered, and reviewed by friends who practise. A
// review holds for the row as it was seen.

/**
 * Languages offered
 * The languages the content is written in: each text of a row holds each of them.
 */
export const Languages = decision<string[]>({ owner: "ghalaax", value: ["fr", "en"] })

/** A text in each language offered. */
export type Localized = Record<string, string>

/**
 * The ways between levels
 * From each level, the levels a body reaches in one movement, one foot stepping at a time: from standing it folds
 * forward; folded, it steps one leg back into a lunge; from a lunge, a plank or a dog; from a plank it lowers to the floor, comes onto its knees, or
 * lifts its hips into a dog; lying on its front, it pushes back into a plank or a dog; kneeling, it comes onto all fours
 * or into a dog; on all fours, into a dog or a plank. The ways go both ways, and each keeps the body on the floor as the
 * engine moves it (a criterion of "A sequence that makes sense").
 */
export const LevelWays = decision<Record<Level, Level[]>>({
  owner: "ghalaax",
  value: {
    standing: [Level.fold],
    fold: [Level.standing, Level.lunge],
    lunge: [Level.fold, Level.plank, Level.dog],
    plank: [Level.lunge, Level.prone, Level.dog, Level.allFours],
    dog: [Level.lunge, Level.plank, Level.prone, Level.kneeling, Level.allFours],
    prone: [Level.plank, Level.dog],
    kneeling: [Level.dog, Level.allFours],
    allFours: [Level.plank, Level.dog, Level.kneeling],
  },
  rejected: {
    "Any pose after any other": "standing, lying, standing, kneeling: a body cannot go that way, and the mannequin would pass through the floor",
    "From lying on the front straight back onto the heels": "the engine swings the thighs under the floor (20 cm deep) on the way to the child's pose",
    "From the forward bend straight back into a dog, and back": "both feet step back at once: the body would jump, held on its hands",
  },
})

/**
 * How fast a voice speaks
 * About fourteen characters a second, in French or in English, for the voices of the devices at their usual rate; a
 * breath word (breathe in, breathe out) takes about a second.
 */
export const SpeechRate = decision<{ charactersPerSecond: number; breathWord: number }>({
  owner: "ghalaax",
  value: { charactersPerSecond: 14, breathWord: 1 },
})

/**
 * How long words take to say
 * The seconds a voice takes to say a text, at the rate voices speak, with the breath word before it or not.
 */
export const Spoken = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { rate: SpeechRate, counts: Counts },
  body: ({ rate, counts }) => (text: string, withBreath: boolean): number =>
    counts.count(text) / rate.charactersPerSecond + (withBreath ? rate.breathWord : counts.zero),
})

/** Criteria of how long words take to say */
export const SpokenCriteria = acceptance({
  accepts: Spoken,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("Fourteen characters take a second", () => Spoken("Arms overhead.", false) === 1)
    criterion("The breath word adds a second", () => Spoken("Arms overhead.", true) === 2)
  },
})

/**
 * Where the leading leg goes
 * In a pose that sets the legs apart, reached from a level above (standing, folded), the leading leg steps back; reached
 * from the floor (a plank, a dog), it comes forward between the hands.
 */
export const LeadingLegOf = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: {},
  body: () => (before: Level): Stance => (before === Level.standing || before === Level.fold ? Stance.back : Stance.front),
})

/** Criteria of where the leading leg goes */
export const LeadingLegOfCriteria = acceptance({
  accepts: LeadingLegOf,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("From a fold, the leg steps back", () => LeadingLegOf(Level.fold) === Stance.back)
    criterion("From a dog, the leg comes forward", () => LeadingLegOf(Level.dog) === Stance.front)
  },
})

/**
 * A sequence that makes sense
 * The poses of a sequence, judged by their level: it begins standing and ends standing; each pose is at the level of the
 * one before or at a level a body reaches from it in one movement; it does not go back and forth between two levels
 * twice in a row (standing, folding, standing, folding); no pose follows itself. It gives what is wrong: whether it
 * begins and ends standing, where it jumps, where it goes back and forth once too often, where a pose repeats.
 */
export const MakesSense = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { ways: LevelWays, counts: Counts, seq: SequenceOps },
  body: ({ ways, counts, seq }) => (steps: readonly { id: string; level: Level }[]): { begins: boolean; ends: boolean; jumps: number[]; backAndForth: number[]; repeats: number[] } => {
    const levels = steps.map((p) => p.level)
    const { previous, zero } = counts
    return {
      begins: seq.head(levels) === Level.standing,
      ends: seq.last(levels) === Level.standing,
      jumps: levels.flatMap((l, i) => {
        const before = levels.at(previous(i))
        return i > zero && before !== undefined && l !== before && !ways[before].includes(l) ? [i] : []
      }),
      backAndForth: levels.flatMap((l, i) => {
        const [one, two, three] = [previous(i), previous(previous(i)), previous(previous(previous(i)))]
        return three >= zero && l === levels.at(two) && levels.at(one) === levels.at(three) && l !== levels.at(one) ? [i] : []
      }),
      repeats: steps.flatMap((p, i) => (i > zero && p.id === steps.at(previous(i))?.id ? [i] : [])),
    }
  },
})

/** Criteria of a sequence that makes sense */
export const MakesSenseCriteria = acceptance({
  accepts: MakesSense,
  owner: "ghalaax",
  criteria: (criterion) => {
    const at = (...levels: Level[]) => levels.map((level, i) => ({ id: String(i), level }))
    const sun = at(Level.standing, Level.standing, Level.fold, Level.lunge, Level.plank, Level.prone, Level.prone, Level.dog, Level.lunge, Level.fold, Level.standing, Level.standing)
    const good = MakesSense(sun)
    criterion("The sun salutation makes sense", () => good.begins && good.ends && good.jumps.length === 0 && good.backAndForth.length === 0 && good.repeats.length === 0)
    criterion("Standing then lying on the front: two jumps", () => MakesSense(at(Level.standing, Level.prone, Level.standing)).jumps.join() === "1,2")
    criterion("Standing, folding, standing, folding: back and forth once too often",
      () => MakesSense(at(Level.standing, Level.fold, Level.standing, Level.fold, Level.standing)).backAndForth.join() === "3,4")
    criterion("Folding and coming back up once is a movement, not back and forth", () => MakesSense(at(Level.standing, Level.fold, Level.standing)).backAndForth.length === 0)
    criterion("The same pose twice in a row repeats", () => MakesSense([{ id: "a", level: Level.standing }, { id: "a", level: Level.standing }]).repeats.join() === "1")
    criterion("Every way between levels goes both ways", () =>
      (Object.entries(LevelWays.value) as [Level, Level[]][]).every(([from, to]) => to.every((l) => LevelWays.value[l].includes(from))))
    criterion("Between two poses a way joins, at most one foot steps far: the body never jumps", () =>
      poses.every((a) => poses.every((b) => {
        if (a.id === b.id || (a.level !== b.level && !LevelWays.value[a.level].includes(b.level))) return true
        const apart = (p: Pose) => LegsApart(p.shape)
        return (apart(a) ? [Stance.back, Stance.front] : [undefined]).every((stance) => {
          const from = KeyOf(a.shape, Leg.right, stance)
          const to = KeyOf(b.shape, Leg.right, apart(b) ? LeadingLegOf(a.level) : undefined)
          const far = (s: "L" | "R") => Math.hypot(to.legs[s].at[0] - from.legs[s].at[0], to.legs[s].at[2] - from.legs[s].at[2]) > Movement.value.stride
          return !(far("L") && far("R"))
        })
      })))
    criterion("Between two poses a way joins, the body stays on the floor: never floating, never under it deeper than a step may sink", () => {
      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
      return poses.every((a) => poses.every((b) => {
        if (a.id === b.id || (a.level !== b.level && !LevelWays.value[a.level].includes(b.level))) return true
        const apart = (p: Pose) => LegsApart(p.shape)
        return (apart(a) ? [Stance.back, Stance.front] : [undefined]).every((stance) => {
          const from = KeyOf(a.shape, Leg.right, stance)
          const to = KeyOf(b.shape, Leg.right, apart(b) ? LeadingLegOf(a.level) : undefined)
          return Array.from({ length: 21 }, (_, k) => Math.min(...Object.values(SurfaceHeights(BodyAt(from, to, ease(k / 20))))))
            .every((low) => low <= Touching.value.within && low >= -Movement.value.stepSink)
        })
      }))
    })
  },
})

/** What a landmark draws: a line, a plumb line, a dot, an arrow, an angle. */
export enum Drawn { line = "line", plumb = "plumb", dot = "dot", arrow = "arrow", angle = "angle" }

/** A shape a landmark draws on the body: a line through spots (dashed or not), a plumb line to the floor, a dot, an arrow, an angle at a joint. */
export type MarkShape =
  | { [Drawn.line]: readonly Spot[]; dashed?: boolean }
  | { [Drawn.plumb]: Spot }
  | { [Drawn.dot]: Spot }
  | { [Drawn.arrow]: readonly [Spot, Spot] }
  | { [Drawn.angle]: { at: Spot; from: Spot; to: Spot; radius: number } }

/**
 * A landmark of a pose, as a teacher points at the body: a few words on the stage, tied to a spot of the body and set
 * a little away from it; the sentence it stands for; the lines, dots, arrows and angles it draws.
 */
export interface Mark {
  title: Localized
  text: Localized
  at: Spot
  label: Vec
  shapes?: readonly MarkShape[]
}

/**
 * A pose: still and clear, named in Sanskrit and in each language, placed on the mat as a teacher places a body; where
 * it leaves the body for what follows; what to do in it, and what the voice says, short, when one moves into it; its
 * landmarks.
 */
export interface Pose {
  /** Its key: lower case, words joined by hyphens. */
  id: string
  sanskrit: string
  name: Localized
  shape: Shape
  level: Level
  cue: Localized
  said: Localized
  marks: readonly Mark[]
  /** How the breath goes in this pose, if it sets it. */
  breathing?: BreathSetting
}

/**
 * Poses
 * The poses of the sun salutation in twelve steps (eight poses, some of them twice), and poses to hold: the mountain,
 * the child, the cat and the cow.
 */
export const Poses = dataset({
  owner: "ghalaax",
  rows: poses,
  key: (p) => p.id,
  // Where a landmark's label is drawn beside the body: placing it again changes nothing a teacher judges.
  technical: ["marks.label"],
  rules: [
    { says: "A key is written in lower case, its words joined by hyphens", holds: (p) => /^[a-z]+(-[a-z]+)*$/.test(p.id) },
    { says: "A pose has its Sanskrit name", holds: (p) => p.sanskrit.trim() !== "" },
    { says: "A pose rests on the points it names, and on nothing else", holds: (p) => {
      const wrong = RestsOnWhatItNames(p.shape)
      return wrong.notTouching.length === 0 && wrong.unnamed.length === 0
    } },
    { says: "Every limb reaches where the pose puts its hand or its foot", holds: (p) => LimbsReach(p.shape) <= 1 },
    { says: "Hands that rest on the floor rest at one place on the mat, the same in every pose: from one pose to the next, they stay where they are", holds: (p) => {
      const place = (q: Pose) => (q.shape.rests ?? []).includes(BodyRest.hands) && "at" in q.shape.arms ? q.shape.arms.at.join() : undefined
      const first = poses.map(place).find((x) => x !== undefined)
      return !(p.shape.rests ?? []).includes(BodyRest.hands) || place(p) === first
    } },
    { says: "A pose has two to five landmarks, each with a few words for the stage (at most 26 characters) and its sentence, in each language", holds: (p) =>
      p.marks.length >= 2 && p.marks.length <= 5 && p.marks.every((m) => Languages.value.every((l) => (m.title[l] ?? "").length > 0 && (m.title[l] ?? "").length <= 26 && (m.text[l] ?? "").length > 0)) },
    { says: "What the voice says moving into a pose fits a breath in or out of the default breath", holds: (p) =>
      Object.values(p.said).every((text) => Spoken(text, true) <= Math.min(DefaultBreath.value.inhale, DefaultBreath.value.exhale)) },
  ],
  language: Languages,
  serves: [PractiseGuided],
})

/** A step of a sequence: its pose, the phase of the breath it moves on, what to do, and the leg it names, if any. */
export interface SequenceStep {
  pose: string
  breath: BreathPhase
  cue: Localized
  /**
   * Where the leg that leads this round goes, in a pose that sets the legs apart: the step moves it, and its cue says
   * which leg, where the placeholder stands.
   */
  leadingLeg?: Stance
  /** What the voice says when the step starts, short enough to fit its phase. */
  said: Localized
  /** How the breath goes during this step, if it sets it: it wins over the sequence and the pose. */
  breathing?: BreathSetting
}

/** A sequence: its steps, played once per leg that leads, in order. */
export interface Sequence {
  id: string
  name: Localized
  /** The leg that leads each round: two rounds, right then left. */
  rounds: readonly Leg[]
  steps: readonly SequenceStep[]
  /** How the breath goes in the whole sequence, if it sets it: it wins over the poses. */
  breathing?: BreathSetting
}

/**
 * Placeholders of a cue
 * Where a cue says the leg that leads this round: the app puts its name there, in the language it speaks.
 */
export const CuePlaceholders = decision<{ leg: string }>({ owner: "ghalaax", value: { leg: "{leg}" } })

/**
 * Sequences
 * The sequences of poses, with the breath of each step and what to do: first the sun salutation, in twelve steps and
 * two rounds.
 */
export const Sequences = dataset({
  owner: "ghalaax",
  rows: sequences,
  key: (q) => q.id,
  rules: [
    { says: "Each step is a pose of the dataset Poses", holds: (q) => q.steps.every((step) => poses.some((p) => p.id === step.pose)) },
    { says: "A cue names the leading leg exactly where the step moves it", holds: (q) => q.steps.every((step) =>
      [...Object.values(step.cue), ...Object.values(step.said)].every((text) => text.includes(CuePlaceholders.value.leg) === (step.leadingLeg !== undefined))) },
    { says: "What the voice says when a step starts fits its phase with the default breath", holds: (q) => q.steps.every((step) => {
      const phase = BreathOf(undefined, [step.breathing, q.breathing, poses.find((p) => p.id === step.pose)?.breathing])[step.breath]
      return Object.values(step.said).every((text) => Spoken(text.split(CuePlaceholders.value.leg).join(), true) <= phase)
    }) },
    { says: "A step says where the leading leg goes exactly when its pose sets the legs apart", holds: (q) => q.steps.every((step) => {
      const pose = poses.find((p) => p.id === step.pose)
      return pose === undefined || LegsApart(pose.shape) === (step.leadingLeg !== undefined)
    }) },
    { says: "Hands that rest in two steps in a row rest in the same place", holds: (q) => q.steps.every((step, i) => {
      const shapeOf = (id: string | undefined) => poses.find((p) => p.id === id)?.shape
      const before = shapeOf(q.steps[i - 1]?.pose)
      const now = shapeOf(step.pose)
      const resting = (s: Shape | undefined) => (s?.rests ?? []).includes(BodyRest.hands)
      if (!before || !now || !resting(before) || !resting(now)) return true
      const [a, b] = [before.arms, now.arms]
      if (!("at" in a) || !("at" in b)) return false
      return a.at.every((v, k) => v === b.at[k])
    }) },
    { says: "A sequence has at least one round", holds: (q) => q.rounds.length > 0 },
    { says: "Each step lasts: with the default breath, the phase it moves on is not empty", holds: (q) => q.steps.every((step) =>
      BreathOf(undefined, [step.breathing, q.breathing, poses.find((p) => p.id === step.pose)?.breathing])[step.breath] > 0) },
    { says: "A sequence makes sense: from standing to standing, each pose reached in one movement from the one before, never back and forth", holds: (q) => {
      const found = q.steps.flatMap((step) => poses.filter((p) => p.id === step.pose))
      const sense = MakesSense(found)
      return found.length === q.steps.length && sense.begins && sense.ends && [...sense.jumps, ...sense.backAndForth, ...sense.repeats].length === 0
    } },
    { says: "A sequence comes back to where it started", holds: (q) => q.steps.length > 0 && q.steps[0].pose === q.steps[q.steps.length - 1].pose },
  ],
  language: Languages,
  serves: [PractiseGuided],
})
