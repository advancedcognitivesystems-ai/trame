// The space of the mat, in geometry's vectors: Poselia's points along the mat, up from the floor and across it, with
// the axes it amends (up second, left as the third's opposite). The helpers its rules compute with, written once.

import type { Vector } from "#geometry/vectors"
import type { Turning } from "#geometry/angles"

export interface Deps {
  v: {
    axes: { forward: Vector; left: Vector; up: Vector }
    origin: Vector
    tolerance: { length: number }
    add(a: Vector, b: Vector): Vector
    difference(a: Vector, b: Vector): Vector
    scale(a: Vector, s: number): Vector
    dot(a: Vector, b: Vector): number
    length(a: Vector): number
    unit(a: Vector): Vector
    mix(a: Vector, b: Vector, t: number): Vector
  }
  angle: { degree(n: number): Turning; turn(n: number): Turning }
  counts: { one: number }
}

const body = ({ v, angle, counts }: Deps) => {
  const { forward, left, up } = v.axes
  const height = (p: Vector) => v.dot(p, up)
  const along = (p: Vector) => v.dot(p, forward)
  return {
    add: v.add,
    sub: v.difference,
    mul: v.scale,
    dot: v.dot,
    len: v.length,
    unit: v.unit,
    /** Between two numbers, by how far: a at none of the way, b at all of it. */
    mix: (a: number, b: number, t: number) => a + (b - a) * t,
    mix3: v.mix,
    /** Straight down, and straight across to the right. */
    down: v.difference(v.origin, up),
    backward: v.difference(v.origin, forward),
    rightward: v.difference(v.origin, left),
    /** Below this, a length is none and a direction has none. */
    tolerance: v.tolerance.length,
    /** A direction in the plane of the mat's length and the height, by its angle from the front, in degrees. */
    toward: (degrees: number): Vector => {
      const a = angle.degree(degrees)
      return v.add(v.scale(forward, Math.cos(a)), v.scale(up, Math.sin(a)))
    },
    /** The angle of a direction in that plane from the front, in degrees, toward the height. */
    heading: (d: Vector): number => Math.atan2(height(d), along(d)) / angle.degree(counts.one),
    /** A whole turn, in degrees. */
    turn: angle.turn(counts.one) / angle.degree(counts.one),
    /** A bump over a way, from nothing at its start to its top half way and nothing at its end. */
    arch: (t: number): number => Math.sin((angle.turn(counts.one) / (counts.one + counts.one)) * t),
    /** How long a vector is in that plane, across left out. */
    planar: (d: Vector): number => Math.hypot(along(d), height(d)),
    /** The direction a quarter turn from another in that plane, toward the height: the other way from the face. */
    normal: (d: Vector): Vector => v.add(v.scale(forward, -height(d)), v.scale(up, along(d))),
    /** A point by its three coordinates: along the mat, its height, across it to the right. */
    at: (alongMat: number, high: number, across: number): Vector =>
      v.add(v.add(v.scale(forward, alongMat), v.scale(up, high)), v.scale(left, -across)),
    /** A point of that plane: so far along the mat, so high. */
    point: (alongMat: number, high: number): Vector => v.add(v.scale(forward, alongMat), v.scale(up, high)),
    height,
    along,
    /** So far across the mat, to the right (to the left when negative). */
    right: (x: number): Vector => v.scale(left, -x),
    /** How far across the mat, to the right. */
    across: (p: Vector) => -v.dot(p, left),
    /** The direction a quarter turn from another in the plane of the mat's length, toward the front of the face. */
    face: (t: Vector): Vector => v.add(v.scale(forward, height(t)), v.scale(up, -along(t))),
  }
}

export type Api = ReturnType<typeof body>
export default body
