// Driver TypeScript : un corps ne reçoit le monde que par ses paramètres.
// Seuls les imports de types sont libres. L'API du noyau est permise. Les modules de la plateforme (node:…, paquets)
// et les globales qui touchent le monde (fetch, process, l'heure, le hasard…) sont réservés aux types qui peuvent
// toucher la plateforme (les implémentations). Importer un autre module du graphe en valeur serait une dépendance cachée.
// La même vérification vaut pour un corps en ligne et pour un corps dans un fichier.

import type { Chargeur, Chemins, CompilateurTs, LectureFichiers, Prelude } from "../../architecture"
import type ts from "typescript"
import type { CheckContext, Driver, DriverIssue, LiteralFound, LiteralSource } from "./drivers"
import type { Assembly, Emitted } from "./assemblage"

export interface Deps {
  /** Les littéraux qu'un corps peut écrire sans les déclarer (une décision du graphe). */
  admis: (string | number)[]
  chargeur: Chargeur
  ts: CompilateurTs
  lecture: LectureFichiers
  chemins: Chemins
  prelude: Prelude
}

const corps = (deps: Deps) => {
  const { chargeur } = deps
  const ts = deps.ts
  const { readFileSync, existsSync } = deps.lecture
  const { join, relative, dirname } = deps.chemins
  const { meta, refOf } = deps.prelude.interne

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

  // Littéraux ------------------------------------------------------------------------------
  // Tout littéral écrit dans un corps est relevé, sauf les noms (clés d'objet simples, modules importés), les types,
  // et ceux que la décision « Littéraux admis » laisse passer. Un littéral dont le type attendu est une union de
  // littéraux nommée ailleurs (Status, Severity, un vocabulaire du graphe…) est spécifié : on cite ce type.

  const admitted = new Set(deps.admis.map((v) => (typeof v === "number" ? `n:${v}` : `s:${v}`)))

  /** Ce que semble être un littéral. Une indication pour trier le catalogue, pas une vérité. */
  function categoryOf(kind: LiteralFound["kind"], text: string, near: string): string {
    if (kind === "regex") return "expression régulière"
    if (kind === "nombre") return /writeHead|status|statut|code/i.test(near) && /^[1-5]\d\d$/.test(text) ? "code HTTP" : "nombre"
    if (/#[0-9a-fA-F]{3,8}\b|rgba?\(/.test(text)) return "couleur"
    if (/^[a-z]+\/[a-z0-9.+-]+(;|$)/i.test(text)) return "type MIME"
    if (/^https?:\/\//.test(text)) return "adresse"
    if (/\.(json|md|ts|tf|lock|html|css|db)$/.test(text) || /^\.{0,2}\//.test(text)) return "fichier"
    if (/<[a-z]+[\s>]/i.test(text)) return "balisage"
    if (/^[\s\p{P}\p{S}]*$/u.test(text)) return "séparateur"
    if (/\p{L}[\s\p{L}'’,]*\s+\p{L}/u.test(text) && /[a-zà-ÿ]/i.test(text)) return "phrase"
    if (/^[\p{L}\d_.:-]+$/u.test(text)) return "identifiant"
    return kind === "gabarit" ? "gabarit" : "texte"
  }

  function literals(sources: LiteralSource[], root: string): Map<string, LiteralFound[]> {
    const roots = [...new Set(sources.map((s) => s.file))]
    const program = ts.createProgram(roots, {
      target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true, esModuleInterop: true, noEmit: true, skipLibCheck: true, types: ["node"],
    })
    const checker = program.getTypeChecker()
    const out = new Map<string, LiteralFound[]>()

    /**
     * Ce qui déclare cette valeur ailleurs que dans le corps, si le type attendu la contient : une union de littéraux
     * nommée (Status), la propriété d'un type (Block.type), le paramètre d'une fonction (Graph.edges(dir)), ou le langage
     * lui-même (typeof).
     */
    const declaredBy = (n: ts.Expression, value: string | number, sf: ts.SourceFile): string | undefined => {
      const elsewhere = (d: ts.Declaration | undefined) => !!d && d.getSourceFile() !== sf
      const where = (d: ts.Declaration) => relative(root, d.getSourceFile().fileName)
      const contains = (t: ts.Type | undefined) =>
        !!t && (t.isUnion() ? t.types : [t]).some((m) => (m.isStringLiteral() || m.isNumberLiteral()) && m.value === value)
      const ownerName = (d: ts.Node): string => {
        for (let x: ts.Node | undefined = d.parent; x; x = x.parent) {
          if ((ts.isInterfaceDeclaration(x) || ts.isClassDeclaration(x) || ts.isTypeAliasDeclaration(x)) && x.name) return x.name.text
        }
        return "?"
      }
      const ofProperty = (sym: ts.Symbol | undefined, t: ts.Type | undefined) => {
        const d = sym?.declarations?.[0]
        if (!sym || !elsewhere(d) || !contains(t)) return undefined
        return `${ownerName(d!)}.${sym.name} (${where(d!)})`
      }
      const p = n.parent
      // Une comparaison, ou un cas de switch : le type de l'autre côté.
      let other: ts.Expression | undefined
      if (ts.isBinaryExpression(p) && [ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken, ts.SyntaxKind.EqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsToken].includes(p.operatorToken.kind)) {
        other = p.left === n ? p.right : p.left
      } else if (ts.isCaseClause(p) && ts.isSwitchStatement(p.parent.parent)) other = p.parent.parent.expression
      if (other) {
        if (ts.isTypeOfExpression(other)) return "typeof (ECMAScript)"
        const t = checker.getTypeAtLocation(other)
        if (!contains(t)) return undefined
        if (t.aliasSymbol && elsewhere(t.aliasSymbol.declarations?.[0])) return `${t.aliasSymbol.name} (${where(t.aliasSymbol.declarations![0])})`
        if (ts.isPropertyAccessExpression(other)) return ofProperty(checker.getSymbolAtLocation(other.name), t)
        return undefined
      }
      const t = checker.getContextualType(n)
      if (!contains(t)) return undefined
      if (t!.aliasSymbol && elsewhere(t!.aliasSymbol.declarations?.[0])) return `${t!.aliasSymbol.name} (${where(t!.aliasSymbol.declarations![0])})`
      // La valeur d'une propriété : le type de l'objet qui l'attend.
      if (ts.isPropertyAssignment(p) && p.initializer === n && ts.isObjectLiteralExpression(p.parent)) {
        const objType = checker.getContextualType(p.parent)
        const name = p.name.getText(sf)
        const sym = objType && (objType.getProperty(name) ?? (objType.isUnion() ? objType.types.map((x) => x.getProperty(name)).find(Boolean) : undefined))
        return ofProperty(sym, t)
      }
      // Un argument : le paramètre de la fonction appelée.
      if ((ts.isCallExpression(p) || ts.isNewExpression(p)) && p.arguments?.includes(n)) {
        const sig = checker.getResolvedSignature(p)
        const param = sig?.parameters[Math.min(p.arguments.indexOf(n), (sig?.parameters.length ?? 1) - 1)]
        const d = param?.declarations?.[0]
        if (!param || !elsewhere(d)) return undefined
        const fn = sig?.declaration && "name" in sig.declaration && sig.declaration.name ? (sig.declaration.name as ts.Node).getText() : "?"
        return `${fn}(${param.name}) (${where(d!)})`
      }
      return undefined
    }

    const scan = (sf: ts.SourceFile, root: ts.Node): LiteralFound[] => {
      const found: LiteralFound[] = []
      const lineOf = (n: ts.Node) => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1
      const contextOf = (n: ts.Node) => {
        const text = sf.text.split("\n")[lineOf(n) - 1]?.trim() ?? ""
        return text.length > 110 ? text.slice(0, 107) + "…" : text
      }
      const push = (n: ts.Node, kind: LiteralFound["kind"], value: string, raw: string | number) => {
        const isAdmitted = admitted.has(typeof raw === "number" ? `n:${raw}` : `s:${raw}`)
        const by = !isAdmitted && (kind === "texte" || kind === "nombre") ? declaredBy(n as ts.Expression, raw, sf) : undefined
        const shown = value.length > 70 ? value.slice(0, 67) + "…" : value
        const text = typeof raw === "number" ? String(raw) : raw
        found.push({ line: lineOf(n), value: shown, kind, category: categoryOf(kind, text, contextOf(n)), context: contextOf(n), declaredBy: by, admitted: isAdmitted })
      }
      const isName = (n: ts.Node) => {
        const p = n.parent
        if ((ts.isPropertyAssignment(p) || ts.isPropertyDeclaration(p) || ts.isMethodDeclaration(p) || ts.isPropertySignature(p)) && p.name === n) return true
        if (ts.isElementAccessExpression(p) && p.argumentExpression === n) return true
        if (ts.isImportDeclaration(p) || ts.isExportDeclaration(p) || ts.isExternalModuleReference(p)) return true
        if (ts.isCallExpression(p) && p.expression.kind === ts.SyntaxKind.ImportKeyword) return true
        if (ts.isLiteralTypeNode(p)) return true
        return false
      }
      const visit = (n: ts.Node) => {
        if (ts.isTypeNode(n) || ts.isImportDeclaration(n) || ts.isExportDeclaration(n) || ts.isInterfaceDeclaration(n) || ts.isTypeAliasDeclaration(n)) return
        if (ts.isExpressionStatement(n) && ts.isStringLiteral(n.expression) && n.expression.text === "use strict") return
        if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) {
          const p = n.parent
          if (isName(n)) {
            // Une clé qui n'est pas un identifiant (« content-type », « 30 min ») est une valeur déguisée en nom.
            if ((ts.isPropertyAssignment(p) && p.name === n) && !/^[\p{L}_$][\p{L}\d_$]*$/u.test(n.text)) push(n, "clé", n.getText(sf), n.text)
          } else push(n, "texte", n.getText(sf), n.text)
          return
        }
        if (ts.isNumericLiteral(n)) {
          const neg = ts.isPrefixUnaryExpression(n.parent) && n.parent.operator === ts.SyntaxKind.MinusToken
          const v = Number(n.text) * (neg ? -1 : 1)
          push(neg ? n.parent : n, "nombre", (neg ? "-" : "") + n.getText(sf), v)
          return
        }
        if (ts.isBigIntLiteral(n)) { push(n, "nombre", n.getText(sf), n.getText(sf)); return }
        if (ts.isRegularExpressionLiteral(n)) { push(n, "regex", n.getText(sf), n.getText(sf)); return }
        if (ts.isTemplateExpression(n)) {
          const statics = [n.head.text, ...n.templateSpans.map((s) => s.literal.text)]
          if (statics.join("").trim()) push(n, "gabarit", "`" + statics.join("${…}") + "`", statics.join("…"))
          for (const s of n.templateSpans) visit(s.expression)
          return
        }
        ts.forEachChild(n, visit)
      }
      visit(root)
      return found
    }

    for (const s of sources) {
      const sf = program.getSourceFile(s.file)
      if (!sf) continue
      if (!("field" in s)) {
        out.set(s.key, scan(sf, sf))
        continue
      }
      // Un corps en ligne : la propriété « body » de l'objet passé au type, dans la déclaration à cette ligne.
      const stmt = sf.statements.find((st) => sf.getLineAndCharacterOfPosition(st.getStart(sf)).line + 1 === s.line)
      let prop: ts.Node | undefined
      const find = (n: ts.Node) => {
        if (prop) return
        if (ts.isPropertyAssignment(n) && ts.isIdentifier(n.name) && n.name.text === s.field) prop = n.initializer
        else ts.forEachChild(n, find)
      }
      if (stmt) find(stmt)
      out.set(s.key, prop ? scan(sf, prop) : [])
    }
    return out
  }

  /** Les paramètres d'un corps dans le programme : ses constantes, écrites telles quelles, puis ses dépendances. */
  const argsOf = (step: Assembly["plan"]["steps"][number]): string => [
    ...Object.entries(step.constantes ?? {}).map(([k, v]) => `${/^[\p{L}_$][\p{L}\d_$]*$/u.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(v)}`),
    ...step.deps.map((d) => (d.param === d.name ? d.param : `${d.param}: ${d.name}`)),
  ].join(", ")

  const typescript: Driver = {
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

    literals,

    checkSource(source, ctx) {
      return checkTree(ts.createSourceFile("corps.ts", `const corps = ${source}`, ts.ScriptTarget.ES2022, true), ctx)
    },

    async load(file) {
      const mod = await chargeur.importer(file)
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
          const args = argsOf(step)
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
      const args = argsOf(step)
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

  return { typescript }
}

export type Api = ReturnType<typeof corps>
export default corps
