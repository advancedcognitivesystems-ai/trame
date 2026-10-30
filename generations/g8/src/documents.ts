/** Trame · Documents */

import { decision } from "../kinds/decision"
import type { DateRole, Figure, ProvidedBy } from "../trame/kernel"
import type { LienMermaid, Organigramme, ProprietesDeStyle } from "./mermaid"

type Sens = Parameters<ProvidedBy<typeof Organigramme>>[0]
type Trait = Parameters<ProvidedBy<typeof LienMermaid>>[2]
type Style = Parameters<ProvidedBy<typeof ProprietesDeStyle>>[0]
type Forme = Extract<Figure, { type: "graph" }>["shape"]

/** Comment Trame dessine ses figures, dans les termes de la spec Mermaid. */
export interface AffichageDesFigures {
  /** Ce qui précède le rang d'un nœud dans son identifiant Mermaid. */
  identifiant: string
  /** Le sens de lecture de chaque forme de figure. */
  sens: Record<Forme, Sens>
  /** Le trait d'une arête : selon sa nature (calculée, déduite), son rôle dans un recoupement (gagnant, appui), sinon le trait des autres. */
  traits: { calculée: Trait; déduite: Trait; gagnant: Trait; appui: Trait; autre: Trait }
  /** La classe d'un nœud sans statut. */
  statutParDefaut: string
  /** L'aspect d'un nœud qui n'existe plus que dans l'historique. */
  historique: Style
  /** L'aspect d'un nœud qui n'est pas en vigueur à la date du graphe. */
  inactif: Style
  /** Les chronologies : formats des dates, libellés, et quelles dates deviennent des jalons. */
  chronologie: { formatDates: string; formatAxe: string; titre: string; periode: string; aujourdhui: string; jalons: DateRole[] }
}

/**
 * Rendu textuel des documents : Markdown
 * Les documents de Trame s'écrivent en Markdown : CommonMark, avec les tableaux de GFM. Ils se lisent tels quels dans
 * un terminal ou un éditeur, se comparent ligne à ligne dans une revue, et les forges (GitHub, GitLab) comme la plupart
 * des éditeurs les affichent mis en forme. Le HTML n'y sert qu'aux ancres et aux blocs repliables. C'est le rendu textuel
 * de Trame, d'où l'extension des documents dans la disposition ; la page en est le rendu HTML, le terminal le rendu texte.
 */
export const RenduTextuel = decision<{ niveauDuTitre: number; niveauDesSections: number }>({
  owner: "trame",
  value: { niveauDuTitre: 1, niveauDesSections: 2 },
  rejected: {
    "HTML seul": "illisible en texte brut, et une revue ne compare plus des lignes",
    "AsciiDoc ou reStructuredText": "moins bien affichés par les forges et les éditeurs",
    "Texte brut": "ni liens, ni tableaux, ni figures",
  },
})

/**
 * Figures : des diagrammes Mermaid dans les documents
 * Une figure (les couches du graphe, l'arbre d'un impact, une chronologie) s'écrit dans le document Markdown comme un
 * diagramme Mermaid, dans un bloc « mermaid » : GitHub, GitLab et la plupart des éditeurs le dessinent, et il reste du
 * texte, qu'une revue compare ligne à ligne. La valeur dit comment Trame dessine ses figures : le sens de lecture de
 * chaque forme, le trait de chaque arête, l'aspect d'un nœud historique ou qui n'est pas en vigueur, la chronologie.
 * Les couleurs des statuts viennent de la palette.
 */
export const FiguresEnMermaid = decision<AffichageDesFigures>({
  owner: "trame",
  value: {
    identifiant: "n",
    sens: { couches: "versLeBas", arbre: "versLeBas", chemin: "versLaDroite" },
    traits: { calculée: "pointilleOuvert", déduite: "pointille", gagnant: "epais", appui: "epais", autre: "plein" },
    statutParDefaut: "neutre",
    historique: { pointilles: "4 3" },
    inactif: { opacite: "0.5" },
    chronologie: {
      formatDates: "YYYY-MM-DD", formatAxe: "%d.%m", titre: "Autour du", periode: "En vigueur", aujourdhui: "Date du graphe",
      jalons: ["échéance", "revue"],
    },
  },
  rejected: {
    "Images (SVG, PNG)": "à régénérer à chaque changement, et muettes dans une revue de texte",
    "Graphviz (DOT)": "ni GitHub ni GitLab ne le dessinent",
    "PlantUML": "demande un serveur de rendu",
  },
})
