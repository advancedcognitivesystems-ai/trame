# Génération 6

- Assemblée par : g5, par avancer.sh : exemple et graphe de Trame construits comme g5, au caractère près ; point fixe
- Ce qui change : la spec Mermaid en 14 éléments de syntaxe ; les choix produit d'affichage en décisions (Markdown comme rendu textuel des documents, figures en diagrammes Mermaid : sens, traits, aspect, chronologie) ; un rendu des figures qui compose la spec, que le rendu Markdown met dans des blocs mermaid
- Empreinte (programme et code) : `da2cb6aad88f9d95`
- Programme : `out/local/trame-cli.ts`
- Graphe et code du moteur : `src/`, copiés tels qu'assemblés
- Langage partagé : `trame/` et `kinds/` sont des liens vers ceux du dépôt

Lancer cette génération : `npx tsx generations/g6/out/local/trame-cli.ts <commande>`, depuis le dossier du projet.
