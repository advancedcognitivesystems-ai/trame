// The composer: shown, then shown again after each change. Fewer or more poses, or a new draw, draws the sequence again
// (a new draw from the next seed); a pose added goes at the end, a pose taken out leaves the others in their order. The
// sequence is practised, each pose held, when it makes sense; back from the practice, the composer again. What was
// composed stays while the app runs.

import type { Screen, ComposerView } from "../architecture"
import type { Pose, Sequence } from "../content"
import type { BreathPattern } from "../product"

export interface Deps {
  screen: Screen
  view: (state: { poses: readonly Pose[]; chosen: readonly Pose[]; count: number; breaths: number }) => ComposerView
  drawn: (poses: readonly Pose[], count: number, seed: number) => Pose[]
  composed: (chosen: readonly Pose[]) => Sequence
  defaults: { count: number; fewest: number; most: number; breaths: number; least: number; longest: number }
  play: (sequence: Sequence, poses: readonly Pose[], back: () => void, person?: BreathPattern, hold?: number) => void
  counts: { one: number; next(n: number): number; previous(n: number): number }
}

const body = ({ screen, view, drawn, composed, defaults, play, counts }: Deps) => {
  let seed = counts.one
  let count = defaults.count
  let breaths = defaults.breaths
  let ids: readonly string[] | undefined
  return (poses: readonly Pose[], back: () => void, person?: BreathPattern): void => {
    const redraw = () => {
      ids = drawn(poses, count, seed).map((p) => p.id)
    }
    if (ids === undefined) redraw()
    const chosen = () => (ids ?? []).flatMap((id) => poses.filter((p) => p.id === id))
    const state = () => ({ poses, chosen: chosen(), count, breaths })
    const render = (): void => screen.compose(view(state()), {
      fewer: () => {
        count = Math.max(defaults.fewest, counts.previous(count))
        redraw()
        render()
      },
      more: () => {
        count = Math.min(defaults.most, counts.next(count))
        redraw()
        render()
      },
      shorter: () => {
        breaths = Math.max(defaults.least, counts.previous(breaths))
        render()
      },
      longer: () => {
        breaths = Math.min(defaults.longest, counts.next(breaths))
        render()
      },
      draw: () => {
        seed = counts.next(seed)
        redraw()
        render()
      },
      add: (id) => {
        ids = [...(ids ?? []), id]
        render()
      },
      remove: (index) => {
        ids = (ids ?? []).filter((_, i) => i !== index)
        render()
      },
      clear: () => {
        ids = []
        render()
      },
      practise: () => {
        if (view(state()).practisable) play(composed(chosen()), poses, render, person, breaths)
      },
      back,
    })
    render()
  }
}

export type Api = ReturnType<typeof body>
export default body
