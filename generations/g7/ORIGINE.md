# Génération 7

- Assemblée par : g6, par avancer.sh : exemple identique ; graphe de Trame avec des écarts acceptés (ecarts.diff : les littéraux 0, 1 et "" sont désormais relevés, d'où plus d'avertissements et un catalogue complet) ; point fixe
- Ce qui change : plus aucun littéral admis : la décision « Littéraux admis » est retirée, le driver relève tout ; chaque littéral porte son rôle (indice, calcul, comparaison, valeur initiale, argument de…), et le catalogue les classe par rôle
- Empreinte (programme et code) : `83690982c0d0e95a`
- Programme : `out/local/trame-cli.ts`
- Graphe et code du moteur : `src/`, copiés tels qu'assemblés
- Langage partagé : `trame/` et `kinds/` sont des liens vers ceux du dépôt

Lancer cette génération : `npx tsx generations/g7/out/local/trame-cli.ts <commande>`, depuis le dossier du projet.
