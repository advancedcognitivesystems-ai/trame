# Génération 2

- Assemblée par : g1, par avancer.sh : exemple et graphe de Trame construits comme g1, point fixe
- Ce qui change : la spec Markdown en 19 éléments de syntaxe (CommonMark, GFM, HTML, URI), chacun avec ses marques et des exemples vérifiés à la compilation ; le rendu Markdown les compose ; la page reçoit les rendus Markdown et texte faits par le moteur
- Empreinte (programme et code) : `7252e7e1678a47fa`
- Programme : `out/local/trame-cli.ts`
- Graphe et code du moteur : `src/`, copiés tels qu'assemblés
- Langage partagé : `trame/` et `kinds/` sont des liens vers ceux du dépôt

Lancer cette génération : `npx tsx generations/g2/out/local/trame-cli.ts <commande>`, depuis le dossier du projet.
