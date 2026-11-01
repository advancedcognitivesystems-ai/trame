/** Poselia · Drawings */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { fn } from "#trame/kinds/function"
import { Counts } from "#std/algebra"
import { PractiseGuided } from "./product"
import { BodyMeasures, KeyOf, BodyAt } from "./body"

// A pose drawn small, for a list: the body the engine places, seen from its right side (as the 3D view "profile" sees
// it), flattened: the far side first, pale, then the trunk and the head, then the near leg and the near arm, each
// outlined in the paper's colour so that a limb in front of the trunk stays readable. Every drawing has the same frame
// and the same scale, so that a figure keeps its size from one pose to the next.

/**
 * Frame of a drawing
 * The space a pose is drawn in, in metres: wide enough for a body stepping back on the mat (1.6), tall enough for the
 * arms raised above the head (2.1), the floor a little above the bottom edge; the thickness of the trunk and of a limb;
 * the paper's outline around a limb in front.
 */
export const DrawingFrame = decision<{ width: number; height: number; floor: number; trunk: number; limb: number; outline: number }>({
  owner: "ghalaax",
  value: { width: 2.3, height: 2.3, floor: 0.08, trunk: 0.19, limb: 0.075, outline: 0.04 },
})

/**
 * Parts of a drawing
 * The names the shapes of a drawing carry, which the style sheet colours: the far side, the trunk, the head, the near
 * leg, the near arm, the outline of what is in front, the floor; and the drawing itself.
 */
export const DrawingParts = decision<{ far: string; trunk: string; head: string; near: string; arm: string; outline: string; floor: string; figure: string }>({
  owner: "ghalaax",
  value: { far: "far", trunk: "trunk", head: "head", near: "near", arm: "arm", outline: "outline", floor: "floor", figure: "figure" },
})

/**
 * The body of a pose
 * A pose placed for a round and solved: the body the engine gives, standing still in it.
 */
export const PoseBody = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { key: KeyOf, at: BodyAt, counts: Counts },
  body: ({ key, at, counts }) => (shape: Parameters<typeof key>[0], leading?: Parameters<typeof key>[1], stance?: Parameters<typeof key>[2]) => {
    const k = key(shape, leading, stance)
    return at(k, k, counts.zero)
  },
})

/**
 * The drawing of a pose
 * From a body, the shapes of its drawing seen from the right side: the floor, then segments with their thickness, the
 * head among them, centred across the frame. It touches nothing.
 */
export const FigureDrawing = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { measures: BodyMeasures, frame: DrawingFrame, parts: DrawingParts, counts: Counts },
  constants: {
    half: { value: 0.5, meaning: "A radius is half a thickness; a figure is centred in the half of the space it leaves" },
  },
  body: code.file<typeof import("./code/figure-drawing").default>("./code/figure-drawing.ts"),
})
