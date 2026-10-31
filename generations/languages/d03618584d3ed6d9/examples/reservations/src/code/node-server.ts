// A minimal HTTP server: one route per entry point, path parameters, a JSON body.
// A value still to be decided in the graph gives 503: the service refuses to compute with it.

import { createServer } from "node:http"
import { Hole, TriggerType, type BodyOf } from "../../../../trame/kernel"
import type { NodeServer } from "../infra"

const body: BodyOf<typeof NodeServer> = ({ port, http, mediaTypes, uri, routes, ending, messages }) => ({
  serve(entries) {
    const segments = (path: string) => path.split(routes.separator)
    const table = entries.flatMap((r) => (r.trigger.type === TriggerType.http ? [{ ...r, method: r.trigger.method, segments: segments(r.trigger.path) }] : []))

    /** The parameters of a path, when it is the path of the route: a parameter takes its segment, any other segment must be equal. */
    const match = (route: string[], path: string[]): Record<string, string> | undefined => {
      if (route.length !== path.length) return undefined
      const params: Record<string, string> = {}
      for (const [i, segment] of route.entries()) {
        if (!segment.startsWith(routes.parameter)) {
          if (segment !== path[i]) return undefined
        } else if (path[i]) params[segment.slice(routes.parameter.length)] = decodeURIComponent(path[i])
        else return undefined
      }
      return params
    }

    const server = createServer(async (req, res) => {
      const send = (status: number, payload: unknown) => {
        res.writeHead(status, { [http.contentType]: mediaTypes.jsonUtf8 })
        res.end(JSON.stringify(payload) + ending)
      }
      const [path] = (req.url ?? routes.separator).split(uri.query)
      const requested = segments(path)
      const found = table.map((route) => ({ route, params: route.method === req.method ? match(route.segments, requested) : undefined })).find((x) => x.params)
      if (!found?.params) return send(http.notFound, { error: messages.noRoute() })
      const chunks: Buffer[] = []
      for await (const chunk of req) chunks.push(chunk as Buffer)
      const text = Buffer.concat(chunks).toString()
      try {
        const r = await found.route.handler({ params: found.params, body: text ? JSON.parse(text) : undefined })
        send(r.status ?? http.ok, r.body)
      } catch (e) {
        if (e instanceof Hole) send(http.unavailable, { error: messages.undecidedValue(e.label) })
        else send(http.serverError, { error: (e as Error).message })
      }
    })
    const address = http.scheme + uri.schemeEnd + uri.authority + uri.localhost + uri.portSeparator + String(port)
    return new Promise((ok) =>
      server.listen(port, () => ok({ address, stop: () => new Promise<void>((done) => server.close(() => done())) })))
  },
})

export default body
