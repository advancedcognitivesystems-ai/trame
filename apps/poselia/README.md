# Poselia

Poses, sequences, exercises: a yoga app for iPhone and Android, described with Trame. Each pose is shown still and
clear, each sequence moves with the person's breath, and a voice says what to do, in their language. The content is
data, reviewed by people who practise.

The graph is written by layers, one module each:

| Module | Holds |
|---|---|
| `product` | The goals; the requirements "The breath of a moment", "A hold counts in breaths", "The language of the app", with their criteria; the default breath; an assumption |
| `principles` | The decisions the rest follows: content as data, the breath as the clock, the person's language, said aloud with the screen awake, a page first |
| `architecture` | The component, its two environments (a browser, the scenarios in memory), the ports of its content, its screen and its bowl, the views it shows (home, player, moments, settings, composer) |
| `content` | The datasets: the poses (each with its level: standing, folded, lunge, plank, dog, lying on the front, kneeling, on all fours; and its landmarks), the sequences (rows in `src/data/`), with their rules and the languages offered; the ways between levels; "A sequence that makes sense", "Where the leading leg goes", "How long words take to say", with criteria |
| `language` | The language chosen when the app runs, and the words of the interface in French and English |
| `body` | The body in three dimensions on the mat, from the engine of the page "Salutation au soleil": its measures, how it moves, a pose as the pelvis, the spine and where the hands and feet go; the trunk from its angles, two-segment limbs (inverse kinematics), a hand on its way, a leg on its foot, a leg that steps, the body between two poses, the heights of its surface; "A pose rests on what it names" and "Every limb reaches", all with criteria |
| `drawing` | The small drawings of the lists: the body the engine places, seen from its right side |
| `practice` | A sequence played with the breath: where a practice is at a time, a movement eased as a breath goes (cubic), how full the lungs are, a hold of whole breaths, the breaths a cue takes to say; the practice (flowing, or each pose held), its moments (the body between two poses at each frame, or still while it is held) and its player |
| `marks` | The landmarks of a pose, as the page "Salutation au soleil" draws them: how they are drawn (dashes, widths, the arc of an angle, its measure rounded to 5°), a landmark on the body (lines, plumb lines, dots, arrows, angles, where its words sit), the landmarks of a pose in the app's language |
| `composing` | A practice of poses held: rising on a breath in, what a composed practice holds (six poses, five breaths), a sequence drawn by lot (seeded, the most varied of twelve draws), a sequence composed, the composer |
| `sound` | The singing bowl, made in the page with Web Audio: its partials, their beats and fades, the mallet's touch |
| `stage` | The mannequin in 3D, drawn by three.js (bundled into the page): its look, the light, the views (three quarters, side, front, top), the look of the landmarks, the browser's stage |
| `settings` | The person's breath (set half a second at a time, or measured by tapping), read back from the device; whether the voice speaks and what it says; whether the bowl rings |
| `app` | The home view, the entry point, the browser's realizations and the choices that bind them, the style, the delivery |
| `scenarios` | The app in memory (a screen that records, the device's languages given, time turned by hand, a voice that writes down, a bowl that counts) and seven scenarios: the language of the home page, a practice that follows the breath, the person's breath and voice, the body that stays on the floor, holding the poses, learning a sequence, sequences drawn by lot |
| `sdlc` | How a version reaches people: the roles (people who try it on a phone, a teacher who practises, never the rows' author), the page as an artefact, the programs of the SDLC (open the page in Chromium in each language and play a sequence until its landmarks show; place the page where it is served) with their machine and memory choices and two scenarios, the checks (the page opens; on a phone, by hand), the review of the poses and sequences, the obligations it applies from `#std/obligations` and its two policies (`PreviewMode`, `PublicMode`), the shipments (a preview, a public version, each following its policy), the files that run the preview elsewhere (a workflow of GitHub Actions and a Bash script, written by the writers of `ci` from the preview's plan, with the settings of the workflow: by hand or at a push on main, Ubuntu 24.04, Node.js 22) and their shipment, two rules applied from `#std/rules` (code serves the product, each ADR serves it) and the ADR "The SDLC is in the graph" |

It imports the standard library at a version (`std` 0.9.0 in `trame.json`), and the library of writers `ci` (0.1.0): the loading of a page, the device's
services (preferences, languages, a voice that says whether the device can speak, picks a voice of the language and keeps what it last failed with, the screen awake, the frames of the screen) with their browser realizations
and those of the scenarios, the HTML and SVG standards, the seeded draws, the rules its governance applies, the tooling of its SDLC. It installs one
package, three.js (with its types), which `trame deliver` bundles into the page; Playwright comes with the library.

```
../../trame.sh manifest    # writes where #std leads (the frozen version, through .trame/std)
../../trame.sh build       # checks the graph and writes docs/; the summary lists what is left
../../trame.sh deliver     # writes dist/poselia.html, a page a browser opens as it is
../../trame.sh ship Preview --by <name>          # delivers, opens the page in Chromium, places it in public/
../../trame.sh ship PublicVersion --by <name>    # refused until the phone check and the teacher's review hold
../../trame.sh ship RunnersWritten --by <name>   # writes .github/workflows/poselia-preview.yml and scripts/ship-preview.sh
bash scripts/ship-preview.sh <name>               # on another machine: prepares it as the plan says, then ships the preview
../../trame.sh evidence OnAPhone passed --by <name> --note "Pixel 7, Chrome"
../../trame.sh evidence ContentReviewed passed --by <teacher> [--subject <pose> --language fr]
```

What it does: the home page draws each pose and lists the sun salutation step by step; "Practise" plays it on a 3D
stage (a wooden mannequin on a mat, turned with a finger, seen from three quarters, the side, the front or above) with the
person's breath: each step lasts the phase it moves on, the body goes from one pose to the next as the engine of the page
"Salutation au soleil" moves it (the trunk by its angles, each arm and leg by two segments toward its hand or its foot,
the hands staying where they rest, the foot of a leg that steps going around the moving hip as the page has it), the
lungs fill and empty, each step is said aloud as it starts in a few words that fit its phase ("Breathe in. Arms
overhead"), the screen is kept awake. "Learn" plays it holding each pose three breaths: the movement in a few words,
then, as the hold starts, the whole cue. "Hold the poses" opens the composer: eight poses drawn by lot, from standing to
standing, each reached in one movement from the one before (one foot stepping at a time), never back and forth twice; the person draws again, adds a pose,
takes one out, sets how many poses a draw gives and how many breaths each pose is held, and practises it once it makes
sense. A singing bowl, synthesized in the page, rings as a practice starts and ends and, when the poses are held, as it
is time to move. The landmarks of each pose (as the page "Salutation au soleil" had them: numbered words on the mannequin, alignment lines, the plumb line under a knee, the dots where the body rests, the measured angle of a joint) are drawn in every practice, as the decision "When the landmarks are drawn" says: once on the still body while a pose is held, at a pause and at the end, and following the body while it moves to a pose; they are listed under the player, and a button shows or hides them, kept on the device. The voice is turned off and on from the player; on a device that cannot speak (the WebView of an Android app has no speech synthesis), the player and the settings say so and what to do (open the page in Chrome or Safari), and a voice that fails is said so on the player, with the browser's word for it. The voice speaks before the bowl rings, and the bowl's audio context asks for the latency of playback and is suspended once the bowl is silent, to leave the audio output to the voice; the settings set the breath (half a second at a time,
or by tapping along with it), whether the voice speaks, what it says, and whether the bowl rings.

What the build checks: each pose rests on what it names and on nothing else, and every limb reaches where the pose puts
its hand or its foot; hands that rest in two steps in a row rest in the same place; each step lasts with the default
breath; what the voice says when a step starts fits its phase; hands that rest on the floor rest at one place on the
mat in every pose; each pose has two to five landmarks, their words short enough for the stage; the sun salutation
makes sense; between any two poses a way between levels joins, at most one foot steps far (no forward bend straight
to a dog: both feet would jump back) and the body stays on the floor as the engine moves it (which is why there is no way from lying
on the front straight back to the child's pose: the thighs went 20 cm under the floor); the requirements by their
criteria; the app by its seven scenarios. One plays the whole sun salutation every quarter of a second and checks that
the body always rests on the floor, that nothing goes under it deeper than a step may sink (the front knee dips 9.6 cm as
the leg steps back to the plank, as in the page), that a leg that steps skims the floor, and that the hands, wherever
they rest, rest in one place. Another composes a practice, draws again, adds a pose too far and takes it out, practises
it to the end and checks that the body is still during each hold, that each hold says the breaths left and starts with
the whole cue, that the bowl rings once per movement and once at the end, and that nothing is said while the voice is
off. The last draws forty-eight sequences (twelve seeds, three to twelve poses), checks each makes sense and is the same
from the same seed, and plays each to check the body stays on the floor. Two more play the programs of the SDLC in
memory: the page check passes on a page that shows everything and fails, saying why in each language, on a page
without landmarks that raises an error; the page is placed only once built.

How a version ships: `trame ship Preview` delivers the page, fingerprints it, runs the program that opens it in
Chromium without a screen (in French then in English: the poses listed, the sequences shown, the sun salutation played
until its landmarks are listed, no error raised), records that evidence, and places the page in `public/index.html`
with a dossier under `evidence/shipments/`. `docs/pipelines.md` shows the pipelines step by step, as `trame ship`
runs them: what runs each step, its status, its latest evidence, and the files that run the preview elsewhere. Those
files are written from the preview's plan, which the engine computes from the graph: the workflow checks the repository
out, installs Node.js 22, the packages of Trame, of std and of Poselia from their lockfiles, Playwright's Chromium (as
its node in std says), ships with the person who started it, and keeps the evidence and the page whatever the preview
answered; the script does the same on another machine, from the person's name. Neither shipment lists what it must prove: its policy derives it from
what it reaches (g68). A preview proves the scenarios that verify the code the page and the programs wire (a function
none verifies is said), the checks a program runs, the rules and the packages; a public version also every requirement
of the goals the page serves, the decisions it applies, the review of the content it carries, the check by hand, and a
function no scenario verifies keeps it. A public version is refused until a person who tries it on a phone signs
the check by hand, and a teacher who practises (nobody holds the role yet: the author does not review their own rows)
approves each pose and sequence in each language; each one awaited is an issue of its role in the build. Each piece
of code says what verifies it, std's adapters included: the scenarios run in memory what they claim (the home page
verifies the content carried, the doubles of the screen, the bowl, the languages and the preferences; the practice the
time turned by hand, the voice written down and the screen kept awake); the check that opens the page in Chromium
verifies the screen, the stage, the page's loading, the languages, the preferences, the frames, Node's command line,
the disk (it looks for the page through the port of files first) and Playwright; the check on a phone verifies the
bowl, the voice and the screen kept awake, which only a person hears and sees. A decision or a choice is held only when
everything that applies it or that it chooses holds (g69), and a page or a check only for the code as it is (g70): the
page built and checked before a change of its code is to ship again. What stays unknown is what waits for a person:
the phone (and with it the browser's choice and the decision "Said aloud, the screen awake"), the teacher's review (and
with it the content and the decision "The content is data, behind a port"), the assumption "The phone stays on the
mat", and the public version with the decision "The SDLC is in the graph" it applies.

Next: exercises (rounds, rests, breath exercises), a teacher named for the review, a review mode in the app for them, more poses and
sequences (seated, twists, balances: new levels and ways between them, each checked against the floor), then a web
application and Capacitor.
