# Owners

*What each person must decide, settle or watch on 27 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 2 | 31 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `shipment-awaits` | To ship: The renderers of documents is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The renderers of documents](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Dates](language.md#Dates) | Function | **held** |
| [The language of the documents](language.md#DocumentLanguage) | Port |  |
| [Lists](language.md#Lists) | Function | **held** |
| [How a number is written](language.md#NumberDisplay) | Decision |  |
| [Punctuation](language.md#Punctuation) | Function | **held** |
| [Values with their units](language.md#Units) | Function | **held** |
| [The language of the library's words](language.md#WordsLanguage) | Decision |  |
| [The library of continuous integration](packages.md#ContinuousIntegration) | Package |  |
| [Trame](packages.md#Language) | Package |  |
| [The people of the repository](packages.md#People) | Package |  |
| [std](packages.md#StandardLibrary) | Package |  |
| [Documents rendered once, for every project](product.md#RenderedOnce) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [What the scenarios read and expect](scenarios.md#Expected) | Decision |  |
| [The scenarios' language](scenarios.md#InTheScenariosLanguage) | Technical choice | **held** |
| [The language of the documents, written](scenarios.md#LanguageWritten) | Scenario | **held** |
| [The language of the scenarios](scenarios.md#ScenarioLanguage) | Decision |  |
| [What the scenarios check](scenarios.md#ScenarioWords) | Message catalog |  |
| [Test](scenarios.md#Test) | Environment |  |
| [The documents speak the engine's language](scenarios.md#TheEnginesLanguage) | Architecture decision | **held** |
| [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) | Function | **held** |
| [Its code verified](sdlc.md#CodeVerified) | Obligation |  |
| [Its decisions applied](sdlc.md#DecisionsApplied) | Obligation |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [Its packages safe](sdlc.md#PackagesSafe) | Obligation |  |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **held** |
| [Its requirements held](sdlc.md#RequirementsServed) | Obligation |  |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **held** |
| [The renderers of documents](sdlc.md#TheLibrary) | Artefact | **unknown** |
| [How a version is made](sdlc.md#VersionMode) | Policy |  |
