// trame dev: watches the graph, recompiles it at each save, and updates the open page.
// A refused compilation erases nothing: the page keeps the last valid graph and shows the error.

import { BlockType, BundleMode } from "../../../trame/kernel"
import type { ProvidedBy, Bundle, Payload } from "../../../trame/kernel"
import type { Clock, FileReading, HttpServer, Layout, Paths, Terminal, Timer } from "../../architecture"
import type { Dates, DevMessages } from "../../messages"
import type { ServerResponse } from "node:http"
import type { Api as ProjectApi } from "./project"
import type { Api as DateBundleApi } from "./date-bundle"
import type { Api as DifferencesApi } from "./differences"
import type { Api as PageApi } from "../page/page"
import type { Api as RenderingApi } from "../rendering/document"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { NodeEvents } from "#std/system"
import type { TextFile } from "#std/text"
import type { Uri } from "#std/web"
import type { CodeLines } from "../../text"
import type { TrameCommands } from "../../conventions"
import type { DevService } from "../../engine"

export interface Deps {
  service: ProvidedBy<typeof DevService>
  uri: ProvidedBy<typeof Uri>
  line: ProvidedBy<typeof TrameCommands>
  nodeEvents: ProvidedBy<typeof NodeEvents>
  layout: Layout
  http: { scheme: "http"; ok: 200; noContent: 204; notFound: 404; contentType: string; cacheControl: string; connection: string; noCache: string; keepAlive: string }
  mediaTypes: { html: string; jsonUtf8: string; eventStream: string }
  events: { eventField: string; dataField: string; endOfLine: string; comment: string; endOfMessage: string }
  terminal: Terminal
  /** What a refused compilation says, shown as it is. */
  codeLines: ProvidedBy<typeof CodeLines>
  file: ProvidedBy<typeof TextFile>
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
  /** The renderer of the page: the changes it announces. */
  pageRendering: RenderingApi
  dates: ProvidedBy<typeof Dates>
  language: { tag: string }
  messages: ProvidedBy<typeof DevMessages>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { service, uri, line } = deps
  const { nodeEvents } = deps
  const { zero, single } = deps.counts
  const { head } = deps.sequences
  const { empty, concat, optional, when } = deps.texts
  const { codeLines } = deps
  const { endOfLine } = deps.file
  const { terminal, clock, timer, debounce, http: h, mediaTypes, events: ev, dates, language, messages } = deps
  const { createServer } = deps.httpServer
  const { watch, existsSync } = deps.reading
  const { join, relative, sep } = deps.paths
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
      for (const res of clients) res.write(concat([ev.eventField, event, ev.endOfLine, ev.dataField, JSON.stringify(data), ev.endOfMessage]))
    }

    async function recompile(reason: string) {
      if (compiling) {
        again = true
        return
      }
      compiling = true
      send(service.compiling, { reason })
      const t0 = clock.now().getTime()
      const next = await makeBundle(root, today, BundleMode.dev)
      const ms = clock.now().getTime() - t0
      if (next.error) {
        // The last valid graph is kept, with the error.
        current = current ? { ...current, error: next.error, changes: undefined, changesHtml: undefined } : next
        terminal.write(messages.compilationRefused(time(), ms))
        terminal.write(codeLines(empty, next.error).join(endOfLine))
      } else {
        const todayPayload = next.dates.find((d) => d.date === next.today)?.payload
        const changes = previousToday && todayPayload ? diffPayloads(previousToday, todayPayload) : undefined
        previousToday = todayPayload ?? previousToday
        current = { ...next, changes, changesHtml: changes && deps.pageRendering.part(changes) }
        const first = head(changes?.blocks)
        const n = first?.type === BlockType.list ? first.items.length : zero
        terminal.write(messages.compiled(time(), ms, next.dates.length, n, reason))
      }
      send(service.ready, current)
      compiling = false
      if (again) {
        again = false
        await recompile(messages.changedDuringCompilation())
      }
    }

    const html = await pageHtml(root, { dev: true, project: projectDirs(root).title })
    const server = createServer((req, res) => {
      const [url] = optional(req.url).split(uri.query)
      if (service.page.includes(url)) {
        res.writeHead(h.ok, { [h.contentType]: mediaTypes.html })
        return res.end(html)
      }
      if (url === service.bundle) {
        res.writeHead(current ? h.ok : h.noContent, { [h.contentType]: mediaTypes.jsonUtf8 })
        return res.end(when(current, (c) => JSON.stringify(c)))
      }
      if (url === service.events) {
        res.writeHead(h.ok, { [h.contentType]: mediaTypes.eventStream, [h.cacheControl]: h.noCache, [h.connection]: h.keepAlive })
        res.write(ev.comment + line.program + line.separator + line.dev + ev.endOfMessage)
        clients.add(res)
        req.on(nodeEvents.close, () => clients.delete(res))
        return
      }
      res.writeHead(h.notFound).end()
    })
    await new Promise<void>((resolve) => server.listen(port, resolve))
    terminal.write(messages.listening(h.scheme + uri.schemeEnd + uri.authority + service.host + uri.portSeparator + port, dates.format(today)))
    const layout = deps.layout
    terminal.write(messages.watching([...[layout.sources, layout.kinds, layout.views, layout.evidence].map((d) => d + sep), layout.lock]))

    let pending: ReturnType<Timer["setTimeout"]> | undefined
    const changed = new Set<string>()
    const schedule = (what: string) => {
      if (service.ignored.some((ending) => what.endsWith(ending))) return
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
      if (existsSync(abs)) watch(abs, { recursive: true }, (_e, f) => schedule(join(dir, optional(f))))
    }
    if (existsSync(join(root, layout.lock))) watch(join(root, layout.lock), () => schedule(layout.lock))

    await recompile(messages.startup())
  }

  return { startDev }
}

export type Api = ReturnType<typeof body>
export default body
