// Static reading: the TypeScript compiler API reads the sources without running them.
// For each exported constant: its comment (title, description), its line, its type arguments,
// the text of its properties, and its references to the other exported constants.

import type { Paths, TypeScriptCompiler } from "../../architecture"
import type ts from "typescript"
import type { ProvidedBy, StaticInfo } from "../../../trame/kernel"
import type { CompilerMessages } from "../../messages"

export interface Analysis {
  infos: Map<string, StaticInfo> // key: module.name
  moduleTitle: Map<string, string>
  /** The type errors of the project (graph, kinds, views, kernel). */
  typeErrors: string[]
}

export interface Deps {
  ts: TypeScriptCompiler
  paths: Paths
  positions: { lineNumber(tsLine: number): number; reference(file: string, line: number): string }
  /** The first lines of the documentation comment make the title. */
  docComment: { titleLines: number }
  ecma: { firstIndex: number }
  messages: ProvidedBy<typeof CompilerMessages>
}

const body = (deps: Deps) => {
  const ts = deps.ts
  const { basename, relative } = deps.paths
  const { lineNumber, reference } = deps.positions
  const { titleLines } = deps.docComment
  const { messages } = deps

  /** `extra`: other files to check (the views, which nothing imports). */
  function analyze(files: string[], extra: string[] = [], root = "."): Analysis {
    const program = ts.createProgram([...files, ...extra], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      // Only the types of Node are global: no other package of types is loaded, which makes the check much faster.
      types: ["node"],
    })
    const checker = program.getTypeChecker()
    const infos = new Map<string, StaticInfo>()
    const moduleTitle = new Map<string, string>()

    // All the exported constants, to recognise the references between nodes.
    const exported = new Map<ts.Node, string>() // declaration → module.name
    for (const file of files) {
      const sf = program.getSourceFile(file)
      if (!sf) continue
      const mod = basename(file, ".ts")
      for (const stmt of sf.statements) {
        if (!ts.isVariableStatement(stmt)) continue
        if (!stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue
        for (const d of stmt.declarationList.declarations) exported.set(d, `${mod}.${d.name.getText(sf)}`)
      }
    }

    for (const file of files) {
      const sf = program.getSourceFile(file)
      if (!sf) continue
      const mod = basename(file, ".ts")
      const head = /^\/\*\*\s*([^*\n]+?)\s*\*\//.exec(sf.getFullText())
      if (head) moduleTitle.set(mod, head[1])

      for (const [decl, ref] of exported) {
        if (decl.getSourceFile() !== sf) continue
        const vd = decl as ts.VariableDeclaration
        // The text of the declaration, without comments, with normalised spaces: this is what trame.lock freezes.
        const stmt = vd.parent.parent
        const info: StaticInfo = {
          file: `src/${mod}.ts`,
          line: lineNumber(sf.getLineAndCharacterOfPosition(vd.getStart(sf)).line),
          typeArgs: [],
          args: [],
          props: {},
          refs: [],
          sourceText: stmt.getText(sf).replace(/\s+/g, " ").trim(),
        }

        const jsDoc = ts.getJSDocCommentsAndTags(vd).find(ts.isJSDoc)
        const text = jsDoc ? ts.getTextOfJSDocComment(jsDoc.comment) ?? "" : ""
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean)
        if (lines.length) {
          info.title = lines.slice(deps.ecma.firstIndex, titleLines).join(" ")
          info.description = lines.slice(titleLines).join(" ") || undefined
        }

        const init = vd.initializer
        if (init && ts.isCallExpression(init)) {
          info.typeArgs = (init.typeArguments ?? []).map((t) => t.getText(sf))
          info.args = init.arguments.map((a) => a.getText(sf))
          const arg = init.arguments[0]
          const obj = arg && ts.isObjectLiteralExpression(arg) ? arg : undefined
          for (const p of obj?.properties ?? []) {
            if (ts.isPropertyAssignment(p)) info.props[p.name.getText(sf)] = p.initializer.getText(sf)
            else if (ts.isShorthandPropertyAssignment(p) || ts.isMethodDeclaration(p)) info.props[p.name.getText(sf)] = p.getText(sf)
          }

          const seen = new Set<string>()
          const visit = (n: ts.Node): void => {
            if (ts.isIdentifier(n)) {
              let sym = checker.getSymbolAtLocation(n)
              if (sym && sym.flags & ts.SymbolFlags.Alias) sym = checker.getAliasedSymbol(sym)
              const target = sym?.valueDeclaration ?? sym?.declarations?.[0]
              const targetRef = target && exported.get(target)
              if (targetRef && targetRef !== ref) {
                // Under which property of the object passed to the constructor is the reference?
                let prop: string | undefined
                let cur: ts.Node = n
                while (cur.parent && cur.parent !== init) {
                  if (cur.parent === obj && ts.isObjectLiteralElementLike(cur) && cur.name) {
                    prop = cur.name.getText(sf)
                    break
                  }
                  cur = cur.parent
                }
                const key = `${targetRef}|${prop ?? ""}`
                if (!seen.has(key)) {
                  seen.add(key)
                  info.refs.push({ target: targetRef, prop })
                }
              }
            }
            ts.forEachChild(n, visit)
          }
          visit(init)
        }
        infos.set(ref, info)
      }
    }
    const typeErrors = ts.getPreEmitDiagnostics(program)
      .filter((d) => d.category === ts.DiagnosticCategory.Error && (!d.file || !d.file.fileName.includes("node_modules")))
      .map((d) => {
        const where = d.file && d.start !== undefined
          ? reference(relative(root, d.file.fileName), lineNumber(d.file.getLineAndCharacterOfPosition(d.start).line))
          : undefined
        return messages.typeError(ts.flattenDiagnosticMessageText(d.messageText, "\n").split("\n")[0], where)
      })
    return { infos, moduleTitle, typeErrors }
  }

  return { analyze }
}

export type Api = ReturnType<typeof body>
export default body
