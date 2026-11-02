/** Poselia · Space */

import { amend } from "#trame/kinds/amendment"
import { Axes } from "#geometry/vectors"

/**
 * The axes of the mat
 * Poselia measures its body along the mat (forward), up from the floor, and across it (its third coordinate grows to
 * the right): geometry's axes, which put up third, are amended here so that its vectors read Poselia's points as
 * they are written, right-handed still (forward crossed with left is up).
 */
export const AxesOfTheMat = amend(Axes, { value: { left: [0, 0, -1], up: [0, 1, 0] } }, {
  owner: "ghalaax",
  why: "Poselia's poses, keys and drawing were written with the height as the second coordinate, as three.js draws them; its data stays as it is reviewed",
  from: "2026-11-02",
})
