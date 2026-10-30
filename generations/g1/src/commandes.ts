/** Trame · Commandes */

import { code } from "../trame/kernel"
import { fonction } from "../kinds/fonction"
import { pointEntree, commande } from "../kinds/point-entree"
import { SpecificationExecutable, SourceUnique, OrdreDesGravites, PortDev } from "./produit"
import { TrameCli, Terminal, Processus, Horloge, EcritureFichiers, Chemins } from "./architecture"
import { Compilateur, ApiCompilation, Lois, Vues, Verrou, Machine, Charge, Paquet, Page, ServeurDev, Assemblage } from "./moteur"
import { Commun, Markdown, Texte } from "./rendu"
import { Disposition } from "./conventions"

/**
 * Préparation
 * Lire les options, vérifier et compiler le projet, refuser proprement : ce que toutes les commandes partagent.
 */
export const Preparation = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: {
    compilateur: Compilateur, apiCompilation: ApiCompilation, lois: Lois, vues: Vues, verrou: Verrou, commun: Commun,
    terminal: Terminal, processus: Processus, horloge: Horloge, ordre: OrdreDesGravites, portDev: PortDev,
  },
  body: code.file<typeof import("./code/commandes/preparation").default>("./code/commandes/preparation.ts"),
})

/**
 * Rendre une vue
 * Une vue, rendue pour le terminal, en Markdown ou en JSON.
 */
export const RendreVue = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { preparation: Preparation, vues: Vues, markdown: Markdown, texte: Texte, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/rendre-vue").default>("./code/commandes/rendre-vue.ts"),
})

/**
 * Assembler
 * Le programme d'un composant pour un environnement, et son infrastructure, prêts à écrire.
 */
export const Assembler = fonction({
  owner: "trame",
  serves: [SpecificationExecutable],
  deps: { preparation: Preparation, assemblage: Assemblage },
  body: code.file<typeof import("./code/commandes/assembler").default>("./code/commandes/assembler.ts"),
})

/**
 * Construire
 * Vérifier, écrire docs/ en Markdown, graph.json et snapshot.json, afficher le bilan.
 */
export const Construire = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("build"),
  deps: { disposition: Disposition, preparation: Preparation, machine: Machine, markdown: Markdown, texte: Texte, ecriture: EcritureFichiers, chemins: Chemins, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/construire").default>("./code/commandes/construire.ts"),
})

/**
 * Éprouver les lois
 * Les lois des types et des vues, et les imports.
 */
export const EprouverLois = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("test-kinds"),
  deps: { preparation: Preparation, compilateur: Compilateur, vues: Vues, lois: Lois, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/lois").default>("./code/commandes/lois.ts"),
})

/**
 * Prendre l'instantané
 */
export const Instantane = pointEntree({
  owner: "trame", in: TrameCli, serves: [SourceUnique],
  declencheur: commande("snapshot"),
  deps: { disposition: Disposition, preparation: Preparation, machine: Machine, markdown: Markdown, ecriture: EcritureFichiers, chemins: Chemins, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/instantane").default>("./code/commandes/instantane.ts"),
})

/**
 * Publier
 * Les déclarations actuelles entrent dans trame.lock et ne changent plus.
 */
export const Publier = pointEntree({
  owner: "trame", in: TrameCli, serves: [SourceUnique],
  declencheur: commande("publish"),
  deps: { preparation: Preparation, verrou: Verrou, ecriture: EcritureFichiers, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/publier").default>("./code/commandes/publier.ts"),
})

/**
 * Charge utile
 * Le graphe compilé en format intermédiaire, à une date ou à toutes.
 */
export const ChargeUtile = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("payload"),
  deps: { preparation: Preparation, charge: Charge, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/charge").default>("./code/commandes/charge.ts"),
})

/**
 * Exporter la page
 */
export const Exporter = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("export"),
  deps: { disposition: Disposition, preparation: Preparation, paquet: Paquet, page: Page, ecriture: EcritureFichiers, chemins: Chemins, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/exporter").default>("./code/commandes/exporter.ts"),
})

/**
 * Lancer trame dev
 */
export const Dev = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("dev"),
  deps: { preparation: Preparation, serveurDev: ServeurDev },
  body: code.file<typeof import("./code/commandes/dev").default>("./code/commandes/dev.ts"),
})

/**
 * Assembler un composant
 */
export const Assemble = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("assemble"),
  deps: { preparation: Preparation, assembler: Assembler, ecriture: EcritureFichiers, chemins: Chemins, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/assemble").default>("./code/commandes/assemble.ts"),
})

/**
 * Lancer un composant
 * Assembler, puis lancer le programme et sortir avec son code.
 */
export const Lancer = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("run"),
  deps: { assemble: Assemble, processus: Processus },
  body: code.file<typeof import("./code/commandes/lancer").default>("./code/commandes/lancer.ts"),
})

/**
 * Afficher une vue
 */
export const AfficherVue = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("view"),
  deps: { preparation: Preparation, rendreVue: RendreVue },
  body: code.file<typeof import("./code/commandes/vue").default>("./code/commandes/vue.ts"),
})

/**
 * Vue par son nom
 * Toute autre commande : le nom d'une vue, ou un alias.
 */
export const VueParNom = pointEntree({
  owner: "trame", in: TrameCli, serves: [SpecificationExecutable],
  declencheur: commande("*"),
  deps: { preparation: Preparation, rendreVue: RendreVue, compilateur: Compilateur, vues: Vues, terminal: Terminal },
  body: code.file<typeof import("./code/commandes/vue-par-nom").default>("./code/commandes/vue-par-nom.ts"),
})
