# Owners

*What each person must decide, settle or watch on 25 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 5 | 19 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `port-unrealized` | No realization, in any environment | [What the machine runs](machine.md#WhatTheMachineRuns) | trame |  |
| warning | `shipment-awaits` | To ship: The questions of the machine is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-not-built` | Not built yet: trame ship builds it | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | trame |  |
| warning | `shipment-awaits` | To ship: The pull requests' workflow is unknown | [The files that run it elsewhere](sdlc.md#RunnersWritten) | trame |  |
| warning | `artifact-not-built` | Not built yet: trame ship builds it | [The questions of the machine](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Git, installed](machine.md#GitInstalled) | Implementation |  |
| [The language the questions speak in.](machine.md#MachineLanguage) | Decision |  |
| [What the questions say](machine.md#MachineWords) | Message catalog |  |
| [Node's platforms](machine.md#NodePlatforms) | Standard |  |
| [Node, recent enough](machine.md#NodeRecentEnough) | Implementation |  |
| [The system, one the project runs on](machine.md#SystemSupported) | Implementation |  |
| [What the machine runs](machine.md#WhatTheMachineRuns) | Port |  |
| [The library of continuous integration](packages.md#ContinuousIntegration) | Package |  |
| [Trame](packages.md#Language) | Package |  |
| [The people of the repository](packages.md#People) | Package |  |
| [std](packages.md#StandardLibrary) | Package |  |
| [The machine is asked once](product.md#AskedOnce) | Goal |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [Its packages safe](sdlc.md#PackagesSafe) | Obligation |  |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **unknown** |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **unknown** |
| [The questions of the machine](sdlc.md#TheLibrary) | Artefact | **unknown** |
| [How a version is made](sdlc.md#VersionMode) | Policy |  |
