/** Poselia · SDLC */

import { code, EdgeName, KindName, Severity } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { catalog } from "../../../kinds/catalog"
import { component } from "../../../kinds/component"
import { environment } from "../../../kinds/environment"
import { entryPoint, command } from "../../../kinds/entry-point"
import { fn } from "../../../kinds/function"
import { binding } from "../../../kinds/binding"
import { artifact } from "../../../kinds/artifact"
import { check } from "../../../kinds/check"
import { review } from "../../../kinds/review"
import { role } from "../../../kinds/role"
import { shipment } from "../../../kinds/shipment"
import { obligation } from "../../../kinds/obligation"
import { policy } from "../../../kinds/policy"
import { rule } from "../../../kinds/rule"
import { adr } from "../../../kinds/adr"
import { scenario } from "../../../kinds/scenario"
import {
  ProgramCommands, NodeProgramCommands, Files, FilesKept, MachineFiles, FilesInMemory, HeadlessBrowser, PlaywrightBrowser, BrowserScripted, BrowserInMemory,
} from "#std/tooling"
import { Reaches, Linked } from "#std/rules"
import { Verified, Served, Applied, Reviewed, Checked, Ruled, Safe } from "#std/obligations"
import { GitHubWorkflow, type WorkflowSettings } from "#ci/github"
import { ShellScript } from "#ci/shell"
import { Adapter, Strategy } from "#std/patterns"
import { Html, Css } from "#std/html"
import { ExitStatus } from "#std/system"
import { Counts } from "#std/algebra"
import { PractiseGuided, CheckedContent } from "./product"
import { Test } from "./architecture"
import { PoseliaPage, ScreenNames, BrowserScreen } from "./app"
import { BrowserBowl } from "./sound"
import { BrowserLoading, BrowserLanguages, BrowserPreferences, BrowserFrames, BrowserSpeech, BrowserWakeLock } from "#std/platform"
import { BrowserStage } from "./stage"
import { Poses, Sequences, Languages } from "./content"
import { PlayerNames } from "./practice"
import { ComposerNames } from "./composing"
import { English } from "./language"

// How a version of Poselia reaches people, in its graph: the page is an artefact its delivery produces; a program of
// the SDLC opens it in a browser without a screen, another places it where it is served; a person checks it on a phone;
// a teacher who practises reviews the poses and the sequences it carries. What a shipment must prove is derived by its
// policy from what it reaches: a preview, the page opened and the scenarios of the code it ships; a public version also
// the phone, the teacher, the product's requirements and the decisions it applies. trame ship builds, checks, refuses
// or deploys, and keeps the evidence, attributed to whoever ships; the programs are tested in memory like the app.

/**
 * People who try it on a phone
 * Who checks, on a phone, what a browser without a screen cannot hear or feel.
 */
export const PhoneTesters = role({ owner: "ghalaax", people: ["ghalaax"] })

/**
 * A teacher who practises
 * Who reviews the poses and the sequences the app carries, in each language: someone who teaches yoga and practises it,
 * never the person who wrote the rows.
 */
export const Teachers = role({ owner: "ghalaax", people: [], notAuthor: true })

/**
 * A machine
 * Where the programs of the SDLC run: the project's files on disk, Chromium driven by Playwright.
 */
export const Machine = environment({ owner: "ghalaax" })

/**
 * Poselia's SDLC
 * The programs that check and deploy Poselia, run by trame ship (or by a person): the first word names the command.
 */
export const PoseliaSdlc = component({
  owner: "ghalaax",
  language: "typescript",
  environments: [Machine],
  deps: { exposure: ProgramCommands },
})

/**
 * On the machine
 * On a machine, the programs of the SDLC read their commands from Node's command line, the project's files from the disk,
 * and open the page in Chromium driven by Playwright, as the standard library realizes them.
 */
export const OnTheMachine = binding({
  owner: "ghalaax",
  chooses: [NodeProgramCommands, MachineFiles, PlaywrightBrowser],
  environments: [Machine],
  follows: [Adapter],
  context: "A check must open the page a person opens: the file delivered, in a real browser.",
})

/**
 * The SDLC in memory
 * In the scenarios, the files are kept in memory and the browser shows the page a scenario writes.
 */
export const SdlcInMemory = binding({
  owner: "ghalaax",
  chooses: [FilesInMemory, BrowserInMemory],
  environments: [Test],
  follows: [Strategy],
  context: "A program of the SDLC is code like the app's: its scenarios play it before it runs on a machine.",
})

/**
 * Poselia's page
 * The page its delivery writes, which a browser opens as it is: what every version of Poselia ships.
 */
export const PageFile = artifact({ owner: "ghalaax", media: "text/html; charset=utf-8", producedBy: PoseliaPage })

/**
 * Where the page is served
 * The file a web server serves Poselia from, in the project: the page is placed there when a version ships.
 */
export const ServedPage = decision<{ path: string }>({
  owner: "ghalaax",
  value: { path: "public/index.html" },
  rejected: { "A file per version": "a person opens one address; the dossiers keep which version was placed, and when" },
})

/**
 * How the page is opened
 * How long the page settles once opened, then how long a sequence plays before its landmarks are looked for, in
 * seconds.
 */
export const PageOpening = decision<{ settle: number; play: number }>({ owner: "ghalaax", value: { settle: 1, play: 5 } })

/**
 * What the page is asked
 * The selectors of what a person sees on the page, from the names its screen gives its parts: the poses listed, the
 * sequences, the button that plays the first one, the player, the landmarks it lists.
 */
export const PageSelectors = fn({
  owner: "ghalaax",
  serves: [PractiseGuided],
  deps: { screen: ScreenNames, composer: ComposerNames, player: PlayerNames, html: Html, css: Css },
  body: ({ screen, composer, player, html, css }) => {
    const of = (name: string) => css.classSelector + name
    const inside = (...parts: string[]) => parts.join(css.descendant)
    return {
      poses: inside(of(screen.poses), html.li),
      sequences: of(screen.sequence),
      play: inside(of(screen.sequence), of(composer.actions), html.button),
      player: of(player.player),
      landmarks: inside(of(player.markList), html.li),
    }
  },
})

/**
 * What the programs of the SDLC say
 */
export const SdlcWords = catalog({
  owner: "ghalaax",
  language: English,
  messages: () => ({
    opens: (languages: string[]) => `The page opens in ${languages.join(" and ")}: poses, sequences, a practice with its landmarks, no error`,
    noPoses: (language: string) => `In ${language}: no pose is listed`,
    noSequence: (language: string) => `In ${language}: no sequence is shown`,
    noPlayer: (language: string) => `In ${language}: playing the first sequence shows no player`,
    noLandmarks: (language: string) => `In ${language}: the practice lists no landmark`,
    pageError: (language: string, error: string) => `In ${language}: the page raised "${error}"`,
    placed: (from: string, to: string) => `${from} placed at ${to}`,
    missing: (path: string) => `${path} is not there: trame ship builds it first`,
  }),
})

/**
 * Open the page
 * Opens the page delivered in Chromium without a screen, in each language offered: the poses are listed, the
 * sequences shown, the first one plays and lists its landmarks, and the page raises no error. What it found is said;
 * it fails when anything is missing, and at once when the page is not where its delivery writes it.
 */
export const OpenThePage = entryPoint({
  owner: "ghalaax",
  in: PoseliaSdlc,
  serves: [PractiseGuided],
  trigger: command("open-page"),
  deps: {
    browser: HeadlessBrowser, files: Files, page: PageFile, offered: Languages, selectors: PageSelectors, opening: PageOpening, say: SdlcWords, exit: ExitStatus,
    counts: Counts,
  },
  body: code.file("./code/open-the-page.ts"),
})

/**
 * Place the page
 * Copies the page built to where it is served.
 */
export const PlaceThePage = entryPoint({
  owner: "ghalaax",
  in: PoseliaSdlc,
  serves: [PractiseGuided],
  trigger: command("place-page"),
  deps: { files: Files, page: PageFile, served: ServedPage, say: SdlcWords, exit: ExitStatus },
  body: ({ files, page, served, say, exit }) => async () => {
    if (!files.exists(page.path)) return { status: exit.failure, body: [say.missing(page.path)] }
    files.copy(page.path, served.path)
    return { status: exit.success, body: [say.placed(page.path, served.path)] }
  },
})

/**
 * The page opens
 * The page delivered, opened in a browser without a screen in each language: a program of the SDLC checks it.
 */
export const PageOpens = check({
  owner: "ghalaax",
  on: [PageFile],
  runs: OpenThePage,
  verifies: [BrowserScreen, BrowserStage, BrowserLoading, BrowserLanguages, BrowserPreferences, BrowserFrames, PlaywrightBrowser, NodeProgramCommands, MachineFiles],
})

/**
 * On a phone
 * What only a person on a phone can check, signed by one of the people who try it.
 */
export const OnAPhone = check({
  owner: "ghalaax",
  on: [PageFile],
  steps: [
    "Open the page in Chrome on an Android phone, and in Safari on an iPhone",
    "Play the sun salutation: the voice says the breath and the cues, the screen stays awake",
    "Hold the poses: the bowl rings at each change, the voice says each pose",
    "The landmarks follow the body, in the flow and in the holds",
  ],
  by: PhoneTesters,
  verifies: [BrowserBowl, BrowserSpeech, BrowserWakeLock],
})

/**
 * The content, reviewed
 * Each pose and each sequence the app carries, in each language, approved by a teacher who practises, as it is now.
 */
export const ContentReviewed = review({ owner: "ghalaax", of: [Poses, Sequences], by: Teachers })

/**
 * The code shown is verified, a gap said
 * Every scenario that verifies code the page or the programs reach is played; an entry point or a function they reach
 * that no scenario verifies is said, not blocking: a preview is for its author.
 */
export const CodeVerifiedSaid = obligation({
  owner: "ghalaax", applies: Verified, params: { kinds: [KindName.entry, KindName.function] }, gaps: Severity.warning, serves: [PractiseGuided],
})

/**
 * The code shown is verified
 * Every scenario that verifies code the page or the programs reach is played; an entry point or a function they reach
 * that no scenario verifies keeps a public version.
 */
export const CodeVerified = obligation({
  owner: "ghalaax", applies: Verified, params: { kinds: [KindName.entry, KindName.function] }, gaps: Severity.error, serves: [PractiseGuided],
})

/**
 * The product holds
 * Every requirement of the goals the page serves holds, at any depth: what a person practising relies on.
 */
export const ProductServed = obligation({ owner: "ghalaax", applies: Served, serves: [PractiseGuided] })

/**
 * The decisions hold
 * Every ADR the page or the programs apply holds.
 */
export const DecisionsApplied = obligation({ owner: "ghalaax", applies: Applied, serves: [PractiseGuided] })

/**
 * The content is reviewed by a teacher
 * Every review of the content the page carries; content nothing reviews keeps a public version.
 */
export const ContentSeen = obligation({ owner: "ghalaax", applies: Reviewed, gaps: Severity.error, serves: [CheckedContent] })

/**
 * The page is checked by programs
 * Every check of the page a program runs: what a machine proves alone.
 */
export const ProgramChecks = obligation({ owner: "ghalaax", applies: Checked, params: { by: "programs" }, serves: [PractiseGuided] })

/**
 * The page is checked, by hand too
 * Every check of the page, those made on a phone by a person too.
 */
export const AllChecks = obligation({ owner: "ghalaax", applies: Checked, params: { by: "all" }, serves: [PractiseGuided] })

/**
 * The rules of the app hold
 * Every rule of Poselia's graph holds.
 */
export const RulesHeld = obligation({ owner: "ghalaax", applies: Ruled, serves: [PractiseGuided] })

/**
 * The packages are safe
 * Every package the page and the programs use is installed at its version, without a known vulnerability.
 */
export const PackagesSafe = obligation({ owner: "ghalaax", applies: Safe, serves: [PractiseGuided] })

/**
 * The way of a preview
 * For its author and the few people they show it to: the code verified (a gap said), the page checked by programs, the
 * rules held, the packages safe; and the foundations, as always.
 */
export const PreviewMode = policy({ owner: "ghalaax", obligations: [CodeVerifiedSaid, ProgramChecks, RulesHeld, PackagesSafe] })

/**
 * The way of a public version
 * For anyone: the code verified (a gap keeps it), the product's requirements held, the decisions held, the content
 * reviewed by a teacher, the page checked by programs and on a phone, the rules held, the packages safe.
 */
export const PublicMode = policy({
  owner: "ghalaax",
  obligations: [CodeVerified, ProductServed, DecisionsApplied, ContentSeen, AllChecks, RulesHeld, PackagesSafe],
})

/**
 * A preview
 * The page as it is, for its author and the few people they show it to, the way of a preview. Placed where it is
 * served.
 */
export const Preview = shipment({
  owner: "ghalaax",
  target: "preview",
  ships: [PageFile],
  policy: PreviewMode,
  deploys: [PlaceThePage],
  environment: Machine,
})

/**
 * A public version
 * The page for anyone, the way of a public version: the checks on a phone, the content reviewed by a teacher, the
 * product's requirements held. Placed where it is served.
 */
export const PublicVersion = shipment({
  owner: "ghalaax",
  target: "public",
  ships: [PageFile],
  policy: PublicMode,
  deploys: [PlaceThePage],
  environment: Machine,
})

/**
 * When the preview runs on GitHub, and what it keeps there
 * By hand from GitHub, and at each push on main; on GitHub's Ubuntu 24.04 machine, with Node.js 22, the version Trame
 * runs on here (its types are those of Node 22). What it publishes (the page, as its workflow says) GitHub keeps thirty
 * days: a preview is looked at, then replaced. The evidence is kept too, ninety days, whatever the preview answered: a
 * refused preview says why, and someone reads it later.
 */
export const PreviewOnGitHub = decision<WorkflowSettings>({
  owner: "ghalaax",
  value: { on: { manual: true, branches: ["main"] }, runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30, evidence: { days: 90 } } },
  rejected: {
    "At each pull request": "a preview is placed where it is served: a pull request would place a page nobody merged",
    "On a schedule": "nothing changes the page between two pushes",
    "The evidence not kept": "what was checked, by whom and on which page would stay on a machine GitHub throws away",
    "GitHub's ninety days for the page too": "a preview replaced every push need not stay three months",
  },
})

/**
 * The preview's workflow
 * The workflow that ships a preview on GitHub, written from its pipeline: it prepares the machine as the plan says, runs
 * trame ship with the person who started it, then publishes the page as an artefact of GitHub (its deployment there) and
 * records where; it keeps the evidence as its settings say.
 */
export const PreviewWorkflow = artifact({
  owner: "ghalaax",
  path: "../../.github/workflows/poselia-preview.yml",
  media: "application/yaml",
  producedBy: GitHubWorkflow,
  runs: Preview,
  settings: PreviewOnGitHub,
  publishes: [PageFile],
})

/**
 * The preview's script
 * The script that ships a preview from another machine, written from its pipeline: the person who ships gives their
 * name, it prepares what the plan says, then runs trame ship.
 */
export const PreviewScript = artifact({
  owner: "ghalaax",
  path: "scripts/ship-preview.sh",
  media: "text/x-shellscript",
  producedBy: ShellScript,
  runs: Preview,
})

/**
 * The files that run it elsewhere
 * The workflow and the script that run the preview elsewhere, written by trame ship from the graph and kept in the
 * repository where GitHub and a person find them; shipped again when the preview's pipeline changes.
 */
export const RunnersWritten = shipment({
  owner: "ghalaax",
  target: "repository",
  ships: [PreviewWorkflow, PreviewScript],
})

/**
 * Code serves the product
 * Every function and entry point of the app that implements no port serves a goal of the product, through what it
 * serves and what that refines.
 */
export const CodeServesTheProduct = rule({
  owner: "ghalaax",
  applies: Reaches,
  params: {
    nodes: { kinds: [KindName.function, KindName.entry], without: { edge: EdgeName.implements } },
    through: [EdgeName.serves, EdgeName.refines],
    to: { kinds: [KindName.goal] },
  },
})

/**
 * Each decision of architecture serves the product
 * An ADR names at least one goal or requirement it serves.
 */
export const AdrsServeTheProduct = rule({
  owner: "ghalaax",
  applies: Linked,
  params: { nodes: { kinds: [KindName.adr] }, edge: EdgeName.serves, atLeast: 1 },
})

/**
 * The SDLC is in the graph
 * What makes a version of Poselia available is declared with the rest: its artefact, the checks and the review it
 * requires and who signs them, the programs that check and deploy it, tested in memory; trame ship runs it and keeps
 * the evidence. The rules of the graph are rules of the std library, applied with their parameters.
 */
export const SdlcInTheGraph = adr({
  owner: "ghalaax",
  context: "A version reached people when its author had looked at it: what was checked, by whom, on which page, was nowhere.",
  consequences: "trame ship refuses a version while a check, a review or a scenario does not hold, says whose it is, and keeps the dossier of each version shipped.",
  rejected: {
    "A script of continuous integration beside the graph": "the steps and their reasons would live in two places, and the graph would not know what was checked",
    "A review in a pull request": "it says neither which rows were seen nor in which language; a change to a row would not undo it",
  },
  serves: [CheckedContent, PractiseGuided],
  appliedBy: [
    Preview, PublicVersion, PageOpens, OnAPhone, ContentReviewed, OpenThePage, PlaceThePage, CodeServesTheProduct, AdrsServeTheProduct,
    PreviewWorkflow, PreviewScript, RunnersWritten,
  ],
})

/**
 * What the scenarios of the SDLC write
 * The error a page raises in a scenario, and the text of a page built in memory.
 */
export const SdlcScenarioData = decision<{ error: string; page: string }>({
  owner: "ghalaax",
  value: { error: "The page broke", page: "<!doctype html><title>Poselia</title>" },
})

/**
 * What the scenarios of the SDLC check
 */
export const SdlcChecks = catalog({
  owner: "ghalaax",
  language: English,
  messages: () => ({
    pageMissing: () => "Without the page delivered, the check fails and says where it should be",
    pagePasses: () => "A page that shows everything passes, and says so",
    pageFails: () => "A page without landmarks, raising an error, fails and says why in each language",
    nothingPlaced: () => "Nothing built, nothing placed",
    pagePlaced: () => "The page built is placed where it is served",
  }),
})

/**
 * The page is opened as a person would
 * In memory, without the page delivered, the check fails and says where it should be; once it is written, the browser
 * shows a page with its poses, sequences, player and landmarks: the check passes and says so; the same page raising an
 * error, or without landmarks, fails and says why.
 */
export const OpeningThePage = scenario({
  owner: "ghalaax",
  verifies: [OpenThePage, PageSelectors, BrowserInMemory, FilesInMemory],
  env: Test,
  deps: {
    open: OpenThePage, script: BrowserScripted, files: Files, page: PageFile, selectors: PageSelectors, exit: ExitStatus, say: SdlcWords, offered: Languages,
    data: SdlcScenarioData, checks: SdlcChecks, counts: Counts,
  },
  body: ({ open, script, files, page, selectors, exit, say, offered, data, checks, counts }) => async (check) => {
    const missing = await open({ params: {} })
    check(checks.pageMissing(), missing.status === exit.failure && JSON.stringify(missing.body) === JSON.stringify([say.missing(page.path)]))
    files.write(page.path, data.page)
    const one = { count: counts.one }
    const whole = { [selectors.poses]: one, [selectors.sequences]: one, [selectors.play]: one, [selectors.player]: one, [selectors.landmarks]: one }
    script.show(page.path, { elements: whole, errors: [] })
    const passed = await open({ params: {} })
    check(checks.pagePasses(), passed.status === exit.success && JSON.stringify(passed.body) === JSON.stringify([say.opens(offered)]))
    const { [selectors.landmarks]: _, ...without } = whole
    script.show(page.path, { elements: without, errors: [data.error] })
    const failed = await open({ params: {} })
    const found = failed.body as string[]
    check(checks.pageFails(),
      failed.status === exit.failure && offered.every((l) => found.includes(say.noLandmarks(l)) && found.includes(say.pageError(l, data.error))))
  },
})

/**
 * The page is placed where it is served
 * In memory, a page built is copied where it is served; without a page built, nothing is placed and it fails.
 */
export const PlacingThePage = scenario({
  owner: "ghalaax",
  verifies: [PlaceThePage, FilesInMemory],
  env: Test,
  deps: { place: PlaceThePage, files: Files, kept: FilesKept, page: PageFile, served: ServedPage, exit: ExitStatus, data: SdlcScenarioData, checks: SdlcChecks },
  body: ({ place, files, kept, page, served, exit, data, checks }) => async (check) => {
    const before = await place({ params: {} })
    check(checks.nothingPlaced(), before.status === exit.failure && !kept.written().has(served.path))
    files.write(page.path, data.page)
    const after = await place({ params: {} })
    check(checks.pagePlaced(), after.status === exit.success && kept.written().get(served.path) === files.read(page.path))
  },
})
