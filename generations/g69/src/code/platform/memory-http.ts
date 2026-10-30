// A server in memory: trame dev starts it as it would a server of Node.js, and a scenario asks it for a path as a
// browser would, reading the status, the headers and what was written (a stream of events stays open until the client
// goes away). Nothing listens on the network.

import type { BodyOf } from "../../../trame/kernel"
import type { MemoryHttpServer } from "../../platform"

type Handler = (req: unknown, res: unknown) => void

const body: BodyOf<typeof MemoryHttpServer> = ({ events, texts, messages }) => {
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
    request: (url) => {
      if (!handler) throw new Error(messages.noServerInTest(url))
      const chunks: string[] = []
      const closing: (() => void)[] = []
      const seen = { status: Number.NaN, headers: {} as Record<string, string>, body: () => texts.concat(chunks), close: () => closing.forEach((f) => f()) }
      const res = {
        writeHead: (status: number, headers?: Record<string, string>) => {
          seen.status = status
          seen.headers = { ...headers }
          return res
        },
        write: (chunk: string) => void chunks.push(String(chunk)),
        end: (chunk?: string) => {
          if (chunk !== undefined) chunks.push(String(chunk))
          return res
        },
      }
      const req = { url, on: (event: string, f: () => void) => void (event === events.close && closing.push(f)) }
      handler(req, res)
      return seen
    },
    ports: () => [...ports],
  }
}

export default body
