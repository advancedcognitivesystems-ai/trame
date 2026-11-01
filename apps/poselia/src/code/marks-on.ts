// The landmarks of a pose on the body as it is: each drawn, numbered from one, its words and its sentence in the
// language the app speaks, each angle's measure in degrees.

import type { Mark, Localized } from "../content"
import type { MarkDrawing } from "../marks"
import type { StageMarks } from "../architecture"
import type { Body, Sides } from "../body"
import type { ProvidedBy } from "#trame/kernel"
import type { WordsFr } from "../language"

type Words = ProvidedBy<typeof WordsFr>

export interface Deps {
  draw: (mark: Mark, body: Body, sides: Sides) => MarkDrawing
  words: { now(): Words }
  language: { current(): string }
  counts: { next(n: number): number }
}

const body = ({ draw, words, language, counts }: Deps) =>
  (marks: readonly Mark[], on: Body, sides: Sides): { stage: StageMarks; list: { number: string; text: string }[] } => {
    const w = words.now()
    const tag = language.current()
    const text = (t: Localized) => t[tag] ?? w.appName()
    const drawn = marks.map((m) => draw(m, on, sides))
    return {
      stage: {
        segments: drawn.flatMap((d) => d.segments),
        dots: drawn.flatMap((d) => d.dots),
        heads: drawn.flatMap((d) => d.heads),
        labels: [
          ...drawn.map((d, i) => ({ at: d.label, text: text(marks[i].title), number: w.count(counts.next(i)), degrees: false })),
          ...drawn.flatMap((d) => d.angles.map((a) => ({ at: a.at, text: w.degrees(a.degrees), number: undefined, degrees: true }))),
        ],
      },
      list: marks.map((m, i) => ({ number: w.count(counts.next(i)), text: text(m.text) })),
    }
  }

export type Api = ReturnType<typeof body>
export default body
