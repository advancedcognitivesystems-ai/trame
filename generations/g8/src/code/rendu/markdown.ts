// Rendu Markdown : le rendu textuel des documents (décision « Rendu textuel des documents : Markdown »).
// La syntaxe vient des éléments de la spec Markdown (src/markdown.ts) : ce corps ne fait que les composer.
// Les figures sont des diagrammes Mermaid, écrits par le rendu des figures, dans des blocs mermaid. Pur.

import { frDate } from "../../../trame/kernel"
import type { Block, Card, Document, Figure, Inline, ProvidedBy } from "../../../trame/kernel"
import type * as md from "../../markdown"
import type * as mm from "../../mermaid"
import type { Api as DiagrammesApi } from "./mermaid"
import type * as moteur from "../../moteur"
import type { Api as CommunApi } from "./commun"
import type { Location } from "./commun"

export interface MarkdownContext {
  /** Où vit la fiche de chaque nœud. */
  locate: Map<string, Location>
  /** Le fichier de chaque document (pour les liens entre documents). */
  files: Map<string, string | undefined>
}
export interface Deps {
  commun: CommunApi
  references: ProvidedBy<typeof moteur.References>
  /** Les niveaux de titre du document. */
  rendu: { niveauDuTitre: number; niveauDesSections: number }
  diagrammes: DiagrammesApi
  blocMermaid: ProvidedBy<typeof mm.BlocMermaid>
  blocs: ProvidedBy<typeof md.Blocs>
  titre: ProvidedBy<typeof md.Titre>
  elementDeListe: ProvidedBy<typeof md.ElementDeListe>
  citation: ProvidedBy<typeof md.Citation>
  blocDeCode: ProvidedBy<typeof md.BlocDeCode>
  emphase: ProvidedBy<typeof md.Emphase>
  gras: ProvidedBy<typeof md.Gras>
  codeEnLigne: ProvidedBy<typeof md.CodeEnLigne>
  lien: ProvidedBy<typeof md.Lien>
  reference: ProvidedBy<typeof md.ReferenceRelative>
  cellule: ProvidedBy<typeof md.CelluleDeTableau>
  tableau: ProvidedBy<typeof md.Tableau>
  ancre: ProvidedBy<typeof md.Ancre>
  repli: ProvidedBy<typeof md.Repli>
}

const corps = (deps: Deps) => {
  const { inlineText, isOpen, resolutionInlines, validityParts, valueText } = deps.commun
  const { blocs, titre, elementDeListe, citation, blocDeCode, emphase, gras, codeEnLigne, lien, reference, cellule, tableau, ancre, repli } = deps
  const { rendu, blocMermaid } = deps
  const { diagramme } = deps.diagrammes
  const { identifiant } = deps.references

  function toMarkdown(d: Document, ctx: MarkdownContext): string {
    const href = (ref: string): string | undefined => {
      const loc = ctx.locate.get(ref)
      if (!loc) return undefined
      if (loc.doc === d.id) return reference(undefined, loc.anchor)
      return loc.file ? reference(loc.file, loc.anchor) : undefined
    }

    const inline = (i: Inline): string => {
      if (typeof i === "string") return i
      switch (i.t) {
        case "value": return isOpen(i) ? gras(valueText(i)) : valueText(i)
        case "ref": {
          const h = href(i.ref)
          return h ? lien(i.title, h) : i.title
        }
        case "doc": {
          const file = ctx.files.get(i.id)
          return file ? lien(i.title, reference(file)) : i.title
        }
        case "status": return gras(i.status)
        case "severity": return i.severity
        case "date": return frDate(i.date)
        case "person": return i.name
        case "ident": return codeEnLigne(i.text)
      }
    }
    const line = (list: Inline[]) => list.map(inline).join("")
    const cell = (list: Inline[]) => cellule(line(list))

    const table = (head: string[], rows: string[][]): string[] => [...tableau(head.map(cellule), rows), ""]

    const card = (c: Card, level: number): string[] => {
      const L: string[] = [ancre(c.id), "", titre(level, `${c.title}${c.repealedBy ? " (abrogé)" : ""}`), ""]
      L.push([codeEnLigne(c.id), c.source && codeEnLigne(c.source), c.status && `statut : ${gras(c.status)}`, c.published && "publié"].filter(Boolean).join(" · "), "")
      if (c.description) L.push(c.description, "")
      if (c.repealedBy) L.push(`${gras("Abrogé")} par ${inline({ t: "ref", ...c.repealedBy })} : ce nœud n'est plus dans le graphe en vigueur, ni dans l'instantané.`, "")
      L.push(...blocks(c.body, level + 1))
      for (const r of c.resolutions) L.push(citation(line(resolutionInlines(r))), "")
      const facts = [
        ...c.facts.map((f) => `${f.label} : ${line(f.value)}`),
        ...c.links.map((l) => `${l.label}${l.active ? "" : " (pas en vigueur)"} : ${l.targets.map((t) => inline({ t: "ref", ...t })).join(", ")}`),
      ]
      for (const f of facts) L.push(elementDeListe(f))
      if (facts.length) L.push("")
      for (const ch of c.children) L.push(ancre(identifiant(ch.ref)), "", ...blocks(ch.body, level + 1))
      return L
    }

    const figure = (f: Figure, caption?: string): string[] => {
      const out = [...blocMermaid(diagramme(f)), ""]
      if (caption) out.push(emphase(caption), "")
      return out
    }

    const blocks = (list: Block[], level: number): string[] => {
      const L: string[] = []
      for (const b of list) {
        switch (b.type) {
          case "para": L.push(line(b.content), ""); break
          case "facts": L.push(...b.items.map((f) => elementDeListe(`${f.label} : ${line(f.value)}`)), ""); break
          case "list": L.push(...b.items.map((x) => elementDeListe(line(x))), ""); break
          case "table": L.push(...table(b.head, b.rows.map((r) => r.map(cell)))); break
          case "code": L.push(...blocDeCode(b.lang, [b.text]), ""); break
          case "checks":
            if (b.title) L.push(gras(line(b.title)), "")
            L.push(...table(["Critère", "Résultat"], b.items.map((x) => [
              cellule(x.name),
              x.outcome === "validé" ? "validé" : `${gras(x.outcome)}${x.detail ? ` : ${cell(x.detail)}` : ""}`,
            ])))
            break
          case "validity": {
            const [head, rest] = validityParts(b)
            L.push(`${gras(head)}${rest}`, "")
            break
          }
          case "details": L.push(...repli(b.summary, blocks(b.blocks, level)), ""); break
          case "section": {
            if (b.id) L.push(ancre(b.id), "")
            L.push(titre(level, b.title), "", ...blocks(b.blocks, level + 1))
            break
          }
          case "summary": L.push(citation(gras(line(b.content))), ""); break
          case "issues":
            L.push(...table(["Gravité", "Quoi", "Où", "Responsable", "Conséquence"], b.items.map((x) => [
              x.severity, cellule(x.what),
              typeof x.where === "string" ? cellule(x.where) : x.where ? inline({ t: "ref", ...x.where }) : "",
              x.owner ?? "à attribuer", cellule(x.effect ?? ""),
            ])))
            break
          case "resolution": L.push(citation(line(resolutionInlines(b))), ""); break
          case "card": L.push(...card(b, level)); break
          case "figure": L.push(...figure(b.figure, b.caption)); break
          default: {
            const never: never = b
            throw new Error(`bloc inconnu : ${JSON.stringify(never)}`)
          }
        }
      }
      return L
    }

    const L: string[] = [titre(rendu.niveauDuTitre, d.title), ""]
    if (d.intro) L.push(emphase(line(d.intro)), "")
    L.push(...blocks(d.blocks, rendu.niveauDesSections))
    return blocs(L)
  }

  return { toMarkdown }
}

export type Api = ReturnType<typeof corps>
export default corps
