# Owners

*What each person must decide, settle or watch on 27 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 4 | 44 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `shipment-awaits` | To ship: The commands of every project is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | trame |  |
| warning | `shipment-awaits` | To ship: The pull requests' workflow is unknown | [The files that run it elsewhere](sdlc.md#RunnersWritten) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The commands of every project](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Build](commands.md#Build) | Entry point | **held** |
| [Two builds compared](commands.md#BuildComparison) | Function | **held** |
| [The library's commands](commands.md#Commands) | Component |  |
| [What the commands say](commands.md#CommandWords) | Message catalog |  |
| [Plan](commands.md#Plan) | Entry point | **held** |
| [Snapshot](commands.md#Snapshot) | Entry point | **held** |
| [The language the commands speak](commands.md#WordsLanguage) | Decision |  |
| [The library of continuous integration](packages.md#ContinuousIntegration) | Package |  |
| [The renderers of documents](packages.md#Documents) | Package |  |
| [Trame](packages.md#Language) | Package |  |
| [The people of the repository](packages.md#People) | Package |  |
| [std](packages.md#StandardLibrary) | Package |  |
| [Commands every project runs, written once](product.md#WrittenOnce) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [Version 0.1.1](releases.md#R0_1_1) | Release |  |
| [Version 0.1.2](releases.md#R0_1_2) | Release |  |
| [Version 0.2.0](releases.md#R0_2_0) | Release |  |
| [A build writes the documents and the graph](scenarios.md#BuildWritesTheDocuments) | Scenario | **held** |
| [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine) | Technical choice | **held** |
| [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles) | Technical choice | **held** |
| [In the language of libs/documents' scenarios](scenarios.md#DocumentsLanguage) | Technical choice | **held** |
| [Figures in Mermaid and in text](scenarios.md#FiguresOfTheDocuments) | Technical choice | **held** |
| [After a build, nothing changes](scenarios.md#PlanAfterTheSameBuild) | Scenario | **held** |
| [A plan says what a build would change](scenarios.md#PlanSaysWhatChanges) | Scenario | **held** |
| [Without a build, a plan says so](scenarios.md#PlanWithoutABuild) | Scenario | **held** |
| [A command is played on a real graph](scenarios.md#PlayedOnARealGraph) | Architecture decision | **held** |
| [Played on a small project](scenarios.md#PlayedOnASmallProject) | Technical choice | **held** |
| [What the scenarios check](scenarios.md#ScenarioWords) | Message catalog |  |
| [The small project](scenarios.md#SmallProject) | Decision |  |
| [A snapshot writes the graph in force](scenarios.md#SnapshotTaken) | Scenario | **held** |
| [Test](scenarios.md#Test) | Environment |  |
| [Which project the scenarios compile](scenarios.md#TheSmallProject) | Function | **held** |
| [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes) | Architecture decision | **held** |
| [Its callers identified](sdlc.md#CallersIdentified) | Obligation |  |
| [Its code verified](sdlc.md#CodeVerified) | Obligation |  |
| [Its decisions applied](sdlc.md#DecisionsApplied) | Obligation |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [Its packages safe](sdlc.md#PackagesSafe) | Obligation |  |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **unknown** |
| [Its requirements held](sdlc.md#RequirementsServed) | Obligation |  |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **unknown** |
| [The commands of every project](sdlc.md#TheLibrary) | Artefact | **unknown** |
| [How a version is made](sdlc.md#VersionMode) | Policy |  |
