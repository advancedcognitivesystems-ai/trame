// A SQLite database, in memory: new each time it is opened. A read runs on a connection that refuses to change the
// database (a statement that would write, made as a read by mistake, is refused by SQLite itself); a transaction keeps
// several writes together, or none of them.

import { DatabaseSync } from "node:sqlite"
import type { BodyOf } from "#trame/kernel"
import type { SqliteInMemory } from "../records"

const body: BodyOf<typeof SqliteInMemory> = ({ sqlite }) => {
  const db = new DatabaseSync(sqlite.memory)
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
