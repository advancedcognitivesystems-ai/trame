/** Geometry · Vectors */

import { code } from "#trame/kernel"
import { structure, type Draw } from "#trame/kinds/structure"
import { decision } from "#trame/kinds/decision"
import { adr } from "#trame/kinds/adr"
import { Angle, turns } from "./angles"
import { GeometryWrittenOnce } from "./product"

/** A point or a direction in three dimensions: its coordinates along the three axes, in metres for a point. */
export type Vector = readonly [number, number, number]

/**
 * The axes
 * Which way each coordinate points: the first along the floor, forward; the second along the floor, to the left; the
 * third up, so that the floor is where the third is zero. Right-handed: forward crossed with left is up.
 */
export const Axes = decision<{ forward: Vector; left: Vector; up: Vector }>({
  owner: "ghalaax",
  value: { forward: [1, 0, 0], left: [0, 1, 0], up: [0, 0, 1] },
  rejected: {
    "Up as the second axis, as three.js has it": "a body on the floor would be measured by its depth; a drawing turns the axes at its own edge",
    "Left-handed axes": "the cross product would point down, and every rule that turns a direction would change sign",
  },
})

/**
 * The tolerance
 * How far apart two points may be and still be the same, in metres: a micrometre, far below what a body or a drawing
 * shows, far above what rounding leaves after a computation. A direction shorter than that has none.
 */
export const Tolerance = decision<{ length: number }>({
  owner: "ghalaax",
  value: { length: 1e-6 },
  rejected: {
    "Exact equality": "a point computed two ways differs in its last digits",
    "A millimetre": "two hands a millimetre apart would be one, which a figure drawn close up shows",
  },
})

/** The coordinates of three integers, drawn: sums, products and differences of them are exact. */
const drawn = (d: Draw): Vector => [d.integer(), d.integer(), d.integer()]

/**
 * Vectors
 * Points and directions in three dimensions: added, subtracted, scaled, multiplied (the dot product, the cross
 * product), measured, mixed; the angle between two directions and at a point, a direction on the floor from its angle.
 * A direction shorter than the tolerance has none: its unit is the origin.
 */
export const Vectors = structure({
  owner: "ghalaax",
  serves: [GeometryWrittenOnce],
  constants: { none: { value: 0, meaning: "The coordinate of the origin along each axis: no distance" } },
  deps: { axes: Axes, tolerance: Tolerance, angles: Angle },
  operations: code.file<typeof import("./code/vectors").default>("./code/vectors.ts"),
  laws: [
    {
      says: "Adding is commutative and associative, the origin adds nothing, the difference undoes it",
      holds: (o, d) => {
        const [a, b, c] = [drawn(d), drawn(d), drawn(d)]
        return o.same(o.add(a, b), o.add(b, a)) && o.same(o.add(o.add(a, b), c), o.add(a, o.add(b, c)))
          && o.same(o.add(a, o.origin), a) && o.same(o.difference(o.add(a, b), b), a)
      },
    },
    {
      says: "The dot product is symmetric, distributes over addition, and gives a vector's length squared",
      holds: (o, d) => {
        const [a, b, c] = [drawn(d), drawn(d), drawn(d)]
        return o.dot(a, b) === o.dot(b, a) && o.dot(a, o.add(b, c)) === o.dot(a, b) + o.dot(a, c)
          && Math.abs(o.length(a) ** 2 - o.dot(a, a)) <= o.tolerance.length * Math.max(1, o.dot(a, a))
      },
    },
    {
      says: "The cross product is perpendicular to both its factors, and changes sign when they swap",
      holds: (o, d) => {
        const [a, b] = [drawn(d), drawn(d)]
        const c = o.cross(a, b)
        return o.dot(c, a) === 0 && o.dot(c, b) === 0 && o.same(o.cross(b, a), o.scale(c, -1))
      },
    },
    {
      says: "A unit has a length of one and the direction it came from, or is the origin when there was none",
      holds: (o, d) => {
        const a = drawn(d)
        const u = o.unit(a)
        return o.length(a) <= o.tolerance.length
          ? o.same(u, o.origin)
          : Math.abs(o.length(u) - 1) <= o.tolerance.length && o.same(o.scale(u, o.length(a)), a)
      },
    },
    {
      says: "A direction makes no angle with itself, a half turn with its opposite, a quarter turn with what it crosses",
      holds: (o, d) => {
        const [a, b] = [drawn(d), drawn(d)]
        const c = o.cross(a, b)
        if (o.length(c) <= o.tolerance.length) return true
        const near = (x: number, y: number) => Math.abs(x - y) <= o.tolerance.length
        return near(o.angle(a, a), 0) && near(o.angle(a, o.scale(a, -1)), turns(0.5)) && near(o.angle(a, c), turns(0.25))
          && near(o.angleAt(b, o.add(b, a), o.add(b, c)), turns(0.25))
      },
    },
    {
      says: "The axes are right-handed, and forward turned by a quarter turn on the floor is left",
      holds: (o) => o.same(o.cross(o.axes.forward, o.axes.left), o.axes.up) && o.same(o.toward(turns(0)), o.axes.forward)
        && o.same(o.toward(turns(0.25)), o.axes.left),
    },
    {
      says: "Mixing goes from the first at none of the way to the second at all of it, through their middle",
      holds: (o, d) => {
        const [a, b] = [drawn(d), drawn(d)]
        return o.same(o.mix(a, b, 0), a) && o.same(o.mix(a, b, 1), b) && o.same(o.scale(o.add(a, b), 0.5), o.mix(a, b, 0.5))
      },
    },
  ],
})

/**
 * A vector is three numbers
 * A point or a direction is a triple of numbers, and what is done with it is a structure's operation: written once,
 * with its laws, rather than as helpers each product writes again.
 */
export const VectorsAsTriples = adr({
  owner: "ghalaax",
  context: "Poselia's body computed with vectors through helpers written beside its rules, and its angles as numbers of degrees: the next product drawing or moving something would have written them again, and a degree passed where a radian was expected would have been seen by nobody.",
  consequences: "A point, a direction, a key of a pose is a Vector: frozen into a program as it is, compared within the tolerance. A rule receives Vectors as a dependency and calls its operations; an angle is a quantity, written in the unit it is thought in (deg(30), turns(0.25)).",
  rejected: {
    "A class with methods": "a value of the graph must be data, which a program carries frozen and a document shows",
    "three.js's Vector3": "the rules of a body would depend on the library that draws it",
    "Angles as numbers of degrees": "a computation in radians and a value in degrees would mix without a word",
  },
  serves: [GeometryWrittenOnce],
  appliedBy: [Vectors, Angle],
})
