// The words of the views: their titles, their introductions, their headings, what they say of the graph.
// A catalog of the language (catalog "Words of the views"): a view writes no text of its own, it says it through this.

const body = () => ({
  // adrs -------------------------------------------------------------------------------------------------------

  adrsArchitectureDecisions: () => "Architecture decisions",
  adrsTheGraphRecordsNoArchitectureDecision: () => "The graph records no architecture decision.",
  adrsArchitectureDecision: () => "architecture decision",
  adrsDecision: () => "Decision",
  adrsAppliedBy: () => "Applied by",
  adrsTheChoicesThatShapeTheProduct: () => "The choices that shape the product without being values, in force on ",
  adrsWhyEachWasTakenWhatWas: () => ": why each was taken, what was rejected, and the nodes that apply it.",
  adrsHeldByTheNodesThatApply: (p0: unknown, p1: unknown) => `${p0}, ${p1} held by the nodes that apply them`,

  // assembly ---------------------------------------------------------------------------------------------------

  assemblyAssembly: () => "Assembly",
  assemblyCannotBeAssembledIn: (p0: unknown) => `Cannot be assembled in "${p0}"`,
  assemblyItsValueReadAtStartup: () => "its value (read at startup)",
  assemblyItsBody: () => "its body",
  assemblyDependsOn: () => "Depends on",
  assemblyImplements: () => "Implements",
  assemblyNodeBuilt: () => "node built",
  assemblyNodesBuilt: () => "nodes built",
  assemblyPortWired: () => "port wired",
  assemblyPortsWired: () => "ports wired",
  assemblyImplementedBy: () => "Implemented by",
  assemblyDeclaredEffects: () => "Declared effects",
  assemblyTheWiringIn: (p0: unknown) => `The wiring in "${p0}"`,
  assemblyBuildOrder: () => "Build order",
  assemblyGives: () => "Gives",
  assemblyReceives: () => "Receives",
  assemblyAssembly2: (p0: unknown) => `Assembly · ${p0}`,
  assemblyWhat: () => "What ",
  assemblyBecomesInEachEnvironmentWithThe: () => " becomes in each environment, with the graph of ",
  assemblyEntryPoints: () => ". Entry points: ",
  assemblyTrameAssemble: () => "trame assemble",
  assemblyWritesThisPlanIntoAProgram: () => " writes this plan into a program; nothing in it is chosen at startup.",

  // choices ----------------------------------------------------------------------------------------------------

  assemblyPort: () => "Port",
  choicesTechnicalChoices: () => "Technical choices",
  choicesTheGraphMakesNoTechnicalChoice: () => "The graph makes no technical choice: each implementation names the environments it serves.",
  choicesTechnicalChoice: () => "technical choice",
  choicesPattern: () => "Pattern",
  choicesFollowedBy: () => "Followed by",
  choicesWhatAnswersEachPortInEach: () => "What answers each port in each environment on ",
  choicesATechnicalChoiceSaysWhatIt: () => ": a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.",
  choicesForIn: (p0: unknown, p1: unknown, p2: unknown) => `${p0} for ${p1}, in ${p2}`,

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
  historyWhatTheCodeSaysAbout: () => "What the code says about ",
  historyWhatWasClaimedInTheOrder: () => ": what was claimed, in the order of the code, and what remains of it on ",

  // impact -----------------------------------------------------------------------------------------------------

  impactImpact: () => "Impact",
  impactImpact2: (p0: unknown) => `Impact · ${p0}`,
  impactWhatDependsOn: () => "What depends on ",
  impactDirectlyOrNotOn: () => ", directly or not, on ",
  impactNodeDepends: () => "node depends",
  impactNodesDepend: () => "nodes depend",
  impactIncludingBlockedOrViolated: (p0: unknown) => `, including ${p0} blocked or violated`,
  impactNothingDependsOn: (p0: unknown) => `Nothing depends on "${p0}"`,
  impactToLookAt: () => "To look at: ",
  impactOn: (p0: unknown, p1: unknown, p2: unknown) => `${p0} on "${p1}"${p2}`,

  // index ------------------------------------------------------------------------------------------------------

  indexProject: () => "Project",

  // layers -----------------------------------------------------------------------------------------------------

  layersLayers: () => "Layers",
  layersOrderedByDistanceToTheGoals: () => ", ordered by distance to the goals.",
  layersEachRankIsOneEdgeFurther: () => "Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.",

  // module -----------------------------------------------------------------------------------------------------

  indexTheGraphInForceOn: () => "The graph in force on ",
  indexGeneratedBy: () => ", generated by ",
  indexTrameBuild: () => "trame build",
  moduleModuleDocument: () => "Module document",
  moduleSrcTs: (p0: unknown) => `src/${p0}.ts`,
  moduleThisDocumentFollowsTheCodeTo: () => ". This document follows the code: to change it, change the code.",

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
  reviewWhatTheDeclarationsThatAreNot: () => "What the declarations that are not published yet add to the published graph (",
  reviewAsOf: () => "), as of ",
  reviewNothingIsPublishedYetTheWhole: () => "Nothing is published yet: the whole graph is under review. ",
  reviewNpmRunPublish: () => "npm run publish",
  reviewFreezesTheCurrentState: () => " freezes the current state.",
  reviewNewDeclaration: () => "new declaration",
  reviewPublishedDeclarationAffected: () => "published declaration affected",
  reviewPublishedDeclarationsAffected: () => "published declarations affected",
  reviewBlockingHoleAdded: () => "blocking hole added",
  reviewBlockingHolesAdded: () => "blocking holes added",
  reviewTheNewDeclarationsRedefineNothingThat: () => "The new declarations redefine nothing that is published.",
  reviewRequested: () => "Requested",
  reviewInForceOn: () => ", in force on ",
  reviewWithTheBranch: () => " with the branch: ",
  reviewWhatTheBranchRedefines: () => "What the branch redefines",
  reviewToCheckBeforeMerging: () => "To check before merging",
  reviewTheBranchAddsNoHoleAnd: () => "The branch adds no hole and no error, and touches no published declaration.",
  reviewNewDeclarations: () => "New declarations",
  reviewDeclaration: () => "Declaration",

  // schedule ---------------------------------------------------------------------------------------------------

  historyOwner: () => "Owner",
  scheduleSchedule: () => "Schedule",
  scheduleAllTheDatesOfTheGraph: () => "All the dates of the graph, around ",
  scheduleEntriesIntoForceEndsAndPlanned: () => ": entries into force, ends, and planned checks and reviews.",
  schedulePastDate: () => "past date",
  scheduleUpcomingDate: () => "upcoming date",
  scheduleNext: (p0: unknown, p1: unknown) => ` · next: ${p0}, "${p1}"`,
  scheduleDate: () => "Date",
  scheduleWhen: () => "When",
  scheduleWhatHappens: () => "What happens",
  scheduleDateOfTheGraph: () => "date of the graph",

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
  summaryAndComputed: (p0: unknown) => ` and ${p0} computed`,
  summaryTrameBuildOfThemInferredFrom: (p0: unknown, p1: unknown, p2: unknown, p3: unknown, p4: unknown, p5: unknown) => `trame build · ${p0} · ${p1} · ${p2} · ${p3}, ${p4} of them inferred from the code${p5}`,

  // timeline ---------------------------------------------------------------------------------------------------

  timelineTimeline: () => "Timeline",
  timelineWhatComesIntoForceStopsOr: () => "What comes into force, stops or reaches its deadline, around ",
  timelineTheBarsAreThePeriodsOf: () => "The bars are the periods of validity, and the marks are the deadlines and reviews. The line marks the date of the graph.",

  // why --------------------------------------------------------------------------------------------------------

  whyWhy: () => "Why",
  whyWhy2: (p0: unknown) => `Why · ${p0}`,
  whyTheShortestPathFrom: () => "The shortest path from ",
  whyToAGoal: () => " to a goal.",
  whyIsAGoalItIsThe: () => " is a goal: it is the reason the rest exists.",
  whyIsConnectedToNoGoal: () => " is connected to no goal.",
})

export type Api = ReturnType<typeof body>
export default body
