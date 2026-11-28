// The feed of the graph, in a browser: the globals the page's scripts assign before its program (the graph an exported
// page carries, the mode of trame dev), and in trame dev the last graph and the stream of compilations.

import type { BodyOf, Bundle } from "../../../trame/kernel"
import type { BrowserFeed } from "../../browser"

const body: BodyOf<typeof BrowserFeed> = ({ page, service, values }) => {
  const globals = window as unknown as Record<string, unknown>
  return {
    packed: () => {
      const packed = globals[page.globals.packedBundle]
      return values.isText(packed) ? packed : undefined
    },
    live: () => globals[page.globals.dev] === true,
    follow: (on) => {
      fetch(service.bundle).then((r) => (r.ok ? r.json() : undefined)).then((b: Bundle | undefined) => b && on.bundle(b)).catch(() => undefined)
      const stream = new EventSource(service.events)
      stream.addEventListener(service.compiling, () => on.compiling())
      stream.addEventListener(service.ready, (e) => on.bundle(JSON.parse((e as MessageEvent).data) as Bundle))
    },
  }
}

export default body
