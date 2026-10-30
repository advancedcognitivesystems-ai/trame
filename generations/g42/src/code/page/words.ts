// The words of the page's script: what it says around the documents the engine wrote (the state of the compilation,
// the dates, the navigation, the banner, the figures it draws, the explorer). Written in a file, without dependencies
// beyond the prelude: the page, which runs in the browser where nothing is wired, calls it.

import { plural } from "../../../trame/kernel"

const body = () => ({
  // The state of the compilation, in the side bar -----------------------------------------------------------------

  /** Before the first graph arrives (trame dev). */
  waiting: () => "waiting for the first compilation…",
  compiling: () => "compiling…",
  /** The last compilation failed: the page keeps the graph compiled at that time. */
  refused: (time: string) => `last compilation refused · valid graph from ${time}`,
  compiledAt: (time: string, dates: number) => `trame dev · compiled at ${time} · ${plural(dates, "date")}`,
  exportOf: (day: string, dates: number) => `export of ${day} · ${plural(dates, "date")}`,

  // The dates --------------------------------------------------------------------------------------------------------

  today: () => "today",
  /** A date whose compilation failed. */
  failed: () => "failed",
  comesIntoForce: () => "Comes into force",
  noLongerInForce: () => "No longer in force",
  reviewPlanned: () => "Review planned",
  beforeAnyChange: () => "Before any dated change: the graph as it is declared.",
  noChangeThatDay: () => "No dated change on that day.",

  // The navigation ---------------------------------------------------------------------------------------------------

  issuesToAddress: () => "issues to address",
  perNode: () => "Per node",
  node: () => "Node",
  oneDocumentPerModule: () => "One document per module",
  modules: () => "Modules",
  documents: () => "Documents",
  figures: () => "Figures",
  summary: () => "Summary",
  forTools: () => "For tools",
  /** The command that writes a document in the terminal, as typed. */
  command: (words: string, date: string) => `npm run ${words} -- --at ${date}`,
  buildWords: () => "build",
  trameWords: (rest: string) => `trame ${rest}`,
  moduleViewWords: (view: string, module: string) => `trame view ${view} ${module}`,

  // The banner -------------------------------------------------------------------------------------------------------

  compilationFailed: () => "The last compilation failed",
  keptLastValid: () => "The page shows the last valid graph. Fix it and save: the page updates by itself.",
  hide: () => "Hide",

  // The main area ----------------------------------------------------------------------------------------------------

  noValidGraph: () => "No valid graph yet.",
  openingGraph: () => "Opening the graph…",
  compilingGraph: () => "Compiling…",
  lines: (n: number) => plural(n, "line"),
  graphAsOf: (day: string) => `graph as of ${day}`,
  unreadable: (why: string) => `The graph of this page cannot be read: ${why}`,

  // The figures the page draws ---------------------------------------------------------------------------------------

  figure: () => "Figure",
  timeline: () => "Timeline",
  decisionRemains: () => "a decision remains to be taken",
  declaredEdge: () => "declared edge",
  inferredEdge: () => "inferred from the code",
  computedOverlap: () => "computed overlap",
  prevails: () => "prevails",
  discarded: () => "discarded",
  history: () => "history",
  decisionToTake: () => "decision to take",
  graphDate: (day: string) => `date of the graph · ${day}`,
  /** When a period in force starts and ends, in the tip of its bar. */
  periodFrom: (day: string) => `from ${day}`,
  periodUntil: (day: string) => ` until ${day}`,
  noEnd: () => ", no end",
  /** A dated mark, in its tip. */
  markOn: (label: string, day: string) => `${label}: ${day}`,

  // The explorer -----------------------------------------------------------------------------------------------------

  layers: () => "Layers",
  goToNode: () => "Go to a node…",
  goToNodeLabel: () => "Go to a node",
  nodesVisited: () => "Nodes visited",
  hint: () => "A module opens on its nodes; a node, on its neighbours.",
  mapLabel: () => "The layers of the graph, by module",
  nodes: (n: number) => plural(n, "node"),
  neighbours: (n: number) => plural(n, "neighbour"),
  edges: (n: number) => plural(n, "edge"),
  more: (n: number) => `${n} more`,
  openItsCard: (kind: string) => `${kind} · open its card`,
  andItsNeighbours: (title: string) => `${title} and its neighbours`,
})

export type Api = ReturnType<typeof body>
export default body
