/** Trame · Rendus */

import { code } from "../trame/kernel"
import { fonction } from "../kinds/fonction"
import { SpecificationExecutable } from "./produit"
import { Palette } from "./apparence"
import {
  Blocs, Titre, ElementDeListe, Citation, BlocDeCode, Emphase, Gras, CodeEnLigne, Lien, ReferenceRelative,
  CelluleDeTableau, Tableau, Ancre, Repli,
} from "./markdown"

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
 * Rendu Markdown
 * Compose les éléments de la spec Markdown : il n'écrit lui-même aucune marque de syntaxe.
 */
export const Markdown = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: {
    commun: Commun, palette: Palette,
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
