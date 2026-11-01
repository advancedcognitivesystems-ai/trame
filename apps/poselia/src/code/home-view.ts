// The home view, in the language the app speaks now: the languages to choose from (each named in its own language),
// the poses, drawn, each sequence step by step, drawn as its first round goes, the leg that leads it named where its
// cues say it, to practise or to learn; and the way to compose a practice of poses held.

import type { HomeView, Drawing } from "../architecture"
import type { Pose, Sequence, Localized } from "../content"
import type { Shape, Body, Leg, Stance } from "../body"
import type { ProvidedBy } from "#trame/kernel"
import type { WordsFr } from "../language"
import type { Counts } from "#std/algebra"

type Words = ProvidedBy<typeof WordsFr>

export interface Deps {
  words: { now(): Words }
  language: { current(): string }
  offered: readonly string[]
  fr: Words
  en: Words
  placeholders: { leg: string }
  counts: ProvidedBy<typeof Counts>
  draw: (body: Body) => Drawing
  pose: (shape: Shape, leading?: Leg, stance?: Stance) => Body
}

const body = ({ words, language, offered, fr, en, placeholders, counts, draw, pose: bodyOf }: Deps) => {
  const catalogs: Record<string, Words> = { fr, en }
  return (poses: readonly Pose[], sequences: readonly Sequence[]): HomeView => {
    const tag = language.current()
    const w = words.now()
    const text = (t: Localized) => t[tag] ?? w.appName()
    return {
      language: tag,
      title: w.appName(),
      line: w.line(),
      languageLabel: w.language(),
      settings: w.settings(),
      languages: offered.map((l) => ({ tag: l, name: (catalogs[l] ?? w).languageName(), current: l === tag })),
      posesTitle: w.poses(),
      poses: poses.map((p) => ({ name: text(p.name), sanskrit: p.sanskrit, drawing: draw(bodyOf(p.shape)) })),
      sequencesTitle: w.sequences(),
      sequences: sequences.map((q) => {
        const [leading] = q.rounds
        return {
          id: q.id,
          name: text(q.name),
          rounds: w.rounds(q.rounds.length),
          play: w.play(),
          learn: w.learn(),
          steps: q.steps.map((step, i) => {
            const pose = poses.find((p) => p.id === step.pose)
            return {
              number: w.step(counts.next(i)),
              pose: text(pose?.name ?? {}),
              breath: w.breath(step.breath),
              cue: text(step.cue).split(placeholders.leg).join(leading === undefined ? w.appName() : w.leg(leading)),
              drawing: pose && draw(bodyOf(pose.shape, leading, step.leadingLeg)),
            }
          }),
        }
      }),
      holdTitle: w.holdTitle(),
      holdLine: w.holdLine(),
      compose: w.compose(),
    }
  }
}

export type Api = ReturnType<typeof body>
export default body
