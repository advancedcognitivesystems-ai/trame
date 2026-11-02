/** Poselia · Composing */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { fn } from "#trame/kinds/function"
import { Counts } from "#std/algebra"
import { SeededDraws } from "#std/algorithms"
import { PractiseGuided, BreathPhase } from "./product"
import { KeyOf, BodyAt, LegsApart, MatSpace, type Shape } from "./body"
import { LevelWays, MakesSense, LeadingLegOf } from "./content"
import { Screen } from "./architecture"
import { InterfaceWords, AppLanguage, WordsFr, WordsEn } from "./language"
import { FigureDrawing, PoseBody } from "./drawing"
import { PlayPractice } from "./practice"

// A practice of poses held: the person chooses the poses, or lets the app draw them, and how many breaths each is held.
// A sequence makes sense when it goes from standing to standing, each pose reached in one movement from the one before,
// never back and forth (requirement "A sequence that makes sense", module content). The body rises on a breath in and
// lowers on a breath out. A draw is reproducible: the same seed, the same sequence.

/**
 * Rising on a breath in
 * The phase of the breath a body moves on from one pose to the next: it breathes in when it rises and opens (the head
 * and the hands higher, on average), and breathes out when it lowers and folds, or does not move.
 */
export const BreathOfMove = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { keyOf: KeyOf, bodyAt: BodyAt, g: MatSpace, counts: Counts },
  body: ({ keyOf, bodyAt, g, counts }) => (from: Shape, to: Shape): BreathPhase => {
    const height = (s: Shape) => {
      const k = keyOf(s)
      const b = bodyAt(k, k, counts.zero)
      const raised = [b.head, b.L.wrist, b.R.wrist]
      return raised.reduce<number>((sum, p) => sum + g.height(p), counts.zero) / raised.length
    }
    return height(to) > height(from) ? BreathPhase.inhale : BreathPhase.exhale
  },
})

/** Criteria of rising on a breath in */
export const BreathOfMoveCriteria = acceptance({
  accepts: BreathOfMove,
  owner: "ghalaax",
  criteria: (criterion) => {
    const together = { at: [0, 0.065, 0.06] as const, foot: 0, toes: 0 }
    const standing: Shape = { pelvis: [0, 0.93], spine: [90, 90, 90, 90], legs: together, arms: { at: [0.03, 0.86, 0.2], hand: -90, palm: 1 } }
    const raised: Shape = { ...standing, arms: { fromShoulders: { angle: 112, reach: 0.545, apart: 0.16 }, hand: 112, palm: 1 } }
    const folded: Shape = { pelvis: [-0.03, 0.915], spine: [-40, -95, -80, -88], legs: together, arms: { at: [0.03, 0.035, 0.2], hand: 0, palm: 0 } }
    criterion("Raising the arms is a breath in", () => BreathOfMove(standing, raised) === BreathPhase.inhale)
    criterion("Folding forward is a breath out", () => BreathOfMove(standing, folded) === BreathPhase.exhale)
    criterion("Not moving is a breath out", () => BreathOfMove(standing, standing) === BreathPhase.exhale)
  },
})

/**
 * What a composed practice holds
 * How many poses a composed practice has (eight, from three to twelve: going down to the floor and back up, one foot at
 * a time, takes seven) and how many breaths each is held (five, from one
 * to twenty); a sequence learnt holds each pose three breaths.
 */
export const HoldingDefaults = decision<{ count: number; fewest: number; most: number; breaths: number; least: number; longest: number; learning: number }>({
  owner: "ghalaax",
  value: { count: 8, fewest: 3, most: 12, breaths: 5, least: 1, longest: 20, learning: 3 },
  rejected: { "Holds in seconds": "the breath sets the pace: a hold lasts whole breaths, whatever the person's breath" },
})

/**
 * A sequence drawn by lot
 * Poses drawn one after the other with the seeded draws of the standard library: it starts at a standing pose; each
 * next pose keeps the sequence sensible and near enough to standing to end there with the poses left; a pose not yet
 * drawn, at another level, is likelier. A draw that runs into a dead end takes back its last pose and draws another, so
 * that it always ends standing. Of several draws, the most varied is kept (the most poses and levels it visits): eight
 * poses go down to the floor and come back up rather than stay standing. It touches nothing.
 */
export const DrawnSequence = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { draws: SeededDraws, ways: LevelWays, sense: MakesSense, counts: Counts },
  constants: {
    unseen: { value: 3, meaning: "How much likelier a pose not yet drawn is" },
    newLevel: { value: 4, meaning: "How much likelier a pose at another level is" },
    tries: { value: 12, meaning: "How many draws are made, of which the most varied is kept" },
  },
  body: code.file<typeof import("./code/drawn-sequence").default>("./code/drawn-sequence.ts"),
})

/**
 * A sequence composed
 * Poses chosen or drawn, as a sequence of one round: each step moves on the breath its movement takes (rising on a
 * breath in), the leading leg steps back or comes forward as the level before says, and the voice says the pose's
 * words. It touches nothing.
 */
export const ComposedSequence = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { breathOf: BreathOfMove, leading: LeadingLegOf, apart: LegsApart, fr: WordsFr, en: WordsEn, counts: Counts },
  constants: {
    id: { value: "composed", meaning: "The key of the sequence composed, which no sequence of the content has" },
    leg: { value: "right", meaning: "The leg that leads the one round of a sequence composed" },
  },
  body: code.file<typeof import("./code/composed-sequence").default>("./code/composed-sequence.ts"),
})

/**
 * The composer
 * What the composer shows, in the language the app speaks: how many poses to draw, how many breaths each is held, the
 * poses chosen (drawn small, each to take out), the poses to add, and what does not make sense, if anything. It touches
 * nothing.
 */
export const ComposerViewOf = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { words: InterfaceWords, language: AppLanguage, draw: FigureDrawing, pose: PoseBody, sense: MakesSense, leading: LeadingLegOf, counts: Counts },
  body: code.file<typeof import("./code/composer-view").default>("./code/composer-view.ts"),
})

/**
 * Show the composer
 * The composer, shown again after each change: fewer or more poses drawn again, shorter or longer holds, a new draw, a
 * pose added or taken out, all taken out; the person practises the sequence, each pose held, or goes back. What was
 * composed stays while the app runs.
 */
export const ShowComposer = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: {
    screen: Screen, view: ComposerViewOf, drawn: DrawnSequence, composed: ComposedSequence, defaults: HoldingDefaults, play: PlayPractice, counts: Counts,
  },
  body: code.file<typeof import("./code/show-composer").default>("./code/show-composer.ts"),
})

/**
 * Names of the composer
 * The classes the browser's screen gives the parts of the composer, which the style sheet styles.
 */
export const ComposerNames = decision<{ composer: string; counters: string; chosen: string; library: string; problems: string; actions: string }>({
  owner: "ghalaax",
  value: { composer: "composer", counters: "counters", chosen: "chosen", library: "library", problems: "problems", actions: "actions" },
})
