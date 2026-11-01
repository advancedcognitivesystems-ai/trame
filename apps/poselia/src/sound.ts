/** Poselia · Sound */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { implementation } from "#trame/kinds/implementation"
import { Counts } from "#std/algebra"
import { WebAudioApi } from "#std/web"
import { Bowl } from "./architecture"

// The bowl that marks a practice: struck at its start, at the end of each pose held, which tells the person to move,
// and at its end. Its sound is made in the page, as a struck bowl sounds: a few partials that are not harmonics of the
// first, each split in two close tones that beat, each fading at its own pace, and the mallet's touch.

/**
 * Sound of the bowl
 * A Tibetan singing bowl, struck: its first tone (220 Hz), its partials (their ratio to the first tone; the loudness of
 * each of their two tones; the seconds they take to fade to silence; how far each tone is from the partial, in hertz,
 * so that the two beat at twice that), the attack of the strike, how quiet silence is, how long the sound lasts; the
 * mallet's touch (a burst of noise: its loudness, how fast it fades, for how many of those fades it lasts, how low it is
 * filtered); the volume.
 */
export const BowlSound = decision<{
  fundamental: number; attack: number; silence: number; length: number; volume: number
  partials: { ratio: number; gain: number; decay: number; spread: number }[]
  mallet: number; malletDecay: number; malletSpan: number; malletFilter: number
}>({
  owner: "ghalaax",
  value: {
    fundamental: 220, attack: 0.006, silence: 0.0001, length: 9, volume: 0.35,
    partials: [
      { ratio: 1, gain: 0.5, decay: 9, spread: 0.45 },
      { ratio: 2.71, gain: 0.25, decay: 6, spread: 0.85 },
      { ratio: 5.06, gain: 0.125, decay: 3.5, spread: 1.3 },
      { ratio: 8, gain: 0.055, decay: 2, spread: 1.7 },
    ],
    mallet: 0.05, malletDecay: 0.012, malletSpan: 4, malletFilter: 1800,
  },
  rejected: {
    "A recording": "a sound file would weigh more than the whole app, and a recording cannot be tuned",
    "A plain chime": "a sine that stops sounds like a notification, not like a bowl that keeps ringing as one breathes",
  },
})

/**
 * The browser's bowl
 * The bowl made with the Web Audio API: for each partial, two oscillators a beat apart, each fading from the strike to
 * silence; the mallet a burst of noise through a low filter. The sound starts once the person has touched the page. Its
 * audio context asks for the latency of playback, and is suspended once the bowl is silent, so that it leaves the
 * device's audio output to the voice between two strikes.
 */
export const BrowserBowl = implementation({
  owner: "ghalaax",
  implements: [Bowl],
  deps: { sound: BowlSound, audio: WebAudioApi, counts: Counts },
  body: code.file("./code/browser-bowl.ts"),
})
