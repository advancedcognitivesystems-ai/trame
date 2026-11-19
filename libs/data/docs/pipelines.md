# Pipelines

*What trame ship runs for each shipment on 19 November 2026, in order, as the engine computes it: its artefacts produced, the checks a program makes, the obligations to prove, the programs that deploy it, the dossier.*

<a id="NextVersion"></a>

## The next version

> **The next version does not ship yet: 7 of 8 obligations hold.**

For the target version.

Run elsewhere by [The pull requests' workflow](sdlc.md#PullRequestWorkflow), written from this pipeline by trame ship.

```mermaid
flowchart TB
  n0["The library of data<br/><small>Artefact</small>"]:::unknown
  n1["An entity is described once<br/><small>Architecture decision</small>"]:::held
  n2["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
  n3["Records kept in SQL<br/><small>Scenario</small>"]:::held
  n4["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
  n5["Records seeded<br/><small>Scenario</small>"]:::held
  n6["What a shipment stores migrates<br/><small>Requirement</small>"]:::held
  n7["The next version<br/><small>Shipment</small>"]:::unknown
  n1 -->|Applied by| n6
  n7 -->|Ships| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The library of data](sdlc.md#TheLibrary) · `src` | — | — | **unknown** | 19 November 2026 by claude  |
| 2 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 3 | prove | [The library of data](sdlc.md#TheLibrary) | — | the shipment | **unknown** | 19 November 2026 by claude  |
| 4 | prove | [An entity is described once](principles.md#DescribedOnce) | — | [Its decisions applied](sdlc.md#DecisionsApplied) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 5 | prove | [Documents kept in the preferences](scenarios.md#DocumentsKept) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 6 | prove | [Records kept in SQL](scenarios.md#RecordsKept) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 7 | prove | [PostgreSQL's statements](scenarios.md#PostgresStatements) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [PostgreSQL's tables](records.md#PostgresTables) | **held** |  |
| 8 | prove | [Records seeded](scenarios.md#RecordsSeeded) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [The records its entity starts with](records.md#SeedOfTheEntity) | **held** |  |
| 9 | prove | [What a shipment stores migrates](obligations.md#Migrated) | — | [Its requirements held](sdlc.md#RequirementsServed) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 10 | record | [The next version](sdlc.md#NextVersion) | — | — | **unknown** | 19 November 2026 by claude `evidence/shipments/NextVersion-2026-11-19-b4d7797a.json` |

`trame ship NextVersion --by <name>`

<a id="RunnersWritten"></a>

## The files that run it elsewhere

> **The files that run it elsewhere ships: every obligation holds.**

For the target repository.

```mermaid
flowchart TB
  n0["The pull requests' workflow<br/><small>Artefact</small>"]:::held
  n1["A workflow of GitHub Actions<br/><small>Syntax element</small>"]:::held
  n2["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
  n0 -->|Produced by| n1
  n2 -->|Ships| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) · `../../.github/workflows/data-pull-request.yml` | [A workflow of GitHub Actions](../.trame/ci/docs/github.md#GitHubWorkflow) | — | **held** | 19 November 2026 by claude  |
| 2 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 3 | prove | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | — | the shipment | **held** | 19 November 2026 by claude  |
| 4 | record | [The files that run it elsewhere](sdlc.md#RunnersWritten) | — | — | **held** | 19 November 2026 by claude `evidence/shipments/RunnersWritten-2026-11-19-6d1dfc48.json` |

`trame ship RunnersWritten --by <name>`
