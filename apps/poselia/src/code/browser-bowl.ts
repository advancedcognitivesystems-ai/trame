// The bowl in a browser: Web Audio oscillators, two per partial a beat apart, each fading from the strike to silence,
// and a burst of noise through a low filter for the mallet. A browser without Web Audio stays silent. The context asks
// for the latency of playback; it is resumed at each strike and suspended when the last sound has ended, which lets
// the browser release the audio output to the voice.

import type { BodyOf } from "#trame/kernel"
import type { BrowserBowl } from "../sound"

const body: BodyOf<typeof BrowserBowl> = ({ sound, audio, counts }) => {
  const zero = counts.zero
  const one = counts.next(zero)
  let context: AudioContext | undefined
  // How many strikes still ring.
  let ringing: number = zero
  return {
    strike: () => {
      if (!globalThis.AudioContext) return
      context ??= new AudioContext({ latencyHint: audio.playback as AudioContextLatencyCategory })
      const ringingIn = context
      void ringingIn.resume()
      ringing = counts.next(ringing)
      const now = context.currentTime
      const out = context.createGain()
      out.gain.value = sound.volume
      out.connect(context.destination)
      const tones: OscillatorNode[] = []
      for (const p of sound.partials) {
        const frequency = sound.fundamental * p.ratio
        for (const shift of [-p.spread, p.spread]) {
          const tone = context.createOscillator()
          tone.frequency.value = frequency + shift
          const level = context.createGain()
          level.gain.setValueAtTime(zero, now)
          level.gain.linearRampToValueAtTime(p.gain, now + sound.attack)
          level.gain.exponentialRampToValueAtTime(sound.silence, now + p.decay)
          tone.connect(level).connect(out)
          tone.start(now)
          tone.stop(now + sound.length)
          tones.push(tone)
        }
      }
      // When the strike has faded, and no other rings, the context is suspended.
      const [first] = tones
      if (first)
        first.onended = () => {
          ringing = counts.previous(ringing)
          if (ringing === zero) void ringingIn.suspend()
        }
      // The mallet: noise that fades in a few milliseconds, low-passed.
      const frames = Math.ceil(context.sampleRate * sound.malletDecay * sound.malletSpan)
      const buffer = context.createBuffer(one, frames, context.sampleRate)
      const samples = buffer.getChannelData(zero)
      // Two draws subtracted: noise between -1 and 1, thicker in the middle.
      for (let i: number = zero; i < frames; i++) samples[i] = (Math.random() - Math.random()) * Math.exp(-i / (context.sampleRate * sound.malletDecay))
      const noise = context.createBufferSource()
      noise.buffer = buffer
      const filter = context.createBiquadFilter()
      filter.frequency.value = sound.malletFilter
      const touch = context.createGain()
      touch.gain.value = sound.mallet
      noise.connect(filter).connect(touch).connect(out)
      noise.start(now)
    },
  }
}

export default body
