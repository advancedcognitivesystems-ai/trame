// A server in memory: a command starts it as it would a server of Node.js, and a scenario asks it for a path as a
// browser would, reading the status, the headers and what was written (a stream of events stays open until the client
// goes away). Nothing listens on the network.

import type { ProvidedBy } from "#trame/kernel"
import type { HttpServer, ServerAsked, RunningWords } from "../../running"
import type { NodeEvents } from "../../system"
import type { Http } from "../../web"
import type { Texts } from "../../algebra"

type Handler = (req: unknown, res: unknown) => void

export interface Deps {
  events: ProvidedBy<typeof NodeEvents>
  http: ProvidedBy<typeof Http>
  texts: ProvidedBy<typeof Texts>
  say: ProvidedBy<typeof RunningWords>
}

const body = ({ events, http, texts, say }: Deps): HttpServer & ServerAsked => {
  let handler: Handler | undefined
  const ports: number[] = []
  return {
    createServer: ((h: Handler) => {
      handler = h
      const server = {
        listen: (port: number, ready?: () => void) => {
          ports.push(port)
          ready?.()
          return server
        },
        close: () => server,
      }
      return server
    }) as never,
    request: (url: string, posted?: string) => {
      if (!handler) throw new Error(say.noServer(url))
      const chunks: string[] = []
      const closing: (() => void)[] = []
      let ended: () => void = () => undefined
      const done = new Promise<void>((resolve) => (ended = resolve))
      const seen = {
        status: Number.NaN, headers: {} as Record<string, string>, body: () => texts.concat(chunks), close: () => closing.forEach((f) => f()),
        ended: () => done,
      }
      const res = {
        writeHead: (status: number, headers?: Record<string, string>) => {
          seen.status = status
          seen.headers = { ...headers }
          return res
        },
        write: (chunk: string) => void chunks.push(String(chunk)),
        end: (chunk?: string) => {
          if (chunk !== undefined) chunks.push(String(chunk))
          ended()
          return res
        },
      }
      // A text posted comes as one chunk, then its end, once the handler listens.
      const listened: Record<string, (chunk?: string) => void> = {}
      const req = {
        url, method: posted === undefined ? undefined : http.post,
        on: (event: string, f: (chunk?: string) => void) => {
          if (event === events.close) closing.push(f)
          else listened[event] = f
        },
      }
      handler(req, res)
      if (posted !== undefined) {
        listened[events.data]?.(posted)
        listened[events.end]?.()
      }
      return seen
    },
    ports: () => [...ports],
  }
}

export default body
