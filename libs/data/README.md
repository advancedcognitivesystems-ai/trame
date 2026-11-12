# Data

A Trame library that carries the kind `entity` (A5): the data a product keeps outside the graph from one version to the
next (a person's breath on their device, the reservations of a database) is described once, in the graph.

- `src/kinds/entity.ts` — the kind: an entity's fields, each with how it is stored (`stored.text()`, `stored.number(Time)`,
  `stored.word(Levels)`, `stored.list(…)`, `stored.optional(…)`), its key, the name it is kept under, and the changes its
  owner decided (`renamed`, `dropped`, `defaults`). `EntityOf<typeof Breath>` is the type of a value. Wired, an entity
  gives its model: its fields, their names as values, the version of its description and the migration from each
  version a deployment kept (trame ship records the description of every entity a shipment reaches).
- `src/documents.ts` — an entity kept whole, as one document: the port `Documents`, read migrated and checked, written
  with its version; `DocumentsInPreferences` keeps it in std's preferences.
- `src/records.ts` — an entity kept as many records: the port `Records` (prepare, find by key, insert, update, count, a
  transaction), `RecordsInSql` over the ports `SqlDatabase` and `TableDialect`: each entity a table, made ready when a
  deployment prepares it, or the first time it is used (created with what `InitialRecords` gives, or migrated from the
  version it holds, kept in the table of versions; made ready again after a transaction that failed), read back
  checked. `SqliteTables` and `PostgresTables` write the statements; `SqliteInMemory` is a database for scenarios. What
  a new table starts with is chosen per environment by `InitialRecords`: `SeedOfTheEntity` (the records the entity
  declares in `seed`, for a scenario's database or a developer's) or `StartEmpty`. A deployment keeps the fingerprint of
  the seed; the entity says to its owner when the seed changed since the last deployment (a table made before keeps the
  records it started with).
- `src/sql.ts` — the SQL the tables are written in: the standard and its statements (creation, ALTER TABLE to add,
  rename or drop a column, selection, insertion, update, deletion), SQLite's and PostgreSQL's dialects, as syntax
  elements with their examples.
- `src/obligations.ts` — the family `Migrated`: a shipment's entities migrate from every version deployed.
- `src/principles.ts` — the ADR "An entity is described once".

`examples/kept` uses it; Poselia keeps a person's breath with it; the reservations example keeps its reservations and
refunds with it, in SQLite or PostgreSQL. Only a shipment that deploys keeps an entity's description: a library's version
stores nothing.
