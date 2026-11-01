// The moment of a practice: the part of the practice under way at a time (a movement, or a phase of the breath a pose is
// held for), the body between its two poses or still in its pose, and the words of the moment in the language the app
// speaks. The parts of a practice are laid out once for it.

import type { MomentView } from "../architecture"
import type { Practice, HeldPhase } from "../practice"
import type { Localized, Mark } from "../content"
import type { BreathPhase } from "../product"
import type { Keyframe, Body, Sides, Leg, Stance } from "../body"
import type { StageMarks } from "../architecture"
import type { ProvidedBy } from "#trame/kernel"
import type { WordsFr } from "../language"

type Words = ProvidedBy<typeof WordsFr>
type Part = { move: number; phase: BreathPhase; duration: number; start: number; held?: HeldPhase }
type Marks = { stage: StageMarks; list: { number: string; text: string }[] }

export interface Deps {
  at: (durations: readonly number[], seconds: number) => { index: number; progress: number; done: boolean }
  eased: (progress: number) => number
  lungs: (phase: BreathPhase, progress: number) => number
  bodyAt: (from: Keyframe, to: Keyframe, t: number) => Body
  marksOn: (marks: readonly Mark[], on: Body, sides: Sides) => Marks
  sides: (leading: Leg, stance?: Stance) => Sides
  when: { still: boolean; moving: boolean }
  words: { now(): Words }
  language: { current(): string }
  placeholders: { leg: string }
  counts: { zero: number; one: number; next(n: number): number }
  texts: { empty: string }
}

const body = ({ at, eased, lungs, bodyAt, marksOn, sides, when, words, language, placeholders, counts, texts }: Deps) => {
  const laidOut = new WeakMap<Practice, Part[]>()
  // The landmarks of a pose held, drawn once for each step of a practice, in each language.
  const drawn = new WeakMap<Practice, Map<string, Marks>>()
  const partsOf = (practice: Practice): Part[] => {
    const known = laidOut.get(practice)
    if (known) return known
    const parts = practice.moves.flatMap((m, move) => {
      let start = m.start
      const own: Part = { move, phase: m.step.breath, duration: m.duration, start }
      start += m.duration
      return [own, ...m.hold.map((held) => {
        const part: Part = { move, phase: held.phase, duration: held.duration, start, held }
        start += held.duration
        return part
      })]
    })
    laidOut.set(practice, parts)
    return parts
  }
  return (practice: Practice, seconds: number, playing: boolean, speaking: boolean, marking: boolean): MomentView => {
    const w = words.now()
    const tag = language.current()
    const text = (t: Localized) => (t[tag] ?? w.appName()).split(placeholders.leg).join(w.leg(move.leg))
    const parts = partsOf(practice)
    const where = at(parts.map((p) => p.duration), seconds)
    const part = parts[where.index]
    const move = practice.moves[part.move]
    const t = eased(where.progress)
    const elapsed = part.start + part.duration * where.progress
    const now = part.held ? bodyAt(move.from, move.to, counts.one) : bodyAt(move.from, move.to, t)
    const still = part.held !== undefined || where.done
    const marksNow = (): Marks => marksOn(move.pose.marks, now, sides(move.leg, move.step.leadingLeg))
    const kept = (): Marks => {
      const byStep = drawn.get(practice) ?? new Map<string, Marks>()
      drawn.set(practice, byStep)
      const key = [part.move, language.current()].join()
      const known = byStep.get(key)
      if (known) return known
      const made = marksNow()
      byStep.set(key, made)
      return made
    }
    return {
      index: part.move,
      segment: where.index,
      holding: part.held !== undefined,
      body: now,
      pose: text(move.pose.name),
      breath: w.breath(part.phase),
      cue: text(move.step.cue),
      said: text(move.step.said),
      hold: part.held ? w.breathsLeft(counts.next(move.breaths - part.held.breath)) : texts.empty,
      step: w.stepOf(counts.next(move.index), practice.sequence.steps.length),
      round: w.round(counts.next(move.round), practice.sequence.rounds.length),
      lungs: lungs(part.phase, t),
      progress: practice.total > counts.zero ? elapsed / practice.total : counts.zero,
      playing: playing && !where.done,
      speaking,
      done: where.done,
      doneLine: w.done(),
      marking,
      marks: !marking ? undefined : still ? (when.still ? kept() : undefined) : when.moving || !playing ? marksNow() : undefined,
    }
  }
}

export type Api = ReturnType<typeof body>
export default body
