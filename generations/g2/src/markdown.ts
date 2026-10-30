/** Trame · Markdown */

import { norme } from "../kinds/norme"
import { syntaxe } from "../kinds/syntaxe"
import { Html, Uri } from "./normes"

/**
 * CommonMark
 * La syntaxe Markdown des documents que Trame écrit. Les marques que plusieurs constructions partagent sont ici.
 */
export const CommonMark = norme({
  owner: "trame",
  source: "CommonMark Spec 0.31.2 (2024)",
  url: "https://spec.commonmark.org/0.31.2/",
  constantes: {
    finDeLigne: { valeur: "\n", sens: "Termine une ligne (§ 2.1 : un saut de ligne, U+000A)" },
    espace: { valeur: " ", sens: "Sépare une marque de ce qu'elle introduit (§ 2.1 : U+0020)" },
    accentGrave: { valeur: "`", sens: "Délimite le code, en ligne ou en bloc (§ 4.5, § 6.1)" },
    etoile: { valeur: "*", sens: "Délimite l'emphase (§ 6.2)" },
  },
})

/**
 * GitHub Flavored Markdown
 * Les extensions de CommonMark que Trame emploie : les tableaux.
 */
export const Gfm = norme({
  owner: "trame",
  source: "GitHub Flavored Markdown Spec 0.29-gfm (2019)",
  url: "https://github.github.com/gfm/",
  constantes: {
    barre: { valeur: "|", sens: "Sépare les cellules d'un tableau, et borde chaque ligne (§ 4.10)" },
  },
})

// Le document ----------------------------------------------------------------------------

/**
 * Suite de blocs
 * Les lignes du document, réunies. Entre deux blocs, une ligne vide ; plusieurs lignes vides n'en font qu'une.
 */
export const Blocs = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "4.9 Lignes vides",
  url: "https://spec.commonmark.org/0.31.2/#blank-lines",
  constantes: {
    lignesVidesMax: { valeur: 1, sens: "Le nombre de lignes vides qui séparent deux blocs, au plus" },
  },
  ecrire: ({ norme: { finDeLigne }, lignesVidesMax }) => (lignes: string[]) => {
    const permis = finDeLigne.repeat(lignesVidesMax + 1)
    const trop = permis + finDeLigne
    let texte = lignes.join(finDeLigne)
    while (texte.includes(trop)) texte = texte.split(trop).join(permis)
    return texte
  },
  exemples: [
    { entree: [["# Titre", "", "", "Texte", ""]], sortie: "# Titre\n\nTexte\n" },
    { entree: [["a", "b"]], sortie: "a\nb" },
  ],
})

/**
 * Titre
 * Des dièses, un par niveau, une espace, puis le texte du titre.
 */
export const Titre = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "4.2 Titres ATX",
  url: "https://spec.commonmark.org/0.31.2/#atx-headings",
  constantes: {
    diese: { valeur: "#", sens: "Répété autant de fois que le niveau du titre" },
    niveauMax: { valeur: 6, sens: "Le niveau le plus profond : au-delà de six dièses, la ligne n'est plus un titre" },
  },
  ecrire: ({ norme: { espace }, diese, niveauMax }) => (niveau: number, texte: string) =>
    diese.repeat(Math.min(niveau, niveauMax)) + espace + texte,
  exemples: [
    { entree: [2, "Objectifs"], sortie: "## Objectifs" },
    { entree: [9, "Très profond"], sortie: "###### Très profond" },
  ],
})

/**
 * Élément de liste
 * Une puce, une espace, puis le contenu de l'élément.
 */
export const ElementDeListe = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "5.2 Éléments de liste",
  url: "https://spec.commonmark.org/0.31.2/#list-items",
  constantes: {
    puce: { valeur: "-", sens: "Marque un élément de liste non ordonnée" },
  },
  ecrire: ({ norme: { espace }, puce }) => (texte: string) => puce + espace + texte,
  exemples: [{ entree: ["Responsable : trame"], sortie: "- Responsable : trame" }],
})

/**
 * Citation
 * Un chevron, une espace, puis le texte cité.
 */
export const Citation = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "5.1 Citations",
  url: "https://spec.commonmark.org/0.31.2/#block-quotes",
  constantes: {
    chevron: { valeur: ">", sens: "Marque une ligne de citation" },
  },
  ecrire: ({ norme: { espace }, chevron }) => (texte: string) => chevron + espace + texte,
  exemples: [{ entree: ["Tous s'appliquent."], sortie: "> Tous s'appliquent." }],
})

/**
 * Bloc de code
 * Une clôture d'accents graves suivie du langage, les lignes du code, puis la même clôture.
 */
export const BlocDeCode = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "4.5 Blocs de code clôturés",
  url: "https://spec.commonmark.org/0.31.2/#fenced-code-blocks",
  constantes: {
    longueur: { valeur: 3, sens: "Une clôture compte au moins trois accents graves" },
  },
  ecrire: ({ norme: { accentGrave }, longueur }) => (langage: string, lignes: string[]) => {
    const cloture = accentGrave.repeat(longueur)
    return [cloture + langage, ...lignes, cloture]
  },
  exemples: [{ entree: ["ts", ["const x = 1"]], sortie: ["```ts", "const x = 1", "```"] }],
})

// En ligne -------------------------------------------------------------------------------

/**
 * Emphase
 * Le texte entre deux étoiles simples.
 */
export const Emphase = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "6.2 Emphase",
  url: "https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis",
  constantes: {
    nombre: { valeur: 1, sens: "Une étoile de chaque côté" },
  },
  ecrire: ({ norme: { etoile }, nombre }) => (texte: string) => etoile.repeat(nombre) + texte + etoile.repeat(nombre),
  exemples: [{ entree: ["Le graphe en vigueur"], sortie: "*Le graphe en vigueur*" }],
})

/**
 * Forte emphase
 * Le texte entre deux étoiles doubles : un statut, une valeur à décider.
 */
export const Gras = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "6.2 Emphase forte",
  url: "https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis",
  constantes: {
    nombre: { valeur: 2, sens: "Deux étoiles de chaque côté" },
  },
  ecrire: ({ norme: { etoile }, nombre }) => (texte: string) => etoile.repeat(nombre) + texte + etoile.repeat(nombre),
  exemples: [{ entree: ["tenu"], sortie: "**tenu**" }],
})

/**
 * Code en ligne
 * Un nom, un chemin, une valeur telle qu'écrite dans le code : entre accents graves.
 */
export const CodeEnLigne = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "6.1 Code en ligne",
  url: "https://spec.commonmark.org/0.31.2/#code-spans",
  constantes: {},
  ecrire: ({ norme: { accentGrave } }) => (texte: string) => accentGrave + texte + accentGrave,
  exemples: [{ entree: ["trame.json"], sortie: "`trame.json`" }],
})

/**
 * Lien
 * Le texte du lien entre crochets, puis sa destination entre parenthèses.
 */
export const Lien = syntaxe({
  owner: "trame",
  norme: CommonMark,
  section: "6.3 Liens",
  url: "https://spec.commonmark.org/0.31.2/#links",
  constantes: {
    ouvreTexte: { valeur: "[", sens: "Ouvre le texte du lien" },
    fermeTexte: { valeur: "]", sens: "Ferme le texte du lien" },
    ouvreDestination: { valeur: "(", sens: "Ouvre la destination" },
    fermeDestination: { valeur: ")", sens: "Ferme la destination" },
  },
  ecrire: ({ ouvreTexte, fermeTexte, ouvreDestination, fermeDestination }) => (texte: string, destination: string) =>
    ouvreTexte + texte + fermeTexte + ouvreDestination + destination + fermeDestination,
  exemples: [{ entree: ["Objectif", "produit.md#Objectif"], sortie: "[Objectif](produit.md#Objectif)" }],
})

/**
 * Référence relative
 * L'adresse d'un document du même dossier (son dernier segment), suivie d'une ancre ; ou l'ancre seule, dans le document même.
 */
export const ReferenceRelative = syntaxe({
  owner: "trame",
  norme: Uri,
  section: "4.2 Référence relative ; 3.5 Fragment",
  url: "https://www.rfc-editor.org/rfc/rfc3986#section-4.2",
  constantes: {
    segment: { valeur: "/", sens: "Sépare les segments d'un chemin" },
    fragment: { valeur: "#", sens: "Introduit le fragment : l'ancre, dans le document visé" },
  },
  ecrire: ({ segment, fragment }) => (chemin: string | undefined, ancre?: string) =>
    (chemin === undefined ? "" : chemin.slice(chemin.lastIndexOf(segment) + 1)) + (ancre === undefined ? "" : fragment + ancre),
  exemples: [
    { entree: ["docs/produit.md", "Objectif"], sortie: "produit.md#Objectif" },
    { entree: [undefined, "Graphe"], sortie: "#Graphe" },
    { entree: ["docs/produit.md"], sortie: "produit.md" },
  ],
})

// Les tableaux ---------------------------------------------------------------------------

/**
 * Cellule de tableau
 * Le contenu d'une cellule tient sur une ligne, et une barre y est échappée.
 */
export const CelluleDeTableau = syntaxe({
  owner: "trame",
  norme: Gfm,
  section: "4.10 Tableaux : une barre dans une cellule",
  url: "https://github.github.com/gfm/#tables-extension-",
  constantes: {
    echappement: { valeur: "\\", sens: "Précède une barre qui appartient au contenu" },
  },
  deps: { commonmark: CommonMark },
  ecrire: ({ norme: { barre }, echappement, commonmark: { finDeLigne, espace } }) => (texte: string) =>
    texte.split(barre).join(echappement + barre).split(finDeLigne).join(espace),
  exemples: [{ entree: ["a | b\nc"], sortie: "a \\| b c" }],
})

/**
 * Ligne de tableau
 * Les cellules, séparées et bordées de barres, avec une espace de part et d'autre.
 */
export const LigneDeTableau = syntaxe({
  owner: "trame",
  norme: Gfm,
  section: "4.10 Tableaux : une ligne",
  url: "https://github.github.com/gfm/#tables-extension-",
  constantes: {},
  deps: { commonmark: CommonMark },
  ecrire: ({ norme: { barre }, commonmark: { espace } }) => (cellules: string[]) =>
    barre + espace + cellules.join(espace + barre + espace) + espace + barre,
  exemples: [{ entree: [["Nom", "Rôle"]], sortie: "| Nom | Rôle |" }],
})

/**
 * Ligne de séparation
 * Sous l'en-tête : des tirets pour chaque colonne, entre des barres.
 */
export const SeparationDeTableau = syntaxe({
  owner: "trame",
  norme: Gfm,
  section: "4.10 Tableaux : la ligne de séparation",
  url: "https://github.github.com/gfm/#tables-extension-",
  constantes: {
    tiret: { valeur: "-", sens: "Remplit la cellule de séparation d'une colonne" },
    longueur: { valeur: 3, sens: "Le nombre de tirets par colonne" },
  },
  ecrire: ({ norme: { barre }, tiret, longueur }) => (colonnes: number) =>
    barre + Array.from({ length: colonnes }, () => tiret.repeat(longueur)).join(barre) + barre,
  exemples: [{ entree: [3], sortie: "|---|---|---|" }],
})

/**
 * Tableau
 * La ligne d'en-tête, la ligne de séparation, puis une ligne par enregistrement. Les cellules arrivent déjà écrites.
 */
export const Tableau = syntaxe({
  owner: "trame",
  norme: Gfm,
  section: "4.10 Tableaux",
  url: "https://github.github.com/gfm/#tables-extension-",
  constantes: {},
  deps: { ligne: LigneDeTableau, separation: SeparationDeTableau },
  ecrire: ({ ligne, separation }) => (entete: string[], lignes: string[][]) => [ligne(entete), separation(entete.length), ...lignes.map(ligne)],
  exemples: [{ entree: [["Nom", "Rôle"], [["Ada", "autrice"]]], sortie: ["| Nom | Rôle |", "|---|---|", "| Ada | autrice |"] }],
})

// Le HTML que les documents emploient ----------------------------------------------------

/**
 * Balise ouvrante
 * Le nom de l'élément, puis ses attributs, chacun nom="valeur".
 */
export const OuvertureHtml = syntaxe({
  owner: "trame",
  norme: Html,
  section: "13.1.2.1 Balises ouvrantes ; 13.1.2.3 Attributs",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#start-tags",
  constantes: {
    egal: { valeur: "=", sens: "Sépare le nom d'un attribut de sa valeur" },
    guillemet: { valeur: "\"", sens: "Entoure la valeur d'un attribut" },
  },
  deps: { commonmark: CommonMark },
  ecrire: ({ norme: { chevronOuvrant, chevronFermant }, egal, guillemet, commonmark: { espace } }) => (nom: string, attributs: Record<string, string>) =>
    chevronOuvrant + nom + Object.entries(attributs).map(([a, v]) => espace + a + egal + guillemet + v + guillemet).join("") + chevronFermant,
  exemples: [{ entree: ["a", { id: "Objectif" }], sortie: "<a id=\"Objectif\">" }],
})

/**
 * Balise fermante
 */
export const FermetureHtml = syntaxe({
  owner: "trame",
  norme: Html,
  section: "13.1.2.2 Balises fermantes",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#end-tags",
  constantes: {
    barre: { valeur: "/", sens: "Après le chevron : la balise ferme l'élément" },
  },
  ecrire: ({ norme: { chevronOuvrant, chevronFermant }, barre }) => (nom: string) => chevronOuvrant + barre + nom + chevronFermant,
  exemples: [{ entree: ["details"], sortie: "</details>" }],
})

/**
 * Élément HTML
 * La balise ouvrante, le contenu, la balise fermante.
 */
export const ElementHtml = syntaxe({
  owner: "trame",
  norme: Html,
  section: "13.1.2 Éléments",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
  constantes: {},
  deps: { ouverture: OuvertureHtml, fermeture: FermetureHtml },
  ecrire: ({ ouverture, fermeture }) => (nom: string, attributs: Record<string, string>, contenu: string) => ouverture(nom, attributs) + contenu + fermeture(nom),
  exemples: [{ entree: ["summary", {}, "Le code"], sortie: "<summary>Le code</summary>" }],
})

/**
 * Ancre
 * Un élément vide qui porte un identifiant : la cible des liens vers une fiche ou une section.
 */
export const Ancre = syntaxe({
  owner: "trame",
  norme: Html,
  section: "4.5.1 L'élément a ; 3.2.6 L'attribut id",
  url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
  constantes: {
    balise: { valeur: "a", sens: "L'élément lien, ici sans contenu" },
    attribut: { valeur: "id", sens: "L'identifiant que vise le fragment d'une adresse" },
  },
  deps: { element: ElementHtml },
  ecrire: ({ balise, attribut, element }) => (id: string) => element(balise, { [attribut]: id }, ""),
  exemples: [{ entree: ["Objectif"], sortie: "<a id=\"Objectif\"></a>" }],
})

/**
 * Bloc repliable
 * Un résumé toujours visible ; le reste se déplie. Une ligne vide après le résumé : le contenu redevient du Markdown.
 */
export const Repli = syntaxe({
  owner: "trame",
  norme: Html,
  section: "4.11.1 L'élément details ; 4.11.2 L'élément summary",
  url: "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
  constantes: {
    balise: { valeur: "details", sens: "Le bloc repliable" },
    resume: { valeur: "summary", sens: "Son résumé, toujours visible" },
  },
  deps: { ouverture: OuvertureHtml, fermeture: FermetureHtml, element: ElementHtml },
  ecrire: ({ balise, resume, ouverture, fermeture, element }) => (titre: string, lignes: string[]) =>
    [ouverture(balise, {}) + element(resume, {}, titre), "", ...lignes, fermeture(balise)],
  exemples: [{ entree: ["Le code", ["x"]], sortie: ["<details><summary>Le code</summary>", "", "x", "</details>"] }],
})
