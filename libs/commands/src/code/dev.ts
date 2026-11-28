// trame dev: the page served, the project compiled at each date in a fresh process, again after each save, the open page
// told on a stream of events. A compilation refused erases nothing: the page keeps the last valid graph and shows the
// error. The page may amend a chosen value: the engine prepares the amendment, then records it unless refused or only
// previewed. The server stays open: the command answers once the first compilation is done, the program keeps serving.

import { BlockType, BundleMode } from "#trame/kernel"
import type { BodyOf, Bundle, Payload } from "#trame/kernel"
import type { CommandRequest } from "#trame/kinds/entry-point"
import type { Dev } from "../commands"

type Answer = { writeHead(status: number, headers?: Record<string, string>): Answer; write(chunk: string): void; end(chunk?: string): Answer }
type Request = { url?: string; method?: string; on(event: string, f: (chunk?: unknown) => void): void }

const body: BodyOf<typeof Dev> = (deps) => async (req) => {
  const { project, page, rendering, differences, service, server, waiting, clock, printing, http: h, media, events: ev, node, uri, dates, language, say, exit } = deps
  const { zero, single } = deps.counts
  const { head } = deps.sequences
  const { empty, concat, optional, when } = deps.texts
  const { endOfLine } = deps.file
  const { options } = (req as CommandRequest).body ?? {}
  const asked = options?.port
  const port = asked === undefined || asked === true ? deps.port : Number(asked)
  const compiled = await project.compiled()
  const program = project.program()
  /** The time of day, as people read it in the language of the documents. */
  const time = () => clock.now().toLocaleTimeString(language.tag)

  let current: Bundle | undefined
  let previousToday: Payload | undefined
  let compiling = false
  let again = false
  const clients = new Set<Answer>()
  const send = (event: string, data: unknown) => {
    for (const res of clients) res.write(concat([ev.eventField, event, ev.endOfLine, ev.dataField, JSON.stringify(data), ev.endOfMessage]))
  }

  async function recompile(reason: string): Promise<void> {
    if (compiling) {
      again = true
      return
    }
    compiling = true
    send(service.compiling, { reason })
    const t0 = clock.now().getTime()
    const next = await compiled.bundle(BundleMode.dev)
    const ms = clock.now().getTime() - t0
    if (next.error) {
      // The last valid graph is kept, with the error.
      current = current ? { ...current, error: next.error, changes: undefined, changesHtml: undefined } : next
      printing.line(say.compilationRefused(time(), ms))
      printing.line(deps.codeLines(empty, next.error).join(endOfLine))
    } else {
      const todayPayload = next.dates.find((d) => d.date === next.today)?.payload
      const changes = previousToday && todayPayload ? differences.diffPayloads(previousToday, todayPayload) : undefined
      previousToday = todayPayload ?? previousToday
      current = { ...next, changes, changesHtml: changes && rendering.part(changes) }
      const first = head(changes?.blocks)
      const n = first?.type === BlockType.list ? first.items.length : zero
      printing.line(say.compiled(time(), ms, next.dates.length, n, reason))
    }
    send(service.ready, current)
    compiling = false
    if (again) {
      again = false
      await recompile(say.changedDuringCompilation())
    }
  }

  const html = await page.pageHtml({ script: await project.page(), program, dev: true, project: compiled.title })
  const started = server.createServer(((request: Request, res: Answer) => {
    const [url] = optional(request.url).split(uri.query)
    if (service.page.includes(url)) {
      res.writeHead(h.ok, { [h.contentType]: media.html })
      return res.end(html)
    }
    if (url === service.bundle) {
      res.writeHead(current ? h.ok : h.noContent, { [h.contentType]: media.jsonUtf8 })
      return res.end(when(current, (c) => JSON.stringify(c)))
    }
    if (url === service.amend && request.method === h.post && compiled.amend) {
      const amend = compiled.amend
      const chunks: string[] = []
      request.on(node.data, (chunk) => void chunks.push(String(chunk)))
      request.on(node.end, () => {
        void (async () => {
          const answer = await amend(JSON.parse(concat(chunks)))
          res.writeHead(h.ok, { [h.contentType]: media.jsonUtf8 })
          res.end(JSON.stringify(answer))
        })().catch((e: unknown) => {
          res.writeHead(h.serverError, { [h.contentType]: media.jsonUtf8 })
          res.end(JSON.stringify({ refused: (e as Error).message, lines: [] }))
        })
      })
      return
    }
    if (url === service.events) {
      res.writeHead(h.ok, { [h.contentType]: media.eventStream, [h.cacheControl]: h.noCache, [h.connection]: h.keepAlive })
      res.write(ev.comment + say.devStream(program) + ev.endOfMessage)
      clients.add(res)
      request.on(node.close, () => clients.delete(res))
      return
    }
    res.writeHead(h.notFound).end()
  }) as never)
  await new Promise<void>((resolve) => started.listen(port, resolve))
  printing.line(say.listening(program, h.scheme + uri.schemeEnd + uri.authority + service.host + uri.portSeparator + port, dates.format(compiled.today)))

  // Saves close together compile once, after a pause; a single file changed is named by its path.
  let pending: ReturnType<typeof waiting.setTimeout> | undefined
  const changed = new Set<string>()
  const schedule = (what: string) => {
    changed.add(what)
    waiting.clearTimeout(pending)
    pending = waiting.setTimeout(() => {
      const list = [...changed]
      changed.clear()
      const [only] = list
      void recompile(single(list) ? only : say.filesChanged(list.length))
    }, deps.debounce)
  }
  const watched = compiled.watch(schedule)
  printing.line(say.watching(concat(deps.lists.conjunction(watched))))

  await recompile(say.startup())
  return { status: exit.success, body: [] }
}

export default body
