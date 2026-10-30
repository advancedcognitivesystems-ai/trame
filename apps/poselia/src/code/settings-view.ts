// The settings view, in the language the app speaks: each phase of the breath with its seconds, the measure by tapping,
// the default breath, and each part of the voice, on or off; what to do to hear it, when the device cannot speak.

import type { SettingsView } from "../architecture"
import type { BreathPattern } from "../product"
import type { ProvidedBy } from "../../../../trame/kernel"
import type { WordsFr } from "../language"

type Words = ProvidedBy<typeof WordsFr>

export interface Deps {
  words: { now(): Words }
  language: { current(): string }
}

const body = ({ words, language }: Deps) =>
  (breath: BreathPattern, voice: readonly { part: string; on: boolean }[], taps: number, speaks: boolean): SettingsView => {
    const w = words.now()
    return {
      language: language.current(),
      title: w.settings(),
      back: w.back(),
      breathTitle: w.breathTitle(),
      breathLine: w.breathLine(),
      phases: Object.entries(breath).map(([phase, seconds]) => ({
        phase, label: w.phase(phase), value: w.seconds(seconds), shorter: w.shorter(w.phase(phase)), longer: w.longer(w.phase(phase)),
      })),
      minus: w.minus(),
      plus: w.plus(),
      measureTitle: w.measureTitle(),
      measureLine: w.measureLine(),
      tap: w.tap(),
      taps: w.taps(taps),
      reset: w.reset(),
      voiceTitle: w.voiceTitle(),
      voice: voice.map((v) => ({ part: v.part, label: w.voicePart(v.part), on: v.on })),
      noVoice: speaks ? undefined : w.noVoice(),
    }
  }

export type Api = ReturnType<typeof body>
export default body
