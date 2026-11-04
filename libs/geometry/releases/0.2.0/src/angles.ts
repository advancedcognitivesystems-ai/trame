/** Geometry · Angles */

import { unitsOf, type Quantity } from "#trame/kernel"
import { quantity } from "#trame/kinds/quantity"
import { catalog } from "#trame/kinds/catalog"
import { SymbolsLanguage } from "#std/measures"
import { GeometryWrittenOnce } from "./product"

/** How an angle is written in each of its units. */
export const AngleSymbols = catalog({
  owner: "ghalaax",
  language: SymbolsLanguage,
  messages: () => ({
    radian: (n: string) => `${n} rad`,
    degree: (n: string) => `${n}°`,
    turn: (n: string) => `${n} tr`,
  }),
})

/**
 * Angle
 * How far a direction turns from another, counted in radians (the SI's coherent unit: an arc as long as its radius);
 * a turn is 2π radians, a degree a 360th of a turn.
 */
export const Angle = quantity({
  owner: "ghalaax",
  serves: [GeometryWrittenOnce],
  source: "BIPM, The International System of Units (SI Brochure, 9th edition), Table 4 (radian) and Table 8 (degree)",
  url: "https://www.bipm.org/en/publications/si-brochure",
  units: { radian: 1, degree: Math.PI / 180, turn: 2 * Math.PI },
  written: AngleSymbols,
})

/** An angle, counted in radians. */
export type Turning = Quantity<typeof Angle>
/** An angle from a number of radians, of degrees, of turns: `deg(90)` is a quarter of a turn. */
export const { radian: rad, degree: deg, turn: turns } = unitsOf(Angle)
