// Un serveur HTTP minimal : une route par point d'entrée, les paramètres de chemin, un corps JSON.
// Une valeur encore à décider dans le graphe rend 503 : le service refuse de calculer avec.

import { createServer } from "node:http"
import { Hole, type BodyOf } from "../../../../trame/kernel"
import type { ServeurNode } from "../infra"

const corps: BodyOf<typeof ServeurNode> = ({ port }) => ({
  servir(routes) {
    const table = routes.flatMap((r) => {
      if (r.declencheur.type !== "http") return []
      const noms: string[] = []
      const motif = new RegExp("^" + r.declencheur.chemin.replace(/:(\w+)/g, (_, nom: string) => (noms.push(nom), "([^/]+)")) + "$")
      return [{ ...r, methode: r.declencheur.methode, motif, noms }]
    })
    const server = createServer(async (req, res) => {
      const envoyer = (statut: number, corps: unknown) => {
        res.writeHead(statut, { "content-type": "application/json; charset=utf-8" })
        res.end(JSON.stringify(corps) + "\n")
      }
      const chemin = new URL(req.url ?? "/", "http://localhost").pathname
      const route = table.find((r) => r.methode === req.method && r.motif.test(chemin))
      if (!route) return envoyer(404, { erreur: "aucune route" })
      const m = route.motif.exec(chemin)!
      const params = Object.fromEntries(route.noms.map((nom, i) => [nom, decodeURIComponent(m[i + 1])]))
      let texte = ""
      for await (const morceau of req) texte += morceau
      try {
        const r = await route.traitement({ params, corps: texte ? JSON.parse(texte) : undefined })
        envoyer(r.statut ?? 200, r.corps)
      } catch (e) {
        if (e instanceof Hole) envoyer(503, { erreur: `Valeur encore à décider dans le graphe : ${e.label}` })
        else envoyer(500, { erreur: (e as Error).message })
      }
    })
    return new Promise((ok) =>
      server.listen(port, () => ok({ adresse: `http://localhost:${port}`, arreter: () => new Promise<void>((fin) => server.close(() => fin())) })))
  },
})

export default corps
