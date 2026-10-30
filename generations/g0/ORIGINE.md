# Génération 0 : l'amorce, et le langage en français

- `trame/` : l'amorce (le moteur écrit à la main) et le prélude du langage, tels qu'ils étaient en français.
- `kinds/`, `views/`, `vues-moteur/` : les types et les vues en français.
- `exemples/reservations/` : la démo des réservations, en français.

L'amorce construit l'exemple :

    cd generations/g0/exemples/reservations && npx tsx ../../trame/cli.ts build

Les générations 1 à 8 ont été écrites dans ce langage. Chacune en porte une copie (le prélude, les types, les vues,
l'exemple), et son `package.json` fait résoudre `#trame/interne` vers son prélude : elle se relance sur ses propres
sources, sans rien partager avec le langage actuel.

    cd generations/g7/exemples/reservations && npx tsx ../../out/local/trame-cli.ts build
    cd generations/g7 && npx tsx out/local/trame-cli.ts build
