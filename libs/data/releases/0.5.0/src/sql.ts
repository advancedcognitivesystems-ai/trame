/** Data · SQL */

import { standard } from "#trame/kinds/standard"
import { syntax } from "#trame/kinds/syntax"
import { DataDescribedOnce } from "./product"

// The SQL the tables of entities are written in. What every database reads alike is the standard Sql and its
// statements; what differs is a dialect: how a statement names its parameters, the types of the columns, how a table is
// known to exist. A table's statements are composed by a dialect of the library (records), never written by a product.

/**
 * SQL
 * The statements the tables of entities need, as SQL defines them and as SQLite and PostgreSQL both read them.
 */
export const Sql = standard({
  owner: "trame",
  source: "ISO/IEC 9075 (SQL): SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE; CREATE TABLE IF NOT EXISTS and ALTER TABLE … RENAME COLUMN, … DROP COLUMN, as SQLite (3.35 on) and PostgreSQL both accept them",
  url: "https://www.postgresql.org/docs/current/sql-commands.html",
  constants: {
    space: { value: " ", meaning: "Separates the words of a statement" },
    comma: { value: ",", meaning: "Separates the items of a list (columns, values, definitions)" },
    open: { value: "(", meaning: "Opens a list of columns, of values or of definitions" },
    close: { value: ")", meaning: "Closes it" },
    equals: { value: "=", meaning: "Compares a column with a value, or gives it one" },
    select: { value: "SELECT", meaning: "Reads columns" },
    from: { value: "FROM", meaning: "Names the table read" },
    where: { value: "WHERE", meaning: "Introduces the condition the rows must meet" },
    insertInto: { value: "INSERT INTO", meaning: "Adds a row to a table" },
    values: { value: "VALUES", meaning: "Introduces the values of the row" },
    update: { value: "UPDATE", meaning: "Changes rows of a table" },
    set: { value: "SET", meaning: "Introduces the columns changed" },
    deleteFrom: { value: "DELETE FROM", meaning: "Removes rows of a table" },
    createTable: { value: "CREATE TABLE IF NOT EXISTS", meaning: "Creates a table, unless it exists" },
    alterTable: { value: "ALTER TABLE", meaning: "Changes a table" },
    addColumn: { value: "ADD COLUMN", meaning: "Gives a table a column, empty in every row" },
    renameColumn: { value: "RENAME COLUMN", meaning: "Gives a column another name, its values kept" },
    to: { value: "TO", meaning: "Introduces the new name" },
    dropColumn: { value: "DROP COLUMN", meaning: "Removes a column, and its values" },
    primaryKey: { value: "PRIMARY KEY", meaning: "The column that identifies a row" },
    notNull: { value: "NOT NULL", meaning: "A column that always has a value" },
    isNull: { value: "IS NULL", meaning: "A column that has no value" },
    references: { value: "REFERENCES", meaning: "A column whose value is the key of a row of another table" },
    countAll: { value: "count(*)", meaning: "The number of rows" },
    as: { value: "AS", meaning: "Names a result column" },
  },
  serves: [DataDescribedOnce],
})

/**
 * SQLite's dialect
 * How SQLite names the parameters of a statement, types its columns, and knows a table exists.
 */
export const SqliteSql = standard({
  owner: "trame",
  source: "SQLite: SQL As Understood By SQLite, Parameters (?); Datatypes In SQLite (TEXT, REAL, INTEGER); The Schema Table (sqlite_schema)",
  url: "https://www.sqlite.org/lang_expr.html#varparam",
  constants: {
    parameter: { value: "?", meaning: "A parameter: the next value given with the statement" },
    text: { value: "TEXT", meaning: "The type of a column of text" },
    number: { value: "REAL", meaning: "The type of a column of numbers (an 8-byte floating point number)" },
    integer: { value: "INTEGER", meaning: "The type of a column of whole numbers (yes or no, as 1 or 0)" },
    exists: { value: "SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?", meaning: "The name of the table of this name, if there is one" },
  },
  serves: [DataDescribedOnce],
})

/**
 * PostgreSQL's dialect
 * How PostgreSQL names the parameters of a statement, types its columns, and knows a table exists.
 */
export const PostgresSql = standard({
  owner: "trame",
  source: "PostgreSQL: Value Expressions, Positional Parameters ($n); Numeric Types (double precision, integer); Character Types (text); The Information Schema (tables)",
  url: "https://www.postgresql.org/docs/current/sql-expressions.html#SQL-EXPRESSIONS-PARAMETERS-POSITIONAL",
  constants: {
    parameter: { value: "$", meaning: "Opens a positional parameter: then its position" },
    first: { value: 1, meaning: "The position of the first parameter" },
    text: { value: "TEXT", meaning: "The type of a column of text" },
    number: { value: "DOUBLE PRECISION", meaning: "The type of a column of numbers (an 8-byte floating point number, as SQLite's REAL)" },
    integer: { value: "INTEGER", meaning: "The type of a column of whole numbers (yes or no, as 1 or 0)" },
    exists: { value: "SELECT table_name FROM information_schema.tables WHERE table_name = $1", meaning: "The name of the table of this name, if there is one" },
  },
  serves: [DataDescribedOnce],
})

/**
 * SQLite
 * A database in a file, or in memory; its transactions; a connection that refuses to write.
 */
export const Sqlite = standard({
  owner: "trame",
  source: "SQLite: In-Memory Databases; SQL As Understood By SQLite (BEGIN, COMMIT, ROLLBACK); Pragma statements (query_only)",
  url: "https://www.sqlite.org/inmemorydb.html",
  constants: {
    memory: { value: ":memory:", meaning: "The name that opens a database in memory, new each time" },
    begin: { value: "BEGIN", meaning: "Starts a transaction" },
    commit: { value: "COMMIT", meaning: "Makes its writes last" },
    rollback: { value: "ROLLBACK", meaning: "Undoes them" },
    readOnly: { value: "PRAGMA query_only = ON", meaning: "From here on, the connection refuses any statement that would change the database" },
    readWrite: { value: "PRAGMA query_only = OFF", meaning: "From here on, it accepts them again" },
  },
  serves: [DataDescribedOnce],
})

// Statements ------------------------------------------------------------------------------

/**
 * List
 * Items separated by a comma and a space.
 */
export const SqlList = syntax({
  owner: "trame",
  standard: Sql,
  section: "Lists of columns and values",
  constants: {},
  write: ({ standard: { comma, space } }) => (items: readonly string[]) => items.join(comma + space),
  examples: [{ input: [["id", "charger"]], output: "id, charger" }],
})

/**
 * Condition on a column
 * A column equal to a parameter.
 */
export const ColumnEquals = syntax({
  owner: "trame",
  standard: Sql,
  section: "Comparison predicates",
  constants: {},
  write: ({ standard: { equals, space } }) => (column: string, parameter: string) => [column, equals, parameter].join(space),
  examples: [{ input: ["id", "?"], output: "id = ?" }, { input: ["id", "$2"], output: "id = $2" }],
})

/**
 * A column with no value
 * The condition a row meets when a column has no value.
 */
export const ColumnIsNull = syntax({
  owner: "trame",
  standard: Sql,
  section: "Null predicate",
  constants: {},
  write: ({ standard: { isNull, space } }) => (column: string) => [column, isNull].join(space),
  examples: [{ input: ["at"], output: "at IS NULL" }],
})

/**
 * Column definition
 * A column, its type, then PRIMARY KEY for the key of its table (and REFERENCES when it is the key of a row of another
 * table), NOT NULL for one that always has a value, nothing for one that may have none.
 */
export const ColumnDefinition = syntax({
  owner: "trame",
  standard: Sql,
  section: "CREATE TABLE: column definitions and constraints",
  constants: {},
  write: ({ standard: { space, open, close, primaryKey, notNull, references } }) =>
    (column: string, type: string, key: boolean, required: boolean, referenced?: { table: string; column: string }) =>
      [column, type, ...(key ? [primaryKey] : required ? [notNull] : []), ...(referenced ? [references, referenced.table + open + referenced.column + close] : [])].join(space),
  examples: [
    { input: ["id", "TEXT", true, true], output: "id TEXT PRIMARY KEY" },
    { input: ["price", "REAL", false, true], output: "price REAL NOT NULL" },
    { input: ["at", "TEXT", false, false], output: "at TEXT" },
    { input: ["reservation", "TEXT", true, true, { table: "reservations", column: "id" }], output: "reservation TEXT PRIMARY KEY REFERENCES reservations(id)" },
  ],
})

/**
 * Table creation
 * A table and the definitions of its columns, unless it exists.
 */
export const CreateTable = syntax({
  owner: "trame",
  standard: Sql,
  section: "CREATE TABLE",
  constants: {},
  deps: { list: SqlList },
  write: ({ standard: { space, open, close, createTable }, list }) => (table: string, definitions: readonly string[]) =>
    [createTable, table, open + list(definitions) + close].join(space),
  examples: [{ input: ["refunds", ["reservation TEXT PRIMARY KEY", "amount REAL NOT NULL"]], output: "CREATE TABLE IF NOT EXISTS refunds (reservation TEXT PRIMARY KEY, amount REAL NOT NULL)" }],
})

/**
 * A column added
 * A table gains a column, by its definition: empty in every row.
 */
export const AddColumn = syntax({
  owner: "trame",
  standard: Sql,
  section: "ALTER TABLE … ADD COLUMN",
  constants: {},
  write: ({ standard: { space, alterTable, addColumn } }) => (table: string, definition: string) => [alterTable, table, addColumn, definition].join(space),
  examples: [{ input: ["refunds", "at TEXT"], output: "ALTER TABLE refunds ADD COLUMN at TEXT" }],
})

/**
 * A column renamed
 * A column of a table takes another name; its values stay.
 */
export const RenameColumn = syntax({
  owner: "trame",
  standard: Sql,
  section: "ALTER TABLE … RENAME COLUMN",
  constants: {},
  write: ({ standard: { space, alterTable, renameColumn, to } }) => (table: string, from: string, name: string) =>
    [alterTable, table, renameColumn, from, to, name].join(space),
  examples: [{ input: ["notes", "heading", "title"], output: "ALTER TABLE notes RENAME COLUMN heading TO title" }],
})

/**
 * A column dropped
 * A column of a table goes, with its values.
 */
export const DropColumn = syntax({
  owner: "trame",
  standard: Sql,
  section: "ALTER TABLE … DROP COLUMN",
  constants: {},
  write: ({ standard: { space, alterTable, dropColumn } }) => (table: string, column: string) => [alterTable, table, dropColumn, column].join(space),
  examples: [{ input: ["notes", "mood"], output: "ALTER TABLE notes DROP COLUMN mood" }],
})

/**
 * Count
 * The number of rows of a table, under a name.
 */
export const CountRows = syntax({
  owner: "trame",
  standard: Sql,
  section: "SELECT with an aggregate function",
  constants: {},
  write: ({ standard: { space, select, from, countAll, as } }) => (table: string, name: string) => [select, countAll, as, name, from, table].join(space),
  examples: [{ input: ["reservations", "n"], output: "SELECT count(*) AS n FROM reservations" }],
})

/**
 * Insertion
 * A row: its columns, then one parameter for each.
 */
export const InsertRow = syntax({
  owner: "trame",
  standard: Sql,
  section: "INSERT",
  constants: {},
  deps: { list: SqlList },
  write: ({ standard: { space, open, close, insertInto, values }, list }) => (table: string, columns: readonly string[], parameters: readonly string[]) =>
    [insertInto, table, open + list(columns) + close, values, open + list(parameters) + close].join(space),
  examples: [{ input: ["refunds", ["reservation", "amount"], ["?", "?"]], output: "INSERT INTO refunds (reservation, amount) VALUES (?, ?)" }],
})

/**
 * Selection
 * Columns of the rows of a table that meet a condition.
 */
export const SelectRows = syntax({
  owner: "trame",
  standard: Sql,
  section: "SELECT",
  constants: {},
  deps: { list: SqlList },
  write: ({ standard: { space, select, from, where }, list }) => (columns: readonly string[], table: string, condition: string) =>
    [select, list(columns), from, table, where, condition].join(space),
  examples: [{ input: [["id", "status"], "reservations", "id = ?"], output: "SELECT id, status FROM reservations WHERE id = ?" }],
})

/**
 * Update
 * Columns given new values, in the rows of a table that meet a condition.
 */
export const UpdateRows = syntax({
  owner: "trame",
  standard: Sql,
  section: "UPDATE",
  constants: {},
  deps: { list: SqlList },
  write: ({ standard: { space, update, set, where }, list }) => (table: string, assignments: readonly string[], condition: string) =>
    [update, table, set, list(assignments), where, condition].join(space),
  examples: [{ input: ["reservations", ["status = ?"], "id = ?"], output: "UPDATE reservations SET status = ? WHERE id = ?" }],
})

/**
 * Deletion
 * The rows of a table that meet a condition, removed.
 */
export const DeleteRows = syntax({
  owner: "trame",
  standard: Sql,
  section: "DELETE",
  constants: {},
  write: ({ standard: { space, deleteFrom, where } }) => (table: string, condition: string) => [deleteFrom, table, where, condition].join(space),
  examples: [{ input: ["data_versions", "entity = ?"], output: "DELETE FROM data_versions WHERE entity = ?" }],
})

// Parameters, by dialect --------------------------------------------------------------------

/**
 * SQLite parameter
 * Every parameter is a question mark, whatever its index: its value is the next one given.
 */
export const SqliteParameter = syntax({
  owner: "trame",
  standard: SqliteSql,
  section: "Parameters (?)",
  constants: {},
  write: ({ standard: { parameter } }) => (_index: number) => parameter,
  examples: [{ input: [0], output: "?" }, { input: [2], output: "?" }],
})

/**
 * PostgreSQL parameter
 * A dollar sign, then the number of the parameter: the parameter at index 0 is $1.
 */
export const PostgresParameter = syntax({
  owner: "trame",
  standard: PostgresSql,
  section: "Positional parameters ($n)",
  constants: {},
  write: ({ standard: { parameter, first } }) => (index: number) => parameter + String(first + index),
  examples: [{ input: [0], output: "$1" }, { input: [2], output: "$3" }],
})
