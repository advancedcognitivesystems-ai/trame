// A practice: each round of a sequence, each step, with its breath, the pose before and its own placed for the round.
// The first step of the practice moves from its own pose: it starts still. Held, each pose is held after its movement
// the breaths asked, or those its cue takes to say, until the phase the next movement moves on.

import type { Practice, Move, HeldPhase } from "../practice"
import type { Pose, Sequence, SequenceStep } from "../content"
import type { BreathPattern, BreathSetting, BreathPhase } from "../product"
import type { Shape, Leg, Stance, Keyframe } from "../body"

export interface Deps {
  breathOf: (person: BreathPattern | undefined, levels: readonly (BreathSetting | undefined)[]) => BreathPattern
  key: (shape: Shape, leading?: Leg, stance?: Stance) => Keyframe
  holdPhases: (pattern: BreathPattern, after: BreathPhase, breaths: number, next?: BreathPhase) => HeldPhase[]
  toSay: (texts: readonly string[], pattern: BreathPattern) => number
  counts: { zero: number; next(n: number): number }
}

const body = ({ breathOf, key, holdPhases, toSay, counts }: Deps) =>
  (sequence: Sequence, poses: readonly Pose[], person?: BreathPattern, hold: number = counts.zero): Practice => {
    const { zero } = counts
    const steps: { round: number; leg: Leg; index: number; step: SequenceStep; pose: Pose; to: Keyframe; pattern: BreathPattern }[] = []
    for (const [round, leg] of sequence.rounds.entries())
      for (const [index, step] of sequence.steps.entries()) {
        const pose = poses.find((p) => p.id === step.pose)
        if (!pose) continue
        const pattern = breathOf(person, [step.breathing, sequence.breathing, pose.breathing])
        steps.push({ round, leg, index, step, pose, to: key(pose.shape, leg, step.leadingLeg), pattern })
      }
    const moves: Move[] = []
    let start: number = zero
    let previous: Keyframe | undefined
    for (const [i, s] of steps.entries()) {
      const duration = s.pattern[s.step.breath]
      const [next] = steps.slice(counts.next(i))
      const breaths = hold > zero ? Math.max(hold, toSay(Object.values(s.step.cue), s.pattern)) : zero
      const held = holdPhases(s.pattern, s.step.breath, breaths, next?.step.breath)
      moves.push({ round: s.round, leg: s.leg, index: s.index, step: s.step, pose: s.pose, from: previous ?? s.to, to: s.to, start, duration, hold: held, breaths })
      start += duration + held.reduce((sum, h) => sum + h.duration, zero)
      previous = s.to
    }
    return { sequence, moves, total: start, holding: hold > zero }
  }

export type Api = ReturnType<typeof body>
export default body
