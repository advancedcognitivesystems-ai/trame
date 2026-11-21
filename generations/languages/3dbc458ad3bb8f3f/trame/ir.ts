// The intermediate format: what kinds and views produce, what renderers translate.
// It only says what things mean: never bold, colour or shape. The renderer chooses the appearance.
// Everything in it serialises to JSON: the page receives it as is.
//
// The vocabularies below are objects: code names a value by its key (`Status.held`), never by the value itself. The
// values are the words that appear in machine outputs and documents.



type ValueOf<T> = T[keyof T]

/**
 * The key of a vocabulary value: `keyOf(Status, s)` is "held" when `s` is `Status.held`. Graph values that depend on a
 * vocabulary (a colour per status, a stroke per nature) are keyed by these names, which do not change when the words do.
 */
export function keyOf<V extends Record<string, string>>(vocabulary: V, value: string): (keyof V & string) | undefined {
  return (Object.keys(vocabulary) as (keyof V & string)[]).find((k) => vocabulary[k] === value)
}
/** The key of a word of the vocabulary: its type says it belongs there, so there is one. */
export function keyFor<V extends Record<string, string>>(vocabulary: V, value: V[keyof V]): keyof V & string {
  const key = keyOf(vocabulary, value)
  if (key === undefined) throw new Error(`"${value}" is not a word of the vocabulary`)
  return key
}
/** The keys of a vocabulary, as a type: `KeyOf<typeof Status>` is `"held" | "violated" | "blocked" | "unknown"`. */
export type KeyOf<V> = keyof V & string

/** What a node's checks say about it. */
export const Status = { held: "held", violated: "violated", blocked: "blocked", unknown: "unknown" } as const
export type Status = ValueOf<typeof Status>

/** How serious a problem is. */
export const Severity = { blocking: "blocking", error: "error", warning: "warning" } as const
export type Severity = ValueOf<typeof Severity>

/**
 * The problems the language and the engine raise, each by its code (C4): the code says what is wrong, the message says
 * it of a node. A project raises the codes it chooses, never lowers one; a library's kind names its own.
 */
export const HoleCode = {
  // What a node says of itself.
  ownerMissing: "owner-missing",
  nodeUnnamed: "node-unnamed",
  notConnectedToRoot: "not-connected-to-root",
  valueUndecided: "value-undecided",
  // Edges and dependencies.
  edgeMissing: "edge-missing",
  edgeWrongTarget: "edge-wrong-target",
  edgeToUnnamed: "edge-to-unnamed",
  edgeCycle: "edge-cycle",
  dependencyNotANode: "dependency-not-a-node",
  dependencyUnnamed: "dependency-unnamed",
  dependencyHidden: "dependency-hidden",
  dependencyUndeclared: "dependency-undeclared",
  dependencyUnused: "dependency-unused",
  dependsOnRepealed: "depends-on-repealed",
  // Claims, and how a kind settles them.
  claimOutsideGraph: "claim-outside-graph",
  claimWholeNode: "claim-whole-node",
  claimUnknownPath: "claim-unknown-path",
  claimsContested: "claims-contested",
  resolutionReadsContested: "resolution-reads-contested",
  resolutionOrderLaw: "resolution-order-law",
  resolutionGivenLaw: "resolution-given-law",
  kindHookFailed: "kind-hook-failed",
  // Bodies, constants and literals.
  bodyNotFound: "body-not-found",
  moduleNotFound: "module-not-found",
  bodyNotInItsLanguage: "body-not-in-its-language",
  bodyWithoutDefaultExport: "body-without-default-export",
  languageWithoutDriver: "language-without-driver",
  literalInBody: "literal-in-body",
  literalInLanguage: "literal-in-language",
  constantsExpected: "constants-expected",
  constantIncomplete: "constant-incomplete",
  constantShadowsDependency: "constant-shadows-dependency",
  refinementDiffers: "refinement-differs",
  // Effects and the platform.
  platformAccess: "platform-access",
  effectUndescribed: "effect-undescribed",
  effectBeyondPort: "effect-beyond-port",
  realizationExceedsPort: "realization-exceeds-port",
  functionNotSynchronous: "function-not-synchronous",
  // Requirements, rules and their criteria.
  requirementWithoutCriteria: "requirement-without-criteria",
  requirementNotFollowed: "requirement-not-followed",
  criterionNotMet: "criterion-not-met",
  ruleAsBody: "rule-as-body",
  ruleWithoutReason: "rule-without-reason",
  rulesLookAlike: "rules-look-alike",
  constraintNotWhole: "constraint-not-whole",
  constraintRefuses: "constraint-refuses",
  constraintRefused: "constraint-refused",
  // Decisions, assumptions, amendments.
  decisionOutsideRange: "decision-outside-range",
  decisionExceedsCap: "decision-exceeds-cap",
  decisionCapUncheckable: "decision-cap-uncheckable",
  assumptionExpired: "assumption-expired",
  assumptionToCheck: "assumption-to-check",
  amendmentWithoutEffect: "amendment-without-effect",
  amendmentSameValue: "amendment-same-value",
  amendmentWithoutSource: "amendment-without-source",
  amendmentAwaitsApproval: "amendment-awaits-approval",
  amendmentEndsOnNothing: "amendment-ends-on-nothing",
  amendmentEndsSoon: "amendment-ends-soon",
  // Architecture: ADRs, ports, bindings, components, audiences.
  adrNotApplied: "adr-not-applied",
  adrUnprovable: "adr-unprovable",
  portUnrealized: "port-unrealized",
  portRealizedTwice: "port-realized-twice",
  bindingChoosesNothing: "binding-chooses-nothing",
  bindingInNoEnvironment: "binding-in-no-environment",
  bindingChoosesNoPort: "binding-chooses-no-port",
  bindingChoosesTwice: "binding-chooses-twice",
  bindingWithoutPattern: "binding-without-pattern",
  bindingPatternBroken: "binding-pattern-broken",
  realizationReachedDirectly: "realization-reached-directly",
  implementationNamesEnvironments: "implementation-names-environments",
  componentUnwirable: "component-unwirable",
  deliveryUnknownTarget: "delivery-unknown-target",
  deliveryComponentElsewhere: "delivery-component-elsewhere",
  entryWithoutAudience: "entry-without-audience",
  systemCalledByPeople: "system-called-by-people",
  ownerNotCarried: "owner-not-carried",
  audienceCarriesUnknown: "audience-carries-unknown",
  audienceNotIdentified: "audience-not-identified",
  // Standards, quantities, words, the languages code is written in.
  quantityWithoutUnit: "quantity-without-unit",
  translationSameLanguage: "translation-same-language",
  lawBroken: "law-broken",
  syntaxExampleNotMet: "syntax-example-not-met",
  languageExampleNotMet: "language-example-not-met",
  languageQueryInvalid: "language-query-invalid",
  languageGlobalUnwatched: "language-global-unwatched",
  // What verifies code.
  scenarioFailed: "scenario-failed",
  verifiesUnrun: "verifies-unrun",
  checkAwaited: "check-awaited",
  checkFailed: "check-failed",
  checkStale: "check-stale",
  // Data and its reviews.
  rowRefused: "row-refused",
  reviewAwaited: "review-awaited",
  reviewChangesAsked: "review-changes-asked",
  reviewStale: "review-stale",
  // Service levels.
  sloUnmeasured: "slo-unmeasured",
  sloThresholdMeasuresNothing: "slo-threshold-measures-nothing",
  sloWindowMeasuresNothing: "slo-window-measures-nothing",
  sloPercentileOutside: "slo-percentile-outside",
  // Packages.
  packageNewer: "package-newer",
  packageBehind: "package-behind",
  packageNotInstalled: "package-not-installed",
  packageVersionsDisagree: "package-versions-disagree",
  packageAboveCeiling: "package-above-ceiling",
  packageHeldWithoutReason: "package-held-without-reason",
  packageVulnerable: "package-vulnerable",
  packageUnaudited: "package-unaudited",
  // The SDLC: artefacts, obligations, policies, shipments, evidence.
  artifactWithoutPath: "artifact-without-path",
  artifactWithoutProducer: "artifact-without-producer",
  artifactVersionProduced: "artifact-version-produced",
  artifactRunsNothing: "artifact-runs-nothing",
  artifactPublishesWithoutWriter: "artifact-publishes-without-writer",
  artifactNotBuilt: "artifact-not-built",
  artifactStale: "artifact-stale",
  obligationWithoutReason: "obligation-without-reason",
  obligationWeightless: "obligation-weightless",
  policyFamilyTwice: "policy-family-twice",
  shipmentAwaits: "shipment-awaits",
  shipmentNotPreceded: "shipment-not-preceded",
  shipmentGap: "shipment-gap",
  roleEmpty: "role-empty",
  sealBroken: "seal-broken",
  // Generations.
  releaseDateInvalid: "release-date-invalid",
  releaseLanguageInvalid: "release-language-invalid",
  releaseWithoutFingerprint: "release-without-fingerprint",
  releaseAssembledByOther: "release-assembled-by-other",
  // Publication.
  publishedRemoved: "published-removed",
  publishedOutdated: "published-outdated",
  publishedChanged: "published-changed",
  // How a project judges (C4, since g112).
  hardeningLowers: "hardening-lowers",
  hardeningFailed: "hardening-failed",
} as const
export type HoleCode = ValueOf<typeof HoleCode>

/**
 * The ports of the judgment the engine asks a project's graph (C4, since g112), by their reference: std's Hardening,
 * whose realization a binding chooses where the project's build evaluates. In E3 they move to the library of the
 * judgment.
 */
export const JudgmentPort = { hardening: "std/judgment.Hardening" } as const

/** The result of one check (a criterion, a scenario step). */
export const Outcome = { passed: "passed", failed: "failed", blocked: "blocked", error: "error" } as const
export type Outcome = ValueOf<typeof Outcome>

/** Whether a node is in force at the date of the graph. */
export const Validity = { inForce: "in force", notYet: "not yet in force", noLonger: "no longer in force" } as const
export type Validity = ValueOf<typeof Validity>

/** Where an edge comes from: declared in the graph, inferred from the code, or computed. */
export const Nature = { declared: "declared", inferred: "inferred", computed: "computed" } as const
export type Nature = ValueOf<typeof Nature>

/** What a date marks. Meaning, not form. */
export const DateRole = { start: "start", end: "end", deadline: "deadline", review: "review" } as const
export type DateRole = ValueOf<typeof DateRole>

/** A value that is not decided yet, or that claims contest. */
export const Openness = { undecided: "undecided", contested: "contested" } as const
export type Openness = ValueOf<typeof Openness>

/** A rule (a function value): the one declared, or one an amendment redefined. */
export const RuleState = { original: "original", redefined: "redefined" } as const
export type RuleState = ValueOf<typeof RuleState>

/** The role of an edge in a resolution of claims. */
export const EdgeRole = { winner: "winner", discarded: "discarded", replaced: "replaced", contested: "contested", support: "support" } as const
export type EdgeRole = ValueOf<typeof EdgeRole>

/** How a set of overlapping claims was settled. */
export const ResolutionOutcome = { applied: "applied", contested: "contested" } as const
export type ResolutionOutcome = ValueOf<typeof ResolutionOutcome>

/** The shape of the question a graph figure answers: layers, a tree from one node, a path. */
export const Shape = { layers: "layers", tree: "tree", path: "path" } as const
export type Shape = ValueOf<typeof Shape>

/** Where a view files its documents. */
export const ViewGroup = { module: "module", document: "document", figure: "figure", node: "node", summary: "summary" } as const
export type ViewGroup = ValueOf<typeof ViewGroup>

/** What a view has one instance per. */
export const ViewScope = { module: "module", node: "node" } as const
export type ViewScope = ValueOf<typeof ViewScope>

/** The kinds of field a kind can declare. */
export const FieldType = {
  person: "person", text: "text", date: "date", number: "number",
  range: "range", value: "value", map: "map", fn: "fn", patch: "patch",
  /** Named dependencies: each one is an edge, and becomes a parameter of the body. */
  deps: "deps",
  /** A function body: inline, or in a file (any language that has a driver). */
  body: "body",
  /** Constants the node declares, each with its meaning. Its body receives them as parameters, next to its dependencies. */
  constants: "constants",
} as const
export type FieldType = ValueOf<typeof FieldType>

/** When dependencies and a body serve: at run time, or to provision the infrastructure. */
export const Stage = { execution: "execution", provisioning: "provisioning" } as const
export type Stage = ValueOf<typeof Stage>

/** Frozen: before resolution, declared values. Consolidated: after resolution, the values in force. */
export const Moment = { frozen: "frozen", consolidated: "consolidated" } as const
export type Moment = ValueOf<typeof Moment>

/** Where a problem comes from: a value to decide, a resolution of claims, a kind, the structure of the graph, publication, code. */
export const Origin = { value: "value", resolution: "resolution", kind: "kind", graph: "graph", publication: "publication", code: "code" } as const
export type Origin = ValueOf<typeof Origin>

/** What became of one claim. */
export const ClaimOutcome = { applied: "applied", discarded: "discarded", replaced: "replaced", contested: "contested", notInForce: "not in force" } as const
export type ClaimOutcome = ValueOf<typeof ClaimOutcome>

/** Which claims of a node: the ones made on it, or the ones it makes. */
export const ClaimSide = { on: "on", by: "by" } as const
export type ClaimSide = ValueOf<typeof ClaimSide>

/** How a literal is written in a body. */
export const LiteralKind = { text: "text", number: "number", template: "template", regex: "regex", key: "key" } as const
export type LiteralKind = ValueOf<typeof LiteralKind>

/** How a node gives what it gives when wired: its body called with its dependencies, or the value its kind provides. */
export const WireMode = { body: "body", value: "value" } as const
export type WireMode = ValueOf<typeof WireMode>

/**
 * The reports a package receives, as evidence: what the registry says of its vulnerabilities, and of its latest version.
 * trame audit writes them, the kind of a package reads them.
 */
export const PackageReport = { audit: "audit", outdated: "outdated" } as const
export type PackageReport = ValueOf<typeof PackageReport>

/**
 * The fields of a package that the engine reads (trame audit, trame manifest): the kind of a package declares them under
 * these names.
 */
/**
 * What a promise of effects covers besides itself: a port that keeps (what it writes, only it reads) may be realized by
 * code that writes. The words are those of the vocabulary of effects.
 */
export const CoveredEffects: Readonly<Record<string, readonly string[]>> = { keeps: ["write"] }
/**
 * How a value of a node changes once declared (since g85). Chosen: by an amendment its owner approves, which the page
 * and trame amend can write. Cited: only with the source that changed it, an amendment that names the new source.
 * Stated (since g108): a statement (a goal, the reasons of an ADR), changed by a new node that repeals it, or published
 * again saying why when only its form changed. Code: in the code, never from outside it (what code is built on: a
 * structure's constants, a vocabulary's words, a body). A publication freezes all but code (D1).
 */
export const ChangeWay = { chosen: "chosen", cited: "cited", stated: "stated", code: "code" } as const
export type ChangeWay = (typeof ChangeWay)[keyof typeof ChangeWay]
/**
 * The parts of a declaration a publication freezes besides its fields (since g108): its statement, the title and the
 * description its documentation comment gives it.
 */
export const DeclarationPart = { statement: "statement" } as const
/**
 * Where a frozen part of a declaration stands against trame.lock (since g108): published as it is; changed since it was
 * published; not published yet; published in a form before its parts were (the whole declaration, before g108).
 */
export const PublicationState = { published: "published", changed: "changed", unpublished: "unpublished", outdated: "outdated" } as const
export type PublicationState = (typeof PublicationState)[keyof typeof PublicationState]
/** How an amendment is declared (since g85): the function that makes one, and the names of what it says. */
export const AmendmentField = { facade: "amend", owner: "owner", why: "why", from: "from", until: "until", source: "source" } as const
export const PackageField = { name: "packageName", version: "version", ceiling: "holdsBelow", prepare: "prepare", effects: "declaredEffects", joins: "joins", from: "from", at: "at" } as const
/** How a package of Trame takes part in a graph (since g91): the language it is written in, a library whose nodes join it. */
export const PackageJoins = { language: "language", library: "library" } as const
export type PackageJoins = ValueOf<typeof PackageJoins>
export type PackageField = ValueOf<typeof PackageField>

/** The edges of a release that the engine writes (trame advance): the kind of a release declares them under these names. */
export const ReleaseEdge = { component: "component", assembledBy: "assembledBy" } as const
/** The fields of a release that the page and the views read: its version and the day it was released. */
export const ReleaseField = { version: "version", date: "date" } as const
/** The fields of a quantity the engine reads: its units (with how many of the base unit each makes), whether it is a ratio. */
export const QuantityField = { units: "units", ratio: "ratio" } as const
/** The edge from a quantity to the catalog that writes a value in each of its units. */
export const QuantityEdge = { written: "written" } as const
/** The field a vocabulary lists its words in: a rule of a library reads it on the graph's sketch. */
export const VocabularyField = { words: "words" } as const
export type ReleaseEdge = ValueOf<typeof ReleaseEdge>

/** What a row's review is, in a language: approved as it is, approved before it changed, asked to change, or none yet. */
export const ReviewState = { approved: "approved", stale: "stale", changes: "changes", none: "none" } as const
export type ReviewState = ValueOf<typeof ReviewState>

/** What a delivery writes (trame deliver): for now, a page a browser opens as it is. */
export const DeliveryTarget = { page: "page" } as const
export type DeliveryTarget = ValueOf<typeof DeliveryTarget>

/** The fields of a delivery that the engine reads (trame deliver): the kind of a delivery declares them under these names. */
export const DeliveryField = { target: "target", output: "output", shownAs: "shownAs" } as const
export type DeliveryField = ValueOf<typeof DeliveryField>

/**
 * The names of the SDLC's kinds' fields and edges, which the kinds and the engine both read: a role (its people, whether
 * they may review their own work, the signature its evidence carries), an artefact (its path, its media type, what
 * produces it; written by a writer, the shipment it runs elsewhere, the settings the writer is given, and what that place
 * makes available once the shipment shipped), a check (its steps, what it checks, the program that runs it, the role that signs it), a review (what it
 * reviews, by which role, how many approvals), a shipment (its target, what it ships, what it requires, what deploys it,
 * the environment its programs are assembled for, the policy it follows); an obligation (the family it applies, its
 * parameters, what a gap weighs) and a policy (its obligations); and the trigger of an entry point, which trame ship
 * reads to run it.
 */
export const RoleField = { people: "people", notAuthor: "notAuthor", signature: "signature" } as const
export const ArtifactField = { path: "path", media: "media", version: "version" } as const
export const ArtifactEdge = { producedBy: "producedBy", runs: "runs", settings: "settings", publishes: "publishes", carries: "carries" } as const
export const CheckField = { steps: "steps" } as const
export const CheckEdge = { on: "on", runs: "runs", by: "by" } as const
export const ReviewField = { approvals: "approvals" } as const
export const ReviewEdge = { of: "of", by: "by" } as const
export const ShipmentField = { target: "target" } as const
/** Where the build evaluates (an environment), and what a technical choice chooses: the engine reads them (C4, g112). */
export const EnvironmentField = { evaluates: "evaluates" } as const
export const BindingEdge = { chooses: "chooses" } as const
export const ShipmentEdge = { ships: "ships", requires: "requires", deploys: "deploys", environment: "environment", policy: "policy" } as const
export const ObligationField = { params: "params", gaps: "gaps" } as const
export const PolicyEdge = { obligations: "obligations" } as const
export const EntryField = { trigger: "trigger" } as const

/**
 * Who may call an entry point (C6): the edge by which an entry point names its audience, and what an audience says (the
 * identities a caller of it carries, whether nobody calls it, whether it reaches every owner's records); the identities
 * a caller may carry; and the field by which a kind of data says whose records its nodes hold, which the language reads
 * on whatever an entry point reaches.
 */
export const EntryEdge = { audience: "for" } as const
export const AudienceField = { carries: "carries", system: "system", everyOwner: "everyOwner" } as const
export const Identity = { person: "person", tenant: "tenant" } as const
export type Identity = (typeof Identity)[keyof typeof Identity]
export const OwnedField = { ownedBy: "ownedBy" } as const

/**
 * Where a piece of evidence of the SDLC comes from: an artefact built, a check run or signed, a review given, a
 * deployment made, a shipment finished.
 */
export const EvidenceSource = { built: "built", check: "check", review: "review", deployed: "deployed", shipped: "shipped" } as const
export type EvidenceSource = ValueOf<typeof EvidenceSource>

/**
 * The stages of a shipment's pipeline, in the order trame ship runs them: its artefacts produced, the checks a program
 * makes, its obligations proven, its deployment, its dossier recorded.
 */
export const PipelineStage = { produce: "produce", check: "check", prove: "prove", deploy: "deploy", record: "record" } as const
export type PipelineStage = ValueOf<typeof PipelineStage>

/** How a piece of evidence is signed: attributed (who, when, on which fingerprint); a cryptographic signature later. */
export const SignatureType = { attribution: "attribution" } as const
export type SignatureType = ValueOf<typeof SignatureType>

/** How a release reaches the language it runs on: through the repository's (shared), or a copy of its own. */
export const LanguageUse = { shared: "shared", own: "own" } as const
export type LanguageUse = ValueOf<typeof LanguageUse>

/** What JSON says for a value that is not plain data: a removed node, a rule (a function). */
export const JsonMark = { removed: "repealed", rule: "(rule)", undecided: "TODO" } as const

/** A raw value in JSON: an undecided value becomes `{ [OPEN_KEY]: Openness.undecided }`. */
export type Json = null | boolean | number | string | Json[] | { [k: string]: Json }

/** Deep inside a composite value, a part that is not decided. */
export const OPEN_KEY = "$open"

/** A reference to a node, with its title: a renderer has nothing to look up. */
export interface NodeRef {
  ref: string
  title: string
}

// In a sentence --------------------------------------------------------------

/** The types of the parts of a sentence that are not plain text. */
export const InlineType = {
  value: "value", ref: "ref", doc: "doc", status: "status", severity: "severity", date: "date", person: "person", ident: "ident",
  file: "file",
} as const
export type InlineType = ValueOf<typeof InlineType>

/** What a value is, when its JSON does not say it: a date, a range of two numbers, a map of cases. */
export const ValueType = { date: "date", range: "range", map: "map" } as const
export type ValueType = ValueOf<typeof ValueType>

export type Inline =
  | string
  /** A value, with its unit. `open`: undecided, or contested. `rule`: a rule (a function), original or redefined. */
  /**
   * `unit`: a unit of the prelude, or the reference of a quantity of the graph (since g80); `shownAs`: the value as the
   * engine writes it in the units of its quantity, each number in words ("15 min"), for the renderers to print.
   */
  | { t: typeof InlineType.value; value: Json; unit?: string; shownAs?: Json; type?: ValueType; open?: Openness; rule?: RuleState }
  | ({ t: typeof InlineType.ref } & NodeRef)
  /** Another document (a module, a view). */
  | { t: typeof InlineType.doc; id: string; title: string }
  | { t: typeof InlineType.status; status: Status }
  | { t: typeof InlineType.severity; severity: Severity }
  | { t: typeof InlineType.date; date: string }
  | { t: typeof InlineType.person; name: string }
  /** An identifier, a path, a signal name: `value.ultra`, `src/committee.ts:12`. */
  | { t: typeof InlineType.ident; text: string }
  /** A file of the project outside its documents (a library's documents), by its path from the project's root. */
  | { t: typeof InlineType.file; path: string; title: string }

// Blocks ---------------------------------------------------------------------

export interface Fact {
  label: string
  value: Inline[]
}

export interface IssueItem {
  severity: Severity
  /** What is wrong, by its code (C4): a word of HoleCode, or of the library whose kind raised it. */
  code?: string
  /** The severity the language gave it, when the project's way of judging raised it (C4, since g112). */
  raisedFrom?: Severity
  what: string
  where?: NodeRef | string
  /** File and line, when the problem is about a node. */
  source?: string
  owner?: string
  effect?: string
}

/** The types of blocks, as the intermediate format names them: what a renderer switches on. */
export const BlockType = {
  para: "para", facts: "facts", list: "list", table: "table", code: "code", checks: "checks", validity: "validity", details: "details",
  section: "section", summary: "summary", issues: "issues", resolution: "resolution", card: "card", figure: "figure",
} as const
export type BlockType = ValueOf<typeof BlockType>

/** The types of figures: a graph of nodes, a timeline of dates. */
export const FigureType = { graph: "graph", timeline: "timeline" } as const
export type FigureType = ValueOf<typeof FigureType>

/** A set of overlapping claims, and how it was settled. */
export interface ResolutionBlock {
  type: typeof BlockType.resolution
  target: NodeRef
  paths: string[]
  claimants: NodeRef[]
  outcome: ResolutionOutcome
  applied: NodeRef[]
  replaced: [NodeRef, NodeRef][]
  reason: string
  arbiter?: string
  because: NodeRef[]
}

/** A node's card: put together by the kernel, with what its kind renders. */
export interface Card {
  type: typeof BlockType.card
  ref: string
  id: string
  title: string
  module: string
  kind: string
  kindLabel: string
  source?: string
  status?: Status
  published?: boolean
  repealedBy?: NodeRef
  description?: string
  history: boolean
  active: boolean
  /** What the kind renders. */
  body: Block[]
  facts: Fact[]
  links: { label: string; nature: Nature; active: boolean; targets: NodeRef[] }[]
  resolutions: ResolutionBlock[]
  /** The nodes shown inside this one (its acceptance criteria, for instance). */
  children: { ref: string; body: Block[] }[]
  /** The per-node views that apply to this node. */
  views: { name: string; label: string }[]
  /** The values of the node a person may amend (since g86): chosen, or cited with their source. */
  amendable?: AmendableValue[]
}

/** A value a person may amend: its field, how it changes, its value in force, and its units when a quantity measures it. */
export interface AmendableValue {
  field: string
  label: string
  way: string
  value?: Json
  /** The units of its quantity, from the largest: each with how many of the base unit it makes, and its words. */
  units?: [string, number][]
}

export interface FigureNode extends NodeRef {
  kind: string
  kindLabel: string
  module: string
  status?: Status
  active: boolean
  history: boolean
  root: boolean
  repealed: boolean
  /** A decision is still to be taken on this node. */
  open: boolean
  /** Rank in the figure (distance to the goal, depth from the start, place in the path). */
  layer: number
}

export interface FigureEdge {
  from: string
  to: string
  label: string
  inverse: string
  nature: Nature
  active: boolean
  /** Role in a resolution of claims. */
  role?: EdgeRole
}

export interface TimelineLane extends NodeRef {
  kindLabel: string
  module: string
  active: boolean
  periods: { from?: string; until?: string }[]
  marks: { date: string; label: string; role: DateRole }[]
}

export type Figure =
  | {
    type: typeof FigureType.graph
    shape: Shape
    focus?: string
    nodes: FigureNode[]
    edges: FigureEdge[]
    groups: { id: string; label: string }[]
  }
  | { type: typeof FigureType.timeline; today: string; from: string; to: string; lanes: TimelineLane[] }

export type Block =
  | { type: typeof BlockType.para; content: Inline[] }
  | { type: typeof BlockType.facts; items: Fact[] }
  | { type: typeof BlockType.list; items: Inline[][] }
  | { type: typeof BlockType.table; head: string[]; rows: Inline[][][] }
  | { type: typeof BlockType.code; lang: string; text: string; source?: string }
  | { type: typeof BlockType.checks; title?: Inline[]; items: { name: string; outcome: Outcome; detail?: Inline[] }[] }
  | { type: typeof BlockType.validity; state: Validity; from?: string; until?: string }
  | { type: typeof BlockType.details; summary: string; blocks: Block[] }
  | { type: typeof BlockType.section; title: string; id?: string; blocks: Block[] }
  /** The line that sums a document up. */
  | { type: typeof BlockType.summary; content: Inline[] }
  | { type: typeof BlockType.issues; items: IssueItem[] }
  | ResolutionBlock
  | Card
  | { type: typeof BlockType.figure; figure: Figure; caption?: string }


// Documents ------------------------------------------------------------------

export interface Document {
  /** `cancellation`, `owners`, `impact:cancellation.FreePeriod` */
  id: string
  view: string
  group: ViewGroup
  title: string
  /** For a per-node view: the node. */
  arg?: string
  /** Written to docs/ by `trame build`. */
  file?: string
  intro?: Inline[]
  blocks: Block[]
}

/** What `trame payload` produces for one date: everything a page needs to show. */
export interface Payload {
  date: string
  /** The language of the product (a BCP 47 tag): the page writes dates in it, as the documents do. */
  language: string
  generatedAt: string
  modules: { id: string; title: string }[]
  nodes: (NodeRef & { module: string; kindLabel: string })[]
  views: { name: string; label: string; group: ViewGroup; per?: ViewScope }[]
  documents: Document[]
  /** The machine outputs, by file name (the project's layout says which). */
  machine: Record<string, string>
  /** Each document rendered by the engine, as Markdown, as text and as HTML: the page shows them as they are. */
  renders?: Record<string, { markdown: string; text: string; html?: string }>
  /** The dates where the graph may change (taken from date fields). */
  candidates: string[]
  /** All the dates nodes carry, with their role. */
  events: (NodeRef & { date: string; label: string; role: DateRole })[]
  /**
   * What was given until that date, day by day: a version released (its version), a piece of evidence recorded (its
   * source and value). In an export, the last of those days are dates of the page too.
   */
  history?: (NodeRef & { date: string; version?: string; source?: string; value?: number })[]
  /** The documents written once, on another date, because they are the same there: that date, and every document in order. */
  same?: { date: string; order: string[] }
  /** What it takes to compare two compilations. A key is the JSON of the parts that tell one issue or one overlap from another. */
  state: {
    statuses: Record<string, Status | null>
    issues: { key: string; severity: Severity; what: string; ref?: string; owner?: string }[]
    resolutions: { key: string; target: string; paths: string[]; outcome: string; applied: string[] }[]
  }
}

/** How the page receives the graph: followed live (trame dev), or exported once. */
export const BundleMode = { dev: "dev", export: "export" } as const
export type BundleMode = ValueOf<typeof BundleMode>

/** The documents the engine itself names: the snapshot view, what the last change changed. */
export const DocumentName = { snapshot: "snapshot", changes: "changes" } as const

/** What triggers an entry point: an HTTP request, a command, a message, a schedule. */
export const TriggerType = { http: "http", command: "command", message: "message", scheduled: "scheduled", load: "load" } as const
export type TriggerType = ValueOf<typeof TriggerType>

/** The graph compiled at several dates: what the page receives. */
export interface Bundle {
  generatedAt: string
  today: string
  mode: BundleMode
  dates: { date: string; payload?: Payload; error?: string }[]
  /** What the last change changed (trame dev). */
  changes?: Document
  /** The same, written for the page (its blocks, one level down). */
  changesHtml?: string
  /** The last compilation failed: the last valid graph is kept. */
  error?: string
}
