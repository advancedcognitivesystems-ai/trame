#!/bin/bash
# Advances by one generation: the generation Trame pins (trame.json, "engine") runs `trame advance`, which builds the
# example and Trame's graph, assembles the candidate, has it build both as it did and reassemble itself to a fixed point,
# checks the laws, replays the older generations that share the language, and lets the requirement "Accept a candidate"
# (src/generations.ts) decide. On --promote, it freezes the candidate, writes its release and moves the pins to it.
#   ./advance.sh                      checks the candidate
#   ./advance.sh --accept             the differences shown are wanted
#   ./advance.sh --promote "what"     freezes the accepted candidate into the next generation, and deploys it
set -euo pipefail
cd "$(dirname "$0")"
exec ./trame.sh advance "$@"
