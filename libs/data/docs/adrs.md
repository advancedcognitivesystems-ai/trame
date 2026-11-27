# Architecture decisions

*The choices that shape the product without being values, in force on 27 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **2 architecture decisions, 2 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [An entity is described once](principles.md#DescribedOnce) | **held** | [A value of the description it is of](documents.md#Conforms), [Documents kept in the preferences](documents.md#DocumentsInPreferences), [A value migrated](documents.md#Migrate), [What a shipment stores migrates](obligations.md#Migrated), [Records in SQL](records.md#RecordsInSql) |
| [The library's scenarios keep what they write as a product would](scenarios.md#KeptAsAProductWould) | **held** | [Documents, in memory](scenarios.md#InMemory), [PostgreSQL's dialect, read](scenarios.md#PostgresForScenarios), [Tables seeded, in memory](scenarios.md#SeededForScenarios), [SQLite, in memory](scenarios.md#SqliteForScenarios) |

## Data · Principles

<a id="DescribedOnce"></a>

### An entity is described once

`DescribedOnce` · `src/principles.ts:14` · status: **held**

The data a product keeps outside the graph is a kind of node, carried by this library: its description is the one source of its type, its names, its stored form, its reading and its migrations.

Context: The data a product kept outside the graph was described twice: a TypeScript interface, and a decision naming its tables and columns, or the names of its preferences; the code joined the two by texts and casts, read what was stored by a rule written by hand, and nothing saw a change of shape before stored data broke. The kinds of the language could not say it: a decision holds a value but knows no version deployed, and a status that says every version deployed reads into this one, nobody could compute (A5).

Consequences: A project that imports the library writes entities: their fields, each with how it is stored, their key. Wired, an entity gives its model: the type of a value (EntityOf), the names of its fields as values, the version of its description and the migration from each version deployed, computed from what each deployment kept; what a migration cannot decide blocks, for the owner to decide in its changes. A document is read migrated and checked, or not at all. The kind is the library's (src/kinds), with its laws played by every build, its words in a catalog, and the example of examples/kept.

| Rejected | Why |
|---|---|
| Composing the kinds of the language | a decision for the shape, functions for the migrations, written by hand: the description twice again, and no status for what deployments kept |
| Migrations written by hand, version after version | what a difference between two descriptions computes, a person would write again, and forget |
| The kind in the language itself | storing data is the concern of the products that keep some (A5): a library they import |

- Decided by: trame
- Serves: [Data described once](product.md#DataDescribedOnce)
- Applied by: [What a shipment stores migrates](obligations.md#Migrated), [A value migrated](documents.md#Migrate), [A value of the description it is of](documents.md#Conforms), [Documents kept in the preferences](documents.md#DocumentsInPreferences), [Records in SQL](records.md#RecordsInSql)

## Data · Scenarios

<a id="KeptAsAProductWould"></a>

### The library's scenarios keep what they write as a product would

`KeptAsAProductWould` · `src/scenarios.ts:312` · status: **held**

Documents in a device's preferences kept in memory, records in an SQLite database in memory, its tables started with what the entity declares, PostgreSQL's statements read through its dialect's port: the library's code runs against real engines of storage, and leaves nothing behind.

Context: What a product keeps is migrated, read and checked by the library's code: a double that only remembers would prove nothing of SQL, of a migration or of a seed.

Consequences: SQLite runs in the scenarios' process; PostgreSQL is only read, its statements compared with what its dialect must write, since no database answers in a build.

| Rejected | Why |
|---|---|
| A store that remembers in a map | it would accept what SQL refuses, and migrate nothing |
| A PostgreSQL server for the scenarios | a process to start and a port to open at each build of every project that imports the library |

- Decided by: trame
- Serves: [Data described once](product.md#DataDescribedOnce)
- Applied by: [Documents, in memory](scenarios.md#InMemory), [SQLite, in memory](scenarios.md#SqliteForScenarios), [Tables seeded, in memory](scenarios.md#SeededForScenarios), [PostgreSQL's dialect, read](scenarios.md#PostgresForScenarios)
