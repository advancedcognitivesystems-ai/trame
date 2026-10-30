#!/usr/bin/env bash
# Written by trame ship from the graph, for the shipment "A preview" of apps/poselia
# Do not edit: edit the graph, then ship.
set -euo pipefail
by="${1:?give the name of the person who ships}"
cd "$(dirname "$0")/../../.."
(cd "." && npm ci)
(cd "std" && npm ci)
(cd "apps/poselia" && npm ci)
(cd "std" && npx playwright install --with-deps chromium)
cd "apps/poselia"
../../trame.sh ship Preview --by "$by"
