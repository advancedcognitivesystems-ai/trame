// The composer, in the language the app speaks: the counters with their buttons, the poses chosen in order (each drawn
// as the sequence places it, the leading leg where the level before sends it), the poses to add, and what does not
// make sense, named after the poses where it happens. A sequence is practised when it has poses and makes sense.

import type { ComposerView, Drawing } from "../architecture"
import type { Pose, Localized } from "../content"
import type { Shape, Body, Leg, Stance, Level } from "../body"
import type { ProvidedBy } from "#trame/kernel"
import type { WordsFr } from "../language"

type Words = ProvidedBy<typeof WordsFr>

export interface Deps {
  words: { now(): Words }
  language: { current(): string }
  draw: (body: Body) => Drawing
  pose: (shape: Shape, leading?: Leg, stance?: Stance) => Body
  sense: (steps: readonly { id: string; level: Level }[]) => { begins: boolean; ends: boolean; jumps: number[]; backAndForth: number[]; repeats: number[] }
  leading: (before: Level) => Stance
  counts: { zero: number; previous(n: number): number; isEmpty(xs: readonly unknown[]): boolean }
}

const body = ({ words, language, draw, pose: bodyOf, sense, leading, counts }: Deps) =>
  (state: { poses: readonly Pose[]; chosen: readonly Pose[]; count: number; breaths: number }): ComposerView => {
    const w = words.now()
    const tag = language.current()
    const text = (t: Localized) => t[tag] ?? w.appName()
    const { poses, chosen } = state
    const name = (i: number) => text(chosen[i].name)
    const judged = sense(chosen)
    const problems = counts.isEmpty(chosen)
      ? [w.nothing()]
      : [
          ...(judged.begins ? [] : [w.notBegins()]),
          ...judged.jumps.map((i) => w.jump(name(counts.previous(i)), name(i))),
          ...judged.backAndForth.map((i) => w.backAndForth(name(counts.previous(i)), name(i))),
          ...judged.repeats.map((i) => w.repeat(name(i))),
          ...(judged.ends ? [] : [w.notEnds()]),
        ]
    return {
      language: tag,
      title: w.holdTitle(),
      back: w.back(),
      line: w.composerLine(),
      countLabel: w.countLabel(),
      count: w.count(state.count),
      fewer: w.fewer(),
      more: w.more(),
      breathsLabel: w.breathsLabel(),
      breaths: w.breaths(state.breaths),
      shorter: w.holdShorter(),
      longer: w.holdLonger(),
      minus: w.minus(),
      plus: w.plus(),
      draw: w.draw(),
      clear: w.clear(),
      chosenTitle: w.chosenTitle(),
      chosen: chosen.map((p, i) => {
        const [before] = i > counts.zero ? chosen.slice(counts.previous(i), i) : [p]
        return { name: text(p.name), drawing: draw(bodyOf(p.shape, undefined, leading(before.level))), remove: w.remove(text(p.name)) }
      }),
      libraryTitle: w.libraryTitle(),
      library: poses.map((p) => ({ id: p.id, name: text(p.name), sanskrit: p.sanskrit, drawing: draw(bodyOf(p.shape)), add: w.add(text(p.name)) })),
      problems,
      practise: w.play(),
      practisable: counts.isEmpty(problems),
    }
  }

export type Api = ReturnType<typeof body>
export default body
