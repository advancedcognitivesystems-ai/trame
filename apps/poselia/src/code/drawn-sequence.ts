// A sequence drawn by lot: from a standing pose, each next pose drawn among those that keep the sequence sensible and
// near enough to its end to reach it with the poses left (how many movements each level is from a level a sequence
// may end at, found breadth first along the ways between levels). A pose not yet drawn, at another level, weighs more.
// A dead end takes back the last pose and draws another: the draw always ends where a sequence may end. Several draws
// are made, one after the other from the same seed, and the most varied is kept: the most poses and levels it visits.

import type { Pose } from "../content"
import type { Level } from "../body"

type Judged = { begins: boolean; ends: boolean; jumps: number[]; backAndForth: number[]; repeats: number[] }

export interface Deps {
  draws: {
    from(seed: number): () => number
    weighted<T>(draw: () => number, items: readonly { item: T; weight: number }[]): T | undefined
  }
  ways: Record<Level, Level[]>
  sense: (steps: readonly { id: string; level: Level }[]) => Judged
  counts: { zero: number; one: number; next(n: number): number }
  unseen: number
  newLevel: number
  tries: number
}

const body = ({ draws, ways, sense, counts, unseen, newLevel, tries }: Deps) => (poses: readonly Pose[], count: number, seed: number): Pose[] => {
  const { zero, one } = counts
  const draw = draws.from(seed)
  // The levels a sequence may end at: those of the poses that, alone, end a sequence.
  const ending = [...new Set(poses.filter((p) => sense([p]).ends).map((p) => p.level))]
  const distance = new Map<Level, number>(ending.map((l) => [l, zero]))
  let frontier = ending
  while (frontier.length > zero) {
    const further: Level[] = []
    for (const l of frontier)
      for (const m of ways[l] ?? []) {
        if (distance.has(m)) continue
        distance.set(m, counts.next(distance.get(l) ?? zero))
        further.push(m)
      }
    frontier = further
  }
  const sensible = (steps: readonly Pose[], last: boolean) => {
    const judged = sense(steps)
    return judged.begins && (!last || judged.ends) && judged.jumps.length + judged.backAndForth.length + judged.repeats.length === zero
  }
  const search = (chosen: readonly Pose[]): readonly Pose[] | undefined => {
    if (chosen.length >= count) return chosen
    const after = count - chosen.length - one
    const [previous] = chosen.slice(-one)
    let candidates = poses.filter((p) => (distance.get(p.level) ?? Infinity) <= after && sensible([...chosen, p], after === zero))
    while (candidates.length > zero) {
      const pick = draws.weighted(draw, candidates.map((p) => ({
        item: p,
        weight: (chosen.some((c) => c.id === p.id) ? one : unseen) * (previous !== undefined && previous.level !== p.level ? newLevel : one),
      })))
      if (pick === undefined) return undefined
      const found = search([...chosen, pick])
      if (found) return found
      candidates = candidates.filter((p) => p !== pick)
    }
    return undefined
  }
  const variety = (steps: readonly Pose[]) => new Set(steps.map((p) => p.id)).size + new Set(steps.map((p) => p.level)).size
  let best: readonly Pose[] = []
  for (let n: number = zero; n < tries; n = counts.next(n)) {
    const found = search([]) ?? []
    if (variety(found) > variety(best)) best = found
  }
  return [...best]
}

export type Api = ReturnType<typeof body>
export default body
