/** Poselia · The body */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { fn } from "#trame/kinds/function"
import { Vectors } from "#geometry/vectors"
import { Angle } from "#geometry/angles"
import { Counts, Texts } from "#std/algebra"
import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { PractiseGuided, CheckedContent } from "./product"

// The body a practice moves, in three dimensions, on the mat: x along the mat toward its front, y up, z toward the
// person's right. A pose is written as a teacher places a body: the pelvis on the mat, the four angles of the spine
// (lower back, chest, neck, head; 90 is upright, 0 points to the front of the mat), and where the hands and the feet
// go, with the angle of the feet, of the toes and of the hands. The trunk follows from its angles; each arm and each
// leg reaches its hand or its foot through two segments (inverse kinematics), its elbow or its knee bending the way a
// body bends. Between two poses, the pelvis and the spine turn in proportion; each hand and each foot goes around its
// shoulder or its hip, as the page "Salutation au soleil" moves them, a foot lifted when it steps far, a hand coming
// down onto its place; what stays where it is does not move.

/** The legs, as a step names the one that leads. */
export enum Leg { right = "right", left = "left" }

/** Where a leg stands, in a pose that sets the two apart: in front, or behind. */
export enum Stance { front = "front", back = "back" }

/** What a leg rests on: the whole foot (heel, ball and toes), the toes alone, the top of the foot, the knee. */
export enum LegRest { foot = "foot", toes = "toes", instep = "instep", knee = "knee" }

/** What the rest of the body rests on: the hands (flat), the chest, the pelvis, the head (the chin or the forehead). */
export enum BodyRest { hands = "hands", chest = "chest", pelvis = "pelvis", head = "head" }

/**
 * Where a body is, for what may follow: standing, folded forward, in a lunge, in a plank, as a downward dog, lying on
 * its front, kneeling, on all fours.
 */
export enum Level {
  standing = "standing", fold = "fold", lunge = "lunge", plank = "plank", dog = "dog", prone = "prone", kneeling = "kneeling", allFours = "allFours",
}

/** A point or a direction: along the mat, up, to the person's right, in metres. */
export type Vec = readonly [number, number, number]

/**
 * Where a foot goes: a point on the mat (its distance from the middle of the mat, whichever side), the angle of the
 * foot (0 flat, pointing forward; -70 on its toes behind the body; -180 pointing back, its top on the floor) and of the
 * toes; and what the leg rests on.
 */
export interface LegShape {
  at: Vec
  foot: number
  toes: number
  rests?: readonly LegRest[]
}

/**
 * Where a hand goes: a point on the mat (its distance from the middle, whichever side), or a reach from the shoulders
 * (its angle, how far, how far apart the hands are); the angle of the hand, and how far the palm turns in (0 flat, 1
 * facing the other).
 */
export type ArmShape =
  | { at: Vec; hand: number; palm: number }
  | { fromShoulders: { angle: number; reach: number; apart: number }; hand: number; palm: number }

/**
 * A pose: the pelvis on the mat (along it, its height), the four angles of the spine, where the hands go (both alike),
 * where the feet go (both alike, or the one in front and the one behind), and what the body rests on, besides the legs.
 */
export interface Shape {
  pelvis: readonly [number, number]
  spine: readonly [number, number, number, number]
  arms: ArmShape
  legs: LegShape | { front: LegShape; back: LegShape }
  rests?: readonly BodyRest[]
}

/** The trunk: the pelvis, the waist, the base and the top of the neck, the head, the shoulders and the hips, its directions. */
export interface Trunk {
  pelvis: Vec
  waist: Vec
  neckBase: Vec
  shoulders: Vec
  neckTop: Vec
  head: Vec
  face: Vec
  lowerBack: Vec
  chest: Vec
  neck: Vec
  headTilt: Vec
  shoulderL: Vec
  shoulderR: Vec
  hipL: Vec
  hipR: Vec
}

/** A foot or a hand as a keyframe places it: where it goes, and its angles. */
export interface FootKey { at: Vec; foot: number; toes: number }
export interface HandKey { at: Vec; hand: number; palm: number }

/** A pose ready to move: the pelvis, the spine, each foot and each hand by side, and the trunk it gives. */
export interface Keyframe {
  pelvis: readonly [number, number]
  spine: readonly [number, number, number, number]
  legs: { L: FootKey; R: FootKey }
  arms: { L: HandKey; R: HandKey }
  trunk: Trunk
  rests: readonly string[]
}

/** One side of the body, solved: the hip, the knee, the ankle and the foot, the shoulder, the elbow, the wrist and the hand, how far each limb reaches. */
export interface Side {
  hip: Vec
  knee: Vec
  ankle: Vec
  heel: Vec
  ball: Vec
  toe: Vec
  /** The foot's direction, its sole's normal, the toes' direction. */
  footAlong: Vec
  footUp: Vec
  toesAlong: Vec
  shoulder: Vec
  elbow: Vec
  wrist: Vec
  tip: Vec
  /** The hand's direction, and the direction its palm's width goes. */
  handAlong: Vec
  handAcross: Vec
  legReach: number
  armReach: number
}

/** The whole body at a moment: the trunk, each side, the nose. */
export interface Body extends Trunk {
  L: Side
  R: Side
  nose: Vec
}

/**
 * Measures of the body
 * The lengths of the mannequin, in metres, for a person of about 1.70 m: the segments (thigh, shin, arm, forearm, lower
 * back, chest, neck, head from the top of the neck to its middle), the half-widths of the hips and of the shoulders, how
 * far the shoulders sit below the base of the neck, the hand, the nose; the foot (from the ankle: the heel back and
 * down, the ball forward and down, the toes, the top up and forward); and how far the surface of the body is from its
 * points (the knee, the wrist, the head; the pelvis and the chest, as ellipses around their middle).
 */
export const BodyMeasures = decision<{
  thigh: number; shin: number; upperArm: number; forearm: number; lowerBack: number; chest: number; neck: number; head: number
  hips: number; shoulders: number; shoulderDrop: number; hand: number; nose: number
  heelBack: number; heelDown: number; ballForward: number; ballDown: number; toes: number; topUp: number; topForward: number
  kneeSurface: number; wristSurface: number; headSurface: number
  pelvisUp: number; pelvisAcross: number; pelvisAlong: number; chestUp: number; chestAcross: number; chestAlong: number
}>({
  owner: "ghalaax",
  value: {
    thigh: 0.44, shin: 0.43, upperArm: 0.29, forearm: 0.26, lowerBack: 0.25, chest: 0.25, neck: 0.09, head: 0.105,
    hips: 0.09, shoulders: 0.18, shoulderDrop: 0.04, hand: 0.17, nose: 0.1,
    heelBack: 0.06, heelDown: 0.065, ballForward: 0.13, ballDown: 0.06, toes: 0.06, topUp: 0.035, topForward: 0.05,
    kneeSurface: 0.054, wristSurface: 0.035, headSurface: 0.105,
    pelvisUp: 0.03, pelvisAcross: 0.1, pelvisAlong: 0.095, chestUp: 0.14, chestAcross: 0.105, chestAlong: 0.17,
  },
  rejected: { "Proportions as parts of the height, seen from the side": "a flat figure cannot turn, and its angles made it float between poses" },
})

/**
 * How a body moves
 * Between two poses: a hand or a foot that moves less than two centimetres stays where it is (it goes straight); a foot
 * that steps more than 35 cm is lifted 12 cm half way (only one foot steps that far at once: a way between levels that
 * would move both is not one, requirement "A sequence that makes sense"), and goes no lower than 3 cm on its way; a hand leaves its place
 * and comes down onto the next no flatter than 45°, and passes 4 cm above its places on its way, so that it never
 * slides on the floor; a foot keeps its ankle 3 cm above the floor and every point of its sole on it or above; a knee
 * resting sinks no more than 3.5 cm into the mat (the mannequin's knee is a ball bigger than a knee), and a knee
 * passing over it during a step no more than 10 cm, as the page lets it; a wrist stays 3.5 cm above the floor; the
 * elbows point a quarter outward; an arm nearly folded on itself bends backward.
 */
export const Movement = decision<{
  still: number; stride: number; lift: number; footFloor: number; landing: number; clearance: number; ankleClear: number; kneeGive: number; stepSink: number
  wristFloor: number
  elbowsOut: number; folded: number
}>({
  owner: "ghalaax",
  value: { still: 0.02, stride: 0.35, lift: 0.12, footFloor: 0.03, landing: 1, clearance: 0.04, ankleClear: 0.03, kneeGive: 0.035, stepSink: 0.1, wristFloor: 0.035, elbowsOut: 0.25, folded: 0.05 },
  rejected: {
    "A foot coming down onto its place at 45°, like a hand": "a foot stepping far rose 80 cm and swung around the hip",
    "Raising the foot until the knee clears the mat": "the leg stopped as the knee neared the mat, then caught up",
    "Turning the thigh and the shin from one pose to the next": "the foot went toward the hands, then forward between the arms",
    "Turning the knee outward where it would sink": "the knee swung 23 cm to the side",
  },
})

/**
 * Touching the floor
 * How close to the floor a point of the body's surface is said to rest on it: seven centimetres, since the mannequin's
 * segments are rounder than a body.
 */
export const Touching = decision<{ within: number }>({
  owner: "ghalaax",
  value: { within: 0.07 },
  rejected: { "Exactly on the floor": "a mannequin of cylinders and ellipses rests on its curves, never on a point" },
})

// Vectors, for the rules below.
const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
const sub = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const mul = (a: Vec, s: number): Vec => [a[0] * s, a[1] * s, a[2] * s]
const dot = (a: Vec, b: Vec) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const len = (a: Vec) => Math.sqrt(dot(a, a))
const unit = (a: Vec): Vec => mul(a, 1 / (len(a) || 1))
const mix = (a: number, b: number, t: number) => a + (b - a) * t
const mix3 = (a: Vec, b: Vec, t: number): Vec => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)]
/** A direction in the plane of the mat's length, by its angle from the front, in degrees. */
const toward = (degrees: number): Vec => [Math.cos((degrees * Math.PI) / 180), Math.sin((degrees * Math.PI) / 180), 0]

/**
 * The space of the mat
 * Poselia's points in geometry's vectors: along the mat, up from the floor, across it to the right; directions in the
 * plane of the mat's length by their angle from the front, in degrees.
 */
export const MatSpace = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { v: Vectors, angle: Angle, counts: Counts },
  body: code.file<typeof import("./code/mat-space").default>("./code/mat-space.ts"),
})

/**
 * The names of the sides
 * How a point of one side of the body is named in the rests of a pose: its side, then the point (R knee, L foot).
 */
export const SideNames = decision<{ right: string; left: string }>({
  owner: "ghalaax",
  value: { right: "R", left: "L" },
  rejected: { "The words right and left": "the rests of a pose would be longer to write, for no reader but the rules" },
})

/**
 * Where a spot of the body is
 * The sternum half way from the waist to the base of the neck; a point of both sides half way between them; a spot on
 * the floor a centimetre above it, so that a mark there is seen.
 */
export const SpotPlaces = decision<{ sternum: number; between: number; aboveFloor: number }>({
  owner: "ghalaax",
  value: { sternum: 0.5, between: 0.5, aboveFloor: 0.01 },
  rejected: { "On the floor itself": "a mark drawn at the height of the floor flickered through it" },
})

/**
 * The points of a rest
 * The points of the body each rest of a pose puts on the floor: a foot on its heel, ball and toes, the toes on the ball
 * and the toes, the instep on the top of the foot, a knee on the knee; the hands on the wrists and the finger tips, of
 * both sides; the chest, the pelvis, the head on themselves.
 */
export const RestPoints = decision<{ leg: Record<LegRest, string[]>; body: Record<BodyRest, string[]>; sided: BodyRest[] }>({
  owner: "ghalaax",
  value: {
    leg: { foot: ["heel", "ball", "toe"], toes: ["ball", "toe"], instep: ["top"], knee: ["knee"] },
    body: { hands: ["wrist", "tip"], chest: ["chest"], pelvis: ["pelvis"], head: ["head"] },
    sided: [BodyRest.hands],
  },
})

/**
 * How far a limb keeps from flat
 * A limb never folds flat on itself nor stretches quite straight, by a millimetre and a tenth of one: its middle joint
 * then always bends one way.
 */
export const LimbSlack = decision<{ folded: number; stretched: number }>({
  owner: "ghalaax",
  value: { folded: 1e-3, stretched: 1e-4 },
  rejected: { "Folding flat and stretching straight": "at either end the joint could bend either way, and flipped from one frame to the next" },
})

/**
 * The trunk from its angles
 * From the pelvis on the mat and the four angles of the spine: the waist at the end of the lower back, the base of the
 * neck at the end of the chest, the shoulders a little below it, the top of the neck, the middle of the head; the face
 * turned forward from the head's direction; the shoulders and the hips their half-widths to each side.
 */
export const TrunkOf = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { m: BodyMeasures, g: MatSpace },
  body: ({ m, g }) => (pelvis: readonly [number, number], spine: readonly [number, number, number, number]): Trunk => {
    const { add, mul, toward } = g
    const [alongMat, high] = pelvis
    const p: Vec = g.point(alongMat, high)
    const [lowerBack, chest, neck, headTilt] = spine.map((a) => toward(a))
    const waist = add(p, mul(lowerBack, m.lowerBack))
    const neckBase = add(waist, mul(chest, m.chest))
    const shoulders = add(neckBase, mul(chest, -m.shoulderDrop))
    const neckTop = add(neckBase, mul(neck, m.neck))
    return {
      pelvis: p, waist, neckBase, shoulders, neckTop, head: add(neckTop, mul(headTilt, m.head)), face: g.face(headTilt),
      lowerBack, chest, neck, headTilt,
      shoulderL: add(shoulders, g.right(-m.shoulders)), shoulderR: add(shoulders, g.right(m.shoulders)),
      hipL: add(p, g.right(-m.hips)), hipR: add(p, g.right(m.hips)),
    }
  },
})

/** Criteria of the trunk from its angles */
export const TrunkOfCriteria = acceptance({
  accepts: TrunkOf,
  owner: "ghalaax",
  criteria: (criterion) => {
    const m = BodyMeasures.value
    const near = (a: number, b: number) => Math.abs(a - b) < 1e-9
    const up = TrunkOf([0, 1], [90, 90, 90, 90])
    criterion("Upright, the head is above the pelvis by the lower back, the chest, the neck and the head",
      () => near(up.head[1] - up.pelvis[1], m.lowerBack + m.chest + m.neck + m.head) && near(up.head[0], 0))
    criterion("The hips and the shoulders are their half-widths to each side", () => near(up.hipR[2], m.hips) && near(up.shoulderL[2], -m.shoulders))
    criterion("Bent forward level, the head is in front of the pelvis", () => TrunkOf([0, 1], [0, 0, 0, 0]).head[0] > 0)
  },
})

/**
 * A limb reaches its end
 * Two segments from a joint toward a target: the end goes as far as the segments reach (never quite straight, never
 * folded flat), the middle joint bends to the side the pole says; and how far the target is, as a part of the limb's
 * length (more than 1: out of reach).
 */
export const TwoBones = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { g: MatSpace, slack: LimbSlack, counts: Counts },
  body: ({ g, slack, counts }) => (from: Vec, target: Vec, first: number, second: number, pole: Vec): { middle: Vec; end: Vec; reach: number } => {
    const { add, sub, mul, dot, len, unit } = g
    const d = sub(target, from)
    const distance = len(d)
    const along: Vec = distance > g.tolerance ? unit(d) : g.down
    const kept = Math.max(Math.abs(first - second) + slack.folded, Math.min(first + second - slack.stretched, distance))
    const a = (first * first - second * second + kept * kept) / (kept + kept)
    const h = Math.sqrt(Math.max(counts.zero, first * first - a * a))
    const side = sub(pole, mul(along, dot(pole, along)))
    const bend: Vec = len(side) < g.tolerance ? g.rightward : unit(side)
    return { middle: add(add(from, mul(along, a)), mul(bend, h)), end: add(from, mul(along, kept)), reach: distance / (first + second) }
  },
})

/** Criteria of a limb that reaches its end */
export const TwoBonesCriteria = acceptance({
  accepts: TwoBones,
  owner: "ghalaax",
  criteria: (criterion) => {
    const near = (a: number, b: number) => Math.abs(a - b) < 1e-6
    const r = TwoBones([0, 0, 0], [0.5, 0, 0], 0.4, 0.4, [0, 1, 0])
    criterion("Within reach, each segment keeps its length and the end reaches the target",
      () => near(len(r.middle), 0.4) && near(len(sub(r.end, r.middle)), 0.4) && near(r.end[0], 0.5))
    criterion("The middle joint bends toward the pole", () => r.middle[1] > 0)
    criterion("Out of reach, the end stops short and says so", () => TwoBones([0, 0, 0], [1, 0, 0], 0.4, 0.4, [0, 1, 0]).reach > 1)
  },
})

/**
 * Legs apart
 * Whether a pose sets the legs apart, one in front and one behind (a lunge), rather than giving both the same place.
 */
export const LegsApart = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: {},
  body: () => (shape: Shape): boolean => Stance.front in shape.legs,
})

/** Criteria of legs apart */
export const LegsApartCriteria = acceptance({
  accepts: LegsApart,
  owner: "ghalaax",
  criteria: (criterion) => {
    const leg = { at: [0, 0.065, 0.06] as const, foot: 0, toes: 0 }
    const arms = { at: [0.03, 0.86, 0.2] as const, hand: -90, palm: 1 }
    criterion("Feet together: not apart", () => !LegsApart({ pelvis: [0, 0.93], spine: [90, 90, 90, 90], legs: leg, arms }))
    criterion("One in front, one behind: apart", () => LegsApart({ pelvis: [0, 0.6], spine: [90, 90, 90, 90], legs: { front: leg, back: leg }, arms }))
  },
})

/**
 * A pose ready to move
 * A pose placed on the mat for a round: in a pose that sets the legs apart, the leg that leads the round takes the
 * stance the step gives it, the other leg the other; the right side to the right of the middle, the left side to the
 * left; hands raised from the shoulders placed from the trunk. Alone, a pose is seen as the right leg would lead it,
 * stepping back.
 */
export const KeyOf = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { trunkOf: TrunkOf, g: MatSpace, sides: SideNames, texts: Texts },
  body: ({ trunkOf, g, sides, texts }) => (shape: Shape, leading: Leg = Leg.right, stance: Stance = Stance.back): Keyframe => {
    const trunk = trunkOf(shape.pelvis, shape.spine)
    const other = (s: Stance) => (s === Stance.front ? Stance.back : Stance.front)
    const legs = Stance.front in shape.legs ? (shape.legs as Record<Stance, LegShape>) : { front: shape.legs as LegShape, back: shape.legs as LegShape }
    const right = leading === Leg.right ? legs[stance] : legs[other(stance)]
    const left = leading === Leg.right ? legs[other(stance)] : legs[stance]
    // A point written for the right side, mirrored across the mat for the left.
    const placed = ([along, high, across]: Vec, onLeft: boolean): Vec => g.add(g.point(along, high), g.right(onLeft ? -across : across))
    const foot = (l: LegShape, onLeft: boolean): FootKey => ({ at: placed(l.at, onLeft), foot: l.foot, toes: l.toes })
    const { at, fromShoulders } = shape.arms as Partial<{ at: Vec; fromShoulders: { angle: number; reach: number; apart: number } }>
    const { hand: handTurn, palm } = shape.arms
    const hand = (onLeft: boolean, shoulder: Vec): HandKey => {
      if (at !== undefined || fromShoulders === undefined) return { at: placed(at ?? g.down, onLeft), hand: handTurn, palm }
      const reach = g.mul(g.toward(fromShoulders.angle), fromShoulders.reach)
      return { at: placed([g.along(shoulder) + g.along(reach), g.height(shoulder) + g.height(reach), fromShoulders.apart], onLeft), hand: handTurn, palm }
    }
    const named = (side: string) => (r: string) => [side, r].join(texts.space)
    const rests = [...(shape.rests ?? []), ...(right.rests ?? []).map(named(sides.right)), ...(left.rests ?? []).map(named(sides.left))]
    return {
      pelvis: shape.pelvis, spine: shape.spine, trunk, rests,
      legs: { L: foot(left, true), R: foot(right, false) },
      arms: { L: hand(true, trunk.shoulderL), R: hand(false, trunk.shoulderR) },
    }
  },
})

/** Criteria of a pose ready to move */
export const KeyOfCriteria = acceptance({
  accepts: KeyOf,
  owner: "ghalaax",
  criteria: (criterion) => {
    const lunge: Shape = {
      pelvis: [-0.44, 0.33], spine: [22, 36, 50, 66], arms: { at: [0.03, 0.035, 0.2], hand: 0, palm: 0 },
      legs: { front: { at: [0, 0.065, 0.07], foot: 0, toes: 0 }, back: { at: [-1.205, 0.145, 0.1], foot: -70, toes: 0 } },
    }
    criterion("The right leg leading a step back takes the foot behind", () => KeyOf(lunge, Leg.right, Stance.back).legs.R.at[0] < KeyOf(lunge, Leg.right, Stance.back).legs.L.at[0])
    criterion("The left leg leading it, the left foot is behind", () => KeyOf(lunge, Leg.left, Stance.back).legs.L.at[0] < KeyOf(lunge, Leg.left, Stance.back).legs.R.at[0])
    criterion("The right hand is to the right of the middle, the left to the left", () => KeyOf(lunge).arms.R.at[2] > 0 && KeyOf(lunge).arms.L.at[2] < 0)
  },
})

/**
 * A hand on its way
 * Where a hand is, part of the way between two poses: one that moves less than the still distance goes straight;
 * otherwise it turns around its shoulder as the shoulder moves, its distance to it changing in proportion, never lower
 * than the lowest of its two places; and a place on the floor it leaves or comes to shapes its way: it is low only near
 * it, leaving it and coming down onto it at the landing slope, so that it never slides on the floor.
 */
export const HandOnItsWay = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { mv: Movement, g: MatSpace },
  body: ({ mv, g }) => (from: Vec, to: Vec, baseFrom: Vec, baseTo: Vec, base: Vec, t: number): Vec => {
    const { sub, len, mix, height, along, across } = g
    if (len(sub(from, to)) < mv.still) return g.mix3(from, to, t)
    const r0 = sub(from, baseFrom)
    const r1 = sub(to, baseTo)
    const d = g.toward(mix(g.heading(r0), g.heading(r1), t))
    const l = mix(g.planar(r0), g.planar(r1), t)
    const x = along(base) + along(d) * l
    const z = mix(across(from), across(to), t)
    // Only a place on the floor shapes the way: the hand leaves it and comes down onto it from above.
    const rise = (place: Vec) =>
      height(place) <= mv.wristFloor + mv.still ? height(place) + Math.min(mv.landing * Math.hypot(x - along(place), z - across(place)), mv.clearance) : -Infinity
    const rises = [rise(from), rise(to)].filter((r) => r > -Infinity)
    return g.at(x, Math.max(height(base) + height(d) * l, Math.min(height(from), height(to)), rises.length ? Math.min(...rises) : -Infinity), z)
  },
})

/** Criteria of a hand on its way */
export const HandOnItsWayCriteria = acceptance({
  accepts: HandOnItsWay,
  owner: "ghalaax",
  criteria: (criterion) => {
    const shoulder: Vec = [0.05, 1.4, 0.18]
    const raised: Vec = [0.3, 1.9, 0.16]
    const planted: Vec = [0.03, 0.035, 0.2]
    criterion("What does not move stays where it is", () => HandOnItsWay(planted, planted, shoulder, shoulder, shoulder, 0.5)[0] === planted[0])
    criterion("It ends where it goes", () => Math.abs(HandOnItsWay(raised, planted, shoulder, shoulder, shoulder, 1)[0] - planted[0]) < 1e-9)
    criterion("A hand coming down to the floor is low only above its place", () => [0.8, 0.9, 0.95, 0.98].every((t) => {
      const [x, y] = HandOnItsWay(raised, planted, shoulder, shoulder, shoulder, t)
      return y - planted[1] >= Math.min(Math.abs(x - planted[0]), Movement.value.clearance) - 0.01
    }))
  },
})

/** A foot by its angles: its direction, its sole's normal, the toes' direction, and how far above the floor its ankle must be. */
/**
 * How a foot's way is read
 * A direction from the hip to the foot past straight up (ninety degrees) is read the other way round, from behind, so
 * that a foot on its way passes below the hip.
 */
export const FootAngles = decision<{ wrapAbove: number }>({
  owner: "ghalaax",
  value: { wrapAbove: 90 },
  rejected: { "Straight behind (a hundred and eighty degrees)": "a foot stepping back swung forward and over before coming down" },
})

/**
 * A knee kept above the mat
 * A knee that would sink into the mat lifts the foot's aim by twice how deep it would sink, four times at most.
 */
export const KneeLift = decision<{ passes: number; overshoot: number }>({
  owner: "ghalaax",
  value: { passes: 4, overshoot: 2 },
  rejected: { "Lifting by how deep it sinks": "the knee came back up only half way, each pass" },
})

/**
 * A foot from its angles
 * The direction along the foot and the one up from its sole, from the angle of the foot and of the toes; how far the
 * ankle must stay above the floor for no point of the sole to go below it.
 */
export const FootOf = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { m: BodyMeasures, mv: Movement, g: MatSpace },
  body: ({ m, mv, g }) => (foot: number, toes: number) => {
    const { height } = g
    const along = g.toward(foot)
    const up = g.normal(along)
    const toesAlong = g.toward(toes)
    const ballDrop = -m.ballDown * height(up) + m.ballForward * height(along)
    const below = -Math.min(
      -m.heelDown * height(up) - m.heelBack * height(along), ballDrop, ballDrop + m.toes * height(toesAlong),
      m.topUp * height(up) + m.topForward * height(along), -mv.ankleClear,
    )
    return { along, up, toesAlong, below }
  },
})

const footOf = (foot: number, toes: number) => {
  const m = BodyMeasures.value
  const along = toward(foot)
  const up: Vec = [-along[1], along[0], 0]
  const toesAlong = toward(toes)
  const ballDrop = -m.ballDown * up[1] + m.ballForward * along[1]
  const below = -Math.min(
    -m.heelDown * up[1] - m.heelBack * along[1], ballDrop, ballDrop + m.toes * toesAlong[1],
    m.topUp * up[1] + m.topForward * along[1], -Movement.value.ankleClear,
  )
  return { along, up, toesAlong, below }
}

/**
 * A leg on its foot
 * A leg whose foot stands where it is put, at its angles: the ankle raised if any point of the sole, the top of the foot
 * or the ankle would go under the floor, the knee bending forward, and the foot raised again if the knee would sink
 * deeper than the mat gives.
 */
export const PlantedLeg = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { m: BodyMeasures, mv: Movement, g: MatSpace, feet: FootOf, twoBones: TwoBones, lift: KneeLift, counts: Counts },
  body: ({ m, mv, g, feet, twoBones, lift, counts }) => (hip: Vec, foot: FootKey): { knee: Vec; ankle: Vec; reach: number } => {
    const { height, along, across } = g
    const { below } = feet(foot.foot, foot.toes)
    const legTo = (target: Vec) => {
      const pole = g.normal(g.sub(target, hip))
      return twoBones(hip, target, m.thigh, m.shin, g.len(pole) < g.tolerance ? g.toward(counts.zero) : pole)
    }
    let aim: Vec = g.at(along(foot.at), Math.max(height(foot.at), below), across(foot.at))
    let leg = legTo(aim)
    // A knee that would sink into the mat lifts the foot's aim, a few times at most.
    for (let pass: number = counts.zero; pass < lift.passes && height(leg.middle) - m.kneeSurface < -mv.kneeGive; pass = counts.next(pass)) {
      aim = g.add(aim, g.point(counts.zero, lift.overshoot * (m.kneeSurface - mv.kneeGive - height(leg.middle))))
      leg = legTo(aim)
    }
    return { knee: leg.middle, ankle: leg.end, reach: leg.reach }
  },
})

/** Criteria of a leg on its foot */
export const PlantedLegCriteria = acceptance({
  accepts: PlantedLeg,
  owner: "ghalaax",
  criteria: (criterion) => {
    const m = BodyMeasures.value
    const standing = PlantedLeg([0, 0.93, 0.09], { at: [0, 0.065, 0.06], foot: 0, toes: 0 })
    criterion("Standing, the ankle is where the foot puts it and the knee above it", () => Math.abs(standing.ankle[1] - 0.065) < 1e-6 && standing.knee[1] > standing.ankle[1])
    criterion("A foot put under the floor stands on it", () => PlantedLeg([0, 0.93, 0.09], { at: [0, -0.2, 0.06], foot: 0, toes: 0 }).ankle[1] >= m.heelDown - 1e-6)
  },
})

/**
 * A foot on its way
 * Where a foot is, part of the way between two poses, as the page "Salutation au soleil" moves it: one that moves less
 * than the still distance goes straight; otherwise it turns around its hip as the hip moves, its distance to it
 * changing in proportion, never lower than the lowest of its two places nor than its floor height, and a foot that steps
 * far is lifted half way.
 */
export const FootOnItsWay = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { mv: Movement, g: MatSpace, angles: FootAngles, counts: Counts },
  body: ({ mv, g, angles, counts }) => (from: Vec, to: Vec, hipFrom: Vec, hipTo: Vec, hip: Vec, t: number): Vec => {
    const { sub, len, mix, height, along, across } = g
    if (len(sub(from, to)) < mv.still) return g.mix3(from, to, t)
    // A foot below the hip is read from behind past straight up, so that its way turns down, not over the head.
    const angle = (v: Vec) => {
      const a = g.heading(v)
      return a > angles.wrapAbove ? a - g.turn : a
    }
    const r0 = sub(from, hipFrom)
    const r1 = sub(to, hipTo)
    const d = g.toward(mix(angle(r0), angle(r1), t))
    const l = mix(g.planar(r0), g.planar(r1), t)
    const stride = Math.hypot(along(to) - along(from), across(to) - across(from))
    const lift = stride > mv.stride ? mv.lift * g.arch(t) : counts.zero
    return g.at(along(hip) + along(d) * l, Math.max(height(hip) + height(d) * l, Math.min(height(from), height(to), mv.footFloor)) + lift, mix(across(from), across(to), t))
  },
})

/** Criteria of a foot on its way */
export const FootOnItsWayCriteria = acceptance({
  accepts: FootOnItsWay,
  owner: "ghalaax",
  criteria: (criterion) => {
    const hip: Vec = [0, 0.9, 0.1]
    const here: Vec = [0, 0.065, 0.1]
    const back: Vec = [-1.2, 0.145, 0.1]
    criterion("What does not move stays where it is", () => FootOnItsWay(here, here, hip, hip, hip, 0.5)[0] === here[0])
    criterion("A foot stepping far back is lifted half way", () => FootOnItsWay(here, back, hip, hip, hip, 0.5)[1] > back[1])
    criterion("It ends where it goes", () => Math.abs(FootOnItsWay(here, back, hip, hip, hip, 1)[0] - back[0]) < 1e-9)
  },
})

/**
 * A leg that steps
 * A leg whose foot is on its way reaches it as the page "Salutation au soleil" moves it: the ankle raised if the sole
 * would go under the floor, the knee bending forward. Its knee may pass into the mat on the way, up to the depth a step
 * may sink: the foot keeps its way and its pace.
 */
export const SteppingLeg = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { m: BodyMeasures, g: MatSpace, twoBones: TwoBones, counts: Counts },
  body: ({ m, g, twoBones, counts }) => (hip: Vec, aim: Vec, footBelow: number): { knee: Vec; ankle: Vec; reach: number } => {
    const target: Vec = g.at(g.along(aim), Math.max(g.height(aim), footBelow), g.across(aim))
    const normal = g.normal(g.sub(target, hip))
    const pole = g.len(normal) < g.tolerance ? g.toward(counts.zero) : normal
    const leg = twoBones(hip, target, m.thigh, m.shin, pole)
    return { knee: leg.middle, ankle: leg.end, reach: leg.reach }
  },
})

/** Criteria of a leg that steps */
export const SteppingLegCriteria = acceptance({
  accepts: SteppingLeg,
  owner: "ghalaax",
  criteria: (criterion) => {
    const near = (a: number, b: number) => Math.abs(a - b) < 1e-6
    const standing = SteppingLeg([0, 0.93, 0.09], [0, 0.065, 0.06], 0.065)
    criterion("Within reach, the ankle is where the foot is going and the knee bends forward", () => near(standing.ankle[1], 0.065) && standing.knee[1] > standing.ankle[1])
    criterion("A foot going under the floor is kept on it", () => SteppingLeg([0, 0.93, 0.09], [0, -0.1, 0.06], 0.065).ankle[1] >= 0.065 - 1e-6)
  },
})

/**
 * The body between two poses
 * Part of the way from one pose to the next: the pelvis and the spine in proportion; each leg on its foot where the foot
 * stays, stepping where it goes elsewhere; each hand on its way, its wrist above the floor, its elbow pointing back and
 * a little outward; the foot, the toes and the hand turning in proportion.
 */
export const BodyAt = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: {
    m: BodyMeasures, mv: Movement, g: MatSpace, trunkOf: TrunkOf, feet: FootOf, stepping: SteppingLeg, footWay: FootOnItsWay,
    planted: PlantedLeg, handWay: HandOnItsWay, twoBones: TwoBones,
  },
  body: ({ m, mv, g, trunkOf, feet, stepping, footWay, planted, handWay, twoBones }) => (from: Keyframe, to: Keyframe, t: number): Body => {
    const { add, sub, mul, dot, len, unit, mix, mix3 } = g
    const [along0, high0] = from.pelvis
    const [along1, high1] = to.pelvis
    const pelvis: readonly [number, number] = [mix(along0, along1, t), mix(high0, high1, t)]
    const spine = from.spine.map((v, i) => mix(v, to.spine[i], t)) as unknown as readonly [number, number, number, number]
    const trunk = trunkOf(pelvis, spine)
    const side = (onLeft: boolean): Side => {
      const hipOf = (k: Trunk) => (onLeft ? k.hipL : k.hipR)
      const shoulderOf = (k: Trunk) => (onLeft ? k.shoulderL : k.shoulderR)
      // The leg: on its foot if the foot stays, stepping if it goes elsewhere.
      const f0 = onLeft ? from.legs.L : from.legs.R
      const f1 = onLeft ? to.legs.L : to.legs.R
      const hip = hipOf(trunk)
      const { along: footAlong, up: footUp, toesAlong, below } = feet(mix(f0.foot, f1.foot, t), mix(f0.toes, f1.toes, t))
      const moving = len(sub(f0.at, f1.at)) >= mv.still
      const leg = moving
        ? stepping(hip, footWay(f0.at, f1.at, hipOf(from.trunk), hipOf(to.trunk), hip, t), below)
        : planted(hip, { at: mix3(f0.at, f1.at, t), foot: mix(f0.foot, f1.foot, t), toes: mix(f0.toes, f1.toes, t) })
      const ankle = leg.ankle
      const heel = add(add(ankle, mul(footUp, -m.heelDown)), mul(footAlong, -m.heelBack))
      const ball = add(add(ankle, mul(footUp, -m.ballDown)), mul(footAlong, m.ballForward))
      // The arm.
      const h0 = onLeft ? from.arms.L : from.arms.R
      const h1 = onLeft ? to.arms.L : to.arms.R
      const shoulder = shoulderOf(trunk)
      const reach = handWay(h0.at, h1.at, shoulderOf(from.trunk), shoulderOf(to.trunk), shoulder, t)
      const wristAim: Vec = g.at(g.along(reach), Math.max(g.height(reach), mv.wristFloor), g.across(reach))
      const w = sub(wristAim, shoulder)
      const back: Vec = g.planar(w) < mv.folded ? g.backward : g.face(w)
      const armPole = add(unit(back), g.right(onLeft ? -mv.elbowsOut : mv.elbowsOut))
      const arm = twoBones(shoulder, wristAim, m.upperArm, m.forearm, armPole)
      const handAlong = g.toward(mix(h0.hand, h1.hand, t))
      const across = unit(mix3(g.rightward, g.normal(handAlong), mix(h0.palm, h1.palm, t)))
      return {
        hip, knee: leg.knee, ankle, heel, ball, toe: add(ball, mul(toesAlong, m.toes)), footAlong, footUp, toesAlong,
        shoulder, elbow: arm.middle, wrist: arm.end, tip: add(arm.end, mul(handAlong, m.hand)), handAlong,
        handAcross: unit(sub(across, mul(handAlong, dot(across, handAlong)))),
        legReach: leg.reach, armReach: arm.reach,
      }
    }
    return { ...trunk, L: side(true), R: side(false), nose: add(trunk.head, mul(trunk.face, m.nose)) }
  },
})

/** Criteria of the body between two poses */
export const BodyAtCriteria = acceptance({
  accepts: BodyAt,
  owner: "ghalaax",
  criteria: (criterion) => {
    const m = BodyMeasures.value
    const standing: Shape = {
      pelvis: [0, 0.93], spine: [90, 90, 90, 90],
      legs: { at: [0, 0.065, 0.06], foot: 0, toes: 0 }, arms: { at: [0.2, 1.16, 0.035], hand: 80, palm: 1 },
    }
    const k = KeyOf(standing)
    const b = BodyAt(k, k, 0)
    criterion("Standing, the heels are on the floor and the knees above the ankles", () => Math.abs(b.R.heel[1]) < 1e-3 && b.R.knee[1] > b.R.ankle[1])
    criterion("Each segment keeps its length", () => Math.abs(len(sub(b.L.knee, b.L.hip)) - m.thigh) < 1e-6 && Math.abs(len(sub(b.L.elbow, b.L.shoulder)) - m.upperArm) < 1e-6)
    criterion("The right side is to the right of the middle", () => b.R.ankle[2] > 0 && b.L.ankle[2] < 0)
    const low: Shape = { ...standing, legs: { at: [0, -0.2, 0.06], foot: 0, toes: 0 } }
    criterion("A foot placed under the floor is raised onto it", () => {
      const k2 = KeyOf(low)
      return BodyAt(k2, k2, 0).R.heel[1] >= -1e-9
    })
    const lunge: Shape = {
      pelvis: [-0.44, 0.33], spine: [22, 36, 50, 66], arms: { at: [0.03, 0.035, 0.2], hand: 0, palm: 0 },
      legs: { front: { at: [0, 0.065, 0.07], foot: 0, toes: 0 }, back: { at: [-1.205, 0.145, 0.1], foot: -70, toes: 0 } },
    }
    const plank: Shape = { pelvis: [-0.404, 0.428], spine: [19.3, 19.3, 22, 15], arms: lunge.arms, legs: { at: [-1.21, 0.145, 0.08], foot: -70, toes: 0 } }
    criterion("Stepping back from a lunge to a plank, the front knee sinks no deeper than a step may", () => {
      const a = KeyOf(lunge)
      const z = KeyOf(plank)
      return [0.25, 0.5, 0.55, 0.75].every((t) => BodyAt(a, z, t).L.knee[1] - m.kneeSurface >= -Movement.value.stepSink - 1e-6)
    })
  },
})

/**
 * The heights of the body's surface
 * The points of the body's surface that may rest on the floor, by name, and their height: the pelvis and the chest at
 * the lowest of their curves, the head, and for each side the heel, the ball, the toes, the top of the foot, the knee,
 * the wrist and the fingertips.
 */
export const SurfaceHeights = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { m: BodyMeasures, g: MatSpace, sides: SideNames, texts: Texts },
  body: ({ m, g, sides, texts }) => (body: Body): Record<string, number> => {
    const { add, mul, height } = g
    const lowest = (centre: Vec, across: Vec, along: Vec, a: number, b: number) => height(centre) - Math.hypot(a * height(across), b * height(along))
    const heights: Record<string, number> = {
      [Point.pelvis]: lowest(add(body.pelvis, mul(body.lowerBack, m.pelvisUp)), g.face(body.lowerBack), body.lowerBack, m.pelvisAcross, m.pelvisAlong),
      [Surface.chest]: lowest(add(body.waist, mul(body.chest, m.chestUp)), g.face(body.chest), body.chest, m.chestAcross, m.chestAlong),
      [Point.head]: height(body.head) - m.headSurface,
    }
    for (const [side, x] of [[sides.left, body.L], [sides.right, body.R]] as const) {
      const at = (point: string) => [side, point].join(texts.space)
      heights[at(Point.heel)] = height(x.heel)
      heights[at(Point.ball)] = height(x.ball)
      heights[at(Point.toe)] = height(x.toe)
      heights[at(Surface.top)] = height(x.ankle) + m.topUp * height(x.footUp) + m.topForward * height(x.footAlong)
      heights[at(Point.knee)] = height(x.knee) - m.kneeSurface
      heights[at(Point.wrist)] = height(x.wrist) - m.wristSurface
      heights[at(Point.tip)] = height(x.tip) - m.wristSurface
    }
    return heights
  },
})

/** Criteria of the heights of the body's surface */
export const SurfaceHeightsCriteria = acceptance({
  accepts: SurfaceHeights,
  owner: "ghalaax",
  criteria: (criterion) => {
    const standing: Shape = {
      pelvis: [0, 0.93], spine: [90, 90, 90, 90],
      legs: { at: [0, 0.065, 0.06], foot: 0, toes: 0 }, arms: { at: [0.2, 1.16, 0.035], hand: 80, palm: 1 },
    }
    const k = KeyOf(standing)
    const h = SurfaceHeights(BodyAt(k, k, 0))
    criterion("Standing, the heels are on the floor", () => Math.abs(h["L heel"]) < 1e-3 && Math.abs(h["R heel"]) < 1e-3)
    criterion("Standing, the head is far above it", () => h.head > 1)
  },
})

/**
 * A pose rests on what it names
 * The points of the body's surface within touching distance of the floor are exactly those the pose names: a whole
 * foot is its heel, its ball and its toes, the toes alone leave the heel up, the top of the foot is its top, a hand flat
 * is the wrist and the fingertips, the chest and the pelvis their lowest curve, the head its own. It gives what is
 * wrong: the points named that do not touch, the points that touch unnamed.
 */
export const RestsOnWhatItNames = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided, CheckedContent],
  deps: { keyOf: KeyOf, bodyAt: BodyAt, surfaces: SurfaceHeights, points: RestPoints, sides: SideNames, touching: Touching, texts: Texts, counts: Counts },
  body: ({ keyOf, bodyAt, surfaces, points, sides, touching, texts, counts }) => (shape: Shape): { notTouching: string[]; unnamed: string[] } => {
    const k = keyOf(shape)
    const heights = surfaces(bodyAt(k, k, counts.zero))
    const at = (side: string) => (point: string) => [side, point].join(texts.space)
    const ofBody = (rest: BodyRest) => (points.sided.includes(rest) ? [sides.left, sides.right].flatMap((side) => points.body[rest].map(at(side))) : points.body[rest])
    const named = new Set(k.rests.flatMap((r) => {
      const [side, rest] = r.split(texts.space)
      return rest === undefined ? ofBody(side as BodyRest) : points.leg[rest as LegRest].map(at(side))
    }))
    const touches = (n: string) => heights[n] <= touching.within
    return {
      notTouching: [...named].filter((n) => !touches(n)),
      unnamed: Object.keys(heights).filter((n) => touches(n) && !named.has(n)),
    }
  },
})

/** Criteria of a pose that rests on what it names */
export const RestsOnWhatItNamesCriteria = acceptance({
  accepts: RestsOnWhatItNames,
  owner: "ghalaax",
  criteria: (criterion) => {
    const standing: Shape = {
      pelvis: [0, 0.93], spine: [90, 90, 90, 90],
      legs: { at: [0, 0.065, 0.06], foot: 0, toes: 0, rests: [LegRest.foot] }, arms: { at: [0.2, 1.16, 0.035], hand: 80, palm: 1 },
    }
    const wrong = (s: Shape) => RestsOnWhatItNames(s)
    criterion("Standing on the feet, as it says: nothing wrong", () => wrong(standing).notTouching.length === 0 && wrong(standing).unnamed.length === 0)
    criterion("Standing, but saying the hands rest: the wrists and the fingertips do not touch",
      () => wrong({ ...standing, rests: [BodyRest.hands] }).notTouching.join() === "L wrist,L tip,R wrist,R tip")
    criterion("Standing, naming nothing: the heels, the balls and the toes touch unnamed",
      () => wrong({ ...standing, legs: { at: [0, 0.065, 0.06], foot: 0, toes: 0 } }).unnamed.length === 6)
  },
})

/**
 * Every limb reaches
 * In a pose, each arm reaches its hand and each leg its foot: where a pose puts a hand or a foot farther than the limb
 * is long, the limb would be stretched straight short of it, and the pose would not be the one written. It gives how far
 * the farthest limb reaches, as a part of its length.
 */
export const LimbsReach = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided, CheckedContent],
  deps: { keyOf: KeyOf, bodyAt: BodyAt, counts: Counts },
  body: ({ keyOf, bodyAt, counts }) => (shape: Shape): number => {
    const k = keyOf(shape)
    const b = bodyAt(k, k, counts.zero)
    return Math.max(b.L.legReach, b.R.legReach, b.L.armReach, b.R.armReach)
  },
})

/** Criteria of every limb that reaches */
export const LimbsReachCriteria = acceptance({
  accepts: LimbsReach,
  owner: "ghalaax",
  criteria: (criterion) => {
    const standing: Shape = {
      pelvis: [0, 0.93], spine: [90, 90, 90, 90],
      legs: { at: [0, 0.065, 0.06], foot: 0, toes: 0 }, arms: { at: [0.2, 1.16, 0.035], hand: 80, palm: 1 },
    }
    criterion("Standing, every limb reaches", () => LimbsReach(standing) <= 1)
    criterion("Hands on the floor while standing upright: out of reach", () => LimbsReach({ ...standing, arms: { at: [0.03, 0.035, 0.2], hand: 0, palm: 0 } }) > 1)
  },
})

// Landmarks ---------------------------------------------------------------------------------------

/** The points of the body a landmark names: a joint of a side, or a point of the trunk (the sternum half way up the chest). */
/** The surfaces of the body a pose may rest on that are not points: the chest, the top of a foot. */
export enum Surface { chest = "chest", top = "top" }

export enum Point {
  hip = "hip", knee = "knee", ankle = "ankle", heel = "heel", ball = "ball", toe = "toe", shoulder = "shoulder", elbow = "elbow", wrist = "wrist", tip = "tip",
  pelvis = "pelvis", waist = "waist", sternum = "sternum", neckBase = "neckBase", shoulders = "shoulders", neckTop = "neckTop", head = "head", nose = "nose",
}

/** Which side a joint is taken on: the left, the right, half way between both, the leg in front or the leg behind. */
export enum Which { left = "left", right = "right", both = "both", front = "front", back = "back" }

/** A spot a landmark names: a point of the body, on a side, brought down to the floor or not, moved by a little. */
export interface Spot {
  at: Point
  side?: Which
  floor?: boolean
  shift?: Vec
}

/** The sides of the leg in front and of the leg behind, for a round. */
export type Sides = { front: "L" | "R"; back: "L" | "R" }

/**
 * The legs in front and behind
 * In a pose that sets the legs apart, the leg that leads the round is in front when its stance says so, the other
 * behind; in a pose with the feet together, the leg that leads is said in front.
 */
export const SidesOf = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { sides: SideNames },
  body: ({ sides }) => (leading: Leg, stance?: Stance): Sides => {
    const lead = (leading === Leg.right ? sides.right : sides.left) as Sides["front"]
    const other = (leading === Leg.right ? sides.left : sides.right) as Sides["front"]
    return stance === Stance.back ? { front: other, back: lead } : { front: lead, back: other }
  },
})

/** Criteria of the legs in front and behind */
export const SidesOfCriteria = acceptance({
  accepts: SidesOf,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("The right leg stepping back: the left in front", () => SidesOf(Leg.right, Stance.back).front === "L")
    criterion("The left leg coming forward: the left in front", () => SidesOf(Leg.left, Stance.front).front === "L")
  },
})

/**
 * Where a spot is
 * The point a spot names on a body: a joint on its side (half way between both sides when it says both, or no side),
 * a point of the trunk; on the floor below it if it says so (a centimetre above, to be seen); moved by its shift.
 */
export const SpotOn = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { g: MatSpace, places: SpotPlaces, names: SideNames },
  body: ({ g, places, names }) => (body: Body, spot: Spot, sides: Sides): Vec => {
    const trunk: Partial<Record<Point, Vec>> = {
      [Point.pelvis]: body.pelvis, [Point.waist]: body.waist, [Point.neckBase]: body.neckBase, [Point.shoulders]: body.shoulders,
      [Point.neckTop]: body.neckTop, [Point.head]: body.head, [Point.nose]: body.nose,
      [Point.sternum]: g.mix3(body.waist, body.neckBase, places.sternum),
    }
    const joint = (onLeft: boolean) => (onLeft ? body.L : body.R)[spot.at as keyof Side] as Vec
    const onLeft = (side: Which): boolean =>
      side === Which.left || (side === Which.front && sides.front === names.left) || (side === Which.back && sides.back === names.left)
    const named = trunk[spot.at]
    const p = named ?? (spot.side === undefined || spot.side === Which.both ? g.mix3(joint(true), joint(false), places.between) : joint(onLeft(spot.side)))
    const down: Vec = spot.floor ? g.at(g.along(p), places.aboveFloor, g.across(p)) : p
    return spot.shift ? g.add(down, spot.shift) : down
  },
})

/** Criteria of where a spot is */
export const SpotOnCriteria = acceptance({
  accepts: SpotOn,
  owner: "ghalaax",
  criteria: (criterion) => {
    const standing: Shape = { pelvis: [0, 0.93], spine: [90, 90, 90, 90], legs: { at: [0, 0.065, 0.06], foot: 0, toes: 0 }, arms: { at: [0.03, 0.86, 0.2], hand: -90, palm: 1 } }
    const k = KeyOf(standing)
    const b = BodyAt(k, k, 0)
    const sides: Sides = { front: "R", back: "L" }
    criterion("Both knees: half way between them, in the middle", () => Math.abs(SpotOn(b, { at: Point.knee, side: Which.both }, sides)[2]) < 1e-9)
    criterion("The leg in front: its side", () => SpotOn(b, { at: Point.ankle, side: Which.front }, sides)[2] > 0)
    criterion("On the floor: a centimetre above it", () => SpotOn(b, { at: Point.head, floor: true }, sides)[1] === 0.01)
    criterion("Moved by its shift", () => Math.abs(SpotOn(b, { at: Point.pelvis, shift: [0.3, 0, 0] }, sides)[0] - b.pelvis[0] - 0.3) < 1e-9)
  },
})

/**
 * The angle at a joint
 * The angle between the directions from a joint to two points, in degrees, from 0 to 180.
 */
export const AngleBetween = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  deps: { g: MatSpace },
  body: ({ g }) => (at: Vec, from: Vec, to: Vec): number => g.angleAt(at, from, to),
})

/** Criteria of the angle at a joint */
export const AngleBetweenCriteria = acceptance({
  accepts: AngleBetween,
  owner: "ghalaax",
  criteria: (criterion) => {
    criterion("Square: ninety degrees", () => Math.abs(AngleBetween([0, 0, 0], [1, 0, 0], [0, 1, 0]) - 90) < 1e-9)
    criterion("Straight: a hundred and eighty", () => Math.abs(AngleBetween([0, 0, 0], [1, 0, 0], [-2, 0, 0]) - 180) < 1e-9)
  },
})
