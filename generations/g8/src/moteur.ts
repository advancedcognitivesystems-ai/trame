/** Trame · Moteur */

import { code } from "../trame/kernel"
import { fonction } from "../kinds/fonction"
import { SpecificationExecutable, SourceUnique, NombreEchantillons, JeuxDeRevendications, RegroupementDev, PersonnesDeTirage, OrdreDesGravites, DatesCandidates } from "./produit"
import {
  Http as NormeHttp, TypesDeMedia, EvenementsServeur, Mulberry32, HachageMultiplicatif, EcmaScript, FichierTexte, PositionsGnu, ApiTypeScript,
  ParcoursEnProfondeur,
} from "./normes"
import { Palette, Typographie } from "./apparence"
import { Disposition, RangParDefaut, SyntaxeDesReferences, CommentaireDeDocumentation, MiseEnFormeJson } from "./conventions"
import {
  Prelude, LectureFichiers, Chemins, Chargeur, CompilateurTs, Empreinte, Processus, Terminal, Horloge, Minuteur,
  Http, Empaqueteur, Ressources,
} from "./architecture"

/**
 * Références
 * Lire une référence (« module.Identifiant ») et un chemin dans un champ (« valeur.cas »), selon la syntaxe du langage.
 */
export const References = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { syntaxe: SyntaxeDesReferences },
  body: ({ syntaxe: { separateur, noeudEntier } }) => {
    const segments = (chemin: string): string[] => (chemin === noeudEntier ? [] : chemin.split(separateur))
    return {
      /** Les étapes d'un chemin ; aucune pour le nœud entier. */
      segments,
      /** Le nombre d'étapes d'un chemin. */
      profondeur: (chemin: string) => segments(chemin).length,
      /** Le chemin désigne-t-il le nœud entier ? */
      estNoeudEntier: (chemin: string) => chemin === noeudEntier,
      /** Le champ où commence un chemin. */
      premierSegment: (chemin: string) => {
        const [premier] = chemin.split(separateur)
        return premier
      },
      /** Le module d'une référence. */
      module: (ref: string) => {
        const [module] = ref.split(separateur)
        return module
      },
      /** L'identifiant d'une référence, sans son module. */
      identifiant: (ref: string) => {
        const [, ...reste] = ref.split(separateur)
        return reste.join(separateur)
      },
      /** Des étapes réunies en un chemin. */
      joindre: (etapes: string[]) => etapes.join(separateur),
    }
  },
})

/**
 * Positions
 * Désigner un endroit d'un fichier comme les messages le font (« fichier:ligne »), à partir de ce que l'API TypeScript donne.
 */
export const Positions = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { gnu: PositionsGnu, api: ApiTypeScript },
  body: ({ gnu, api }) => ({
    /** Le numéro, tel que les messages le donnent, d'une ligne de l'API TypeScript. */
    numero: (ligneTs: number) => ligneTs - api.premiereLigne + gnu.premiereLigne,
    /** « fichier:ligne » */
    reference: (fichier: string, ligne: number) => fichier + gnu.separateur + ligne,
  }),
})

/**
 * Cycles
 * Trouver les cycles d'une relation par un parcours en profondeur : les sommets d'où le parcours en referme un.
 */
export const Cycles = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { parcours: ParcoursEnProfondeur },
  body: code.file<typeof import("./code/moteur/cycles").default>("./code/moteur/cycles.ts"),
})

/**
 * Graphe
 * L'API de parcours : des vues en lecture seule sur les nœuds, des requêtes, les arêtes, la lecture enregistrée.
 */
export const Graphe = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { prelude: Prelude },
  body: code.file<typeof import("./code/moteur/graphe").default>("./code/moteur/graphe.ts"),
})

/**
 * Lecture statique
 * Le compilateur TypeScript lit les sources sans les exécuter : titres, lignes, propriétés, références, erreurs de type.
 */
export const Analyse = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { ts: CompilateurTs, chemins: Chemins, positions: Positions, commentaire: CommentaireDeDocumentation, ecma: EcmaScript },
  body: code.file<typeof import("./code/moteur/analyse").default>("./code/moteur/analyse.ts"),
})

/**
 * Driver TypeScript
 * Vérifier ce que touche un corps, le charger, écrire le programme d'un composant assemblé.
 */
export const DriverTypeScript = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { positions: Positions, texte: FichierTexte, chargeur: Chargeur, ts: CompilateurTs, lecture: LectureFichiers, chemins: Chemins, prelude: Prelude },
  body: code.file<typeof import("./code/moteur/driver-typescript").default>("./code/moteur/driver-typescript.ts"),
})

/**
 * Driver HCL
 * Confronter les variables d'un module Terraform aux dépendances de provisionnement, écrire l'appel du module.
 */
export const DriverHcl = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { lecture: LectureFichiers, chemins: Chemins, prelude: Prelude },
  body: code.file<typeof import("./code/moteur/driver-hcl").default>("./code/moteur/driver-hcl.ts"),
})

/**
 * Drivers
 * Le driver de chaque langage.
 */
export const Drivers = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { driverTypeScript: DriverTypeScript, driverHcl: DriverHcl },
  body: code.file<typeof import("./code/moteur/drivers").default>("./code/moteur/drivers.ts"),
})

/**
 * Branchement
 * Le plan : quoi construire, dans quel ordre, avec quelle implémentation pour chaque accès ; puis son exécution.
 */
export const Branchement = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition, chemins: Chemins, prelude: Prelude, drivers: Drivers },
  body: code.file<typeof import("./code/moteur/branchement").default>("./code/moteur/branchement.ts"),
})

/**
 * Projet
 * Où sont les types et les vues d'un projet (trame.json).
 */
export const Projet = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition, lecture: LectureFichiers, chemins: Chemins },
  body: code.file<typeof import("./code/moteur/projet").default>("./code/moteur/projet.ts"),
})

/**
 * Compilateur
 * Charger le projet une fois, puis le compiler à une date : graphe figé, revendications, résolution, graphe consolidé,
 * évaluation, statuts, trous.
 */
export const Compilateur = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition, ordre: OrdreDesGravites, cycles: Cycles, references: References,
    chargeur: Chargeur, lecture: LectureFichiers, chemins: Chemins, analyse: Analyse, projet: Projet, graphe: Graphe,
    branchement: Branchement, drivers: Drivers, prelude: Prelude,
  },
  body: code.file<typeof import("./code/moteur/compilateur").default>("./code/moteur/compilateur.ts"),
})

/**
 * Générateur pseudo-aléatoire
 * Une suite de nombres reproductible à partir d'une graine : les lois tirent leurs nœuds d'essai avec.
 */
export const Generateur = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { mulberry: Mulberry32, hachage: HachageMultiplicatif, ecma: EcmaScript },
  body: code.file<typeof import("./code/moteur/generateur").default>("./code/moteur/generateur.ts"),
})

/**
 * Lois
 * Éprouver chaque type sur des nœuds tirés au hasard, et sa résolution sur des jeux de revendications ; vérifier les imports.
 */
export const Lois = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition,
    echantillons: NombreEchantillons, jeux: JeuxDeRevendications, generateur: Generateur, personnes: PersonnesDeTirage,
    lecture: LectureFichiers, chemins: Chemins, projet: Projet, graphe: Graphe, prelude: Prelude,
  },
  body: code.file<typeof import("./code/moteur/lois").default>("./code/moteur/lois.ts"),
})

/**
 * Vues
 * Les charger, énumérer leurs instances, les exécuter sous leurs lois.
 */
export const Vues = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { rang: RangParDefaut, disposition: Disposition, chargeur: Chargeur, lecture: LectureFichiers, chemins: Chemins, prelude: Prelude, projet: Projet },
  body: code.file<typeof import("./code/moteur/vues").default>("./code/moteur/vues.ts"),
})

/**
 * API de compilation
 * Ce qu'une vue reçoit : le graphe, plus les trous, les revendications, les recoupements, la fiche d'un nœud.
 */
export const ApiCompilation = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { rang: RangParDefaut, positions: Positions, references: References, prelude: Prelude },
  body: code.file<typeof import("./code/moteur/api-compilation").default>("./code/moteur/api-compilation.ts"),
})

/**
 * Sorties machine
 * graph.json et snapshot.json.
 */
export const Machine = fonction({
  owner: "trame",
  serves: [SourceUnique],
  deps: { positions: Positions, prelude: Prelude },
  body: code.file<typeof import("./code/moteur/machine").default>("./code/moteur/machine.ts"),
})

/**
 * Verrou
 * trame.lock : l'empreinte de chaque déclaration publiée, et ce que le code leur a fait depuis.
 */
export const Verrou = fonction({
  owner: "trame",
  serves: [SourceUnique],
  deps: { disposition: Disposition, json: MiseEnFormeJson, texte: FichierTexte, references: References, empreinte: Empreinte, lecture: LectureFichiers, chemins: Chemins, prelude: Prelude },
  body: code.file<typeof import("./code/moteur/verrou").default>("./code/moteur/verrou.ts"),
})

/**
 * Charge utile
 * Le graphe compilé en format intermédiaire, pour la page.
 */
export const Charge = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition, dates: DatesCandidates, horloge: Horloge, machine: Machine, vues: Vues },
  body: code.file<typeof import("./code/moteur/charge").default>("./code/moteur/charge.ts"),
})

/**
 * Paquet de dates
 * Compiler le graphe à chaque date où il peut changer, dans un processus neuf : le moteur se relance lui-même.
 */
export const Paquet = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { horloge: Horloge, processus: Processus },
  body: code.file<typeof import("./code/moteur/paquet").default>("./code/moteur/paquet.ts"),
})

/**
 * Différences
 * Ce qu'une modification a changé entre deux compilations : statuts, trous, recoupements.
 */
export const Differences = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  body: code.file<typeof import("./code/moteur/differences").default>("./code/moteur/differences.ts"),
})

/**
 * Page
 * La page autonome : le script empaqueté, sa feuille de style, le graphe compilé.
 */
export const Page = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { palette: Palette, typographie: Typographie, ressources: Ressources, lecture: LectureFichiers, empaqueteur: Empaqueteur },
  body: code.file<typeof import("./code/moteur/page").default>("./code/moteur/page.ts"),
})

/**
 * Serveur de trame dev
 * Surveiller le projet, le recompiler à chaque enregistrement, pousser la page à jour.
 */
export const ServeurDev = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition,
    normeHttp: NormeHttp, types: TypesDeMedia, evenements: EvenementsServeur,
    terminal: Terminal, horloge: Horloge, minuteur: Minuteur, regroupement: RegroupementDev, http: Http,
    lecture: LectureFichiers, chemins: Chemins, projet: Projet, paquet: Paquet, differences: Differences, page: Page,
  },
  body: code.file<typeof import("./code/moteur/serveur-dev").default>("./code/moteur/serveur-dev.ts"),
})

/**
 * Assemblage
 * Le plan d'un composant pour un environnement, écrit en programme par le driver de son langage.
 */
export const Assemblage = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { disposition: Disposition, chemins: Chemins, branchement: Branchement, prelude: Prelude, drivers: Drivers },
  body: code.file<typeof import("./code/moteur/assemblage").default>("./code/moteur/assemblage.ts"),
})
