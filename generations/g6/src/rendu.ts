/** Trame · Rendus */

import { code } from "../trame/kernel"
import { fonction } from "../kinds/fonction"
import { SpecificationExecutable } from "./produit"
import { Palette } from "./apparence"
import {
  Blocs, Titre, ElementDeListe, Citation, BlocDeCode, Emphase, Gras, CodeEnLigne, Lien, ReferenceRelative,
  CelluleDeTableau, Tableau, Ancre, Repli, Petit,
} from "./markdown"
import {
  Organigramme, NoeudMermaid, SousGraphe, LienMermaid, DefinitionDeClasse, StyleDeNoeuds,
  Chronologie, SectionDeChronologie, TacheDeChronologie, JalonDeChronologie, BlocMermaid,
} from "./mermaid"
import { RenduTextuel, FiguresEnMermaid } from "./documents"

/**
 * Rendu commun
 * Ce que partagent les rendus : une valeur en texte, une résolution, où vit chaque nœud.
 */
export const Commun = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  body: code.file<typeof import("./code/rendu/commun").default>("./code/rendu/commun.ts"),
})

/**
 * Rendu des figures
 * Une figure en diagramme Mermaid, comme le décide « Figures : des diagrammes Mermaid dans les documents » : il compose
 * les éléments de la spec Mermaid, avec les couleurs de la palette.
 */
export const Diagrammes = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: {
    figures: FiguresEnMermaid, palette: Palette, petit: Petit,
    organigramme: Organigramme, noeud: NoeudMermaid, sousGraphe: SousGraphe, lien: LienMermaid, classe: DefinitionDeClasse, style: StyleDeNoeuds,
    chronologie: Chronologie, section: SectionDeChronologie, tache: TacheDeChronologie, jalon: JalonDeChronologie,
  },
  body: code.file<typeof import("./code/rendu/mermaid").default>("./code/rendu/mermaid.ts"),
})

/**
 * Rendu Markdown
 * Le rendu textuel des documents (« Rendu textuel des documents : Markdown »). Il compose les éléments de la spec
 * Markdown, et met les figures dans des blocs mermaid : il n'écrit lui-même aucune marque de syntaxe.
 */
export const Markdown = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: {
    commun: Commun, rendu: RenduTextuel, diagrammes: Diagrammes, blocMermaid: BlocMermaid,
    blocs: Blocs, titre: Titre, elementDeListe: ElementDeListe, citation: Citation, blocDeCode: BlocDeCode,
    emphase: Emphase, gras: Gras, codeEnLigne: CodeEnLigne, lien: Lien, reference: ReferenceRelative,
    cellule: CelluleDeTableau, tableau: Tableau, ancre: Ancre, repli: Repli,
  },
  body: code.file<typeof import("./code/rendu/markdown").default>("./code/rendu/markdown.ts"),
})

/**
 * Rendu texte
 * Ce qu'affiche le terminal.
 */
export const Texte = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { commun: Commun },
  body: code.file<typeof import("./code/rendu/texte").default>("./code/rendu/texte.ts"),
})
