# Owners

*What each person must decide, settle or watch on 28 October 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| A teacher who practises | 0 | 0 | 4 | 0 |
| People who try it on a phone | 0 | 0 | 1 | 0 |
| ghalaax | 0 | 0 | 5 | 164 |

<a id="A teacher who practises"></a>

## A teacher who practises

- Held by: nobody yet, until whoever owns the role names its people in the graph

### What it awaits, and how to give it

- [Poses](content.md#Poses): `trame evidence Poses passed --by <name> --subject <row> --language <language>`
- [Sequences](content.md#Sequences): `trame evidence Sequences passed --by <name> --subject <row> --language <language>`

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | 12 rows of Poses await a review in fr by A teacher who practises | [The content, reviewed](sdlc.md#ContentReviewed) | A teacher who practises |  |
| warning | 12 rows of Poses await a review in en by A teacher who practises | [The content, reviewed](sdlc.md#ContentReviewed) | A teacher who practises |  |
| warning | 1 row of Sequences awaits a review in fr by A teacher who practises | [The content, reviewed](sdlc.md#ContentReviewed) | A teacher who practises |  |
| warning | 1 row of Sequences awaits a review in en by A teacher who practises | [The content, reviewed](sdlc.md#ContentReviewed) | A teacher who practises |  |

<a id="People who try it on a phone"></a>

## People who try it on a phone

- Held by: ghalaax

### What it awaits, and how to give it

- [On a phone](sdlc.md#OnAPhone): `trame evidence OnAPhone passed --by ghalaax`

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | To check by hand and sign: Open the page in Chrome on an Android phone, and in Safari on an iPhone, Play the sun salutation: the voice says the breath and the cues, the screen stays awake, Hold the poses: the bowl rings at each change, the voice says each pose, The landmarks follow the body, in the flow and in the holds | [On a phone](sdlc.md#OnAPhone) | People who try it on a phone |  |

<a id="ghalaax"></a>

## ghalaax

- Holds the roles: [People who try it on a phone](sdlc.md#PhoneTesters)

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | To ship: On a phone is unknown | [A public version](sdlc.md#PublicVersion) | ghalaax |  |
| warning | To ship: The content, reviewed is unknown | [A public version](sdlc.md#PublicVersion) | ghalaax |  |
| warning | To ship: The content is data, behind a port is unknown | [A public version](sdlc.md#PublicVersion) | ghalaax |  |
| warning | To ship: Said aloud, the screen awake is unknown | [A public version](sdlc.md#PublicVersion) | ghalaax |  |
| warning | Nobody holds this role yet | [A teacher who practises](sdlc.md#Teachers) | ghalaax |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [The browser's screen](app.md#BrowserScreen) | Implementation | **held** |
| [The content the app carries](app.md#CarriedContent) | Function | **held** |
| [Colours](app.md#Colours) | Decision |  |
| [Content carried by the app](app.md#ContentCarried) | Technical choice | **held** |
| [The home view](app.md#HomeViewOf) | Function | **held** |
| [The browser's realizations](app.md#InTheBrowser) | Technical choice | **unknown** |
| [Measures](app.md#Measures) | Decision |  |
| [Style of the page](app.md#PageStyle) | Style sheet |  |
| [Poselia's page](app.md#PoseliaPage) | Delivery |  |
| [Names of the screen](app.md#ScreenNames) | Decision |  |
| [Show the home page](app.md#ShowHome) | Entry point | **held** |
| [Bowl](architecture.md#Bowl) | Port |  |
| [Bowl rung](architecture.md#BowlRung) | Port |  |
| [Browser](architecture.md#Browser) | Environment |  |
| [Content](architecture.md#ContentSource) | Port |  |
| [Poselia in a browser](architecture.md#PoseliaApp) | Component |  |
| [Screen](architecture.md#Screen) | Port |  |
| [Stage](architecture.md#Stage) | Port |  |
| [Test](architecture.md#Test) | Environment |  |
| [Views shown](architecture.md#ViewsShown) | Port |  |
| [Criteria of the angle at a joint](body.md#AngleBetweenCriteria) | Acceptance criteria | **held** |
| [Criteria of the body between two poses](body.md#BodyAtCriteria) | Acceptance criteria | **held** |
| [Measures of the body](body.md#BodyMeasures) | Decision |  |
| [Criteria of a foot on its way](body.md#FootOnItsWayCriteria) | Acceptance criteria | **held** |
| [Criteria of a hand on its way](body.md#HandOnItsWayCriteria) | Acceptance criteria | **held** |
| [Criteria of a pose ready to move](body.md#KeyOfCriteria) | Acceptance criteria | **held** |
| [Criteria of legs apart](body.md#LegsApartCriteria) | Acceptance criteria | **held** |
| [Criteria of every limb that reaches](body.md#LimbsReachCriteria) | Acceptance criteria | **held** |
| [How a body moves](body.md#Movement) | Decision |  |
| [Criteria of a leg on its foot](body.md#PlantedLegCriteria) | Acceptance criteria | **held** |
| [Criteria of a pose that rests on what it names](body.md#RestsOnWhatItNamesCriteria) | Acceptance criteria | **held** |
| [Criteria of the legs in front and behind](body.md#SidesOfCriteria) | Acceptance criteria | **held** |
| [Criteria of where a spot is](body.md#SpotOnCriteria) | Acceptance criteria | **held** |
| [Criteria of a leg that steps](body.md#SteppingLegCriteria) | Acceptance criteria | **held** |
| [Criteria of the heights of the body's surface](body.md#SurfaceHeightsCriteria) | Acceptance criteria | **held** |
| [Touching the floor](body.md#Touching) | Decision |  |
| [Criteria of the trunk from its angles](body.md#TrunkOfCriteria) | Acceptance criteria | **held** |
| [Criteria of a limb that reaches its end](body.md#TwoBonesCriteria) | Acceptance criteria | **held** |
| [Criteria of rising on a breath in](composing.md#BreathOfMoveCriteria) | Acceptance criteria | **held** |
| [A sequence composed](composing.md#ComposedSequence) | Function | **held** |
| [Names of the composer](composing.md#ComposerNames) | Decision |  |
| [The composer](composing.md#ComposerViewOf) | Function | **held** |
| [A sequence drawn by lot](composing.md#DrawnSequence) | Function | **held** |
| [What a composed practice holds](composing.md#HoldingDefaults) | Decision |  |
| [Show the composer](composing.md#ShowComposer) | Function | **held** |
| [Placeholders of a cue](content.md#CuePlaceholders) | Decision |  |
| [Languages offered](content.md#Languages) | Decision |  |
| [Criteria of where the leading leg goes](content.md#LeadingLegOfCriteria) | Acceptance criteria | **held** |
| [The ways between levels](content.md#LevelWays) | Decision |  |
| [Criteria of a sequence that makes sense](content.md#MakesSenseCriteria) | Acceptance criteria | **held** |
| [Poses](content.md#Poses) | Dataset | **unknown** |
| [Sequences](content.md#Sequences) | Dataset | **unknown** |
| [How fast a voice speaks](content.md#SpeechRate) | Decision |  |
| [Criteria of how long words take to say](content.md#SpokenCriteria) | Acceptance criteria | **held** |
| [Frame of a drawing](drawing.md#DrawingFrame) | Decision |  |
| [Parts of a drawing](drawing.md#DrawingParts) | Decision |  |
| [The drawing of a pose](drawing.md#FigureDrawing) | Function | **held** |
| [The body of a pose](drawing.md#PoseBody) | Function | **held** |
| [The app's language](language.md#AppLanguage) | Function | **held** |
| [English](language.md#English) | Decision |  |
| [French](language.md#French) | Decision |  |
| [Words of the interface](language.md#InterfaceWords) | Function | **held** |
| [Names of the preferences](language.md#PreferenceNames) | Decision |  |
| [Words in English](language.md#WordsEn) | Message catalog |  |
| [Words in French](language.md#WordsFr) | Message catalog |  |
| [How landmarks are drawn](marks.md#MarkLook) | Decision |  |
| [Criteria of a landmark on the body](marks.md#MarkOnBodyCriteria) | Acceptance criteria | **held** |
| [The landmarks of a pose](marks.md#MarksOn) | Function | **held** |
| [When the landmarks are drawn](marks.md#MarksWhen) | Decision |  |
| [Criteria of breaths to say a cue](practice.md#BreathsToSayCriteria) | Acceptance criteria | **held** |
| [Criteria of a movement that goes as a breath goes](practice.md#EasedCriteria) | Acceptance criteria | **held** |
| [Criteria of a hold of whole breaths](practice.md#HoldPhasesCriteria) | Acceptance criteria | **held** |
| [Criteria of how full the lungs are](practice.md#LungsFullCriteria) | Acceptance criteria | **held** |
| [Criteria of where a practice is](practice.md#MomentAtCriteria) | Acceptance criteria | **held** |
| [The moment of a practice](practice.md#MomentOf) | Function | **held** |
| [Names of the player](practice.md#PlayerNames) | Decision |  |
| [Play a practice](practice.md#PlayPractice) | Function | **held** |
| [A practice](practice.md#PracticeOf) | Function | **held** |
| [The breath is the clock](principles.md#BreathIsTheClock) | Architecture decision | **held** |
| [The content is data, behind a port](principles.md#ContentAsData) | Architecture decision | **unknown** |
| [The person's language, among those offered](principles.md#LanguageOffered) | Architecture decision | **held** |
| [A page first, the phones after](principles.md#PageFirst) | Architecture decision | **held** |
| [Said aloud, the screen awake](principles.md#SaidAloud) | Architecture decision | **unknown** |
| [Criteria of the breath of a moment](product.md#BreathOfCriteria) | Acceptance criteria | **held** |
| [Criteria of the language of the app](product.md#ChosenLanguageCriteria) | Acceptance criteria | **held** |
| [The breath of someone who has set nothing](product.md#DefaultBreath) | Decision |  |
| [Criteria of a hold in breaths](product.md#HoldInBreathsCriteria) | Acceptance criteria | **held** |
| [The phone stays on the mat](product.md#PhoneOnTheMat) | Assumption | **unknown** |
| [The body stays on the floor](scenarios.md#BodyStaysOnTheFloor) | Scenario | **held** |
| [Sequences drawn by lot](scenarios.md#DrawnSequencesMakeSense) | Scenario | **held** |
| [The device's languages, given](scenarios.md#GivenLanguages) | Function | **held** |
| [Moments of the poses held](scenarios.md#HoldMoments) | Decision |  |
| [Holding the poses](scenarios.md#HoldThePoses) | Scenario | **held** |
| [The language of the home page](scenarios.md#HomeLanguage) | Scenario | **held** |
| [The app in memory](scenarios.md#InMemory) | Technical choice | **held** |
| [Learning a sequence](scenarios.md#LearnTheSequence) | Scenario | **held** |
| [The person's breath and voice](scenarios.md#PersonSettings) | Scenario | **held** |
| [A practice follows the breath](scenarios.md#PracticeFollowsTheBreath) | Scenario | **held** |
| [A bowl that counts](scenarios.md#RecordedBowl) | Function | **held** |
| [A screen that records](scenarios.md#RecordedScreen) | Function | **held** |
| [What the scenarios check](scenarios.md#ScenarioChecks) | Message catalog |  |
| [The device of the scenarios](scenarios.md#ScenarioDevice) | Decision |  |
| [Moments a scenario looks at](scenarios.md#ScenarioMoments) | Decision |  |
| [Moments of the settings a scenario looks at](scenarios.md#SettingsMoments) | Decision |  |
| [Each decision of architecture serves the product](sdlc.md#AdrsServeTheProduct) | Architecture rule | **held** |
| [The page is checked, by hand too](sdlc.md#AllChecks) | Obligation |  |
| [Code serves the product](sdlc.md#CodeServesTheProduct) | Architecture rule | **held** |
| [The code shown is verified](sdlc.md#CodeVerified) | Obligation |  |
| [The code shown is verified, a gap said](sdlc.md#CodeVerifiedSaid) | Obligation |  |
| [The content, reviewed](sdlc.md#ContentReviewed) | Review | **unknown** |
| [The content is reviewed by a teacher](sdlc.md#ContentSeen) | Obligation |  |
| [The decisions hold](sdlc.md#DecisionsApplied) | Obligation |  |
| [A machine](sdlc.md#Machine) | Environment |  |
| [On a phone](sdlc.md#OnAPhone) | Check | **unknown** |
| [On the machine](sdlc.md#OnTheMachine) | Technical choice | **held** |
| [The page is opened as a person would](sdlc.md#OpeningThePage) | Scenario | **held** |
| [Open the page](sdlc.md#OpenThePage) | Entry point | **held** |
| [The packages are safe](sdlc.md#PackagesSafe) | Obligation |  |
| [Poselia's page](sdlc.md#PageFile) | Artefact | **held** |
| [How the page is opened](sdlc.md#PageOpening) | Decision |  |
| [The page opens](sdlc.md#PageOpens) | Check | **held** |
| [What the page is asked](sdlc.md#PageSelectors) | Function | **held** |
| [People who try it on a phone](sdlc.md#PhoneTesters) | Role |  |
| [Place the page](sdlc.md#PlaceThePage) | Entry point | **held** |
| [The page is placed where it is served](sdlc.md#PlacingThePage) | Scenario | **held** |
| [Poselia's SDLC](sdlc.md#PoseliaSdlc) | Component |  |
| [A preview](sdlc.md#Preview) | Shipment | **held** |
| [The way of a preview](sdlc.md#PreviewMode) | Policy |  |
| [When the preview runs on GitHub, and what it keeps there](sdlc.md#PreviewOnGitHub) | Decision |  |
| [The preview's script](sdlc.md#PreviewScript) | Artefact | **held** |
| [The preview's workflow](sdlc.md#PreviewWorkflow) | Artefact | **held** |
| [The product holds](sdlc.md#ProductServed) | Obligation |  |
| [The page is checked by programs](sdlc.md#ProgramChecks) | Obligation |  |
| [The way of a public version](sdlc.md#PublicMode) | Policy |  |
| [A public version](sdlc.md#PublicVersion) | Shipment | **unknown** |
| [The rules of the app hold](sdlc.md#RulesHeld) | Obligation |  |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **held** |
| [What the scenarios of the SDLC check](sdlc.md#SdlcChecks) | Message catalog |  |
| [The SDLC in memory](sdlc.md#SdlcInMemory) | Technical choice | **held** |
| [The SDLC is in the graph](sdlc.md#SdlcInTheGraph) | Architecture decision | **unknown** |
| [What the scenarios of the SDLC write](sdlc.md#SdlcScenarioData) | Decision |  |
| [What the programs of the SDLC say](sdlc.md#SdlcWords) | Message catalog |  |
| [Where the page is served](sdlc.md#ServedPage) | Decision |  |
| [A teacher who practises](sdlc.md#Teachers) | Role |  |
| [Criteria of a phase set by the person](settings.md#AdjustedBreathCriteria) | Acceptance criteria | **held** |
| [Bounds of a breath](settings.md#BreathBounds) | Decision |  |
| [Criteria of a breath read back](settings.md#BreathReadCriteria) | Acceptance criteria | **held** |
| [The landmarks the person chose](settings.md#MarksChoice) | Function | **held** |
| [Criteria of a breath measured by tapping](settings.md#MeasuredBreathCriteria) | Acceptance criteria | **held** |
| [The person's breath](settings.md#PersonBreath) | Function | **held** |
| [Names of the settings](settings.md#SettingsNames) | Decision |  |
| [The settings view](settings.md#SettingsViewOf) | Function | **held** |
| [Show the settings](settings.md#ShowSettings) | Function | **held** |
| [The voice the person chose](settings.md#VoiceChoice) | Function | **held** |
| [What the practice says and rings](settings.md#VoiceParts) | Decision |  |
| [Sound of the bowl](sound.md#BowlSound) | Decision |  |
| [The browser's bowl](sound.md#BrowserBowl) | Implementation | **unknown** |
| [The browser's stage](stage.md#BrowserStage) | Implementation | **held** |
| [Look of the mannequin](stage.md#MannequinLook) | Decision |  |
| [Look of the landmarks](stage.md#MarkStyle) | Decision |  |
| [Light of the stage](stage.md#StageLight) | Decision |  |
| [Views of the stage](stage.md#StageViews) | Decision |  |
| [three.js](stage.md#ThreePackage) | Package | **held** |
| [three.js, its types](stage.md#ThreeTypes) | Package | **held** |
