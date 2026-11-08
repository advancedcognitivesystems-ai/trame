# Pipelines

*What trame ship runs for each shipment on 8 November 2026, in order, as the engine computes it: its artefacts produced, the checks a program makes, the obligations to prove, the programs that deploy it, the dossier.*

<a id="NextVersion"></a>

## The next version

> **The next version does not ship yet: 21 of 22 obligations hold.**

For the target version.

```mermaid
flowchart TB
  n0["The standard library<br/><small>Artefact</small>"]:::unknown
  n1["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
  n2["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  n3["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
  n4["Commands are made for each effect<br/><small>Scenario</small>"]:::held
  n5["The device, in memory<br/><small>Scenario</small>"]:::held
  n6["The tooling, in memory<br/><small>Scenario</small>"]:::held
  n7["Playwright<br/><small>Package</small>"]:::held
  n8["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
  n9["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
  n10["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
  n11["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
  n12["The project's rules hold<br/><small>Requirement</small>"]:::held
  n13["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
  n14["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
  n15["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
  n16["As many links as asked<br/><small>Requirement</small>"]:::held
  n17["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
  n18["A node reaches what it must<br/><small>Requirement</small>"]:::held
  n19["Effects a node may not have<br/><small>Requirement</small>"]:::held
  n20["Words of a vocabulary<br/><small>Requirement</small>"]:::held
  n21["The next version<br/><small>Shipment</small>"]:::unknown
  n21 -->|Ships| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The standard library](sdlc.md#TheLibrary) · `src` | — | — | **unknown** | 4 November 2026 by claude  |
| 2 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 3 | prove | [The standard library](sdlc.md#TheLibrary) | — | the shipment | **unknown** | 4 November 2026 by claude  |
| 4 | prove | [The device's services, as ports](platform.md#DeviceAsPorts) | — | [Its decisions applied](sdlc.md#DecisionsApplied) via [Animation frames](platform.md#AnimationFrames) | **held** |  |
| 5 | prove | [The SDLC's tooling is realized once](tooling.md#ToolingAsPorts) | — | [Its decisions applied](sdlc.md#DecisionsApplied) via [A browser kept in memory](tooling.md#BrowserInMemory) | **held** |  |
| 6 | prove | [Seeded draws keep their promise](scenarios.md#DrawsKeepTheirPromise) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [Seeded draws](algorithms.md#SeededDraws) | **held** |  |
| 7 | prove | [Commands are made for each effect](scenarios.md#CommandsMade) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [Commands](effects.md#Commands) | **held** |  |
| 8 | prove | [The device, in memory](scenarios.md#DeviceInMemory) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [The screen kept awake, in memory](platform.md#AwakeInMemory) | **held** |  |
| 9 | prove | [The tooling, in memory](scenarios.md#ToolingInMemory) | — | [Its functions verified](sdlc.md#FunctionsVerified) via [A browser kept in memory](tooling.md#BrowserInMemory) | **held** |  |
| 10 | prove | [Playwright](tooling.md#PlaywrightPackage) | — | [Its packages safe](sdlc.md#PackagesSafe) via [Chromium, driven by Playwright](tooling.md#PlaywrightBrowser) | **held** | 27 October 2026 by   |
| 11 | prove | [The decisions a shipment applies hold](obligations.md#Applied) | — | [Its requirements held](sdlc.md#RequirementsServed) | **held** |  |
| 12 | prove | [The artefacts a shipment ships are checked](obligations.md#Checked) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 13 | prove | [The artefacts a shipment ships were shipped first by those that precede it](obligations.md#Preceded) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 14 | prove | [The data a shipment carries is reviewed](obligations.md#Reviewed) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 15 | prove | [The project's rules hold](obligations.md#Ruled) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 16 | prove | [The packages a shipment uses are safe](obligations.md#Safe) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 17 | prove | [The product a shipment serves holds](obligations.md#Served) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 18 | prove | [The code a shipment ships is verified](obligations.md#Verified) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 19 | prove | [As many links as asked](rules.md#Linked) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 20 | prove | [A node never reaches what it must not](rules.md#NeverReaches) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 21 | prove | [A node reaches what it must](rules.md#Reaches) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 22 | prove | [Effects a node may not have](rules.md#WithoutEffects) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 23 | prove | [Words of a vocabulary](rules.md#WordsOf) | — | [Its requirements held](sdlc.md#RequirementsServed) via [The decisions a shipment applies hold](obligations.md#Applied) | **held** |  |
| 24 | record | [The next version](sdlc.md#NextVersion) | — | — | **unknown** | 4 November 2026 by claude `evidence/shipments/NextVersion-2026-11-04-efe47436.json` |

`trame ship NextVersion --by <name>`
