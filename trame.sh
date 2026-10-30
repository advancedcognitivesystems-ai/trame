#!/bin/bash
# Runs the generation of Trame that the project in the current directory pins: the path under "engine" in its
# trame.json (decision "The engine a project runs"). It is outside the graph by construction: it runs before any engine.
#   ./trame.sh <command> [arguments]   runs the pinned generation on the project
#   ./trame.sh --restore               installs, in the generation's folder, the packages it was frozen with
set -euo pipefail
project="$PWD"
here="$(cd "$(dirname "$0")" && pwd)"
pin=$(node -e 'const c = require(process.argv[1]); process.stdout.write(c.engine || "")' "$project/trame.json" 2>/dev/null || true)
if [ -z "$pin" ]; then
  echo "trame.sh: $project/trame.json pins no engine" >&2
  exit 1
fi
engine="$project/$pin"
if [ "${1:-}" = "--restore" ]; then
  exec npm ci --prefix "$engine"
fi
if [ -f "$engine/package-lock.json" ] && [ ! -d "$engine/node_modules" ] && ! cmp -s "$engine/package-lock.json" "$here/package-lock.json"; then
  echo "trame.sh: $pin was frozen with other packages than those installed here; ./trame.sh --restore installs them" >&2
fi
NODE_NO_WARNINGS=1 exec npx tsx "$engine/out/local/trame-cli.ts" "$@"
