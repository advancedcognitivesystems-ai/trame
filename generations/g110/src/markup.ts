/** Trame · Documents in the page */

import { decision } from "../kinds/decision"

// The HTML of a document, as the page shows it: what its elements are named by, for the page's style sheet to style
// them and its script to act on them (follow a reference, open a view, draw a figure). The elements themselves are
// HTML's (module html); the syntax that writes them is a realization of the page's syntax (module rendering).

/** The classes of a document's elements, the prefixes of the classes of vocabulary values, its attributes, its headings. */
export interface Markup {
  classes: {
    reference: string
    open: string
    rule: string
    pill: string
    published: string
    severity: string
    person: string
    card: string
    history: string
    repealed: string
    meta: string
    views: string
    viewButton: string
    nature: string
    inactive: string
    facts: string
    resolution: string
    child: string
    tableWrap: string
    code: string
    codeSource: string
    checksTitle: string
    validity: string
    summary: string
    intro: string
    figure: string
    figureScroll: string
    /** The button that amends a value of a card (since g86). */
    amendButton: string
  }
  /** Before the key of a vocabulary value: the class of an outcome, a validity, a severity (a status: the page's). */
  prefixes: { outcome: string; validity: string; severity: string }
  /** What the page's script reads: the node a reference leads to, the document, the view a button opens, a figure to draw. */
  attributes: { reference: string; doc: string; view: string; node: string; figure: string; amend: string; value: string; way: string; units: string }
  /** The rank of each heading: the title, a section at the top of a document, a card, a section further down. */
  headings: { title: number; section: number; card: number; nested: number }
}

/**
 * Documents in the page
 * The page's style sheet and its script know a document's HTML by these names: a reference is a link that carries the
 * node it leads to, a card an article that carries the node's identifier, a status a pill whose class is the key of the
 * status. Headings go down one rank per section, a card's title one rank under the top sections; what is deeper than a
 * card's title shares one rank, so that the outline of a long document stays readable.
 */
export const DocumentMarkup = decision<Markup>({
  owner: "trame",
  value: {
    classes: {
      reference: "ref", open: "open", rule: "rule", pill: "pill", published: "pub", severity: "sev", person: "person",
      card: "card", history: "history", repealed: "repealed", meta: "meta", views: "views", viewButton: "chip-btn",
      nature: "nature", inactive: "inactive", facts: "facts", resolution: "resolution", child: "child",
      tableWrap: "table-wrap", code: "code", codeSource: "code-source", checksTitle: "checks-title",
      validity: "validity", summary: "summary", intro: "intro", figure: "figure", figureScroll: "figure-scroll", amendButton: "amend-btn",
    },
    prefixes: { outcome: "oc-", validity: "va-", severity: "sev-" },
    attributes: {
      reference: "data-ref", doc: "data-doc", view: "data-view", node: "data-node", figure: "data-figure",
      amend: "data-amend", value: "data-value", way: "data-way", units: "data-units",
    },
    headings: { title: 1, section: 2, card: 3, nested: 4 },
  },
  rejected: {
    "Inline styles": "the page's themes and its narrow screen change the look, which a style sheet does once",
    "One heading rank per level": "below a card, the ranks run out, and the outline of a long document is unreadable",
  },
})

/** The classes of the figures' shapes, which the page's style sheet paints. */
export interface Figures {
  edge: string
  node: string
  nature: string
  role: string
  inactive: string
  history: string
  focus: string
  box: string
  kind: string
  open: string
  arrows: { base: string; accent: string; bad: string; warn: string }
  markers: { base: string; accent: string; bad: string; warn: string }
  defs: string
  legend: string
  samples: { base: string; accent: string; bad: string; box: string; open: string }
  timeline: string
  grid: string
  tick: string
  period: string
  review: string
  mark: string
  lane: string
  muted: string
  today: string
}

/**
 * Figures in the page
 * The classes the page's style sheet paints a figure's shapes by: an edge, a node and its box, the prefix of a nature
 * or a role, the samples of a legend, the lanes and marks of a timeline. The arrowheads are defined once in the page,
 * each under its identifier, and every figure refers to them.
 */
export const FigureMarkup = decision<Figures>({
  owner: "trame",
  value: {
    edge: "fe", node: "fn", nature: "n-", role: "r-", inactive: "inactive", history: "hist", focus: "focus", box: "box", kind: "kind", open: "open",
    arrows: { base: "arrow", accent: "arrow-accent", bad: "arrow-bad", warn: "arrow-warn" },
    markers: { base: "arrow-base", accent: "arrow-to-accent", bad: "arrow-to-bad", warn: "arrow-to-warn" },
    defs: "figure-defs",
    legend: "legend",
    samples: { base: "lg-base", accent: "lg-accent", bad: "lg-bad", box: "lg-box", open: "lg-open" },
    timeline: "tl", grid: "grid", tick: "tick", period: "period", review: "review", mark: "mark", lane: "lane-label", muted: "muted", today: "today",
  },
})

/** The classes and attributes of what the page writes around its documents: the side bar, the head, the banner, a file. */
export interface Around {
  classes: {
    /** The state of the compilation while one runs, or after one failed. */
    busy: string
    failed: string
    /** The light before the state's words. */
    dot: string
    /** The number of issues of a module, beside its document; nought, in a quieter colour. */
    badge: string
    zero: string
    /** The title of a document in the navigation, and its file under it. */
    title: string
    file: string
    /** The choice of a node and the buttons of its views. */
    nodePick: string
    nodeViews: string
    /** The banner of a failed compilation, of the last changes. */
    error: string
    changes: string
    /** A document that takes the whole width: one with a figure, a file. */
    wide: string
    /** The Markdown of a document, its text in a terminal and the command before it, a file of JSON. */
    source: string
    terminal: string
    prompt: string
    json: string
    /** A place reached from a reference, lit for a moment. */
    flash: string
  }
  /** The classes of the parts of a file of JSON: a key, a text, a literal (true, false, null), a number. */
  json: { key: string; text: string; literal: string; number: string }
  /** The date a button of the side bar shows. */
  /** The date a button shows; the form that amends a value and its buttons, the fields it reads (since g86). */
  attributes: { date: string; amendForm: string; preview: string; record: string; field: string }
  /** The parts of that form: its result; its fields, named as trame dev reads what the page posts. */
  amend: {
    form: string
    result: string
    fields: { node: string; path: string; value: string; unit: string; why: string; by: string; from: string; source: string; dryRun: string }
  }
}

/**
 * Around the documents
 * The page's style sheet knows what the page writes around a document by these names: the state of the compilation
 * and its light, a module's badge of issues, the choice of a node, the banners, a document as wide as the page, the
 * three renderings of a file.
 */
export const AroundMarkup = decision<Around>({
  owner: "trame",
  value: {
    classes: {
      busy: "busy", failed: "failed", dot: "dot", badge: "badge", zero: "zero", title: "t", file: "f",
      nodePick: "node-pick", nodeViews: "node-views", error: "error", changes: "changes", wide: "wide",
      source: "source", terminal: "term", prompt: "t-prompt", json: "json", flash: "flash",
    },
    json: { key: "j-key", text: "j-str", literal: "j-lit", number: "j-num" },
    attributes: { date: "data-date", amendForm: "data-amend-form", preview: "data-preview", record: "data-record", field: "data-field" },
    amend: {
      form: "amend", result: "amend-result",
      fields: { node: "node", path: "path", value: "value", unit: "unit", why: "why", by: "by", from: "from", source: "source", dryRun: "dryRun" },
    },
  },
})

/** The classes and attributes of the explorer of a graph too large to be read whole. */
export interface Explorer {
  classes: {
    /** The explorer, its bar, the field that goes to a node, the hint, the trail of the nodes visited. */
    explorer: string
    bar: string
    find: string
    hint: string
    trail: string
    /** The drawing; the map of the layers, and the map when a box lights its links. */
    graph: string
    map: string
    lighting: string
    /** A layer: its frame, its rank; the rail that ties the layers to the node in focus. */
    group: string
    frame: string
    rank: string
    rail: string
    /** A box of the map, a segment of its strip of statuses (none: the nodes without a status), a link between boxes. */
    box: string
    segment: string
    none: string
    link: string
    /** What is lit, what is chosen; where the links of the box under the pointer are drawn again, over the boxes. */
    lit: string
    selected: string
    top: string
    /** The box that shows the rest of a layer's neighbours. */
    more: string
  }
  /** What the page reads back when the person acts on the explorer. */
  attributes: {
    /** The explorer a node box moves, and the node it moves to (the document's attribute of a node). */
    explore: string
    /** The explorer a box of the map opens, and the box it is. */
    box: string
    place: string
    /** The explorer whose layer shows all its neighbours, and the layer. */
    more: string
    layer: string
    /** The explorer a field moves. */
    find: string
    /** The two boxes a link ties; the box open on a map. */
    from: string
    to: string
    selected: string
  }
  /** Between the layer and the module of a box; between the two boxes of a link. */
  joints: { box: string; pair: string }
  /** Before the number of an explorer: its identifier; after it, the identifier of the nodes its field suggests. */
  ids: { explorer: string; suggestions: string }
}

/**
 * The explorer of a graph
 * The page's style sheet paints the explorer by these classes, and its script finds what the person acted on by these
 * attributes. A box of the map is named by its layer and its module; a link by its two boxes.
 */
export const ExplorerMarkup = decision<Explorer>({
  owner: "trame",
  value: {
    classes: {
      explorer: "explorer", bar: "explorer-bar", find: "explorer-find", hint: "explorer-hint", trail: "trail",
      graph: "explorer-graph", map: "explorer-map", lighting: "lighting",
      group: "explorer-group", frame: "frame", rank: "rank", rail: "explorer-rail",
      box: "map-box", segment: "map-seg", none: "none", link: "map-link",
      lit: "lit", selected: "selected", top: "map-top", more: "more",
    },
    attributes: {
      explore: "data-explore", box: "data-explore-box", place: "data-box", more: "data-explore-more", layer: "data-layer",
      find: "data-explore-find", from: "data-a", to: "data-b", selected: "data-selected",
    },
    joints: { box: "|", pair: ">" },
    ids: { explorer: "f", suggestions: "-nodes" },
  },
})
