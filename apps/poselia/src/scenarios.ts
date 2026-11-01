/** Poselia · Scenarios */

import { decision } from "#trame/kinds/decision"
import { fn } from "#trame/kinds/function"
import { binding } from "#trame/kinds/binding"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { DeviceLanguages, MemoryPreferences, PreferencesStore, FramesByHand, TimeTurned, WrittenSpeech, SpeechHeard, AwakeInMemory, ScreenKeptAwake } from "#std/platform"
import { Strategy, AbstractFactory } from "#std/patterns"
import { Counts, Sequences } from "#std/algebra"
import {
  Test, Screen, ViewsShown, Bowl, BowlRung, type HomeView, type HomeActions, type PlayerView, type PlayerActions, type MomentView, type SettingsView,
  type SettingsActions, type ComposerView, type ComposerActions,
} from "./architecture"
import { ShowHome, HomeViewOf, CarriedContent } from "./app"
import { PlayPractice, PracticeOf, MomentOf, HoldPhases, BreathsToSay } from "./practice"
import { FigureDrawing, PoseBody } from "./drawing"
import { BodyAt, SurfaceHeights, Touching, Movement, SteppingLeg, PlantedLeg, HandOnItsWay, FootOnItsWay } from "./body"
import { ShowSettings, SettingsViewOf, PersonBreath, VoiceChoice, MeasuredBreath, AdjustedBreath, MarksChoice } from "./settings"
import { AppLanguage, InterfaceWords, PreferenceNames, French, English, WordsFr, WordsEn } from "./language"
import { Poses, Sequences as SequenceRows, MakesSense, LeadingLegOf } from "./content"
import { MarksOn, MarkOnBody } from "./marks"
import { ShowComposer, ComposerViewOf, DrawnSequence, ComposedSequence, BreathOfMove, HoldingDefaults } from "./composing"
import { Leg } from "./body"

// The app runs in memory and its graph checks what it does: the language it speaks first, the leg its cues name, the
// language the person chooses and that it keeps; the practice that follows the breath, the body that stays on the floor;
// the poses held, the sequences drawn by lot.

/**
 * The device of the scenarios
 * The languages a device gives in the scenarios: British English only.
 */
export const ScenarioDevice = decision<{ languages: string[] }>({ owner: "ghalaax", value: { languages: ["en-GB"] } })

/**
 * The device's languages, given
 * In a scenario, the device gives the languages the scenarios decide.
 */
export const GivenLanguages = fn({
  owner: "ghalaax",
  implements: [DeviceLanguages],
  deps: { device: ScenarioDevice },
  body: ({ device }) => ({ languages: () => device.languages }),
})

/**
 * A screen that records
 * In a scenario, the screen keeps the last home view, player, settings and composer it was given, with what the person
 * could do on them, and every moment it showed.
 */
export const RecordedScreen = fn({
  owner: "ghalaax",
  implements: [Screen, ViewsShown],
  body: () => {
    let last: { view: HomeView; actions: HomeActions } | undefined
    let player: { view: PlayerView; actions: PlayerActions } | undefined
    let shownSettings: { view: SettingsView; actions: SettingsActions } | undefined
    let shownComposer: { view: ComposerView; actions: ComposerActions } | undefined
    const moments: MomentView[] = []
    return {
      show: (view: HomeView, actions: HomeActions) => {
        last = { view, actions }
      },
      play: (view: PlayerView, actions: PlayerActions) => {
        player = { view, actions }
      },
      moment: (moment: MomentView) => void moments.push(moment),
      settings: (view: SettingsView, actions: SettingsActions) => {
        shownSettings = { view, actions }
      },
      compose: (view: ComposerView, actions: ComposerActions) => {
        shownComposer = { view, actions }
      },
      last: () => last,
      player: () => player,
      moments: () => [...moments],
      settingsShown: () => shownSettings,
      composerShown: () => shownComposer,
    }
  },
})

/**
 * A bowl that counts
 * In a scenario, the bowl makes no sound: it counts how many times it was struck.
 */
export const RecordedBowl = fn({
  owner: "ghalaax",
  implements: [Bowl, BowlRung],
  deps: { counts: Counts },
  body: ({ counts }) => {
    let rung: number = counts.zero
    return {
      strike: () => {
        rung = counts.next(rung)
      },
      rung: () => rung,
    }
  },
})

/**
 * The app in memory
 * In the scenarios, the screen records, the person's choices are kept while the app runs, the device's languages are
 * given, time moves only when the scenario turns it, the voice writes down what it says, the bowl counts its strikes
 * and the screen only says whether it is kept awake.
 */
export const InMemory = binding({
  owner: "ghalaax",
  chooses: [RecordedScreen, RecordedBowl, MemoryPreferences, GivenLanguages, FramesByHand, WrittenSpeech, AwakeInMemory],
  environments: [Test],
  follows: [Strategy, AbstractFactory],
  context: "A scenario reads what the app would show and keeps, the same every time, without a browser.",
  consequences: "The screen and what records it are chosen together: a scenario reads the views the app showed.",
})

/**
 * What the scenarios check
 */
export const ScenarioChecks = catalog({
  owner: "ghalaax",
  language: English,
  messages: () => ({
    deviceLanguageFirst: () => "Without a choice, the app speaks the device's language",
    leadingLegNamed: () => "The cues name the leg that leads the first round",
    choiceRewrites: () => "Choosing French writes the page again in French",
    choiceKept: () => "The choice is kept on the device",
    playerNamed: () => "Playing a sequence shows its player, named after it",
    secondStep: () => "A breath and a half in, the second step, the lungs filling",
    pauseHolds: () => "A pause holds the practice: time passes, nothing moves",
    resumeGoesOn: () => "Resumed, it goes on from where it was",
    posesDrawn: () => "Each pose of the home page is drawn",
    contentCarried: () => "The home page shows every pose and every sequence the app carries",
    neverFloats: () => "At every moment of the practice, the body rests on the floor somewhere",
    neverUnder: () => "No part of the body goes under the floor deeper than a step may sink",
    feetSkim: () => "A leg that steps skims the floor: no foot rises higher than the sequence lifts it",
    handsInOnePlace: () => "Wherever the hands rest during the practice, they rest in one place",
    endIsDone: () => "At the end, the practice is done",
    backHome: () => "Back, the home page again",
    saidAsItStarts: () => "Each step is said aloud as it starts, in the app's language",
    awakeWhilePlaying: () => "The screen is kept awake while the practice plays, and may sleep when it pauses or ends",
    longerKept: () => "Two steps longer, the breath in lasts a second more, kept on the device",
    tapsMeasure: () => "Three taps measure the breath: in and out",
    practiceFollowsPerson: () => "A practice follows the person's breath",
    onlyBreathSaid: () => "The cues turned off, the voice says only the breath",
    defaultForgets: () => "The default breath forgets the person's",
    voiceOff: () => "The voice turned off, nothing more is said, and the player says so",
    drawnSensible: () => "The composer opens with a sequence drawn by lot, as long as asked, that makes sense",
    drawnAgain: () => "Drawn again, another sequence, that makes sense too",
    jumpShown: () => "A pose too far from the last one is shown as a jump, and the sequence cannot be practised",
    takenOut: () => "Taken out again, the sequence can be practised",
    composedPlayed: () => "Practised, the player is named after the sequence composed",
    heldStill: () => "While a pose is held, the body does not move",
    holdCounted: () => "A hold says the breaths left: as many as asked at its start",
    cueAtHold: () => "As each hold starts, the voice says what to do in the pose",
    bowlRings: () => "The bowl rings as each movement starts and once more at the end",
    learnHolds: () => "Learning a sequence holds each pose the breaths a sequence learnt holds, after its movement",
    marksWhenStill: () => "The landmarks of a pose are drawn and listed while it is held, the same while it stays still",
    marksFollow: () => "In a practice that flows, the landmarks of the pose the body goes to are drawn on it and follow it as it moves",
    marksHidden: () => "Hidden, the landmarks are drawn no more, and the choice is kept on the device",
    drawnLong: () => "Every sequence drawn is as long as asked",
    drawnMakeSense: () => "Every sequence drawn makes sense",
    drawnSame: () => "The same seed draws the same sequence",
    drawnVary: () => "Different seeds draw different sequences",
    drawnOnFloor: () => "Played, every sequence drawn keeps the body on the floor: never floating, never under it deeper than a step may sink",
  }),
})

/**
 * Moments a scenario looks at
 * With the default breath (four seconds a phase): a breath and a half in, the second step is half gone; then a pause
 * while ten seconds pass; resumed, two seconds later the third step begins; two minutes are past the end. A whole
 * practice is looked at every quarter of a second; in the sun salutation, no ankle rises more than 30 cm off the floor.
 */
export const ScenarioMoments = decision<{ into: number; paused: number; resumed: number; end: number; second: number; third: number; sample: number; footHighest: number }>({
  owner: "ghalaax",
  value: { into: 6, paused: 10, resumed: 2, end: 120, second: 2, third: 3, sample: 0.25, footHighest: 0.3 },
})

/**
 * The language of the home page
 * The app speaks the device's language until the person chooses another, writes the page again in it, and keeps the
 * choice. It shows every pose and every sequence the app carries.
 */
export const HomeLanguage = scenario({
  owner: "ghalaax",
  verifies: [ShowHome, HomeViewOf, AppLanguage, InterfaceWords, FigureDrawing, PoseBody, CarriedContent, GivenLanguages, RecordedScreen, MemoryPreferences],
  env: Test,
  deps: {
    home: ShowHome, shown: ViewsShown, preferences: PreferencesStore, names: PreferenceNames,
    english: English, french: French, wordsEn: WordsEn, wordsFr: WordsFr, say: ScenarioChecks, counts: Counts, poses: Poses, rows: SequenceRows,
  },
  body: ({ home, shown, preferences, names, english, french, wordsEn, wordsFr, say, counts, poses, rows }) => async (check) => {
    await home({ params: {} })
    const first = shown.last()
    check(say.deviceLanguageFirst(), first?.view.language === english.tag)
    check(say.contentCarried(), first?.view.poses.length === poses.length && first.view.sequences.length === rows.length)
    check(say.posesDrawn(), (first?.view.poses ?? []).every((p) => p.drawing.shapes.length > counts.zero))
    const [sequence] = first?.view.sequences ?? []
    check(say.leadingLegNamed(), Boolean(sequence?.steps.some((s) => s.cue.includes(wordsEn.leg(Leg.right)))))
    first?.actions.chooseLanguage(french.tag)
    const second = shown.last()
    check(say.choiceRewrites(), second?.view.language === french.tag && second.view.line === wordsFr.line())
    check(say.choiceKept(), preferences.get(names.language) === french.tag)
  },
})

/**
 * A practice follows the breath
 * The sun salutation played with the default breath: each step lasts its phase and is said as it starts, a pause holds
 * it, it goes on where it was, and it ends; the screen is kept awake only while it plays; back, the home page again.
 */
export const PracticeFollowsTheBreath = scenario({
  owner: "ghalaax",
  verifies: [PlayPractice, PracticeOf, MomentOf, ShowHome, FramesByHand, WrittenSpeech, AwakeInMemory],
  env: Test,
  deps: {
    home: ShowHome, shown: ViewsShown, time: TimeTurned, heard: SpeechHeard, screen: ScreenKeptAwake, moments: ScenarioMoments,
    words: WordsEn, english: English, say: ScenarioChecks, counts: Counts, sequences: Sequences,
  },
  body: ({ home, shown, time, heard, screen, moments, words, english, say, counts, sequences }) => async (check) => {
    await home({ params: {} })
    const start = shown.last()
    const [sequence] = start?.view.sequences ?? []
    start?.actions.play(sequence?.id ?? words.appName())
    const player = shown.player()
    check(say.playerNamed(), player !== undefined && player.view.title === sequence?.name)
    const [first] = shown.moments()
    time.turn(moments.into)
    const second = sequences.last(shown.moments())
    check(say.secondStep(), second?.step === words.stepOf(moments.second, sequence?.steps.length ?? counts.zero)
      && second.lungs > counts.zero && second.lungs < (first?.lungs ?? counts.zero))
    check(say.saidAsItStarts(), heard.said().length === moments.second && heard.said().every((s) => s.language === english.tag)
      && sequences.last(heard.said())?.text === words.said(second?.breath ?? words.appName(), second?.said ?? words.appName()))
    const same = (a: readonly number[] | undefined, b: readonly number[] | undefined) => JSON.stringify(a) === JSON.stringify(b)
    check(say.marksFollow(), first?.marks !== undefined && second?.marks !== undefined && second.playing && !second.holding
      && second.marks.list.length > counts.zero && !same(sequences.head(second.marks.stage.labels)?.at, sequences.head(first.marks.stage.labels)?.at))
    const awakeWhilePlaying = screen.awake()
    player?.actions.pause()
    const held = shown.moments().length
    time.turn(moments.paused)
    check(say.pauseHolds(), shown.moments().length === held && sequences.last(shown.moments())?.playing === false)
    const asleepWhilePaused = !screen.awake()
    player?.actions.resume()
    time.turn(moments.resumed)
    check(say.resumeGoesOn(), sequences.last(shown.moments())?.step === words.stepOf(moments.third, sequence?.steps.length ?? counts.zero))
    time.turn(moments.end)
    const last = sequences.last(shown.moments())
    check(say.endIsDone(), last?.done === true && last.doneLine === words.done())
    check(say.awakeWhilePlaying(), awakeWhilePlaying && asleepWhilePaused && !screen.awake())
    player?.actions.back()
    check(say.backHome(), shown.last() !== start)
  },
})

/**
 * Moments of the settings a scenario looks at
 * Two steps longer, the default breath in (four seconds) lasts five; taps at 0, 5 and 11 seconds measure five seconds in
 * and six out; five seconds into a practice, the first step (a breath out of six seconds) is still under way.
 */
export const SettingsMoments = decision<{ longer: number; inhale: number; taps: number[]; measuredIn: number; measuredOut: number; into: number }>({
  owner: "ghalaax",
  value: { longer: 2, inhale: 5, taps: [0, 5, 11], measuredIn: 5, measuredOut: 6, into: 5 },
})

/**
 * The person's breath and voice
 * In the settings, the person makes their breath in longer, then measures their breath by tapping; a practice then
 * follows it, and with the cues turned off the voice says only the breath; the default breath forgets theirs.
 */
export const PersonSettings = scenario({
  owner: "ghalaax",
  verifies: [ShowSettings, SettingsViewOf, PersonBreath, VoiceChoice, MeasuredBreath, AdjustedBreath, ShowHome],
  env: Test,
  deps: {
    home: ShowHome, shown: ViewsShown, heard: SpeechHeard, time: TimeTurned, breath: PersonBreath, expected: SettingsMoments,
    words: WordsEn, say: ScenarioChecks, counts: Counts, sequences: Sequences,
  },
  body: ({ home, shown, heard, time, breath, expected, words, say, counts, sequences }) => async (check) => {
    await home({ params: {} })
    shown.last()?.actions.settings()
    const settings = () => shown.settingsShown()
    const [first] = settings()?.view.phases ?? []
    for (let i: number = counts.zero; i < expected.longer; i = counts.next(i)) settings()?.actions.longer(first?.phase ?? words.appName())
    check(say.longerKept(), breath.current()?.inhale === expected.inhale && sequences.head(settings()?.view.phases ?? [])?.value === words.seconds(expected.inhale))
    for (const t of expected.taps) settings()?.actions.tap(t)
    const measured = breath.current()
    check(say.tapsMeasure(), measured?.inhale === expected.measuredIn && measured.exhale === expected.measuredOut)
    const [, , cues] = settings()?.view.voice ?? []
    settings()?.actions.voice(cues?.part ?? words.appName(), false)
    settings()?.actions.back()
    const start = shown.last()
    const [sequence] = start?.view.sequences ?? []
    start?.actions.play(sequence?.id ?? words.appName())
    time.turn(expected.into)
    const moment = sequences.last(shown.moments())
    check(say.practiceFollowsPerson(), moment?.step === words.stepOf(counts.next(counts.zero), sequence?.steps.length ?? counts.zero))
    check(say.onlyBreathSaid(), sequences.last(heard.said())?.text === words.saidBreath(moment?.breath ?? words.appName()))
    shown.player()?.actions.back()
    shown.last()?.actions.settings()
    settings()?.actions.reset()
    check(say.defaultForgets(), breath.current() === undefined)
  },
})

/**
 * The body stays on the floor
 * The sun salutation played from start to end, looked at every quarter of a second: at every moment the body rests on
 * the floor somewhere, nothing goes under it, a leg that steps skims the floor, and the hands, wherever they rest, rest
 * in one place.
 */
export const BodyStaysOnTheFloor = scenario({
  owner: "ghalaax",
  verifies: [PracticeOf, MomentOf, PlayPractice, BodyAt, SurfaceHeights, SteppingLeg, PlantedLeg, HandOnItsWay, FootOnItsWay],
  env: Test,
  deps: {
    home: ShowHome, shown: ViewsShown, time: TimeTurned, moments: ScenarioMoments, heights: SurfaceHeights, touching: Touching,
    movement: Movement, words: WordsEn, say: ScenarioChecks, counts: Counts,
  },
  body: ({ home, shown, time, moments, heights, touching, movement, words, say, counts }) => async (check) => {
    await home({ params: {} })
    const start = shown.last()
    const [sequence] = start?.view.sequences ?? []
    start?.actions.play(sequence?.id ?? words.appName())
    for (let t: number = counts.zero; t < moments.end; t += moments.sample) time.turn(moments.sample)
    const all = shown.moments()
    const lows = all.map((m) => Math.min(...Object.values(heights(m.body))))
    check(say.neverFloats(), all.length > counts.zero && lows.every((low) => low <= touching.within))
    check(say.neverUnder(), lows.every((low) => low >= -movement.stepSink))
    check(say.feetSkim(), all.every((m) => [m.body.L.ankle, m.body.R.ankle].every(([, y]) => y <= moments.footHighest)))
    const resting = all.flatMap((m) => [m.body.L.wrist, m.body.R.wrist]).filter(([, y]) => y <= movement.wristFloor + movement.still)
    const spread = (values: number[]) => Math.max(...values) - Math.min(...values)
    check(say.handsInOnePlace(), resting.length > counts.zero
      && spread(resting.map(([x]) => x)) < movement.still && spread(resting.map(([, , z]) => Math.abs(z))) < movement.still)
  },
})

/**
 * Moments of the poses held
 * The composer draws eight poses; a pose too far is added (the cobra, lying on the front), then taken out; the holds are
 * made one breath shorter (four breaths); the practice is looked at every half second for ten minutes, the voice turned
 * off after a minute and back on after two. A sequence learnt is looked at five seconds in, during the first hold. The
 * draws are tried with seeds 1 to 12, for 3, 6, 9 and 12 poses, each pose held one breath, looked at every quarter of a
 * second; at least eight different sequences of nine poses come out of the twelve seeds.
 */
export const HoldMoments = decision<{
  far: string; sample: number; end: number; mute: number; unmute: number; learnt: number
  seeds: number[]; lengths: number[]; drawnSample: number; differentAtLeast: number; compared: number
}>({
  owner: "ghalaax",
  value: {
    far: "bhujangasana", sample: 0.5, end: 600, mute: 60, unmute: 120, learnt: 5,
    seeds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], lengths: [3, 6, 9, 12], drawnSample: 0.25, differentAtLeast: 8, compared: 9,
  },
})

/**
 * Holding the poses
 * The composer opens with a sequence drawn by lot that makes sense; drawn again, another; a pose too far is shown as a
 * jump, taken out again; the holds made shorter, the sequence is practised to its end: the body is still while a pose
 * is held, each hold says the breaths left and starts with what to do in the pose, the bowl rings as each movement
 * starts and at the end, and the voice turned off says nothing more.
 */
export const HoldThePoses = scenario({
  owner: "ghalaax",
  verifies: [ShowComposer, ComposerViewOf, DrawnSequence, ComposedSequence, PlayPractice, PracticeOf, MomentOf, HoldPhases, BreathsToSay, VoiceChoice, RecordedBowl],
  env: Test,
  deps: {
    home: ShowHome, shown: ViewsShown, time: TimeTurned, heard: SpeechHeard, rung: BowlRung, defaults: HoldingDefaults, moments: HoldMoments,
    movement: Movement, words: WordsEn, say: ScenarioChecks, counts: Counts, sequences: Sequences,
  },
  body: ({ home, shown, time, heard, rung, defaults, moments, movement, words, say, counts, sequences }) => async (check) => {
    await home({ params: {} })
    shown.last()?.actions.compose()
    const composer = () => shown.composerShown()
    const first = composer()?.view
    check(say.drawnSensible(), first?.chosen.length === defaults.count && first.practisable)
    composer()?.actions.draw()
    const second = composer()?.view
    check(say.drawnAgain(), second?.practisable === true && second.chosen.map((c) => c.name).join() !== first?.chosen.map((c) => c.name).join())
    composer()?.actions.add(moments.far)
    check(say.jumpShown(), composer()?.view.practisable === false && (composer()?.view.problems.length ?? counts.zero) > counts.zero)
    composer()?.actions.remove(counts.previous(composer()?.view.chosen.length ?? counts.zero))
    check(say.takenOut(), composer()?.view.practisable === true)
    composer()?.actions.shorter()
    const poses = composer()?.view.chosen.length ?? counts.zero
    composer()?.actions.practise()
    const player = shown.player()
    check(say.composedPlayed(), player?.view.title === words.composed())
    let saidAtMute: number = counts.zero
    let saidAtUnmute: number = counts.zero
    for (let t: number = counts.zero; t < moments.end; t += moments.sample) {
      if (t === moments.mute) {
        player?.actions.voice(false)
        saidAtMute = heard.said().length
      }
      if (t === moments.unmute) {
        saidAtUnmute = heard.said().length
        player?.actions.voice(true)
      }
      time.turn(moments.sample)
    }
    const all = shown.moments()
    const held = all.filter((m) => m.holding)
    const byStep = new Map<number, MomentView[]>()
    for (const m of held) byStep.set(m.index, [...(byStep.get(m.index) ?? []), m])
    const spread = (ms: MomentView[]) => Math.max(...ms.flatMap((m) => ms.map((n) => Math.hypot(...m.body.head.map((v, k) => v - n.body.head[k])))))
    check(say.heldStill(), byStep.size === poses && [...byStep.values()].every((ms) => spread(ms) < movement.still))
    check(say.holdCounted(), [...byStep.values()].every(([start]) => start?.hold === words.breathsLeft(counts.previous(defaults.breaths))))
    const said = heard.said().map((s) => s.text)
    const starts = [...byStep.values()].flatMap(([start]) => (start?.speaking ? [start] : []))
    check(say.cueAtHold(), starts.length > counts.zero && starts.every((m) => said.includes(m.cue)))
    check(say.voiceOff(), saidAtUnmute === saidAtMute && all.some((m) => !m.speaking) && sequences.last(all)?.speaking === true)
    check(say.bowlRings(), rung.rung() === counts.next(poses) && sequences.last(all)?.done === true)
  },
})

/**
 * Learning a sequence
 * The sun salutation learnt: its first movement, then its first pose held the breaths a sequence learnt holds, its
 * landmarks drawn and listed while it is held; hidden, they are drawn no more.
 */
export const LearnTheSequence = scenario({
  owner: "ghalaax",
  verifies: [ShowHome, PlayPractice, PracticeOf, MomentOf, MarksOn, MarkOnBody, MarksChoice],
  env: Test,
  deps: {
    home: ShowHome, shown: ViewsShown, time: TimeTurned, defaults: HoldingDefaults, moments: HoldMoments, words: WordsEn, say: ScenarioChecks,
    sequences: Sequences, poses: Poses, preferences: PreferencesStore, names: PreferenceNames, counts: Counts,
  },
  body: ({ home, shown, time, defaults, moments, words, say, sequences, poses, preferences, names, counts }) => async (check) => {
    await home({ params: {} })
    const start = shown.last()
    const [sequence] = start?.view.sequences ?? []
    start?.actions.learn(sequence?.id ?? words.appName())
    const [first] = shown.moments()
    time.turn(moments.learnt)
    const now = sequences.last(shown.moments())
    check(say.learnHolds(), first?.holding === false && now?.holding === true && now.index === first.index && now.hold === words.breathsLeft(defaults.learning))
    const [pose] = poses
    time.turn(moments.learnt)
    const later = sequences.last(shown.moments())
    check(say.marksWhenStill(), now?.marks?.list.length === pose?.marks.length && later?.marks === now?.marks
      && (now?.marks?.stage.labels.length ?? counts.zero) >= (pose?.marks.length ?? counts.one) && (now?.marks?.stage.segments.length ?? counts.zero) > counts.zero)
    shown.player()?.actions.marks(false)
    const hidden = sequences.last(shown.moments())
    check(say.marksHidden(), hidden !== undefined && hidden.marks === undefined && !hidden.marking && preferences.get(names.marks) === String(false))
    shown.player()?.actions.marks(true)
    shown.player()?.actions.back()
  },
})

/**
 * Sequences drawn by lot
 * With twelve seeds, for three to twelve poses, every sequence drawn is as long as asked and makes sense; the same seed
 * draws the same one, different seeds different ones; played, each pose held one breath, every one keeps the body on
 * the floor.
 */
export const DrawnSequencesMakeSense = scenario({
  owner: "ghalaax",
  verifies: [DrawnSequence, ComposedSequence, MakesSense, LeadingLegOf, BreathOfMove, PracticeOf, MomentOf],
  env: Test,
  deps: {
    drawn: DrawnSequence, composed: ComposedSequence, practiceOf: PracticeOf, momentOf: MomentOf, poses: Poses, sense: MakesSense,
    heights: SurfaceHeights, touching: Touching, movement: Movement, moments: HoldMoments, say: ScenarioChecks, counts: Counts,
  },
  body: ({ drawn, composed, practiceOf, momentOf, poses, sense, heights, touching, movement, moments, say, counts }) => async (check) => {
    const all = moments.lengths.flatMap((length) => moments.seeds.map((seed) => ({ length, seed, drawn: drawn(poses, length, seed) })))
    check(say.drawnLong(), all.every((d) => d.drawn.length === d.length))
    check(say.drawnMakeSense(), all.every((d) => {
      const judged = sense(d.drawn)
      return judged.begins && judged.ends && judged.jumps.length + judged.backAndForth.length + judged.repeats.length === counts.zero
    }))
    const ids = (ps: readonly { id: string }[]) => ps.map((p) => p.id).join()
    check(say.drawnSame(), all.every((d) => ids(drawn(poses, d.length, d.seed)) === ids(d.drawn)))
    check(say.drawnVary(), new Set(all.filter((d) => d.length === moments.compared).map((d) => ids(d.drawn))).size >= moments.differentAtLeast)
    const lows = all.flatMap((d) => {
      const practice = practiceOf(composed(d.drawn), poses, undefined, counts.one)
      const found: number[] = []
      for (let t: number = counts.zero; t <= practice.total; t += moments.drawnSample)
        found.push(Math.min(...Object.values(heights(momentOf(practice, t, true, false, false).body))))
      return found
    })
    check(say.drawnOnFloor(), lows.length > counts.zero && lows.every((low) => low <= touching.within && low >= -movement.stepSink))
  },
})
