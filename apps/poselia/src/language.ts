/** Poselia · Language */

import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { fn } from "#trame/kinds/function"
import { PreferencesStore, DeviceLanguages } from "#std/platform"
import { InTheirLanguage, ChosenLanguage } from "./product"
import { Languages } from "./content"

// The language of the app is chosen when it runs: the person's choice kept on the device, or the device's, or the first
// offered (requirement "The language of the app"). The words of the interface are catalogs, one per language, each
// translating the French one; the content's texts are in the datasets.

/**
 * French
 */
export const French = decision<{ tag: string }>({ owner: "ghalaax", value: { tag: "fr" } })

/**
 * English
 */
export const English = decision<{ tag: string }>({ owner: "ghalaax", value: { tag: "en" } })

/**
 * Names of the preferences
 * The names under which the app keeps the person's choices on the device: prefixed by the app's name, so that two apps
 * of the same origin never mix them.
 */
export const PreferenceNames = decision<{ language: string; marks: string }>({
  owner: "ghalaax",
  value: { language: "poselia.language", marks: "poselia.marks" },
})

/**
 * The app's language
 * The language the app speaks now, and the person's choice of another one, kept on the device.
 */
export const AppLanguage = fn({
  owner: "ghalaax",
  serves: [InTheirLanguage],
  deps: { preferences: PreferencesStore, device: DeviceLanguages, offered: Languages, choose: ChosenLanguage, names: PreferenceNames },
  body: ({ preferences, device, offered, choose, names }) => ({
    current: () => choose(offered, preferences.get(names.language), device.languages()),
    choose: (tag: string) => preferences.set(names.language, tag),
  }),
})

/**
 * Words in French
 * What the interface says, in French.
 */
export const WordsFr = catalog({
  owner: "ghalaax",
  language: French,
  messages: () => ({
    languageName: () => "Français",
    appName: () => "Poselia",
    line: () => "Postures, enchaînements, exercices",
    poses: () => "Postures",
    sequences: () => "Enchaînements",
    language: () => "Langue",
    step: (n: number) => `Étape ${n}`,
    rounds: (n: number) => (n > 1 ? `${n} tours` : "un tour"),
    breath: (phase: string) => ({ inhale: "inspirez", holdTop: "retenez, poumons pleins", exhale: "expirez", holdBottom: "retenez, poumons vides" })[phase] ?? phase,
    leg: (side: string) => ({ right: "droite", left: "gauche" })[side] ?? side,
    play: () => "Pratiquer",
    pause: () => "Pause",
    resume: () => "Reprendre",
    again: () => "Recommencer",
    back: () => "Retour",
    stepOf: (n: number, total: number) => `Étape ${n} sur ${total}`,
    round: (n: number, total: number) => `Tour ${n} sur ${total}`,
    done: () => "Pratique terminée",
    said: (breath: string, cue: string) => `${breath.charAt(0).toUpperCase()}${breath.slice(1)}. ${cue}`,
    saidBreath: (breath: string) => `${breath.charAt(0).toUpperCase()}${breath.slice(1)}.`,
    settings: () => "Réglages",
    breathTitle: () => "Votre souffle",
    breathLine: () => "Chaque pratique suit ce rythme. Réglez chaque phase, ou mesurez-le en tapotant au rythme de votre souffle.",
    phase: (phase: string) => ({ inhale: "Inspiration", holdTop: "Rétention, poumons pleins", exhale: "Expiration", holdBottom: "Rétention, poumons vides" })[phase] ?? phase,
    seconds: (n: number) => `${n.toLocaleString("fr-FR")} s`,
    shorter: (phase: string) => `${phase} : plus courte`,
    longer: (phase: string) => `${phase} : plus longue`,
    minus: () => "−",
    plus: () => "+",
    measureTitle: () => "Mesurer en tapotant",
    measureLine: () => "Tapotez au début de chaque inspiration, puis au début de chaque expiration : trois fois suffisent.",
    tap: () => "Tap",
    taps: (n: number) => (n === 0 ? "" : n > 1 ? `${n} tapotements` : "1 tapotement"),
    reset: () => "Souffle par défaut",
    voiceTitle: () => "Voix et son",
    voicePart: (part: string) => ({ voice: "Voix", breath: "Dire le souffle", cues: "Dire les consignes", bowl: "Bol tibétain" })[part] ?? part,
    learn: () => "Apprendre",
    holdTitle: () => "Tenir les postures",
    holdLine: () => "Composez une suite de postures, ou laissez l’app la tirer au sort, et tenez chacune quelques souffles. Un bol tibétain sonne quand il est temps de passer à la suivante.",
    compose: () => "Composer",
    composed: () => "Ma suite de postures",
    composerLine: () => "Chaque posture suit la précédente en un seul mouvement, de debout à debout. Touchez une posture pour l’ajouter, touchez-la dans votre suite pour l’enlever.",
    countLabel: () => "Postures tirées",
    count: (n: number) => String(n),
    fewer: () => "Moins de postures",
    more: () => "Plus de postures",
    breathsLabel: () => "Souffles par posture",
    breaths: (n: number) => String(n),
    holdShorter: () => "Tenir moins longtemps",
    holdLonger: () => "Tenir plus longtemps",
    draw: () => "Tirer au sort",
    clear: () => "Tout enlever",
    chosenTitle: () => "Votre suite",
    libraryTitle: () => "Ajouter une posture",
    remove: (name: string) => `Enlever ${name}`,
    add: (name: string) => `Ajouter ${name}`,
    nothing: () => "Ajoutez des postures, ou tirez-en au sort.",
    notBegins: () => "Commencez debout.",
    notEnds: () => "Finissez debout.",
    jump: (from: string, to: string) => `De ${from} à ${to} : trop loin pour un seul mouvement.`,
    backAndForth: (before: string, now: string) => `${before} puis ${now} : un aller-retour de trop.`,
    repeat: (name: string) => `${name} deux fois de suite.`,
    breathsLeft: (n: number) => (n > 1 ? `Tenez · encore ${n} souffles` : "Tenez · dernier souffle"),
    mute: () => "Couper la voix",
    unmute: () => "Remettre la voix",
    marks: () => "Repères",
    degrees: (n: number) => `${n}°`,
    voiceFailed: (code: string) => `La voix n’a pas pu parler (le navigateur dit : ${code}). Coupez le bol dans les réglages pour voir s’il la gêne.`,
    noVoice: () => "Ce navigateur ne sait pas parler (c’est le cas dans une app Android) : ouvrez Poselia dans Chrome ou Safari pour entendre les consignes. Le bol, lui, sonne.",
    view: (name: string) => ({ threeQuarter: "3/4", profile: "Profil", face: "Face", top: "Dessus" })[name] ?? name,
  }),
})

/**
 * Words in English
 * What the interface says, in English.
 */
export const WordsEn = catalog({
  owner: "ghalaax",
  language: English,
  translates: WordsFr,
  messages: () => ({
    languageName: () => "English",
    appName: () => "Poselia",
    line: () => "Poses, sequences, exercises",
    poses: () => "Poses",
    sequences: () => "Sequences",
    language: () => "Language",
    step: (n: number) => `Step ${n}`,
    rounds: (n: number) => (n > 1 ? `${n} rounds` : "one round"),
    breath: (phase: string) => ({ inhale: "breathe in", holdTop: "hold, lungs full", exhale: "breathe out", holdBottom: "hold, lungs empty" })[phase] ?? phase,
    leg: (side: string) => ({ right: "right", left: "left" })[side] ?? side,
    play: () => "Practise",
    pause: () => "Pause",
    resume: () => "Resume",
    again: () => "Start again",
    back: () => "Back",
    stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
    round: (n: number, total: number) => `Round ${n} of ${total}`,
    done: () => "Practice complete",
    said: (breath: string, cue: string) => `${breath.charAt(0).toUpperCase()}${breath.slice(1)}. ${cue}`,
    saidBreath: (breath: string) => `${breath.charAt(0).toUpperCase()}${breath.slice(1)}.`,
    settings: () => "Settings",
    breathTitle: () => "Your breath",
    breathLine: () => "Every practice follows this rhythm. Set each phase, or measure it by tapping along with your breath.",
    phase: (phase: string) => ({ inhale: "Breath in", holdTop: "Hold, lungs full", exhale: "Breath out", holdBottom: "Hold, lungs empty" })[phase] ?? phase,
    seconds: (n: number) => `${n.toLocaleString("en-GB")} s`,
    shorter: (phase: string) => `${phase}: shorter`,
    longer: (phase: string) => `${phase}: longer`,
    minus: () => "−",
    plus: () => "+",
    measureTitle: () => "Measure by tapping",
    measureLine: () => "Tap as each breath in starts, then as each breath out starts: three taps are enough.",
    tap: () => "Tap",
    taps: (n: number) => (n === 0 ? "" : n > 1 ? `${n} taps` : "1 tap"),
    reset: () => "Default breath",
    voiceTitle: () => "Voice and sound",
    voicePart: (part: string) => ({ voice: "Voice", breath: "Say the breath", cues: "Say the cues", bowl: "Singing bowl" })[part] ?? part,
    learn: () => "Learn",
    holdTitle: () => "Hold the poses",
    holdLine: () => "Compose a sequence of poses, or let the app draw one, and hold each for a few breaths. A singing bowl rings when it is time to move on.",
    compose: () => "Compose",
    composed: () => "My sequence of poses",
    composerLine: () => "Each pose follows the one before in a single movement, from standing to standing. Tap a pose to add it; tap it in your sequence to take it out.",
    countLabel: () => "Poses drawn",
    count: (n: number) => String(n),
    fewer: () => "Fewer poses",
    more: () => "More poses",
    breathsLabel: () => "Breaths per pose",
    breaths: (n: number) => String(n),
    holdShorter: () => "Hold shorter",
    holdLonger: () => "Hold longer",
    draw: () => "Draw",
    clear: () => "Take all out",
    chosenTitle: () => "Your sequence",
    libraryTitle: () => "Add a pose",
    remove: (name: string) => `Take out ${name}`,
    add: (name: string) => `Add ${name}`,
    nothing: () => "Add poses, or draw some.",
    notBegins: () => "Begin standing.",
    notEnds: () => "End standing.",
    jump: (from: string, to: string) => `From ${from} to ${to}: too far for a single movement.`,
    backAndForth: (before: string, now: string) => `${before} then ${now}: one back-and-forth too many.`,
    repeat: (name: string) => `${name} twice in a row.`,
    breathsLeft: (n: number) => (n > 1 ? `Hold · ${n} breaths to go` : "Hold · last breath"),
    mute: () => "Mute the voice",
    unmute: () => "Unmute the voice",
    marks: () => "Landmarks",
    degrees: (n: number) => `${n}°`,
    voiceFailed: (code: string) => `The voice could not speak (the browser says: ${code}). Turn the bowl off in the settings to see whether it is in the way.`,
    noVoice: () => "This browser cannot speak (as inside an Android app): open Poselia in Chrome or Safari to hear the cues. The bowl still rings.",
    view: (name: string) => ({ threeQuarter: "3/4", profile: "Side", face: "Front", top: "Top" })[name] ?? name,
  }),
})

/**
 * Words of the interface
 * The catalog of the language the app speaks now: each catalog under the tag of its language.
 */
export const InterfaceWords = fn({
  owner: "ghalaax",
  serves: [InTheirLanguage],
  deps: { fr: WordsFr, en: WordsEn, language: AppLanguage },
  body: ({ fr, en, language }) => {
    const byTag: Record<string, typeof fr> = { fr, en }
    return { now: () => byTag[language.current()] ?? fr }
  },
})
