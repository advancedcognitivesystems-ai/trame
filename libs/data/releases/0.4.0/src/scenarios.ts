/** Data · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { MemoryPreferences, PreferencesStore } from "#std/platform"
import { SymbolsLanguage } from "#std/measures"
import { Counts } from "#std/algebra"
import { Strategy, Adapter } from "#std/patterns"
import type { Model } from "./kinds/entity"
import { Book } from "./shelves"
import { Documents, DocumentsInPreferences, DocumentForm, Migrate, Conforms } from "./documents"
import {
  Records, RecordsInSql, SqliteTables, PostgresTables, SqliteInMemory, StartEmpty, SeedOfTheEntity, SqlDatabase, TableDialect, VersionsTable,
} from "./records"
import { DataDescribedOnce } from "./product"

// What the library offers is code like the rest: its documents are played here, kept in the preferences of a device in
// memory, on an entity of its own (in a module read after this one: wired before it is evaluated), with a migration
// written as an entity would compute it.

/**
 * Test
 * Where the library's scenarios run: the preferences of a device, kept in memory.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * Seeded tables
 * Where the library's scenarios create tables that start with the records their entity declares.
 */
export const SeededTables = environment({ owner: "trame" })

/**
 * PostgreSQL's statements
 * Where the library's scenarios read the statements PostgreSQL's tables write, without a database.
 */
export const PostgresStatementsOnly = environment({ owner: "trame" })

/**
 * Documents, in memory
 * In the library's scenarios, a document is kept in the preferences of a device kept in memory.
 */
export const InMemory = binding({
  owner: "trame",
  chooses: [MemoryPreferences, DocumentsInPreferences, RecordsInSql, SqliteTables, StartEmpty],
  environments: [Test],
  follows: [Strategy],
  serves: [DataDescribedOnce],
  context: "The library's documents are read and written as a product's would be, the device in memory.",
})

/**
 * SQLite, in memory
 * In the library's scenarios, the records of an entity live in a SQLite database kept in memory.
 */
export const SqliteForScenarios = binding({
  owner: "trame",
  chooses: [SqliteInMemory],
  environments: [Test, SeededTables],
  follows: [Adapter],
  serves: [DataDescribedOnce],
  context: "Records are written, migrated and read by SQLite itself, as a product's would be, and nothing is left behind.",
})

/**
 * Tables seeded, in memory
 * Where the library's scenarios seed their tables, a table created starts with the records its entity declares.
 */
export const SeededForScenarios = binding({
  owner: "trame",
  chooses: [RecordsInSql, SqliteTables, SeedOfTheEntity],
  environments: [SeededTables],
  follows: [Strategy],
  serves: [DataDescribedOnce],
  context: "A scenario's database, or a developer's, starts with the records the entity declares, as a product's would.",
})

/**
 * PostgreSQL's dialect, read
 * Where the library's scenarios read PostgreSQL's statements, the dialect of the tables is PostgreSQL's.
 */
export const PostgresForScenarios = binding({
  owner: "trame",
  chooses: [PostgresTables],
  environments: [PostgresStatementsOnly],
  follows: [Strategy],
  serves: [DataDescribedOnce],
  context: "What PostgreSQL's tables write is read as a product's tables would ask it, through the dialect's port; no database answers.",
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
    recordFound: () => "A record inserted is found by its key, as it was; the table counts it",
    recordUpdated: () => "A record updated takes its new values, and keeps the others",
    tableMigrated: () => "A table of a version deployed is migrated when it is made ready: a column renamed (its key), one dropped, one added; its rows read as the description is now, and the version kept is this one",
    transactionUndone: () => "A transaction that fails writes nothing",
    madeReadyAgain: () => "A table made ready in a transaction that fails is made ready again the next time it is used",
    seeded: () => "Where a binding seeds it, a table created starts with the records its entity declares: each found, and counted",
    rowNotConforming: () => "A row that does not keep its description is nothing",
    postgresWrites: () => "PostgreSQL's statements name their parameters by position, type a number as double precision, and ask the information schema whether a table exists",
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
  /**
   * A table as an older version described it: its columns, its key, a row; the steps from it; a row stored wrong; the
   * name of a table first used in a transaction that fails.
   */
  table: {
    version: string
    fields: Record<string, { type: string; of?: { type: string } }>
    key: string
    row: unknown[]
    steps: { op: string; field: string; from?: string }[]
    other: { title: string; pages: number; shelf: "reading" | "read" }
    pages: number
    count: number
    wrong: { title: string; row: (string | number | null)[] }
    another: string
  }
  /** What PostgreSQL's tables write for the book: its table, a book found, updated, a column added, whether it exists. */
  postgres: { create: string; find: string; update: string; add: string; exists: string; field: string }
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
    table: {
      version: "an older version",
      fields: { heading: { type: "text" }, pages: { type: "number" }, shelf: { type: "text" }, mood: { type: "text" } },
      key: "heading",
      row: ["Middlemarch", 880, "reading", "patient"],
      steps: [{ op: "rename", field: "title", from: "heading" }, { op: "drop", field: "mood" }, { op: "add", field: "lent" }],
      other: { title: "Persuasion", pages: 249, shelf: "read" },
      pages: 250,
      count: 2,
      wrong: { title: "Lost Illusions", row: ["Lost Illusions", 780, "lost", null] },
      another: "lent_books",
    },
    postgres: {
      create: "CREATE TABLE IF NOT EXISTS books (title TEXT PRIMARY KEY, pages DOUBLE PRECISION NOT NULL, shelf TEXT NOT NULL, lent INTEGER)",
      find: "SELECT title, pages, shelf, lent FROM books WHERE title = $1",
      update: "UPDATE books SET pages = $1 WHERE title = $2",
      add: "ALTER TABLE books ADD COLUMN lent INTEGER",
      exists: "SELECT table_name FROM information_schema.tables WHERE table_name = $1",
      field: "pages",
    },
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

/**
 * Records kept in SQL
 * In a SQLite database in memory: a table of an older version (its key called otherwise, a column more, one less) is
 * migrated when it is made ready, and its row read as the description is now; a record inserted is found and counted;
 * one updated keeps what it did not change; a transaction that fails writes nothing, and a table it made ready is made
 * ready again; a row that does not keep its description is nothing.
 */
export const RecordsKept = scenario({
  owner: "trame",
  verifies: [RecordsInSql, SqliteTables, SqliteInMemory, StartEmpty, Conforms],
  env: Test,
  deps: {
    records: Records, database: SqlDatabase, dialect: TableDialect, versions: VersionsTable, book: Book, given: DataGiven,
    checks: DataChecks, counts: Counts,
  },
  body: ({ records, database, dialect, versions, book, given, checks, counts }) => async (check) => {
    const sorted = (v: unknown) => JSON.stringify(Object.entries(v ?? {}).sort(([a], [b]) => a.localeCompare(b)))
    const same = (a: unknown, b: unknown) => sorted(a) === sorted(b)
    // The table as an older version made it, with its row, and that version kept.
    const { table } = given
    const older = { ...book, fields: table.fields, key: table.key } as unknown as Model
    await database.write(dialect.create(older))
    await database.write(dialect.insert(older), ...(table.row as (string | number)[]))
    await database.write(dialect.versions.create())
    await database.write(dialect.versions.write(), book.name, table.version)
    const migrated: Model = { ...book, migrations: [{ from: table.version, steps: table.steps }] }
    const now = migrated as typeof book
    await records.prepare(now)
    const [kept] = await database.read<Record<string, unknown>>(dialect.versions.read(), book.name)
    const found = await records.find(now, given.book.title)
    check(checks.tableMigrated(), same(found, given.book) && kept?.[versions.version] === book.version)
    await records.insert(now, table.other)
    check(checks.recordFound(), same(await records.find(now, table.other.title), table.other) && (await records.count(now)) === table.count)
    await records.update(now, table.other.title, { pages: table.pages })
    check(checks.recordUpdated(), same(await records.find(now, table.other.title), { ...table.other, pages: table.pages }))
    const before = await records.count(now)
    await records.transaction(async () => {
      await records.insert(now, { ...table.other, title: book.name })
      throw new Error(book.name)
    }).catch(() => undefined)
    check(checks.transactionUndone(), (await records.count(now)) === before)
    const another = { ...now, name: table.another }
    await records.transaction(async () => {
      await records.insert(another, table.other)
      throw new Error(another.name)
    }).catch(() => undefined)
    check(checks.madeReadyAgain(), (await records.count(another).catch(() => undefined)) === counts.zero)
    await database.write(dialect.insert(now), ...table.wrong.row)
    check(checks.rowNotConforming(), (await records.find(now, table.wrong.title)) === undefined)
  },
})

/**
 * PostgreSQL's statements
 * The statements PostgreSQL's tables write for the book, read as they are: its table created, a book found by its title
 * and updated (parameters by position), a column added, whether a table exists.
 */
export const PostgresStatements = scenario({
  owner: "trame",
  verifies: [PostgresTables],
  env: PostgresStatementsOnly,
  deps: { postgres: TableDialect, book: Book, given: DataGiven, checks: DataChecks },
  body: ({ postgres, book, given, checks }) => async (check) => {
    const { names } = book
    const written = [
      postgres.create(book), postgres.find(book), postgres.update(book, [given.postgres.field]), postgres.addColumn(book, names.lent), postgres.exists(book),
    ]
    const expected = [given.postgres.create, given.postgres.find, given.postgres.update, given.postgres.add, given.postgres.exists]
    check(checks.postgresWrites(), written.join() === expected.join())
  },
})

/**
 * Records seeded
 * Where a binding seeds it, a table created starts with the records its entity declares: each found by its key, and
 * counted.
 */
export const RecordsSeeded = scenario({
  owner: "trame",
  verifies: [SeedOfTheEntity],
  env: SeededTables,
  deps: { records: Records, book: Book, checks: DataChecks },
  body: ({ records, book, checks }) => async (check) => {
    const seed = book.seed ?? []
    const found = await Promise.all(seed.map((b) => records.find(book, b.title)))
    check(checks.seeded(), (await records.count(book)) === seed.length && found.every((f, i) => f?.title === seed[i]?.title))
  },
})
