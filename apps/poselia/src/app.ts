/** Poselia · The app in a browser */

import { code } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { entryPoint, load } from "#trame/kinds/entry-point"
import { implementation } from "#trame/kinds/implementation"
import { binding } from "#trame/kinds/binding"
import { stylesheet } from "#trame/kinds/stylesheet"
import { fn } from "#trame/kinds/function"
import { delivery } from "#trame/kinds/delivery"
import { BrowserLoading, BrowserPreferences, BrowserLanguages, BrowserSpeech, BrowserWakeLock, BrowserFrames } from "#std/platform"
import { Adapter, Strategy } from "#std/patterns"
import { Html, Aria, Svg } from "#std/html"
import { UiEvents } from "#std/web"
import { Time } from "#std/measures"
import { Counts, Texts } from "#std/algebra"
import { PractiseGuided, InTheirLanguage } from "./product"
import { Browser, Test, PoseliaApp, Screen, ContentSource, Stage } from "./architecture"
import { Poses, Sequences, Languages, CuePlaceholders } from "./content"
import { French, AppLanguage, InterfaceWords, WordsFr, WordsEn } from "./language"
import { FigureDrawing, PoseBody, DrawingParts } from "./drawing"
import { PlayPractice, PlayerNames, MomentOf } from "./practice"
import { ShowSettings, PersonBreath, SettingsViewOf, SettingsNames } from "./settings"
import { BrowserStage } from "./stage"
import { BrowserBowl } from "./sound"
import { ShowComposer, HoldingDefaults, ComposerNames, ComposerViewOf } from "./composing"

// The home page: the app's name, the languages to choose from, the poses and the sun salutation, step by step, in the
// language the app speaks, and the way to compose a practice of poses held. It is what trame deliver writes.

/**
 * The home view
 * What the home page shows, in the language the app speaks now: built from the content and the words, it touches nothing.
 */
export const HomeViewOf = fn({
  owner: "ghalaax",
  serves: [PractiseGuided, InTheirLanguage],
  deps: {
    words: InterfaceWords, language: AppLanguage, offered: Languages, fr: WordsFr, en: WordsEn, placeholders: CuePlaceholders, counts: Counts,
    draw: FigureDrawing, pose: PoseBody,
  },
  body: code.file<typeof import("./code/home-view").default>("./code/home-view.ts"),
})

/**
 * Show the home page
 * When the page loads, each time the person chooses another language, and when they come back from a practice, the
 * composer or the settings: the home view, from the content; a sequence chosen is played with the person's breath, or
 * learnt, each pose held; the composer and the settings open.
 */
export const ShowHome = entryPoint({
  owner: "ghalaax",
  in: PoseliaApp,
  serves: [PractiseGuided],
  trigger: load(),
  deps: {
    screen: Screen, content: ContentSource, view: HomeViewOf, language: AppLanguage, play: PlayPractice, settings: ShowSettings, breath: PersonBreath,
    compose: ShowComposer, holding: HoldingDefaults,
  },
  body: code.file("./code/show-home.ts"),
})

/**
 * Names of the screen
 * The classes the browser's screen gives its parts, which the style sheet styles; the element the app writes in.
 */
export const ScreenNames = decision<{ root: string; header: string; languages: string; current: string; poses: string; sanskrit: string; sequence: string; step: string; breath: string }>({
  owner: "ghalaax",
  value: { root: "poselia", header: "top", languages: "languages", current: "current", poses: "poses", sanskrit: "sanskrit", sequence: "sequence", step: "step", breath: "breath" },
})

/**
 * The browser's screen
 * The view written in the document with the elements of HTML, the drawings with those of SVG; a language chosen runs
 * the action.
 */
export const BrowserScreen = implementation({
  owner: "ghalaax",
  implements: [Screen],
  deps: {
    html: Html, aria: Aria, svg: Svg, events: UiEvents, screen: ScreenNames, parts: DrawingParts, player: PlayerNames, settings: SettingsNames,
    composer: ComposerNames, counts: Counts, texts: Texts, stage: Stage, time: Time,
  },
  body: code.file("./code/browser-screen.ts"),
})

/**
 * The browser's realizations
 * In a browser, the page loads, keeps the person's choices, reads the device's languages, speaks, keeps the screen
 * awake and moves with the screen's frames as the standard library's realizations do; the screen is the document, the
 * stage a scene of three.js in it, the bowl a sound made with Web Audio.
 */
export const InTheBrowser = binding({
  owner: "ghalaax",
  chooses: [BrowserLoading, BrowserScreen, BrowserStage, BrowserBowl, BrowserPreferences, BrowserLanguages, BrowserSpeech, BrowserWakeLock, BrowserFrames],
  environments: [Browser],
  follows: [Adapter],
  context: "The first delivery is a page a browser opens as it is; the phones come later, with their own realizations.",
})

/**
 * The content the app carries
 * The rows of the datasets, as the app was delivered with them.
 */
export const CarriedContent = fn({
  owner: "ghalaax",
  implements: [ContentSource],
  deps: { poses: Poses, sequences: Sequences },
  body: ({ poses, sequences }) => ({ poses: async () => poses, sequences: async () => sequences }),
})

/**
 * Content carried by the app
 * Until updates are downloaded, the app reads the content it was delivered with.
 */
export const ContentCarried = binding({
  owner: "ghalaax",
  chooses: [CarriedContent],
  environments: [Browser, Test],
  follows: [Strategy],
  context: "An app on the mat works offline; the content is small enough to travel with it.",
  rejected: { "Downloading the content at the first start": "nothing to practise until the network answers" },
})

/**
 * Colours
 * The colours of the page, as the variables its style sheet uses: a warm paper, a dark ink, a sage accent, a terracotta
 * for what does not make sense; the dawn orange of the landmarks, its pale tint, its dark ink, the ink on it.
 */
export const Colours = decision<Record<string, string>>({
  owner: "ghalaax",
  value: { paper: "#fbf8f3", ink: "#2f2a24", muted: "#7c7368", accent: "#5f8a64", line: "#e6dfd4", far: "#c4b9ab", stage: "#e9e4db", warning: "#a8553a",
    mark: "#ec8a1e", "mark-soft": "#fbe3c6", "mark-ink": "#8a4a0b", "mark-on": "#1d1206" },
})

/**
 * Measures
 * The type, the spaces and the widths of the page, as the variables its style sheet uses.
 */
export const Measures = decision<Record<string, string>>({
  owner: "ghalaax",
  value: {
    font: "system-ui, -apple-system, \"Segoe UI\", sans-serif", leading: "1.5", "page-width": "40rem", gutter: "1rem",
    gap: "0.75rem", "gap-small": "0.35rem", radius: "999px", "border-width": "1px", "button-pad": "0.35rem 0.9rem", none: "0",
    "text-small": "0.85rem", "text-title": "2rem", thumbnail: "4rem", "step-drawing": "6rem", "text-heading": "1.25rem", full: "100%",
    "lungs-size": "2.6rem", "lungs-least": "0.35", "lungs-range": "0.65", "progress-height": "0.4rem", "ring-width": "2px",
    "stage-height": "clamp(320px, 58vh, 560px)", "stage-radius": "18px", "badge-radius": "12px", "badge-pad": "0.35rem 0.7rem",
    "badge-width": "60%", "views-width": "46%",
    "said-height": "7rem", "seconds-width": "3.5rem", "tap-size": "5rem",
    "card-width": "6.5rem", "card-figure": "4.5rem", fraction: "1fr", faded: "0.45",
    "label-gap": "5px", "label-pad": "3px 8px 3px 3px", "text-label": "12px", "label-leading": "1.1", "label-number": "18px", "text-number": "11px",
    "degrees-pad": "2px 7px", pixel: "1px", centre: "-50%",
  },
})

/**
 * Style of the page
 */
export const PageStyle = stylesheet({
  owner: "ghalaax",
  body: code.file("./code/page.css", "css"),
  variables: [Colours, Measures],
  styles: [HomeViewOf, FigureDrawing, MomentOf, SettingsViewOf, ComposerViewOf],
})

/**
 * Poselia's page
 * The app as a page a browser opens as it is: the first delivery, which Claude shows as an artifact.
 */
export const PoseliaPage = delivery({
  owner: "ghalaax",
  target: "page",
  delivers: PoseliaApp,
  environment: Browser,
  output: "dist/poselia.html",
  shownAs: "Poselia",
  language: French,
  styles: [PageStyle],
  serves: [PractiseGuided],
})
