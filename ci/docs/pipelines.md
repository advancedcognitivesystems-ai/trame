# Pipelines

*What trame ship runs for each shipment on 4 November 2026, in order, as the engine computes it: its artefacts produced, the checks a program makes, the obligations to prove, the programs that deploy it, the dossier.*

<a id="NextVersion"></a>

## The next version

> **The next version does not ship yet: 4 of 5 obligations hold.**

For the target version.

```mermaid
flowchart TB
  n0["The library of writers<br/><small>Artefact</small>"]:::unknown
  n1["A workflow of GitHub Actions<br/><small>Syntax element</small>"]:::held
  n2["A script of Bash<br/><small>Syntax element</small>"]:::held
  n3["A YAML document<br/><small>Syntax element</small>"]:::held
  n4["The next version<br/><small>Shipment</small>"]:::unknown
  n1 -->|Depends on| n3
  n4 -->|Ships| n0
  n4 -->|Requires| n3
  n4 -->|Requires| n2
  n4 -->|Requires| n1
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The library of writers](sdlc.md#TheLibrary) · `src` | — | — | **unknown** |  |
| 2 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 3 | prove | [The library of writers](sdlc.md#TheLibrary) | — | the shipment | **unknown** |  |
| 4 | prove | [A workflow of GitHub Actions](github.md#GitHubWorkflow) | — | the shipment | **held** |  |
| 5 | prove | [A script of Bash](shell.md#ShellScript) | — | the shipment | **held** |  |
| 6 | prove | [A YAML document](yaml.md#YamlDocument) | — | the shipment | **held** |  |
| 7 | record | [The next version](sdlc.md#NextVersion) | — | — | **unknown** |  |

`trame ship NextVersion --by <name>`
