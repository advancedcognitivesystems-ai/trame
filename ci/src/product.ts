/** Continuous integration · Product */

import { goal } from "#trame/kinds/goal"

// What the library is for. A project's graph says how a version of it ships (its shipments, their artefacts, checks,
// reviews, deployments), and trame ship runs it here. To run it elsewhere (a service of continuous integration, a
// script on another machine), the engine computes the plan of the run from the graph (what to install, what to prepare,
// the words that ship, what to keep), and a writer of this library gives it the form that place reads. A new place is
// a new writer; the plan, and the graph it comes from, stay the same.

/**
 * A shipment runs elsewhere as it runs here
 * The file a service of continuous integration or another machine runs is written from the graph, by Trame: it
 * prepares what the shipment's programs need, then runs trame ship, which checks, refuses or deploys as it does here.
 * Nobody writes it by hand, so it never says something the graph does not.
 */
export const RunsElsewhere = goal({ owner: "trame" })

/**
 * Each place is a writer
 * A place that runs a shipment (GitHub Actions, a shell, another service tomorrow) is one writer, a syntax element with
 * its examples, written once in this library; projects choose one by naming it as what produces an artefact.
 */
export const OneWriterPerPlace = goal({ owner: "trame" })

/**
 * A repository is set as its graph decides
 * The settings of the repository a project lives in (its main branch protected, the checks a pull request passes, how
 * it merges, its pages) are a decision of the graph, which a program of the project's SDLC applies and reads back: what
 * someone changes by hand is seen, and set again by trame ship.
 */
export const RepositoryAsDecided = goal({ owner: "trame" })
