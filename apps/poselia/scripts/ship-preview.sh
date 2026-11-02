#!/usr/bin/env bash
# Written by trame ship from the graph, for the shipment "A preview" of .
# Do not edit: edit the graph, then ship.
set -euo pipefail
by="${1:?give the name of the person who ships}"
cd "$(dirname "$0")/.."
(cd "." && npm ci)
(cd "." && ./trame.sh --restore)
(cd ".trame/std" && npx playwright install --with-deps chromium)
cd "."
./trame.sh ship Preview --by "$by"
