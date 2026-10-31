/** Standard library · Obligations */

import { requirement } from "../../../../kinds/requirement"
import { acceptance } from "../../../../kinds/acceptance"
import { vocabulary, type WordOf } from "../../../../kinds/vocabulary"
import { KindName, EdgeName, CheckEdge, ReviewEdge } from "../../../../trame/kernel"
import type { GraphSketch, SketchNode, ObligationReach, ObligationFinding } from "../../../../trame/kernel"
import { SharedRules } from "./product"

// What a shipment must prove, derived from what it reaches instead of listed by hand. A shipment reaches the artefacts it
// ships, what produces them, and what its programs wire in their environments; each family below reads that reach on the
// graph's sketch and gives the nodes to prove (each with the reached node that brought it in) and the gaps (what
// something should prove and nothing does). A project applies a family through an obligation, with its parameters, and
// groups its obligations in a policy, one per family: its way of working. The foundations (no literal in a body, a sound
// graph) are not a family: every shipment proves them.

const edgesFrom = (sketch: GraphSketch, from: string, name: string) => sketch.edges.filter((e) => e.from === from && e.name === name).map((e) => e.to)
const edgesTo = (sketch: GraphSketch, to: string, name: string) => sketch.edges.filter((e) => e.to === to && e.name === name).map((e) => e.from)
const kindOf = (sketch: GraphSketch, ref: string) => sketch.nodes.find((n) => n.ref === ref)?.kind
/** The nodes to prove, once each: the first reached node that brought one in stays its reason. */
const once = (obliged: { node: string; via: string }[]) => obliged.filter((o, i) => obliged.findIndex((x) => x.node === o.node) === i)

/**
 * The code a shipment ships is verified
 * Each scenario that verifies a node the shipment reaches is to prove. A reached node of the kinds named (entry points,
 * functions…) that no scenario verifies is a gap.
 */
export const Verified = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch, reach: ObligationReach, p: { kinds: readonly string[] }): ObligationFinding => ({
    obliged: once(reach.reached.flatMap((r) => edgesTo(sketch, r, EdgeName.verifies).filter((s) => kindOf(sketch, s) === KindName.scenario).map((s) => ({ node: s, via: r })))),
    gaps: reach.reached.filter((r) => p.kinds.includes(kindOf(sketch, r) ?? "") && edgesTo(sketch, r, EdgeName.verifies).length === 0),
  }),
})

/**
 * The product a shipment serves holds
 * From what the shipment reaches, what it serves; from the requirements served, up through what they refine, to the
 * goals. Every requirement that refines those goals or those requirements, at any depth, is to prove.
 */
export const Served = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch, reach: ObligationReach): ObligationFinding => {
    const up = (from: string, seen = new Set<string>()): Set<string> => {
      for (const to of [...edgesFrom(sketch, from, EdgeName.serves), ...edgesFrom(sketch, from, EdgeName.refines)]) {
        if (seen.has(to)) continue
        seen.add(to)
        up(to, seen)
      }
      return seen
    }
    const down = (to: string, seen = new Set<string>()): Set<string> => {
      for (const from of edgesTo(sketch, to, EdgeName.refines)) {
        if (seen.has(from)) continue
        seen.add(from)
        down(from, seen)
      }
      return seen
    }
    return {
      obliged: once(reach.reached.flatMap((r) => {
        const served = [...up(r)]
        return [...new Set([...served, ...served.flatMap((s) => [...down(s)])])]
          .filter((n) => kindOf(sketch, n) === KindName.requirement)
          .map((n) => ({ node: n, via: r }))
      })),
      gaps: [],
    }
  },
})

/**
 * The decisions a shipment applies hold
 * Each ADR that a node the shipment reaches applies is to prove.
 */
export const Applied = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch, reach: ObligationReach): ObligationFinding => ({
    obliged: once(reach.reached.flatMap((r) => edgesTo(sketch, r, EdgeName.appliedBy).filter((a) => kindOf(sketch, a) === KindName.adr).map((a) => ({ node: a, via: r })))),
    gaps: [],
  }),
})

/**
 * The data a shipment carries is reviewed
 * Each review of a dataset the shipment reaches is to prove. A reached dataset that no review reviews is a gap.
 */
export const Reviewed = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch, reach: ObligationReach): ObligationFinding => {
    const datasets = reach.reached.filter((r) => kindOf(sketch, r) === KindName.dataset)
    return {
      obliged: once(datasets.flatMap((d) => edgesTo(sketch, d, ReviewEdge.of).filter((v) => kindOf(sketch, v) === KindName.review).map((v) => ({ node: v, via: d })))),
      gaps: datasets.filter((d) => edgesTo(sketch, d, ReviewEdge.of).length === 0),
    }
  },
})

/**
 * Ways of checking
 * Which checks of the shipped artefacts a policy asks: those a program runs, or all of them, by hand too.
 */
export const CheckWays = vocabulary({
  owner: "trame",
  serves: [SharedRules],
  words: {
    programs: "The checks a program of the SDLC runs: what a machine proves alone",
    all: "Every check of the artefacts, those made by hand and signed by a role too",
  },
})

/** Which checks a policy asks: a word of the vocabulary CheckWays. */
export type CheckWay = WordOf<typeof CheckWays>

/**
 * The artefacts a shipment ships are checked
 * Each check of an artefact the shipment ships is to prove: those a program runs, or all of them.
 */
export const Checked = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch, reach: ObligationReach, p: { by: CheckWay }): ObligationFinding => ({
    obliged: once(reach.shipped.flatMap((a) => edgesTo(sketch, a, CheckEdge.on)
      .filter((c) => kindOf(sketch, c) === KindName.check && (p.by === "all" || edgesFrom(sketch, c, CheckEdge.runs).length > 0))
      .map((c) => ({ node: c, via: a })))),
    gaps: [],
  }),
})

/**
 * The project's rules hold
 * Each rule of the project is to prove: none broken.
 */
export const Ruled = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch): ObligationFinding => ({
    obliged: sketch.nodes.filter((n) => n.kind === KindName.rule && n.library === undefined).map((n) => ({ node: n.ref, via: n.ref })),
    gaps: [],
  }),
})

/**
 * The packages a shipment uses are safe
 * Each package a node the shipment reaches uses is to prove: installed at its version, without a known vulnerability.
 */
export const Safe = requirement({
  refines: [SharedRules],
  rule: (sketch: GraphSketch, reach: ObligationReach): ObligationFinding => ({
    obliged: once(reach.reached.flatMap((r) => edgesFrom(sketch, r, EdgeName.packages).filter((p) => kindOf(sketch, p) === KindName.package).map((p) => ({ node: p, via: r })))),
    gaps: [],
  }),
})

// A sketch written by hand, for the criteria.
const sketch = (nodes: readonly (readonly [string, string, string?])[], edges: readonly (readonly [string, string, string])[]): GraphSketch => ({
  nodes: nodes.map(([ref, kind, library]): SketchNode => ({ ref, kind, module: "m", library, title: ref, effects: [], field: () => undefined })),
  edges: edges.map(([from, name, to]) => ({ from, to, name })),
})
const refs = (f: ObligationFinding) => f.obliged.map((o) => o.node).sort().join(" ")

// The graph of the criteria: shipped code, a scenario, requirements up to a goal, an ADR, data and its review, a page
// and its checks, the project's rule and a library's, a package.
const fixture = sketch(
  [["Show", "entry"], ["Draw", "function"], ["Words", "catalog"], ["Home", "scenario"], ["Ask", "requirement"], ["Sub", "requirement"],
    ["Other", "requirement"], ["Goal", "goal"], ["Why", "adr"], ["Poses", "dataset"], ["PosesReviewed", "review"], ["Page", "artifact"],
    ["Opens", "check"], ["OpenPage", "entry"], ["Phone", "check"], ["Rule", "rule"], ["StdRule", "rule", "std"], ["Three", "package"]],
  [["Home", "verifies", "Show"], ["Show", "serves", "Ask"], ["Ask", "refines", "Goal"], ["Sub", "refines", "Ask"], ["Other", "refines", "Goal"],
    ["Why", "appliedBy", "Draw"], ["PosesReviewed", "of", "Poses"], ["Opens", "on", "Page"], ["Opens", "runs", "OpenPage"], ["Phone", "on", "Page"],
    ["Draw", "packages", "Three"]],
)
const shipping: ObligationReach = { shipped: ["Page"], reached: ["Page", "Show", "Draw", "Words", "Poses"] }

/** Criteria of the code verified */
export const VerifiedCriteria = acceptance({
  accepts: Verified,
  owner: "trame",
  criteria: (criterion) => {
    criterion("The scenarios verifying the reached code are to prove", () => refs(Verified(fixture, shipping, { kinds: ["entry", "function"] })) === "Home")
    criterion("Reached code no scenario verifies, of the kinds named, is a gap", () => Verified(fixture, shipping, { kinds: ["entry", "function"] }).gaps.join(" ") === "Draw")
    criterion("A node is to prove once, for the first reached node that brought it in", () => {
      const twice = sketch([["S", "scenario"], ["A", "entry"], ["B", "entry"]], [["S", "verifies", "A"], ["S", "verifies", "B"]])
      const [only, ...others] = Verified(twice, { shipped: [], reached: ["A", "B"] }, { kinds: ["entry"] }).obliged
      return others.length === 0 && only?.via === "A"
    })
  },
})

/** Criteria of the product served */
export const ServedCriteria = acceptance({
  accepts: Served,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Served goes up to the goals and down to every requirement of them", () => refs(Served(fixture, shipping)) === "Ask Other Sub")
    criterion("Code that serves nothing obliges nothing", () => refs(Served(fixture, { shipped: [], reached: ["Words"] })) === "")
  },
})

/** Criteria of the decisions applied */
export const AppliedCriteria = acceptance({
  accepts: Applied,
  owner: "trame",
  criteria: (criterion) => {
    criterion("The ADRs a reached node applies are to prove", () => refs(Applied(fixture, shipping)) === "Why")
  },
})

/** Criteria of the data reviewed */
export const ReviewedCriteria = acceptance({
  accepts: Reviewed,
  owner: "trame",
  criteria: (criterion) => {
    criterion("The reviews of the data carried are to prove", () => refs(Reviewed(fixture, shipping)) === "PosesReviewed" && Reviewed(fixture, shipping).gaps.length === 0)
    criterion("A carried dataset nothing reviews is a gap", () => Reviewed(sketch([["Poses", "dataset"]], []), { shipped: [], reached: ["Poses"] }).gaps.join() === "Poses")
  },
})

/** Criteria of the artefacts checked */
export const CheckedCriteria = acceptance({
  accepts: Checked,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Checked by programs takes the checks a program runs", () => refs(Checked(fixture, shipping, { by: "programs" })) === "Opens")
    criterion("Checked by all takes the checks by hand too", () => refs(Checked(fixture, shipping, { by: "all" })) === "Opens Phone")
  },
})

/** Criteria of the rules held */
export const RuledCriteria = acceptance({
  accepts: Ruled,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Ruled takes the project's rules, not a library's", () => refs(Ruled(fixture)) === "Rule")
  },
})

/** Criteria of the packages safe */
export const SafeCriteria = acceptance({
  accepts: Safe,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Safe takes the packages the reached code uses", () => refs(Safe(fixture, shipping)) === "Three")
  },
})
