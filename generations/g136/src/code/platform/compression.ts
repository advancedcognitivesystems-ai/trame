// gzip, with Node's zlib: the graph of a page, compressed, in the encoding the decision "A page carries its graph
// compressed" names, for the page to carry as a string and the browser to decompress.

import { gzipSync } from "node:zlib"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeCompression } from "../../platform"

const body: BodyOf<typeof NodeCompression> = ({ packing }) => ({
  pack: (text) => gzipSync(text).toString(packing.encoding),
})

export default body
