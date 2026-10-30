// The drawing of a pose: the body flattened onto the length of the mat (across) and the height (down from the top),
// seen from its right side, in the order its shapes are painted.

import type { Drawing, Shape } from "../architecture"
import type { Body, Side, Vec } from "../body"

export interface Deps {
  measures: { headSurface: number }
  frame: { width: number; height: number; floor: number; trunk: number; limb: number; outline: number }
  parts: { far: string; trunk: string; head: string; near: string; arm: string; outline: string; floor: string }
  counts: { zero: number }
  half: number
}

const body = ({ measures, frame, parts, counts, half }: Deps) => (b: Body): Drawing => {
  const points: Vec[] = [b.pelvis, b.waist, b.neckBase, b.neckTop, ...[b.L, b.R].flatMap((s) => [s.knee, s.ankle, s.heel, s.ball, s.toe, s.elbow, s.wrist, s.tip])]
  const [headX] = b.head
  const xs = [...points.map(([x]) => x), headX - measures.headSurface, headX + measures.headSurface]
  const middle = (Math.min(...xs) + Math.max(...xs)) * half
  const left = frame.width * half - middle
  const bottom = frame.height - frame.floor
  const at = ([x, y]: Vec) => ({ x: left + x, y: bottom - y })
  const segment = (part: string, from: Vec, to: Vec, thickness: number): Shape => ({ part, from: at(from), to: at(to), thickness })
  const leg = (part: string, s: Side, thickness: number): Shape[] => [
    segment(part, s.hip, s.knee, thickness), segment(part, s.knee, s.ankle, thickness),
    segment(part, s.heel, s.ball, thickness), segment(part, s.ball, s.toe, thickness), segment(part, s.ankle, s.ball, thickness),
  ]
  const arm = (part: string, s: Side, thickness: number): Shape[] => [
    segment(part, s.shoulder, s.elbow, thickness), segment(part, s.elbow, s.wrist, thickness), segment(part, s.wrist, s.tip, thickness),
  ]
  const outlined = frame.limb + frame.outline
  return {
    width: frame.width,
    height: frame.height,
    shapes: [
      { part: parts.floor, from: { x: counts.zero, y: bottom }, to: { x: frame.width, y: bottom }, thickness: frame.outline },
      ...leg(parts.far, b.L, frame.limb), ...arm(parts.far, b.L, frame.limb),
      segment(parts.trunk, b.pelvis, b.waist, frame.trunk), segment(parts.trunk, b.waist, b.neckBase, frame.trunk),
      segment(parts.trunk, b.neckBase, b.neckTop, frame.limb),
      segment(parts.head, b.head, b.head, measures.headSurface / half),
      ...leg(parts.outline, b.R, outlined), ...leg(parts.near, b.R, frame.limb),
      ...arm(parts.outline, b.R, outlined), ...arm(parts.arm, b.R, frame.limb),
    ],
  }
}

export type Api = ReturnType<typeof body>
export default body
