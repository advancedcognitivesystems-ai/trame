/** Trame · Normes */

import { norme } from "../kinds/norme"

/**
 * HTTP
 * Les statuts, en-têtes et directives que le serveur de trame dev emploie.
 */
export const Http = norme({
  owner: "trame",
  source: "RFC 9110 (sémantique), RFC 9111 (cache), RFC 9112 (connexion)",
  url: "https://www.rfc-editor.org/rfc/rfc9110",
  constantes: {
    ok: { valeur: 200, sens: "La requête a réussi" },
    sansContenu: { valeur: 204, sens: "La requête a réussi, et il n'y a rien à renvoyer" },
    introuvable: { valeur: 404, sens: "La ressource demandée n'existe pas" },
    enTeteType: { valeur: "content-type", sens: "En-tête : le type de média du corps" },
    enTeteCache: { valeur: "cache-control", sens: "En-tête : les directives de cache" },
    enTeteConnexion: { valeur: "connection", sens: "En-tête : les options de la connexion" },
    sansCache: { valeur: "no-cache", sens: "Directive : revalider avant toute réutilisation" },
    connexionMaintenue: { valeur: "keep-alive", sens: "Option : garder la connexion ouverte" },
  },
})

/**
 * Types de média
 * Les types que le serveur de trame dev annonce, avec leur jeu de caractères.
 */
export const TypesDeMedia = norme({
  owner: "trame",
  source: "Registre IANA des types de média ; RFC 6838 ; WHATWG HTML (text/event-stream)",
  url: "https://www.iana.org/assignments/media-types/",
  constantes: {
    html: { valeur: "text/html; charset=utf-8", sens: "Une page HTML en UTF-8" },
    json: { valeur: "application/json; charset=utf-8", sens: "Du JSON en UTF-8" },
    fluxEvenements: { valeur: "text/event-stream", sens: "Un flux d'événements envoyés par le serveur" },
  },
})

/**
 * Événements envoyés par le serveur
 * La forme des messages du flux qui met la page de trame dev à jour.
 */
export const EvenementsServeur = norme({
  owner: "trame",
  source: "WHATWG HTML, § Server-sent events",
  url: "https://html.spec.whatwg.org/multipage/server-sent-events.html",
  constantes: {
    champEvenement: { valeur: "event: ", sens: "Le champ qui nomme l'événement" },
    champDonnees: { valeur: "data: ", sens: "Le champ qui porte les données" },
    commentaire: { valeur: ": ", sens: "Une ligne de commentaire, ignorée par le navigateur" },
    finDeMessage: { valeur: "\n\n", sens: "Une ligne vide termine le message" },
  },
})

/**
 * Mulberry32
 * Un générateur pseudo-aléatoire sur 32 bits : rapide, reproductible à partir d'une graine.
 */
export const Mulberry32 = norme({
  owner: "trame",
  source: "Tommy Ettinger, Mulberry32 (2017, domaine public)",
  url: "https://gist.github.com/tommyettinger/46a874533244883189143505d203312c",
  constantes: {
    increment: { valeur: 0x6d2b79f5, sens: "Ajouté à l'état à chaque tirage" },
    decalage1: { valeur: 15, sens: "Premier décalage du mélange" },
    decalage2: { valeur: 7, sens: "Deuxième décalage du mélange" },
    decalage3: { valeur: 14, sens: "Dernier décalage du mélange" },
    bitImpair: { valeur: 1, sens: "OU avec 1 : le premier multiplicateur est impair" },
    impair: { valeur: 61, sens: "Rend le second multiplicateur impair" },
    echelle: { valeur: 4294967296, sens: "2³² : ramène le tirage entre 0 et 1" },
  },
})

/**
 * Hachage multiplicatif
 * Réduire un texte (la graine) à un entier de 32 bits.
 */
export const HachageMultiplicatif = norme({
  owner: "trame",
  source: "Knuth, The Art of Computer Programming, vol. 3, § 6.4 ; FIPS 180-4 (valeur initiale)",
  constantes: {
    multiplicateur: { valeur: 2654435761, sens: "⌊2³² / φ⌋ : le multiplicateur de Knuth" },
    depart: { valeur: 1779033703, sens: "0x6a09e667, premiers bits de √2 (valeur initiale de SHA-256)" },
  },
})

/**
 * HTML
 * Les balises que les documents Markdown emploient : des ancres, des blocs repliables.
 */
export const Html = norme({
  owner: "trame",
  source: "WHATWG HTML, § 13.1.2 Éléments (balises ouvrantes et fermantes, attributs)",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
  constantes: {
    chevronOuvrant: { valeur: "<", sens: "Ouvre une balise" },
    chevronFermant: { valeur: ">", sens: "Ferme une balise" },
  },
})

/**
 * URI
 * Les adresses relatives qui relient les documents entre eux.
 */
export const Uri = norme({
  owner: "trame",
  source: "RFC 3986, § 3 Syntaxe générique et § 4.2 Référence relative",
  url: "https://www.rfc-editor.org/rfc/rfc3986",
  constantes: {},
})

/**
 * ECMAScript
 * Ce que le langage des corps fixe lui-même, et que le code emploie : où commence une liste, comment un entier revient sur 32 bits.
 */
export const EcmaScript = norme({
  owner: "trame",
  source: "ECMA-262, ECMAScript 2024 : § 23.1 Array (indices), § 13.9.3 décalage à droite non signé (ToUint32)",
  url: "https://tc39.es/ecma262/2024/",
  constantes: {
    premierIndice: { valeur: 0, sens: "L'indice du premier élément d'une liste, du premier caractère d'un texte" },
    versNonSigne32: { valeur: 0, sens: "x >>> 0 : décalage nul, non signé ; ramène x sur 32 bits non signés" },
  },
})

/**
 * Statut de sortie
 * Ce qu'une commande rend au système qui l'a lancée : zéro si elle a réussi, autre chose sinon.
 */
export const StatutDeSortie = norme({
  owner: "trame",
  source: "POSIX.1-2017, exit() ; ISO C, EXIT_SUCCESS et EXIT_FAILURE",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/functions/exit.html",
  constantes: {
    succes: { valeur: 0, sens: "La commande a réussi (EXIT_SUCCESS)" },
    echec: { valeur: 1, sens: "La commande a échoué (EXIT_FAILURE)" },
  },
})

/**
 * Fichier texte
 * Ce qu'est une ligne d'un fichier texte : des caractères, puis un saut de ligne, la dernière comprise.
 */
export const FichierTexte = norme({
  owner: "trame",
  source: "POSIX.1-2017, Base Definitions, § 3.206 Line et § 3.403 Text File",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_206",
  constantes: {
    finDeLigne: { valeur: "\n", sens: "Termine chaque ligne, la dernière comprise" },
  },
})

/**
 * Positions dans un fichier
 * Comment un message désigne un endroit d'un fichier : « fichier:ligne », la première ligne portant le numéro 1.
 */
export const PositionsGnu = norme({
  owner: "trame",
  source: "GNU Coding Standards, § 4.4 Formatting Error Messages",
  url: "https://www.gnu.org/prep/standards/html_node/Errors.html",
  constantes: {
    premiereLigne: { valeur: 1, sens: "Le numéro de la première ligne d'un fichier" },
    separateur: { valeur: ":", sens: "Sépare le fichier du numéro de ligne" },
  },
})

/**
 * API du compilateur TypeScript
 * Ce que l'API rend quand on lui demande où est un nœud : une ligne et un caractère, comptés à partir de zéro.
 */
export const ApiTypeScript = norme({
  owner: "trame",
  source: "TypeScript, API du compilateur : ts.LineAndCharacter (getLineAndCharacterOfPosition)",
  url: "https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API",
  constantes: {
    premiereLigne: { valeur: 0, sens: "Le numéro que l'API donne à la première ligne" },
  },
})

/**
 * Parcours en profondeur
 * Chercher un cycle : chaque sommet est d'abord découvert (gris), puis fini (noir). Retomber sur un sommet gris, c'est fermer un cycle.
 */
export const ParcoursEnProfondeur = norme({
  owner: "trame",
  source: "Cormen, Leiserson, Rivest et Stein, Introduction to Algorithms, 3e éd., § 22.3 Depth-first search",
  constantes: {
    gris: { valeur: "gris", sens: "Découvert, son parcours n'est pas fini : y revenir ferme un cycle" },
    noir: { valeur: "noir", sens: "Son parcours est fini, sans cycle" },
  },
})
