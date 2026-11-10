/** Data · Records */

import { code } from "#trame/kernel"
import { port } from "#trame/kinds/port"
import { fn } from "#trame/kinds/function"
import { implementation } from "#trame/kinds/implementation"
import { decision } from "#trame/kinds/decision"
import { Commands, type Command } from "#std/effects"
import { ValueTypes, Counts } from "#std/algebra"
import type { Model, StoredDescription, StoredFields, ValueOfFields } from "./kinds/entity"
import { Conforms } from "./documents"
import { DataDescribedOnce } from "./product"
import {
  Sqlite, SqliteSql, PostgresSql, SqliteParameter, PostgresParameter, ColumnDefinition, CreateTable, CountRows, InsertRow, SelectRows,
  UpdateRows, DeleteRows, AddColumn, RenameColumn, DropColumn, ColumnEquals, ColumnIsNull,
} from "./sql"

// An entity kept as many records (the reservations of a service): a table, its columns the entity's fields, found by its
// key. The table is made ready the first time an entity is used: created if it is not there, migrated from the version
// it holds otherwise, by the steps the entity computed; what it holds is read checked against the description. Which
// database, and its dialect of SQL, a binding chooses (A7).

/** A value a statement is given: a text, a number, or nothing. */
export type SqlParam = string | number | null

/** A database that runs statements: a read reads, a write writes, a transaction keeps several writes together. */
export interface SqlConnection {
  read<T = Record<string, unknown>>(sql: Command<"read">, ...params: SqlParam[]): Promise<T[]>
  write(sql: Command<"write">, ...params: SqlParam[]): Promise<number>
  transaction<T>(work: () => Promise<T>): Promise<T>
}

/**
 * A database of SQL
 * Where the tables of the entities live.
 */
export const SqlDatabase = port<SqlConnection>({ owner: "trame", declaredEffects: { read: ["read"], write: ["write"], transaction: ["write"] } })

/**
 * What a dialect of SQL writes from an entity: the statements of its table (its creation, a row found by its key,
 * inserted, updated, counted; whether it exists), of each step of a migration, and of the table of versions. A
 * statement's parameters come in the order of the model's fields, the key last where it finds a row.
 */
export interface TableStatements {
  /** Whether a table of a name exists: its name is the parameter. */
  exists(model: Model): Command<"read">
  create(model: Model): Command<"write">
  find(model: Model): Command<"read">
  insert(model: Model): Command<"write">
  update(model: Model, fields: readonly string[]): Command<"write">
  count(model: Model, as: string): Command<"read">
  addColumn(model: Model, field: string): Command<"write">
  renameColumn(model: Model, from: string, to: string): Command<"write">
  dropColumn(model: Model, field: string): Command<"write">
  /** Gives a column a value where it has none. */
  fill(model: Model, field: string): Command<"write">
  /** The table of versions: created, a version read, a version forgotten, a version written. */
  versions: {
    create(): Command<"write">
    read(): Command<"read">
    forget(): Command<"write">
    write(): Command<"write">
  }
}

/**
 * A dialect of SQL, for tables
 * The statements a table of an entity needs, written for one database.
 */
export const TableDialect = port<TableStatements>({ owner: "trame", declaredEffects: [] })

/**
 * The table of versions
 * Where a database keeps the version of the description each of its tables holds: its name, the column of the entity
 * and the column of the version; and the name a count is read under.
 */
export const VersionsTable = decision<{ name: string; entity: string; version: string; count: string }>({
  owner: "trame",
  value: { name: "data_versions", entity: "entity", version: "version", count: "n" },
  rejected: { "A version in each table": "a table would gain a column that is not the entity's" },
})

/** What a new table starts with: the records of its entity, if any, read as values of it. */
export interface Initial {
  of(model: Model): readonly Readonly<Record<string, unknown>>[]
}

/**
 * What a new table starts with
 * The records a table holds when it is created (a service's first reservations, in a test or on a developer's machine).
 */
export const InitialRecords = port<Initial>({ owner: "trame", declaredEffects: [] })

/**
 * No records to start with
 * A table is created empty.
 */
export const StartEmpty = fn({ owner: "trame", serves: [DataDescribedOnce], implements: [InitialRecords], body: () => ({ of: () => [] }) })

/**
 * Where the records of entities live: each found by its key, inserted, updated, counted; several writes kept together;
 * the place of an entity made ready (created, or migrated from the version it holds), which a deployment does once.
 */
export interface RecordStore {
  prepare(model: Model): Promise<void>
  find<F extends StoredFields>(model: Model<F>, key: string): Promise<ValueOfFields<F> | undefined>
  insert<F extends StoredFields>(model: Model<F>, value: ValueOfFields<F>): Promise<void>
  update<F extends StoredFields>(model: Model<F>, key: string, fields: Partial<ValueOfFields<F>>): Promise<void>
  count(model: Model): Promise<number>
  transaction<T>(work: () => Promise<T>): Promise<T>
}

/**
 * Records
 * Where the entities a product keeps as many live: a reservation found by its key, a refund inserted. A deployment
 * makes the place of each one ready (migrated from the version it holds) before the product uses it; a store may still
 * make it ready the first time it is used, where nothing deployed it (a scenario's database in memory).
 */
export const Records = port<RecordStore>({
  owner: "trame",
  declaredEffects: { prepare: ["write"], find: ["read"], insert: ["write"], update: ["write"], count: ["read"], transaction: ["write"] },
})

/**
 * Records in SQL
 * Each entity a table, under its name: made ready when a deployment asks, or the first time it is used (created with
 * what it starts with, or migrated from the version it holds, then that version written), in a transaction; made ready
 * within a transaction that fails, it is made ready again. A value is written field by field (a list as JSON, yes or no
 * as 1 or 0, nothing as NULL) and read back the same way, checked against the description: a row that does not keep it
 * is nothing. A table older than the versions (no version kept) holds the first version deployed.
 */
export const RecordsInSql = fn({
  owner: "trame",
  serves: [DataDescribedOnce],
  implements: [Records],
  deps: {
    database: SqlDatabase, dialect: TableDialect, initial: InitialRecords, versions: VersionsTable, conforms: Conforms, values: ValueTypes,
    counts: Counts,
  },
  body: ({ database, dialect, initial, versions, conforms, values, counts }): RecordStore => {
    const ready = new Map<string, Promise<void>>()
    // Whether a transaction of this store runs: a table made ready within it is made ready in it, not in one of its own,
    // and is ready only if it is kept (the tables made ready in it, forgotten if it fails).
    let within = false
    let made: string[] = []
    const together = async <T>(work: () => Promise<T>): Promise<T> => {
      if (within) return work()
      within = true
      try {
        return await database.transaction(work)
      } catch (e) {
        for (const name of made) ready.delete(name)
        throw e
      } finally {
        within = false
        made = []
      }
    }
    const columnsOf = (model: Model) => Object.keys(model.fields)
    /** The type a field is stored as, an optional one as the type of what it holds. */
    const typeOf = (model: Model, field: string) => {
      const s: StoredDescription | undefined = model.fields[field]
      return s?.type === model.types.optional && s.of ? s.of.type : s?.type
    }
    const written = (model: Model, field: string, v: unknown): SqlParam => {
      const t = typeOf(model, field)
      if (v === undefined || v === null) return null
      if (t === model.types.list) return JSON.stringify(v)
      if (t === model.types.flag) return v ? counts.one : counts.zero
      return values.isNumber(v) || values.isText(v) ? v : JSON.stringify(v)
    }
    const read = (model: Model, row: Record<string, unknown>): Record<string, unknown> =>
      Object.fromEntries(columnsOf(model).flatMap((field) => {
        const v = row[field]
        if (v === null || v === undefined) return []
        const t = typeOf(model, field)
        if (t === model.types.list && values.isText(v)) return [[field, JSON.parse(v)]]
        if (t === model.types.flag) return [[field, v === counts.one || v === true]]
        return [[field, v]]
      }))
    /** The table made ready: created, or migrated from the version it holds; then this version written. */
    const prepare = (model: Model): Promise<void> => {
      const known = ready.get(model.name)
      if (known) return known
      const nested = within
      const done = together(async () => {
        await database.write(dialect.versions.create())
        const [kept] = await database.read<Record<string, unknown>>(dialect.versions.read(), model.name)
        const [there] = await database.read(dialect.exists(model), model.name)
        const held = kept && values.isText(kept[versions.version]) ? (kept[versions.version] as string) : there ? model.first : undefined
        if (held === undefined) {
          await database.write(dialect.create(model))
          for (const value of initial.of(model)) await database.write(dialect.insert(model), ...columnsOf(model).map((f) => written(model, f, value[f])))
        } else if (held !== model.version) {
          const migration = model.migrations.find((m) => m.from === held)
          if (!migration) throw new Error(model.name)
          for (const step of migration.steps) {
            if (step.op === model.ops.rename && step.from !== undefined) await database.write(dialect.renameColumn(model, step.from, step.field))
            else if (step.op === model.ops.drop) await database.write(dialect.dropColumn(model, step.field))
            else if (step.op === model.ops.add) await database.write(dialect.addColumn(model, step.field))
            if ((step.op === model.ops.add || step.op === model.ops.fill) && step.value !== undefined) {
              await database.write(dialect.fill(model, step.field), written(model, step.field, step.value))
            }
          }
        }
        if (held !== model.version) {
          await database.write(dialect.versions.forget(), model.name)
          await database.write(dialect.versions.write(), model.name, model.version)
        }
      })
      ready.set(model.name, done)
      if (nested) made.push(model.name)
      done.catch(() => ready.delete(model.name))
      return done
    }
    return {
      prepare,
      async find<F extends StoredFields>(model: Model<F>, key: string) {
        await prepare(model)
        const [row] = await database.read<Record<string, unknown>>(dialect.find(model), key)
        const value = row && read(model, row)
        return value && conforms(model, value) ? (value as ValueOfFields<F>) : undefined
      },
      async insert<F extends StoredFields>(model: Model<F>, value: ValueOfFields<F>) {
        await prepare(model)
        await database.write(dialect.insert(model), ...columnsOf(model).map((f) => written(model, f, (value as Record<string, unknown>)[f])))
      },
      async update<F extends StoredFields>(model: Model<F>, key: string, fields: Partial<ValueOfFields<F>>) {
        await prepare(model)
        const names = Object.keys(fields)
        await database.write(dialect.update(model, names), ...names.map((f) => written(model, f, (fields as Record<string, unknown>)[f])), key)
      },
      async count(model: Model) {
        await prepare(model)
        const [row] = await database.read<Record<string, unknown>>(dialect.count(model, versions.count))
        const n = row?.[versions.count]
        return values.isNumber(n) ? n : Number(n)
      },
      transaction: together,
    }
  },
})

// Dialects and a database ---------------------------------------------------------------------

/**
 * SQLite's tables
 * Parameters as question marks; text, real numbers and whole numbers; the table of the schema says a table exists.
 */
export const SqliteTables = fn({
  owner: "trame",
  serves: [DataDescribedOnce],
  implements: [TableDialect],
  deps: {
    types: SqliteSql, parameter: SqliteParameter, definition: ColumnDefinition, createTable: CreateTable, countRows: CountRows,
    insertRow: InsertRow, selectRows: SelectRows, updateRows: UpdateRows, deleteRows: DeleteRows, addColumn: AddColumn,
    renameColumn: RenameColumn, dropColumn: DropColumn, columnEquals: ColumnEquals, isNull: ColumnIsNull, commands: Commands,
    versions: VersionsTable, counts: Counts,
  },
  body: code.file("./code/tables.ts"),
})

/**
 * PostgreSQL's tables
 * Positional parameters ($1, $2…); text, double precision and whole numbers; the information schema says a table exists.
 */
export const PostgresTables = fn({
  owner: "trame",
  serves: [DataDescribedOnce],
  implements: [TableDialect],
  deps: {
    types: PostgresSql, parameter: PostgresParameter, definition: ColumnDefinition, createTable: CreateTable, countRows: CountRows,
    insertRow: InsertRow, selectRows: SelectRows, updateRows: UpdateRows, deleteRows: DeleteRows, addColumn: AddColumn,
    renameColumn: RenameColumn, dropColumn: DropColumn, columnEquals: ColumnEquals, isNull: ColumnIsNull, commands: Commands,
    versions: VersionsTable, counts: Counts,
  },
  body: code.file("./code/tables.ts"),
})

/**
 * SQLite in memory
 * A database new each time it is opened: what a scenario keeps its records in, and leaves nothing behind.
 */
export const SqliteInMemory = implementation({
  owner: "trame",
  implements: [SqlDatabase],
  deps: { sqlite: Sqlite },
  body: code.file("./code/sqlite.ts"),
})
