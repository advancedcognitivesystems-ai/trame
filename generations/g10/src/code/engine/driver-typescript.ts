// TypeScript driver: a body receives the world through its parameters only.
// Only type imports are free. The kernel API is allowed. The modules of the platform (node:…, packages) and the
// globals that touch the world (fetch, process, the time, randomness…) are reserved for the kinds that may touch the
// platform (the implementations). Importing another module of the graph as a value would be a hidden dependency.
// The same check applies to an inline body and to a body in a file.

import { LiteralKind, Severity, WireMode } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, ModuleLoader, Paths, Prelude, TypeScriptCompiler } from "../../architecture"
import type { Dates, DriverMessages } from "../../messages"
import type ts from "typescript"
import type { CheckContext, Driver, DriverIssue, LiteralFound, LiteralSource } from "./drivers"
import type { Assembly, Emitted } from "./assembly"

export interface Deps {
  positions: { lineNumber(tsLine: number): number }
  textFile: { endOfLine: string }
  loader: ModuleLoader
  ts: TypeScriptCompiler
  reading: FileReading
  paths: Paths
  prelude: Prelude
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = (deps: Deps) => {
  const { loader, dates, messages } = deps
  const ts = deps.ts
  const { readFileSync, existsSync } = deps.reading
  const { join, relative } = deps.paths
  const { meta, refOf } = deps.prelude.internal
  const { lineNumber } = deps.positions

  /** The globals that touch the world. A reading of the text, without resolving types: an approximation. */
  const WORLD = new Set(["fetch", "process", "require", "globalThis", "setTimeout", "setInterval", "setImmediate", "crypto", "performance", "XMLHttpRequest", "WebSocket", "localStorage"])

  function checkTree(sf: ts.SourceFile, ctx: CheckContext): DriverIssue[] {
    const out: DriverIssue[] = []
    const platform = (what: string) => {
      if (!ctx.ambient) out.push({ severity: Severity.error, what: messages.platformAccess(what) })
    }
    const checkSpec = (spec: string, typeOnly: boolean) => {
      if (typeOnly) return
      const s = spec.replace(/\.(ts|js)$/, "")
      if (s.endsWith("/trame/kernel")) return
      if (s.startsWith(".")) out.push({ severity: Severity.error, what: messages.hiddenDependency(spec) })
      else platform(spec)
    }
    // The names declared in the body itself (a parameter named "process" is not the global).
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
        // A load whose path is computed escapes any reading: reserved for implementations.
        if (n.arguments[0] && ts.isStringLiteral(n.arguments[0])) checkSpec(n.arguments[0].text, false)
        else world(messages.computedImport())
      } else if (ts.isIdentifier(n) && WORLD.has(n.text) && !declared.has(n.text)) {
        const p = n.parent
        const isName = (ts.isPropertyAccessExpression(p) && p.name === n) || (ts.isPropertyAssignment(p) && p.name === n) ||
          ((ts.isPropertySignature(p) || ts.isMethodSignature(p)) && p.name === n) || ts.isImportSpecifier(p)
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

  // Literals ------------------------------------------------------------------------------
  // Every literal written in a body is recorded, except names (plain object keys, imported modules) and types.
  // No value is neutral: a 0, a 1, an empty text say something too. A literal whose expected type is a union of
  // literals named elsewhere (Status, Severity, a vocabulary of the graph…) is specified: that type is cited.

  /** What a literal does, from its place in the code: a fact of syntax, not a guess. */
  function roleOf(n: ts.Node): string {
    let x = n
    while (ts.isParenthesizedExpression(x.parent) || (ts.isPrefixUnaryExpression(x.parent) && x.parent.operator === ts.SyntaxKind.MinusToken)) x = x.parent
    const p = x.parent
    const K = ts.SyntaxKind
    const callee = (c: ts.CallExpression | ts.NewExpression) =>
      ts.isPropertyAccessExpression(c.expression) ? c.expression.name.text : ts.isIdentifier(c.expression) ? c.expression.text : "?"
    if (ts.isElementAccessExpression(p) && p.argumentExpression === x) return "index"
    if (ts.isBinaryExpression(p)) {
      const k = p.operatorToken.kind
      if ([K.PlusToken, K.MinusToken, K.AsteriskToken, K.SlashToken, K.PercentToken, K.AsteriskAsteriskToken, K.PlusEqualsToken, K.MinusEqualsToken].includes(k)) {
        return ts.isStringLiteralLike(x) || ts.isTemplateExpression(x) ? "concatenation" : "arithmetic"
      }
      if ([K.AmpersandToken, K.BarToken, K.CaretToken, K.LessThanLessThanToken, K.GreaterThanGreaterThanToken, K.GreaterThanGreaterThanGreaterThanToken].includes(k)) return "bitwise arithmetic"
      if ([K.EqualsEqualsEqualsToken, K.ExclamationEqualsEqualsToken, K.EqualsEqualsToken, K.ExclamationEqualsToken, K.LessThanToken, K.LessThanEqualsToken, K.GreaterThanToken, K.GreaterThanEqualsToken].includes(k)) return "comparison"
      if ([K.QuestionQuestionToken, K.BarBarToken].includes(k)) return "default value"
      if (k === K.AmpersandAmpersandToken) return "condition"
      if (k === K.EqualsToken) return "assignment"
    }
    if (ts.isConditionalExpression(p)) return p.condition === x ? "condition" : "branch of a condition"
    if (ts.isCallExpression(p) || ts.isNewExpression(p)) return `argument of ${callee(p)}`
    if (ts.isVariableDeclaration(p)) return "initial value"
    if (ts.isPropertyAssignment(p)) return "property value"
    if (ts.isReturnStatement(p) || (ts.isArrowFunction(p) && p.body === x)) return "returned value"
    if (ts.isArrayLiteralExpression(p)) return "element of a list"
    if (ts.isCaseClause(p)) return "case of a switch"
    if (ts.isTemplateSpan(p)) return "in a template"
    if (ts.isParameter(p) || ts.isBindingElement(p)) return "default value"
    if (ts.isSpreadElement(p) || ts.isExpressionStatement(p)) return "statement"
    return "other"
  }

  /** What a literal looks like. A hint to sort the catalogue, not a truth. */
  function categoryOf(kind: LiteralKind, text: string, near: string): string {
    if (kind === LiteralKind.regex) return "regular expression"
    if (kind === LiteralKind.number) return /writeHead|status|code/i.test(near) && /^[1-5]\d\d$/.test(text) ? "HTTP status" : "number"
    if (/#[0-9a-fA-F]{3,8}\b|rgba?\(/.test(text)) return "colour"
    if (/^[a-z]+\/[a-z0-9.+-]+(;|$)/i.test(text)) return "media type"
    if (/^https?:\/\//.test(text)) return "address"
    if (/\.(json|md|ts|tf|lock|html|css|db)$/.test(text) || /^\.{0,2}\//.test(text)) return "file"
    if (/<[a-z]+[\s>]/i.test(text)) return "markup"
    if (/^[\s\p{P}\p{S}]*$/u.test(text)) return "separator"
    if (/\p{L}[\s\p{L}'\u2019,]*\s+\p{L}/u.test(text) && /[a-z\u00e0-\u00ff]/i.test(text)) return "sentence"
    if (/^[\p{L}\d_.:-]+$/u.test(text)) return "identifier"
    return kind === LiteralKind.template ? "template" : "text"
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
     * What declares this value outside the body, if the expected type contains it: a named union of literals
     * (Status), the property of a type (Block.type), the parameter of a function (Graph.edges(dir)), or the language
     * itself (typeof).
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
      // A comparison, or a case of a switch: the type of the other side.
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
      // The value of a property: the type of the object that expects it.
      if (ts.isPropertyAssignment(p) && p.initializer === n && ts.isObjectLiteralExpression(p.parent)) {
        const objType = checker.getContextualType(p.parent)
        const name = p.name.getText(sf)
        const sym = objType && (objType.getProperty(name) ?? (objType.isUnion() ? objType.types.map((x) => x.getProperty(name)).find(Boolean) : undefined))
        return ofProperty(sym, t)
      }
      // An argument: the parameter of the called function.
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
      const tsLine = (n: ts.Node) => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line
      const lineOf = (n: ts.Node) => lineNumber(tsLine(n))
      const lines = sf.text.split(deps.textFile.endOfLine)
      const contextOf = (n: ts.Node) => {
        const text = lines[tsLine(n)]?.trim() ?? ""
        return text.length > 110 ? text.slice(0, 107) + "…" : text
      }
      const push = (n: ts.Node, kind: LiteralKind, value: string, raw: string | number) => {
        const by = kind === LiteralKind.text || kind === LiteralKind.number ? declaredBy(n as ts.Expression, raw, sf) : undefined
        const shown = value.length > 70 ? value.slice(0, 67) + "…" : value
        const text = typeof raw === "number" ? String(raw) : raw
        found.push({ line: lineOf(n), value: shown, kind, category: categoryOf(kind, text, contextOf(n)), context: contextOf(n), declaredBy: by, role: roleOf(n) })
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
            // A key that is not an identifier ("content-type", "30 min") is a value disguised as a name.
            if ((ts.isPropertyAssignment(p) && p.name === n) && !/^[\p{L}_$][\p{L}\d_$]*$/u.test(n.text)) push(n, LiteralKind.key, n.getText(sf), n.text)
          } else push(n, LiteralKind.text, n.getText(sf), n.text)
          return
        }
        if (ts.isNumericLiteral(n)) {
          const neg = ts.isPrefixUnaryExpression(n.parent) && n.parent.operator === ts.SyntaxKind.MinusToken
          const v = Number(n.text) * (neg ? -1 : 1)
          push(neg ? n.parent : n, LiteralKind.number, (neg ? "-" : "") + n.getText(sf), v)
          return
        }
        if (ts.isBigIntLiteral(n)) { push(n, LiteralKind.number, n.getText(sf), n.getText(sf)); return }
        if (ts.isRegularExpressionLiteral(n)) { push(n, LiteralKind.regex, n.getText(sf), n.getText(sf)); return }
        if (ts.isTemplateExpression(n)) {
          const statics = [n.head.text, ...n.templateSpans.map((s) => s.literal.text)]
          if (statics.join("").trim()) push(n, LiteralKind.template, "`" + statics.join("${…}") + "`", statics.join("…"))
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
      // An inline body: the "body" property of the object passed to the kind, in the declaration at this line.
      const stmt = sf.statements.find((st) => lineNumber(sf.getLineAndCharacterOfPosition(st.getStart(sf)).line) === s.line)
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

  /** The parameters of a body in the program: its constants, written as they are, then its dependencies. */
  const argsOf = (step: Assembly["plan"]["steps"][number]): string => [
    ...Object.entries(step.constants ?? {}).map(([k, v]) => `${/^[\p{L}_$][\p{L}\d_$]*$/u.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(v)}`),
    ...step.deps.map((d) => (d.param === d.name ? d.param : `${d.param}: ${d.name}`)),
  ].join(", ")

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
    const steps: string[] = []
    for (const step of a.plan.steps) {
      const kind = meta(step.node).def.label.one.toLowerCase()
      steps.push(`// ${messages.stepComment(title(step.node), kind, step.via.map(title))}`)
      if (step.how === WireMode.value) {
        const f = a.frozenValues.get(step.node)!
        steps.push("json" in f ? `const ${step.name} = ${f.json}` : `const ${step.name} = frozen.value(${declare(step.node)})`)
        continue
      }
      const args = argsOf(step)
      const call = `({${args ? ` ${args} ` : ""}})`
      const src = a.bodies.get(step.node)!
      if ("file" in src) {
        bodyImports.push(`import body_${step.name} from ${JSON.stringify(rel(src.file))}`)
        steps.push(`const ${step.name} = await body_${step.name}${call}`)
      } else {
        steps.push(`const ${step.name} = await frozen.body(${declare(step.node)})${call}`)
      }
    }
    const frozenData = [...(a.frozenData ?? [])].map(([n, json]) => `frozen.data(${declare(n)}, ${JSON.stringify(refOf(n))}, ${json})`)
    const nameOf = (n: N) => a.plan.names.get(n)!
    const comp = declare(a.component)
    const componentDeps = a.componentDeps.map((d) => (d.param === nameOf(d.node) ? d.param : `${d.param}: ${nameOf(d.node)}`)).join(", ")
    const date = dates.format(a.host.today)
    const lines = [
      `// ${messages.generatedBy(a.command, date)}`,
      `// ${messages.componentInEnvironment(title(a.component), title(a.env))}`,
      `// ${messages.frozenProgram()}`,
      `// ${messages.notCompiledAtStartup(a.changes ?? [])}`,
      ``,
      `import { frozen } from ${JSON.stringify(rel(a.prelude))}`,
      ...[...declarations].sort(([x], [y]) => x.localeCompare(y)).map(([file, ids]) => `import { ${[...ids].sort().join(", ")} } from ${JSON.stringify(rel(file))}`),
      ...bodyImports,
      ``,
      ...(frozenData.length ? [`// ${messages.whatRulesRead(date)}`, ...frozenData, ``] : []),
      ...steps,
      ``,
      `const started = (await frozen.start(${comp}, { ${componentDeps} }, [`,
      ...a.entries.map((e) => `  { title: ${JSON.stringify(title(e))}, fields: ${JSON.stringify(a.entryFields.get(e) ?? {})}, value: ${nameOf(e)} },`),
      `])) as { address?: string; code?: number } | undefined`,
      `if (started?.address) console.log(${JSON.stringify(messages.programStarted(title(a.component), title(a.env)))}, started.address)`,
      `if (started?.code !== undefined) process.exitCode = started.code`,
      ``,
    ]
    return [{ path: join(a.out, `${name}.ts`), content: lines.join("\n") }]
  }

  const typescript: Driver = {
    language: "typescript",
    extensions: [".ts"],

    check(file, ctx) {
      if (!existsSync(file)) return [{ severity: Severity.error, what: messages.bodyNotFound(file.replace(ctx.root + "/", "")) }]
      const sf = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.ES2022, true)
      const out = checkTree(sf, ctx)
      const hasDefault = sf.statements.some((st) => ts.isExportAssignment(st) ||
        (ts.canHaveModifiers(st) && ts.getModifiers(st)?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword)))
      if (!hasDefault) out.push({ severity: Severity.error, what: messages.noDefaultExport() })
      return out
    },

    literals,

    checkSource(source, ctx) {
      return checkTree(ts.createSourceFile("body.ts", `const body = ${source}`, ts.ScriptTarget.ES2022, true), ctx)
    },

    async load(file) {
      const mod = await loader.import(file)
      return mod.default
    },

    emitProgram,
  }

  return { typescript }
}

export type Api = ReturnType<typeof body>
export default body
