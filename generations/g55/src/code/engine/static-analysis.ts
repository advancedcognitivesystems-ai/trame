// Static reading: the TypeScript compiler API reads the sources without running them.
// For each exported constant: its comment (title, description), its line, its type arguments,
// the text of its properties, and its references to the other exported constants.

import type { Paths, TypeScriptCompiler } from "../../architecture"
import type ts from "typescript"
import type { ProvidedBy, StaticInfo } from "../../../trame/kernel"
import type { CompilerMessages } from "../../messages"
import type { Counts, Sequences, Texts } from "../../../std/src/algebra"
import type { NodeModuleSpecifiers } from "../../../std/src/system"
import type { TextFile } from "../../../std/src/text"
import type { TypeScriptSyntax } from "../../typescript"
import type { References } from "../../engine"

export interface Analysis {
  infos: Map<string, StaticInfo> // key: module.name
  moduleTitle: Map<string, string>
  /** The type errors of the project (graph, kinds, views, kernel). */
  typeErrors: string[]
}

export interface Deps {
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  syntax: ProvidedBy<typeof TypeScriptSyntax>
  references: ProvidedBy<typeof References>
  file: ProvidedBy<typeof TextFile>
  options: { types: readonly string[] }
  ts: TypeScriptCompiler
  paths: Paths
  positions: { lineNumber(tsLine: number): number; reference(file: string, line: number): string }
  /** The first lines of the documentation comment make the title. */
  docComment: { titleLines: number; joint: string }
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CompilerMessages>
}

const body = (deps: Deps) => {
  const { specifiers, options } = deps
  const ts = deps.ts
  const { relative, sep } = deps.paths
  const { lineNumber, reference } = deps.positions
  const { titleLines, joint } = deps.docComment
  const { endOfLine } = deps.file
  const { messages } = deps
  const { head, take } = deps.sequences
  const { empty, optional, squeeze } = deps.texts
  const { zero } = deps.counts
  const { docComment, commentEnd } = deps.syntax
  /** The reference of a node: its module, then its name. */
  const qualified = deps.references.join

  /** The title of a module: a documentation comment on one line, at the very start of its file ("/** Trame · Engine *\/"). */
  const moduleTitleOf = (text: string): string | undefined => {
    const first = head(ts.getLeadingCommentRanges(text, zero) ?? [])
    if (!first || first.pos !== zero) return undefined
    const comment = text.slice(first.pos, first.end)
    if (!comment.startsWith(docComment) || !comment.endsWith(commentEnd)) return undefined
    const title = comment.slice(docComment.length, comment.length - commentEnd.length).trim()
    // A title holds no asterisk, the character that closes the comment, and no end of line.
    return title !== empty && !title.includes(endOfLine) && !title.includes(optional(head(commentEnd))) ? title : undefined
  }

  /**
   * `modules`: the modules of the graph, each with its name (a library's module carries the library's name). `extra`:
   * other files to check (the views, which nothing imports).
   */
  function analyze(modules: { file: string; module: string }[], extra: string[], root: string): Analysis {
    const files = modules.map((m) => m.file)
    const program = ts.createProgram([...files, ...extra], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      // Only the types of Node are global: no other package of types is loaded, which makes the check much faster.
      types: [...options.types],
    })
    const checker = program.getTypeChecker()
    const infos = new Map<string, StaticInfo>()
    const moduleTitle = new Map<string, string>()

    // All the exported constants, to recognise the references between nodes.
    const exported = new Map<ts.Node, string>() // declaration → module.name
    for (const { file, module: mod } of modules) {
      const sf = program.getSourceFile(file)
      if (!sf) continue
      for (const stmt of sf.statements) {
        if (!ts.isVariableStatement(stmt)) continue
        if (!stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue
        for (const d of stmt.declarationList.declarations) exported.set(d, qualified([mod, d.name.getText(sf)]))
      }
    }

    for (const { file, module: mod } of modules) {
      const sf = program.getSourceFile(file)
      if (!sf) continue
      const title = moduleTitleOf(sf.getFullText())
      if (title) moduleTitle.set(mod, title)

      for (const [decl, ref] of exported) {
        if (decl.getSourceFile() !== sf) continue
        const vd = decl as ts.VariableDeclaration
        // The text of the declaration, without comments, with normalised spaces: this is what trame.lock freezes.
        const stmt = vd.parent.parent
        const info: StaticInfo = {
          file: relative(root, file).split(sep).join(specifiers.separator),
          line: lineNumber(sf.getLineAndCharacterOfPosition(vd.getStart(sf)).line),
          typeArgs: [],
          args: [],
          props: {},
          refs: [],
          sourceText: squeeze(stmt.getText(sf)),
        }

        const jsDoc = ts.getJSDocCommentsAndTags(vd).find(ts.isJSDoc)
        const text = optional(jsDoc && ts.getTextOfJSDocComment(jsDoc.comment))
        const lines = text.split(endOfLine).map((l) => l.trim()).filter(Boolean)
        if (lines.length) {
          info.title = take(lines, titleLines).join(joint)
          info.description = lines.slice(titleLines).join(joint) || undefined
        }

        const init = vd.initializer
        if (init && ts.isCallExpression(init)) {
          info.typeArgs = (init.typeArguments ?? []).map((t) => t.getText(sf))
          info.args = init.arguments.map((a) => a.getText(sf))
          const arg = head(init.arguments)
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
              const target = sym?.valueDeclaration ?? head(sym?.declarations)
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
                const key = JSON.stringify([targetRef, optional(prop)])
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
      .filter((d) => d.category === ts.DiagnosticCategory.Error && (!d.file || !d.file.fileName.includes(specifiers.packages)))
      .map((d) => {
        const where = d.file && d.start !== undefined
          ? reference(relative(root, d.file.fileName), lineNumber(d.file.getLineAndCharacterOfPosition(d.start).line))
          : undefined
        const [first] = ts.flattenDiagnosticMessageText(d.messageText, endOfLine).split(endOfLine)
        return messages.typeError(first, where)
      })
    return { infos, moduleTitle, typeErrors }
  }

  return { analyze }
}

export type Api = ReturnType<typeof body>
export default body
