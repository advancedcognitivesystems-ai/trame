// Une base SQLite (en mémoire ou dans un fichier). Le chemin, le schéma et les données de départ sont des paramètres.

import { DatabaseSync } from "node:sqlite"
import { mkdirSync } from "node:fs"
import { dirname } from "node:path"
import type { BodyOf } from "../../../../trame/kernel"
import type { BaseFichier } from "../infra"

const corps: BodyOf<typeof BaseFichier> = ({ chemin, schema, reservations }) => {
  if (chemin !== ":memory:") mkdirSync(dirname(chemin), { recursive: true })
  const db = new DatabaseSync(chemin)
  for (const sql of schema) db.exec(sql)
  const { n } = db.prepare("SELECT count(*) AS n FROM reservations").get() as { n: number }
  if (n === 0) {
    const inserer = db.prepare("INSERT INTO reservations (id, borne, prix, debut, statut) VALUES (?, ?, ?, ?, ?)")
    for (const r of reservations) inserer.run(r.id, r.borne, r.prix, r.debut, r.statut)
  }
  return {
    lire: async <T>(sql: string, ...params: (string | number | null)[]) => db.prepare(sql).all(...params) as T[],
    ecrire: async (sql: string, ...params: (string | number | null)[]) => Number(db.prepare(sql).run(...params).changes),
    async transaction<T>(travail: () => Promise<T>) {
      db.exec("BEGIN")
      try {
        const v = await travail()
        db.exec("COMMIT")
        return v
      } catch (e) {
        db.exec("ROLLBACK")
        throw e
      }
    },
  }
}

export default corps
