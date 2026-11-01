// A SQLite database (in memory or in a file). The path, the tables, the initial data and the dialect that writes the
// statements are parameters.

import { DatabaseSync } from "node:sqlite"
import { mkdirSync } from "node:fs"
import { dirname } from "node:path"
import type { BodyOf } from "#trame/kernel"
import type { FileDatabase } from "../infra"

const body: BodyOf<typeof FileDatabase> = ({ path, tables, dialect, reservations, sqlite }) => {
  if (path !== sqlite.memory) mkdirSync(dirname(path), { recursive: true })
  const db = new DatabaseSync(path)
  for (const table of [tables.reservations, tables.refunds]) db.exec(dialect.create(table))
  const row = db.prepare(dialect.count(tables.reservations.name, tables.count)).get() as Record<string, number>
  // An empty database receives the initial reservations.
  if (!row[tables.count]) {
    const columns = Object.keys(tables.reservations.columns)
    const insert = db.prepare(dialect.insert(tables.reservations.name, columns))
    for (const r of reservations) insert.run(...columns.map((c) => r[c as keyof typeof r]))
  }
  // A read runs on a connection that refuses to change the database: a statement that would write, made as a read by
  // mistake, is refused by SQLite itself. (A file opened read-only would refuse it for good; one in memory cannot be.)
  const reading = <T>(work: () => T): T => {
    db.exec(sqlite.readOnly)
    try {
      return work()
    } finally {
      db.exec(sqlite.readWrite)
    }
  }
  return {
    read: async <T>(sql: string, ...params: (string | number | null)[]) => reading(() => db.prepare(sql).all(...params) as T[]),
    write: async (sql: string, ...params: (string | number | null)[]) => Number(db.prepare(sql).run(...params).changes),
    async transaction<T>(work: () => Promise<T>) {
      db.exec(sqlite.begin)
      try {
        const v = await work()
        db.exec(sqlite.commit)
        return v
      } catch (e) {
        db.exec(sqlite.rollback)
        throw e
      }
    },
  }
}

export default body
