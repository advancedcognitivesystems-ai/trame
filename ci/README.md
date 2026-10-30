# Continuous integration

Writers that run a shipment elsewhere than here: on GitHub Actions, or from a script of Bash on another machine. A
project's graph says how a version of it ships (its shipments, their artefacts, checks, reviews, deployments); `trame
ship` runs it here. To run it elsewhere, the engine computes the **plan of the run** from the graph (since g65): where
the project is in Trame's repository, the directories whose packages are installed from their lockfile (Trame's, the
libraries', the project's), the words that install the pinned generation's own packages when it has its own, what the
packages the shipment's programs use ask once installed (Playwright: its Chromium, as its node in std says), the words
that ship, and what to keep once it ran. A writer of this library only gives that plan a form. Nobody writes the file by
hand, so it never says what the graph does not. Since g70 the evidence that a file was written carries the code it was
written from (the writer, the shipment it runs, its settings): change one, and the file is to write again.

It is a Trame project of its own, like `std/`: its graph is `src/`, it pins a generation in `trame.json`, it writes its
documents in `docs/`, and it freezes versions under `releases/`.

## Using it

A project imports it at a version (`"libraries": { "ci": { "path": "../../ci", "version": "0.1.0" } }`, then `trame
manifest`), and declares the file as an artefact written by a writer, naming the shipment it runs and the settings it is
given:

```ts
import { GitHubWorkflow, type WorkflowSettings } from "#ci/github"
import { ShellScript } from "#ci/shell"

export const PreviewOnGitHub = decision<WorkflowSettings>({
  owner: "ghalaax",
  value: { on: { manual: true, branches: ["main"] }, runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30, evidence: { days: 90 } } },
})
export const PreviewWorkflow = artifact({
  owner: "ghalaax", path: "../../.github/workflows/poselia-preview.yml", media: "application/yaml",
  producedBy: GitHubWorkflow, runs: Preview, settings: PreviewOnGitHub, publishes: [PageFile],
})
export const PreviewScript = artifact({ owner: "ghalaax", path: "scripts/ship-preview.sh", producedBy: ShellScript, runs: Preview })
export const RunnersWritten = shipment({ owner: "ghalaax", target: "repository", ships: [PreviewWorkflow, PreviewScript] })
```

`trame ship RunnersWritten --by <name>` writes them, fingerprints them and keeps the dossier; the view *pipelines* of the
project names them under the shipment they run.

What a workflow does with artefacts of GitHub is the project's choice, never a default: it publishes only what its
artefact `publishes` in the graph (on GitHub, that is the deployment), kept as many days as its settings say, and records
the address of each as evidence (`trame evidence <artefact> passed --url …`), attributed to the person who started it; it
keeps the evidence as a second artefact only when its settings say `evidence`, whatever the shipment answered. A
workflow whose artefact publishes nothing and whose settings keep no evidence uploads nothing (the writer's second
example).

## Modules

| Module | Holds |
|---|---|
| `product` | What the library is for: a shipment runs elsewhere as it runs here; each place is a writer |
| `yaml` | The marks of YAML 1.2.2 in the block style, and a YAML document written from nodes (mappings in order, sequences, texts quoted only when YAML would read them otherwise, numbers, literal blocks) |
| `npm` | How a runner installs a directory's packages: `npm ci` |
| `github` | The words of a workflow of GitHub Actions, the actions it uses at their major versions (a decision), the settings a project gives a workflow (what starts it, the machine, Node.js, how long GitHub keeps what it publishes, whether it keeps the evidence and how long), and the writer of the workflow: checkout, Node.js, the installs and preparations of the plan, trame ship with the person who started it, then what the graph says it publishes as an artefact of GitHub with its address recorded as evidence, and the evidence kept if the settings say so |
| `shell` | The marks of a Bash script, and the writer of the script: the person's name as its first argument (it stops without one), the installs and preparations of the plan from the repository's root, then trame ship from the project |

Each writer is a syntax element: its examples (a plan, settings, and the file it must write) are played at every build.
A new place (GitLab CI, another service) is a new writer here; neither the plan nor the engine changes.

## Building it

```
cd ci && ../trame.sh build
../trame.sh release 0.2.0 "what changes"
```
