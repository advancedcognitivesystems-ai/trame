// A SQLite database in a file, created with its directory on the first start. A read runs on a connection that refuses
// to change the database (a statement that would write, made as a read by mistake, is refused by SQLite itself); a
// transaction keeps several writes together, or none of them. Its tables are the library of data's.

import { DatabaseSync } from "node:sqlite"
import { mkdirSync } from "node:fs"
import { dirname } from "node:path"
import type { BodyOf } from "#trame/kernel"
import type { FileDatabase } from "../infra"

const body: BodyOf<typeof FileDatabase> = ({ path, sqlite }) => {
  mkdirSync(dirname(path), { recursive: true })
  const db = new DatabaseSync(path)
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
