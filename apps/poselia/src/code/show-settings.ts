// The settings: shown, then shown again after each change. A phase changes by a step; each tap is kept with the last
// ones, and once they measure a breath it becomes the person's; the default breath forgets theirs.

import type { Screen, SettingsView } from "../architecture"
import type { BreathPattern, BreathPhase } from "../product"

export interface Deps {
  screen: Screen
  breath: { current(): BreathPattern | undefined; set(p: BreathPattern): void; clear(): void }
  voice: { parts(): { part: string; on: boolean }[]; set(part: string, on: boolean): void }
  view: (breath: BreathPattern, voice: readonly { part: string; on: boolean }[], taps: number, speaks: boolean) => SettingsView
  speech: { available(): boolean }
  adjust: (pattern: BreathPattern, phase: BreathPhase, steps: number) => BreathPattern
  measure: (taps: readonly number[]) => BreathPattern | undefined
  defaults: BreathPattern
  counts: { zero: number; next(n: number): number }
  taps: number
}

const body = ({ screen, breath, voice, view, speech, adjust, measure, defaults, counts, taps: kept }: Deps) => (back: () => void): void => {
  const step = counts.next(counts.zero)
  let taps: number[] = []
  const change = (phase: string, steps: number) => {
    breath.set(adjust(breath.current() ?? defaults, phase as BreathPhase, steps))
    render()
  }
  const render = (): void => screen.settings(view(breath.current() ?? defaults, voice.parts(), taps.length, speech.available()), {
    shorter: (phase) => change(phase, -step),
    longer: (phase) => change(phase, step),
    tap: (seconds) => {
      taps = [...taps, seconds].slice(-kept)
      const measured = measure(taps)
      if (measured) breath.set(measured)
      render()
    },
    reset: () => {
      breath.clear()
      taps = []
      render()
    },
    voice: (part, on) => {
      voice.set(part, on)
      render()
    },
    back,
  })
  render()
}

export type Api = ReturnType<typeof body>
export default body
