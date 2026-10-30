// trame dev: watches the graph, recompiles it at each save, and updates the open page.
// A refused compilation erases nothing: the page keeps the last valid graph and shows the error.

import { BlockType } from "../../../trame/kernel"
import type { ProvidedBy, Bundle, Payload } from "../../../trame/kernel"
import type { Clock, FileReading, HttpServer, Layout, Paths, Terminal, Timer } from "../../architecture"
import type { Dates, DevMessages } from "../../messages"
import type { ServerResponse } from "node:http"
import type { Api as ProjectApi } from "./project"
import type { Api as DateBundleApi } from "./date-bundle"
import type { Api as DifferencesApi } from "./differences"
import type { Api as PageApi } from "./page"
import type { Counts, Sequences, Texts } from "../../algebra"
import type { NodeEvents } from "../../standards"

export interface Deps {
  nodeEvents: ProvidedBy<typeof NodeEvents>
  layout: Layout
  http: { ok: 200; noContent: 204; notFound: 404; contentTypeHeader: string; cacheControlHeader: string; connectionHeader: string; noCache: string; keepAlive: string }
  mediaTypes: { html: string; json: string; eventStream: string }
  events: { eventField: string; dataField: string; comment: string; endOfMessage: string }
  terminal: Terminal
  clock: Clock
  timer: Timer
  debounce: number
  httpServer: HttpServer
  reading: FileReading
  paths: Paths
  project: ProjectApi
  bundle: DateBundleApi
  differences: DifferencesApi
  page: PageApi
  dates: ProvidedBy<typeof Dates>
  language: { tag: string }
  messages: ProvidedBy<typeof DevMessages>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { nodeEvents } = deps
  const { zero, single } = deps.counts
  const { head } = deps.sequences
  const { optional, when } = deps.texts
  const { terminal, clock, timer, debounce, http: h, mediaTypes, events: ev, dates, language, messages } = deps
  const { createServer } = deps.httpServer
  const { watch, existsSync } = deps.reading
  const { join, relative } = deps.paths
  const { projectDirs } = deps.project
  const { makeBundle } = deps.bundle
  const { diffPayloads } = deps.differences
  const { pageHtml } = deps.page

  /** The time of day, as people read it in the decided language. */
  const time = () => clock.now().toLocaleTimeString(language.tag)

  async function startDev(root: string, today: string, port: number): Promise<void> {
    let current: Bundle | undefined
    let previousToday: Payload | undefined
    let compiling = false
    let again = false
    const clients = new Set<ServerResponse>()
    const send = (event: string, data: unknown) => {
      for (const res of clients) res.write(`${ev.eventField}${event}\n${ev.dataField}${JSON.stringify(data)}${ev.endOfMessage}`)
    }

    async function recompile(reason: string) {
      if (compiling) {
        again = true
        return
      }
      compiling = true
      send("compiling", { reason })
      const t0 = clock.now().getTime()
      const next = await makeBundle(root, today, "dev")
      const ms = clock.now().getTime() - t0
      if (next.error) {
        // The last valid graph is kept, with the error.
        current = current ? { ...current, error: next.error, changes: undefined } : next
        terminal.write(messages.compilationRefused(time(), ms))
        terminal.write(next.error.split("\n").map((l) => `    ${l}`).join("\n"))
      } else {
        const todayPayload = next.dates.find((d) => d.date === next.today)?.payload
        const changes = previousToday && todayPayload ? diffPayloads(previousToday, todayPayload) : undefined
        previousToday = todayPayload ?? previousToday
        current = { ...next, changes }
        const first = head(changes?.blocks)
        const n = first?.type === BlockType.list ? first.items.length : zero
        terminal.write(messages.compiled(time(), ms, next.dates.length, n, reason))
      }
      send("bundle", current)
      compiling = false
      if (again) {
        again = false
        await recompile(messages.changedDuringCompilation())
      }
    }

    const html = await pageHtml(root, { dev: true })
    const server = createServer((req, res) => {
      const [url] = (req.url ?? "/").split("?")
      if (url === "/" || url === "/index.html") {
        res.writeHead(h.ok, { [h.contentTypeHeader]: mediaTypes.html })
        return res.end(html)
      }
      if (url === "/bundle.json") {
        res.writeHead(current ? h.ok : h.noContent, { [h.contentTypeHeader]: mediaTypes.json })
        return res.end(when(current, (c) => JSON.stringify(c)))
      }
      if (url === "/events") {
        res.writeHead(h.ok, { [h.contentTypeHeader]: mediaTypes.eventStream, [h.cacheControlHeader]: h.noCache, [h.connectionHeader]: h.keepAlive })
        res.write(`${ev.comment}trame dev${ev.endOfMessage}`)
        clients.add(res)
        req.on(nodeEvents.close, () => clients.delete(res))
        return
      }
      res.writeHead(h.notFound).end()
    })
    await new Promise<void>((resolve) => server.listen(port, resolve))
    terminal.write(messages.listening(`http://localhost:${port}`, dates.format(today)))
    const layout = deps.layout
    terminal.write(messages.watching([`${layout.sources}/`, `${layout.kinds}/`, `${layout.views}/`, `${layout.evidence}/`, layout.lock]))

    let pending: ReturnType<Timer["setTimeout"]> | undefined
    const changed = new Set<string>()
    const schedule = (what: string) => {
      if (/(~|\.swp|\.tmp)$/.test(what)) return
      changed.add(what)
      timer.clearTimeout(pending)
      pending = timer.setTimeout(() => {
        const list = [...changed]
        changed.clear()
        const [only] = list
        void recompile(single(list) ? only : messages.filesChanged(list.length))
      }, debounce)
    }
    const dirs = projectDirs(root)
    for (const abs of [join(root, layout.sources), ...dirs.kinds, ...dirs.views, join(root, layout.evidence)]) {
      const dir = relative(root, abs)
      if (existsSync(abs)) watch(abs, { recursive: true }, (_e, f) => schedule(`${dir}/${optional(f)}`))
    }
    if (existsSync(join(root, layout.lock))) watch(join(root, layout.lock), () => schedule(layout.lock))

    await recompile(messages.startup())
  }

  return { startDev }
}

export type Api = ReturnType<typeof body>
export default body
