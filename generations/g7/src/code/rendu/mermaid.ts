// Rendu des figures : un diagramme Mermaid par figure. La syntaxe vient de la spec Mermaid (src/mermaid.ts), les choix
// d'affichage de la décision « Figures en Mermaid » (src/documents.ts), les couleurs de la palette. Pur.

import { frDate, fullDate } from "../../../trame/kernel"
import type { Figure, ProvidedBy } from "../../../trame/kernel"
import type { Palette } from "../../architecture"
import type { AffichageDesFigures } from "../../documents"
import type * as md from "../../markdown"
import type * as mm from "../../mermaid"

type Graphe = Extract<Figure, { type: "graph" }>
type Frise = Extract<Figure, { type: "timeline" }>

export interface Deps {
  figures: AffichageDesFigures
  palette: Palette
  petit: ProvidedBy<typeof md.Petit>
  organigramme: ProvidedBy<typeof mm.Organigramme>
  noeud: ProvidedBy<typeof mm.NoeudMermaid>
  sousGraphe: ProvidedBy<typeof mm.SousGraphe>
  lien: ProvidedBy<typeof mm.LienMermaid>
  classe: ProvidedBy<typeof mm.DefinitionDeClasse>
  style: ProvidedBy<typeof mm.StyleDeNoeuds>
  chronologie: ProvidedBy<typeof mm.Chronologie>
  section: ProvidedBy<typeof mm.SectionDeChronologie>
  tache: ProvidedBy<typeof mm.TacheDeChronologie>
  jalon: ProvidedBy<typeof mm.JalonDeChronologie>
}

const corps = (deps: Deps) => {
  const { figures, petit, organigramme, noeud, sousGraphe, lien, classe, style, chronologie, section, tache, jalon } = deps
  const { clair, statuts, encre } = deps.palette

  /** Un graphe : ses nœuds (par module, pour des couches), ses arêtes, puis le style de chaque statut. */
  function graphe(f: Graphe): string[] {
    const ids = new Map(f.nodes.map((n, i) => [n.ref, figures.identifiant + i]))
    const id = (ref: string) => ids.get(ref)!
    // Le titre du nœud, et son type en petit dessous.
    const unNoeud = (n: Graphe["nodes"][number]) => noeud(id(n.ref), [n.title, petit(n.kindLabel)], n.status ?? figures.statutParDefaut)
    const instructions: string[] = []
    if (f.shape === "couches" && f.groups.length > 1) {
      for (const g of f.groups) {
        const siens = f.nodes.filter((n) => n.module === g.id)
        if (siens.length) instructions.push(...sousGraphe(g.id, g.label, siens.map(unNoeud)))
      }
    } else {
      instructions.push(...f.nodes.map(unNoeud))
    }
    const t = figures.traits
    for (const e of f.edges) {
      if (!ids.has(e.from) || !ids.has(e.to)) continue
      const trait = e.nature === "calculée" ? t.calculée : e.nature === "déduite" ? t.déduite : e.role === "gagnant" ? t.gagnant : e.role === "appui" ? t.appui : t.autre
      instructions.push(lien(id(e.from), id(e.to), trait, `${e.label}${e.active ? "" : " (pas en vigueur)"}`))
    }
    for (const [statut, c] of Object.entries(statuts)) {
      instructions.push(classe(statut, { remplissage: clair[c.fond], contour: clair[c.trait], couleurDuTexte: clair[encre] }))
    }
    const historiques = f.nodes.filter((n) => n.history).map((n) => id(n.ref))
    if (historiques.length) instructions.push(style(historiques, figures.historique))
    for (const n of f.nodes.filter((x) => !x.active)) instructions.push(style([id(n.ref)], figures.inactif))
    return organigramme(figures.sens[f.shape], instructions)
  }

  /** Une chronologie : une section par nœud daté (ses périodes en vigueur, ses jalons), puis la date du graphe. */
  function frise(f: Frise): string[] {
    const c = figures.chronologie
    const sections: string[] = []
    for (const lane of f.lanes) {
      sections.push(...section(lane.title, [
        ...lane.periods.map((p) => tache(c.periode, [p.from ?? f.from, p.until ?? f.to])),
        ...lane.marks.filter((m) => c.jalons.includes(m.role)).map((m) => jalon(m.label, fullDate(m.date))),
      ]))
    }
    sections.push(...section(c.aujourdhui, [jalon(frDate(f.today), f.today)]))
    return chronologie(c.formatDates, c.formatAxe, `${c.titre} ${frDate(f.today)}`, sections)
  }

  /** Les lignes du diagramme d'une figure. */
  const diagramme = (f: Figure): string[] => (f.type === "graph" ? graphe(f) : frise(f))

  return { diagramme }
}

export type Api = ReturnType<typeof corps>
export default corps
