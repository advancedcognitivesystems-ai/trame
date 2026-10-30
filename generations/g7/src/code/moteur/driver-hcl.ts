// Driver HCL (Terraform) : un module est déjà une fonction. Ses variables sont ses paramètres.
// Chaque dépendance de provisionnement doit être une variable du module, et chaque variable une dépendance.
// Ce driver ne lance pas Terraform : il vérifie le contrat et écrit l'appel du module, avec les valeurs du graphe.

import type { Chemins, LectureFichiers, Prelude } from "../../architecture"
import type { Driver } from "./drivers"

export interface Deps {
  lecture: LectureFichiers
  chemins: Chemins
  prelude: Prelude
}

const corps = (deps: Deps) => {
  const { readFileSync, existsSync, statSync } = deps.lecture
  const { join, relative } = deps.chemins
  const { meta, refOf } = deps.prelude.interne

  const moduleFile = (path: string) => (existsSync(path) && statSync(path).isDirectory() ? join(path, "main.tf") : path)

  function variablesOf(path: string): string[] {
    const text = readFileSync(moduleFile(path), "utf8")
    return [...text.matchAll(/^\s*variable\s+"([^"]+)"/gm)].map((m) => m[1])
  }

  function outputsOf(path: string): string[] {
    const text = readFileSync(moduleFile(path), "utf8")
    return [...text.matchAll(/^\s*output\s+"([^"]+)"/gm)].map((m) => m[1])
  }

  /** Une valeur du graphe écrite en HCL. */
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
      if (!existsSync(moduleFile(file))) return [{ severity: "erreur", what: `Module introuvable : ${file.replace(ctx.root + "/", "")}` }]
      const vars = variablesOf(file)
      return [
        ...ctx.deps.filter((d) => !vars.includes(d)).map((d) => ({ severity: "erreur" as const, what: `Le module ne déclare pas la variable « ${d} », que le graphe lui passe` })),
        ...vars.filter((v) => !ctx.deps.includes(v)).map((v) => ({ severity: "avertissement" as const, what: `La variable « ${v} » du module ne reçoit rien du graphe` })),
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
          `# « ${g.view(p.node).title} » (${refOf(p.node)})`,
          `module "${(meta(p.node).id ?? "module").replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()}" {`,
          `  ${pad("source")} = ${JSON.stringify(source)}`,
          ...p.variables.map((v) => `  ${pad(v.name)} = ${hclValue(v.value)} # ${refOf(v.from)}`),
          `}`,
        ].join("\n")
      })
      const head = `# Généré par \`${a.command}\` (graphe du ${a.host.today}). Ne pas modifier : modifiez le graphe.\n# Les valeurs viennent des décisions du graphe ; chaque module est déclaré par une implémentation.\n`
      return [{ path: join(dir, "main.tf"), content: `${head}\n${blocks.join("\n\n")}\n` }]
    },
  }

  return { variablesOf, outputsOf, hclValue, hcl }
}

export type Api = ReturnType<typeof corps>
export default corps
