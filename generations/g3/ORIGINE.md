# Génération 3

- Assemblée par : g2, par avancer.sh : exemple identique ; graphe de Trame avec des écarts acceptés (ecarts.diff : le code en ligne de litteraux.md et markdown.md) ; point fixe
- Ce qui change : le code en ligne et les blocs de code suivent CommonMark : délimités par une suite d'accents graves plus longue que celles du texte (nouvel élément « Suite d'accents graves »)
- Empreinte (programme et code) : `e731437b5da9ad5e`
- Programme : `out/local/trame-cli.ts`
- Graphe et code du moteur : `src/`, copiés tels qu'assemblés
- Langage partagé : `trame/` et `kinds/` sont des liens vers ceux du dépôt

Lancer cette génération : `npx tsx generations/g3/out/local/trame-cli.ts <commande>`, depuis le dossier du projet.
