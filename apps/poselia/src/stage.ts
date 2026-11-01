/** Poselia · The stage */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { implementation } from "#trame/kinds/implementation"
import { pkg } from "#trame/kinds/package"
import { Counts } from "#std/algebra"
import { Html } from "#std/html"
import { Stage } from "./architecture"

// The body in three dimensions, as the page "Salutation au soleil" shows it: a wooden mannequin on a mat, at dawn,
// its shadow on the floor, seen from three quarters, from the side, from the front or from above, and turned with a
// finger. The scene is drawn by three.js, bundled into the page: it opens without a network.

/**
 * three.js
 * Draws the scene in WebGL: the mannequin's segments and joints, the mat, the light and the shadows.
 */
export const ThreePackage = pkg({ owner: "ghalaax", packageName: "three", version: "0.186.0", url: "https://www.npmjs.com/package/three", declaredEffects: ["display"] })

/**
 * three.js, its types
 * The declarations TypeScript checks the stage's code against.
 */
export const ThreeTypes = pkg({ owner: "ghalaax", packageName: "@types/three", version: "0.186.0", url: "https://www.npmjs.com/package/@types/three" })

/**
 * Look of the mannequin
 * A wooden mannequin: the colour and the roughness of its wood and of its joints; the radii of each segment (at its two
 * ends) and of each joint, in metres; the hands, the feet, the toes, the pelvis and the chest as ellipsoids (where their
 * middle is from their joint, and their half-sizes); how round the shapes are drawn; a segment's mesh sits at its
 * middle.
 */
export const MannequinLook = decision<{
  wood: number; woodRoughness: number; joint: number; jointRoughness: number
  thigh: [number, number]; shin: [number, number]; upperArm: [number, number]; forearm: [number, number]
  abdomen: [number, number]; shoulderBar: [number, number]; neck: [number, number]
  hip: number; knee: number; ankle: number; shoulder: number; elbow: number; wrist: number; waist: number; head: number; nose: number
  handForward: number; hand: [number, number, number]; footDown: number; footForward: number; foot: [number, number, number]
  toesForward: number; toes: [number, number, number]; pelvisUp: number; pelvis: [number, number, number]; chestUp: number; chest: [number, number, number]
  limbSides: number; sphereSides: [number, number]; ellipseSides: [number, number]; middle: number; shortest: number
}>({
  owner: "ghalaax",
  value: {
    wood: 0xddba8c, woodRoughness: 0.62, joint: 0xb8895a, jointRoughness: 0.5,
    thigh: [0.068, 0.052], shin: [0.05, 0.037], upperArm: [0.047, 0.038], forearm: [0.036, 0.029],
    abdomen: [0.1, 0.095], shoulderBar: [0.05, 0.05], neck: [0.042, 0.04],
    hip: 0.066, knee: 0.054, ankle: 0.038, shoulder: 0.055, elbow: 0.042, wrist: 0.031, waist: 0.095, head: 0.105, nose: 0.024,
    handForward: 0.08, hand: [0.085, 0.017, 0.04], footDown: 0.035, footForward: 0.035, foot: [0.115, 0.035, 0.045],
    toesForward: 0.03, toes: [0.036, 0.02, 0.042], pelvisUp: 0.03, pelvis: [0.1, 0.095, 0.155], chestUp: 0.14, chest: [0.105, 0.17, 0.15],
    limbSides: 20, sphereSides: [24, 16], ellipseSides: [28, 18], middle: 0.5, shortest: 1e-4,
  },
  rejected: { "A body with skin and muscles": "a mannequin shows the angles of the joints, which is what a pose is" },
})

/**
 * Light of the stage
 * The light of the scene: the sky and the ground of the ambient light, and how strong it is; the sun, its colour, how
 * strong, where it is and where it aims, its shadows (their sharpness, the space they cover, their bias); the floor
 * that receives the shadow; the mat, its size, where it lies, its colour and roughness; the camera's lens and the
 * sharpest the scene is drawn.
 */
export const StageLight = decision<{
  sky: number; ground: number; ambient: number; sunColour: number; sun: number; sunAt: [number, number, number]; sunAims: [number, number, number]
  shadowMap: number; shadowExtent: number; shadowNear: number; shadowFar: number; shadowBias: number
  floor: number; floorShadow: number; quarterTurn: number
  mat: [number, number, number]; matAt: [number, number, number]; matColour: number; matRoughness: number
  lens: number; nearest: number; farthest: number; sharpest: number
}>({
  owner: "ghalaax",
  value: {
    sky: 0xffffff, ground: 0x8a8f99, ambient: 0.85, sunColour: 0xfff1e0, sun: 0.85, sunAt: [1.2, 4, 2.4], sunAims: [-0.5, 0, 0],
    shadowMap: 2048, shadowExtent: 2.4, shadowNear: 0.5, shadowFar: 10, shadowBias: -0.0006,
    floor: 14, floorShadow: 0.13, quarterTurn: -Math.PI / 2,
    mat: [1.95, 0.006, 0.64], matAt: [-0.47, 0.003, 0], matColour: 0x3e5c6c, matRoughness: 0.95,
    lens: 34, nearest: 0.05, farthest: 60, sharpest: 2,
  },
})

/**
 * Views of the stage
 * Where the camera looks from (its turn around the body and its height, in radians): three quarters, the side, the
 * front, above; it starts at three quarters. Its distance (wide or tall screens, and how close or far a pinch takes
 * it), how it follows the body and turns to a view (the part of the way it goes each frame), a little above the body's
 * middle; how a finger turns it, how far it tilts, how a wheel zooms.
 */
export const StageViews = decision<{
  views: Record<string, [number, number]>; start: [number, number]
  wide: number; tall: number; tallBelow: number; closest: number; farthest: number
  follow: number; turn: number; above: number; aim: [number, number, number]
  dragAcross: number; dragAlong: number; lowest: number; highest: number; wheel: number
}>({
  owner: "ghalaax",
  value: {
    views: { threeQuarter: [0.75, 0.24], profile: [0, 0.1], face: [Math.PI / 2, 0.12], top: [0.35, 1.25] }, start: [0.75, 0.24],
    wide: 4.1, tall: 4.9, tallBelow: 0.95, closest: 2, farthest: 8,
    follow: 0.06, turn: 0.12, above: 0.08, aim: [0, 1, 0],
    dragAcross: 0.009, dragAlong: 0.007, lowest: -0.05, highest: 1.4, wheel: 0.001,
  },
})

/**
 * Look of the landmarks
 * The landmarks drawn over the mannequin, always in front of it: their colour (the page's dawn orange), how opaque
 * their lines are and their soft lines, how round their lines and dots are drawn, an arrowhead's radius and length;
 * their words kept 4 px from the sides of the stage and 14 px from its top and bottom; the classes of the layer of
 * words, of a word and of a measure; the variables that place a word, in pixels.
 */
export const MarkStyle = decision<{
  colour: number; solid: number; soft: number; lineSides: number; dotSides: [number, number]; head: [number, number, number]; inFront: number
  marginX: number; marginY: number; layer: string; label: string; degrees: string; xVariable: string; yVariable: string
}>({
  owner: "ghalaax",
  value: {
    colour: 0xec8a1e, solid: 0.95, soft: 0.55, lineSides: 8, dotSides: [16, 12], head: [0.025, 0.07, 14], inFront: 20,
    marginX: 4, marginY: 14, layer: "labels", label: "label", degrees: "degrees", xVariable: "--x", yVariable: "--y",
  },
})

/**
 * The browser's stage
 * The scene drawn with three.js in a canvas of the page, again at each frame of the screen: the mannequin as the body
 * is now, the camera following it and turning with a finger, a pinch or a wheel, and to the view asked; the landmarks
 * over it, made again when they change, their words placed at each frame where their points are on the screen.
 */
export const BrowserStage = implementation({
  owner: "ghalaax",
  implements: [Stage],
  packages: [ThreePackage, ThreeTypes],
  deps: { look: MannequinLook, light: StageLight, views: StageViews, style: MarkStyle, counts: Counts, html: Html },
  body: code.file("./code/browser-stage.ts"),
})
