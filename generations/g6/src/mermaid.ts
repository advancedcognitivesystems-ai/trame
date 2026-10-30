/** Trame · Mermaid */

import { norme } from "../kinds/norme"
import { syntaxe } from "../kinds/syntaxe"
import { BlocDeCode } from "./markdown"

/**
 * Mermaid
 * La syntaxe des diagrammes que les documents de Trame contiennent : des organigrammes et des diagrammes de Gantt.
 * Les marques que plusieurs constructions partagent sont ici.
 */
export const Mermaid = norme({
  owner: "trame",
  source: "Mermaid 11 : organigrammes (flowchart) et diagrammes de Gantt",
  url: "https://mermaid.js.org/intro/syntax-reference.html",
  constantes: {
    retrait: { valeur: "  ", sens: "Décale une instruction dans son bloc : Mermaid l'ignore, il sert à la lecture" },
    espace: { valeur: " ", sens: "Sépare un mot-clé de ce qu'il introduit" },
    guillemet: { valeur: "\"", sens: "Entoure un libellé" },
  },
})

// Organigrammes ------------------------------------------------------------------------

/**
 * Libellé
 * Le texte d'un nœud, d'un sous-graphe ou d'un lien : un guillemet y devient un code d'entité.
 */
export const LibelleMermaid = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : codes d'entité pour échapper des caractères",
  url: "https://mermaid.js.org/syntax/flowchart.html#entity-codes-to-escape-characters",
  constantes: {
    entite: { valeur: "#quot;", sens: "Remplace un guillemet dans un libellé" },
  },
  ecrire: ({ norme: { guillemet }, entite }) => (texte: string) => texte.split(guillemet).join(entite),
  exemples: [{ entree: ["Le \"graphe\""], sortie: "Le #quot;graphe#quot;" }],
})

/**
 * Organigramme
 * Le mot-clé, le sens de lecture, puis les instructions, décalées d'un cran.
 */
export const Organigramme = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : sens",
  url: "https://mermaid.js.org/syntax/flowchart.html#direction",
  constantes: {
    motCle: { valeur: "flowchart", sens: "Ouvre un organigramme" },
    versLeBas: { valeur: "TB", sens: "De haut en bas" },
    versLaDroite: { valeur: "LR", sens: "De gauche à droite" },
    versLeHaut: { valeur: "BT", sens: "De bas en haut" },
    versLaGauche: { valeur: "RL", sens: "De droite à gauche" },
  },
  ecrire: ({ norme: { retrait, espace }, motCle, versLeBas, versLaDroite, versLeHaut, versLaGauche }) => {
    const sens = { versLeBas, versLaDroite, versLeHaut, versLaGauche }
    return (direction: keyof typeof sens, instructions: string[]) => [motCle + espace + sens[direction], ...instructions.map((i) => retrait + i)]
  },
  exemples: [{ entree: ["versLeBas", ["n0 --> n1"]], sortie: ["flowchart TB", "  n0 --> n1"] }],
})

/**
 * Nœud
 * Un identifiant, un rectangle qui porte le libellé (une ligne par élément), puis la classe qui lui donne son style.
 */
export const NoeudMermaid = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : un nœud avec du texte ; styles : classes",
  url: "https://mermaid.js.org/syntax/flowchart.html#a-node-with-text",
  constantes: {
    ouvre: { valeur: "[", sens: "Ouvre la forme rectangle" },
    ferme: { valeur: "]", sens: "Ferme la forme rectangle" },
    sautDeLigne: { valeur: "<br/>", sens: "Passe à la ligne dans un libellé" },
    classe: { valeur: ":::", sens: "Attache une classe au nœud" },
  },
  deps: { libelle: LibelleMermaid },
  ecrire: ({ norme: { guillemet }, ouvre, ferme, sautDeLigne, classe, libelle }) => (id: string, lignes: string[], nomDeClasse: string) =>
    id + ouvre + guillemet + lignes.map((l) => libelle(l)).join(sautDeLigne) + guillemet + ferme + classe + nomDeClasse,
  exemples: [{ entree: ["n0", ["Palette", "<small>Décision</small>"], "tenu"], sortie: "n0[\"Palette<br/><small>Décision</small>\"]:::tenu" }],
})

/**
 * Sous-graphe
 * Un groupe de nœuds, avec son titre ; ses instructions sont décalées d'un cran.
 */
export const SousGraphe = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : sous-graphes",
  url: "https://mermaid.js.org/syntax/flowchart.html#subgraphs",
  constantes: {
    debut: { valeur: "subgraph", sens: "Ouvre le groupe" },
    fin: { valeur: "end", sens: "Ferme le groupe" },
    ouvre: { valeur: "[", sens: "Ouvre le titre" },
    ferme: { valeur: "]", sens: "Ferme le titre" },
  },
  deps: { libelle: LibelleMermaid },
  ecrire: ({ norme: { retrait, espace, guillemet }, debut, fin, ouvre, ferme, libelle }) => (id: string, titre: string, instructions: string[]) =>
    [debut + espace + id + ouvre + guillemet + libelle(titre) + guillemet + ferme, ...instructions.map((i) => retrait + i), fin],
  exemples: [{ entree: ["moteur", "Trame · Moteur", ["n0"]], sortie: ["subgraph moteur[\"Trame · Moteur\"]", "  n0", "end"] }],
})

/**
 * Lien
 * Deux nœuds reliés par un trait, avec un texte : plein, pointillé, pointillé sans pointe, ou épais.
 */
export const LienMermaid = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : liens entre nœuds",
  url: "https://mermaid.js.org/syntax/flowchart.html#links-between-nodes",
  constantes: {
    plein: { valeur: "-->", sens: "Trait plein, avec une pointe" },
    pointille: { valeur: "-.->", sens: "Trait pointillé, avec une pointe" },
    pointilleOuvert: { valeur: "-.-", sens: "Trait pointillé, sans pointe" },
    epais: { valeur: "==>", sens: "Trait épais, avec une pointe" },
    barre: { valeur: "|", sens: "Entoure le texte du lien" },
  },
  deps: { libelle: LibelleMermaid },
  ecrire: ({ norme: { espace }, plein, pointille, pointilleOuvert, epais, barre, libelle }) => {
    const traits = { plein, pointille, pointilleOuvert, epais }
    return (de: string, vers: string, trait: keyof typeof traits, texte: string) =>
      de + espace + traits[trait] + barre + libelle(texte) + barre + espace + vers
  },
  exemples: [{ entree: ["n0", "n1", "pointille", "Dépend de"], sortie: "n0 -.->|Dépend de| n1" }],
})

/**
 * Propriétés de style
 * Des propriétés SVG, chacune nom:valeur, séparées par des virgules.
 */
export const ProprietesDeStyle = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : styles et classes",
  url: "https://mermaid.js.org/syntax/flowchart.html#styling-and-classes",
  constantes: {
    deuxPoints: { valeur: ":", sens: "Sépare le nom d'une propriété de sa valeur" },
    virgule: { valeur: ",", sens: "Sépare deux propriétés" },
    remplissage: { valeur: "fill", sens: "La couleur du fond" },
    contour: { valeur: "stroke", sens: "La couleur du contour" },
    couleurDuTexte: { valeur: "color", sens: "La couleur du texte" },
    pointilles: { valeur: "stroke-dasharray", sens: "Le contour en tirets : longueur d'un tiret, puis de l'espace" },
    opacite: { valeur: "opacity", sens: "L'opacité, de 0 (invisible) à 1" },
  },
  ecrire: ({ deuxPoints, virgule, remplissage, contour, couleurDuTexte, pointilles, opacite }) => {
    const noms = { remplissage, contour, couleurDuTexte, pointilles, opacite }
    return (proprietes: Partial<Record<keyof typeof noms, string>>) =>
      Object.entries(proprietes).map(([nom, valeur]) => noms[nom as keyof typeof noms] + deuxPoints + valeur).join(virgule)
  },
  exemples: [{ entree: [{ remplissage: "#ffffff", contour: "#5a6672" }], sortie: "fill:#ffffff,stroke:#5a6672" }],
})

/**
 * Définition de classe
 * Une classe de style, que les nœuds reçoivent par son nom.
 */
export const DefinitionDeClasse = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : classes",
  url: "https://mermaid.js.org/syntax/flowchart.html#classes",
  constantes: {
    motCle: { valeur: "classDef", sens: "Définit une classe" },
  },
  deps: { proprietes: ProprietesDeStyle },
  ecrire: ({ norme: { espace }, motCle, proprietes }) => (nom: string, style: Parameters<typeof proprietes>[0]) =>
    motCle + espace + nom + espace + proprietes(style),
  exemples: [{ entree: ["tenu", { remplissage: "#e1f1e7", contour: "#26734a", couleurDuTexte: "#17202a" }], sortie: "classDef tenu fill:#e1f1e7,stroke:#26734a,color:#17202a" }],
})

/**
 * Style de nœuds
 * Des propriétés de style données directement à des nœuds.
 */
export const StyleDeNoeuds = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Organigrammes : styler un nœud",
  url: "https://mermaid.js.org/syntax/flowchart.html#styling-a-node",
  constantes: {
    motCle: { valeur: "style", sens: "Donne un style à des nœuds" },
    virgule: { valeur: ",", sens: "Sépare les identifiants des nœuds" },
  },
  deps: { proprietes: ProprietesDeStyle },
  ecrire: ({ norme: { espace }, motCle, virgule, proprietes }) => (ids: string[], style: Parameters<typeof proprietes>[0]) =>
    motCle + espace + ids.join(virgule) + espace + proprietes(style),
  exemples: [{ entree: [["n1", "n2"], { pointilles: "4 3" }], sortie: "style n1,n2 stroke-dasharray:4 3" }],
})

// Diagrammes de Gantt -------------------------------------------------------------------

/**
 * Chronologie
 * Le mot-clé, le format des dates données, celui des dates de l'axe, le titre, puis les sections.
 */
export const Chronologie = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Gantt : syntaxe, format des dates, format de l'axe",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constantes: {
    motCle: { valeur: "gantt", sens: "Ouvre un diagramme de Gantt" },
    formatDesDates: { valeur: "dateFormat", sens: "Le format des dates données aux tâches" },
    formatDeLAxe: { valeur: "axisFormat", sens: "Le format des dates sur l'axe" },
    titre: { valeur: "title", sens: "Le titre du diagramme" },
  },
  ecrire: ({ norme: { retrait, espace }, motCle, formatDesDates, formatDeLAxe, titre }) => (dates: string, axe: string, intitule: string, instructions: string[]) =>
    [motCle, retrait + formatDesDates + espace + dates, retrait + formatDeLAxe + espace + axe, retrait + titre + espace + intitule, ...instructions.map((i) => retrait + i)],
  exemples: [{
    entree: ["YYYY-MM-DD", "%d.%m", "Autour du 17 octobre 2026", ["section Échéances"]],
    sortie: ["gantt", "  dateFormat YYYY-MM-DD", "  axisFormat %d.%m", "  title Autour du 17 octobre 2026", "  section Échéances"],
  }],
})

/**
 * Nom dans une chronologie
 * Le nom d'une section ou d'une tâche : les deux-points y sont interdits, ils deviennent des espaces.
 */
export const NomDeChronologie = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Gantt : syntaxe (le nom d'une tâche précède les deux-points)",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constantes: {
    deuxPoints: { valeur: ":", sens: "Sépare un nom de ses données : un nom ne peut pas en contenir" },
  },
  ecrire: ({ norme: { espace }, deuxPoints }) => (texte: string) => texte.split(deuxPoints).join(espace),
  exemples: [{ entree: ["Revue : comité"], sortie: "Revue   comité" }],
})

/**
 * Section
 * Un groupe de tâches, avec son nom ; ses tâches sont décalées d'un cran.
 */
export const SectionDeChronologie = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Gantt : sections",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constantes: {
    motCle: { valeur: "section", sens: "Ouvre une section" },
  },
  deps: { nom: NomDeChronologie },
  ecrire: ({ norme: { retrait, espace }, motCle, nom }) => (titre: string, taches: string[]) => [motCle + espace + nom(titre), ...taches.map((t) => retrait + t)],
  exemples: [{ entree: ["Délai : gratuit", ["En vigueur : 2026-01-01, 2026-12-31"]], sortie: ["section Délai   gratuit", "  En vigueur : 2026-01-01, 2026-12-31"] }],
})

/**
 * Tâche
 * Un nom, les deux-points, puis ses données : des étiquettes, une date de début, une fin ou une durée.
 */
export const TacheDeChronologie = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Gantt : syntaxe des tâches",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constantes: {
    deuxPoints: { valeur: ":", sens: "Sépare le nom de la tâche de ses données" },
    virgule: { valeur: ",", sens: "Sépare les données" },
  },
  deps: { nom: NomDeChronologie },
  ecrire: ({ norme: { espace }, deuxPoints, virgule, nom }) => (intitule: string, donnees: string[]) =>
    nom(intitule) + espace + deuxPoints + espace + donnees.join(virgule + espace),
  exemples: [{ entree: ["En vigueur", ["2026-01-01", "2026-12-31"]], sortie: "En vigueur : 2026-01-01, 2026-12-31" }],
})

/**
 * Jalon
 * Une tâche d'une durée nulle, marquée comme jalon : une date à voir.
 */
export const JalonDeChronologie = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Gantt : jalons",
  url: "https://mermaid.js.org/syntax/gantt.html#milestones",
  constantes: {
    etiquette: { valeur: "milestone", sens: "Fait de la tâche un jalon" },
    duree: { valeur: "0d", sens: "Une durée nulle" },
  },
  deps: { tache: TacheDeChronologie },
  ecrire: ({ etiquette, duree, tache }) => (intitule: string, date: string) => tache(intitule, [etiquette, date, duree]),
  exemples: [{ entree: ["Revue", "2026-11-01"], sortie: "Revue : milestone, 2026-11-01, 0d" }],
})

// Dans un document Markdown --------------------------------------------------------------

/**
 * Bloc mermaid
 * Un bloc de code dont le langage est « mermaid » : GitHub, GitLab et la plupart des éditeurs y dessinent le diagramme.
 */
export const BlocMermaid = syntaxe({
  owner: "trame",
  norme: Mermaid,
  section: "Intégration : un diagramme dans un document Markdown (documentation de GitHub)",
  url: "https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams",
  constantes: {
    langage: { valeur: "mermaid", sens: "Le langage du bloc de code qui porte un diagramme" },
  },
  deps: { bloc: BlocDeCode },
  ecrire: ({ langage, bloc }) => (lignes: string[]) => bloc(langage, lignes),
  exemples: [{ entree: [["flowchart LR"]], sortie: ["```mermaid", "flowchart LR", "```"] }],
})
