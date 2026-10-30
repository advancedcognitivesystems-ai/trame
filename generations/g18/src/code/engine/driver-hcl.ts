// HCL driver (Terraform): a module is already a function. Its variables are its parameters.
// Each provisioning dependency must be a variable of the module, and each variable a dependency.
// This driver does not run Terraform: it checks the contract and writes the call of the module, with the values of the graph.

import { Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, Paths, Prelude } from "../../architecture"
import type { Dates, DriverMessages } from "../../messages"
import type { Driver } from "./drivers"

export interface Deps {
  reading: FileReading
  paths: Paths
  prelude: Prelude
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = (deps: Deps) => {
  const { readFileSync, existsSync, statSync } = deps.reading
  const { join, relative } = deps.paths
  const { meta, refOf } = deps.prelude.internal
  const { dates, messages } = deps

  const moduleFile = (path: string) => (existsSync(path) && statSync(path).isDirectory() ? join(path, "main.tf") : path)

  function variablesOf(path: string): string[] {
    const text = readFileSync(moduleFile(path), "utf8")
    return [...text.matchAll(/^\s*variable\s+"(?<name>[^"]+)"/gm)].map((m) => m.groups!.name)
  }

  function outputsOf(path: string): string[] {
    const text = readFileSync(moduleFile(path), "utf8")
    return [...text.matchAll(/^\s*output\s+"(?<name>[^"]+)"/gm)].map((m) => m.groups!.name)
  }

  /** A value of the graph, written in HCL. */
  function hclValue(v: unknown): string {
    if (typeof v === "string") return JSON.stringify(v)
    if (typeof v === "number" || typeof v === "boolean") return String(v)
    if (Array.isArray(v)) return `[${v.map(hclValue).join(", ")}]`
    if (v && typeof v === "object") return `{ ${Object.entries(v).map(([k, x]) => `${k} = ${hclValue(x)}`).join(", ")} }`
    return "null"
  }

  const hcl: Driver = {
    language: "hcl",
    extensions: [".tf"],
    check(file, ctx) {
      if (!existsSync(moduleFile(file))) return [{ severity: Severity.error, what: messages.moduleNotFound(relative(ctx.root, file)) }]
      const vars = variablesOf(file)
      return [
        ...ctx.deps.filter((d) => !vars.includes(d)).map((d) => ({ severity: Severity.error, what: messages.undeclaredVariable(d) })),
        ...vars.filter((v) => !ctx.deps.includes(v)).map((v) => ({ severity: Severity.warning, what: messages.unusedVariable(v) })),
      ]
    },

    emitProvision(a, items) {
      const g = a.host.graph
      const dir = join(a.out, "provision")
      const blocks = items.map((p) => {
        const width = Math.max(6, ...p.variables.map((v) => v.name.length))
        const pad = (s: string) => s + " ".repeat(width - s.length)
        const source = relative(dir, p.module).replace(/\\/g, "/")
        return [
          `# ${messages.provisionedModule(g.view(p.node).title, refOf(p.node))}`,
          `module "${(meta(p.node).id ?? "module").replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()}" {`,
          `  ${pad("source")} = ${JSON.stringify(source)}`,
          ...p.variables.map((v) => `  ${pad(v.name)} = ${hclValue(v.value)} # ${refOf(v.from)}`),
          `}`,
        ].join("\n")
      })
      const head = `# ${messages.generatedBy(a.command, dates.format(a.host.today))}\n# ${messages.provisionValues()}\n`
      return [{ path: join(dir, "main.tf"), content: `${head}\n${blocks.join("\n\n")}\n` }]
    },
  }

  return { variablesOf, outputsOf, hclValue, hcl }
}

export type Api = ReturnType<typeof body>
export default body
