/** Trame · Rendus */

import { code } from "../trame/kernel"
import { fonction } from "../kinds/fonction"
import { SpecificationExecutable } from "./produit"
import { Palette } from "./apparence"

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
 */
export const Markdown = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { commun: Commun, palette: Palette },
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
