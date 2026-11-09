# Snapshot

*The exact state expected on 9 November 2026, without history: the values in force, without the amendments that produced them.*

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
- Version: 104
- How it joins the graph: language
- Its path: ../../generations/g104
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
- Applied by: What a shipment stores migrates, A value migrated, A value of the description it is of, Documents kept in the preferences

## Data · Product

### Data described once

Goal · `DataDescribedOnce`

- Owner: trame

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

## Data · Scenarios

### What the library's scenarios are given

Decision · `DataGiven`

- Decided by: trame
- Value: { book: { title: Middlemarch, pages: 880, shelf: reading }, older: { version: an older version, value: { heading: Middlemarch, pages: 880, shelf: reading, mood: patient }, steps: { op: rename, field: title, from: heading }, { op: drop, field: mood } }, wrong: { title: Middlemarch, pages: eight hundred, shelf: reading }, { title: Middlemarch, pages: 880, shelf: lost }, unknown: a version nobody deployed }

### What the library's scenarios check

Message catalog · `DataChecks`

- Owner: trame

### Documents, in memory

Technical choice · `InMemory` · **held**

- Decided by: trame
- Context: The library's documents are read and written as a product's would be, the device in memory.
- Chooses: Documents kept in the preferences
- In: Test
- Serves: Data described once

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
- Kept as: data.book
- Serves: Data described once
- Depends on: Shelves

## Data · Words

### Words of the kinds of data

Message catalog · `DataKindWords`

- Owner: trame
