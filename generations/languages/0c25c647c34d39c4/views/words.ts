// The words of the views: their titles, their introductions, their headings, what they say of the graph.
// A catalog of the language (catalog "Words of the views"): a view writes no text of its own, it says it through this.
// A sentence that holds pieces (a reference, a date, a code) returns them where the language places them, with its
// punctuation; a count says its noun, singular or plural, as the language does.

import { plural, type Inline } from "../trame/kernel"

const body = () => ({

  // adrs -------------------------------------------------------------------------------------------------------

  adrsArchitectureDecisions: () => "Architecture decisions",
  adrsTheGraphRecordsNoArchitectureDecision: () => "The graph records no architecture decision.",
  adrsDecision: () => "Decision",
  adrsAppliedBy: () => "Applied by",
  adrsTheChoicesThatShapeTheProduct: () => "The choices that shape the product without being values, in force on ",
  adrsWhyEachWasTakenWhatWas: () => ": why each was taken, what was rejected, and the nodes that apply it.",
  adrsHeldByTheNodesThatApply: (count: number, held: number) => `${plural(count, "architecture decision")}, ${held} held by the nodes that apply them`,
  adrsUnknown: () => "unknown",

  // assembly ---------------------------------------------------------------------------------------------------

  assemblyAssembly: () => "Assembly",
  assemblyCannotBeAssembledIn: (p0: unknown) => `Cannot be assembled in "${p0}"`,
  assemblyItsValueReadAtStartup: () => "its value (read at startup)",
  assemblyItsBody: () => "its body",
  assemblyDependsOn: () => "Depends on",
  assemblyImplements: () => "Implements",
  assemblyImplementedBy: () => "Implemented by",
  assemblyDeclaredEffects: () => "Declared effects",
  assemblyTheWiringIn: (p0: unknown) => `The wiring in "${p0}"`,
  assemblyBuildOrder: () => "Build order",
  assemblyGives: () => "Gives",
  assemblyReceives: () => "Receives",
  assemblyAssembly2: (p0: unknown) => `Assembly · ${p0}`,
  assemblyTrameAssemble: () => "trame assemble",
  assemblyNone: () => "none",
  assemblyBuiltAndWired: (nodes: number, ports: number) => `${plural(nodes, "node built", "nodes built")}, ${plural(ports, "port wired", "ports wired")}`,
  assemblyIntroduction: (component: Inline, date: Inline, entries: readonly Inline[], command: Inline): Inline[] => [
    "What ", component, " becomes in each environment, with the graph of ", date, ". Entry points: ", ...entries, ". ", command,
    " writes this plan into a program; nothing in it is chosen at startup.",
  ],

  // choices ----------------------------------------------------------------------------------------------------

  assemblyPort: () => "Port",
  choicesTechnicalChoices: () => "Technical choices",
  choicesTheGraphMakesNoTechnicalChoice: () => "The graph makes no technical choice: each implementation names the environments it serves.",
  choicesPattern: () => "Pattern",
  choicesFollowedBy: () => "Followed by",
  choicesWhatAnswersEachPortInEach: () => "What answers each port in each environment on ",
  choicesATechnicalChoiceSaysWhatIt: () => ": a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.",
  choicesForIn: (choices: number, ports: number, environments: number) =>
    `${plural(choices, "technical choice")} for ${plural(ports, "port")}, in ${plural(environments, "environment")}`,

  // history ----------------------------------------------------------------------------------------------------

  historyHistory: () => "History",
  historyPublished: () => " · published",
  historyNotPublishedYet: () => " · not published yet",
  historyWhatItClaims: () => "What it claims",
  historyBefore: () => "Before",
  historyAfter: () => "After",
  historyWhatIsClaimedOnIt: () => "What is claimed on it",
  historyInForceOn: (p0: unknown) => `In force on ${p0}`,
  historyHistory2: (p0: unknown) => `History · ${p0}`,
  historyRepealed: () => "repealed",
  historyIntroduction: (node: Inline, date: Inline): Inline[] => ["What the code says about ", node, ": what was claimed, in the order of the code, and what remains of it on ", date, "."],

  // impact -----------------------------------------------------------------------------------------------------

  impactImpact: () => "Impact",
  impactImpact2: (p0: unknown) => `Impact · ${p0}`,
  impactNothingDependsOn: (p0: unknown) => `Nothing depends on "${p0}"`,
  impactIntroduction: (node: Inline, date: Inline): Inline[] => ["What depends on ", node, ", directly or not, on ", date, "."],
  impactDependOn: (count: number, title: string, blocked: number) =>
    `${plural(count, "node depends", "nodes depend")} on "${title}"${blocked ? `, including ${blocked} blocked or violated` : ""}`,
  impactToLookAt: (nodes: readonly Inline[]): Inline[] => ["To look at: ", ...nodes, "."],

  // index ------------------------------------------------------------------------------------------------------

  indexProject: () => "Project",
  indexIntroduction: (date: Inline, command: Inline): Inline[] => ["The graph in force on ", date, ", generated by ", command, "."],

  // layers -----------------------------------------------------------------------------------------------------

  layersLayers: () => "Layers",
  layersEachRankIsOneEdgeFurther: () => "Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.",
  layersIntroduction: (date: Inline): Inline[] => ["The graph in force on ", date, ", ordered by distance to the goals."],

  // module -----------------------------------------------------------------------------------------------------

  indexTrameBuild: () => "trame build",
  moduleModuleDocument: () => "Module document",
  moduleSrcTs: (p0: unknown) => `src/${p0}.ts`,
  moduleIntroduction: (date: Inline, command: Inline, source: Inline): Inline[] => [
    "The graph in force on ", date, ", generated by ", command, " from ", source, ". This document follows the code: to change it, change the code.",
  ],

  // overlaps ---------------------------------------------------------------------------------------------------

  overlapsClaims: () => "Claims",
  overlapsClaimedBy: () => "Claimed by",
  overlapsThereIsNoOverlapOn: () => "There is no overlap on ",
  overlapsNoValueIsClaimedByTwo: () => ": no value is claimed by two nodes at once.",
  overlapsTheValuesClaimedBySeveralNodes: () => "The values claimed by several nodes on ",
  overlapsAndHowEachOverlapWasSettled: () => ", and how each overlap was settled.",

  // owners -----------------------------------------------------------------------------------------------------

  ownersOwners: () => "Owners",
  ownersNotInForce: () => "not in force",
  ownersToDecide: () => "to decide",
  ownersToDecideOrSettle: () => "To decide or settle",
  ownersErrors: () => "Errors",
  ownersToWatch: () => "To watch",
  ownersOwns: () => "Owns",
  ownersNothingToDecideOrWatch: () => "Nothing to decide or watch.",
  ownersState: () => "State",
  ownersWhatEachPersonMustDecideSettle: () => "What each person must decide, settle or watch on ",
  ownersAndWhatTheyOwn: () => ", and what they own.",
  ownersUnassigned: () => "unassigned",

  // review -----------------------------------------------------------------------------------------------------

  historyTarget: () => "Target",
  historyPath: () => "Path",
  historyOutcome: () => "Outcome",
  historyWholeNode: () => "(whole node)",
  historyInForce: () => "in force",
  historyDeclared: () => "Declared",
  historyBy: () => "By",
  historySource: () => "Source",
  ownersKind: () => "Kind",
  reviewBranchReview: () => "Branch review",
  reviewNothingIsPublishedYetTheWhole: () => "Nothing is published yet: the whole graph is under review. ",
  reviewNpmRunPublish: () => "npm run publish",
  reviewFreezesTheCurrentState: () => " freezes the current state.",
  reviewTheNewDeclarationsRedefineNothingThat: () => "The new declarations redefine nothing that is published.",
  reviewRequested: () => "Requested",
  reviewInForceOn: () => ", in force on ",
  reviewWithTheBranch: () => " with the branch: ",
  reviewWhatTheBranchRedefines: () => "What the branch redefines",
  reviewToCheckBeforeMerging: () => "To check before merging",
  reviewTheBranchAddsNoHoleAnd: () => "The branch adds no hole and no error, and touches no published declaration.",
  reviewNewDeclarations: () => "New declarations",
  reviewDeclaration: () => "Declaration",
  reviewIntroduction: (lock: Inline, date: Inline): Inline[] => ["What the declarations that are not published yet add to the published graph (", lock, "), as of ", date, "."],
  reviewSummary: (fresh: number, affected: number, overlaps: number, blocking: number) =>
    `${plural(fresh, "new declaration")} · ${plural(affected, "published declaration affected", "published declarations affected")} · ${plural(overlaps, "overlap")} · ${plural(blocking, "blocking hole added", "blocking holes added")}`,

  // schedule ---------------------------------------------------------------------------------------------------

  historyOwner: () => "Owner",
  scheduleSchedule: () => "Schedule",
  scheduleAllTheDatesOfTheGraph: () => "All the dates of the graph, around ",
  scheduleEntriesIntoForceEndsAndPlanned: () => ": entries into force, ends, and planned checks and reviews.",
  scheduleDate: () => "Date",
  scheduleWhen: () => "When",
  scheduleWhatHappens: () => "What happens",
  scheduleDateOfTheGraph: () => "date of the graph",
  scheduleToday: () => "today",
  scheduleRelative: (days: number) => (days === 0 ? "today" : days > 0 ? `in ${plural(days, "day")}` : `${plural(-days, "day")} ago`),
  scheduleSummary: (past: number, upcoming: number, next?: { date: string; title: string }) =>
    `${plural(past, "past date")} · ${plural(upcoming, "upcoming date")}${next ? ` · next: ${next.date}, "${next.title}"` : ""}`,

  // snapshot ---------------------------------------------------------------------------------------------------

  snapshotSnapshot: () => "Snapshot",
  snapshotStillOpen: () => "Still open",
  snapshotTheExactStateExpectedOn: () => "The exact state expected on ",
  snapshotWithoutHistoryTheValuesInForce: () => ", without history: the values in force, without the amendments that produced them.",

  // summary ----------------------------------------------------------------------------------------------------

  adrsStatus: () => "Status",
  assemblyNode: () => "Node",
  historyOverlaps: () => "Overlaps",
  indexModule: () => "Module",
  indexOpenIssues: () => "Open issues",
  summaryBuildSummary: () => "Build summary",
  summaryContents: () => "Contents",
  summaryStatuses: () => "Statuses",
  summaryCount: (count: number, label: string) => `${count} ${label}`,
  summaryTitle: (date: string, modules: number, nodes: number, edges: number, inferred: number, computed: number) =>
    `trame build · ${date} · ${plural(modules, "module")} · ${plural(nodes, "node")} · ${plural(edges, "edge")}, ${inferred} of them inferred from the code${computed ? ` and ${computed} computed` : ""}`,

  // timeline ---------------------------------------------------------------------------------------------------

  timelineTimeline: () => "Timeline",
  timelineTheBarsAreThePeriodsOf: () => "The bars are the periods of validity, and the marks are the deadlines and reviews. The line marks the date of the graph.",
  timelineIntroduction: (date: Inline): Inline[] => ["What comes into force, stops or reaches its deadline, around ", date, "."],

  // why --------------------------------------------------------------------------------------------------------

  whyWhy: () => "Why",
  whyWhy2: (p0: unknown) => `Why · ${p0}`,
  whyTheShortestPathFrom: () => "The shortest path from ",
  whyToAGoal: () => " to a goal.",
  whyIsAGoalItIsThe: () => " is a goal: it is the reason the rest exists.",
  whyIsConnectedToNoGoal: () => " is connected to no goal.",


  // claims --------------------------------------------------------------------------------------------------------

  claimsNotInForceOn: (date: string) => `not in force on ${date}`,
  claimsApplied: (reason?: string) => (reason ? `applied (${reason})` : "applied"),
  claimsReplacedBy: (by?: Inline): Inline[] => ["replaced by ", ...(by ? [by] : [])],
  claimsDiscardedInFavourOf: (winners: readonly Inline[], reason?: string): Inline[] => ["discarded in favour of ", ...winners, ...(reason ? [` (${reason})`] : [])],
  claimsToBeSettledBy: (contested: Inline, arbiter?: Inline): Inline[] => [contested, ", to be settled by ", arbiter ?? "an owner yet to be named"],
})

export type Api = ReturnType<typeof body>
export default body
