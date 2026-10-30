/** Reservations · SQL */

import { standard } from "../../../kinds/standard"
import { syntax } from "../../../kinds/syntax"

// The SQL the service writes. What every database reads alike is the standard Sql and its statements; what differs is a
// dialect: how a statement names its parameters, and the types of the columns. The repositories never write SQL: they
// ask a dialect (architecture.Dialect), and each database comes with its own, chosen together (infra).

/**
 * SQL
 * The statements the service writes, as SQL defines them and as SQLite and PostgreSQL both read them.
 */
export const Sql = standard({
  owner: "karim",
  source: "ISO/IEC 9075 (SQL): SELECT, INSERT, UPDATE, CREATE TABLE; CREATE TABLE IF NOT EXISTS, as SQLite and PostgreSQL both accept it",
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
    createTable: { value: "CREATE TABLE IF NOT EXISTS", meaning: "Creates a table, unless it exists" },
    primaryKey: { value: "PRIMARY KEY", meaning: "The column that identifies a row" },
    notNull: { value: "NOT NULL", meaning: "A column that always has a value" },
    references: { value: "REFERENCES", meaning: "A column whose value is the key of a row of another table" },
    countAll: { value: "count(*)", meaning: "The number of rows" },
    as: { value: "AS", meaning: "Names a result column" },
  },
})

/**
 * SQLite's dialect
 * How SQLite names the parameters of a statement and types its columns.
 */
export const SqliteSql = standard({
  owner: "karim",
  source: "SQLite: SQL As Understood By SQLite, Parameters (?); Datatypes In SQLite (TEXT, REAL)",
  url: "https://www.sqlite.org/lang_expr.html#varparam",
  constants: {
    parameter: { value: "?", meaning: "A parameter: the next value given with the statement" },
    text: { value: "TEXT", meaning: "The type of a column of text" },
    number: { value: "REAL", meaning: "The type of a column of numbers (an 8-byte floating point number)" },
  },
})

/**
 * PostgreSQL's dialect
 * How PostgreSQL names the parameters of a statement and types its columns.
 */
export const PostgresSql = standard({
  owner: "karim",
  source: "PostgreSQL: Value Expressions, Positional Parameters ($n); Numeric Types (double precision); Character Types (text)",
  url: "https://www.postgresql.org/docs/current/sql-expressions.html#SQL-EXPRESSIONS-PARAMETERS-POSITIONAL",
  constants: {
    parameter: { value: "$", meaning: "Opens a positional parameter: then its position" },
    first: { value: 1, meaning: "The position of the first parameter" },
    text: { value: "TEXT", meaning: "The type of a column of text" },
    number: { value: "DOUBLE PRECISION", meaning: "The type of a column of numbers (an 8-byte floating point number, as SQLite's REAL)" },
  },
})

// Statements ------------------------------------------------------------------------------

/**
 * List
 * Items separated by a comma and a space.
 */
export const SqlList = syntax({
  owner: "karim",
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
  owner: "karim",
  standard: Sql,
  section: "Comparison predicates",
  constants: {},
  write: ({ standard: { equals, space } }) => (column: string, parameter: string) => [column, equals, parameter].join(space),
  examples: [{ input: ["id", "?"], output: "id = ?" }, { input: ["id", "$2"], output: "id = $2" }],
})

/**
 * Column definition
 * A column, its type, then PRIMARY KEY for the key of its table (and REFERENCES when it is the key of a row of another
 * table), NOT NULL otherwise.
 */
export const ColumnDefinition = syntax({
  owner: "karim",
  standard: Sql,
  section: "CREATE TABLE: column definitions and constraints",
  constants: {},
  write: ({ standard: { space, open, close, primaryKey, notNull, references } }) =>
    (column: string, type: string, key: boolean, referenced?: { table: string; column: string }) =>
      [column, type, key ? primaryKey : notNull, ...(referenced ? [references, referenced.table + open + referenced.column + close] : [])].join(space),
  examples: [
    { input: ["id", "TEXT", true], output: "id TEXT PRIMARY KEY" },
    { input: ["price", "REAL", false], output: "price REAL NOT NULL" },
    { input: ["reservation", "TEXT", true, { table: "reservations", column: "id" }], output: "reservation TEXT PRIMARY KEY REFERENCES reservations(id)" },
  ],
})

/**
 * Table creation
 * A table and the definitions of its columns, unless it exists.
 */
export const CreateTable = syntax({
  owner: "karim",
  standard: Sql,
  section: "CREATE TABLE",
  constants: {},
  deps: { list: SqlList },
  write: ({ standard: { space, open, close, createTable }, list }) => (table: string, definitions: readonly string[]) =>
    [createTable, table, open + list(definitions) + close].join(space),
  examples: [{ input: ["refunds", ["reservation TEXT PRIMARY KEY", "amount REAL NOT NULL"]], output: "CREATE TABLE IF NOT EXISTS refunds (reservation TEXT PRIMARY KEY, amount REAL NOT NULL)" }],
})

/**
 * Count
 * The number of rows of a table, under a name.
 */
export const CountRows = syntax({
  owner: "karim",
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
  owner: "karim",
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
  owner: "karim",
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
  owner: "karim",
  standard: Sql,
  section: "UPDATE",
  constants: {},
  deps: { list: SqlList },
  write: ({ standard: { space, update, set, where }, list }) => (table: string, assignments: readonly string[], condition: string) =>
    [update, table, set, list(assignments), where, condition].join(space),
  examples: [{ input: ["reservations", ["status = ?"], "id = ?"], output: "UPDATE reservations SET status = ? WHERE id = ?" }],
})

// Parameters, by dialect --------------------------------------------------------------------

/**
 * SQLite parameter
 * Every parameter is a question mark, whatever its index: its value is the next one given.
 */
export const SqliteParameter = syntax({
  owner: "karim",
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
  owner: "karim",
  standard: PostgresSql,
  section: "Positional parameters ($n)",
  constants: {},
  write: ({ standard: { parameter, first } }) => (index: number) => parameter + String(first + index),
  examples: [{ input: [0], output: "$1" }, { input: [2], output: "$3" }],
})
