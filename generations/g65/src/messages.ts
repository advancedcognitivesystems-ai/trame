/** Trame · Messages */

import { code, formatDate, formatDateShort, formatMonth, listParts, ListStyle, plurals } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { fn } from "../kinds/function"
import { catalog } from "../kinds/catalog"
import { adr } from "../kinds/adr"
import { SingleSource } from "./product"

/**
 * The marks a language puts between the parts of a line: what separates parts that are not the items of a list (the
 * facts of a card's head, the counts of a summary), the items of a list, a name from the node that gives it, an aside
 * from what it qualifies, clauses, a label from what it says, a name from its value; and what stands in an empty cell.
 */
export interface Marks {
  parts: string
  items: string
  givenBy: string
  opensAside: string
  closesAside: string
  clauses: string
  introduces: string
  equals: string
  absent: string
}

/**
 * Language
 * The language Trame speaks to people: British English. Its messages are written in it, its dates follow it
 * ("17 October 2026"), and so does its punctuation: a middle dot (U+00B7) between parts, a comma between items, a
 * leftwards arrow (U+2190) from a name to what gives it, an aside in parentheses, a semicolon between clauses, a colon
 * after a label, an equals sign between a name and its value, an em dash (U+2014) for nothing. The tag is a BCP 47
 * language tag, as the platform's date formatting reads it. Another language is another value here, and its catalogs.
 */
export const Language = decision<{ tag: string; punctuation: Marks }>({
  owner: "trame",
  value: {
    tag: "en-GB",
    punctuation: { parts: " · ", items: ", ", givenBy: " ← ", opensAside: " (", closesAside: ")", clauses: "; ", introduces: ": ", equals: " = ", absent: "—" },
  },
  rejected: {
    "French": "the language of the first generations; the workspace and its documents moved to English",
    "Several languages at once": "nothing asks for it yet: each catalog is written in one language, and a second one would be a second set of catalogs",
  },
})

/**
 * Dates
 * Writes a date of the graph (an ISO day, "2026-10-17") as people read it in the decided language.
 */
export const Dates = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { language: Language },
  body: ({ language }) => ({
    /** "17 October 2026" */
    format: (iso: string) => formatDate(iso, language.tag),
    /** "17 Oct 2026", or "17 Oct" without the year. */
    formatShort: (iso: string, withYear = false) => formatDateShort(iso, withYear, language.tag),
    /** "Oct" */
    month: (iso: string) => formatMonth(iso, language.tag),
  }),
})

/**
 * Lists
 * Joins the items of a list as people write it in the decided language: "A, B and C". The items stay as they are (a
 * reference stays a reference); only the words between them are added.
 */
export const Lists = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { language: Language },
  body: ({ language }) => ({
    /** The items, with the words of a conjunction between them. */
    conjunction: <T>(items: readonly T[]) => listParts(items, language.tag),
    /** The items, as a plain enumeration of the language. */
    enumeration: <T>(items: readonly T[]) => listParts(items, language.tag, ListStyle.enumeration),
  }),
})

/**
 * Words of the units
 * How the decided language writes a value with its unit: hours, minutes, seconds, a percentage, an amount in Swiss
 * francs. The number comes already written.
 */
export const UnitWords = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    hours: (n: string) => `${n} h`,
    minutes: (n: string) => `${n} min`,
    seconds: (n: string) => `${n} s`,
    percent: (n: string) => `${n}%`,
    chf: (n: string) => `CHF ${n}`,
  }),
})

// The catalogs. Each part of the engine says what it has to say through its own catalog: the code holds no text.
// A catalog that counts receives the decided language: `plural(n, { one: "error", other: "errors" })` writes the noun that
// agrees with a count, by the rules of that language.

/**
 * Messages of the compiler
 * What the compiler, the wiring and the assembly say: diagnostics on the graph, refusals, errors.
 */
export const CompilerMessages = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language, lists: Lists },
  messages: ({ language, lists }) => {
    const plural = plurals(language.tag)
    return {
    errorCount: (n: number) => plural(n, { one: "error", other: "errors" }),

    // The structure of the graph.
    unnamedNode: (kind: string) => `${kind} without a name: export it`,
    missingEdge: (edge: string) => `The required edge "${edge}" is missing`,
    wrongEdgeTarget: (edge: string, expected: string[], actual: string) => `"${edge}" must point to ${expected.join(" or ")}, not ${actual}`,
    edgeToUnnamedNode: (edge: string) => `"${edge}" points to a node without a name`,
    parameterNotANode: (param: string) => `The parameter "${param}" does not designate a node`,
    parameterToUnnamedNode: (param: string) => `The parameter "${param}" points to a node without a name`,
    /** The label of a dependency edge. The views look for this exact label. */
    dependsOn: () => "Depends on",
    usedBy: () => "Used by",
    /** A constant that refines a constant of another node: the same value, a meaning of its own. */
    refines: () => "Refines",
    refinedBy: () => "Refined by",
    /** The label of the edge between two nodes whose claims overlap. */
    overlaps: () => "Overlaps",
    overlappedBy: () => "Overlapped by",
    hiddenDependency: (identifier: string) => `Hidden dependency: the body reads "${identifier}" without receiving it as a parameter`,
    /** A function of a kind (activeAt, claims, resolve…) threw an error. */
    hookFailed: (hook: string, error: string) => `${hook}() failed: ${error}`,
    claimOutsideGraph: () => "Claims a node that is not in the graph",
    wholeNodeClaim: (target: string) => `Claiming "${target}" as a whole is only possible to repeal it`,
    unknownClaimPath: (path: string, target: string) => `"${path}" does not exist on "${target}"`,
    cycleOnEdge: (edge: string) => `Cycle on the edge "${edge}"`,
    notConnectedToRoot: (roots: string[]) => `Connected to no root (${roots.map((r) => r.toLowerCase()).join(", ")})`,

    // The resolution of overlapping claims. The reasons are lowercase: they follow a colon.
    claimsOfSeveralKinds: () => "claims of different kinds",
    kindCannotResolve: (kind: string) => `the kind "${kind}" cannot settle overlapping claims`,
    decisionMissingToResolve: (missing: string) => `a decision is missing to settle them: ${missing}`,
    resolutionReadsContested: (kind: string, detail: string) => `The kind "${kind}" reads a value being resolved to settle claims (${detail})`,
    resolutionFailed: () => "the resolution failed",
    orderLawBroken: (kind: string) => `The kind "${kind}" breaks the law "The resolution does not depend on the order"`,
    resolutionDependsOnOrder: () => "the resolution depends on the order of the claims",
    givenLawBroken: (kind: string, outsider: string) => `The kind "${kind}" breaks the law "The resolution returns only what it is given" (${outsider})`,
    resolutionReturnedOutsider: () => "the resolution returned a node that claims nothing here",

    // Constants and bodies.
    constantsExpected: (field: string) => `"${field}": named constants, each with its value and its meaning`,
    constantNeedsValueAndMeaning: (name: string) => `The constant "${name}" must have a value (a text or a number) and a meaning`,
    refinementDiffers: (name: string, refined: string) => `The constant "${name}" refines ${refined}, but does not have its value`,
    constantNamedLikeDependency: (name: string) => `The constant "${name}" has the name of a dependency: the body would not know which one it receives`,
    inlineBodyIssue: (what: string) => `inline body: ${what}`,
    fileBodyIssue: (file: string, what: string) => `${file}: ${what}`,
    noDriverForLanguage: (language: string) => `No driver for the language "${language}": this body is not checked`,
    /** Values written in a body without anything declaring them: each is an error. */
    literalsInBody: (places: { value: string; where: string }[]) =>
      `${plural(places.length, { one: "literal", other: "literals" })} in the body, to declare in the graph (a standard, a decision, a structure, a catalog): ${places.map((p) => `${p.value} (${p.where})`).join(", ")}`,
    /** A file of the language (a kind, a view) that writes literals. */
    literalsInLanguage: (file: string, places: { value: string; where: string }[]) =>
      `${plural(places.length, { one: "literal", other: "literals" })} in ${file}, a file of the language: what a kind or a view needs comes from the graph through the engine, and its words from its catalog: ${places.map((p) => `${p.value} (${p.where})`).join(", ")}`,
    /** What declares the literals of a node whose kind declares them (a message catalog). */
    literalDeclaredBy: (kind: string, title: string) => `declared by the ${kind.toLowerCase()} "${title}"`,

    // Holes: what to decide, what to settle, and what it blocks.
    decide: (title: string, field?: string, forCase?: string) =>
      `Decide "${title}"${field ? `: ${field.toLowerCase()}` : ""}${forCase ? ` for ${forCase}` : ""}`,
    settle: (target: string, paths: string[], claimants: { title: string; owner?: string }[]) =>
      `Settle "${target}": ${paths.join(", ")} claimed by ${lists.conjunction(claimants.map((c) => `"${c.title}" (${c.owner ?? "no owner"})`)).join("")}`,
    wholeNode: () => "the whole node",
    /** What an undecided value blocks: so many of a noun, as the kind names it. */
    blocks: (items: { count: number; what: { one: string; many: string }; of: string }[]) =>
      items.map((b) => `blocks ${plural(b.count, { one: b.what.one, other: b.what.many })} of "${b.of}"`).join(", "),
    concerns: (titles: string[]) => `concerns ${titles.map((t) => `"${t}"`).join(", ")}`,

    // The traversal API.
    wiringNeedsConsolidatedGraph: () => "wiring is only possible in the consolidated graph",
    planNeedsConsolidatedGraph: () => "the plan exists only in the consolidated graph",

    // Static reading.
    /** A type error, with the place it was found ("file:line"), when there is one. */
    typeError: (text: string, where?: string) => (where ? `${where}  ${text}` : text),

    // The wiring.
    circularDependency: (node: string) => `Circular dependency around "${node}"`,
    bodyRefused: (node: string) => `"${node}" is not run: the check of its body failed`,
    noImplementation: (port: string, env?: string) => `No implementation of "${port}"${env ? ` for the environment "${env}"` : ""}`,
    cannotBeWired: (node: string) => `"${node}" cannot be wired: it gives nothing and has no body`,
    wiringOutsideSession: () => "Wiring is impossible outside a session",
    noDriverToRun: (language: string, node: string) => `No driver can run ${language} ("${node}")`,
    noBody: (node: string) => `"${node}" has no body`,
    wiringErrors: (errors: string[]) => errors.join("; "),

    // The assembly.
    unknownComponent: (ref: string) => `Unknown component: ${ref}`,
    unknownEnvironment: (ref: string) => `Unknown environment: ${ref}`,
    variableNeedsValue: (node: string, variable: string, from: string) =>
      `"${node}": the variable "${variable}" must receive a value, and "${from}" gives none`,
    variableWithoutValue: (node: string, variable: string, error: string) => `"${node}": the variable "${variable}" has no value (${error})`,
    amendedNotJson: (node: string) => `"${node}" is amended at this date and cannot be written as JSON: it cannot be frozen`,
    amendedFieldNotJson: (node: string, field: string) =>
      `"${node}" is amended at this date and its field "${field}", which a rule reads, cannot be written as JSON: it cannot be frozen`,
    nothingToFreeze: (node: string, error: string) => `"${node}" has no value to freeze (${error})`,
    noDriverToAssemble: (language: string) => `No driver can assemble a component in "${language}"`,
    noDriverToProvision: (language: string) => `No driver can write the provisioning in "${language}"`,
    }
  },
})

/**
 * Messages of the drivers
 * What the drivers say about a body: hidden dependencies, access to the platform, a missing file; and the comments of the programs they write.
 */
export const DriverMessages = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    // What a body touches, and what is missing.
    /** A body touches the platform (a module, a global) although its kind may not. */
    platformAccess: (what: string) => `Access to the platform ("${what}"): reserved for implementations; go through a port`,
    hiddenDependency: (module: string) => `Hidden dependency: the body imports "${module}"; declare it as a parameter`,
    /** What `platformAccess` names when a body loads a module whose path is computed. */
    computedImport: () => "import() of a computed path",
    bodyNotFound: (file: string) => `Body not found: ${file}`,
    noDefaultExport: () => "The file of the body must export the body by default (export default)",
    /** A program Trame wrote does not follow the grammar of its language: it is not written. */
    programNotTheLanguage: (file: string, language: string, places: string[]) => `The program ${file} does not follow the grammar of ${language}, at ${places.join(", ")}: it is not written`,
    /** The values written in a program are not those read back from it. */
    valuesDoNotComeBack: (file: string, written: string, read: string) => `The values written in ${file} do not come back when it is read: written ${written}, read ${read}`,
    /** The text of a body does not follow the grammar of its language, at these places ("line:column"). */
    notTheLanguage: (language: string, places: string[]) => `The body does not follow the grammar of ${language}, at ${places.join(", ")}`,
    moduleNotFound: (file: string) => `Module not found: ${file}`,
    undeclaredVariable: (name: string) => `The module does not declare the variable "${name}", which the graph passes to it`,
    unusedVariable: (name: string) => `The variable "${name}" of the module receives nothing from the graph`,
    declarationNotFound: (title: string) => `"${title}": declaration not found`,

    // The comments of the programs they write, without the comment marker of the language.
    generatedBy: (command: string, date: string) => `Generated by \`${command}\` (graph of ${date}). Do not edit: edit the graph.`,
    componentInEnvironment: (component: string, env: string) => `Component "${component}" · environment "${env}".`,
    frozenProgram: () => "Frozen program: the build order, the implementation choices and the values of the graph are written here.",
    notCompiledAtStartup: (changes: string[]) =>
      `It does not compile the graph at startup. Dated changes it will not see: ${changes.length ? changes.join("; ") : "none"}.`,
    whatRulesRead: (date: string) => `What the rules read, as in force on ${date}.`,
    /** Before the construction of a node: its title, its kind, and the ports that delegate to it. */
    stepComment: (title: string, kind: string, via: string[]) =>
      `"${title}" · ${kind}${via.length ? `, for ${via.map((v) => `"${v}"`).join(", ")}` : ""}`,
    /** What the program prints when it starts, before the address where it answers. */
    programStarted: (component: string, env: string) => `"${component}" · ${env} ·`,
    provisionedModule: (title: string, ref: string) => `"${title}" (${ref})`,
    provisionValues: () => "The values come from the decisions of the graph; each module is declared by an implementation.",
  }),
})

/**
 * Messages of the laws
 * What the laws of kinds and views report when one does not hold.
 */
export const LawMessages = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    // The laws of kinds.
    lawDeclared: () => "Complete declaration",
    lawTotal: () => "Answers on any value, without crashing",
    lawOwner: () => "A blocking hole has an owner",
    lawUnknown: () => "Without evidence, the status is unknown",
    lawDeterministic: () => "Same input, same answer",
    lawOrderFree: () => "The resolution does not depend on the order",
    lawClosed: () => "The resolution returns only what it is given",

    // What breaks them: an example, lowercase.
    missingLabel: () => "missing label",
    reservedName: (name: string) => `name reserved by the API: ${name}`,
    unknownEdgeTarget: (edge: string, target: string) => `the edge "${edge}" points to an unknown kind: ${target}`,
    severalOwnerFields: () => "several owner fields",
    resolveWithoutClaims: () => "resolve() without claims()",
    /** A function of the kind (evaluate, status, resolve…) threw an error. */
    methodThrows: (method: string, error: string) => `${method}() throws "${error}"`,
    resolveReadsContested: () => "resolve() reads a value being resolved",
    orderChangesAnswer: () => "the same claims, in another order, give another answer",
    resolveReturnsNonClaimant: (ref: string) => `resolve() returns "${ref}", which claims nothing`,
    twoCallsTwoAnswers: () => "two identical calls give two answers",
    noOwner: (what: string) => `"${what}" has no owner`,
    statusWithoutEvidence: (status: string) => `status() returns "${status}" although no evidence exists`,
    claimNotOnNode: () => "claims() targets something other than a node",

    /** A kind, a view or a module of the graph imports the prelude past its public API. */
    privateImport: (file: string, module: string) => `${file} imports "${module}": only the public API (trame/kernel) is allowed`,
    /** A file of the project reaches into a library by a path, instead of its name. */
    libraryByPath: (file: string, module: string, library: string, named: string) =>
      `${file} imports "${module}", a file of the library ${library}, by its path: name it "${named}" (trame manifest writes where the name leads)`,
  }),
})

/**
 * Messages of the views
 * What the loading of views and the compilation API say.
 */
export const ViewMessages = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language },
  messages: ({ language }) => {
    const plural = plurals(language.tag)
    return {
    /** A view declared without a name, in a report. */
    unnamedView: () => "?",
    // The laws of views.
    lawDeclared: () => "Complete declaration",
    lawTotal: () => "Answers on this graph, without crashing",
    lawDeterministic: () => "Same graph, same document",
    lawSerial: () => "Produces only the intermediate format",

    // What breaks them: an example, lowercase.
    missingNameOrLabel: () => "missing name or label",
    duplicateName: () => "two views have this name",
    nodeGroupNotPerNode: () => "a view of the node group must have one instance per node",
    appliesNotPerNode: () => "applies() only makes sense for a view with one instance per node",
    /** An instance of a view failed: its id, and why. */
    instanceFailed: (id: string, reason: string) => `${id}: ${reason}`,
    readsUndecidedValue: () => "reads an undecided value",
    unknownBlockType: (type: string) => `unknown block type: ${type}`,
    twoRunsTwoDocuments: (id: string) => `${id}: two runs, two documents`,

    // The compilation API: the cards of nodes, and the line that sums up a set.
    cannotRender: () => "Cannot render: a value is not decided.",
    constantColumn: () => "Constant",
    valueColumn: () => "Value",
    meaningColumn: () => "Meaning",
    /** The meaning of a constant that refines another one ("Texts.empty"). */
    refiningMeaning: (meaning: string, refined: string) => `${meaning} (refines ${refined})`,
    /** Where the body of a node is, when it is not in a file. */
    inlineBody: () => "inline, in the declaration",
    bodyLabel: () => "Body",
    provisioningLabel: () => "Provisioning",
    parametersLabel: () => "Parameters",
    effectsLabel: () => "Effects",
    decisionsToTake: (n: number) => `${plural(n, { one: "decision", other: "decisions" })} to take`,
    errors: (n: number) => plural(n, { one: "error", other: "errors" }),
    pointsToWatch: (n: number) => `${plural(n, { one: "point", other: "points" })} to watch`,
    nothingToReport: () => "Nothing to report",
    }
  },
})

/**
 * Messages of the outputs
 * What the machine outputs, the lock, the payload, the date bundle, the differences and the page say.
 */
export const OutputMessages = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    /** What graph.json and snapshot.json write in place of a function. */
    functionValue: () => "(function)",
    /** A diagnostic on a node, in graph.json: its severity, then what it says. */
    diagnostic: (severity: string, what: string) => `${severity}: ${what}`,

    // trame.lock
    publishedRemoved: () => "Published element deleted: repeal it instead of removing it from the code",
    publishedChanged: () => "Modified after publication: create an amendment instead of changing the declaration",

    // The page, read back before it is given.
    styleNotTheLanguage: (language: string, places: string[]) => `The style of the page does not follow the grammar of ${language}, at ${places.join(", ")}: the page is not given`,
    pageNotTheLanguage: (language: string, places: string[]) => `The page does not follow the grammar of ${language}, at ${places.join(", ")}: it is not given`,
    variablesNotWritten: (variables: string[]) => `The style of the page uses variables that it does not write: ${variables.join(", ")}: the page is not given`,

    // The date bundle.
    compilationFailed: () => "the compilation failed",
    unreadableOutput: (error: string) => `unreadable output: ${error}`,

    // What the last change changed: the pieces of each line, around the nodes, statuses and values it names.
    changesTitle: () => "What the last change changed",
    newNode: () => "New node: ",
    nodeRemoved: (title: string) => `Node removed: ${title}`,
    statusGoesFrom: () => " goes from ",
    statusGoesTo: () => " to ",
    noStatus: () => "no status",
    issueAdded: () => " added: ",
    issueResolved: () => " resolved: ",
    newOverlapOn: () => "New overlap on ",
    overlapOn: () => "The overlap on ",
    overlapOf: () => " of ",
    settledDifferently: () => " is settled differently: ",
    contested: () => "contested",
    prevails: (titles: string[]) => `${titles.join(", ")} ${titles.length > 1 ? "prevail" : "prevails"}`,

    // The page.
    /** The page's title: the graph of the project, by what it calls itself (Trame's own has no name). */
    pageTitle: (project?: string) => `${project ?? "Trame"} graph`,
    /** Next to the name "trame", in the corner of the page. */
    brandSubtitle: () => "graph",
    datesLabel: () => "Graph in force on",
    navigationLabel: () => "Documents and views",
    documentLabel: () => "Document",
    renderingLabel: () => "Rendering",
    renderedButton: () => "Rendered",
    markdownButton: () => "Markdown",
    textButton: () => "Text",
  }),
})

/**
 * Messages of trame dev
 * What the dev server prints while it watches the project.
 */
export const DevMessages = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language, lists: Lists },
  messages: ({ language, lists }) => {
    const plural = plurals(language.tag)
    return {
    listening: (address: string, date: string) => `trame dev · ${address} · graph of ${date}`,
    watching: (paths: string[]) => `watching ${lists.conjunction(paths).join("")} · Ctrl+C to stop`,
    compilationRefused: (time: string, ms: number) => `✗ ${time}  compilation refused (${ms} ms): the page keeps the last valid graph`,
    compiled: (time: string, ms: number, dates: number, changes: number, reason: string) =>
      `✓ ${time}  compiled in ${ms} ms · ${plural(dates, { one: "date", other: "dates" })}${changes ? ` · ${plural(changes, { one: "change", other: "changes" })}` : ""} (${reason})`,
    // Why it recompiles (a single changed file is named by its path).
    startup: () => "startup",
    filesChanged: (n: number) => plural(n, { one: "file", other: "files" }),
    changedDuringCompilation: () => "changes during the compilation",
    }
  },
})

/**
 * Messages of the commands
 * What the commands print: summaries, usage, refusals.
 */
export const CommandMessages = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language },
  messages: ({ language }) => {
    const plural = plurals(language.tag)
    return {
    /** The last line of `trame build`. (`written([])` is its beginning: the scenarios look for it.) */
    written: (files: string[]) => `written: ${files.join(", ")}`,

    // The checks every command makes before it compiles.
    /** The heading of the kinds' laws (`trame test-kinds`). */
    kindLaws: (kinds: number, samples: number) => `kind laws · ${plural(kinds, { one: "kind", other: "kinds" })} · ${plural(samples, { one: "node", other: "nodes" })} drawn at random per kind`,
    /** After a kind or a view whose laws all hold. */
    lawsHold: () => "ok",
    /** A law of a kind that does not hold. */
    lawFailed: (law: string) => `✗ "${law}"`,
    /** The example that breaks a law, and how many samples break it. */
    lawCounterexample: (example: string, count: number) => `${example} (${plural(count, { one: "time", other: "times" })})`,
    /** An import that the project may not make. */
    importRefused: (problem: string) => `refused: ${problem}`,
    kindRefused: (kind: string, laws: string[]) => `kind "${kind}" refused: does not respect ${laws.map((l) => `"${l}"`).join(", ")}`,
    viewRefused: (view: string, law: string, example: string) => `view "${view}" refused: "${law}" (${example})`,
    /** Where to read the details of the kinds refused. */
    kindLawDetails: () => "details: npm run test-kinds",
    /** Followed by the type errors, one per line. */
    typeScriptRefuses: () => "TypeScript refuses the graph:",

    // trame test-kinds
    importsChecked: (refused: number) => `imports · ${refused ? `${refused} refused` : "only the public API is used"}`,
    importFailed: (problem: string) => `✗ ${problem}`,
    /** The heading of the views' laws, with the date of the graph they ran on. */
    viewLaws: (views: number, date: string) => `view laws · ${plural(views, { one: "view", other: "views" })}, run twice on the graph of ${date}`,
    viewLawsFailed: (failures: { law: string; example: string }[]) => failures.map((f) => `✗ "${f.law}": ${f.example}`).join("; "),

    // trame view, and a view by its name
    unknownView: (name: string | undefined, views: string[]) => `Unknown view: ${name ?? "(none)"}. Views: ${views.join(", ")}`,
    unknownNode: (node: string | undefined) => `Unknown node: ${node ?? "(none)"}`,
    viewDoesNotApply: (view: string, node: string) => `The view "${view}" does not apply to ${node}.`,
    unknownModule: (module: string | undefined, modules: string[]) => `Unknown module: ${module ?? "(none)"}. Modules: ${modules.join(", ")}`,
    /** A command that is neither a command nor a view: the commands and the views that exist. */
    unknownCommandOrView: (command: string, commands: string[], views: string[]) =>
      `Unknown command: ${command}. Commands: ${commands.join(", ")}, or a view: ${views.join(", ")}`,

    // trame assemble
    assembleUsage: (command: string) => `Usage: trame ${command} <component> --env <environment>`,
    /** Followed by the errors, one per line. */
    assemblyRefusedForErrors: (errors: number) => `Assembly refused: the graph has ${plural(errors, { one: "error", other: "errors" })}.`,
    /** Followed by the reasons, one per line. */
    assemblyRefused: () => "Assembly refused:",
    assembled: (steps: number, files: string[]) => `assembled · ${plural(steps, { one: "node", other: "nodes" })} built · written: ${files.join(", ")}`,

    // trame snapshot, trame export, trame publish
    snapshotTaken: (date: string, files: string[]) => `snapshot of ${date} · written: ${files.join(", ")}`,
    /** trame audit: what the registry says of a package. */
    advisory: (severity: string, title: string) => `${severity}: ${title}`,
    advisories: (count: number, severity: string) => `${plural(count, { one: "vulnerability", other: "vulnerabilities" })} (${severity})`,
    noAdvisory: () => "no known vulnerability",
    latestIs: (version: string) => `latest ${version}`,
    latestHeld: (version: string, ceiling: string) => `latest ${version}, held below ${ceiling}`,
    manifestWritten: (packages: number, file: string) => `${plural(packages, { one: "package", other: "packages" })} of the graph · written: ${file} · npm install installs them`,
    librariesNamed: (libraries: number, file: string) => `${plural(libraries, { one: "library", other: "libraries" })} named in the import map of ${file}`,
    deliveryRefusedForErrors: (errors: number) => `delivery refused: the graph holds ${plural(errors, { one: "error", other: "errors" })} (trame build lists them)`,
    noDelivery: (name: string | undefined, known: string[]) =>
      name ? `No delivery named ${name}${known.length ? `: ${known.join(", ")}` : ""}` : "The graph declares no delivery (kind delivery)",
    deliveryIncomplete: (title: string) => `"${title}" names no component, no environment, or a target trame deliver does not write`,
    delivered: (title: string, file: string, characters: number) => `delivered ${title}: ${file} (${Math.round(characters / 1024)} KiB)`,
    releaseNeedsVersion: () => "trame release <version> \"what changes\": give the version, then what changes",
    releaseExists: (dir: string) => `${dir} already exists: a release is never written again`,
    releaseUnsettled: (blocking: number, errors: number) => `release refused (requirement "A release is settled"): ${plural(blocking, { one: "decision to take", other: "decisions to take" })}, ${plural(errors, { one: "error", other: "errors" })}`,
    released: (version: string, dir: string, fingerprint: string, documents: number) =>
      `released ${version} in ${dir} (fingerprint ${fingerprint}), with ${plural(documents, { one: "document", other: "documents" })} · a project imports it with { "path", "version": "${version}" }`,
    upToDate: () => "up to date",
    audited: (packages: number, vulnerable: number, file: string) => `${plural(packages, { one: "package", other: "packages" })} audited, ${vulnerable} vulnerable · written: ${file}`,
    exported: (dates: number, file: string) => `export · ${plural(dates, { one: "date", other: "dates" })} · written: ${file}`,
    /** After the published declarations that changed. */
    publicationRefused: () => "publication refused: a published declaration has changed",
    published: (declarations: number) => `published: ${plural(declarations, { one: "declaration", other: "declarations" })} frozen in trame.lock`,
    nothingToPublish: () => "nothing new to publish",
    evidenceNeedsBy: () => "trame ship and trame evidence attribute what they record: give --by <name>",
    noShipment: (name: string | undefined, known: string[]) =>
      name ? `No shipment named ${name}${known.length ? `: ${known.join(", ")}` : ""}` : `trame ship <shipment> --by <name>${known.length ? `: ${known.join(", ")}` : " (the graph declares no shipment)"}`,
    shipRefusedForErrors: (errors: number) => `shipment refused: the graph holds ${plural(errors, { one: "error", other: "errors" })} (trame build lists them)`,
    shipmentWithoutEnvironment: (shipment: string) => `"${shipment}" runs programs of the SDLC but names no environment to assemble them for (its edge environment)`,
    programFailed: (title: string, code: number) => `${title} failed (exit status ${code}): nothing shipped`,
    writerRunsNothing: (title: string) => `${title} is written by a writer but names no shipment to run (runs)`,
    artifactWithoutPath: (title: string) => `${title} says nowhere where it lives: give its path`,
    artifactMissing: (title: string, path: string) => `${title}: ${path} is not there once produced`,
    artifactBuilt: (title: string, path: string, fingerprint: string) => `built ${title}: ${path} (${fingerprint.slice(0, 12)})`,
    checkRan: (title: string, passed: boolean) => `${passed ? "passed" : "FAILED"}: ${title}`,
    evidenceRecorded: (count: number, file: string) => `${plural(count, { one: "piece of evidence", other: "pieces of evidence" })} recorded in ${file}`,
    shipmentKept: (title: string) => `"${title}" does not ship (requirement "Ship only what holds"):`,
    obligationMissing: (title: string, status: string) => `  ${title} is ${status}`,
    obligationIssue: (what: string, owner: string | undefined) => `    ${what}${owner ? ` (${owner})` : ""}`,
    shipmentWouldShip: (title: string) => `"${title}" holds: it would ship (--dry-run: nothing deployed)`,
    deploymentFailed: (title: string, code: number) => `${title} failed (exit status ${code}): the shipment stops there`,
    deployed: (title: string) => `deployed: ${title}`,
    shipped: (title: string, target: string, dossier: string) => `shipped ${title} (${target}) · dossier: ${dossier}`,
    evidenceUsage: (passed: string, failed: string) => `trame evidence <node> ${passed}|${failed} --by <name> [--subject <row>] [--language <tag>] [--note "…"] [--url <where>]`,
    noNodeNamed: (name: string | undefined) => (name ? `No node named ${name}` : "trame evidence <node>: name the node"),
    notOfTheRole: (by: string, role: string, people: string[]) => `${by} is not of the role ${role}${people.length ? ` (${people.join(", ")})` : ""}`,
    ownWork: (by: string, role: string) => `${by} wrote it: the role ${role} does not review its own work`,
    noRowNamed: (dataset: string, row: string | undefined, language: string | undefined) =>
      `${dataset} has no ${row ? `row ${row}` : "row"}${language ? ` in ${language}` : ""} to review`,
    checkNotBuilt: (title: string) => `${title} checks an artefact not built yet: trame ship builds it`,
    deploymentNeedsUrl: (title: string) => `where was ${title} deployed? give --url <where>`,
    }
  },
})

/**
 * Words of the kinds
 * What the kinds say: their labels, the labels of their fields and edges, what their holes say, what they render. The
 * kinds are files of the language, outside the graph: their words are a catalog all the same, which they call; a kind
 * writes no text of its own.
 */
export const KindWords = catalog({
  owner: "trame",
  language: Language,
  messages: code.file<typeof import("../kinds/words").default>("../kinds/words.ts"),
})

/**
 * Words of the views
 * What the views say: their titles, their introductions, their headings, what they say of the graph.
 */
export const ViewWords = catalog({
  owner: "trame",
  language: Language,
  messages: code.file<typeof import("../views/words").default>("../views/words.ts"),
})

/**
 * Words of Trame's views
 * What the views of Trame's own graph say: the catalogue of literals, the versions of the engine.
 */
export const EngineViewWords = catalog({
  owner: "trame",
  language: Language,
  messages: code.file<typeof import("../engine-views/words").default>("../engine-views/words.ts"),
})

/**
 * Words of the page
 * What the page says around the documents the engine wrote: the state of the compilation, the dates, the
 * navigation, the banner, the figures, the explorer.
 */
export const PageWords = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language },
  messages: code.file<typeof import("./code/page/words").default>("./code/page/words.ts"),
})

/**
 * Messages of the renderers
 * The words that the renderers add to the intermediate format: labels, notes, the names of statuses and outcomes.
 * Written in a file: the page, which runs in the browser where nothing is wired, reads it too.
 */
export const RenderingMessages = catalog({
  owner: "trame",
  language: Language,
  messages: code.file<typeof import("./code/rendering/messages").default>("./code/rendering/messages.ts"),
})

/**
 * Messages of the platform
 * What the implementations of the ports say (the command line, the terminal, the processes).
 */
export const PlatformMessages = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    /** No command has this name, and there is no "*" command to take it. */
    unknownCommand: (name: string) => `Unknown command: ${name}`,
    /** A promise was rejected and nothing waited for it: the engine says so and carries on. */
    unhandledRejection: (reason: string) => `warning: a promise was rejected without being awaited (${reason})`,
    /** In test, the engine tried to start a process. */
    noProcessInTest: () => "In test, the engine starts no process",
    noAdvanceInTest: () => "In test, the engine runs no other engine and touches no tree of files: an advance runs on a machine",
    /** In test, the engine asked to exit (a refusal, most often): the scenario fails with this message. */
    engineExited: (code: number, lastLines: string[]) => `the engine exited with code ${code}: ${lastLines.join(" | ")}`,
    /** A text was to be read with a grammar that was not loaded first. */
    grammarNotLoaded: (module: string) => `The grammar ${module} is not loaded: load it before reading`,
    /** tree-sitter gave no tree for a text (it was stopped, or its grammar is not one). */
    notParsed: (module: string) => `tree-sitter gave no tree with the grammar ${module}`,
  }),
})

/**
 * Messages of the scenarios
 * The names of the checks that the engine's scenarios make.
 */
export const ScenarioMessages = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language },
  messages: ({ language }) => {
    const plural = plurals(language.tag)
    return {
    typeScriptAcceptsTheExample: () => "TypeScript accepts the example",
    exampleNodes: (nodes: number, scenarios: number) => `The example has ${plural(nodes, { one: "node", other: "nodes" })}, ${plural(scenarios, { one: "scenario", other: "scenarios" })} among them`,
    noErrorInTheExample: () => "No error in the example",
    exampleScenariosHold: () => "The scenarios of the example hold",
    kindsRespectTheirLaws: (passed: number, total: number) => `${passed} kinds out of ${total} respect all their laws`,
    buildSucceeds: () => "The build succeeds",
    summaryShown: () => "The summary is shown",
    filesWrittenAsBefore: (written: number, expected: number) =>
      `${plural(written, { one: "file", other: "files" })} written, identical to those of the engine in place${expected ? `, apart from the expected differences (${expected})` : ""}`,
    expectedDifference: (path: string, reason: string) => `${path}: expected difference, ${reason}`,
    unexpectedDifference: (path: string) => `${path} differs from what the engine in place wrote`,
    }
  },
})

/**
 * Messages of an advance
 * What trame advance says as it goes, and what a generation says of itself.
 */
export const AdvanceMessages = catalog({
  owner: "trame",
  language: Language,
  deps: { language: Language },
  messages: ({ language }) => {
    const plural = plurals(language.tag)
    return {
    noGeneration: (dir: string) => `No generation in ${dir}: see its README`,
    inPlace: (generation: string) => `Generation in place: ${generation}`,
    referenceLibrary: (generation: string, library: string) => `1. ${generation} builds the library ${library}: the reference`,
    referenceExample: (generation: string) => `1. ${generation} builds the example: the reference`,
    referenceSelf: (generation: string) => `2. ${generation} builds Trame's graph; its scenarios run the described engine, in test, on the example`,
    assembleCandidate: (generation: string) => `3. ${generation} assembles the candidate`,
    candidateLibrary: (library: string) => `4. The candidate builds the library ${library}`,
    candidateExample: () => "4. The candidate builds the example",
    candidateSelf: () => "5. The candidate builds Trame's graph",
    candidateReassembles: () => "6. The candidate reassembles itself",
    secondSelf: () => "7. This second assembly builds Trame's graph",
    secondReassembles: () => "8. It reassembles itself",
    laws: () => "9. The laws of the kinds and of the views",
    older: () => "10. The older generations that share the language, on the example",
    olderRuns: (generation: string) => `${generation} runs`,
    olderFails: (generation: string) => `${generation} no longer runs on the language`,
    noOlder: () => "no other generation shares the language",
    noArchive: (generation: string) => `the generation in place, ${generation}, archived no language that could be given to it`,
    switched: (generation: string, archive: string) => `  ✓ ${generation} runs on its own copy of the language archived as ${archive}`,
    archived: (dir: string) => `  ✓ language archived in ${dir}`,
    pinned: (project: string, generation: string) => `  ✓ ${project} runs ${generation}`,
    releasesTitle: () => "Trame · Releases",
    releasesHeader: () => [
      "Written by trame advance at each promotion, from the releases already here and the generation it freezes: do not",
      "edit. A generation's own release is written after its graph is copied, so it is not in its own copy.",
    ].join("\n"),
    releaseTitle: (generation: number) => `Generation ${generation}`,
    libraryReleasesTitle: (project: string | undefined) => (project ? `${project} · Releases` : "Releases"),
    libraryReleasesHeader: () => [
      "Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A",
      "release's own record is written after its sources are copied, so it is not in its own copy.",
    ].join("\n"),
    libraryReleaseTitle: (version: string) => `Version ${version}`,
    done: (what: string) => `  ✓ ${what}`,
    failed: (what: string) => `  ✗ ${what}`,
    noted: (what: string) => `  · ${what}`,
    scenario: (name: string, status: string) => `    ${name} ${status}`,
    asBefore: (generation: string) => `as ${generation}: identical`,
    differences: (generation: string, files: number, lines: number) => `differs from ${generation} in ${plural(files, { one: "file", other: "files" })} (${plural(lines, { one: "line", other: "lines" })})`,
    differingFile: (header: string) => `      ${header}`,
    buildFailed: (status: number) => `the build stopped (exit status ${status})`,
    assemblyFailed: (status: number) => `the assembly stopped (exit status ${status})`,
    scenarioNotHeld: () => "a scenario does not hold",
    identicalToCandidate: () => "identical to the candidate",
    differsFromCandidate: () => "differs from the candidate: the assembly changed in the graph",
    secondDiffers: () => "the second assembly writes Trame's graph differently from the candidate",
    fixedPoint: () => "identical, character for character: fixed point",
    noFixedPoint: () => "no fixed point: the second assembly writes a different program",
    law: (line: string) => `    ${line.trim()}`,
    differencesWritten: (generation: string, file: string) => `Differences with ${generation}: ${file}`,
    notAccepted: () => "Not accepted (requirement \"Accept a candidate\"): read the differences, then run again with --accept if they are wanted.",
    exists: (dir: string) => `${dir} already exists`,
    libraryOutside: (library: string, path: string) => `the library ${library} is outside Trame's repository (${path}): a generation could not keep the copy its program imports`,
    frozen: (dir: string, fingerprint: string) => `  ✓ frozen in ${dir} (fingerprint ${fingerprint})`,
    succeeded: () => "Advance succeeded.",
    assembledBy: (generation: string, accepted: boolean, differences: string) =>
      `${generation}, by trame advance${accepted ? `, differences accepted (${differences})` : ""}`,
    origin: (generation: number, by: string, what: string, fingerprint: string, program: string, runnable: string, sources: string, prelude: string, kinds: string, manifest: string, archive: string, libraries: string[]) => [
      `# Generation ${generation}`,
      "",
      `- Assembled by: ${by}`,
      `- What changes: ${what}`,
      `- Fingerprint (program and code): \`${fingerprint}\``,
      `- Program: \`${program}\``,
      `- Graph and code of the engine: \`${sources}/\`, copied as assembled`,
      ...libraries.map((library) => `- Library: \`${library}/\`, its graph and code copied as assembled`),
      `- Shared language: \`${prelude}/\` and \`${kinds}/\` are links to those of the repository; the language is archived as \`${archive}\``,
      `- Packages: \`${manifest}\` and its lockfile, as installed when it was frozen`,
      "",
      `Run this generation: \`npx tsx ${runnable} <command>\`, from the project's directory.`,
      "",
    ].join("\n"),
    }
  },
})

/**
 * A catalog counts in its language
 * A count and its noun follow the plural rules of the language the catalog is written in, with the forms the catalog
 * writes for each category; nothing below the catalogs presumes a language.
 */
export const CountsInTheLanguage = adr({
  owner: "trame",
  context: "The catalogs counted with a helper of the prelude that took the English rule (one, otherwise the noun and an s), joined lists with an English and, and wrote dates in English when nobody said a language: a catalog in another language could not count, and the prelude, meant for every language, spoke one.",
  consequences: "A catalog that counts receives the decided language and counts by its plural rules (CLDR, through the platform's Intl), with the forms it writes for each category (one, other, and few or many where a language has them); a catalog of the language written in a file says the language it is written in; lists are joined by Lists, in the decided language; the prelude takes a language wherever it writes words, and has none of its own. The page speaks the decided language until a payload says another.",
  rejected: {
    "The English rule in the prelude": "a catalog in French or in Polish would count wrongly",
    "A plural made by adding an s": "irregular nouns, and every other language",
  },
  serves: [SingleSource],
  appliedBy: [CompilerMessages, ViewMessages, DevMessages, CommandMessages, ScenarioMessages, AdvanceMessages, PageWords, Lists],
})

/**
 * The words are in catalogs
 * What a part of the product says to people, in a terminal or a document, is written in a message catalog, in the
 * decided language; code calls its messages by name.
 */
export const WordsInCatalogs = adr({
  owner: "trame",
  context: "Words people read change for reasons code does not know (a clearer phrasing, another language), and they hold literals by nature.",
  consequences: "A catalog's text is what it declares: it is not a literal to declare. The page, which runs where nothing is wired, calls the renderers' catalog directly.",
  rejected: { "Texts in the code": "a sentence to change would mean code to change, and no language could replace another" },
  serves: [SingleSource],
  appliedBy: [CompilerMessages, DriverMessages, LawMessages, ViewMessages, OutputMessages, DevMessages, CommandMessages, AdvanceMessages, RenderingMessages, PlatformMessages, ScenarioMessages],
})
