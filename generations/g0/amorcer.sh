#!/bin/bash
# Historique : c'est ainsi qu'a été produite la génération 1 (generations/g1, dont src/ garde le graphe d'alors).
# Depuis, le graphe emploie des capacités que seul le moteur décrit connaît (les constantes déclarées par un nœud) :
# l'amorce ne sait plus l'assembler, et c'est la dernière génération qui assemble la suivante (./avancer.sh).
#
# L'amorçage. L'amorce (trame/, figée) assemble le moteur décrit dans src/ : c'est l'étage 1. Le moteur se modifie dans
# le graphe ; il peut donc en dire plus que l'amorce (le catalogue des littéraux, par exemple). Ce qui doit tenir :
#   - sur l'exemple, chaque étage fait exactement ce que fait l'amorce (les scénarios le vérifient aussi) ;
#   - sur son propre graphe, l'étage 2 fait exactement ce que fait l'étage 1 ;
#   - l'étage 3 est identique à l'étage 2, au caractère près : le point fixe.
set -euo pipefail
cd "$(dirname "$0")"
export TRAME_TODAY=2026-10-17 NODE_NO_WARNINGS=1
tmp=$(mktemp -d)
amorce="npx tsx $PWD/trame/cli.ts"
moteur="npx tsx $PWD/out/local/trame-cli.ts"
ok() { echo "  ✓ $1"; }
save() { mkdir -p "$tmp/$1" && cp -r docs graph.json snapshot.json "$tmp/$1/"; }

echo "1. L'amorce construit l'exemple : la référence"
(cd exemples/reservations && $amorce build > "$tmp/ex0.txt" && save ex0)
ok "$(head -1 "$tmp/ex0.txt")"

echo "2. L'amorce construit le graphe de Trame ; ses scénarios font tourner le moteur décrit, en test, sur l'exemple"
$amorce build > "$tmp/self0.txt"
ok "$(head -1 "$tmp/self0.txt")"
grep -E "^\s+(CompilerExemple|LoisDesTypes|ConstruireCommeAmorce)\s" "$tmp/self0.txt" | sed 's/^ */    /'

echo "3. L'amorce assemble le moteur : étage 1"
$amorce assemble TrameCli --env Local --figer
cp out/local/trame-cli.ts "$tmp/etage1.ts"

echo "4. L'étage 1 construit l'exemple"
(cd exemples/reservations && rm -rf docs graph.json snapshot.json && $moteur build > "$tmp/ex1.txt" && save ex1)
diff -r "$tmp/ex0" "$tmp/ex1" > /dev/null && diff "$tmp/ex0.txt" "$tmp/ex1.txt" > /dev/null && ok "identique à l'amorce : documents, graph.json, snapshot.json, sortie du terminal"

echo "5. L'étage 1 construit le graphe de Trame"
rm -rf docs graph.json snapshot.json && $moteur build > "$tmp/self1.txt" && save self1
ok "$(head -1 "$tmp/self1.txt") · $(grep -c 'littéra.* à spécifier dans le corps' "$tmp/self1.txt") corps signalés pour leurs littéraux"

echo "6. L'étage 1 se réassemble : étage 2"
$moteur assemble TrameCli --env Local --figer
if diff -q "$tmp/etage1.ts" out/local/trame-cli.ts > /dev/null; then ok "étage 2 identique à l'étage 1"; else echo "  · l'étage 2 diffère de l'étage 1 (l'assemblage a changé dans le graphe)"; fi
cp out/local/trame-cli.ts "$tmp/etage2.ts"

echo "7. L'étage 2 construit le graphe de Trame"
rm -rf docs graph.json snapshot.json && $moteur build > "$tmp/self2.txt" && save self2
diff -r "$tmp/self1" "$tmp/self2" > /dev/null && diff "$tmp/self1.txt" "$tmp/self2.txt" > /dev/null && ok "identique à l'étage 1"

echo "8. L'étage 2 se réassemble : étage 3"
$moteur assemble TrameCli --env Local --figer > /dev/null
diff "$tmp/etage2.ts" out/local/trame-cli.ts > /dev/null && ok "étage 3 identique à l'étage 2, au caractère près : point fixe"

echo "9. Les lois des types et des vues"
$moteur test-kinds | sed 's/^/    /' | grep -v " ok$"
echo "Amorçage réussi."
rm -rf "$tmp"
