# Génération 1

- Assemblée par : l'amorce (trame/cli.ts), par amorcer.sh : étage 1, point fixe atteint à l'étage 3
- Ce qui change : le moteur sait qu'un nœud déclare ses constantes : son corps les reçoit en paramètres, le programme assemblé les écrit, le compilateur les vérifie, les fiches les affichent
- Empreinte (programme et code) : `be0e0abd65fe24ce`
- Programme : `out/local/trame-cli.ts`
- Graphe et code du moteur : `src/`, copiés tels qu'assemblés
- Langage partagé : `trame/` et `kinds/` sont des liens vers ceux du dépôt

Lancer cette génération : `npx tsx generations/g1/out/local/trame-cli.ts <commande>`, depuis le dossier du projet.
