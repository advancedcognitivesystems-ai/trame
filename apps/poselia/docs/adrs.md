# Architecture decisions

*The choices that shape the product without being values, in force on 4 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **6 architecture decisions, 3 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [The content is data, behind a port](principles.md#ContentAsData) | **unknown** | [Content](architecture.md#ContentSource), [Poses](content.md#Poses) |
| [The breath is the clock](principles.md#BreathIsTheClock) | **held** | [A hold of whole breaths](practice.md#HoldPhases), [The breath of a moment](product.md#BreathOf) |
| [The person's language, among those offered](principles.md#LanguageOffered) | **held** | [Languages offered](content.md#Languages), [The language of the app](product.md#ChosenLanguage), [Languages of the device](../.trame/std/docs/platform.md#DeviceLanguages), [Preferences](../.trame/std/docs/platform.md#PreferencesStore) |
| [Said aloud, the screen awake](principles.md#SaidAloud) | **unknown** | [Play a practice](practice.md#PlayPractice), [The phone stays on the mat](product.md#PhoneOnTheMat), [Screen kept awake](../.trame/std/docs/platform.md#ScreenAwake), [Speech](../.trame/std/docs/platform.md#SpeechVoice) |
| [A page first, the phones after](principles.md#PageFirst) | **held** | [Poselia's page](app.md#PoseliaPage), [Poselia in a browser](architecture.md#PoseliaApp), [The page opens](sdlc.md#PageOpens) |
| [The SDLC is in the graph](sdlc.md#SdlcInTheGraph) | **unknown** | [Each decision of architecture serves the product](sdlc.md#AdrsServeTheProduct), [Code serves the product](sdlc.md#CodeServesTheProduct), [The content, reviewed](sdlc.md#ContentReviewed), [On a phone](sdlc.md#OnAPhone), [Open the page](sdlc.md#OpenThePage), [The page opens](sdlc.md#PageOpens), [Place the page](sdlc.md#PlaceThePage), [A preview](sdlc.md#Preview), [The preview's script](sdlc.md#PreviewScript), [The preview's workflow](sdlc.md#PreviewWorkflow), [A public version](sdlc.md#PublicVersion), [The files that run it elsewhere](sdlc.md#RunnersWritten) |

## Poselia · Principles

<a id="ContentAsData"></a>

### The content is data, behind a port

`ContentAsData` · `src/principles.ts:19` · status: **unknown**

The poses, the sequences and the exercises are datasets the app reads through one port: its first realization reads the rows the app carries, an update downloaded later will be another.

Context: The content grows and is corrected by people who do not write code; it must be checked at every build, reviewed in each language, and later updated without a new version of the app.

Consequences: Each kind of content is a dataset with its rules and its languages; the app never names where the rows come from, it asks the port. A content pack will carry its version (the fingerprint of its rows) and the version of its schema.

| Rejected | Why |
|---|---|
| A node per pose | content would be code, and a friend who checks a cue would read the graph |
| A server from the start | an app that works offline on the mat comes first |

- Decided by: ghalaax
- Serves: [Content checked by people who practise](product.md#CheckedContent)
- Applied by: [Poses](content.md#Poses), [Content](architecture.md#ContentSource)

<a id="BreathIsTheClock"></a>

### The breath is the clock

`BreathIsTheClock` · `src/principles.ts:36` · status: **held**

A practice is timed by the person's breath, not by seconds: a movement lasts a phase, a hold lasts whole breaths, and each level may set the breath (follow it, impose a ratio, exact timings, or a speed), the most specific winning.

Context: A timer in seconds makes a person follow a clock; yoga follows the breath, whose length differs from one person to the next and from one day to the next.

Consequences: The person's pattern (four phases) is kept in the preferences; a hold written in seconds becomes whole breaths, so that a chime falls at the end of a breath; the animation of a sequence follows the phases.

| Rejected | Why |
|---|---|
| Two modes, timer and breath | two ways to count the same practice, and the timer would win by habit |

- Decided by: ghalaax
- Serves: [The breath sets the pace](product.md#BreathSetsThePace)
- Applied by: [The breath of a moment](product.md#BreathOf), [A hold of whole breaths](practice.md#HoldPhases)

<a id="LanguageOffered"></a>

### The person's language, among those offered

`LanguageOffered` · `src/principles.ts:50` · status: **held**

Every text of the content is written in each language offered; the app speaks the one the person chose, or the device's, or the first offered; the choice is kept on the device.

Context: French and English from the start, others later; a pose half translated would teach wrongly in one of them.

Consequences: The languages offered are a decision the datasets read: a text missing in one is an error. The words of the interface are catalogs, one per language.

| Rejected | Why |
|---|---|
| Translating at run time | a cue translated by a machine is not checked by someone who practises |

- Decided by: ghalaax
- Serves: [In the person's language](product.md#InTheirLanguage)
- Applied by: [Languages offered](content.md#Languages), [The language of the app](product.md#ChosenLanguage), [Preferences](../.trame/std/docs/platform.md#PreferencesStore), [Languages of the device](../.trame/std/docs/platform.md#DeviceLanguages)

<a id="SaidAloud"></a>

### Said aloud, the screen awake

`SaidAloud` · `src/principles.ts:64` · status: **unknown**

The phone stays on the mat: the breath, the cues and the angles are said by the platform's voice, and the screen is kept awake during a practice.

Context: A person in a pose cannot read a phone on the floor (assumption "The phone stays on the mat").

Consequences: A voice port says texts in the chosen language; each kind of saying (the breath, the cues, the measures) can be turned off in the settings; a port keeps the screen awake.

| Rejected | Why |
|---|---|
| Recorded voices | every text in every language, recorded again at each correction |

- Decided by: ghalaax
- Serves: [Practise yoga on one's own, guided](product.md#PractiseGuided)
- Applied by: [Speech](../.trame/std/docs/platform.md#SpeechVoice), [Screen kept awake](../.trame/std/docs/platform.md#ScreenAwake), [The phone stays on the mat](product.md#PhoneOnTheMat), [Play a practice](practice.md#PlayPractice)

<a id="PageFirst"></a>

### A page first, the phones after

`PageFirst` · `src/principles.ts:78` · status: **held**

The app is first a page a browser opens as it is (trame deliver), then a web application, then Capacitor around the same page for iPhone and Android.

Context: The app must be tried and shown before it is installed: a page shared as a link is the shortest way to the friends who review it.

Consequences: The component runs in a browser; its realizations are the browser's, and the phones' will be bound in their own environment, without the app changing.

| Rejected | Why |
|---|---|
| A native app from the start | two code bases, and nothing to show before the stores |

- Decided by: ghalaax
- Serves: [Practise yoga on one's own, guided](product.md#PractiseGuided)
- Applied by: [Poselia in a browser](architecture.md#PoseliaApp), [Poselia's page](app.md#PoseliaPage), [The page opens](sdlc.md#PageOpens)

## Poselia · SDLC

<a id="SdlcInTheGraph"></a>

### The SDLC is in the graph

`SdlcInTheGraph` · `src/sdlc.ts:431` · status: **unknown**

What makes a version of Poselia available is declared with the rest: its artefact, the checks and the review it requires and who signs them, the programs that check and deploy it, tested in memory; trame ship runs it and keeps the evidence. The rules of the graph are rules of the std library, applied with their parameters.

Context: A version reached people when its author had looked at it: what was checked, by whom, on which page, was nowhere.

Consequences: trame ship refuses a version while a check, a review or a scenario does not hold, says whose it is, and keeps the dossier of each version shipped.

| Rejected | Why |
|---|---|
| A script of continuous integration beside the graph | the steps and their reasons would live in two places, and the graph would not know what was checked |
| A review in a pull request | it says neither which rows were seen nor in which language; a change to a row would not undo it |

- Decided by: ghalaax
- Serves: [Content checked by people who practise](product.md#CheckedContent), [Practise yoga on one's own, guided](product.md#PractiseGuided)
- Applied by: [A preview](sdlc.md#Preview), [A public version](sdlc.md#PublicVersion), [The page opens](sdlc.md#PageOpens), [On a phone](sdlc.md#OnAPhone), [The content, reviewed](sdlc.md#ContentReviewed), [Open the page](sdlc.md#OpenThePage), [Place the page](sdlc.md#PlaceThePage), [Code serves the product](sdlc.md#CodeServesTheProduct), [Each decision of architecture serves the product](sdlc.md#AdrsServeTheProduct), [The preview's workflow](sdlc.md#PreviewWorkflow), [The preview's script](sdlc.md#PreviewScript), [The files that run it elsewhere](sdlc.md#RunnersWritten)
