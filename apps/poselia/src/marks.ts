/** Poselia · Landmarks */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { fn } from "#trame/kinds/function"
import { Counts } from "#std/algebra"
import { PractiseGuided } from "./product"
import { KeyOf, BodyAt, SpotOn, AngleBetween, Point, Which, type Body, type Vec, type Sides, type Shape } from "./body"
import type { Mark } from "./content"
import { InterfaceWords, AppLanguage } from "./language"

// The landmarks of a pose, as the page "Salutation au soleil" draws them on the mannequin: a few numbered words tied to
// the body, the lines that show an alignment, the plumb line under a knee, the dots where the body rests, the arrows
// of a movement, the angle a joint makes with its measure. They are drawn on the body as it is, while a pose is held,
// and listed under the player with their sentence.

/**
 * How landmarks are drawn
 * The lengths of a landmark's drawing, in metres: a dash and the gap after it, the width of a line, of a thin line and
 * of an arrow's shaft, the radius of a dot; an angle's arc in 24 pieces, its two rays a quarter longer than its radius,
 * its measure 9 cm beyond the arc and rounded to 5°; the floor a centimetre down.
 */
export const MarkLook = decision<{ dash: number; gap: number; line: number; thin: number; shaft: number; dot: number; arc: number; ray: number; beyond: number; roundTo: number }>({
  owner: "ghalaax",
  value: { dash: 0.04, gap: 0.03, line: 0.006, thin: 0.003, shaft: 0.007, dot: 0.024, arc: 24, ray: 1.25, beyond: 0.09, roundTo: 5 },
})

/**
 * When the landmarks are drawn
 * Whenever the person wants them, in every practice: while a pose is held, at a pause and at the end, drawn once on
 * the still body; while the body moves, those of the pose it goes to, on the body as it is, following it.
 */
export const MarksWhen = decision<{ still: boolean; moving: boolean }>({
  owner: "ghalaax",
  value: { still: true, moving: true },
  rejected: {
    "Only while the body is still": "a practice that flows with the breath never stops: there the button showed nothing, and the landmarks appeared only when learning a sequence or holding poses",
  },
})

/** A landmark drawn: its pieces of line (their width, whether soft), its dots, its arrowheads, the angles it measures, where its words sit. */
export interface MarkDrawing {
  segments: { from: Vec; to: Vec; width: number; soft: boolean }[]
  dots: { at: Vec; radius: number }[]
  heads: { at: Vec; toward: Vec }[]
  angles: { at: Vec; degrees: number }[]
  label: Vec
}

const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
const sub = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const mul = (a: Vec, s: number): Vec => [a[0] * s, a[1] * s, a[2] * s]
const dot = (a: Vec, b: Vec) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const len = (a: Vec) => Math.sqrt(dot(a, a))
const unit = (a: Vec): Vec => mul(a, 1 / (len(a) || 1))

/**
 * A landmark on the body
 * What a landmark draws on a body: each line from spot to spot (dashed in dashes and gaps), a plumb line dashed down to
 * the floor, a dot, an arrow and its head, an angle as an arc between the two directions with its two rays, soft, and
 * its measure rounded, set beyond the arc on the line that halves it; a soft thin line from its spot to its words.
 */
export const MarkOnBody = requirement({
  owner: "ghalaax",
  refines: [PractiseGuided],
  rule: (mark: Mark, body: Body, sides: Sides): MarkDrawing => {
    const look = MarkLook.value
    const at = (s: Parameters<typeof SpotOn>[1]) => SpotOn(body, s, sides)
    const drawing: MarkDrawing = { segments: [], dots: [], heads: [], angles: [], label: [0, 0, 0] }
    const line = (a: Vec, b: Vec, width = look.line, soft = false) => drawing.segments.push({ from: a, to: b, width, soft })
    const dashed = (a: Vec, b: Vec) => {
      const d = sub(b, a)
      const l = len(d)
      for (let s = 0; s < l; s += look.dash + look.gap) line(add(a, mul(d, s / l)), add(a, mul(d, Math.min(s + look.dash, l) / l)))
    }
    for (const shape of mark.shapes ?? []) {
      if ("line" in shape) shape.line.slice(1).forEach((s, i) => (shape.dashed ? dashed : line)(at(shape.line[i]), at(s)))
      else if ("plumb" in shape) {
        const p = at(shape.plumb)
        dashed(p, [p[0], 0.01, p[2]])
      } else if ("dot" in shape) drawing.dots.push({ at: at(shape.dot), radius: look.dot })
      else if ("arrow" in shape) {
        const [a, b] = [at(shape.arrow[0]), at(shape.arrow[1])]
        line(a, b, look.shaft)
        drawing.heads.push({ at: b, toward: unit(sub(b, a)) })
      } else {
        const { at: j0, from, to, radius } = shape.angle
        const j = at(j0)
        const u = unit(sub(at(from), j))
        const w = unit(sub(at(to), j))
        const theta = (AngleBetween(j, at(from), at(to)) * Math.PI) / 180
        const across = sub(w, mul(u, dot(u, w)))
        const v: Vec = len(across) < 1e-5 ? [0, 0, 1] : unit(across)
        const arc = Array.from({ length: look.arc + 1 }, (_, k) => add(j, add(mul(u, Math.cos((theta * k) / look.arc) * radius), mul(v, Math.sin((theta * k) / look.arc) * radius))))
        arc.slice(1).forEach((q, k) => line(arc[k], q))
        line(j, add(j, mul(u, radius * look.ray)), look.thin, true)
        line(j, add(j, mul(w, radius * look.ray)), look.thin, true)
        const degrees = Math.round(AngleBetween(j, at(from), at(to)) / look.roundTo) * look.roundTo
        drawing.angles.push({ at: add(j, mul(unit(add(u, w)), radius + look.beyond)), degrees })
      }
    }
    const anchor = at(mark.at)
    drawing.label = add(anchor, mark.label)
    line(anchor, drawing.label, look.thin, true)
    return drawing
  },
})

/** Criteria of a landmark on the body */
export const MarkOnBodyCriteria = acceptance({
  accepts: MarkOnBody,
  owner: "ghalaax",
  criteria: (criterion) => {
    const lunge: Shape = {
      pelvis: [-0.44, 0.33], spine: [22, 36, 50, 66], arms: { at: [0.03, 0.035, 0.2], hand: 0, palm: 0 },
      legs: { front: { at: [0, 0.065, 0.07], foot: 0, toes: 0 }, back: { at: [-1.205, 0.145, 0.1], foot: -70, toes: 0 } },
    }
    const k = KeyOf(lunge)
    const b = BodyAt(k, k, 0)
    const sides: Sides = { front: "L", back: "R" }
    const words = { fr: "x", en: "x" }
    const plumb = MarkOnBody({ title: words, text: words, at: { at: Point.knee, side: Which.front }, label: [0.35, 0.22, 0.1], shapes: [{ plumb: { at: Point.knee, side: Which.front } }] }, b, sides)
    criterion("A plumb line falls straight to the floor, in dashes", () =>
      plumb.segments.filter((s) => !s.soft).every((s) => Math.abs(s.from[0] - b.L.knee[0]) < 1e-9 && s.to[1] <= s.from[1]) && plumb.segments.length > 3)
    const angle = MarkOnBody({ title: words, text: words, at: { at: Point.elbow, side: Which.right }, label: [0.4, 0, 0.2],
      shapes: [{ angle: { at: { at: Point.elbow, side: Which.right }, from: { at: Point.shoulder, side: Which.right }, to: { at: Point.wrist, side: Which.right }, radius: 0.09 } }] }, b, sides)
    criterion("An angle says the angle the joint makes, to the nearest 5°", () => {
      const [measured] = angle.angles
      return measured !== undefined && measured.degrees % 5 === 0 && Math.abs(measured.degrees - AngleBetween(b.R.elbow, b.R.shoulder, b.R.wrist)) <= 2.5
    })
    criterion("The words sit where the landmark sets them from its spot", () => Math.abs(angle.label[0] - b.R.elbow[0] - 0.4) < 1e-9)
  },
})

/**
 * The landmarks of a pose
 * What the stage draws of a pose's landmarks on the body as it is, in the language the app speaks: each landmark's
 * pieces, its number and its words, the measure of each angle; and the list of their sentences, numbered. It touches
 * nothing.
 */
export const MarksOn = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { draw: MarkOnBody, words: InterfaceWords, language: AppLanguage, counts: Counts },
  body: code.file<typeof import("./code/marks-on").default>("./code/marks-on.ts"),
})
