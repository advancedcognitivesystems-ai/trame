// Généré par `trame assemble TrameCli --env Local --figer` (graphe du 2026-10-17). Ne pas modifier : modifiez le graphe.
// Composant « Trame en ligne de commande » · environnement « Local ».
// Programme figé : l'ordre de construction, les choix d'implémentation et les valeurs du graphe sont écrits ici ;
// il ne compile pas le graphe au démarrage. Changements datés que ce programme ne verra pas : aucun.

import { fige } from "../../trame/internal"
import { TrameCli } from "../../src/architecture.ts"
import { Ancre, BlocDeCode, Blocs, CelluleDeTableau, Citation, CodeEnLigne, ElementDeListe, ElementHtml, Emphase, FermetureHtml, Gras, Lien, LigneDeTableau, OuvertureHtml, Petit, ReferenceRelative, Repli, SeparationDeTableau, SuiteDAccentsGraves, Tableau, Titre } from "../../src/markdown.ts"
import { BlocMermaid, Chronologie, DefinitionDeClasse, JalonDeChronologie, LibelleMermaid, LienMermaid, NoeudMermaid, NomDeChronologie, Organigramme, ProprietesDeStyle, SectionDeChronologie, SousGraphe, StyleDeNoeuds, TacheDeChronologie } from "../../src/mermaid.ts"
import { Positions, References } from "../../src/moteur.ts"
import { OrdreDesGravites } from "../../src/produit.ts"
import corps_terminalNode from "../../src/code/plateforme/terminal.ts"
import corps_ligneDeCommandeNode from "../../src/code/plateforme/ligne-de-commande.ts"
import corps_cycles from "../../src/code/moteur/cycles.ts"
import corps_chargeurTsx from "../../src/code/plateforme/chargeur.ts"
import corps_lectureDisque from "../../src/code/plateforme/lecture-disque.ts"
import corps_cheminsNode from "../../src/code/plateforme/chemins.ts"
import corps_typeScriptReel from "../../src/code/plateforme/typescript.ts"
import corps_analyse from "../../src/code/moteur/analyse.ts"
import corps_projet from "../../src/code/moteur/projet.ts"
import corps_preludeTrame from "../../src/code/plateforme/prelude.ts"
import corps_graphe from "../../src/code/moteur/graphe.ts"
import corps_driverTypeScript from "../../src/code/moteur/driver-typescript.ts"
import corps_driverHcl from "../../src/code/moteur/driver-hcl.ts"
import corps_drivers from "../../src/code/moteur/drivers.ts"
import corps_branchement from "../../src/code/moteur/branchement.ts"
import corps_compilateur from "../../src/code/moteur/compilateur.ts"
import corps_apiCompilation from "../../src/code/moteur/api-compilation.ts"
import corps_generateur from "../../src/code/moteur/generateur.ts"
import corps_lois from "../../src/code/moteur/lois.ts"
import corps_vues from "../../src/code/moteur/vues.ts"
import corps_empreinteNode from "../../src/code/plateforme/empreinte.ts"
import corps_verrou from "../../src/code/moteur/verrou.ts"
import corps_commun from "../../src/code/rendu/commun.ts"
import corps_processusNode from "../../src/code/plateforme/processus.ts"
import corps_horlogeSysteme from "../../src/code/plateforme/horloge.ts"
import corps_preparation from "../../src/code/commandes/preparation.ts"
import corps_diagrammes from "../../src/code/rendu/mermaid.ts"
import corps_markdown from "../../src/code/rendu/markdown.ts"
import corps_texte from "../../src/code/rendu/texte.ts"
import corps_rendreVue from "../../src/code/commandes/rendre-vue.ts"
import corps_afficherVue from "../../src/code/commandes/vue.ts"
import corps_assemblage from "../../src/code/moteur/assemblage.ts"
import corps_assembler from "../../src/code/commandes/assembler.ts"
import corps_ecritureDisque from "../../src/code/plateforme/ecriture-disque.ts"
import corps_assemble from "../../src/code/commandes/assemble.ts"
import corps_machine from "../../src/code/moteur/machine.ts"
import corps_charge from "../../src/code/moteur/charge.ts"
import corps_chargeUtile from "../../src/code/commandes/charge.ts"
import corps_construire from "../../src/code/commandes/construire.ts"
import corps_minuteurNode from "../../src/code/plateforme/minuteur.ts"
import corps_httpNode from "../../src/code/plateforme/http.ts"
import corps_paquet from "../../src/code/moteur/paquet.ts"
import corps_differences from "../../src/code/moteur/differences.ts"
import corps_ressourcesPage from "../../src/code/plateforme/ressources.ts"
import corps_esbuild from "../../src/code/plateforme/esbuild.ts"
import corps_page from "../../src/code/moteur/page.ts"
import corps_serveurDev from "../../src/code/moteur/serveur-dev.ts"
import corps_dev from "../../src/code/commandes/dev.ts"
import corps_eprouverLois from "../../src/code/commandes/lois.ts"
import corps_exporter from "../../src/code/commandes/exporter.ts"
import corps_instantane from "../../src/code/commandes/instantane.ts"
import corps_lancer from "../../src/code/commandes/lancer.ts"
import corps_publier from "../../src/code/commandes/publier.ts"
import corps_vueParNom from "../../src/code/commandes/vue-par-nom.ts"

// « Terminal de Node » · implémentation, pour « Terminal »
const terminalNode = await corps_terminalNode({})
// « Ligne de commande » · implémentation, pour « Ligne de commande »
const ligneDeCommandeNode = await corps_ligneDeCommandeNode({ terminal: terminalNode })
// « Statut de sortie » · norme
const statutDeSortie = {"succes":0,"echec":1}
// « Disposition d'un projet » · décision
const disposition = {"sources":"src","documents":"docs","extensionDocuments":".md","sortie":"out","preuves":"evidence","types":"kinds","vues":"views","configuration":"trame.json","verrou":"trame.lock","graphe":"graph.json","instantane":"snapshot.json","page":"trame-page.html"}
// « Trier les problèmes par gravité » · exigence
const ordreDesGravites = fige.valeur(OrdreDesGravites)
// « Parcours en profondeur » · norme
const parcoursEnProfondeur = {"gris":"gris","noir":"noir"}
// « Cycles » · fonction
const cycles = await corps_cycles({ parcours: parcoursEnProfondeur })
// « Références Trame » · norme
const syntaxeDesReferences = {"separateur":".","noeudEntier":""}
// « Références » · fonction
const references = await fige.corps(References)({ syntaxe: syntaxeDesReferences })
// « Chargeur tsx » · implémentation, pour « Chargeur de modules »
const chargeurTsx = await corps_chargeurTsx({})
// « Fichiers du système, en lecture » · implémentation, pour « Lecture des fichiers »
const lectureDisque = await corps_lectureDisque({})
// « Chemins de Node » · implémentation, pour « Chemins »
const cheminsNode = await corps_cheminsNode({})
// « Compilateur TypeScript » · implémentation, pour « Compilateur TypeScript »
const typeScriptReel = await corps_typeScriptReel({})
// « Positions dans un fichier » · norme
const positionsGnu = {"premiereLigne":1,"separateur":":"}
// « API du compilateur TypeScript » · norme
const apiTypeScript = {"premiereLigne":0}
// « Positions » · fonction
const positions = await fige.corps(Positions)({ gnu: positionsGnu, api: apiTypeScript })
// « Commentaire de documentation » · décision
const commentaireDeDocumentation = {"lignesDuTitre":1}
// « ECMAScript » · norme
const ecmaScript = {"premierIndice":0,"versNonSigne32":0}
// « Lecture statique » · fonction
const analyse = await corps_analyse({ ts: typeScriptReel, chemins: cheminsNode, positions, commentaire: commentaireDeDocumentation, ecma: ecmaScript })
// « Projet » · fonction
const projet = await corps_projet({ disposition, lecture: lectureDisque, chemins: cheminsNode })
// « Prélude de Trame » · implémentation, pour « Prélude »
const preludeTrame = await corps_preludeTrame({})
// « Graphe » · fonction
const graphe = await corps_graphe({ prelude: preludeTrame })
// « Fichier texte » · norme
const fichierTexte = {"finDeLigne":"\n"}
// « Driver TypeScript » · fonction
const driverTypeScript = await corps_driverTypeScript({ positions, texte: fichierTexte, chargeur: chargeurTsx, ts: typeScriptReel, lecture: lectureDisque, chemins: cheminsNode, prelude: preludeTrame })
// « Driver HCL » · fonction
const driverHcl = await corps_driverHcl({ lecture: lectureDisque, chemins: cheminsNode, prelude: preludeTrame })
// « Drivers » · fonction
const drivers = await corps_drivers({ driverTypeScript, driverHcl })
// « Branchement » · fonction
const branchement = await corps_branchement({ disposition, chemins: cheminsNode, prelude: preludeTrame, drivers })
// « Compilateur » · fonction
const compilateur = await corps_compilateur({ disposition, ordre: ordreDesGravites, cycles, references, chargeur: chargeurTsx, lecture: lectureDisque, chemins: cheminsNode, analyse, projet, graphe, branchement, drivers, prelude: preludeTrame })
// « Rang par défaut » · décision
const rangParDefaut = 100
// « API de compilation » · fonction
const apiCompilation = await corps_apiCompilation({ rang: rangParDefaut, positions, references, prelude: preludeTrame })
// « Nœuds tirés par type » · décision
const nombreEchantillons = 50
// « Jeux de revendications » · décision
const jeuxDeRevendications = 30
// « Mulberry32 » · norme
const mulberry32 = {"increment":1831565813,"decalage1":15,"decalage2":7,"decalage3":14,"bitImpair":1,"impair":61,"echelle":4294967296}
// « Hachage multiplicatif » · norme
const hachageMultiplicatif = {"multiplicateur":2654435761,"depart":1779033703}
// « Générateur pseudo-aléatoire » · fonction
const generateur = await corps_generateur({ mulberry: mulberry32, hachage: hachageMultiplicatif, ecma: ecmaScript })
// « Responsables tirés au hasard » · décision
const personnesDeTirage = ["personne-a","personne-b"]
// « Lois » · fonction
const lois = await corps_lois({ disposition, echantillons: nombreEchantillons, jeux: jeuxDeRevendications, generateur, personnes: personnesDeTirage, lecture: lectureDisque, chemins: cheminsNode, projet, graphe, prelude: preludeTrame })
// « Vues » · fonction
const vues = await corps_vues({ rang: rangParDefaut, disposition, chargeur: chargeurTsx, lecture: lectureDisque, chemins: cheminsNode, prelude: preludeTrame, projet })
// « Mise en forme du JSON » · décision
const miseEnFormeJson = {"indentation":2}
// « Empreintes SHA-256 » · implémentation, pour « Empreintes »
const empreinteNode = await corps_empreinteNode({})
// « Verrou » · fonction
const verrou = await corps_verrou({ disposition, json: miseEnFormeJson, texte: fichierTexte, references, empreinte: empreinteNode, lecture: lectureDisque, chemins: cheminsNode, prelude: preludeTrame })
// « Rendu commun » · fonction
const commun = await corps_commun({})
// « Processus de Node » · implémentation, pour « Processus »
const processusNode = await corps_processusNode({})
// « Horloge du système » · implémentation, pour « Horloge »
const horlogeSysteme = await corps_horlogeSysteme({})
// « Port de trame dev » · décision
const portDev = 4170
// « Préparation » · fonction
const preparation = await corps_preparation({ compilateur, apiCompilation, lois, vues, verrou, commun, terminal: terminalNode, processus: processusNode, horloge: horlogeSysteme, ordre: ordreDesGravites, portDev, sortie: statutDeSortie })
// « Rendu textuel des documents : Markdown » · décision
const renduTextuel = {"niveauDuTitre":1,"niveauDesSections":2}
// « Figures : des diagrammes Mermaid dans les documents » · décision
const figuresEnMermaid = {"identifiant":"n","sens":{"couches":"versLeBas","arbre":"versLeBas","chemin":"versLaDroite"},"traits":{"calculée":"pointilleOuvert","déduite":"pointille","gagnant":"epais","appui":"epais","autre":"plein"},"statutParDefaut":"neutre","historique":{"pointilles":"4 3"},"inactif":{"opacite":"0.5"},"chronologie":{"formatDates":"YYYY-MM-DD","formatAxe":"%d.%m","titre":"Autour du","periode":"En vigueur","aujourdhui":"Date du graphe","jalons":["échéance","revue"]}}
// « Palette » · décision
const palette = {"clair":{"bg":"#f3f5f6","panel":"#ffffff","ink":"#17202a","muted":"#5a6672","line":"#d9e0e5","accent":"#34509a","accent-soft":"#e5ebf7","ok":"#26734a","ok-soft":"#e1f1e7","warn":"#9a6200","warn-soft":"#fbf0d9","bad":"#ad2a22","bad-soft":"#f9e3e1","unk":"#65707c","unk-soft":"#e9edf0","term-bg":"#121820","term-ink":"#d8dee5","term-dim":"#7f8b97"},"sombre":{"bg":"#0e1217","panel":"#151b22","ink":"#e4e9ee","muted":"#98a3ae","line":"#29323c","accent":"#93abef","accent-soft":"#1e2a44","ok":"#7fd19b","ok-soft":"#173325","warn":"#f2c063","warn-soft":"#3a2d12","bad":"#f08a80","bad-soft":"#3d1c1a","unk":"#a5afb9","unk-soft":"#222a33","term-bg":"#0a0e13","term-ink":"#d8dee5","term-dim":"#7f8b97"},"statuts":{"tenu":{"fond":"ok-soft","trait":"ok"},"bloqué":{"fond":"warn-soft","trait":"warn"},"violé":{"fond":"bad-soft","trait":"bad"},"inconnu":{"fond":"unk-soft","trait":"unk"},"neutre":{"fond":"panel","trait":"muted"}},"encre":"ink"}
// « HTML » · norme
const html = {"chevronOuvrant":"<","chevronFermant":">"}
// « CommonMark » · norme
const commonMark = {"finDeLigne":"\n","espace":" ","accentGrave":"`","etoile":"*"}
// « Balise ouvrante » · élément de syntaxe
const ouvertureHtml = await fige.corps(OuvertureHtml)({ egal: "=", guillemet: "\"", norme: html, commonmark: commonMark })
// « Balise fermante » · élément de syntaxe
const fermetureHtml = await fige.corps(FermetureHtml)({ barre: "/", norme: html })
// « Élément HTML » · élément de syntaxe
const elementHtml = await fige.corps(ElementHtml)({ norme: html, ouverture: ouvertureHtml, fermeture: fermetureHtml })
// « Petit texte » · élément de syntaxe
const petit = await fige.corps(Petit)({ balise: "small", norme: html, element: elementHtml })
// « Mermaid » · norme
const mermaid = {"retrait":"  ","espace":" ","guillemet":"\""}
// « Organigramme » · élément de syntaxe
const organigramme = await fige.corps(Organigramme)({ motCle: "flowchart", versLeBas: "TB", versLaDroite: "LR", versLeHaut: "BT", versLaGauche: "RL", norme: mermaid })
// « Libellé » · élément de syntaxe
const libelleMermaid = await fige.corps(LibelleMermaid)({ entite: "#quot;", norme: mermaid })
// « Nœud » · élément de syntaxe
const noeudMermaid = await fige.corps(NoeudMermaid)({ ouvre: "[", ferme: "]", sautDeLigne: "<br/>", classe: ":::", norme: mermaid, libelle: libelleMermaid })
// « Sous-graphe » · élément de syntaxe
const sousGraphe = await fige.corps(SousGraphe)({ debut: "subgraph", fin: "end", ouvre: "[", ferme: "]", norme: mermaid, libelle: libelleMermaid })
// « Lien » · élément de syntaxe
const lienMermaid = await fige.corps(LienMermaid)({ plein: "-->", pointille: "-.->", pointilleOuvert: "-.-", epais: "==>", barre: "|", norme: mermaid, libelle: libelleMermaid })
// « Propriétés de style » · élément de syntaxe
const proprietesDeStyle = await fige.corps(ProprietesDeStyle)({ deuxPoints: ":", virgule: ",", remplissage: "fill", contour: "stroke", couleurDuTexte: "color", pointilles: "stroke-dasharray", opacite: "opacity", norme: mermaid })
// « Définition de classe » · élément de syntaxe
const definitionDeClasse = await fige.corps(DefinitionDeClasse)({ motCle: "classDef", norme: mermaid, proprietes: proprietesDeStyle })
// « Style de nœuds » · élément de syntaxe
const styleDeNoeuds = await fige.corps(StyleDeNoeuds)({ motCle: "style", virgule: ",", norme: mermaid, proprietes: proprietesDeStyle })
// « Chronologie » · élément de syntaxe
const chronologie = await fige.corps(Chronologie)({ motCle: "gantt", formatDesDates: "dateFormat", formatDeLAxe: "axisFormat", titre: "title", norme: mermaid })
// « Nom dans une chronologie » · élément de syntaxe
const nomDeChronologie = await fige.corps(NomDeChronologie)({ deuxPoints: ":", norme: mermaid })
// « Section » · élément de syntaxe
const sectionDeChronologie = await fige.corps(SectionDeChronologie)({ motCle: "section", norme: mermaid, nom: nomDeChronologie })
// « Tâche » · élément de syntaxe
const tacheDeChronologie = await fige.corps(TacheDeChronologie)({ deuxPoints: ":", virgule: ",", norme: mermaid, nom: nomDeChronologie })
// « Jalon » · élément de syntaxe
const jalonDeChronologie = await fige.corps(JalonDeChronologie)({ etiquette: "milestone", duree: "0d", norme: mermaid, tache: tacheDeChronologie })
// « Rendu des figures » · fonction
const diagrammes = await corps_diagrammes({ figures: figuresEnMermaid, palette, petit, organigramme, noeud: noeudMermaid, sousGraphe, lien: lienMermaid, classe: definitionDeClasse, style: styleDeNoeuds, chronologie, section: sectionDeChronologie, tache: tacheDeChronologie, jalon: jalonDeChronologie })
// « Suite d'accents graves » · élément de syntaxe
const suiteDAccentsGraves = await fige.corps(SuiteDAccentsGraves)({ norme: commonMark })
// « Bloc de code » · élément de syntaxe
const blocDeCode = await fige.corps(BlocDeCode)({ longueur: 3, norme: commonMark, suite: suiteDAccentsGraves })
// « Bloc mermaid » · élément de syntaxe
const blocMermaid = await fige.corps(BlocMermaid)({ langage: "mermaid", norme: mermaid, bloc: blocDeCode })
// « Suite de blocs » · élément de syntaxe
const blocs = await fige.corps(Blocs)({ lignesVidesMax: 1, norme: commonMark })
// « Titre » · élément de syntaxe
const titre = await fige.corps(Titre)({ diese: "#", niveauMax: 6, norme: commonMark })
// « Élément de liste » · élément de syntaxe
const elementDeListe = await fige.corps(ElementDeListe)({ puce: "-", norme: commonMark })
// « Citation » · élément de syntaxe
const citation = await fige.corps(Citation)({ chevron: ">", norme: commonMark })
// « Emphase » · élément de syntaxe
const emphase = await fige.corps(Emphase)({ nombre: 1, norme: commonMark })
// « Forte emphase » · élément de syntaxe
const gras = await fige.corps(Gras)({ nombre: 2, norme: commonMark })
// « Code en ligne » · élément de syntaxe
const codeEnLigne = await fige.corps(CodeEnLigne)({ longueurMin: 1, norme: commonMark, suite: suiteDAccentsGraves })
// « Lien » · élément de syntaxe
const lien = await fige.corps(Lien)({ ouvreTexte: "[", fermeTexte: "]", ouvreDestination: "(", fermeDestination: ")", norme: commonMark })
// « URI » · norme
const uri = {}
// « Référence relative » · élément de syntaxe
const referenceRelative = await fige.corps(ReferenceRelative)({ segment: "/", fragment: "#", norme: uri })
// « GitHub Flavored Markdown » · norme
const gfm = {"barre":"|"}
// « Cellule de tableau » · élément de syntaxe
const celluleDeTableau = await fige.corps(CelluleDeTableau)({ echappement: "\\", norme: gfm, commonmark: commonMark })
// « Ligne de tableau » · élément de syntaxe
const ligneDeTableau = await fige.corps(LigneDeTableau)({ norme: gfm, commonmark: commonMark })
// « Ligne de séparation » · élément de syntaxe
const separationDeTableau = await fige.corps(SeparationDeTableau)({ tiret: "-", longueur: 3, norme: gfm })
// « Tableau » · élément de syntaxe
const tableau = await fige.corps(Tableau)({ norme: gfm, ligne: ligneDeTableau, separation: separationDeTableau })
// « Ancre » · élément de syntaxe
const ancre = await fige.corps(Ancre)({ balise: "a", attribut: "id", norme: html, element: elementHtml })
// « Bloc repliable » · élément de syntaxe
const repli = await fige.corps(Repli)({ balise: "details", resume: "summary", norme: html, ouverture: ouvertureHtml, fermeture: fermetureHtml, element: elementHtml })
// « Rendu Markdown » · fonction
const markdown = await corps_markdown({ commun, references, rendu: renduTextuel, diagrammes, blocMermaid, blocs, titre, elementDeListe, citation, blocDeCode, emphase, gras, codeEnLigne, lien, reference: referenceRelative, cellule: celluleDeTableau, tableau, ancre, repli })
// « Rendu texte » · fonction
const texte = await corps_texte({ commun })
// « Rendre une vue » · fonction
const rendreVue = await corps_rendreVue({ json: miseEnFormeJson, preparation, vues, markdown, texte, terminal: terminalNode })
// « Afficher une vue » · point d'entrée
const afficherVue = await corps_afficherVue({ sortie: statutDeSortie, preparation, rendreVue })
// « Assemblage » · fonction
const assemblage = await corps_assemblage({ disposition, chemins: cheminsNode, branchement, prelude: preludeTrame, drivers })
// « Assembler » · fonction
const assembler = await corps_assembler({ preparation, assemblage })
// « Fichiers du système, en écriture » · implémentation, pour « Écriture des fichiers »
const ecritureDisque = await corps_ecritureDisque({})
// « Assembler un composant » · point d'entrée
const assemble = await corps_assemble({ sortie: statutDeSortie, preparation, assembler, ecriture: ecritureDisque, chemins: cheminsNode, terminal: terminalNode })
// « Dates candidates » · décision
const datesCandidates = {"apresUneFin":1,"avantLePremierChangement":-1}
// « Sorties machine » · fonction
const machine = await corps_machine({ positions, prelude: preludeTrame })
// « Charge utile » · fonction
const charge = await corps_charge({ disposition, dates: datesCandidates, horloge: horlogeSysteme, machine, vues })
// « Charge utile » · point d'entrée
const chargeUtile = await corps_chargeUtile({ sortie: statutDeSortie, preparation, charge, markdown, texte, terminal: terminalNode })
// « Construire » · point d'entrée
const construire = await corps_construire({ sortie: statutDeSortie, disposition, preparation, machine, markdown, texte, ecriture: ecritureDisque, chemins: cheminsNode, terminal: terminalNode })
// « HTTP » · norme
const http = {"ok":200,"sansContenu":204,"introuvable":404,"enTeteType":"content-type","enTeteCache":"cache-control","enTeteConnexion":"connection","sansCache":"no-cache","connexionMaintenue":"keep-alive"}
// « Types de média » · norme
const typesDeMedia = {"html":"text/html; charset=utf-8","json":"application/json; charset=utf-8","fluxEvenements":"text/event-stream"}
// « Événements envoyés par le serveur » · norme
const evenementsServeur = {"champEvenement":"event: ","champDonnees":"data: ","commentaire":": ","finDeMessage":"\n\n"}
// « Minuteur de Node » · implémentation, pour « Minuteur »
const minuteurNode = await corps_minuteurNode({})
// « Regroupement des enregistrements » · décision
const regroupementDev = 150
// « Serveur HTTP de Node » · implémentation, pour « Serveur HTTP »
const httpNode = await corps_httpNode({})
// « Paquet de dates » · fonction
const paquet = await corps_paquet({ horloge: horlogeSysteme, processus: processusNode })
// « Différences » · fonction
const differences = await corps_differences({})
// « Typographie » · décision
const typographie = {"polices":{"font-doc":"\"Literata\", \"Iowan Old Style\", Georgia, serif","font-ui":"\"Instrument Sans\", \"Segoe UI\", system-ui, sans-serif","font-mono":"\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace"},"chargement":["https://fonts.googleapis.com","https://fonts.gstatic.com","https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&display=swap"]}
// « Ressources de la page » · implémentation, pour « Ressources de la page »
const ressourcesPage = await corps_ressourcesPage({})
// « esbuild » · implémentation, pour « Empaqueteur »
const esbuild = await corps_esbuild({})
// « Page » · fonction
const page = await corps_page({ palette, typographie, ressources: ressourcesPage, lecture: lectureDisque, empaqueteur: esbuild })
// « Serveur de trame dev » · fonction
const serveurDev = await corps_serveurDev({ disposition, normeHttp: http, types: typesDeMedia, evenements: evenementsServeur, terminal: terminalNode, horloge: horlogeSysteme, minuteur: minuteurNode, regroupement: regroupementDev, http: httpNode, lecture: lectureDisque, chemins: cheminsNode, projet, paquet, differences, page })
// « Lancer trame dev » · point d'entrée
const dev = await corps_dev({ preparation, serveurDev })
// « Éprouver les lois » · point d'entrée
const eprouverLois = await corps_eprouverLois({ sortie: statutDeSortie, preparation, compilateur, vues, lois, terminal: terminalNode })
// « Exporter la page » · point d'entrée
const exporter = await corps_exporter({ sortie: statutDeSortie, disposition, preparation, paquet, page, ecriture: ecritureDisque, chemins: cheminsNode, terminal: terminalNode })
// « Prendre l'instantané » · point d'entrée
const instantane = await corps_instantane({ sortie: statutDeSortie, disposition, preparation, machine, markdown, ecriture: ecritureDisque, chemins: cheminsNode, terminal: terminalNode })
// « Lancer un composant » · point d'entrée
const lancer = await corps_lancer({ sortie: statutDeSortie, assemble, processus: processusNode })
// « Publier » · point d'entrée
const publier = await corps_publier({ sortie: statutDeSortie, preparation, verrou, ecriture: ecritureDisque, terminal: terminalNode })
// « Vue par son nom » · point d'entrée
const vueParNom = await corps_vueParNom({ sortie: statutDeSortie, preparation, rendreVue, compilateur, vues, terminal: terminalNode })

const demarre = (await fige.demarrer(TrameCli, { exposition: ligneDeCommandeNode }, [
  { titre: "Afficher une vue", champs: {"declencheur":{"type":"commande","nom":"view"}}, valeur: afficherVue },
  { titre: "Assembler un composant", champs: {"declencheur":{"type":"commande","nom":"assemble"}}, valeur: assemble },
  { titre: "Charge utile", champs: {"declencheur":{"type":"commande","nom":"payload"}}, valeur: chargeUtile },
  { titre: "Construire", champs: {"declencheur":{"type":"commande","nom":"build"}}, valeur: construire },
  { titre: "Lancer trame dev", champs: {"declencheur":{"type":"commande","nom":"dev"}}, valeur: dev },
  { titre: "Éprouver les lois", champs: {"declencheur":{"type":"commande","nom":"test-kinds"}}, valeur: eprouverLois },
  { titre: "Exporter la page", champs: {"declencheur":{"type":"commande","nom":"export"}}, valeur: exporter },
  { titre: "Prendre l'instantané", champs: {"declencheur":{"type":"commande","nom":"snapshot"}}, valeur: instantane },
  { titre: "Lancer un composant", champs: {"declencheur":{"type":"commande","nom":"run"}}, valeur: lancer },
  { titre: "Publier", champs: {"declencheur":{"type":"commande","nom":"publish"}}, valeur: publier },
  { titre: "Vue par son nom", champs: {"declencheur":{"type":"commande","nom":"*"}}, valeur: vueParNom },
])) as { adresse?: string; code?: number } | undefined
if (demarre?.adresse) console.log(`« Trame en ligne de commande » · Local · ${demarre.adresse}`)
if (demarre?.code !== undefined) process.exitCode = demarre.code
