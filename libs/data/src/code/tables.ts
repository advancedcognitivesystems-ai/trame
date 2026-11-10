// A dialect of SQL for the tables of entities: the statements a table needs, composed from the elements of SQL, with the
// parameters, the column types and the query of existence of one database. The same body serves SQLite and PostgreSQL:
// what differs is what they receive. Each statement says what it does: a selection, a count or a question of existence
// reads; a creation, an insertion, an update, a deletion or a change of the table writes.

import type { BodyOf } from "#trame/kernel"
import type { SqliteTables } from "../records"
import type { Model, StoredDescription } from "../kinds/entity"

const body: BodyOf<typeof SqliteTables> = ({
  types, parameter, definition, createTable, countRows, insertRow, selectRows, updateRows, deleteRows, addColumn, renameColumn, dropColumn,
  columnEquals, isNull, commands, versions, counts,
}) => {
  /** One parameter per item, in their order. */
  const parameters = (items: readonly string[]) => items.map((_, i) => parameter(i))
  /** The type of a column: a number, yes or no as a whole number, anything else as text (a list as its JSON). */
  const typeOf = (model: Model, s: StoredDescription): string => {
    const t = s.type === model.types.optional && s.of ? s.of.type : s.type
    return t === model.types.number ? types.number : t === model.types.flag ? types.integer : types.text
  }
  const defined = (model: Model, field: string, s: StoredDescription) => {
    const referenced = s.keptAs !== undefined && s.key !== undefined ? { table: s.keptAs, column: s.key } : undefined
    return definition(field, typeOf(model, s), field === model.key, s.type !== model.types.optional, referenced)
  }
  const columns = (model: Model) => Object.keys(model.fields)
  // An entity kept as records has a key; one that has none is found by nothing.
  const keyOf = (model: Model) => model.key ?? versions.entity
  const first = parameter(counts.zero)
  return {
    exists: () => commands.read(types.exists),
    create: (model: Model) =>
      commands.write(createTable(model.name, Object.entries(model.fields).map(([field, s]) => defined(model, field, s as StoredDescription)))),
    find: (model: Model) => commands.read(selectRows(columns(model), model.name, columnEquals(keyOf(model), first))),
    insert: (model: Model) => commands.write(insertRow(model.name, columns(model), parameters(columns(model)))),
    update: (model: Model, fields: readonly string[]) => {
      // The new values first, then the key: its parameter comes last.
      const params = parameters([...fields, keyOf(model)])
      const assignments = fields.map((f, i) => columnEquals(f, params[i]))
      return commands.write(updateRows(model.name, assignments, columnEquals(keyOf(model), params[fields.length])))
    },
    count: (model: Model, as: string) => commands.read(countRows(model.name, as)),
    addColumn: (model: Model, field: string) => {
      const s = model.fields[field] as StoredDescription
      // A column added is empty in every row: it may have no value, whatever the description says of the rows to come.
      const referenced = s.keptAs !== undefined && s.key !== undefined ? { table: s.keptAs, column: s.key } : undefined
      return commands.write(addColumn(model.name, definition(field, typeOf(model, s), false, false, referenced)))
    },
    renameColumn: (model: Model, from: string, to: string) => commands.write(renameColumn(model.name, from, to)),
    dropColumn: (model: Model, field: string) => commands.write(dropColumn(model.name, field)),
    fill: (model: Model, field: string) => {
      const [value] = parameters([field])
      return commands.write(updateRows(model.name, [columnEquals(field, value)], isNull(field)))
    },
    versions: {
      create: () => commands.write(createTable(versions.name, [
        definition(versions.entity, types.text, true, true), definition(versions.version, types.text, false, true),
      ])),
      read: () => commands.read(selectRows([versions.version], versions.name, columnEquals(versions.entity, first))),
      forget: () => commands.write(deleteRows(versions.name, columnEquals(versions.entity, first))),
      write: () => commands.write(insertRow(versions.name, [versions.entity, versions.version], parameters([versions.entity, versions.version]))),
    },
  }
}

export default body
