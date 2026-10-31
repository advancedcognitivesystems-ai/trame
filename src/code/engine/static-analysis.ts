// Static reading: the TypeScript compiler API reads the sources without running them.
// For each exported constant: its comment (title, description), its line, its type arguments,
// the text of its properties, and its references to the other exported constants.

import type { Hashing, KeptResults, Paths, RunStore, TypeScriptCompiler } from "../../architecture"
import type ts from "typescript"
import { QuantityField, QuantityMark } from "../../../trame/kernel"
import type { ProvidedBy, StaticInfo } from "../../../trame/kernel"
import type { CompilerMessages } from "../../messages"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { NodeEncodings, NodeModuleSpecifiers } from "#std/system"
import type { TextAsCode } from "#std/ecmascript"
import type { TextFile } from "#std/text"
import type { TypeScriptSyntax } from "../../typescript"
import type { References } from "../../engine"

export interface Analysis {
  infos: Map<string, StaticInfo> // key: module.name
  moduleTitle: Map<string, string>
  /**
   * What each module holds besides the declarations of its nodes, by its file: its comments, its other code (a helper,
   * a type), the imports aside. The code of each node is fingerprinted apart; this, with it, is the whole module.
   */
  rests: Map<string, string>
  /** The type errors of the project (graph, kinds, views, kernel). */
  typeErrors: string[]
  /**
   * What TypeScript lets through and the quantities refuse (since g80): two quantities added, subtracted or compared,
   * or multiplied when neither is a ratio, in any code of the project.
   */
  quantityErrors: string[]
  /**
   * What each node's bodies use of their parameters (since g82), by the node and the property of its declaration that
   * holds the body: each parameter whose every use reads a member of it (a method of a port), with those members. A
   * parameter used otherwise (passed on, kept whole) is left out: all of it is used.
   */
  uses: Map<string, Record<string, Record<string, string[]>>>
  /** Code made of a text while the program runs (eval, the Function constructor, a value's constructor): each refuses the build (since g82). */
  textAsCode: string[]
  /** What each node's bodies reach outside them (since g83): the modules they import, the globals they read. */
  reaches: Map<string, Reached[]>
}

/**
 * What a body reaches outside itself (since g83): a module it imports a value from (and the name it imports), or a
 * global, a host's (a browser's, Node.js's: its name, the member read) or ECMAScript's (the member read, or made with no
 * argument: `new Date()`). With the place it is reached at.
 */
export interface Reached {
  module?: string
  name?: string
  global?: string
  member?: string
  ecmaScript?: boolean
  constructed?: boolean
  where: string
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
  /** What makes code of a text while a program runs: a global, or a member read. */
  textAsCode: ProvidedBy<typeof TextAsCode>
  /** How the files of TypeScript's own libraries tell ECMAScript's globals from a host's. */
  libraries: { ecmaScript: string }
  /** How a body names the prelude's public API: the endings of its module's path. */
  prelude: { endings: readonly string[] }
}

const body = (deps: Deps) => {
  const { specifiers, options } = deps
  const ts = deps.ts
  const { relative, sep, resolve, dirname } = deps.paths
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
   * What is kept of a program, with the digest of each file it depends on: its reading (the nodes of its modules, their
   * titles, what each module holds besides them), which depends on its modules alone; its check (the type errors),
   * which depends on every file the compiler read. A body changed checks the program again, and reads nothing again.
   */
  interface Reading { infos: Map<string, StaticInfo>; moduleTitle: Map<string, string>; rests: Map<string, string> }
  interface Kept<T> { files: [string, string | undefined][]; found: T }
  /** A reading as it is written beyond the process: its maps as their entries. */
  interface WrittenReading { infos: [string, StaticInfo][]; moduleTitle: [string, string][]; rests: [string, string][] }
  const writtenReading = (r: Reading): WrittenReading => ({ infos: [...r.infos], moduleTitle: [...r.moduleTitle], rests: [...r.rests] })
  const readReading = (w: WrittenReading): Reading => ({ infos: new Map(w.infos), moduleTitle: new Map(w.moduleTitle), rests: new Map(w.rests) })
  const digest = (text: string) => deps.hashing.createHash(deps.sha256.algorithm).update(text).digest(deps.encodings.hex)
  /** The digest of a file as the compiler of TypeScript reads it; nothing once it is no longer there. */
  const digestOf = (file: string) => {
    const text = ts.sys.readFile(file)
    return text === undefined ? undefined : digest(text)
  }
  const digestsOf = (files: readonly string[]): [string, string | undefined][] => files.map((file) => [file, digestOf(file)])
  /** What was kept under a key, in the process or beyond it, while every file it depends on is as it was. */
  const keptUnder = <T, W>(root: string, key: string, from: (w: W) => T): T | undefined => {
    const known = (deps.kept.get(key) as Kept<T> | undefined) ?? ((w) => w && { files: w.files, found: from(w.found) })(deps.runs.at(root).get(key) as Kept<W> | undefined)
    if (!known || !known.files.every(([file, seen]) => digestOf(file) === seen)) return undefined
    deps.kept.set(key, known)
    return known.found
  }
  const keep = <T, W>(root: string, key: string, files: [string, string | undefined][], found: T, written: W) => {
    deps.kept.set(key, { files, found })
    deps.runs.at(root).set(key, { files, found: written })
  }

  /**
   * `modules`: the modules of the graph, each with its name (a library's module carries the library's name). `extra`:
   * other files to check (the views, which nothing imports). `paths`: where the name of each library leads, for the
   * compiler: to its sources as they are on disk, whatever link the import map of the package goes through. Read again
   * while its modules are as they were, a program gives the reading kept; checked again while every file the compiler
   * read is as it was, the check kept.
   */
  function analyze(modules: { file: string; module: string }[], extra: string[], root: string, paths: Record<string, string[]> = {}): Analysis {
    const files = modules.map((m) => m.file)
    const checkKey = digest(JSON.stringify([ts.version, root, modules, extra, paths, options.types]))
    const readKey = digest(JSON.stringify([[ts.version, root, modules, paths]]))
    const keptReading = keptUnder<Reading, WrittenReading>(root, readKey, readReading)
    const keptCheck = keptUnder<Checked, Checked>(root, checkKey, (checked) => checked)
    if (keptReading && keptCheck?.uses && keptCheck.textAsCode && keptCheck.reaches) {
      return { ...keptReading, ...keptCheck, uses: new Map(keptCheck.uses), reaches: new Map(keptCheck.reaches) }
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
    const reading = keptReading ?? readProgram(program, modules, root)
    if (!keptReading) keep(root, readKey, digestsOf(files), reading, writtenReading(reading))
    const typeErrors = keptCheck?.typeErrors ?? ts.getPreEmitDiagnostics(program)
      .filter((d) => d.category === ts.DiagnosticCategory.Error && (!d.file || !d.file.fileName.includes(specifiers.packages)))
      .map((d) => {
        const where = d.file && d.start !== undefined
          ? reference(relative(root, d.file.fileName), lineNumber(d.file.getLineAndCharacterOfPosition(d.start).line))
          : undefined
        const [first] = ts.flattenDiagnosticMessageText(d.messageText, endOfLine).split(endOfLine)
        return messages.typeError(first, where)
      })
    const quantityErrors = keptCheck?.quantityErrors ?? mixedQuantities(program, modules, root, reading.infos)
    const uses = keptCheck?.uses ?? usesOf(program, exportedOf(program, modules))
    const textAsCode = keptCheck?.textAsCode ?? textAsCodeIn(program, root)
    const reaches = keptCheck?.reaches ?? reachesOf(program, exportedOf(program, modules), root)
    const checked: Checked = { typeErrors, quantityErrors, uses, textAsCode, reaches }
    if (!keptCheck) keep(root, checkKey, digestsOf(program.getSourceFiles().map((sf) => sf.fileName)), checked, checked)
    return { ...reading, typeErrors, quantityErrors, textAsCode, uses: new Map(uses), reaches: new Map(reaches) }
  }

  /** What the check of a program finds: TypeScript's errors, the quantities it lets mix, what bodies use, text run as code. */
  interface Checked {
    typeErrors: string[]
    quantityErrors: string[]
    uses: [string, Record<string, Record<string, string[]>>][]
    textAsCode: string[]
    reaches: [string, Reached[]][]
  }

  /** The function a body is: written inline, or the default export of the file `code.file(…)` names. */
  function bodyFunction(program: ts.Program, e: ts.Expression): ts.SignatureDeclaration | undefined {
    const unwrapped = (x: ts.Expression): ts.Expression =>
      ts.isParenthesizedExpression(x) || ts.isAsExpression(x) || ts.isSatisfiesExpression(x) ? unwrapped(x.expression) : x
    const checker = program.getTypeChecker()
    const functionOf = (x: ts.Expression): ts.SignatureDeclaration | undefined => {
      const y = unwrapped(x)
      if (ts.isArrowFunction(y) || ts.isFunctionExpression(y)) return y
      if (!ts.isIdentifier(y)) return undefined
      const d = checker.getSymbolAtLocation(y)?.valueDeclaration
      if (d && ts.isFunctionDeclaration(d)) return d
      return d && ts.isVariableDeclaration(d) && d.initializer ? functionOf(d.initializer) : undefined
    }
    const inline = functionOf(e)
    if (inline) return inline
    const named = ts.isCallExpression(e) ? head(e.arguments) : undefined
    if (!named || !ts.isStringLiteralLike(named)) return undefined
    const sf = program.getSourceFile(resolve(dirname(e.getSourceFile().fileName), named.text))
    for (const stmt of sf?.statements ?? []) {
      if (ts.isExportAssignment(stmt) && !stmt.isExportEquals) return functionOf(stmt.expression)
      if (ts.isFunctionDeclaration(stmt) && stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword)) return stmt
    }
    return undefined
  }

  /**
   * What a body does with each of its parameters: the members it reads of it (`store.find`, `const { find } = store`),
   * as long as it does nothing else with it; a parameter passed on, kept or spread is used whole, and so are all of
   * them when the body hands its parameters on together.
   */
  function usesIn(checker: ts.TypeChecker, fn: ts.SignatureDeclaration): Record<string, string[]> {
    const param = head(fn.parameters)
    if (!param) return {}
    const nodes: ts.Node[] = []
    const walk = (n: ts.Node): void => {
      nodes.push(n)
      ts.forEachChild(n, walk)
    }
    walk(fn)
    const symbolOf = (n: ts.Identifier) =>
      ts.isShorthandPropertyAssignment(n.parent) && n.parent.name === n ? checker.getShorthandAssignmentValueSymbol(n.parent) : checker.getSymbolAtLocation(n)
    const refsTo = (name: ts.Identifier): ts.Identifier[] => {
      const s = checker.getSymbolAtLocation(name)
      return s ? nodes.filter((n): n is ts.Identifier => ts.isIdentifier(n) && n !== name && symbolOf(n) === s) : []
    }
    const found = new Map<string, Set<string>>()
    const whole = new Set<string>()
    let handedOn = false
    const add = (key: string, member?: string) => {
      const known = found.get(key) ?? new Set<string>()
      if (member !== undefined) known.add(member)
      found.set(key, known)
    }
    const members = (p: ts.ObjectBindingPattern, key: string) => {
      add(key)
      for (const e of p.elements) {
        if (e.dotDotDotToken || !ts.isIdentifier(e.propertyName ?? e.name)) whole.add(key)
        else add(key, (e.propertyName ?? e.name).getText())
      }
    }
    // A value that is the parameter `key`: what is read of it.
    const used = (v: ts.Expression, key: string): void => {
      const up = v.parent
      if (ts.isPropertyAccessExpression(up) && up.expression === v) return add(key, up.name.text)
      if (ts.isVariableDeclaration(up) && up.initializer === v && ts.isObjectBindingPattern(up.name)) return members(up.name, key)
      whole.add(key)
    }
    const bound = (p: ts.ObjectBindingPattern) => {
      for (const e of p.elements) {
        if (e.dotDotDotToken) {
          handedOn = true
          continue
        }
        const key = (e.propertyName ?? e.name).getText()
        if (ts.isIdentifier(e.name)) {
          add(key)
          for (const r of refsTo(e.name)) used(r, key)
        } else if (ts.isObjectBindingPattern(e.name)) members(e.name, key)
        else whole.add(key)
      }
    }
    if (ts.isObjectBindingPattern(param.name)) bound(param.name)
    else if (ts.isIdentifier(param.name)) {
      for (const r of refsTo(param.name)) {
        const up = r.parent
        if (ts.isPropertyAccessExpression(up) && up.expression === r) used(up, up.name.text)
        else if (ts.isVariableDeclaration(up) && up.initializer === r && ts.isObjectBindingPattern(up.name)) bound(up.name)
        else handedOn = true
      }
    } else handedOn = true
    if (handedOn) return {}
    return Object.fromEntries([...found].filter(([key]) => !whole.has(key)).map(([key, ms]) => [key, [...ms].sort()]))
  }

  /** What the bodies of each node use of their parameters, by the property of its declaration that holds each body. */
  function usesOf(program: ts.Program, exported: ReadonlyMap<ts.Node, string>): Checked["uses"] {
    const checker = program.getTypeChecker()
    const out: Checked["uses"] = []
    for (const [decl, ref] of exported) {
      const init = (decl as ts.VariableDeclaration).initializer
      const arg = init && ts.isCallExpression(init) ? head(init.arguments) : undefined
      if (!arg || !ts.isObjectLiteralExpression(arg)) continue
      const byProperty: Record<string, Record<string, string[]>> = {}
      for (const p of arg.properties) {
        if (!ts.isPropertyAssignment(p)) continue
        const fn = bodyFunction(program, p.initializer)
        if (fn) byProperty[p.name.getText()] = usesIn(checker, fn)
      }
      if (Object.keys(byProperty).length) out.push([ref, byProperty])
    }
    return out
  }

  /**
   * What the bodies of each node reach outside them: in a body written in a file, the whole file; inline, the function.
   * A name bound by an import is the module it comes from (a type alone reaches nothing); a name declared only by the
   * libraries of types is a global, ECMAScript's (only a member read, or made with no argument, may do something) or a
   * host's. A relative module, or the prelude's API, is the graph's own code.
   */
  function reachesOf(program: ts.Program, exported: ReadonlyMap<ts.Node, string>, root: string): Checked["reaches"] {
    const checker = program.getTypeChecker()
    const out: Checked["reaches"] = []
    const libraryFile = (sf: ts.SourceFile) => program.isSourceFileDefaultLibrary(sf) || sf.fileName.includes(specifiers.packages)
    const ecmaScriptFile = (sf: ts.SourceFile) => program.isSourceFileDefaultLibrary(sf) && sf.fileName.split(sep).some((part) => part.startsWith(deps.libraries.ecmaScript))
    const own = (module: string) =>
      module.startsWith(specifiers.current) || module.startsWith(specifiers.parent) || deps.prelude.endings.some((ending) => module.endsWith(ending))
    const regionOf = (program: ts.Program, e: ts.Expression): ts.Node | undefined => {
      const fn = bodyFunction(program, e)
      if (!fn) return undefined
      return fn.getSourceFile() === e.getSourceFile() ? fn : fn.getSourceFile()
    }
    for (const [decl, ref] of exported) {
      const init = (decl as ts.VariableDeclaration).initializer
      const arg = init && ts.isCallExpression(init) ? head(init.arguments) : undefined
      if (!arg || !ts.isObjectLiteralExpression(arg)) continue
      const found = new Map<string, Reached>()
      for (const p of arg.properties) {
        if (!ts.isPropertyAssignment(p)) continue
        const region = regionOf(program, p.initializer)
        if (!region) continue
        const sf = region.getSourceFile()
        const where = (n: ts.Node) => reference(relative(root, sf.fileName), lineNumber(sf.getLineAndCharacterOfPosition(n.getStart(sf)).line))
        const add = (r: Reached) => {
          const key = JSON.stringify([r.module, r.name, r.global, r.member, r.constructed])
          if (!found.has(key)) found.set(key, r)
        }
        const visit = (n: ts.Node): void => {
          // Types reach nothing, nor what declares them or an import itself (the names it binds are followed where used).
          if (ts.isTypeNode(n) || ts.isInterfaceDeclaration(n) || ts.isTypeAliasDeclaration(n) || ts.isImportDeclaration(n)) return
          if (ts.isIdentifier(n) && !(ts.isPropertyAccessExpression(n.parent) && n.parent.name === n)) reached(n)
          ts.forEachChild(n, visit)
        }
        const reached = (id: ts.Identifier) => {
          const symbol = checker.getSymbolAtLocation(id)
          if (!symbol) return
          const memberRead = ts.isPropertyAccessExpression(id.parent) && id.parent.expression === id ? id.parent.name.text : undefined
          if (symbol.flags & ts.SymbolFlags.Alias) {
            const d = head(symbol.declarations ?? [])
            const declaration = d && (ts.isImportSpecifier(d) ? d.parent.parent.parent : ts.isNamespaceImport(d) ? d.parent.parent : ts.isImportClause(d) ? d.parent : undefined)
            if (!declaration || !ts.isImportDeclaration(declaration) || !ts.isStringLiteralLike(declaration.moduleSpecifier)) return
            const typeOnly = declaration.importClause?.isTypeOnly || (d && ts.isImportSpecifier(d) && d.isTypeOnly)
            const module = declaration.moduleSpecifier.text
            if (typeOnly || own(module)) return
            const name = d && ts.isImportSpecifier(d) ? (d.propertyName ?? d.name).text : memberRead
            return add({ module, name, where: where(id) })
          }
          const declared = symbol.declarations ?? []
          if (!declared.length || !declared.every((x) => libraryFile(x.getSourceFile()))) return
          // ECMAScript's, even when a host adds to it (Node's types add to String, to Array).
          const ecmaScript = declared.some((x) => ecmaScriptFile(x.getSourceFile()))
          const constructed = ts.isNewExpression(id.parent) && id.parent.expression === id && !id.parent.arguments?.length
          if (ecmaScript && !memberRead && !constructed) return
          add({ global: id.text, member: memberRead, ecmaScript: ecmaScript || undefined, constructed: constructed || undefined, where: where(id) })
        }
        visit(region)
      }
      if (found.size) out.push([ref, [...found.values()]])
    }
    return out
  }

  /**
   * Code made of a text, anywhere in the project's code (its graph, its bodies, its kinds and views, its libraries): a
   * global that does it, or a member read that leads to one. Each is refused, with its place.
   */
  function textAsCodeIn(program: ts.Program, root: string): string[] {
    const checker = program.getTypeChecker()
    const names = new Set<string>(deps.textAsCode)
    const found: string[] = []
    const global = (n: ts.Identifier) => {
      const declared = checker.getSymbolAtLocation(n)?.declarations ?? []
      return declared.length && declared.every((d) => d.getSourceFile().isDeclarationFile)
    }
    for (const sf of program.getSourceFiles()) {
      if (sf.isDeclarationFile || program.isSourceFileDefaultLibrary(sf) || sf.fileName.includes(specifiers.packages)) continue
      const visit = (n: ts.Node): void => {
        const member = ts.isPropertyAccessExpression(n) && names.has(n.name.text)
        const named = ts.isIdentifier(n) && names.has(n.text) && !(ts.isPropertyAccessExpression(n.parent) && n.parent.name === n) && global(n)
        if (member || named) {
          const at = member ? (n as ts.PropertyAccessExpression).name : (n as ts.Identifier)
          found.push(messages.textAsCode(at.text, reference(relative(root, sf.fileName), lineNumber(sf.getLineAndCharacterOfPosition(at.getStart(sf)).line))))
        }
        ts.forEachChild(n, visit)
      }
      visit(sf)
    }
    return found
  }

  /** The exported constants of a program's modules (the nodes, and what else a module exports), by their declaration. */
  function exportedOf(program: ts.Program, modules: { file: string; module: string }[]): Map<ts.Node, string> {
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
    return exported
  }

  /**
   * The quantities a program's types name (since g80). `Quantity<typeof Time>` marks a number with the type of the node
   * Time: the quantity of a type is the exported constant whose type its mark names; that of a value, its own or that of
   * what it holds (a record's values, a list's elements).
   */
  function quantitiesOf(checker: ts.TypeChecker, exported: ReadonlyMap<ts.Node, string>) {
    // The exported constants that may be quantities (their type has units), and the node each mark names, found once.
    const candidates = [...exported].flatMap(([decl, ref]): [ts.Type, string][] => {
      const t = checker.getTypeAtLocation((decl as ts.VariableDeclaration).name)
      return checker.getPropertyOfType(t, QuantityField.units) ? [[t, ref]] : []
    })
    const named = new Map<ts.Type, string | undefined>()
    /** The node a mark names: the quantity whose type it is (or the same type, written another way). */
    const nodeOf = (t: ts.Type): string | undefined => {
      if (!named.has(t)) {
        const [, ref] = candidates.find(([n]) => n === t || (checker.isTypeAssignableTo(n, t) && checker.isTypeAssignableTo(t, n))) ?? []
        named.set(t, ref)
      }
      return named.get(t)
    }
    /** The quantity a type's mark names, for a type and each type of a union. */
    const marked = (t: ts.Type, at: ts.Node): string | undefined => {
      for (const part of t.isUnion() ? t.types : [t]) {
        const mark = checker.getPropertyOfType(part, QuantityMark)
        const q = mark && nodeOf(checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(mark, at)))
        if (q) return q
      }
      return undefined
    }
    /**
     * The quantity of a value: its own, or that of what it holds, one level down: the elements of a list or a tuple (a
     * range), the values of a record. A node, a function and what they hold are not looked into.
     */
    const within = (t: ts.Type, at: ts.Node): string | undefined => {
      const own = marked(t, at)
      if (own !== undefined) return own
      const parts = t.isUnion() ? t.types : [t]
      const held = parts.flatMap((part) =>
        checker.isArrayType(part) || checker.isTupleType(part) ? checker.getTypeArguments(part as ts.TypeReference)
          : part.getCallSignatures().length ? []
            : [...checker.getIndexInfosOfType(part).map((i) => i.type), ...checker.getPropertiesOfType(part).map((p) => checker.getTypeOfSymbolAtLocation(p, at))])
      return held.map((h) => marked(h, at)).find((q) => q !== undefined)
    }
    return { marked, within }
  }

  /**
   * Two quantities that do not mix, wherever the code of a project (its graph, its bodies) puts them together: added,
   * subtracted or compared; multiplied or divided when neither is a ratio, but a quantity divided by itself (a ratio).
   */
  function mixedQuantities(program: ts.Program, modules: { file: string; module: string }[], root: string, infos: ReadonlyMap<string, StaticInfo>): string[] {
    const checker = program.getTypeChecker()
    const { marked } = quantitiesOf(checker, exportedOf(program, modules))
    const S = ts.SyntaxKind
    const together = new Set([S.PlusToken, S.MinusToken, S.PlusEqualsToken, S.MinusEqualsToken, S.LessThanToken, S.LessThanEqualsToken,
      S.GreaterThanToken, S.GreaterThanEqualsToken, S.EqualsEqualsEqualsToken, S.ExclamationEqualsEqualsToken, S.EqualsEqualsToken, S.ExclamationEqualsToken])
    const product = new Set([S.AsteriskToken, S.AsteriskEqualsToken])
    const quotient = new Set([S.SlashToken, S.SlashEqualsToken])
    const isRatio = (q: string) => {
      const written = infos.get(q)?.props[QuantityField.ratio]
      return written !== undefined && JSON.parse(written) === true
    }
    const titleOf = (q: string) => infos.get(q)?.title ?? q
    const found: string[] = []
    for (const sf of program.getSourceFiles()) {
      if (sf.isDeclarationFile || sf.fileName.includes(specifiers.packages)) continue
      const visit = (n: ts.Node): void => {
        if (ts.isBinaryExpression(n)) {
          const op = n.operatorToken.kind
          const a = marked(checker.getTypeAtLocation(n.left), n.left)
          const b = marked(checker.getTypeAtLocation(n.right), n.right)
          if (a !== undefined && b !== undefined) {
            const where = reference(relative(root, sf.fileName), lineNumber(sf.getLineAndCharacterOfPosition(n.getStart(sf)).line))
            if (together.has(op) && a !== b) found.push(messages.quantitiesTogether(where, n.operatorToken.getText(sf), titleOf(a), titleOf(b)))
            const neither = !isRatio(a) && !isRatio(b)
            if (product.has(op) && neither) found.push(messages.quantitiesMultiplied(where, titleOf(a), titleOf(b)))
            if (quotient.has(op) && neither && a !== b) found.push(messages.quantitiesMultiplied(where, titleOf(a), titleOf(b)))
          }
        }
        ts.forEachChild(n, visit)
      }
      visit(sf)
    }
    return found
  }

  /** What a program's modules declare: each node, its title and what it names; each module's title and what it holds besides its nodes. */
  function readProgram(program: ts.Program, modules: { file: string; module: string }[], root: string): Reading {
    const checker = program.getTypeChecker()
    const infos = new Map<string, StaticInfo>()
    const moduleTitle = new Map<string, string>()
    const rests = new Map<string, string>()

    // All the exported constants, to recognise the references between nodes, and the quantities that types name.
    const exported = exportedOf(program, modules)
    const quantities = quantitiesOf(checker, exported)

    for (const { file, module: mod } of modules) {
      const sf = program.getSourceFile(file)
      if (!sf) continue
      const title = moduleTitleOf(sf.getFullText())
      if (title) moduleTitle.set(mod, title)
      // Besides its nodes: its other statements, and the comments before each node (the imports aside).
      const nodes = new Set([...exported.keys()].map((d) => d.parent.parent))
      rests.set(relative(root, file).split(sep).join(specifiers.separator), sf.statements
        .filter((stmt) => !ts.isImportDeclaration(stmt))
        .map((stmt) => (nodes.has(stmt) ? stmt.getFullText(sf).slice(zero, stmt.getLeadingTriviaWidth(sf)) : stmt.getFullText(sf)))
        .join(empty))

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

        // How the node is called, when it is (a rule, a function): what the compiler says of its arguments and answer.
        const called = head(checker.getSignaturesOfType(checker.getTypeAtLocation(vd.name), ts.SignatureKind.Call))
        if (called) {
          const answer = called.getReturnType()
          info.signature = {
            params: called.getParameters().map((p) => checker.typeToString(checker.getTypeOfSymbolAtLocation(p, vd))),
            returns: checker.typeToString(answer),
            decides: (answer.flags & ts.TypeFlags.BooleanLike) !== zero,
          }
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
          // The members of the type it names first: a port's contract, whose methods its consumers may call.
          const named = head(init.typeArguments ?? [])
          // A type open to any name (an index signature) names no member: nothing to limit.
          const contract = named && checker.getTypeFromTypeNode(named)
          if (contract && !checker.getIndexInfosOfType(contract).length) info.members = checker.getPropertiesOfType(contract).map((p) => p.getName())
          info.args = init.arguments.map((a) => a.getText(sf))
          const arg = head(init.arguments)
          const obj = arg && ts.isObjectLiteralExpression(arg) ? arg : undefined
          for (const p of obj?.properties ?? []) {
            if (ts.isPropertyAssignment(p)) info.props[p.name.getText(sf)] = p.initializer.getText(sf)
            else if (ts.isShorthandPropertyAssignment(p) || ts.isMethodDeclaration(p)) info.props[p.name.getText(sf)] = p.getText(sf)
            // What the property measures: the type the declaration expects of it, or else the type of what it holds.
            if (!ts.isPropertyAssignment(p)) continue
            const expected = checker.getContextualType(p.initializer)
            const q = (expected && quantities.within(expected, p)) ?? quantities.within(checker.getTypeAtLocation(p.initializer), p)
            if (q !== undefined) info.quantities = { ...info.quantities, [p.name.getText(sf)]: q }
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
    return { infos, moduleTitle, rests }
  }

  return { analyze }
}

export type Api = ReturnType<typeof body>
export default body
