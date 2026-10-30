// The words that the renderers add to the intermediate format: the names of vocabulary values, labels, notes, table
// headers, the sentence of an overlap. Written in a file, without dependencies: the page, which runs in the browser where
// nothing is wired, calls it too.
// Vocabulary values are named by their key in the prelude's vocabularies, which does not change when the words do.

import type { KeyOf, Outcome, Severity, Status, Validity } from "../../../trame/kernel"

const body = () => {
  const statusNames: Record<KeyOf<typeof Status>, string> = { held: "held", violated: "violated", blocked: "blocked", unknown: "unknown" }
  const severityNames: Record<KeyOf<typeof Severity>, string> = { blocking: "blocking", error: "error", warning: "warning" }
  const outcomeNames: Record<KeyOf<typeof Outcome>, string> = { passed: "passed", failed: "failed", blocked: "blocked", error: "error" }
  const validityNames: Record<KeyOf<typeof Validity>, string> = { inForce: "In force", notYet: "Not yet in force", noLonger: "No longer in force" }

  return {
    // Values ------------------------------------------------------------------------------------------------------

    /** A value that is absent (null). */
    none: () => "none",
    /** A value that is not decided yet. */
    undecided: () => "to be decided",
    /** A value that claims contest. */
    contested: () => "contested, to be settled",
    /** A rule (a function value) as it was declared. */
    originalRule: () => "original rule",
    /** A rule that an amendment redefined. */
    redefinedRule: () => "redefined rule",
    /** A range of values. */
    range: (from: string, to: string) => `from ${from} to ${to}`,

    // The words of a Gantt chart ----------------------------------------------------------------------------------

    /** The title of a timeline drawn as a Gantt chart, around the date of the graph. */
    ganttTitle: (date: string) => `Around ${date}`,
    /** The bar of a period in force. */
    ganttPeriod: () => "In force",
    /** The section of the date of the graph. */
    ganttToday: () => "Date of the graph",
    /** The values of a list. */
    valueList: (values: readonly string[]) => values.join(", "),
    /** The entries of a map: each key with its value. */
    valueMap: (entries: readonly (readonly [string, string])[]) => entries.map(([key, value]) => `${key}, ${value}`).join("; "),
    /** A record: each name with its value, between braces. */
    valueRecord: (entries: readonly (readonly [string, string])[]) => `{ ${entries.map(([name, value]) => `${name}: ${value}`).join(", ")} }`,

    // Names of vocabulary values ----------------------------------------------------------------------------------

    /** A status, by its key in `Status`. */
    statusName: (status: KeyOf<typeof Status>) => statusNames[status],
    /** A severity, by its key in `Severity`. */
    severityName: (severity: KeyOf<typeof Severity>) => severityNames[severity],
    /** The outcome of a check, by its key in `Outcome`. */
    outcomeName: (outcome: KeyOf<typeof Outcome>) => outcomeNames[outcome],
    /** Whether a node is in force, by its key in `Validity`. */
    validityName: (state: KeyOf<typeof Validity>) => validityNames[state],
    /** What follows the validity: since when, until when (the dates are already written). */
    validityDetail: (state: KeyOf<typeof Validity>, from?: string, until?: string) =>
      state === "inForce" ? `${from ? ` since ${from}` : ""}${until ? `, until ${until}` : ""}`
        : state === "notYet" ? `${from ? `: from ${from}` : ""}${until ? `, until ${until}` : ""}`
          : until ? ` since ${until}` : "",

    // The sentence of an overlap ----------------------------------------------------------------------------------

    /** An overlap of claims and how it was settled. Each parameter is a part of the sentence (references, values). */
    resolution: (paths: string, target: string, claimants: string, verdict: string, reason: string) =>
      `Overlap on ${paths} of ${target}, between ${claimants}: ${verdict} (${reason}).`,
    /** The path of a claim on the whole node. */
    wholeNode: () => "the whole node",
    /** The verdict of a contested overlap: the contested value, and who settles it. */
    contestedBy: (contested: string, arbiter: string) => `${contested} by ${arbiter}`,
    /** Who settles a contested overlap, when nobody is named. */
    arbiterToAppoint: () => "an owner to be appointed",
    /** The verdict when every claim applies. */
    allApply: (winners: string) => `all apply, in the order ${winners}`,
    /** The verdict when some claims prevail over the others. */
    prevails: (winners: string, count: number) => `${winners} ${count === 1 ? "prevails" : "prevail"}`,
    /** The reason of an overlap settled without one. */
    noReason: () => "no reason given",
    /** The reason of an overlap, and the nodes that support it. */
    seeAlso: (reason: string, because: string) => `${reason}; see ${because}`,

    // Cards -------------------------------------------------------------------------------------------------------

    /** The title of a repealed node. */
    repealedTitle: (title: string) => `${title} (repealed)`,
    /** The mark of a repealed node. */
    repealed: () => "Repealed",
    /** The note under the title of a repealed node, in a document. */
    repealedNote: (repealed: string, by: string) => `${repealed} by ${by}: this node is no longer in the graph in force, nor in the snapshot.`,
    /** The note under the title of a repealed node, in the terminal. */
    repealedBy: (by: string) => `repealed by ${by}`,
    /** A node that is published. */
    published: () => "published",
    /** The status of a node, among its identifiers, in a document. */
    cardStatus: (status: string) => `status: ${status}`,
    /** The status of a node, among its identifiers, in the terminal. */
    cardStatusPlain: (status: string) => `status ${status}`,
    /** What is not in force at the date of the graph. */
    notInForce: () => "not in force",
    /** A link that the engine read in the code, not in the declaration. */
    inferredNature: () => "inferred from the code",
    /** A link that the engine computed (an overlap). */
    computedNature: () => "computed",
    /** The label of a link or an edge that is not in force at the date of the graph. */
    inactiveLabel: (label: string) => `${label} (not in force)`,
    /** A fact: a label and its value. */
    fact: (label: string, value: string) => `${label}: ${value}`,

    // Tables ------------------------------------------------------------------------------------------------------

    /** The header of the column of criteria, in a table of checks. */
    criterionHeader: () => "Criterion",
    /** The header of the column of results, in a table of checks. */
    resultHeader: () => "Result",
    /** The header of the column of severities, in a table of issues. */
    severityHeader: () => "Severity",
    /** The header of the column of problems, in a table of issues. */
    whatHeader: () => "What",
    /** The header of the column of places, in a table of issues. */
    whereHeader: () => "Where",
    /** The header of the column of owners, in a table of issues. */
    ownerHeader: () => "Owner",
    /** The header of the column of consequences, in a table of issues. */
    effectHeader: () => "Consequence",
    /** An issue that has no owner yet. */
    unassigned: () => "to be assigned",

    // Figures in the terminal -------------------------------------------------------------------------------------

    /** The start of a period, in a list of dates. */
    periodStart: () => "start",
    /** The end of a period, in a list of dates. */
    periodEnd: () => "end",
    /** The date of the graph, in a list of dates. */
    graphDate: () => "date of the graph",
    /** Two nodes of a path joined by no known edge. */
    linkedTo: () => "linked to",
    /** A rank of a figure in layers. */
    rank: (rank: number) => `rank ${rank}`,

    // Errors ------------------------------------------------------------------------------------------------------

    /** A block that no renderer knows. */
    unknownBlock: (block: string) => `unknown block: ${block}`,
  }
}

export type Api = ReturnType<typeof body>
export default body
