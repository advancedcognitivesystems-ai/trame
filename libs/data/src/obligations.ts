/** Data · Obligations */

import { requirement } from "#trame/kinds/requirement"
import { acceptance } from "#trame/kinds/acceptance"
import { vocabulary } from "#trame/kinds/vocabulary"
import type { GraphSketch, SketchNode, ObligationReach, ObligationFinding } from "#trame/kernel"
import { DataDescribedOnce } from "./product"

/**
 * The kinds the library carries
 * The kinds a project that imports the library writes nodes of, by the names the kinds give themselves.
 */
export const DataKinds = vocabulary({
  owner: "trame",
  words: { entity: "A kind of data a product keeps outside the graph, described once" },
  serves: [DataDescribedOnce],
})

/**
 * What a shipment stores migrates
 * Each entity the shipment reaches (what its programs store or read, kept outside the graph) is to prove: every version
 * of its description deployed so far migrates to the one shipped, each step decided. A family of obligations: a policy
 * applies it, and the entity's own status says whether it holds.
 */
export const Migrated = requirement({
  owner: "trame",
  refines: [DataDescribedOnce],
  deps: { kinds: DataKinds },
  body: ({ kinds }) => (sketch: GraphSketch, reach: ObligationReach): ObligationFinding => ({
    obliged: sketch.nodes.filter((n) => (kinds as readonly string[]).includes(n.kind) && reach.reached.includes(n.ref)).map((n) => ({ node: n.ref, via: n.ref })),
    gaps: [],
  }),
})

// A sketch written by hand, for the criteria: a page that reaches a breath kept on the device, and a note it does not.
const node = (ref: string, kind: string): SketchNode => ({ ref, kind, module: "m", title: ref, effects: [], field: () => undefined })
const kept: GraphSketch = {
  nodes: [node("Page", "artifact"), node("Breath", "entity"), node("Note", "entity"), node("Settings", "function")],
  edges: [],
}

/** Criteria of what a shipment stores */
export const MigratedCriteria = acceptance({
  accepts: Migrated,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Each entity the shipment reaches is to prove, and nothing else", () =>
      Migrated(kept, { shipped: ["Page"], reached: ["Page", "Settings", "Breath"] }).obliged.map((x) => x.node).join() === "Breath")
    criterion("A shipment that reaches no entity has nothing to migrate", () =>
      Migrated(kept, { shipped: ["Page"], reached: ["Page", "Settings"] }).obliged.length === 0)
  },
})
