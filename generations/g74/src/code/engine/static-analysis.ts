// Static reading: the TypeScript compiler API reads the sources without running them.
// For each exported constant: its comment (title, description), its line, its type arguments,
// the text of its properties, and its references to the other exported constants.

import type { Hashing, KeptResults, Paths, RunStore, TypeScriptCompiler } from "../../architecture"
import type ts from "typescript"
import type { ProvidedBy, StaticInfo } from "../../../trame/kernel"
import type { CompilerMessages } from "../../messages"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { NodeEncodings, NodeModuleSpecifiers } from "#std/system"
import type { TextFile } from "#std/text"
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
  /** Where a program's reading is kept while the process runs, with the digest of each file the compiler read. */
  kept: KeptResults
  /** Where it is kept beyond the process (on a machine, on disk), with the same digests. */
  runs: RunStore
  hashing: Hashing
  sha256: { algorithm: string }
  encodings: ProvidedBy<typeof NodeEncodings>
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

  /** A program's reading, kept with the digest of every file the compiler read for it. */
  interface Kept { files: [string, string | undefined][]; analysis: Analysis }
  /** The same, as it is written beyond the process: its maps as their entries. */
  interface Written { files: [string, string | undefined][]; infos: [string, StaticInfo][]; moduleTitle: [string, string][]; typeErrors: string[] }
  const written = (k: Kept): Written => ({ files: k.files, infos: [...k.analysis.infos], moduleTitle: [...k.analysis.moduleTitle], typeErrors: k.analysis.typeErrors })
  const read = (w: Written | undefined): Kept | undefined =>
    w && { files: w.files, analysis: { infos: new Map(w.infos), moduleTitle: new Map(w.moduleTitle), typeErrors: w.typeErrors } }
  const digest = (text: string) => deps.hashing.createHash(deps.sha256.algorithm).update(text).digest(deps.encodings.hex)
  /** The digest of a file as the compiler of TypeScript reads it; nothing once it is no longer there. */
  const digestOf = (file: string) => {
    const text = ts.sys.readFile(file)
    return text === undefined ? undefined : digest(text)
  }

  /**
   * `modules`: the modules of the graph, each with its name (a library's module carries the library's name). `extra`:
   * other files to check (the views, which nothing imports). `paths`: where the name of each library leads, for the
   * compiler: to its sources as they are on disk, whatever link the import map of the package goes through. The same
   * program read again in the process, while every file the compiler read is as it was, gives the reading kept.
   */
  function analyze(modules: { file: string; module: string }[], extra: string[], root: string, paths: Record<string, string[]> = {}): Analysis {
    const files = modules.map((m) => m.file)
    const key = digest(JSON.stringify([ts.version, root, modules, extra, paths, options.types]))
    const known = (deps.kept.get(key) as Kept | undefined) ?? read(deps.runs.at(root).get(key) as Written | undefined)
    if (known && known.files.every(([file, seen]) => digestOf(file) === seen)) {
      deps.kept.set(key, known)
      return known.analysis
    }
    const program = ts.createProgram([...files, ...extra], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      // Only the types of Node are global: no other package of types is loaded, which makes the check much faster.
      types: [...options.types],
      paths,
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
    const analysis = { infos, moduleTitle, typeErrors }
    const kept: Kept = { files: program.getSourceFiles().map((sf): [string, string | undefined] => [sf.fileName, digestOf(sf.fileName)]), analysis }
    deps.kept.set(key, kept)
    deps.runs.at(root).set(key, written(kept))
    return analysis
  }

  return { analyze }
}

export type Api = ReturnType<typeof body>
export default body
