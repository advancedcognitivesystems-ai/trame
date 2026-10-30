// Démarrer un composant assemblé : compiler le graphe à la date du jour, puis construire ce que le fichier
// d'assemblage demande, dans l'ordre où il le demande. Les choix d'implémentation sont déjà écrits dans ce fichier.

import { load, compileAt } from "./compile"
import { Session, loadBody } from "./runtime"
import { meta, refOf } from "./internal"
import type { AnyNode } from "./kernel"

export async function boot(o: { root: string; env?: string; date?: string }) {
  const loaded = await load(o.root)
  const date = o.date ?? process.env.TRAME_TODAY ?? new Date().toISOString().slice(0, 10)
  const c = await compileAt(loaded, date, { evaluate: false })
  const byRef = (ref: string): AnyNode => {
    const n = c.nodes.find((x) => refOf(x) === ref)
    if (!n) throw new Error(`Nœud inconnu dans le graphe : ${ref}`)
    return n
  }
  const env = o.env ? byRef(o.env) : undefined
  const host = { graph: c.graph, root: o.root, today: date }
  const session = new Session(host, env)
  return {
    date,
    /** Le corps d'un nœud, prêt à recevoir ses dépendances. */
    corps: async (ref: string) => {
      const n = byRef(ref)
      const fn = await loadBody(host, n)
      return async (deps: Record<string, unknown>) => {
        const v = await fn(deps)
        session.values.set(n, v)
        return v
      }
    },
    /** Ce que donne un nœud qui n'a pas de corps (une décision, une règle), à la date du démarrage. */
    valeur: async (ref: string) => {
      const n = byRef(ref)
      const v = await meta(n).def.provide!(c.graph.self(n) as never, {
        env: env && c.graph.view(env), date, g: c.graph,
        wire: (x) => session.wire(x.node), wireDeps: (x) => session.wireDeps(x.node),
      })
      session.values.set(n, v)
      return v
    },
    /** Démarre le composant avec ses points d'entrée construits. */
    start: async (ref: string, entries: Record<string, unknown>) => {
      const n = byRef(ref)
      const def = meta(n).def
      if (!def.start) throw new Error(`« ${c.graph.view(n).title} » ne sait pas démarrer`)
      return def.start(c.graph.self(n) as never, Object.entries(entries).map(([r, value]) => ({ node: c.graph.view(byRef(r)), value })), {
        env: env && c.graph.view(env), date, g: c.graph,
        wire: (x) => session.wire(x.node), wireDeps: (x) => session.wireDeps(x.node),
      })
    },
  }
}
