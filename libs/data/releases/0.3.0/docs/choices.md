# Technical choices

*What answers each port in each environment on 12 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **4 technical choices for 6 ports, in 3 environments**

| Port | Test | Seeded tables | PostgreSQL's statements |
|---|---|---|---|
| [Documents](documents.md#Documents) | [Documents kept in the preferences](documents.md#DocumentsInPreferences) | — | — |
| [A database of SQL](records.md#SqlDatabase) | [SQLite in memory](records.md#SqliteInMemory) | [SQLite in memory](records.md#SqliteInMemory) | — |
| [A dialect of SQL, for tables](records.md#TableDialect) | [SQLite's tables](records.md#SqliteTables) | [SQLite's tables](records.md#SqliteTables) | [PostgreSQL's tables](records.md#PostgresTables) |
| [What a new table starts with](records.md#InitialRecords) | [No records to start with](records.md#StartEmpty) | [The records its entity starts with](records.md#SeedOfTheEntity) | — |
| [Records](records.md#Records) | [Records in SQL](records.md#RecordsInSql) | [Records in SQL](records.md#RecordsInSql) | — |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences) | — | — |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [Documents, in memory](scenarios.md#InMemory), [Tables seeded, in memory](scenarios.md#SeededForScenarios), [PostgreSQL's dialect, read](scenarios.md#PostgresForScenarios), [In memory](../.trame/std/docs/scenarios.md#InMemory) |
| [Adapter](../.trame/std/docs/patterns.md#Adapter) | **held** | [SQLite, in memory](scenarios.md#SqliteForScenarios) |

## Data · Scenarios

<a id="InMemory"></a>

### Documents, in memory

`InMemory` · `src/scenarios.ts:46` · status: **held**

In the library's scenarios, a document is kept in the preferences of a device kept in memory.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Documents](documents.md#Documents) | [Documents kept in the preferences](documents.md#DocumentsInPreferences) | a function |
| [Records](records.md#Records) | [Records in SQL](records.md#RecordsInSql) | a function |
| [A dialect of SQL, for tables](records.md#TableDialect) | [SQLite's tables](records.md#SqliteTables) | a function |
| [What a new table starts with](records.md#InitialRecords) | [No records to start with](records.md#StartEmpty) | a function |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences) | a function |

Context: The library's documents are read and written as a product's would be, the device in memory.

- Decided by: trame
- Chooses: [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences), [Documents kept in the preferences](documents.md#DocumentsInPreferences), [Records in SQL](records.md#RecordsInSql), [SQLite's tables](records.md#SqliteTables), [No records to start with](records.md#StartEmpty)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Data described once](product.md#DataDescribedOnce)

<a id="SqliteForScenarios"></a>

### SQLite, in memory

`SqliteForScenarios` · `src/scenarios.ts:59` · status: **held**

In the library's scenarios, the records of an entity live in a SQLite database kept in memory.

In [Seeded tables](scenarios.md#SeededTables), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [A database of SQL](records.md#SqlDatabase) | [SQLite in memory](records.md#SqliteInMemory) | an implementation |

Context: Records are written, migrated and read by SQLite itself, as a product's would be, and nothing is left behind.

- Decided by: trame
- Chooses: [SQLite in memory](records.md#SqliteInMemory)
- In: [Test](scenarios.md#Test), [Seeded tables](scenarios.md#SeededTables)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Data described once](product.md#DataDescribedOnce)

<a id="SeededForScenarios"></a>

### Tables seeded, in memory

`SeededForScenarios` · `src/scenarios.ts:72` · status: **held**

Where the library's scenarios seed their tables, a table created starts with the records its entity declares.

In [Seeded tables](scenarios.md#SeededTables):

| Port | Answered by | Which is |
|---|---|---|
| [Records](records.md#Records) | [Records in SQL](records.md#RecordsInSql) | a function |
| [What a new table starts with](records.md#InitialRecords) | [The records its entity starts with](records.md#SeedOfTheEntity) | a function |
| [A dialect of SQL, for tables](records.md#TableDialect) | [SQLite's tables](records.md#SqliteTables) | a function |

Context: A scenario's database, or a developer's, starts with the records the entity declares, as a product's would.

- Decided by: trame
- Chooses: [Records in SQL](records.md#RecordsInSql), [SQLite's tables](records.md#SqliteTables), [The records its entity starts with](records.md#SeedOfTheEntity)
- In: [Seeded tables](scenarios.md#SeededTables)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Data described once](product.md#DataDescribedOnce)

<a id="PostgresForScenarios"></a>

### PostgreSQL's dialect, read

`PostgresForScenarios` · `src/scenarios.ts:85` · status: **held**

Where the library's scenarios read PostgreSQL's statements, the dialect of the tables is PostgreSQL's.

In [PostgreSQL's statements](scenarios.md#PostgresStatementsOnly):

| Port | Answered by | Which is |
|---|---|---|
| [A dialect of SQL, for tables](records.md#TableDialect) | [PostgreSQL's tables](records.md#PostgresTables) | a function |

Context: What PostgreSQL's tables write is read as a product's tables would ask it, through the dialect's port; no database answers.

- Decided by: trame
- Chooses: [PostgreSQL's tables](records.md#PostgresTables)
- In: [PostgreSQL's statements](scenarios.md#PostgresStatementsOnly)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Data described once](product.md#DataDescribedOnce)
