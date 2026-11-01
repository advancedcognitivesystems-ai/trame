# Working with Trame — a guide for agents

Trame describes a product as a graph written in TypeScript, checks it at every build, renders it into documents and a
page, and assembles the programs that realise it. Trame's own engine is such a graph, and each frozen generation of the
engine compiles that graph and assembles the next one. This guide says how to work in a Trame project without breaking
what the graph guarantees. The README explains why; this file says how.

## 1. Where things are

| Path | What it is | Who writes it |
|---|---|---|
| `src/*.ts` | The graph: one module per file, its title in the first comment (`/** Trame · Messages */`) | you |
| `src/code/**` | The bodies of code nodes, written in files (`code.file(…)`) | you |
| `trame/` | The prelude: the runtime of the language (registry, kind API, vocabularies, formatting) | rarely, by hand |
| `kinds/`, `views/`, `engine-views/` | The language: what a node can be, which questions are asked of the graph; their words in `words.ts` | you, reviewed |
| `trame.json` | The project: its libraries (`"libraries"`), the generation it pins (`"engine"`), the kinds and views it carries besides the language's | you |
| `package.json` | The project as a package: the import map of the language (`#trame/*`) and of its libraries (`#std/*`), the packages of the graph | `trame manifest` |
| `libs/` | Libraries of a domain (`libs/geometry`: vectors, angles), each a project of its own | you |
| `std/` | The standard library: a Trame project of its own (structures, standards, patterns) that Trame and the example import | you |
| `ci/` | The library of writers that run a shipment elsewhere (GitHub Actions, Bash), from the plan the engine computes | you |
| `docs/`, `graph.json`, `snapshot.json` | What a build writes: documents for people, the graph and its snapshot for tools and agents | the build only |
| `evidence/` | Dated measures the nodes read (package reports, the SDLC's evidence in `sdlc.json`, dossiers under `shipments/`) | commands (`trame audit`, `trame ship`, `trame evidence`) |
| `generations/gN/` | Frozen engines, each with the graph it was assembled from; `generations/README.md` | `trame advance` only |
| `src/releases.ts` | The generations as nodes | `trame advance` only, never by hand |
| `examples/reservations/` | A product described with Trame: read it to see a whole graph | you |

Never edit `docs/`, `graph.json`, `snapshot.json`, `generations/` or `src/releases.ts` by hand.

## 2. Commands

Run from the project's directory, through the pinned generation:

```
./trame.sh build                       # compile, check, write docs/ (the summary lists the open issues)
./trame.sh plan [--at <date>]          # what a build would change against graph.json, written nowhere (g73)
./trame.sh build --at 2026-10-27        # the graph as it was that day: evidence counts from the day it was given (g75)
./trame.sh test-kinds                  # the laws of the kinds and views
./trame.sh view <view> [node|module]   # one view in the terminal: impact, why, history, assembly take a node
./trame.sh dev                         # the page, recompiled at each change
./trame.sh export page.html            # the page, standalone: the dates the graph changes at, and the last days of its history
./trame.sh assemble <component> --env <environment>
./trame.sh audit                       # the registry's reports on the packages, kept as evidence
./trame.sh manifest                    # the packages of the graph and the import map of the language and its libraries, written into package.json
../trame.sh init "Title" --by <owner>  # in an empty directory: starts a project (trame.json, src/product.ts, the guide, the skill, package.json)
./trame.sh release <version> "what"    # in a library: freezes a version, with its documents
./trame.sh publish [--migrate "why"]   # freezes the published declarations in trame.lock (--migrate: those the language changed the form of)
./trame.sh deliver [delivery]          # writes the deliveries: a page a browser opens as it is
./trame.sh ship <shipment> --by <name> [--dry-run] [--promote "what"]   # builds, checks, refuses or deploys (section 4b)
./trame.sh evidence <node> passed|failed --by <name> [--subject <row>] [--language <tag>] [--note "…"] [--url <where>]
./trame.sh amend <node> <path> <value> --why "…" --by <name> [--from <date>] [--until <date>] [--source "…"] [--dry-run] [--accept]
                                       # changes a chosen value by an amendment, said first (g85); in trame dev, from the page (g86)
./advance.sh [--accept] [--promote "what changes"]   # the next generation (see section 7)
npx tsc --noEmit -p .                  # types, before any build
```

A build that is refused (a kind that breaks its laws, an error that stops it) writes nothing: the documents on disk are
the previous ones. Check that the output ends with `written: …` before trusting `docs/`.

## 3. Use the graph to find the work

Trame tells you what is left; read it before writing code.

- **The open issues** of the build summary and of `docs/index.md`: *blocking* (a value nobody decided, a claim nobody
  settled), *error* (a broken rule, a literal in a body, a realization that does more than its port promises), *warning*
  (no measure, no acceptance criteria, nothing applying an ADR). Each names its node and its owner.
- **`docs/owners.md`**: what each person must decide, settle or watch.
- **`docs/review.md`**: what the declarations not yet published change.
- **`./trame.sh view impact <node>`** before changing a node: everything that depends on it. **`why <node>`**: its
  path to a goal. **`history <node>`**: what was claimed on it.
- **`snapshot.json`** and **`graph.json`**: the whole graph as data, the quickest way for an agent to read it.

Write the graph first, then build: an undecided value (`TODO`) becomes a blocking hole with its owner; a requirement
without criteria, a port without a realization, an ADR nothing applies become warnings. Filling those holes, layer by
layer, is the work.

## 4. The layers of a graph

Write a product top-down, one module per concern, each node linked to what it serves:

1. **Product**: goals, requirements (executable rules, written as bodies), acceptance criteria, decisions with their
   owner, range and rejected options, assumptions with a date, SLOs; the quantities the product measures (`quantity`).
2. **Principles and ADRs**: each architecture decision with its context, consequences, rejected options, and the nodes
   that apply it (`appliedBy`), which make its status.
3. **Standards and vocabularies**: what is published elsewhere (an RFC, a registry, an algorithm) with its source, and
   closed sets of words.
4. **Architecture**: components, ports (with their effects), environments.
5. **Code**: functions (pure), implementations (the only nodes that touch the platform), entry points, catalogs.
6. **Technical choices**: bindings choose the realization of each port per environment and name the patterns they follow.
7. **Scenarios**: real code wired in an environment that checks entry points and requirements.
8. **Data**: the content a product carries (kind `dataset`: typed rows, a key, rules, languages offered); reviews are
   dated evidence on it, tied to the fingerprint of what was seen.
9. **Delivery**: how a component reaches people (kind `delivery`: the component, its environment, a target, an output);
   `trame deliver` writes it.
10. **SDLC**: how a version becomes available (section 4b): artefacts, checks, reviews, roles, obligations and the
   policies that group them, shipments, and the programs of the SDLC that check and deploy, tested in memory like the
   product's code.

Every node has an owner (a person) and a documentation comment: its first line is its title, the rest its description.

## 4b. The SDLC is in the graph

A project declares how a version of it ships (ADR "A version ships through the graph"):

| Kind | What it says | Its evidence |
|---|---|---|
| `role` | who holds it (`people`), whether they may review their own work (`notAuthor`), how evidence is signed | — |
| `artifact` | what is produced (`path`, or where its delivery writes it), its media type, what produces it (`producedBy`: a delivery, an entry point, a component, a release), the programs it `carries` when its producer does not say (a page exported carries its component, for the browser), the `environment` a component it is is assembled for when not its shipment's (the page's program, for the browser); wired, it gives `{ path, media }`, so a program names the artefact, never its path | `built`: the SHA-256 of the file (of its files, for a directory), with the code it was made from (g70) and the engine that made it (g72): it holds while that code is the code as it is and the project pins that engine |
| `check` | what a scenario in memory cannot check: run by a program of the SDLC (`runs`) or made by hand (`steps`), signed by a role (`by`), on artefacts (`on`); the code it proves (`verifies`): what its program runs on a machine, or what its artefacts carry | `check`: passed or failed, for the artefacts as last built from the code as it is, by its program as it is (g70) |
| `review` | what must be reviewed (`of`: the rows of a dataset in each language, or a node as written), by which role, by how many of its people (`approvals`, one) | `review` on the subject: each row and language, tied to the fingerprint of what was seen; each person's latest counts, a change asked holds it back |
| `shipment` | a target, what it `ships`, the `policy` it follows, what it also `requires` that derivation cannot see, the entry points that `deploys` it, the `environment` its programs are assembled for | `shipped`, with the dossier |
| `obligation` | one family of `#std/obligations` it `applies` (Verified, Served, Applied, Reviewed, Checked, Ruled, Safe), its `params` (typed by the family's rule), what a gap weighs (`gaps`: `Severity.error` keeps the shipment, `Severity.warning` says it), why (`serves`) | — |
| `policy` | a way of working: its `obligations`, one per family | — |

What a shipment must prove is derived, not listed (g68): its policy's obligations read what it reaches (the artefacts
it ships, what produces them, what its programs wire in their environments; a library frozen at a version is left out,
its release covers it) and give the nodes to prove, each with the reached node that brought it in, and the gaps
(reached code no scenario verifies, data nothing reviews). A decision the shipment itself applies is not one of its
obligations: the shipment is its evidence, and each would wait for the other. Do not list in `requires` what the policy derives:
`docs/pipelines.md` shows why each step is there. Every shipment also proves the **foundations**, which no policy
chooses: no literal in a body, no value nobody decided, no error of the graph; `trame ship` refuses on them first. A
gap the obligation weighs as an error is an error of the graph: it stops what assembles and delivers, as any error does
(an obligation unknown, evidence awaited, only keeps the shipment). A new family is a requirement of
`#std/obligations` whose rule is `(sketch, reach, params) => { obliged, gaps }`, with acceptance criteria.

`trame ship <shipment> --by <name>` produces the artefacts (a delivery is delivered, an entry point run, a component
assembled), runs the checks a program makes, records the evidence in `evidence/sdlc.json`, compiles again, and refuses
while an obligation does not hold (requirement "Ship only what holds"), naming each one and its owner; then it runs the
deploying entry points in order (passing on `--promote`, `--accept`) and writes the dossier under `evidence/shipments/`
(named by the shipment, the day and its fingerprint). `--dry-run` stops before deploying. The engine computes each
shipment's pipeline once (`Compilation.pipeline`): the command runs it, `docs/pipelines.md` shows it step by step, with
what runs each step, its status and its latest evidence: read it to see what a shipment still lacks. `trame evidence`
records what a person gives, refused to someone not of the role (or the author, when the role says `notAuthor`). Each
record either writes is sealed (g72: the port `Signatures`, an attribution: the SHA-256 of what the record says): a
record changed afterwards no longer matches its seal, is not counted, and is an error naming it. Never write `evidence/`
by hand, and never record evidence in someone else's name: attribute what you run to yourself. `docs/owners.md` says who
holds each role and, for each piece of evidence a role awaits, the command that gives it.

A file that runs a shipment elsewhere (a workflow of GitHub Actions, a Bash script) is an `artifact` produced by a writer
of the library `ci` (`GitHubWorkflow`, `ShellScript`), naming the shipment it `runs`, its `settings` (a decision) and
what that place makes available once shipped (`publishes`): the engine computes the plan of the run from the graph, the
writer only gives it a form. What is published, how long it is kept, whether the evidence is kept: the graph says it, a
writer never decides it. Never write such a file by hand; a new place to run is a new writer in `ci`, with its examples.

The programs of the SDLC are a component of the project (its exposure `ProgramCommands` from `#std/tooling`, the first
argument naming the command), whose entry points use the ports `Files` and `HeadlessBrowser`; a binding chooses their
machine realizations (`NodeProgramCommands`, `MachineFiles`, `PlaywrightBrowser`) for the shipment's environment, and
another their memory realizations for the scenarios that test them. Governance is rules: a `rule` applies a
requirement of `#std/rules` (`Reaches`, `NeverReaches`, `Linked`, `WithoutEffects`, `WordsOf`) with its `params` (a
direction is a word of the vocabulary `Directions`: `way: "in"`), and `serves` a goal or is applied by an ADR that says
why. A broken rule is an error, unless the rule says `severity: "warning"` while the project gets there.

## 5. The rules the build enforces

- **Everything is in the graph.** A value, a name, a choice that a person could change lives in a node, with its meaning.
- **A value changes by amendment** (since g85): a kind says how each of its fields changes (`changes`: chosen, cited,
  code). A chosen value is amended (`trame amend`, or by hand with `amend(…)`) and approved by its owner; a cited one
  only with its new source; code in the code. Never edit a decided value in place: amend it.
- **No literal in a body**, nor in a kind or a view: each one is an error, with its place. Where a value goes:

  | The value is… | It goes in… |
  |---|---|
  | written in a published text (HTTP status, ISO format, a constant of an algorithm) | a `standard`, citing its source |
  | chosen by someone, with alternatives | a `decision`, with its owner and what was rejected |
  | an operation several bodies share (first element, a count, joining texts) | a `structure`, with its laws |
  | one of a closed set of words | a `vocabulary` |
  | words said to people | a `catalog`, in its language |
  | what a number measures (a duration, an amount of a currency, a ratio) | a `quantity` (std's `Time`, `Ratio`, or the product's own), its values typed `Quantity<typeof Q>` |
  | a name the engine and the language both read (a kind, a view, an edge, a report) | a vocabulary of the prelude |
  | private to one function | that function's `constants` |

- **A body receives what it needs as parameters** (its `deps`): it imports only the prelude's public API
  (`#trame/kernel`) as a value, and types from anywhere. A body in a file is
  `code.file<typeof import("./code/x").default>("./code/x.ts")`; the file default-exports `(deps: Deps) => api`. A
  requirement's rule is a body too (since g79): `body:` with what it reads in `deps`, never a node named inside it;
  called, the node is the rule its dependencies make.
- **Quantities do not mix** (since g80): adding, subtracting or comparing two quantities, or multiplying them when
  neither is a ratio, refuses the build as a type error does. Declare a new quantity rather than mix two.
- **Only implementations touch the platform** (files, network, clock, DOM, storage). A function that implements a port
  touches nothing. A realization does no more than its ports promise (their declared effects). A port may say what each
  method may do (`declaredEffects: { read: […], write: […] }`, since g82): a body then has the effects of the methods it
  calls on its parameters; hand a parameter on whole and it has them all. Since g83 an implementation is held to what
  its body reaches (the modules and names it imports, the globals it reads), against std's `PlatformEffects` and the
  `declaredEffects` of the packages of the graph: what nobody describes, or more than its ports promise, is an error.
  Wiring hands each node only the methods it calls of each port. A command another system interprets (SQL, a shell
  line, a URL) is a `Command<E>` of std, made only by std's `Commands` and marked with what it may do (since g84):
  a port's method says which it takes, a cast that makes one refuses the build, and a scenario proves the resource
  refuses the rest.
- **No code made of a text** (since g82): `eval`, `Function`, a value's `constructor` refuse the build, anywhere.
- **A technology is chosen in one node**: a binding, which follows a pattern (Strategy, Adapter, Bridge, Abstract
  Factory, Repository) and is checked against its shape. Code that uses a port never names what answers it.
- **A choice is a concept.** When there are several ways to do something, and someone could choose another, name the
  concept: a port, its strategies (its realizations) and a binding that says which one applies where, as Trame does for
  technologies. A choice of value stays a decision, with the options it rejected. What nobody would change is just code:
  do not make a concept of it. Where amendments of the graph go, how a package is fetched, how evidence is signed: each
  is a port with its strategies, the first one in place, the others to come.
- **Words are in catalogs**, in the language they are written in; a count uses `plurals(language)` with each form
  written; lists use `Lists`; dates use `Dates`. A product in several languages has one catalog per language, each
  translating the first (`translates`), and chooses the catalog of the language it speaks when it runs.

## 5b. Packages and libraries

**Every package names what it uses** (ADR "A package is used by its name", g87–g89). The language is a package: a
project imports `#trame/kernel` and `#trame/kinds/<kind>`, never `../../kinds/<kind>`; its kinds and views are the
language's, from the generation it pins, and `trame.json` lists only those it carries besides. `./trame.sh manifest`
writes the import map of `package.json` (`#trame/*` through the link `.trame/trame` to the pinned generation, which an
advance moves with the pin; `#std/*` to the library or its frozen version) and `"type": "module"`. A relative import
that leaves its package refuses the build and says the name to write. Trame's repository is the language's home: its
own files reach `kinds/` and `trame/` where they are. Where a package comes from is std's port `PackageSources`: a
local path now (`LocalPaths`), a registry later. `./trame.sh init "Title" --by <owner>`, run in an empty directory,
starts a project: its `trame.json` (the generation that runs, the libraries the language's home uses), a first module
with its goal, this guide and the skill, then its manifest. Since g91 a project's graph references the packages of Trame it uses, each a `package` node that says how it joins
the graph (`joins`: the language, a library), where it comes from (`from`: a word of std's `PackageOrigins`, by its
path or from the registry of this machine) and its path (`at`); `trame manifest` places each one by its origin and
writes `trame.json` from them (the language as the engine to run, `.trame/trame`; each library as placed, `{ at,
version }`): a derived file, like the import map. The engine leads `#trame/*` to its own language, and the
names of the project's libraries to their sources, when it loads a project: a package published once is read with
whichever generation and libraries read it, as a peer dependency (g91–g93). Since g92 a version is published to the
registry of this machine (`~/.trame/registry/<name>/<version>`, the decision `LocalRegistryPlace`): by `trame release`
in a library (run on a version already frozen, it publishes it), and by the promotion of a generation, with its
language copied for real, so a project that runs it from there keeps the language it was frozen with. `trame.sh`
installs a published engine's packages the first time it runs it. `libs/geometry` runs entirely from the registry
(g93, std 0.12.0). The example and std keep a written pin, which an advance moves.

A library is a Trame project another project imports (ADR "A library is a Trame project, imported by path"). The
project names it in its `trame.json` (`"libraries": { "std": "../std" }`, or `{ "path": "../std", "version": "0.1.0" }`
for a frozen version) and imports its nodes by name (`import { Counts } from "#std/algebra"`); `./trame.sh manifest`
writes where the name leads into `package.json`. A path into a library is refused. `./trame.sh release 0.1.0 "what"`,
run in a library, freezes a version under `releases/0.1.0/` with its documents. In the project's graph its modules take the library's name
(`std/algebra.Counts`): the project's nodes depend on them, the kinds read them, but the project's documents only link
to the library's, its issues are counted apart (the index, the build summary) and its lock leaves them out. A library
builds its own documents (`cd std && ../trame.sh build`).

Before writing a structure, a standard or a pattern, look in `std/` (its `README.md` lists its modules): a generic
node goes there, with `serves` naming the library's goal; what only one product needs stays in that product.

## 6. Writing kinds and views

**A new kind is the last resort.** A kind is a type of node: what a node can say, how its status is computed, what the
engine does with it. Adding one can weaken a guarantee unseen and makes projects diverge, so:

1. **Compose first.** Try the kinds that exist (a requirement applied by a rule, an obligation of a family, a decision,
   a dataset, a check) and say exactly what they cannot do: a status nobody can compute, a link nobody can express,
   evidence nobody can require.
2. **A kind lives in a library, never in a product**: Trame's own, or a library of a domain or of hygiene, versioned
   and shipped through its own graph; a project that imports the library gets its kinds.
3. **It is admitted with its file**: an ADR that says why composing was not enough (composing is its rejected option),
   its laws played by `test-kinds`, its words in a catalog, an example that uses it, and its place in the documents.

Kinds and views are files, not nodes; they hold no literal either. They get the graph's values from the engine:

- **Names**: `KindName`, `ViewName`, `EdgeName`, `PackageField`, `ReleaseEdge`… from the prelude. A kind names its own
  fields and edges with `keysOf(fields)`, another kind's with `fieldsOf(kind)` / `edgesOf(kind)`, read inside the hooks
  (two kinds that import each other then load in any order).
- **Values**: `g.lib` — `values` (type tests), `counts`, `sequences`, `texts`, `lists`, `punctuation`, `dates`,
  `positions`, `references` (paths), `settings`, `draws`, `layout`, `declarations` (the language code is shown in),
  `versions`, `units`, `shown` (visible text).
- **Words**: in `kinds/words.ts`, `views/words.ts`, `engine-views/words.ts`; a sentence with pieces returns `Inline[]`.
- **Laws**: every kind answers on any value without crashing, names an owner for a blocking hole, says nothing held or
  violated without evidence, gives the same answer twice, settles claims whatever their order. `./trame.sh test-kinds`
  plays them on drawn values; a kind that breaks one refuses the build.
- Destructure instead of indexing (`const [, second] = xs`), test types with `g.lib.values`, name a wired value by the
  node's `ref`, not by a text.

## 7. Changing the engine: generations

Kinds, views and the prelude are shared live by the generations that share the language; the engine is frozen in
each generation. So the order matters:

1. **What the language needs from the engine comes first**: change the engine's graph (`src/`, its bodies) and the
   kernel's types, leave the kinds as they are, and advance: `./advance.sh` builds Trame's libraries, the example and
   Trame with the generation in place and with the candidate, checks they are identical, reassembles to a fixed point, plays the laws, and replays
   older generations. `./advance.sh --promote "what changes"` freezes it and moves the pins of Trame and the example.
2. **Then** move the kinds and views onto what the new generation gives.
3. **A prelude export is removed** only when the generation in place no longer uses it; the next advance gives the
   older generations that break their archived language.

Do not edit `src/`, `kinds/`, `views/`, `trame/`, `std/src/`, the example or Poselia while an advance runs: its builds
would read two different graphs. Since g74 a run is kept (a scenario played, the reading of TypeScript, the examples of
the syntax elements): given back while the code it wires and the files its project reads are as they were, in
`.trame/runs` on a machine, one directory per engine. A build of Trame takes about a minute from nothing, six seconds
when nothing changed, about thirteen after a change to one body: it plays again only the scenarios that wire what
changed (a body or a node's declaration; any other file, a kind or a helper in a module, plays them all), reads again
only the bodies that changed, and checks the types again. Deleting
`.trame/runs` only costs time; never commit it. When the two builds differ, the advance stops and writes them all into `differences.diff`; read it,
then `--accept` if they are wanted (the promoted generation keeps them), or fix the graph and advance again.

## 8. Checking your work

- `npx tsc --noEmit -p .`, then build: the example at the day of the scenarios (`TRAME_TODAY=2026-10-30`, the decision
  `TestDay`: its documents are what the scenarios compare a build with), then std and Trame at today's date. Build at
  the real date: a fixed date in the past hides the evidence given since (g75), and the page would show that day.
- Compare the documents with those of the previous state: a change of the language should change no document; a change
  of the graph should change only what it means to. Node views (impact, why, history, assembly) are not in `docs/`:
  render them with `./trame.sh view`.
- The page: export it and open it in Chromium (Playwright is installed) to see it runs without errors.

## 8b. What verifies code

The status of code (an entry point, a function, an implementation) is that of what verifies it: held when everything
that verifies it holds, unknown while nothing does. What may verify it:

- a **scenario** (`verifies`), which must run it: what its dependencies wire in its environment, and what those nodes
  use directly in their code (a rule that calls another rule). A scenario that says it verifies what it does not run is
  an error. `./trame.sh build` shows, under each scenario, "The code it runs": read it before adding to `verifies`, and
  give each node verified a check that depends on it;
- a **check** run by a program (`verifies`): what its program runs on a machine (the disk, processes, a registry,
  a server), or what the artefacts it checks carry (a page and its component, run in a browser; a check by hand on a
  phone verifies what only a person hears). A check that failed keeps every shipment that proves it (a warning in the
  graph, its status violated): it does not stop `trame assemble` or `trame deliver` from making the next version.

A requirement is held when it is right and followed: its acceptance criteria pass, and each node that follows it holds
(code that calls it, directly or through another rule; a scenario or a check that verifies code against it; a dataset
whose rows it checks), one at least, or an obligation or a rule applies it. A rule nothing follows is unknown, a warning
to its owner: make the code call it, or remove it. A library's rule nothing follows in the project has no status there.
A rule may constrain another (`constrains`, with the `examples` it is played on; its body receives the other's
arguments, then its answer): a refused example makes both violated and tells both owners, until one amends their rule.
Two rules that compute the same kind of answer from the same kind of arguments for the same need are warned (g81):
constrain or amend one by the other, or give them more precise types.

An implementation that no choice of the graph takes, nor any environment, has no status (a library offers it; the
projects that choose it verify it); so has a pattern no choice follows. A project that chooses a library's adapter
verifies it where it runs: Poselia's check in Chromium verifies the page's loading, languages, preferences and frames,
its check on a phone the voice and the screen kept awake; its scenarios verify the doubles they use.

What applies a decision and what a choice takes make their status, strictly (g69): violated if one is, held when each
one that has a status holds, unknown while one does not. A decision applied only by what is offered here (a library's
adapter) has no status, judged where it is chosen; applied only by nodes that never have one (ports, decisions), nothing
can prove it: an error.

Evidence expires with the code (g70). The engine fingerprints each node's code (its declaration as written, its values,
the files of its bodies) and gives it to the kinds (`g.code(nodes)`). `trame ship` records with each artefact built the
code it was made from (what produces it, wired where it goes; what it carries), and with each check its program's code:
an artefact holds while that code is the code as it is (otherwise "built from code that has changed since"), a check
while its artefacts do and its program is the one that ran. Since g72 what a program of the engine builds or checks
also carries the fingerprint of that engine (since g73 its code alone: `src/`, `trame/`, `kinds/` and its libraries'
`src/`, which a generation records in `engine.json`; an assembled program carries the date of the graph it was
assembled from): it holds while the project pins that engine. `trame ship` judges what it just built by the engine
that built it (a generation's own shipment is run by the candidate, which the project pins once it is deployed). Change the code, or the engine a project pins, and what was proven is to
prove again: ship again. A package of a library frozen at a version is
its release's business. In Trame's own scenarios (environment `Test`), commands run on the example in memory: files are
read from the disk and written in memory over it (`MemoryFiles`, read back through the port `WriteLog`), the programs a
command starts answer what the scenario says and say what was started (`ProcessLog`: `answer`, `started`, `enter` to run
on another project of the repository), `trame dev` serves a server in memory (`ServerLog.request`), and a scenario types
the next command line (`TerminalLog.type`). The machine itself is asked by `trame doctor`, which the check "The
candidate runs on the machine" runs in each shipment of a generation. Without an environment (the examples of syntax
elements), a port answered differently in several environments is answered as in the environment that says
`evaluates: true` (Trame's `Test`).

## 9. Traps met so far

- A build refused by a kind law leaves the old documents in place: a comparison then says "identical".
- A status that reads itself through other statuses is unknown, without a word: a node that stays unknown while all it
  reads holds is in such a cycle (g69's next generation waited for a decision it applied).
- `typeof x === "string"`, `xs[0]`, `""`, `0`, `", "` in a kind or a view are literals: use `g.lib`.
- Two kinds that import each other: read the other's names inside the hooks, never at the module's top level.
- tree-sitter-typescript 0.23.2 does not read a property named `in` after a property whose type is a name without a
  separator: write `Node<typeof KindName.component>` rather than `Node<"component">`.
- A decision whose value is an object of objects shows as a table keyed by the first type argument of its `Record<…>`.
- Moving a node to another module changes its reference (`module.Name`): documents, the lock and the history follow it.
- A value that holds `undefined` somewhere (a dataset row with `side: undefined`) is not JSON: the assembly cannot freeze
  it into a delivered page, which then fails at load ("n.field is not a function"). Leave the property out instead.
- A library with its own `package.json` (std, for Playwright) must say `"type": "module"`: otherwise the files of its
  releases are read as CommonJS, and the project's graph finds nodes "without a name".
- An entry point whose body is in a file typed with `BodyOf<typeof Node>` declares it as `code.file("./code/x.ts")`,
  without the type argument: with it, the node's type refers to itself.
- A decision used in a scenario's dependencies must be declared before the scenario in its module: `deps` is read when
  the module loads.
- An index (`xs[1]`), `at(-1)`, `printed(0)`, a template with a separator (`` `${a}:${b}` ``) in a scenario body are
  literals: destructure, use `sequences.last`, `counts.zero`, the standard's separator.
- `readdirSync(dir, { withFileTypes: true })` gives entries with their type: a file system kept in memory must too.
- A run is kept while the files its project reads are as they were, except what the project writes itself (its
  `docs/`, `graph.json`, `snapshot.json`, `out/`, `evidence/`, its artefacts and deliveries): a scenario that read its
  own project's outputs would not be played again when they change. Read another project's instead, as Trame's
  scenarios read the example's documents.
- A rule written `rule: (x) => …` is the form before g79: it is read with a warning and escapes the checks of a body.
  Write `body: ({ … }) => (x) => …` with its `deps`; an amendment of it patches `body` with `(previous) => (deps) => …`.
- A published declaration the language changes the form of (a type renamed, a rule rewritten as a body) is an error
  of `trame.lock`: `trame publish --migrate "why"` publishes it again, and only it.
- TypeScript keeps the path of a link: reached through `.trame/trame`, the kernel would be a second file whose types never
  match the first. The engine leads `#trame/*` to the files where they are (g88); a `tsconfig.json` that checks a
  project by itself needs the same `paths` (Trame's has them).
- A library frozen at a version brings its packages from its own installation (std's `node_modules`): `trame manifest`
  installs only those of the project and of the libraries it imports as they are.
- `Quantity<…>` is a number: a value from an operation (`a * b`) has no quantity, so it never mixes; give it one by
  its constructor when it is one (`chf(x)`).

## 10. Reading further

The README (the why of each part), `generations/README.md` (generations and archived languages), `docs/adrs.md` (every
architecture decision in force), `docs/literals.md` (the catalogue of literals), and the example's `docs/`.
