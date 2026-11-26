# Owners

*What each person must decide, settle or watch on 26 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 2 | 26 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `shipment-awaits` | To ship: The library of writers is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The library of writers](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [GitHub Actions](github.md#GitHubActions) | Standard |  |
| [A workflow of GitHub Actions](github.md#GitHubWorkflow) | Syntax element | **held** |
| [How a pull request is merged](github.md#MergeWays) | Vocabulary |  |
| [The actions a workflow uses](github.md#PinnedActions) | Decision |  |
| [npm](npm.md#Npm) | Standard |  |
| [Trame](packages.md#Language) | Package |  |
| [The people of the repository](packages.md#People) | Package |  |
| [Each place is a writer](product.md#OneWriterPerPlace) | Goal |  |
| [A shipment runs elsewhere as it runs here](product.md#RunsElsewhere) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [Version 0.2.0](releases.md#R0_2_0) | Release |  |
| [Version 0.3.0](releases.md#R0_3_0) | Release |  |
| [Version 0.4.0](releases.md#R0_4_0) | Release |  |
| [Version 0.5.0](releases.md#R0_5_0) | Release |  |
| [Version 0.6.0](releases.md#R0_6_0) | Release |  |
| [Version 0.7.0](releases.md#R0_7_0) | Release |  |
| [Version 0.8.0](releases.md#R0_8_0) | Release |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **held** |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **held** |
| [The library of writers](sdlc.md#TheLibrary) | Artefact | **unknown** |
| [Bash scripts](shell.md#BashScripts) | Standard |  |
| [A script of Bash](shell.md#ShellScript) | Syntax element | **held** |
| [YAML](yaml.md#Yaml) | Standard |  |
| [A YAML document](yaml.md#YamlDocument) | Syntax element | **held** |
