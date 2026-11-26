# Owners

*What each person must decide, settle or watch on 26 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| ghalaax | 0 | 0 | 0 | 4 |
| trame | 0 | 0 | 2 | 9 |

<a id="ghalaax"></a>

## ghalaax

Nothing to decide or watch.

### Owns

| Node | Kind | State |
|---|---|---|
| [Claude](people.md#Claude) | Actor |  |
| [ghalaax](people.md#Ghalaax) | Actor |  |
| [The runner of GitHub Actions](people.md#GitHubRunner) | Actor |  |
| [Trame's team](people.md#Trame) | Actor |  |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `shipment-awaits` | To ship: The people of the repository is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The people of the repository](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [The library of continuous integration](packages.md#ContinuousIntegration) | Package |  |
| [Trame](packages.md#Language) | Package |  |
| [Who acts is declared once](product.md#DeclaredOnce) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **held** |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **held** |
| [The people of the repository](sdlc.md#TheLibrary) | Artefact | **unknown** |
