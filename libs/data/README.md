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
- `src/obligations.ts` — the family `Migrated`: a shipment's entities migrate from every version deployed.
- `src/principles.ts` — the ADR "An entity is described once".

`examples/kept` uses it; Poselia keeps a person's breath with it.
