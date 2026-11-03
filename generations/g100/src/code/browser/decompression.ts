// Decompression, in a browser: the graph a page carries, from base64 to bytes, then through the browser's own gzip.

import type { BodyOf } from "../../../trame/kernel"
import type { BrowserDecompression } from "../../browser"

const body: BodyOf<typeof BrowserDecompression> = ({ packing, ecma }) => ({
  unpack: (packed) => {
    const bytes = Uint8Array.from(atob(packed), (c) => c.charCodeAt(ecma.firstIndex))
    return new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream(packing.format))).text()
  },
})

export default body
