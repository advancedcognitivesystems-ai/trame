// Lecture statique : l'API du compilateur TypeScript lit les sources sans les exécuter.
// Pour chaque constante exportée : commentaire (titre, description), ligne, arguments de type,
// texte des propriétés, et références vers les autres constantes exportées.

import type { Chemins, CompilateurTs } from "../../architecture"
import type ts from "typescript"
import type { StaticInfo } from "../../../trame/kernel"

export interface Analysis {
  infos: Map<string, StaticInfo> // clé : module.nom
  moduleTitle: Map<string, string>
  /** Les erreurs de type du projet (graphe, types, vues, noyau). */
  typeErrors: string[]
}

export interface Deps {
  ts: CompilateurTs
  chemins: Chemins
  positions: { numero(ligneTs: number): number; reference(fichier: string, ligne: number): string }
  /** Les premières lignes du commentaire de documentation font le titre. */
  commentaire: { lignesDuTitre: number }
  ecma: { premierIndice: number }
}

const corps = (deps: Deps) => {
  const ts = deps.ts
  const { basename, relative } = deps.chemins
  const { numero, reference } = deps.positions
  const { lignesDuTitre } = deps.commentaire

  /** `extra` : d'autres fichiers à vérifier (les vues, que rien n'importe). */
  function analyze(files: string[], extra: string[] = [], root = "."): Analysis {
    const program = ts.createProgram([...files, ...extra], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      // Le graphe, les types et les vues ne touchent pas à Node : pas de types globaux, vérification bien plus rapide.
      types: ["node"],
    })
    const checker = program.getTypeChecker()
    const infos = new Map<string, StaticInfo>()
    const moduleTitle = new Map<string, string>()

    // Toutes les constantes exportées, pour reconnaître les références entre nœuds.
    const exported = new Map<ts.Node, string>() // déclaration → module.nom
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
        // Le texte de la déclaration, commentaires exclus, espaces normalisés : c'est ce que trame.lock fige.
        const stmt = vd.parent.parent
        const info: StaticInfo = {
          file: `src/${mod}.ts`,
          line: numero(sf.getLineAndCharacterOfPosition(vd.getStart(sf)).line),
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
          info.title = lines.slice(deps.ecma.premierIndice, lignesDuTitre).join(" ")
          info.description = lines.slice(lignesDuTitre).join(" ") || undefined
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
                // Sous quelle propriété de l'objet passé au constructeur se trouve la référence ?
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
          ? `${reference(relative(root, d.file.fileName), numero(d.file.getLineAndCharacterOfPosition(d.start).line))}  `
          : ""
        return where + ts.flattenDiagnosticMessageText(d.messageText, "\n").split("\n")[0]
      })
    return { infos, moduleTitle, typeErrors }
  }

  return { analyze }
}

export type Api = ReturnType<typeof corps>
export default corps
