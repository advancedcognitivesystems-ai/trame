// The words of the views of Trame's own graph (the literals, the versions).
// A catalog of the language (catalog "Words of Trame's views"): a view writes no text of its own, it says it through this.
// A sentence that holds pieces returns them where the language places them; a count says its noun as the language does.

import { plurals, type Inline } from "../trame/kernel"

/** This catalog is written in British English: its counts follow the plural rules of that language. */
const plural = plurals("en-GB")

const body = () => ({

  // literals ---------------------------------------------------------------------------------------------------

  literalsLiterals: () => "Literals",
  literalsThisEngineDoesNotRecordLiterals: () => "This engine does not record literals.",
  literalsALiteralWrittenInABody: () => "A literal written in a body is an error of its node: its value belongs in the graph, with its meaning (a standard, a decision, a structure, a catalog), and the body receives it as a parameter. The text of a message catalog is what the catalog declares.",
  literalsByCategory: () => "By category",
  literalsCategory: () => "Category",
  literalsToDeclare: () => "To declare",
  literalsExamples: () => "Examples",
  literalsByRole: () => "By role",
  literalsWhatEachLiteralDoesFromIts: () => "What each literal does, from its place in the code. The same 0 can be an index, a starting value or a status: the role says what has to be declared.",
  literalsRole: () => "Role",
  literalsMostFrequentValues: () => "Most frequent values",
  literalsNotRecorded: () => "not recorded",
  literalsRepeatedValues: () => "Repeated values",
  literalsTheSameValueWrittenInSeveral: () => "The same value written in several places: a single declaration would replace all of them.",
  literalsValue: () => "Value",
  literalsTimes: () => "Times",
  literalsIn: () => "In",
  literalsValuesThatAConstantAlreadyDeclares: () => "Values that a constant already declares",
  literalsTheGraphAlreadyDeclaresTheseTexts: () => `The graph already declares these texts, with their meaning: the body could receive the constant as a parameter instead of writing it again. One value can have several meanings ("/" separates the segments of an address, and it also closes a tag): the meaning chooses the constant, or calls for a new one.`,
  literalsConstants: () => "Constants",
  literalsDeclaredByACatalog: () => "Declared by a catalog",
  literalsTheTextWrittenInAMessage: () => "The text written in a message catalog is what the catalog declares: words said to people, in one language.",
  literalsCatalog: () => "Catalog",
  literalsByBody: () => "By body",
  literalsLine: () => "Line",
  literalsContext: () => "Context",
  literalsInTheLanguage: () => "In the language",
  literalsTheKindsAndViewsAreFiles: () => "The kinds and the views the project writes are files, not nodes: a value written in one is an error of the language, one per file, with each place. What they need comes from the graph through the engine, and their words from their catalogs.",
  literalsFile: () => "File",
  literalsTheLanguageWritesNone: () => "The kinds and the views the project writes hold no literal: what they need, the engine gives them from the graph, and their words are in catalogs.",

  literalsTimesShown: (times: number) => ` ×${times}`,
  literalsConstantOf: (node: Inline, name: string): Inline[] => [node, ".", name],
  literalsInTheLanguageSummary: (literals: number, files: number) => `${plural(literals, { one: "literal", other: "literals" })} in ${plural(files, { one: "file", other: "files" })} of the language`,
  literalsFileCount: (file: string, literals: number) => `${file} · ${plural(literals, { one: "literal", other: "literals" })}`,
  literalsInOfThemAlreadyDeclaredBy: (toDeclare: number, bodies: number, already: number, declared: number) =>
    `${plural(toDeclare, { one: "literal to declare", other: "literals to declare" })} in ${plural(bodies, { one: "body", other: "bodies" })}, ${already} of them already declared by a constant · ${declared} declared by a catalog`,
  literalsBodyOf: (owners: readonly Inline[]): Inline[] => ["Body of ", ...owners, "."],
  literalsIntroduction: (date: Inline): Inline[] => ["The values written in code bodies, found by the syntax reader with the queries of each language, on ", date, "."],

  // versions ---------------------------------------------------------------------------------------------------

  versionsVersions: () => "Versions",
  versionsNoReleaseIsDeclared: () => "No release is declared.",
  versionsItsOwnCopy: () => "its own copy",
  versionsEachReleaseNewestFirstWhatChanged: () => "Each release, newest first: what changed, the release that assembled it, and whether it shares the repository's language or runs on a copy of its own.",
  versionsRelease: () => "Release",
  versionsReleasedOn: () => "Released on",
  versionsWhatChanges: () => "What changes",
  versionsAssembledBy: () => "Assembled by",
  versionsLanguage: () => "Language",
  versionsTheReleasesOfTheComponentsOn: () => "The releases of the components on ",
  versionsNewestFirstAProjectRunsThe: () => ", newest first. A project runs the release its configuration pins.",

  versionsShared: () => "shared",
  versionsOfOnALanguageOfOwn: (releases: number, components: number, own: number) =>
    `${plural(releases, { one: "release", other: "releases" })} of ${plural(components, { one: "component", other: "components" })}; ${plural(own, { one: "release", other: "releases" })} on a language of ${own === 1 ? "its" : "their"} own`,
})

export type Api = ReturnType<typeof body>
export default body
