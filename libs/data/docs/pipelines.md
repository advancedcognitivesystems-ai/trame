# Pipelines

*What trame ship runs for each shipment on 9 November 2026, in order, as the engine computes it: its artefacts produced, the checks a program makes, the obligations to prove, the programs that deploy it, the dossier.*

<a id="NextVersion"></a>

## The next version

> **The next version does not ship yet: 4 of 5 obligations hold.**

For the target version.

```mermaid
flowchart TB
  n0["The library of data<br/><small>Artefact</small>"]:::unknown
  n1["An entity is described once<br/><small>Architecture decision</small>"]:::held
  n2["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
  n3["What a shipment stores migrates<br/><small>Requirement</small>"]:::held
  n4["The next version<br/><small>Shipment</small>"]:::unknown
  n1 -->|Applied by| n3
  n4 -->|Ships| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The library of data](sdlc.md#TheLibrary) · `src` | — | — | **unknown** | 9 November 2026 by claude  |
| 2 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 3 | prove | [The library of data](sdlc.md#TheLibrary) | — | the shipment | **unknown** | 9 November 2026 by claude  |
| 4 | prove | [An entity is described once](principles.md#DescribedOnce) | — | [Its decisions applied](sdlc.md#DecisionsApplied) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 5 | prove | [Documents kept in the preferences](scenarios.md#DocumentsKept) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 6 | prove | [What a shipment stores migrates](obligations.md#Migrated) | — | [Its requirements held](sdlc.md#RequirementsServed) via [A value of the description it is of](documents.md#Conforms) | **held** |  |
| 7 | record | [The next version](sdlc.md#NextVersion) | — | — | **unknown** | 9 November 2026 by claude `evidence/shipments/NextVersion-2026-11-09-ec198b2a.json` |

`trame ship NextVersion --by <name>`
