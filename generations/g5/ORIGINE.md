# Génération 5

- Assemblée par : g4, par avancer.sh, écarts acceptés (ecarts.diff)
- Ce qui change : les nœuds historiques d'une figure ont « stroke-dasharray:4 3 », sans espace après les deux-points, comme toutes les propriétés de style des figures ; un écart voulu sur l'exemple se déclare dans le graphe (décision « Écarts attendus sur l'exemple »)
- Empreinte (programme et code) : `bd17ecaa9fd4cdc7`
- Programme : `out/local/trame-cli.ts`
- Graphe et code du moteur : `src/`, copiés tels qu'assemblés
- Langage partagé : `trame/` et `kinds/` sont des liens vers ceux du dépôt

Lancer cette génération : `npx tsx generations/g5/out/local/trame-cli.ts <commande>`, depuis le dossier du projet.
