# Generations

A generation is the assembled engine (`gN/out/local/trame-cli.ts`) frozen together with the copy of the graph and of
the code it was assembled from (`gN/src/`); since g44, with the page it writes, assembled for the browser
(`gN/out/browser/page-app.ts`), since g39 with the `package.json` and lockfile it was tried with, and since g55 with a
copy of the graph and code of Trame's libraries (`gN/std/src/`), whose bodies its program imports. Generation N compiles the engine's graph (`src/` at the root) and assembles
generation N+1: `trame advance`, which `advance.sh` runs with the generation `trame.json` pins (up to g30, `advance.sh` did the advance
itself, and `tools/freeze.sh` froze). Each generation's `ORIGIN.md` (`ORIGINE.md` up to g8) says who assembled it, what
changed, and its fingerprint; `differences.diff` (`ecarts.diff` up to g8) keeps the differences that were accepted.

## The language a generation speaks

A generation runs on a language: the prelude (`trame/`), the kinds (`kinds/`), the views and the project layout it
reads. While the language does not change in a way a generation cannot follow, the generation reaches the repository's
language through links (`gN/trame`, `gN/kinds`), so that it and the project it compiles load the same registry.

When the language changes in a way an older generation cannot follow, that generation receives a copy of the language
it was frozen with, and its own `package.json` makes `#trame/interne` resolve to its own prelude. It then runs on its
own sources, independently of the current language:

| Generations | Language | How to run them |
|---|---|---|
| g0 | The bootstrap (the engine written by hand) and the French language: prelude, kinds, views, the reservations example | `cd generations/g0/exemples/reservations && npx tsx ../../trame/cli.ts build` |
| g1 to g8 | French, each with its own copy of the language and of the example | `cd generations/g8 && npx tsx out/local/trame-cli.ts build` (Trame's graph as it was), `cd generations/g8/exemples/reservations && npx tsx ../../out/local/trame-cli.ts build` (the example) |
| g9 to g50 | English, each with its own copy of the last language it ran on (g9 to g48 since the kinds moved to the engine's lib, g49 and g50 since the prelude dropped its English helpers in g52) | `cd generations/gN/examples/reservations && npx tsx ../../out/local/trame-cli.ts build` |
| g51 onwards | English, shared with the repository | `npx tsx generations/gN/out/local/trame-cli.ts <command>`, from the project's directory |

`generations/g0/amorcer.sh` is the bootstrap that produced generation 1, and `generations/g0/outils/` the one-off port
of the bootstrap into bodies with parameters. Both are history: they refuse to run on the current graph.

## The language as a package (g87)

Since g87 a project names the language like a library: `#trame/kernel` and `#trame/kinds/<kind>`, which its import map
(written by `trame manifest`) leads to `.trame/trame`, a link to the generation it pins; an advance moves the link with
the pin. A generation links `gN/views` too, beside `gN/trame` and `gN/kinds`, so that the generation carries its whole
language. The engine gives TypeScript the language's files where they are (g88): through the link, the compiler would
read the kernel a second time and its types would not match. Since g89 a relative import that leaves its package
refuses the build. The language is still shared live between the generations that can follow it; a copy per
generation, so that a project's tree of dependencies stays exact in time, is the next step.

## Pins, releases and archived languages

Since g38 the generations are a module of the graph, `src/releases.ts` (kind `release`), which `trame advance` writes at
each promotion; `docs/versions.md` lists them. A project runs the generation its `trame.json` pins (`"engine"`), through
`trame.sh`; a promotion moves the pins of Trame, of its libraries (since g54) and of the example. Each promotion archives the language once per
fingerprint in `languages/<fingerprint>/` (the prelude, the kinds, the views, and the sources of the example and of
Trame's libraries written in them); the advance replays the oldest and the newest generations that share the language, and gives the archive to one
that no longer runs and to every older one that shares it (they lack what it lacks), which then run on their own copy.
g10 to g46 received the archive `9e403b58c51e8c7d` by hand at g49, when the kinds moved to the lib and only g9 and g47
had been replayed. `trame.sh --restore`, run from a project, installs in the folder
of the generation it pins the packages that generation was frozen with.
