// Amendments in place: an amendment written in the sources, at the end of the module of the node it amends, as a
// person would write it; the import of amendments added when the module lacks it.

import { AmendmentField, type BodyOf } from "../../../trame/kernel"
import type { InPlaceSources } from "../../platform"

const body: BodyOf<typeof InPlaceSources> = ({ reading, writing, encodings, syntax, doc, exported, constant, call, object, property, text, list, imports, values, texts, counts }) => {
  const { endOfLine, importKeyword } = syntax
  /** A value as the code writes it: a text quoted, a list, an object, a number or a truth as it is. */
  const written = (v: unknown): string =>
    Array.isArray(v) ? list(v.map(written))
    : values.isText(v) ? text(v)
    : v !== null && values.isObject(v) ? object(Object.entries(v).map(([k, x]) => property(k, written(x))))
    : String(v)
  return {
    record(a) {
      const before = String(reading.readFileSync(a.file, encodings.utf8))
      const lines = before.split(endOfLine)
      // The module imports amendments once: a line of its own when none of its imports names the facade.
      const spec = text(a.kind)
      const imported = lines.some((l) => l.startsWith(importKeyword) && l.includes(spec) && l.includes(AmendmentField.facade))
      const afterImports = lines.reduce<number>((at, l, i) => (l.startsWith(importKeyword) ? counts.next(i) : at), counts.zero)
      const head = imported ? lines : [...lines.slice(counts.zero, afterImports), imports([AmendmentField.facade], a.kind), ...lines.slice(afterImports)]
      const meta = object([
        property(AmendmentField.owner, text(a.owner)),
        property(AmendmentField.why, text(a.why)),
        property(AmendmentField.from, text(a.from)),
        ...(a.until === undefined ? [] : [property(AmendmentField.until, text(a.until))]),
      ])
      const declaration = exported(constant(a.name, call(AmendmentField.facade, [a.target, written(a.patch), meta])))
      const body = texts.concat(head).trimEnd() === texts.empty ? texts.empty : head.join(endOfLine).trimEnd()
      writing.writeFileSync(a.file, [body, texts.empty, doc([a.why]), declaration, texts.empty].join(endOfLine))
      return { file: a.file }
    },
  }
}

export default body
