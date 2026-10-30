// Outil de portage (une fois) : réécrit un module de l'amorce en corps à paramètres.
// Les imports de valeurs deviennent des dépendances ; les types restent des imports de types.
// Le résultat est un premier jet, relu et corrigé à la main.

import ts from "typescript"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"

// Le portage est fait. Le moteur se modifie désormais dans le graphe (src/code) : relancer cet outil écraserait ces
// modifications par une nouvelle traduction de l'amorce. Il reste là pour montrer comment le premier jet a été obtenu.
if (!process.argv.includes("--ecraser-le-graphe")) {
  console.error("porter.ts : portage déjà fait, le moteur se modifie dans src/code. Relancer écraserait le graphe (--ecraser-le-graphe pour forcer).")
  process.exit(1)
}

const root = resolve(import.meta.dirname, "..")
type Mod = { src: string; out: string; param: string }
const mods: Record<string, Mod> = {
  graph: { src: "graph", out: "moteur/graphe", param: "graphe" },
  analyze: { src: "analyze", out: "moteur/analyse", param: "analyse" },
  "drivers/typescript": { src: "drivers/typescript", out: "moteur/driver-typescript", param: "driverTypeScript" },
  "drivers/hcl": { src: "drivers/hcl", out: "moteur/driver-hcl", param: "driverHcl" },
  "drivers/index": { src: "drivers/index", out: "moteur/drivers", param: "drivers" },
  runtime: { src: "runtime", out: "moteur/branchement", param: "branchement" },
  project: { src: "project", out: "moteur/projet", param: "projet" },
  compile: { src: "compile", out: "moteur/compilateur", param: "compilateur" },
  laws: { src: "laws", out: "moteur/lois", param: "lois" },
  views: { src: "views", out: "moteur/vues", param: "vues" },
  compilation: { src: "compilation", out: "moteur/api-compilation", param: "apiCompilation" },
  machine: { src: "machine", out: "moteur/machine", param: "machine" },
  lock: { src: "lock", out: "moteur/verrou", param: "verrou" },
  payload: { src: "payload", out: "moteur/charge", param: "charge" },
  bundle: { src: "bundle", out: "moteur/paquet", param: "paquet" },
  diff: { src: "diff", out: "moteur/differences", param: "differences" },
  "page/build": { src: "page/build", out: "moteur/page", param: "page" },
  dev: { src: "dev", out: "moteur/serveur-dev", param: "serveurDev" },
  assemble: { src: "assemble", out: "moteur/assemblage", param: "assemblage" },
  "render/common": { src: "render/common", out: "rendu/commun", param: "commun" },
  "render/markdown": { src: "render/markdown", out: "rendu/markdown", param: "markdown" },
  "render/text": { src: "render/text", out: "rendu/texte", param: "texte" },
}
const prelude = new Set(["internal"])
const kernelLike = new Set(["kernel", "format", "ir"])
const platform: Record<string, { param: string; type: string; split?: Record<string, { param: string; type: string }> }> = {
  "node:fs": { param: "lecture", type: "LectureFichiers", split: { writeFileSync: { param: "ecriture", type: "EcritureFichiers" }, mkdirSync: { param: "ecriture", type: "EcritureFichiers" } } },
  "node:path": { param: "chemins", type: "Chemins" },
  "node:url": { param: "urls", type: "Urls" },
  "node:crypto": { param: "empreinte", type: "Empreinte" },
  "node:http": { param: "http", type: "Http" },
  "node:child_process": { param: "processus", type: "Processus" },
  esbuild: { param: "empaqueteur", type: "Empaqueteur" },
  typescript: { param: "ts", type: "CompilateurTs" },
}

for (const [key, m] of Object.entries(mods)) {
  const srcFile = join(root, "trame", m.src + ".ts")
  const outFile = join(root, "src/code", m.out + ".ts")
  const text = readFileSync(srcFile, "utf8")
  const sf = ts.createSourceFile(srcFile, text, ts.ScriptTarget.ES2022, true)
  const relTo = (target: string) => {
    let r = relative(dirname(outFile), target).replace(/\\/g, "/")
    if (!r.startsWith(".")) r = "./" + r
    return r
  }
  const kernelPath = relTo(join(root, "trame/kernel"))
  const archPath = relTo(join(root, "src/architecture"))
  const headerImports: string[] = []
  const kernelValues = new Set<string>()
  const archTypes = new Set<string>()
  const deps = new Map<string, string>() // param -> type
  const destructure = new Map<string, Set<string>>() // source expr -> names
  const add = (expr: string, name: string) => destructure.set(expr, (destructure.get(expr) ?? new Set()).add(name))
  const top: string[] = []
  const inner: string[] = []
  const exported: string[] = []
  const leading = text.slice(0, sf.statements[0]?.getFullStart() ?? 0)
  const header = text.slice(0, sf.statements[0] ? sf.statements[0].getStart(sf) : 0).trim()

  for (const st of sf.statements) {
    const full = text.slice(st.getFullStart(), st.end)
    if (ts.isImportDeclaration(st)) {
      const spec = (st.moduleSpecifier as ts.StringLiteral).text
      const clause = st.importClause
      const typeOnly = !!clause?.isTypeOnly
      let local = spec.startsWith(".") ? join(dirname(m.src), spec).replace(/\\/g, "/").replace(/^\.\//, "") : undefined
      if (local === "drivers") local = "drivers/index"
      const named = clause?.namedBindings && ts.isNamedImports(clause.namedBindings) ? clause.namedBindings.elements : []
      const typeNames = named.filter((e) => typeOnly || e.isTypeOnly).map((e) => e.getText(sf).replace(/^type\s+/, ""))
      const valueNames = typeOnly ? [] : named.filter((e) => !e.isTypeOnly).map((e) => e.getText(sf))
      if (local && (prelude.has(local) || kernelLike.has(local))) {
        if (prelude.has(local)) {
          if (valueNames.length) { deps.set("prelude", "Prelude"); archTypes.add("Prelude"); for (const v of valueNames) add("deps.prelude.interne", v) }
          const classes = valueNames.filter((v) => /^[A-Z][a-z]/.test(v))
          if (classes.length) headerImports.push(`import type { ${classes.join(", ")} } from "#trame/interne"`)
          if (typeNames.length) headerImports.push(`import type { ${typeNames.join(", ")} } from "#trame/interne"`)
        } else {
          for (const v of valueNames) kernelValues.add(v)
          if (typeNames.length) headerImports.push(`import type { ${typeNames.join(", ")} } from ${JSON.stringify(kernelPath)}`)
        }
        continue
      }
      if (local && mods[local]) {
        const dep = mods[local]
        const depPath = relTo(join(root, "src/code", dep.out))
        if (valueNames.length) {
          const alias = dep.param.charAt(0).toUpperCase() + dep.param.slice(1) + "Api"
          headerImports.push(`import type { Api as ${alias} } from ${JSON.stringify(depPath)}`)
          deps.set(dep.param, alias)
          for (const v of valueNames) add(`deps.${dep.param}`, v)
        }
        if (typeNames.length) headerImports.push(`import type { ${typeNames.join(", ")} } from ${JSON.stringify(depPath)}`)
        continue
      }
      if (platform[spec]) {
        const p = platform[spec]
        if (clause?.name) {
          // import ts from "typescript" : la valeur devient un paramètre, le nom reste un espace de types
          deps.set(p.param, p.type); archTypes.add(p.type)
          headerImports.push(`import type ${clause.name.text} from ${JSON.stringify(spec)}`)
          add(`deps.${p.param}`, `__default__:${clause.name.text}`)
          continue
        }
        for (const v of valueNames) {
          const target = p.split?.[v.split(" as ")[0]] ?? p
          deps.set(target.param, target.type); archTypes.add(target.type)
          add(`deps.${target.param}`, v)
        }
        if (typeNames.length) headerImports.push(`import type { ${typeNames.join(", ")} } from ${JSON.stringify(spec)}`)
        continue
      }
      headerImports.push(`// À PORTER : ${st.getText(sf)}`)
      continue
    }
    if (ts.isInterfaceDeclaration(st) || ts.isTypeAliasDeclaration(st)) {
      top.push(full.replace(/^\n+/, "\n"))
      continue
    }
    if (ts.isExportDeclaration(st)) { top.push(`// À PORTER : ${st.getText(sf)}`); continue }
    // Valeurs : dans la fabrique, sans « export ».
    const mods_ = ts.canHaveModifiers(st) ? ts.getModifiers(st) ?? [] : []
    const isExported = mods_.some((x) => x.kind === ts.SyntaxKind.ExportKeyword)
    let body = full
    if (isExported) {
      const mod = mods_.find((x) => x.kind === ts.SyntaxKind.ExportKeyword)!
      const a = mod.getStart(sf) - st.getFullStart()
      const b = mod.end - st.getFullStart()
      body = body.slice(0, a) + body.slice(b).replace(/^\s+/, "")
      if (ts.isFunctionDeclaration(st) || ts.isClassDeclaration(st)) exported.push(st.name!.text)
      else if (ts.isVariableStatement(st)) for (const d of st.declarationList.declarations) if (ts.isIdentifier(d.name)) exported.push(d.name.text)
      else if (ts.isEnumDeclaration(st)) exported.push(st.name.text)
    }
    inner.push(body)
  }
  // Indenter sans toucher l'intérieur des gabarits (`…`) : leur texte est une valeur.
  const indent = (s: string) => {
    const f = ts.createSourceFile("x.ts", s, ts.ScriptTarget.ES2022, true)
    const raw = new Set<number>()
    const walk = (n: ts.Node) => {
      if (ts.isTemplateExpression(n) || ts.isNoSubstitutionTemplateLiteral(n)) {
        const a = f.getLineAndCharacterOfPosition(n.getStart(f)).line
        const b = f.getLineAndCharacterOfPosition(n.end).line
        for (let i = a + 1; i <= b; i++) raw.add(i)
      }
      ts.forEachChild(n, walk)
    }
    walk(f)
    return s.split("\n").map((l, i) => (l.length && !raw.has(i) ? "  " + l : l)).join("\n")
  }
  const destr = [...destructure].map(([expr, names]) => {
    const list = [...names].filter((n) => !n.startsWith("__default__:"))
    const defaults = [...names].filter((n) => n.startsWith("__default__:")).map((n) => n.slice(12))
    const lines: string[] = []
    if (list.length) lines.push(`const { ${list.map((n) => n.replace(" as ", ": ")).join(", ")} } = ${expr}`)
    for (const d of defaults) lines.push(`const ${d} = ${expr}`)
    return lines.join("\n")
  })
  const depLines = [...deps].map(([p, t]) => `  ${p}: ${t}`)
  const out = [
    header,
    "",
    ...(kernelValues.size ? [`import { ${[...kernelValues].join(", ")} } from ${JSON.stringify(kernelPath)}`] : []),
    ...(archTypes.size ? [`import type { ${[...archTypes].sort().join(", ")} } from ${JSON.stringify(archPath)}`] : []),
    ...headerImports,
    ...top,
    "",
    `export interface Deps {`,
    ...depLines,
    `}`,
    "",
    `const corps = (deps: Deps) => {`,
    ...destr.map((d) => indent(d)),
    indent(inner.join("").replace(/^\n+/, "\n")),
    "",
    `  return { ${exported.join(", ")} }`,
    `}`,
    "",
    `export type Api = ReturnType<typeof corps>`,
    `export default corps`,
    "",
  ].join("\n")
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, out)
  console.log(`${key} → src/code/${m.out}.ts · dépendances : ${[...deps.keys()].join(", ") || "aucune"}`)
}
