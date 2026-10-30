// tree-sitter, in WebAssembly: a text parsed with a grammar, and what queries catch in it, given back as records.
// The trees live in WebAssembly memory: they are freed before the records leave. A query is compiled once per grammar.
// Offsets and columns count UTF-16 code units, as JavaScript's strings do.

import { Parser, Language, Query, type Node as SyntaxNode, type Point } from "web-tree-sitter"
import { createRequire } from "node:module"
import type { BodyOf } from "../../../trame/kernel"
import type { WebTreeSitter } from "../../platform"
import type { SyntaxCapture, SyntaxPoint } from "../../architecture"

const body: BodyOf<typeof WebTreeSitter> = async ({ messages }) => {
  await Parser.init()
  const resolve = createRequire(import.meta.url).resolve
  const languages = new Map<string, Language>()
  const compiled = new Map<Language, Map<string, Query>>()

  const languageOf = (module: string) => {
    const language = languages.get(module)
    if (!language) throw new Error(messages.grammarNotLoaded(module))
    return language
  }
  const queryOf = (language: Language, source: string) => {
    const mine = compiled.get(language) ?? new Map<string, Query>()
    compiled.set(language, mine)
    const query = mine.get(source) ?? new Query(language, source)
    mine.set(source, query)
    return query
  }
  const point = (p: Point, offset: number): SyntaxPoint => ({ row: p.row, column: p.column, offset })
  const record = (name: string, node: SyntaxNode, match: number): SyntaxCapture => ({
    name, type: node.type, text: node.text, start: point(node.startPosition, node.startIndex), end: point(node.endPosition, node.endIndex), match,
  })
  /** The places where the text does not follow the grammar: the nodes in error, and the missing ones. */
  const errorsIn = (node: SyntaxNode, out: SyntaxPoint[]): SyntaxPoint[] => {
    if (node.isError || node.isMissing) out.push(point(node.startPosition, node.startIndex))
    else if (node.hasError) for (const child of node.children) if (child) errorsIn(child, out)
    return out
  }

  return {
    async load(grammar) {
      if (!languages.has(grammar.module)) languages.set(grammar.module, await Language.load(resolve(grammar.module)))
    },
    read(grammar, text, queries) {
      const parser = new Parser()
      parser.setLanguage(languageOf(grammar.module))
      const tree = parser.parse(text)
      if (!tree) {
        parser.delete()
        throw new Error(messages.notParsed(grammar.module))
      }
      try {
        const matches = queries.flatMap((source) => queryOf(tree.language, source).matches(tree.rootNode))
        const captures = matches.flatMap((m, match) => m.captures.map(({ name, node }) => record(name, node, match)))
        return { captures, errors: errorsIn(tree.rootNode, []) }
      } finally {
        tree.delete()
        parser.delete()
      }
    },
  }
}

export default body
