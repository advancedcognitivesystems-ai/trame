# Owners

*What each person must decide, settle or watch on 26 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 6 | 262 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `port-unrealized` | No realization, in any environment | [The project of a scenario](engine.md#ProjectOfTheScenario) | trame |  |
| warning | `rules-look-alike` | Computes the same kind of answer from the same kind of arguments as “A node reaches what it must” (trame), for the same need: if they can disagree, one amends or constrains the other; if they answer different questions, a more precise type says so | [A node never reaches what it must not](rules.md#NeverReaches) | trame |  |
| warning | `rules-look-alike` | Computes the same kind of answer from the same kind of arguments as “A node never reaches what it must not” (trame), for the same need: if they can disagree, one amends or constrains the other; if they answer different questions, a more precise type says so | [A node reaches what it must](rules.md#Reaches) | trame |  |
| warning | `shipment-awaits` | To ship: The standard library is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The standard library](sdlc.md#TheLibrary) | trame |  |
| warning | `port-unrealized` | No realization, in any environment | [Where a package comes from](tooling.md#PackageSources) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Anyone](access.md#Anyone) | Audience |  |
| [An entry point says who may call it](access.md#SaysItsAudience) | Architecture decision | **held** |
| [The operators](access.md#TheOperators) | Audience |  |
| [The system](access.md#TheSystem) | Audience |  |
| [Counts](algebra.md#Counts) | Algebraic structure | **held** |
| [Sequences](algebra.md#Sequences) | Algebraic structure | **held** |
| [Texts](algebra.md#Texts) | Algebraic structure | **held** |
| [Types of values](algebra.md#ValueTypes) | Algebraic structure | **held** |
| [Depth-first search](algorithms.md#DepthFirstSearch) | Standard |  |
| [Mulberry32](algorithms.md#Mulberry32) | Standard |  |
| [Multiplicative hashing](algorithms.md#MultiplicativeHash) | Standard |  |
| [Seeded draws](algorithms.md#SeededDraws) | Function | **held** |
| [SHA-256](algorithms.md#Sha256) | Standard |  |
| [A library offers commands, a project chooses them](commands.md#CommandsOfALibrary) | Architecture decision | **held** |
| [What the library's commands say](commands.md#CommandWords) | Message catalog |  |
| [The library's commands](commands.md#LibraryCommands) | Component |  |
| [Merge a pull request](commands.md#MergePullRequest) | Entry point | **held** |
| [Open a pull request](commands.md#OpenPullRequest) | Entry point | **held** |
| [Propagate](commands.md#Propagate) | Entry point | **held** |
| [How a version is carried](commands.md#PropagationSettings) | Port |  |
| [How pull requests are opened](commands.md#PullRequestSettings) | Port |  |
| [ECMAScript](ecmascript.md#EcmaScript) | Standard |  |
| [ECMAScript reserved words](ecmascript.md#EcmaScriptReservedWords) | Vocabulary |  |
| [ECMAScript types](ecmascript.md#EcmaScriptTypes) | Standard |  |
| [Text run as code](ecmascript.md#TextAsCode) | Vocabulary |  |
| [Unicode escape of a text](ecmascript.md#UnicodeEscape) | Standard |  |
| [Commands](effects.md#Commands) | Function | **held** |
| [Effects](effects.md#Effects) | Vocabulary |  |
| [What the platform may do](effects.md#PlatformEffects) | Decision |  |
| [The engine is a provider](engine.md#EngineAsAProvider) | Architecture decision |  |
| [What the engine's adapters say](engine.md#EngineWords) | Message catalog |  |
| [A project compiled by the engine that plays the scenario](engine.md#ProjectCompiledHere) | Implementation |  |
| [The project the engine prepared](engine.md#ProjectInTheEngine) | Implementation |  |
| [The project of a scenario](engine.md#ProjectOfTheScenario) | Port |  |
| [The project at hand](engine.md#TheProject) | Port |  |
| [WAI-ARIA](html.md#Aria) | Standard |  |
| [CSS](html.md#Css) | Standard |  |
| [HTML](html.md#Html) | Standard |  |
| [SVG](html.md#Svg) | Standard |  |
| [As the language says](judgment.md#AsTheLanguageSays) | Function | **held** |
| [Every warning an error](judgment.md#EveryWarning) | Function | **held** |
| [Hardening](judgment.md#Hardening) | Port |  |
| [A project judges harder than the language, never softer](judgment.md#HarderNeverSofter) | Architecture decision | **held** |
| [Raising](judgment.md#Raising) | Algebraic structure | **held** |
| [ISO 8601 dates](measures.md#Iso8601) | Standard |  |
| [Language tags](measures.md#LanguageTags) | Standard |  |
| [Ratio](measures.md#Ratio) | Quantity |  |
| [Semantic versioning](measures.md#SemanticVersioning) | Standard |  |
| [The language the symbols of units are written in: the same in most languages, as the SI writes them.](measures.md#SymbolsLanguage) | Decision |  |
| [Time](measures.md#Time) | Quantity |  |
| [Units of measure](measures.md#UnitsOfMeasure) | Standard |  |
| [Symbols of units](measures.md#UnitSymbols) | Message catalog |  |
| [The decisions a shipment applies hold](obligations.md#Applied) | Requirement | **held** |
| [Criteria of the decisions applied](obligations.md#AppliedCriteria) | Acceptance criteria | **held** |
| [The artefacts a shipment ships are checked](obligations.md#Checked) | Requirement | **held** |
| [Criteria of the artefacts checked](obligations.md#CheckedCriteria) | Acceptance criteria | **held** |
| [Ways of checking](obligations.md#CheckWays) | Vocabulary |  |
| [Who calls a shipment's programs is identified](obligations.md#Identified) | Requirement | **held** |
| [Criteria of who calls](obligations.md#IdentifiedCriteria) | Acceptance criteria | **held** |
| [The artefacts a shipment ships were shipped first by those that precede it](obligations.md#Preceded) | Requirement | **held** |
| [Criteria of the stages](obligations.md#PrecededCriteria) | Acceptance criteria | **held** |
| [What people decided is published](obligations.md#Published) | Requirement | **held** |
| [Criteria of what is published](obligations.md#PublishedCriteria) | Acceptance criteria | **held** |
| [The data a shipment carries is reviewed](obligations.md#Reviewed) | Requirement | **held** |
| [Criteria of the data reviewed](obligations.md#ReviewedCriteria) | Acceptance criteria | **held** |
| [The project's rules hold](obligations.md#Ruled) | Requirement | **held** |
| [Criteria of the rules held](obligations.md#RuledCriteria) | Acceptance criteria | **held** |
| [The packages a shipment uses are safe](obligations.md#Safe) | Requirement | **held** |
| [Criteria of the packages safe](obligations.md#SafeCriteria) | Acceptance criteria | **held** |
| [The product a shipment serves holds](obligations.md#Served) | Requirement | **held** |
| [Criteria of the product served](obligations.md#ServedCriteria) | Acceptance criteria | **held** |
| [The code a shipment ships is verified](obligations.md#Verified) | Requirement | **held** |
| [Criteria of the code verified](obligations.md#VerifiedCriteria) | Acceptance criteria | **held** |
| [The library of continuous integration](packages.md#ContinuousIntegration) | Package |  |
| [Trame](packages.md#Language) | Package |  |
| [The people of the repository](packages.md#People) | Package |  |
| [Abstract Factory](patterns.md#AbstractFactory) | Design pattern |  |
| [Adapter](patterns.md#Adapter) | Design pattern |  |
| [Bridge](patterns.md#Bridge) | Design pattern |  |
| [Command](patterns.md#Command) | Design pattern |  |
| [Plugin](patterns.md#Plugin) | Design pattern |  |
| [Repository](patterns.md#Repository) | Design pattern |  |
| [Strategy](patterns.md#Strategy) | Design pattern | **held** |
| [Animation frames](platform.md#AnimationFrames) | Port |  |
| [The screen kept awake, in memory](platform.md#AwakeInMemory) | Function | **held** |
| [The browser's frames](platform.md#BrowserFrames) | Implementation |  |
| [The browser's languages](platform.md#BrowserLanguages) | Implementation |  |
| [The browser loads the page](platform.md#BrowserLoading) | Implementation |  |
| [The browser keeps the preferences](platform.md#BrowserPreferences) | Implementation |  |
| [The browser's voice](platform.md#BrowserSpeech) | Implementation |  |
| [The browser keeps the screen awake](platform.md#BrowserWakeLock) | Implementation |  |
| [The device's services, as ports](platform.md#DeviceAsPorts) | Architecture decision | **held** |
| [Languages of the device](platform.md#DeviceLanguages) | Port |  |
| [Frames turned by hand](platform.md#FramesByHand) | Function | **held** |
| [Preferences kept in memory](platform.md#MemoryPreferences) | Function | **held** |
| [Loading of a page](platform.md#PageLoading) | Port |  |
| [Preferences](platform.md#PreferencesStore) | Port |  |
| [Screen kept awake](platform.md#ScreenAwake) | Port |  |
| [Whether the screen is kept awake](platform.md#ScreenKeptAwake) | Port |  |
| [What was said](platform.md#SpeechHeard) | Port |  |
| [Speech](platform.md#SpeechVoice) | Port |  |
| [A component in a browser starts with its page](platform.md#StartsWithThePage) | Architecture decision |  |
| [Time turned by hand](platform.md#TimeTurned) | Port |  |
| [A voice that writes down](platform.md#WrittenSpeech) | Function | **held** |
| [Commands chosen, not written again](product.md#ChosenCommands) | Goal |  |
| [A published value is cited, not copied](product.md#CitedNotCopied) | Goal |  |
| [Known designs, named](product.md#KnownDesigns) | Goal |  |
| [Ports of the platform, realized once](product.md#RealizedOnce) | Goal |  |
| [Shared operations instead of literals](product.md#SharedOperations) | Goal |  |
| [Rules applied, not written again](product.md#SharedRules) | Goal |  |
| [Versions that hold](product.md#VersionsThatHold) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [Version 0.10.0](releases.md#R0_10_0) | Release |  |
| [Version 0.11.0](releases.md#R0_11_0) | Release |  |
| [Version 0.11.1](releases.md#R0_11_1) | Release |  |
| [Version 0.12.0](releases.md#R0_12_0) | Release |  |
| [Version 0.13.0](releases.md#R0_13_0) | Release |  |
| [Version 0.14.0](releases.md#R0_14_0) | Release |  |
| [Version 0.15.0](releases.md#R0_15_0) | Release |  |
| [Version 0.16.0](releases.md#R0_16_0) | Release |  |
| [Version 0.17.0](releases.md#R0_17_0) | Release |  |
| [Version 0.18.0](releases.md#R0_18_0) | Release |  |
| [Version 0.18.1](releases.md#R0_18_1) | Release |  |
| [Version 0.19.0](releases.md#R0_19_0) | Release |  |
| [Version 0.2.0](releases.md#R0_2_0) | Release |  |
| [Version 0.20.0](releases.md#R0_20_0) | Release |  |
| [Version 0.21.0](releases.md#R0_21_0) | Release |  |
| [Version 0.22.0](releases.md#R0_22_0) | Release |  |
| [Version 0.22.1](releases.md#R0_22_1) | Release |  |
| [Version 0.22.2](releases.md#R0_22_2) | Release |  |
| [Version 0.22.3](releases.md#R0_22_3) | Release |  |
| [Version 0.23.0](releases.md#R0_23_0) | Release |  |
| [Version 0.24.0](releases.md#R0_24_0) | Release |  |
| [Version 0.25.0](releases.md#R0_25_0) | Release |  |
| [Version 0.26.0](releases.md#R0_26_0) | Release |  |
| [Version 0.27.0](releases.md#R0_27_0) | Release |  |
| [Version 0.28.0](releases.md#R0_28_0) | Release |  |
| [Version 0.3.0](releases.md#R0_3_0) | Release |  |
| [Version 0.4.0](releases.md#R0_4_0) | Release |  |
| [Version 0.5.0](releases.md#R0_5_0) | Release |  |
| [Version 0.6.0](releases.md#R0_6_0) | Release |  |
| [Version 0.7.0](releases.md#R0_7_0) | Release |  |
| [Version 0.8.0](releases.md#R0_8_0) | Release |  |
| [Version 0.9.0](releases.md#R0_9_0) | Release |  |
| [The automatic merge](repository.md#AutoMerge) | Port |  |
| [The automatic merge, by GitHub's command line](repository.md#AutoMergeByGitHubCli) | Implementation |  |
| [The automatic merge, in a session of Claude Code](repository.md#AutoMergeInAClaudeSession) | Implementation |  |
| [The branches](repository.md#Branches) | Port |  |
| [Branches kept in memory](repository.md#BranchesInMemory) | Function | **held** |
| [The branches a scenario keeps](repository.md#BranchesKept) | Port |  |
| [Git's branches](repository.md#GitCliBranches) | Implementation |  |
| [Git's command line](repository.md#GitCommandLine) | Standard |  |
| [GitHub's ways of asking a merge once it holds](repository.md#GitHubAutoMerge) | Standard |  |
| [GitHub's pull requests, by its command line](repository.md#GitHubCliPullRequests) | Implementation |  |
| [GitHub's command line](repository.md#GitHubCliRepository) | Implementation |  |
| [GitHub's API for pull requests](repository.md#GitHubPullRequestsApi) | Standard |  |
| [GitHub's API for a repository](repository.md#GitHubRepositoryApi) | Standard |  |
| [How GitHub merges a pull request](repository.md#MergeMethods) | Vocabulary |  |
| [Pull requests](repository.md#PullRequests) | Port |  |
| [Pull requests kept in memory](repository.md#PullRequestsInMemory) | Function | **held** |
| [The pull requests a scenario keeps](repository.md#PullRequestsKept) | Port |  |
| [A repository on GitHub](repository.md#RepositoryApi) | Port |  |
| [A repository compared with its settings](repository.md#RepositoryCompared) | Function | **held** |
| [A repository kept in memory](repository.md#RepositoryInMemory) | Function | **held** |
| [The repositories a scenario keeps](repository.md#RepositoryKept) | Port |  |
| [The parts of a repository's settings](repository.md#RepositoryParts) | Vocabulary |  |
| [A repository is set by its project's graph](repository.md#RepositoryThroughItsApi) | Architecture decision | **held** |
| [Directions](rules.md#Directions) | Vocabulary |  |
| [As many links as asked](rules.md#Linked) | Requirement | **held** |
| [Criteria of as many links as asked](rules.md#LinkedCriteria) | Acceptance criteria | **held** |
| [A node never reaches what it must not](rules.md#NeverReaches) | Requirement | **held** |
| [Criteria of a node that never reaches what it must not](rules.md#NeverReachesCriteria) | Acceptance criteria | **held** |
| [A node reaches what it must](rules.md#Reaches) | Requirement | **held** |
| [Criteria of a node that reaches what it must](rules.md#ReachesCriteria) | Acceptance criteria | **held** |
| [Effects a node may not have](rules.md#WithoutEffects) | Requirement | **held** |
| [Criteria of effects a node may not have](rules.md#WithoutEffectsCriteria) | Acceptance criteria | **held** |
| [Words of a vocabulary](rules.md#WordsOf) | Requirement | **held** |
| [Criteria of words of a vocabulary](rules.md#WordsOfCriteria) | Acceptance criteria | **held** |
| [Commands are made for each effect](scenarios.md#CommandsMade) | Scenario | **held** |
| [The device, in memory](scenarios.md#DeviceInMemory) | Scenario | **held** |
| [Seeded draws keep their promise](scenarios.md#DrawsKeepTheirPromise) | Scenario | **held** |
| [In memory](scenarios.md#InMemory) | Technical choice | **held** |
| [Judged as the language says](scenarios.md#JudgedAsTheLanguage) | Scenario | **held** |
| [Judged strictly](scenarios.md#JudgedStrictly) | Scenario | **held** |
| [Judged as the language says](scenarios.md#LanguageJudgment) | Technical choice | **held** |
| [A pull request merged once it holds](scenarios.md#MergedOnceItHolds) | Scenario | **held** |
| [A version carried across the projects](scenarios.md#PropagatedInOrder) | Scenario | **held** |
| [A pull request opened](scenarios.md#PullRequestOpened) | Scenario | **held** |
| [A repository kept in memory](scenarios.md#RepositoryInMemoryKeeps) | Scenario | **held** |
| [What the library's scenarios check](scenarios.md#ScenarioChecks) | Message catalog |  |
| [What the library's scenarios are given](scenarios.md#ScenarioData) | Decision |  |
| [The language of the library's scenarios](scenarios.md#ScenarioLanguage) | Decision |  |
| [How the scenarios' versions are carried](scenarios.md#ScenarioPropagation) | Function | **held** |
| [How the scenarios' pull requests are opened](scenarios.md#ScenarioPullRequests) | Function | **held** |
| [The scenarios' settings](scenarios.md#ScenarioSettings) | Technical choice | **held** |
| [Strict](scenarios.md#Strict) | Environment |  |
| [Judged strictly](scenarios.md#StrictJudgment) | Technical choice | **held** |
| [Test](scenarios.md#Test) | Environment |  |
| [The tooling, in memory](scenarios.md#ToolingInMemory) | Scenario | **held** |
| [Its callers identified](sdlc.md#CallersIdentified) | Obligation |  |
| [Its data reviewed](sdlc.md#DataReviewed) | Obligation |  |
| [Its decisions applied](sdlc.md#DecisionsApplied) | Obligation |  |
| [Its functions verified](sdlc.md#FunctionsVerified) | Obligation |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [Its packages safe](sdlc.md#PackagesSafe) | Obligation |  |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **held** |
| [Its requirements held](sdlc.md#RequirementsServed) | Obligation |  |
| [Its rules held](sdlc.md#RulesHeld) | Obligation |  |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **held** |
| [The standard library](sdlc.md#TheLibrary) | Artefact | **unknown** |
| [How a version is made](sdlc.md#VersionMode) | Policy |  |
| [Exit status](system.md#ExitStatus) | Standard |  |
| [Node.js process arguments](system.md#NodeArguments) | Standard |  |
| [Node.js command line and child processes](system.md#NodeCli) | Standard |  |
| [Node.js character encodings](system.md#NodeEncodings) | Standard |  |
| [Node.js events](system.md#NodeEvents) | Standard |  |
| [Node.js module specifiers](system.md#NodeModuleSpecifiers) | Standard |  |
| [Node.js process and console](system.md#NodeProcessApi) | Standard |  |
| [npm's command line](system.md#NpmCli) | Standard |  |
| [npm's manifest](system.md#NpmManifest) | Standard |  |
| [POSIX signals and errors](system.md#Posix) | Standard |  |
| [Positions in a file](text.md#GnuPositions) | Standard |  |
| [Characters that do not show](text.md#InvisibleCharacters) | Standard |  |
| [Text file](text.md#TextFile) | Standard |  |
| [Unified differences](text.md#UnifiedDiff) | Standard |  |
| [A browser kept in memory](tooling.md#BrowserInMemory) | Function | **held** |
| [Browser script](tooling.md#BrowserScripted) | Port |  |
| [The language the library's commands and tools speak in.](tooling.md#CommandLanguage) | Decision |  |
| [Commands run in the engine](tooling.md#CommandsInTheEngine) | Implementation |  |
| [Project files](tooling.md#Files) | Port |  |
| [Files kept in memory](tooling.md#FilesInMemory) | Function | **held** |
| [Files written](tooling.md#FilesKept) | Port |  |
| [Headless browser](tooling.md#HeadlessBrowser) | Port |  |
| [Chromium without a screen](tooling.md#HeadlessChromium) | Decision |  |
| [The machine's files](tooling.md#MachineFiles) | Implementation |  |
| [What the machine must also have](tooling.md#MachineNeeds) | Port |  |
| [Node's command line](tooling.md#NodeProgramCommands) | Implementation |  |
| [Programs run by Node](tooling.md#NodeProgramRuns) | Implementation |  |
| [Where a package comes from](tooling.md#PackageOrigins) | Vocabulary |  |
| [Where a package comes from](tooling.md#PackageSources) | Port |  |
| [Playwright's API](tooling.md#PlaywrightApi) | Standard |  |
| [Chromium, driven by Playwright](tooling.md#PlaywrightBrowser) | Implementation |  |
| [Playwright's browser, installed](tooling.md#PlaywrightBrowserInstalled) | Implementation |  |
| [Playwright](tooling.md#PlaywrightPackage) | Package | **held** |
| [Commands of a program](tooling.md#ProgramCommands) | Port |  |
| [Programs run](tooling.md#ProgramRuns) | Port |  |
| [Programs run in memory](tooling.md#ProgramRunsInMemory) | Function | **held** |
| [The programs a scenario keeps: the file it says a program writes is written when that program runs.](tooling.md#ProgramRunsKept) | Port |  |
| [What repairs a project](tooling.md#ProjectRepairs) | Port |  |
| [The SDLC's tooling is realized once](tooling.md#ToolingAsPorts) | Architecture decision | **held** |
| [What the library's tools say](tooling.md#ToolWords) | Message catalog |  |
| [CSSOM View](web.md#CssomView) | Standard |  |
| [HTTP](web.md#Http) | Standard |  |
| [Media Queries Level 5](web.md#MediaQueries5) | Standard |  |
| [Media types](web.md#MediaTypes) | Standard |  |
| [Screen Wake Lock API](web.md#ScreenWakeLockApi) | Standard |  |
| [Server-sent events](web.md#ServerSentEvents) | Standard |  |
| [UI events](web.md#UiEvents) | Standard |  |
| [URI](web.md#Uri) | Standard |  |
| [Web Audio API](web.md#WebAudioApi) | Standard |  |
| [Web Speech API](web.md#WebSpeechApi) | Standard |  |

## unassigned

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `not-connected-to-root` | Connected to no root (architecture rule, goal) | [What the platform may do](effects.md#PlatformEffects) | to be assigned |  |
