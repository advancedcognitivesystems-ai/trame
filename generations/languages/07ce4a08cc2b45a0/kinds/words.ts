// The words of the kinds: their labels, the labels of their fields and edges, what their holes say, what they render.
// A catalog of the language (catalog "Words of the kinds"): a kind writes no text of its own, it says it through this.
// A sentence that holds pieces (a reference, a date, a code) returns them where the language places them, with its
// punctuation; a count says its noun, singular or plural, as the language does.

import { plural, type Inline } from "../trame/kernel"

const body = () => ({
  // acceptance -------------------------------------------------------------------------------------------------

  acceptanceAcceptanceCriteria: () => "Acceptance criteria",
  acceptanceAccepts: () => "Accepts",
  acceptanceCriterionNotMet: (p0: unknown) => `Criterion not met: "${p0}"`,
  acceptanceOwner: () => " · owner: ",
  acceptanceAcceptanceCriterion: () => "acceptance criterion",
  acceptanceAcceptanceCriteria2: () => "acceptance criteria",

  // adr --------------------------------------------------------------------------------------------------------

  adrArchitectureDecision: () => "Architecture decision",
  adrArchitectureDecisions: () => "Architecture decisions",
  adrAppliedBy: () => "Applied by",
  adrApplies: () => "Applies",
  adrNothingAppliesItYetAWish: () => "Nothing applies it yet: a wish, not a decision",

  // amendment --------------------------------------------------------------------------------------------------

  amendmentAmendment: () => "Amendment",
  amendmentAmendments: () => "Amendments",
  amendmentUntil: () => "Until",
  amendmentAmends: () => "Amends",
  amendmentAmendedBy: () => "Amended by",
  amendmentReplaces: () => "Replaces",
  amendmentReplacedBy: () => "Replaced by",
  amendmentReplaces2: (p0: unknown, p1: unknown) => `"${p0}" replaces "${p1}"`,
  amendmentNestedPathsTheMorePreciseOne: () => "nested paths: the more precise one applies last",
  amendmentApprovedByOwnerOf: (p0: unknown, p1: unknown) => `approved by ${p0}, owner of "${p1}"`,
  amendmentApprovedSeveralOfTheseAmendments: (p0: unknown) => `${p0} approved several of these amendments`,
  amendmentNoneReplacesTheOtherAndThe: () => "none replaces the other and the target's owner approved none of them",
  amendmentAmendmentWithoutEffectItRedefinesNothing: () => "Amendment without effect: it redefines nothing",
  amendmentChangesNothingAlreadyHasThisValue: (p0: unknown) => `Changes nothing: ${p0} already has this value`,
  amendmentBefore: () => "Before",
  amendmentAfter: () => "After",
  amendmentTheAmendmentInTheCode: () => "The amendment, in the code",

  // approval ---------------------------------------------------------------------------------------------------

  approvalApproval: () => "Approval",
  approvalApprovals: () => "Approvals",
  approvalApprovedBy: () => "Approved by",
  approvalApproves: () => "Approves",
  approvalApprovedBy2: () => "Approved by ",
  approvalApprovedByBecause: (who: Inline, why?: string): Inline[] => ["Approved by ", who, ...(why ? [": ", why] : [])],

  // assumption -------------------------------------------------------------------------------------------------

  assumptionAssumption: () => "Assumption",
  assumptionAssumptions: () => "Assumptions",
  assumptionCheckBefore: () => "Check before",
  assumptionAssumptionExpiredOnWithoutEvidence: (p0: unknown) => `Assumption expired on ${p0}, without evidence`,
  assumptionCheckTheAssumptionBeforeIn: (date: string, days: number) => `Check the assumption before ${date} (in ${plural(days, "day")})`,
  assumptionNoEvidenceYet: () => "no evidence yet",
  assumptionEvidence: () => "Evidence",
  assumptionNoneYet: () => "none yet",
  assumptionYes: () => "yes",

  // binding ----------------------------------------------------------------------------------------------------

  adrContext: () => "Context",
  adrConsequences: () => "Consequences",
  adrContext2: () => "Context: ",
  adrConsequences2: () => "Consequences: ",
  adrWhy: () => "Why",
  bindingTechnicalChoice: () => "Technical choice",
  bindingTechnicalChoices: () => "Technical choices",
  bindingChooses: () => "Chooses",
  bindingFollows: () => "Follows",
  bindingChoosesNothing: () => "Chooses nothing",
  bindingHoldsInNoEnvironment: () => "Holds in no environment",
  bindingFollowsNoPatternTheShapeOf: () => "Follows no pattern: the shape of the choice is not checked",
  bindingImplementsNoPortThereIsNothing: (p0: unknown) => `"${p0}" implements no port: there is nothing to choose it for`,
  bindingChoosesAndForTheSamePort: (p0: unknown, p1: unknown, p2: unknown) => `Chooses "${p0}" and "${p1}" for the same port "${p2}"`,
  bindingIsReachedDirectlyByNotThrough: (p0: unknown, p1: unknown) => `"${p0}" is reached directly by "${p1}", not through its port`,
  bindingFollowsWhichRequires: (p0: unknown, p1: unknown) => `Follows "${p0}", which requires ${p1}`,
  bindingAFunction: () => "a function",
  bindingAnImplementation: () => "an implementation",
  bindingIn2: () => "In ",
  bindingWhichIs: () => "Which is",

  // catalog ----------------------------------------------------------------------------------------------------

  catalogMessageCatalog: () => "Message catalog",
  catalogMessageCatalogs: () => "Message catalogs",
  catalogWrittenIn: () => "Written in",
  catalogLanguageOf: () => "Language of",
  catalogTheMessagesAreWrittenIn: () => "The messages are written in ",
  catalogTheMessagesInCode: () => "The messages, in code",

  // component --------------------------------------------------------------------------------------------------

  componentComponent: () => "Component",
  componentComponents: () => "Components",
  componentStartup: () => "Startup",
  componentDeployedIn: () => "Deployed in",
  componentDeploys: () => "Deploys",
  componentEntryPoint: () => "entry point",

  // decision ---------------------------------------------------------------------------------------------------

  adrRejected: () => "Rejected",
  decisionDecision: () => "Decision",
  decisionDecisions: () => "Decisions",
  decisionReviewPlanned: () => "Review planned",
  decisionAllowedRange: () => "Allowed range",
  decisionCappedBy: () => "Capped by",
  decisionCaps: () => "Caps",
  decisionIsOutsideTheRangeFromTo: (p0: unknown, p1: unknown, p2: unknown, p3: unknown) => `${p0}${p1} is outside the range from ${p2} to ${p3}`,
  decisionCapCannotBeCheckedIsNot: (p0: unknown) => `Cap cannot be checked: "${p0}" is not decided`,
  decisionExceeds: (p0: unknown, p1: unknown, p2: unknown) => `${p0} exceeds "${p1}" (${p2})`,
  decisionAmendedBy: () => " · amended by ",
  decisionCase: () => "Case",

  // entry-point ------------------------------------------------------------------------------------------------

  entryPointEntryPoint: () => "Entry point",
  entryPointEntryPoints: () => "Entry points",
  entryPointTrigger: () => "Trigger",
  entryPointExposes: () => "Exposes",
  entryPointMessageOn: (p0: unknown) => `message on ${p0}`,
  entryPointThePageLoads: () => "the loading of the page",
  entryPointTriggeredBy: () => "Triggered by ",

  // environment ------------------------------------------------------------------------------------------------

  environmentEnvironments: () => "Environments",

  // function ---------------------------------------------------------------------------------------------------

  entryPointPartOf: () => "Part of",
  functionFunction: () => "Function",
  functionFunctions: () => "Functions",
  functionMustStaySynchronous: () => "Must stay synchronous",
  functionContains: () => "Contains",
  functionMustStaySynchronousButDependsOn: () => "Must stay synchronous, but depends on something asynchronous",
  functionMustStaySynchronous2: () => "Must stay synchronous.",

  // goal -------------------------------------------------------------------------------------------------------

  goalGoal: () => "Goal",
  goalGoals: () => "Goals",

  // implementation ---------------------------------------------------------------------------------------------

  functionImplements: () => "Implements",
  functionImplementedBy: () => "Implemented by",
  functionDoesMoreThanPromises: (p0: unknown, p1: unknown) => `Does more than "${p0}" promises: ${p1}`,
  implementationImplementation: () => "Implementation",
  implementationImplementations: () => "Implementations",
  implementationVariables: () => "Variables",
  implementationFor: () => "For",
  implementationUses: () => "Uses",
  implementationNamesItsOwnEnvironmentsAndIs: () => "Names its own environments and is chosen by a technical choice: the choice decides, its environments are ignored",

  // language ---------------------------------------------------------------------------------------------------

  languageInBase: (p0: unknown) => ` in base ${p0}`,
  languageThenDigits: (p0: unknown, p1: unknown) => ` then ${p0} digits${p1}`,
  languageThenDigitsUpTo: (p0: unknown) => ` then digits${p0} up to `,
  languageThen1ToDigits: (p0: unknown, p1: unknown) => ` then 1 to ${p0} digits${p1}`,
  languageThenDigits2: (p0: unknown) => ` then digits${p0}`,
  languageOneOfAfterThemBelongsTo: (p0: unknown) => ` (one of ${p0} after them belongs to it)`,
  languageEscapeSequencesOpenWith: () => "Escape sequences open with ",
  languageNamed: () => "; named: ",
  languageNumeric: () => "; numeric: ",
  languageWrittenForAnotherText: () => "; written for another text: ",
  languageAMarkThatOpensNoKnown: () => "; a mark that opens no known sequence stands for itself.",
  languageOtherwiseTheMarkEscapesTheCharacter: () => "; otherwise the mark escapes the character that follows it.",
  languageLanguages: () => "Languages",
  languageNamedInBodies: () => "Named in bodies",
  languageGrammar: () => "Grammar",
  languageExtensions: () => "Extensions",
  languageQueries: () => "Queries",
  languageEscapeSequences: () => "Escape sequences",
  languageDefinesTheLanguage: () => "Defines the language",
  languageQueriesWrittenIn: () => "Queries written in",
  languageLanguageOfTheQueriesOf: () => "Language of the queries of",
  languageReadBy: () => "Read by",
  languageReads: () => "Reads",
  languageWatchesTheGlobals: () => "Watches the globals",
  languageGlobalsWatchedIn: () => "Globals watched in",
  languageTheQueryUsesWhichTreeSitter: (p0: unknown, p1: unknown) => `The query "${p0}" uses ${p1}, which tree-sitter does not evaluate: its pattern would catch too much`,
  languageNoQueryWatchesTheGlobalOf: (p0: unknown, p1: unknown) => `No query watches the global "${p0}" of ${p1}`,
  languageExampleNotRead: (p0: unknown, p1: unknown) => `Example not read (${p0}): ${p1}`,
  languageExampleNotMetReads: (p0: unknown, p1: unknown) => `Example not met: ${p0} reads ${p1}`,
  languageGrammar2: () => "Grammar: ",
  languageGrammarToSpecify: () => "Grammar: to specify",
  languageFiles: () => " · files ",
  languageNamed2: () => " · named ",
  languageInBodies: () => " in bodies",
  languageCode: () => "Code",
  languageMustRead: () => "Must read",
  languageLanguageExamplesHeldOutOf: (p0: unknown, p1: unknown) => `${p0} language examples held out of ${p1}`,

  // package ---------------------------------------------------------------------------------------------------

  packagePackage: () => "Package",
  packageHoldsBelow: () => "Held below",
  packageBecause: () => "Because",
  packageNotBelow: (version: string, ceiling: string) => `${version} is not below ${ceiling}, where the package is held`,
  packageHeldWithoutReason: (ceiling: string) => `Held below ${ceiling} without a reason`,
  packagePackages: () => "Packages",
  packageName: () => "Name",
  packageVersion: () => "Version",
  packageUrl: () => "In the registry",
  packageInstalled: () => "Installed",
  packageUses: () => "Uses",
  packageUsedBy: () => "Used by",
  packageNotInstalled: (p0: unknown) => `Not installed in the project: its lockfile lists no ${p0}`,
  packageDisagree: (p0: unknown, p1: unknown) => `Declared ${p0}, installed ${p1}: the graph and the lockfile disagree`,
  packageVulnerable: (p0: unknown, p1: unknown) => `${p0} known ${Number(p0) === 1 ? "vulnerability" : "vulnerabilities"}, reported on ${p1}`,
  packageBehind: (p0: unknown, p1: unknown, p2: unknown) => `${p0} breaking ${Number(p0) === 1 ? "release" : "releases"} behind the latest (${p1}), reported on ${p2}`,
  packageNoReport: () => "No report yet: trame audit asks the registry",
  packageAudit: () => "Vulnerabilities",
  packageOutdated: () => "Latest version",
  packageNone: () => "none known",
  packageUpToDate: () => "this one",
  packageReportedOn: (p0: unknown, p1: unknown) => `${p0} (${p1})`,
  packageNotRead: () => "not read by this engine",

  // pattern ----------------------------------------------------------------------------------------------------

  adrServes: () => "Serves",
  adrServedBy: () => "Served by",
  bindingFollowedBy: () => "Followed by",
  patternSeveralPortsChosenTogether: () => "several ports chosen together",
  patternASinglePort: () => "a single port",
  patternRealizationsThatTouchThePlatformImplementations: () => "realizations that touch the platform (implementations)",
  patternRealizationsThatDoNotTouchThe: () => "realizations that do not touch the platform",
  patternRealizationsThatAreFunctions: () => "realizations that are functions",
  patternRealizationsThatAreNotFunctions: () => "realizations that are not functions",
  patternRealizationsThatReachAnotherPort: () => "realizations that reach another port",
  patternRealizationsThatReachNoOtherPort: () => "realizations that reach no other port",
  patternDesignPattern: () => "Design pattern",
  patternDesignPatterns: () => "Design patterns",
  patternRequiresOfAChoice: () => "Requires of a choice",
  patternHasTheShape: () => "has the shape",
  patternAChoiceThatFollowsItHas: () => "A choice that follows it has ",
  patternNoParticularShape: () => "no particular shape",
  patternShape: () => "Shape",
  patternNoChoiceFollowsItYet: () => "No choice follows it yet.",

  // port -------------------------------------------------------------------------------------------------------

  bindingChosenBy: () => "Chosen by",
  bindingPort: () => "Port",
  bindingAnsweredBy: () => "Answered by",
  environmentEnvironment: () => "Environment",
  portPorts: () => "Ports",
  portDeclaredEffects: () => "Declared effects",
  portFor: (p0: unknown) => ` for "${p0}"`,
  portNoRealizationInAnyEnvironment: () => "No realization, in any environment",
  portSeveralRealizationsFor: (p0: unknown, p1: unknown) => `Several realizations for "${p0}": ${p1}`,
  portSeveralRealizationsOf: (p0: unknown, p1: unknown, p2: unknown) => `Several realizations of "${p0}"${p1}: ${p2}`,

  // release ----------------------------------------------------------------------------------------------------

  amendmentWhatChanges: () => "What changes",
  componentLanguage: () => "Language",
  releaseRelease: () => "Release",
  releaseReleases: () => "Releases",
  releaseReleasedBy: () => "Released by",
  releaseVersion: () => "Version",
  releaseReleasedOn: () => "Released on",
  releaseFingerprint: () => "Fingerprint",
  releaseLanguageArchived: () => "Language archived",
  releaseAcceptedDifferences: () => "Accepted differences",
  releaseReleasedAs: () => "Released as",
  releaseAssembledBy: () => "Assembled by",
  releaseAssembled: () => "Assembled",
  releaseItsDateIsNotACalendar: () => "Its date is not a calendar day (YYYY-MM-DD)",
  releaseItsLanguageIsNeitherNor: (p0: unknown, p1: unknown) => `Its language is neither "${p0}" nor "${p1}"`,
  releaseNoFingerprintNothingSaysWhatWas: () => "No fingerprint: nothing says what was frozen",
  releaseAssembledByAReleaseOfAnother: (p0: unknown) => `Assembled by "${p0}", a release of another component`,
  releaseACopyOfItsOwn: () => "a copy of its own",
  releaseTheRepositorySShared: () => "the repository's, shared",
  releaseReleases2: () => "Releases ",
  releaseAssembledBy2: () => ", assembled by ",
  releaseAssembledBy3: () => "Assembled by ",
  releaseTheFirstRelease: () => ": the first release.",
  releaseTheFirstRelease2: () => "The first release.",

  // repeal -----------------------------------------------------------------------------------------------------

  adrDecidedBy: () => "Decided by",
  amendmentReason: () => "Reason",
  amendmentInForceFrom: () => "In force from",
  repealRepeal: () => "Repeal",
  repealRepeals: () => "Repeals",
  repealRepealedBy: () => "Repealed by",
  repealDuplicateRepealsSameEffect: () => "duplicate repeals: same effect",
  repealStillDependsOnWhichIsRepealed: (p0: unknown, p1: unknown) => `"${p0}" still depends on "${p1}", which is repealed`,

  // requirement ------------------------------------------------------------------------------------------------

  requirementRequirement: () => "Requirement",
  requirementRequirements: () => "Requirements",
  requirementRefines: () => "Refines",
  requirementRefinedBy: () => "Refined by",
  requirementAssumes: () => "Assumes",
  requirementAssumedBy: () => "Assumed by",
  requirementRequirementWithoutAcceptanceCriteria: () => "Requirement without acceptance criteria",
  requirementRuleRedefinedBy: () => "Rule redefined by ",
  requirementTheCodeBelowIsTheOriginal: () => ". The code below is the original rule.",
  requirementTheOriginalRuleInTheCode: () => "The original rule, in the code",
  requirementTheRuleInTheCode: () => "The rule, in the code",

  // rule -------------------------------------------------------------------------------------------------------

  ruleArchitectureRule: () => "Architecture rule",
  ruleArchitectureRules: () => "Architecture rules",
  ruleRule: (p0: unknown, p1: unknown) => `${p0} (rule "${p1}")`,
  ruleRespectedEverywhere: () => "Respected everywhere.",
  ruleTheRuleInCode: () => "The rule, in code",

  // scenario ---------------------------------------------------------------------------------------------------

  acceptanceWaitingForTheDecision: () => "waiting for the decision ",
  acceptancePassedOutOf: (p0: unknown, p1: unknown) => `${p0} passed out of ${p1}`,
  bindingIn: () => "In",
  scenarioScenario: () => "Scenario",
  scenarioScenarios: () => "Scenarios",
  scenarioVerifies: () => "Verifies",
  scenarioVerifiedBy: () => "Verified by",
  scenarioRestOfTheScenario: () => "rest of the scenario",
  scenarioScenarioFailed: (p0: unknown, p1: unknown) => `Scenario failed (${p0}): ${p1}`,
  scenarioCheckNotMet: (p0: unknown) => `Check not met: "${p0}"`,
  scenarioIn: () => " · in ",
  scenarioScenarioCheck: () => "scenario check",

  // slo --------------------------------------------------------------------------------------------------------

  sloServiceLevelObjective: () => "Service level objective",
  sloServiceLevelObjectives: () => "Service level objectives",
  sloMeasuredSignal: () => "Measured signal",
  sloPercentile: () => "Percentile",
  sloThreshold: () => "Threshold",
  sloWindow: () => "Window",
  sloMeasurementSource: () => "Measurement source",
  sloConstrains: () => "Constrains",
  sloConstrainedBy: () => "Constrained by",
  sloNoProductionMeasurementWired: () => "No production measurement wired",
  sloOver: () => ", over ",
  sloObjective: (percentile: Inline, signal: Inline, threshold: Inline, window: Inline): Inline[] => ["p", percentile, " of ", signal, " under ", threshold, ", over ", window],

  // standard ---------------------------------------------------------------------------------------------------

  patternMaintainedBy: () => "Maintained by",
  patternSource: () => "Source",
  patternSource2: () => "Source: ",
  standardStandard: () => "Standard",
  standardStandards: () => "Standards",

  // structure --------------------------------------------------------------------------------------------------

  structureAlgebraicStructure: () => "Algebraic structure",
  structureAlgebraicStructures: () => "Algebraic structures",
  structureConstants: () => "Constants",
  structureLaws: () => "Laws",
  structureLawNotPlayed: (p0: unknown, p1: unknown) => `Law not played (${p0}): ${p1}`,
  structureNoValueDrawn: () => "no value drawn",
  structureTheOperationsAreWrittenIn: () => "The operations are written in ",
  structureTheOperationsInCode: () => "The operations, in code",
  structureHeldOn: (p0: unknown) => `held on ${p0}`,
  structureNotPlayed: () => "not played: ",
  structureBrokenWith: () => "broken, with ",
  structureNoValue: () => "no value",
  structureLaw: () => "Law",
  structureHeldOutOf: (p0: unknown, p1: unknown) => `${p0} held out of ${p1}`,
  structureLawBrokenWith: (p0: unknown, p1: unknown, p2: unknown) => `Law broken: ${p0}, with ${p1}${p2}`,

  // stylesheet -------------------------------------------------------------------------------------------------

  stylesheetStyleSheet: () => "Style sheet",
  stylesheetStyleSheets: () => "Style sheets",
  stylesheetUsesTheVariablesOf: () => "Uses the variables of",
  stylesheetVariablesUsedBy: () => "Variables used by",
  stylesheetStyles: () => "Styles",
  stylesheetStyledBy: () => "Styled by",

  // syntax -----------------------------------------------------------------------------------------------------

  decisionValue: () => "Value",
  languageExamples: () => "Examples",
  languageDefinedBy: () => "Defined by",
  languageNotPlayed: () => "not played",
  languageChecked: () => "Checked",
  patternAddress: () => "Address",
  syntaxSyntaxElement: () => "Syntax element",
  syntaxSyntaxElements: () => "Syntax elements",
  syntaxSection: () => "Section",
  syntaxMarks: () => "Marks",
  syntaxReadAs: () => "Read as",
  syntaxDefines: () => "Defines",
  syntaxReadIn: () => "Read in",
  syntaxReadsTheElements: () => "Reads the elements",
  syntaxTheBodyDoesNotReturnA: () => "the body does not return a function",
  syntaxItsLanguage: () => "its language",
  syntaxFails: (p0: unknown) => `fails (${p0})`,
  syntaxSection2: () => "Section: ",
  syntaxToSpecify: () => "to specify",
  syntaxHeldReadAs: (p0: unknown) => `held, read as ${p0}`,
  syntaxNotReadAs: (p0: unknown) => `not read as ${p0}`,
  syntaxRefines: (p0: unknown, p1: unknown, p2: unknown) => `${p0} (refines ${p1}.${p2})`,
  syntaxMark: () => "Mark",
  syntaxInput: () => "Input",
  syntaxWrites: () => "Writes",
  syntaxExampleNotReadDoesNotFollow: (p0: unknown, p1: unknown) => `Example not read: ${p0} does not follow the grammar of ${p1}`,
  syntaxExampleNotMetMustWrite: (p0: unknown, p1: unknown, p2: unknown) => `Example not met: (${p0}) must write ${p1}, ${p2}`,

  // vocabulary -------------------------------------------------------------------------------------------------

  syntaxMeaning: () => "Meaning",
  vocabularyVocabulary: () => "Vocabulary",
  vocabularyVocabularies: () => "Vocabularies",
  vocabularyWords: () => "Words",
  vocabularyWord: () => "Word",
})

export type Api = ReturnType<typeof body>
export default body
