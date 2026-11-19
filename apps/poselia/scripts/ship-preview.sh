#!/usr/bin/env bash
# Written by trame ship from the graph, for the shipment "A preview" of apps/poselia
# From the artefact sdlc.PreviewScript declared in apps/poselia/src/sdlc.ts
# Do not edit: change those nodes, then ship.
set -euo pipefail
by="${1:?give the name of the person who ships}"
cd "$(dirname "$0")/../../.."
(cd "." && npm ci)
(cd "apps/poselia" && npm ci)
(cd "apps/poselia" && npx playwright install --with-deps chromium)
cd "apps/poselia"
../../trame.sh ship Preview --by "$by"
