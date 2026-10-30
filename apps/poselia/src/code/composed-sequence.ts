// A sequence composed from poses: one round, the leading leg the one the constants name; each step moves on the breath
// its movement takes, from the pose before (the first from its own pose: it starts still), and the voice says the
// pose's words. In a pose that sets the legs apart, the leading leg goes where the level before sends it.

import type { Pose, Sequence } from "../content"
import type { BreathPhase } from "../product"
import type { Shape, Level, Stance, Leg } from "../body"
import type { ProvidedBy } from "../../../../trame/kernel"
import type { WordsFr } from "../language"

type Words = ProvidedBy<typeof WordsFr>

export interface Deps {
  breathOf: (from: Shape, to: Shape) => BreathPhase
  leading: (before: Level) => Stance
  apart: (shape: Shape) => boolean
  fr: Words
  en: Words
  counts: { zero: number; one: number }
  id: string
  leg: string
}

const body = ({ breathOf, leading, apart, fr, en, counts, id, leg }: Deps) => (chosen: readonly Pose[]): Sequence => ({
  id,
  name: { fr: fr.composed(), en: en.composed() },
  rounds: [leg as Leg],
  steps: chosen.map((pose, i) => {
    const [before] = i > counts.zero ? chosen.slice(i - counts.one, i) : [pose]
    return {
      pose: pose.id,
      breath: breathOf(before.shape, pose.shape),
      cue: pose.cue,
      said: pose.said,
      leadingLeg: apart(pose.shape) ? leading(before.level) : undefined,
    }
  }),
})

export type Api = ReturnType<typeof body>
export default body
