// Vectors in three dimensions: added, subtracted, scaled, multiplied (the dot product, the cross product), measured,
// mixed; the angle between two directions and at a point, a direction on the floor from its angle. Coordinates are
// destructured, never indexed; a direction shorter than the tolerance has none, and its unit is the origin.

import type { Vector } from "../vectors"
import type { Turning } from "../angles"
import type { Share } from "#std/measures"

export interface Deps {
  none: number
  axes: { forward: Vector; left: Vector; up: Vector }
  tolerance: { length: number }
  angles: { radian: (n: number) => Turning }
}

const body = ({ none, axes, tolerance, angles }: Deps) => {
  const origin: Vector = [none, none, none]
  const add = ([ax, ay, az]: Vector, [bx, by, bz]: Vector): Vector => [ax + bx, ay + by, az + bz]
  const difference = ([ax, ay, az]: Vector, [bx, by, bz]: Vector): Vector => [ax - bx, ay - by, az - bz]
  const scale = ([x, y, z]: Vector, s: number): Vector => [x * s, y * s, z * s]
  const dot = ([ax, ay, az]: Vector, [bx, by, bz]: Vector): number => ax * bx + ay * by + az * bz
  const cross = ([ax, ay, az]: Vector, [bx, by, bz]: Vector): Vector => [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx]
  const length = (a: Vector): number => Math.hypot(...a)
  const distance = (a: Vector, b: Vector): number => length(difference(a, b))
  const angle = (u: Vector, w: Vector): Turning => angles.radian(Math.atan2(length(cross(u, w)), dot(u, w)))
  return {
    /** The point every position is measured from; the vector that moves nothing. */
    origin,
    axes,
    tolerance,
    add,
    /** From b to a: a − b. */
    difference,
    scale,
    dot,
    cross,
    length,
    distance,
    /** The same direction, of length one; the origin for a vector too short to have one. */
    unit: (a: Vector): Vector => {
      const l = length(a)
      if (l <= tolerance.length) return origin
      const [x, y, z] = a
      return [x / l, y / l, z / l]
    },
    /** From a towards b, by a share of the way: a at none of it, b at all of it. */
    mix: (a: Vector, b: Vector, t: Share): Vector => add(a, scale(difference(b, a), t)),
    /** Two points closer than the tolerance are the same. */
    same: (a: Vector, b: Vector): boolean => distance(a, b) <= tolerance.length,
    /** The angle between two directions, from none to a half turn. */
    angle,
    /** The angle at a point between the directions to two others. */
    angleAt: (at: Vector, from: Vector, to: Vector): Turning => angle(difference(from, at), difference(to, at)),
    /** The direction on the floor that turns from forward toward the left by an angle. */
    toward: (a: Turning): Vector => add(scale(axes.forward, Math.cos(a)), scale(axes.left, Math.sin(a))),
  }
}

export type Api = ReturnType<typeof body>
export default body
