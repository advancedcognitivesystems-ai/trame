/** Trame · SDLC */

import { artifact } from "../kinds/artifact"
import { check } from "../kinds/check"
import { role } from "../kinds/role"
import { shipment } from "../kinds/shipment"
import { obligation } from "../kinds/obligation"
import { policy } from "../kinds/policy"
import { code, KindName, Severity, ViewName } from "../trame/kernel"
import { component } from "../kinds/component"
import { binding } from "../kinds/binding"
import { fn } from "../kinds/function"
import { catalog } from "../kinds/catalog"
import { decision } from "../kinds/decision"
import { scenario } from "../kinds/scenario"
import { entryPoint, command } from "../kinds/entry-point"
import { ProgramCommands, HeadlessBrowser, NodeProgramCommands, PlaywrightBrowser, BrowserInMemory, BrowserScripted } from "#std/tooling"
import { Adapter, Strategy } from "#std/patterns"
import { Html, Css, Svg } from "#std/html"
import { ExitStatus } from "#std/system"
import { Counts } from "#std/algebra"
import { PageApp, Test } from "./architecture"
import { Export } from "./commands"
import { PageRegions } from "./page"
import { DocumentMarkup } from "./markup"
import { AttributeSelector } from "./html"
import { Language, ScenarioMessages } from "./messages"
import { ShowGraph, ExplorerFigures, BrowserWindow, BrowserMemory, BrowserFeed, BrowserDecompression } from "./browser"
import { Verified, Served, Applied, Checked, Ruled, Safe } from "#std/obligations"
import { TrameCli, Local } from "./architecture"
import { TestKinds, Advance, Doctor } from "./commands"
import { DiskReading, DiskWriting, DiskTrees, NodeProcess, NodePrograms, NodeTerminal, SystemClock, NpmReports, NodeHttpServer } from "./platform"
import { ExecutableSpecification } from "./product"

// How a new version of Trame becomes the one projects run, in Trame's graph. The engine described by the graph is
// assembled into a program (the candidate); it plays the laws of the kinds and the views; the rules of the
// architecture, the scenarios and the requirements of the engine hold (the policy of a generation derives them from
// what the candidate reaches); then the candidate advances: it builds the libraries, the example and Trame as the
// generation in place did, reassembles itself to a fixed point, replays the older generations, and, accepted, is
// frozen into the next generation with the libraries it imports, its release written, the pins of Trame and of the
// example moved to it. trame ship NextGeneration --promote "what changes" runs it
// all, and keeps the evidence and the dossier.

/**
 * Trame's maintainers
 * Who changes Trame's engine and language, and ships its generations.
 */
export const Maintainers = role({ owner: "trame", people: ["ghalaax", "claude"] })

/**
 * The candidate engine
 * The program of Trame's command line, assembled from the graph for a machine: what the next generation freezes.
 */
export const EngineCandidate = artifact({ owner: "trame", path: "out/local/trame-cli.ts", producedBy: TrameCli })

/**
 * The candidate plays the laws
 * The candidate engine plays the laws of every kind and view on drawn values: one broken law, and it is not shipped.
 */
export const CandidateKeepsTheLaws = check({ owner: "trame", on: [EngineCandidate], runs: TestKinds, by: Maintainers })

/**
 * The engine is verified
 * Every scenario that verifies code a generation reaches is played; an entry point or a function it reaches that no
 * scenario verifies is an error of the graph: engine code nothing proves. A component is verified through its entry
 * points.
 */
export const EngineVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.entry, KindName.function] }, gaps: Severity.error,
  serves: [ExecutableSpecification],
})

/**
 * The language serves what it says
 * Every requirement of the goals the reached code serves holds, at any depth.
 */
export const LanguageServed = obligation({ owner: "trame", applies: Served, serves: [ExecutableSpecification] })

/**
 * The decisions of the architecture hold
 * Every ADR a reached node applies holds: an ADR applied only by what proves nothing is a hole to close, not one to
 * leave out of the policy.
 */
export const ArchitectureApplied = obligation({ owner: "trame", applies: Applied, serves: [ExecutableSpecification] })

/**
 * The candidate is checked by programs
 * Every check of the candidate a program runs: a generation is advanced by a machine, not by hand.
 */
export const CandidateChecked = obligation({ owner: "trame", applies: Checked, params: { by: "programs" }, serves: [ExecutableSpecification] })

/**
 * The rules of the architecture hold
 * Every rule of Trame's graph holds: none broken.
 */
export const ArchitectureRuled = obligation({ owner: "trame", applies: Ruled, serves: [ExecutableSpecification] })

/**
 * The packages are safe
 * Every package the engine uses is installed at its version, without a known vulnerability.
 */
export const EnginePackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [ExecutableSpecification] })

/**
 * How a generation is made
 * The way Trame advances its engine: the code it reaches verified (a gap is an error), the goals it serves held, the
 * decisions it applies held, the candidate checked by programs, the rules held, the packages safe; and the foundations,
 * as always.
 */
export const GenerationMode = policy({
  owner: "trame",
  obligations: [EngineVerified, LanguageServed, ArchitectureApplied, CandidateChecked, ArchitectureRuled, EnginePackagesSafe],
})

/**
 * The candidate runs on the machine
 * The candidate engine asks the machine it was assembled for whether it runs Trame (trame doctor): it reads and writes
 * files, copies and compares trees, runs programs, serves HTTP, keeps the time, asks the registry. What its run proves
 * is what no scenario in memory can run: the realizations of the machine.
 */
export const CandidateRunsOnTheMachine = check({
  owner: "trame", on: [EngineCandidate], runs: Doctor, by: Maintainers,
  verifies: [DiskReading, DiskWriting, DiskTrees, NodeProcess, NodePrograms, NodeTerminal, SystemClock, NpmReports, NodeHttpServer],
})

/**
 * Trame's SDLC
 * The programs that check what a generation ships and that the engine does not run itself: the first word names the
 * command. Assembled for the machine, like the engine.
 */
export const TrameSdlc = component({
  owner: "trame",
  language: "typescript",
  environments: [Local],
  deps: { exposure: ProgramCommands },
})

/**
 * The SDLC on the machine
 * On the machine, the programs of the SDLC read their command from Node's command line and open pages in Chromium
 * driven by Playwright, as the standard library realizes them.
 */
export const SdlcOnTheMachine = binding({
  owner: "trame",
  chooses: [NodeProgramCommands, PlaywrightBrowser],
  environments: [Local],
  follows: [Adapter],
  context: "The graph page must be opened as a person opens it: the file exported, in a real browser.",
})

/**
 * The SDLC in memory
 * In the scenarios, the browser shows the page a scenario writes.
 */
export const SdlcInMemory = binding({
  owner: "trame",
  chooses: [BrowserInMemory],
  environments: [Test],
  follows: [Strategy],
  context: "A program of the SDLC is code like the engine's: its scenarios play it before it runs on a machine.",
})

/**
 * The graph page
 * The page trame export writes of Trame's graph, which a browser opens as it is: it carries the program of the page,
 * assembled for the browser. A generation ships it with its engine.
 */
export const GraphPage = artifact({ owner: "trame", path: "trame-page.html", media: "text/html; charset=utf-8", producedBy: Export, carries: [PageApp] })

/**
 * How the graph page is opened
 * How long the page settles once opened, and once a document is chosen, in seconds.
 */
export const GraphPageOpening = decision<{ settle: number }>({ owner: "trame", value: { settle: 2 } })

/**
 * What the graph page is asked
 * The selectors of what a person sees, from the regions the page declares: the documents of its navigation, the links
 * of the document shown, the nodes of its picker, the entry of the figure of the layers, the picker of documents (what a
 * phone shows in place of the navigation) and the figure's document, and a figure drawn.
 */
export const GraphPageSelectors = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { regions: PageRegions, markup: DocumentMarkup, attribute: AttributeSelector, html: Html, css: Css, svg: Svg },
  body: ({ regions, markup, attribute, html, css, svg }) => {
    const id = (name: string) => css.idSelector + name
    const inside = (...parts: string[]) => parts.join(css.descendant)
    return {
      documents: inside(id(regions.nav), html.li),
      shown: inside(id(regions.doc), html.a),
      nodes: inside(id(regions.nodes), html.option),
      figureDocument: inside(id(regions.nav), attribute(markup.attributes.doc, ViewName.layers)),
      picker: id(regions.documents),
      figureView: ViewName.layers,
      figure: inside(id(regions.doc), svg.svg),
    }
  },
})

/**
 * What the programs of Trame's SDLC say
 */
export const SdlcWords = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    opens: () => "The graph page opens: its documents, a document shown, its nodes, the figure of the layers drawn, no error",
    noDocuments: () => "The navigation lists no document",
    noDocument: () => "No document is shown",
    noNodes: () => "The picker lists no node",
    noFigureDocument: () => "The navigation has no figure of the layers",
    noFigure: () => "The figure of the layers is not drawn",
    pageError: (error: string) => `The page raised "${error}"`,
  }),
})

/**
 * Open the graph page
 * Opens the graph page in Chromium without a screen, a phone's width: the navigation lists the documents, a document is
 * shown, the picker lists the nodes, the figure of the layers is drawn once its document is chosen (in the picker of
 * documents, what a phone shows in place of the navigation), and the page raises no error. What is missing is said; it
 * fails when anything is.
 */
export const OpenTheGraphPage = entryPoint({
  owner: "trame",
  in: TrameSdlc,
  serves: [ExecutableSpecification],
  trigger: command("open-graph-page"),
  deps: {
    browser: HeadlessBrowser, page: GraphPage, language: Language, selectors: GraphPageSelectors, opening: GraphPageOpening, say: SdlcWords,
    exit: ExitStatus, counts: Counts,
  },
  body: code.file("./code/sdlc/open-the-graph-page.ts"),
})

/**
 * The graph page opens
 * The graph page exported, opened in a browser without a screen by a program of the SDLC: the program of the page runs
 * there, with what realizes it in a browser.
 */
export const GraphPageOpens = check({
  owner: "trame", on: [GraphPage], runs: OpenTheGraphPage, by: Maintainers,
  verifies: [ShowGraph, ExplorerFigures, BrowserWindow, BrowserMemory, BrowserFeed, BrowserDecompression, NodeProgramCommands, PlaywrightBrowser],
})

/**
 * What the scenario of the graph page shows
 * The error a page raises in it.
 */
export const GraphPageScenarioData = decision<{ error: string }>({ owner: "trame", value: { error: "The page broke" } })

/**
 * The graph page is opened as a person would
 * In memory, the browser shows a page with its documents, a document, its nodes and the figure of the layers: the
 * program passes and says so; the same page raising an error, its figure not drawn, fails and says why.
 */
export const OpeningTheGraphPage = scenario({
  owner: "trame",
  verifies: [OpenTheGraphPage, GraphPageSelectors, BrowserInMemory],
  env: Test,
  deps: {
    open: OpenTheGraphPage, script: BrowserScripted, page: GraphPage, selectors: GraphPageSelectors, exit: ExitStatus, say: SdlcWords,
    data: GraphPageScenarioData, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ open, script, page, selectors, exit, say, data, counts, messages }) => async (check) => {
    const one = { count: counts.one }
    const whole = { [selectors.documents]: one, [selectors.shown]: one, [selectors.nodes]: one, [selectors.figureDocument]: one, [selectors.figure]: one }
    script.show(page.path, { elements: whole, errors: [] })
    const passed = await open({ params: {} })
    check(messages.graphPagePasses(), passed.status === exit.success && JSON.stringify(passed.body) === JSON.stringify([say.opens()]) &&
      script.choices().some((c) => c.selector === selectors.picker && c.value === selectors.figureView))
    const { [selectors.figure]: _, ...without } = whole
    script.show(page.path, { elements: without, errors: [data.error] })
    const failed = await open({ params: {} })
    const found = failed.body as string[]
    check(messages.graphPageFails(), failed.status === exit.failure && found.includes(say.noFigure()) && found.includes(say.pageError(data.error)))
  },
})

/**
 * The next generation
 * The engine as the graph describes it now, frozen into the next generation and pinned by Trame and the example, the
 * way a generation is made: what it must prove is derived from what the candidate reaches (the laws it plays, the
 * scenarios of its code, the requirements of the goals it serves, the rules, the packages), nothing listed by hand. The
 * advance deploys it, and refuses a candidate the requirement "Accept a candidate" does not accept.
 */
export const NextGeneration = shipment({
  owner: "trame",
  target: "generation",
  ships: [EngineCandidate, GraphPage],
  policy: GenerationMode,
  deploys: [Advance],
  environment: Local,
})
