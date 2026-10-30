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
  }
  /** Before the key of a vocabulary value: the class of an outcome, a validity, a severity (a status: the page's). */
  prefixes: { outcome: string; validity: string; severity: string }
  /** What the page's script reads: the node a reference leads to, the document, the view a button opens, a figure to draw. */
  attributes: { reference: string; doc: string; view: string; node: string; figure: string }
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
      validity: "validity", summary: "summary", intro: "intro", figure: "figure", figureScroll: "figure-scroll",
    },
    prefixes: { outcome: "oc-", validity: "va-", severity: "sev-" },
    attributes: { reference: "data-ref", doc: "data-doc", view: "data-view", node: "data-node", figure: "data-figure" },
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
