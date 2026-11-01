/** Poselia · Architecture */

import { port } from "#trame/kinds/port"
import { component } from "#trame/kinds/component"
import { environment } from "#trame/kinds/environment"
import { PageLoading } from "#std/platform"

/**
 * Browser
 * A browser that opens Poselia's page: the page delivered as a file, before the phones.
 */
export const Browser = environment({ owner: "ghalaax" })

/**
 * Test
 * The scenarios: the app runs in memory, the device's languages given, the person's choices kept while it runs, and what
 * the screen would show recorded.
 */
export const Test = environment({ owner: "ghalaax" })

/**
 * Poselia in a browser
 * What runs in Poselia's page: it shows the poses, the sequences and the exercises.
 */
export const PoseliaApp = component({
  owner: "ghalaax",
  language: "typescript",
  environments: [Browser],
  deps: { exposure: PageLoading },
})

/** A point of a drawing, in the units of its frame, y down. */
export interface At { x: number; y: number }

/**
 * A shape of a drawing, with the part it draws: a segment as thick as the limb, its ends round; the head is a segment
 * that starts and ends at its centre, as thick as the head.
 */
export interface Shape { part: string; from: At; to: At; thickness: number }

/** The drawing of a pose: its frame, and its shapes in the order they are painted, the floor first. */
export interface Drawing {
  width: number
  height: number
  shapes: readonly Shape[]
}

/**
 * The home view: the app's name, the languages to choose from, the poses, each sequence step by step (to practise with
 * the breath, or to learn, each pose held), and the way to compose a practice of poses held.
 */
export interface HomeView {
  /** The language the view is written in, as a tag. */
  language: string
  title: string
  line: string
  languageLabel: string
  settings: string
  languages: readonly { tag: string; name: string; current: boolean }[]
  posesTitle: string
  poses: readonly { name: string; sanskrit: string; drawing: Drawing }[]
  sequencesTitle: string
  sequences: readonly {
    id: string; name: string; rounds: string; play: string; learn: string
    steps: readonly { number: string; pose: string; breath: string; cue: string; drawing?: Drawing }[]
  }[]
  holdTitle: string
  holdLine: string
  compose: string
}

/** What the person does on the home view: choose a language, play a sequence or learn it, compose a practice, open the settings. */
export interface HomeActions {
  chooseLanguage(tag: string): void
  play(sequence: string): void
  learn(sequence: string): void
  compose(): void
  settings(): void
}

/**
 * The composer: how many poses a draw gives and how many breaths each pose is held, with the words of their buttons;
 * the poses chosen, in order, drawn small, each to take out; the poses to add; what does not make sense, if anything;
 * whether the sequence can be practised.
 */
export interface ComposerView {
  language: string
  title: string
  back: string
  line: string
  countLabel: string
  count: string
  fewer: string
  more: string
  breathsLabel: string
  breaths: string
  shorter: string
  longer: string
  minus: string
  plus: string
  draw: string
  clear: string
  chosenTitle: string
  chosen: readonly { name: string; drawing: Drawing; remove: string }[]
  libraryTitle: string
  library: readonly { id: string; name: string; sanskrit: string; drawing: Drawing; add: string }[]
  problems: readonly string[]
  practise: string
  practisable: boolean
}

/** What the person does in the composer: fewer or more poses drawn, shorter or longer holds, a new draw, a pose added or taken out, all taken out, practise, back. */
export interface ComposerActions {
  fewer(): void
  more(): void
  shorter(): void
  longer(): void
  draw(): void
  add(pose: string): void
  remove(index: number): void
  clear(): void
  practise(): void
  back(): void
}

/**
 * The settings: each phase of the person's breath with its seconds and the words of its buttons, the measure by
 * tapping and how many taps it has, the default breath, and each part of the voice, on or off.
 */
export interface SettingsView {
  language: string
  title: string
  back: string
  breathTitle: string
  breathLine: string
  phases: readonly { phase: string; label: string; value: string; shorter: string; longer: string }[]
  minus: string
  plus: string
  measureTitle: string
  measureLine: string
  tap: string
  taps: string
  reset: string
  voiceTitle: string
  voice: readonly { part: string; label: string; on: boolean }[]
  /** What to do to hear the voice, when the device cannot speak. */
  noVoice?: string
}

/** What the person does in the settings: a phase shorter or longer, a tap (at a time, in seconds), the default breath, a part of the voice on or off, back. */
export interface SettingsActions {
  shorter(phase: string): void
  longer(phase: string): void
  tap(seconds: number): void
  reset(): void
  voice(part: string, on: boolean): void
  back(): void
}

/** The player: the sequence played, and the words of its buttons. */
export interface PlayerView {
  language: string
  title: string
  /** The views of the stage the person can turn to, by name, with their words. */
  views: readonly { name: string; label: string }[]
  back: string
  pause: string
  resume: string
  again: string
  /** The words of the button that turns the voice off, and of the one that turns it back on. */
  mute: string
  unmute: string
  /** What to do to hear the voice, when the device cannot speak. */
  noVoice?: string
  /** The words of the button that shows or hides the landmarks. */
  marks: string
}

/** What the person does on the player: pause, resume, start again, turn the voice off or on, show the landmarks or not, go back. */
export interface PlayerActions {
  pause(): void
  resume(): void
  again(): void
  voice(on: boolean): void
  marks(on: boolean): void
  back(): void
}

/**
 * A moment of a practice: which step of the practice it is in, and which part of it (its movement, or a phase of the
 * breath its pose is held for); whether the pose is held; the body as it is now, the pose it goes to, the phase of the
 * breath, what to do and what the voice says of it in a few words, the breaths left to hold, the step and the round,
 * how full the lungs are and how far the practice has gone (from 0 to 1), whether it plays, whether the voice speaks,
 * whether it is done.
 */
export interface MomentView {
  index: number
  segment: number
  holding: boolean
  body: import("./body").Body
  pose: string
  breath: string
  cue: string
  said: string
  hold: string
  step: string
  round: string
  lungs: number
  progress: number
  playing: boolean
  speaking: boolean
  done: boolean
  doneLine: string
  /** What the voice last failed with, said to the person, if it failed. */
  voiceProblem?: string
  /** Whether the person wants the landmarks; the landmarks of the pose, drawn and listed, when the body is still. */
  marking: boolean
  marks?: { stage: StageMarks; list: readonly { number: string; text: string }[] }
}

/** A bowl that is struck. */
export interface Bowl {
  /** Strikes the bowl: it rings, then fades. */
  strike(): void
}

/**
 * Bowl
 * The bowl that marks a practice: struck, it rings and fades.
 */
export const Bowl = port<Bowl>({ owner: "ghalaax", declaredEffects: ["display", "random"] })

/** What a scenario hears of the bowl. */
export interface BowlHeard {
  /** How many times the bowl was struck. */
  rung(): number
}

/**
 * Bowl rung
 * How many times the bowl rang, for a scenario to read: realized together with the bowl that counts.
 */
export const BowlRung = port<BowlHeard>({ owner: "ghalaax", declaredEffects: [] })

/**
 * What the stage draws over the body: pieces of line (their width, soft or not), dots, arrowheads, and words set at
 * points of the scene (numbered, or a measure in degrees).
 */
export interface StageMarks {
  segments: readonly { from: import("./body").Vec; to: import("./body").Vec; width: number; soft: boolean }[]
  dots: readonly { at: import("./body").Vec; radius: number }[]
  heads: readonly { at: import("./body").Vec; toward: import("./body").Vec }[]
  labels: readonly { at: import("./body").Vec; text: string; number?: string; degrees: boolean }[]
}

/** The body drawn in three dimensions, in an element of the page. */
export interface Stage {
  /** Puts the scene in an element of the page (and takes it from where it was). */
  mount(host: object): void
  /** Takes the scene out of the page: it stops drawing. */
  unmount(): void
  /** The body as it is now, and the landmarks drawn over it, if any. */
  show(body: import("./body").Body, marks?: StageMarks): void
  /** Turns the camera to a view, by its name. */
  view(name: string): void
}

/**
 * Stage
 * Draws the body in three dimensions, again at each frame of the screen, and turns it as the person asks.
 */
export const Stage = port<Stage>({ owner: "ghalaax", declaredEffects: ["display", "time"] })

/** What the screen shows: the home view, the player and its moments, the settings, or the composer. */
export interface Screen {
  show(view: HomeView, actions: HomeActions): void
  play(view: PlayerView, actions: PlayerActions): void
  moment(moment: MomentView): void
  settings(view: SettingsView, actions: SettingsActions): void
  compose(view: ComposerView, actions: ComposerActions): void
}

/**
 * Screen
 * Shows a view to the person, in the page, and hears what they do on it; what moves on it moves at the screen's pace.
 */
export const Screen = port<Screen>({ owner: "ghalaax", declaredEffects: ["display", "time"] })

/** What the content port gives: the rows of each dataset, in their type. */
export interface Content {
  poses(): Promise<readonly import("./content").Pose[]>
  sequences(): Promise<readonly import("./content").Sequence[]>
}

/**
 * Content
 * Where the app reads its content: the poses, then the sequences and the exercises. The first realization reads the
 * rows the app carries; an update downloaded and checked will be another, chosen by a binding.
 */
export const ContentSource = port<Content>({ owner: "ghalaax", declaredEffects: ["read", "asynchronous"] })

/** What a scenario reads of the screen: the last home view, player, settings and composer shown, with what the person could do on them, and the moments shown. */
export interface ShownViews {
  last(): { view: HomeView; actions: HomeActions } | undefined
  player(): { view: PlayerView; actions: PlayerActions } | undefined
  moments(): readonly MomentView[]
  settingsShown(): { view: SettingsView; actions: SettingsActions } | undefined
  composerShown(): { view: ComposerView; actions: ComposerActions } | undefined
}

/**
 * Views shown
 * What the screen showed, for a scenario to read: realized together with the screen that records it.
 */
export const ViewsShown = port<ShownViews>({ owner: "ghalaax", declaredEffects: [] })
