// The Terraform writer: the call of each provisioned module, with the values of the graph. Every construct comes from a
// syntax element of the module terraform. Besides the text, it says which values it wrote, in the order of the text,
// so that they can be read back.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Layout, Paths, Prelude } from "../../architecture"
import type { Dates, DriverMessages } from "../../messages"
import type { Counts, Sequences, Texts } from "../../algebra"
import type { NodeModuleSpecifiers } from "../../standards"
import type { HclSyntax, TerraformModules, HclComment, HclString, HclValue, HclAttribute, ModuleBlock } from "../../terraform"
import type { Assembly, Emitted, Provision } from "../engine/assembly"

export interface Deps {
  syntax: ProvidedBy<typeof HclSyntax>
  modules: ProvidedBy<typeof TerraformModules>
  layout: Layout
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  comment: ProvidedBy<typeof HclComment>
  text: ProvidedBy<typeof HclString>
  value: ProvidedBy<typeof HclValue>
  attribute: ProvidedBy<typeof HclAttribute>
  block: ProvidedBy<typeof ModuleBlock>
  paths: Paths
  prelude: Prelude
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = ({ syntax, modules, layout, specifiers, comment, text, value, attribute, block, paths, prelude, counts, sequences, texts, dates, messages }: Deps) => {
  const { join, relative, sep } = paths
  const { meta, refOf } = prelude.internal

  /** Where a module is, from the file that calls it: a local path, with the separator of specifiers. */
  const sourceOf = (from: string, to: string) => {
    const path = relative(from, to).split(sep).join(specifiers.separator)
    return path.startsWith(specifiers.current) || path.startsWith(specifiers.parent) ? path : specifiers.current + path
  }

  function emitProvision(a: Assembly, items: Provision[]): Emitted[] {
    const g = a.host.graph
    const dir = join(a.out, layout.provision)
    const values: unknown[] = []
    const blocks = items.map((p) => {
      const width = counts.largest([modules.source.length, ...p.variables.map((v) => v.name.length)])
      const source = sourceOf(dir, p.module)
      values.push(source, ...p.variables.map((v) => v.value))
      return [
        comment(messages.provisionedModule(g.view(p.node).title, refOf(p.node))),
        block(meta(p.node).id ?? modules.module, [
          attribute(modules.source, text(source), width),
          ...p.variables.map((v) => attribute(v.name, value(v.value), width) + syntax.space + comment(refOf(v.from))),
        ]),
      ].join(syntax.endOfLine)
    })
    /** An empty line of the file, between its parts. */
    const blankLine = texts.empty
    const lines = [
      comment(messages.generatedBy(a.command, dates.format(a.host.today))),
      comment(messages.provisionValues()),
      blankLine,
      ...blocks.flatMap((b, i) => (sequences.isFirst(i) ? [b] : [blankLine, b])),
      blankLine,
    ]
    return [{ path: join(dir, modules.main), content: lines.join(syntax.endOfLine), values }]
  }

  return { emitProvision }
}

export type Api = ReturnType<typeof body>
export default body
