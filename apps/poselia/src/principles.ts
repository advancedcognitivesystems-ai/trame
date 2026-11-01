/** Poselia · Principles */

import { adr } from "#trame/kinds/adr"
import { PractiseGuided, BreathSetsThePace, InTheirLanguage, CheckedContent, BreathOf, HoldInBreaths, ChosenLanguage, PhoneOnTheMat } from "./product"
import { Poses, Languages } from "./content"
import { ContentSource, PoseliaApp } from "./architecture"
import { PreferencesStore, DeviceLanguages, SpeechVoice, ScreenAwake } from "#std/platform"
import { PoseliaPage } from "./app"
import { PlayPractice } from "./practice"
import { PageOpens } from "./sdlc"

// The decisions the rest follows. Each names what applies it; one that nothing applies yet is work left.

/**
 * The content is data, behind a port
 * The poses, the sequences and the exercises are datasets the app reads through one port: its first realization reads
 * the rows the app carries, an update downloaded later will be another.
 */
export const ContentAsData = adr({
  owner: "ghalaax",
  context: "The content grows and is corrected by people who do not write code; it must be checked at every build, reviewed in each language, and later updated without a new version of the app.",
  consequences: "Each kind of content is a dataset with its rules and its languages; the app never names where the rows come from, it asks the port. A content pack will carry its version (the fingerprint of its rows) and the version of its schema.",
  rejected: {
    "A node per pose": "content would be code, and a friend who checks a cue would read the graph",
    "A server from the start": "an app that works offline on the mat comes first",
  },
  serves: [CheckedContent],
  appliedBy: [Poses, ContentSource],
})

/**
 * The breath is the clock
 * A practice is timed by the person's breath, not by seconds: a movement lasts a phase, a hold lasts whole breaths, and
 * each level may set the breath (follow it, impose a ratio, exact timings, or a speed), the most specific winning.
 */
export const BreathIsTheClock = adr({
  owner: "ghalaax",
  context: "A timer in seconds makes a person follow a clock; yoga follows the breath, whose length differs from one person to the next and from one day to the next.",
  consequences: "The person's pattern (four phases) is kept in the preferences; a hold written in seconds becomes whole breaths, so that a chime falls at the end of a breath; the animation of a sequence follows the phases.",
  rejected: { "Two modes, timer and breath": "two ways to count the same practice, and the timer would win by habit" },
  serves: [BreathSetsThePace],
  appliedBy: [BreathOf, HoldInBreaths],
})

/**
 * The person's language, among those offered
 * Every text of the content is written in each language offered; the app speaks the one the person chose, or the
 * device's, or the first offered; the choice is kept on the device.
 */
export const LanguageOffered = adr({
  owner: "ghalaax",
  context: "French and English from the start, others later; a pose half translated would teach wrongly in one of them.",
  consequences: "The languages offered are a decision the datasets read: a text missing in one is an error. The words of the interface are catalogs, one per language.",
  rejected: { "Translating at run time": "a cue translated by a machine is not checked by someone who practises" },
  serves: [InTheirLanguage],
  appliedBy: [Languages, ChosenLanguage, PreferencesStore, DeviceLanguages],
})

/**
 * Said aloud, the screen awake
 * The phone stays on the mat: the breath, the cues and the angles are said by the platform's voice, and the screen is
 * kept awake during a practice.
 */
export const SaidAloud = adr({
  owner: "ghalaax",
  context: "A person in a pose cannot read a phone on the floor (assumption \"The phone stays on the mat\").",
  consequences: "A voice port says texts in the chosen language; each kind of saying (the breath, the cues, the measures) can be turned off in the settings; a port keeps the screen awake.",
  rejected: { "Recorded voices": "every text in every language, recorded again at each correction" },
  serves: [PractiseGuided],
  appliedBy: [SpeechVoice, ScreenAwake, PhoneOnTheMat, PlayPractice],
})

/**
 * A page first, the phones after
 * The app is first a page a browser opens as it is (trame deliver), then a web application, then Capacitor around the
 * same page for iPhone and Android.
 */
export const PageFirst = adr({
  owner: "ghalaax",
  context: "The app must be tried and shown before it is installed: a page shared as a link is the shortest way to the friends who review it.",
  consequences: "The component runs in a browser; its realizations are the browser's, and the phones' will be bound in their own environment, without the app changing.",
  rejected: { "A native app from the start": "two code bases, and nothing to show before the stores" },
  serves: [PractiseGuided],
  appliedBy: [PoseliaApp, PoseliaPage, PageOpens],
})
