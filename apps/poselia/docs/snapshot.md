# Snapshot

*The exact state expected on 2 November 2026, without history: the values in force, without the amendments that produced them.*

## Poselia · The app in a browser

### Colours

Decision · `Colours`

- Decided by: ghalaax
- Value: { paper: #fbf8f3, ink: #2f2a24, muted: #7c7368, accent: #5f8a64, line: #e6dfd4, far: #c4b9ab, stage: #e9e4db, warning: #a8553a, mark: #ec8a1e, mark-soft: #fbe3c6, mark-ink: #8a4a0b, mark-on: #1d1206 }

### Measures

Decision · `Measures`

- Decided by: ghalaax
- Value: { font: system-ui, -apple-system, "Segoe UI", sans-serif, leading: 1.5, page-width: 40rem, gutter: 1rem, gap: 0.75rem, gap-small: 0.35rem, radius: 999px, border-width: 1px, button-pad: 0.35rem 0.9rem, none: 0, text-small: 0.85rem, text-title: 2rem, thumbnail: 4rem, step-drawing: 6rem, text-heading: 1.25rem, full: 100%, lungs-size: 2.6rem, lungs-least: 0.35, lungs-range: 0.65, progress-height: 0.4rem, ring-width: 2px, stage-height: clamp(320px, 58vh, 560px), stage-radius: 18px, badge-radius: 12px, badge-pad: 0.35rem 0.7rem, badge-width: 60%, views-width: 46%, said-height: 7rem, seconds-width: 3.5rem, tap-size: 5rem, card-width: 6.5rem, card-figure: 4.5rem, fraction: 1fr, faded: 0.45, label-gap: 5px, label-pad: 3px 8px 3px 3px, text-label: 12px, label-leading: 1.1, label-number: 18px, text-number: 11px, degrees-pad: 2px 7px, pixel: 1px, centre: -50% }

### Names of the screen

Decision · `ScreenNames`

- Decided by: ghalaax
- Value: { root: poselia, header: top, languages: languages, current: current, poses: poses, sanskrit: sanskrit, sequence: sequence, step: step, breath: breath }

### The content the app carries

Function · `CarriedContent` · **held**

- Owner: ghalaax
- Parameters: { poses: content.Poses, sequences: content.Sequences }
- Implements: Content
- Depends on: Poses, Sequences

### The home view

Function · `HomeViewOf` · **held**

- Owner: ghalaax
- Parameters: { words: language.InterfaceWords, language: language.AppLanguage, offered: content.Languages, fr: language.WordsFr, en: language.WordsEn, placeholders: content.CuePlaceholders, counts: std/algebra.Counts, draw: drawing.FigureDrawing, pose: drawing.PoseBody }
- Serves: Practise yoga on one's own, guided, In the person's language
- Depends on: Words of the interface, The app's language, Languages offered, Words in French, Words in English, Placeholders of a cue, The drawing of a pose, The body of a pose

### Style of the page

Style sheet · `PageStyle`

- Owner: ghalaax
- Uses the variables of: Colours, Measures
- Styles: The home view, The drawing of a pose, The moment of a practice, The settings view, The composer

### Show the home page

Entry point · `ShowHome` · **held**

- Owner: ghalaax
- Trigger: { type: load }
- Parameters: { screen: architecture.Screen, content: architecture.ContentSource, view: app.HomeViewOf, language: language.AppLanguage, play: practice.PlayPractice, settings: settings.ShowSettings, breath: settings.PersonBreath, compose: composing.ShowComposer, holding: composing.HoldingDefaults }
- Serves: Practise yoga on one's own, guided
- Part of: Poselia in a browser
- Depends on: Screen, Content, The home view, The app's language, Play a practice, Show the settings, The person's breath, Show the composer, What a composed practice holds

### The browser's screen

Implementation · `BrowserScreen` · **unknown**

- Owner: ghalaax
- Parameters: { html: std/html.Html, aria: std/html.Aria, svg: std/html.Svg, events: std/web.UiEvents, screen: app.ScreenNames, parts: drawing.DrawingParts, player: practice.PlayerNames, settings: settings.SettingsNames, composer: composing.ComposerNames, counts: std/algebra.Counts, texts: std/algebra.Texts, stage: architecture.Stage }
- Implements: Screen
- Depends on: Names of the screen, Parts of a drawing, Names of the player, Names of the settings, Names of the composer, Stage

### Content carried by the app

Technical choice · `ContentCarried` · **held**

- Decided by: ghalaax
- Context: An app on the mat works offline; the content is small enough to travel with it.
- Rejected: Downloading the content at the first start, nothing to practise until the network answers
- Chooses: The content the app carries
- In: Browser, Test

### The browser's realizations

Technical choice · `InTheBrowser` · **unknown**

- Decided by: ghalaax
- Context: The first delivery is a page a browser opens as it is; the phones come later, with their own realizations.
- Chooses: The browser's screen, The browser's stage, The browser's bowl
- In: Browser

### Poselia's page

Delivery · `PoseliaPage`

- Owner: ghalaax
- Target: page
- Written to: dist/poselia.html
- Shown as: Poselia
- Delivers: Poselia in a browser
- For: Browser
- Written in: French
- Styled by: Style of the page
- Serves: Practise yoga on one's own, guided

## Poselia · Architecture

### Poselia in a browser

Component · `PoseliaApp`

- Owner: ghalaax
- Language: typescript
- Startup: { exposure: std/platform.PageLoading }
- Deployed in: Browser

### Bowl

Port · `Bowl`

- Owner: ghalaax
- Declared effects: display, random

### Bowl rung

Port · `BowlRung`

- Owner: ghalaax
- Declared effects: 

### Content

Port · `ContentSource`

- Owner: ghalaax
- Declared effects: read, asynchronous

### Screen

Port · `Screen`

- Owner: ghalaax
- Declared effects: display, time

### Stage

Port · `Stage`

- Owner: ghalaax
- Declared effects: display, time

### Views shown

Port · `ViewsShown`

- Owner: ghalaax
- Declared effects: 

### Browser

Environment · `Browser`

- Owner: ghalaax

### Test

Environment · `Test`

- Owner: ghalaax

## Poselia · The body

### The angle at a joint

Requirement · `AngleBetween` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided

### The body between two poses

Requirement · `BodyAt` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: Measures of the body, How a body moves, The trunk from its angles, A leg that steps, A foot on its way, A leg on its foot, A hand on its way, A limb reaches its end

### A foot on its way

Requirement · `FootOnItsWay` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: How a body moves

### A hand on its way

Requirement · `HandOnItsWay` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: How a body moves

### A pose ready to move

Requirement · `KeyOf` · **held**

- Owner: ghalaax
- Parameters: { trunkOf: (rule), g: body.MatSpace, sides: body.SideNames, texts: std/algebra.Texts }
- Refines: Practise yoga on one's own, guided
- Depends on: The trunk from its angles, The space of the mat, The names of the sides

### Legs apart

Requirement · `LegsApart` · **held**

- Owner: ghalaax
- Parameters: {  }
- Refines: Practise yoga on one's own, guided

### Every limb reaches

Requirement · `LimbsReach` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided, Content checked by people who practise
- Depends on: A pose ready to move, The body between two poses

### A leg on its foot

Requirement · `PlantedLeg` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: Measures of the body, How a body moves, A limb reaches its end

### A pose rests on what it names

Requirement · `RestsOnWhatItNames` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided, Content checked by people who practise
- Depends on: A pose ready to move, The heights of the body's surface, The body between two poses, Touching the floor

### The legs in front and behind

Requirement · `SidesOf` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided

### Where a spot is

Requirement · `SpotOn` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided

### A leg that steps

Requirement · `SteppingLeg` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: Measures of the body, A limb reaches its end

### The heights of the body's surface

Requirement · `SurfaceHeights` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: Measures of the body

### The trunk from its angles

Requirement · `TrunkOf` · **held**

- Owner: ghalaax
- Parameters: { m: body.BodyMeasures, g: body.MatSpace }
- Refines: Practise yoga on one's own, guided
- Depends on: Measures of the body, The space of the mat

### A limb reaches its end

Requirement · `TwoBones` · **held**

- Owner: ghalaax
- Parameters: { g: body.MatSpace, slack: body.LimbSlack, counts: std/algebra.Counts }
- Refines: Practise yoga on one's own, guided
- Depends on: The space of the mat, How far a limb keeps from flat

### Measures of the body

Decision · `BodyMeasures`

- Decided by: ghalaax
- Value: { thigh: 0.44, shin: 0.43, upperArm: 0.29, forearm: 0.26, lowerBack: 0.25, chest: 0.25, neck: 0.09, head: 0.11, hips: 0.09, shoulders: 0.18, shoulderDrop: 0.04, hand: 0.17, nose: 0.1, heelBack: 0.06, heelDown: 0.07, ballForward: 0.13, ballDown: 0.06, toes: 0.06, topUp: 0.04, topForward: 0.05, kneeSurface: 0.05, wristSurface: 0.04, headSurface: 0.11, pelvisUp: 0.03, pelvisAcross: 0.1, pelvisAlong: 0.1, chestUp: 0.14, chestAcross: 0.11, chestAlong: 0.17 }
- Rejected: Proportions as parts of the height, seen from the side, a flat figure cannot turn, and its angles made it float between poses

### How far a limb keeps from flat

Decision · `LimbSlack`

- Decided by: ghalaax
- Value: { folded: 0, stretched: 0 }
- Rejected: Folding flat and stretching straight, at either end the joint could bend either way, and flipped from one frame to the next

### How a body moves

Decision · `Movement`

- Decided by: ghalaax
- Value: { still: 0.02, stride: 0.35, lift: 0.12, footFloor: 0.03, landing: 1, clearance: 0.04, ankleClear: 0.03, kneeGive: 0.04, stepSink: 0.1, wristFloor: 0.04, elbowsOut: 0.25, folded: 0.05 }
- Rejected: A foot coming down onto its place at 45°, like a hand, a foot stepping far rose 80 cm and swung around the hip; Raising the foot until the knee clears the mat, the leg stopped as the knee neared the mat, then caught up; Turning the thigh and the shin from one pose to the next, the foot went toward the hands, then forward between the arms; Turning the knee outward where it would sink, the knee swung 23 cm to the side

### The names of the sides

Decision · `SideNames`

- Decided by: ghalaax
- Value: { right: R, left: L }
- Rejected: The words right and left, the rests of a pose would be longer to write, for no reader but the rules

### Touching the floor

Decision · `Touching`

- Decided by: ghalaax
- Value: { within: 0.07 }
- Rejected: Exactly on the floor, a mannequin of cylinders and ellipses rests on its curves, never on a point

### Criteria of the angle at a joint

Acceptance criteria · `AngleBetweenCriteria` · **held**

- Owner: ghalaax
- Accepts: The angle at a joint

### Criteria of the body between two poses

Acceptance criteria · `BodyAtCriteria` · **held**

- Owner: ghalaax
- Accepts: The body between two poses
- Depends on: Measures of the body, A pose ready to move, How a body moves

### Criteria of a foot on its way

Acceptance criteria · `FootOnItsWayCriteria` · **held**

- Owner: ghalaax
- Accepts: A foot on its way

### Criteria of a hand on its way

Acceptance criteria · `HandOnItsWayCriteria` · **held**

- Owner: ghalaax
- Accepts: A hand on its way
- Depends on: How a body moves

### Criteria of a pose ready to move

Acceptance criteria · `KeyOfCriteria` · **held**

- Owner: ghalaax
- Accepts: A pose ready to move

### Criteria of legs apart

Acceptance criteria · `LegsApartCriteria` · **held**

- Owner: ghalaax
- Accepts: Legs apart

### Criteria of every limb that reaches

Acceptance criteria · `LimbsReachCriteria` · **held**

- Owner: ghalaax
- Accepts: Every limb reaches

### Criteria of a leg on its foot

Acceptance criteria · `PlantedLegCriteria` · **held**

- Owner: ghalaax
- Accepts: A leg on its foot
- Depends on: Measures of the body

### Criteria of a pose that rests on what it names

Acceptance criteria · `RestsOnWhatItNamesCriteria` · **held**

- Owner: ghalaax
- Accepts: A pose rests on what it names

### Criteria of the legs in front and behind

Acceptance criteria · `SidesOfCriteria` · **held**

- Owner: ghalaax
- Accepts: The legs in front and behind

### Criteria of where a spot is

Acceptance criteria · `SpotOnCriteria` · **held**

- Owner: ghalaax
- Accepts: Where a spot is
- Depends on: A pose ready to move, The body between two poses

### Criteria of a leg that steps

Acceptance criteria · `SteppingLegCriteria` · **held**

- Owner: ghalaax
- Accepts: A leg that steps

### Criteria of the heights of the body's surface

Acceptance criteria · `SurfaceHeightsCriteria` · **held**

- Owner: ghalaax
- Accepts: The heights of the body's surface
- Depends on: A pose ready to move, The body between two poses

### Criteria of the trunk from its angles

Acceptance criteria · `TrunkOfCriteria` · **held**

- Owner: ghalaax
- Accepts: The trunk from its angles
- Depends on: Measures of the body

### Criteria of a limb that reaches its end

Acceptance criteria · `TwoBonesCriteria` · **held**

- Owner: ghalaax
- Accepts: A limb reaches its end

### The space of the mat

Function · `MatSpace` · **held**

- Owner: ghalaax
- Parameters: { v: geometry/vectors.Vectors, angle: geometry/angles.Angle }
- Serves: Practise yoga on one's own, guided

## Poselia · Composing

### Rising on a breath in

Requirement · `BreathOfMove` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: A pose ready to move, The body between two poses

### Names of the composer

Decision · `ComposerNames`

- Decided by: ghalaax
- Value: { composer: composer, counters: counters, chosen: chosen, library: library, problems: problems, actions: actions }

### What a composed practice holds

Decision · `HoldingDefaults`

- Decided by: ghalaax
- Value: { count: 8, fewest: 3, most: 12, breaths: 5, least: 1, longest: 20, learning: 3 }
- Rejected: Holds in seconds, the breath sets the pace: a hold lasts whole breaths, whatever the person's breath

### Criteria of rising on a breath in

Acceptance criteria · `BreathOfMoveCriteria` · **held**

- Owner: ghalaax
- Accepts: Rising on a breath in

### A sequence composed

Function · `ComposedSequence` · **held**

- Owner: ghalaax
- Parameters: { breathOf: (rule), leading: (rule), apart: (rule), fr: language.WordsFr, en: language.WordsEn, counts: std/algebra.Counts }
- Constants: { id: { value: composed, meaning: The key of the sequence composed, which no sequence of the content has }, leg: { value: right, meaning: The leg that leads the one round of a sequence composed } }
- Serves: Practise yoga on one's own, guided
- Depends on: Rising on a breath in, Where the leading leg goes, Legs apart, Words in French, Words in English

### The composer

Function · `ComposerViewOf` · **held**

- Owner: ghalaax
- Parameters: { words: language.InterfaceWords, language: language.AppLanguage, draw: drawing.FigureDrawing, pose: drawing.PoseBody, sense: (rule), leading: (rule), counts: std/algebra.Counts }
- Serves: Practise yoga on one's own, guided
- Depends on: Words of the interface, The app's language, The drawing of a pose, The body of a pose, A sequence that makes sense, Where the leading leg goes

### A sequence drawn by lot

Function · `DrawnSequence` · **held**

- Owner: ghalaax
- Parameters: { draws: std/algorithms.SeededDraws, ways: content.LevelWays, sense: (rule), counts: std/algebra.Counts }
- Constants: { unseen: { value: 3, meaning: How much likelier a pose not yet drawn is }, newLevel: { value: 4, meaning: How much likelier a pose at another level is }, tries: { value: 12, meaning: How many draws are made, of which the most varied is kept } }
- Serves: Practise yoga on one's own, guided
- Depends on: The ways between levels, A sequence that makes sense

### Show the composer

Function · `ShowComposer` · **held**

- Owner: ghalaax
- Parameters: { screen: architecture.Screen, view: composing.ComposerViewOf, drawn: composing.DrawnSequence, composed: composing.ComposedSequence, defaults: composing.HoldingDefaults, play: practice.PlayPractice, counts: std/algebra.Counts }
- Serves: Practise yoga on one's own, guided
- Depends on: Screen, The composer, A sequence drawn by lot, A sequence composed, What a composed practice holds, Play a practice

## Poselia · Content

### Where the leading leg goes

Requirement · `LeadingLegOf` · **held**

- Owner: ghalaax
- Parameters: {  }
- Refines: Practise yoga on one's own, guided

### A sequence that makes sense

Requirement · `MakesSense` · **held**

- Owner: ghalaax
- Parameters: { ways: content.LevelWays, counts: std/algebra.Counts, seq: std/algebra.Sequences }
- Refines: Practise yoga on one's own, guided
- Depends on: The ways between levels

### How long words take to say

Requirement · `Spoken` · **held**

- Owner: ghalaax
- Parameters: { rate: content.SpeechRate, counts: std/algebra.Counts }
- Refines: Practise yoga on one's own, guided
- Depends on: How fast a voice speaks

### Placeholders of a cue

Decision · `CuePlaceholders`

- Decided by: ghalaax
- Value: { leg: {leg} }

### Languages offered

Decision · `Languages`

- Decided by: ghalaax
- Value: fr, en

### The ways between levels

Decision · `LevelWays`

- Decided by: ghalaax
- Value: { standing: fold, fold: standing, lunge, lunge: fold, plank, dog, plank: lunge, prone, dog, allFours, dog: lunge, plank, prone, kneeling, allFours, prone: plank, dog, kneeling: dog, allFours, allFours: plank, dog, kneeling }
- Rejected: Any pose after any other, standing, lying, standing, kneeling: a body cannot go that way, and the mannequin would pass through the floor; From lying on the front straight back onto the heels, the engine swings the thighs under the floor (20 cm deep) on the way to the child's pose; From the forward bend straight back into a dog, and back, both feet step back at once: the body would jump, held on its hands

### How fast a voice speaks

Decision · `SpeechRate`

- Decided by: ghalaax
- Value: { charactersPerSecond: 14, breathWord: 1 }

### Criteria of where the leading leg goes

Acceptance criteria · `LeadingLegOfCriteria` · **held**

- Owner: ghalaax
- Accepts: Where the leading leg goes

### Criteria of a sequence that makes sense

Acceptance criteria · `MakesSenseCriteria` · **held**

- Owner: ghalaax
- Accepts: A sequence that makes sense
- Depends on: The ways between levels, Legs apart, A pose ready to move, Where the leading leg goes, How a body moves, The heights of the body's surface, The body between two poses, Touching the floor

### Criteria of how long words take to say

Acceptance criteria · `SpokenCriteria` · **held**

- Owner: ghalaax
- Accepts: How long words take to say

### Poses

Dataset · `Poses` · **unknown**

- Owner: ghalaax
- Rows: { id: pranamasana, sanskrit: Pranamasana, name: { fr: Posture de la prière, en: Prayer pose }, level: standing, cue: { fr: Debout, pieds joints, mains jointes devant la poitrine, épaules relâchées., en: Stand with the feet together, palms joined before the chest, shoulders relaxed. }, said: { fr: Mains jointes devant la poitrine, en: Palms together at the chest }, marks: { title: { fr: Pieds joints, en: Feet together }, text: { fr: Pieds joints, poids réparti sur les deux pieds, en: Feet together, weight on both feet }, at: { at: ball, side: both }, label: 0.25, 0.12, 0.25 }, { title: { fr: Mains au sternum, en: Palms at the sternum }, text: { fr: Mains jointes devant le sternum, en position de prière, en: Palms joined before the sternum, as in prayer }, at: { at: wrist, side: both }, label: 0.32, 0.12, 0.1 }, { title: { fr: Colonne droite, en: Spine straight }, text: { fr: Colonne droite, épaules relâchées, en: Spine straight, shoulders relaxed }, at: { at: waist }, label: -0.35, 0.05, 0.1, shapes: { line: { at: head }, { at: pelvis }, { at: ankle, side: both }, dashed: true } }, shape: { pelvis: 0, 0.93, spine: 90, 90, 90, 90, legs: { at: 0, 0.07, 0.06, foot: 0, toes: 0, rests: foot }, arms: { at: 0.2, 1.16, 0.04, hand: 80, palm: 1 } } }, { id: hasta-uttanasana, sanskrit: Hasta Uttanasana, name: { fr: Bras levés, en: Raised arms pose }, level: standing, cue: { fr: Bras tendus au-dessus de la tête, biceps près des oreilles : étirez-vous vers le haut, puis doucement vers l'arrière., en: Arms straight overhead, biceps by the ears: stretch up, then gently back. }, said: { fr: Bras au-dessus de la tête, en: Arms overhead }, marks: { title: { fr: Biceps près des oreilles, en: Biceps by the ears }, text: { fr: Bras tendus, biceps près des oreilles, en: Arms straight, biceps by the ears }, at: { at: tip, side: both }, label: 0.25, 0.12, 0.1 }, { title: { fr: Bassin vers l’avant, en: Pelvis forward }, text: { fr: Avancez légèrement le bassin, en: Bring the pelvis slightly forward }, at: { at: pelvis }, label: 0.45, 0, 0.1, shapes: { arrow: { at: pelvis }, { at: pelvis, shift: 0.3, 0, 0 } } }, { title: { fr: Jambes tendues, en: Legs straight }, text: { fr: Jambes tendues, poids sur les deux pieds, en: Legs straight, weight on both feet }, at: { at: knee, side: both }, label: 0.32, 0, 0.12 }, { title: { fr: Nuque détendue, en: Neck relaxed }, text: { fr: Étirez-vous vers le haut plus que vers l’arrière, nuque détendue, en: Stretch up more than back, the neck relaxed }, at: { at: neckTop }, label: -0.4, 0, 0 }, shape: { pelvis: 0.05, 0.93, spine: 97, 106, 112, 116, legs: { at: 0, 0.07, 0.06, foot: 0, toes: 0, rests: foot }, arms: { fromShoulders: { angle: 112, reach: 0.55, apart: 0.16 }, hand: 112, palm: 1 } } }, { id: padahastasana, sanskrit: Padahastasana, name: { fr: Flexion avant debout, en: Standing forward bend }, level: fold, cue: { fr: Penchez-vous depuis les hanches, paumes au sol de part et d’autre des pieds, genoux souples si besoin., en: Fold from the hips, palms on the floor beside the feet, knees soft if needed. }, said: { fr: Penchez-vous, mains au sol, en: Fold, hands down }, marks: { title: { fr: Doigts près des orteils, en: Fingers by the toes }, text: { fr: Paumes à plat, bout des doigts alignés avec les orteils, en: Palms flat, fingertips in line with the toes }, at: { at: tip, side: right }, label: 0.25, 0.1, 0.22, shapes: { line: { at: tip, side: left }, { at: tip, side: right }, dashed: true } }, { title: { fr: Genoux souples, en: Knees soft }, text: { fr: Pliez les genoux si nécessaire, puis tendez-les doucement, en: Bend the knees if needed, then straighten them gently }, at: { at: knee, side: both }, label: -0.4, 0.05, 0 }, { title: { fr: Tête vers les genoux, en: Head toward the knees }, text: { fr: Tête relâchée vers les genoux, en: Head relaxed toward the knees }, at: { at: head }, label: 0.38, 0.12, 0 }, { title: { fr: Mains fixes, en: Hands stay put }, text: { fr: Les mains ne bougent plus tant qu’elles portent le corps, en: The hands stay where they are while they carry the body }, at: { at: wrist, side: left }, label: 0.3, 0.2, -0.15, shapes: { dot: { at: wrist, side: left } }, { dot: { at: wrist, side: right } } }, shape: { pelvis: -0.03, 0.92, spine: -40, -95, -80, -88, legs: { at: 0, 0.07, 0.06, foot: 0, toes: 0, rests: foot }, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands } }, { id: ashwa-sanchalanasana, sanskrit: Ashwa Sanchalanasana, name: { fr: Posture du cavalier, en: Equestrian pose }, level: lunge, cue: { fr: Une jambe loin derrière, le genou au sol ; le pied avant entre les mains, le tibia vertical ; regard vers le haut., en: One leg far back, the knee down; the front foot between the hands, the shin upright; look up. }, said: { fr: Une jambe en arrière, regard haut, en: One leg back, look up }, marks: { title: { fr: Pied entre les mains, en: Foot between the hands }, text: { fr: Pied avant exactement entre les mains, en: Front foot right between the hands }, at: { at: ball, side: front }, label: 0.35, 0.08, 0.1 }, { title: { fr: Tibia vertical, en: Shin upright }, text: { fr: Genou avant au-dessus de la cheville, tibia vertical, en: Front knee over the ankle, shin upright }, at: { at: knee, side: front }, label: 0.35, 0.22, 0.1, shapes: { plumb: { at: knee, side: front } } }, { title: { fr: Genou au sol, en: Knee down }, text: { fr: Genou arrière posé au sol, jambe étirée loin derrière, en: Back knee on the floor, leg stretched far behind }, at: { at: knee, side: back }, label: 0, 0.3, 0.2, shapes: { dot: { at: knee, side: back, floor: true } } }, { title: { fr: Regard vers le haut, en: Look up }, text: { fr: Poitrine ouverte, menton levé, regard vers le haut, en: Chest open, chin lifted, looking up }, at: { at: head }, label: 0.3, 0.28, 0 }, shape: { pelvis: -0.44, 0.33, spine: 22, 36, 50, 66, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, legs: { front: { at: 0, 0.07, 0.07, foot: 0, toes: 0, rests: foot }, back: { at: -1.2, 0.14, 0.1, foot: -70, toes: 0, rests: toes, knee } } } }, { id: dandasana, sanskrit: Dandasana, name: { fr: Planche, en: Plank }, level: plank, cue: { fr: En appui sur les mains et les orteils, le corps en ligne droite des épaules aux talons., en: On the hands and the toes, the body in a straight line from the shoulders to the heels. }, said: { fr: Corps en ligne droite, en: Body in a straight line }, marks: { title: { fr: Corps en ligne droite, en: Body in a straight line }, text: { fr: Corps en ligne droite, des épaules aux talons, en: Body in a straight line from shoulders to heels }, at: { at: pelvis }, label: 0, 0.35, 0.15, shapes: { line: { at: shoulders }, { at: heel, side: both }, dashed: true } }, { title: { fr: Bras perpendiculaires, en: Arms square to the floor }, text: { fr: Bras perpendiculaires au sol, poignets sous les épaules, en: Arms square to the floor, wrists under the shoulders }, at: { at: elbow, side: right }, label: 0.35, 0.15, 0.2, shapes: { angle: { at: { at: wrist, side: right }, from: { at: shoulder, side: right }, to: { at: wrist, side: right, shift: -0.3, 0, 0 }, radius: 0.13 } } }, { title: { fr: Mains et orteils, en: Hands and toes }, text: { fr: Appui sur les mains et les orteils, en: On the hands and the toes }, at: { at: ball, side: both }, label: 0, 0.35, 0.15, shapes: { dot: { at: wrist, side: left } }, { dot: { at: wrist, side: right } }, { dot: { at: ball, side: left } }, { dot: { at: ball, side: right } } }, shape: { pelvis: -0.4, 0.43, spine: 19.3, 19.3, 22, 15, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, legs: { at: -1.21, 0.14, 0.08, foot: -70, toes: 0, rests: toes } } }, { id: ashtanga-namaskara, sanskrit: Ashtanga Namaskara, name: { fr: Salut aux huit membres, en: Salute with eight parts }, level: prone, cue: { fr: Genoux, poitrine et menton au sol, les hanches levées, les coudes près du corps., en: Knees, chest and chin on the floor, the hips raised, the elbows close to the body. }, said: { fr: Genoux, poitrine, menton au sol, en: Knees, chest, chin down }, marks: { title: { fr: 8 points au sol, en: 8 points down }, text: { fr: Huit points touchent le sol : mains, genoux, orteils, poitrine et menton, en: Eight points touch the floor: hands, knees, toes, chest and chin }, at: { at: knee, side: both }, label: 0.1, 0.35, 0.3, shapes: { dot: { at: wrist, side: left } }, { dot: { at: wrist, side: right } }, { dot: { at: knee, side: left, floor: true } }, { dot: { at: knee, side: right, floor: true } }, { dot: { at: ball, side: left } }, { dot: { at: ball, side: right } }, { dot: { at: sternum, floor: true } }, { dot: { at: nose, floor: true } } }, { title: { fr: Hanches hautes, en: Hips up }, text: { fr: Hanches relevées, le ventre ne touche pas le sol, en: Hips raised, the belly off the floor }, at: { at: pelvis }, label: -0.15, 0.35, 0 }, { title: { fr: Coudes près du corps, en: Elbows in }, text: { fr: Coudes serrés près du corps, pointés vers l’arrière, en: Elbows close to the body, pointing back }, at: { at: elbow, side: right }, label: 0.1, 0.3, 0.22 }, shape: { pelvis: -0.27, 0.34, spine: -40, -8, 5, 0, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, chest, head, legs: { at: -1.02, 0.14, 0.08, foot: -70, toes: 0, rests: toes, knee } } }, { id: bhujangasana, sanskrit: Bhujangasana, name: { fr: Cobra, en: Cobra pose }, level: prone, cue: { fr: Les hanches au sol, la poitrine soulevée, les épaules basses, les coudes légèrement fléchis., en: The hips on the floor, the chest lifted, the shoulders low, the elbows slightly bent. }, said: { fr: Soulevez la poitrine, en: Lift the chest }, marks: { title: { fr: Jambes jointes, en: Legs together }, text: { fr: Jambes jointes, dessus des pieds au sol, en: Legs together, tops of the feet on the floor }, at: { at: ankle, side: both }, label: 0, 0.28, 0.22 }, { title: { fr: Épaules basses, en: Shoulders low }, text: { fr: Épaules basses, loin des oreilles, en: Shoulders low, away from the ears }, at: { at: shoulder, side: right }, label: -0.3, 0.3, 0.15 }, { title: { fr: Coudes fléchis, en: Elbows bent }, text: { fr: Coudes légèrement fléchis, près du corps, en: Elbows slightly bent, close to the body }, at: { at: elbow, side: right }, label: 0.4, 0, 0.2, shapes: { angle: { at: { at: elbow, side: right }, from: { at: shoulder, side: right }, to: { at: wrist, side: right }, radius: 0.09 } } }, { title: { fr: Regard en haut, en: Look up }, text: { fr: Regard vers le haut et l’arrière, en: Look up and back }, at: { at: head }, label: 0.3, 0.25, 0 }, shape: { pelvis: -0.21, 0.15, spine: 35, 80, 85, 100, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, pelvis, legs: { at: -1.06, 0.04, 0.05, foot: -180, toes: -180, rests: instep, knee } } }, { id: adho-mukha-svanasana, sanskrit: Adho Mukha Svanasana, name: { fr: Chien tête en bas, en: Downward-facing dog }, level: dog, cue: { fr: Les hanches hautes, le corps en V à l’envers, les talons vers le sol, la tête entre les bras., en: The hips high, the body an upside-down V, the heels toward the floor, the head between the arms. }, said: { fr: Hanches hautes, talons vers le sol, en: Hips high, heels down }, marks: { title: { fr: Mains, épaules, hanches, en: Hands, shoulders, hips }, text: { fr: Mains, épaules et hanches sur une même ligne, en: Hands, shoulders and hips in one line }, at: { at: shoulder, side: right }, label: 0.45, -0.12, 0.3, shapes: { line: { at: wrist, side: right }, { at: shoulder, side: right }, { at: pelvis }, dashed: true } }, { title: { fr: Hanches hautes, en: Hips high }, text: { fr: Hanches hautes : l’angle entre bras et jambes approche 90°, en: Hips high: the angle between arms and legs nears 90° }, at: { at: pelvis }, label: 0, 0.32, 0.1, shapes: { angle: { at: { at: pelvis }, from: { at: shoulders }, to: { at: ankle, side: both }, radius: 0.17 } } }, { title: { fr: Talons vers le sol, en: Heels down }, text: { fr: Talons poussés vers le sol, en: Heels pressed toward the floor }, at: { at: heel, side: both }, label: -0.25, 0.18, 0.2 }, { title: { fr: Tête entre les bras, en: Head between the arms }, text: { fr: Tête relâchée entre les bras, en: Head relaxed between the arms }, at: { at: head }, label: 0.3, -0.05, 0.3 }, shape: { pelvis: -0.65, 0.77, spine: -47, -47, -55, -62, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, legs: { at: -1.19, 0.09, 0.1, foot: -12, toes: 0, rests: foot } } }, { id: tadasana, sanskrit: Tadasana, name: { fr: Posture de la montagne, en: Mountain pose }, level: standing, cue: { fr: Debout, pieds joints, bras le long du corps, le sommet de la tête vers le ciel., en: Stand with the feet together, the arms by the sides, the crown of the head toward the sky. }, said: { fr: Debout, bras le long du corps, en: Stand tall, arms down }, marks: { title: { fr: Pieds joints, en: Feet together }, text: { fr: Pieds joints, poids réparti entre talons et orteils, en: Feet together, weight between heels and toes }, at: { at: ball, side: both }, label: 0.25, 0.12, 0.25 }, { title: { fr: Bras le long du corps, en: Arms by the sides }, text: { fr: Bras le long du corps, doigts vers le sol, en: Arms by the sides, fingers toward the floor }, at: { at: wrist, side: right }, label: 0.3, 0.05, 0.2 }, { title: { fr: Sommet de la tête au ciel, en: Crown to the sky }, text: { fr: Le sommet de la tête monte, la nuque s’allonge, en: The crown of the head rises, the neck lengthens }, at: { at: head }, label: 0.3, 0.15, 0, shapes: { arrow: { at: head, shift: 0, 0.12, 0 }, { at: head, shift: 0, 0.4, 0 } } }, { title: { fr: Colonne droite, en: Spine straight }, text: { fr: Oreilles, épaules, hanches et chevilles alignées, en: Ears, shoulders, hips and ankles in line }, at: { at: waist }, label: -0.35, 0.05, 0.1, shapes: { line: { at: head }, { at: shoulders }, { at: pelvis }, { at: ankle, side: both }, dashed: true } }, shape: { pelvis: 0, 0.93, spine: 90, 90, 90, 90, legs: { at: 0, 0.07, 0.06, foot: 0, toes: 0, rests: foot }, arms: { at: 0.03, 0.86, 0.2, hand: -90, palm: 1 } } }, { id: balasana, sanskrit: Balasana, name: { fr: Posture de l’enfant, en: Child’s pose }, level: kneeling, cue: { fr: Assis sur les talons, le front au sol, les bras allongés devant vous : laissez le dos s’arrondir., en: Sit back on the heels, the forehead on the floor, the arms long in front: let the back round. }, said: { fr: Front au sol, détendez le dos, en: Forehead down, back soft }, marks: { title: { fr: Fesses sur les talons, en: Hips on the heels }, text: { fr: Les fesses descendent vers les talons, en: The hips sink toward the heels }, at: { at: pelvis }, label: -0.2, 0.3, 0.15, shapes: { line: { at: pelvis }, { at: heel, side: both }, dashed: true } }, { title: { fr: Front au sol, en: Forehead down }, text: { fr: Le front repose au sol, la nuque longue, en: The forehead rests on the floor, the neck long }, at: { at: head }, label: 0.25, 0.25, 0.1, shapes: { dot: { at: head, floor: true } } }, { title: { fr: Bras allongés devant, en: Arms long in front }, text: { fr: Bras allongés devant, paumes au sol, en: Arms long in front, palms on the floor }, at: { at: wrist, side: right }, label: 0.25, 0.15, 0.25, shapes: { dot: { at: wrist, side: left } }, { dot: { at: wrist, side: right } } }, { title: { fr: Dos arrondi, relâché, en: Back round and soft }, text: { fr: Laissez le dos s’arrondir et respirez dedans, en: Let the back round and breathe into it }, at: { at: sternum }, label: 0, 0.3, 0.1 }, shape: { pelvis: -0.86, 0.34, spine: 10, -20, -60, -70, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, head, legs: { at: -0.9, 0.04, 0.09, foot: -180, toes: -180, rests: instep, knee } } }, { id: marjaryasana, sanskrit: Marjaryasana, name: { fr: Posture du chat, en: Cat pose }, level: allFours, cue: { fr: À quatre pattes, mains sous les épaules, genoux sous les hanches : arrondissez le dos, le menton vers la poitrine., en: On all fours, the hands under the shoulders, the knees under the hips: round the back, the chin toward the chest. }, said: { fr: Arrondissez le dos, en: Round the back }, marks: { title: { fr: Mains sous les épaules, en: Hands under the shoulders }, text: { fr: Poignets sous les épaules, bras tendus, en: Wrists under the shoulders, arms straight }, at: { at: shoulder, side: right }, label: 0.3, 0.15, 0.25, shapes: { plumb: { at: shoulder, side: right } } }, { title: { fr: Genoux sous les hanches, en: Knees under the hips }, text: { fr: Genoux sous les hanches, écartés de la largeur du bassin, en: Knees under the hips, hip-width apart }, at: { at: hip, side: right }, label: -0.3, 0.15, 0.25, shapes: { plumb: { at: hip, side: right } } }, { title: { fr: Dos arrondi, en: Back rounded }, text: { fr: Arrondissez le dos vers le plafond, en expirant, en: Round the back up toward the ceiling, breathing out }, at: { at: sternum }, label: 0, 0.35, 0.1, shapes: { arrow: { at: sternum, shift: 0, 0.12, 0 }, { at: sternum, shift: 0, 0.32, 0 } } }, { title: { fr: Menton vers la poitrine, en: Chin to the chest }, text: { fr: La tête se relâche, le menton vers la poitrine, en: The head drops, chin toward the chest }, at: { at: head }, label: 0.3, -0.05, 0.2 }, shape: { pelvis: -0.47, 0.5, spine: 20, -12, -50, -70, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, legs: { at: -0.9, 0.04, 0.09, foot: -180, toes: -180, rests: instep, knee } } }, { id: bitilasana, sanskrit: Bitilasana, name: { fr: Posture de la vache, en: Cow pose }, level: allFours, cue: { fr: À quatre pattes, creusez le dos, ouvrez la poitrine et regardez vers le haut., en: On all fours, let the belly drop, open the chest and look up. }, said: { fr: Creusez le dos, regard haut, en: Drop the belly, look up }, marks: { title: { fr: Mains sous les épaules, en: Hands under the shoulders }, text: { fr: Poignets sous les épaules, bras tendus, en: Wrists under the shoulders, arms straight }, at: { at: shoulder, side: right }, label: 0.3, 0.15, 0.25, shapes: { plumb: { at: shoulder, side: right } } }, { title: { fr: Genoux sous les hanches, en: Knees under the hips }, text: { fr: Genoux sous les hanches, écartés de la largeur du bassin, en: Knees under the hips, hip-width apart }, at: { at: hip, side: right }, label: -0.3, 0.15, 0.25, shapes: { plumb: { at: hip, side: right } } }, { title: { fr: Ventre vers le sol, en: Belly toward the floor }, text: { fr: Le ventre descend, le dos se creuse, en inspirant, en: The belly drops, the back arches, breathing in }, at: { at: waist }, label: 0, 0.3, 0.15, shapes: { arrow: { at: waist, shift: 0, 0.05, 0 }, { at: waist, shift: 0, -0.15, 0 } } }, { title: { fr: Regard vers le haut, en: Look up }, text: { fr: Poitrine ouverte, regard vers le haut, en: Chest open, looking up }, at: { at: head }, label: 0.3, 0.25, 0 }, shape: { pelvis: -0.47, 0.5, spine: -8, 18, 45, 55, arms: { at: 0.03, 0.04, 0.2, hand: 0, palm: 0 }, rests: hands, legs: { at: -0.9, 0.04, 0.09, foot: -180, toes: -180, rests: instep, knee } } }
- Rules: { says: A key is written in lower case, its words joined by hyphens, holds: (rule) }, { says: A pose has its Sanskrit name, holds: (rule) }, { says: A pose rests on the points it names, and on nothing else, holds: (rule) }, { says: Every limb reaches where the pose puts its hand or its foot, holds: (rule) }, { says: Hands that rest on the floor rest at one place on the mat, the same in every pose: from one pose to the next, they stay where they are, holds: (rule) }, { says: A pose has two to five landmarks, each with a few words for the stage (at most 26 characters) and its sentence, in each language, holds: (rule) }, { says: What the voice says moving into a pose fits a breath in or out of the default breath, holds: (rule) }
- Languages offered: Languages offered
- Serves: Practise yoga on one's own, guided
- Depends on: A pose rests on what it names, Every limb reaches, How long words take to say, The breath of someone who has set nothing

### Sequences

Dataset · `Sequences` · **unknown**

- Owner: ghalaax
- Rows: { id: sun-salutation, name: { fr: Salutation au soleil, en: Sun salutation }, rounds: right, left, steps: { pose: pranamasana, breath: exhale, said: { fr: Mains jointes devant la poitrine, en: Palms together at the chest }, cue: { fr: Debout, pieds joints, mains jointes devant la poitrine., en: Stand with the feet together, palms joined before the chest. } }, { pose: hasta-uttanasana, breath: inhale, said: { fr: Bras au-dessus de la tête, en: Arms overhead }, cue: { fr: Levez les bras au-dessus de la tête et étirez-vous vers l'arrière., en: Raise the arms overhead and stretch back. } }, { pose: padahastasana, breath: exhale, said: { fr: Penchez-vous, mains au sol, en: Fold, hands down }, cue: { fr: Penchez-vous en avant, les mains au sol de part et d'autre des pieds., en: Bend forward, the hands on the floor beside the feet. } }, { pose: ashwa-sanchalanasana, breath: inhale, leadingLeg: back, said: { fr: Jambe {leg} en arrière, genou au sol, en: {leg} leg back, knee down }, cue: { fr: Reculez la jambe {leg}, le genou au sol, et regardez vers le haut., en: Step the {leg} leg back, the knee down, and look up. } }, { pose: dandasana, breath: holdTop, breathing: { ratio: { inhale: 1, holdTop: 1, exhale: 1, holdBottom: 0 } }, said: { fr: L'autre jambe en arrière, en: Other leg back }, cue: { fr: Reculez l'autre jambe : le corps forme une ligne droite., en: Step the other leg back: the body forms a straight line. } }, { pose: ashtanga-namaskara, breath: exhale, said: { fr: Genoux, poitrine, menton au sol, en: Knees, chest, chin down }, cue: { fr: Posez les genoux, la poitrine et le menton au sol, les hanches levées., en: Lower the knees, the chest and the chin to the floor, the hips raised. } }, { pose: bhujangasana, breath: inhale, said: { fr: Glissez, soulevez la poitrine, en: Slide forward, lift the chest }, cue: { fr: Glissez vers l'avant et soulevez la poitrine, les coudes près du corps., en: Slide forward and lift the chest, the elbows close to the body. } }, { pose: adho-mukha-svanasana, breath: exhale, said: { fr: Hanches hautes, talons vers le sol, en: Hips up, heels down }, cue: { fr: Levez les hanches, les talons vers le sol : le corps forme un V à l'envers., en: Lift the hips, the heels towards the floor: the body forms an upside-down V. } }, { pose: ashwa-sanchalanasana, breath: inhale, leadingLeg: front, said: { fr: Jambe {leg} entre les mains, en: {leg} foot between the hands }, cue: { fr: Avancez la jambe {leg}, le pied entre les mains, l'autre genou au sol., en: Bring the {leg} leg forward, the foot between the hands, the other knee down. } }, { pose: padahastasana, breath: exhale, said: { fr: L'autre jambe en avant, penchez-vous, en: Other leg forward, fold }, cue: { fr: Avancez l'autre jambe et penchez-vous en avant., en: Bring the other leg forward and bend forward. } }, { pose: hasta-uttanasana, breath: inhale, said: { fr: Remontez, bras au-dessus de la tête, en: Come up, arms overhead }, cue: { fr: Remontez, les bras au-dessus de la tête, et étirez-vous vers l'arrière., en: Come up, the arms overhead, and stretch back. } }, { pose: pranamasana, breath: exhale, said: { fr: Mains jointes devant la poitrine, en: Palms together at the chest }, cue: { fr: Revenez debout, les mains jointes devant la poitrine., en: Come back to standing, the palms joined before the chest. } } }
- Rules: { says: Each step is a pose of the dataset Poses, holds: (rule) }, { says: A cue names the leading leg exactly where the step moves it, holds: (rule) }, { says: What the voice says when a step starts fits its phase with the default breath, holds: (rule) }, { says: A step says where the leading leg goes exactly when its pose sets the legs apart, holds: (rule) }, { says: Hands that rest in two steps in a row rest in the same place, holds: (rule) }, { says: A sequence has at least one round, holds: (rule) }, { says: Each step lasts: with the default breath, the phase it moves on is not empty, holds: (rule) }, { says: A sequence makes sense: from standing to standing, each pose reached in one movement from the one before, never back and forth, holds: (rule) }, { says: A sequence comes back to where it started, holds: (rule) }
- Languages offered: Languages offered
- Serves: Practise yoga on one's own, guided
- Depends on: Placeholders of a cue, The breath of a moment, How long words take to say, Legs apart, A sequence that makes sense

## Poselia · Drawings

### Frame of a drawing

Decision · `DrawingFrame`

- Decided by: ghalaax
- Value: { width: 2.3, height: 2.3, floor: 0.08, trunk: 0.19, limb: 0.08, outline: 0.04 }

### Parts of a drawing

Decision · `DrawingParts`

- Decided by: ghalaax
- Value: { far: far, trunk: trunk, head: head, near: near, arm: arm, outline: outline, floor: floor, figure: figure }

### The drawing of a pose

Function · `FigureDrawing` · **held**

- Owner: ghalaax
- Parameters: { measures: body.BodyMeasures, frame: drawing.DrawingFrame, parts: drawing.DrawingParts, counts: std/algebra.Counts }
- Constants: { half: { value: 0.5, meaning: A radius is half a thickness; a figure is centred in the half of the space it leaves } }
- Serves: Practise yoga on one's own, guided
- Depends on: Measures of the body, Frame of a drawing, Parts of a drawing

### The body of a pose

Function · `PoseBody` · **held**

- Owner: ghalaax
- Parameters: { key: (rule), at: (rule), counts: std/algebra.Counts }
- Serves: Practise yoga on one's own, guided
- Depends on: A pose ready to move, The body between two poses

## Poselia · Language

### English

Decision · `English`

- Decided by: ghalaax
- Value: { tag: en }

### French

Decision · `French`

- Decided by: ghalaax
- Value: { tag: fr }

### Names of the preferences

Decision · `PreferenceNames`

- Decided by: ghalaax
- Value: { language: poselia.language, breath: poselia.breath, marks: poselia.marks }

### The app's language

Function · `AppLanguage` · **held**

- Owner: ghalaax
- Parameters: { preferences: std/platform.PreferencesStore, device: std/platform.DeviceLanguages, offered: content.Languages, choose: (rule), names: language.PreferenceNames }
- Serves: In the person's language
- Depends on: Languages offered, The language of the app, Names of the preferences

### Words of the interface

Function · `InterfaceWords` · **held**

- Owner: ghalaax
- Parameters: { fr: language.WordsFr, en: language.WordsEn, language: language.AppLanguage }
- Serves: In the person's language
- Depends on: Words in French, Words in English, The app's language

### Words in English

Message catalog · `WordsEn`

- Owner: ghalaax
- Written in: English
- Translates: Words in French

### Words in French

Message catalog · `WordsFr`

- Owner: ghalaax
- Written in: French

## Poselia · Landmarks

### A landmark on the body

Requirement · `MarkOnBody` · **held**

- Owner: ghalaax
- Refines: Practise yoga on one's own, guided
- Depends on: How landmarks are drawn, Where a spot is, The angle at a joint

### How landmarks are drawn

Decision · `MarkLook`

- Decided by: ghalaax
- Value: { dash: 0.04, gap: 0.03, line: 0.01, thin: 0, shaft: 0.01, dot: 0.02, arc: 24, ray: 1.25, beyond: 0.09, roundTo: 5 }

### When the landmarks are drawn

Decision · `MarksWhen`

- Decided by: ghalaax
- Value: { still: true, moving: true }
- Rejected: Only while the body is still, a practice that flows with the breath never stops: there the button showed nothing, and the landmarks appeared only when learning a sequence or holding poses

### Criteria of a landmark on the body

Acceptance criteria · `MarkOnBodyCriteria` · **held**

- Owner: ghalaax
- Accepts: A landmark on the body
- Depends on: A pose ready to move, The body between two poses, The angle at a joint

### The landmarks of a pose

Function · `MarksOn` · **held**

- Owner: ghalaax
- Parameters: { draw: (rule), words: language.InterfaceWords, language: language.AppLanguage, counts: std/algebra.Counts }
- Serves: Practise yoga on one's own, guided
- Depends on: A landmark on the body, Words of the interface, The app's language

## Poselia · Packages

### Continuous integration

Package · `ContinuousIntegration`

- Owner: ghalaax
- Name: ci
- Version: 0.3.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../ci/releases/0.3.0
- Serves: Practise yoga on one's own, guided

### Geometry

Package · `Geometry`

- Owner: ghalaax
- Name: geometry
- Version: 0.1.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../libs/geometry/releases/0.1.0
- Serves: Practise yoga on one's own, guided

### Trame

Package · `Language`

- Owner: ghalaax
- Name: trame
- Version: 94
- How it joins the graph: language
- Where it comes from: path
- Its path: ../../generations/g94
- Serves: Practise yoga on one's own, guided

### The standard library

Package · `StandardLibrary`

- Owner: ghalaax
- Name: std
- Version: 0.13.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../std/releases/0.13.0
- Serves: Practise yoga on one's own, guided

## Poselia · Practice

### Breaths to say a cue

Requirement · `BreathsToSay` · **held**

- Owner: ghalaax
- Parameters: { spoken: (rule), counts: std/algebra.Counts }
- Refines: The breath sets the pace
- Depends on: How long words take to say

### A movement goes as a breath goes

Requirement · `Eased` · **held**

- Owner: ghalaax
- Parameters: { easing: practice.BreathEasing, counts: std/algebra.Counts }
- Refines: The breath sets the pace
- Depends on: How a movement eases

### A hold of whole breaths

Requirement · `HoldPhases` · **held**

- Owner: ghalaax
- Parameters: { counts: std/algebra.Counts }
- Refines: The breath sets the pace

### How full the lungs are

Requirement · `LungsFull` · **held**

- Owner: ghalaax
- Parameters: { counts: std/algebra.Counts }
- Refines: The breath sets the pace

### Where a practice is

Requirement · `MomentAt` · **held**

- Owner: ghalaax
- Parameters: { counts: std/algebra.Counts }
- Refines: The breath sets the pace

### How a movement eases

Decision · `BreathEasing`

- Decided by: ghalaax
- Value: { half: 0.5, power: 3 }
- Rejected: A straight line, the figure jerks into each movement and stops dead at its end; A square, the start and the end are still too sudden for a breath

### Names of the player

Decision · `PlayerNames`

- Decided by: ghalaax
- Value: { player: player, stage: stage, badge: badge, views: views, lungs: lungs, said: said, held: held, controls: controls, progress: progress, done: done, note: note, markList: marks, lungsVariable: --lungs, progressVariable: --progress, separator:  ·  }

### Criteria of breaths to say a cue

Acceptance criteria · `BreathsToSayCriteria` · **held**

- Owner: ghalaax
- Accepts: Breaths to say a cue

### Criteria of a movement that goes as a breath goes

Acceptance criteria · `EasedCriteria` · **held**

- Owner: ghalaax
- Accepts: A movement goes as a breath goes

### Criteria of a hold of whole breaths

Acceptance criteria · `HoldPhasesCriteria` · **held**

- Owner: ghalaax
- Accepts: A hold of whole breaths

### Criteria of how full the lungs are

Acceptance criteria · `LungsFullCriteria` · **held**

- Owner: ghalaax
- Accepts: How full the lungs are

### Criteria of where a practice is

Acceptance criteria · `MomentAtCriteria` · **held**

- Owner: ghalaax
- Accepts: Where a practice is

### The moment of a practice

Function · `MomentOf` · **held**

- Owner: ghalaax
- Parameters: { at: (rule), eased: (rule), lungs: (rule), bodyAt: (rule), marksOn: marks.MarksOn, sides: (rule), when: marks.MarksWhen, words: language.InterfaceWords, language: language.AppLanguage, placeholders: content.CuePlaceholders, counts: std/algebra.Counts, texts: std/algebra.Texts }
- Serves: Practise yoga on one's own, guided, The breath sets the pace
- Depends on: Where a practice is, A movement goes as a breath goes, How full the lungs are, The body between two poses, The landmarks of a pose, The legs in front and behind, When the landmarks are drawn, Words of the interface, The app's language, Placeholders of a cue

### Play a practice

Function · `PlayPractice` · **held**

- Owner: ghalaax
- Parameters: { screen: architecture.Screen, frames: std/platform.AnimationFrames, voice: std/platform.SpeechVoice, awake: std/platform.ScreenAwake, bowl: architecture.Bowl, choice: settings.VoiceChoice, marking: settings.MarksChoice, practiceOf: practice.PracticeOf, momentOf: practice.MomentOf, words: language.InterfaceWords, language: language.AppLanguage, counts: std/algebra.Counts, stageViews: stage.StageViews }
- Serves: Practise yoga on one's own, guided
- Depends on: Screen, Bowl, The voice the person chose, The landmarks the person chose, A practice, The moment of a practice, Words of the interface, The app's language, Views of the stage

### A practice

Function · `PracticeOf` · **held**

- Owner: ghalaax
- Parameters: { breathOf: (rule), key: (rule), holdPhases: (rule), toSay: (rule), counts: std/algebra.Counts }
- Serves: Practise yoga on one's own, guided, The breath sets the pace
- Depends on: The breath of a moment, A pose ready to move, A hold of whole breaths, Breaths to say a cue

## Poselia · Principles

### The breath is the clock

Architecture decision · `BreathIsTheClock` · **held**

- Decided by: ghalaax
- Context: A timer in seconds makes a person follow a clock; yoga follows the breath, whose length differs from one person to the next and from one day to the next.
- Consequences: The person's pattern (four phases) is kept in the preferences; a hold written in seconds becomes whole breaths, so that a chime falls at the end of a breath; the animation of a sequence follows the phases.
- Rejected: Two modes, timer and breath, two ways to count the same practice, and the timer would win by habit
- Serves: The breath sets the pace
- Applied by: The breath of a moment, A hold of whole breaths

### The content is data, behind a port

Architecture decision · `ContentAsData` · **unknown**

- Decided by: ghalaax
- Context: The content grows and is corrected by people who do not write code; it must be checked at every build, reviewed in each language, and later updated without a new version of the app.
- Consequences: Each kind of content is a dataset with its rules and its languages; the app never names where the rows come from, it asks the port. A content pack will carry its version (the fingerprint of its rows) and the version of its schema.
- Rejected: A node per pose, content would be code, and a friend who checks a cue would read the graph; A server from the start, an app that works offline on the mat comes first
- Serves: Content checked by people who practise
- Applied by: Poses, Content

### The person's language, among those offered

Architecture decision · `LanguageOffered` · **held**

- Decided by: ghalaax
- Context: French and English from the start, others later; a pose half translated would teach wrongly in one of them.
- Consequences: The languages offered are a decision the datasets read: a text missing in one is an error. The words of the interface are catalogs, one per language.
- Rejected: Translating at run time, a cue translated by a machine is not checked by someone who practises
- Serves: In the person's language
- Applied by: Languages offered, The language of the app

### A page first, the phones after

Architecture decision · `PageFirst` · **unknown**

- Decided by: ghalaax
- Context: The app must be tried and shown before it is installed: a page shared as a link is the shortest way to the friends who review it.
- Consequences: The component runs in a browser; its realizations are the browser's, and the phones' will be bound in their own environment, without the app changing.
- Rejected: A native app from the start, two code bases, and nothing to show before the stores
- Serves: Practise yoga on one's own, guided
- Applied by: Poselia in a browser, Poselia's page, The page opens

### Said aloud, the screen awake

Architecture decision · `SaidAloud` · **unknown**

- Decided by: ghalaax
- Context: A person in a pose cannot read a phone on the floor (assumption "The phone stays on the mat").
- Consequences: A voice port says texts in the chosen language; each kind of saying (the breath, the cues, the measures) can be turned off in the settings; a port keeps the screen awake.
- Rejected: Recorded voices, every text in every language, recorded again at each correction
- Serves: Practise yoga on one's own, guided
- Applied by: The phone stays on the mat, Play a practice

## Poselia · Product

### The breath sets the pace

Goal · `BreathSetsThePace`

- Owner: ghalaax

### Content checked by people who practise

Goal · `CheckedContent`

- Owner: ghalaax

### In the person's language

Goal · `InTheirLanguage`

- Owner: ghalaax

### Practise yoga on one's own, guided

Goal · `PractiseGuided`

- Owner: ghalaax

### The breath of a moment

Requirement · `BreathOf` · **held**

- Owner: ghalaax
- Parameters: { fallback: product.DefaultBreath, time: std/measures.Time }
- Refines: The breath sets the pace
- Depends on: The breath of someone who has set nothing

### The language of the app

Requirement · `ChosenLanguage` · **held**

- Owner: ghalaax
- Parameters: { tags: std/measures.LanguageTags, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Refines: In the person's language

### The breath of someone who has set nothing

Decision · `DefaultBreath`

- Decided by: ghalaax
- Value: { inhale: 4 s, holdTop: 0 h, exhale: 4 s, holdBottom: 0 h }
- Rejected: A timer in seconds, the person would follow a clock instead of their breath

### The phone stays on the mat

Assumption · `PhoneOnTheMat` · **unknown**

- Owner: ghalaax
- Check before: 1 March 2027

### Criteria of the breath of a moment

Acceptance criteria · `BreathOfCriteria` · **held**

- Owner: ghalaax
- Accepts: The breath of a moment

### Criteria of the language of the app

Acceptance criteria · `ChosenLanguageCriteria` · **held**

- Owner: ghalaax
- Accepts: The language of the app

## Poselia · Scenarios

### Moments of the poses held

Decision · `HoldMoments`

- Decided by: ghalaax
- Value: { far: bhujangasana, sample: 0.5, end: 600, mute: 60, unmute: 120, learnt: 5, seeds: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, lengths: 3, 6, 9, 12, drawnSample: 0.25, differentAtLeast: 8, compared: 9 }

### The device of the scenarios

Decision · `ScenarioDevice`

- Decided by: ghalaax
- Value: { languages: en-GB }

### Moments a scenario looks at

Decision · `ScenarioMoments`

- Decided by: ghalaax
- Value: { into: 6, paused: 10, resumed: 2, end: 120, second: 2, third: 3, sample: 0.25, footHighest: 0.3 }

### Moments of the settings a scenario looks at

Decision · `SettingsMoments`

- Decided by: ghalaax
- Value: { longer: 2, inhale: 5, taps: 0, 5, 11, measuredIn: 5, measuredOut: 6, into: 5 }

### The device's languages, given

Function · `GivenLanguages` · **held**

- Owner: ghalaax
- Parameters: { device: scenarios.ScenarioDevice }
- Depends on: The device of the scenarios

### A bowl that counts

Function · `RecordedBowl` · **held**

- Owner: ghalaax
- Parameters: { counts: std/algebra.Counts }
- Implements: Bowl, Bowl rung

### A screen that records

Function · `RecordedScreen` · **held**

- Owner: ghalaax
- Implements: Screen, Views shown

### What the scenarios check

Message catalog · `ScenarioChecks`

- Owner: ghalaax
- Written in: English

### The app in memory

Technical choice · `InMemory` · **held**

- Decided by: ghalaax
- Context: A scenario reads what the app would show and keeps, the same every time, without a browser.
- Consequences: The screen and what records it are chosen together: a scenario reads the views the app showed.
- Chooses: A screen that records, A bowl that counts, The device's languages, given
- In: Test

### The body stays on the floor

Scenario · `BodyStaysOnTheFloor` · **held**

- Owner: ghalaax
- Parameters: { home: app.ShowHome, shown: architecture.ViewsShown, time: std/platform.TimeTurned, moments: scenarios.ScenarioMoments, heights: (rule), touching: body.Touching, movement: body.Movement, words: language.WordsEn, say: scenarios.ScenarioChecks, counts: std/algebra.Counts }
- Verifies: A practice, The moment of a practice, Play a practice, The body between two poses, The heights of the body's surface, A leg that steps, A leg on its foot, A hand on its way, A foot on its way, The space of the mat, A pose ready to move, The trunk from its angles, A limb reaches its end
- In: Test
- Depends on: Show the home page, Views shown, Moments a scenario looks at, The heights of the body's surface, Touching the floor, How a body moves, Words in English, What the scenarios check

### Sequences drawn by lot

Scenario · `DrawnSequencesMakeSense` · **held**

- Owner: ghalaax
- Parameters: { drawn: composing.DrawnSequence, composed: composing.ComposedSequence, practiceOf: practice.PracticeOf, momentOf: practice.MomentOf, poses: content.Poses, sense: (rule), heights: (rule), touching: body.Touching, movement: body.Movement, moments: scenarios.HoldMoments, say: scenarios.ScenarioChecks, counts: std/algebra.Counts }
- Verifies: A sequence drawn by lot, A sequence composed, A sequence that makes sense, Where the leading leg goes, Rising on a breath in, A practice, The moment of a practice
- In: Test
- Depends on: A sequence drawn by lot, A sequence composed, A practice, The moment of a practice, Poses, A sequence that makes sense, The heights of the body's surface, Touching the floor, How a body moves, Moments of the poses held, What the scenarios check

### Holding the poses

Scenario · `HoldThePoses` · **held**

- Owner: ghalaax
- Parameters: { home: app.ShowHome, shown: architecture.ViewsShown, time: std/platform.TimeTurned, heard: std/platform.SpeechHeard, rung: architecture.BowlRung, defaults: composing.HoldingDefaults, moments: scenarios.HoldMoments, movement: body.Movement, words: language.WordsEn, say: scenarios.ScenarioChecks, counts: std/algebra.Counts, sequences: std/algebra.Sequences }
- Verifies: Show the composer, The composer, A sequence drawn by lot, A sequence composed, Play a practice, A practice, The moment of a practice, A hold of whole breaths, Breaths to say a cue, The voice the person chose, A bowl that counts
- In: Test
- Depends on: Show the home page, Views shown, Bowl rung, What a composed practice holds, Moments of the poses held, How a body moves, Words in English, What the scenarios check

### The language of the home page

Scenario · `HomeLanguage` · **held**

- Owner: ghalaax
- Parameters: { home: app.ShowHome, shown: architecture.ViewsShown, preferences: std/platform.PreferencesStore, names: language.PreferenceNames, english: language.English, french: language.French, wordsEn: language.WordsEn, wordsFr: language.WordsFr, say: scenarios.ScenarioChecks, counts: std/algebra.Counts, poses: content.Poses, rows: content.Sequences }
- Verifies: Show the home page, The home view, The app's language, Words of the interface, The drawing of a pose, The body of a pose, The content the app carries, The device's languages, given, A screen that records
- In: Test
- Depends on: Show the home page, Views shown, Names of the preferences, English, French, Words in English, Words in French, What the scenarios check, Poses, Sequences

### Learning a sequence

Scenario · `LearnTheSequence` · **held**

- Owner: ghalaax
- Parameters: { home: app.ShowHome, shown: architecture.ViewsShown, time: std/platform.TimeTurned, defaults: composing.HoldingDefaults, moments: scenarios.HoldMoments, words: language.WordsEn, say: scenarios.ScenarioChecks, sequences: std/algebra.Sequences, poses: content.Poses, preferences: std/platform.PreferencesStore, names: language.PreferenceNames, counts: std/algebra.Counts }
- Verifies: Show the home page, Play a practice, A practice, The moment of a practice, The landmarks of a pose, A landmark on the body, The landmarks the person chose
- In: Test
- Depends on: Show the home page, Views shown, What a composed practice holds, Moments of the poses held, Words in English, What the scenarios check, Poses, Names of the preferences

### The person's breath and voice

Scenario · `PersonSettings` · **held**

- Owner: ghalaax
- Parameters: { home: app.ShowHome, shown: architecture.ViewsShown, heard: std/platform.SpeechHeard, time: std/platform.TimeTurned, breath: settings.PersonBreath, expected: scenarios.SettingsMoments, words: language.WordsEn, say: scenarios.ScenarioChecks, counts: std/algebra.Counts, sequences: std/algebra.Sequences }
- Verifies: Show the settings, The settings view, The person's breath, The voice the person chose, A breath measured by tapping, A phase set by the person, Show the home page
- In: Test
- Depends on: Show the home page, Views shown, The person's breath, Moments of the settings a scenario looks at, Words in English, What the scenarios check

### A practice follows the breath

Scenario · `PracticeFollowsTheBreath` · **held**

- Owner: ghalaax
- Parameters: { home: app.ShowHome, shown: architecture.ViewsShown, time: std/platform.TimeTurned, heard: std/platform.SpeechHeard, screen: std/platform.ScreenKeptAwake, moments: scenarios.ScenarioMoments, words: language.WordsEn, english: language.English, say: scenarios.ScenarioChecks, counts: std/algebra.Counts, sequences: std/algebra.Sequences }
- Verifies: Play a practice, A practice, The moment of a practice, Show the home page
- In: Test
- Depends on: Show the home page, Views shown, Moments a scenario looks at, Words in English, English, What the scenarios check

## Poselia · SDLC

### How the page is opened

Decision · `PageOpening`

- Decided by: ghalaax
- Value: { settle: 1, play: 5 }

### When the preview runs on GitHub, and what it keeps there

Decision · `PreviewOnGitHub`

- Decided by: ghalaax
- Value: { on: { manual: true, branches: main }, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30, evidence: { days: 90 } } }
- Rejected: At each pull request, a preview is placed where it is served: a pull request would place a page nobody merged; On a schedule, nothing changes the page between two pushes; The evidence not kept, what was checked, by whom and on which page would stay on a machine GitHub throws away; GitHub's ninety days for the page too, a preview replaced every push need not stay three months

### What the scenarios of the SDLC write

Decision · `SdlcScenarioData`

- Decided by: ghalaax
- Value: { error: The page broke, page: <!doctype html><title>Poselia</title> }

### Where the page is served

Decision · `ServedPage`

- Decided by: ghalaax
- Value: { path: public/index.html }
- Rejected: A file per version, a person opens one address; the dossiers keep which version was placed, and when

### The SDLC is in the graph

Architecture decision · `SdlcInTheGraph` · **unknown**

- Decided by: ghalaax
- Context: A version reached people when its author had looked at it: what was checked, by whom, on which page, was nowhere.
- Consequences: trame ship refuses a version while a check, a review or a scenario does not hold, says whose it is, and keeps the dossier of each version shipped.
- Rejected: A script of continuous integration beside the graph, the steps and their reasons would live in two places, and the graph would not know what was checked; A review in a pull request, it says neither which rows were seen nor in which language; a change to a row would not undo it
- Serves: Content checked by people who practise, Practise yoga on one's own, guided
- Applied by: A preview, A public version, The page opens, On a phone, The content, reviewed, Open the page, Place the page, Code serves the product, Each decision of architecture serves the product, The preview's workflow, The preview's script, The files that run it elsewhere

### Poselia's SDLC

Component · `PoseliaSdlc`

- Owner: ghalaax
- Language: typescript
- Startup: { exposure: std/tooling.ProgramCommands }
- Deployed in: A machine

### Each decision of architecture serves the product

Architecture rule · `AdrsServeTheProduct` · **held**

- Owner: ghalaax

### Code serves the product

Architecture rule · `CodeServesTheProduct` · **held**

- Owner: ghalaax

### What the page is asked

Function · `PageSelectors` · **held**

- Owner: ghalaax
- Parameters: { screen: app.ScreenNames, composer: composing.ComposerNames, player: practice.PlayerNames, html: std/html.Html, css: std/html.Css }
- Serves: Practise yoga on one's own, guided
- Depends on: Names of the screen, Names of the composer, Names of the player

### Open the page

Entry point · `OpenThePage` · **held**

- Owner: ghalaax
- Trigger: { type: command, name: open-page }
- Parameters: { browser: std/tooling.HeadlessBrowser, files: std/tooling.Files, page: sdlc.PageFile, offered: content.Languages, selectors: sdlc.PageSelectors, opening: sdlc.PageOpening, say: sdlc.SdlcWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Serves: Practise yoga on one's own, guided
- Part of: Poselia's SDLC
- Depends on: Poselia's page, Languages offered, What the page is asked, How the page is opened, What the programs of the SDLC say

### Place the page

Entry point · `PlaceThePage` · **held**

- Owner: ghalaax
- Trigger: { type: command, name: place-page }
- Parameters: { files: std/tooling.Files, page: sdlc.PageFile, served: sdlc.ServedPage, say: sdlc.SdlcWords, exit: std/system.ExitStatus }
- Serves: Practise yoga on one's own, guided
- Part of: Poselia's SDLC
- Depends on: Poselia's page, Where the page is served, What the programs of the SDLC say

### What the scenarios of the SDLC check

Message catalog · `SdlcChecks`

- Owner: ghalaax
- Written in: English

### What the programs of the SDLC say

Message catalog · `SdlcWords`

- Owner: ghalaax
- Written in: English

### On the machine

Technical choice · `OnTheMachine` · **unknown**

- Decided by: ghalaax
- Context: A check must open the page a person opens: the file delivered, in a real browser.
- In: A machine

### The SDLC in memory

Technical choice · `SdlcInMemory` · **held**

- Decided by: ghalaax
- Context: A program of the SDLC is code like the app's: its scenarios play it before it runs on a machine.
- In: Test

### A machine

Environment · `Machine`

- Owner: ghalaax

### The page is opened as a person would

Scenario · `OpeningThePage` · **held**

- Owner: ghalaax
- Parameters: { open: sdlc.OpenThePage, script: std/tooling.BrowserScripted, files: std/tooling.Files, page: sdlc.PageFile, selectors: sdlc.PageSelectors, exit: std/system.ExitStatus, say: sdlc.SdlcWords, offered: content.Languages, data: sdlc.SdlcScenarioData, checks: sdlc.SdlcChecks, counts: std/algebra.Counts }
- Verifies: Open the page, What the page is asked
- In: Test
- Depends on: Open the page, Poselia's page, What the page is asked, What the programs of the SDLC say, Languages offered, What the scenarios of the SDLC write, What the scenarios of the SDLC check

### The page is placed where it is served

Scenario · `PlacingThePage` · **held**

- Owner: ghalaax
- Parameters: { place: sdlc.PlaceThePage, files: std/tooling.Files, kept: std/tooling.FilesKept, page: sdlc.PageFile, served: sdlc.ServedPage, exit: std/system.ExitStatus, data: sdlc.SdlcScenarioData, checks: sdlc.SdlcChecks }
- Verifies: Place the page
- In: Test
- Depends on: Place the page, Poselia's page, Where the page is served, What the scenarios of the SDLC write, What the scenarios of the SDLC check

### People who try it on a phone

Role · `PhoneTesters`

- Owner: ghalaax
- People: ghalaax

### A teacher who practises

Role · `Teachers`

- Owner: ghalaax
- People: 
- Never on their own work: true

### Poselia's page

Artefact · `PageFile` · **unknown**

- Owner: ghalaax
- Media type: text/html; charset=utf-8
- Produced by: Poselia's page

### The preview's script

Artefact · `PreviewScript` · **unknown**

- Owner: ghalaax
- Path: scripts/ship-preview.sh
- Media type: text/x-shellscript
- Runs elsewhere: A preview

### The preview's workflow

Artefact · `PreviewWorkflow` · **unknown**

- Owner: ghalaax
- Path: ../../.github/workflows/poselia-preview.yml
- Media type: application/yaml
- Runs elsewhere: A preview
- Its writer's settings: When the preview runs on GitHub, and what it keeps there
- Makes available, once shipped: Poselia's page

### On a phone

Check · `OnAPhone` · **unknown**

- Owner: ghalaax
- Steps: Open the page in Chrome on an Android phone, and in Safari on an iPhone, Play the sun salutation: the voice says the breath and the cues, the screen stays awake, Hold the poses: the bowl rings at each change, the voice says each pose, The landmarks follow the body, in the flow and in the holds
- Checks: Poselia's page
- Signed by: People who try it on a phone
- Verifies: The browser's bowl

### The page opens

Check · `PageOpens` · **unknown**

- Owner: ghalaax
- Checks: Poselia's page
- Run by: Open the page
- Verifies: The browser's screen, The browser's stage

### The content, reviewed

Review · `ContentReviewed` · **unknown**

- Owner: ghalaax
- Reviews: Poses, Sequences
- By the role: A teacher who practises

### A preview

Shipment · `Preview` · **unknown**

- Owner: ghalaax
- Target: preview
- Ships: Poselia's page
- Deployed by: Place the page
- Programs assembled for: A machine
- Follows the policy: The way of a preview

### A public version

Shipment · `PublicVersion` · **unknown**

- Owner: ghalaax
- Target: public
- Ships: Poselia's page
- Deployed by: Place the page
- Programs assembled for: A machine
- Follows the policy: The way of a public version

### The files that run it elsewhere

Shipment · `RunnersWritten` · **unknown**

- Owner: ghalaax
- Target: repository
- Ships: The preview's workflow, The preview's script

### The page is checked, by hand too

Obligation · `AllChecks`

- Owner: ghalaax
- Serves: Practise yoga on one's own, guided

### The code shown is verified

Obligation · `CodeVerified`

- Owner: ghalaax
- A gap weighs: error
- Serves: Practise yoga on one's own, guided

### The code shown is verified, a gap said

Obligation · `CodeVerifiedSaid`

- Owner: ghalaax
- A gap weighs: warning
- Serves: Practise yoga on one's own, guided

### The content is reviewed by a teacher

Obligation · `ContentSeen`

- Owner: ghalaax
- A gap weighs: error
- Serves: Content checked by people who practise

### The decisions hold

Obligation · `DecisionsApplied`

- Owner: ghalaax
- Serves: Practise yoga on one's own, guided

### The packages are safe

Obligation · `PackagesSafe`

- Owner: ghalaax
- Serves: Practise yoga on one's own, guided

### The product holds

Obligation · `ProductServed`

- Owner: ghalaax
- Serves: Practise yoga on one's own, guided

### The page is checked by programs

Obligation · `ProgramChecks`

- Owner: ghalaax
- Serves: Practise yoga on one's own, guided

### The rules of the app hold

Obligation · `RulesHeld`

- Owner: ghalaax
- Serves: Practise yoga on one's own, guided

### The way of a preview

Policy · `PreviewMode`

- Owner: ghalaax
- Its obligations: The code shown is verified, a gap said, The page is checked by programs, The rules of the app hold, The packages are safe

### The way of a public version

Policy · `PublicMode`

- Owner: ghalaax
- Its obligations: The code shown is verified, The product holds, The decisions hold, The content is reviewed by a teacher, The page is checked, by hand too, The rules of the app hold, The packages are safe

## Poselia · Settings

### A phase set by the person

Requirement · `AdjustedBreath` · **held**

- Owner: ghalaax
- Parameters: { b: settings.BreathBounds }
- Refines: The breath sets the pace
- Depends on: Bounds of a breath

### A breath read back

Requirement · `BreathRead` · **held**

- Owner: ghalaax
- Parameters: { b: settings.BreathBounds, values: std/algebra.ValueTypes }
- Refines: The breath sets the pace
- Depends on: Bounds of a breath

### A breath measured by tapping

Requirement · `MeasuredBreath` · **held**

- Owner: ghalaax
- Parameters: { b: settings.BreathBounds, tapping: settings.Tapping, counts: std/algebra.Counts }
- Refines: The breath sets the pace
- Depends on: Bounds of a breath, Tapping

### Bounds of a breath

Decision · `BreathBounds`

- Decided by: ghalaax
- Value: { step: 0.5 s, least: 1 s, most: 20 s, none: 0 h }

### Names of the settings

Decision · `SettingsNames`

- Decided by: ghalaax
- Value: { settings: settings, phases: phases, measure: measure, tap: tap }

### Tapping

Decision · `Tapping`

- Decided by: ghalaax
- Value: { least: 3 }
- Rejected: Two taps, one gap measures a breath in, and nothing of the breath out

### What the practice says and rings

Decision · `VoiceParts`

- Decided by: ghalaax
- Value: { voice: poselia.voice, breath: poselia.voice.breath, cues: poselia.voice.cues, bowl: poselia.bowl }

### Criteria of a phase set by the person

Acceptance criteria · `AdjustedBreathCriteria` · **held**

- Owner: ghalaax
- Accepts: A phase set by the person

### Criteria of a breath read back

Acceptance criteria · `BreathReadCriteria` · **held**

- Owner: ghalaax
- Accepts: A breath read back

### Criteria of a breath measured by tapping

Acceptance criteria · `MeasuredBreathCriteria` · **held**

- Owner: ghalaax
- Accepts: A breath measured by tapping

### The landmarks the person chose

Function · `MarksChoice` · **held**

- Owner: ghalaax
- Parameters: { preferences: std/platform.PreferencesStore, names: language.PreferenceNames }
- Serves: Practise yoga on one's own, guided
- Depends on: Names of the preferences

### The person's breath

Function · `PersonBreath` · **held**

- Owner: ghalaax
- Parameters: { preferences: std/platform.PreferencesStore, names: language.PreferenceNames, read: (rule), texts: std/algebra.Texts }
- Serves: The breath sets the pace
- Depends on: Names of the preferences, A breath read back

### The settings view

Function · `SettingsViewOf` · **held**

- Owner: ghalaax
- Parameters: { words: language.InterfaceWords, language: language.AppLanguage }
- Serves: The breath sets the pace, Practise yoga on one's own, guided
- Depends on: Words of the interface, The app's language

### Show the settings

Function · `ShowSettings` · **held**

- Owner: ghalaax
- Parameters: { screen: architecture.Screen, breath: settings.PersonBreath, voice: settings.VoiceChoice, view: settings.SettingsViewOf, speech: std/platform.SpeechVoice, adjust: (rule), measure: (rule), defaults: product.DefaultBreath, counts: std/algebra.Counts }
- Constants: { taps: { value: 7, meaning: The taps kept to measure a breath: the last three breaths in and out } }
- Serves: The breath sets the pace, Practise yoga on one's own, guided
- Depends on: Screen, The person's breath, The voice the person chose, The settings view, A phase set by the person, A breath measured by tapping, The breath of someone who has set nothing

### The voice the person chose

Function · `VoiceChoice` · **held**

- Owner: ghalaax
- Parameters: { preferences: std/platform.PreferencesStore, parts: settings.VoiceParts }
- Serves: Practise yoga on one's own, guided
- Depends on: What the practice says and rings

## Poselia · Sound

### Sound of the bowl

Decision · `BowlSound`

- Decided by: ghalaax
- Value: { fundamental: 220, attack: 0.01, silence: 0, length: 9, volume: 0.35, partials: { ratio: 1, gain: 0.5, decay: 9, spread: 0.45 }, { ratio: 2.71, gain: 0.25, decay: 6, spread: 0.85 }, { ratio: 5.06, gain: 0.13, decay: 3.5, spread: 1.3 }, { ratio: 8, gain: 0.06, decay: 2, spread: 1.7 }, mallet: 0.05, malletDecay: 0.01, malletSpan: 4, malletFilter: 1800 }
- Rejected: A recording, a sound file would weigh more than the whole app, and a recording cannot be tuned; A plain chime, a sine that stops sounds like a notification, not like a bowl that keeps ringing as one breathes

### The browser's bowl

Implementation · `BrowserBowl` · **unknown**

- Owner: ghalaax
- Parameters: { sound: sound.BowlSound, audio: std/web.WebAudioApi, counts: std/algebra.Counts }
- Implements: Bowl
- Depends on: Sound of the bowl

## Poselia · The stage

### Look of the mannequin

Decision · `MannequinLook`

- Decided by: ghalaax
- Value: { wood: 14531212, woodRoughness: 0.62, joint: 12093786, jointRoughness: 0.5, thigh: 0.07, 0.05, shin: 0.05, 0.04, upperArm: 0.05, 0.04, forearm: 0.04, 0.03, abdomen: 0.1, 0.1, shoulderBar: 0.05, 0.05, neck: 0.04, 0.04, hip: 0.07, knee: 0.05, ankle: 0.04, shoulder: 0.06, elbow: 0.04, wrist: 0.03, waist: 0.1, head: 0.11, nose: 0.02, handForward: 0.08, hand: 0.09, 0.02, 0.04, footDown: 0.04, footForward: 0.04, foot: 0.12, 0.04, 0.05, toesForward: 0.03, toes: 0.04, 0.02, 0.04, pelvisUp: 0.03, pelvis: 0.1, 0.1, 0.16, chestUp: 0.14, chest: 0.11, 0.17, 0.15, limbSides: 20, sphereSides: 24, 16, ellipseSides: 28, 18, middle: 0.5, shortest: 0 }
- Rejected: A body with skin and muscles, a mannequin shows the angles of the joints, which is what a pose is

### Look of the landmarks

Decision · `MarkStyle`

- Decided by: ghalaax
- Value: { colour: 15501854, solid: 0.95, soft: 0.55, lineSides: 8, dotSides: 16, 12, head: 0.03, 0.07, 14, inFront: 20, marginX: 4, marginY: 14, layer: labels, label: label, degrees: degrees, xVariable: --x, yVariable: --y }

### Light of the stage

Decision · `StageLight`

- Decided by: ghalaax
- Value: { sky: 16777215, ground: 9080729, ambient: 0.85, sunColour: 16773600, sun: 0.85, sunAt: 1.2, 4, 2.4, sunAims: -0.5, 0, 0, shadowMap: 2048, shadowExtent: 2.4, shadowNear: 0.5, shadowFar: 10, shadowBias: 0, floor: 14, floorShadow: 0.13, quarterTurn: -1.57, mat: 1.95, 0.01, 0.64, matAt: -0.47, 0, 0, matColour: 4086892, matRoughness: 0.95, lens: 34, nearest: 0.05, farthest: 60, sharpest: 2 }

### Views of the stage

Decision · `StageViews`

- Decided by: ghalaax
- Value: { views: { threeQuarter: 0.75, 0.24, profile: 0, 0.1, face: 1.57, 0.12, top: 0.35, 1.25 }, start: 0.75, 0.24, wide: 4.1, tall: 4.9, tallBelow: 0.95, closest: 2, farthest: 8, follow: 0.06, turn: 0.12, above: 0.08, aim: 0, 1, 0, dragAcross: 0.01, dragAlong: 0.01, lowest: -0.05, highest: 1.4, wheel: 0 }

### The browser's stage

Implementation · `BrowserStage` · **unknown**

- Owner: ghalaax
- Parameters: { look: stage.MannequinLook, light: stage.StageLight, views: stage.StageViews, style: stage.MarkStyle, counts: std/algebra.Counts, html: std/html.Html }
- Implements: Stage
- Uses: three.js, three.js, its types
- Depends on: Look of the mannequin, Light of the stage, Views of the stage, Look of the landmarks

### three.js

Package · `ThreePackage` · **held**

- Owner: ghalaax
- Name: three
- Version: 0.186.0
- In the registry: https://www.npmjs.com/package/three
- What it may do: display

### three.js, its types

Package · `ThreeTypes` · **held**

- Owner: ghalaax
- Name: @types/three
- Version: 0.186.0
- In the registry: https://www.npmjs.com/package/@types/three
