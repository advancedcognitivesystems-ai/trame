/** Data · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { vocabulary } from "#trame/kinds/vocabulary"
import { MemoryPreferences, PreferencesStore } from "#std/platform"
import { SymbolsLanguage } from "#std/measures"
import { Strategy } from "#std/patterns"
import { entity, stored, type Model } from "./kinds/entity"
import { Documents, DocumentsInPreferences, DocumentForm, Migrate, Conforms } from "./documents"
import { DataDescribedOnce } from "./product"

// What the library offers is code like the rest: its documents are played here, kept in the preferences of a device in
// memory, on an entity of its own, with a migration written as an entity would compute it.

/**
 * Test
 * Where the library's scenarios run: the preferences of a device, kept in memory.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * Documents, in memory
 * In the library's scenarios, a document is kept in the preferences of a device kept in memory.
 */
export const InMemory = binding({
  owner: "trame",
  chooses: [MemoryPreferences, DocumentsInPreferences],
  environments: [Test],
  follows: [Strategy],
  serves: [DataDescribedOnce],
  context: "The library's documents are read and written as a product's would be, the device in memory.",
})

/**
 * Shelves
 * Where a book stands, in the library's scenarios.
 */
export const Shelves = vocabulary({ owner: "trame", words: { reading: "Being read", read: "Read" }, serves: [DataDescribedOnce] })

/**
 * A book
 * An entity of the library's scenarios: a title, its pages, where it stands, whether it was lent.
 */
export const Book = entity({
  owner: "trame",
  keptAs: "data.book",
  fields: { title: stored.text(), pages: stored.number(), shelf: stored.word(Shelves), lent: stored.optional(stored.flag()) },
  serves: [DataDescribedOnce],
})

/**
 * What the library's scenarios check
 */
export const DataChecks = catalog({
  owner: "trame",
  language: SymbolsLanguage,
  messages: () => ({
    writtenReadBack: () => "A document written is read back as it was, with the version of its description",
    storedBeforeVersions: () => "What was stored before versions were kept is read as the first version deployed",
    migrated: () => "A document of a version deployed is migrated: a field renamed moves, one dropped goes",
    notConforming: () => "A document that does not keep its description is nothing: a number written as a text, a word of no vocabulary",
    unknownVersion: () => "A document of a version nothing migrates from is nothing",
    cleared: () => "A document cleared is nothing",
  }),
})

/**
 * What the library's scenarios are given
 * A book; the same as it was stored before versions were kept; as a version deployed stored it (its title called a
 * heading, a mood kept), with the steps that migrate it; a book whose pages are written as a text; a version unknown.
 */
export const DataGiven = decision<{
  book: { title: string; pages: number; shelf: "reading" | "read" }
  older: { version: string; value: Record<string, unknown>; steps: { op: string; field: string; from?: string }[] }
  wrong: Record<string, unknown>[]
  unknown: string
}>({
  owner: "trame",
  value: {
    book: { title: "Middlemarch", pages: 880, shelf: "reading" },
    older: {
      version: "an older version",
      value: { heading: "Middlemarch", pages: 880, shelf: "reading", mood: "patient" },
      steps: [{ op: "rename", field: "title", from: "heading" }, { op: "drop", field: "mood" }],
    },
    wrong: [{ title: "Middlemarch", pages: "eight hundred", shelf: "reading" }, { title: "Middlemarch", pages: 880, shelf: "lost" }],
    unknown: "a version nobody deployed",
  },
})

/**
 * Documents kept in the preferences
 * A document written is read back as it was; what was stored before versions were kept is read as the first version;
 * one of a version deployed is migrated; one that does not keep its description, or of a version nothing migrates
 * from, is nothing; one cleared is nothing.
 */
export const DocumentsKept = scenario({
  owner: "trame",
  verifies: [DocumentsInPreferences, Migrate, Conforms],
  env: Test,
  deps: { documents: Documents, preferences: PreferencesStore, book: Book, form: DocumentForm, given: DataGiven, checks: DataChecks },
  body: ({ documents, preferences, book, form, given, checks }) => async (check) => {
    const stored = (version: string, value: unknown) => preferences.set(book.name, JSON.stringify({ [form.version]: version, [form.value]: value }))
    // The same members with the same values, in whatever order.
    const sorted = (v: unknown) => JSON.stringify(Object.entries(v ?? {}).sort(([a], [b]) => a.localeCompare(b)))
    const same = (a: unknown, b: unknown) => sorted(a) === sorted(b)
    documents.write(book, given.book)
    const kept = JSON.parse(preferences.get(book.name) ?? JSON.stringify(null)) as Record<string, unknown> | null
    check(checks.writtenReadBack(), same(documents.read(book), given.book) && kept?.[form.version] === book.version)
    preferences.set(book.name, JSON.stringify(given.book))
    check(checks.storedBeforeVersions(), same(documents.read(book), given.book))
    const older: Model = { ...book, migrations: [{ from: given.older.version, steps: given.older.steps }] }
    stored(given.older.version, given.older.value)
    check(checks.migrated(), same(documents.read(older as typeof book), given.book))
    check(checks.notConforming(), given.wrong.every((w) => {
      stored(book.version, w)
      return documents.read(book) === undefined
    }))
    stored(given.unknown, given.book)
    check(checks.unknownVersion(), documents.read(book) === undefined)
    documents.write(book, given.book)
    documents.clear(book)
    check(checks.cleared(), documents.read(book) === undefined)
  },
})
