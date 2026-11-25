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
| `libs/` | Libraries of a domain (`libs/geometry`: vectors, angles; `libs/data`: the data a product keeps, and its kind `entity`; `libs/team`: the repository's people; `libs/machine`: the questions a project asks of its machine), each a project of its own | you |
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
./trame.sh help                        # what may be typed here: the engine's commands, the project's, the views (g116)
./trame.sh explain <node>              # everything the graph says of a node: what it is, why, what was decided, what holds it, what depends on it
./trame.sh <command> [args] [--env <e>] # a command of the project (E3, g116): its component assembled, its program run, in the engine's process when it is std's CommandsInTheEngine (g119); named like a command of the engine, it replaces it
./trame.sh pull-request "Title" ["What it changes"] --env Local|Session   # std's command Trame takes (g117): pushes, opens, merges once it holds unless a lock changed
./trame.sh merge [number] --env Local|Session   # std's command Trame takes (std 0.23.0): merges a pull request once its checks passed, then checks the base out
./trame.sh propagate --by <name> --env Local|Session   # std's command Trame takes (g117): each project of the repository upgraded, its workflow written again, built
./trame.sh examples [--accept]         # the examples of the syntax elements not met; written again in their declarations with --accept (g118)
./trame.sh dev                         # the page, recompiled at each change
./trame.sh export page.html            # the page, standalone: the dates the graph changes at, and the last days of its history
./trame.sh assemble <component> --env <environment>
./trame.sh audit                       # the registry's reports on the packages, kept as evidence
./trame.sh manifest                    # the packages of the graph and the import map of the language and its libraries, written into package.json; installs them when the lockfile disagrees (g100)
./trame.sh upgrade [package…]          # each package of Trame the project references to the newest version its origin holds, then the manifest (g100)
../trame.sh init "Title" --by <owner>  # in an empty directory: starts a project (trame.json, src/product.ts, the guide, the skill, package.json); in a project, repairs what it lacks, never over a file (g120)
./trame.sh release <version> "what" --by <name>   # in a library: ships its version, then freezes it, with its documents (g101)
./trame.sh publish [--migrate "why"]   # freezes, part by part, what people decided in trame.lock (--migrate: a form changed, never a value; g108)
./trame.sh deliver [delivery]          # writes the deliveries: a page a browser opens as it is
./trame.sh ship <shipment> --by <name> [--dry-run] [--promote "what"]   # builds, checks, refuses or deploys (section 4b)
./trame.sh evidence <node> passed|failed --by <name> [--for <name>] [--subject <row>] [--language <tag>] [--note "…"] [--url <where>]
./trame.sh amend <node> <path> <value> --why "…" --by <name> [--from <date>] [--until <date>] [--source "…"] [--dry-run] [--accept]
                                       # changes a chosen value by an amendment, said first (g85); in trame dev, from the page (g86)
./trame.sh advance --by <name> [--accept] [--promote "what changes"]   # in Trame: the next generation, in one command (section 7)
npx tsc --noEmit -p .                  # types, before any build
```

A build that is refused (a kind that breaks its laws, an error that stops it) writes nothing: the documents on disk are
the previous ones. Check that the output ends with `written: …` before trusting `docs/`.

## 3. Use the graph to find the work

Trame tells you what is left; read it before writing code.

- **The open issues** of the build summary and of `docs/index.md`: *blocking* (a value nobody decided, a claim nobody
  settled), *error* (a broken rule, a literal in a body, a realization that does more than its port promises), *warning*
  (no measure, no acceptance criteria, nothing applying an ADR). Each names its node, its owner and its code (C4, g111:
  `value-undecided`, `literal-in-body`, `check-stale`…, the words of the prelude's `HoleCode`; a library's kind names
  its own, data's `entity-…`), by which a project raises it: a project judges harder than the language, never softer
  (C4, g112, std 0.21.0). Its way of judging is a realization of std's port `Hardening` (`#std/judgment`) that a binding
  of the project chooses in the environment where its build evaluates (`evaluates: true`): std's `AsTheLanguageSays`
  or `EveryWarning`, or one of its own built on std's `Raising` (the example's `OurJudgment` raises the codes its
  decision `CodesWeRaise` lists). The engine keeps the harder severity, shown with the one the language gave
  (`error, raised from warning`); a way that would lower one, answers no severity or fails is an error of the project
  (`hardening-lowers`, `hardening-failed`).
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
4. **Architecture**: components, ports (with their effects), environments; the audiences their entry points are for
   (kind `audience`, section 5d).
5. **Code**: functions (pure), implementations (the only nodes that touch the platform), entry points, catalogs.
6. **Technical choices**: bindings choose the realization of each port per environment and name the patterns they follow.
7. **Scenarios**: real code wired in an environment that checks entry points and requirements.
8. **Data**: the content a product carries (kind `dataset`: typed rows, a key, rules, languages offered); reviews are
   dated evidence on it, tied to the fingerprint of what was seen, a row's `technical` parts left out (g104). The data
   it keeps outside the graph from one version to the next (a person's settings, its records) is an `entity` of
   `libs/data` (section 5c).
9. **Delivery**: how a component reaches people (kind `delivery`: the component, its environment, a target, an output);
   `trame deliver` writes it.
10. **SDLC**: how a version becomes available (section 4b): artefacts, checks, reviews, roles, obligations and the
   policies that group them, shipments, and the programs of the SDLC that check and deploy, tested in memory like the
   product's code.

Every node has an owner and a documentation comment: its first line is its title, the rest its description. An owner
is the handle of an actor the graph declares (C4, g113: kind `actor`, a person, a team, an agent, a machine); one
nobody declares is an error (`owner-undeclared`), and so is a role's person (`person-undeclared`). Trame's repository
declares its people once in `libs/team` (`trame`, the team of `ghalaax` and `claude`; `github-actions`, the runner),
which each project imports (`import "#team/people"` in its packages module), `ci` too, though team writes its workflow
with ci: each imports the other at a frozen version, and a project's own name leads to its own sources (g114); a
project may declare its own actors (the example's `karim` and `lea`), the same actor declared twice saying the same
thing. `trame init` declares whoever starts a project. A graph that declares no actor
is told once (`actors-undeclared`).

## 4b. The SDLC is in the graph

A project declares how a version of it ships (ADR "A version ships through the graph"):

| Kind | What it says | Its evidence |
|---|---|---|
| `role` | who holds it (`people`), whether they may review their own work (`notAuthor`), how evidence is signed, who may act for one of its people until a day (`delegations: [{ agent, for, until }]`, C4, g115) | — |
| `artifact` | what is produced (`path`, or where its delivery writes it), its media type, what produces it (`producedBy`: a delivery, an entry point, a component, a release), or a version of the project itself (`version: true`, its sources: all its code, which the shipment that ships it reaches whole, g101), the programs it `carries` when its producer does not say (a page exported carries its component, for the browser), the `environment` a component it is is assembled for when not its shipment's (the page's program, for the browser); wired, it gives `{ path, media }`, so a program names the artefact, never its path | `built`: the SHA-256 of the file (of its files, for a directory), with the code it was made from (g70) and the engine that made it (g72): it holds while that code is the code as it is and the project pins that engine |
| `check` | what a scenario in memory cannot check: run by a program of the SDLC (`runs`), by a command the engine keeps (`command: EngineCommand.doctor`, g122: it proves the project's add-ons to that command) or made by hand (`steps`), signed by a role (`by`), on artefacts (`on`); the code it proves (`verifies`): what its program runs on a machine, or what its artefacts carry | `check`: passed or failed, for the artefacts as last built from the code as it is, by its program as it is (g70) |
| `review` | what must be reviewed (`of`: the rows of a dataset in each language, or a node as written), by which role, by how many of its people (`approvals`, one) | `review` on the subject: each row and language, tied to the fingerprint of what was seen; each person's latest counts, a change asked holds it back |
| `shipment` | a target, what it `ships`, the `policy` it follows, what it also `requires` that derivation cannot see, the entry points that `deploys` it, the `environment` its programs are assembled for | `shipped`, with the dossier |
| `obligation` | one family of `#std/obligations` it `applies` (Verified, Served, Applied, Reviewed, Checked, Ruled, Safe, Preceded, Identified, Published; `#data/obligations`: Migrated), its `params` (typed by the family's rule; a node of the graph where it reads one: `by: [Preview]`), what a gap weighs (`gaps`: `Severity.error` keeps the shipment, `Severity.warning` says it), why (`serves`) | — |
| `policy` | a way of working: its `obligations`, one per family | — |

What a shipment must prove is derived, not listed (g68): its policy's obligations read what it reaches (the artefacts
it ships, what produces them, what its programs wire in their environments; a library frozen at a version is left out,
its release covers it, which the library's own shipment of a version proved) and give the nodes to prove, each with the reached node that brought it in, and the gaps
(reached code no scenario verifies, data nothing reviews). A decision the shipment itself applies is not one of its
obligations: the shipment is its evidence, and each would wait for the other. Do not list in `requires` what the policy derives:
`docs/pipelines.md` shows why each step is there. Every shipment also proves the **foundations**, which no policy
chooses: no literal in a body, no value nobody decided, no error of the graph; `trame ship` refuses on them first. A
gap the obligation weighs as an error is an error of the graph: it stops what assembles and delivers, as any error does
(an obligation unknown, evidence awaited, only keeps the shipment). A shipment may follow others (C2, g103): an
obligation of the family `Preceded` names them (`params: { by: [Preview] }`, several if need be), and each one that
ships an artefact the shipment ships must have shipped it first, the same file as it was last built; an artefact none of
them ships is a gap. `trame ship` promotes such an artefact instead of building it again (the file as it is must be the
one last built, which they shipped), and once deployed records on each artefact which shipment shipped it, as which
file. Only a deployment recorded in the repository counts for now: a stage shipped on GitHub comes back with D2. A new family is a requirement of
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
by hand, and never record evidence in someone else's name: attribute what you run to yourself. An agent gives
evidence for one of a role's people only under a delegation of that role still in force (C4, g115): `trame evidence
<check> passed --by lea --for karim` records it as karim's, `through: ["lea"]` sealed with it (as OAuth's token exchange
names who acts, RFC 8693); without the delegation, or once its day is past, it is refused; `notAuthor` holds for both.
`trame ship --for` names the person a shipment is given for the same way. A delegation is decided, frozen by a
publication; one without a day, or for someone who does not hold the role, is an error, one past its day a warning.
How a runner of GitHub signs comes with D2. `docs/owners.md` says who
holds each role and, for each piece of evidence a role awaits, the command that gives it.

**A change reaches main by a pull request** (D1, g109, ci 0.5.0). The merge into main is a shipment of each project,
`IntoMain` (target `main`), which ships the project's version (an artefact `version: true`, all its code) and follows
its policy (`MergeMode`): a project that publishes applies `Published` (a part of a declaration people decide that is
not published yet is a gap), so `trame publish` runs in the branch, before the pull request. A library's check is its
`NextVersion`. Each project writes, with ci's `GitHubWorkflow`, the workflow that checks a pull request: its settings
(a decision) say `on: { pullRequests: ["main"] }`, the `job` (the name of the check the repository requires) and
`pullRequest: { review, merge }`: the review of the branch written in the pull request (one comment per project,
against the lock of main), and a word of `MergeWays` (`onceItHoldsUnlessDecided`: the workflow keeps GitHub from
merging a pull request that changes a `trame.lock`; a person merges it). A file written names, at its top, the nodes
it comes from (the artefact, the decision of its settings, the file that declares them: g110, ci 0.7.0); a workflow's
name says its job. The repository's settings are a decision of Trame's graph (`MainBranch`, std's `RepositorySettings`:
the checks, up to date or not, the approvals, the merge method, the automatic merge, merged branches deleted, the
pages), applied by a shipment of Trame (`RepositorySet`): the check `RepositoryRead` reads the repository through std's
port `RepositoryApi` (GitHub's command line on the machine), then the program `apply-repository-settings` sets it and
reads it back, failing on each part that still differs. An administrator of the repository ships it, with their own
token: `./trame.sh ship RepositorySet --by <name>`; `--dry-run` only reads it and says what differs. Work on a branch,
then `./trame.sh pull-request "Title" ["What it changes"] --env Local` (`--env Session` in a session of Claude Code,
whose proxy refuses GitHub's GraphQL): std's command, which Trame takes (g117), pushes the branch, opens its pull request
into main (or finds the one open), says which projects it changes, and asks GitHub to merge it once it holds unless it
changes a lock of the repository's projects (decision `RepositoryProjects`); otherwise its owner reads the review (`gh
pr view <n> --comments`), then merges it with `./trame.sh merge [<n>] --env Local|Session` (std's command): refused
while a check has not passed, it says whose decisions the pull request changes, merges it by the method decided, then
checks main out as the repository has it. Never call `gh` to open or merge a pull request by hand.

A file that runs a shipment elsewhere (a workflow of GitHub Actions, a Bash script) is an `artifact` produced by a writer
of the library `ci` (`GitHubWorkflow`, `ShellScript`), naming the shipment it `runs`, its `settings` (a decision) and
what that place makes available once shipped (`publishes`): the engine computes the plan of the run from the graph, the
writer only gives it a form. What is published, how long it is kept, whether the evidence is kept: the graph says it, a
writer never decides it. Never write such a file by hand; a new place to run is a new writer in `ci`, with its examples.

The programs of the SDLC are a component of the project (its exposure `ProgramCommands` from `#std/tooling`, the first
argument naming the command), whose entry points use the ports `Files`, `HeadlessBrowser` and `RepositoryApi`; a binding
chooses their machine realizations (`CommandsInTheEngine`, `MachineFiles`, `PlaywrightBrowser`, `GitHubCliRepository`)
for the shipment's environment, and another their memory realizations for the scenarios that test them. They are the
project's commands (E3, g116): `./trame.sh <command>` runs one, its component assembled for its environment (`--env`
when it has several), then its program run with the rest of the line, as `trame ship` runs a check; `./trame.sh help`
lists them. Since g119 a program whose exposure is std's `CommandsInTheEngine` runs in the engine's process: the
engine imports it once, it offers its commands, and it reaches the engine's modules (the compilation, the views, the
laws, the lock, the assembly, the evidence, the engine's identity: `EngineModules`) through the prelude's
`runningEngine()`; `trame ship` runs the checks and deployments of such a program the same way. `NodeProgramCommands`
still runs a program as its own, reading Node's command line. A command of the project named like a command the engine
keeps (`init`, `doctor`, `help`, `manifest`: the decision `KeptCommands`), a view or another of its commands would
never run: an error of the graph (`command-hidden`). Named like any other command of the engine, it replaces it for
that project (g119): the engine asks the project first, and runs its own only when the project has none of that name. Never run an assembled program by its path (`npx tsx out/local/…`): type
its command. A library may offer commands too (std's `LibraryCommands`: `pull-request`, `propagate`; E3, g117): a
project runs one when a binding of its own chooses it (`follows: [Command]`), with a function of its own for each port
of its settings (std's `PullRequestSettings`, `PropagationSettings`: the project's decisions, never a value of the
library), and the realizations of its ports in the binding's environments; `trame <name>` assembles the library's
component with the commands chosen there and nothing else. Governance is rules: a `rule` applies a requirement of
`#std/rules` (`Reaches`, `NeverReaches`, `Linked`, `WithoutEffects`, `WordsOf`) with its `params` (a direction is a word
of the vocabulary `Directions`: `way: "in"`), and `serves` a goal or is applied by an ADR that says why. A broken rule is an error, unless the rule says `severity: "warning"` while the project gets there.

## 5. The rules the build enforces

- **Everything is in the graph.** A value, a name, a choice that a person could change lives in a node, with its meaning.
- **A value changes by amendment** (since g85): a kind says how each of its fields changes (`changes`: chosen, cited,
  code). A chosen value is amended (`trame amend`, or by hand with `amend(…)`) and approved by its owner; a cited one
  only with its new source; code in the code. Never edit a decided value in place: amend it. A value nobody decided
  (`TODO`) that was published is decided by an amendment too, dated the day it is decided. An amendment of a body
  (`body: (previous) => (deps) => …`) is composed with it wherever it runs: wired, and in a program assembled while it
  is in force (g105); a body is amended in the code, never from the page or the line.
- **A publication freezes what people decide** (D1, g108). `trame publish` freezes in `trame.lock`, part by part, what
  each declaration's kind says people decide: its fields chosen or cited, and what is *stated* (the title and
  description of a goal, an ADR, an assumption, a decision, a requirement; an ADR's reasons; an amendment, a repeal, an
  approval whole). Code stays free, held by what verifies it: a function's body, an implementation, an entry point, a
  scenario, a binding. A frozen part changed is an error naming how it changes: an amendment for a value, a new node
  that repeals it for a statement; `--migrate "why"` publishes again a form (a statement reworded, a declaration
  published before its parts were), never a value. A project shows it publishes by applying `Published` in the policy
  of the shipment that merges into main: a part not published yet is then a gap. The example and Poselia publish;
  Trame, std and the libraries will once the plan is done.
- **A value holds at every date** (C5, g106). Only an amendment has an end (`until`); the day after, its target is as
  its declaration and the amendments then in force make it. An amendment that ends over a value nobody decided is an
  error to that value's owner, now; the amendment's owner is warned as its end nears (`LanguageSettings.amendment`). A
  program assembled before a dated change that reaches it switches at that day: the assembly compiles the graph at each
  such day and the program answers by the day (`TRAME_TODAY`, or today's in UTC). Try the other side with
  `TRAME_TODAY=<day>` on the program.
- **Graph or data.** What the project decides and ships with a version lives in the graph; what the product writes while
  it runs (for its users, or for the people of the project through entry points of their own: a platform service) is an
  entity (section 5c). A value people steer while the product runs is never a decision.
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
- **An extension point takes add-ons** (since g120): a port declared with `extensionPoint<C>({ … })` is answered by every
  realization one choice makes in an environment, in the order that choice writes them (pattern `Plugin`); what depends
  on it receives the list (`readonly C[]`), none when nothing is chosen, each add-on whole, with every effect its
  contract declares; two choices that extend the same point in one environment are an error
  (`extension-order-ambiguous`). The commands the engine keeps take add-ons this way: `trame doctor` asks what the
  realizations of std's `MachineNeeds` ask (Trame: `PlaywrightBrowserInstalled`), `trame init` calls those of
  `ProjectRepairs`; each runs whatever the others did, and the command ends in failure saying which failed. A check
  that names the command (`command: EngineCommand.doctor`, g122) proves the project's add-ons: `trame ship` runs the
  command. The engine's own questions are add-ons too, of its extension point `EngineNeeds`, chosen in Trame's graph
  (`EngineQuestions`) and assembled into it: asked always, even where no graph loads. A provider's add-on lives with
  its adapter and its package (Playwright's with std's `PlaywrightBrowser`); a question a command needs moves with the
  command; a question of the machine that belongs to no provider is in `libs/machine` (`SystemSupported`,
  `NodeRecentEnough`, `GitInstalled`), reading what the project requires through its port `WhatTheMachineRuns`, which
  the project realizes with its decision (Trame: `OurMachines`).
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

A library is a Trame project another project imports (ADR "A library is a Trame project, imported by path"). The
project names it in its `trame.json` (`"libraries": { "std": "../std" }`, or `{ "path": "../std", "version": "0.1.0" }`
for a frozen version) and imports its nodes by name (`import { Counts } from "#std/algebra"`); `./trame.sh manifest`
writes where the name leads into `package.json`. A path into a library is refused. A project's own name (its
directory's, which `trame release` publishes it under) leads to its own sources, in the engine and the manifest (g114):
a library it imports may name it (team's workflow is written by ci, and ci imports team). `./trame.sh release 0.1.0 "what" --by <name>`,
run in a library, first ships the library's version through its own graph (since g101: the shipment that ships an
artefact `version: true`, `NextVersion` in std, ci and geometry; its policy derives from all the library's code, std's proves its
functions verified, its requirements served, its decisions applied, its rules held, its packages safe), freezes nothing
while it does not hold, then freezes the version under `releases/0.1.0/` with its documents. The record of a release is
not part of the version it records (g102): once released, the version as it is still holds. Then, at the repository's
root, `./trame.sh propagate --by <name> --env Local` carries it across the projects the decision `RepositoryProjects`
names (std's command, g117): each after the libraries it imports and what it reads, upgraded, its workflow written again
where a reference moved, its documents built (the example at `TestDay`); it stops at the first step that fails. In the project's graph its modules take the library's name
(`std/algebra.Counts`): the project's nodes depend on them, the kinds read them, but the project's documents only link
to the library's, its issues are counted apart (the index, the build summary) and its lock leaves them out. A library
builds its own documents (`cd std && ../trame.sh build`).

Before writing a structure, a standard or a pattern, look in `std/` (its `README.md` lists its modules): a generic
node goes there, with `serves` naming the library's goal; what only one product needs stays in that product.

## 5c. The data a product keeps (`libs/data`)

What a product keeps outside the graph from one version to the next is described once, as an `entity` (ADR "An entity
is described once", C3): its `fields`, each with how it is stored (`stored.text()`, `stored.number(SwissFrancs)`,
`stored.word(Chargers)`, `stored.reference(KeptReservation)`, `stored.list(…)`, `stored.optional(…)`), its `key`, the
name it is kept under (`keptAs`), and the `changes` its owner decided since a version deployed (`renamed`, `dropped`,
`defaults`). `EntityOf<typeof KeptRefund>` is the type of a value; never write that type by hand.

- **A deployment keeps its description.** `trame ship` records, for a shipment that deploys, the description of each
  entity it reaches (since g104; only one that deploys, g105). From each version kept, the entity computes the
  migration to its description as it is: a field added optional (or with a default), renamed, dropped as said, made
  optional, a word added to its vocabulary. What it cannot decide (a field added without a value, a type changed, a
  field gone unsaid, a key changed) is a hole of its owner, and an obligation of the family `Migrated` keeps the
  shipment on it.
- **Wired, an entity gives its model**: its fields as stored, their names as values (`refunds.names.reference`), its
  version, its migrations. The code names the entity, never a table, a column or a key in a text.
- **Kept whole** (one value: a person's breath): the port `Documents`, `DocumentsInPreferences` keeps it in std's
  preferences as JSON with its version; read migrated and checked, or nothing.
- **Kept as many** (records): the port `Records` (`prepare`, `find`, `insert`, `update`, `count`, `transaction`);
  `RecordsInSql` over the ports `SqlDatabase` (a database: the library's `SqliteInMemory` for scenarios, a product's
  own in a file or a server) and `TableDialect` (`SqliteTables`, `PostgresTables`), what a new table starts with by
  `InitialRecords` (`StartEmpty`, or the product's). A deployment runs an entry point of the SDLC that `prepare`s each
  entity (the example's `prepare-storage`): the table is created, or migrated from the version it holds (kept in the
  table `data_versions`); a store also makes it ready the first time it is used where nothing deployed it.
- **What a new table starts with** is the entity's `seed` (typed by its fields), where a binding chooses
  `SeedOfTheEntity` (a scenario's database, a developer's), `StartEmpty` elsewhere (data 0.3.0). A deployment keeps the
  seed's fingerprint; a seed changed since the last deployment is a warning to the owner: a table made before keeps the
  records it started with.
- A shipment's policy applies `Migrated` (`gaps: Severity.error`): what people kept is never lost by a version.
- **Whose records** (data 0.4.0): an entity that keeps what belongs to someone says by which field (`ownedBy: { person:
  "driver" }`, or `tenant`). An entry point that reaches it must be for an audience carrying that identity (section 5d).

## 5d. Who calls an entry point (C6, g107)

Every entry point says who calls it (`for:`); one that does not is an error. The audience is declared, where it may be
called from is derived from its trigger (an HTTP route: the network; a command: the machine; a page: the device; a
schedule or a message: nobody, the platform calls it). `docs/callers.md` (view `callers`) shows each one.

| Audience | Who | Where |
|---|---|---|
| `Anyone` (`#std/access`) | whoever reaches it, nobody known: a person at a terminal, a public page | carries no identity |
| `TheSystem` | the platform itself | a schedule or a message only: called by a person, an error |
| `TheOperators` | the project's people, through the SDLC (deployment, migrations) | reaches every owner's records (`everyOwner`), as a role that bypasses row-level security |
| the product's own | `audience({ owner, carries: [Identity.person], serves })` | carries what identifies each caller (`person`, `tenant`) |

- An entry point that reaches, in one of its environments, an entity owned by a person (or a tenant) is for an audience
  that carries that identity, or `everyOwner`: otherwise an error, naming the entity and the environment.
- An audience that carries an identity is a promise: nothing identifies it yet (C7 brings `libs/access`: how a caller is
  identified, and the scope each body receives, as PostgreSQL's row-level security). Until then its owner is warned, and
  the family `Identified` makes it a gap of a shipment (the example weighs it a warning, std's and Trame's policies an
  error: they offer none).
- A webhook is called by another system that identifies itself: an audience of its own that carries an identity, never
  `TheSystem`.

## 6. Writing kinds and views

**A new kind is the last resort.** A kind is a type of node: what a node can say, how its status is computed, what the
engine does with it. Adding one can weaken a guarantee unseen and makes projects diverge, so:

1. **Compose first.** Try the kinds that exist (a requirement applied by a rule, an obligation of a family, a decision,
   a dataset, a check) and say exactly what they cannot do: a status nobody can compute, a link nobody can express,
   evidence nobody can require.
2. **A kind lives in a library, never in a product**: Trame's own, or a library of a domain or of hygiene, versioned
   and shipped through its own graph; a project that imports the library gets its kinds. A library carries them in
   `src/kinds` and `src/views` (found by convention, g104: no `trame.json` entry); such a kind names itself from its
   catalog of words (`keysOf({ entity: say.entityMeaning() })`, the words a body in `src/kinds/words.ts`), and a
   version of the library holds them in its code (g105).
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
- **Holes**: a hole names its code first, then what it says and its owner: `hole.warning(HoleCode.ownerMissing,
  say.ownerMissing(), self.owner)`. A new problem gets a new word of `HoleCode` (a library's kind, a word of its own
  catalog: `say.entityCodeReseeded()`).
- **Laws**: every kind answers on any value without crashing, names an owner for a blocking hole, says what is wrong by
  its code, says nothing held or violated without evidence, gives the same answer twice, settles claims whatever their
  order. `./trame.sh test-kinds` plays them on drawn values; a kind that breaks one refuses the build.
- Destructure instead of indexing (`const [, second] = xs`), test types with `g.lib.values`, name a wired value by the
  node's `ref`, not by a text.

## 7. Changing the engine: generations

Kinds, views and the prelude are shared live by the generations that share the language; the engine is frozen in
each generation. So the order matters:

1. **What the language needs from the engine comes first**: change the engine's graph (`src/`, its bodies) and the
   kernel's types, leave the kinds as they are, and advance: `./trame.sh advance --by <name> [--accept]` (Trame's own
   command, g118: the generation in place assembles the candidate and Trame's SDLC, then the candidate ships
   `NextGeneration`, whose step `promote` builds Trame's libraries, the example and Trame with the generation in place
   and with the candidate, checks they are identical, reassembles to a fixed point, plays the laws, and replays older
   generations). `--promote "what changes"` freezes it and moves the pins of Trame and the example; then `./trame.sh
   propagate --by <name>` moves every other project to it.
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
- The page: export it and open it in Chromium to see it runs without errors: in Trame, `./trame.sh export trame-page.html`
  then `./trame.sh open-graph-page`, its own program (g116).

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
- A rule is a body, the only form since B2 (g97): `body: ({ … }) => (x) => …` with its `deps`; an amendment of it
  patches `body` with `(previous) => (deps) => …`. Called before the engine wired it, a rule says so rather than run.
- `trame manifest` compiles the graph with the configuration it has: code that uses what a new version of a library
  brings (std 0.14.0's millisecond) refuses it. Move the reference and run the manifest first, then write the code.
- `trame manifest` keeps the lockfile with what it writes (g100): when `package-lock.json` does not install what
  `package.json` names, it installs them (port `PackageInstalls`, npm). Commit the lockfile: a CI installs with `npm ci`,
  which refuses one out of step (Poselia's CI failed from 1 to 3 November for this).
- An engine before g100 has no `trame upgrade`: move a project to g100 once by running g100's program itself
  (`node <tsx> generations/g100/out/local/trame-cli.ts upgrade`), then `./trame.sh upgrade` runs it.
- The files that run a shipment elsewhere place a project in the repository from its generation's real path (g98):
  reached through `.trame/trame`, two directories above the link would be the project itself.
- Trame's scenarios run in a process that has std's modules loaded already (Trame imports std): a scenario that
  compiles std reads its graph empty. The release scenario enters ci instead.
- In the scenarios no engine runs (the program named is the command a person types): what a ship records there names
  no engine, and is judged by none (g101); on a machine, the engine that ships says which it is.
- A project run from the registry (geometry) keeps the language its generation was published with: a change of a kind
  reaches it only with the next generation published, while the projects that pin a generation by its path read the
  language as it is (the record of a release left out of a version reached std and ci at once, geometry with g102).
- A scenario that ships for real in memory answers each program the shipment starts: one answer per check a program
  runs and per entry point that deploys (`processLog.answer`), or the scenario fails on the first one left unanswered.
- An obligation whose `params` name a node (`by: [Preview]`) is declared after that node in its module, as a
  scenario's `deps`: the module reads them when it loads.
- Before g105, an amendment of a body was set in place of the body: from the day it came into force, the rule gave a
  function instead of an answer (the example's refund rule, violated from 1 November, unseen at the day of the
  scenarios), and a program could not be assembled. Build at the real date too.
- A library's scenario that wires a realization directly (`deps: { postgres: PostgresTables }`) is an error in a project
  that chooses it by a binding ("reached directly, not through its port"): read it through its port, in an environment
  of the library's own (data's `PostgresStatementsOnly`).
- A component that names no environment is assembled in its own project's environments only: a library's `Test`
  is not one (g104's component kind asked a product to realize std's and data's).
- An entity wired by a scenario of a module read before the entity's is wired before the graph evaluates it: its model
  is computed when it is given (data 0.1.1).
- A table made ready in a transaction that fails is gone with it: the store makes it ready again (data 0.2.0).
- Before g106, a program kept the values of the day it was assembled: the example's launch of the ultra chargers would
  have gone on after 31 December until someone assembled it again. The days a program switches are those of the
  amendments that reach it; a dated change of what a component is given (its exposure) or of what a rule reads by name
  is refused: assemble again at that date.
- An entity cannot name the environments where it is seeded: they live with the infrastructure, which imports the
  entities, and two modules that import each other fail at load. Where a table starts with its seed is a binding's
  choice (`SeedOfTheEntity`).
- A scenario's step names are the plan's (`cancelReservation`, its first letter lowered): a program's text names them so.
- A release holds no manifest (g96): in its library, the library's says it is made of ES modules and where the
  language is; published, the registry gives it one that says only the first, and its reader leads the language.
- Playwright drives the Chromium its own version names: a machine whose browsers moved (`/opt/pw-browsers` holding
  `chromium_headless_shell-1243`) refuses a check run by an older one ("Executable doesn't exist at
  …headless_shell-1194"), and `trame doctor` does not see it. Move std's `PlaywrightPackage` to the version whose
  browser the machine has (1.63.0 since std 0.18.1), release std, then upgrade the projects; never install browsers.
- A project Trame's scenarios compile (the example) imports a library they release (ci) at a frozen version: imported
  as it is, its modules are loaded by the example's compilation, and the release of the library reads its graph empty
  (no shipment of its version: nothing shipped first).
- A merge GitHub makes for a workflow's token starts no other workflow: the automatic merge is asked by a person
  (`gh pr merge --auto`), and a workflow only takes it back (`--disable-auto`) when a pull request changes what people
  decided.
- A project that runs from the registry of a machine (geometry) has no check on GitHub: a runner has no registry.
- A view is named apart from the modules: a view `access` wrote `docs/access.md` over the example's module of that name
  (it is `callers`).
- Before g107 a version (`version: true`) read in a project that imports its library held the project's nodes: std's
  shipment, in the example, found the example's audience as its own gap. A version holds its own project's nodes.
- `trame upgrade` compiles the graph with the version it has: when the newer version of a library refuses it (std
  0.18.0 requires `for` on each entry point), move the references by hand (`src/packages.ts`, `trame.json`,
  `package.json`, the links under `.trame`), run the manifest, then write the code.
- A published declaration the language changes the form of (a type renamed, a rule rewritten as a body, a kind that
  freezes a new part) is an error of `trame.lock`: `trame publish --migrate "why"` publishes it again, and only it.
- A change of what `trame.lock` holds (g108: the parts of a declaration, no longer its whole text) is read wrongly by the
  generation in place during an advance: the example's documents differ, accepted with `--accept`. Publish the example
  again with the candidate first (`npx tsx ../../out/local/trame-cli.ts publish --migrate "why"`), or Trame's scenarios
  find it out of date.
- TypeScript keeps the path of a link: reached through `.trame/trame`, the kernel would be a second file whose types never
  match the first. The engine leads `#trame/*` to the files where they are (g88); a `tsconfig.json` that checks a
  project by itself needs the same `paths` (Trame's has them).
- A library frozen at a version brings its packages from its own installation (std's `node_modules`): `trame manifest`
  installs only those of the project and of the libraries it imports as they are.
- `Quantity<…>` is a number: a value from an operation (`a * b`) has no quantity, so it never mixes; give it one by
  its constructor when it is one (`chf(x)`). The prelude has no unit (B2): `s`, `min`, `h`, `pct` are std's, `chf` the
  example's, and a body that meets JavaScript's clocks receives `Time` (`time.in.millisecond(d)`, `time.millisecond(n)`).
- An amendment the code is written against has no date (`from`): dated today, a build at an earlier day (the day of the
  scenarios, which deliver Poselia's page) reads the code without it, and its criteria fail.
- A program assembled for elsewhere (a page) wires a value that is not JSON (a quantity's units) from its declaration,
  through the frozen prelude: a kind's `provide` reads `self.field(…)` there, and nothing of the graph (`ctx.g` is absent).
- The prelude's kind API is the API of every library's kinds, frozen versions included: when it changes (g111: a hole
  names its code first), a frozen version that calls it the old way refuses the project that imports it (Poselia on
  data 0.4.0). Release the library with its kinds moved (data 0.5.0), move the project's reference by hand, then
  advance. A catalog's message gives a text or pieces of one, never an object: one message per word.
- `out/local/trame-cli.ts` reads the bodies as they are but wires them as they were assembled: after giving an entry
  point a new dependency, `./trame.sh assemble TrameCli --env Local` before running a command through it.
- A project's command named like a command the generation in place still has (Trame's `advance`, while the engine's
  step was renamed `promote` in g118) is an error for that generation, which then refuses to assemble the candidate:
  set the project's command aside until the new generation is promoted, then put it back. Since g119 this holds only
  for the commands the engine keeps; any other is replaced by the project's.
- A program of `CommandsInTheEngine` runs only in an engine: run by its path, it finds none and fails. It is imported
  once per process, so its commands are offered once: what its bodies keep lives as long as the engine's process.
- A library's version that uses a type the kernel just gained (std 0.25.0's extension points, `RealizedBy`) reaches a
  project run from the registry (geometry) only once a generation that carries it is published: advance first (g121),
  then release the library. An upgrade that moves the generation and the library at once compiles with the language
  it had: move the language's reference by hand (`src/packages.ts`, the link `.trame/trame`), then `trame manifest`.
- What the engine allows a body to reach is std's table of the platform as the engine was frozen with it (g123 read
  std 0.26.0's, which describes `process.versions`): a library that needs a line added waits for a generation.
- An error of Trame's graph refuses the assembly of the library's commands it chooses, `propagate` included: move
  Trame's own reference first (`./trame.sh upgrade std`), then propagate.
- Before g118, an upgrade that moved a project to a generation of the registry (geometry) failed once: the manifest
  was run again by the engine that was leaving. The engine now starts again through the launcher that started it
  (`TRAME_LAUNCHER`), which installs the new generation first.

## 10. Reading further

The README (the why of each part), `generations/README.md` (generations and archived languages), `docs/adrs.md` (every
architecture decision in force), `docs/literals.md` (the catalogue of literals), and the example's `docs/`.
