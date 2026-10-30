// Driver TypeScript : un corps ne reçoit le monde que par ses paramètres.
// Seuls les imports de types sont libres. L'API du noyau est permise. Les modules de la plateforme (node:…, paquets)
// et les globales qui touchent le monde (fetch, process, l'heure, le hasard…) sont réservés aux types qui peuvent
// toucher la plateforme (les implémentations). Importer un autre module du graphe en valeur serait une dépendance cachée.
// La même vérification vaut pour un corps en ligne et pour un corps dans un fichier.

import ts from "typescript"
import { readFileSync, existsSync } from "node:fs"
import { pathToFileURL } from "node:url"
import { join, relative, dirname } from "node:path"
import type { CheckContext, Driver, DriverIssue } from "./index"
import type { Assembly, Emitted } from "../assemble"
import { meta, refOf } from "../internal"

/** Les globales qui touchent le monde. Lecture du texte, sans résolution de types : une approximation. */
const WORLD = new Set(["fetch", "process", "require", "globalThis", "setTimeout", "setInterval", "setImmediate", "crypto", "performance", "XMLHttpRequest", "WebSocket", "localStorage"])

function checkTree(sf: ts.SourceFile, ctx: CheckContext): DriverIssue[] {
  const out: DriverIssue[] = []
  const platform = (what: string) => {
    if (!ctx.ambient) out.push({ severity: "erreur", what: `Accès à la plateforme (« ${what} ») : réservé aux implémentations ; passez par un accès` })
  }
  const checkSpec = (spec: string, typeOnly: boolean) => {
    if (typeOnly) return
    const s = spec.replace(/\.(ts|js)$/, "")
    if (s.endsWith("/trame/kernel")) return
    if (s.startsWith(".")) out.push({ severity: "erreur", what: `Dépendance cachée : le corps importe « ${spec} » ; déclarez-la comme paramètre` })
    else platform(spec)
  }
  // Les noms déclarés dans le corps lui-même (un paramètre nommé « process » n'est pas la globale).
  const declared = new Set<string>()
  const collect = (n: ts.Node) => {
    if ((ts.isVariableDeclaration(n) || ts.isParameter(n) || ts.isFunctionDeclaration(n) || ts.isBindingElement(n)) && n.name && ts.isIdentifier(n.name)) declared.add(n.name.text)
    ts.forEachChild(n, collect)
  }
  collect(sf)
  const seen = new Set<string>()
  const world = (what: string) => {
    if (seen.has(what)) return
    seen.add(what)
    platform(what)
  }
  const visit = (n: ts.Node) => {
    if (ts.isImportDeclaration(n) && ts.isStringLiteral(n.moduleSpecifier)) {
      const clause = n.importClause
      const typeOnly = !!clause?.isTypeOnly ||
        (!!clause && !clause.name && !!clause.namedBindings && ts.isNamedImports(clause.namedBindings) &&
          clause.namedBindings.elements.length > 0 && clause.namedBindings.elements.every((e) => e.isTypeOnly))
      checkSpec(n.moduleSpecifier.text, typeOnly)
    } else if (ts.isCallExpression(n) && n.expression.kind === ts.SyntaxKind.ImportKeyword) {
      // Un chargement dont le chemin est calculé échappe à toute lecture : réservé aux implémentations.
      if (n.arguments[0] && ts.isStringLiteral(n.arguments[0])) checkSpec(n.arguments[0].text, false)
      else world("import() d'un chemin calculé")
    } else if (ts.isIdentifier(n) && WORLD.has(n.text) && !declared.has(n.text)) {
      const p = n.parent
      const isName = (ts.isPropertyAccessExpression(p) && p.name === n) || (ts.isPropertyAssignment(p) && p.name === n) || ts.isImportSpecifier(p)
      if (!isName) world(n.text)
    } else if (ts.isPropertyAccessExpression(n) && ts.isIdentifier(n.expression) && !declared.has(n.expression.text)) {
      const call = `${n.expression.text}.${n.name.text}`
      if (call === "Date.now" || call === "Math.random") world(call)
    } else if (ts.isNewExpression(n) && ts.isIdentifier(n.expression) && n.expression.text === "Date" && !n.arguments?.length && !declared.has("Date")) {
      world("new Date()")
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return out
}

export const typescript: Driver = {
  language: "typescript",
  extensions: [".ts"],

  check(file, ctx) {
    if (!existsSync(file)) return [{ severity: "erreur", what: `Corps introuvable : ${file.replace(ctx.root + "/", "")}` }]
    const sf = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.ES2022, true)
    const out = checkTree(sf, ctx)
    const hasDefault = sf.statements.some((st) => ts.isExportAssignment(st) ||
      (ts.canHaveModifiers(st) && ts.getModifiers(st)?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword)))
    if (!hasDefault) out.push({ severity: "erreur", what: "Le fichier du corps doit exporter le corps par défaut (export default)" })
    return out
  },

  checkSource(source, ctx) {
    return checkTree(ts.createSourceFile("corps.ts", `const corps = ${source}`, ts.ScriptTarget.ES2022, true), ctx)
  },

  async load(file) {
    const mod = await import(pathToFileURL(file).href)
    return mod.default
  },

  emitProgram(a, name) {
    if (a.fige) return emitFrozen(a, name)
    const g = a.host.graph
    const title = (n: Parameters<typeof refOf>[0]) => g.view(n).title
    const path = join(a.out, `${name}.ts`)
    const rel = (to: string) => {
      const r = relative(a.out, to).replace(/\\/g, "/")
      return r.startsWith(".") ? r : `./${r}`
    }
    const lines: string[] = [
      `// Généré par \`${a.command}\` (graphe du ${a.host.today}). Ne pas modifier : modifiez le graphe.`,
      `// Composant « ${title(a.component)} » · environnement « ${title(a.env)} ».`,
      `// Chaque nœud est construit une fois, après ce dont il dépend. Les choix d'implémentation sont écrits ici ;`,
      `// seules les valeurs du graphe (décisions, règles) sont lues au démarrage, à la date du jour.`,
      ``,
      `import { boot } from ${JSON.stringify(rel(join(dirname(a.prelude), "boot")))}`,
      ``,
      `const rt = await boot({ root: new URL(${JSON.stringify(rel(a.host.root) + "/")}, import.meta.url).pathname, env: ${JSON.stringify(refOf(a.env))} })`,
      ``,
    ]
    for (const step of a.plan.steps) {
      const kind = meta(step.node).def.label.one.toLowerCase()
      const via = step.via.length ? `, pour ${step.via.map((v) => `« ${title(v)} »`).join(", ")}` : ""
      lines.push(`// « ${title(step.node)} » · ${kind}${via}`)
      const ref = JSON.stringify(refOf(step.node))
      if (step.how === "valeur") lines.push(`const ${step.name} = await rt.valeur(${ref})`)
      else {
        const args = step.deps.map((d) => (d.param === d.name ? d.param : `${d.param}: ${d.name}`)).join(", ")
        lines.push(`const ${step.name} = await (await rt.corps(${ref}))({${args ? ` ${args} ` : ""}})`)
      }
    }
    const names = new Map(a.plan.steps.map((s) => [s.node, s.name]))
    const entryName = (n: Parameters<typeof refOf>[0]) => a.plan.names.get(n) ?? names.get(n)
    lines.push(
      ``,
      `const demarre = await rt.start(${JSON.stringify(refOf(a.component))}, {`,
      ...a.entries.map((e) => `  ${JSON.stringify(refOf(e))}: ${entryName(e)},`),
      `})`,
      `const adresse = (demarre as { adresse?: string } | undefined)?.adresse`,
      `console.log(\`« ${title(a.component)} » · ${title(a.env)} · graphe du \${rt.date}\${adresse ? \` · \${adresse}\` : ""}\`)`,
      ``,
    )
    return [{ path, content: lines.join("\n") }]
  },
}

/**
 * Un programme figé : il n'importe que les corps, l'outillage du prélude et les déclarations qu'il faut lire
 * (corps en ligne, règles, le composant). Il ne compile pas le graphe : les valeurs y sont écrites.
 */
function emitFrozen(a: Assembly, name: string): Emitted[] {
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
    if (!file || !id) throw new Error(`« ${title(n)} » : déclaration introuvable`)
    const abs = join(a.host.root, file)
    declarations.set(abs, (declarations.get(abs) ?? new Set()).add(id))
    return id
  }
  const steps: string[] = []
  for (const step of a.plan.steps) {
    const kind = meta(step.node).def.label.one.toLowerCase()
    const via = step.via.length ? `, pour ${step.via.map((v) => `« ${title(v)} »`).join(", ")}` : ""
    steps.push(`// « ${title(step.node)} » · ${kind}${via}`)
    if (step.how === "valeur") {
      const f = a.fige!.get(step.node)!
      steps.push("json" in f ? `const ${step.name} = ${f.json}` : `const ${step.name} = fige.valeur(${declare(step.node)})`)
      continue
    }
    const args = step.deps.map((d) => (d.param === d.name ? d.param : `${d.param}: ${d.name}`)).join(", ")
    const call = `({${args ? ` ${args} ` : ""}})`
    const src = a.bodies.get(step.node)!
    if ("file" in src) {
      bodyImports.push(`import corps_${step.name} from ${JSON.stringify(rel(src.file))}`)
      steps.push(`const ${step.name} = await corps_${step.name}${call}`)
    } else {
      steps.push(`const ${step.name} = await fige.corps(${declare(step.node)})${call}`)
    }
  }
  const frozenData = [...(a.figeLues ?? [])].map(([n, json]) => `fige.donnees(${declare(n)}, ${JSON.stringify(refOf(n))}, ${json})`)
  const nameOf = (n: N) => a.plan.names.get(n)!
  const comp = declare(a.component)
  const deps = a.componentDeps.map((d) => (d.param === nameOf(d.node) ? d.param : `${d.param}: ${nameOf(d.node)}`)).join(", ")
  const changes = a.changes?.length ? a.changes.join(" ; ") : "aucun"
  const lines = [
    `// Généré par \`${a.command}\` (graphe du ${a.host.today}). Ne pas modifier : modifiez le graphe.`,
    `// Composant « ${title(a.component)} » · environnement « ${title(a.env)} ».`,
    `// Programme figé : l'ordre de construction, les choix d'implémentation et les valeurs du graphe sont écrits ici ;`,
    `// il ne compile pas le graphe au démarrage. Changements datés que ce programme ne verra pas : ${changes}.`,
    ``,
    `import { fige } from ${JSON.stringify(rel(a.prelude))}`,
    ...[...declarations].sort(([x], [y]) => x.localeCompare(y)).map(([file, ids]) => `import { ${[...ids].sort().join(", ")} } from ${JSON.stringify(rel(file))}`),
    ...bodyImports,
    ``,
    ...(frozenData.length ? [`// Ce que lisent les règles, tel qu'en vigueur le ${a.host.today}.`, ...frozenData, ``] : []),
    ...steps,
    ``,
    `const demarre = (await fige.demarrer(${comp}, { ${deps} }, [`,
    ...a.entries.map((e) => `  { titre: ${JSON.stringify(title(e))}, champs: ${JSON.stringify(a.entryFields.get(e) ?? {})}, valeur: ${nameOf(e)} },`),
    `])) as { adresse?: string; code?: number } | undefined`,
    `if (demarre?.adresse) console.log(\`« ${title(a.component)} » · ${title(a.env)} · \${demarre.adresse}\`)`,
    `if (demarre?.code !== undefined) process.exitCode = demarre.code`,
    ``,
  ]
  return [{ path: join(a.out, `${name}.ts`), content: lines.join("\n") }]
}
