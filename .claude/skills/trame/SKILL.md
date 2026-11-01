---
name: "trame"
description: "Use when working in a Trame project (a trame.json at its root): describing a product as a graph, writing kinds, views or bodies, shipping a version, advancing generations."
---

# Working in a Trame project

Trame describes a product as a graph written in TypeScript (`src/*.ts`), checks it at every build, renders it into
documents (`docs/`) and a page, assembles the programs that realise it, and ships its versions through the same graph.
The repository's `AGENTS.md` is the full guide; read it first, then keep to this loop.

## Before writing anything

1. Read `AGENTS.md` and `trame.json` (which libraries and generation the project uses, the kinds and views it carries
   besides the language's).
2. Build at today's date: `./trame.sh build` (a fixed date in the past hides the evidence given since: evidence counts
   from the day it was given; `--at <date>` shows the graph as it was that day). Read the summary's open issues, `docs/index.md`,
   `docs/owners.md` and `docs/review.md`: they are the work left (blocking holes, errors, warnings, each with its owner
   or its role).
3. Take the inventory: every node that is not held. Each unknown must be a **wait** (evidence a person or a machine
   will give: a check by hand, a review, an assumption, a measurement), never a **hole** (something the graph can never
   prove as written). A hole is fixed in the graph, not waited for.
4. Before changing a node: `./trame.sh view impact <Module.Node>` (what depends on it) and `view why <Module.Node>`.
   After changing it, `./trame.sh plan` says what a build would change against the last one (nodes added and removed,
   statuses, fields, results and edges, issues raised and resolved, the shipments touched), writing nothing.

## Writing

- Graph first, code after. Write by layers: product (goals, requirements with criteria, decisions with owner and
  rejected options, assumptions, SLOs), then ADRs (with what applies them), standards and vocabularies, architecture
  (components, ports with effects, environments), code (functions, implementations, catalogs), bindings, scenarios,
  data (datasets), delivery, and the SDLC (below).
- Leave an undecided value as `TODO`: it becomes a blocking hole naming its owner, which is better than a guess.
- A decided value changes by amendment, never in place (g85): `trame amend <node> <path> <value> --why … --by …` says
  first what it would change (a criterion that would fail refuses it), then writes `amend(…)` beside the node; its
  owner approves it when someone else wrote it. A cited value (a standard's constants, a quantity's units) changes only
  with its source (`--source`); code changes in the code.
- No literal in a body, a kind or a view: each is an error. A published value goes in a `standard`, a chosen one in a
  `decision`, a shared operation in a `structure`, a closed set of words in a `vocabulary`, words for people in a
  `catalog` (a scenario's check labels too), a name shared by engine and language in a prelude vocabulary, a private
  value in the function's constants, what a number measures in a `quantity`.
- A requirement's rule is a body (g79): `body: ({ … }) => (x) => …` with what it reads in `deps` (decisions, structures
  such as `Counts`, other rules), never a node named inside it; held to every check of a body. `rule: (x) => …` is the
  old form, read with a warning. An amendment of a rule patches `body` with `(previous) => (deps) => …`.
- Quantities (g80): a `quantity` node declares units (`units: { second: 1, minute: 60 }`), its source, its catalog
  (`written`), whether it is a `ratio`; values are typed `Quantity<typeof Q>` with constructors from `unitsOf(Q)`. std
  has `Time` (`Duration`, `s`, `min`, `h`) and `Ratio` (`Share`, `pct`). Adding, subtracting or comparing two
  quantities, or multiplying them when neither is a ratio, refuses the build; documents write each value in its units.
- A port may declare its effects method by method (`declaredEffects: { read: […], write: […] }`, g82): a body then has
  only the effects of the methods it calls on its parameters. `eval`, `Function` and `.constructor` refuse the build.
  An implementation is held to what its body reaches (g83): every module, package and host global it uses must be
  described (std's `PlatformEffects`, a package's `declaredEffects`), and within what its ports promise.
  A command another system interprets (SQL, a shell line, a URL) is typed by its intent (`Command<"read">`, g84),
  made only by std's `Commands`; a cast that makes one refuses the build.
- A body gets everything through its parameters; only implementations touch the platform; a technology is named in
  one binding only. Look in `std/` (its README lists its modules) before writing a structure, a standard, a pattern,
  a port of the platform, a rule or an obligation.
- A new project starts with `trame init "Title" --by <owner>` in an empty directory (its configuration, a first
  module with its goal, this guide, the manifest); a library of a domain goes under `libs/` (`libs/geometry`).
- Every package names what it uses: `#trame/kernel`, `#trame/kinds/<kind>` for the language, `#std/<module>` for a
  library; never a relative path out of the package (refused). `trame manifest` writes where each name leads.
- A choice is a concept: when someone could do it another way, name a port, its strategies (realizations) and the
  binding that says which applies where; a choice of value stays a decision with what it rejected; what nobody would
  change is just code.
- A new kind is the last resort: compose the existing kinds first and say what they cannot do; a kind lives in a
  library, never in a product, and comes with an ADR (composing as its rejected option), its laws, its words, an example
  and its documentation.
- A rule applies a requirement of `#std/rules` (`Reaches`, `NeverReaches`, `Linked`, `WithoutEffects`, `WordsOf`) with
  its `params`, never a hidden function, and says why: it `serves` a goal, or an ADR applies it.
- Never edit `docs/`, `graph.json`, `snapshot.json`, `generations/`, `src/releases.ts` or `evidence/` by hand.

## What verifies code

The status of an entry point, a function or an implementation is that of what verifies it (`verifies`):

- A **scenario** verifies only what it runs: what its dependencies wire in its environment, and what that code uses.
  The build shows "The code it runs" under each scenario: read it before adding to `verifies`. A claim nothing runs is
  an error.
- A **check** run by a program verifies what its program runs on a machine (its entry point and its component's
  exposure) or what its artefacts carry (a delivered page and its component; `carries` on an exported page). A check by
  hand verifies what only a person sees or hears (a phone: the voice, the screen kept awake). `Verified` obliges only
  scenarios and checks a program runs; checks by hand are `Checked`'s business.
- An implementation chosen nowhere, a pattern followed by nothing, a decision applied only by such offered nodes: no
  status (judged where they are chosen). A project verifies the library adapters it chooses where they run.
- A decision's status, and a technical choice's, are strict: held only when each node applying it (each realization)
  that has a status holds; a decision applied only by nodes that never have one (ports, decisions) is an error.
- A requirement is held when it is right (its criteria pass) and followed: each node that follows it holds (code that
  calls it, a scenario or a check verifying code against it, a dataset whose rows it checks), or an obligation or a rule
  applies it. "Nothing makes the product follow this rule" is a hole: make the code call the rule, or remove it.
- Two owners who disagree about a rule settle it in the graph: an amendment its owner approves, or a rule that
  `constrains` the other with `examples` (its body receives the other's arguments, then its answer); a refused example
  makes both violated. Two rules computing the same kind of answer from the same arguments for the same need are warned
  (g81): constrain or amend one by the other, or type them more precisely.
- A node unknown while everything it reads holds is in a status cycle (unknown, without a word): break it.

## Shipping a version (the SDLC)

How a version becomes available is declared in the graph, with the kinds `role`, `artifact`, `check`, `review`,
`obligation`, `policy` and `shipment` (AGENTS.md, section 4b):

- An `artifact` says what is produced and by what (a delivery, an entry point, a component, a writer of `ci`); wired
  into a program it gives `{ path, media }`: a script names the artefact, never its path.
- A `check` is what a scenario in memory cannot see: run by an entry point of the project's SDLC component (`runs`), or
  made by hand from its `steps` and signed by a role (`by`). A failed check is a warning: it keeps the shipment, not the
  next build.
- A `review` names what must be reviewed (a dataset's rows in each language, or a node) and by which role; a role with
  `notAuthor` never reviews its own work.
- An `obligation` applies one family of `#std/obligations` (`Verified`, `Served`, `Applied`, `Reviewed`, `Checked`,
  `Ruled`, `Safe`) with its `params` (typed by the family's rule) and says what a gap weighs (`gaps: Severity.error` is
  an error of the graph, `Severity.warning` says it); a `policy` groups the obligations of a way of working, one per
  family.
- A `shipment` names a target, what it `ships`, the `policy` it follows, the entry points that `deploys` it, and the
  `environment` its programs are assembled for. What it must prove is derived from what it reaches (the artefacts,
  what produces them, what its programs wire; a library frozen at a version is covered by its release): keep
  `requires` for what derivation cannot see, and read `docs/pipelines.md` to see why each step is there. A decision
  the shipment itself applies is not one of its obligations (it is their evidence). Every shipment also proves the
  foundations (no literal, no value nobody decided, no error of the graph), which no policy can drop.
- **Evidence expires with the code** (g70): an artefact holds while the code it was built from (its producer, wired
  where it ships; what it carries) is the code as it is, a check while its artefacts do and its program is the one that
  ran. After changing that code, ship again; evidence recorded before g70 has no code and is taken as stale.
- **Evidence is sealed and names its engine** (g72, g73): each record `trame ship` or `trame evidence` writes carries a
  seal; a record changed by hand is not counted, and is an error naming it. What a program of the engine builds or
  checks names that engine by the fingerprint of its code (`engine.json` in each generation): it holds while the
  project pins that engine, so after moving a project to another generation, ship again. `trame ship` judges what it
  just built by the engine that built it; a build judges by the engine the project pins.
- The SDLC's programs are a component whose exposure is `ProgramCommands` (`#std/tooling`), using the ports `Files` and
  `HeadlessBrowser`; one binding chooses their machine realizations, another their memory ones, and scenarios test them
  in memory before they run for real.
- A file that runs a shipment elsewhere (a GitHub workflow, a Bash script) is an `artifact` produced by a writer of `ci`
  (`GitHubWorkflow`, `ShellScript`), naming the shipment it `runs`, its `settings` and what it `publishes`: the graph
  decides what is published and kept, never the writer.

Run it:

```
./trame.sh ship <shipment> --by <name> --dry-run   # builds, checks, records, says what is missing and whose
./trame.sh ship <shipment> --by <name>             # then deploys and writes the dossier (evidence/shipments/)
./trame.sh evidence <node> passed|failed --by <name> [--subject <row>] [--language <tag>] [--note "…"] [--url <where>]
./trame.sh doctor                                   # does this machine run Trame? one line per question
./trame.sh plan [--at <date>]                       # what a build would change against graph.json, written nowhere
./trame.sh amend <node> <path> <value> --why "…" --by <name> [--dry-run]   # a chosen value, by amendment, said first
./trame.sh publish [--migrate "why"]                # freeze declarations in trame.lock; --migrate: republish those the language reshaped
```

Attribute what you run to yourself (`--by claude`), never to the user: a check by hand, a review or a phone test is
theirs to give with `trame evidence`. Record where you published an artefact (`trame evidence <artifact> passed --url
<where>`), after the shipment that built it.

## Checking

- `npx tsc --noEmit -p .`, then build (in Trame's own repository: the example at the day of the scenarios,
  `TRAME_TODAY=2026-10-30`, the decision `TestDay`, since its documents are what the scenarios compare a build with;
  then std, ci and Trame at today's date). Trust `docs/` only if the output ends with `written: …`: a refused build
  leaves the old documents.
- Runs are kept (g74 on): a scenario played, the reading of TypeScript and of each body are given back while what they
  read is as it was, under `.trame/runs` (never commit it; deleting it only costs time). A build of Trame takes about a
  minute from nothing, six seconds without change, about thirteen after a change to one body.
- Compare the documents with the previous ones: a change of the language changes no document; a change of the graph
  changes only what it means to. `./trame.sh test-kinds` plays the laws of the kinds and views.
- A page: export or deliver it and open it in Chromium (Playwright is installed) to see it runs without errors; in a
  project that declares it, `trame ship <shipment> --dry-run` does this through its own check.

## Changing the engine (Trame's own repository)

What the language needs from the engine is promoted first: change `src/` and the kernel's types, assemble the
candidate (`./trame.sh assemble TrameCli --env Local`, about a minute: it compiles Trame's graph, plays its scenarios and
refuses one in error), try it (`npx tsx out/local/trame-cli.ts …` on std, the example or Poselia; after a change of the
page, `./trame.sh assemble PageApp --env Browser` too, which trame dev serves), then promote it through Trame's
own shipment with that candidate, so the shipment runs the new code: `npx tsx out/local/trame-cli.ts ship NextGeneration
--by claude --promote "what changes" --accept` (about five minutes; `--accept` when the documents differ on purpose). Kinds
and views are shared live: a kind may read what only the new engine gives through an optional member (`g.code?.(…)`,
`g.libraryVersion?.(…)`). A wanted difference in the example's files is declared in the decision
`ExpectedDifferences` before the shipment, and the list emptied once the generation is in place. Trame's scenarios run
every command in memory (`MemoryFiles` over the disk, read back through `WriteLog`; `ExampleProcess`: `enter`, `answer`,
`started`; `MemoryTerminal.type`; `MemoryHttpServer.request`); what only the machine shows is proven by `trame doctor`,
run by a check of the shipment. Do not edit `src/`, `kinds/`, `views/`, `trame/`, `std/src/`, the example or Poselia
while a build or an advance of Trame runs: its scenarios read them. Differences land in `differences.diff`. To try a
language change that needs a new engine, keep it aside while assembling and shipping the candidate (the scenarios
compare the example with its documents, and the advance builds with both generations), try it with the candidate,
then bring it back once the generation is in place. A frozen program wires what older kinds gave, through the live
kinds: a change of a kind's form keeps the old form readable (with a warning) until nothing writes it. A
library's new nodes reach a project that pins a version only after `trame release <version>` in the library and the new
version in the project's `trame.json`, then `trame manifest`.