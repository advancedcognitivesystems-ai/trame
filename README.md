# Trame described by Trame

Here, Trame's engine is a Trame graph. Its functions are code nodes, its dependencies on the platform go through
ports, its constants are decisions, and the standards it uses (HTTP, media types, the pseudo-random generator,
CommonMark, Mermaid, the DOM's events…) are nodes that declare their constants and what they mean. Its formats are
technical choices (one renderer writes Markdown for the documents, with Mermaid figures, plain text for the terminal,
HTML and SVG for the page), its language (British English) is a decision, and the page it writes is a program of its
own, assembled from the graph for the browser. The engine written by hand (the bootstrap) compiled this graph once:
that is generation 1. Since then, each frozen generation compiles the graph and assembles the next one. A new
capability therefore exists only if it is written in the graph, and serves only from the next generation on.

```bash
npm install
./trame.sh build                                   # the generation trame.json pins builds Trame's documents (docs/)
./advance.sh                                       # it assembles the described engine and checks it (≈ 7 min); --promote "…" freezes it
./trame.sh export trame-by-trame.html              # the page of Trame's graph, every date included
./trame.sh manifest && npm install                 # writes package.json from the graph's packages, the language's and libraries' names, then installs them
mkdir garden && cd garden && ../trame.sh init "Garden" --by me   # starts a project: trame.json, src/product.ts, AGENTS.md and the skill, package.json
cd std && ../trame.sh release 0.1.0 "…" --by me    # ships a version of the standard library through its graph, then freezes it
cd apps/poselia && ../../trame.sh deliver          # writes the app's page, a file a browser opens as it is
./trame.sh audit                                   # asks npm about the packages; the answers are dated evidence (evidence/)
cd examples/reservations && ../../trame.sh run ReservationsApi --env Local
```

## Where to read the graph

The graph writes its own documentation at each build, in `docs/`; this README tells the story and copies none of
their numbers.

| Document | What it holds |
|---|---|
| `docs/index.md` | Every module, how many nodes of each kind it holds, and the open issues |
| `docs/versions.md`, `docs/releases.md` | The generations: when, what changed, which one assembled it, whether it shares the language |
| `docs/adrs.md` | The architecture decisions: the principles, the layers and the decisions taken on the way, with what applies them |
| `docs/choices.md` | What answers each port in each environment, and why; the design patterns the choices follow (from the standard library) |
| `docs/layers.md` | The graph by distance to its goals (the page explores it as a map) |
| `docs/laws.md` | The laws every kind and view keeps, as requirements with their acceptance criteria |
| `docs/literals.md` | The literals written in bodies and in the kinds and views (none: one would be an error) |
| `docs/packages.md` | The npm packages the engine uses, checked against the lockfile, with the registry's dated reports |
| `docs/browser.md`, `docs/page.md`, `docs/markup.md` | The page: the component assembled for the browser, its shell, the names its style sheets and program share |
| `docs/rendering.md` | The renderer and the syntaxes it writes in, per audience |
| `docs/markdown.md`, `docs/mermaid.md`, `docs/html.md`, `docs/typescript.md`, `docs/terraform.md`, `docs/text.md` | The specs of what Trame writes |
| `docs/messages.md`, `docs/standards.md` | The language and its catalogs; the standards only the engine needs (the APIs of TypeScript and tree-sitter) |
| `docs/libraries.md` | What belongs to a library: the rule that keeps a library's nodes, documents and issues apart |
| `std/docs/` | The standard library's own documents: the structures bodies share instead of writing 0, 1 or `""`, the published standards (HTTP, URIs, ECMAScript, POSIX, Node.js, ISO 8601…), the design patterns |

`trame-by-trame.html` is the page of Trame's graph, exported by the generation in place: it carries its graph
compressed and its own program.

## What is in the repository

| Path | Contents |
|---|---|
| `trame/` | The prelude of the language: the registry of nodes and kinds, the kind API, the intermediate format, formatting |
| `kinds/`, `views/` | The kinds and the views, shared by Trame and by the example (`examples/reservations/trame.json`); their words are in catalogs (`kinds/words.ts`, `views/words.ts`) |
| `engine-views/` | The views of Trame's own graph: the catalogue of literals, the versions |
| `src/` | Trame's graph, one module per file (`docs/index.md` lists them) |
| `src/code/` | The bodies: one per node, its dependencies its parameters. This is where the engine, and the page, change |
| `src/releases.ts` | The releases of the engine, written by `trame advance` at each promotion |
| `evidence/` | Dated evidence the graph reads: the registry's reports on the packages, the SDLC's evidence (`sdlc.json`) and the dossiers of the shipments (`shipments/`) |
| `generations/` | The frozen generations: `gN/out/local/trame-cli.ts` (the engine), `gN/out/browser/page-app.ts` (its page, since g44), the copy of the graph it was assembled from, its `package.json` and lockfile; `languages/` keeps each language once, by fingerprint (`generations/README.md`) |
| `out/local/`, `out/browser/` | The candidate: the engine and its page, assembled from the current graph |
| `trame.json` | The project's configuration, and the generation it runs (`"engine"`) |
| `trame.sh`, `advance.sh` | Run the pinned generation; run its `trame advance` |
| `examples/reservations/` | The reservations demo, on which the described engine is tested; it pins its engine too |
| `std/` | The standard library: a Trame project of its own, which Trame and the example import (`std/README.md`); its frozen versions under `std/releases/` |
| `ci/` | The library of writers that run a shipment elsewhere (a workflow of GitHub Actions, a Bash script) from the plan the engine computes (`ci/README.md`) |
| `apps/poselia/` | Poselia, the yoga app: a product described with Trame, importing `std` and `ci` at a version, delivered as a page |
| `AGENTS.md`, `CLAUDE.md` | The guide for agents working in a Trame project: where things are, the commands, how to read the graph for the work left, the rules the build enforces, the order of a change of the engine, how to check; `CLAUDE.md` points to it |

## Generations and how Trame is deployed

The engine changes in `src/` and `src/code/`, and it is the described engine that assembles the described engine. The
list of generations is a module of the graph (`src/releases.ts`, kind `release`): `docs/versions.md` shows it, newest
first, with what each one changed and which one assembled it.

**A project pins its engine.** `trame.json` names the generation a project runs (`"engine": "generations/g53"`, the
decision `generations.EnginePin`); `trame.sh` runs it, and `advance.sh` and the npm scripts go through it. The example
pins its engine the same way. A generation keeps the `package.json` and the lockfile it was frozen with
(`trame.sh --restore` installs them in its folder), so it can run again on the packages it was tried with.

**A generation shares the language while it can.** The language is the prelude, the kinds and the views. Each promotion
archives it once per fingerprint (`generations/languages/<fingerprint>/`, with the example written in it); the
decision `LanguageSharing` says when a generation shares the repository's. The advance replays the oldest and the
newest older generations that share it, on the example; one that no longer runs lacks what the language now asks, and
so do the older ones: each of them, up to the newest that fails, receives the language archived with the generation in
place, and runs on its own copy from then on (since g50; before, only the two replayed did, and g10 to g46 received
theirs by hand when the kinds moved to the lib). g1 to g8 run on their French copies.

`trame advance` is a command of the graph (`commands.Advance`), run by the pinned generation, gN:

1. gN builds Trame's libraries (since g54: the standard library), then the example: the reference.
2. gN builds Trame's graph. Its three scenarios wire the described engine in the Test environment, in memory, and run
   it on the example: it compiles the example, the laws of the kinds hold, and `trame build` writes the example's files
   character for character as gN did (`BuildLikeBefore`).
3. gN assembles the candidate: the `TrameCli` component for the environment Local, and, since g45, the `PageApp`
   component for the environment Browser (the page the engine writes).
4. The candidate builds the libraries and the example, then Trame's graph (5): identical to what gN writes, or the
   difference is shown (`differences.diff`).
6. The candidate reassembles both programs; that second assembly builds Trame's graph like the candidate (7), and
   reassembles itself identically, character for character (8): the fixed point.
9. The laws of the kinds and of the views.
10. The older generations that share the language run on the example.

The requirement "Accept a candidate" (module `generations`) decides, on the report of these checks: the second assembly
must build like the candidate, reach the fixed point and keep the laws, the older generations must run (or be able to
receive their language), and the candidate must build like gN, whose scenarios hold, unless the differences are
declared wanted (`--accept`). Its acceptance criteria play the rule on each case at every build.

`--promote "what changes"` then freezes the candidate into gN+1: both programs, a copy of the graph and its code and of
its libraries' (the program imports their bodies), its packages, links to the shared language, `ORIGIN.md` with its fingerprint, the accepted differences; it writes the
release into `src/releases.ts` (`ReleaseRecords`, with the syntax elements of `typescript`) and moves the pins of Trame,
of its libraries and of the example to gN+1. Up to g30 a shell script did all this; g31 is the first generation `trame advance` froze,
g39 the first it deployed. Through the rewrites (the Markdown renderer in g2, the figure renderer in g6, the renderer
split into syntaxes in g36, the page assembled for the browser in g44), the documents stayed identical, character for
character, on the example as on Trame's graph.

**A wanted difference on the example** makes the `BuildLikeBefore` scenario fail, and a graph in error is not
assembled: that is intended. To let it through, it is declared in the graph: the `ExpectedDifferences` decision
(module `scenarios`) lists the files of the example that are expected to change, with the reason. The scenario lets
those through, and only them; `advance.sh --accept` shows the content of the differences and keeps them with the
generation. Once the generation is in place, the list is emptied.

## Moving to English

The move took two generations, because the generation that assembles the first English engine speaks French.

- **g8 → g9.** Everything in the workspace was translated: node ids, dependency keys, port contracts, kinds, views,
  bodies, the example, the scripts, every comment and every document. g8 assembled the English graph on the English
  prelude, through a few transitional aliases (the French names of the frozen-program helpers, `{ valeur, sens }`
  next to `{ value, meaning }` in constants, the French keys of `trame.json`). The words the prelude uses internally
  (statuses, severities, stages…) stayed French for that generation: g8's code compares them. All 18 files of the
  example were declared as expected differences. g9 then reassembled itself to a fixed point.
- **g9 → g10.** The prelude's vocabulary values became English and the aliases were removed. g8 received its own copy
  of the French language first, so that it still runs on its own sources. g9's code never writes a vocabulary value as
  a literal, and its frozen program holds none, so g9 runs unchanged on the new values: g10 builds both projects
  exactly as g9 does, and its program is g9's, character for character.

### Language and messages

- **The language is a decision.** `Language` (module `messages`) says `{ tag: "en-GB" }`. The `Dates` function writes
  a date of the graph in that language ("17 October 2026"); the renderers, the drivers and the dev server receive it.
  The page receives the tag in its payload and writes its dates the same way, and the exported page's `lang` comes
  from it.
- **Code holds no text.** What the engine says to people is in **message catalogs** (kind `catalog`): the compiler's
  diagnostics, the drivers', the laws', the views', the outputs', trame dev's, the commands', the renderers', the
  platform's, the scenarios', the advance's. A body receives its catalog as a dependency and calls its messages by name,
  with typed parameters (`messages.assemblyRefused(errors)`). Since g40 the language says nothing of its own either:
  the kinds, the views, Trame's views and the page have their catalogs of words (`kinds/words.ts`, `views/words.ts`,
  `engine-views/words.ts`, `src/code/page/words.ts`).
- **A catalog's text is what it declares.** The `catalog` kind sets `declaresLiterals`: the literals of its body are not
  reported as literals to specify.
- **The prelude's vocabularies are objects.** Code names a value by its key (`Status.held`, `Severity.error`,
  `Stage.execution`), never by the word. Graph values that depend on a vocabulary are keyed by the vocabulary's keys,
  which do not change when the words do: the palette gives a colour per status key, the Mermaid figure decision a
  stroke per nature key; `keyOf(Status, s)` gives the key of a value.

## Trame's graph

`docs/index.md` lists the modules and what each holds; the page explores them as a map of layers. In short: the
**principles**; the **product** (its goals, the requirement "Sort problems by severity", the laws' draws); the **laws**
of kinds and views; the **libraries** (what belongs to one); the **architecture** (the ports, the effects,
the environments Local, Test and Browser, the components `TrameCli` and `PageApp`, three rules); the **platform** and
**the page in a browser** (what answers each port, and why); the **standards**; the languages Trame reads and writes
(**syntax**, **typescript**, **terraform**, **html**, **languages**) and the formats it writes (**markdown**, **mermaid**,
**text**); the **documents**, the **appearance** and the **markup** they and the page share; the **conventions** and
the **messages**; the **engine**, the **rendering** and the **page**; the **commands**; the **generations**, the
**releases** and the **packages**; the **scenarios**. The structures bodies share, the published standards and the
design patterns come from the standard library (below).

The three architecture rules are queries on the graph:

- "Rendering does not read the graph": no renderer reaches the prelude, even from afar.
- "Only commands write": an engine function that has the write effect is refused, with the name of the dependency it
  writes through.
- "Effects come from the vocabulary": a port that declares an effect outside the `Effects` vocabulary is refused.
  TypeScript already refuses an unknown word in `effects(…)`; the rule covers what escapes the types.

Changing a decision changes the engine. With `SampleCount` at 20, reassembling writes `const sampleCount = 20`, and
`test-kinds` draws 20 nodes per kind. Changing `ok` in the palette changes the page, its figures and the Mermaid
diagrams of the documents.

## Libraries and the standard library

Trame's graph held nodes every product needs: the structures bodies share, published standards, design patterns. The
example had copied some of them (HTTP, media types, URIs, four patterns), each with its own wording and constants, and
the next product would have copied them again. Since g55 they live in `std/`, the **standard library**: a Trame project
of its own, with its goals, its documents (`std/docs/`) and nothing undecided.

A project names its libraries in `trame.json` (`"libraries": { "std": "std" }`) and imports their nodes by path. Their
modules join its graph under the library's name: `std/algebra.Counts` (the requirement `LibraryOfAModule`, ADR "A
library is a Trame project, imported by path"). The project's nodes depend on them and the kinds read them, but what a
build shows as the project's own stops there: its documents link to the library's (`../std/docs/algebra.md#Counts`),
its index and its build summary count the library's nodes and issues apart, its lock leaves them out, a view reads only
the project's nodes and reaches a library's through the edges. The choices view lists the patterns a project's choices
follow, wherever they are declared.

**A library is imported by its name** (g56, ADR "A library is imported by its name"). Code writes
`import { Counts } from "#std/algebra"`, never a path into the library; `trame manifest` writes the import map of the
project's `package.json` from its `trame.json` (`"#std/*": "./std/src/*.ts"`, or through a link under `.trame/` when the
library is outside the package), and the engine gives the TypeScript compiler the same names. The laws refuse a file
that reaches into a library by a path, and say which name to write. **A version is shipped, then frozen** by `trame release 0.1.0
"what changes" --by <name>`, run in the library. Since g101 a library ships its versions through its own graph, as
Trame ships its generations: an artefact that is a version of the project (`version: true`) holds all its code, so the
shipment that ships it (`NextVersion`) reaches every node of the library, and its policy derives what to prove from all
of it (std's: its functions verified, the requirements of its goals served, its decisions applied, its rules held, its
packages safe; ci's writers, each by its examples); what the library only offers (an adapter, a requirement nothing in
it follows) is judged where a project chooses it. The release ships that version first and freezes nothing while it
does not hold. Then its graph, its code and its documents are copied under `releases/0.1.0/`, the
imports that leave the library are written again from the copy's place, and the release is recorded in the library's
module of releases (requirement "A release is settled": nothing to decide, no error). A project imports that version
with `"std": { "path": "../std", "version": "0.1.0" }`: its documents then link to the frozen documents.

**Every package names what it uses** (g87–g89, ADR "A package is used by its name"). The language is a package like a
library: a project imports `#trame/kernel` and `#trame/kinds/decision`, never `../../kinds/decision`. `trame manifest`
writes where each name leads in the project's `package.json`: `#trame/*` to the generation it pins, through a link
`.trame/trame` that an advance moves with the pin, `#std/*` to the library or the version it froze, and `"type":
"module"`. The kinds and views of a project are those of the language, from the engine that reads it; `trame.json`
names only those the project carries besides (a library that brings kinds). Trame's own repository is the language's
home: it reaches `kinds/` and `trame/` where they are. Where a package comes from is a port of std, `PackageSources`,
with its strategies: a local path now (`LocalPaths`: the package where it is, or a link under `.trame/` when it lies
outside the project), a registry later; moving a package out of this repository changes only where it comes from. Since
g89 a relative import that leaves its package refuses the build, and says which name to write. Since g91 a project's graph references the packages of Trame it uses, each a `package` node that says how it joins
the graph (`joins`: the language, a library), where it comes from (`from`: a word of std's `PackageOrigins`, by its
path or from the registry of this machine) and its path (`at`); `trame manifest` places each one by its origin and
writes `trame.json` from them (the language as the engine to run, `.trame/trame`; each library as placed, `{ at,
version }`): a derived file, like the import map. The engine leads `#trame/*` to its own language, and the
names of the project's libraries to their sources, when it loads a project: a package published once is read with
whichever generation and libraries read it, as a peer dependency (g91–g93), and bundled the same way: `trame deliver`
and `trame ship` lead esbuild by the names the engine leads (g95), so a page holds one language and one version of
each library; and a program Node.js runs leads them too: beside each program assembled, its launcher (`<name>.node.ts`,
g99) writes where each name leads, from the program, has the prelude's `trame/leading` lead them, then imports the
program, so it runs the same here, in a CI or by hand. Since g100 each origin says which versions it holds (the
versions frozen beside the one a path reaches, those in the registry): a reference behind the newest is warned, and
`trame upgrade [package…]` writes it again at the newest, then runs the manifest. Since g92 a version is published to the
registry of this machine (`~/.trame/registry/<name>/<version>`, the decision `LocalRegistryPlace`): by `trame release`
in a library (run on a version already frozen, it publishes it), and by the promotion of a generation, with its
language copied for real, so a project that runs it from there keeps the language it was frozen with. `trame.sh`
installs a published engine's packages the first time it runs it. `libs/geometry` runs entirely from the registry
(g102, std 0.16.0 since 4 November). The example and std keep a written pin, which an advance moves.

g54 brought this to the engine without any project using it, and built everything as g53 did; g55 moved the nodes. A
generation keeps a copy of Trame's libraries beside its graph, since its program imports their bodies (the structures),
and the advance builds them first, like the example. A standard, a structure and a vocabulary may now name the goals
they serve: in a library, nothing else uses them yet. A frozen version of a library, released and imported at that
version, comes with delivery.

## Delivery

How a product reaches the people who use it is a node too (g57, ADR "A product is delivered by a node of the graph"):
a **delivery** names a component, the environment it is assembled for, a target, where it is written, the title it is
shown with, its language and its style sheets. `trame deliver` writes it. The first target is a page a browser opens
as it is: the component is assembled for its environment as `trame assemble` does, its program bundled with esbuild
(the page's bundler settings), its style sheets written after the variables they use (`DeliveredStyle`: the values of
the decisions they name), in one document with its language and its title. A delivery is refused while the graph is
in error, and its component must run in its environment. The loading of a page (`PageLoading`) and its browser
realization (`BrowserLoading`) moved to the standard library, where a product finds them. A web application, then the
phones through Capacitor, will be new targets.

`apps/poselia/` is the first product delivered this way: a skeleton for now (its goal, a browser component, its first
page in French), importing the standard library at version 0.1.0; `../../trame.sh deliver` writes
`dist/poselia.html`.

## Data

The content a product carries is a **dataset** (g58, ADR "The data a product carries is a dataset"): typed rows (the
TypeScript compiler checks each row against its type), the key that names a row, the rules each row keeps (run at every
build: a broken rule is an error naming the row), and the languages its texts are written in (a text in several
languages is an object keyed by the languages offered, and each must be there). A **review** is dated evidence on the
dataset: the row, the language, who, whether it is approved, and the fingerprint of what was seen. It holds while the
row, in that language, still has that fingerprint (the engine gives the kinds `lib.fingerprint`); a row changed since
is shown as such. The dataset is held when every row is approved in every language. Wired as a dependency, it gives
its rows, frozen into a program like any value.

Poselia's graph is written by layers: its product (goals; the requirements "The breath of a moment", "A hold counts
in breaths" and "The language of the app", each with acceptance criteria; an assumption), its principles (five ADRs),
its architecture (a browser component, the ports of its content and its screen), its content and its first page. The
device's services it needs (preferences, the device's languages, a voice, the screen awake) are ports of the standard
library, with the browser's realizations, released in std 0.2.0, which Poselia imports. Its build lists what is left:
the reviews of its content (the default breath, four seconds in and out without pauses, is decided).

Its home page shows the poses and the sun salutation step by step (the pose, the phase of the breath, what to do), in
the language the app speaks: the person's choice kept on the device, or the device's, or the first offered. The words of
the interface are two catalogs, the English one translating the French one (a catalog may now translate another: the
same messages, in another language, checked by TypeScript); the content's texts are in the datasets, Poses and
Sequences, whose rules check that each step is a pose and that a cue names the leading leg exactly where the step moves
it. The page is rendered by the browser's screen with the HTML standards of std 0.3.0, which moved there from Trame.

A scenario, "The language of the home page", runs the app in a second environment, Test: in memory, the device's
languages given, the person's choices kept while it runs, and a screen that records the views it was given (the port
"Views shown", realized by the same function as the screen). It checks that the app speaks the device's language first,
that the cues name the leading leg, that choosing French writes the page again in French, and that the choice is kept.

The body (module `body`) is the engine of the page "Salutation au soleil", carried into the graph: a pose is written as a
teacher places a body on the mat (the pelvis, the four angles of the spine, where the hands and the feet go, the angles
of the feet and the hands), the trunk follows from its angles and each arm and leg reaches its hand or its foot through
two segments (inverse kinematics). Each piece is a requirement with its acceptance criteria: the trunk, a limb that
reaches, a pose ready to move, a hand on its way, a leg on its foot, a foot on its way and a leg that steps (exactly as
the page moves them: the foot around the moving hip, lifted when it goes far), the body between two poses, the heights
of its surface; its measures and how it moves are decisions. The dataset Poses checks two of them on every row: "A pose rests on what it
names" (the points of the body's surface within touching distance of the floor are exactly those the pose names: the
eight parts of Ashtanga Namaskara, the hands and the pelvis of the cobra) and "Every limb reaches". The dataset
Sequences checks that hands resting in two steps in a row rest in the same place. The player draws the body on a 3D
stage, with three.js, the first package of Poselia, bundled into its page; the lists draw it small, seen from the side.

A practice (module `practice`) plays a sequence with the breath: each step lasts the phase it moves on (the breath of
the most specific level that sets one: the step, the sequence, the pose, then the person's, then the default), and the
body goes from the pose before to its own, eased as a breath goes; the lungs fill and empty on the screen, each step is
said aloud as it starts and the screen is kept awake. A rule of the dataset Sequences checks that each step lasts with
the default breath: the plank, on a hold the default breath does not have, sets its own. The settings (module
`settings`) keep the person's breath (half a second at a time, or measured by tapping along with it) and what the voice
says. The frames of the screen, a voice that writes down what it says and a screen kept awake in memory are ports and
realizations of std 0.4.0, so four scenarios play the app with time turned by hand. One of them plays the whole sun
salutation every quarter of a second and checks that the body always rests on the floor, that nothing goes under it,
that a leg that steps skims the floor, and that the hands, wherever they rest, rest in one place: it found that the
engine, as it came, let the hands slide on the floor as they came down (a hand now comes down onto its place) and sent
the front knee 9.6 cm under the floor when stepping back to the plank, a dip the decision "How a body moves" now names
and bounds, since the person found the page's legs more right than any correction tried.

A practice can also hold each pose (module `composing`): "Learn" plays a sequence holding each pose three breaths, and
the composer builds a practice of poses held, chosen or drawn by lot. Each pose has a level (standing, folded, lunge,
plank, dog, lying on the front, kneeling, on all fours), a decision says which levels a body reaches from which in one
movement, and the requirement "A sequence that makes sense" judges a sequence: from standing to standing, each pose
reached from the one before, never back and forth (no standing, folding, standing), no pose twice in a row. One of its
criteria plays every pair of poses a way joins through the engine and checks the body stays on the floor, which removed
the way from lying on the front to the child's pose. The draw uses the seeded draws of std 0.5.0 (Mulberry32 from a
seed, a weighted choice), backtracks out of dead ends, and keeps the most varied of twelve draws. A hold lasts whole
breaths (requirement "A hold of whole breaths": it goes on until the breath reaches the phase of the next movement, so
the lungs never jump), and at least as long as its cue takes to say at the rate voices speak. The voice says each
movement in a few words that a rule checks fit its phase, then the whole cue as the hold starts; a singing bowl,
synthesized with Web Audio from a decision (four partials, each two tones that beat, each fading at its pace), rings as
it is time to move; the voice is turned off from the player. The voice of std 0.6.0 says whether the device can speak
(an Android app's WebView cannot: the player then says to open the page in Chrome or Safari) and picks a voice of the
language asked, named with its own tag, which Chrome on Android needs; std 0.7.0's keeps what it last failed with (the
player says it), and the bowl leaves the audio output to the voice between two strikes (its context suspended once it
is silent). The landmarks of the page "Salutation au soleil" came back as data of the Poses dataset (module `marks`):
each pose names spots of the body, lines, plumb lines, dots, arrows and angles; a requirement draws them on the body
as it is, the stage draws them in front of the mannequin with their words, and the player lists their sentences. When they
show is a decision of the graph, "When the landmarks are drawn" (still and moving): a first version hid that rule in a
body (only on a still body), so the flowing practice showed nothing behind the same button; the rejected option keeps
why, and a scenario checks the landmarks follow the body in the flowing practice. The hands rest at one place on the mat in every pose (a rule of Poses), so a child's pose after a dog
keeps them there; a way between levels moves at most one foot far (a criterion), which removed the forward bend ↔ dog. Seven scenarios play the app; one of them draws forty-eight
sequences and plays each to check the body stays on the floor. No node is violated; what stays unknown is what nothing
has checked yet: the datasets and the ADR "Content as data" until the reviews, the page in a browser (no scenario plays
there) and the ADR "A page first", the assumption "The phone stays on the mat".

Poselia's poses are its first dataset (`apps/poselia/src/content.ts`, rows in `src/data/poses.ts`): the eight poses of
the sun salutation and four to hold (the mountain, the child, the cat, the cow), named in Sanskrit, in French and in
English, waiting for the friends who will review them.

## The SDLC: shipping through the graph

How a version becomes available is in the project's graph too (g62, ADR "A version ships through the graph"). The
language gives the kinds; each project declares its own life cycle with them:

- a **role** says who holds it, whether they may review their own work, how their evidence is signed (an attribution
  today: who, when, on which fingerprint; the graph can ask for a cryptographic signature later);
- an **artifact** is what a version produces (Poselia's page, Trame's candidate engine), where it lives (or where its
  delivery writes it) and what produces it; wired into a program, it gives its path: a script names the artefact, not
  a path;
- a **check** is what a scenario in memory cannot see: run by a program of the SDLC (the page opened in Chromium without
  a screen) or made by hand from its steps and signed by a role (the voice heard on a phone); it holds for the
  fingerprint of the artefacts as last built;
- a **review** says what must be reviewed (each row of a dataset in each language, or a node as written) and by which
  role: what awaits it is an issue of that role;
- a **shipment** names a target, what it ships, the **policy** it follows (what it must prove, derived from what it
  reaches: see below), what it also requires that derivation cannot see, the entry points that deploy it and the
  environment its programs are assembled for. It holds when every obligation holds and no gap blocks it.

`trame ship <shipment> --by <name>` produces the artefacts (delivers a page, runs an entry point, assembles a
component) and fingerprints them, runs the checks a program makes, records what it found in `evidence/sdlc.json`,
compiles again, and refuses while an obligation does not hold, naming each one, why, and whose it is (requirement "Ship
only what holds"). Then it runs the deploying entry points in order and writes the shipment's dossier
(`evidence/shipments/<shipment>-<date>-<fingerprint>.json`: the artefacts and their fingerprints, the foundations,
each obligation with its status, its evidence and the obligation of the policy that brought it in, who shipped). `--dry-run` stops before deploying. `trame evidence <node> passed|failed --by <name>`
records what a person gives (a check by hand, a review, where an artefact was deployed), refused to someone who is not
of the role, or to the author when the role reviews only others' work.

The pipeline is computed once, by the engine (g63, `ShipmentPipeline`, given to the views as `Compilation.pipeline`):
`trame ship` runs it, and the view **pipelines** (`docs/pipelines.md`, and the page) shows it for each shipment: a
figure, then each step in order (produce, check, prove, deploy, record) with what runs it (a delivery, a program, a
component assembled; a check by hand and the role that signs it; a review and its role), its status and its latest
evidence, and the command that runs it. The pipeline is a document Trame writes from the graph, like the others; a file
that runs it elsewhere (a script, a workflow of continuous integration) would be an artefact a project declares. Since
g64, evidence replaces earlier evidence only when it says the same thing of the same version on the same day: two
shipments of a day are two events, each with its dossier, named by its fingerprint.

A shipment also runs elsewhere (g65): a file another place runs, a workflow of GitHub Actions or a Bash script, is an
artefact the project declares, written by a **writer** of the library `ci/` (a syntax element with its examples) and
naming the shipment it `runs` and the decision of `settings` it is given. The writer decides nothing: the engine
computes the **plan of the run** from the graph (`ShipmentRunPlan`), where the project is in Trame's repository, the
directories whose packages are installed from their lockfile (Trame's, the libraries', the project's), the words that
install the pinned generation's own packages when it has its own, what the packages the shipment's programs wire ask once
installed (a package node says it: Playwright's in std installs its Chromium), the words that ship (from Trame's
commands), what that place makes available once shipped and where the evidence is. The writer gives it the form its
place reads; a new place is a new writer. What happens to artefacts there is the project's choice, never a default
(g66): a workflow publishes only what its artefact `publishes` in the graph (on GitHub, an artefact of GitHub: the
deployment there), kept as long as its settings say, records the address of each as evidence, and keeps the evidence as a
second artefact only when its settings say so. Poselia's preview has both files, written by `trame ship RunnersWritten`;
its workflow publishes the page (thirty days) and keeps the evidence (ninety days). Since g67, a program trame ship
assembles is fingerprinted with everything it imports (decision "The fingerprint of a program"): its bodies are not
written in its file, and g65's and g66's candidates had come out with the same fingerprint.

Since g68, what a shipment must prove is **derived**, not listed by hand. The shipment computes what it reaches: the
artefacts it ships and what produces them, the programs behind them (a delivery's component in its environment, an
entry point's or a component's in the shipment's environment), the programs that check and deploy it, each with every
node it wires there, as `trame assemble` would. A node of a library frozen at a version is left out: its release
covers it (the library's own shipment of a version proved it, g101); a library of the same repository used
without a version counts as the project's own. An **obligation** applies one family of `#std/obligations` with its
parameters, typed by the family's rule: `Verified` (each scenario that verifies reached code; reached code of the kinds
named that no scenario verifies is a gap), `Served` (from what the reached code serves, up to the goals, then every
requirement that refines them, at any depth), `Applied` (each ADR a reached node applies), `Reviewed` (each review of the
data carried; data nothing reviews is a gap), `Checked` (the checks of the shipped artefacts a program runs, or all of
them, by hand too), `Ruled` (the project's rules), `Safe` (the packages the reached code uses), `Preceded` (the
shipments named that ship an artefact this one ships, each to have shipped it first, the same file: a public version
after its preview, since g103; an artefact none of them ships is a gap). The obligation says
what a gap weighs: an error is an error of the graph (it stops what assembles and delivers: a gap is proof of a hole,
which the graph must close), a warning is said, for a project on its way there. A **policy** groups the obligations of a way of working, one per
family, and a shipment follows one. Every shipment, whatever its policy, also proves the **foundations**, which no
policy can choose away: no literal in a body, no value nobody decided, no error of the graph (the errors and blockings
not raised by a kind, in the project and its unfrozen libraries). The pipeline shows them as its first proof, then why
each step is there (the obligation and the reached node that brought it in, or the shipment itself), and which
artefacts are promoted rather than built: an artefact a shipment that precedes shipped first is taken as it is, the very
file, once `trame ship` has checked it is the one last built, and each deployment records on its artefacts which
shipment shipped them, as which file (C2: build once, then promote; rebuilding and comparing would prove nothing about
what people saw); `trame ship`
refuses on the foundations before anything runs, then on any obligation that does not hold and any gap that blocks.

Since g69, what verifies code is backed by what runs it, and every piece of code is verified somewhere. A scenario may
only say it verifies what it runs (what its dependencies wire in its environment, and what those nodes use directly in
their code): a claim nothing backs is an error; the documents show, under each scenario, the code it runs. A check run
by a program verifies what its program runs on a machine, or what the artefacts it checks carry (a page carries its
component, for the browser); a check by hand verifies what only a person sees or hears. An implementation is unknown
while nothing verifies it (one that the graph only offers, chosen nowhere, has no status: the projects that choose it
verify it). Trame's own engine went from three scenarios to twenty-six: every command runs on the example in memory
(build, view, payload, export, assemble, run, publish, snapshot, audit, manifest, release, deliver, ship, evidence,
dev, test-kinds, doctor, and the advance up to the generation frozen), over a file system kept in memory above the disk
and programs that answer what the scenario says; what only a machine shows (the disk, processes, the registry, a
server) is proven by `trame doctor`, run by a check of each generation's shipment; what only a browser shows, by a
program of Trame's SDLC that opens the graph page in Chromium. Doing so, the scenarios found a bug of the engine (the
search of cycles reported a vertex that only reaches a cycle) and a claim of Poselia that its wiring did not back; the
checks on the machine refused the first two shipments of g69: a program started by the engine found its TypeScript
loader only when it ran inside the repository (the loader is now resolved where the engine is installed), and the graph
page, opened at a phone's width, folds its navigation away (the program chooses the figure in the picker of documents,
as a person on a phone does). A check that failed is a verdict on a version of the artefacts, not a defect of the
graph: it keeps every shipment that proves it, and does not stop the build that will make the next version.

After g69, the inventory of every project showed what was still unknown instead of held, and why. The next generation
stayed unknown with its ninety-three obligations held: the decision "A version ships through the graph" is applied by
the shipment itself, and its policy derived that decision as one of its obligations, so each waited for the other (a
status that reads itself is unknown, without a word). A shipment no longer obliges itself to the decisions it applies:
it is their evidence. The opposite also hid: a decision held as soon as one of the nodes applying it held, a technical
choice as soon as one of its realizations did, even with the others unknown (Poselia's "Said aloud" while no phone had
been tried, its browser's choice while the bowl had never rung on one). Both are strict now: held when each one that has
a status holds, unknown while one does not; a decision applied only by nodes that can never have a status is an error,
one applied only by what a library offers has none, judged where it is chosen (std is left with no unknown). Strict,
they showed the adapters of std that projects choose and nothing verified: Poselia's check in Chromium now verifies the
page's loading, its languages, its preferences, its frames, Node's command line and the disk (the program looks for the
page through the port of files before opening it), its check on a phone the voice and the screen kept awake, its
scenarios the doubles they use; Trame's check of its page verifies its loading too.

Since g70, **evidence expires with the code**. The engine fingerprints the code of each node (its declaration as
written, its values, the files of its bodies) and gives it to the kinds. `trame ship` records with each artefact the
code it was built from (what produces it, wired for where it ships, and what it carries) and with each check the code of
its program: an artefact holds while that code is the code as it is, a check while its artefacts do and its program is
the one that ran. Before, a page built and checked once stayed held whatever changed in its code afterwards, and a
check whose program had changed kept the verdict of the old one.

Since g71 a build of Trame takes about 150 seconds instead of 460. A profile showed where the time went: a third in the
view *why*, which searched the shortest path from each node to each goal by reading every edge of the graph at every
step (the graph now indexes its edges by node); then the compiler of TypeScript and tree-sitter, which read the same
projects again for each scenario that loads them (their readings are now kept while the process runs, given again
while what they read is as it was). The scenarios themselves stay as they were: almost all of them read the disk.

Since g72, evidence is sealed and tied to its engine. Each record `trame ship` and `trame evidence` write carries a seal
computed from what it says; a record changed afterwards is not counted, and is an error naming it ("never write the
evidence by hand" is now a check: a seal anyone may compute again guards against a slip, a key would guard against a
forger). What a program of the engine builds or checks carries the fingerprint of that engine, which a generation
records beside itself (`engine.json`): a page built by g71 is to build again once its project pins g72. A review counts
its approvals (distinct people of the role, on the version as it is; the field existed, nothing counted it), and the
owners' document says who holds each role and the command that gives each piece of evidence it awaits. Shipping g72
also showed that the graph page Trame ships embedded the page's program of the previous advance: a shipment now
assembles a program for the environment its artefact names, and builds the artefacts its components produce first:
the page's program before the page (since g73; g72 still took them in the order of their names).

Since g73 the engine evidence names is the fingerprint of its code (its `src/`, `trame/` and `kinds/`, and its
libraries' `src/`), no longer that of its assembled programs, which carry the date of the graph they were assembled
from: g72 recorded one fingerprint beside itself and its evidence another, and nothing it built held. `trame ship`
judges what it just built by the engine that built it, a build by the engine the project pins: a generation's own
shipment is run by its candidate, pinned once deployed (judged by the generation in place, the first ship of g73 was
refused on everything it had just built). And `trame plan` says what a build would change,
written nowhere: the graph compiled now (or at `--at`), compared with `graph.json`, the last build. It lists the nodes
added and removed, the statuses that change, the nodes whose fields, what they compute or their edges change, the
issues raised and resolved, and the shipments one of whose obligations is touched; a person reads it before building,
a reviewer before accepting a change.

Since g74 **a run is kept**. A scenario played is given back while the code it wires and the files its project reads
are as they were: every file under its root, its libraries, its kinds, its views and their prelude. Left out are the
packages installed (the lockfile is read), the repository's history, the frozen generations, and what the project
writes itself (its documents, graph and snapshot, programs, evidence, artefacts and deliveries). The runs are kept in
the process in the scenarios, and on a machine on disk under `.trame/runs`, one directory per engine (deleting it costs
only time). The reading of a project by the compiler of TypeScript is kept the same way, as are the readings of the
syntax elements' examples and, in the process, the laws of the kinds. A build of Trame used to play its scenarios
2,030 times (Poselia's eleven times, the example's thirty-six). It now plays 246 of them the first time and none the
next: 138 seconds before, about 95 for the first build after a change, 17 for the next. Shipping a generation, which
compiles Trame's graph a dozen times with the same code, went from 36 minutes (g73) to under 10 (g74), then about 6
(g76).

Since g77 a build does less again. A view runs once (twice only when the laws are played, by `trame test-kinds`,
which every shipment of Trame runs); the way from a node to a goal is one search to all goals instead of one per
goal; date formatters are made once per language; a directory listed in memory no longer walks its whole tree; a
file is hashed again only once its size or its time changed. And a run is told apart by the declarations of the nodes
it wires as by their bodies: of each module, only what it holds besides its nodes (its comments, a helper, a type) is
read for all, so changing a node plays again only the scenarios that wire it. A build of Trame from nothing went from
90 to about 70 seconds, a build without change from 15 to 10, after a change to one body about 25. Since g78 the
reading of a program by TypeScript is kept apart from its check: a body changed checks the program again, but reads
its modules again only when one of them changed; and what a body says (its literals, its imports) is kept for its
text in its project, so a file is parsed by tree-sitter only once it changed. From nothing a build takes about 60
seconds, without change about 6, after a change to one body about 13; shipping a generation, about 4 minutes.

Since g75 **dates are real**. Evidence counts from the day it was given: the graph compiled at an earlier date
(`--at`) has not seen it yet, as it had not then. Until g74, Trame, std and the example were built at a fixed date,
17 October, so that their documents would not change from day to day; but the evidence given on the 29th counted in
a graph said to be of the 17th, and the page offered only the 16th and the 17th, two weeks of work later. Trame and std
are now built at today's date; the example stays at the day of the scenarios (`TestDay`), its documents being what
they compare a build with. An export offers, besides the dates where the graph changes, the last seven days something
was given: a version released, evidence recorded (the decision `PageHistory`). Each of those days shows the graph as it
is with what had been proven by then, and says what was given that day. Since g76 a graph compiled at a day before
today judges evidence as it was given: the code and the engine of that day are not known, so a check that passed then
held then (judged against today's code, every past day of Trame showed its shipment unknown). A document that differs
from today's only by the date of the graph is carried once and moved to its date by the page; a day of history carries
its documents and figures, not the views of each node, the snapshot nor the outputs for tools: the page of Trame's
graph went from 7.7 MB for two dates to about 6 for seven. The view **journal** (`docs/journal.md`) tells the project's history day by day: the versions
released, and each piece of evidence with the node it is about and who gave it.

The programs of the SDLC are code like the product's: a component of the project whose entry points use the ports of
`#std/tooling` (`ProgramCommands`, `Files`, `HeadlessBrowser`), realized on a machine by Node's command line, the disk and
Playwright, and in memory for the scenarios that test them. Governance is rules too: a `rule` applies a requirement of
`#std/rules` (`Reaches`, `NeverReaches`, `Linked`, `WithoutEffects`, `WordsOf`) with its parameters, and says why
through what it serves or the ADR that applies it, instead of hiding a function.

Two projects ship differently. **Poselia** (`apps/poselia/src/sdlc.ts`): a preview ships when the page opens in
Chromium in French and in English (a program of the SDLC plays a sequence and looks for its landmarks) and the
scenarios hold; it is placed where it is served (`public/index.html`). A public version also needs a check on a phone
signed by one of the people who try it, the poses and sequences reviewed in each language by a teacher who practises
(never their author), and the product's requirements. Since g68 neither lists them: a preview follows the policy
`PreviewMode` (the code verified, a gap said; the page checked by programs; the rules; the packages), a public version
`PublicMode` (the code verified, a gap blocking; the product's requirements; the decisions applied; the content
reviewed; every check, by hand too; the rules; the packages). **Trame** (`src/sdlc.ts`): the next generation follows
`GenerationMode` (the engine's code verified, a gap an error; the requirements of the goals it serves; the decisions
applied; the candidate checked by programs; the rules of the architecture; the packages), which derives the laws, the
scenarios and the requirements it used to list. It ships the candidate engine and the graph page; its checks play the
laws, ask the machine (`trame doctor`) and open the page in Chromium. It is deployed by the advance (`trame ship NextGeneration --by <name> --promote "what changes"`),
which freezes it and moves the pins.

## No literal in a body

A literal written in a body is a decision the graph does not see: nobody answers for it, and nobody knows who else uses
the same value. Since g28 it is an error of the language, for every project and every language a driver reads: the
compiler gives one per node, with each place ("1 literal in the body, to declare in the graph (a standard, a decision, a
structure, a catalog): 404 (src/code/read-reservation.ts:6)"). The body still runs, but `trame assemble` refuses a graph
with errors. The syntax reader finds them with the queries of each language (see "The syntax layer"):

- **Set aside**: what is written like a value but names something. An identifier key, a property read by its name
  (`o["name"]`), an imported or re-exported module, anything in a type position: the language's `names` query.
- **Declared**: the text of a message catalog, which is what the catalog declares.
- **To declare**: everything else, without exception, whatever type expects it. `b.type === "para"`,
  `readFileSync(file, "utf8")` and `typeof x === "string"` count: a type that expects a value does not say what it
  means here, nor who answers for it. Each literal carries its **role**, read from its place in the code (index,
  arithmetic, comparison, initial value, default value, branch of a condition, argument of…), and a category from the
  decision `LiteralCategories` (colour, media type, file, sentence, separator…).

The `literals` view writes the catalogue: by category, by role, the repeated values, the texts that a constant of the
graph already declares (with the constant), what the catalogs declare, and the detail per body. The compilation API
exposes them through `c.literals(v)`.

The catalogue went from 1,077 literals to none. Moving the messages into catalogs took it down to 680, the algebraic
structures to 446, the syntax layer to 358; g20 counted what it had set aside (144 literals that a type expects, 26
templates whose fixed parts are only blanks: 528), and the writers rewritten on syntax elements left none (450). Then
the domains, from g23 to g27: the vocabularies of the intermediate format and of the graph API went into the prelude,
ECMAScript's types and the Node.js platform became standards (232); the commands, the files and what `trame dev`
serves, conventions and decisions (166); the terminal, a format of its own (82); the page, HTML, ARIA, SVG and CSS
(63); the laws' draws, keys made of their parts in JSON, the names of documents and the rest (0). The catalogs declare
380 texts. The example went the same way in g28, from 76 literals in 12 bodies to none: it declares HTTP, media types,
URI, the paths of its entry points, SQLite and its payment provider's API as standards, its messages and the checks of
its scenarios as catalogs, its SQL as decisions. In g33 the page's style sheets became bodies, read by the CSS driver:
their 355 values became the variables of a design scale, seven decisions of `appearance` (see "The page"). In g44 the
page's script, the last code outside the graph, became bodies of the graph, and wrote no literal either.

The kinds and the views are files, not nodes: their values have no node to belong to. Since g44 the catalogue reads them
too and reports them in a section of their own, "In the language", by category and by file; since g53 a file of the
language that writes a literal is an error, one per file with each place, which an assembly refuses (ADR "A literal in a
kind or a view is an error"); a project that takes Trame's language does not write it, and is not checked. Since g49
they receive the graph's values through the graph they read (`g.lib`, ADR "The language receives the graph's values"),
and they went from 775 literals to none (g52):

| What a kind or a view wrote | Where it comes from now |
|---|---|
| The name of a kind, a view, a shared edge (`"component"`, `"in"`) | `KindName`, `ViewName`, `EdgeName` in the prelude |
| Its own fields and edges, another kind's (`"rule"`, `"verifies"`) | `keysOf(fields)`; `fieldsOf(kind)`, `edgesOf(kind)` of the kind that declares them |
| Fields two kinds share (an ADR's reasons, a standard's source) | declared once (`reasonFields`, `sourceFields`) and spread into both |
| A word the engine and a kind both read (a package's reports, a release's language, the effect "asynchronous") | `PackageReport`, `LanguageUse`, `LanguageEffect` in the prelude |
| A type test, 0, 1, `[0]`, `""` | `lib.values`, `lib.counts`, `lib.sequences`, `lib.texts` (the algebraic structures) |
| A comma, a middle dot, an arrow, a dash for nothing | `lib.lists` (the decided language's conjunction and enumeration), `lib.punctuation` (the marks of `messages.Language`) |
| `file:line`, `split(".")`, a date's pattern, the lock's file | `lib.positions`, `lib.references`, `lib.dates`, `lib.layout` |
| The timeline's reach, the catalogue's limits, the laws' draws | `lib.settings`, `lib.draws` (decisions `LanguageSettings`, `StructureDraws`) |
| The order of two versions | `lib.versions` (`packages.VersionOrder`, which `trame audit` uses too) |
| A code block's language | `lib.declarations.language` (the tag of `typescript.TypeScript`); for the queries, the tag of their standard (`TreeSitterQueries`) |
| A value with its unit ("15 min", "50%") | `lib.units` (`documents.Units`, from the words of `messages.UnitWords`, the standard `UnitsOfMeasure` and `NumberDisplay`) |
| A text with its hidden characters escaped | `lib.shown` (`documents.VisibleText`, from the standards `UnicodeEscape` and `InvisibleCharacters`) |
| The percentiles an objective may hold | `lib.settings.slo` (an objective outside them is an error) |
| The fields and edges the engine reads in a package or a release | `PackageField`, `ReleaseEdge` in the prelude, under which the kinds declare them |
| The predicates of a query that tree-sitter does not evaluate | what tree-sitter keeps aside when it compiles the query, through the port `SyntaxTrees` |
| A sentence, a plural, a "none" | the catalogs of the language: `kinds/words.ts`, `views/words.ts`, `engine-views/words.ts` |

The prelude presumes no language either (g52, ADR "A catalog counts in its language"): a catalog counts by the plural
rules of the language it is written in (`plurals(language)`, CLDR through Intl, each form written), joins lists with
`messages.Lists`, and dates always say their language; the English plural rule, `joinList`, `formatUnit` and the default
language left it. Two decisions wait for their moment: the static analysis giving each declaration its type, structured,
instead of the kinds reading a type's text (with TypeScript 7), and a project declaring the language of its documents
(when a second language is needed).

## The laws are requirements

Every kind and every view keeps laws, whoever wrote it, the project or an LLM: a kind declares itself completely,
answers on any value without crashing (reading an undecided value stops it, which is not a crash), names an owner for a
blocking hole, says nothing held or violated without evidence, gives the same answer to the same input, settles claims
whatever their order and returns only the claimants; a view declares itself completely, answers on the graph and
writes only the intermediate format. Since g43 each law is a requirement of the module `laws`, refining the goal "Kinds
and views that can be trusted": a pure rule, with its acceptance criteria played on cases chosen by hand at every build.
The functions `Laws` and `Views` receive the rules as dependencies: they draw nodes at random, call the kind in a
sandbox, catch what it throws, and ask the rule whether what they saw keeps the law (decision "The laws are
requirements").

## The terminal

What Trame shows in a terminal is a format of its own, so a decision defines it (`text.TerminalText`, with what was
rejected: Markdown, colours, tabs) where a standard would otherwise: a syntax element may be "defined by" a decision.
Its constructs are syntax elements, each with its examples (a padded cell, columns, an item, code lines, a tree branch,
a path step, the lines of the terminal); the tree's glyphs come from the standard `BoxDrawing` (Unicode). The plain
text writer and the commands only compose them, with the punctuation of documents (`documents.Punctuation`, the marks
the `Language` decision gives its language: another language writes its own).

## The page

The page is described like the documents: the decision `page.ThePage` says what it is made of (a side bar with the
brand, the state of the compilation, the dates, the navigation; a main area with a banner, the head of the document and
the choice of rendering), `page.PageRegions` the identifiers its shell writes and its program fills, and 19 syntax
elements write it on those of `html`: the logo (a weave of warp and weft, *trame* in French), each region, the shell,
the theme (the palette, the fonts and the measures as CSS variables, light and dark), the colours of a status, the
rules of a narrow screen, the fonts, the scripts, the document or the fragment a host embeds. Each has its examples,
checked at every build and read in HTML or CSS.

Its two style sheets are nodes of the kind `stylesheet`: a body in CSS (`page.css`, `narrow.css`), read and checked by
the CSS driver like any body. They write no value (`page.StyleThroughVariables`): the colours, the fonts and the
measures are variables that the theme writes in `:root` before them, from the decisions of `appearance`, a design
scale named by size (`--space-2xs` to `--space-5xl`) or by purpose (`--inset-control-block`). A media query cannot read
a variable: the width of a narrow screen is a decision, and the page writes the media rule around `narrow.css`. Before
it gives the page, `Page` reads back its style in CSS (each variable used must be written) and the page in HTML.

The engine writes each document in HTML with the renderer that writes the Markdown and the terminal's text
(`rendering.HtmlSyntax`, on the elements of `html` and the names of `markup.DocumentMarkup`), and since g41 draws its
figures in SVG (`rendering.SvgFigures`, from the geometry of three decisions of appearance and the page's words); the
payload carries each document in its three renderings. An exported page carries its graph compressed
(`page.PackedGraph`: gzip, in base64), and the browser decompresses it.

### The page in a browser

Since g44 the page is not a script but a component, `architecture.PageApp`, assembled for the environment Browser as
the command line is for a machine: `trame assemble PageApp --env Browser` writes `out/browser/page-app.ts`, with the
values of the graph frozen in it and its bodies wired, and the page bundles it as a module. Its entry point, "Show the
graph" (`browser.ShowGraph`, triggered by the loading of the page), writes the side bar and the document in the
rendering chosen, and follows what the person does; "Explorer of a graph" (`browser.ExplorerFigures`) draws a graph
too large to be read whole as a map of its layers, a box per module with the share of each status and the edges
gathered between boxes, a box open on its nodes, or one node with its neighbours, layer by layer. Both are pure bodies
without a literal: the classes, identifiers and attributes are decisions of `markup` and `page`, the explorer's geometry
`appearance.ExplorerDrawing`, the events and the scroll the standards `UiEvents`, `CssomView` and `MediaQueries5`.

What the page touches of the browser goes through five ports: its loading, its window, its memory (the person's place
between two visits), the feed of the graph (packed in the page, or from trame dev), and the decompression. One
technical choice, "The browser runs the page", realizes them with the DOM, local storage, fetch and server-sent events,
and DecompressionStream: the browser's globals appear only there (decision "The page is assembled"). The program
carries the modules of the graph its bodies use: about 200 KB, against 37 KB for the script it replaced.

## Technical choices and patterns

Since g34, every technical choice is one node. A port is a contract; in each environment one realization answers it:
an **implementation** if it touches the platform, a **function** if it touches nothing (a test double, a repository
over a database port, a strategy). Which one is said by a **technical choice** (kind `binding`): in some environments,
the realizations of one or more ports, with the context, the consequences and the rejected options. The code that uses
a port never names what answers it, so replacing a technology is writing its realization and changing that node
(`principles.TechnologyInOneNode`, which serves the goal "A technology is changed in one node").

The design patterns are nodes too (kind `pattern`, module `patterns`): Strategy, Adapter, Bridge, Abstract Factory,
Repository, with their source. The kinds implement them once (a port, its realizations, the choice); a pattern names
the intent and says what it requires of a choice that follows it, read from the graph: several ports at once
(Abstract Factory), realizations that touch the platform (Adapter), functions (Strategy), realizations that reach
another port (Bridge), both of the last two (Repository). A choice whose shape does not match, two realizations of one
port, or a realization reached directly rather than through its port, is an error.

Trame's choices: the engine runs on Node.js (a family of adapters), on a machine Node.js writes and runs, scenarios
run in memory, the browser runs the page, esbuild bundles the page's program, tree-sitter reads the bodies, tsx runs
TypeScript, the TypeScript compiler reads the declarations, the engine's files sit beside its code; and those of its
formats (see below). The example's: an in-memory SQLite database for the scenarios, a SQLite file locally, Postgres
in production, each chosen with its SQL dialect as one family (Abstract Factory); the reservations and the
cancellations as repositories over SQL (functions that ask the dialect, without SQL of their own); a simulated
provider and a stopped clock where they belong. `docs/choices.md` shows each port by environment, with the choice that
decides it.

## One renderer, its syntax a choice

Since g36 a document is rendered by one renderer, whatever its format (`src/code/rendering/document.ts`). It walks the
blocks of the intermediate format, says each piece in words (a value, a status, the sentence of an overlap, the
validity of a node) and finds where each reference leads; how a piece is written belongs to a syntax, which is a port
(`rendering.DocumentSyntax`). There is one port per audience, so that each one's format is chosen apart: the files of
`docs/`, the terminal, the page. The renderer is three nodes with one body (`FileRendering`, `TerminalRendering`,
`PageRendering`), each receiving its audience's port.

Three writers answer those ports: Markdown (the elements of the Markdown spec), plain text (those of `text`) and HTML
(those of `html`, with the names of `markup`). The figures are a second port, which each writer reaches: Mermaid
diagrams for the files, figures as text for the terminal, SVG for the page (since g41). Six technical choices bind them (module `rendering`); the writers' choices follow Bridge (each one reaches the figures'
port), all of them Strategy (functions). Writing the files in AsciiDoc would be a writer that answers "Syntax of the
documents written as files" and the choice "Documents in Markdown" changed: the renderer, the views and the kinds do
not move. The Markdown and the terminal text stayed identical, character for character, through the change, which the
advance checked.

## The syntax layer

Since g19, Trame reads bodies with tree-sitter, through one generic reader; since g20, only that way. A language is a node of the graph
(kind `language`): its grammar (an npm package at a pinned version), its queries in tree-sitter's query language, the
escape sequences of its texts, and examples of what the reader must find, played at every compilation. The queries
name what they catch with the captures of `syntax.Captures` (`literal.text`, `name`, `import.value`, `role.index`…);
the reader knows these names and no node type of any grammar. The `SyntaxTrees` port is the only place that touches
tree-sitter: records go out, no tree does.

The language kind checks two things a query could get wrong silently: it uses only the predicates tree-sitter
evaluates (`TreeSitterQueries`), and it watches every word of its globals vocabulary (`WorldGlobals`). The roles of a
literal are a catalog (`LiteralRoles`), its categories and its display decisions (`LiteralCategories`,
`LiteralDisplay`). The reader's body writes no literal.

Since g32, Trame reads HTML and CSS too (`html.HtmlMarkup`, `html.CssStyleSheets`). In markup, the values are the
values of attributes and the texts, character references decoded; a class, an id and the attributes that refer to an id
are names. In a sheet, the values are numbers with their units, colours and texts; a property, a keyword, a variable and
the value an attribute selector matches are names; a `url()` or an `@import` reaches outside; the variables a sheet
uses and declares are what it receives and gives. Their escapes needed two more forms, which the language card now
spells out: digits up to a most, followed by a whitespace that belongs to the sequence (CSS), and a mark that stands for
itself when it opens no known reference (HTML).

In g19, the scenario `ReaderLikeBefore` compared the reader with the TypeScript driver on the bodies of Trame and of
the example: 977 of 977 and 75 of 75 literals alike, on the same line with the same value, kind, role, category and
context, apart from two wanted differences (a template whose fixed parts are only blanks is a literal; a template is
shown as written). In g20 the compiler reads through `languages.Drivers`: the checks of a body (`syntax.BodyChecks`:
hidden dependency, access to the platform, default export, grammar) and its literals come from the reading; the
TypeScript compiler keeps the type errors and the static analysis of the declarations. The scenario left with the
driver's reading code. Building Trame's graph went from 24 to 14 seconds.

## What Trame writes in TypeScript

An assembled program is written with the syntax elements of the module `typescript`, as documents are written with
those of `markdown`: a comment, a text, a property access, a call, an object, a list on several lines, a constant, an
import, a type assertion, an object type, a union, a condition… Each declares its marks and its examples, and is read
in the language: the kind `syntax` reads each example's output with the TypeScript reader, in its context (an
expression in parentheses, a property in an object, a type in a type alias), and an output that does not follow the
grammar breaks the example. The names a program calls come from the prelude's frozen API (`conventions.FrozenApi`) and
from Node (`NodeProcessApi`); the names it gives, from the decision `ProgramNames`. The writer's body writes no literal.

Reading and writing meet at each assembly: `Drivers` reads back every program the writer produces before it reaches
the disk. A program that does not follow the grammar is not written; and the values the writer says it wrote (frozen
values, constants, the fields of the entry points, the data the rules read, the titles) must be the literals read back
from it, in the same order. g21 writes Trame's program and the example's character for character as g20 did.

## Terraform

A Terraform module is a body too, named by its directory (`code.file("./infra/postgres-database", "hcl")`). Since g22
it is read by the same reader, with the node `terraform.Terraform`: tree-sitter's HCL grammar in its Terraform
variant, a query for its values and one for what it declares. Its variables are the parameters the graph passes: each
provisioning dependency must be one of them (an error otherwise), and each one must receive something (a warning).
The call of the modules is written with the elements of the module `terraform` (a value of the graph written in HCL,
an attribute aligned as `terraform fmt` aligns it, a module block whose label is the node's name in snake_case), and
read back before it is written, values included. A text is written with the escape sequences the Terraform reader
decodes, and with `$${` and `%%{` where it holds `${` and `%{`: the old driver wrote JSON, which HCL would have read as
a substitution there. The example's provisioning is written character for character as before.

## A node's constants

A node can declare its own constants, each with its value and its meaning (the prelude's `constants` field type). Its
body receives them as parameters, next to its dependencies. The compiler checks that each constant has a value (a text
or a number) and a meaning, and that none bears the name of a dependency. The assembled program writes them as they are
(`frozen.body(Heading)({ hash: "#", maxLevel: 6, standard: commonMark })`). The node's card shows them in a table. A
function can declare some; standards and syntax elements are made of them.

## Algebraic structures

Most of the 0s, 1s and empty texts were not values: they were the traces of a structure rewritten by hand at each
place. `xs[0]` takes the first element, `(m.get(k) ?? 0) + 1` counts under a key, `L.push(x, "")` closes a Markdown
block, `x ?? ""` shows nothing for an absent value. A **structure** is a node of a new kind: the constants that define
it, its operations, and its laws. A body that receives it says what it does (`head`, `tally`, `optional`) instead of
writing the literal that does it, and the graph knows who counts and who takes the first element.

| Structure | Defined by | Operations |
|---|---|---|
| Counts | zero = 0, one = 1 | `zero`, `next`, `previous`, `between`, `isEmpty`, `any`, `single`, `several`, `largest`, `tally` |
| Sequences | ECMAScript's first index and `notFound`, and Counts | `head`, `rest`, `last`, `take`, `isFirst`, `isLast`, `previous`, `pairs`, `position`, `removeAt`, `atOrLast`, `times` |
| Texts | empty = `""` | `empty`, `concat`, `optional`, `when`, `without` |

The laws are played at every compilation, a hundred times each, on values drawn from a seed of the structure's own
(23 laws: "head and rest take a sequence apart", "concatenation is associative", "tally counts each element once"…).
A law that breaks is an error, with the values that broke it, and the structure is violated: changing `several` to
`>= one` makes Counts fail at once, with `[7]`.

Absence has no structure of its own: it is the language's `T | undefined`, with `?.` and `??`, and what shows for it
is the identity of the monoid it folds into (`Texts.optional`, `Counts.zero`). `head` returns such an Option. A
position the language already names stays with the language: `const [name] = o.args` names the first argument without
a literal. The Markdown blank line belongs to CommonMark: a `BlankLine` element closes each block, and `Blocks` and
`Details` take blocks, so that the renderer writes no `""`. The conjunction of "A, B and C" comes from the language
(`Lists`, Intl.ListFormat), and the remaining conventions went to standards and decisions: `ExitStatus.success`,
`ReferenceSyntax.wholeNode`, `NodeArguments`, `Iso8601`, `TerminalColumns`, `ViewGroupOrder`, `SampledValues`.

A value can have several meanings, at several levels. A constant can therefore **refine** a constant of another node:
`blank: refines(Texts, "empty", "A line containing no characters")`. Its value is the other one's, written nowhere
else; its meaning is its own; the compiler draws an edge "Refines" and checks that the values agree. The Markdown blank
line and the empty path of Trame's references both refine `Texts.empty` (g18). Two equal values are never linked by
themselves: the `/` of a URI and the `/` of an end tag mean different things.

Since g55 the structures are the standard library's (`std/src/algebra.ts`, bodies in `std/src/code/algebra/`).

Each step from g13 to g16 built the example and Trame's graph exactly as the previous generation did, and both exported
pages render the same, document by document: the extraction changed no behaviour. The plan, the decisions and the
place-by-place list are in the "Literals → structures" tab of the design summary.

## The Markdown spec

`src/markdown.ts` describes the Markdown that Trame writes, construct by construct. Each **syntax element**
(`kinds/syntax.ts`):

- is defined by a standard (CommonMark, GFM, HTML, URI), at a precise section;
- declares its marks as constants, with their meaning; the marks that several elements share (the newline, the space,
  the backtick, the asterisk, the pipe of tables) are constants of the standard, which the body receives under the name
  `standard`;
- has a body that writes the construct from its marks, and can compose others (a table composes a row and a delimiter
  row; an anchor, an HTML element);
- has examples, played at each compilation: an example that does not hold is an error on the node.

```ts
export const Heading = syntax({
  owner: "trame",
  standard: CommonMark,
  section: "4.2 ATX headings",
  constants: {
    hash: { value: "#", meaning: "Repeated as many times as the level of the heading" },
    maxLevel: { value: 6, meaning: "The deepest level: beyond six hash signs, the line is no longer a heading" },
  },
  write: ({ standard: { space }, hash, maxLevel }) => (level: number, text: string) =>
    hash.repeat(Math.min(level, maxLevel)) + space + text,
  examples: [
    { input: [2, "Goals"], output: "## Goals" },
    { input: [9, "Very deep"], output: "###### Very deep" },
  ],
})
```

The 21 elements: sequence of blocks, heading, list item, block quote, backtick string, code block, emphasis, strong
emphasis, code span, link, relative reference, table cell, row, delimiter row and table, start tag, end tag, HTML
element, anchor, collapsible block, small text. The Markdown writer receives them as parameters and only composes
them.

## The Mermaid spec

`src/mermaid.ts` does the same for Mermaid. The standard declares what the constructs share (the indent, the space,
the quotation mark), and 14 elements write:

- flowcharts: the flowchart and its reading direction, the node (rectangle, label on several lines, class), the label
  (a quotation mark becomes `#quot;`), the subgraph, the link and its four strokes, the style properties, the class
  definition, the node style;
- Gantt charts: the chart (formats of the dates and of the axis, title), the section, the name (colons are forbidden
  in it), the task, the milestone;
- the name of its language, which the Markdown writer puts on the code block that carries a diagram.

A figure's node also composes an HTML element of the Markdown spec (`<small>`, for the kind under the title).

## The display choices

The formats are technical choices of `src/rendering.ts`, with what was rejected and why; `src/documents.ts` holds the
decisions that say how they look:

- **Documents in Markdown** (a choice). CommonMark with GFM tables: readable as is, comparable line by line,
  displayed by forges and editors; HTML serves only for anchors and collapsible blocks. Rejected: HTML only, AsciiDoc
  or reStructuredText, plain text. The decision "Heading levels of Markdown documents" gives 1 for the document, 2 for
  its sections.
- **Figures in Mermaid** (a choice). Rejected: images (to regenerate, silent in a review), Graphviz (neither GitHub nor
  GitLab draws it), PlantUML (a rendering server). The decision "How Mermaid figures are drawn" says how, in the terms
  of the Mermaid spec, and
  TypeScript checks it against the spec (a direction that is not a flowchart's does not compile):
  - the reading direction of each shape: layers and trees from top to bottom, a path from left to right;
  - the stroke of each edge: dotted without an arrowhead for a computed edge, dotted for an edge inferred from the
    code, thick for the winner and the support of an overlap, solid otherwise;
  - the look of a history node (dashed outline) or of one not in force (half transparent);
  - the Gantt chart: date formats and the date roles that become milestones (its words are the catalog's).

  The colours of the statuses remain those of the palette.

## The domain behind the 0s, the 1s and the empty texts

g8 described what part of these values hid, and the bodies now receive them from the graph:

| What the code wrote | What it is | In the graph |
|---|---|---|
| `{ status: 0 }`, `{ status: 1 }`, `exit(1)` | The exit status of a command | Standard `ExitStatus` (POSIX, ISO C); the 11 commands and the scenario depend on it |
| a severity table in the compiler | The order of severities, already described by a requirement | The compiler receives the rule of the requirement "Sort problems by severity" |
| `.line + 1`, `` `${file}:${line}` `` | Numbering lines and designating a place in a file | Standards `GnuPositions` (first line: 1; "file:line") and `TypeScriptApi` (first line: 0); function `Positions` |
| `Map<…, 1 \| 2>` in the cycle search | The colours of a depth-first search | Standard `DepthFirstSearch` (Cormen et al., § 22.3); the search became the `Cycles` function |
| `t \| 1`, `>>> 0`, `charCodeAt(0)` | Mulberry32 and the language itself | Constant `oddBit` of Mulberry32; standard `EcmaScript` (first index, back to 32 unsigned bits) |
| `path === ""`, `split(".")[0]`, `split(".")[1]` | The syntax of Trame's references | Standard `ReferenceSyntax` (separator, path of the whole node); function `References` (module, identifier, segments, depth…) |
| `+ "\n"` at the end of the lock, `split("\n")` | What a line of a text file is | Standard `TextFile` (POSIX) |
| `addDays(…, 1)`, `addDays(…, -1)` | The dates the page offers | Decision `CandidateDates` (the day after an end, the day before the first change) |
| `lines[0]`, `lines.slice(1)` | The convention of documentation comments | Decision `DocComment` (the first lines make the title) |
| `JSON.stringify(…, null, 2)` | JSON written to be read | Decision `JsonFormatting` |

## A rule is code

A requirement's rule is the oracle its acceptance criteria play, and wired as a dependency it is code the program runs:
the example's `Refund` is called by the entry point that cancels a reservation. Since g79 it is written as a body and
held to what holds one. It receives what it reads as parameters, decisions, structures and other rules alike, and
writes no literal and touches nothing of the platform:

```ts
export const Refund = requirement({
  refines: [CancelWithoutStress],
  deps: { period: FreeCancellationPeriod, fee: LateFee },
  body: ({ period, fee }) => (r: Reservation, leadTime: Duration): CHF =>
    leadTime >= period[r.charger] ? r.price : r.price - r.price * fee,
})
```

Called, by its acceptance criteria (`Refund(normal, h(2)) === chf(20)`) or by a kind through its view (`given()`), the
node is the rule its dependencies make: the engine wires it once the graph is compiled, and a value nobody decided is
said where the rule reads it, as before. Wiring builds a node from its body before what its kind gives from its
declaration, and a program refuses to freeze a body an amendment redefines in force. A rule written as the function
itself (`rule:`), as until g78, was read with a warning while projects moved; rewriting them found literals the old form
hid (30 rules of Poselia's body, 8 of std's, 6 of Trame's), and once nothing wrote it the form was removed (B2, g97): a
requirement without a body is an error, and a rule called before the engine wired it says so.

A rule that is right is not yet a rule the product follows. Its status says both: held when its acceptance criteria all
pass and what follows it holds, the code that calls it (directly, or through another rule), the scenario or the check
that verifies code against it, the dataset whose rows it checks at every build, the obligation or the rule of the
architecture that applies it. Violated as soon as one of them is; unknown while one is, and while nothing follows it,
which is a warning to its owner: "Nothing makes the product follow this rule". Every node has an owner, a goal and a
requirement too, so that warning reaches someone. A library's rule that nothing follows in a project importing it is
offered there, without a status, as an adapter nobody chooses: judged where it is followed. Poselia's "A hold counts in
breaths" was found that way: right, with its criteria, and called by nothing since its poses are held a number of
breaths.

Two owners may disagree about a rule, and who prevails must not hide in the code. Changing another's rule is an
amendment, which its owner approves (`UltraLaunch` amends `Refund`). A rule may also constrain another: `constrains`
names it, `examples` the cases it is played on, and its body receives that rule's arguments, then its answer, and says
whether it keeps it. At every build each example is played on the rule constrained and judged by the constraint: one
refused makes both violated and tells both owners, until one of them amends their rule. The example's legal team answers
for "A day ahead, a full refund", which constrains `Refund` on three examples:

```ts
export const FullRefundAhead = requirement({
  owner: "karim",
  refines: [CancelWithoutStress],
  constrains: Refund,
  examples: [[normal, h(24)], [fast, h(30)], [normal, h(1)]],
  deps: { notice: FullRefundNotice },
  body: ({ notice }) => (r, leadTime, refund) => leadTime < notice || refund === r.price,
})
```

A constraint that needs a fact the rule does not receive cannot be written, its types refuse it: the rule's question is
then incomplete. Since g81 the engine also says how each rule is called, the types of its arguments and of its answer:
two rules of a project that compute the same kind of answer from the same kind of arguments, for the same need, neither
using, refining nor constraining the other, are warned to both owners. A rule that answers true or false is left out,
and one a rule or an obligation applies as a check: conditions add up, both must hold. A more precise type (a quantity)
says that two rules answer different questions. Poselia's hand and foot on their way are such a pair; so are std's
families of rules and obligations, until std applies them to itself.

## Quantities

A number measures something: a duration, an amount of one currency, a ratio. Until g79 three units were written in
the prelude, as plain numbers recognised by their names (`Duration`, `Percent`, and the Swiss franc), and nothing kept
minutes from being added to francs. Since g80 a **quantity** is a node of the graph, declared where its domain is; the
prelude's units were removed once nothing used them (B2, g96 and g97), with `ms` and `elapsed`: a body that meets
JavaScript's clocks receives std's `Time` and writes `time.in.millisecond(d)` or `time.millisecond(n)`. An SLO's
threshold and window are values of the quantity they are written in (`s(2)`, `pct(1)`, `h(1)`):

```ts
export const Time = quantity({
  owner: "trame",
  source: "BIPM, The International System of Units (SI Brochure, 9th edition), Tables 2 and 8",
  units: { millisecond: 0.001, second: 1, minute: 60, hour: 3600 },
  written: UnitSymbols,
})
export type Duration = Quantity<typeof Time>
export const { second: s, minute: min, hour: h } = unitsOf(Time)
```

std declares `Time` and `Ratio` (a percent is a hundredth, `ratio: true`); the example declares its currency,
`SwissFrancs`, after ISO 4217. The type of a value carries its quantity, so TypeScript refuses a value of one where
another is expected; the compiler refuses what TypeScript lets through, anywhere in the code of a project: adding,
subtracting or comparing two quantities, and multiplying or dividing them when neither is a ratio (a quantity divided
by itself is a ratio). A build that does is refused, as one with a type error is: `"Swiss francs" + "Time": two
quantities do not add up, nor compare`. A document writes each value of a quantity in the largest of its units it makes
a whole number of, with the words of the catalog the quantity names: 10 min, 2 s, 50%, CHF 20.

A declaration published in `trame.lock` whose form the language changes, not its meaning (a fee typed `Percent` that
becomes a `Share`), is published again by `trame publish --migrate "why"`, which records when, why and which in the
lock; a change of meaning stays an amendment's business.

## Amending a value

Every value the graph holds can be changed from outside the code, by an amendment: who, why, from when, the value;
approved by the node's owner when someone else wrote it. Since g85 each kind says how each of its values changes
(`changes`): a decision's value, a dataset's rows, a function's constants, an objective's threshold are *chosen*, by an
amendment its owner approves; a standard's constants and a quantity's units are *cited*, and change only with the
source that changed them, which the amendment names; what code is built on (a structure, a vocabulary, a body) changes
in the code only. An amendment of a cited value that names no source is an error, and one that awaits its owner's
approval says so to that owner: the example's support asked for a free period on ultra chargers, which awaits lea's.

`trame amend <node> <path> <value> --why "…" --by <name> [--from <date>]` writes one. It first compiles the graph with
the amendment, in memory, the day it comes into force, and says what it would change, as `trame plan` does: lowering the
example's late fee to 40% makes a criterion of the refund fail, so nothing is recorded (`--accept` records it all the
same, for its owner to settle; `--dry-run` only says). Where an amendment then goes is a concept of the graph, the port
"Where an amendment goes", with its strategies: the first writes it in place, in the sources, at the end of the module
of the node it amends, as a person would, with the import of amendments; a pull request will be another.

Since g86 the page does the same in `trame dev`. Each card carries the values a person may amend (its kind's chosen and
cited fields, with their value in force and the units of their quantity), and a button for each, which the page shows
only when it follows `trame dev` (an exported page amends nothing). The button opens a form under the card: what to
amend (the field, or a path into it: `value.fast`), its value now, the new one (a number in a unit of its quantity,
turned into the base unit), why, who, from when, and the source for a cited value. "What it would change" asks `trame
dev`, which prepares the amendment as `trame amend` does and answers what it would change, or why it refuses;
"Record the amendment" records it the same way, and the server, which watches the sources, compiles and pushes the
page again, the amendment in it. The page sends it through a port of its own (`PageAmendments`), posted to `trame dev`.

## Effects, method by method

A port says what may happen through it: its effects. Until g81 they held for the whole contract, so code that only read
through a port that also writes was said to write, and ports were split only to please the rules. Since g82 a port may
say what each of its methods may do:

```ts
export const Database = port<Connection>({
  owner: "karim",
  declaredEffects: { read: ["read", "asynchronous"], write: ["write", "asynchronous"], transaction: ["read", "write", "asynchronous"] },
})
```

TypeScript requires a word for each method of the contract. The engine reads, in each body, what it does with each of
its parameters: the members it reads of it (`database.read(…)`, `const { read } = database`), as long as it does
nothing else with it. A node's effects are then those of the methods it calls; a parameter handed on, kept or spread
counts whole, and so do all of them when a body hands its parameters on together. A list still says what every method
may do. A realization is still held to everything its ports promise.

Code made of a text escapes every check made on the code as written: since g82 `eval`, the `Function` constructor and a
value's `constructor` (the way to Function's from any value), written anywhere in a project's code, its graph, bodies,
kinds, views and libraries, refuse the build, as a type error does. std names them after ECMA-262 (`TextAsCode`).

Since g83 an implementation is held to what its body reaches, no longer to its word. The engine reads, in each body,
the modules it imports a value from (and the names it imports) and the globals it reads, ECMAScript's or a host's. std
says what each may do (`PlatformEffects`, beside the vocabulary `Effects`, which moved there): `node:fs`, name by name
(`readFileSync` reads, `writeFileSync` writes), `process` member by member (`argv` is the terminal, `exit` controls the
process), `fetch` the network, `document` the display, `Math.random` and `new Date()` the few members of ECMAScript
that touch the world; a member of the global object (`globalThis.fetch`) is that global. A package of the graph says
what its code may do (`declaredEffects`: TypeScript reads, web-tree-sitter runs the WebAssembly of a grammar, Playwright
drives a browser). An implementation that reaches what nobody describes, or more than its ports promise, is an error
("keeps" covers writing: what it writes, only it reads). Applying it corrected six of Trame's ports, which their
realizations had outgrown unseen: the clock reads the environment (`TRAME_TODAY`), the terminal ends the process, the
page's feed reads its window and follows trame dev asynchronously, the reader of syntax runs code, the prelude is found
on disk, programs read the environment; std's headless browser talks to its browser over the network, asynchronously;
the example's payment provider reads its key; Poselia's bowl draws at random, and three draws on the display.

Wiring, since g83, hands each node a capability for each port it depends on: the realization with only the methods the
node calls (or, when the engine cannot tell, those of the contract), read through, nothing set; an assembled program
does the same (`frozen.limited`).

A method that takes a command another system interprets (a SQL statement, a shell line, a URL) would still be a door:
whoever writes the command chooses what it does. But no command is written by hand, since no literal is; each is
built, and what builds it knows what it builds. Since g84 a command says so in its type: std's `Command<"read">` is a
text marked with what it may do, and a port's method that takes one says which (`read(sql: Command<"read">)`). Only
std's `Commands` makes one, from its text; a cast that makes one anywhere else refuses the build, so TypeScript refuses
a write where a read is expected, as it refuses minutes where francs are. The node that receives `Commands` is the code
that makes commands: in the example, its dialect of SQL, whose selections and counts are reads and whose creations,
insertions and updates are writes. The resource behind is restricted where the platform allows it, and that is
proven: every read of the example's SQLite database runs with `query_only` on, and the scenario "A read never writes"
passes a write off as a read, through the database that only reads, and sees SQLite refuse it.

## Standards and vocabularies

A **standard** declares constants, their meaning and the source that defines them. It provides its values with their
literal type:

```ts
export const Http = standard({
  owner: "trame",
  source: "RFC 9110 (semantics), RFC 9111 (caching), RFC 9112 (connections)",
  constants: {
    ok: { value: 200, meaning: "The request succeeded" },
    noContent: { value: 204, meaning: "The request succeeded, and there is nothing to send back" },
    contentType: { value: "content-type", meaning: "Header: the media type of the body" },
    …
  },
})
```

The `trame dev` server depends on it (`deps: { http: Http, mediaTypes: MediaTypes, events: ServerSentEvents }`) and
writes `res.writeHead(h.ok, { [h.contentType]: mediaTypes.html })` (`h` is the HTTP standard). The graph therefore knows which nodes
use which HTTP code, which media type, which generator. Since g55 the published standards are the standard library's
(`std/src/web.ts`, `ecmascript`, `text`, `algorithms`, `measures`, `system`); Trame keeps those only its engine needs
(the APIs of TypeScript and tree-sitter).

A **vocabulary** declares a closed set of words, each with its meaning. `WordOf<typeof Effects>` gives their union,
and TypeScript refuses a word that is not part of it. Wired as a dependency, a vocabulary gives its words, in order:
the page's toggle writes a button per word of `RenderingModes`, and the page's entry point shows a document in each of
them through a record typed by the vocabulary, so that a word added or removed stops it from compiling (g43).

## Packages and their reports

Since g42 the npm packages the engine uses are nodes (kind `package`, module `packages`): a name, a version, the page
of the package. Since g46 the graph decides the versions: `trame manifest` writes them, exactly, as the dependencies of
`package.json`, `npm install` installs them, and each package checks the lockfile (a disagreement is a warning: the
engine that writes the manifest must still be assembled). An implementation, or a language, names the packages it
uses, and takes its status from them; a language's grammar no longer repeats its package's version.

`trame audit` asks the registry (`npm audit`, `npm outdated`, through the port `PackageReports`) and keeps each answer
as dated evidence in `evidence/packages.json`: a known vulnerability, or a breaking release behind, is a warning on
the package, which is then violated, and so is what uses it. A package may be **held below** a version, with the
reason, which the graph keeps: the releases from there on do not count as behind, and its version must stay below.
TypeScript is held below 7 (the compiler rewritten in Go no longer gives the JavaScript API the engine reads the
declarations with), the types of Node below 23 (they follow the Node.js that runs the engine, version 22).
`docs/packages.md` shows each package with its last reports.

## What stays outside the graph

- **The prelude**: `trame/kernel.ts`, `internal.ts`, `format.ts`, `ir.ts`. It is the part of the language that kinds,
  views and the engine share: the registry of nodes and kinds, the kind API, the vocabularies. The graph describes it
  as a port (`Prelude`), and an implementation imports it through `#trame/internal`. Like the runtime of a
  self-compiling compiler, it is not produced by the graph.
- **Kinds and views** are files, not nodes. Describing a kind by a node would take one more level (a kind of kinds).
  Their words are in catalogs, their laws are requirements, their values come from the graph through `g.lib`, and a
  literal written in one is an error, as in a body.
- **The launchers** (`trame.sh`, `advance.sh`) run before any engine: they read the pin and start it.

## What the exercise found

| Problem | Fix |
|---|---|
| The node registry was global: loading a second project in the same process mixed the graphs | `load` takes only the nodes exported by the project's modules; compilation resets only those |
| Views too: one project's views appeared in another | A project's views are those its view files export |
| Export and `trame dev` relaunched `trame/cli.ts` relative to the project: they worked only at the engine's root | The engine relaunches itself by its own path |
| An `import()` whose path is computed escaped the platform check | Refused outside implementations |
| A body written in a file was not checked against the node's dependencies | `code.file<typeof import("./code/x").default>(…)`: TypeScript checks the parameters |
| A project could not share its kinds and views | `trame.json` designates their directories |
| A component could only serve HTTP | A component has an exposure (HTTP server, command line); commands are entry points |
| An assembled program had to compile the graph at startup | Assembly writes the values into the program: it is always frozen now. A rule that reads other nodes by name (`FreeCancellationPeriod.value`) also freezes what it reads |
| The names of the machine files (`graph.json`, `snapshot.json`) were fixed in the intermediate format | They come from the layout |
| The platform check took a property named like a global (`process:` in a `Deps` interface) for an access to the platform | g9's driver treats property and method signatures as names |
| A node whose id is a reserved word once lowercased (`Export`) gave the frozen program `const export = …` | g11's driver names such a step after its module (`commands_export`), from the vocabulary of ECMAScript's reserved words; g12 uses it |
| Freezing checked that a value survives JSON as a whole: a function, an undefined field, NaN, a date or a map inside an object was dropped or changed silently | g11 freezes only plain JSON data, checked at every depth; anything else is read from its declaration |
| A constant whose value is the empty text showed as an empty code span | g14 writes it `""`, as in the code |
| The catalogue of literals merges identical values on one line, and writes an empty template as two backticks: the inventory of 0, 1 and `""` missed five blank lines of the assembled program | g17's lock reads every literal, one by one: it found them, and the driver now names them `blankLine` |
| The type of a property named `in` (`in: Node<"component">`) was reported as a literal | tree-sitter-typescript 0.23.2, its latest version, does not read such a property after one whose type is a name, without a separator: two examples of the `TypeScript` node keep the gap in sight, and the kinds write `Node<typeof KindName.component>` |
| Generic nodes were copied from project to project: the example had its own HTTP, media types, URIs and four patterns, worded differently | g54 lets a project import a library (a Trame project) by name and path; g55 moved them into `std/`, which Trame and the example import |
| The rule "Effects come from the vocabulary" judged a port of std that is asynchronous, an effect of the language the rule did not know; its error was counted as std's, because it was on std's node, so Trame's build showed nothing while the rule and two ADRs it applies were violated | The rule knows the language's effects (LanguageEffect); since g60 an issue belongs to whoever raised it, so a project's rule that judges a library's node raises the project's issue |
| Every project's graph page was titled "Trame graph": Poselia's and std's could not be told apart from Trame's | Since g61 the page is titled by what the project calls itself (`title` in `trame.json`: "Poselia graph") |
| A rule of the architecture was a function only its author could read: what it checked, and why, was nowhere | A rule applies a requirement of `#std/rules` with its parameters (std 0.8.0), tested by acceptance criteria, and says why through what it serves or the ADR that applies it |
| The way from the graph to what people use lived in scripts (`advance.sh`), in manual checks and in a conversation (where the pages were published) | Since g62 it is declared and run: `trame ship`; g62 itself is the first generation shipped by Trame's graph (`NextGeneration`: the candidate built, its laws played, the advance deploying it), its dossier in `evidence/shipments/` |
| std's own `package.json` (for Playwright) lacked `"type": "module"`: the projects importing its release found nodes "without a name" | The library says it; a trap of `AGENTS.md` |
| Shipped the same day, g63's dossier replaced g62's, and its evidence of shipping with it: evidence was replaced by node, source and day | Since g64 the fingerprint is part of what makes two pieces of evidence the same, and a dossier is named by its own: g62's dossier is the one lost |
| The order of a shipment's steps lived in the body of `trame ship`: a view showing it would have computed it a second time | Since g63 the engine computes the pipeline once; the command runs it and the view shows it |
| The first workflow published every artefact the shipment shipped and kept the evidence because the writer did so by default | Since g66 the graph says it: the workflow's artefact `publishes` what it makes available, its settings say how long and whether the evidence is kept; a writer publishes nothing the graph does not name |
| The candidate engine was fingerprinted by its program's file, which imports its bodies: g66 changed a body, and its candidate had g65's fingerprint, so its dossier took g65's name | Since g67 a program assembled is fingerprinted bundled with everything it imports |
| A shipment listed by hand what it had to prove: a new scenario or requirement was not proven until someone thought of adding it, and Poselia's content function was shipped with no scenario verifying it, unseen | Since g68 a policy derives the obligations from what the shipment reaches, and says what it reaches unproven (a gap); the home scenario now verifies the content carried |
| Trame's engine had three scenarios: sixty-five of its entry points and functions shipped with nothing proving them, and ten decisions of its architecture were applied only by nodes that prove nothing; Trame's policy had left them out | Since g69 a gap of the engine is an error and the decisions applied are back in its policy: twenty-six scenarios run every command in memory, `trame doctor` proves the machine, a program of the SDLC opens the graph page; the scenarios found that the search of cycles reported a vertex that only reaches a cycle |
| A scenario could say it verified what it never ran: Poselia's said it verified four rules of the body that its wiring did not reach | A scenario verifies only what it runs (its wiring, and what the code uses directly); the documents show the code each scenario runs |
| The next generation stayed unknown with every obligation held: it applied a decision its policy derived, and each waited for the other, silently | A shipment does not oblige itself to the decisions it applies: it is their evidence |
| A decision held as soon as one node applying it held, a technical choice as soon as one realization did, the others unknown: Poselia's voice and bowl, never tried on a phone, did not show | Since the same day both are strict; the adapters of std that projects choose are verified where they run (in Chromium, on a phone, by the scenarios' doubles) |
| A page built and checked once stayed held whatever changed in its code, and a check whose program had changed kept the old program's verdict | Since g70 evidence carries the code that made it (the artefact's producer as wired, the check's program), and holds only while that code is the code as it is |
| A build of Trame took eight minutes, a third of it in the view *why*, which read every edge of the graph at each step of each search | Since g71 the graph indexes its edges by node, and the readings of TypeScript and tree-sitter are kept for the process: about 150 seconds |
| A review declared how many approvals it asked, and nothing counted them; evidence edited by hand counted as the engine's; the graph page shipped carried the previous advance's page program | Since g72 a review counts its approvers, each record is sealed (a changed one is an error), evidence carries its engine, and a shipment assembles the page's program for the browser before the page |
| An advance replayed only the oldest and the newest generations sharing the language: when the kinds moved to the lib, g10 to g46 stopped running unseen | They received the language they last ran on; since g50 every older generation up to the newest that fails receives it |

## Limits

- The grain is the module, not the function: an engine function is a module of code. One node per function would make
  several hundred.
- Effects stay at the grain of the node. Reading and writing files had to be split into two ports for the rule "Only
  commands write" to make sense.
- Building Trame's graph takes about two and a half minutes, mostly for its scenarios, which compile the example, std
  and Poselia in the same process again and again (the compiler of TypeScript reads each once); a shipment of a
  generation, with its advance, about twenty minutes.
- The code of a node is its declaration, its values and the files of its bodies: a helper module a body file imports
  without being a body itself is not part of it.
- The kind registry remains common to the whole process: during the move to English, g8 registered its French kinds
  next to the English ones, and counted some nodes twice in its summaries.
- The assembled engine chooses the command from its first argument; the bootstrap also accepted options before the
  command.
- A literal's category is guessed by heuristics. It serves to sort the catalogue, not to decide.
- A generation shares the language with the following ones until it receives its own copy: changing the prelude or the
  kinds changes every generation that shares it, which the advance checks on a sample of them.
- The page's program carries the modules of the graph its bodies use, several times the weight of the script it
  replaced. The dates the page writes follow the payload's language, but the common renderer is frozen in Trame's.
- A generation is promoted by the advance of the one before: a change to the advance itself (g44's assembly of the page)
  first serves the promotion after it.
- The examples of a syntax element are not typed from its body (TypeScript would fix the type before reading the
  body): it is their execution that counts.

## What comes next

- **Types read by their text, the language of a project's documents**: decided, waiting for TypeScript 7 and for a
  second language.
- **A realization serves the ports it names**: to reuse a writer for another audience (Markdown in the terminal), that
  port is added to it, then the choice changed: two nodes, not one.
- **The design scale** was taken as it was; folding it (3 px into 4, 13 px into 13.5…) is now a change of decisions,
  visible in the graph.
- **TypeScript 7**: moving the static analysis to the API of the compiler rewritten in Go, once it is stable: 7.0
  shipped without one; 7.1 brings it (`typescript/sync`), in beta since October, its final release announced for late
  November.
- **Delivery**: the targets after the page: a web application (PWA), then Capacitor for Android and iOS.
- **The model**: two requirements that say they answer the same question, played on each other's cases, a
  disagreement settled as an overlap; a decision changed from the page, written into the repository as an amendment
  proposal.
- **Data**: migrations (proposed: a review on what a reviewer reads of a row, so a field nobody reads expires no
  review; a migration node from one version of a stored shape to the next, and a family `Migrated` that obliges a
  shipment whose stored shapes changed since the version deployed to carry them); a content update downloaded by the
  app, checked by the same rules.
- **Publication**: Trame's own graph has no `trame.lock` yet; tying `trame publish` to the merge into the main branch.
- **The SDLC**: a shipment of a library version (its release, then a warning in the projects that import an older one; proposed); a
  signature with a key, read from outside the graph (the seal is an attribution); a status that reads itself said as an
  error of the graph rather than unknown (since g69 no kind lets one be written); a deployment in a workflow that publishes somewhere real (GitHub
  Pages), the evidence a workflow keeps brought back into the repository.
