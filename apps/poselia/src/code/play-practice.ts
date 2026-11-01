// Playing a practice: the player is shown, then each moment as the screen's frames come; the time of the practice is
// what has passed while it played, so a pause holds it. Each movement is said aloud as it starts, in a few words (the
// breath, the words of the step, as the person chose); when a pose is held, what to do in it is said as the hold
// starts. The bowl rings as the practice starts and ends and, when the poses are held, as each movement starts: the
// end of a hold. The screen is kept awake while the practice plays. Done, the frames stop and the screen may sleep. A
// device that cannot speak is said so on the player, with what to do to hear the voice; so is a voice that failed. The
// landmarks are shown or hidden as the person chooses, kept on the device.

import type { Screen, PlayerView, MomentView, Bowl } from "../architecture"
import type { Pose, Sequence, Localized } from "../content"
import type { Practice } from "../practice"
import type { BreathPattern } from "../product"
import type { Frames, Speech, WakeLock } from "#std/platform"
import type { ProvidedBy } from "#trame/kernel"
import type { WordsFr } from "../language"

type Words = ProvidedBy<typeof WordsFr>

export interface Deps {
  screen: Screen
  frames: Frames
  voice: Speech
  awake: WakeLock
  bowl: Bowl
  choice: { speaks(): boolean; speak(on: boolean): void; saysBreath(): boolean; saysCues(): boolean; rings(): boolean }
  marking: { shown(): boolean; show(on: boolean): void }
  practiceOf: (sequence: Sequence, poses: readonly Pose[], person?: BreathPattern, hold?: number) => Practice
  momentOf: (practice: Practice, seconds: number, playing: boolean, speaking: boolean, marking: boolean) => MomentView
  words: { now(): Words }
  language: { current(): string }
  counts: { zero: number }
  stageViews: { views: Record<string, unknown> }
}

const body = ({ screen, frames, voice, awake, bowl, choice, marking, practiceOf, momentOf, words, language, counts, stageViews }: Deps) =>
  (sequence: Sequence, poses: readonly Pose[], back: () => void, person?: BreathPattern, hold?: number): void => {
    const w = words.now()
    const tag = language.current()
    const text = (t: Localized) => t[tag] ?? w.appName()
    const practice = practiceOf(sequence, poses, person, hold)
    let played = counts.zero
    let running: { stop(): void } | undefined
    // The last movement and the last hold the practice reached, and whether its end has rung.
    let moved: number | undefined
    let held: number | undefined
    let ended = false
    const ring = () => {
      if (choice.rings()) bowl.strike()
    }
    // The voice speaks when the person lets it and the device can.
    const speaks = () => choice.speaks() && voice.available()
    const say = (words: string) => {
      if (speaks()) voice.say(words, tag)
    }
    const show = (seconds: number) => {
      const moment = momentOf(practice, seconds, running !== undefined, speaks(), marking.shown())
      if (moment.done) {
        if (!ended) ring()
        ended = true
        stop()
      } else if (!moment.holding && moment.index !== moved) {
        moved = moment.index
        // The voice first, then the bowl: the voice has the audio output when the bowl starts.
        const breath = choice.saysBreath()
        const cue = choice.saysCues()
        if (breath && cue) say(w.said(moment.breath, moment.said))
        else if (breath) say(w.saidBreath(moment.breath))
        else if (cue) say(moment.said)
        if (practice.holding || moment.index === counts.zero) ring()
      } else if (moment.holding && moment.index !== held) {
        held = moment.index
        if (choice.saysCues()) say(moment.cue)
      }
      const failure = speaks() ? voice.failure() : undefined
      const shown = moment.done ? momentOf(practice, seconds, false, speaks(), marking.shown()) : moment
      screen.moment(failure === undefined ? shown : { ...shown, voiceProblem: w.voiceFailed(failure) })
    }
    const stop = () => {
      running?.stop()
      running = undefined
      awake.release()
    }
    const play = () => {
      void awake.keep()
      const from = played
      running = frames.start((seconds) => {
        played = from + seconds
        show(played)
      })
      show(played)
    }
    const view: PlayerView = {
      language: tag, title: text(sequence.name), back: w.back(), pause: w.pause(), resume: w.resume(), again: w.again(),
      mute: w.mute(), unmute: w.unmute(), noVoice: voice.available() ? undefined : w.noVoice(), marks: w.marks(),
      views: Object.keys(stageViews.views).map((name) => ({ name, label: w.view(name) })),
    }
    screen.play(view, {
      pause: () => {
        stop()
        voice.stop()
        show(played)
      },
      resume: () => play(),
      again: () => {
        stop()
        voice.stop()
        moved = undefined
        held = undefined
        ended = false
        played = counts.zero
        play()
      },
      voice: (on) => {
        choice.speak(on)
        if (!on) voice.stop()
        show(played)
      },
      marks: (on) => {
        marking.show(on)
        show(played)
      },
      back: () => {
        stop()
        voice.stop()
        back()
      },
    })
    play()
  }

export type Api = ReturnType<typeof body>
export default body
