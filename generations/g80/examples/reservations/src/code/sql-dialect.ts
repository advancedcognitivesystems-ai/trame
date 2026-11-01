// A dialect of SQL: the statements the repositories need, composed from the elements of SQL, with the parameters and the
// column types of one database. The same body serves SQLite and PostgreSQL: what differs is what they receive.

import type { BodyOf } from "../../../../trame/kernel"
import type { SqliteDialect } from "../infra"
import type { Table } from "../architecture"

// Each statement says what it does: a selection or a count reads, a creation, an insertion or an update writes.
const body: BodyOf<typeof SqliteDialect> = ({ types, parameter, definition, createTable, countRows, insertRow, selectRows, updateRows, columnEquals, commands }) => {
  /** One parameter per item, in their order. */
  const parameters = (items: readonly string[]) => items.map((_, i) => parameter(i))
  /** Each column equal to its parameter, in their order. */
  const conditions = (columns: readonly string[]) => parameters(columns).map((p, i) => columnEquals(columns[i], p))
  return {
    create: (table: Table) =>
      commands.write(createTable(table.name, Object.entries(table.columns).map(([column, type]) => definition(column, types[type], column === table.key, table.references?.[column])))),
    count: (name: string, as: string) => commands.read(countRows(name, as)),
    insert: (name: string, columns: readonly string[]) => commands.write(insertRow(name, columns, parameters(columns))),
    find: (name: string, columns: readonly string[], key: string) => {
      const [where] = conditions([key])
      return commands.read(selectRows(columns, name, where))
    },
    update: (name: string, columns: readonly string[], key: string) => {
      // The new values first, then the key: its parameter comes last.
      const assignments = conditions([...columns, key])
      const where = assignments.pop()!
      return commands.write(updateRows(name, assignments, where))
    },
  }
}

export default body
