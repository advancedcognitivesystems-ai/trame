// An example's output written again where its declaration has it: the element's declaration (a constant initialized by
// a call), the n-th object of its examples, its property output. A text is written as JSON; an output written as lines
// joined (an array, then the call that joins it) keeps that form, its lines split by what the call joins them with, at
// the indentation its elements had. Nothing when the declaration is not found.

import { SyntaxField } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { TypeScriptCompiler } from "../../architecture"
import type { Expression, Node, PropertyAssignment, SourceFile } from "typescript"
import type { TextFile } from "#std/text"
import type { Sequences, Texts, ValueTypes } from "#std/algebra"
import type { TypeScriptSyntax } from "../../typescript"

export interface Deps {
  ts: TypeScriptCompiler
  file: ProvidedBy<typeof TextFile>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  syntax: ProvidedBy<typeof TypeScriptSyntax>
  values: ProvidedBy<typeof ValueTypes>
}

const body = ({ ts, file, sequences, texts, syntax, values }: Deps) => {
  /** The whitespace that opens the line a position is on. */
  const indentOf = (text: string, at: number) => {
    const opened = text.lastIndexOf(file.endOfLine, at) + file.endOfLine.length
    const line = text.slice(opened, at)
    return texts.without(line, line.trimStart())
  }

  /** The property of an object literal by its name. */
  const property = (o: Node | undefined, name: string, source: SourceFile) =>
    o && ts.isObjectLiteralExpression(o)
      ? o.properties.find((p): p is PropertyAssignment => ts.isPropertyAssignment(p) && p.name.getText(source) === name)?.initializer
      : undefined

  return {
    rewrite(text: string, name: string, index: number, output: unknown): string | undefined {
      const source = ts.createSourceFile(name, text, ts.ScriptTarget.Latest, true)
      let found: Expression | undefined
      const visit = (node: Node): void => {
        if (found) return
        if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name && node.initializer && ts.isCallExpression(node.initializer)) {
          const [described] = node.initializer.arguments
          const examples = property(described, SyntaxField.examples, source)
          const example = examples && ts.isArrayLiteralExpression(examples) ? examples.elements[index] : undefined
          found = property(example, SyntaxField.output, source)
          return
        }
        ts.forEachChild(node, visit)
      }
      visit(source)
      if (!found) return undefined
      const replace = (node: Node, by: string) => texts.concat([sequences.take(text, node.getStart(source)), by, text.slice(node.getEnd())])
      // Lines joined: the elements of the array are written again, each on its line; the call that joins them is kept.
      if (ts.isCallExpression(found) && ts.isPropertyAccessExpression(found.expression) && ts.isArrayLiteralExpression(found.expression.expression) && values.isText(output)) {
        const array = found.expression.expression
        const [joint] = found.arguments
        if (!joint || !ts.isStringLiteral(joint)) return undefined
        const [first] = array.elements
        const inner = indentOf(text, first ? first.getStart(source) : array.getStart(source))
        const lines = output.split(joint.text).map((l) => texts.concat([file.endOfLine, inner, JSON.stringify(l), syntax.comma]))
        return texts.concat([sequences.take(text, array.elements.pos), ...lines, text.slice(array.elements.end)])
      }
      return replace(found, JSON.stringify(output))
    },
  }
}

export type Api = ReturnType<typeof body>
export default body
