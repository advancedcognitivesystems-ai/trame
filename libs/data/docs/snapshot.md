# Snapshot

*The exact state expected on 10 November 2026, without history: the values in force, without the amendments that produced them.*

## Data · Documents

### JSON

Standard · `Json`

- Maintained by: trame
- Source: RFC 8259, The JavaScript Object Notation (JSON) Data Interchange Format
- Address: https://www.rfc-editor.org/rfc/rfc8259
- Constants: { empty: { value: , meaning: Nothing stored: what clearing a document writes, where nothing can be removed } }
- Serves: Data described once

### How a document is stored

Decision · `DocumentForm`

- Decided by: trame
- Value: { version: version, value: value }

### Documents

Port · `Documents`

- Owner: trame
- Declared effects: { read: read, write: write, clear: write }

### A value of the description it is of

Function · `Conforms` · **held**

- Owner: trame
- Parameters: { values: std/algebra.ValueTypes, iso: std/measures.Iso8601 }
- Serves: Data described once

### Documents kept in the preferences

Function · `DocumentsInPreferences` · **held**

- Owner: trame
- Parameters: { preferences: std/platform.PreferencesStore, form: documents.DocumentForm, json: documents.Json, values: std/algebra.ValueTypes, migrate: documents.Migrate, conforms: documents.Conforms }
- Serves: Data described once
- Implements: Documents
- Depends on: How a document is stored, JSON, A value migrated, A value of the description it is of

### A value migrated

Function · `Migrate` · **held**

- Owner: trame
- Serves: Data described once

## Data · Obligations

### What a shipment stores migrates

Requirement · `Migrated` · **held**

- Owner: trame
- Parameters: { kinds: obligations.DataKinds }
- Refines: Data described once
- Depends on: The kinds the library carries

### The kinds the library carries

Vocabulary · `DataKinds`

- Owner: trame
- Words: { entity: A kind of data a product keeps outside the graph, described once }
- Serves: Data described once

### Criteria of what a shipment stores

Acceptance criteria · `MigratedCriteria` · **held**

- Owner: trame
- Accepts: What a shipment stores migrates

## Data · Packages

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 105
- How it joins the graph: language
- Its path: ../../generations/g105
- Serves: Data described once

### std

Package · `stdLibrary`

- Owner: trame
- Name: std
- Version: 0.17.0
- How it joins the graph: library
- Its path: ../../std/releases/0.17.0
- Serves: Data described once

## Data · Principles

### An entity is described once

Architecture decision · `DescribedOnce` · **held**

- Decided by: trame
- Context: The data a product kept outside the graph was described twice: a TypeScript interface, and a decision naming its tables and columns, or the names of its preferences; the code joined the two by texts and casts, read what was stored by a rule written by hand, and nothing saw a change of shape before stored data broke. The kinds of the language could not say it: a decision holds a value but knows no version deployed, and a status that says every version deployed reads into this one, nobody could compute (A5).
- Consequences: A project that imports the library writes entities: their fields, each with how it is stored, their key. Wired, an entity gives its model: the type of a value (EntityOf), the names of its fields as values, the version of its description and the migration from each version deployed, computed from what each deployment kept; what a migration cannot decide blocks, for the owner to decide in its changes. A document is read migrated and checked, or not at all. The kind is the library's (src/kinds), with its laws played by every build, its words in a catalog, and the example of examples/kept.
- Rejected: Composing the kinds of the language, a decision for the shape, functions for the migrations, written by hand: the description twice again, and no status for what deployments kept; Migrations written by hand, version after version, what a difference between two descriptions computes, a person would write again, and forget; The kind in the language itself, storing data is the concern of the products that keep some (A5): a library they import
- Serves: Data described once
- Applied by: What a shipment stores migrates, A value migrated, A value of the description it is of, Documents kept in the preferences, Records in SQL

## Data · Product

### Data described once

Goal · `DataDescribedOnce`

- Owner: trame

## Data · Records

### The table of versions

Decision · `VersionsTable`

- Decided by: trame
- Value: { name: data_versions, entity: entity, version: version, count: n }
- Rejected: A version in each table, a table would gain a column that is not the entity's

### What a new table starts with

Port · `InitialRecords`

- Owner: trame
- Declared effects: 

### Records

Port · `Records`

- Owner: trame
- Declared effects: { prepare: write, find: read, insert: write, update: write, count: read, transaction: write }

### A database of SQL

Port · `SqlDatabase`

- Owner: trame
- Declared effects: { read: read, write: write, transaction: write }

### A dialect of SQL, for tables

Port · `TableDialect`

- Owner: trame
- Declared effects: 

### PostgreSQL's tables

Function · `PostgresTables` · **held**

- Owner: trame
- Parameters: { types: sql.PostgresSql, parameter: sql.PostgresParameter, definition: sql.ColumnDefinition, createTable: sql.CreateTable, countRows: sql.CountRows, insertRow: sql.InsertRow, selectRows: sql.SelectRows, updateRows: sql.UpdateRows, deleteRows: sql.DeleteRows, addColumn: sql.AddColumn, renameColumn: sql.RenameColumn, dropColumn: sql.DropColumn, columnEquals: sql.ColumnEquals, isNull: sql.ColumnIsNull, commands: std/effects.Commands, versions: records.VersionsTable, counts: std/algebra.Counts }
- Serves: Data described once
- Implements: A dialect of SQL, for tables
- Depends on: PostgreSQL's dialect, PostgreSQL parameter, Column definition, Table creation, Count, Insertion, Selection, Update, Deletion, A column added, A column renamed, A column dropped, Condition on a column, A column with no value, The table of versions

### Records in SQL

Function · `RecordsInSql` · **held**

- Owner: trame
- Parameters: { database: records.SqlDatabase, dialect: records.TableDialect, initial: records.InitialRecords, versions: records.VersionsTable, conforms: documents.Conforms, values: std/algebra.ValueTypes, counts: std/algebra.Counts }
- Serves: Data described once
- Implements: Records
- Depends on: A database of SQL, A dialect of SQL, for tables, What a new table starts with, The table of versions, A value of the description it is of

### SQLite's tables

Function · `SqliteTables` · **held**

- Owner: trame
- Parameters: { types: sql.SqliteSql, parameter: sql.SqliteParameter, definition: sql.ColumnDefinition, createTable: sql.CreateTable, countRows: sql.CountRows, insertRow: sql.InsertRow, selectRows: sql.SelectRows, updateRows: sql.UpdateRows, deleteRows: sql.DeleteRows, addColumn: sql.AddColumn, renameColumn: sql.RenameColumn, dropColumn: sql.DropColumn, columnEquals: sql.ColumnEquals, isNull: sql.ColumnIsNull, commands: std/effects.Commands, versions: records.VersionsTable, counts: std/algebra.Counts }
- Serves: Data described once
- Implements: A dialect of SQL, for tables
- Depends on: SQLite's dialect, SQLite parameter, Column definition, Table creation, Count, Insertion, Selection, Update, Deletion, A column added, A column renamed, A column dropped, Condition on a column, A column with no value, The table of versions

### No records to start with

Function · `StartEmpty` · **held**

- Owner: trame
- Serves: Data described once
- Implements: What a new table starts with

### SQLite in memory

Implementation · `SqliteInMemory` · **held**

- Owner: trame
- Parameters: { sqlite: sql.Sqlite }
- Implements: A database of SQL
- Depends on: SQLite

## Data · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-11-09
- What changes: The kind entity: data described once, its migrations computed from what deployments kept; documents kept in the preferences; the family Migrated
- Fingerprint: b59ea0bf2828ba1b
- Language: shared
- Serves: Data described once

### Version 0.1.1

Release · `R0_1_1`

- Released by: trame
- Version: 0.1.1
- Released on: 2026-11-09
- What changes: An entity wired before it is evaluated (a scenario of a module read earlier) computes what it gives
- Fingerprint: 80be07326b9dac85
- Language: shared
- Serves: Data described once

## Data · Scenarios

### What the library's scenarios are given

Decision · `DataGiven`

- Decided by: trame
- Value: { book: { title: Middlemarch, pages: 880, shelf: reading }, older: { version: an older version, value: { heading: Middlemarch, pages: 880, shelf: reading, mood: patient }, steps: { op: rename, field: title, from: heading }, { op: drop, field: mood } }, wrong: { title: Middlemarch, pages: eight hundred, shelf: reading }, { title: Middlemarch, pages: 880, shelf: lost }, unknown: a version nobody deployed, table: { version: an older version, fields: { heading: { type: text }, pages: { type: number }, shelf: { type: text }, mood: { type: text } }, key: heading, row: Middlemarch, 880, reading, patient, steps: { op: rename, field: title, from: heading }, { op: drop, field: mood }, { op: add, field: lent }, other: { title: Persuasion, pages: 249, shelf: read }, pages: 250, count: 2, wrong: { title: Lost Illusions, row: Lost Illusions, 780, lost, none }, another: lent_books }, postgres: { create: CREATE TABLE IF NOT EXISTS books (title TEXT PRIMARY KEY, pages DOUBLE PRECISION NOT NULL, shelf TEXT NOT NULL, lent INTEGER), find: SELECT title, pages, shelf, lent FROM books WHERE title = $1, update: UPDATE books SET pages = $1 WHERE title = $2, add: ALTER TABLE books ADD COLUMN lent INTEGER, exists: SELECT table_name FROM information_schema.tables WHERE table_name = $1, field: pages } }

### What the library's scenarios check

Message catalog · `DataChecks`

- Owner: trame

### Documents, in memory

Technical choice · `InMemory` · **held**

- Decided by: trame
- Context: The library's documents are read and written as a product's would be, the device in memory.
- Chooses: Documents kept in the preferences, Records in SQL, SQLite's tables, No records to start with
- In: Test
- Serves: Data described once

### PostgreSQL's dialect, read

Technical choice · `PostgresForScenarios` · **held**

- Decided by: trame
- Context: What PostgreSQL's tables write is read as a product's tables would ask it, through the dialect's port; no database answers.
- Chooses: PostgreSQL's tables
- In: PostgreSQL's statements
- Serves: Data described once

### SQLite, in memory

Technical choice · `SqliteForScenarios` · **held**

- Decided by: trame
- Context: Records are written, migrated and read by SQLite itself, as a product's would be, and nothing is left behind.
- Chooses: SQLite in memory
- In: Test
- Serves: Data described once

### PostgreSQL's statements

Environment · `PostgresStatementsOnly`

- Owner: trame

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

### Documents kept in the preferences

Scenario · `DocumentsKept` · **held**

- Owner: trame
- Parameters: { documents: documents.Documents, preferences: std/platform.PreferencesStore, book: shelves.Book, form: documents.DocumentForm, given: scenarios.DataGiven, checks: scenarios.DataChecks }
- Verifies: Documents kept in the preferences, A value migrated, A value of the description it is of
- In: Test
- Depends on: Documents, A book, How a document is stored, What the library's scenarios are given, What the library's scenarios check

### PostgreSQL's statements

Scenario · `PostgresStatements` · **held**

- Owner: trame
- Parameters: { postgres: records.TableDialect, book: shelves.Book, given: scenarios.DataGiven, checks: scenarios.DataChecks }
- Verifies: PostgreSQL's tables
- In: PostgreSQL's statements
- Depends on: A dialect of SQL, for tables, A book, What the library's scenarios are given, What the library's scenarios check

### Records kept in SQL

Scenario · `RecordsKept` · **held**

- Owner: trame
- Parameters: { records: records.Records, database: records.SqlDatabase, dialect: records.TableDialect, versions: records.VersionsTable, book: shelves.Book, given: scenarios.DataGiven, checks: scenarios.DataChecks, counts: std/algebra.Counts }
- Verifies: Records in SQL, SQLite's tables, SQLite in memory, No records to start with, A value of the description it is of
- In: Test
- Depends on: Records, A database of SQL, A dialect of SQL, for tables, The table of versions, A book, What the library's scenarios are given, What the library's scenarios check

## Data · SDLC

### The library of data

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The library of data
- Follows the policy: How a version is made

### Its decisions applied

Obligation · `DecisionsApplied`

- Owner: trame
- Serves: Data described once

### Its functions verified

Obligation · `FunctionsVerified`

- Owner: trame
- A gap weighs: error
- Serves: Data described once

### Its packages safe

Obligation · `PackagesSafe`

- Owner: trame
- Serves: Data described once

### Its requirements held

Obligation · `RequirementsServed`

- Owner: trame
- Serves: Data described once

### How a version is made

Policy · `VersionMode`

- Owner: trame
- Its obligations: Its functions verified, Its requirements held, Its decisions applied, Its packages safe

## Data · Shelves

### Shelves

Vocabulary · `Shelves`

- Owner: trame
- Words: { reading: Being read, read: Read }
- Serves: Data described once

### A book

Entity · `Book` · **held**

- Owner: trame
- Fields: { title: { type: text }, pages: { type: number }, shelf: { type: word, vocabulary: shelves.Shelves }, lent: { type: optional, of: { type: flag } } }
- Key: title
- Kept as: books
- Serves: Data described once
- Depends on: Shelves

## Data · SQL

### PostgreSQL's dialect

Standard · `PostgresSql`

- Maintained by: trame
- Source: PostgreSQL: Value Expressions, Positional Parameters ($n); Numeric Types (double precision, integer); Character Types (text); The Information Schema (tables)
- Address: https://www.postgresql.org/docs/current/sql-expressions.html#SQL-EXPRESSIONS-PARAMETERS-POSITIONAL
- Constants: { parameter: { value: $, meaning: Opens a positional parameter: then its position }, first: { value: 1, meaning: The position of the first parameter }, text: { value: TEXT, meaning: The type of a column of text }, number: { value: DOUBLE PRECISION, meaning: The type of a column of numbers (an 8-byte floating point number, as SQLite's REAL) }, integer: { value: INTEGER, meaning: The type of a column of whole numbers (yes or no, as 1 or 0) }, exists: { value: SELECT table_name FROM information_schema.tables WHERE table_name = $1, meaning: The name of the table of this name, if there is one } }
- Serves: Data described once

### SQL

Standard · `Sql`

- Maintained by: trame
- Source: ISO/IEC 9075 (SQL): SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE; CREATE TABLE IF NOT EXISTS and ALTER TABLE … RENAME COLUMN, … DROP COLUMN, as SQLite (3.35 on) and PostgreSQL both accept them
- Address: https://www.postgresql.org/docs/current/sql-commands.html
- Constants: { space: { value:  , meaning: Separates the words of a statement }, comma: { value: ,, meaning: Separates the items of a list (columns, values, definitions) }, open: { value: (, meaning: Opens a list of columns, of values or of definitions }, close: { value: ), meaning: Closes it }, equals: { value: =, meaning: Compares a column with a value, or gives it one }, select: { value: SELECT, meaning: Reads columns }, from: { value: FROM, meaning: Names the table read }, where: { value: WHERE, meaning: Introduces the condition the rows must meet }, insertInto: { value: INSERT INTO, meaning: Adds a row to a table }, values: { value: VALUES, meaning: Introduces the values of the row }, update: { value: UPDATE, meaning: Changes rows of a table }, set: { value: SET, meaning: Introduces the columns changed }, deleteFrom: { value: DELETE FROM, meaning: Removes rows of a table }, createTable: { value: CREATE TABLE IF NOT EXISTS, meaning: Creates a table, unless it exists }, alterTable: { value: ALTER TABLE, meaning: Changes a table }, addColumn: { value: ADD COLUMN, meaning: Gives a table a column, empty in every row }, renameColumn: { value: RENAME COLUMN, meaning: Gives a column another name, its values kept }, to: { value: TO, meaning: Introduces the new name }, dropColumn: { value: DROP COLUMN, meaning: Removes a column, and its values }, primaryKey: { value: PRIMARY KEY, meaning: The column that identifies a row }, notNull: { value: NOT NULL, meaning: A column that always has a value }, isNull: { value: IS NULL, meaning: A column that has no value }, references: { value: REFERENCES, meaning: A column whose value is the key of a row of another table }, countAll: { value: count(*), meaning: The number of rows }, as: { value: AS, meaning: Names a result column } }
- Serves: Data described once

### SQLite

Standard · `Sqlite`

- Maintained by: trame
- Source: SQLite: In-Memory Databases; SQL As Understood By SQLite (BEGIN, COMMIT, ROLLBACK); Pragma statements (query_only)
- Address: https://www.sqlite.org/inmemorydb.html
- Constants: { memory: { value: :memory:, meaning: The name that opens a database in memory, new each time }, begin: { value: BEGIN, meaning: Starts a transaction }, commit: { value: COMMIT, meaning: Makes its writes last }, rollback: { value: ROLLBACK, meaning: Undoes them }, readOnly: { value: PRAGMA query_only = ON, meaning: From here on, the connection refuses any statement that would change the database }, readWrite: { value: PRAGMA query_only = OFF, meaning: From here on, it accepts them again } }
- Serves: Data described once

### SQLite's dialect

Standard · `SqliteSql`

- Maintained by: trame
- Source: SQLite: SQL As Understood By SQLite, Parameters (?); Datatypes In SQLite (TEXT, REAL, INTEGER); The Schema Table (sqlite_schema)
- Address: https://www.sqlite.org/lang_expr.html#varparam
- Constants: { parameter: { value: ?, meaning: A parameter: the next value given with the statement }, text: { value: TEXT, meaning: The type of a column of text }, number: { value: REAL, meaning: The type of a column of numbers (an 8-byte floating point number) }, integer: { value: INTEGER, meaning: The type of a column of whole numbers (yes or no, as 1 or 0) }, exists: { value: SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?, meaning: The name of the table of this name, if there is one } }
- Serves: Data described once

### A column added

Syntax element · `AddColumn` · **held**

- Owner: trame
- Section: ALTER TABLE … ADD COLUMN
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: refunds, at TEXT, output: ALTER TABLE refunds ADD COLUMN at TEXT }
- Defined by: SQL
- Depends on: SQL

### Column definition

Syntax element · `ColumnDefinition` · **held**

- Owner: trame
- Section: CREATE TABLE: column definitions and constraints
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: id, TEXT, true, true, output: id TEXT PRIMARY KEY }, { input: price, REAL, false, true, output: price REAL NOT NULL }, { input: at, TEXT, false, false, output: at TEXT }, { input: reservation, TEXT, true, true, { table: reservations, column: id }, output: reservation TEXT PRIMARY KEY REFERENCES reservations(id) }
- Defined by: SQL
- Depends on: SQL

### Condition on a column

Syntax element · `ColumnEquals` · **held**

- Owner: trame
- Section: Comparison predicates
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: id, ?, output: id = ? }, { input: id, $2, output: id = $2 }
- Defined by: SQL
- Depends on: SQL

### A column with no value

Syntax element · `ColumnIsNull` · **held**

- Owner: trame
- Section: Null predicate
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: at, output: at IS NULL }
- Defined by: SQL
- Depends on: SQL

### Count

Syntax element · `CountRows` · **held**

- Owner: trame
- Section: SELECT with an aggregate function
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: reservations, n, output: SELECT count(*) AS n FROM reservations }
- Defined by: SQL
- Depends on: SQL

### Table creation

Syntax element · `CreateTable` · **held**

- Owner: trame
- Section: CREATE TABLE
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: refunds, reservation TEXT PRIMARY KEY, amount REAL NOT NULL, output: CREATE TABLE IF NOT EXISTS refunds (reservation TEXT PRIMARY KEY, amount REAL NOT NULL) }
- Defined by: SQL
- Depends on: SQL, List

### Deletion

Syntax element · `DeleteRows` · **held**

- Owner: trame
- Section: DELETE
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: data_versions, entity = ?, output: DELETE FROM data_versions WHERE entity = ? }
- Defined by: SQL
- Depends on: SQL

### A column dropped

Syntax element · `DropColumn` · **held**

- Owner: trame
- Section: ALTER TABLE … DROP COLUMN
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: notes, mood, output: ALTER TABLE notes DROP COLUMN mood }
- Defined by: SQL
- Depends on: SQL

### Insertion

Syntax element · `InsertRow` · **held**

- Owner: trame
- Section: INSERT
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: refunds, reservation, amount, ?, ?, output: INSERT INTO refunds (reservation, amount) VALUES (?, ?) }
- Defined by: SQL
- Depends on: SQL, List

### PostgreSQL parameter

Syntax element · `PostgresParameter` · **held**

- Owner: trame
- Section: Positional parameters ($n)
- Marks: {  }
- Parameters: { standard: sql.PostgresSql }
- Examples: { input: 0, output: $1 }, { input: 2, output: $3 }
- Defined by: PostgreSQL's dialect
- Depends on: PostgreSQL's dialect

### A column renamed

Syntax element · `RenameColumn` · **held**

- Owner: trame
- Section: ALTER TABLE … RENAME COLUMN
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: notes, heading, title, output: ALTER TABLE notes RENAME COLUMN heading TO title }
- Defined by: SQL
- Depends on: SQL

### Selection

Syntax element · `SelectRows` · **held**

- Owner: trame
- Section: SELECT
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: id, status, reservations, id = ?, output: SELECT id, status FROM reservations WHERE id = ? }
- Defined by: SQL
- Depends on: SQL, List

### SQLite parameter

Syntax element · `SqliteParameter` · **held**

- Owner: trame
- Section: Parameters (?)
- Marks: {  }
- Parameters: { standard: sql.SqliteSql }
- Examples: { input: 0, output: ? }, { input: 2, output: ? }
- Defined by: SQLite's dialect
- Depends on: SQLite's dialect

### List

Syntax element · `SqlList` · **held**

- Owner: trame
- Section: Lists of columns and values
- Marks: {  }
- Parameters: { standard: sql.Sql }
- Examples: { input: id, charger, output: id, charger }
- Defined by: SQL
- Depends on: SQL

### Update

Syntax element · `UpdateRows` · **held**

- Owner: trame
- Section: UPDATE
- Marks: {  }
- Parameters: { standard: sql.Sql, list: sql.SqlList }
- Examples: { input: reservations, status = ?, id = ?, output: UPDATE reservations SET status = ? WHERE id = ? }
- Defined by: SQL
- Depends on: SQL, List

## Data · Words

### Words of the kinds of data

Message catalog · `DataKindWords`

- Owner: trame
