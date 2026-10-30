// trame dev : surveille le graphe, le recompile à chaque enregistrement, et met à jour la page ouverte.
// Une compilation refusée n'efface rien : la page garde le dernier graphe valide et affiche l'erreur.

import { createServer, type ServerResponse } from "node:http"
import { watch, existsSync } from "node:fs"
import { join, relative } from "node:path"
import { projectDirs } from "./project"
import { makeBundle } from "./bundle"
import { diffPayloads } from "./diff"
import { pageHtml } from "./page/build"
import type { Bundle, Payload } from "./ir"

const clock = () => new Date().toLocaleTimeString("fr-CH")

export async function startDev(root: string, today: string, port: number): Promise<void> {
  let current: Bundle | undefined
  let previousToday: Payload | undefined
  let compiling = false
  let again = false
  const clients = new Set<ServerResponse>()
  const send = (event: string, data: unknown) => {
    for (const res of clients) res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
  }

  async function recompile(reason: string) {
    if (compiling) {
      again = true
      return
    }
    compiling = true
    send("compiling", { reason })
    const t0 = Date.now()
    const next = await makeBundle(root, today, "dev")
    const ms = Date.now() - t0
    if (next.error) {
      // On garde le dernier graphe valide, avec l'erreur.
      current = current ? { ...current, error: next.error, changes: undefined } : next
      console.log(`✗ ${clock()}  compilation refusée (${ms} ms) : la page garde le dernier graphe valide`)
      console.log(next.error.split("\n").map((l) => `    ${l}`).join("\n"))
    } else {
      const todayPayload = next.dates.find((d) => d.date === next.today)?.payload
      const changes = previousToday && todayPayload ? diffPayloads(previousToday, todayPayload) : undefined
      previousToday = todayPayload ?? previousToday
      current = { ...next, changes }
      const n = changes?.blocks[0]?.type === "list" ? changes.blocks[0].items.length : 0
      console.log(`✓ ${clock()}  compilé en ${ms} ms · ${next.dates.length} dates${n ? ` · ${n} changement${n > 1 ? "s" : ""}` : ""} (${reason})`)
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
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" })
      return res.end(html)
    }
    if (url === "/bundle.json") {
      res.writeHead(current ? 200 : 204, { "content-type": "application/json; charset=utf-8" })
      return res.end(current ? JSON.stringify(current) : "")
    }
    if (url === "/events") {
      res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" })
      res.write(": trame dev\n\n")
      clients.add(res)
      req.on("close", () => clients.delete(res))
      return
    }
    res.writeHead(404).end()
  })
  await new Promise<void>((resolve) => server.listen(port, resolve))
  console.log(`trame dev · http://localhost:${port} · graphe du ${today}`)
  console.log("surveille src/, kinds/, views/, evidence/ et trame.lock · Ctrl+C pour arrêter")

  let timer: NodeJS.Timeout | undefined
  const changed = new Set<string>()
  const schedule = (what: string) => {
    if (/(~|\.swp|\.tmp)$/.test(what)) return
    changed.add(what)
    clearTimeout(timer)
    timer = setTimeout(() => {
      const list = [...changed]
      changed.clear()
      void recompile(list.length === 1 ? list[0] : `${list.length} fichiers`)
    }, 150)
  }
  const dirs = projectDirs(root)
  for (const abs of [join(root, "src"), ...dirs.kinds, ...dirs.views, join(root, "evidence")]) {
    const dir = relative(root, abs)
    if (existsSync(abs)) watch(abs, { recursive: true }, (_e, f) => schedule(`${dir}/${f ?? ""}`))
  }
  if (existsSync(join(root, "trame.lock"))) watch(join(root, "trame.lock"), () => schedule("trame.lock"))

  await recompile("démarrage")
}
