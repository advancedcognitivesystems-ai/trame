// The TypeScript writer: the program of an assembled component, always frozen. It imports only the bodies, the tooling of
// the prelude and the declarations it must read (inline bodies, rules, the component); the values are written in it.

import { WireMode } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Paths, Prelude } from "../../architecture"
import type { Dates, DriverMessages } from "../../messages"
import type { Texts } from "../../algebra"
import type { Assembly, Emitted } from "../engine/assembly"

export interface Deps {
  paths: Paths
  prelude: Prelude
  /** The words a module cannot use as the name of a variable. */
  reservedWords: readonly string[]
  texts: ProvidedBy<typeof Texts>
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = (deps: Deps) => {
  const { dates, messages } = deps
  const { empty, when } = deps.texts
  const { join, relative } = deps.paths
  const { meta, refOf } = deps.prelude.internal

  /** The parameters of a body in the program: its constants, written as they are, then its dependencies. */
  const argsOf = (step: Assembly["plan"]["steps"][number], ident: (name: string) => string): string => [
    ...Object.entries(step.constants ?? {}).map(([k, v]) => `${/^[\p{L}_$][\p{L}\d_$]*$/u.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(v)}`),
    ...step.deps.map((d) => (d.param === ident(d.name) ? d.param : `${d.param}: ${ident(d.name)}`)),
  ].join(", ")

  /** The names the program itself declares or reads (the lines `emitProgram` writes): no step may take them. */
  const programNames = ["frozen", "started", "process", "console"]

  /**
   * The program of an assembled component, always frozen: it imports only the bodies, the tooling of the prelude and
   * the declarations it must read (inline bodies, rules, the component). It does not compile the graph: the values are
   * written in it.
   */
  function emitProgram(a: Assembly, name: string): Emitted[] {
    const g = a.host.graph
    type N = Parameters<typeof refOf>[0]
    const title = (n: N) => g.view(n).title
    const rel = (to: string) => {
      const r = relative(a.out, to).replace(/\\/g, "/")
      return r.startsWith(".") ? r : `./${r}`
    }
    const bodyImports: string[] = []
    const declarations = new Map<string, Set<string>>()
    const declare = (n: N): string => {
      const file = g.view(n).decl?.file
      const id = meta(n).id
      if (!file || !id) throw new Error(messages.declarationNotFound(title(n)))
      const abs = join(a.host.root, file)
      declarations.set(abs, (declarations.get(abs) ?? new Set()).add(id))
      return id
    }
    // Each step becomes a variable. A step named like a reserved word or like a name of the program takes its module
    // as a prefix, as two steps with the same name do in the plan.
    const unavailable = new Set([...deps.reservedWords, ...programNames])
    const idents = new Map(a.plan.steps.map((s) => [s.name, unavailable.has(s.name) ? `${meta(s.node).module}_${s.name}` : s.name]))
    const ident = (name: string) => idents.get(name) ?? name
    const steps: string[] = []
    for (const step of a.plan.steps) {
      const kind = meta(step.node).def.label.one.toLowerCase()
      steps.push(`// ${messages.stepComment(title(step.node), kind, step.via.map(title))}`)
      if (step.how === WireMode.value) {
        const f = a.frozenValues.get(step.node)!
        steps.push("json" in f ? `const ${ident(step.name)} = ${f.json}` : `const ${ident(step.name)} = frozen.value(${declare(step.node)})`)
        continue
      }
      const args = argsOf(step, ident)
      const call = `({${when(args, (a) => ` ${a} `)}})`
      const src = a.bodies.get(step.node)!
      if ("file" in src) {
        bodyImports.push(`import body_${step.name} from ${JSON.stringify(rel(src.file))}`)
        steps.push(`const ${ident(step.name)} = await body_${step.name}${call}`)
      } else {
        steps.push(`const ${ident(step.name)} = await frozen.body(${declare(step.node)})${call}`)
      }
    }
    const frozenData = [...(a.frozenData ?? [])].map(([n, json]) => `frozen.data(${declare(n)}, ${JSON.stringify(refOf(n))}, ${json})`)
    const nameOf = (n: N) => ident(a.plan.names.get(n)!)
    const comp = declare(a.component)
    const componentDeps = a.componentDeps.map((d) => (d.param === nameOf(d.node) ? d.param : `${d.param}: ${nameOf(d.node)}`)).join(", ")
    const date = dates.format(a.host.today)
    /** An empty line of the program, between its parts. */
    const blankLine = empty
    const lines = [
      `// ${messages.generatedBy(a.command, date)}`,
      `// ${messages.componentInEnvironment(title(a.component), title(a.env))}`,
      `// ${messages.frozenProgram()}`,
      `// ${messages.notCompiledAtStartup(a.changes ?? [])}`,
      blankLine,
      `import { frozen } from ${JSON.stringify(rel(a.prelude))}`,
      ...[...declarations].sort(([x], [y]) => x.localeCompare(y)).map(([file, ids]) => `import { ${[...ids].sort().join(", ")} } from ${JSON.stringify(rel(file))}`),
      ...bodyImports,
      blankLine,
      ...(frozenData.length ? [`// ${messages.whatRulesRead(date)}`, ...frozenData, blankLine] : []),
      ...steps,
      blankLine,
      `const started = (await frozen.start(${comp}, { ${componentDeps} }, [`,
      ...a.entries.map((e) => `  { title: ${JSON.stringify(title(e))}, fields: ${JSON.stringify(a.entryFields.get(e) ?? {})}, value: ${nameOf(e)} },`),
      `])) as { address?: string; code?: number } | undefined`,
      `if (started?.address) console.log(${JSON.stringify(messages.programStarted(title(a.component), title(a.env)))}, started.address)`,
      `if (started?.code !== undefined) process.exitCode = started.code`,
      blankLine,
    ]
    return [{ path: join(a.out, `${name}.ts`), content: lines.join("\n") }]
  }

  return { emitProgram }
}

export type Api = ReturnType<typeof body>
export default body
