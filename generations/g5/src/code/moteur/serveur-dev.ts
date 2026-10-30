// trame dev : surveille le graphe, le recompile à chaque enregistrement, et met à jour la page ouverte.
// Une compilation refusée n'efface rien : la page garde le dernier graphe valide et affiche l'erreur.

import type { Chemins, Disposition, Horloge, Http, LectureFichiers, Minuteur, Terminal } from "../../architecture"
import type { ServerResponse } from "node:http"
import type { Api as ProjetApi } from "./projet"
import type { Api as PaquetApi } from "./paquet"
import type { Api as DifferencesApi } from "./differences"
import type { Api as PageApi } from "./page"
import type { Bundle, Payload } from "../../../trame/kernel"

export interface Deps {
  disposition: Disposition
  normeHttp: { ok: 200; sansContenu: 204; introuvable: 404; enTeteType: string; enTeteCache: string; enTeteConnexion: string; sansCache: string; connexionMaintenue: string }
  types: { html: string; json: string; fluxEvenements: string }
  evenements: { champEvenement: string; champDonnees: string; commentaire: string; finDeMessage: string }
  terminal: Terminal
  horloge: Horloge
  minuteur: Minuteur
  regroupement: number
  http: Http
  lecture: LectureFichiers
  chemins: Chemins
  projet: ProjetApi
  paquet: PaquetApi
  differences: DifferencesApi
  page: PageApi
}

const corps = (deps: Deps) => {
  const { terminal, horloge, minuteur, regroupement, normeHttp: h, types, evenements: ev } = deps
  const { createServer } = deps.http
  const { watch, existsSync } = deps.lecture
  const { join, relative } = deps.chemins
  const { projectDirs } = deps.projet
  const { makeBundle } = deps.paquet
  const { diffPayloads } = deps.differences
  const { pageHtml } = deps.page

  const clock = () => horloge.maintenant().toLocaleTimeString("fr-CH")

  async function startDev(root: string, today: string, port: number): Promise<void> {
    let current: Bundle | undefined
    let previousToday: Payload | undefined
    let compiling = false
    let again = false
    const clients = new Set<ServerResponse>()
    const send = (event: string, data: unknown) => {
      for (const res of clients) res.write(`${ev.champEvenement}${event}\n${ev.champDonnees}${JSON.stringify(data)}${ev.finDeMessage}`)
    }

    async function recompile(reason: string) {
      if (compiling) {
        again = true
        return
      }
      compiling = true
      send("compiling", { reason })
      const t0 = horloge.maintenant().getTime()
      const next = await makeBundle(root, today, "dev")
      const ms = horloge.maintenant().getTime() - t0
      if (next.error) {
        // On garde le dernier graphe valide, avec l'erreur.
        current = current ? { ...current, error: next.error, changes: undefined } : next
        terminal.ecrire(`✗ ${clock()}  compilation refusée (${ms} ms) : la page garde le dernier graphe valide`)
        terminal.ecrire(next.error.split("\n").map((l) => `    ${l}`).join("\n"))
      } else {
        const todayPayload = next.dates.find((d) => d.date === next.today)?.payload
        const changes = previousToday && todayPayload ? diffPayloads(previousToday, todayPayload) : undefined
        previousToday = todayPayload ?? previousToday
        current = { ...next, changes }
        const n = changes?.blocks[0]?.type === "list" ? changes.blocks[0].items.length : 0
        terminal.ecrire(`✓ ${clock()}  compilé en ${ms} ms · ${next.dates.length} dates${n ? ` · ${n} changement${n > 1 ? "s" : ""}` : ""} (${reason})`)
      }
      send("bundle", current)
      compiling = false
      if (again) {
        again = false
        await recompile("modifications pendant la compilation")
      }
    }

    const html = await pageHtml(root, { dev: true })
    const server = createServer((req, res) => {
      const url = (req.url ?? "/").split("?")[0]
      if (url === "/" || url === "/index.html") {
        res.writeHead(h.ok, { [h.enTeteType]: types.html })
        return res.end(html)
      }
      if (url === "/bundle.json") {
        res.writeHead(current ? h.ok : h.sansContenu, { [h.enTeteType]: types.json })
        return res.end(current ? JSON.stringify(current) : "")
      }
      if (url === "/events") {
        res.writeHead(h.ok, { [h.enTeteType]: types.fluxEvenements, [h.enTeteCache]: h.sansCache, [h.enTeteConnexion]: h.connexionMaintenue })
        res.write(`${ev.commentaire}trame dev${ev.finDeMessage}`)
        clients.add(res)
        req.on("close", () => clients.delete(res))
        return
      }
      res.writeHead(h.introuvable).end()
    })
    await new Promise<void>((resolve) => server.listen(port, resolve))
    terminal.ecrire(`trame dev · http://localhost:${port} · graphe du ${today}`)
    const d = deps.disposition
    terminal.ecrire(`surveille ${d.sources}/, ${d.types}/, ${d.vues}/, ${d.preuves}/ et ${d.verrou} · Ctrl+C pour arrêter`)

    let timer: ReturnType<Minuteur["setTimeout"]> | undefined
    const changed = new Set<string>()
    const schedule = (what: string) => {
      if (/(~|\.swp|\.tmp)$/.test(what)) return
      changed.add(what)
      minuteur.clearTimeout(timer)
      timer = minuteur.setTimeout(() => {
        const list = [...changed]
        changed.clear()
        void recompile(list.length === 1 ? list[0] : `${list.length} fichiers`)
      }, regroupement)
    }
    const dirs = projectDirs(root)
    const dsp = deps.disposition
    for (const abs of [join(root, dsp.sources), ...dirs.kinds, ...dirs.views, join(root, dsp.preuves)]) {
      const dir = relative(root, abs)
      if (existsSync(abs)) watch(abs, { recursive: true }, (_e, f) => schedule(`${dir}/${f ?? ""}`))
    }
    if (existsSync(join(root, dsp.verrou))) watch(join(root, dsp.verrou), () => schedule(dsp.verrou))

    await recompile("démarrage")
  }

  return { startDev }
}

export type Api = ReturnType<typeof corps>
export default corps
